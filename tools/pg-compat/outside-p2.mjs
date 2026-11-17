import { writeFileChecked } from './file-io.mjs';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { read, sha, references, metadata } from './lib.mjs';
import { extractFunction, legacyUtility } from './legacy.mjs';
import { clientRecipes, fixedClientPlugin, rewriteMetadataEntry } from './client-protection.mjs';

export const root = fileURLToPath(new URL('../..', import.meta.url));
export const baselinePath = path.join(root, 'reports/pg-outside-p2/baseline.json');
export const receiptPath = path.join(root, 'reports/pg-outside-p2/applied.json');

function downloadBody(source, index) {
  const matches = [...source.matchAll(new RegExp(`(?:^|,)${index}:\\[\\(function\\(t,e\\)\\{`, 'g'))];
  assert.equal(matches.length, 1, 'download module boundary');
  const start = matches[0].index + matches[0][0].indexOf('function');
  const code = extractFunction(source.slice(start), 'function(t,e)');
  return { start, end: start + code.length, code };
}

// 两个 engine 只替换同构下载函数，保留各自模块编号、依赖与其他引擎实现。
export function patchEngine(source, family, ref) {
  const expected = family === 'modern'
    ? 'ac96abf3247f50538a2fdadebb3840f4ff3fbc7849c31cf41854cabe025c94c9'
    : '987256ff5caa463250587ed32c1b7a926e8b3d1307aad2226bb2b9d437c57c9b';
  assert.equal(sha(source), expected, 'unverified engine');
  const old = downloadBody(source, family === 'modern' ? 48 : 38);
  return source.slice(0, old.start) + downloadBody(ref.engine, 48).code + source.slice(old.end);
}

// 仅切换本次本地默认 main；同名远端 bundle 可能没有新哈希文件，保留其原版本。
export function selectLocalMain(engine, expected, replacement, configVersion) {
  const anchor = '"string"==typeof o?s=a=o:o&&(s=o.config,a=o.index);';
  assert.equal(engine.split(anchor).length, 2, 'bundle version selector');
  return engine.replace(anchor, anchor + 'if(n==="main"&&r==="assets/main"&&a===' + JSON.stringify(expected) + '&&s===' + JSON.stringify(configVersion) + '){a=' + JSON.stringify(replacement) + ';}');
}

export function planOutside(generators) {
  const baselineText = read(baselinePath), baseline = JSON.parse(baselineText);
  const baselineHash = sha(baselineText);
  const receipt = fs.existsSync(receiptPath) ? JSON.parse(read(receiptPath)) : { baselineHash, games: [] };
  assert.equal(receipt.baselineHash, baselineHash, 'outside baseline changed');
  assert.equal(baseline.games.length, 117);
  assert.equal(new Set(baseline.games.map(g => g.id)).size, 117);
  const ref = references(root), plans = [], cache = new Map();
  const memo = (key, fn) => { if (!cache.has(key)) cache.set(key, fn()); return cache.get(key); };
  for (const game of baseline.games) {
    const inputs = [...Object.values(game.files), ...game.plugins];
    for (const f of inputs) assert.equal(sha(fs.readFileSync(path.join(root, f.path))), f.sha256, `${f.path}: original resource changed`);
    for (const [p, hash] of [[game.mainPath, game.mainSha256], [game.cfgPath, game.configSha256], ...(game.boot ? [[game.boot.path, game.boot.sha256]] : [])]) {
      assert.equal(sha(fs.readFileSync(path.join(root, p))), hash, `${p}: original input changed`);
    }
    const done = receipt.games.find(g => g.id === game.id);
    if (done) {
      for (const f of done.files) assert.equal(sha(fs.readFileSync(path.join(root, f.path))), f.sha256, `${f.path}: applied resource changed`);
      plans.push({ id: game.id, alreadyApplied: true, actions: [], pending: done.pending });
      continue;
    }
    for (const f of inputs) {
      const p = f.manifest || f.manifestPath;
      if (p) assert.equal(sha(read(path.join(root, p))), f.manifestSha256, `${p}: manifest changed`);
    }
    const actions = [], outputs = [], pending = [];
    const add = (relative, contents, kind) => {
      if (relative.endsWith('.js')) new vm.Script(contents, { filename: relative });
      const file = path.join(root, relative);
      if (kind === 'asset' && fs.existsSync(file)) assert.equal(read(file), contents, `${relative}: refuse to overwrite asset`);
      outputs.push({ path: relative, sha256: sha(contents) });
      if (!fs.existsSync(file) || read(file) !== contents) actions.push({ path: relative, contents, kind, sha256: sha(contents), beforeSha256: fs.existsSync(file) ? sha(fs.readFileSync(file)) : null });
    };
    const resource = (oldPath, contents) => {
      const filename = `${path.posix.basename(oldPath).split('.')[0]}.${sha(contents).slice(0, 8)}.js`;
      const p = path.posix.join(path.posix.dirname(oldPath), filename);
      add(p, contents, 'asset');
      return filename;
    };
    const shell = game.files.shell;
    const newShell = memo('shell:' + shell.sha256, () => generators.shell(read(path.join(root, shell.path))));
    const shellName = resource(shell.path, newShell);
    const shellManifest = read(path.join(root, shell.manifest));
    assert.equal(shellManifest.split(path.posix.basename(shell.path)).length, 2);
    add(shell.manifest, shellManifest.replace(path.posix.basename(shell.path), shellName), 'manifest');

    const main = generators.main(read(path.join(root, game.mainPath)), game);
    const mainName = resource(game.mainPath, main);
    const engine = patchEngine(read(path.join(root, game.files.engine.path)), game.family, ref);
    const engineWithMain = selectLocalMain(engine, path.posix.basename(game.mainPath).split('.')[1], mainName.split('.')[1], path.posix.basename(game.cfgPath).split('.')[1]);
    const engineName = resource(game.files.engine.path, engineWithMain);
    const engineManifest = read(path.join(root, game.files.engine.manifest));
    const oldEngineName = path.posix.basename(game.files.engine.path);
    assert.equal(engineManifest.split(oldEngineName).length, 2);
    add(game.files.engine.manifest, engineManifest.replace(oldEngineName, engineName), 'manifest');

    const utility = game.files.utility, utilitySource = read(path.join(root, utility.path));
    let newUtility;
    if (utility.sha256 === 'ee48aa52876a3295120e5ecf218e8f70b013157475b6ffe9558e6980a2980a0f') newUtility = ref.utility;
    else if (utility.sha256 === 'abeb5dba8ece44530ba1d84ab2c52cb6276e192169c655f0a3965d2616cb9ba8') newUtility = legacyUtility(utilitySource);
    else newUtility = generators.utility?.(utilitySource, game);
    if (newUtility) {
      const name = resource(utility.path, newUtility);
      add(utility.manifest, rewriteMetadataEntry(read(path.join(root, utility.manifest)), './' + name), 'manifest');
    } else pending.push({ path: utility.path, reason: '独立验证尚未支持该 utility，不修改' });
    for (const plugin of game.plugins) {
      const source = read(path.join(root, plugin.path));
      const recipe = clientRecipes.find(r => r.sha256 === plugin.sha256);
      const fixed = memo('plugin:' + plugin.sha256, () => recipe ? fixedClientPlugin(source, recipe) : generators.client?.(source, plugin));
      if (!fixed) { pending.push({ path: plugin.path, reason: '独立验证尚未支持该插件，不修改' }); continue; }
      const name = resource(plugin.path, fixed);
      const manifest = read(path.join(root, plugin.manifestPath));
      assert.equal(path.posix.basename(metadata(manifest).exports._$meta.entry), path.posix.basename(plugin.path));
      add(plugin.manifestPath, rewriteMetadataEntry(manifest, './' + name), 'manifest');
    }
    assert.ok(actions.every(a => a.path.startsWith(game.id + '/')), 'scope escape');
    plans.push({ id: game.id, actions, outputs, pending });
  }
  return { baselineHash, receipt, plans };
}

export function writeOutside(result) {
  const actions = result.plans.flatMap(p => p.actions);
  assert.equal(new Set(actions.map(a => a.path)).size, actions.length, 'duplicate action');
  for (const action of actions) {
    const p = path.join(root, action.path);
    assert.equal(fs.existsSync(p) ? sha(fs.readFileSync(p)) : null, action.beforeSha256, `${action.path}: changed after planning`);
  }
  // 所有目标的指纹、函数配方和语法通过后，先写新资源，最后切清单；原文件不覆盖。
  for (const action of actions.filter(a => a.kind === 'asset')) writeFileChecked(path.join(root, action.path), action.contents, { flag: 'wx' });
  for (const action of actions.filter(a => a.kind === 'manifest')) writeFileChecked(path.join(root, action.path), action.contents);
  for (const p of result.plans.filter(p => !p.alreadyApplied)) result.receipt.games.push({ id: p.id, pending: p.pending, files: p.outputs });
  writeFileChecked(receiptPath, JSON.stringify(result.receipt, null, 2) + '\n');
}

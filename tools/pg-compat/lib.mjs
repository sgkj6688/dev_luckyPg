import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { isNative, readHistorical, nativeGame } from './native-layout.mjs';
import { removeEngineCorruption } from './protection.mjs';
import { legacyShell, legacyEngine, legacyUtility, legacyUtilityManifest } from './legacy.mjs';

export const sha = value => createHash('sha256').update(value).digest('hex');
export const read = file => readFileSync(file, 'utf8');
export const legacyComponentFolders = { shell: '3c4695a542', engine: '0bc343f586', utility: '99212c6ec4' };
export const foldersFor = game => game.family === 'legacy' ? legacyComponentFolders : componentFolders;
export const componentFolders = { shell: '984721902a', engine: 'c03a2652ad', utility: '705f29d781' };

export function metadata(source) {
  const exports = {}, dependencies = [];
  vm.runInNewContext(source, {
    cc: {},
    System: { register(...args) {
      dependencies.push(...(args.find(Array.isArray) || []));
      const declaration = args.at(-1)((key, value) => {
        if (typeof key === 'object') Object.assign(exports, key);
        else exports[key] = value;
      }, { meta: {} });
      declaration.execute();
    } },
  }, { timeout: 1000 });
  return { exports: JSON.parse(JSON.stringify(exports)), dependencies };
}

export function snapshotGame(root, game) {
  const files = {};
  const htmlPath = `${game.id}/index.html`;
  files.html = { path: htmlPath, sha256: sha(readFileSync(path.join(root, htmlPath))) };
  const native = isNative() && nativeGame(game.id);
  if (native) game={...game,family:native.shellDir==='3c4695a542/'?'legacy':'modern'};
  for (const [kind, folder] of Object.entries(foldersFor(game))) {
    const manifestPath = `${native?native.sharedPath.slice(1):game.id+'/shared/'}${folder}/${kind === 'shell' ? 'index.json' : 'index.js'}`;
    const source = read(path.join(root, manifestPath));
    const meta = kind === 'shell' ? JSON.parse(source) : metadata(source);
    const entry = kind === 'shell' ? meta.main : kind === 'engine' ? meta.dependencies[0] : meta.exports._$meta.entry;
    const assetPath = path.posix.join(path.posix.dirname(manifestPath), entry);
    files[kind] = { manifest: manifestPath, manifestSha256: sha(source), path: assetPath, sha256: sha(readFileSync(path.join(root, assetPath))) };
  }
  return { ...game, files };
}

export function replaceOnce(source, needle, replacement, label) {
  assert.equal(source.split(needle).length, 2, `${label}: expected one exact anchor`);
  return source.replace(needle, () => replacement);
}

function functionRange(source, marker) {
  const start = source.indexOf(marker);
  assert.ok(start >= 0, `missing ${marker}`);
  const open = source.indexOf('{', start);
  let depth = 0, quote = '', comment = '';
  for (let i = open; i < source.length; i++) {
    const c = source[i], next = source[i + 1];
    if (comment === '//') { if (c === '\n') comment = ''; continue; }
    if (comment === '/*') { if (c === '*' && next === '/') { comment = ''; i++; } continue; }
    if (quote) { if (c === '\\') i++; else if (c === quote) quote = ''; continue; }
    if (c === '"' || c === "'") { quote = c; continue; }
    if (c === '/' && (next === '/' || next === '*')) { comment = c + next; i++; continue; }
    if (c === '{') depth++;
    if (c === '}' && --depth === 0) return { start, end: i + 1, text: source.slice(start, i + 1) };
  }
  throw Error(`unclosed ${marker}`);
}

export function repairResolver(source) {
  const anchor = '(_0x4dd5cc[_0x6af009(0x114)](_0xccac1a)[_0x6af009(0x604)] = _0x537e01))';
  const fixed = '(_0x4dd5cc[_0x6af009(0x114)](_0xccac1a)[_0x6af009(0x604)] = _0x537e01),\n' +
    '                                        // entry 更新后使别名解析缓存失效，避免提前查询永久指向 metadata。\n' +
    '                                        delete _0x4dd5cc[_0x6af009(0x114)](_0xccac1a)["absoluteUrl"])';
  return replaceOnce(source, anchor, fixed, 'resolver');
}

export function references(root) {
  const referenceRead = relative => isNative() ? readHistorical(relative).toString() : read(path.join(root,relative));
  const sourcePath = '1778752/shared/984721902a/996b5422dd.2536964e.js';
  const shell = referenceRead(sourcePath);
  assert.equal(sha(shell), '2536964e84372380894879caa16344222c76b1cd37c0fbfa590d04833351906a');
  const original = referenceRead('1778752/shared/984721902a/996b5422dd.5a9bd.js');
  const engine = referenceRead('1778752/shared/c03a2652ad/f5fe73e9f2.7bbd850b.js');
  const utility = referenceRead('1778752/shared/705f29d781/2533a7053a.f28a8c54.js');
  assert.equal(sha(engine), '7bbd850bac3c185cd353bf1e2efbb17b5fac5658dbc21d98bc69626c67fc0331');
  assert.equal(sha(utility), 'f28a8c549cab432a7cdae45a73f6722e00135bce19dbc528f45058d1a2300393');
  const html = referenceRead('1778752/index.html');
  const start = html.indexOf('<script id="render-guard">');
  assert.ok(start >= 0);
  const guard = html.slice(start, html.indexOf('</script>', start) + 9);
  return { shell, original, engine, utility, guard };
}

export function fixedShell(source, ref) {
  // 同族旧 shell 仅在这个无业务行为的尾部函数内有注释差异；其余必须逐字一致。
  const marker = 'function _0x17f0e6()';
  const baseRange = functionRange(ref.original, marker);
  const range = functionRange(source, marker);
  const latestRange = functionRange(ref.shell, marker);
  const base = ref.shell.slice(0, latestRange.start) + range.text + ref.shell.slice(latestRange.end);
  const commonCandidate = repairResolver(base);
  const candidate = removeEngineCorruption(commonCandidate);
  if (source === candidate) return source;
  if (source === commonCandidate) return candidate;
  const without = (text, span) => text.slice(0, span.start) + '<preserved-tail>' + text.slice(span.end);
  if (sha(source) !== sha(ref.shell)) {
    assert.equal(without(source, range), without(ref.original, baseRange), 'unsupported shell variant');
  }
  return candidate;
}

export function planGame(root, target, baseline, ref) {
  const game = snapshotGame(root, target), actions = [];
  assert.deepEqual(game.files, baseline.files, `${target.id}: local baseline changed`);
  const add = (relative, contents, kind) => {
    const absolute = path.join(root, relative);
    if (['shell', 'engine', 'utility'].includes(kind) && existsSync(absolute)) {
      assert.equal(read(absolute), contents, `${relative}: refuse to overwrite existing asset`);
    }
    if (!existsSync(absolute) || read(absolute) !== contents) actions.push({ path: relative, contents, kind, sha256: sha(contents) });
  };
  const legacy = target.family === 'legacy';
  const replacements = legacy ? {
    shell: removeEngineCorruption(legacyShell(read(path.join(root, game.files.shell.path)), ref.shell)),
    engine: legacyEngine(read(path.join(root, game.files.engine.path)), ref.engine),
    utility: legacyUtility(read(path.join(root, game.files.utility.path))),
  } : { shell: fixedShell(read(path.join(root, game.files.shell.path)), ref), engine: ref.engine, utility: ref.utility };
  if (!legacy) assert.ok(['ac96abf3247f50538a2fdadebb3840f4ff3fbc7849c31cf41854cabe025c94c9', sha(ref.engine)].includes(game.files.engine.sha256), 'unsupported engine');
  if (!legacy) assert.ok(['ee48aa52876a3295120e5ecf218e8f70b013157475b6ffe9558e6980a2980a0f', sha(ref.utility)].includes(game.files.utility.sha256), 'unsupported utility');
  for (const [kind, contents] of Object.entries(replacements)) {
    const old = game.files[kind];
    const base = path.posix.basename(old.path).split('.')[0];
    const filename = `${base}.${sha(contents).slice(0, 8)}.js`;
    add(path.posix.join(path.posix.dirname(old.path), filename), contents, kind);
    const manifest = read(path.join(root, old.manifest));
    let changed;
    if (legacy && kind === 'utility') {
      changed = legacyUtilityManifest(manifest, filename);
      assert.equal(metadata(changed).exports._$meta.entry, './' + filename);
    } else if (kind === 'utility' && old.sha256 !== sha(ref.utility)) {
      const lhs = "C[jd(-0x1ba,-0x1e3,-0x161,-0x177,'LM6R')]=";
      const rhs = "A[jT('GI%1',0x53b,0x53b,0x522,0x526)]";
      changed = replaceOnce(manifest, lhs + rhs, lhs + JSON.stringify('./' + filename).padEnd(rhs.length, ' '), 'utility entry');
      const before = metadata(manifest).exports._$meta, after = metadata(changed).exports._$meta;
      assert.deepEqual({ ...before, entry: after.entry }, after);
    } else {
      const oldName = path.posix.basename(old.path);
      changed = oldName === filename ? manifest : replaceOnce(manifest, oldName, filename, `${kind} entry`);
    }
    add(old.manifest, changed, `${kind}-manifest`);
  }
  const htmlPath = game.files.html.path, html = read(path.join(root, htmlPath));
  if (!html.includes('<script id="render-guard">')) {
    const match = html.match(/<script id="main-script"[^>]*>/g);
    assert.equal(match?.length, 1, 'main-script anchor');
    add(htmlPath, html.replace(match[0], ref.guard + match[0]), 'render-guard');
  }
  return { game: target.id, actions };
}

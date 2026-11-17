import { legacyGate } from './native-layout.mjs';
legacyGate();
import { writeFileChecked } from './file-io.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { snapshotGame, read, sha, replaceOnce } from './lib.mjs';
import { patchRetryLoader, patchTaskCallback, patchReleaseRejection, selectMainVersion } from './game.mjs';

const root = fileURLToPath(new URL('../..', import.meta.url));
const targets = JSON.parse(read(path.join(root, 'tools/pg-compat/targets.json'))).games;
const observations = JSON.parse(read(path.join(root, 'reports/pg-1926/runtime-baseline.json')));
const ids = ['80', '85', '61', '34', '1513328'];
const args = process.argv.slice(2);
const frozenPath = path.join(root, 'reports/pg-1926/main-baseline.json');
const receiptPath = path.join(root, 'reports/pg-1926/main-applied.json');
if (args.includes('--freeze')) {
  const games = ids.map(id => {
    const p = observations.games.find(x => x.id === id).mainPath.slice(1);
    return { id, path: p, sha256: sha(read(path.join(root, p))) };
  });
  writeFileChecked(frozenPath, JSON.stringify({ games }, null, 2) + '\n', { flag: 'wx' });
  console.log(JSON.stringify({ frozen: games.length }));
} else {
  const baseline = JSON.parse(read(frozenPath)), baselineHash = sha(read(frozenPath));
  const receipt = fs.existsSync(receiptPath) ? JSON.parse(read(receiptPath)) : { baselineHash, games: [] };
  assert.equal(receipt.baselineHash, baselineHash);
  const plans = [];
  for (const id of ids) {
    const done = receipt.games.find(x => x.id === id);
    if (done) {
      assert.ok(done.files.every(x => sha(read(path.join(root, x.path))) === x.sha256), `${id}: applied main files changed`);
      plans.push({ id, alreadyApplied: true, actions: [] });
      continue;
    }
    const original = baseline.games.find(x => x.id === id), src = read(path.join(root, original.path));
    assert.equal(sha(src), original.sha256, `${id}: original main changed`);
    const observed = JSON.parse(read(path.join(root, 'reports/pg-1926/main-runtime-hashes.json'))).games.find(x => x.id === id);
    assert.ok(observed?.localMatches && observed.path.slice(1) === original.path, `${id}: main runtime body not verified`);
    assert.equal(observed.sha256, original.sha256, `${id}: runtime main differs from baseline`);
    const contents = id === '80' ? patchReleaseRejection(src) : patchTaskCallback(patchRetryLoader(src), id);
    new vm.Script(contents);
    const hash = sha(contents), version = hash.slice(0, 8), mainPath = path.posix.join(path.posix.dirname(original.path), `index.${version}.js`);
    const current = snapshotGame(root, targets.find(x => x.id === id));
    const engine = read(path.join(root, current.files.engine.path));
    const shared = JSON.parse(read(path.join(root, 'reports/pg-1926/applied.json'))).games.find(x => x.game === id);
    for (const p of [current.files.engine.path, current.files.engine.manifest]) {
      assert.equal(shared?.files.find(x => x.path === p)?.sha256, sha(read(path.join(root,p))), `${id}: unrecognized current engine`);
    }
    const expected = path.posix.basename(original.path).split('.')[1];
    const configVersion = { '80':'0aa6f', '85':'fb067', '61':'8e75b', '34':'47d81', '1513328':'2a5b4' }[id];
    const selectedEngine = selectMainVersion(engine, expected, version, configVersion);
    new vm.Script(selectedEngine);
    const engineName = path.posix.basename(current.files.engine.path).split('.')[0] + '.' + sha(selectedEngine).slice(0, 8) + '.js';
    const enginePath = path.posix.join(path.posix.dirname(current.files.engine.path), engineName);
    const manifest = replaceOnce(read(path.join(root, current.files.engine.manifest)), path.posix.basename(current.files.engine.path), engineName, 'game engine entry');
    const actions = [
      { path: mainPath, contents, kind: 'main' },
      { path: enginePath, contents: selectedEngine, kind: 'engine' },
      { path: current.files.engine.manifest, contents: manifest, kind: 'engine-manifest' },
    ].map(x => ({ ...x, sha256: sha(x.contents) }));
    for (const a of actions.filter(x => x.kind !== 'engine-manifest')) {
      if (fs.existsSync(path.join(root, a.path))) assert.equal(read(path.join(root, a.path)), a.contents, 'refuse to overwrite existing asset');
    }
    plans.push({ id, original, mainPath, actions });
  }
  if (args.includes('--write')) {
    const sharedReceiptPath = path.join(root, 'reports/pg-1926/applied.json');
    const sharedReceipt = JSON.parse(read(sharedReceiptPath));
    assert.ok(ids.every(id => sharedReceipt.games.some(x => x.game === id)), 'apply shared fixes first');
    // 所有版本和语法验证结束后才写资源；清单最后切换，不删除旧文件。
    const actions = plans.flatMap(x => x.actions);
    for (const a of actions.filter(x => x.kind !== 'engine-manifest')) writeFileChecked(path.join(root, a.path), a.contents);
    for (const a of actions.filter(x => x.kind === 'engine-manifest')) writeFileChecked(path.join(root, a.path), a.contents);
    for (const p of plans.filter(x => !x.alreadyApplied)) {
      const files = p.actions.map(({ path, sha256 }) => ({ path, sha256 }));
      receipt.games.push({ id: p.id, original: p.original.path, mainPath: p.mainPath, files });
      const previous = sharedReceipt.games.find(x => x.game === p.id);
      for (const f of files) {
        const old = previous.files.find(x => x.path === f.path);
        if (old) old.sha256 = f.sha256;
        else previous.files.push(f);
      }
    }
    writeFileChecked(receiptPath, JSON.stringify(receipt, null, 2) + '\n');
    writeFileChecked(sharedReceiptPath, JSON.stringify(sharedReceipt, null, 2) + '\n');
  }
  console.log(JSON.stringify({ mode: args.includes('--write') ? 'write' : 'dry-run', games: plans.map(p => ({ id: p.id, alreadyApplied: !!p.alreadyApplied, actions: p.actions.map(({ contents, ...x }) => x) })) }, null, 2));
}

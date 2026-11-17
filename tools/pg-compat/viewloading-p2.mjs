import { writeFileChecked } from './file-io.mjs';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { sha, read } from './lib.mjs';
import { extractFunction } from './legacy.mjs';

export const root = fileURLToPath(new URL('../..', import.meta.url));
export const allowedIds = '3,6,7,25,33,36,42,48,57,59,60,63,65,73,74,79,82,84,87,89,90,91,93,102,104,112,115,117,118,120,124,126,128,129,130,1338274,1372643,1381200,1473388,1572362,1615454,1635221,1747549,1850016,1879752'.split(',');
export const baselinePath = path.join(root, 'reports/pg-outside-p2/viewloading-baseline.json');
export const receiptPath = path.join(root, 'reports/pg-outside-p2/viewloading-applied.json');
const parentPath = path.join(root, 'reports/pg-outside-p2/applied.json');

// 只中和已核实的破坏回调体；事件订阅、随机延迟、校验和正常传播保持原字节。
export function patchViewLoading(source, recipe) {
  assert.equal(sha(source), recipe.sha256, 'unknown ViewLoading shell');
  const { start, end, sha256 } = recipe.callback;
  assert.ok(start >= 0 && end > start && end <= source.length, 'invalid callback range');
  const text = source.slice(start, end);
  assert.equal(sha(text), sha256, 'ViewLoading callback changed');
  assert.equal(extractFunction(text, 'function'), text, 'callback boundary changed');
  const open = text.indexOf('{') + 1;
  const body = text.slice(open, -1);
  assert.equal(Buffer.byteLength(body), body.length, 'callback must be ASCII');
  const blank = body.replace(/[^\r\n]/g, ' '), slot = /[^\r\n]{7,}/.exec(blank);
  assert.ok(slot, 'no safe return slot');
  const neutral = text.slice(0, open) + blank.slice(0, slot.index) + 'return;' + blank.slice(slot.index + 7) + '}';
  const fixed = source.slice(0, start) + neutral + source.slice(end);
  assert.equal(fixed.length, source.length);
  assert.equal(Buffer.byteLength(fixed), Buffer.byteLength(source));
  if (recipe.fixedSha256) assert.equal(sha(fixed), recipe.fixedSha256, 'unexpected ViewLoading output');
  new vm.Script(fixed);
  return fixed;
}

// 回执不能通过漏记文件把未校验的清单误判为已完成。
export function verifyAppliedGame(game, done, recipe, manifest) {
  const name = path.posix.basename(game.source.path).split('.')[0] + '.' + recipe.fixedSha256.slice(0, 8) + '.js';
  const output = path.posix.join(path.posix.dirname(game.source.path), name);
  assert.deepEqual(done.files.map(f => f.path).sort(), [output, game.manifest.path].sort(), 'stage receipt output set changed');
  assert.equal(done.files.find(f => f.path === output).sha256, recipe.fixedSha256, 'stage asset digest changed');
  assert.equal(JSON.parse(manifest).main, name, 'stage manifest entry changed');
  assert.equal(manifest.split(name).length, 2, 'stage manifest main anchor');
  assert.equal(sha(manifest.replace(name, path.posix.basename(game.source.path))), game.manifest.sha256, 'non-entry manifest fields changed');
}

export function planViewLoading() {
  const baselineText = read(baselinePath), baseline = JSON.parse(baselineText), baselineHash = sha(baselineText);
  assert.deepEqual(baseline.games.map(g => g.id), allowedIds, 'scope must match the authorized 45 games');
  const parentText = read(parentPath), parent = JSON.parse(parentText);
  const receipt = fs.existsSync(receiptPath) ? JSON.parse(read(receiptPath)) : undefined;
  if (receipt) {
    assert.equal(receipt.baselineHash, baselineHash);
    assert.deepEqual(receipt.games.map(g => g.id), allowedIds);
    for (const game of receipt.games) {
      const original = baseline.games.find(g => g.id === game.id);
      verifyAppliedGame(original, game, baseline.recipes.find(r => r.sha256 === original.source.sha256), read(path.join(root, original.manifest.path)));
      for (const f of game.files) {
        assert.equal(sha(fs.readFileSync(path.join(root, f.path))), f.sha256, `${f.path}: applied output changed`);
        assert.equal(parent.games.find(g => g.id === game.id)?.files.find(x => x.path === f.path)?.sha256, f.sha256, 'parent receipt disagrees');
      }
    }
  } else assert.equal(sha(parentText), baseline.parentReceiptSha256, 'parent receipt changed; preserve parallel work');
  const plans = [];
  for (const game of baseline.games) {
    const source = read(path.join(root, game.source.path));
    assert.equal(sha(source), game.source.sha256, `${game.id}: original shell changed`);
    if (receipt) { plans.push({ id: game.id, alreadyApplied: true, actions: [] }); continue; }
    const manifest = read(path.join(root, game.manifest.path));
    assert.equal(sha(manifest), game.manifest.sha256, `${game.id}: manifest changed`);
    assert.equal(JSON.parse(manifest).main, path.posix.basename(game.source.path));
    const recipe = baseline.recipes.find(r => r.sha256 === game.source.sha256);
    assert.ok(recipe, 'missing independently frozen callback');
    const fixed = patchViewLoading(source, recipe), hash = sha(fixed);
    const name = path.posix.basename(game.source.path).split('.')[0] + '.' + hash.slice(0, 8) + '.js';
    const output = path.posix.join(path.posix.dirname(game.source.path), name);
    const oldName = path.posix.basename(game.source.path);
    assert.equal(manifest.split(oldName).length, 2, 'shell manifest main anchor');
    const next = manifest.replace(oldName, name);
    assert.deepEqual(JSON.parse(next), { ...JSON.parse(manifest), main: name });
    const files = [{ path: output, sha256: hash }, { path: game.manifest.path, sha256: sha(next) }];
    const actions = [];
    if (fs.existsSync(path.join(root, output))) assert.equal(read(path.join(root, output)), fixed, 'refuse to overwrite an existing asset');
    else actions.push({ ...files[0], contents: fixed, kind: 'asset', before: null });
    actions.push({ ...files[1], contents: next, kind: 'manifest', before: game.manifest.sha256 });
    assert.ok(actions.every(a => a.path.startsWith(game.id + '/')));
    const parentGame = parent.games.find(g => g.id === game.id);
    assert.equal(parentGame?.files.find(f => f.path === game.source.path)?.sha256, game.source.sha256);
    assert.equal(parentGame?.files.find(f => f.path === game.manifest.path)?.sha256, game.manifest.sha256);
    for (const f of files) {
      const existing = parentGame.files.find(x => x.path === f.path);
      if (existing) existing.sha256 = f.sha256;
      else parentGame.files.push(f);
    }
    plans.push({ id: game.id, files, actions });
  }
  return { baselineHash, parentBefore: sha(parentText), parent, plans };
}

export function writeViewLoading(plan) {
  if (plan.plans.every(p => p.alreadyApplied)) return;
  assert.equal(sha(read(parentPath)), plan.parentBefore, 'parent receipt changed after planning');
  assert.ok(!fs.existsSync(receiptPath), 'stage receipt appeared after planning');
  const actions = plan.plans.flatMap(p => p.actions);
  for (const action of actions) {
    const p = path.join(root, action.path);
    assert.equal(fs.existsSync(p) ? sha(fs.readFileSync(p)) : null, action.before, `${action.path}: changed after planning`);
  }
  // 全部校验完成后先写新资源，再切45份清单；聚合回执保留旧资源，仅新增本阶段结果。
  for (const a of actions.filter(a => a.kind === 'asset')) writeFileChecked(path.join(root, a.path), a.contents, { flag: 'wx' });
  for (const a of actions.filter(a => a.kind === 'manifest')) writeFileChecked(path.join(root, a.path), a.contents);
  const parentText = JSON.stringify(plan.parent, null, 2) + '\n';
  writeFileChecked(parentPath, parentText);
  writeFileChecked(receiptPath, JSON.stringify({ baselineHash: plan.baselineHash, parentReceiptBeforeSha256: plan.parentBefore, parentReceiptAfterSha256: sha(parentText), games: plan.plans.map(({ id, files }) => ({ id, files })) }, null, 2) + '\n', { flag: 'wx' });
}

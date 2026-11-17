import { legacyGate } from './native-layout.mjs';
legacyGate();
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { writeFileChecked as writeFileSync } from './file-io.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { read, sha, references, snapshotGame, planGame, foldersFor } from './lib.mjs';

const root = path.resolve(fileURLToPath(new URL('../..', import.meta.url)));
const args = process.argv.slice(2);
const option = name => args.includes(name) ? args[args.indexOf(name) + 1] : undefined;
const targets = JSON.parse(read(path.join(root, 'tools/pg-compat/targets.json'))).games;
const requested = option('--games')?.split(',') || targets.map(x => x.id);
assert.ok(requested.length && requested.every(id => targets.some(x => x.id === id)), 'games must be in the approved target list');
const selected = targets.filter(x => requested.includes(x.id));
if (args.includes('--freeze')) {
  const output = option('--output');
  assert.ok(output, '--freeze requires --output');
  const result = { schemaVersion: 1, games: selected.map(x => snapshotGame(root, x)) };
  mkdirSync(path.dirname(path.resolve(root, output)), { recursive: true });
  writeFileSync(path.resolve(root, output), JSON.stringify(result, null, 2) + '\n', { flag: 'wx' });
  console.log(JSON.stringify({ output, games: result.games.length }));
} else {
  const baselinePath = option('--baseline') || 'reports/pg-1926/baseline.json';
  const baseline = JSON.parse(read(path.resolve(root, baselinePath)));
  const legacyBaselinePath = path.join(root, 'reports/pg-1926/legacy-baseline.json');
  const legacyBaseline = existsSync(legacyBaselinePath) ? JSON.parse(read(legacyBaselinePath)) : { games: [] };
  const baselineHash = sha(read(path.resolve(root, baselinePath)));
  const receiptPath = path.join(root, 'reports/pg-1926/applied.json');
  const receipt = existsSync(receiptPath) ? JSON.parse(read(receiptPath)) : { baselineHash, games: [] };
  assert.equal(receipt.baselineHash, baselineHash, 'application receipt belongs to a different baseline');
  const legacyBaselineHash = existsSync(legacyBaselinePath) ? sha(read(legacyBaselinePath)) : undefined;
  if (receipt.legacyBaselineHash) assert.equal(receipt.legacyBaselineHash, legacyBaselineHash, 'legacy baseline changed');
  const ref = references(root);
  const plans = [], blocked = [];
  for (const target of selected) {
    try {
      const done = receipt.games.find(x => x.game === target.id);
      if (done) {
        assert.ok(done.files.every(x => existsSync(path.join(root, x.path)) && sha(readFileSync(path.join(root, x.path))) === x.sha256), `${target.id}: applied files changed`);
        plans.push({ game: target.id, alreadyApplied: true, actions: [] });
        continue;
      }
      const frozen = (target.family === 'legacy' ? legacyBaseline : baseline).games.find(x => x.id === target.id);
      assert.ok(frozen, 'missing frozen baseline');
      plans.push(planGame(root, target, frozen, ref));
    } catch (error) { blocked.push({ game: target.id, reason: error.message }); }
  }
  if (args.includes('--write')) {
    const observationsPath = option('--observations');
    assert.ok(observationsPath, '--write requires real runtime observations');
    const observations = JSON.parse(read(path.resolve(root, observationsPath)));
    for (const plan of plans) {
      const observation = observations.games.find(x => x.id === plan.game);
      assert.ok(observation?.entryPath === `/${plan.game}/index.html`, `missing runtime entry for ${plan.game}`);
      for (const [kind, folder] of Object.entries(foldersFor(selected.find(x => x.id === plan.game)))) {
        const observed = observation.components?.[kind];
        assert.ok(observed?.path?.startsWith(`/${plan.game}/shared/${folder}/`), `unapproved active ${kind} for ${plan.game}`);
        assert.equal(sha(readFileSync(path.join(root, observed.path))), observed.sha256, `runtime ${kind} differs from local source`);
      }
    }
    assert.equal(blocked.length, 0, 'blocked games: no partial writes');
    // 先完成全部校验，再写新资源和清单；不删除旧文件，不触碰清单以外的项目。
    const allActions = plans.flatMap(plan => plan.actions);
    for (const action of allActions.filter(x => ['shell', 'engine', 'utility'].includes(x.kind))) writeFileSync(path.join(root, action.path), action.contents);
    for (const action of allActions.filter(x => !['shell', 'engine', 'utility'].includes(x.kind))) writeFileSync(path.join(root, action.path), action.contents);
    for (const plan of plans.filter(x => !x.alreadyApplied)) receipt.games.push({ game: plan.game, files: plan.actions.map(({ path, sha256 }) => ({ path, sha256 })) });
    receipt.legacyBaselineHash = legacyBaselineHash;
    writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + '\n');
  }
  console.log(JSON.stringify({ mode: args.includes('--write') ? 'write' : 'dry-run', blocked, games: plans.map(x => ({ game: x.game, alreadyApplied: !!x.alreadyApplied, changes: x.actions.map(({ contents, ...rest }) => rest) })) }, null, 2));
  if (blocked.length) process.exitCode = 1;
}

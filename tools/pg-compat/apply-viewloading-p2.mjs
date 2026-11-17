import { legacyGate } from './native-layout.mjs';
legacyGate();
import assert from 'node:assert/strict';
import { planViewLoading, writeViewLoading } from './viewloading-p2.mjs';
const args = process.argv.slice(2);
assert.ok(args.every(a => a === '--write'), 'only --write is supported');
const plan = planViewLoading();
if (args.includes('--write')) writeViewLoading(plan);
console.log(JSON.stringify({ mode: args.includes('--write') ? 'write' : 'dry-run', games: plan.plans.length, alreadyApplied: plan.plans.filter(p => p.alreadyApplied).length, assets: plan.plans.flatMap(p => p.actions).filter(a => a.kind === 'asset').length, manifests: plan.plans.flatMap(p => p.actions).filter(a => a.kind === 'manifest').length }, null, 2));

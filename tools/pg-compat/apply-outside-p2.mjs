import { legacyGate } from './native-layout.mjs';
legacyGate();
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { sha } from './lib.mjs';
import { planOutside, writeOutside } from './outside-p2.mjs';
import { patchShellP2 } from './outside-shell-p2.mjs';
import { applyMainRecipe } from './outside-main-p2.mjs';
import { patchVariantUtility, patchVariantClient } from './outside-variants-p2.mjs';

const args = process.argv.slice(2);
assert.ok(args.every(arg => arg === '--write'), 'only --write is supported');
const json = name => JSON.parse(fs.readFileSync(new URL(name, import.meta.url)));
const shells = json('./outside-shell-p2-recipes.json');
const mains = json('./outside-main-p2-recipes.json').recipes;
const clients = json('./outside-client-p2-recipes.json');
const result = planOutside({
  shell(source) {
    const recipe = shells.find(r => r.sha256 === sha(source));
    assert.ok(recipe, 'shell has no independently validated recipe');
    return patchShellP2(source, recipe).source;
  },
  main(source, game) {
    const recipe = mains.find(r => r.id === game.id && r.sha256 === game.mainSha256);
    assert.ok(recipe, 'main has no independently validated recipe');
    return applyMainRecipe(source, recipe);
  },
  utility: patchVariantUtility,
  client: source => patchVariantClient(source, clients),
});
if (args.includes('--write')) writeOutside(result);
console.log(JSON.stringify({
  mode: args.includes('--write') ? 'write' : 'dry-run',
  games: result.plans.length,
  alreadyApplied: result.plans.filter(p => p.alreadyApplied).length,
  assets: result.plans.flatMap(p => p.actions).filter(a => a.kind === 'asset').length,
  manifests: result.plans.flatMap(p => p.actions).filter(a => a.kind === 'manifest').length,
  pending: result.plans.flatMap(p => p.pending.map(item => ({ id: p.id, ...item }))),
}, null, 2));

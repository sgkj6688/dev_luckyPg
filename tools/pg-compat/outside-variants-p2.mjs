import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { sha } from './lib.mjs';
import { fixedClientPlugin } from './client-protection.mjs';

const utilities = JSON.parse(fs.readFileSync(new URL('./outside-utility-p2-recipes.json', import.meta.url)));

// 不同版本分别验证内部重置与公开clear；仅移除该版本四字节的内部调用。
export function patchVariantUtility(source) {
  const recipe = utilities.find(r => r.sha256 === sha(source));
  assert.ok(recipe, 'unverified variant utility');
  const p = recipe.patch;
  assert.equal(source.slice(p.start, p.end), p.original);
  assert.equal(sha(source.slice(p.start, p.end)), p.sha256);
  const fixed = source.slice(0, p.start) + p.replacement + source.slice(p.end);
  assert.equal(fixed.length, source.length);
  assert.equal(sha(fixed), recipe.fixedSha256);
  new vm.Script(fixed);
  return fixed;
}

export function patchVariantClient(source, recipes) {
  const recipe = recipes.find(r => r.sha256 === sha(source));
  assert.ok(recipe, 'unverified variant client');
  const fixed = fixedClientPlugin(source, recipe);
  assert.equal(sha(fixed), recipe.fixedSha256);
  return fixed;
}

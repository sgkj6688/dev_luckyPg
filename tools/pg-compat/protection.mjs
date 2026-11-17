import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { extractFunction } from './legacy.mjs';
const recipes = JSON.parse(readFileSync(new URL('./protection-recipes.json', import.meta.url)));
const hash = value => createHash('sha256').update(value).digest('hex');
const targets = ['renderer.render', 'ComponentScheduler.startInvoker', 'eventManager.dispatchEvent', 'Skeleton/Sprite 渲染方法', 'director.getActionManager'];

export function protectionCallbacks(source) {
  const recipe = Object.values(recipes).find(x => source.includes('function ' + x.wrapper + '('));
  assert.ok(recipe, 'unknown engine protection wrapper');
  const callbacks = [];
  let pos = 0;
  while ((pos = source.indexOf(recipe.wrapper + '(function', pos)) >= 0) {
    const start = source.indexOf('function', pos), text = extractFunction(source.slice(start), 'function');
    callbacks.push({ start, end:start + text.length, text });
    pos = start + text.length;
  }
  assert.equal(callbacks.length, 5, 'unexpected engine protection callbacks');
  return { recipe, callbacks };
}

export function removeEngineCorruption(source) {
  const { recipe, callbacks } = protectionCallbacks(source);
  if (callbacks.every(x => x.text.includes('PG_KEEP_ENGINE_STATE'))) return source;
  callbacks.forEach((x, i) => assert.equal(hash(x.text), recipe.functions[i].sha256, 'engine protection callback changed'));
  let result = source;
  for (let i = callbacks.length - 1; i >= 0; i--) {
    const x = callbacks[i];
    const body = 'function () {\n' +
      '            // PG_KEEP_ENGINE_STATE：保留事件订阅，不再改写 ' + targets[i] + ' 破坏已初始化的引擎状态。\n' +
      '        }';
    result = result.slice(0, x.start) + body + result.slice(x.end);
  }
  return result;
}

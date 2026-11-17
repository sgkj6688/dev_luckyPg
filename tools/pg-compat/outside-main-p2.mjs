import assert from 'node:assert/strict';
import { sha as hash } from './lib.mjs';
// 仅接受独立回归过的原始主包及函数范围；其余业务字节保持不变。
export function applyMainRecipe(source,recipe){assert.equal(hash(source),recipe.sha256,'unknown main version');let next=source;
 const spans=[...recipe.actions].sort((a,b)=>b.start-a.start);let previous=source.length;
 for(const a of spans){assert(a.end<=previous,'overlapping main ranges');assert.equal(hash(source.slice(a.start,a.end)),a.sha256,'main range changed');next=next.slice(0,a.start)+a.replacement+next.slice(a.end);previous=a.start;}
 if(recipe.fixedSha256)assert.equal(hash(next),recipe.fixedSha256);return next;
}

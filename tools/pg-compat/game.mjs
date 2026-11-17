import assert from 'node:assert/strict';
import { extractFunction } from './legacy.mjs';

export function moduleRange(source, name) {
  let p = source.indexOf(`'${name}':`);
  if (p < 0) p = source.indexOf(`"${name}":`);
  assert(p >= 0, `Missing module ${name}`);
  const start = source.indexOf('function(', p);
  const code = extractFunction(source.slice(start), 'function(');
  return { start, end: start + code.length, code };
}
function replaceModule(source, name, patch) {
  const m = moduleRange(source, name), code = patch(m.code);
  assert.notEqual(code, m.code, `${name}: no mutation`);
  return source.slice(0, m.start) + code + source.slice(m.end);
}

// 只在 AssetManager 模块中绑定原本缺失的局部变量；构造函数不会同步调用重试回调。
export function patchRetryLoader(source) {
  return replaceModule(source, 'AssetManager', code => {
    assert.equal([...code.matchAll(/\bloader\b/g)].length, 1, 'Expected one free loader reference');
    const use = code.search(/\bloader\b/);
    const ctor = code.lastIndexOf('return new ', use);
    assert(ctor >= 0 && use - ctor < 600, 'Unrecognized loader construction');
    return code.slice(0, ctor) + code.slice(ctor).replace('return new ', 'var loader;return loader=new ');
  });
}

const taskSpecs = {
  '85': { start: 'T(function(q,C){', method: 'T', value: 'C', consumer: 'j', queue: 'E', task: 'd', next: 'a' },
  '61': { start: 'm(function(G,a){', method: 'm', value: 'a', consumer: 'C', queue: 'd', task: 'k', next: 'B' },
  '34': { start: 'C(function(J,O){', method: 'C', value: 'O', consumer: 'Y', queue: 'k', task: 'X', next: 'H' },
  '1513328': { start: 'x(function(F,I){', method: 'x', value: 'I', consumer: 'U', queue: 'f', task: 'k', next: 'g' },
};

// 保留现有“任务失败留在队列、所有任务返回后进入重试/错误处理”的语义。
export function patchTaskCallback(source, game) {
  const s = taskSpecs[game];
  assert(s, 'No exact recipe for this game/version');
  return replaceModule(source, 'Loader', code => {
    assert(!code.includes('_pgFinish'), 'Already patched');
    const a = code.indexOf(s.start);
    assert(a >= 0 && code.indexOf(s.start, a + 1) < 0, 'Task callback anchor not unique');
    const callback = extractFunction(code.slice(a + s.method.length + 1), 'function(');
    const old = s.method + '(' + callback + ');';
    assert.equal(code.slice(a, a + old.length), old);
    const replacement = `var _pgDone=false;
function _pgFinish(_pgError,_pgValue){
  if(_pgDone)return;
  _pgDone=true;
  if(!_pgError){try{if(${s.consumer})${s.consumer}(_pgValue);}catch(_pgCaught){_pgError=_pgCaught;}}
  if(!_pgError){var _pgIndex=${s.queue}.indexOf(${s.task});if(_pgIndex>=0)${s.queue}.splice(_pgIndex,1);}
  ${s.next}();
}
try{${s.method}(_pgFinish);}catch(_pgThrown){if(_pgDone)throw _pgThrown;_pgFinish(_pgThrown);}`;
    return code.slice(0, a) + replacement + code.slice(a + old.length);
  });
}

export function patchReleaseRejection(source) {
  return replaceModule(source, 'ResourceLoader', code => {
    const a = code.indexOf('new Promise(function(A){var nR=nC;');
    assert(a >= 0 && code.indexOf('new Promise(function(A){var nR=nC;', a + 1) < 0);
    const outer = extractFunction(code.slice(a + 'new Promise('.length), 'function(A)');
    let next = outer.replace('function(A)', 'function(A,_pgReject)');
    const tail = next.lastIndexOf('});');
    assert(tail >= 0 && next.slice(tail + 3).trim() === '}');
    next = next.slice(0, tail) + '}).catch(_pgReject);' + next.slice(tail + 3);
    code = code.slice(0, a + 'new Promise('.length) + next + code.slice(a + 'new Promise('.length + outer.length);
    const b = code.indexOf("['B_']=function(Z)");
    assert(b >= 0);
    const release = extractFunction(code.slice(b + "['B_']=".length), 'function(Z)');
    assert.equal(release.split('function(a){').length - 1, 1);
    assert.equal(release.split('a(m);}):').length - 1, 1);
    const fixedRelease = release.replace('function(a){', 'function(a,_pgReject){').replace('a(m);}):', 'a(m);}).catch(_pgReject):');
    return code.slice(0, b + "['B_']=".length) + fixedRelease + code.slice(b + "['B_']=".length + release.length);
  });
}

// bundle 的 config 和 index 可独立带版本；仅替换已冻结的 main index。
export function selectMainVersion(engine, expected, replacement, configVersion) {
  const anchor = '"string"==typeof o?s=a=o:o&&(s=o.config,a=o.index);';
  assert.equal(engine.split(anchor).length, 2, 'bundle downloader version anchor');
  const change = 'if(n==="main"&&a===' + JSON.stringify(expected) + '&&s===' + JSON.stringify(configVersion) +
    '){a=' + JSON.stringify(replacement) + ';}';
  return engine.replace(anchor, anchor + change);
}

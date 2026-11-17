import assert from 'node:assert/strict';
import vm from 'node:vm';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const hash = value => createHash('sha256').update(value).digest('hex');
const recipes = JSON.parse(readFileSync(new URL('./legacy-recipes.json', import.meta.url)));

export function extractFunction(source, marker) {
  const start = source.indexOf(marker);
  assert.ok(start >= 0, `missing ${marker}`);
  const open = source.indexOf('{', start);
  let depth = 0, quote = '', comment = '';
  for (let i = open; i < source.length; i++) {
    const c = source[i], next = source[i + 1];
    if (comment === '//') { if (c === '\n') comment = ''; continue; }
    if (comment === '/*') { if (c === '*' && next === '/') { comment = ''; i++; } continue; }
    if (quote) { if (c === '\\') i++; else if (c === quote) quote = ''; continue; }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
    if (c === '/' && (next === '/' || next === '*')) { comment = c + next; i++; continue; }
    if (c === '{') depth++;
    if (c === '}' && --depth === 0) return source.slice(start, i + 1);
  }
  throw Error(`unclosed ${marker}`);
}

export function modernDecoder(source) {
  const context = {};
  const prefix = source.slice(0, source.indexOf('    !(function')).replace(/,\s*$/, ';');
  vm.runInNewContext(prefix + extractFunction(source, 'function _0xfb95('), context, { timeout: 1000 });
  return code => {
    const aliases = new Set(['_0x59eb', '_0x54628f']);
    for (let p = 0; p < 10; p++) {
      for (const m of code.matchAll(/(_0x[a-f0-9]+)\s*=\s*(_0x[a-f0-9]+)\b/g)) if (aliases.has(m[2])) aliases.add(m[1]);
    }
    return code.replace(/(_0x[a-f0-9]+)\((0x[a-f0-9]+)\)/g, (all, name, value) => aliases.has(name) ? JSON.stringify(context._0x59eb(+value)) : all);
  };
}

export function legacyRecipe(source) {
  const recipe = Object.values(recipes).find(x => x.sha256 === hash(source));
  assert.ok(recipe, 'unsupported legacy shell');
  return recipe;
}

// 只移植经验证的加载/弹窗函数，保留旧 shell 的插件接口、初始化顺序和业务代码。
export function legacyShell(source, modern) {
  const recipe = legacyRecipe(source), decode = modernDecoder(modern), changes = [];
  const mapped = code => decode(code).replace(/\b_0x[a-f0-9]+\b/g, name => recipe.map[name] || name);
  const classes = { loader: '_0x4a705d', pwd: '_0xe1d3bc', alert: '_0x1f707a' };
  for (const [group, methods] of Object.entries(recipe.methods)) {
    const cls = classes[group];
    const start = group === 'loader' ? modern.indexOf('(' + cls + '[') : modern.indexOf('(_0x376e20(' + cls + ',');
    const end = modern.indexOf('\n                ' + cls + '),', start);
    assert.ok(start >= 0 && end > start);
    const block = modern.slice(start, end), found = {};
    for (const m of block.matchAll(/_0x[a-f0-9]+\[[^\n]+?\]\[([^\n]+?)\]\s*=\s*function/g)) {
      let name; try { name = JSON.parse(decode(m[1])); } catch { continue; }
      found[name] = extractFunction(block.slice(m.index), 'function');
    }
    for (const [name, span] of Object.entries(methods)) {
      assert.equal(hash(source.slice(span.start, span.end)), span.sha256, `legacy ${group}.${name} changed`);
      assert.ok(found[name], `modern ${group}.${name} missing`);
      changes.push({ ...span, text: mapped(found[name]) });
    }
  }
  for (const [name, span] of Object.entries(recipe.constructors)) {
    let text = source.slice(span.start, span.end);
    assert.equal(hash(text), span.sha256);
    const at = text.indexOf('{') + 1;
    let init = 'this._slowLoadDisposed=false;this._slowLoadAlert=null;';
    if (name === 'loader') {
      init = 'this._resourceLoadGeneration=0;this._resourceLoadTerminal=false;';
      for (const helper of ['_isCurrentResourceLoad', '_failResourceLoad']) {
        const fn = extractFunction(modern.slice(modern.indexOf('_0x4a705d.prototype.' + helper)), 'function');
        init += 'this.' + helper + '=' + mapped(fn) + ';';
      }
    }
    changes.push({ ...span, text: text.slice(0, at) + init + text.slice(at) });
  }
  let result = source;
  for (const change of changes.sort((a, b) => b.start - a.start)) result = result.slice(0, change.start) + change.text + result.slice(change.end);
  // 旧 fetch 已支持 RequestInit；补齐 blob 包装器对 signal 的传递。
  const blobName = recipe.map._0x58bd5c, fetchName = recipe.map._0x430e4d;
  const blob = extractFunction(result, 'function ' + blobName + '(');
  const arg = blob.match(/^function \w+\(([^)]+)\)/)[1];
  const fixedBlob = blob.replace('(' + arg + ')', '(' + arg + ', options)').replace(fetchName + '(' + arg + ')', fetchName + '(' + arg + ', options)');
  assert.notEqual(blob, fixedBlob);
  result = result.replace(blob, fixedBlob);
  const spec = recipe.loader === '_0x2450ae'
    ? { registry: '_0x3fe069', name: '_0x56d301', entry: '_0x1a7b34' }
    : { registry: '_0x299bbf', name: '_0x41afc2', entry: '_0x1b51bc' };
  const re = new RegExp(spec.registry + '\\[[^\\]]+\\]\\(' + spec.name + '\\)\\[[^\\]]+\\]\\s*=\\s*' + spec.entry, 'g');
  const matches = [...result.matchAll(re)];
  assert.equal(matches.length, 1, 'legacy entry assignment');
  result = result.replace(re, match => '(' + match + ', delete ' + match.slice(0, match.indexOf('[')) + '[' + match.split('[')[1] + '["absoluteUrl"])');
  // 上面的 registry 调用直接来自唯一赋值左值，避免混淆符号重命名造成跨版本误配。
  new vm.Script(result);
  return result;
}

export function legacyEngine(source, modern) {
  assert.equal(hash(source), '987256ff5caa463250587ed32c1b7a926e8b3d1307aad2226bb2b9d437c57c9b');
  const start = source.indexOf('38:[(function(t,e){') + '38:[(function(t,e){'.length;
  const end = source.indexOf('}),{"./utilities":56}],39:', start);
  const a = modern.indexOf('48:[(function(t,e){') + '48:[(function(t,e){'.length;
  const b = modern.indexOf('}),{"./utilities":66}],49:', a);
  assert.ok(start > 20 && end > start && a > 20 && b > a);
  const result = source.slice(0, start) + modern.slice(a, b) + source.slice(end);
  new vm.Script(result);
  return result;
}

export function legacyUtility(source) {
  assert.equal(hash(source), 'abeb5dba8ece44530ba1d84ab2c52cb6276e192169c655f0a3965d2616cb9ba8');
  const fn = extractFunction(source, 'function _0x10d463(');
  assert.equal(fn.split('_0x172de2();').length, 2, 'legacy internal sequence cancellation');
  // 只取消内部重置引起的全局 sequence 销毁，显式公开 clear 行为继续保留。
  return source.replace(fn, fn.replace('_0x172de2();', ';' + ' '.repeat(11)));
}

export function legacyUtilityManifest(source, filename) {
  const re = /l\[c\(0x181\)\+'ry'\]=[^,;]+/g;
  assert.equal([...source.matchAll(re)].length, 1, 'legacy utility entry');
  return source.replace(re, "l[c(0x181)+'ry']=" + JSON.stringify('./' + filename));
}

export function legacyDecoder(source) {
  const table = source.includes('function _0x45c1(') ? '_0x45c1' : '_0x3f17';
  const decoder = table === '_0x45c1' ? '_0x57dc' : '_0x44b5';
  const main = source.search(/!\s*\(\s*function\s*\(/);
  assert.ok(main > 0, 'legacy decoder prefix');
  const context = {};
  const prefix = source.slice(0, main).replace(/,\s*$/, ');');
  vm.runInNewContext(prefix + extractFunction(source, 'function ' + table + '(') + extractFunction(source, 'function ' + decoder + '('), context, { timeout: 1000 });
  return context[decoder];
}

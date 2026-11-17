// 仅在隔离 VM 中观察引导配置；所有 DOM、请求与计时器均为本地桩，不访问网络。
import fs from 'node:fs';import vm from 'node:vm';
import assert from 'node:assert/strict';
const mod={exports:{}};vm.runInNewContext(process.binding('natives')['internal/deps/acorn/acorn/dist/acorn'],{module:mod,exports:mod.exports});export const acorn=mod.exports;
export function parse(s){return acorn.parse(s,{ecmaVersion:'latest',locations:true});}
export function walk(n,fn,parents=[]){if(!n||typeof n.type!=='string')return;fn(n,parents);for(const [k,v]of Object.entries(n)){if(k==='loc')continue;if(Array.isArray(v))for(const x of v)walk(x,fn,[...parents,n]);else if(v&&typeof v.type==='string')walk(v,fn,[...parents,n]);}}
export function probe(source,id,search=''){const tasks=[],events=[],requests=[],capture={};const STOP=new Error('PG_CAPTURE');
 const el=()=>({style:{},setAttribute(){},appendChild(n){if(n.onload)events.push(n.onload);},removeChild(){},getAttribute(){return null;},classList:{add(){},remove(){}},parentElement:{removeChild(){}},textContent:''});
 const document={head:el(),body:el(),documentElement:el(),createElement:el,createElementNS:el,getElementsByTagName(){return[this.head];},getElementById:el,querySelector:el,querySelectorAll(){return[];},addEventListener(){},removeEventListener(){}};
 const reply={name:'pg-probe',version:'999.0.0',main:'probe.js'};
 const c={document,location:{search,pathname:`/${id}/index.html`,protocol:'http:',hostname:'localhost',host:'localhost',port:'',origin:'http://localhost',href:`http://localhost/${id}/index.html`},navigator:{userAgent:'Mozilla/5.0',language:'en-US'},setTimeout(fn,ms){tasks.push({fn,ms});},clearTimeout(){},setInterval(){},clearInterval(){},addEventListener(){},removeEventListener(){},requestAnimationFrame(){},cancelAnimationFrame(){},console:{log(){},warn(){},error(){}},URL:Object.assign(class extends URL {},{createObjectURL(){return 'blob:pg-probe';},revokeObjectURL(){}}),URLSearchParams,Blob,atob:s=>Buffer.from(s,'base64').toString('binary'),btoa:s=>Buffer.from(s,'binary').toString('base64'),XMLHttpRequest:class{open(method,url){this.url=url;requests.push(String(url));}setRequestHeader(){}send(){this.status=200;this.readyState=4;this.response=this.responseType==='json'?reply:{};this.responseText=JSON.stringify(reply);events.push(()=>{this.onload?.();this.onreadystatechange?.();});}},shell:{start(m,o){capture.options=JSON.parse(JSON.stringify(o));capture.stack=new Error().stack;throw STOP;}},__pgProbe(n,v){capture.values??=[];capture.values.push([n,v]);return v;}};c.window=c;
 try{vm.runInNewContext(source,c,{filename:'pg_boot.js',timeout:1500});for(let i=0;i<50;i++){if(events.length)events.shift()();else{let x=tasks.findIndex(t=>t.ms===0);if(x<0)break;tasks.splice(x,1)[0].fn();}}}catch(e){if(e!==STOP){capture.error=e.message;capture.errorStack=e.stack;}}
 return {...capture,settings:c._CCSettings?JSON.parse(JSON.stringify(c._CCSettings)):undefined,requests};}
export function getBoot(root,id){const file=`${root}/${id}/index.html`,html=fs.readFileSync(file,'utf8'),m=/<script id="main-script"[^>]*>([\s\S]*?)<\/script>/.exec(html);return m?{file,html,source:m[1],offset:m.index+m[0].indexOf('>')+1}:{file:`${root}/${id}/init.js`,html,source:fs.readFileSync(`${root}/${id}/init.js`,'utf8'),offset:0};}

export function inspectBoot(root, id) {
  const boot = getBoot(root, id), tree = parse(boot.source), calls = [];
  walk(tree, (node, parents) => {
    if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression' && node.callee.object.name === 'shell') calls.push({ node, parents });
  });
  assert.equal(calls.length, 1, `${id}: ambiguous shell call`);
  const call = calls[0], owner = call.parents.find(node => node.type === 'FunctionExpression');
  assert(owner, `${id}: bootstrap scope missing`);
  const candidates = owner.body.body.flatMap(node => node.type === 'VariableDeclaration' ? node.declarations : []).filter(node => ['kt', 'ye', 'Qe'].includes(node.id.name) && (['BinaryExpression', 'Identifier', 'TemplateLiteral', 'Literal'].includes(node.init?.type) || (node.init?.type === 'SequenceExpression' && node.init.expressions[0]?.left?.property?.name === '__PG_MAIN_SELECTION')));
  assert.equal(candidates.length, 1, `${id}: ambiguous SharedPath initializer`);
  const observed = probe(boot.source, id);
  assert(!observed.error && observed.options, `${id}: cannot observe bootstrap: ${observed.error}`);
  assert.equal(Number(observed.options.Index), Number(id));
  return { ...boot, id, observed, initializer: candidates[0].init, call: call.node };
}

// base 规则只在主包从页面所在目录加载时切换：修复版主包只随本站发布，远端 GameDir 未必存在。
// 以解析后的 GameDir 判定而非 or 参数是否存在：LuckyPG-GO 的进入游戏地址固定带 or={Address}，
// shell 据此得到绝对 GameDir，但它就是页面所在目录；异主机、异端口、异目录及 origin 别名仍保持原主包。
// LEGACY_BASE_GUARD 只供 or-guard-repair 核对旧入口未被另行修改，生成入口不得使用。
export const LEGACY_BASE_GUARD = '!c.GameDir&&typeof URLSearchParams==="function"&&!new URLSearchParams(location.search).has("origin")&&!new URLSearchParams(location.search).has("or")&&';
export const BASE_GUARD = '(!c.GameDir||new URL(c.GameDir,location.href).href===new URL("./",location.href).href)&&typeof URLSearchParams==="function"&&!new URLSearchParams(location.search).has("origin")&&';

export function rewriteBoot(boot, sharedPath, rules) {
  const prefix = rules.length ? `(window.__PG_MAIN_SELECTION=${JSON.stringify(rules)},${JSON.stringify(sharedPath)})` : JSON.stringify(sharedPath);
  const edits = [{ start: boot.initializer.start, end: boot.initializer.end, text: prefix }];
  const initial = boot.observed.settings.bundleVers.main;
  const matched = rules.filter(rule => initial && rule.config === initial.config && rule.from === initial.index);
  assert(matched.length <= 1, `${boot.id}: conflicting main rules`);
  const arg = boot.call.arguments[1];
  // SystemJS 的 scope 前缀遍历不能接收根相对 parentUrl；必须在 or 拼接之后规范化。
  let body = 'c.SharedPath=new URL(c.SharedPath,location.href).href;';
  if (matched.length) {
    const rule = matched[0];
    // 在 shell.start 前更新原生配置，且保留原规则对远端 GameDir 的约束。
    const guard = rule.base === null ? '' : BASE_GUARD;
    body += `var m=window._CCSettings.bundleVers.main;if(${guard}m.config===${JSON.stringify(rule.config)}&&m.index===${JSON.stringify(rule.from)})m.index=${JSON.stringify(rule.to)};`;
  }
  edits.push({ start: arg.start, end: arg.end, text: `(function(c){${body}return c;})(${boot.source.slice(arg.start,arg.end)})` });
  let source = boot.source;
  for (const edit of edits.sort((a,b) => b.start-a.start)) source = source.slice(0,edit.start)+edit.text+source.slice(edit.end);
  const after = probe(source, boot.id);
  assert(!after.error && after.options, `${boot.id}: rewritten bootstrap did not start`);
  const expectedOptions = { ...boot.observed.options, SharedPath: new URL(sharedPath,'http://localhost/').href };
  if (expectedOptions.Blobs) expectedOptions.Blobs = Object.fromEntries(Object.entries(expectedOptions.Blobs).map(([key,value]) => [key, typeof value === 'string' && value.startsWith(boot.observed.options.SharedPath) ? sharedPath+value.slice(boot.observed.options.SharedPath.length) : value]));
  delete expectedOptions.BootTime;
  const actualOptions = { ...after.options }; delete actualOptions.BootTime;
  assert.deepEqual(actualOptions, expectedOptions, `${boot.id}: unrelated bootstrap option changed`);
  const expectedSettings = structuredClone(boot.observed.settings);
  if (matched.length) expectedSettings.bundleVers.main.index = matched[0].to;
  assert.deepEqual(after.settings, expectedSettings, `${boot.id}: unrelated settings changed`);
  const contents = boot.offset ? boot.html.slice(0,boot.offset)+source+boot.html.slice(boot.offset+boot.source.length) : source;
  return { contents, mainRule: matched[0] || null, dormantRules: rules.filter(rule => !matched.includes(rule)) };
}

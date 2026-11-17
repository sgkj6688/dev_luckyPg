import { isNative, readHistorical } from './native-layout.mjs';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
import {extractFunction,modernDecoder,legacyDecoder} from './legacy.mjs';
import {protectionCallbacks} from './protection.mjs';
const ROOT=new URL('../..',import.meta.url).pathname.replace(/\/$/,'');
export const sha=s=>createHash('sha256').update(s).digest('hex');
export const p2Methods=['load','Bi','Gi','Ti','Zi','Qi','Fi','Pi','Ni'];
const maps=JSON.parse(fs.readFileSync(ROOT+'/tools/pg-compat/legacy-recipes.json','utf8'));
export function identify(source){
 if(source.includes('function _0xa767ed('))return{kind:'modern',loader:'_0x4a705d',map:{},decode:modernDecoder(source)};
 const base=source.includes('function _0x32ec49(')?maps['94']:maps['34'];const decoder=legacyDecoder(source);
 return {kind:base===maps['94']?'legacy94':'legacy34',loader:base.loader,map:base.map,decode:code=>code.replace(/_0x[a-f0-9]+\((0x[a-f0-9]+)\)/g,(_,v)=>JSON.stringify(decoder(+v)))};
}
export function functionSpan(source,marker){const start=source.indexOf(marker);assert(start>=0,marker);const code=extractFunction(source.slice(start),'function');return {start,end:start+code.length,sha256:sha(code),code};}
export function methodRanges(source,spec){
 const result={};const re=new RegExp(spec.loader+'\\[[^\\]]+\\]\\[([^\\]]+)\\]\\s*=\\s*function','g');
 for(const m of source.matchAll(re)){let name;try{name=vm.runInNewContext(spec.decode(m[1]),{}, {timeout:500});}catch{continue;}const at=source.indexOf('function',m.index);const text=extractFunction(source.slice(at),'function');assert(!result[name],'duplicate '+name);result[name]={start:at,end:at+text.length,sha256:sha(text),code:text};}
 return result;
}
export function inspect(source){
 const spec=identify(source),methods=methodRanges(source,spec),constructor=functionSpan(source,'function '+spec.loader+'('),callbacks=protectionCallbacks(source).callbacks;
 const cn=source.search(/\[['"]Cn['"]\]\s*=\s*function/);assert(cn>=0);const at=source.indexOf('function',cn),resolver={start:at,end:at+extractFunction(source.slice(at),'function').length};resolver.sha256=sha(source.slice(resolver.start,resolver.end));
 const blobName=spec.kind==='modern'?'_0x58bd5c':spec.map._0x58bd5c,blob=functionSpan(source,'function '+blobName+'(');
 return {sha256:sha(source),kind:spec.kind,loader:spec.loader,constructor,methods,blob,resolver,callbacks:callbacks.map(c=>({...c,sha256:sha(c.text)}))};
}
const modern=(isNative()?readHistorical('1778752/shared/984721902a/996b5422dd.2536964e.js','2536964e84372380894879caa16344222c76b1cd37c0fbfa590d04833351906a').toString():fs.readFileSync(ROOT+'/1778752/shared/984721902a/996b5422dd.2536964e.js','utf8'));
assert.equal(sha(modern),'2536964e84372380894879caa16344222c76b1cd37c0fbfa590d04833351906a');
const modernSpec=identify(modern),modernMethods=methodRanges(modern,modernSpec);
// 仅迁移加载P2必要函数；PWD/Alert及其构造器不属于本轮修复。
export function patchShellP2(source,recipe){
 assert.equal(sha(source),recipe.sha256,'unknown shell source');const spec=identify(source),changes=[];
 const mapped=code=>modernSpec.decode(code).replace(/\b_0x[a-f0-9]+\b/g,n=>spec.map[n]||n);
 const add=(span,text,label)=>{assert.equal(sha(source.slice(span.start,span.end)),span.sha256,'changed '+label);if(source.slice(span.start,span.end)!==text)changes.push({start:span.start,end:span.end,text,label});};
 for(const name of p2Methods)add(recipe.methods[name],mapped(modernMethods[name].code),'loader.'+name);
 const ctor=source.slice(recipe.constructor.start,recipe.constructor.end),point=ctor.indexOf('{')+1;
 let init='this._resourceLoadGeneration=0;this._resourceLoadTerminal=false;';
 for(const name of ['_isCurrentResourceLoad','_failResourceLoad']){const at=modern.indexOf('_0x4a705d.prototype.'+name);assert(at>=0);init+='this.'+name+'='+mapped(extractFunction(modern.slice(at),'function'))+';';}
 add(recipe.constructor,ctor.slice(0,point)+init+ctor.slice(point),'loader.constructor');
 const blob=source.slice(recipe.blob.start,recipe.blob.end),blobName=spec.kind==='modern'?'_0x58bd5c':spec.map._0x58bd5c,fetchName=spec.kind==='modern'?'_0x430e4d':spec.map._0x430e4d;
 const arg=blob.match(/^function\s+\w+\(([^)]+)\)/)[1];
 let fixedBlob=blob.replace('('+arg+')','('+arg+', options)').replace(fetchName+'('+arg+')',fetchName+'('+arg+', options)');assert.notEqual(fixedBlob,blob);add(recipe.blob,fixedBlob,'fetchBlobURL.signal');
 const cn=source.slice(recipe.resolver.start,recipe.resolver.end),desc=spec.kind==='modern'?{registry:'_0x4dd5cc',name:'_0xccac1a',entry:'_0x537e01'}:spec.kind==='legacy94'?{registry:'_0x3fe069',name:'_0x56d301',entry:'_0x1a7b34'}:{registry:'_0x299bbf',name:'_0x41afc2',entry:'_0x1b51bc'};
 const re=new RegExp(desc.registry+'\\[[^\\]]+\\]\\('+desc.name+'\\)\\[[^\\]]+\\]\\s*=\\s*'+desc.entry,'g');const matches=[...cn.matchAll(re)];assert.equal(matches.length,1,'entry assignment');
 const assignment=matches[0][0],registry=assignment.slice(0,assignment.lastIndexOf('['));add(recipe.resolver,cn.replace(re,'('+assignment+',delete '+registry+'["absoluteUrl"])'),'resolver');
 for(const [i,span]of recipe.callbacks.entries()){
  const text=source.slice(span.start,span.end),open=text.indexOf('{')+1,body=text.slice(open,-1).replace(/[^\r\n]/g,' '),match=/[^\r\n]{7,}/.exec(body);assert(match);const middle=body.slice(0,match.index)+'return;'+body.slice(match.index+7);add(span,text.slice(0,open)+middle+'}','protection.'+i);
 }
 let result=source;for(const c of changes.sort((a,b)=>b.start-a.start))result=result.slice(0,c.start)+c.text+result.slice(c.end);new vm.Script(result);return {source:result,changes};
}

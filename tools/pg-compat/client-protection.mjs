import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { read, sha, metadata } from './lib.mjs';
import { extractFunction } from './legacy.mjs';
export const clientRecipes = JSON.parse(read(new URL('./client-protection-recipes.json',import.meta.url)));
export const recipesFor = target => clientRecipes.filter(r=>(r.family||'modern')===(target.family==='legacy'?'legacy':'modern')&&(!r.games||r.games.includes(target.id)));

export function fixedClientPlugin(source, recipe) {
  assert.equal(sha(source),recipe.sha256,'unknown client plugin version');
  let fixed=source;
  for(const item of [...recipe.callbacks].sort((a,b)=>b.start-a.start)){
    const text=source.slice(item.start,item.end);
    assert.equal(sha(text),item.sha256,'client protection callback changed');
    const mode=item.mode||'callback';
    if(mode==='callback')assert.equal(extractFunction(text,'function'),text,'invalid callback boundary');
    // 产物使用源码偏移参与解码；保留签名、字节位置和所有换行。
    assert.equal(Buffer.byteLength(text),text.length,'patch range must be ASCII');
    const begin=mode==='callback'?text.indexOf('{')+1:0;
    const end=mode==='callback'?text.length-1:text.length;
    const preferred=mode==='callback'?'/*PG_KEEP_PLUGIN_STATE*/return;':(item.replacement||'void 0');
    let middle=text.slice(begin,end).replace(/[^\r\n]/g,' ');
    let slot=new RegExp('[^\r\n]{'+preferred.length+',}').exec(middle),body=preferred;
    if(!slot&&mode==='callback'){body='return;';slot=/[^\r\n]{7,}/.exec(middle);}
    assert.ok(slot,'patch range has no safe statement space');
    middle=middle.slice(0,slot.index)+body+middle.slice(slot.index+body.length);
    const replacement=text.slice(0,begin)+middle+text.slice(end);
    assert.equal(replacement.length,text.length);
    fixed=fixed.slice(0,item.start)+replacement+fixed.slice(item.end);
  }
  new vm.Script(fixed);
  return fixed;
}

export function rewriteMetadataEntry(source, entry) {
  const before=metadata(source);
  if(before.exports._$meta?.entry===entry)return source;
  const previous=JSON.stringify(before.exports._$meta?.entry);
  if(source.includes('__pgOriginalExport')&&source.split(previous).length===3){
    const changed=source.split(previous).join(JSON.stringify(entry));
    const expected=JSON.parse(JSON.stringify(before));expected.exports._$meta.entry=entry;
    assert.deepEqual(metadata(changed),expected);return changed;
  }
  let factory;
  vm.runInNewContext(source,{cc:{},System:{register(...args){assert.equal(factory,undefined,'multiple metadata registrations');factory=args.at(-1).toString();}}},{timeout:1000});
  assert.ok(factory,'metadata declaration missing');
  const parameter=factory.match(/^function\s*[^ (]*\s*\(\s*([\w$]+)/)?.[1];
  assert.ok(parameter,'metadata export parameter');
  assert.equal(source.split(factory).length,2,'metadata factory not unique');
  let point=factory.indexOf('{')+1;
  const directive=factory.slice(point).match(/^\s*(['"])use strict\1\s*;/);
  if(directive)point+=directive[0].length;
  let exportVariable='__pgOriginalExport_'+sha(entry).slice(0,8);
  while(source.includes(exportVariable))exportVariable+='_next';
  const injected='var '+exportVariable+'='+parameter+';'+parameter+'=function(name,value){if(name==="_$meta"&&value)value.entry='+JSON.stringify(entry)+';else if(name&&typeof name==="object"&&name._$meta)name._$meta.entry='+JSON.stringify(entry)+';return '+exportVariable+'.apply(this,arguments);};';
  const changed=source.replace(factory,()=>factory.slice(0,point)+injected+factory.slice(point));
  const expected=JSON.parse(JSON.stringify(before));
  assert.ok(expected.exports._$meta,'metadata export missing');
  expected.exports._$meta.entry=entry;
  assert.deepEqual(metadata(changed),expected,'metadata fields changed unexpectedly');
  return changed;
}

export function clientSnapshot(root, target) {
  return { id:target.id, files:recipesFor(target).map(recipe=>{
    const asset=target.id+'/'+recipe.path,manifest=path.posix.dirname(asset)+'/index.js';
    const source=read(path.join(root,asset)),meta=read(path.join(root,manifest));
    assert.equal(sha(source),recipe.sha256,'unknown original client asset');
    assert.equal(path.posix.basename(metadata(meta).exports._$meta.entry),path.posix.basename(asset),'unexpected active plugin entry');
    return {asset,sha256:sha(source),manifest,manifestSha256:sha(meta)};
  })};
}

export function planClientProtection(root,target,frozen,receipt){
  const actions=[];
  for(const recipe of recipesFor(target)){
    const originalPath=target.id+'/'+recipe.path,manifestPath=path.posix.dirname(originalPath)+'/index.js';
    const original=read(path.join(root,originalPath)),fixed=fixedClientPlugin(original,recipe);
    const name=path.posix.basename(originalPath).split('.')[0]+'.'+sha(fixed).slice(0,8)+'.js';
    const newPath=path.posix.dirname(originalPath)+'/'+name;
    const manifest=read(path.join(root,manifestPath));
    const currentEntry=path.posix.basename(metadata(manifest).exports._$meta.entry);
    if(currentEntry===name){
      assert.equal(read(path.join(root,newPath)),fixed,'applied client asset changed');
      assert.equal(receipt.files.find(x=>x.path===manifestPath)?.sha256,sha(manifest),'applied client manifest changed');
      continue;
    }
    if(currentEntry===path.posix.basename(originalPath)){
      assert.equal(sha(manifest),frozen.files.find(x=>x.manifest===manifestPath)?.manifestSha256,'client baseline changed');
    }else{
      // 仅允许升级本工具有指纹回执的中间版本，不能覆盖用户另改的清单或资源。
      assert.equal(receipt.files.find(x=>x.path===manifestPath)?.sha256,sha(manifest),'unknown client manifest');
      const activePath=path.posix.dirname(originalPath)+'/'+currentEntry;
      assert.equal(receipt.files.find(x=>x.path===activePath)?.sha256,sha(read(path.join(root,activePath))),'unknown client entry');
    }
    if(fs.existsSync(path.join(root,newPath)))assert.equal(read(path.join(root,newPath)),fixed,'refuse to overwrite client asset');
    const changed=rewriteMetadataEntry(manifest,'./'+name);
    actions.push({path:newPath,contents:fixed,sha256:sha(fixed),kind:'asset'},{path:manifestPath,contents:changed,sha256:sha(changed),kind:'manifest'});
  }
  return {id:target.id,actions};
}

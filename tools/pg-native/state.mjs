import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {getBoot,probe} from './bootstrap.mjs';

export const root=path.resolve(fileURLToPath(new URL('../..',import.meta.url)));
export const manifestPath=path.join(root,'reports/pg-native/migration.json');
export const digest=value=>createHash('sha256').update(value).digest('hex');
export const isNative=()=>fs.existsSync(manifestPath);
export const state=()=>JSON.parse(fs.readFileSync(manifestPath));
const historicalCache=new Map();
let historicalBase;

// 此接口只用于历史证据，绝不能用于站点资源请求或当前文件缺失时的兜底。
export function readHistorical(relative, expected) {
  relative=path.isAbsolute(relative)?path.relative(root,relative):relative;
  assert(!relative.startsWith('..')&&!path.isAbsolute(relative),'invalid historical path');
  const key=relative+':'+(expected||'');if(historicalCache.has(key))return historicalCache.get(key);
  // 一次校验使用同一检查点；避免为每条历史回执反复解析完整资源清单。
  const base=isNative()?(historicalBase??=path.join(state().checkpoint,'tree')):root;
  const file=path.join(base,relative);
  if(fs.existsSync(file)){
    const real=fs.realpathSync(file);assert(real.startsWith(base+path.sep),'historical symlink escape');
    const bytes=fs.readFileSync(file);
    if(!expected||digest(bytes)===expected){historicalCache.set(key,bytes);return bytes;}
  }
  assert(expected,'historical digest required for Git lookup');
  const revisions=['a5edfaae916cab0e9f790e3b23e4ad8c6843b5c2'];
  try { revisions.push(...execFileSync('git',['log','--all','--format=%H','--',relative],{cwd:root,encoding:'utf8'}).trim().split('\n')); } catch {}
  for(const revision of new Set(revisions.filter(Boolean))){try{
    const bytes=execFileSync('git',['show',`${revision}:${relative}`],{cwd:root,maxBuffer:32*1024*1024,stdio:['ignore','pipe','ignore']});
    if(digest(bytes)===expected){historicalCache.set(key,bytes);return bytes;}
  }catch{}}
  throw Error(`无法取得匹配历史指纹的输入: ${relative}`);
}

export function verifyEntryFiles(base,id,observed){
  assert(!observed.error&&observed.options&&observed.settings,`cannot inspect entry: ${id}`);
  const origin='http://pg-native.invalid/',directory=new URL(observed.options.GameDir||`${id}/`,origin),references=[];
  if(typeof observed.options.AssetTable==='string')references.push(new URL(observed.options.AssetTable,directory));
  for(const [bundle,version]of Object.entries(observed.settings.bundleVers||{})){
    // internal等内置bundle由各engine定位；这里只核对游戏目录拥有的两类bundle。
    if(!['main','resources'].includes(bundle))continue;
    if(!version||typeof version!=='object')continue;
    for(const [kind,extension]of [['config','json'],['index','js']])if(version[kind])references.push(new URL(`assets/${bundle}/${kind}.${version[kind]}.${extension}`,directory));
  }
  // 清单只能证明已登记文件未丢失；入口声明还可能引用从未登记的缺失文件。
  for(const url of references){
    if(url.origin!==new URL(origin).origin)continue;
    const relative=decodeURIComponent(url.pathname).replace(/^\//,''),file=path.resolve(base,relative);
    assert(file.startsWith(path.resolve(base)+path.sep),`entry resource escapes root: ${id}`);
    assert(fs.existsSync(file)&&fs.statSync(file).isFile()&&!fs.lstatSync(file).isSymbolicLink(),`missing declared entry resource: ${relative}`);
  }
  return references.length;
}

export function verifyNative() {
  const m=state();let checked=0;const cache=new Map();
  assert.equal(digest(JSON.stringify({entries:m.games,groups:m.groups,outputs:m.outputs.map(x=>[x.path,x.sha256]).sort()})),m.identity,'migration identity changed');
  const hash=file=>{if(!cache.has(file))cache.set(file,digest(fs.readFileSync(file)));return cache.get(file);};
  for(const entry of [...m.outputs,...m.privateFiles,...(m.preservedFiles||[])]){
    const file=path.join(root,entry.path);
    assert(fs.existsSync(file),`missing current resource: ${entry.path}`);
    assert(!fs.lstatSync(file).isSymbolicLink(),`unexpected symlink: ${entry.path}`);
    assert.equal(hash(file),entry.sha256,`current resource changed: ${entry.path}`);checked++;
    if(/\.(js|json|html|css)$/.test(entry.path))assert(!/\/\d+\/shared\//i.test(fs.readFileSync(file,'utf8')),`old shared URL literal: ${entry.path}`);
  }
  for(const name of fs.readdirSync(root).filter(x=>/^\d+$/.test(x)))assert(!fs.existsSync(path.join(root,name,'shared')),`old shared directory remains: ${name}`);
  assert(!fs.existsSync(path.join(root,'shared/objects')),'old object pool remains');
  assert(!fs.existsSync(path.join(root,'shared/releases')),'old release overlay remains');
  for(const game of m.games){
    verifyEntryFiles(root,game.id,probe(getBoot(root,game.id).source,game.id));
    for(const module of game.modules){const stem=game.sharedPath.slice(1)+module;const file=path.join(root,stem,module+'/'===game.shellDir?'index.json':'index.js');assert(fs.existsSync(file),`missing module: ${file}`);}
    assert(fs.existsSync(path.join(root,game.id,`assets/main/index.${game.main.index}.js`)),`main missing: ${game.id}`);
  }
  return {mode:'native-read-only',games:m.games.length,groups:m.groups.length,checked,oldUrlCompatibility:false};
}

export function legacyGate() {
  if(!isNative())return;
  assert(!process.argv.some(a=>['--write','--freeze','--freeze-legacy'].includes(a)), '新共享布局禁止旧工具写入；请使用受消费者集合约束的新迁移工具');
  const result=verifyNative();let records=0;
  for(const name of ['pg-1926/applied.json','pg-1926/main-applied.json','pg-outside-p2/applied.json','pg-outside-p2/viewloading-applied.json']){
    const file=path.join(root,'reports',name);if(!fs.existsSync(file))continue;
    const report=JSON.parse(fs.readFileSync(file));for(const game of report.games||[])for(const f of game.files||[]){if(f.path&&f.sha256){assert.equal(digest(readHistorical(f.path,f.sha256)),f.sha256);records++;}}
  }
  console.log(JSON.stringify({...result,historicalReceiptRecords:records,note:'当前原生布局和历史回执分别验证；历史读取不向站点提供旧URL'},null,2));
  process.exit(0);
}

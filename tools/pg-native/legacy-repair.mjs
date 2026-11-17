import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { inspect, patchShellP2 } from '../pg-compat/outside-shell-p2.mjs';
import { patchViewLoading } from '../pg-compat/viewloading-p2.mjs';
import { metadata, sha } from '../pg-compat/lib.mjs';
import { clientRecipes, fixedClientPlugin, rewriteMetadataEntry } from '../pg-compat/client-protection.mjs';
import { legacyUtility, legacyEngine } from '../pg-compat/legacy.mjs';
import { normalizeEngine } from './migrate.mjs';
import { root, state, readHistorical, verifyNative, manifestPath } from './state.mjs';
import { inspectBoot, rewriteBoot } from './bootstrap.mjs';

const originalShell='2246fda1674c727bea1eff6f0e370d073ab0386a3842f3475159fececa6db135';
export const fixedShellHash='f05b67af7ed54001a899b54b53ec07a6e4cdefe57ec1c2a46fdcd29087fa7116';
const callbacks=[
  [197942,198266,'9cd7aaccd8e23bd8a5a7626fca8521f2fdb519d9e858b6c000840e97a384fc38'],
  [198307,198692,'baddfdcecde31f2f9b9d4246911644d3706bb8292c5654f153b38a127777f9ee'],
  [198733,199118,'9377d85195b33fa2bbafec127a582a1b794c6fe9365a148f62b55cc805eec4d5'],
];
export function repairShell(source) {
  assert.equal(sha(source),originalShell,'unrecognized legacy shell');
  let result=patchShellP2(source,inspect(source)).source;
  // 保留原有监听、延迟与正常通知，仅中和已验证的节点销毁及交易事件拦截回调。
  for(const [start,end,sha256]of callbacks)result=patchViewLoading(result,{sha256:sha(result),callback:{start,end,sha256}});
  assert.equal(sha(result),fixedShellHash);
  return result;
}

export function planRepair() {
  const m=state();
  if(m.repairs?.some(x=>x.id==='legacy-2246'))return {alreadyApplied:true};
  const game=m.games.find(x=>x.id==='106');assert(game?.shellDir==='3c4695a542/');
  const group=m.groups.find(x=>x.sharedPath===game.sharedPath),oldPrefix=game.sharedPath.slice(1);
  assert(/^shared\/compat\/[a-f0-9]{12}\/$/.test(oldPrefix),'invalid group path');
  const currentFiles=[];
  function list(directory){for(const e of fs.readdirSync(directory,{withFileTypes:true})){const f=path.join(directory,e.name);assert(!e.isSymbolicLink(),'unexpected group symlink');if(e.isDirectory())list(f);else currentFiles.push(path.relative(root,f));}}
  list(path.join(root,oldPrefix));
  assert.deepEqual(currentFiles.sort(),m.outputs.filter(e=>e.path.startsWith(oldPrefix)).map(e=>e.path).sort(),'group contains unrecorded files');
  const consumers=m.games.filter(g=>g.sharedPath===game.sharedPath&&g.modules.includes('3c4695a542')).map(g=>g.id).sort();
  assert.deepEqual(consumers,['106','1402846'],'legacy consumer set changed');
  const files=new Map(),changes=[];
  for(const e of m.outputs.filter(x=>x.path.startsWith(oldPrefix))) {
    const bytes=fs.readFileSync(path.join(root,e.path));assert.equal(sha(bytes),e.sha256);files.set(e.path.slice(oldPrefix.length),{...e,bytes});
  }
  function replace(relative,bytes,source,kind){const contents=Buffer.from(bytes);files.set(relative,{path:oldPrefix+relative,bytes:contents,sha256:sha(contents),source,transform:'legacy-2246-'+kind});changes.push({relative,sha256:sha(contents),source,kind});}
  for(const module of game.modules) {
    const isShell=module==='3c4695a542',mf=module+'/'+(isShell?'index.json':'index.js'),record=files.get(mf);assert(record,mf);
    const source=record.bytes.toString(),meta=isShell?JSON.parse(source):metadata(source);
    const entry=isShell?meta.main:meta.exports._$meta?.entry||meta.dependencies.find(x=>x.startsWith('./')&&x.endsWith('.js'));
    if(!entry)continue;
    const relative=path.posix.normalize(module+'/'+entry),asset=files.get(relative);assert(asset,relative);let fixed;
    if(isShell)fixed=repairShell(asset.bytes.toString());
    else if(module==='0bc343f586') {
      const raw=readHistorical('106/shared/0bc343f586/dedee2c334.b58f3.js','987256ff5caa463250587ed32c1b7a926e8b3d1307aad2226bb2b9d437c57c9b').toString();
      assert.equal(sha(normalizeEngine(raw).contents),asset.sha256,'current engine differs');
      const ref=readHistorical('1778752/shared/c03a2652ad/f5fe73e9f2.7bbd850b.js','7bbd850bac3c185cd353bf1e2efbb17b5fac5658dbc21d98bc69626c67fc0331').toString();
      fixed=normalizeEngine(legacyEngine(raw,ref)).contents;
    } else if(module==='99212c6ec4')fixed=legacyUtility(asset.bytes.toString());
    else {const recipe=clientRecipes.find(x=>x.sha256===asset.sha256);if(recipe)fixed=fixedClientPlugin(asset.bytes.toString(),recipe);}
    if(!fixed)continue;
    const name=path.basename(relative).split('.')[0]+'.'+sha(fixed).slice(0,16)+'.js';
    replace(module+'/'+name,fixed,asset.source,'asset');
    let next;
    if(isShell)next=JSON.stringify({...meta,main:name});
    else if(module==='0bc343f586'){assert.equal(source.split(path.basename(entry)).length,2);next=source.replace(path.basename(entry),name);}
    else next=rewriteMetadataEntry(source,'./'+name);
    replace(mf,next,record.source,'metadata');
  }
  assert.equal(changes.filter(x=>x.kind==='asset').length,11,'repair scope changed');
  const newPrefix='shared/compat/'+sha(JSON.stringify([...files].map(([p,v])=>[p,v.sha256]).sort())).slice(0,12)+'/';
  const boots=[];
  for(const id of group.games){const g=m.games.find(x=>x.id===id),r=m.mainRules.find(x=>x.id===id),b=inspectBoot(path.join(m.checkpoint,'tree'),id);const result=rewriteBoot(b,'/'+newPrefix,[...(r.applied?[r.applied]:[]),...r.dormant]);boots.push({path:g.boot,bytes:Buffer.from(result.contents),sha256:sha(result.contents)});}
  return {m,group,oldPrefix,newPrefix,consumers,files,changes,boots,repairID:'legacy-2246'};
}

export function applyRepair(plan) {
  if(plan.alreadyApplied){
    for(const repair of state().repairs||[])assert(!fs.existsSync(path.join(root,repair.oldPrefix)),`repair cleanup incomplete: ${repair.oldPrefix}`);
    return verifyNative();
  }
  verifyNative();
  const {m,group,oldPrefix,newPrefix,files,changes,boots}=plan;
  const old=m.outputs.filter(x=>x.path.startsWith(oldPrefix));
  assert(!fs.existsSync(path.join(root,newPrefix)),'new version directory exists');
  for(const [relative,e]of files){const f=path.join(root,newPrefix,relative);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,e.bytes,{flag:'wx'});assert.equal(sha(fs.readFileSync(f)),e.sha256);}
  const originals=boots.map(b=>({path:b.path,bytes:fs.readFileSync(path.join(root,b.path))})),switched=[];
  try {
    for(const b of boots){assert.equal(sha(fs.readFileSync(path.join(root,b.path))),m.outputs.find(x=>x.path===b.path).sha256);fs.writeFileSync(path.join(root,b.path)+'.native-tmp',b.bytes,{flag:'wx'});}
    for(const b of boots){fs.renameSync(path.join(root,b.path)+'.native-tmp',path.join(root,b.path));switched.push(b.path);}
    for(const b of boots)m.outputs.find(x=>x.path===b.path).sha256=b.sha256;
    for(const game of m.games)if(game.sharedPath==='/'+oldPrefix)game.sharedPath='/'+newPrefix;
    group.sharedPath='/'+newPrefix;group.files=files.size;
    m.outputs=m.outputs.filter(x=>!x.path.startsWith(oldPrefix));
    for(const [p,e]of files)m.outputs.push({path:newPrefix+p,sha256:e.sha256,source:e.source,transform:e.transform});
    for(const map of m.mappings)if(map.newPath.startsWith(oldPrefix)){map.newPath=newPrefix+map.newPath.slice(oldPrefix.length);const e=files.get(map.newPath.slice(newPrefix.length));map.sha256=e.sha256;if(e.transform)map.transform=e.transform;}
    m.repairs??=[];m.repairs.push({id:plan.repairID,consumers:plan.consumers,oldPrefix,newPrefix,changes});
    m.identity=sha(JSON.stringify({entries:m.games,groups:m.groups,outputs:m.outputs.map(x=>[x.path,x.sha256]).sort()}));
    fs.writeFileSync(manifestPath+'.tmp',JSON.stringify(m,null,2)+'\n');fs.renameSync(manifestPath+'.tmp',manifestPath);
  } catch(error) {
    // 普通I/O异常不能留下部分新入口；强制中止进程仍需由完整检查点恢复。
    for(const b of originals)if(switched.includes(b.path)){assert.equal(sha(fs.readFileSync(path.join(root,b.path))),boots.find(x=>x.path===b.path).sha256);fs.writeFileSync(path.join(root,b.path),b.bytes);}
    for(const b of boots){const temp=path.join(root,b.path)+'.native-tmp';if(fs.existsSync(temp)&&sha(fs.readFileSync(temp))===b.sha256)fs.unlinkSync(temp);}
    throw error;
  }
  // 所有消费者已切换且新文件验真后才移除本次工具拥有的旧版本目录。
  for(const e of old)assert.equal(sha(fs.readFileSync(path.join(root,e.path))),e.sha256);
  // 逐项删除已登记文件；并行新增的文件必须留下，不能被递归删除顺带清走。
  const expected=new Set(old.map(e=>path.resolve(root,e.path))),directories=[];
  function check(directory){directories.push(directory);for(const entry of fs.readdirSync(directory,{withFileTypes:true})){const file=path.join(directory,entry.name);assert(!entry.isSymbolicLink(),'unexpected group symlink');if(entry.isDirectory())check(file);else assert(expected.has(file),'group contains unrecorded files');}}
  check(path.join(root,oldPrefix));
  for(const e of old)fs.unlinkSync(path.join(root,e.path));
  for(const directory of directories.reverse())fs.rmdirSync(directory);
  return verifyNative();
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const plan=planRepair();const summary=plan.alreadyApplied?plan:{oldPrefix:plan.oldPrefix,newPrefix:plan.newPrefix,consumers:plan.consumers,movedGames:plan.group.games,changedFiles:plan.changes.length};
  console.log(JSON.stringify(summary,null,2));if(process.argv.includes('--write'))console.log(JSON.stringify(applyRepair(plan),null,2));
}

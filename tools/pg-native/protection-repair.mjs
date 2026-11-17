// 原生兼容组的客户端保护修复（默认只读计划，--write 才写入）。
// 背景：未纳入 1926/outside-p2 的兼容组仍带原始保护逻辑。各模块的日期与约 5% 概率判定（G7/X2 类）
// 命中后经 opusAudio 发出事件或直接执行载荷，shell 与活动插件的监听回调随后改写引擎（ActionManager、
// renderer.render、dispatchEvent、updatePhase 等）或拦截 Game.TransactionState* 事件，表现为进入后
// 报错重载、卡死、无法点击投注或停在加载页。
// 修复只中和已确认的破坏回调与表达式，事件总线、检测本身和业务入口保持不变：
// - shell：旧 _0x 混淆版复用 tools/pg-compat/protection.mjs 的 5 个回调配方；新混淆版（mode:'ranges'）按配方等长替换。
// - 插件：按 protection-recipes.json 等长替换，保持范围外字节、偏移与换行（插件含栈列号与源码哈希采样约束）。
// 新文件写入按内容哈希命名的新兼容组目录，入口切换与旧目录清理复用 legacy-repair 的 applyRepair。
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {root,state,digest,manifestPath,verifyNative} from './state.mjs';
import {inspectBoot,rewriteBoot} from './bootstrap.mjs';
import {applyRepair} from './legacy-repair.mjs';
import {removeEngineCorruption} from '../pg-compat/protection.mjs';
import {fixedClientPlugin,rewriteMetadataEntry} from '../pg-compat/client-protection.mjs';
import {metadata} from '../pg-compat/lib.mjs';

export const recipes=JSON.parse(fs.readFileSync(new URL('./protection-recipes.json',import.meta.url),'utf8'));
const repairIDFor=group=>'protection-'+group;

export function planProtectionRepair(group){
  assert(recipes.groups[group],`no protection recipes for group ${group}`);
  const spec=recipes.groups[group],repairID=repairIDFor(group),m=state();
  if(m.repairs?.some(r=>r.id===repairID))return {alreadyApplied:true,repairID};
  verifyNative();
  const sharedPath='/shared/compat/'+group+'/',record=m.groups.find(g=>g.sharedPath===sharedPath);
  assert(record,`group not found: ${sharedPath}`);
  const oldPrefix=sharedPath.slice(1),files=new Map(),disk=[];
  function scan(directory){for(const entry of fs.readdirSync(directory,{withFileTypes:true})){assert(!entry.isSymbolicLink());const file=path.join(directory,entry.name);if(entry.isDirectory())scan(file);else disk.push(path.relative(root,file));}}
  scan(path.join(root,oldPrefix));
  const entries=m.outputs.filter(e=>e.path.startsWith(oldPrefix));
  assert.deepEqual(disk.sort(),entries.map(e=>e.path).sort(),'unrecorded group file');
  for(const e of entries){const bytes=fs.readFileSync(path.join(root,e.path));assert.equal(digest(bytes),e.sha256);files.set(e.path.slice(oldPrefix.length),{...e,bytes});}
  const changes=[];
  function add(relative,bytes,source,kind){bytes=Buffer.from(bytes);const sha256=digest(bytes),transform=repairID+'-'+kind;files.set(relative,{bytes,sha256,source,transform});changes.push({relative,sha256,source,kind});}
  // shell：index.json 的 main 必须仍指向配方记录的原始 shell，指纹不符即停止。
  // 旧 _0x 混淆 shell 复用 removeEngineCorruption；新混淆 shell（mode:'ranges'，单行、列号解码）与插件同样按登记范围等长替换。
  // 已修复组的补充配方可不含 shell（只补插件）。
  if(spec.shell){
    const shellDir=path.posix.dirname(spec.shell.path),metaPath=shellDir+'/index.json',metaRecord=files.get(metaPath),meta=JSON.parse(metaRecord.bytes);
    assert.equal(shellDir+'/'+meta.main,spec.shell.path,'unexpected active shell');
    const shell=files.get(spec.shell.path);assert.equal(shell.sha256,spec.shell.sha256,'unknown shell source');
    const fixedShell=spec.shell.mode==='ranges'?fixedClientPlugin(shell.bytes.toString(),spec.shell):removeEngineCorruption(shell.bytes.toString());
    assert.equal(digest(fixedShell),spec.shell.fixedSha256,'shell repair output changed');
    const shellName=path.posix.basename(spec.shell.path).split('.')[0]+'.'+digest(fixedShell).slice(0,16)+'.js';
    add(shellDir+'/'+shellName,fixedShell,shell.source,'shell');
    add(metaPath,JSON.stringify({...meta,main:shellName}),metaRecord.source,'shell-metadata');
  }
  // 插件：清单当前入口必须是配方对应的原始文件。
  for(const recipe of spec.plugins){
    const dir=path.posix.dirname(recipe.path),manifestPath=dir+'/index.js',manifest=files.get(manifestPath),asset=files.get(recipe.path);
    assert(manifest&&asset,`missing plugin ${recipe.path}`);
    assert.equal(path.posix.basename(metadata(manifest.bytes.toString()).exports._$meta.entry),path.posix.basename(recipe.path),'unexpected active plugin entry');
    assert.equal(asset.sha256,recipe.sha256,'unknown plugin source');
    const fixed=fixedClientPlugin(asset.bytes.toString(),recipe);
    if(recipe.fixedSha256)assert.equal(digest(fixed),recipe.fixedSha256,'plugin repair output changed');
    const name=path.posix.basename(recipe.path).split('.')[0]+'.'+digest(fixed).slice(0,16)+'.js';
    add(dir+'/'+name,fixed,asset.source,'plugin');
    add(manifestPath,rewriteMetadataEntry(manifest.bytes.toString(),'./'+name),manifest.source,'plugin-manifest');
  }
  const newPrefix='shared/compat/'+digest(JSON.stringify([...files].map(([p,v])=>[p,v.sha256]).sort())).slice(0,12)+'/';
  // 入口由检查点原文重新生成；先确认用旧前缀生成的结果与当前入口逐字节一致，避免覆盖迁移后另行修改的入口。
  // 迁移后登记恢复的入口脚本（restoredEntryScripts，如 ../common/init.js）不在检查点原文中：
  // 当前入口须恰好比生成结果多一处该标签，去掉后逐字节一致，新入口在对应位置原样补回。
  const restored=m.restoredEntryScripts;
  const boots=record.games.map(id=>{
    const g=m.games.find(g=>g.id===id),r=m.mainRules.find(r=>r.id===id),rules=[...(r.applied?[r.applied]:[]),...r.dormant],b=inspectBoot(path.join(m.checkpoint,'tree'),id);
    const current=fs.readFileSync(path.join(root,g.boot),'utf8'),oldBoot=rewriteBoot(b,'/'+oldPrefix,rules).contents;
    let next=rewriteBoot(b,'/'+newPrefix,rules).contents;
    if(restored?.games.includes(id)&&g.boot.endsWith('.html')){
      const at=current.indexOf(restored.tag);assert(at>=0&&current.indexOf(restored.tag,at+1)<0,`restored entry script missing: ${g.boot}`);
      assert.equal(current.slice(0,at)+current.slice(at+restored.tag.length),oldBoot,`entry changed after migration: ${g.boot}`);
      const shifted=at+next.length-oldBoot.length;assert.equal(next.slice(shifted),oldBoot.slice(at),`restored script anchor moved: ${g.boot}`);
      next=next.slice(0,shifted)+restored.tag+next.slice(shifted);
    }else assert.equal(oldBoot,current,`entry changed after migration: ${g.boot}`);
    return {path:g.boot,bytes:Buffer.from(next),sha256:digest(next)};
  });
  return {m,group:record,oldPrefix,newPrefix,consumers:[...record.games].sort(),files,changes,boots,repairID};
}

// 根公共组（shared/）是全部 compat 组的上级目录，不能整组复制切换；插件按内容哈希新增文件，
// 只改写该模块无哈希的 index.js 清单（站点对无哈希文件为 no-cache），入口与 SharedPath 不变。
// 记录写入 sharedRepairs（不进 repairs：repairs 的 oldPrefix 约定为已删除的旧组目录）。
export function planRootProtection(){
  const spec=recipes.groups.root,m=state(),repairID=repairIDFor('root');
  assert(spec&&!spec.shell,'root recipe must contain plugins only');
  if(m.sharedRepairs?.some(r=>r.id===repairID))return {alreadyApplied:true,repairID};
  verifyNative();
  const record=p=>{const e=m.outputs.find(x=>x.path===p);assert(e,`unrecorded root file: ${p}`);const bytes=fs.readFileSync(path.join(root,p));assert.equal(digest(bytes),e.sha256,`root file changed: ${p}`);return {...e,bytes};};
  const writes=[],changes=[];
  for(const recipe of spec.plugins){
    const dir='shared/'+path.posix.dirname(recipe.path),manifest=record(dir+'/index.js'),asset=record('shared/'+recipe.path);
    assert.equal(path.posix.basename(metadata(manifest.bytes.toString()).exports._$meta.entry),path.posix.basename(recipe.path),'unexpected active plugin entry');
    assert.equal(asset.sha256,recipe.sha256,'unknown plugin source');
    const fixed=fixedClientPlugin(asset.bytes.toString(),recipe);assert.equal(digest(fixed),recipe.fixedSha256,'plugin repair output changed');
    const name=path.posix.basename(recipe.path).split('.')[0]+'.'+digest(fixed).slice(0,16)+'.js',target=dir+'/'+name;
    assert(!fs.existsSync(path.join(root,target)),`target exists: ${target}`);
    const nextManifest=rewriteMetadataEntry(manifest.bytes.toString(),'./'+name);
    writes.push({path:target,bytes:Buffer.from(fixed),source:asset.source,transform:repairID+'-plugin',create:true});
    writes.push({path:manifest.path,bytes:Buffer.from(nextManifest),before:manifest.bytes,source:manifest.source,transform:repairID+'-plugin-manifest'});
    changes.push({path:target,sha256:digest(fixed),source:asset.source,kind:'plugin'},{path:manifest.path,sha256:digest(nextManifest),source:manifest.source,kind:'plugin-manifest'});
  }
  const modules=spec.plugins.map(p=>path.posix.dirname(p.path));
  const consumers=m.games.filter(g=>g.sharedPath==='/shared/'&&g.modules.some(x=>modules.includes(x))).map(g=>g.id).sort();
  return {m,repairID,writes,changes,consumers};
}

export function applyRootProtection(plan){
  if(plan.alreadyApplied)return verifyNative();
  const {m,writes}=plan,before=fs.readFileSync(manifestPath,'utf8'),done=[];
  try{
    for(const w of writes.filter(w=>w.create)){fs.writeFileSync(path.join(root,w.path),w.bytes,{flag:'wx'});done.push(w);}
    for(const w of writes.filter(w=>!w.create)){fs.writeFileSync(path.join(root,w.path)+'.native-tmp',w.bytes,{flag:'wx'});fs.renameSync(path.join(root,w.path)+'.native-tmp',path.join(root,w.path));done.push(w);}
    for(const w of writes){
      const e=m.outputs.find(x=>x.path===w.path);
      if(e){e.sha256=digest(w.bytes);e.transform=w.transform;}else m.outputs.push({path:w.path,sha256:digest(w.bytes),source:w.source,transform:w.transform});
      for(const map of m.mappings)if(map.newPath===w.path){map.sha256=digest(w.bytes);map.transform=w.transform;}
    }
    m.sharedRepairs??=[];m.sharedRepairs.push({id:plan.repairID,prefix:'shared/',consumers:plan.consumers,changes:plan.changes});
    m.identity=digest(JSON.stringify({entries:m.games,groups:m.groups,outputs:m.outputs.map(x=>[x.path,x.sha256]).sort()}));
    fs.writeFileSync(manifestPath+'.tmp',JSON.stringify(m,null,2)+'\n');fs.renameSync(manifestPath+'.tmp',manifestPath);
    return verifyNative();
  }catch(error){
    // 普通异常时恢复清单与 index.js，删除本次新建的哈希文件；进程被强制终止仍需检查点恢复。
    for(const w of done.reverse()){if(w.create)fs.rmSync(path.join(root,w.path),{force:true});else fs.writeFileSync(path.join(root,w.path),w.before);}
    for(const w of writes)fs.rmSync(path.join(root,w.path)+'.native-tmp',{force:true});
    fs.writeFileSync(manifestPath,before);fs.rmSync(manifestPath+'.tmp',{force:true});
    throw error;
  }
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const at=process.argv.indexOf('--group'),group=at>0?process.argv[at+1]:null;
  assert(group,'usage: node tools/pg-native/protection-repair.mjs --group <compat group id|root> [--write]');
  if(group==='root'){
    const plan=planRootProtection();
    console.log(JSON.stringify(plan.alreadyApplied?plan:{repairID:plan.repairID,consumers:plan.consumers,changes:plan.changes},null,2));
    if(process.argv.includes('--write'))console.log(JSON.stringify(applyRootProtection(plan),null,2));
  }else{
    const plan=planProtectionRepair(group);
    console.log(JSON.stringify(plan.alreadyApplied?plan:{repairID:plan.repairID,oldPrefix:plan.oldPrefix,newPrefix:plan.newPrefix,consumers:plan.consumers,changes:plan.changes},null,2));
    if(process.argv.includes('--write'))console.log(JSON.stringify(applyRepair(plan),null,2));
  }
}

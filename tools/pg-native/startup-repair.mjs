import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {root,state,digest,verifyNative} from './state.mjs';
import {inspectBoot,rewriteBoot} from './bootstrap.mjs';
import {applyRepair} from './legacy-repair.mjs';

export const originalHash='f05b67af7ed54001a899b54b53ec07a6e4cdefe57ec1c2a46fdcd29087fa7116';
export const repairedHash='f62aac693562c3400ffababac319cbffe47c569b8d55f240ecd19248042cd229';
const repairID='legacy-106-boot-propagation';

export function repairStartup(source){
  assert.equal(digest(source),originalHash,'unrecognized startup shell');
  assert.equal(digest(source.slice(479771,481701)),'1d9c05f7a0cb1e21dcd077c94e83339747eb32e89d3b23e8ebc766b19f46defb','startup observer changed');
  let result=source;
  // Splash只观察启动阶段，不能取消推进阶段的Low监听；保留检测计算、返回值和字节偏移。
  for(const [start,end]of [[481670,481699],[480513,480542]]){
    assert.equal(source.slice(start,end),'_0x2be8af[_0x4de45d(0x9d2)]()');
    result=result.slice(0,start)+'void 0'.padEnd(end-start)+result.slice(end);
  }
  assert.equal(result.length,source.length);assert.equal(digest(result),repairedHash);
  return result;
}

export function planStartupRepair(){
  const m=state();if(m.repairs?.some(r=>r.id===repairID))return {alreadyApplied:true};
  verifyNative();
  const game=m.games.find(g=>g.id==='106'),group=m.groups.find(g=>g.sharedPath===game.sharedPath);
  const consumers=m.games.filter(g=>g.sharedPath===game.sharedPath&&g.modules.includes('3c4695a542')).map(g=>g.id).sort();
  assert.deepEqual(consumers,['106','1402846']);
  const oldPrefix=game.sharedPath.slice(1),files=new Map();
  const disk=[];
  function scan(directory){for(const entry of fs.readdirSync(directory,{withFileTypes:true})){assert(!entry.isSymbolicLink());const file=path.join(directory,entry.name);if(entry.isDirectory())scan(file);else disk.push(path.relative(root,file));}}
  scan(path.join(root,oldPrefix));
  const entries=m.outputs.filter(e=>e.path.startsWith(oldPrefix));assert.deepEqual(disk.sort(),entries.map(e=>e.path).sort(),'unrecorded group file');
  for(const e of entries){const bytes=fs.readFileSync(path.join(root,e.path));assert.equal(digest(bytes),e.sha256);files.set(e.path.slice(oldPrefix.length),{...e,bytes});}
  const metaPath='3c4695a542/index.json',metaRecord=files.get(metaPath),meta=JSON.parse(metaRecord.bytes);
  const previous=files.get('3c4695a542/'+meta.main),fixed=repairStartup(previous.bytes.toString());
  const name='b526e03cc3.'+repairedHash.slice(0,16)+'.js',changes=[];
  function add(relative,bytes,source,kind){bytes=Buffer.from(bytes);const sha256=digest(bytes),transform=repairID+'-'+kind;files.set(relative,{bytes,sha256,source,transform});changes.push({relative,sha256,source,kind});}
  add('3c4695a542/'+name,fixed,previous.source,'asset');
  add(metaPath,JSON.stringify({...meta,main:name}),metaRecord.source,'metadata');
  const newPrefix='shared/compat/'+digest(JSON.stringify([...files].map(([p,v])=>[p,v.sha256]).sort())).slice(0,12)+'/';
  const boots=group.games.map(id=>{const g=m.games.find(g=>g.id===id),r=m.mainRules.find(r=>r.id===id),b=inspectBoot(path.join(m.checkpoint,'tree'),id),result=rewriteBoot(b,'/'+newPrefix,[...(r.applied?[r.applied]:[]),...r.dormant]);return {path:g.boot,bytes:Buffer.from(result.contents),sha256:digest(result.contents)};});
  return {m,group,oldPrefix,newPrefix,consumers,files,changes,boots,repairID};
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const plan=planStartupRepair();console.log(JSON.stringify(plan.alreadyApplied?plan:{oldPrefix:plan.oldPrefix,newPrefix:plan.newPrefix,consumers:plan.consumers,movedGames:plan.group.games,changes:plan.changes},null,2));
  if(process.argv.includes('--write'))console.log(JSON.stringify(applyRepair(plan),null,2));
}

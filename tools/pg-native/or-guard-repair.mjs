// base 主包规则的入口守卫修复（默认只读计划，--write 才写入）。
// 背景：迁移时入口初始切换沿用引擎原规则 r==="assets/main" 的约束，只要带 or 参数就不切换主包；
// LuckyPG-GO 的进入游戏地址固定带 or={Address}，shell 得到的绝对 GameDir 就是页面所在目录，
// 结果全部 base 规则游戏实际启动时都加载原主包。此处按当前生成器的 BASE_GUARD 重写这些入口。
// 只重写入口与清单记录；主包、shell 及 engine 字节不变。
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {root,state,digest,manifestPath,verifyNative} from './state.mjs';
import {inspectBoot,rewriteBoot,BASE_GUARD,LEGACY_BASE_GUARD} from './bootstrap.mjs';

const rulesOf=r=>[...(r.applied?[r.applied]:[]),...r.dormant];
const occurrences=(text,part)=>text.split(part).length-1;

export function planOrGuard(){
  const m=state();verifyNative();const plans=[];
  for(const rule of m.mainRules.filter(r=>r.applied?.base==='assets/main')){
    const g=m.games.find(x=>x.id===rule.id);assert(g,`unknown game ${rule.id}`);
    const current=fs.readFileSync(path.join(root,g.boot),'utf8');
    const next=rewriteBoot(inspectBoot(path.join(m.checkpoint,'tree'),rule.id),g.sharedPath,rulesOf(rule));
    assert.deepEqual(next.mainRule,rule.applied,`main rule not selected: ${rule.id}`);
    assert.equal(occurrences(next.contents,BASE_GUARD),1,`guard not unique: ${g.boot}`);
    if(next.contents===current){plans.push({id:rule.id,alreadyApplied:true});continue;}
    // 只接受“按旧守卫生成的结果与当前入口逐字节一致”的入口，避免覆盖迁移后另行修改的入口。
    assert.equal(next.contents.replace(BASE_GUARD,()=>LEGACY_BASE_GUARD),current,`entry changed after migration: ${g.boot}`);
    plans.push({id:rule.id,boot:g.boot,entry:next.contents});
  }
  return {m,plans};
}

export function applyOrGuard({m,plans}){
  const todo=plans.filter(p=>!p.alreadyApplied);if(!todo.length)return {alreadyApplied:true};
  const before=fs.readFileSync(manifestPath,'utf8'),entries=todo.map(p=>({file:path.join(root,p.boot),source:fs.readFileSync(path.join(root,p.boot))}));
  try{
    for(const p of todo)fs.writeFileSync(path.join(root,p.boot),p.entry);
    for(const p of todo){const record=m.outputs.find(x=>x.path===p.boot);assert(record,`entry record missing: ${p.boot}`);record.sha256=digest(p.entry);}
    m.identity=digest(JSON.stringify({entries:m.games,groups:m.groups,outputs:m.outputs.map(e=>[e.path,e.sha256]).sort()}));
    fs.writeFileSync(manifestPath+'.tmp',JSON.stringify(m,null,2)+'\n');fs.renameSync(manifestPath+'.tmp',manifestPath);
    return verifyNative();
  }catch(error){
    // 普通 I/O 或校验失败时恢复入口与清单；进程被强制终止仍需检查点恢复。
    for(const e of entries)fs.writeFileSync(e.file,e.source);fs.writeFileSync(manifestPath,before);fs.rmSync(manifestPath+'.tmp',{force:true});
    throw error;
  }
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const plan=planOrGuard();
  const todo=plan.plans.filter(p=>!p.alreadyApplied);
  console.log(JSON.stringify({games:plan.plans.length,alreadyApplied:plan.plans.length-todo.length,todo:todo.map(p=>p.boot)},null,2));
  if(process.argv.includes('--write'))console.log(JSON.stringify(applyOrGuard(plan),null,2));
}

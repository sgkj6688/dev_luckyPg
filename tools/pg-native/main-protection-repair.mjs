// 游戏主包内嵌客户端保护载荷修复（默认只读计划，--write 才写入）。
// 背景：部分游戏主包自带一套保护模块，日期概率判定命中后经事件总线执行回调，改写
// Sequence/Spawn._actionOneTwo、Scheduler.update、Node.dispatchEvent 等引擎方法（无法点击投注）。
// 共享组修复无法覆盖主包，此处按 main-protection-recipes.json 等长中和回调，生成按内容哈希命名的新主包，
// 再以 mainRules（from/config→to）写入入口 __PG_MAIN_SELECTION，在 shell.start 前切换初始主包索引。
// 原主包保留（缓存兼容与回滚依据），不原地修改哈希资源。
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {root,state,digest,manifestPath,verifyNative} from './state.mjs';
import {inspectBoot,rewriteBoot} from './bootstrap.mjs';
import {fixedClientPlugin} from '../pg-compat/client-protection.mjs';

export const mainRecipes=JSON.parse(fs.readFileSync(new URL('./main-protection-recipes.json',import.meta.url),'utf8'));
const rulesOf=r=>[...(r.applied?[r.applied]:[]),...r.dormant];

export function planMainProtection(){
  const m=state();verifyNative();const plans=[];
  for(const [id,recipe] of Object.entries(mainRecipes.games)){
    const g=m.games.find(x=>x.id===id),rule=m.mainRules.find(x=>x.id===id);assert(g&&rule,`unknown game ${id}`);
    const target=`${id}/assets/main/index.${recipe.to}.js`;
    if(g.main.index===recipe.to){assert.equal(digest(fs.readFileSync(path.join(root,target))),recipe.fixedSha256,`applied main changed: ${id}`);plans.push({id,alreadyApplied:true});continue;}
    // 只接受配方登记的当前活动主包；已有其他主包规则时停止，避免覆盖既有修复语义。
    assert.equal(g.main.index,recipe.from,`unexpected active main: ${id}`);assert.equal(g.main.config,recipe.config,`unexpected main config: ${id}`);
    assert.equal(rule.applied,null,`existing main rule: ${id}`);
    const source=fs.readFileSync(path.join(root,recipe.path),'utf8');assert.equal(digest(source),recipe.sha256,`unknown main source: ${id}`);
    const fixed=fixedClientPlugin(source,recipe);assert.equal(digest(fixed),recipe.fixedSha256,`main repair output changed: ${id}`);
    assert.equal(recipe.to,recipe.fixedSha256.slice(0,8));assert(!fs.existsSync(path.join(root,target)),`target exists: ${target}`);
    // 入口由检查点原文重新生成；先确认按原规则生成的结果与当前入口逐字节一致，避免覆盖迁移后另行修改的入口。
    const boot=inspectBoot(path.join(m.checkpoint,'tree'),id),current=fs.readFileSync(path.join(root,g.boot),'utf8');
    assert.equal(rewriteBoot(boot,g.sharedPath,rulesOf(rule)).contents,current,`entry changed after migration: ${g.boot}`);
    const applied={base:null,from:recipe.from,config:recipe.config,to:recipe.to},next=rewriteBoot(boot,g.sharedPath,[applied,...rule.dormant]);
    assert.deepEqual(next.mainRule,applied,`main rule not selected: ${id}`);
    plans.push({id,boot:g.boot,target,source:recipe.path,fixed,entry:next.contents,applied});
  }
  return {m,plans};
}

export function applyMainProtection({m,plans}){
  const todo=plans.filter(p=>!p.alreadyApplied);if(!todo.length)return {alreadyApplied:true};
  const before=fs.readFileSync(manifestPath,'utf8'),entries=todo.map(p=>({file:path.join(root,p.boot),source:fs.readFileSync(path.join(root,p.boot))}));
  const written=[];
  try{
    for(const p of todo){fs.writeFileSync(path.join(root,p.target),p.fixed,{flag:'wx'});written.push(path.join(root,p.target));}
    for(const p of todo)fs.writeFileSync(path.join(root,p.boot),p.entry);
    for(const p of todo){
      const g=m.games.find(x=>x.id===p.id);g.main.index=p.applied.to;
      m.mainRules.find(x=>x.id===p.id).applied=p.applied;
      const record=m.outputs.find(x=>x.path===p.boot);assert(record,`entry record missing: ${p.boot}`);record.sha256=digest(p.entry);
      m.outputs.push({path:p.target,sha256:digest(p.fixed),source:p.source,transform:'main-protection'});
    }
    m.identity=digest(JSON.stringify({entries:m.games,groups:m.groups,outputs:m.outputs.map(e=>[e.path,e.sha256]).sort()}));
    fs.writeFileSync(manifestPath+'.tmp',JSON.stringify(m,null,2)+'\n');fs.renameSync(manifestPath+'.tmp',manifestPath);
    return verifyNative();
  }catch(error){
    // 普通 I/O 或校验失败时恢复入口与清单，并删除本次新建主包；进程被强制终止仍需检查点恢复。
    for(const e of entries)fs.writeFileSync(e.file,e.source);fs.writeFileSync(manifestPath,before);
    for(const f of written)fs.rmSync(f,{force:true});fs.rmSync(manifestPath+'.tmp',{force:true});
    throw error;
  }
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const plan=planMainProtection();
  console.log(JSON.stringify(plan.plans.map(p=>p.alreadyApplied?p:{id:p.id,boot:p.boot,source:p.source,target:p.target,rule:p.applied}),null,2));
  if(process.argv.includes('--write'))console.log(JSON.stringify(applyMainProtection(plan),null,2));
}

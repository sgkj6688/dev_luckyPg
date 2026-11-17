import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { metadata } from '../pg-compat/lib.mjs';
import { inspectBoot, rewriteBoot } from './bootstrap.mjs';

export const root = path.resolve(fileURLToPath(new URL('../..', import.meta.url)));
export const sha = value => createHash('sha256').update(value).digest('hex');
const json = value => JSON.stringify(value);
const cache = new Map();
function artifact(file, oldPath) {
  const real = fs.realpathSync(file);
  if (!cache.has(real)) { const bytes = fs.readFileSync(real); cache.set(real, { sha256: sha(bytes), size: bytes.length, source: real }); }
  return { ...cache.get(real), oldPath };
}
function generated(contents, oldPath, transform) { return { sha256: sha(contents), size: Buffer.byteLength(contents), contents, oldPath, transform }; }
function text(record) { return record.contents ?? fs.readFileSync(record.source, 'utf8'); }
function listFiles(directory, prefix = '') {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(e => e.isDirectory() ? listFiles(path.join(directory,e.name),prefix+e.name+'/') : [prefix+e.name]);
}
export function normalizeEngine(source) {
  const rules=[];
  let contents=source.replace(/if\(n==="main"&&(r==="assets\/main"&&)?a==="([a-z0-9]+)"&&s==="([a-z0-9]+)"\)\{a="([a-z0-9]+)";\}/g,(_,base,from,config,to)=>{rules.push({base:base?'assets/main':null,from,config,to});return '';});
  const anchor='"string"==typeof o?s=a=o:o&&(s=o.config,a=o.index);';
  if(contents.includes(anchor)) {
    assert.equal(contents.split(anchor).length,2);
    // 初启读取原生 bundleVers；显式传入旧 version 时也保留原有精确修复选择。
    contents=contents.replace(anchor,anchor+'if(n==="main"&&window.__PG_MAIN_SELECTION){for(var pgRules=window.__PG_MAIN_SELECTION,pgI=0;pgI<pgRules.length;pgI++){var pgRule=pgRules[pgI];if((pgRule.base===null||r===pgRule.base)&&s===pgRule.config&&a===pgRule.from){a=pgRule.to;break;}}}');
  } else assert.equal(rules.length,0);
  new vm.Script(contents);
  return { contents, rules };
}
function engineIndex(source, name) {
  const cc={},exports={},registrations=[];
  vm.runInNewContext(source,{cc,System:{register(deps,declare){registrations.push(deps);declare((k,v)=>{if(typeof k==='object')Object.assign(exports,k);else exports[k]=v;},{meta:{url:'metadata-origin'}}).execute();}}},{timeout:1000});
  assert.equal(registrations.length,1);assert.equal(registrations[0].length,1);
  assert.deepEqual(Object.keys(exports),['_$meta']);assert.deepEqual(Object.keys(cc),['_builtins']);assert.equal(cc._builtins.url,'metadata-origin');
  const builtins={...cc._builtins};delete builtins.url;
  return `System.register([${json('./'+name)}],function(exports,imports){return{setters:[function(){}],execute:function(){cc&&(cc._builtins=Object.assign({url:imports.meta.url},${json(builtins)}));exports('_$meta',${json(exports._$meta)});}};});\n`;
}
function compatible(a,b) { for(const [p,v]of b) if(a.has(p)&&a.get(p).sha256!==v.sha256)return false;return true; }
function merge(a,b) { assert(compatible(a,b),'conflicting group');for(const [p,v]of b)if(!a.has(p))a.set(p,v); }

export function makePlan(checkpoint) {
  const input=path.join(checkpoint,'tree');
  const frozen=JSON.parse(fs.readFileSync(path.join(checkpoint,'manifest.json')));
  assert(frozen.verified);const ids=fs.readdirSync(input).filter(x=>/^\d+$/.test(x)&&fs.existsSync(path.join(input,x,'index.html'))).sort((a,b)=>Number(a)-Number(b));
  const modulePool=new Map(), oldGenerated=new Set();
  const oldPointer=path.join(input,'shared/releases/current.json');
  if(fs.existsSync(oldPointer)){const r=JSON.parse(fs.readFileSync(oldPointer)).release;const m=JSON.parse(fs.readFileSync(path.join(input,'shared/releases',r,'manifest.json')));for(const a of m.aliases)if(a.generated)oldGenerated.add(a.path);}
  // 以当前工作树中各模块的真实文件建立补齐池；不从示例目录覆盖当前版本。
  for(const id of fs.readdirSync(input).filter(x=>/^\d+$/.test(x))) {
    const base=path.join(input,id,'shared');if(!fs.existsSync(base))continue;
    for(const rel of listFiles(base)){
      if(rel.endsWith('.DS_Store')||oldGenerated.has(`${id}/shared/${rel}`))continue;
      const record=artifact(path.join(base,rel),`${id}/shared/${rel}`);
      if(!modulePool.has(rel))modulePool.set(rel,new Map());
      const variants=modulePool.get(rel);if(!variants.has(record.sha256))variants.set(record.sha256,{record,count:0});variants.get(record.sha256).count++;
    }
  }
  const fallback=new Map([...modulePool].map(([p,v])=>[p,[...v.values()].sort((a,b)=>b.count-a.count||a.record.sha256.localeCompare(b.record.sha256))[0].record]));
  const games=[],missing=[], defaultModules=new Map(), metaCache=new Map();
  for(const id of ids){
    const boot=inspectBoot(input,id),options=boot.observed.options;
    const modules=new Set([options.ShellDir.replace(/\/$/,''),...options.Plugins.split(',')]);
    const files=new Map(),rules=[];const selected=[];
    for(const module of modules){
      const isShell=module===options.ShellDir.replace(/\/$/,'');
      const name=`${module}/${isShell?'index.json':'index.js'}`;
      const local=path.join(input,id,'shared',name);
      const index=fs.existsSync(local)?artifact(local,`${id}/shared/${name}`):fallback.get(name);
      assert(index,`${id}: missing module ${name}`);
      const source=text(index);
      if(!metaCache.has(index.sha256))metaCache.set(index.sha256,isShell?JSON.parse(source):metadata(source));
      const meta=metaCache.get(index.sha256);
      const entry=isShell?meta.main:meta.exports._$meta?.entry || meta.dependencies.find(x=>x.startsWith('./')&&x.endsWith('.js'));
      assert(entry,`${id}/${module}: no entry`);
      const primary=path.posix.normalize(`${module}/${entry}`),stem=path.posix.basename(primary).split('.')[0];
      const mf=new Map();
      for(const [p,v]of fallback){
        if(!p.startsWith(module+'/'))continue;
        const rest=p.slice(module.length+1);
        if(rest==='index.js'||rest==='index.json')continue;
        // 同一主脚本的其他哈希是历史版本；保留真正的附属脚本与完整资源目录。
        if(!rest.includes('/')&&rest.startsWith(stem+'.')&&rest.endsWith('.js')&&p!==primary)continue;
        const own=path.join(input,id,'shared',p);
        mf.set(p,fs.existsSync(own)?artifact(own,`${id}/shared/${p}`):v);
      }
      const active=mf.get(primary);assert(active,`${id}: missing active ${primary}`);
      mf.set(name,index);
      if(['0bc343f586','c03a2652ad'].includes(module)){
        const result=normalizeEngine(text(active));rules.push(...result.rules);
        if(result.contents!==text(active)){
          const newName=stem+'.'+sha(result.contents).slice(0,16)+'.js';
          mf.delete(primary);mf.set(`${module}/${newName}`,generated(result.contents,active.oldPath,'extract-main-selection'));
          mf.set(name,generated(engineIndex(source,newName),index.oldPath,'select-shared-engine'));
        }
      }
      if(!isShell){
        for(const dep of meta.dependencies){
          if(dep.startsWith('./')){const p=path.posix.normalize(module+'/'+dep);if(p!==primary&&!mf.has(p))missing.push({game:id,path:p});}
          else if(/^[a-f0-9]{10}$/.test(dep))modules.add(dep);
        }
        for(const dep of Object.keys(meta.exports._$meta?.dependencies||{}))modules.add(dep);
      }
      merge(files,mf);selected.push({module,files:mf});
      const signature=sha(json([...mf].map(([p,v])=>[p,v.sha256]).sort()));
      if(!defaultModules.has(module))defaultModules.set(module,new Map());
      const choices=defaultModules.get(module);if(!choices.has(signature))choices.set(signature,{count:0,files:mf});choices.get(signature).count++;
    }
    games.push({id,boot,files,rules,selected});
  }
  const defaultFiles=new Map();
  for(const choices of defaultModules.values())merge(defaultFiles,[...choices.values()].sort((a,b)=>b.count-a.count)[0].files);
  const groups=[{files:defaultFiles,games:[],prefix:'/shared/'}];
  for(const game of games){let group=groups.find(g=>compatible(g.files,game.files));if(!group){group={files:new Map(),games:[]};groups.push(group);}merge(group.files,game.files);group.games.push(game.id);game.group=group;}
  for(const group of groups)if(!group.prefix)group.prefix='/shared/compat/'+sha(json([...group.files].map(([p,v])=>[p,v.sha256]).sort())).slice(0,12)+'/';
  const outputs=new Map(),entries=[],mappings=[],mainRules=[];
  for(const group of groups)for(const [relative,record]of group.files)outputs.set(group.prefix.slice(1)+relative,record);
  if(fallback.has('service-worker/sw.js'))outputs.set('shared/service-worker/sw.js',fallback.get('service-worker/sw.js'));
  for(const game of games){
    const result=rewriteBoot(game.boot,game.group.prefix,game.rules);
    const relative=path.relative(input,game.boot.file);outputs.set(relative,generated(result.contents,relative,'native-SharedPath-and-main'));
    const settings=game.boot.observed.settings, index=result.mainRule?.to||settings.bundleVers.main.index;
    assert(fs.existsSync(path.join(input,game.id,`assets/main/index.${index}.js`)),`${game.id}: selected main missing ${index}`);
    entries.push({id:game.id,boot:relative,sharedPath:game.group.prefix,shellDir:game.boot.observed.options.ShellDir,modules:[...new Set(game.selected.map(x=>x.module))],main:{config:settings.bundleVers.main.config,index},sourceMain:settings.bundleVers.main});
    mainRules.push({id:game.id,applied:result.mainRule,dormant:result.dormantRules});
    for(const [relative,record]of game.files)mappings.push({game:game.id,oldPath:record.oldPath,oldSha256:artifact(path.join(input,record.oldPath),record.oldPath).sha256,newPath:game.group.prefix.slice(1)+relative,sha256:record.sha256,transform:record.transform});
  }
  const privateLinks=[];
  for(const [relative,entry]of Object.entries(frozen.entries)){
    if(entry.type!=='link'||relative.startsWith('.git/'))continue;
    if(/^\d+\/shared\//.test(relative))continue;
    privateLinks.push({relative,...artifact(path.join(input,relative),relative)});
  }
  const serialGroups=groups.map(g=>({sharedPath:g.prefix,games:g.games,files:g.files.size}));
  const identity=sha(json({entries,groups:serialGroups,outputs:[...outputs].map(([p,v])=>[p,v.sha256]).sort()}));
  return {checkpoint,input,frozen,identity,outputs,entries,groups:serialGroups,mappings,privateLinks,mainRules,missing};
}

export function summary(plan) { return {identity:plan.identity,games:plan.entries.length,groups:plan.groups,sharedFiles:[...plan.outputs.keys()].filter(p=>p.startsWith('shared/')).length,sharedBytes:[...plan.outputs].filter(([p])=>p.startsWith('shared/')).reduce((n,[p,v])=>n+v.size,0),privateLinks:plan.privateLinks.length,mainSelections:plan.mainRules.filter(x=>x.applied).length,dormantMainRules:plan.mainRules.filter(x=>x.dormant.length).map(x=>x.id),missing:plan.missing}; }

export function applyPlan(plan) {
  assert.equal(plan.missing.length,0,'missing dependencies');
  // 写入前对将要改动或删除的路径完整核对；禁止覆盖检查点之后的新工作。
  const remove=[];
  for(const [relative,entry]of Object.entries(plan.frozen.entries)){
    if(relative.startsWith('.git/'))continue;
    if(/^\d+\/shared\//.test(relative)||relative.startsWith('shared/objects/')||relative.startsWith('shared/releases/'))remove.push(relative);
  }
  const touched=new Set([...remove,...plan.privateLinks.map(x=>x.relative),...plan.outputs.keys()]);
  for(const relative of touched){
    const file=path.join(root,relative),before=plan.frozen.entries[relative];
    if(!before){assert(!fs.existsSync(file),`unexpected target: ${relative}`);continue;}
    if(before.type==='link')assert(fs.lstatSync(file).isSymbolicLink()&&fs.readlinkSync(file)===before.target,`changed link: ${relative}`);
    else assert.equal(sha(fs.readFileSync(file)),before.sha256,`changed file: ${relative}`);
  }
  function write(relative,record){const file=path.join(root,relative);fs.mkdirSync(path.dirname(file),{recursive:true});const temp=file+'.native-tmp';assert(!fs.existsSync(temp));fs.writeFileSync(temp,record.contents??fs.readFileSync(record.source),{flag:'wx',mode:0o644});assert.equal(sha(fs.readFileSync(temp)),record.sha256);fs.renameSync(temp,file);}
  for(const item of plan.privateLinks)write(item.relative,item);
  for(const [relative,record]of plan.outputs)write(relative,record);
  for(const [relative,record]of plan.outputs)assert.equal(sha(fs.readFileSync(path.join(root,relative))),record.sha256);
  for(const item of plan.privateLinks)assert(!fs.lstatSync(path.join(root,item.relative)).isSymbolicLink());
  for(const relative of remove)fs.unlinkSync(path.join(root,relative));
  function empty(directory){if(!fs.existsSync(directory))return;for(const entry of fs.readdirSync(directory,{withFileTypes:true}))if(entry.isDirectory())empty(path.join(directory,entry.name));if(!fs.readdirSync(directory).length)fs.rmdirSync(directory);}
  for(const name of fs.readdirSync(root).filter(x=>/^\d+$/.test(x)))empty(path.join(root,name,'shared'));
  empty(path.join(root,'shared/objects'));empty(path.join(root,'shared/releases'));
  const preservedFiles=Object.entries(plan.frozen.entries).filter(([p,e])=>/^\d+\//.test(p)&&!/^\d+\/shared\//.test(p)&&e.type==='file'&&!plan.outputs.has(p)).map(([p,e])=>({path:p,sha256:e.sha256}));
  const manifest={schemaVersion:1,identity:plan.identity,checkpoint:plan.checkpoint,sourceHead:plan.frozen.head,games:plan.entries,groups:plan.groups,mappings:plan.mappings,mainRules:plan.mainRules,outputs:[...plan.outputs].map(([p,v])=>({path:p,sha256:v.sha256,source:v.oldPath,transform:v.transform})),privateFiles:plan.privateLinks.map(x=>({path:x.relative,sha256:x.sha256})),preservedFiles,removed:remove};
  fs.mkdirSync(path.join(root,'reports/pg-native'),{recursive:true});fs.writeFileSync(path.join(root,'reports/pg-native/migration.json'),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'});
  return manifest;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
  const cp=process.argv[process.argv.indexOf('--checkpoint')+1];assert(cp&&fs.existsSync(path.join(cp,'manifest.json')),'--checkpoint required');
  const plan=makePlan(cp);console.log(JSON.stringify(summary(plan),null,2));
  if(process.argv.includes('--write')){assert.equal(process.argv[process.argv.indexOf('--expect')+1],plan.identity,'review plan identity first');applyPlan(plan);}
}

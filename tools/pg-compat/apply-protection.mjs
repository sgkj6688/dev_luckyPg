import { legacyGate } from './native-layout.mjs';
legacyGate();
import { writeFileChecked } from './file-io.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { read, sha, snapshotGame, replaceOnce } from './lib.mjs';
import { removeEngineCorruption } from './protection.mjs';
const root=fileURLToPath(new URL('../..',import.meta.url));
const targets=JSON.parse(read(path.join(root,'tools/pg-compat/targets.json'))).games;
const receiptPath=path.join(root,'reports/pg-1926/applied.json');
const receipt=JSON.parse(read(receiptPath));
const plans=[];
for(const target of targets){
  const snapshot=snapshotGame(root,target),old=snapshot.files.shell,done=receipt.games.find(x=>x.game===target.id);
  for(const file of [old.path,old.manifest])assert.equal(done?.files.find(x=>x.path===file)?.sha256,sha(read(path.join(root,file))),target.id+': current shell changed');
  const source=read(path.join(root,old.path)),fixed=removeEngineCorruption(source);
  if(fixed===source){plans.push({game:target.id,actions:[]});continue;}
  new vm.Script(fixed);
  const name=path.posix.basename(old.path).split('.')[0]+'.'+sha(fixed).slice(0,8)+'.js';
  const newPath=path.posix.join(path.posix.dirname(old.path),name);
  if(fs.existsSync(path.join(root,newPath)))assert.equal(read(path.join(root,newPath)),fixed,'refuse to overwrite asset');
  const manifest=replaceOnce(read(path.join(root,old.manifest)),path.posix.basename(old.path),name,'protection shell entry');
  plans.push({game:target.id,actions:[{path:newPath,contents:fixed,sha256:sha(fixed)},{path:old.manifest,contents:manifest,sha256:sha(manifest)}]});
}
if(process.argv.includes('--write')){
  for(const plan of plans)for(const a of plan.actions)writeFileChecked(path.join(root,a.path),a.contents);
  for(const plan of plans){const done=receipt.games.find(x=>x.game===plan.game);for(const {path,sha256} of plan.actions){const old=done.files.find(x=>x.path===path);if(old)old.sha256=sha256;else done.files.push({path,sha256});}done.engineProtectionFixed=true;}
  writeFileChecked(receiptPath,JSON.stringify(receipt,null,2)+'\n');
}
console.log(JSON.stringify({mode:process.argv.includes('--write')?'write':'dry-run',games:plans.map(p=>({game:p.game,actions:p.actions.map(({contents,...a})=>a)}))},null,2));

import { legacyGate } from './native-layout.mjs';
legacyGate();
import { writeFileChecked } from './file-io.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { read,sha } from './lib.mjs';
import { clientSnapshot,planClientProtection } from './client-protection.mjs';
const root=fileURLToPath(new URL('../..',import.meta.url)),args=process.argv.slice(2);
const targets=JSON.parse(read(path.join(root,'tools/pg-compat/targets.json'))).games;
const index=args.indexOf('--games'),ids=index>=0?args[index+1].split(','):targets.map(x=>x.id);
assert.ok(ids.length&&ids.every(id=>targets.some(t=>t.id===id)),'unapproved target');
const selected=targets.filter(t=>ids.includes(t.id));
const baselinePath=path.join(root,'reports/pg-1926/client-protection-baseline.json');
const legacyBaselinePath=path.join(root,'reports/pg-1926/legacy-client-protection-baseline.json');
if(args.includes('--freeze-legacy')){
  const games=targets.filter(t=>t.family==='legacy').map(t=>clientSnapshot(root,t));
  writeFileChecked(legacyBaselinePath,JSON.stringify({games},null,2)+'\n',{flag:'wx'});
  console.log(JSON.stringify({frozen:games.length}));
}else if(args.includes('--freeze')){
  writeFileChecked(baselinePath,JSON.stringify({games:targets.map(t=>clientSnapshot(root,t))},null,2)+'\n',{flag:'wx'});
  console.log(JSON.stringify({frozen:targets.length}));
}else{
  const baseline=JSON.parse(read(baselinePath)),baselineHash=sha(read(baselinePath));
  const legacyBaseline=fs.existsSync(legacyBaselinePath)?JSON.parse(read(legacyBaselinePath)):baseline;
  const legacyHash=fs.existsSync(legacyBaselinePath)?sha(read(legacyBaselinePath)):baselineHash;
  const receiptPath=path.join(root,'reports/pg-1926/applied.json'),receipt=JSON.parse(read(receiptPath));
  if(receipt.clientProtectionBaselineHash)assert.equal(receipt.clientProtectionBaselineHash,baselineHash);
  if(receipt.legacyClientProtectionBaselineHash)assert.equal(receipt.legacyClientProtectionBaselineHash,legacyHash);
  for(const target of selected){
    const applied=receipt.games.find(x=>x.game===target.id);
    assert.ok(applied&&Array.isArray(applied.files),'missing application receipt for '+target.id);
  }
  const plans=selected.map(target=>planClientProtection(root,target,(target.family==='legacy'?legacyBaseline:baseline).games.find(x=>x.id===target.id),receipt.games.find(x=>x.game===target.id)));
  if(args.includes('--write')){
    for(const p of plans)for(const a of p.actions.filter(x=>x.kind==='asset'))writeFileChecked(path.join(root,a.path),a.contents);
    for(const p of plans)for(const a of p.actions.filter(x=>x.kind==='manifest'))writeFileChecked(path.join(root,a.path),a.contents);
    for(const p of plans){const game=receipt.games.find(x=>x.game===p.id);for(const {path,sha256}of p.actions){const old=game.files.find(x=>x.path===path);if(old)old.sha256=sha256;else game.files.push({path,sha256});}game.clientProtectionFixed=true;}
    receipt.legacyClientProtectionBaselineHash=legacyHash;
    receipt.clientProtectionBaselineHash=baselineHash;writeFileChecked(receiptPath,JSON.stringify(receipt,null,2)+'\n');
  }
  console.log(JSON.stringify({mode:args.includes('--write')?'write':'dry-run',games:plans.map(p=>({id:p.id,actions:p.actions.map(({contents,...x})=>x)}))},null,2));
}

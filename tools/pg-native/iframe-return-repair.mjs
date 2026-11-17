import fs from 'node:fs';
import assert from 'node:assert/strict';
import {root,state,digest,manifestPath,verifyNative} from './state.mjs';
import {iframeReturnSource} from './iframe-return-source.mjs';
const m=state(),ids=['1648578','1881268'];
const relative='common/iframe-return.'+digest(iframeReturnSource).slice(0,16)+'.js';
const edits=ids.map(id=>{
  const file=id+'/index.html',source=fs.readFileSync(root+'/'+file,'utf8'),record=[...m.outputs,...m.preservedFiles,...m.privateFiles].find(r=>r.path===file);
  assert(record&&digest(source)===record.sha256,'entry changed');
  const tag='<script src="/'+relative+'"></script>';
  assert(!source.includes('iframe-return.'),'already applied');assert.equal(source.split('</head>').length,2);
  return {file,source,next:source.replace('</head>',tag+'</head>'),record};
});
console.log(JSON.stringify({games:ids,script:relative,entryHashes:edits.map(e=>({file:e.file,before:digest(e.source),after:digest(e.next)}))},null,2));
if(process.argv.includes('--write')){
  verifyNative();
  const backup='/private/tmp/pg-iframe-return-before.json';assert(!fs.existsSync(backup),'backup exists');
  fs.writeFileSync(backup,JSON.stringify({manifest:fs.readFileSync(manifestPath,'utf8'),entries:edits.map(e=>({file:e.file,source:e.source}))}));
  fs.writeFileSync(root+'/'+relative,iframeReturnSource,{flag:'wx'});
  for(const e of edits){fs.writeFileSync(root+'/'+e.file,e.next);e.record.sha256=digest(e.next);}
  m.outputs.push({path:relative,sha256:digest(iframeReturnSource),transform:'iframe-quit-parent-notification'});
  m.iframeReturnRepair={games:ids,script:relative};
  m.identity=digest(JSON.stringify({entries:m.games,groups:m.groups,outputs:m.outputs.map(e=>[e.path,e.sha256]).sort()}));
  fs.writeFileSync(manifestPath,JSON.stringify(m,null,2)+'\n');console.log(JSON.stringify(verifyNative()));
}

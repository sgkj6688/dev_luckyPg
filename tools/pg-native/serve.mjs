import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { root,state,verifyNative } from './state.mjs';
verifyNative();
const games=new Set(state().games.map(x=>x.id));
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.mp3':'audio/mpeg','.ogg':'audio/ogg','.ttf':'font/ttf','.woff':'font/woff','.woff2':'font/woff2','.wasm':'application/wasm'};
const server=http.createServer((req,res)=>{
  let requested=req.url.split('?')[0];
  if(process.env.PG_NATIVE_AUDIT)res.once('finish',()=>fs.appendFileSync(process.env.PG_NATIVE_AUDIT,JSON.stringify({path:requested,status:res.statusCode})+'\n'));
  const fail=status=>{res.writeHead(status,{'Cache-Control':'no-store'});res.end();};
  try {
    const url=new URL('http://localhost'+req.url);
    const p=decodeURIComponent(url.pathname).replace(/\/+/g,'/');requested=p;
    if(!['GET','HEAD'].includes(req.method))return fail(405);
    // 编码斜杠可能在URL解析后才产生父路径；公开目录判定前拒绝这类路径。
    if(p.includes('\\')||p.split('/').some(segment=>segment==='.'||segment==='..'))return fail(404);
    // 显式拒绝旧地址，不做前缀重写、别名、SPA回退或历史资源回退。
    if(/^\/\d+\/shared(?:\/|$)/i.test(p)||/^\/shared\/(?:objects|releases)(?:\/|$)/i.test(p))return fail(404);
    const top=p.split('/')[1];if(!games.has(top)&&!['shared','common','pages','favicon'].includes(top))return fail(404);
    if(p.includes('\0'))return fail(400);
    const file=path.resolve(root,'.'+p);if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile())return fail(404);
    if(fs.realpathSync(file)!==file||fs.lstatSync(file).isSymbolicLink())return fail(404);
    const size=fs.statSync(file).size,ext=path.extname(file);
    const headers={'Content-Type':mime[ext]||'application/octet-stream','Content-Length':size,'Cache-Control':/\.[a-f0-9]{5,64}\.[a-z0-9]+$/.test(p)?'public, max-age=31536000, immutable':'no-cache','Content-Security-Policy':"connect-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; worker-src 'self' blob:; img-src 'self' data: blob:; media-src 'self' blob:; frame-src 'self'"};
    const range=/^bytes=(\d+)-(\d*)$/.exec(req.headers.range||'');
    if(range){const start=Number(range[1]),end=range[2]?Math.min(Number(range[2]),size-1):size-1;if(start>end||start>=size)return fail(416);res.writeHead(206,{...headers,'Content-Length':end-start+1,'Content-Range':`bytes ${start}-${end}/${size}`});if(req.method==='HEAD')res.end();else fs.createReadStream(file,{start,end}).pipe(res);}
    else{res.writeHead(200,headers);if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res);}
  } catch {fail(400);}
});
const args=process.argv.slice(2);const port=Number(args[args.indexOf('--port')+1])||8898;
server.listen(port,'127.0.0.1',()=>console.log(`Native shared preview http://127.0.0.1:${port}`));

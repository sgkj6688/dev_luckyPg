import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root=path.resolve(fileURLToPath(new URL('../..',import.meta.url)));
export const isNative=()=>fs.existsSync(path.join(root,'reports/pg-native/migration.json'));
// 旧工具在独立历史 fixture 中仍可运行，不要求把新布局模块一起复制进去。
const native=isNative()?await import('../pg-native/state.mjs'):null;
export function legacyGate(){if(native)native.legacyGate();}
export function readHistorical(relative,expected){
  if(native)return native.readHistorical(relative,expected);
  return fs.readFileSync(path.join(root,relative));
}
export function nativeGame(id){return native?.state().games.find(g=>g.id===id);}

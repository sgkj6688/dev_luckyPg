import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { isNative, root } from './native-layout.mjs';

// 旧补丁工具可读取兼容链接，但不能透过链接覆盖其他游戏共用的内容。
export function writeFileChecked(file, contents, options) {
  const absolute = path.resolve(file);
  if (isNative()) {
    const relative = path.relative(root, absolute).split(path.sep).join('/');
    assert(!relative.startsWith('shared/') && !/^\d+\/shared\//.test(relative), '旧工具禁止写入公共模块或重新创建旧 shared 路径');
  }
  assert(!absolute.split(path.sep).join('/').includes('/shared/objects/'), '公共对象不可覆盖；请生成新 SHA-256');
  if (fs.lstatSync(absolute, { throwIfNoEntry: false })?.isSymbolicLink()) {
    assert(!options?.flag?.includes('x'), `目标已经存在: ${file}`);
    assert(fs.readFileSync(absolute).equals(Buffer.from(contents)), `禁止透过兼容链接修改公共资源: ${file}`);
    return;
  }
  return fs.writeFileSync(file, contents, options);
}

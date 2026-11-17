# LuckyPG-COCOS

本仓库保存按游戏 ID 分目录的静态游戏发布产物，以及用于限定版本兼容修复的本地 Node.js 工具。它不是完整的 Cocos Creator 源工程；根目录没有 `package.json`，未提供统一的 npm 安装、开发或构建流程。

## 文档入口

| 文档 | 内容 |
|---|---|
| [AGENTS.md](AGENTS.md) | 授权边界、最小修改、中文注释、产物完整性与验证要求 |
| [兼容工具说明](tools/pg-compat/README.md) | 1926 目标范围、只读检查、写入顺序及基线约束 |
| [原生共享目录](tools/pg-native/README.md) | 原生 SharedPath、公共模块分组、严格旧 URL 404 与校验 |
| [1926 修复简报](reports/pg-1926/REPORT.md) | 历史修复、验证范围、保留输入与详细证据归档位置 |

## 目录与入口

| 路径 | 用途 |
|---|---|
| `<游戏 ID>/index.html` | 单款游戏入口，例如 `1778752/index.html` |
| `shared/<模块ID>/`、`shared/compat/<组>/` | 原生公共模块与完整兼容组；游戏入口的 SharedPath 决定实际选择 |
| `common/init.js`、`common/init.css` | 公共初始化脚本与样式；改动前核对相关游戏引用 |
| `shared/`、`pages/`、`favicon/` | 其他静态清单、图像与图标，按实际引用定位 |
| `tools/pg-compat/` | 版本识别、指纹校验、补丁配方及应用 CLI |
| `tools/pg-native/` | 原生共享迁移、输入/输出校验、严格静态预览与 Nginx 配置 |
| `reports/pg-1926/` | 修复简报，以及工具依赖的基线、运行观察与应用回执 |
| `test/` | 本地定向测试与辅助代码；已由 Git 忽略，新检出不包含 |
| `index.html`、`50x.html` | Nginx 欢迎页与错误页，不是游戏大厅或游戏入口 |

旧 `/<游戏ID>/shared/` URL 不再支持。部署及本地验证要求见[原生共享说明](tools/pg-native/README.md)。

典型排查从 `/<游戏 ID>/index.html` 开始，核对公共初始化、入口实际选中的清单和哈希资源，再追踪失败的资源或业务请求。各游戏版本和活动家族存在差异，不能仅凭文件名相似认定实现一致。

## 业务 API 地址

游戏前端的业务 API 对应服务端 LuckyPG-GO（PG 的 `/web-api/*`、`/game-api/*`），不是 lucky-game-api。151 个入口都以 `../common/init.js` 引用 [`common/init.js`](common/init.js)，由它设置 `window.ApiDomain`：取 URL 参数 `server`，缺失时回退到该分支写死的环境地址。LuckyPG-GO 的 `GetEnterGameUrl` 生成的 PG 游戏地址不带 `server`，因此按部署的分支落到对应环境（2026-11-16 核对各分支源码）：

| 分支 | 回退地址 |
|---|---|
| `dev_AI`、`local` | LuckyPG-GO 测试环境，HTTP `:8000`，与 LuckyPG-GO `update.sh` 的部署主机一致 |
| `main` | `pre` 环境的 HTTPS 域名 |
| `prod`、`prod_brazil`、`prod_india` | 各自生产环境的 HTTPS 域名 |

`main` 与 `prod*` 的 `init.js` 经 packer 压缩，逻辑与 `dev_AI` 相同；分支间合并时保留各自的回退地址。

`window.ApiDomain` 未设置时，部分游戏的 shell 改走同源相对路径 `/server/`，依赖反向代理；见 [`reports/pg-native/migration.json`](reports/pg-native/migration.json) 的 `restoredEntryScripts`（60 不发登录请求，106、128、1402846 走 `/server/`）。`init.js` 总会设置该值，所以只在它未加载时出现。`87/common/init.js` 是未被任何入口引用的旧副本，同样写 `/server/`。

已知问题（2026-11-16 记为后续优化，接口先不改）：所有分支的 `init.js` 都只在 `server` 不是第一个参数时才能识别，且不做 URL 解码。各环境实际请求地址尚未在浏览器中核对。

## 本地查看

如需查看本地静态文件，可在仓库根目录启动仅监听本机的 HTTP 服务：

```sh
node tools/pg-native/serve.mjs --port 8080
```

使用路径 `/<游戏 ID>/index.html`，例如 `/1778752/index.html`；结束后按 `Ctrl+C` 停止服务。根路径显示 Nginx 欢迎页不代表游戏验证通过。

该服务严格拒绝旧共享 URL 和工具、报告等非运行目录，并以 CSP 阻止外部业务连接。它不提供业务 API、登录会话或线上反向代理配置；完整游戏验收需要另行使用已授权的测试环境。

## 运行环境

兼容工具使用 Node.js 内置模块与本地 `.mjs`，无需先执行 npm 安装。已验证的本机 Node.js 版本为 **`v24.16.0`**，验证范围是 [工具说明](tools/pg-compat/README.md#默认只读检查) 中四个默认 dry-run 命令。

这里记录已验证版本，不声明最低支持版本或完整测试结果。仅支持 ESM 不足以保证兼容，工具还使用 `Array.prototype.at()`；本地测试另使用 `node:test`、`node --test` 和 `fs.readdirSync(path, { recursive: true })` 等能力，其他 Node.js 版本需按实际命令验证。

## 检查入口

默认只读命令、阶段依赖和受限目标见 [兼容工具说明](tools/pg-compat/README.md#默认只读检查)；本地测试与页面操作方法见 [定向回归与浏览器验收](tools/pg-compat/README.md#定向回归与浏览器验收)。

## 修改与交付

最小修改、中文注释、资源完整性、授权边界、验证及中文提交说明统一遵循 [AGENTS.md](AGENTS.md)。

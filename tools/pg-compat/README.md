# 1926 本地兼容修复工具

当前已迁移为[原生共享目录](../pg-native/README.md)。检测到新布局后，以下 CLI 默认验证当前布局和历史回执，旧写入/冻结参数停止使用；下文阶段命令保留作原布局历史说明，不能用于新共享目录。

仅面向 [targets.json](targets.json) 中的 11 款发布产物：1778752、94、29、110、35、97、80、85、61、34、1513328。默认生成计划，不写文件；未知版本或指纹变化时拒绝对应操作。

最小修改、中文注释、授权及验证等通用规则见 [AGENTS.md](../../AGENTS.md)，项目入口与已验证的 Node.js 版本见 [README.md](../../README.md#运行环境)，历史修复与验收边界见 [修复简报](../../reports/pg-1926/REPORT.md)。以下命令均从仓库根目录执行。

## 默认只读检查

当前仓库已保存基线、运行观察和应用回执，常规检查无需重新冻结：

```sh
node tools/pg-compat/apply.mjs
node tools/pg-compat/apply-games.mjs
node tools/pg-compat/apply-protection.mjs
node tools/pg-compat/apply-clients.mjs
```

检查退出码、`blocked`（如有）和逐游戏的 `changes`/`actions`，不只看是否打印了 JSON。出现指纹变化、缺少输入或回执不一致时先定位原因，并遵循 [基线与回执约束](../../AGENTS.md#静态资源与兼容工具约束)。已应用情况下的零变更仅说明本地输入无需新增操作。

全仓同族查漏只读输出目标清单以外的候选，不会应用范围外修复：

```sh
node tools/pg-compat/audit.mjs
```

候选来自本地清单与已知指纹，未核实运行时选择，不直接作为新增线上故障结论，也不扩大现有写入范围。

## 写入阶段与依赖

`--write` 会生成资源、切换清单并更新回执，只在本次任务授权的游戏与阶段内执行。先阅读默认计划，确认原始版本、实际活动家族、运行观察和输入指纹一致。下表区分各阶段，不是要求每次都重放全部阶段。

| 工具 | 阶段与必要输入 |
|---|---|
| `apply.mjs` | 公共模块修复；读取现代/旧版基线，写入时必须用 `--observations` 指定实际运行观察 |
| `apply-games.mjs` | 80、85、61、34、1513328 独有主包修复；依赖公共修复、主包基线与 `main-runtime-hashes.json` |
| `apply-protection.mjs` | shell 中已确认的引擎破坏逻辑修复；核对当前 shell 及公共应用回执 |
| `apply-clients.mjs` | 活动 client-protection 插件修复；依赖对应家族的基线与已有公共应用回执 |

公共修复须先于依赖它的阶段；后续每个阶段重新读取当前清单与回执。主包阶段核对 `main-runtime-hashes.json` 中实际服务器响应与原始主包一致。主包文件使用新 SHA 前缀，对应 engine 仅在原 main config/index 匹配时选择新脚本。

以下为各阶段的写入示例，执行前仍需满足上面的授权与输入条件：

```sh
node tools/pg-compat/apply.mjs --write --observations reports/pg-1926/runtime-baseline.json
node tools/pg-compat/apply-games.mjs --write
node tools/pg-compat/apply-protection.mjs --write
node tools/pg-compat/apply-clients.mjs --write
```

`apply.mjs` 与 `apply-clients.mjs` 支持 `--games` 逗号分隔列表，且只接受目标清单内的 ID。`apply-games.mjs` 和 `apply-protection.mjs` 当前没有按游戏筛选逻辑；任务只授权部分游戏时，不得假设传入 `--games` 会限制它们的写入范围。

## 活动插件的补丁约束

- client-protection 按实际活动家族选配方：现代 8 款各 7 个插件、45 个范围（43 个回调与 2 处表达式）；旧版 94/29/34 各 8 个插件、46 个回调。旧版原始指纹独立保存在 `legacy-client-protection-baseline.json`，34 的三种独立 SHA 使用各自配方。未使用的另一家族不应用补丁。
- 这些插件带有栈列号和源码哈希采样约束。工具按配方等长修改已确认范围，保持范围外字节、字节位置与换行；`w0M` 的最小修改保留外层 C5 哈希采样窗口及正常继续回调。不得格式化、直接补注释，或把整个包装器替换为空函数；说明留在对应配方或工具代码旁。

## 定向回归与浏览器验收

`test/` 仅保留本地并由 Git 忽略；新的检出不包含测试文件。确认本地已有测试后执行：

```sh
node --test test/1778752-*.test.mjs test/pg-compat-*.test.mjs
git diff --check
```

测试缺失、分层验收和历史结果的处理统一遵循 [验证与证据](../../AGENTS.md#验证与证据)。

普通 Browser Use 页面验证可复用 [browser-ui.mjs](browser-ui.mjs) 的 `startGameOnce(tab)`。它先等待按钮 visible 和 `#initial-loader` 移除，再确认开始按钮已显示且中心点无遮挡，最后仅点击一次并检查按钮隐藏。不能只等 `.start-button` visible，也不能用自动二次点击掩盖首击失败；该辅助函数不使用 CDP，不读取 Cocos 内部状态。其 `entered` 结果仅代表该 UI 判据完成，不证明资源、音频或业务请求全部成功。

按实际改动补充慢网、超时、迟到响应、失败重试、重复进入/退出等定向场景；移动端触控、冷缓存、iframe 返回大厅、有数据的历史记录及真实下注结算分别验收，不把桌面启动检查当成全部通过。

## 原始基线创建记录

基线必须在首次修改前从原始资源冻结，不能用修改后的文件覆盖历史基线。以下保留最初创建命令供理解输入来源；当前仓库已有这些文件，不应再次执行，也不能删除现有文件后重建：

```sh
node tools/pg-compat/apply.mjs --freeze --output reports/pg-1926/baseline.json
node tools/pg-compat/apply.mjs --freeze --games 94,29,34 --output reports/pg-1926/legacy-baseline.json
node tools/pg-compat/apply-games.mjs --freeze
node tools/pg-compat/apply-clients.mjs --freeze
node tools/pg-compat/apply-clients.mjs --freeze-legacy
```

工具输入清单及仓库外归档位置见 [修复简报](../../reports/pg-1926/REPORT.md)。归档用于恢复证据，不是运行依赖；恢复时核对 manifest，不覆盖当前基线与回执。

# 禅道 1926：11 款游戏修复简报

## 范围与修复

范围：1778752、94、29、110、35、97、80、85、61、34、1513328；对象为静态发布产物，非 Creator 源工程。

- P2：按现代与旧版活动家族修复已确认的引擎破坏回调、renderer 覆写、resolver 缓存失效和共享 sequence 被销毁问题。
- P2：资源请求增加每次尝试 60 秒期限；加载异常进入失败终态，批次隔离并释放迟到响应与 blob URL。
- P2：修复 85/61/34/1513328 的重试实例及任务异常完成路径，修复 80 的资源释放拒绝传递。
- P3：加载结束后清理本次 watchdog 的慢网提示。补丁保留原始资源，以新哈希资源和受限版本选择交付；不改变下注与服务端资金规则。

配方与实现见 `tools/pg-compat/`。保护插件的等长修改、活动家族选择和原始指纹约束保持不变。

## 仓库内保留文件

以下 9 个 JSON 原样保留，不重新冻结、不格式化；它们是应用、重放及完整性校验所需输入。

| 文件 | 用途 |
|---|---|
| `baseline.json`、`legacy-baseline.json` | 现代与旧版公共模块的原始指纹 |
| `main-baseline.json` | 五款独有主包的原始指纹 |
| `client-protection-baseline.json`、`legacy-client-protection-baseline.json` | 活动插件原始指纹与配方校验 |
| `applied.json`、`main-applied.json` | 已应用资源、入口及 SHA-256 回执 |
| `runtime-baseline.json` | 实际入口与活动资源选择，供应用和主包阶段读取 |
| `main-runtime-hashes.json` | 原始主包与实际响应的指纹对应，供主包生成阶段校验 |

`test/` 保留在本地并由 Git 忽略；新检出不含测试文件，运行测试命令前需已有本地副本。

## 验证与边界

复核命令（默认 dry-run 不写游戏资源；测试命令需要本地 `test/`）：

```sh
node tools/pg-compat/apply.mjs
node tools/pg-compat/apply-games.mjs
node tools/pg-compat/apply-protection.mjs
node tools/pg-compat/apply-clients.mjs
node --test test/1778752-*.test.mjs test/pg-compat-*.test.mjs
git diff --check
git diff --cached --check
```

本次精简复核（2026-11-14）：四个工具 dry-run 均零变更、零 blocked；133 项定向测试通过，0 失败、0 跳过；277 个回执资源指纹一致。9 个工具输入与 18 个本地测试文件逐字未变，20 个原始归档文件 SHA-256 一致，工作区与暂存区 diff 检查通过。

历史浏览器验收（2026-11-14，源提交 `bf5f0b60e`）：最终普通桌面 UI 覆盖 143 次首击进入、99 项交互；三款独立专项复测 33/33。普通 UI 等待加载遮罩移除、按钮中心无遮挡后只点击一次。详细记录与早期失败均保存在仓库外归档中，本次精简没有重跑浏览器验收。

未完成：真实 Android/iOS 触控、冷缓存及网络异常全量覆盖、引擎内部性能、实际音频、有数据的历史记录、真实下注与结算。独立游戏页返回大厅不替代嵌入式父页面链路验证。全仓候选扫描未核实运行时选择，不作为新增线上故障结论。

## 详细记录归档

本机仓库外位置：`~/Archives/LuckyPG-COCOS/pg-1926/2026-11-14-bf5f0b60e/`。

归档包含精简前的全部 20 个原始文件与完整报告，`MANIFEST.json` 记录逐文件 SHA-256、大小和仓库内处理方式。仓库内移除 10 份详细浏览器/过程记录；归档不是工具运行依赖。恢复证据时核对 manifest，不覆盖当前基线与回执。

本次提交仅精简报告并调整测试目录的 Git 跟踪，同步项目协作说明与工具文档。游戏资源和工具实现保持不变；不推送、不部署，不改写已有提交。

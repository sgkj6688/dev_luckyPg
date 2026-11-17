# 原生共享目录

游戏自己的入口、主包和资源保留在游戏 ID 目录。公共模块使用根 `shared/<模块ID>/`；有实际内容差异的完整模块组放在 `shared/compat/<组>/`。入口原生 `SharedPath` 在首次启动前选择一组，组内不提供缺失资源回退。

入口保留原有 `or` 和 `GameDir` 处理，最后在调用 `shell.start` 前把 `SharedPath` 转为绝对 URL。不能把根相对路径直接传给 SystemJS：现有 scope 查找会在路径起始斜杠处循环。

旧 `/<游戏ID>/shared/`、`/shared/objects/` 和 `/shared/releases/` 一律失效，不提供别名、重定向或兼容响应。不能把旧 Nginx rewrite、alias 或 SPA 回退重新用于这些路径。

## 检查与预览

使用 Node.js 24。本工具使用 Node 随附的 Acorn 解析引导脚本；不需要 npm 安装。

```sh
node tools/pg-native/verify.mjs
node tools/pg-native/serve.mjs --port 8898
```

浏览器打开 `http://127.0.0.1:8898/60/index.html`。预览只监听本机，并通过 CSP 阻止外部业务连接；它不提供业务 API，也不能替代真实游戏验收。生产仍可直接静态托管仓库运行目录；配套 `nginx-server.conf` 应按实际 server 配置引入并执行 `nginx -t` 和旧 URL 404 检查。本工具不会修改或 reload 生产 Nginx。

本地测试延续项目既有忽略策略：

```sh
PG_NATIVE_ORIGIN=http://127.0.0.1:8898 node --test test/pg-native.test.mjs test/pg-native-legacy.test.mjs test/pg-native-legacy-repair-io.test.mjs test/pg-native-startup.test.mjs test/pg-native-entry-references.test.mjs
```

## 迁移与来源

`reports/pg-native/migration.json` 记录当前检查点、输出指纹、每游戏选择、资源映射及保留文件。检查点在站点外保存完整原工作树，原始历史 baseline/receipt 不改写。

`migrate.mjs --checkpoint <检查点目录>` 默认只读生成计划；只有指定 `--write --expect <计划身份>` 才执行迁移。它是一次性结构迁移工具，已经迁移的目录不能通过重复调用覆盖。执行前建立新检查点，任何后续共享代码修改均需核对全部消费者并生成新哈希，不得原地覆盖哈希资源。

`legacy-repair.mjs` 是当前 106/1402846 旧运行时的限定指纹配方；默认只读，`--write` 才生成新完整组并切换组内入口。97/110 同组的 modern 模块保持字节不变。普通入口切换或 manifest 写入异常会恢复入口；新目录预写失败、进程强制退出仍需检查完整检查点后恢复，不能把它当作在线原子部署工具。已应用时仍核对文件及旧组清理状态，不会重复修复。

`protection-repair.mjs --group <兼容组ID>` 中和未纳入 1926/outside-p2 的兼容组的客户端保护破坏逻辑：旧 `_0x` 混淆 shell 复用 `../pg-compat/protection.mjs` 的 5 个回调配方，新混淆 shell（`mode:"ranges"`）与活动插件按 [protection-recipes.json](protection-recipes.json) 等长替换已确认范围（保持偏移与换行，不得格式化或补注释）。只接受配方登记的原始SHA、修复后SHA与当前活动入口，并要求组内入口与检查点生成结果一致；默认只读输出计划，`--write` 才生成新完整组并切换入口。已登记 `d5a963edde1f`、`0aaefadd8d29`、`11eef0af9abd`、`5855063506b1`、`79352db72ace`，以及只含插件的补充配方 `1838492da73b`（d5 修复后再切组）和其余 18 个兼容组的 `2c6e37b73c` 补充配方，以及 4 个新混淆 shell 组的加载完成状态名判定补充配方（只含 shell，改写位置按版本以运行时实测避开解码器源码采样窗口，不能只凭 vm 解码常量判断）。重新生成入口时，`restoredEntryScripts` 登记的恢复标签（如 60/106/128/1402846 的 `../common/init.js`）须在当前入口中恰好出现一次，去掉后与检查点生成结果逐字节一致，新入口在相同位置补回。`--group root` 处理根公共组：根组是全部 compat 组的上级目录，不整组复制切换，而是在模块目录新增按内容哈希命名的插件并改写无哈希 `index.js`（站点 no-cache），记录写入 `sharedRepairs`，入口不变。游戏主包内自带的保护载荷不在本工具范围。

`main-protection-repair.mjs` 处理游戏主包内嵌的同类保护载荷：按 [main-protection-recipes.json](main-protection-recipes.json) 等长中和登记回调，生成 `index.<内容SHA前8位>.js` 新主包（原主包保留），并以 `mainRules` 的 `from/config→to` 规则重写入口 `__PG_MAIN_SELECTION`。只接受登记的当前活动主包与原始SHA，已有主包规则的游戏不处理；默认只读，`--write` 才写入，普通异常时恢复入口与清单并删除新建主包。当前登记 1738001、1971587；兼容组 engine 无显式版本加载钩子，按原版本显式加载 main 的路径不会切到修复版；运行时核查初始加载、下载器重试与进入游戏后均未出现此类调用（见验收报告）。

`startup-repair.mjs` 补齐该旧族 Splash 监听截断启动事件的问题，只接受已登记的完整SHA和两个调用范围，等长生成新shell及完整组。默认输出计划，`--write` 才切换；实际消费者和来源链写入迁移记录。启动、重试与iframe返回结果见[验收报告](../../reports/pg-native/REPORT.md)和[逐组记录](../../reports/pg-native/acceptance.json)。

`or-guard-repair.mjs` 按当前生成器重写 `base:"assets/main"` 规则游戏的入口守卫：只重写入口并更新清单指纹与迁移身份，主包、shell 及 engine 字节不变。只接受“按旧守卫生成的结果与当前入口逐字节一致”的入口；默认只读输出计划，`--write` 才写入，普通异常时恢复入口与清单。已应用时计划全部为 `alreadyApplied`。

引擎主包分支移到每游戏的 `__PG_MAIN_SELECTION` 数据表。初始加载使用原生 `_CCSettings.bundleVers.main.index`；显式传入版本的加载仍执行原 config/from/base 精确条件。`base` 规则只在解析后的 GameDir 为空或等于页面所在目录时提前修改原生主包索引：LuckyPG-GO 的进入游戏地址固定带 `or={Address}`，GameDir 即页面所在目录。带 `origin` 参数，或 GameDir 指向异主机、异端口、异目录时，不修改。该表不处理资源 URL、鉴权或业务规则。与当前初始主包不匹配的旧规则只保留显式版本语义，不把旧主包强加给新版本。

新布局中，旧 `pg-compat` CLI 的默认检查改为分别校验当前资源和历史回执；旧 `--write`/`--freeze` 被拒绝，防止重新创建游戏内 shared 或单游戏写操作影响其他游戏。历史读取只供工具使用，站点没有历史回退。旧产物路径单元/VM 测试应在检查点 fixture 中运行，当前布局使用原生迁移测试。

目录迁移不等于完整游戏验收。必须分别核对初始主包、插件显式 bundle 版本、冷/热缓存、首击进入、重试、退出重进及移动端；旧缓存页面失败是已接受的切换行为。

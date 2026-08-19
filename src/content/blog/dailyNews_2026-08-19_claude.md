---
title: "Claude 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-19T00:00:00+08:00"
updatedAt: "2026-08-19T13:15:07+08:00"
description: "Claude 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Claude Code v2.1.234"
featuredUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.234"
featuredSummary: "新增 GitLab MR 状态、用量重置自动续跑，并修复 Remote Control、安全、权限和 Windows 等问题。 Claude 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-18 04:20 +08:00"
featuredTags: ["Claude Code"]
tags:
  - "Agent"
  - "Agent SDK"
  - "Anthropic"
  - "Chrome"
  - "Claude"
  - "Claude Code"
  - "Claude Desktop"
  - "Claude Platform"
  - "Comparison"
  - "Cowork"
  - "Data Loss"
  - "Date Unconfirmed"
  - "Design"
  - "Desktop"
  - "GitHub Action"
  - "GLM"
  - "Incident"
  - "Life Sciences"
  - "MCP"
  - "Model"
  - "Permissions"
  - "Plugins"
  - "Remote Control"
  - "Science"
  - "Security"
  - "Sentiment"
  - "Skills"
  - "TUI"
  - "Unverified"
  - "Usage"
  - "VS Code"
  - "Watchlist"
---

## 今日概览

扫描窗口：2026-08-18 13:12:08 至 2026-08-19 13:12:08（Asia/Shanghai）。当天累计确认 Claude Code v2.1.234 与 v2.1.235、Agent SDK TypeScript v0.3.234 与 v0.3.235、Agent SDK Python v0.2.140、Claude Code Action v1.0.194 与 v1.0.195、官方 Skills 提交，以及插件目录同步。官方帮助页现已确认 Claude Code 50% 周限额提升延长至 8 月 31 日；Claude Code Action 主分支另合入公开评论凭据脱敏、子进程环境收紧和 bot 评论过滤修复。多模型性能降级事故已于 03:01 解决，未见新模型发布；截至 13:12 新增的 5 条高信号 Issue 均为用户报告，另保留 1 条可核时的社区效率讨论。

## Tier 1

| 产品 | 状态 |
|---|---|
| Claude Code CLI | [v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)：新增可选拼写检查，修复 LSP 重连缓存失效、权限对话框误授权、后台云会话资源占用与多项 TUI / Remote Control 问题；[50% 周限额提升](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)已延长至 8 月 31 日，仅影响周限额，不改变 5 小时限额 |
| VS Code / JetBrains | v2.1.235 修复多 Claude 面板窗口恢复或重载后焦点自行跳转；新增 [多根工作区 @ 文件搜索 Issue](https://github.com/anthropics/claude-code/issues/87827)，但尚无官方修复确认；JetBrains 无独立新增 |
| Managed Agents（sessions、webhooks、environments、memory stores） | 无独立官方发布；Remote Control 权限模式覆盖、Desktop / CLI 文件权限冲突，以及既有权限检查点与 worktree 隔离用户报告列入观察池 |
| Skills / marketplaces | [discernment-nudge](https://github.com/anthropics/skills/commit/f379e5ad66e2febc1616cf8d6284666fecbe514e) 新增；[academy-guide 更名](https://github.com/anthropics/skills/commit/0a64e398ec6bb34a494f0c347e8ccae53a862f8e)；插件目录有安全插件修正与版本指针同步 |
| Claude Developer Platform | 无新独立发布；旧 Workbench 退役仅作迁移观察项 |
| Agent SDK | [TypeScript v0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235) 跟进 Claude Code v2.1.235；[Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140) 正式发布 MCP 1.x/2.x 并存、subagent 文本转发、结构化 ResultError、字符串 prompt 权限回调与父 tool-use ID 恢复；[Python 主分支](https://github.com/anthropics/claude-agent-sdk-python/commits/main/)提交记录继续保留 |
| Cowork | v1.32352.0 / v1.32352.1 仅披露日期；功能与修复列入日期未确认，Intel Mac 回归列入观察池 |
| Design | 无已核实发布；[HN 转发](https://news.ycombinator.com/item?id=49347512)称官方工程师 X 帖提到 Claude Code 的 Design artboard 工作流，因 X 正文不可读仅列观察候选 |
| Tag / @Claude sessions | 无新增 |
| 当前 Opus、Sonnet、Haiku 编码模型 | 无模型发布；状态页确认多模型性能降级事故已解决，官方最终将影响聚焦到 Opus 5；Claude Code 周限额提升延期已由帮助页确认，但不是模型更新 |

## Tier 2

Chrome / 浏览器 Agent 随 Desktop / Cowork v1.32352.0 收紧全局浏览器授权；v1.32352.1 修复少见 Windows 首次启动失败，但官方只给日期，无法确认是否完全落在窗口内。[Desktop / Cowork 变更日志](https://claude.com/docs/cowork/changelog)

[claude-plugins-official](https://github.com/anthropics/claude-plugins-official/commits/main/) 在窗口内合并 Claude Security 0.10.1 版本修正、目录校验和多项第三方插件指针，截至 09:05 继续同步 Datadog、AWS agents、Netlify、Together AI、Exa、Expo、Firecrawl 等条目；[Knowledge Work 目录](https://github.com/anthropics/knowledge-work-plugins/commits/main/)截至 09:11 同步 DataRobot、Datadog、Exa、TinyFish 与 Carta 等指针。这些是目录元数据变化，不等同于第三方产品能力发布。Preview、创意/视频模型、Voice Mode、Microsoft 365 集成均无新官方公告。

## Tier 3

安全方向除既有 Claude Code v2.1.234、v2.1.235 与 Claude Code Action v1.0.194 修复外，Claude Code Action 主分支又合入公开评论统一凭据脱敏、从 Claude 子进程环境移除 ALL_INPUTS，以及修复 bot 评论过滤三项改动；尚未打入新 release。另有模型伪造上下文、Desktop / CLI 文件权限冲突等安全标签 Issue，均只按未确认用户报告保留。Science / 生命科学方向，[Adaptyv Bio 案例](https://www.adaptyvbio.com/blog/anthropic-1)称 Anthropic 团队用 Claude Science 中的 Mythos Preview 与 Opus 4.8 设计 1,320 个蛋白 binder，湿实验有 354 个命中、平均命中率 26.8%；这是合作方自报案例，页面只有 8 月 19 日日期、无时分，未作独立同行评审。金融服务、医疗、法律、政府、非营利、教育和客服未发现窗口内新官方公告。

## 官方更新

- **官方插件目录同步**（截至 09:11）：继续更新 Datadog、DataRobot、AWS agents、Netlify、Together AI、Exa、Expo、Firecrawl、TinyFish、Carta 等第三方插件指针；这是目录元数据变化，不等同于各产品新能力发布。
- **Claude Code Action 主分支安全与过滤修复**（08:23–08:24）：[公开评论凭据脱敏](https://github.com/anthropics/claude-code-action/commit/54eadc2f72a6e4673b0b6b4568bf3df417fa3659)覆盖 Anthropic、AWS、Slack、JWT 与 GitHub token；[子进程环境收紧](https://github.com/anthropics/claude-code-action/commit/0a80d21df70c4ad2af73b28e4aad2ed725e2eb75)移除未使用的 ALL_INPUTS；[bot 评论过滤](https://github.com/anthropics/claude-code-action/commit/65b50df0838d26293e18bb62f71492d3c11dc82d)修复 GraphQL actor 名称差异。三项均已合并主分支，尚未发布新 tag。
- **Claude Code 周限额活动延期**（精确更新时间未披露）：[官方帮助页](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)确认 Pro、Max、Team 与旧席位制 Enterprise 的 Claude Code 周限额提升 50% 延长至 8 月 31 日；不影响 5 小时限额，也不覆盖 Free 或按量 Enterprise 席位。
- **Agent SDK Python v0.2.140**（04:58）：[发布说明](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)正式打包此前主分支的 5 项改动，包括 MCP 1.x/2.x 并存、subagent 文本转发、结构化 ResultError、字符串 prompt 权限回调与父 tool-use ID 恢复。
- **Claude Code Action v1.0.195**（04:40）：[发布说明](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195)仅给出完整比较链接；比较记录显示本版把 Claude Code 升至 2.1.235、Agent SDK 升至 0.3.235，没有独立功能声明。
- **Agent SDK TypeScript v0.3.235**（04:39）：[发布说明](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)称与 Claude Code v2.1.235 对齐。
- **Claude Code v2.1.235**（04:38）：[发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)新增可选拼写检查，并修复 LSP 重连缓存失效、权限对话框误授权、后台云会话资源占用、VS Code 焦点跳转和多项终端交互问题。
- **多模型性能降级已解决**（8 月 19 日 00:20–03:01）：[Claude Status](https://status.claude.com/incidents/q7txxvbsftgq) 最终称 Opus 5 受影响，实际影响时段为 00:11–02:23；02:26 进入监控，03:01 宣布解决。
- **Agent SDK Python MCP 兼容性**（01:47）：in-process SDK MCP server 放宽依赖范围，可同时支持 MCP 1.x 与 2.x；尚无新 release。
- **academy-guide 更名**（00:02）：原 claude-academy-guide 更名并缩短说明，仅为官方 Skills 仓库内容变化。
- **Agent SDK Python**（8 月 18 日 07:30–07:31）：新增 subagent 文本转发、父 tool-use ID 恢复、字符串 prompt 权限回调和结构化 ResultError；翌日 01:47 又合并 MCP 1.x/2.x 兼容性改动，尚无新 release。
- **Claude Code Action v1.0.194**（04:25）：[发布说明](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194)确认 delete_files 仓库边界、附件下载上限、shell-quote CVE 与 checkout 修复。
- **Agent SDK TypeScript v0.3.234**（04:21）：类型、effort、VCS 状态和跨会话来源权限字段更新。
- **Claude Code v2.1.234**（04:20）：GitLab MR 状态、用量重置后自动续跑、Remote Control 同步，以及安全和稳定性修复。
- **discernment-nudge Skill**（01:23）：新增可选的辨别与核验 Skill。

## Love

- [HN 的 macOS 打印驱动讨论](https://news.ycombinator.com/item?id=49352806)在窗口内达到约 115 票、75 条评论，分享者称 Claude Code 为仅支持 Windows 的 HP Laser 1008a 编写原生 macOS 驱动；原始对话分享页本轮返回空响应，成功效果未独立复验，因此只作高互动自报样本。
- [视觉品味反馈工作流](https://www.reddit.com/r/ClaudeCode/comments/1vs5iqf/claude_has_a_passfail_signal_for_correctness_and/)作者详细介绍用 Markdown 记录人工视觉反馈、反向链接和“毕业”机制来约束 Claude Code，并同时推广自己的插件；RSS 可核实发布时间，方法与成效仍为单方自报。
- [Claude Code 周度作品展示](https://www.reddit.com/r/ClaudeCode/comments/1vqpqot/weekly_showcase_thread_what_are_you_building_with/)出现跨仓库 Agent/MCP 工具等自报项目；原帖只确认 8 月 17 日，无法核实精确时间，且效果未独立验证。
- [任务工期讨论](https://www.reddit.com/r/ClaudeCode/comments/1vscjcz/why_does_claude_code_say_things_like_thats_about/)中，多名用户称 Claude Code 将任务估为数日却在 20–30 分钟内完成；这是早期自选样本，同时说明模型的时间估计不可靠。
- 本节不把官方发布说明计入正向口碑；新增样本来自高互动 HN 讨论和可核时 Reddit RSS，但仍存在选择偏差。

## Hate

- [Fast Mode 开关消失讨论](https://www.reddit.com/r/ClaudeCode/comments/1vs8rto/fast_mode_got_disabled_how_is_this_not_a_rug_pull/)称功能突然不可用并质疑权益变化；RSS 可核实发布时间，但只有单帖截图，未见官方公告或跨账户验证。
- 新事故的 [r/ClaudeAI 讨论枢纽](https://www.reddit.com/r/ClaudeAI/comments/1vrtyin/discussion_hub_for_new_claude_incident_degraded/)在后续搜索快照中约 57 票，多条回复抱怨故障频率并要求重置用量；互动数是滚动快照，不能代表总体用户。
- 一条 [连续停机与沟通讨论](https://www.reddit.com/r/ClaudeCode/comments/1vry6tg/4_days_of_outages_in_a_row_zero_communication/)抱怨连续多日事故、缺少状态页之外的说明和用量补偿；评论也有人反驳状态页本身就是沟通，故只作为分歧样本。
- 一条 [Max 20x 额度计量 Issue](https://github.com/anthropics/claude-code/issues/87419)称 8 月 17 日重置后周额度与 Fable 专项额度消耗加快，并附带账户层级线索；仍是单账户报告，未获 Anthropic 确认。
- [Cowork Intel Mac 回归 Issue](https://github.com/anthropics/claude-code/issues/87601)给出两台设备与二分定位，窗口内有 9 条评论；证据强于普通抱怨，但仍属于用户报告。
- [Opus 5 指令遵循回归 Issue](https://github.com/anthropics/claude-code/issues/87491)称模型把直接指令当作协商并注入自指内容；有复现材料但样本单一。
- [伪造用户与系统轮次 Issue](https://github.com/anthropics/claude-code/issues/87823)附会话 JSONL 链路，称模型把自行生成的伪造上下文当作输入并继续调用工具；仍是单一用户报告，未获 Anthropic 复现确认。
- [Unicode 路径数据丢失 Issue](https://github.com/anthropics/claude-code/issues/87822)带 has repro 与 data-loss 标签，称重启后部分会话与文件不可见；路径规范化是报告者提出的可能原因，不是已证实根因。

## 情绪

**32/100，低置信度。** 已解决事故及额度、Cowork、模型、数据持久化与权限相关用户报告仍令负向证据占优；但高互动 HN 驱动案例、视觉工作流和任务快速完成自报提供了正向样本。样本来自自选社区、HN 与 Issue，不能外推整体用户群。

## 对比

Unblocked 的单方复盘称其生产 code review 盲测里 Opus 精度最好、GLM 5.2 接近可接受阈值，迁移多数流量后单次 review 成本下降；但方法、工作负载与成本都由厂商自报，不是独立基准。[原文](https://getunblocked.com/blog/moving-agent-loops-from-anthropic-to-glm/)发布于 8 月 13 日、8 月 18 日修改；[HN 讨论](https://news.ycombinator.com/item?id=49345796)在窗口内出现，作为较旧内容的邻近传播信号保留。

## 日期未确认

- 官方周限额帮助页只显示“Updated today”，未暴露精确更新时间；事实已由页面确认，[此前 HN / X 转发](https://news.ycombinator.com/item?id=49351995)继续保留作发现链路，但不再把延期本身列为未证实。
- Adaptyv Bio 蛋白设计案例只标注 8 月 19 日，无时分；按日期相关候选保留，不宣称严格命中窗口。
- Desktop / Cowork v1.32352.0 与 v1.32352.1 只标注 8 月 17 日、18 日，没有时分；相关功能与修复不写成已严格命中窗口。
- Reddit 周度作品展示只确认 8 月 17 日；连续停机与沟通讨论只确认 8 月 19 日且页面显示相对时间；Reddit JSON API 403，两者 publishedAt 留空。

## 未证实传闻

本轮没有发现同时具备可追溯链接和最低限度上下文的新传闻；不根据社区影射补造型号、训练状态或发布日期。

## 观察池

- Claude Code 2.1.234 的两条带 has repro 标签的用户报告称 auto mode 忽略 `permissions.ask` 检查点，以及 worktree 子 Agent 把修改写进父 worktree；尚无 Anthropic 修复确认。[权限 Issue](https://github.com/anthropics/claude-code/issues/87639)；[隔离 Issue](https://github.com/anthropics/claude-code/issues/87643)
- 新增的 [Skills fenced-code 执行 Issue](https://github.com/anthropics/claude-code/issues/87730)带 `has repro`、`reproduced` 与安全标签，称官方 plugin-dev 文档代码块里的 `!` 命令会在项目目录实际执行；仍是未修复 Issue，且报告注明根因早有旧 Issue。
- [Remote Control 重连 Issue](https://github.com/anthropics/claude-code/issues/87720)带 `has repro` 与 regression 标签，称已连接过的 Windows 会话断开后无法重新附着；单一用户报告，未见官方修复确认。
- 新增 Issue 观察样本均为用户报告、未获 Anthropic 确认：[Chrome 并发会话收到彼此工具响应](https://github.com/anthropics/claude-code/issues/87767)带 has repro；[session-start sidecar 请求重复计费](https://github.com/anthropics/claude-code/issues/87763)带 has repro；[Korean IME 在 v2.1.235 回归](https://github.com/anthropics/claude-code/issues/87792)带 has repro / regression；[Cowork scheduled tasks 不触发](https://github.com/anthropics/claude-code/issues/87811)带 regression。
- [VS Code 多根工作区 @ 搜索 Issue](https://github.com/anthropics/claude-code/issues/87827)带 has repro，称 v2.1.235 的文件选择器只检索首个工作区目录；[Remote Control 权限覆盖 Issue](https://github.com/anthropics/claude-code/issues/87829)带 has repro，称客户端会把 bypassPermissions 静默改为 auto；两者均尚无官方修复确认。
- [Desktop / CLI 文件权限冲突 Issue](https://github.com/anthropics/claude-code/issues/87833)带 has repro 与安全标签，报告者复现受保护目录中的既有 CLI 会话在 Desktop 会话启动后失去读取权限；TCC 缓存机理仍是推测。
- [Design artboard 工作流转发](https://news.ycombinator.com/item?id=49347512)指向官方工程师 X 帖，但 X 正文不可读、HN 无评论，故不提升为已核实功能发布。
- 04:11 后新增的 Intel Mac Cowork 启动失败 Issue 与既有回归报告属于同一事件，按事件去重，不再新增来源。
- 旧 Workbench 的访问结束日期为 8 月 17 日，是 Developer Platform 的迁移背景，不是窗口内新品。[Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)
- Unblocked 文章较旧，仅因窗口内被 HN 再传播而保留；其成本和精度结论不作普遍比较结论。
- 本轮还检查 301 条窗口内新增 Claude Code Issue；多数为零评论、重复项或缺少复现，不逐条提升为产品事实。

## 来源

- [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)
- [Agent SDK TypeScript v0.3.234](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.234)
- [Agent SDK Python commits](https://github.com/anthropics/claude-agent-sdk-python/commits/main/)
- [Claude Code Action v1.0.194](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194)
- [discernment-nudge Skill](https://github.com/anthropics/skills/commit/f379e5ad66e2febc1616cf8d6284666fecbe514e)；[academy-guide 更名](https://github.com/anthropics/skills/commit/0a64e398ec6bb34a494f0c347e8ccae53a862f8e)
- [官方插件目录](https://github.com/anthropics/claude-plugins-official/commits/main/)；[Knowledge Work 目录](https://github.com/anthropics/knowledge-work-plugins/commits/main/)
- [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)；[Agent SDK TypeScript v0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)；[Agent SDK Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)；[Claude Code Action v1.0.195](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195)
- [HN 限额延长转发](https://news.ycombinator.com/item?id=49351995)
- [Claude Status 事故](https://status.claude.com/incidents/q7txxvbsftgq)
- [Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog)
- [Claude Code 作品展示](https://www.reddit.com/r/ClaudeCode/comments/1vqpqot/weekly_showcase_thread_what_are_you_building_with/)；[事故社区讨论](https://www.reddit.com/r/ClaudeAI/comments/1vrtyin/discussion_hub_for_new_claude_incident_degraded/)
- [额度计量 Issue](https://github.com/anthropics/claude-code/issues/87419)；[Cowork Intel Mac Issue](https://github.com/anthropics/claude-code/issues/87601)；[Opus 5 行为 Issue](https://github.com/anthropics/claude-code/issues/87491)
- [Skills fenced-code 执行 Issue](https://github.com/anthropics/claude-code/issues/87730)；[Remote Control 重连 Issue](https://github.com/anthropics/claude-code/issues/87720)
- [连续停机与沟通讨论](https://www.reddit.com/r/ClaudeCode/comments/1vry6tg/4_days_of_outages_in_a_row_zero_communication/)
- [权限 Issue](https://github.com/anthropics/claude-code/issues/87639)；[worktree 隔离 Issue](https://github.com/anthropics/claude-code/issues/87643)
- [Unblocked 复盘](https://getunblocked.com/blog/moving-agent-loops-from-anthropic-to-glm/)；[HN 讨论](https://news.ycombinator.com/item?id=49345796)
- [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)
- [Claude Code 周限额活动](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)
- [Claude Code Action 公开评论凭据脱敏](https://github.com/anthropics/claude-code-action/commit/54eadc2f72a6e4673b0b6b4568bf3df417fa3659)；[移除 ALL_INPUTS](https://github.com/anthropics/claude-code-action/commit/0a80d21df70c4ad2af73b28e4aad2ed725e2eb75)；[bot 评论过滤](https://github.com/anthropics/claude-code-action/commit/65b50df0838d26293e18bb62f71492d3c11dc82d)
- [Adaptyv Bio 蛋白设计湿实验案例](https://www.adaptyvbio.com/blog/anthropic-1)
- [HN macOS 打印驱动讨论](https://news.ycombinator.com/item?id=49352806)
- [Reddit 视觉品味工作流](https://www.reddit.com/r/ClaudeCode/comments/1vs5iqf/claude_has_a_passfail_signal_for_correctness_and/)；[Fast Mode 讨论](https://www.reddit.com/r/ClaudeCode/comments/1vs8rto/fast_mode_got_disabled_how_is_this_not_a_rug_pull/)
- [Chrome 并发响应 Issue](https://github.com/anthropics/claude-code/issues/87767)；[sidecar 重复计费 Issue](https://github.com/anthropics/claude-code/issues/87763)；[Korean IME 回归 Issue](https://github.com/anthropics/claude-code/issues/87792)；[Cowork scheduled tasks Issue](https://github.com/anthropics/claude-code/issues/87811)
- [新增数据丢失 Issue](https://github.com/anthropics/claude-code/issues/87822)；[伪造上下文 Issue](https://github.com/anthropics/claude-code/issues/87823)；[VS Code 多根目录 Issue](https://github.com/anthropics/claude-code/issues/87827)；[Remote Control 权限 Issue](https://github.com/anthropics/claude-code/issues/87829)；[Desktop / CLI 文件权限 Issue](https://github.com/anthropics/claude-code/issues/87833)
- [任务工期讨论](https://www.reddit.com/r/ClaudeCode/comments/1vscjcz/why_does_claude_code_say_things_like_thats_about/)
- [Design artboard HN 转发](https://news.ycombinator.com/item?id=49347512)

## 采集状态

- 已检查：Anthropic Newsroom、Claude Blog、Help Center、Platform / Cowork 文档、Status API、Claude Code / Agent SDK / Code Action / Skills / 插件 GitHub、Reddit 五个社区（含 r/ClaudeCode RSS）、HN、YouTube、Adaptyv Bio 与可信开发者媒体；Tier 1–3 均逐项搜索。
- 失败：X 原始帖公开页面返回空正文，无法直接核实 Design artboard 帖；Reddit JSON API 403，r/ClaudeAI 与 r/Anthropic RSS 返回 429，但 r/ClaudeCode RSS 可访问；Kuber 驱动分享页返回空响应；YouTube 结果缺少可稳定核验的精确发布时间与互动快照。GitHub、Claude Status API、官方帮助页和 Adaptyv 原文可访问。
- 初始候选：525 条原始记录（301 条 Claude Code Issue、48 条去重后的 HN 检索记录、75 条官方仓库提交、100 条 r/ClaudeCode RSS 记录与 1 条状态事件）；保留来源：47 条；二次补搜：否（最终来源不为 0）。

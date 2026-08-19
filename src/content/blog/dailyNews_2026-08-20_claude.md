---
title: "Claude 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T04:19:30+08:00"
description: "Claude 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Claude Code v2.1.235"
featuredUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.235"
featuredSummary: "新增可选拼写检查，并修复缓存、权限、后台云会话、VS Code 焦点与终端交互问题。 Claude 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-19 04:38 +08:00"
featuredTags: ["Claude Code","CLI","VS Code"]
tags:
  - "观察池"
  - "日期未确认"
  - "Agent"
  - "Agent SDK"
  - "Agents"
  - "Anthropic"
  - "CI_CD"
  - "Claude"
  - "Claude Code"
  - "Claude Code Action"
  - "Claude Haiku"
  - "Claude Opus"
  - "Claude Science"
  - "Claude Tag"
  - "CLI"
  - "Community"
  - "Cowork"
  - "Desktop"
  - "GitHub Actions"
  - "Hate"
  - "Hooks"
  - "Incident"
  - "Knowledge Work"
  - "Marketplace"
  - "MCP"
  - "Permissions"
  - "Plugins"
  - "Prompt Cache"
  - "Python"
  - "Research"
  - "Sandbox"
  - "Science"
  - "Security"
  - "TypeScript"
  - "Usage Limits"
  - "VS Code"
  - "WSL"
---

## 今日概览

扫描窗口：2026-08-19 04:12 至 2026-08-20 04:12（Asia/Shanghai）。本轮新增核实 Claude Code v2.1.236、Agent SDK TypeScript v0.3.236 与 Claude Code Action v1.0.196；此前收录的 v2.1.235、Agent SDK Python v0.2.140、周限额延期和两起完成处置的模型性能事件继续保留。官方插件仓库在 8 月 20 日凌晨又有版本指针同步，但这只证明目录元数据变化，不等同于第三方插件发布新能力。

## Tier 1

| 产品 | 状态 |
|---|---|
| Claude Code CLI | [v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236) 于 04:02 发布：增加新会话默认模型变量和跨会话 `notify_when_idle`，强化 macOS sandbox 通配符读取拒绝，修复后台会话、Remote Control、托管设置审批、auto mode 与多项 TUI 问题；此前的 [v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)继续保留。官方[周限额活动](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)延长至 8 月 31 日，只提高周限额 50%，不改变 5 小时限额。 |
| VS Code 集成 | v2.1.236 为 transcript 加入回复、权限请求、错误和状态变化的屏幕阅读器实时播报及按 turn 标题导航；v2.1.235 的面板焦点修复继续保留。另有[连续编辑使用陈旧 diff 基线](https://github.com/anthropics/claude-code/issues/87943)的单用户、has repro 报告，未获官方修复确认。 |
| JetBrains 集成 | 无独立官方新增；本轮只检出低信息量功能请求，未提升为动态。 |
| Managed Agents：sessions | v2.1.236 增加跨会话一次性空闲通知，改进消息过载拒绝、后台会话与 self-hosted runner 释放时序；这些是 Claude Code release note，不外推成云端 Managed Agents API 新版本。 |
| Managed Agents：webhooks | 无新增发布。 |
| Managed Agents：environments | v2.1.236 修复云环境列表为空或格式异常时的错误提示；无独立环境 API 发布。 |
| Managed Agents：memory stores | 无新增发布。 |
| Skills | v2.1.236 修复 SDK / VS Code 会话在工作目录被删除后 skills 热重载持续报错；另有本轮用户报告，均不写成官方普遍故障。 |
| marketplaces | [官方插件目录](https://github.com/anthropics/claude-plugins-official/commits/main/)与[知识工作插件目录](https://github.com/anthropics/knowledge-work-plugins/commits/main/)在 02:14–02:32 继续同步 Wix、Datadog、Qdrant、Cloudinary 等版本指针；属于目录维护，不代表所指向项目在本页已核实有新功能。 |
| Claude Developer Platform | 无窗口内独立发布说明。 |
| Agent SDK | [TypeScript v0.3.236](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.236)允许 `PostToolUse` hook 提供由宿主断言的 `classifierContext`，供 auto mode 权限分类器读取；此前的 [v0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)与 [Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)继续保留。 |
| Cowork | [Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog)仅给 8 月 18 日日期，列有 Research 消息排队、跨会话消息、权限提示、MCP 启动与 Intel Mac 启动等修复；时分无法确认，归入“日期未确认”。 |
| Design | 无窗口内可核实发布。 |
| Tag / @Claude sessions | [Claude Tag CI/CD 值班案例](https://claude.com/blog/ai-ci-cd-on-call)公开日期为 8 月 18 日、页面显示 8 月 19 日修改但无时分；其 Slack 持久记忆、Skills、MCP、Remote 与子 Agent 流程列入“日期未确认”，不宣称是本窗口新品。 |
| 当前 Sonnet 编码模型 | 无模型发布；前一起跨窗口事故最初涉及多模型，最终状态更新只确认 Opus 5 的实际影响，故不把 Sonnet 5 写成已确认受影响。 |
| 当前 Opus 编码模型 | [两起官方状态事件](https://status.anthropic.com/incidents/hkcw95k7r0f4)均涉及 Opus 5；最近一起在 17:42–19:02 处置完毕。 |
| 当前 Haiku 编码模型 | 同一 17:42–19:02 [状态事件](https://status.anthropic.com/incidents/hkcw95k7r0f4)确认 Haiku 4.5 请求错误升高并已解决。 |

## Tier 2

| 组合产品 | 状态 |
|---|---|
| Chrome / 浏览器 Agent | 无官方发布；Issue 搜索出现连接、视口和浏览器工具问题报告，但多为零评论单账户样本，留在候选层而不写成普遍故障。 |
| Desktop / Preview | Desktop/Cowork 变更日志只有日期、没有时分，列入“日期未确认”；Preview 无独立新增。 |
| Marketplace / Connectors / Plugins | 官方目录在 02:14–02:32 继续同步版本指针，未把元数据变更外推成第三方能力更新。 |
| 当前官方创意 / 视频模型 | 无窗口内新公告；不根据社区昵称或猜测补造型号。 |
| Voice Mode | 无新增。 |
| Microsoft 365 集成 | 无新增。 |

## Tier 3

安全方向没有新官方产品公告，但 Claude Code v2.1.236 强化 macOS sandbox 通配符读取拒绝、auto mode 工作树检查与托管设置审批；Claude Code Action v1.0.196 统一公开评论的 secret redaction。[Write 未遵守工作目录边界](https://github.com/anthropics/claude-code/issues/88038)、[WSL2 启用 sandbox 后启动内存持续增长](https://github.com/anthropics/claude-code/issues/88029)、[本地设置在非 HOME 目录失效](https://github.com/anthropics/claude-code/issues/88051)均带 has repro，仍只是 GitHub 用户报告。Science 方向，[Claude Science 产品指南](https://claude.com/blog/the-claude-science-product-guide)和[蛋白设计与分析化学研究](https://www.anthropic.com/research/Claude-accelerates-protein-design)公开日期为 8 月 18 日；研究页内部元数据在窗口内更新，但公开页面未披露具体改动，因此仅作较旧内容/邻近信号，不写成当天新研究。金融服务、生命科学以外的医疗、法律、政府、非营利、教育和客服未发现窗口内新官方公告。

## 官方更新

- **Claude Code v2.1.236（04:02）**：[发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)新增默认模型变量与跨会话空闲通知，强化 macOS sandbox 读取拒绝，并集中修复后台会话、Remote Control、auto mode、托管设置审批和 VS Code 无障碍支持。
- **Claude Code Action v1.0.196（04:06）**：[发布说明](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.196)统一公开评论的 secret redaction、移除传入 Claude 子进程的未使用 `ALL_INPUTS` 环境变量，并改进 bot actor 过滤。
- **Agent SDK TypeScript v0.3.236（04:01）**：[发布说明](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.236)为 `PostToolUse` hook 增加供 auto mode 权限分类器读取的 `classifierContext`。
- **Opus 5 / Haiku 4.5 性能事故已解决（17:42–19:02）**：[Claude Status](https://status.anthropic.com/incidents/hkcw95k7r0f4)确认两模型请求错误升高，18:33 进入监控，19:02 宣布解决；未披露根因。
- **官方插件目录同步（8 月 19 日 01:55 至 8 月 20 日 02:32）**：[通用目录](https://github.com/anthropics/claude-plugins-official/commits/main/)和[知识工作目录](https://github.com/anthropics/knowledge-work-plugins/commits/main/)出现多轮版本指针提交；这是可核实的仓库维护，不是第三方发布结论。
- **Agent SDK Python v0.2.140（04:58）**：[发布说明](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)正式打包 MCP 1.x/2.x 并存、subagent 文本转发、结构化错误和权限回调等更新。
- **Claude Code Action v1.0.195（04:40）**：[发布页](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195)只提供与 v1.0.194 的完整比较链接，没有单独功能声明。
- **Agent SDK TypeScript v0.3.235（04:39）**：[发布说明](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)称与 Claude Code v2.1.235 对齐。
- **Claude Code v2.1.235（04:38）**：[发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)覆盖拼写检查、缓存、权限、后台云会话、VS Code 焦点和终端交互修复。
- **Claude Code 周限额活动延期（帮助页 04:04 更新）**：[官方帮助页](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)确认符合条件的 Pro、Max、Team 与旧席位制 Enterprise 用户，Claude Code 周限额提高 50% 延长至 8 月 31 日。
- **前一起多模型性能事件完成处置（03:01）**：[状态页](https://status.anthropic.com/incidents/q7txxvbsftgq)显示事件始于窗口前的 00:20，最终确认 Opus 5 实际影响为 00:11–02:23，03:01 解决；因解决状态落入窗口而保留。

## Love

- [额度延期社区帖](https://www.reddit.com/r/ClaudeAI/comments/1vrzmx9/anthropic_extends_50_limit_increase_to_aug_31/)把延长至月底视为短期利好；公开搜索快照约 3 票，互动很低，且回复仍包含对额度和 Fable 可用性的抱怨，因此只能作为弱正向样本。
- 官方发布不计入 Love；本轮未发现能够同时核验时间、互动数与实际效果的高置信正向独立样本。

## Hate

- [Opus 5 / Haiku 4.5 事故讨论枢纽](https://www.reddit.com/r/ClaudeAI/comments/1vshrj8/discussion_hub_for_new_claude_incident_degraded/)转录官方时间线，公开搜索快照约 4 票；回复抱怨连续事故。样本小且自选，只作情绪旁证，事故事实仍以状态页为准。
- Claude Code Issue 中累计保留九个复现信息较强的负向候选：此前的 [Stop hook 回归](https://github.com/anthropics/claude-code/issues/87972)、[长会话 prompt cache 间歇失配](https://github.com/anthropics/claude-code/issues/87966)、[VS Code 陈旧 diff 基线](https://github.com/anthropics/claude-code/issues/87943)、[只读 cwd sandbox 卡死](https://github.com/anthropics/claude-code/issues/87935)，以及本轮的[压缩后自定义 Agent 消失](https://github.com/anthropics/claude-code/issues/88023)、[WSL2 sandbox 启动 OOM](https://github.com/anthropics/claude-code/issues/88029)、[Write 越过工作目录边界](https://github.com/anthropics/claude-code/issues/88038)、[单个非 object schema 令 MCP 工具全数丢失](https://github.com/anthropics/claude-code/issues/88049)、[非 HOME 目录忽略本地设置](https://github.com/anthropics/claude-code/issues/88051)。均是用户报告；受影响范围和根因未获 Anthropic 确认。
- [Reddit 访问受阻与 CLI 绕行讨论](https://www.reddit.com/r/ClaudeCode/comments/1vst5zo/claude_code_gets_blocked_by_reddit_so_im_building/)公开页显示约 3 小时前，搜索快照约 9 票；作者称 Claude Code 的 WebFetch / WebSearch 访问 Reddit 遭遇 403，回复提出 RSS 等绕行。测试数字均为作者自报，精确发帖时分未核实，只作弱负向与工程实践样本。

## 情绪

**偏负向，低置信度。** 依据是同日两起完成处置的状态事件、低互动事故讨论及带复现标签的 GitHub 报告；正向信号主要是周限额活动延期。样本来自自选社区与 Issue，且 Reddit JSON API 无法读取，不能外推总体用户口碑。

## 对比

社区回复中有人把 Claude Code 与 Codex 等工具并列，讨论额度与故障时切换工具；本轮没有找到受控测试、统一工作负载或可复验成本数据，因此不做“谁更好”的事实结论。

## 日期未确认

- [Claude Tag CI/CD 值班案例](https://claude.com/blog/ai-ci-cd-on-call)发布日为 8 月 18 日、页面显示 8 月 19 日修改，但未提供时分或修改差异；只确认案例内容，不确认它是本窗口新增。
- [Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog)的 v1.32885.1 只标注 8 月 18 日，无法判定是否落入本窗口。
- [Claude Science 产品指南](https://claude.com/blog/the-claude-science-product-guide)只标 8 月 18 日；[Anthropic 研究页](https://www.anthropic.com/research/Claude-accelerates-protein-design)可见窗口内内部更新时间，但未披露版本差异，均作为邻近信号。
- 两个既有 Reddit 原帖的精确发帖时分未能通过 JSON API 核实，publishedAt 留空；搜索结果只支持它们在 8 月 19 日相关讨论中出现。
- [Reddit 访问受阻与 CLI 绕行讨论](https://www.reddit.com/r/ClaudeCode/comments/1vst5zo/claude_code_gets_blocked_by_reddit_so_im_building/)公开页只显示相对时间“约 3 小时前”，无法据此写入精确时分；页面内容和约 9 票搜索快照可核，作者自报的 token / 成本对比未独立复验。

## 未证实传闻

本轮没有发现同时具备可追溯链接与最低限度上下文的新型号或发布日期传闻；不根据“性能变差意味着新模型将发布”等社区影射补造结论。

## 观察池

- 九个 GitHub Issue 均有 has repro 或 reproduced 等标签，但仍属于用户提交；其中 sandbox 写入边界、WSL2 启动内存增长和 MCP schema 丢工具的影响值得优先观察，等待维护方复现、关闭说明或 release note 后再改变证据等级。
- 周限额延期已由官方帮助页证实；关于“会永久化”或额度计量方式变化的社区猜测没有官方依据，继续留在观察层。
- Fable 5 帮助页本轮被搜索引擎标成近期更新，但页面自身 `dateModified` 为 7 月 20 日，未作为当天候选保留。
- Reddit 绕行讨论反映一个具体访问摩擦与社区自助方案，但样本为单帖、自报基准且互动有限；等待更广泛复现或官方说明。

## 来源

- [Claude Code v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)
- [Agent SDK TypeScript v0.3.236](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.236)
- [Claude Code Action v1.0.196](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.196)
- [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)
- [Claude Code 周限额活动](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)
- [Agent SDK TypeScript v0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)
- [Agent SDK Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)
- [Claude Code Action v1.0.195](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195)
- [官方插件目录](https://github.com/anthropics/claude-plugins-official/commits/main/)
- [知识工作插件目录](https://github.com/anthropics/knowledge-work-plugins/commits/main/)
- [Opus 5 / Haiku 4.5 性能事故](https://status.anthropic.com/incidents/hkcw95k7r0f4)
- [前一起多模型性能事件](https://status.anthropic.com/incidents/q7txxvbsftgq)
- [Claude Tag CI/CD 值班案例](https://claude.com/blog/ai-ci-cd-on-call)
- [Claude Science 产品指南](https://claude.com/blog/the-claude-science-product-guide)
- [蛋白设计与分析化学研究](https://www.anthropic.com/research/Claude-accelerates-protein-design)
- [Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog)
- [Reddit 事故讨论](https://www.reddit.com/r/ClaudeAI/comments/1vshrj8/discussion_hub_for_new_claude_incident_degraded/)
- [Reddit 额度延期讨论](https://www.reddit.com/r/ClaudeAI/comments/1vrzmx9/anthropic_extends_50_limit_increase_to_aug_31/)
- [Stop hook 回归 Issue](https://github.com/anthropics/claude-code/issues/87972)
- [prompt cache 失配 Issue](https://github.com/anthropics/claude-code/issues/87966)
- [VS Code 陈旧 diff Issue](https://github.com/anthropics/claude-code/issues/87943)
- [只读 cwd Bash Issue](https://github.com/anthropics/claude-code/issues/87935)
- [压缩后自定义 Agent 消失 Issue](https://github.com/anthropics/claude-code/issues/88023)
- [WSL2 sandbox 启动 OOM Issue](https://github.com/anthropics/claude-code/issues/88029)
- [Write 越过工作目录边界 Issue](https://github.com/anthropics/claude-code/issues/88038)
- [MCP schema 令工具全数丢失 Issue](https://github.com/anthropics/claude-code/issues/88049)
- [非 HOME 目录忽略本地设置 Issue](https://github.com/anthropics/claude-code/issues/88051)
- [Reddit 访问受阻与 CLI 绕行讨论](https://www.reddit.com/r/ClaudeCode/comments/1vst5zo/claude_code_gets_blocked_by_reddit_so_im_building/)

## 采集状态

- 已检查：Anthropic Newsroom、Research、Claude Blog、Help Center、Platform / Cowork 文档、Status API、Claude Code / Agent SDK / Code Action / Skills / 官方插件 GitHub、Reddit 三个社区、HN、X 与 YouTube；Tier 1–3 逐项搜索。
- 失败：X 公开时间线无法稳定读取；Reddit JSON API 返回 403；YouTube 无可核时新视频；HN 无窗口内新 Claude 条目。
- 初始候选：41 条；保留来源：28 条；二次补搜：否（最终来源不为 0）。

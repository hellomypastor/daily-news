---
title: "Claude 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T07:11:12+08:00"
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
  - "Auth"
  - "Auto Mode"
  - "Background Tasks"
  - "Bash"
  - "Chrome"
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
  - "Linux"
  - "macOS"
  - "Marketplace"
  - "MCP"
  - "Permissions"
  - "Plugins"
  - "Prompt Cache"
  - "Python"
  - "Remote Control"
  - "Research"
  - "Rewind"
  - "Sandbox"
  - "Science"
  - "Security"
  - "Sessions"
  - "TypeScript"
  - "Usage Limits"
  - "VS Code"
  - "Worktree"
  - "WSL"
---

## 今日概览

扫描窗口：2026-08-19 07:11:12 至 2026-08-20 07:11:12（Asia/Shanghai）。本轮在此前累计集合上新增核实 [Agent SDK Python v0.2.141](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.141)：04:20 发布并把内置 Claude CLI 更新到 2.1.236。Claude Code、TypeScript Agent SDK 与 Code Action 的最新正式版本仍分别是 v2.1.236、v0.3.236 和 v1.0.196；状态页未出现新事故。04:12 后新增的 Claude Code Issue 与社区样本均按用户报告或日期未确认材料处理，不外推为普遍故障。

## Tier 1

| 产品 | 状态 |
|---|---|
| Claude Code CLI | [v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236) 于 04:02 发布，新增默认模型变量与跨会话空闲通知，并修复 sandbox、后台会话、Remote Control、auto mode、TUI 与 VS Code 无障碍问题；此前的 [v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)继续保留。官方[周限额活动](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)延长至 8 月 31 日，5 小时限额不变。 |
| VS Code 集成 | v2.1.236 加入 transcript 屏幕阅读器播报与按 turn 标题导航；[连续编辑使用陈旧 diff 基线](https://github.com/anthropics/claude-code/issues/87943)仍是单用户 has repro 报告。 |
| JetBrains 集成 | 无独立官方新增；只检出低信息量请求。 |
| Managed Agents：sessions | v2.1.236 改进后台会话时序；[后台任务空闲后被终止](https://github.com/anthropics/claude-code/issues/88071)、[Remote Control 运行 24 小时后 OAuth 失效](https://github.com/anthropics/claude-code/issues/88054)与[工作树后 cwd 无法解析](https://github.com/anthropics/claude-code/issues/88082)均是带 has repro 的用户报告。 |
| Managed Agents：webhooks | 无新增发布。 |
| Managed Agents：environments | v2.1.236 修复云环境列表异常时的提示；无独立环境 API 发布。 |
| Managed Agents：memory stores | 无新增发布。 |
| Skills | v2.1.236 修复工作目录删除后的 skills 热重载报错；[关闭文件检查点同时隐藏摘要操作](https://github.com/anthropics/claude-code/issues/88077)是用户报告。 |
| marketplaces | [官方插件目录](https://github.com/anthropics/claude-plugins-official/commits/main/)与[知识工作插件目录](https://github.com/anthropics/knowledge-work-plugins/commits/main/)继续同步版本指针；[URL 来源插件未递归克隆 submodule](https://github.com/anthropics/claude-code/issues/88074)是用户报告。目录同步不代表第三方发布新能力。 |
| Claude Developer Platform | 无窗口内独立发布说明。 |
| Agent SDK | [Python v0.2.141](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.141)把内置 CLI 更新至 2.1.236；[TypeScript v0.3.236](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.236)增加 classifierContext。此前的 [TypeScript v0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)与 [Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)继续保留。 |
| Cowork | [Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog)只给 8 月 18 日，精确时分无法确认；无可核实的新版本。 |
| Design | 无窗口内可核实发布。 |
| Tag / @Claude sessions | [Claude Tag CI/CD 值班案例](https://claude.com/blog/ai-ci-cd-on-call)公开日期为 8 月 18 日、页面显示 8 月 19 日修改但无时分，归入日期未确认。 |
| 当前 Sonnet 编码模型 | 无模型发布；不把未获状态页确认的影响写成事实。 |
| 当前 Opus 编码模型 | [官方状态事件](https://status.anthropic.com/incidents/hkcw95k7r0f4)涉及 Opus 5，已在 17:42–19:02 处置完毕。 |
| 当前 Haiku 编码模型 | 同一状态事件确认 Haiku 4.5 请求错误升高并已解决。 |

## Tier 2

| 组合产品 | 状态 |
|---|---|
| Chrome / 浏览器 Agent | 无官方发布；[select_browser 影响其他会话浏览器](https://github.com/anthropics/claude-code/issues/88057)是旧版本单用户 has repro 报告，尚未在 2.1.236 重测。 |
| Desktop / Preview | Desktop/Cowork 变更日志仅有日期；[恢复 transcript 后侧栏无会话](https://github.com/anthropics/claude-code/issues/88065)与[会话历史数日不刷新](https://github.com/anthropics/claude-code/issues/88076)是 Windows 单用户报告。Preview 无新增。 |
| Marketplace / Connectors / Plugins | 官方目录继续同步版本指针；submodule 安装问题仅作观察候选。 |
| 当前官方创意 / 视频模型 | 无窗口内新公告；不根据社区昵称或猜测补造型号。 |
| Voice Mode | 无新增。 |
| Microsoft 365 集成 | 无新增。 |

## Tier 3

安全方向没有新官方产品公告。[Claude Code Action v1.0.196](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.196)统一公开评论的 secret redaction。[Write 越过工作目录边界](https://github.com/anthropics/claude-code/issues/88038)、[WSL2 sandbox 启动内存增长](https://github.com/anthropics/claude-code/issues/88029)、[非 HOME 目录忽略本地设置](https://github.com/anthropics/claude-code/issues/88051)、[merged-usr Linux sandbox 卡住](https://github.com/anthropics/claude-code/issues/88059)、[运行中禁用 auto mode 未退出当前会话](https://github.com/anthropics/claude-code/issues/88067)与[后台 PTY 缓存已撤销的 macOS TCC 权限](https://github.com/anthropics/claude-code/issues/88083)都带 has repro，但仍是用户报告。Science 方向，[Claude Science 产品指南](https://claude.com/blog/the-claude-science-product-guide)和[蛋白设计与分析化学研究](https://www.anthropic.com/research/Claude-accelerates-protein-design)公开日期为 8 月 18 日，只作较旧内容或邻近信号。金融服务、其他医疗、法律、政府、非营利、教育与客服未发现窗口内新官方公告。

## 官方更新

- **Agent SDK Python v0.2.141（04:20）**：[发布说明](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.141)仅声明把内置 Claude CLI 更新至 2.1.236，没有另列新 API。
- **Claude Code Action v1.0.196（04:06）**：统一公开评论 secret redaction、移除未使用变量，并改进 bot actor 过滤。
- **Claude Code v2.1.236（04:02）**：新增默认模型变量与跨会话空闲通知，并修复 sandbox、后台会话、Remote Control、auto mode、TUI 与 VS Code 无障碍问题。
- **Agent SDK TypeScript v0.3.236（04:01）**：为 PostToolUse hook 增加 classifierContext。
- **Opus 5 / Haiku 4.5 性能事故已解决（17:42–19:02）**：状态页确认请求错误升高并已解决，未披露根因。
- [Claude Code Action v1.0.195](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195)、[Agent SDK Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)、[Agent SDK TypeScript v0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)与 Claude Code v2.1.235 作为当天累计来源继续保留。
- [前一起多模型性能事件](https://status.anthropic.com/incidents/q7txxvbsftgq)始于窗口前，最终确认 Opus 5 实际影响并在窗口内解决。

## Love

- [额度延期社区帖](https://www.reddit.com/r/ClaudeAI/comments/1vrzmx9/anthropic_extends_50_limit_increase_to_aug_31/)把延期视为短期利好；公开搜索快照互动低，回复仍混有额度抱怨，只作弱正向样本。
- 官方发布不计入 Love；没有找到能同时核验时间、互动与实际效果的高置信独立正向样本。

## Hate

- [事故讨论](https://www.reddit.com/r/ClaudeAI/comments/1vshrj8/discussion_hub_for_new_claude_incident_degraded/)出现对连续事故的负向回复；样本小且自选，事故事实仍以状态页为准。
- 既有高复现候选包括 [Stop hook 回归](https://github.com/anthropics/claude-code/issues/87972)、[prompt cache 间歇失配](https://github.com/anthropics/claude-code/issues/87966)、[只读 cwd sandbox 卡死](https://github.com/anthropics/claude-code/issues/87935)、[压缩后自定义 Agent 消失](https://github.com/anthropics/claude-code/issues/88023)与[MCP schema 丢工具](https://github.com/anthropics/claude-code/issues/88049)。
- 04:12 后新增的 has repro 候选还包括 [Chrome 会话互相移动浏览器](https://github.com/anthropics/claude-code/issues/88057)、[恢复 transcript 后无侧栏会话](https://github.com/anthropics/claude-code/issues/88065)、[后台任务空闲后被杀](https://github.com/anthropics/claude-code/issues/88071)、[插件 submodule 未克隆](https://github.com/anthropics/claude-code/issues/88074)、[MCP URL elicitation 能力不完整](https://github.com/anthropics/claude-code/issues/88075)与[Desktop 会话历史不刷新](https://github.com/anthropics/claude-code/issues/88076)。均是单用户报告，影响范围与根因未获 Anthropic 确认。
- [Reddit 访问受阻与 CLI 绕行讨论](https://www.reddit.com/r/ClaudeCode/comments/1vst5zo/claude_code_gets_blocked_by_reddit_so_im_building/)描述 WebFetch/WebSearch 遇到 403；自报 token 和成本数字未独立复验。
- [单次提示消耗大量 5 小时额度的讨论](https://www.reddit.com/r/ClaudeCode/comments/1vsgl51/this_is_insane/)呈现负向抱怨，但回复也指出上下文缓存和工作负载差异；精确发帖时分未核实，不能证明平台统一调低额度。

## 情绪

**偏负向，低置信度。** 依据为累计状态事件、额度消耗与访问摩擦讨论，以及多项带复现标签的 GitHub 用户报告；正向信号主要是周限额延期。社区与 Issue 都是自选样本，不能外推总体口碑。

## 对比

社区把 Claude Code 与 Codex 等工具并列，主要围绕额度、访问能力和故障时切换；没有统一工作负载、可复验成本或受控测试，因此不做优劣事实结论。

## 日期未确认

- Claude Tag CI/CD 案例发布日为 8 月 18 日、页面显示 8 月 19 日修改，但没有时分或差异。
- Desktop / Cowork changelog 的 v1.32885.1 只标注 8 月 18 日，无法判断是否落入窗口。
- 三个 Reddit 原帖无法通过 JSON API 核实精确时分；额度延期、访问绕行与额度消耗讨论只保留公开快照可见内容并注明限制。

## 未证实传闻

未发现具备可追溯链接与最低限度上下文的新型号或发布日期传闻；不根据性能抱怨或 safeguard 报告推断新模型。

## 观察池

- 累计 21 个 Claude Code Issue 带 has repro 或 reproduced 等标签，但仍属于用户提交；新增候选集中在 Remote Control、Chrome、sandbox、后台任务、插件、MCP、Desktop 会话索引与工作树 cwd，等待维护方复现、关闭说明或 release note。
- 周限额延期已获官方帮助页证实；关于永久化、统一降额或计量规则变化的社区猜测仍无官方依据。
- Reddit 额度消耗帖正反样本并存且缺少统一上下文与精确时间，只作弱负向旁证。

## 来源

- [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)
- [Claude Code May–August 2026 weekly limits promotion](https://support.claude.com/en/articles/15910845-claude-code-may-august-2026-weekly-limits-promotion)
- [Claude Agent SDK TypeScript v0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)
- [Claude Agent SDK Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)
- [Claude Code Action v1.0.195](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195)
- [anthropics/claude-plugins-official commits](https://github.com/anthropics/claude-plugins-official/commits/main/)
- [anthropics/knowledge-work-plugins commits](https://github.com/anthropics/knowledge-work-plugins/commits/main/)
- [Degraded performance for Claude Opus 5 and Claude Haiku 4.5](https://status.anthropic.com/incidents/hkcw95k7r0f4)
- [Degraded performance for multiple models](https://status.anthropic.com/incidents/q7txxvbsftgq)
- [How Claude Tag serves as Anthropic’s first responder for CI/CD failures](https://claude.com/blog/ai-ci-cd-on-call)
- [The Claude Science product guide](https://claude.com/blog/the-claude-science-product-guide)
- [How Claude is accelerating protein design and analytical chemistry](https://www.anthropic.com/research/Claude-accelerates-protein-design)
- [Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog)
- [Discussion Hub for Claude Opus 5 and Haiku 4.5 incident](https://www.reddit.com/r/ClaudeAI/comments/1vshrj8/discussion_hub_for_new_claude_incident_degraded/)
- [Anthropic extends 50% limit increase to Aug 31](https://www.reddit.com/r/ClaudeAI/comments/1vrzmx9/anthropic_extends_50_limit_increase_to_aug_31/)
- [Stop hook no longer fires on stream-stall-terminated turns](https://github.com/anthropics/claude-code/issues/87972)
- [Prompt cache lookup fails intermittently mid-session](https://github.com/anthropics/claude-code/issues/87966)
- [VS Code panel sequential edits use a stale diff snapshot](https://github.com/anthropics/claude-code/issues/87943)
- [Sandboxed Bash wedges when cwd is read-only](https://github.com/anthropics/claude-code/issues/87935)
- [Claude Code v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)
- [Claude Agent SDK TypeScript v0.3.236](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.236)
- [Claude Code Action v1.0.196](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.196)
- [Project custom agents disappear after context compaction](https://github.com/anthropics/claude-code/issues/88023)
- [Sandbox startup memory growth on WSL2](https://github.com/anthropics/claude-code/issues/88029)
- [Write tool does not enforce the working-directory sandbox](https://github.com/anthropics/claude-code/issues/88038)
- [Non-object MCP inputSchema silently drops all server tools](https://github.com/anthropics/claude-code/issues/88049)
- [User config-home settings.local.json ignored outside HOME](https://github.com/anthropics/claude-code/issues/88051)
- [Claude Code gets blocked by Reddit, so I’m building a CLI workaround](https://www.reddit.com/r/ClaudeCode/comments/1vst5zo/claude_code_gets_blocked_by_reddit_so_im_building/)
- [Claude Agent SDK Python v0.2.141](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.141)
- [Remote Control server does not refresh OAuth after 24 hours](https://github.com/anthropics/claude-code/issues/88054)
- [Claude in Chrome select_browser affects other sessions](https://github.com/anthropics/claude-code/issues/88057)
- [Sandbox wedges on merged-usr Linux](https://github.com/anthropics/claude-code/issues/88059)
- [Sidebar omits restored session transcripts](https://github.com/anthropics/claude-code/issues/88065)
- [disableAutoMode does not exit an active auto session](https://github.com/anthropics/claude-code/issues/88067)
- [Background tasks killed when a session goes idle](https://github.com/anthropics/claude-code/issues/88071)
- [Marketplace URL plugin install omits git submodules](https://github.com/anthropics/claude-code/issues/88074)
- [Claude Code cannot fulfill MCP URL-mode elicitation](https://github.com/anthropics/claude-code/issues/88075)
- [Desktop session history remains stale for days](https://github.com/anthropics/claude-code/issues/88076)
- [Disabling file checkpointing hides summarize options](https://github.com/anthropics/claude-code/issues/88077)
- [Working directory becomes unresolvable after worktree use](https://github.com/anthropics/claude-code/issues/88082)
- [Long-lived background PTY host caches revoked macOS TCC grants](https://github.com/anthropics/claude-code/issues/88083)
- [This is insane](https://www.reddit.com/r/ClaudeCode/comments/1vsgl51/this_is_insane/)

## 采集状态

- 已检查：Anthropic Newsroom、Research、Claude Blog、Help Center、Platform / Cowork 文档、Status API、Claude Code / Agent SDK / Code Action / Skills / 官方插件 GitHub、Claude Code Issues、Reddit 三个社区、HN、X 与 YouTube；Tier 1–3 逐项搜索。
- 失败：X 公开时间线无法稳定读取；Reddit JSON API 返回 403；YouTube 无可核时新视频；HN 无窗口内新 Claude 条目。
- 初始候选：74 条；保留来源：42 条；二次补搜：否（最终来源不为 0）。

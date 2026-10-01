---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-10-01T00:00:00+08:00"
updatedAt: "2026-10-01T10:06:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "OpenAI launches dots AI agents, seeks to address safety concerns"
featuredUrl: "https://www.axios.com/2026/09/30/openai-dots-ai-agent-safety"
featuredSummary: "Axios 在窗口内跟进 Dots 的安全控制、渐进发布和重要操作确认机制。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-30 17:00 +08:00"
featuredTags: ["Dots","安全","二手来源"]
tags:
  - "安全"
  - "二手来源"
  - "观察池"
  - "官方"
  - "官方更新"
  - "较旧背景"
  - "可靠性"
  - "邻近信号"
  - "日期未确认"
  - "社区"
  - "用户报告"
  - "Agent"
  - "Agents API"
  - "ChatGPT"
  - "ChatGPT Work"
  - "CLI"
  - "Code Review"
  - "Codex"
  - "Codex Desktop"
  - "DevDay"
  - "Dots"
  - "Hate"
  - "OpenAI"
---

## 今日概览

采集窗口：**2026-09-30 09:57 至 2026-10-01 09:57（Asia/Shanghai）**。本轮确认到 5 条窗口内 Codex CLI 官方 Release：稳定版 0.159.3 增加面向符合条件、以 ChatGPT 登录的本地会话的可选账户安全设置提醒；另有 4 个 alpha 构建，发布页没有功能说明，因此仅作为版本信号进入观察池。窗口内其他信号包括 Dots 安全讨论跟进，以及 Codex Desktop 更新后本地会话历史不可见的用户报告。DevDay 相关说明因官方页面仅标注 9 月 29 日、没有可换算到上海时区的精确发布时间，仍放入“日期未确认”。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 本轮结论 | 证据状态 |
|---|---|---|
| Codex CLI | [0.159.3](https://github.com/openai/codex/releases/tag/rust-v0.159.3) 为窗口内稳定版更新；[0.160.0-alpha.6.2](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6.2)、[0.161.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.5)、[0.161.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.4)、[0.161.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.3) 也在窗口内发布 | 稳定版功能已核实；alpha 无功能说明 |
| VS Code / JetBrains 集成 | 未检出窗口内官方更新 | 无新增 |
| Codex Cloud / 远程任务 / PR Agent | 一名用户报告 GitHub Code Review 限额显示互相矛盾，首次失败略早于窗口，列入观察池 | 用户报告、未获官方确认 |
| ChatGPT agentic mode / Dots | Axios 在窗口内跟进 Dots 的安全控制与渐进发布；产品本身来自此前 DevDay | 二手来源已核实；原始发布日期见“日期未确认” |
| 当前官方 Agent 构建产品 | Agents API、托管执行、memory、tools、multi-agent 与 computer use 仍见于 DevDay 汇总，但没有窗口内新公告 | 日期未确认背景 |
| Responses API | 未检出窗口内官方 changelog 新条目 | 无新增 |
| Agents SDK Python / TypeScript | 未检出窗口内正式 release 新条目 | 无新增 |
| Assistants API 弃用/迁移 | 官方弃用页未显示窗口内新变更 | 无新增 |
| Realtime API | 未检出窗口内官方更新 | 无新增 |
| GPT / reasoning / Codex 模型家族 | GPT-6.1 Sol 与 Astra Ultrafast 仍是 9 月 29 日发布说明中的最新信息 | 日期未确认背景 |

## Tier 2：ChatGPT 产品面

| 方向 | 本轮状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| Desktop apps | 有 Codex Desktop 更新后本地聊天历史从 UI 消失、文件仍在磁盘的单用户报告；尚无官方确认 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | 无新增 |

## Tier 3：企业、安全与行业产品

- **安全：**[Axios 的 9 月 30 日跟进](https://www.axios.com/2026/09/30/openai-dots-ai-agent-safety)称，Dots 默认要求用户批准重要操作，并引用 OpenAI 对渐进式发布与额外安全审查的说明。这是可信二手报道，不等同于独立验证安全效果。
- **Enterprise / Business / Edu / Gov / Science：**未检出窗口内新的官方公告。
- **行业产品：**DevDay 中提及的企业治理、Marketplace 与合作能力均属于此前发布背景，本轮未见新的官方后续。

## 官方更新（最新在前）

1. **Codex CLI 0.160.0-alpha.6.2** — [官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6.2)显示发布于 2026-10-01 08:08:35 +08:00，仅列构建版本，没有功能说明。
2. **Codex CLI 0.159.3（稳定版）** — [官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.159.3)显示发布于 2026-10-01 06:57:34 +08:00。符合条件、以 ChatGPT 登录的本地会话现在可以显示可选提醒，引导用户完成账户安全设置；变更来自 #49744 的 0.159 分支回移。
3. **Codex CLI 0.161.0-alpha.5** — [官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.5)显示发布于 2026-10-01 03:57:33 +08:00，仅列构建版本。
4. **Codex CLI 0.161.0-alpha.4** — [官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.4)显示发布于 2026-09-30 19:49:10 +08:00，仅列构建版本。
5. **Codex CLI 0.161.0-alpha.3** — [官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.3)显示发布于 2026-09-30 10:24:58 +08:00，仅列构建版本。

OpenAI 官方状态页记录的跨 ChatGPT、Codex、API 与 Agents API 的异常已经恢复，但[状态事件页面](https://status.openai.com/incidents/35y48hbm)显示的 9 月 29 日时刻未注明页面时区，且可能早于本轮起点，因此仅作为日期未确认的运行背景。

## Love

- 没有找到足够、可独立核实且发表于窗口内的明确正向用户样本。官方公告不计作正向口碑。

## Hate

- [OpenAI Developer Community 用户报告](https://community.openai.com/t/codex-desktop-local-chat-history-disappeared-after-september-30-update-but-session-files-still-exist/1402119)：Windows 上更新 Codex Desktop 后，本地聊天从 UI 消失，但 `~/.codex/sessions` 文件仍存在。帖子时间为 9 月 30 日 04:09（论坛未显式标注时区）；若按页面常用 UTC 显示则落在本轮窗口内。当前仅一份用户报告，不能推断普遍故障。
- [Reddit 的长篇用户复盘](https://www.reddit.com/r/ChatGPTPro/comments/1wu9tie/chatgpt_work_and_codex_after_devday_2026/)认可新产品方向，同时集中抱怨长任务失败后无法恢复、用量损失和支持路径不足。帖子页面只显示 9 月 30 日而无精确时刻，因此列入日期未确认口碑。

## 情绪判断

**偏负面，置信度中低。** 证据来自一条具体桌面端故障报告和一篇汇总式社区批评；样本量小、存在自选择偏差，且没有官方确认或大规模统计。

## 比较信号

- Reddit 复盘作者称自己同时使用 Claude Code 与 OpenCode，并认为 GPT-5.6 Sol 经 OpenCode 使用时表现不错；这是单一用户经验，不是基准测试。
- 本轮未找到 Cline、Pi Coding Agent、DeepSeek Harness / DSH 与 Codex 的具名可复现实验，因此不作“追平/超过”结论；这些产品的完整扫描留给开源 Agent Harness 专题。

## 日期未确认

- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)在 9 月 29 日集中列出 Pro 500 / Astra Ultrafast、Codex Cloud、GPT-6.1 Sol、Dots、Space、Pages、Sites 与 Meetings plugin 等更新，但没有给出精确发布时间，无法确认是否落入本轮 24 小时窗口。
- [OpenAI Developer Community 的 DevDay 资源汇总](https://community.openai.com/t/devday-2026-announcements-and-developer-resources/1402006)显示 9 月 29 日 19:11，但页面未显式标注时区；因换算边界不确定，保留为日期未确认。
- [Codex GitHub Code Review 限额冲突报告](https://community.openai.com/t/github-codex-code-review-refused-usage-limits-for-code-reviews-while-codex-usage-pages-show-conflicting-limits/1402074)记录两个用量页面显示冲突。用户给出的首次失败时间为 9 月 29 日 23:13 UTC，略早于本轮起点，因此只作为邻近信号。

## 观察池

- Codex CLI [0.160.0-alpha.6.2](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6.2)、[0.161.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.5)、[0.161.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.4) 与 [0.161.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.3) 均有官方发布时间，但页面没有变更说明；待后续稳定版或 changelog 给出具体功能后再判断。
- [Codex Meetups 官方页面](https://developers.openai.com/community/meetups)列出 9 月 30 日的社区活动，但活动日期不是页面发布日期，且未形成可验证的产品更新。
- Dots 的安全保障目前主要是厂商说明与媒体转述，仍需等待公开技术材料、事故数据或独立评测。
- Codex Desktop 会话历史、GitHub Code Review 限额与用量显示问题需要更多用户复现或官方说明后再提升证据等级。

## 来源链接

1. [Codex CLI 0.159.3](https://github.com/openai/codex/releases/tag/rust-v0.159.3)
2. [Codex CLI 0.160.0-alpha.6.2](https://github.com/openai/codex/releases/tag/rust-v0.160.0-alpha.6.2)
3. [Codex CLI 0.161.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.5)
4. [Codex CLI 0.161.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.4)
5. [Codex CLI 0.161.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.3)
6. [Axios：OpenAI launches dots AI agents, seeks to address safety concerns](https://www.axios.com/2026/09/30/openai-dots-ai-agent-safety)
7. [OpenAI Developer Community：Codex Desktop local history report](https://community.openai.com/t/codex-desktop-local-chat-history-disappeared-after-september-30-update-but-session-files-still-exist/1402119)
8. [Reddit：ChatGPT Work and Codex after DevDay 2026](https://www.reddit.com/r/ChatGPTPro/comments/1wu9tie/chatgpt_work_and_codex_after_devday_2026/)
9. [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
10. [OpenAI Developer Community：DevDay 2026 resources](https://community.openai.com/t/devday-2026-announcements-and-developer-resources/1402006)
11. [OpenAI Status：Elevated errors across ChatGPT, Codex and API](https://status.openai.com/incidents/35y48hbm)
12. [OpenAI Developer Community：GitHub Code Review usage-limit conflict](https://community.openai.com/t/github-codex-code-review-refused-usage-limits-for-code-reviews-while-codex-usage-pages-show-conflicting-limits/1402074)
13. [OpenAI Developers：Codex Meetups](https://developers.openai.com/community/meetups)

## 采集状态

- 已检查：OpenAI News / Research、开发者文档与 changelog、ChatGPT Release Notes、模型/弃用文档、OpenAI Status、Codex 与 Agents SDK GitHub releases/changelog、Developer Community、Codex Meetups，以及 Reddit、Hacker News、X、YouTube 和可信二手媒体。
- 失败来源：GitHub REST API 未认证请求一度触发限流，随后已通过官方公开 Releases 页面与可用 API 响应逐条核验 5 个 Codex 版本；X 未登录搜索不稳定；YouTube 未找到窗口内可独立核实的新条目。
- 初始候选：22 条；保留来源：13 条；二次补搜：否（最终来源非 0）。
- 图片：未配置。候选官方页未发现适合且能确认出处的公开原图；社区截图属于用户上传争议素材，不作为页面图片。

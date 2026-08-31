---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-31T00:00:00+08:00"
updatedAt: "2026-08-31T13:02:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.152.0-alpha.6"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6"
featuredSummary: "Codex CLI 0.152.0-alpha.6 预发布；官方 tag compare 显示可操作限额提示与恢复流程、历史摄取 metadata 和 update_plan opt-in 变更。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-31 10:12 +08:00"
featuredTags: ["Codex","CLI","限额","Agent","预发布"]
tags:
  - "观察池"
  - "较旧背景"
  - "配额"
  - "社区口碑"
  - "限额"
  - "预发布"
  - "Agent"
  - "ChatGPT"
  - "CLI"
  - "Codex"
  - "Context"
  - "DALL·E"
  - "Desktop"
  - "GPTs"
  - "MCP"
  - "OpenAI"
  - "Windows"
---

## 今日概览

采集窗口：**2026-08-30 13:02 至 2026-08-31 13:02（Asia/Shanghai）**。本轮可确认的主线是 Codex CLI 连续发布三个 `0.152.0` alpha 构建；最新 alpha.6 加入可操作的限额提示与恢复流程，并把 `update_plan` 工具改为显式启用；ChatGPT 产品侧则到达官方早先公布的 DALL·E GPT 退役日期。社区反馈继续集中在 Codex 配额中断、上下文配置回退和 Windows 长对话稳定性，但这些均为个案样本，尚不能外推为全量用户状态。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
|---|---|---|
| Codex CLI | **有新增**：连续发布 `0.152.0-alpha.4`、`alpha.5` 与 `alpha.6`。最新 alpha.6 的官方 tag compare 显示：TUI 增加后端下发的可操作限额提示与用量刷新/回退模型恢复流程，Responses turn metadata 增加历史摄取请求标记，并把 `update_plan` 工具默认关闭、改为显式启用。三版均为 alpha，不应视为稳定版升级。 | [alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4)、[alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5)、[alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6) |
| VS Code / JetBrains 集成 | 无可核实的窗口内独立发布；Codex 仓库变更中出现针对旧版 JediTerm 的渲染修复，但未发现单独 IDE 正式版公告。 | 官方仓库与发布页已检查 |
| Codex cloud / remote tasks / PR agents | 无可核实新增。 | 官方 Codex 入口已检查 |
| ChatGPT agentic mode / 官方 agent-building 产品 | 无可核实新增。 | OpenAI News、开发者文档已检查 |
| Responses API | 无可核实新增。 | Platform changelog 已检查 |
| Agents SDK Python / TypeScript | 两个官方仓库的最新 release 均早于窗口，本轮无新增。 | GitHub releases 已检查 |
| Assistants API 迁移 / 弃用 | 无窗口内状态变化；未根据旧资料推断新的截止日期。 | 官方文档已检查 |
| Realtime API | 无可核实新增。 | 官方文档与 changelog 已检查 |
| 当前 GPT、推理与 Codex 模型族 | 无可核实的新模型发布；搜索中出现的未发布型号名称不作为事实收录。 | OpenAI News / Research 已检查 |

## Tier 2：ChatGPT 产品面

| 产品线 | 过去 24 小时状态 |
|---|---|
| Browser / Operator 能力 | 无可核实新增 |
| Desktop apps | 无官方发布；见下方 Windows 社区故障样本 |
| GPTs / GPT Store | **既定节点**：官方早先宣布于 8 月 30 日退役 ChatGPT 内官方 DALL·E GPT；用户自建且启用图像生成的 GPT 不受该公告影响。[官方 Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) |
| Canvas | 无可核实新增 |
| Sora / video | 无可核实新增 |
| GPT Image / DALL·E | DALL·E GPT 退役节点见上；官方建议继续使用 ChatGPT Images |
| Voice | 无可核实新增 |
| Connectors / MCP | Codex alpha.5 的仓库差异显示 package-style MCP server name 支持；ChatGPT Connectors 无独立公告 |

## Tier 3：企业、安全与行业方案

Enterprise、Business、Edu、Gov、Science、安全与行业方案未发现窗口内可核实的新公告。窗口外较旧安全文章仅作为检索背景，不重复写入正文。

## 官方更新（由新到旧）

1. **Codex CLI 0.152.0-alpha.6** — GitHub 显示发布于 2026-08-31 10:12（上海时间）。相对 alpha.5 的官方 tag compare 显示，TUI 新增后端下发的可操作限额提示、用量刷新和可用回退模型恢复流程；Responses turn metadata 新增历史摄取请求标记；`update_plan` 工具默认改为关闭、需显式启用。发布说明自身仅给出版本名，因此按预发布仓库差异理解。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6)
2. **Codex CLI 0.152.0-alpha.5** — GitHub 显示发布于 2026-08-31 09:11（上海时间）。与 alpha.4 的 tag compare 显示，代码变化包括支持 package-style MCP server name、修复较旧 JediTerm 终端的光标样式渲染，以及修正环境 MCP 测试工作目录。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5)
3. **Codex CLI 0.152.0-alpha.4** — GitHub 显示发布于 2026-08-30 21:56（上海时间）。该 alpha 构建承接了 turn lineage、工作目录恢复、历史压缩后的授权保留、Node REPL 首次执行授权流程等仓库改动；发布说明自身只给出版本名，因此细节来自官方 tag compare，需按预发布变更理解。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4)
4. **官方 DALL·E GPT 退役日期到达** — ChatGPT Release Notes 在 7 月 31 日预告，8 月 30 日退役官方 DALL·E GPT，并建议转用 ChatGPT Images；自建图像 GPT 不受影响。[官方说明](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

## Love

本轮没有足够、可独立核验的窗口内正向社区样本。官方发布不计入正向口碑，因此不硬凑 Love 条目。

## Hate

- 一篇 8 月 30 日的 r/ChatGPTCoding 帖文称，Plus 用户在编码流程中受到 5 小时窗口限制影响，评论也提到任务流被配额打断。该样本互动有限，且套餐、区域和实际用量未独立核验，只能代表**低置信度个案**。[社区讨论](https://www.reddit.com/r/ChatGPTCoding/comments/1w2etrb/help_understanding_the_new_restrictions_and_limits/)
- r/codex 用户报告 Windows Codex App 在自定义 100 万上下文与 90 万自动压缩阈值后，近期又显示约 25.8 万上下文。帖子未提供可复现实验或官方确认，暂列**未复现的配置回退个案**。[社区讨论](https://www.reddit.com/r/codex/comments/1w2886c/codex_not_giving_the_user_set_context_window_and/)
- OpenAI Developer Community 有用户报告 Windows Desktop 26.825.51511 的长对话锁死、长文本粘贴卡住与折叠消息无法展开。当前仅见单帖，尚无官方回复，列为**待复核故障样本**。[开发者社区帖子](https://community.openai.com/t/windows-desktop-26-825-51511-long-chats-can-lock-without-warning-work-long-paste-hangs-and-collapsed-messages-cannot-be-expanded/1393640)

## 情绪判断

**偏负面，置信度低。** 可保留样本主要是三类问题反馈，数量少且集中在主动求助社区，存在明显选择偏差；本轮没有足够正向样本形成平衡比较，也没有官方数据证明影响范围。

## 比较与迁移信号

社区讨论中有人把 Codex 配额体验与 Claude Code 作比较，但缺少统一任务、相同套餐和可复现实验，因此不做“追平/超过”结论。Cline、Pi Coding Agent、DeepSeek Harness / DSH、Cursor、OpenCode 等本轮未发现与 OpenAI 直接相关且证据充分的新比较；完整产品雷达留给开源 Harness 专题。

## 日期未确认

无新增。搜索结果中出现若干 OpenAI 员工社交帖转述，但原始 X 时间线无法稳定访问，因此未写成已确认事实。

## 观察池

- 继续观察 Codex 预发布线何时形成 `0.152.0` 稳定版，以及 alpha.5 的 package-style MCP server name、alpha.6 的限额恢复与 `update_plan` opt-in 变更是否进入正式 release notes。
- 继续观察配额中断、上下文设置回退和 Windows 长对话问题是否出现官方确认、issue 或修复版本。

## 来源链接

- [Codex CLI 0.152.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6)
- [Codex CLI 0.152.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5)
- [Codex CLI 0.152.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [Reddit：Codex / ChatGPT 使用限制讨论](https://www.reddit.com/r/ChatGPTCoding/comments/1w2etrb/help_understanding_the_new_restrictions_and_limits/)
- [Reddit：Codex 上下文配置回退报告](https://www.reddit.com/r/codex/comments/1w2886c/codex_not_giving_the_user_set_context_window_and/)
- [OpenAI Developer Community：Windows Desktop 长对话问题](https://community.openai.com/t/windows-desktop-26-825-51511-long-chats-can-lock-without-warning-work-long-paste-hangs-and-collapsed-messages-cannot-be-expanded/1393640)

## 采集状态

- 已检查：OpenAI News / Research、Platform 文档与 changelog、ChatGPT Release Notes、Codex / Agents SDK / OpenAI SDK 官方 GitHub releases、OpenAI Developer Community，以及 Reddit、Hacker News、X/YouTube 公开搜索结果。
- 失败入口：X 完整时间线受登录限制；YouTube 未检出可核实的窗口内官方新视频；Hacker News 未发现可保留条目。
- 初始候选：9；最终保留来源：7；二次补搜：否（最终来源不为 0）。
- 图片：未配置。已检查本页官方来源，未找到适合作为对应条目配图且来源清晰的稳定公开图片 URL；不使用 GitHub/搜索结果动态缩略图。

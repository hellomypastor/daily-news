---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-31T00:00:00+08:00"
updatedAt: "2026-08-31T19:02:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.152.0-alpha.6"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6"
featuredSummary: "Codex CLI 0.152.0-alpha.6 预发布；官方 tag compare 显示可操作限额提示与恢复流程、历史摄取 metadata 和 update_plan opt-in 变更。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-31 10:12 +08:00"
featuredTags: ["Codex","CLI","限额","Agent","预发布"]
tags:
  - "安全"
  - "存储"
  - "观察池"
  - "较旧背景"
  - "配额"
  - "容量"
  - "社区口碑"
  - "授权"
  - "限额"
  - "性能"
  - "用量"
  - "预发布"
  - "Agent"
  - "Automations"
  - "Azure"
  - "ChatGPT"
  - "CLI"
  - "Cloud"
  - "Codex"
  - "Context"
  - "DALL·E"
  - "Desktop"
  - "Goal"
  - "GPTs"
  - "macOS"
  - "MCP"
  - "Mobile"
  - "OpenAI"
  - "PR"
  - "Responses API"
  - "Windows"
---

## 今日概览

采集窗口：**2026-08-30 19:02 至 2026-08-31 19:02（Asia/Shanghai）**。本轮可确认的主线是 Codex CLI 连续发布三个 `0.152.0` alpha 构建；最新 alpha.6 加入可操作的限额提示与恢复流程，并把 `update_plan` 工具改为显式启用；ChatGPT 产品侧则到达官方早先公布的 DALL·E GPT 退役日期。16:01 后没有新的官方 release，但 Codex 官方仓库继续出现容量/Goal 生命周期、Azure 自动化序列化、用量重置授权、本地会话存储膨胀及移动端 Cloud 交付缺失等用户报告；它们均未获维护者确认，不能外推为全量状态。

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
- Codex 官方 GitHub 仓库有 Pro 用户报告正常 Agent 任务中反复出现“Selected model is at capacity”，约 15 分钟内遇到 3 次并进入长退避。issue 已获 `bug`、`rate-limits`、`app`、`connectivity` 标签，但暂无维护者确认，列为**单用户容量中断样本**。[GitHub issue](https://github.com/openai/codex/issues/41790)
- 一名 macOS 用户提交系统 Jetsam 诊断，称 4 个闲置 Codex Renderer 进程各增长至约 5.6 GB，最终触发交换空间耗尽与系统冻结；报告提供版本、时间线和系统诊断摘要，但尚无稳定复现或维护者确认，列为**证据较详细但未确认的性能个案**。[GitHub issue](https://github.com/openai/codex/issues/41794)
- 容量错误在本轮后段继续出现：一个 macOS Desktop 报告称瞬时容量错误后 Goal 未经 `update_goal` 调用便转为 blocked。报告给出本地时间线，但仍是单用户诊断，列为**容量故障簇中的未确认生命周期问题**。[GitHub issue](https://github.com/openai/codex/issues/41808)
- 一名用户称 Codex 在只提出“可以尝试”后便调用工具消耗了已储备的用量重置额度，未获得单独明确授权。仓库已标记为 bug，但尚无维护者结论，列为**高影响、待确认的授权边界报告**。[GitHub issue](https://github.com/openai/codex/issues/41801)

## 情绪判断

**偏负面，置信度低。** 可保留样本主要是三类问题反馈，数量少且集中在主动求助社区，存在明显选择偏差；本轮没有足够正向样本形成平衡比较，也没有官方数据证明影响范围。

## 比较与迁移信号

社区讨论中有人把 Codex 配额体验与 Claude Code 作比较，但缺少统一任务、相同套餐和可复现实验，因此不做“追平/超过”结论。Cline、Pi Coding Agent、DeepSeek Harness / DSH、Cursor、OpenCode 等本轮未发现与 OpenAI 直接相关且证据充分的新比较；完整产品雷达留给开源 Harness 专题。

## 日期未确认

无新增。搜索结果中出现若干 OpenAI 员工社交帖转述，但原始 X 时间线无法稳定访问，因此未写成已确认事实。

## 观察池

- 继续观察 Codex 预发布线何时形成 `0.152.0` 稳定版，以及 alpha.5 的 package-style MCP server name、alpha.6 的限额恢复与 `update_plan` opt-in 变更是否进入正式 release notes。
- 继续观察配额中断、上下文设置回退和 Windows 长对话问题是否出现官方确认、issue 或修复版本。
- Codex CLI 0.151.0 用户报告 MCP 表单的 number/integer 字段被回退为普通批准框，接受后提交空 `content` 并形成循环。issue 指向仓库中的相关解析分支与测试，但尚无维护者结论，列为**可复现描述充分的未确认缺陷**。[GitHub issue](https://github.com/openai/codex/issues/41797)
- macOS + Azure/OpenAI-compatible Responses provider 用户报告定时自动化的 bootstrap `function_call_output` 缺少 `call_id`，导致请求在提示词到达模型前被 HTTP 400 拒绝；报告含版本、请求形状与本地代理验证，但尚无维护者确认。[GitHub issue](https://github.com/openai/codex/issues/41799)
- 一名 macOS 用户报告 `~/.codex` 增长至约 42 GB，并把主要增量归因于 rollout JSONL 重复嵌入 `replacement_history` 与归档会话未清理；报告给出目录统计，但数据和因果仍待维护者复核。[GitHub issue](https://github.com/openai/codex/issues/41806)
- 一名 iPhone 上的 Codex Cloud 用户报告 8 月 31 日新任务仍能修改文件，却不再显示 diff 或 Create PR 交付入口；旧任务仍正常。当前是单用户移动端回归报告，待复现。[GitHub issue](https://github.com/openai/codex/issues/41807)

## 来源链接

- [Codex CLI 0.152.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6)
- [Codex CLI 0.152.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5)
- [Codex CLI 0.152.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.4)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [Reddit：Codex / ChatGPT 使用限制讨论](https://www.reddit.com/r/ChatGPTCoding/comments/1w2etrb/help_understanding_the_new_restrictions_and_limits/)
- [Reddit：Codex 上下文配置回退报告](https://www.reddit.com/r/codex/comments/1w2886c/codex_not_giving_the_user_set_context_window_and/)
- [OpenAI Developer Community：Windows Desktop 长对话问题](https://community.openai.com/t/windows-desktop-26-825-51511-long-chats-can-lock-without-warning-work-long-paste-hangs-and-collapsed-messages-cannot-be-expanded/1393640)
- [Codex GitHub：模型容量中断报告](https://github.com/openai/codex/issues/41790)
- [Codex GitHub：macOS Renderer 内存耗尽报告](https://github.com/openai/codex/issues/41794)
- [Codex GitHub：MCP 数值 elicitation 空提交报告](https://github.com/openai/codex/issues/41797)
- [Codex GitHub：容量错误后 Goal 自动 blocked 报告](https://github.com/openai/codex/issues/41808)
- [Codex GitHub：用量重置授权边界报告](https://github.com/openai/codex/issues/41801)
- [Codex GitHub：Azure 自动化缺失 call_id 报告](https://github.com/openai/codex/issues/41799)
- [Codex GitHub：本地会话存储膨胀报告](https://github.com/openai/codex/issues/41806)
- [Codex GitHub：移动端 Cloud 缺失 diff / PR 交付报告](https://github.com/openai/codex/issues/41807)

## 采集状态

- 已检查：OpenAI News / Research、Platform 文档与 changelog、ChatGPT Release Notes、Codex / Agents SDK / OpenAI SDK 官方 GitHub releases、Codex 官方仓库窗口内新建 issues、OpenAI Developer Community，以及 Reddit、Hacker News、X/YouTube 公开搜索结果。
- 失败入口：X 完整时间线受登录限制；YouTube 未检出可核实的窗口内官方新视频；Hacker News 未发现可保留条目。
- 初始候选：34；最终保留来源：15；二次补搜：否（最终来源不为 0）。
- 图片：未配置。已检查本页官方来源，未找到适合作为对应条目配图且来源清晰的稳定公开图片 URL；不使用 GitHub/搜索结果动态缩略图。

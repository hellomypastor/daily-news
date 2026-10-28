---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-10-27T00:00:00+08:00"
updatedAt: "2026-10-27T10:44:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "OpenAI Newsroom | Recent news"
featuredUrl: "https://openai.com/news/company-announcements/?display=list"
featuredSummary: "用于核验窗口内是否有 OpenAI 官方公司与产品公告；未发现符合窗口的新条目。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTags: ["OpenAI","官方扫描"]
tags:
  - "官方扫描"
  - "日期未确认"
  - "用户自报"
  - "Agent"
  - "API"
  - "ChatGPT"
  - "Codex"
  - "Codex CLI"
  - "Codex Desktop"
  - "Computer Use"
  - "GPT-6.1 Terra"
  - "Linux"
  - "macOS"
  - "OpenAI"
  - "Windows"
---

## 今日概览

扫描窗口：2026-10-26 10:44 至 2026-10-27 10:44（Asia/Shanghai）。OpenAI 官方于 2026-10-26 发布 [GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)：主打视觉推理、精确计算机操作、写作与高吞吐专业任务，并面向 ChatGPT Work、Codex 和 API 提供。官方页面只标自然日、没有发布时分，因此无法确认是否严格晚于窗口起点 10:44；本页将其作为“官方发布、精确时间未确认”收录。社区侧另有 Codex GitHub issue 报告 Windows 连接中断、跨 CLI/桌面的线程锁定和 Linux app-server 卡死；均属用户自报样本，不能据此推断总体故障率。

## Tier 1：编码、Agent 与开发者平台

| 产品面 | 过去 24 小时状态 | 证据与判断 |
|---|---|---|
| Codex CLI | GPT-6.1 Terra 可用；另有故障样本 | 官方称 Terra 已向 Codex 的合资格用户提供；[Linux 用户报告 0.164.0 的 app-server 卡死](https://github.com/openai/codex/issues/56998)，属单例自报 |
| VS Code / JetBrains 集成 | 无新增 | 未发现窗口内官方 release note；GitHub issue 列表有零散编辑器反馈，但未形成已确认发布或事件 |
| Codex cloud / remote tasks / PR agents | 模型可用性更新 | Terra 可在 Codex 使用，但官方页面未进一步声明新的远程任务或 PR Agent 功能 |
| ChatGPT agentic mode | 无独立功能新增 | Terra 进入 ChatGPT Work 不等于 agentic mode 发布新能力 |
| 官方 Agent 构建产品 | 无新增 | Agents API、Agent Builder 等未见窗口内公告 |
| Responses API | 模型新增 | API 可通过 `gpt-6.1-terra` 使用；官方称支持 Responses 工具 |
| Agents SDK（Python / TypeScript） | 无新增 | 官方仓库未核验到窗口内正式 release |
| Assistants API 迁移 / 弃用 | 无新增 | 未发现窗口内迁移时间表变化 |
| Realtime API | 无新增 | 未发现窗口内 changelog 条目 |
| GPT、reasoning 与 Codex 模型家族 | **GPT-6.1 Terra 官方发布，精确时间未确认** | 面向视觉推理、computer use、写作和较轻量编码；复杂编码任务官方仍推荐 GPT-6.1 Sol 或 GPT-6 Astra |

## Tier 2：ChatGPT 产品面

| 产品面 | 状态 |
|---|---|
| browser / Operator 能力 | 无新增 |
| Desktop apps | 无官方新增；见下方故障观察 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | 无新增 |

## Tier 3：企业、安全与行业

GPT-6.1 Terra 官方宣布向 Plus、Pro、Enterprise 和 Edu 用户的 ChatGPT Work 与 Codex 提供，构成企业与教育计划的模型可用性更新；除此之外，Business、Gov、Science、安全与行业方案未发现窗口内可确认的新发布。

## 官方更新（由新到旧）

### GPT-6.1 Terra（2026-10-26；精确时间未确认）

[OpenAI 官方页面](https://openai.com/index/introducing-gpt-6-1-terra/)称 Terra 是快速、高效的 GPT-6.1 系列模型，强化视觉理解、精确 computer use、自然写作与软件工程。它已向 Plus、Pro、Enterprise、Edu 用户的 ChatGPT Work 和 Codex 提供，开发者可通过 API 模型名 `gpt-6.1-terra` 使用。标准 API 定价为每百万 token 输入 1 美元、缓存输入 0.05 美元、输出 5 美元。页面只显示 2026-10-26，未给出时分，因此不声称它必然落在 10:44 之后。

其余已检查 [OpenAI Newsroom](https://openai.com/news/company-announcements/?display=list)、[OpenAI API changelog](https://developers.openai.com/api/docs/changelog) 与 [openai/codex Releases](https://github.com/openai/codex/releases)；未发现其他符合窗口的新发布。

## Love

未采集到同时满足窗口、可访问性和可独立核验要求的明确正面用户体验样本。官方公告不计入正向口碑。

## Hate

- **Windows 连接中断（用户自报，已核验日期）**：[issue #57063](https://github.com/openai/codex/issues/57063) 记录 Codex Desktop 26.1021.3705.0 在 Windows 上出现 workspace-routing 超时、响应流断开和重复重连。报告中的最近日志时间为 2026-10-26 08:31 UTC 左右，即上海时间 16:31，落在扫描窗口内；根因尚未确认。
- **CLI 与桌面线程锁定（用户自报，已核验日期）**：[issue #57004](https://github.com/openai/codex/issues/57004) 称 macOS 上 CLI 线程退出后仍在 Desktop 中保持锁定，导致接管受阻。报告标注观察日期为 10 月 26 日，但页面未给出精确到分钟的创建时间，因此仅作窗口邻近样本。
- **app-server 卡死（用户自报，已核验日期）**：[issue #56998](https://github.com/openai/codex/issues/56998) 报告 Linux 上 Codex CLI 0.164.0 的 server 卡住；这是单个环境报告，尚无官方确认或修复结论。

## 情绪判断

**偏负面，置信度低。** 本轮可核验社区证据由 3 个 GitHub 故障 issue 构成，集中在连接、线程所有权和 app-server 可用性；没有同等可核验的正面样本。样本来自主动报错渠道，天然存在负面选择偏差，因此不能代表 Codex 或 ChatGPT 整体用户口碑。GPT-6.1 Terra 官方发布不计入用户正向情绪。

## 对比与竞品提及

官方材料声称 Terra 在若干 computer-use、视觉推理与编码评测上以较低成本接近或超过更大模型，但这些是厂商自测，不等同于独立对比。个别 Reddit 帖文把 Codex 与 Claude Code / Opus 作体验对照，但发布时间边界和陈述均属个人体验，未纳入事实表。Cursor、Cline、Pi Coding Agent 与 DeepSeek Harness / DSH 本轮亦无可核验的新对比材料；其完整动态应由开源 Harness 雷达专题覆盖。

## 日期未确认

- [GPT-6.1 Terra 官方页面](https://openai.com/index/introducing-gpt-6-1-terra/)标注 2026-10-26，但没有时分；发布自然日已确认，是否晚于上海时间 10:44 无法确认。
- [issue #57004](https://github.com/openai/codex/issues/57004) 明确写有 2026-10-26，但公开页面未提供可确认是否晚于 10:44（上海时间）的精确创建时刻；已保留为邻近样本，不作为严格窗口内官方动态。

## 观察池

- GitHub issue 列表在 10 月 26 日出现更多 Windows Desktop、MCP、额度与性能反馈；本页仅保留能够打开且描述较完整的代表样本，不将 issue 数量解释为事故规模。
- Reddit 出现“Where we are headed right now”等转述 OpenAI 员工社交帖的讨论，但无法从可访问材料验证原帖、措辞和准确发布时间，故标为未证实社区信号，不据此宣称路线图变化。
- 二手媒体出现 ChatGPT 广告扩展报道候选；本轮未找到相应窗口内 OpenAI 官方公告，暂不列为确认事实。

## 来源链接

- [OpenAI：Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra/)
- [OpenAI Newsroom](https://openai.com/news/company-announcements/?display=list)
- [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)
- [openai/codex Releases](https://github.com/openai/codex/releases)
- [Windows workspace-routing / stream disconnect issue](https://github.com/openai/codex/issues/57063)
- [macOS CLI thread remains locked issue](https://github.com/openai/codex/issues/57004)
- [Linux Codex server gets wedged issue](https://github.com/openai/codex/issues/56998)

## 采集状态

- 已检查来源：OpenAI 新闻、API changelog / deprecations、ChatGPT 与模型 release notes、官方 GitHub releases / issues / actions / SDK 仓库、开发者社区、Reddit、Hacker News、X、YouTube及可信科技媒体搜索。
- 失败来源：X 无登录态，无法稳定核验；YouTube 未返回可独立核验的窗口内候选；GitHub REST API 超时，已用公开网页替代。
- 初始候选数：9。
- 二次补搜：否；最终保留 7 个来源，其中 4 个为官方来源（含 GPT-6.1 Terra），3 个为社区故障证据。

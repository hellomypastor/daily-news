---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-25T00:00:00+08:00"
updatedAt: "2026-08-25T10:01:22+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.149.1"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.149.1"
featuredSummary: "Codex 官方仓库发布稳定版 0.149.1；发布页仅给出与 0.149.0 的完整比较链接，没有逐项变更说明。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-24 08:28 +08:00"
featuredTags: ["Codex","CLI","Release"]
featuredImage: "https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.149.1"
featuredImageAlt: "GitHub 上 OpenAI Codex 仓库 0.149.1 发布页的预览图"
featuredImageCaption: "图片来源：OpenAI / GitHub"
tags:
  - "观察池"
  - "日期未确认"
  - "未证实传闻"
  - "Agent"
  - "App Server"
  - "ChatGPT"
  - "CLI"
  - "Codex"
  - "Community"
  - "Deprecation"
  - "MCP"
  - "Model Cache"
  - "OpenAI"
  - "Pre-release"
  - "Release"
  - "Usage Reset"
---

## 今日概览

采集窗口为 **2026-08-24 10:01 至 2026-08-25 10:01（Asia/Shanghai）**。当天累计保留两项可精确核验的 Codex CLI 发布：稳定版 0.149.1 于 8 月 24 日 08:28 发布，预发布版 0.150.0-alpha.8 于 8 月 25 日 06:11 发布；两页都没有逐项变更说明，因此不推断具体修复。官方 ChatGPT & Codex changelog 同日宣布弃用 `codex mcp-server`、建议改用 Codex App Server；该条只有自然日而没有精确发布时间，故保守列入“日期未确认”。ChatGPT、API、Agents SDK、模型及 Tier 2/3 产品线未发现窗口内新的官方发布。社区方面累计保留用量重置信号，并新增一条关于 Codex 后端模型缓存变化的帖子；后者只能证明缓存整体发生变化，不能证明现有模型指令被修改，故列入观察池。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
|---|---|---|
| Codex CLI | **当天累计：稳定版 0.149.1 与预发布版 0.150.0-alpha.8**；两页均无逐项 release notes | [0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1)、[0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8) |
| VS Code / JetBrains 集成 | 无新增 | 已检查官方 changelog、Codex 文档与仓库 |
| Codex cloud / remote tasks / PR agents | 无新增 | 已检查官方 changelog、文档与状态页 |
| ChatGPT agentic mode / Work | 无新增 | ChatGPT Release Notes 与官方 changelog |
| 当前官方 Agent 构建产品 | 无新增 | 官方 Agent 文档与 changelog |
| Responses API | 无新增 | API changelog |
| Agents SDK Python / TypeScript | 无新增；窗口内未见新 release | GitHub Releases |
| Assistants API 迁移 / 弃用 | 无新增 | 官方弃用与迁移文档 |
| Realtime API | 无新增 | API changelog 与 Realtime 文档 |
| GPT / reasoning / Codex 模型家族 | 无经官方确认的窗口内新增 | 官方模型目录、API changelog 与发布索引 |

<figure class="source-image">
  <a href="https://github.com/openai/codex/releases/tag/rust-v0.149.1"><img src="https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.149.1" alt="GitHub 上 OpenAI Codex 仓库 0.149.1 发布页的预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/openai/codex/releases/tag/rust-v0.149.1">图片来源：OpenAI / GitHub</a></figcaption>
</figure>

## Tier 2：ChatGPT 产品面

| 产品面 | 过去 24 小时状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| macOS / Windows / 移动端 | 无新增 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | `codex mcp-server` 弃用公告见“日期未确认”；其属于 Codex 的 MCP 接口迁移，不代表 MCP 协议本身被弃用 |

## Tier 3：企业、安全与行业方案

Enterprise、Business、Edu、Gov、Science、安全与行业方案均已检查；窗口内未发现可核验的新公告，也未发现值得保留但日期不完整的新候选。

## 官方更新（新到旧）

### Codex CLI 0.150.0-alpha.8（预发布）

OpenAI 的 GitHub 发布页显示 Codex CLI 0.150.0-alpha.8 于 **2026-08-25 06:11 +08:00** 发布，并明确标为预发布版。页面正文只有版本名称，没有逐项变更说明；本页仅确认该预发布版本出现，不推断功能变化。[查看官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)

### Codex CLI 0.149.1

OpenAI 的 GitHub 发布页显示 Codex CLI 0.149.1 于 **2026-08-24 08:28 +08:00** 发布。页面只给出从 0.149.0 到 0.149.1 的完整比较入口，没有逐项变更说明；该来源已在当天早一轮核验并累计保留。[查看官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.149.1)

## Love

一条当日 Reddit 帖欢迎 Codex 全局用量重置，但样本仅一人、语气带讽刺，且缺少精确发布时间，因此只作为低置信度信号。[查看社区原帖](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/)

## Hate

同一帖子称作者刚使用 banked full reset，随后全局重置又覆盖了这次额度安排，因而表达不满。另一条社区讨论中也有用户称重置后额度消耗仍快，但这些都是自报体验，未获官方说明支持。

## 情绪判断

**偏负面，置信度低。** 两条社区讨论集中在重置时机、额度消耗和行为变化猜测，但样本少、帖子时间精度不足，且关键技术推断受到评论者质疑，不能据此判断整体口碑或产品事实。

## 比较信号

新增社区帖的评论中出现 OpenCode、Pi 等替代工具的泛化比较，但没有同任务复现或具名评测；本页不据此对 Codex 与 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness / DSH 作优劣判断。

## 日期未确认

- OpenAI 的 [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) 将 **“Codex MCP server command deprecated”** 标为 2026-08-24，并明确建议用 Codex App Server 替代 `codex mcp-server`；若要从 Claude Code 调用 Codex，则建议使用官方 Codex plugin。页面没有精确发布时间，无法严格确认是否晚于本窗口起点 10:01，因此状态为 **官方来源 / 日期确认 / 窗口归属未完全确认**。这是一项命令迁移提示，不应误写成外部 MCP server 支持或 MCP 协议被弃用。

## 观察池

- Reddit 的 [“Huzzah! Codex has been reset!”](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/) 标为 2026-08-24，正文称全局重置已经发生，但同时抱怨它紧接作者使用 banked reset 之后到来。公开索引没有精确发布时间，状态为 **社区原帖 / 日期确认 / 窗口归属未完全确认 / 单一样本**。它只能支持“至少一位用户看到重置”的有限判断，不能证明覆盖范围或官方规则。
- Reddit 的 [“I Have Proof That OpenAI Changed Something on Their End Before Usage Limit Was Reset”](https://www.reddit.com/r/codex/comments/1vwxtgn/i_have_proof_that_openai_changed_something_on/) 标为 2026-08-24。作者根据本地 `models_cache.json` 总体字数变化推测 OpenAI 在重置前修改了后端指令；评论者指出缓存包含多个模型和字段，整体体积变化不能定位到现有模型的系统指令。状态为 **社区原帖 / 日期确认 / 精确时间未核验 / 推断受争议 / 观察池**，仅保留为可复核线索，不将其写成“静默升级”事实。

## 未证实传闻

- “OpenAI 在重置前静默修改了现有 Codex 模型系统指令”目前没有官方发布、可定位字段差异或可复现实验支持；相关社区帖只能证明作者观察到缓存整体大小变化，结论仍属 **未证实**。

## 来源链接

1. [Codex CLI 0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)
2. [Codex CLI 0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1)
3. [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)
4. [Huzzah! Codex has been reset!](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/)
5. [I Have Proof That OpenAI Changed Something on Their End Before Usage Limit Was Reset](https://www.reddit.com/r/codex/comments/1vwxtgn/i_have_proof_that_openai_changed_something_on/)

## 采集状态

- 已检查：OpenAI News / Research、ChatGPT Release Notes、ChatGPT & Codex changelog、API changelog、模型与弃用文档、Codex 各产品入口、OpenAI Status、Codex 与 Agents SDK / 官方 SDK GitHub Releases、Reddit 五个相关社区、Hacker News、YouTube 与公开中英文网页搜索。
- 失败来源：X（未登录无法稳定核验原帖与精确时间）；Reddit JSON（403，无法取得新增帖子精确 UTC 时间；公开搜索仅标自然日）；YouTube（无可交叉核验的窗口内新增）。
- 初始候选：12；最终保留来源：5。
- 二次补搜：否（最终来源不为 0）。

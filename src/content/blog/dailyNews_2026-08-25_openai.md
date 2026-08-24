---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-25T00:00:00+08:00"
updatedAt: "2026-08-25T04:02:00+08:00"
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
  - "Agent"
  - "App Server"
  - "ChatGPT"
  - "CLI"
  - "Codex"
  - "Community"
  - "Deprecation"
  - "MCP"
  - "OpenAI"
  - "Release"
  - "Usage Reset"
---

## 今日概览

采集窗口为 **2026-08-24 04:02 至 2026-08-25 04:02（Asia/Shanghai）**。窗口内可精确核验的新增是 Codex CLI 0.149.1：GitHub 发布于 8 月 24 日 08:28，发布页仅给出与 0.149.0 的比较链接，没有逐项说明，因此不推断具体修复。官方 ChatGPT & Codex changelog 同日宣布弃用 `codex mcp-server`、建议改用 Codex App Server；该条只有自然日而没有精确发布时间，无法排除其发布于窗口起点前约一小时，故保守列入“日期未确认”。ChatGPT、API、Agents SDK、模型及 Tier 2/3 产品线未发现窗口内新的官方发布。本轮新增一条低置信度社区观察：一位用户称 Codex 全局用量重置已经发生，但同时抱怨重置时机浪费了刚使用的 banked reset；公开索引只有自然日，不能精确归窗，也不能据此推断全部账户状态。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
|---|---|---|
| Codex CLI | **新增稳定版 0.149.1**；页面没有逐项 release notes | [GitHub 官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.149.1) |
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

### Codex CLI 0.149.1

OpenAI 的 GitHub 发布页显示 Codex CLI 0.149.1 于 **2026-08-24 08:28 +08:00** 发布。页面只给出从 0.149.0 到 0.149.1 的完整比较入口，没有逐项变更说明；本页仅确认版本发布，不把提交差异概括成官方 release notes。[查看官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.149.1)

## Love

一条当日 Reddit 帖欢迎 Codex 全局用量重置，但样本仅一人、语气带讽刺，且缺少精确发布时间，因此只作为低置信度信号。[查看社区原帖](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/)

## Hate

同一帖子称作者刚使用 banked full reset，随后全局重置又覆盖了这次额度安排，因而表达不满。这是单一用户陈述，未获官方说明或更多可核验样本支持。

## 情绪判断

**中性，置信度低。** 新增社区帖子同时包含欢迎重置与对重置时机的不满，且只有单一样本，不能据此判断整体口碑方向。

## 比较信号

未发现窗口内具名评测、同任务复现或足够完整的社区证据，因而不对 Codex 与 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness / DSH 作优劣判断。

## 日期未确认

- OpenAI 的 [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) 将 **“Codex MCP server command deprecated”** 标为 2026-08-24，并明确建议用 Codex App Server 替代 `codex mcp-server`；若要从 Claude Code 调用 Codex，则建议使用官方 Codex plugin。页面没有精确发布时间，无法严格确认是否晚于本窗口起点 04:02，因此状态为 **官方来源 / 日期确认 / 窗口归属未完全确认**。这是一项命令迁移提示，不应误写成外部 MCP server 支持或 MCP 协议被弃用。

## 观察池

- Reddit 的 [“Huzzah! Codex has been reset!”](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/) 标为 2026-08-24，正文称全局重置已经发生，但同时抱怨它紧接作者使用 banked reset 之后到来。公开索引没有精确发布时间，状态为 **社区原帖 / 日期确认 / 窗口归属未完全确认 / 单一样本**。它只能支持“至少一位用户看到重置”的有限判断，不能证明覆盖范围或官方规则。搜索到的“静默模型升级”说法发布于窗口之前，且缺少官方模型或系统提示变更证据，未作为本日来源重复收录。

## 未证实传闻

本轮没有新增且证据链足够明确的传闻候选。

## 来源链接

1. [Codex CLI 0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1)
2. [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)
3. [Huzzah! Codex has been reset!](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/)

## 采集状态

- 已检查：OpenAI News / Research、ChatGPT Release Notes、ChatGPT & Codex changelog、API changelog、模型与弃用文档、Codex 各产品入口、OpenAI Status、Codex 与 Agents SDK / 官方 SDK GitHub Releases、Reddit 五个相关社区、Hacker News、YouTube 与公开中英文网页搜索。
- 失败来源：X（未登录无法稳定核验原帖与精确时间）；Reddit（窗口内相关结果稀少，未取得足够可靠的新口碑样本）；YouTube（无可交叉核验的窗口内新增）。
- 初始候选：10；最终保留来源：3。
- 二次补搜：否（最终来源不为 0）。

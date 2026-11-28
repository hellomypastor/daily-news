---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-11-28T00:00:00+08:00"
updatedAt: "2026-11-28T10:43:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTags: []
tags:
  - "观察池"
  - "较旧背景"
  - "日期未确认"
  - "套餐用量"
  - "Agent"
  - "API"
  - "ChatGPT"
  - "Codex"
  - "Codex CLI"
  - "GPT-6.2"
  - "Hate"
  - "OpenAI"
---

## 今日概览

采集窗口：**2026-11-27 10:43 至 2026-11-28 10:43（Asia/Shanghai）**。本轮逐项核查 OpenAI 官方新闻、开发者变更日志、ChatGPT/Codex 发布说明与官方 GitHub 后，**未发现能由官方页面确认发布时间落在窗口内的重大产品发布**。可信二手报道提到 GPT-6.2 用量核算修正，但原始 X 帖在当前环境不可完整读取，因此保留在“日期未确认”；较早的 Codex 预发布版、即将到期的 API 弃用节点与社区反馈列入观察池，不冒充今日发布。

## Tier 1：编码、Agent 与开发者平台

| 产品 / 能力 | 本轮状态 | 核查结论 |
|---|---|---|
| Codex CLI | 无 24h 已确认新增 | 官方 [Codex release 页](https://github.com/openai/codex/releases) 可见的最近候选为 0.174.0-alpha.7，页面标注 11 月 26 日发布，已超出本轮 24h 窗口；详见观察池。 |
| VS Code / JetBrains 集成 | 无新增 | 官方新闻、Codex changelog 与文档未见窗口内独立发布。 |
| Codex cloud / remote tasks / PR agents | 无新增 | 已核查 Codex changelog、开发者博客与官方产品入口，未见窗口内可确认更新。 |
| ChatGPT agentic mode / Work | 无新增 | ChatGPT release notes 当前最新可见条目早于本轮窗口。 |
| Agents API / Agent-building products | 无新增 | API changelog 未显示 11 月 27–28 日新条目。 |
| Responses API | 无新增 | 官方 changelog 最近可见的 11 月功能条目早于窗口。 |
| Agents SDK Python / TypeScript | 无新增 | 两个官方 release 页未见窗口内稳定版发布。 |
| Assistants API 迁移 | 无新增 | Assistants API 已于 2026-08-26 关闭；本轮仅核查迁移状态，不重复作为今日新闻。 |
| Realtime API | 无新增 | API changelog 与指南未见窗口内更新。 |
| GPT / reasoning / Codex 模型族 | 无 24h 已确认发布 | GPT-6.2 Astra / Sol 等当前模型信息可由官方文档确认，但本轮窗口内未见新型号发布。 |

## Tier 2：ChatGPT 消费端能力

浏览器/Operator 能力、桌面应用、GPTs/GPT Store、Canvas、Sora/视频、GPT Image/DALL·E、Voice、Connectors/MCP 均已核查；官方 ChatGPT release notes 与插件/开发者变更日志未显示窗口内新增。现有功能不因本轮再次检查而重复写成新闻。

## Tier 3：企业、教育、安全与行业方案

Enterprise、Business、Edu、Gov、Science、安全和行业方案入口均已扫描。本轮未发现可确认发生于过去 24 小时的正式公告；即将到期的旧弃用公告单列观察池，避免把临近日期误当成新公告。

## 官方更新（最新优先）

本轮没有发布时间可确认落在 24 小时窗口内的官方产品更新。

## Love

本轮采样未获得同时满足“窗口内、可访问、非官方宣传”的明确正向口碑证据，因此不以零散印象补齐。

## Hate

- **套餐用量与成本可预期性受到质疑（日期未确认）**：TechRadar 报道称 OpenAI 修正 GPT-6.2 上线时的用量核算错误，修正后相同工作会更快消耗套餐额度，并称受影响用户会获得一次可储存的重置。报道引用了 OpenAI 的 X 帖，但当前环境无法直接核验原帖完整时间与措辞，故只作为可信二手候选，不能视为独立官方公告。[二手报道](https://www.techradar.com/ai-platforms-assistants/chatgpt/weve-fixed-this-now-so-the-same-work-will-use-more-of-your-plans-usage-allowance-openai-admits-it-made-a-mistake-when-launching-gpt-6-2-and-now-paying-chatgpt-users-could-hit-their-usage-limits-up-to-40-percent-faster)
- **重度 Codex 用户表达离开意愿（较旧社区样本）**：一则 11 月 25 日的 r/codex 帖获得较多互动，作者将其他工具的长时多 Agent 工作能力与 Codex 额度体验作比较。它是单个高互动社区样本，不能外推为整体用户流失趋势。[社区讨论](https://www.reddit.com/r/codex/comments/1y5hssp/goodbye_it_was_really_really_nice_for_a_while/)

## 情绪判断

**偏负面，低置信度。** 支持证据是一篇引用官方说法的二手报道与一则较早的高互动社区帖子；反对外推的理由是样本规模小、原始官方 X 帖不可完整核验，且本轮没有足量窗口内 Reddit/HN 对照样本。官方发布本身不计入正向口碑。

## 横向比较

社区候选把 Codex 与可长时运行、使用多 Agent 的其他编码工具比较，但没有具名基准或可复现实验。本轮因此不作“追平/超过”判断。Cline、Pi Coding Agent、DeepSeek Harness/DSH、Claude Code 与 Cursor 的完整产品扫描留给开源/对应专题页；这里只记录它们作为社区讨论中的比较坐标。

## 日期未确认

| 候选 | 证据状态 | 限制 |
|---|---|---|
| GPT-6.2 用量核算修正 | 可信二手报道，称援引 OpenAI 官方 X 帖 | 搜索结果显示报道为近期发布，但当前环境无法稳定读取原帖和精确发布时间；不得写成窗口内已确认事实。[来源](https://www.techradar.com/ai-platforms-assistants/chatgpt/weve-fixed-this-now-so-the-same-work-will-use-more-of-your-plans-usage-allowance-openai-admits-it-made-a-mistake-when-launching-gpt-6-2-and-now-paying-chatgpt-users-could-hit-their-usage-limits-up-to-40-percent-faster) |

## 观察池

- **Codex 0.174.0-alpha.7（较旧预发布）**：官方 [release 页](https://github.com/openai/codex/releases) 标注 2026-11-26 04:36（GitHub 页面显示时区未在摘要中明确），属于预发布且超出本轮窗口。页面还显示 0.172.0 为最近稳定版；后续需等待稳定版或明确 changelog 后再提升为当日重点。
- **11 月 30 日迁移节点（旧公告临近生效）**：OpenAI [弃用页面](https://developers.openai.com/api/docs/deprecations) 列出 `/v1/prompts`、旧 Evals 工作流与 Agent Builder 的 2026-11-30 弃用/只读节点，并指向应用代码、Promptfoo、Agents SDK 或 ChatGPT Workspace Agents 等替代方向。该通知日期早于本轮，只是运维提醒，不是今日发布。
- **Codex 用量负面讨论（较旧社区信号）**：11 月 25 日 r/codex [帖子](https://www.reddit.com/r/codex/comments/1y5hssp/goodbye_it_was_really_really_nice_for_a_while/) 反映一名重度用户对额度与竞品体验的失望；仅作单样本观察，不代表总体口碑。

## 来源链接

正文引用的四个来源均已在对应段落直接链接：OpenAI Codex GitHub releases、OpenAI API deprecations、TechRadar 二手报道与 r/codex 社区讨论。

## 采集状态

- **已检查来源**：OpenAI News/Research、Developers API changelog/deprecations、Codex blog/cookbook、ChatGPT release notes、ChatGPT & Codex changelog、Codex 与 Agents SDK 官方 GitHub releases、Responses/Agents/Realtime/模型文档、Reddit、Hacker News、OpenAI Developer Community 与官方 YouTube。
- **失败来源**：OpenAI 官方 X 时间线受登录限制；部分 Reddit 最新列表无法由搜索索引完整还原；GitHub 搜索摘要对预发布时区展示有限。
- **初始候选数**：8；**保留来源数**：4；**二次补搜**：否（最终来源不为 0）。
- 本轮结论：24h 内无可由官方页面确认的重大新发布；1 条日期未确认的可信二手候选，3 条较旧或临近节点观察信号。

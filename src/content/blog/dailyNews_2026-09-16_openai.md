---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-16T00:00:00+08:00"
updatedAt: "2026-09-16T10:48:56+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.155.0-alpha.9"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9"
featuredSummary: "官方预发布标记；发布说明没有功能细目。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-16 09:34 +08:00"
featuredTags: ["Codex","预发布"]
tags:
  - "观察池"
  - "较旧背景"
  - "口碑"
  - "未证实传闻"
  - "预发布"
  - "Agent"
  - "ChatGPT"
  - "Codex"
  - "OpenAI"
---

## 今日概览

采集窗口：2026-09-15 10:46 至 2026-09-16 10:46（Asia/Shanghai）。窗口内核实 Codex CLI 三个连续 **alpha 预发布标记**；发布说明只有版本号，无法据此声称具体能力更新。官方 ChatGPT 与 Agent 产品公告未见能确认在此窗口发布的新条目。社区口碑为个人报告，不能代表总体体验。

## Tier 1：编码、Agent 与开发平台

| 产品线 | 窗口内状态与证据 |
|---|---|
| Codex CLI | [0.155.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9)、[alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.8)、[alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.7) 分别在上海时间 09:34、06:26、05:09 发布；预发布，无功能说明。 |
| VS Code / JetBrains 集成 | 无可核实新增；不能从 CLI alpha 推断 IDE 能力变更。 |
| Codex 云端/远程任务与 PR Agent | 无可核实新增。 |
| ChatGPT agentic mode | 无可核实新增。 |
| 官方 Agent 构建产品 | [Agents API 公测公告](https://openai.com/index/introducing-the-agents-api/) 发布于 9 月 10 日，较旧背景；窗口内无新增可核实。 |
| Responses API；Agents SDK Python/TypeScript | 无可核实新增。GitHub 官方 SDK 发布页亦未检出窗口内版本。 |
| Assistants API 弃用/迁移；Realtime API | 无可核实新增；本次没有发现新的官方迁移日期或 Realtime 发布。 |
| 当前 GPT、reasoning、Codex 模型家族 | 无可核实新模型发布；社区退休说法见“未证实传闻”。 |

## Tier 2：其他产品

| 范围 | 状态 |
|---|---|
| 浏览器/Operator 功能、桌面应用、GPTs/GPT Store、Canvas | 无可核实新增。 |
| Sora/视频、GPT Image/DALL·E、语音 | 无可核实新增。 |
| Connectors/MCP | [官方 ChatGPT 发布记录](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 最近核实条目为 9 月 10 日，较旧背景；[插件可见性用户报告](https://community.openai.com/t/some-plugins-are-not-found-in-chatgpt-conversations-since-sep-9-directory-search-still-shows-them/1396755) 属较旧问题的持续讨论，不能定为平台范围的故障。 |

## Tier 3：企业、教育、政务、科研、安全与行业

Enterprise、Business、Edu、Gov、Science、安全与行业应用：窗口内无可核实的新官方公告；Agents API 在企业长任务场景的意义见上文较旧背景。不把社区使用反馈当作官方发布。

## 官方动态（新到旧）

1. Codex CLI [alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9)（09:34）：仅能确认官方预发布标签，功能变化未披露。
2. Codex CLI [alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.8)（06:26）：同上。
3. Codex CLI [alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.7)（05:09）：同上。

## Love / Hate 与口碑

- Love：未找到足够独立、日期可确认的具体积极体验，不能把官方发布算作好评。
- Hate：[开发者论坛高推理/文件任务反馈](https://community.openai.com/t/gpt-5-6-sol-high-reasoning-appears-broken-instant-replies-no-deep-thinking-file-workflows-failing/1394605) 包含用户关于任务中断、响应过短的个例；帖子更早创建，放观察池。[Reddit 限额推测](https://www.reddit.com/r/codex/comments/1wh2dsq/the_sudden_merge_of_codex_and_chatgpt_through/) 为用户解释与体验叙述，发布日见 9 月 15 日，小时与后台原因未确认。
- 情绪判断：样本偏负，但置信度低；取样少、帖子日期与问题根因有不确定性，不给比例或总体趋势。

## 竞品比较

本窗口没有足够同场景实测可下 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness/DSH 的优劣结论。它们均值得在具体任务、成本与稳定性上对比；Cline、Pi、DSH 的完整产品扫描由开源 harness 专题负责。

## 日期未确认

[Reddit 限额推测](https://www.reddit.com/r/codex/comments/1wh2dsq/the_sudden_merge_of_codex_and_chatgpt_through/) 能看到 9 月 15 日日期，无法确认其发帖小时是否落在窗口内，亦无可核实服务端机制。

## 观察池

[开发者论坛推理体验报告](https://community.openai.com/t/gpt-5-6-sol-high-reasoning-appears-broken-instant-replies-no-deep-thinking-file-workflows-failing/1394605) 为较早问题的持续讨论；[插件发现问题](https://community.openai.com/t/some-plugins-are-not-found-in-chatgpt-conversations-since-sep-9-directory-search-still-shows-them/1396755) 首帖为 9 月 11 日。两者均需官方排查结论与复现范围。

## 未证实传闻

[社区关于 GPT-5.5 在 10 月 14 日退出 ChatGPT/Work/Codex 的帖子](https://www.reddit.com/r/CodexAutomation/comments/1whe9ju/openai_is_retiring_gpt55_from_chatgpt_work_and/) 发布日显示 9 月 15 日，但本轮没有定位到支持此具体日期和迁移映射的官方公告；**不作弃用事实或行动建议**。

## 来源与采集状态

已核对 OpenAI 新闻检索、[ChatGPT 发布记录](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)、[Agents API 公告](https://openai.com/index/introducing-the-agents-api/)、Codex 与 Agents SDK 的 GitHub releases、开发者论坛、Reddit 与搜索索引。初筛 16 条，保留 9 个独立 URL；来源非零，无需零来源二次补搜。X/YouTube/Hacker News 的时间限定检索未取得可独立核实的具体条目，故不计作证据；官方配图检索未找到与窗口内 alpha 发布对应且出处明确的合适题图。

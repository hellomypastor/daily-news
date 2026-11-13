---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-11-13T00:00:00+08:00"
updatedAt: "2026-11-13T10:48:32+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex 0.170.0-alpha.4"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4"
featuredSummary: "Codex 官方仓库发布 0.170.0-alpha.4 预发布构建；release 页未给出足够的用户向变更说明。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-11-13 06:59 +08:00"
featuredTags: ["Codex","预发布"]
tags:
  - "观察池"
  - "较旧背景"
  - "可信二手来源"
  - "日期未确认"
  - "社区反馈"
  - "预发布"
  - "Agent"
  - "ChatGPT"
  - "Claude Code"
  - "Codex"
  - "OpenAI"
---

## 今日概览

采集窗口：**2026-11-12 10:48 至 2026-11-13 10:48（Asia/Shanghai）**。本轮未在 ChatGPT Release Notes 或 OpenAI API Changelog 发现窗口内新的稳定产品公告；Codex 官方 GitHub 在窗口内发布了 **0.170.0-alpha.4** 预发布构建。社区侧以公开 issue 为主，出现技能导入残留目录、长会话自动压缩反复触发等问题信号；这些是用户报告，不代表 OpenAI 已确认根因。

## Tier 1：编码、Agent 与开发者平台

| 产品/入口 | 状态 | 说明 |
|---|---|---|
| Codex CLI | **预发布新增** | [0.170.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4) 于 2026-11-13 06:59（上海时间）发布；release 页仅给出预发布版本与构建信息，未提供足够的用户向变更说明，因此不将其描述为稳定版功能上线。 |
| VS Code / JetBrains 集成 | 无新增 | 官方入口未见窗口内可核实的新公告。 |
| Codex cloud/remote tasks 与 PR agents | 无新增 | 官方 changelog 未见窗口内新条目。 |
| ChatGPT agentic mode | 无新增 | ChatGPT Release Notes 未见窗口内新条目。 |
| Agents API / agent-building products | 无新增 | API Changelog 的最新可见条目早于本窗口。 |
| Responses API | 无新增 | 未见窗口内官方 changelog 条目。 |
| Agents SDK Python / TypeScript | 无新增 | 两个官方 SDK release 入口未见窗口内稳定发布。 |
| Assistants API 迁移状态 | 无新增 | 本轮核对 deprecation/changelog，未见窗口内状态变化。 |
| Realtime / Live API | 无新增 | 未见窗口内官方更新。 |
| 当前 GPT、reasoning、Codex 模型家族 | 无新增 | 未发现窗口内经官方确认的新模型或别名变化。 |

## Tier 2：ChatGPT 体验面

| 范围 | 状态 |
|---|---|
| Browser / Operator、Desktop、GPTs / GPT Store、Canvas | 官方 Release Notes 未见窗口内新增。 |
| Sora / video、GPT Image / DALL·E、Voice | 官方入口未见窗口内新增。 |
| Connectors / MCP | 官方入口未见窗口内新增。 |

## Tier 3：企业与行业方案

Enterprise、Business、Edu、Gov、Science 与安全相关官方入口均已检查，未发现能够确认落在本窗口内的新发布。未以旧公告填充今日动态。

## 官方更新（按时间倒序）

1. **Codex 0.170.0-alpha.4 预发布构建**：官方 [GitHub release](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4) 显示发布时间为 2026-11-12 22:59 UTC（上海时间 11 月 13 日 06:59）。页面缺少详细 changelog，因此当前只能确认版本发布，不能推断具体功能。

## Love

本轮没有找到同时满足“窗口内、可访问、具备上下文”的独立正向用户样本。官方发布不计入正向口碑，因此不以发布动作替代 Love 证据。

## Hate

- [技能导入失败会留下不完整目录](https://github.com/openai/codex/issues/60958)：报告称首次从 Claude 技能导入失败后，残留目录会阻止后续检测和重试。状态为公开用户 issue，尚未据此断言已确认或已修复。
- [长会话自动压缩反复触发](https://github.com/openai/codex/issues/61126)：报告描述含大量图片、模型/Provider 切换的长会话在压缩后很快再次接近阈值。报告明确缺少默认 Provider 的独立复现，因此这里只作为负面体验与诊断线索。

## 情绪判断

**偏负面、低置信度。** 证据仅来自两条 GitHub issue，且缺少足够的窗口内正向社区样本；样本量小，也可能偏向故障上报人群。不能据此外推整个 Codex 或 ChatGPT 用户群体。

## 比较与采用信号

可信科技媒体对入门订阅的比较指出 Claude 与 Codex 都存在额度共享/计算口径需要理解的问题；该文发布时间在主窗口之外，故仅放入观察池。未发现窗口内具名评测能证明 Codex、Claude Code、Cline、Pi Coding Agent、DeepSeek Harness/DSH 或 Cursor 之间存在“追平/超过”关系。

## 日期未确认

- 上述两条 Codex issue 的页面可确认于 11 月 12 日创建或更新，但搜索结果未稳定提供精确时分；因此不将其排列为精确时间线事件。

## 观察池

- **稳定版边界外补充**：[Codex CLI 0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2) 于 2026-11-12 06:44（上海时间）发布，早于本轮窗口起点约 4 小时。OpenAI 官方 changelog 说明其主要用户向变化是 Google Cloud Vertex AI 默认增量发送工具更新；它是背景信息，不计作过去 24 小时新增。
- **可信二手比较、约两日前**：[Tom's Guide 的 Codex 与 Claude Code 额度比较](https://www.tomsguide.com/ai/i-compared-openai-codex-and-claude-codes-usage-limits-and-theres-a-catch-with-both-usd20-plans) 提醒读者关注两类订阅的额度共享方式，并称 OpenAI 计划于 2026 年 12 月调整 ChatGPT 与 Codex 的额度口径。该项未找到窗口内对应的一手新公告，故不作为已确认的今日变化。

## 来源链接

- [Codex 0.170.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.170.0-alpha.4)
- [Codex issue #60958](https://github.com/openai/codex/issues/60958)
- [Codex issue #61126](https://github.com/openai/codex/issues/61126)
- [Codex 0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2)
- [Tom's Guide 订阅额度比较](https://www.tomsguide.com/ai/i-compared-openai-codex-and-claude-codes-usage-limits-and-theres-a-catch-with-both-usd20-plans)

## 采集状态

- 已检查：OpenAI ChatGPT/Codex changelog、产品 Release Notes、API Changelog、ChatGPT Release Notes、Codex GitHub releases/issues、Agents SDK Python/TypeScript releases、开发者平台与社区/媒体入口。
- 失败来源：GitHub REST API 匿名请求超时，已改用公开 HTML；Reddit/X 未取得可核验的窗口内高质量样本；YouTube 未见带新增事实的窗口内官方视频。
- 初始候选：9 条；保留：5 条（1 条窗口内官方预发布、2 条日期粒度有限的社区问题、2 条观察池背景）。
- 二次补搜：否；本页最终来源不为 0。

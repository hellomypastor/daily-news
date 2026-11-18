---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-18T00:00:00+08:00"
updatedAt: "2026-11-18T10:47:13+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Introducing eve 1.0"
featuredUrl: "https://vercel.com/blog/eve-is-now-generally-available"
featuredSummary: "Vercel 发布 eve 1.0，提供可自托管 harness，并可结合 Vercel Workflows、Sandbox 与 Agent Runs 托管运行。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-17（官方页面未给出具体时刻）"
featuredTags: ["AaaS","Durable Execution","Sandbox","GA"]
featuredImage: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/1R5Z5o3JKUiGPhVNUYovLc/01b2bdf97e72fd4b6295c16196cdb51a/changlog-eve.png"
featuredImageAlt: "Vercel eve 1.0 发布页展示的托管 Agent 运行界面"
featuredImageCaption: "图片来源：Vercel eve 1.0 官方发布页"
tags:
  - "二手来源"
  - "日期未确认"
  - "详见 OpenAI 专题页"
  - "AaaS"
  - "Agent"
  - "Async Agent"
  - "Async Execution"
  - "Background"
  - "Cloud Agent"
  - "Devin"
  - "Durable Execution"
  - "GA"
  - "Hosted Task"
  - "Managed Agent"
  - "Managed Session"
  - "Responses API"
  - "Sandbox"
---

## 今日概览

主窗口为 **2026-11-17 10:47 至 2026-11-18 10:47（Asia/Shanghai）**，并向前查看 24–72 小时观察信号。本轮核实到两条明确的 24 小时 AaaS 动态：Vercel 发布 eve 1.0，把可自托管的 Agent harness 与 Vercel Workflows、Sandbox、Agent Runs 组合成托管运行栈；OpenAI Responses API 新增 2 小时与 8 小时后台完成窗口，用延迟换取更低费率。Devin 与 Grok 已完成专项检查：Devin 有一条可信二手索引中的会话生命周期线索，但官方原文入口未稳定打开，放入“日期未确认”；Grok 最近 changelog 主要是本地/客户端改进，没有把普通模型、API 或本地 harness 更新误写成 AaaS。

## 重点动态

### 1. Vercel eve 1.0：开源 harness + 托管耐久执行

Vercel 于 11 月 17 日宣布 eve 1.0 GA。eve 本身开源、可自托管；当部署到 Vercel 时，由 Workflows 提供可恢复的耐久执行、Sandbox 隔离 Agent 生成代码、Agent Runs 展示 session、模型调用、工具、子 Agent 和审批。它还支持多租户、跨 session memory、计划任务、后台任务与等待 webhook / timer 后恢复，符合本页对托管执行生命周期与可观测性的定义。[Vercel 官方发布](https://vercel.com/blog/eve-is-now-generally-available)

<figure class="source-image">
  <a href="https://vercel.com/blog/eve-is-now-generally-available"><img src="https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/1R5Z5o3JKUiGPhVNUYovLc/01b2bdf97e72fd4b6295c16196cdb51a/changlog-eve.png" alt="Vercel eve 1.0 发布页展示的托管 Agent 运行界面" loading="lazy" /></a>
  <figcaption><a href="https://vercel.com/blog/eve-is-now-generally-available">图片来源：Vercel eve 1.0 官方发布页</a></figcaption>
</figure>

官方披露的 hosted stress test 是固定 mock-model 工作负载，并非模型智能或真实业务吞吐基准；其 414ms 中位延迟与成本下降应按该测试条件理解，不能外推到所有 Agent。

### 2. OpenAI Responses API：后台完成窗口公测

OpenAI 11 月 17 日 API changelog 新增 2 小时与 8 小时 completion window，支持 GPT-6.2 Astra、GPT-6.2 Sol、GPT-6.1 Terra 和 GPT-6 Luna。官方称相对 Standard 模式 token 费率分别低 30% 和 40%，任务进入共享的 Batch / Background rate limit。这是托管异步执行能力，而不只是模型 API 版本更新；详见 OpenAI 专题页。[API Changelog](https://developers.openai.com/api/docs/changelog)

[Background mode 文档](https://developers.openai.com/api/docs/guides/background)说明可在创建 Response 时设置 `background_options.completion_window`，再轮询或使用 webhook 获取结果。它仍是托管推理任务，不等同于含环境、代码沙箱和企业控制面的完整远程编码 Agent。

## 远程 / 云端 Agent 执行

| 平台 | 执行形态 | 本轮变化 | 证据状态 |
|---|---|---|---|
| Vercel eve | Workflows 耐久执行 + Sandbox + Agent Runs + schedules | 1.0 GA，明确支持后台 / 可恢复任务与托管部署 | 官方确认，24h |
| OpenAI Responses API | 托管后台 completion | 新增 2h / 8h 窗口与折扣费率 | 官方确认，24h；详见 OpenAI 专题页 |
| Cognition Devin | 云端 session、环境、自动化与企业控制 | 未核实到窗口内官方原文可访问的新异步能力 | 已专项检查 |
| xAI / Grok Bot / Grok Build | 持久 Bot、cloud agent、工具与本地 / 远程工作流 | 最近 24h 未见符合定义的新托管生命周期发布 | 已专项检查 |

## 海外厂商

- **Vercel**：eve 1.0 的差异化不只是 SDK，而是开源 harness 与托管 Workflows / Sandbox / Drives / Connect / Agent Runs 的组合；用户可以保留 Agent 源码，也可购买托管运行能力。
- **OpenAI**：后台完成窗口强化了异步推理的成本层，但公开文档没有把它描述为完整的远程开发环境；详见 OpenAI 专题页。
- **Anthropic、Google、Microsoft / GitHub、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph / Amp**：官方渠道未核实到主窗口内新的 GA、定价、并发或企业控制面发布；无动态时不重复较旧背景。

## 中国厂商（字节系重点）

- **字节 Coze / Volcano / Doubao / Trae / Seed**：检查了托管 Agent、远程环境与商业化入口，未核实到窗口内可由原文确认的新发布。
- **阿里 Bailian / Qoder、腾讯、百度、智谱、Kimi、MiniMax、DeepSeek**：未核实到主窗口内新的托管执行、并发或企业控制面发布。需要脚本渲染或登录的页面被记录为扫描限制，不据此制造“无变化”以外的事实。

## Coding Agent / Harness 的 AaaS 边界检查

| Harness | 本轮 AaaS 结论 |
|---|---|
| Cline | 官方仓库 / changelog 已检查；未发现 24h 内新的厂商托管异步执行、远程环境、企业控制面或定价证据。 |
| Pi Coding Agent / pi-mono | 官方仓库 / releases 已检查；未发现符合 AaaS 定义的新托管服务。 |
| DeepSeek Harness / DSH | 最新可见 release 仍以本地 / 桌面 / SDK / SSH 能力为主；没有把远端连接或 headless 能力自动等同于厂商托管服务。 |
| OpenCode、Aider、Continue、Roo Code | 快查官方仓库与 releases；普通本地 harness 更新不进入 AaaS。Roo Code 历史 cloud 方向没有窗口内新原文，不重复旧闻。 |

## AaaS 与 MaaS / PaaS 边界

- **eve on Vercel** 属于 AaaS / Agent runtime：包含运行生命周期、耐久状态、沙箱、可观测性、审批和托管部署。
- **Responses background completion** 属于较窄的托管异步 Agent / inference primitive：有后台任务与完成窗口，但没有公开宣称提供完整代码环境和 Agent 控制面。
- 单纯的新模型、模型 API、普通云函数、GPU 或本地 CLI 更新仍分别属于 MaaS、PaaS 或本地工具，不因带有“Agent”字样自动升级为 AaaS。

## 日期未确认

- 一个可信二手发布索引声称 Devin 在 11 月 17 日新增 session 订阅侧栏，并以 “Mark done” 取代 Archive，使 session 即使移入 Done 仍可继续运行并留在其他订阅者侧栏。这与托管 session 生命周期有关，但本轮未能从 docs.devin.ai 稳定取得对应官方原文，且该索引自身的更新时间标记存在不一致，因此只保留为**日期与原文待确认**线索，不写成已确认发布。[二手发布索引](https://releases.sh/cognition)

## 未证实传闻

本轮没有保留达到最低可信度的一源泄漏或发布传闻。

## 邻近信号观察池

- Grok Build 11 月 16 日 v1.0.88 主要是 MCP 动态 headers、dashboard 与本地 session / worktree 体验修复；没有新的托管异步任务、远程环境或企业控制面证据，因此不计作 AaaS 动态。
- DSH 11 月 11 日预发布包含多层子 Agent、scheduled tasks、SSH helper 与 headless 能力，但证据指向本地 / 自托管 harness，而非供应商托管执行生命周期；只作为能力边界参考，不重复收录为当日来源。

## 趋势

托管 Agent 平台正在分出两条成本曲线：一条像 eve，销售完整的耐久运行、沙箱、状态、连接和可观测性；另一条像 Responses background completion，只提供延迟容忍的托管任务原语。采购与架构评估需要明确自己买的是完整 Agent 控制面，还是更便宜的异步模型执行。

## 来源链接

- [Introducing eve 1.0](https://vercel.com/blog/eve-is-now-generally-available)
- [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
- [OpenAI Background mode](https://developers.openai.com/api/docs/guides/background)
- [Cognition release index（可信二手，日期未确认）](https://releases.sh/cognition)

## 采集状态

- 已检查：Vercel、OpenAI、Anthropic、Google、Microsoft / GitHub、Replit、Cognition Devin、xAI / Grok、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph / Amp；中国厂商入口；Cline、pi-mono、DSH、OpenCode、Aider、Continue、Roo Code。
- 失败或受限：Devin 11 月 17 日官方 release 原文未被搜索索引稳定暴露；部分中国厂商页面需脚本渲染或登录；X 未登录时间线不稳定。
- 初始候选 **12** 条，最终保留 **4** 个来源；其中 24 小时内有 2 条官方确认动态，故未触发“零来源 / 零验证动态”二次补搜，`secondPass=false`。

今日扫描完成，共 4 条动态或证据线索，重点：Vercel eve 1.0 托管耐久 Agent 栈 GA，以及 OpenAI Responses API 新增 2 小时 / 8 小时后台完成窗口。

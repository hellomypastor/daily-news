---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-17T00:00:00+08:00"
updatedAt: "2026-09-17T11:08:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Memory in Grok Build"
featuredUrl: "https://x.ai/news/grok-build-memory"
featuredSummary: "Grok Build 增加按项目与全局作用域管理的跨会话记忆，后台捕获并在后续会话读取。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-09-16"
featuredTags: ["Grok Build","Memory","Managed Agent"]
featuredImage: "https://x.ai/images/news/grok-build-memory-og.webp"
featuredImageAlt: "Grok Build Memory 官方发布页配图"
featuredImageCaption: "图片来源：SpaceXAI 官方"
tags:
  - "较旧背景"
  - "邻近信号"
  - "详见 OpenAI 专题页"
  - "AaaS"
  - "Agent"
  - "Agents API"
  - "Cloud Agent"
  - "Google Cloud"
  - "Grok Build"
  - "Managed Agent"
  - "Memory"
  - "OpenAI"
  - "PaaS"
  - "Sponsored Agents"
---

## 今日概览

采集窗口为 **2026-09-16 10:48 至 2026-09-17 10:48（Asia/Shanghai）**。本轮确认两条符合或接近 AaaS 定义的 24 小时动态：Grok Build 为跨会话的编码工作增加后台记忆生命周期；OpenAI 在 ChatGPT Ads 中小范围测试由平台承载的 Sponsored Agents。另有 Google Cloud 的 Agent workspace 托管存储位于 24–48 小时区间，但它本质上是 AaaS 的底层 PaaS 组件，单列为邻近信号。Cognition Devin 已显式检查，未发现窗口内新发布。

## 重点动态

| 厂商 / 产品 | 时间与证据 | AaaS 判断 | 动态与意义 |
|---|---|---|---|
| SpaceXAI / Grok Build Memory | 9 月 16 日，官方 | **符合管理生命周期特征** | [Grok Build Memory](https://x.ai/news/grok-build-memory) 会在每次 turn 完成后于后台提取约定、决策与项目事实，按项目与全局作用域保存为 Markdown，并在后续相关会话开始前读取。它不是单纯模型 API，而是平台对 Agent 跨会话状态的持续管理。 |
| OpenAI / Sponsored Agents | 9 月 16 日，官方 | **托管垂直 Agent 的早期形态** | OpenAI 正在美国与部分广告主测试 [Sponsored Agents](https://openai.com/index/reimagining-advertising-with-ai/)：用户点击广告后进入明确标注、与原始 ChatGPT 对话分离的企业赞助 Agent 会话；同时 Ads Manager plugin 可在 ChatGPT Work 中创建、更新、分析广告活动。详见 OpenAI 专题页。 |

<figure class="source-image">
  <a href="https://x.ai/news/grok-build-memory"><img src="https://x.ai/images/news/grok-build-memory-og.webp" alt="Grok Build Memory 官方发布页配图" loading="lazy" /></a>
  <figcaption><a href="https://x.ai/news/grok-build-memory">图片来源：SpaceXAI 官方</a></figcaption>
</figure>

## 远程 / 云端 Agent 执行

- **Grok Build**：本次更新的核心是托管式状态延续。官方说明 Capture 在每一轮完成后后台运行，`/dream` 还会周期性整理记录，后续会话自动读取相关主题。这解决的是 Agent 生命周期中的记忆与恢复，不代表本轮新增了远程电脑、并发或企业控制面。
- **OpenAI**：Sponsored Agents 由 ChatGPT 广告体验承载，企业可面向用户提供专属对话 Agent；官方同时强调赞助会话与 ChatGPT 独立回答及原对话分离。它目前是 select advertisers 测试，不应写成普遍开放的自助式 AaaS。详见 OpenAI 专题页。
- **Cognition Devin（强制检查）**：已检查官方 News、Changelog、Docs、Pricing、Enterprise 与 integrations，窗口内未发现关于托管异步执行、环境、并发、定价或企业接入的新公告。Devin 本身属于云端 Agent 产品，但本页不重复旧背景来源来充数。

## 海外厂商

| 厂商 | 本轮状态 | 说明 |
|---|---|---|
| Anthropic Managed Agents / Claude Code | 无新增 | 已检查 hosted/managed sessions、环境、webhooks、memory stores 与 Agent SDK；无窗口内可核实发布。 |
| OpenAI Codex / Agents API | 无新增发布，另有 Sponsored Agents | Agents API 与 hosted sandbox 的正式公告早于本窗口；本轮仅保留 Sponsored Agents 新事件，并注明详见 OpenAI 专题页。 |
| Google Gemini / Jules | 近两日邻近信号 | 9 月 15 日 Filestore agent volumes 是托管 Agent workspace 存储，属于基础设施而非完整 AaaS。 |
| Microsoft / GitHub | 无新增 | Copilot Studio、Azure Agent Service、GitHub coding agent 官方入口未见窗口内发布。 |
| AWS AgentCore / Amazon Q | 无新增 | AWS AI Blog 窗口内未见新的 AgentCore 托管生命周期发布。 |
| Cognition Devin | 无新增 | 强制检查完成；未重复旧资料。 |
| SpaceXAI/xAI | 有新增 | Grok Build 跨会话记忆满足 managed lifecycle 特征；未发现 Grok Bot 在窗口内新增远程电脑、并发、定价或企业接入公告。 |
| Replit、Cursor、Lindy、CrewAI、LangGraph Platform、Cloudflare、Factory、Sourcegraph/Amp | 无新增 | 检查官方入口，未发现窗口内可独立核实的托管执行发布。 |

## Coding Agent / Harness 的 AaaS 边界

- **Cline**：官方 releases 的 9 月 15 日 SDK/CLI 更新含 Desktop、scheduled runs，以及通过 SSH 连接用户自有远端主机的 RemoteEnvironmentService。其执行环境由用户准备和管理，不是供应商托管的 Agent 生命周期；且时间在主窗口之外，因此只作为边界证据，不纳入 AaaS 正文来源。
- **Pi Coding Agent / pi-mono**：检查官方仓库、packages 与 releases，未发现窗口内由供应商托管的后台任务、远程环境、并发或企业控制面。
- **DeepSeek Harness / DSH**：官方仓库窗口内可见 Remote API、session 与 web client 相关讨论，但证据指向自托管 Host / 客户端协议或社区远控方案，没有供应商托管执行生命周期的证据，不列为 AaaS。
- **OpenCode、Aider、Continue、Roo Code**：检查官方入口后未发现窗口内符合 AaaS 定义的新动态。普通本地 harness 更新不进入本页。

## 中国市场

字节 Coze / 火山 / Doubao / Trae / Seed，阿里 Bailian / Qoder / 通义 / 夸克，腾讯元宝 / 混元 / 云，百度 AgentBuilder / Comate，以及智谱、Kimi、MiniMax、DeepSeek 的官方动态入口均已检查。本窗口未找到可回到公开原文、同时具备托管执行、远程环境、异步任务、企业控制面或定价证据的新发布；不以二手摘要硬凑条目。

## AaaS vs MaaS / PaaS

- **AaaS**：供应商管理 Agent 的执行、会话、环境、记忆、调度、工具、权限或可观测生命周期。Grok Build 的跨会话后台记忆属于 managed lifecycle；Sponsored Agents 是平台托管的垂直 Agent 分发与会话形态。
- **MaaS**：只提供模型推理 API，不因具备 tool calling 就自动成为 AaaS。
- **PaaS**：只提供计算、沙箱、存储或网络基础设施。Google Filestore agent volumes 服务于 Agent 平台，但本身不负责编排和完成 Agent 任务。

## 日期未确认

- 未保留日期无法核实的产品发布候选。

## 未证实传闻

- 本轮没有达到记录价值的单一来源泄露或传闻。

## 邻近信号观察池

- **Google Cloud Filestore agent volumes（9 月 15 日，官方，24–48 小时）**：[官方文章](https://cloud.google.com/blog/products/storage-data-transfer/filestore-agent-volumes) 宣布面向 Agent workspace 的全托管弹性文件存储，可自动为新 Agent sandbox 分配隔离 workspace、支持暂停后的快速恢复与 RWX 多 Agent 共享。它为 AaaS 平台提供关键基础设施，但属于 PaaS，不是最终 Agent 服务。
- **OpenAI Agents API（较旧背景，不作为今日动态）**：[9 月 10 日官方公告](https://openai.com/index/introducing-the-agents-api/) 具备托管 Codex harness、durable sessions、context compaction/recovery 与 OpenAI-hosted sandbox，明确符合 AaaS；本轮仅用它校准 OpenAI 边界，不把旧公告重复包装为今日发布。详见 OpenAI 专题页。

## 趋势

本轮信号显示，AaaS 的竞争面正从“能否远程跑任务”扩展到**状态持续、企业分发和底层 workspace 生命周期**：Grok Build 把项目知识沉淀为跨会话资产，OpenAI 把企业 Agent 嵌入广告触点，Google Cloud 则把隔离存储与快速恢复产品化。不过两条主窗口动态都尚不足以证明新的通用并发、定价或企业控制面已经开放。

## 来源链接

- [Memory in Grok Build](https://x.ai/news/grok-build-memory) — SpaceXAI，2026-09-16。
- [Reimagining advertising with AI](https://openai.com/index/reimagining-advertising-with-ai/) — OpenAI，2026-09-16，详见 OpenAI 专题页。
- [Introducing Filestore agent volumes](https://cloud.google.com/blog/products/storage-data-transfer/filestore-agent-volumes) — Google Cloud，2026-09-15，邻近 PaaS 信号。
- [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api/) — OpenAI，2026-09-10，较旧边界背景，详见 OpenAI 专题页。

## 采集状态

- **已检查来源**：OpenAI、Anthropic、Google、Microsoft/GitHub、AWS、Cognition Devin、SpaceXAI/xAI、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph/Amp；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code；以及主要中国厂商官方入口。
- **强制检查**：Cognition Devin 无新增；xAI/Grok 有 Grok Build Memory 新增，并按 AaaS 边界收录；Cline/Pi/DSH 无供应商托管执行新证据。
- **失败来源**：Devin 站内搜索未返回窗口内发布，已改查官方多入口；部分中国厂商页面依赖客户端渲染或登录；X 未登录检索不稳定。
- **初始候选数**：7；**最终来源数**：4；**二次补搜**：否（最终来源不为 0）。

今日扫描完成，共 **4** 条来源，重点：Grok Build 增加跨会话后台记忆；OpenAI 测试 Sponsored Agents；Google Cloud 把 Agent workspace 存储生命周期产品化为邻近基础设施。

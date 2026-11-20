---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-20T00:00:00+08:00"
updatedAt: "2026-11-20T10:50:56+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "External agents in Microsoft Foundry are now generally available"
featuredUrl: "https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/external-agents-in-microsoft-foundry-are-now-generally-available/4572630"
featuredSummary: "Microsoft 宣布 Foundry 外部 Agent 注册、trace 视图、Agent Insights 与生产 trace 持续评估正式可用。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-18"
featuredTags: ["Microsoft Foundry","AaaS","Observability","24–48h"]
tags:
  - "24–48h"
  - "48–72h"
  - "AaaS"
  - "Agent"
  - "Agent Sandbox"
  - "Cloud Agent"
  - "Managed Agent"
  - "Microsoft Azure"
  - "Microsoft Foundry"
  - "Observability"
  - "PaaS"
---

## 今日概览

采集窗口为 **2026-11-19 10:48 至 2026-11-20 10:48（Asia/Shanghai）**。本轮未核实到明确落在过去 24 小时内的 AaaS 正式发布；不以模型 API、本地 Harness 版本或搜索引擎抓取时间填充头条。保留 2 条 24–72 小时的一手托管/治理补充。

## 重点动态

过去 24 小时暂无经原始来源和发布日期双重核实的重点动态。

## 远程 / 云端 Agent 执行

| 平台 | 动态 | 时间 / 证据状态 | AaaS 意义 |
|---|---|---|---|
| Microsoft Foundry | [External agents in Microsoft Foundry 正式可用](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/external-agents-in-microsoft-foundry-are-now-generally-available/4572630) | 2026-11-18，官方博客，24–48 小时补充 | 在外部运行的 Agent 可通过 OpenTelemetry/Application Insights 接入 Foundry，使用注册、trace 视图、Agent Insights 与持续生产评估，而无需迁移执行端。它补齐了跨运行时治理与可观测控制面。 |
| Microsoft Azure | [Azure Catalyst 与 Agent 基础设施更新](https://azure.microsoft.com/en-us/blog/introducing-azure-catalyst-agentic-modernization-and-new-ai-infrastructure-innovations/) | 2026-11-17，官方博客，48–72 小时观察 | Microsoft 描述 Foundry 到 AKS 的连接路径、Agent Sandbox 的会话级 VM 隔离与预热池，以及 Agent Grid 的身份化连接。该条同时包含托管执行与通用云基础设施，故作为 AaaS/PaaS 边界观察。 |

## 海外厂商

- **Cognition Devin（必查）**：检查 Cognition Blog、Devin Docs 与 Devin Knowledge Base，覆盖托管异步执行、环境/快照、并发会话、定价、企业接入、API 与集成；本轮未找到可核实的窗口内新增。现有文档可证明 Devin 有远程环境与并行会话，但没有新的发布日期就不重复写作新闻。
- **xAI / Grok（必查）**：检查 xAI News、Grok 文档与 Grok Build changelog，特别检索后台工作流、工具调用、远程恢复和托管执行。较旧的 Grok Build Workflows 符合 AaaS 定义，但本轮无实质新事件，因此不跨日重复旧来源；普通 Grok 模型/API 动态应归行业专题。
- **Anthropic / OpenAI**：托管 Agent、Claude Code 与 Codex 云端入口已检查；本轮无新增，产品层结果分别详见 Claude 专题页、OpenAI 专题页。
- Google、Replit、Cursor、Lindy、CrewAI/LangGraph Platform、GitHub、Amazon、Cloudflare、Factory 与 Sourcegraph/Amp 入口均已检查，没有把缺少官方日期的二手线索升级为事实。

## 中国市场（字节重点）

字节 Coze/火山引擎/Doubao/Trae/Seed，以及阿里百炼/Qoder/通义/夸克、腾讯元宝/混元/云、百度 AgentBuilder/Comate、智谱、Moonshot/Kimi、MiniMax 与 DeepSeek 的公开入口已检查。本轮没有可同时确认发布日期与托管执行生命周期变化的 24 小时条目。

## Coding Agent / Harness 的 AaaS 边界

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 已按托管执行、后台/定时任务、远程环境、并发、企业控制面和定价逐项检查；未发现窗口内满足 AaaS 定义的新证据。其本地 CLI、IDE、桌面与自托管 Harness 更新不进入本页，详见开源专题页。

## AaaS 与 MaaS / PaaS

- **AaaS**：服务方托管或管理 Agent 的运行、会话、生命周期、环境、异步任务、可观测性或企业控制面。
- **MaaS**：仅提供模型推理 API，不自动构成 AaaS。
- **PaaS**：提供通用容器、Kubernetes 或沙箱基础设施但没有 Agent 生命周期能力时，属于邻近基础设施。

Microsoft 的 External Agents 控制面属于 AaaS 治理；Azure Catalyst 条目同时含 Agent 管理与 AKS/网络等 PaaS 成分，因此不把整套基础设施都称为 AaaS。

## 日期未确认

- Replit Missions 的可信二手摘要称其可让多 Agent 围绕目标运行数小时或数天，并设置预算与人工批准边界；本轮未稳定定位到带日期的官方原文，故不列入来源、不写成确认发布。

## 未证实传闻

本轮没有保留单一来源泄露或产品发布传闻。

## 邻近信号观察池

- LangChain Deep Agents 的异步子 Agent 能力属于 Harness/框架层；没有托管运行、远程环境或服务化定价证据时，不等同于 AaaS。
- 模型路由、单纯模型上新和通用 AKS 能力只有在与 Agent 生命周期控制结合时才进入 AaaS 主体。

## 趋势

今日有限的一手证据继续显示，AaaS 的差异点正从“能运行 Agent”转向跨运行时注册、trace、持续评估、身份、网络隔离和恢复能力；但本轮没有足够证据宣称这是新的市场级趋势拐点。

## 来源链接

1. [Microsoft：External agents in Foundry GA](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/external-agents-in-microsoft-foundry-are-now-generally-available/4572630)
2. [Microsoft Azure：Azure Catalyst 与 Agent 基础设施](https://azure.microsoft.com/en-us/blog/introducing-azure-catalyst-agentic-modernization-and-new-ai-infrastructure-innovations/)

## 采集状态

- 已检查：17 类官方入口，包含 Cognition Devin 与 xAI/Grok 的指定能力维度，以及 7 个 Coding Agent/Harness 的 AaaS 边界。
- 失败来源：Cognition 缺少稳定日期索引；Replit 候选未回溯到带日期的一手原文；部分中国厂商动态页缺少精确发布时间。
- 初始候选：5 条；最终保留来源：2 条。
- 二次补搜：否（最终来源不为 0）。

今日扫描完成，共 2 条动态，重点：Microsoft 正把异构 Agent 的注册、可观测与持续评估纳入统一控制面，同时强化 Agent 到 AKS 的隔离与连接路径。

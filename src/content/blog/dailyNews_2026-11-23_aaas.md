---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-23T00:00:00+08:00"
updatedAt: "2026-11-23T10:51:45+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Scheduled agent automations, linked billing with Claude Platform"
featuredUrl: "https://railway.com/changelog/2026-11-20-scheduled-agent-automations"
featuredSummary: "Railway 可按计划启动新的 Cloud Agent，并在控制台管理任务；工作区可连接 Claude Platform 组织计费。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-20"
featuredTags: ["近三日补充","Railway","Cloud Agent","Scheduled tasks","Enterprise billing"]
tags:
  - "近三日补充"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Concurrency"
  - "Enterprise billing"
  - "Managed Agent"
  - "Qoder"
  - "Railway"
  - "Sandbox"
  - "Scheduled tasks"
---

## 今日概览

主采集窗口为 **2026-11-22 10:51 至 2026-11-23 10:51（Asia/Shanghai）**。本轮发现 Qoder Cloud Agents 在 11 月 22 日发布规模化托管执行更新，但官方只给日期、没有具体时刻，因此列入“日期未确认”，不冒充严格落入 24 小时窗口的事实。由于没有可精确到时刻的正式发布，已扩大中英文关键词并切换官方 changelog、GitHub 与可信二手索引完成第二轮补搜；另保留 Railway 的 24–72 小时托管执行补充。

## 重点动态

| 平台 | 动态 | 时间 / 证据状态 | AaaS 意义 |
|---|---|---|---|
| Qoder Cloud Agents | [v2026.11.22：规模化通用 Agent 服务](https://changelog.qoder.com/cloudagents) | 2026-11-22，官方仅给日期，日期未确认 | Managed Agents 新增视频 URL 输入、高并发可靠性改进、自动闲置挂起与恢复、运行中追加指令和更清晰的执行可见性；官方称其批量场景面向最高 10,000 并发请求，这是托管运行时、资源调度和可观测性的直接更新。 |
| Railway Cloud Agents | [定时 Agent 自动化与 Claude Platform 统一计费](https://railway.com/changelog/2026-11-20-scheduled-agent-automations) | 2026-11-20，近三日补充 | 每个计划时刻启动新的云端 Agent，可在控制台创建、立即运行、暂停和恢复任务；工作区还能连接 Claude Platform 组织并设置月度费用上限，体现托管执行与企业计费控制面的结合。 |

## 远程 / 云端 Agent 执行

- **Qoder Cloud Agents**：11 月 22 日版本围绕高并发 sandbox 获取、挂起调度、空闲自动挂起、恢复时环境准备和运行中追加指令展开，更新对象明确是服务方管理的 Agent 执行生命周期。由于发布页没有时刻，只能确认日期，不能判断是否晚于本轮窗口起点。
- **Railway Cloud Agents**：11 月 20 日 changelog 显示用户可为 Agent 配置重复任务，由 Railway 在每个计划时刻启动新 Cloud Agent；任务可从仪表盘管理。该条已超过 48 小时、但仍处于 72 小时补充范围，不写成今日发布。

## 海外厂商

- **Cognition Devin（必查）**：已检查 Cognition Blog、Devin Docs 与 Knowledge Base，覆盖托管异步执行、环境与快照、并发会话、定价、企业接入、API 和集成；未发现可核实落入本轮窗口的新发布。公开入口仍缺少稳定统一的日级 changelog，因此没有把抓取时间当作发布时间。
- **xAI / Grok（必查）**：已检查 xAI News、Grok Docs、API/模型资料、Grok Bot 与 Grok Build，特别核查托管 Agent、异步任务、后台/远程执行、工具调用和企业能力；本轮没有新的 AaaS 事件。普通 Grok 模型/API 更新属于行业专题，本地 harness 更新属于开源专题。
- Google、Microsoft、AWS、Replit、Cursor、Lindy、CrewAI/LangGraph Platform、GitHub、Amazon Q、Cloudflare、Factory 与 Sourcegraph/Amp 的公开入口均已检查；没有把无日期搜索线索升级为事实。Anthropic 与 OpenAI 的相关入口也已复查，详见 Claude / OpenAI 专题页。

## 中国市场（字节重点）

本轮的可报告变化来自阿里系 **Qoder Cloud Agents**：更新集中在托管 sandbox 调度、高并发可靠性、按需资源成本与运行中控制。字节 Coze / 火山引擎 / Doubao / Trae / Seed，以及阿里百炼 / 通义 / 夸克、腾讯元宝 / 混元 / 云、百度 AgentBuilder / Comate、智谱、Moonshot/Kimi、MiniMax 与 DeepSeek 的公开入口也已检查；未找到同时具备新事件与可核验窗口证据的条目。

## Coding Agent / Harness 的 AaaS 边界

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 已按云端托管、后台或定时任务、远程环境、并发、企业控制面和定价逐项检查；本轮没有新的第一方证据满足 AaaS 定义。本地 CLI、IDE、桌面、自托管 Agent loop、模型路由、插件与普通 release 留给开源专题。

## AaaS 与 MaaS / PaaS

- **AaaS**：服务方托管或管理 Agent 的执行、会话、环境、异步任务、生命周期、可观测性或企业控制面。
- **MaaS**：只提供模型推理 API，不自动构成 AaaS。
- **PaaS**：通用计算、网络或沙箱只有与 Agent 生命周期及控制面结合时才进入本页主体。

Qoder 的 Managed Agents、sandbox 调度和自动挂起/恢复属于 AaaS；Railway 的按计划启动 Cloud Agent 与工作区计费控制也属于 AaaS。单纯新增模型、API 或本地 coding harness 不进入主体。

## 日期未确认

- **Qoder CloudAgents v2026.11.22**：官方 changelog 明确标注 11 月 22 日，但没有发布时刻，无法确认是否晚于上海时间 10:51；因此保留为日期未确认候选。来源：[Qoder Changelog](https://changelog.qoder.com/cloudagents)。

## 未证实传闻

本轮没有保留单一来源泄露或未证实产品发布传闻。

## 邻近信号观察池

本轮没有新增仅属于 MaaS/PaaS、又值得单独保留的邻近信号；普通模型 API 与通用云基础设施更新未被凑入主体。

## 趋势

本轮有限证据显示，托管 Agent 的竞争继续从“提供远程机器”转向更高并发的 sandbox 调度、空闲资源治理、运行中干预、定时触发和企业计费控制；但只有两条第一方来源，且最新一条缺少具体时刻，不足以宣称行业整体趋势已经改变。

## 来源链接

1. [Qoder Cloud Agents Release Notes](https://changelog.qoder.com/cloudagents)
2. [Railway Scheduled Agent Automations](https://railway.com/changelog/2026-11-20-scheduled-agent-automations)

## 采集状态

- 已检查：15 类入口，包含 Cognition Devin、xAI/Grok 的指定能力维度，以及 7 个 Coding Agent / Harness 的 AaaS 边界。
- 失败来源：Cognition 缺少统一日级日志；xAI/Grok 本轮无新 AaaS 公告；部分中国厂商页面动态渲染且缺精确时间；X 未登录结果不可稳定核验。
- 初始候选：9 条；最终保留来源：2 条。
- 二次补搜：是。因没有可精确确认落入 24 小时的正式发布，已扩大中英文关键词，并复查官方 changelog、GitHub 与可信二手索引。

今日扫描完成，共 2 条动态，重点：Qoder Cloud Agents 将托管 Agent 的高并发可靠性、资源挂起恢复与运行中控制继续产品化。

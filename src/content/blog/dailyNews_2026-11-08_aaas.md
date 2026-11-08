---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-08T00:00:00+08:00"
updatedAt: "2026-11-08T14:41:10+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Grok Bot security"
featuredUrl: "https://docs.x.ai/grok-bot/security"
featuredSummary: "官方文档说明 Grok Bot 在 Cursor 托管云电脑中运行，并给出本机执行审批、网络策略和企业控制。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-06"
featuredTags: ["近三日补充","Grok Bot","托管运行时","企业控制"]
tags:
  - "观察池"
  - "近三日补充"
  - "可信二手"
  - "企业控制"
  - "日期未确认"
  - "托管运行时"
  - "异步任务"
  - "原文待确认"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Grok Bot"
  - "Kimi"
  - "Managed Agent"
  - "Managed Deep Agents"
---

## 今日概览

采集窗口：2026-11-07 10:50 至 2026-11-08 10:50（Asia/Shanghai）。本轮未核实到窗口内发布的 AaaS 新动态；按规范扩大中英文关键词并切换官方文档、GitHub 与可信二手入口完成第二轮搜索。下面保留 24–72 小时或日期粒度不足、但与托管执行直接相关的候选，不把它们写成今日发布事实。

## Top items

窗口内已验证动态为 0。没有用普通模型/API 更新填充 AaaS，也没有把本地 coding harness 的常规发布误写成托管服务。

## 远程 / 云端 Agent 执行

| 平台 | 状态 | 动态 | AaaS 意义 |
|---|---|---|---|
| xAI / Grok Bot | 近三日补充 | [Grok Bot security](https://docs.x.ai/grok-bot/security) 文档标注 2026-11-06 更新，说明 Bot 仅运行在 Cursor 托管云电脑中，并区分托管电脑、本机执行审批、网络策略与 Cloud Agent 控制。 | 这是明确的托管运行时、隔离和企业控制面证据；但发布时间在主窗口外，不能算今日发布。 |
| LangChain Managed Deep Agents | 日期未确认 | [Agents Are Going Async](https://www.langchain.com/blog/agents-are-going-async) 页面标注 2026-11-05，介绍 Managed Deep Agents 中异步子 Agent 的启动、查询、更新、取消与通知机制。 | 直接覆盖后台任务、并发和持久线程；页面只有日期、没有可核实时刻，无法判断是否落在精确 72 小时边界内。 |

## 海外厂商

- **Cognition Devin（必查）**：已检查官方产品新闻、文档、更新、托管异步执行、环境、并发、定价、企业接入和集成入口，未找到窗口内可核实新增。动态渲染页面的检索限制已记录在失败来源中，本轮不硬凑条目。
- **xAI / Grok（必查）**：Grok Bot 的托管云电脑与企业安全控制满足 AaaS 定义，列入近三日补充；普通 Grok 模型、API、语音和编码模型变化不在本页收录范围。
- **Anthropic / OpenAI**：已检查 Managed Agents、Claude Code 远程能力、Codex cloud/remote 与 Agent 产品入口，未发现窗口内可独立核实的新 AaaS 发布；相关产品扫描详见 Claude 专题页与 OpenAI 专题页。
- **Coding Agent / Harness 边界检查**：Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 均已检查托管、后台/定时、远程环境、并发、企业控制和定价证据；未发现窗口内满足条件的新变化。普通本地 CLI、IDE 或自托管 harness 更新留在开源专题页。

## 中国市场（ByteDance 重点）

ByteDance Coze/Volcano/Doubao/Trae/Seed、Alibaba Bailian/Qoder、Tencent、Baidu、Zhipu、Moonshot/Kimi、MiniMax 与 DeepSeek 均完成入口检查。未发现主窗口内可由一手来源确认的托管 Agent 发布。

## 日期未确认

- **LangChain 异步子 Agent**：官方文章日期为 2026-11-05，但无具体发布时间；其 Managed Deep Agents 实现满足托管后台执行定义，证据与限制见[原文](https://www.langchain.com/blog/agents-are-going-async)。

## 未证实传闻

本轮未收录单一匿名来源的产品发布传闻。

## 邻近信号观察池

- **Moonshot / Kimi**：可信二手来源 [Unite.AI](https://www.unite.ai/kimi-formally-launches-hosted-agents-for-enterprise-ai-workloads/) 称 2026-11-05 发布 Kimi Hosted Agents，描述长任务、多 Agent 协作及托管/自托管环境。由于未找到公开可访问的一手公告，当前只作为“可信二手、原文待确认”的观察项，不能据此确认正式发布。
- 模型 API、通用云基础设施和仅提供工具调用的能力仍按 MaaS/PaaS 邻近信号处理，不等同于 AaaS。

## 趋势

本轮候选共同指向：托管 Agent 的竞争焦点正从“能否调用工具”转向后台任务的可控生命周期、隔离环境、并发协调和企业策略；但主窗口没有足够新的一手证据支持更强的市场结论。

## 来源链接

1. [xAI / Grok Bot security](https://docs.x.ai/grok-bot/security)
2. [LangChain: Agents Are Going Async](https://www.langchain.com/blog/agents-are-going-async)
3. [Unite.AI: Kimi Formally Launches Hosted Agents](https://www.unite.ai/kimi-formally-launches-hosted-agents-for-enterprise-ai-workloads/)

## 采集状态

- 已检查：Devin 与 Grok 必查入口；Anthropic、OpenAI、Google、Microsoft、GitHub、Amazon、Cursor、Replit、LangChain、Cloudflare 等海外平台；ByteDance、Alibaba、Tencent、Baidu、Zhipu、Kimi、MiniMax、DeepSeek 等中国入口；以及 Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的托管边界。
- 失败来源：Devin 部分动态页面无法稳定抽取；X 未登录时间线不可稳定核验；Kimi 候选缺一手公开公告；部分 GitHub Releases 动态加载不完整。
- 初始候选数：12；最终保留来源数：3。
- 二次补搜：是。因已验证的 24 小时动态为 0，已扩大中英文关键词并切换官方文档、GitHub 与可信二手入口。

今日扫描完成，共 3 条动态/候选，重点：Grok Bot 托管运行时安全控制、Managed Deep Agents 异步子 Agent，以及待一手确认的 Kimi 托管 Agent 信号。

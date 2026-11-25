---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-25T00:00:00+08:00"
updatedAt: "2026-11-25T10:48:05+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "智果（AgentArts）智能体平台：开始使用"
featuredUrl: "https://support.huaweicloud.com/qs-agentarts/AgentArts-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-pdf.pdf"
featuredSummary: "首版指南披露 Managed Agents、托管运行时、沙箱隔离、网络与权限控制、会话持久化和日志审计等生产能力。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-23 00:00 +08:00"
featuredTags: ["华为云","Managed Agent","托管运行时","近两日补充"]
tags:
  - "华为云"
  - "近两日补充"
  - "近三日补充"
  - "日期未确认"
  - "托管运行时"
  - "AaaS"
  - "Agent"
  - "Async Task"
  - "Cloud Agent"
  - "Coze"
  - "Enterprise"
  - "Managed Agent"
  - "Qoder"
  - "Sandbox"
---

## 今日概览

主采集窗口为 **2026-11-24 10:45 至 2026-11-25 10:45（Asia/Shanghai）**，并向前检查 24–72 小时观察项。本轮没有发现可由官方原文确认的 24 小时 AaaS 新发布；近三日最明确的新增证据来自华为云 AgentArts 首版使用指南和 Qoder Cloud Agents 11 月 22 日更新。两者都覆盖托管运行环境、执行生命周期或异步批处理，符合 AaaS 而非单纯 MaaS 定义。Devin 与 Grok 已完成强制核查，均未发现主窗口内可报告的新动态。

## 重点动态

主窗口内没有经官方页面确认的新产品发布、GA、定价或重大企业接入变化。为避免把抓取时间或搜索摘要日期误写成发布时间，本轮不硬凑 24 小时条目。

## 远程 / 云端 Agent 执行

| 平台 | 日期/状态 | 动态与 AaaS 意义 |
|---|---|---|
| 华为云 AgentArts | 2026-11-23，近两日补充 | [首版使用指南](https://support.huaweicloud.com/qs-agentarts/AgentArts-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-pdf.pdf)明确区分 Managed Agents 与托管运行时，并披露沙箱隔离、网络管控、会话持久化、日志审计、资源调度、IAM 最小权限和最长 24 小时会话等生产运行能力。这是可核验的企业级托管 Agent 控制面证据。 |
| Qoder Cloud Agents | 2026-11-22，近三日补充 | [Cloud Agents 更新日志](https://changelog.qoder.com/zh/cloudagents)记录视频输入、万级并发运行优化、空闲沙箱休眠、失败重试、任务恢复和执行中补充指令；同页还描述 Batch 离线异步处理、长时任务、事件流续传和 Agent/环境/会话 API，符合全托管 AaaS。 |

## 海外厂商

Anthropic 与 OpenAI 的托管 Agent、远程任务及开发平台入口已检查；本轮没有新的 AaaS 事件，产品侧详情分别见 Claude 专题页和 OpenAI 专题页。Google、Microsoft、GitHub、AWS、Cloudflare、Replit、Cursor、Lindy、CrewAI、LangGraph Platform、Factory 与 Sourcegraph/Amp 也未发现主窗口内可确认且尚未覆盖的新托管执行公告。

### Cognition Devin（强制检查）

已检查 Devin 官方 release notes、blog 与文档中的托管异步 session、环境、并发、定价、企业接入和集成。本轮未见 2026-11-24 至 11-25 的官方新增；不以聚合页日期或既有能力填充今日条目。

### xAI / Grok（强制检查）

已检查 xAI News、Grok Bot、Grok Build 和 API 文档，专门筛查托管 Agent、异步任务、工具使用、编码与远程执行。xAI 新闻页当前可见的相关公告早于本轮窗口，未发现新的 Cloud Agent 或托管执行服务；普通 Grok 模型/API 消息不满足 AaaS 定义，留在行业专题。

## 中国市场

华为云 AgentArts 和 Qoder 的近三日官方材料构成本轮主要增量。字节 Coze/火山/Doubao/Trae/Seed、阿里百炼/通义/夸克、腾讯元宝/混元/云、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek 的公开入口也已检查；未找到同时具备窗口内可核验日期和服务方托管执行生命周期证据的新条目。

## Coding Agent / Harness 边界检查

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 已逐项检查 hosted/cloud execution、后台或定时任务、远程环境、并发、企业控制和定价。本轮未发现从本地或自托管 harness 更新升级为提供方托管 AaaS 的官方证据；普通 CLI、IDE、桌面、headless 或自行部署能力留在开源专题页。

## 日期未确认

- [Coze 异步执行低代码工作流](https://docs.coze.cn/guides_execute_workflow_asynchronously)公开文档说明任务中心、最长 24 小时执行、运行状态与积分追踪，以及企业独享队列和并发权益，具备明确 AaaS 属性；但页面未提供可核验到日的发布日期，因此仅作为日期未确认候选，不写成今日发布。

## 未证实传闻

本轮未发现值得保留且有明确单一信源的产品发布传闻。

## 邻近信号观察池

- MaaS 模型上新、通用云计算资源、单独的 MCP/身份 API，以及本地 Agent harness 更新均不等同于服务方托管 Agent 生命周期，本轮未将其误写成 AaaS。
- 部分厂商搜索摘要显示页面近期被抓取，但抓取日期不等于发布日；相关候选等待官方 changelog 或带日期原文。

## 趋势判断

近三日证据显示，AaaS 控制面正围绕隔离环境、长会话恢复、批量异步执行、资源调度和企业权限形成更完整的生产栈；但主窗口发布较平静，不能据此推断行业停滞。

## 来源链接

1. [华为云 AgentArts：开始使用](https://support.huaweicloud.com/qs-agentarts/AgentArts-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-pdf.pdf)
2. [Qoder Cloud Agents 更新日志](https://changelog.qoder.com/zh/cloudagents)
3. [Coze：异步执行低代码工作流](https://docs.coze.cn/guides_execute_workflow_asynchronously)

## 采集状态

- **已检查来源**：覆盖 Anthropic、OpenAI、Google、Microsoft/GitHub、AWS、Cloudflare、Devin、xAI/Grok、海外 AaaS 厂商、中国厂商及七个 Coding Agent / harness 官方入口；Devin 与 Grok 强制检查已分别记录。
- **失败来源**：Devin 与 Grok 官方入口在窗口内无新增；部分中国厂商页面依赖客户端渲染、登录或缺精确日期；X 未登录访问不稳定。
- **初始候选数**：7。
- **最终保留数**：3 个唯一来源，其中 2 个为近三日官方增量，1 个日期未确认。
- **二次补搜**：否；最终来源不为 0，且近三日存在可核验官方增量。

今日扫描完成，共 **3** 条来源，重点：AgentArts 首版指南补齐企业托管运行边界，Qoder 强化并发沙箱与异步长任务控制面。

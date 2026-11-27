---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-27T00:00:00+08:00"
updatedAt: "2026-11-27T10:48:05+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "xAI / Grok status feed"
featuredUrl: "https://status.x.ai/feed.xml"
featuredSummary: "官方状态源记录 Grok Bot 入站邮件与 grokbot.com 访问降级，并于约一小时后恢复。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-25 21:57 +08:00"
featuredTags: ["Grok Bot","Incident","Reliability","近两日补充"]
tags:
  - "近两日补充"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Cloud Computer"
  - "Enterprise"
  - "Grok Bot"
  - "Incident"
  - "Managed Agent"
  - "Reliability"
---

## 今日概览

主采集窗口为 **2026-11-26 10:45 至 2026-11-27 10:45（Asia/Shanghai）**，并向前检查 24–72 小时候选。经官方入口核查与扩大关键词二次补搜，本轮没有发现可确认发布时间落在主窗口内的新 AaaS 发布。保留的三条证据均来自 xAI：一条处于 72 小时日期边界、两条属于近两日运行信号或日期未确认的能力页；它们不能被写成今天发布。Cognition Devin 已完成强制核查，窗口内无新增。

## 重点动态

主窗口内没有已验证的新发布。以下条目按证据状态保留，避免把日期边界或运行事件误写成产品发布。

| 平台 | 日期/证据状态 | 动态与 AaaS 意义 |
|---|---|---|
| xAI / Grok Bot | 2026-11-24，仅有日期，**72 小时边界待确认** | [Grok Bot v1.3.0 changelog](https://x.ai/changelog/bot)新增 Slack Bot 协作、团队域名连接限制、后台任务缺连接器时的提示，并修复定时 routine 重试、私网 routine 回报和连接器恢复。页面没有发布时间，因此相对本轮 72 小时起点是否越界无法确认。 |
| xAI / Grok Bot | 2026-11-25 21:57–23:00 +08:00，近两日官方状态事件 | [xAI 官方状态 feed](https://status.x.ai/feed.xml)记录入站邮件和 `grokbot.com` 访问降级后恢复；它不是功能发布，但说明邮件触发与站点入口属于托管 Agent 的运行链路，需要重试和交付确认。 |

## 远程 / 云端 Agent 执行

[xAI 的 Grok Bot 官方概览](https://docs.x.ai/grok-bot/overview)描述真实云电脑、定时 routines、多 Bot 分工、Slack/Drive/Gmail 等连接器以及 MCP/API 自定义工具，明确满足托管执行与生命周期管理定义。但页面未标注可核验发布日期，本轮只列入“日期未确认”，不宣称为过去 24 小时更新。

## 海外厂商

Anthropic Managed Agents、Claude Developer Platform 与 Claude Code 已检查，主窗口内没有新的 AaaS 发布，产品详情见 Claude 专题页。OpenAI Codex cloud/remote tasks、Agents API 与 ChatGPT agents 已检查，主窗口内没有新的托管执行公告，产品详情见 OpenAI 专题页。Google、Microsoft/GitHub、AWS、Cloudflare、Replit、Cursor、Lindy、CrewAI、LangGraph Platform、Factory 与 Sourcegraph/Amp 未发现窗口内可确认的新托管运行、定价或企业接入公告。

### Cognition Devin（强制检查）

已检查 Devin 官方首页的 Recently shipped 列表，以及 blog、文档、release notes 中的托管异步 session、云/本地环境、并行 Agent、定价、Enterprise、API、Slack/Teams 和自动化入口。官方首页可见的最近条目止于 11 月 17 日，本轮窗口内无新增；因此不跨日重复旧背景来源。

### xAI / Grok（强制检查）

已检查 xAI News、Grok Bot changelog/docs、API release notes 和状态 feed。v1.3.0 的托管 routine、Slack/Teams、连接器、团队控制与私网修复符合 AaaS 定义，但仅有 11 月 24 日日期，故列入边界待确认；普通 Grok 模型/API 与 Grok Build CLI 更新不等于服务方托管执行，留在行业或开源专题。

## 中国市场

字节 Coze/火山/Doubao/Trae/Seed、阿里百炼/Qoder/通义/夸克、腾讯元宝/混元/云、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek 的公开入口均已检查。本轮没有找到同时具备窗口内可核验日期、且明确由服务方托管 Agent 执行生命周期的新条目；客户端渲染或仅有搜索抓取时间的页面未被写成事实。

## Coding Agent / Harness 边界检查

Cline、Pi Coding Agent（原 `badlogic/pi-mono` 入口已转向 `earendil-works/pi`）、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 已逐项检查 hosted/cloud execution、后台或定时任务、远程环境、并发、企业控制和定价。窗口内未发现从本地/自托管 harness 升级为提供方托管 AaaS 的一手证据；普通 CLI、IDE、桌面、headless 与自行部署能力留在开源专题页。

## 日期未确认

- [Grok Bot v1.3.0 changelog](https://x.ai/changelog/bot)只标注 2026-11-24，没有时刻；相对 11 月 24 日 10:45 的 72 小时边界无法判定，故不能归入“近三日已确认”。
- [Grok Bot 官方概览](https://docs.x.ai/grok-bot/overview)确认云电脑、定时任务、多 Bot 和连接器能力，但没有公开更新时间；能力属实，发布日期未确认。

## 未证实传闻

本轮没有保留达到相关性门槛的单信源产品泄露或传闻。

## 邻近信号观察池

- 模型 API 上新、通用云算力、本地 Agent harness 与仅提供 MCP 接口的更新均不自动构成 AaaS；本轮没有将它们误写为托管 Agent 服务。
- 可信二手搜索结果提到多种云端 coding agent，但缺少窗口内一手发布证据，仅用于反向查找官方入口，未作为来源收录。

## 趋势判断

今天没有足够证据支持“新一轮 AaaS 发布潮”的结论；现有候选更集中在托管 Bot 的运行可靠性、连接器恢复、团队权限和定时任务治理。

## 来源链接

1. [xAI：Grok Bot changelog](https://x.ai/changelog/bot)
2. [xAI 官方状态 feed](https://status.x.ai/feed.xml)
3. [xAI Docs：Grok Bot overview](https://docs.x.ai/grok-bot/overview)

## 采集状态

- **已检查来源**：覆盖 Anthropic、OpenAI、Google、Microsoft/GitHub、AWS、Cloudflare、Devin、xAI/Grok、海外 AaaS 厂商、中国厂商及七个 Coding Agent / harness 官方入口；Devin 与 Grok 强制检查已分别记录。
- **失败来源**：Devin 窗口内无新增；xAI 状态 RSS 无法被研究工具直接解析；Cline Cloud Tasks 文档入口无法直接打开；部分中国厂商页面依赖客户端渲染、登录或缺精确日期；X 未登录访问不稳定。
- **初始候选数**：9。
- **最终保留数**：3 个唯一来源，其中 1 个 72 小时日期边界待确认的 changelog、1 个近两日官方运行事件、1 个无公开日期的官方能力页。
- **二次补搜**：是。因主窗口内已验证动态为 0，已扩大中英文关键词，并切换 GitHub releases、官方 changelog、状态 feed 和可信二手入口；未发现可升级为 24 小时已确认事实的新条目。

今日扫描完成，共 **3** 条来源，重点：主窗口无已验证新品；Grok Bot 的定时任务、连接器恢复和团队控制仍是值得跟踪的托管运行信号。

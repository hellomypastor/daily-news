---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-21T00:00:00+08:00"
updatedAt: "2026-11-21T11:08:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "24–48h"
  - "48–72h"
  - "观察池"
  - "邻近信号"
  - "企业采用"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Agent swarm"
  - "Anthropic"
  - "Cloud Agent"
  - "Computer use"
  - "Dot"
  - "Managed Agent"
  - "Microsoft Foundry"
  - "Observability"
  - "OpenAI"
  - "Replit"
  - "Space"
---

## 今日概览

主采集窗口为 **2026-11-20 10:46 至 2026-11-21 10:46（Asia/Shanghai）**。首轮没有发现带具体时刻、可严格确认落入过去 24 小时的 AaaS 正式发布，因此已扩大中英文关键词，切换官方列表、GitHub 与可信二手入口完成第二轮搜索。最终保留 2 条仅标注 11 月 20 日的日期未确认候选，以及 2 条 24–72 小时观察信号；不以模型 API、本地 Harness 版本或抓取时间填充头条。

## 重点动态

过去 24 小时暂无可用具体发布时间严格核验的 AaaS 正式发布。最值得跟踪的是 Anthropic 将 Computer use beta 推向 Team / Enterprise，以及 Microsoft Foundry 新增的生产采用案例；两者都只有日期，故不冒充严格落窗事实。

## 远程 / 云端 Agent 执行

| 平台 | 动态 | 时间 / 证据状态 | AaaS 意义 |
|---|---|---|---|
| Anthropic Claude | [Computer use beta 面向 Team / Enterprise](https://support.claude.com/en/articles/12138966-release-notes) | 2026-11-20，官方仅给日期，日期未确认 | Claude Desktop 可作为执行端，由 Web / Mobile 在开启 Computer access 时连接；组织可按角色和应用控制。功能渐进推出且默认关闭，详见 Claude 专题页。 |
| Microsoft Foundry | [Gulf Air 的生产 Agent 持续改进案例](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/gulf-airs-continuous-improvement-journey-with-microsoft-foundry/4574913) | 2026-11-20，官方仅给日期，日期未确认 | 两个语音/聊天 Agent 已在 Falcon Eye 应用中上线，案例重点是用 Foundry 的评估、追踪和改进闭环运营生产 Agent；属于企业采用与控制面信号，而非新产品发布。 |
| OpenAI ChatGPT | [Space 与 Dot 入口扩展](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) | 2026-11-19 至 20，官方仅给日期；24–48h/日期未确认 | 11 月 20 日 Space 向 Plus 推出并允许页面/幻灯片由连接应用自动更新、邀请 Dot 协作；11 月 19 日移动端为 Dot 提供独立入口，Health Dot 可给主动建议。属于持续运行 Agent 的分发与协作面，详见 OpenAI 专题页。 |
| Replit | [Introducing Replit Missions](https://replit.com/blog/introducing-replit-missions) | 首发 2026-11-17，更新 11 月 19 日；48–72h 观察 | 服务端协调 Agent swarm，在预算、审批边界和成功标准下并行工作；用户可关闭电脑，平台按即时/日/周节奏汇报，预算耗尽即停止。符合托管异步执行与企业控制面定义。 |

## 海外厂商

- **Cognition Devin（必查）**：检查 Cognition Blog、Devin Docs 与 Devin Knowledge Base，覆盖托管异步执行、环境/快照、并发会话、定价、企业接入、API 和集成；本轮没有找到可核实的窗口内新增。现有产品能力不因本轮检查而重复作为旧新闻。
- **xAI / Grok（必查）**：检查 xAI News、Grok 文档、Grok Build changelog，特别检索托管 Agent、后台/异步任务、工具调用、远程执行与企业控制。Grok Bot 与历史 Workflows 能满足部分 AaaS 定义，但本轮没有实质新事件，故不跨日重复旧来源；普通 Grok 模型/API 和本地 Grok Build CLI 更新留给行业/开源专题。
- **Anthropic / OpenAI**：Computer use 与 Space/Dot 候选如上；跨主题引用均已注明详见 Claude / OpenAI 专题页。
- Google、Cursor、Lindy、CrewAI/LangGraph Platform、GitHub、Amazon、Cloudflare、Factory 与 Sourcegraph/Amp 入口均已检查，未把缺日期的搜索线索升级为发布。

## 中国市场（字节重点）

字节 Coze / 火山引擎 / Doubao / Trae / Seed，以及阿里百炼 / Qoder / 通义 / 夸克、腾讯元宝 / 混元 / 云、百度 AgentBuilder / Comate、智谱、Moonshot/Kimi、MiniMax 与 DeepSeek 的公开入口已检查。本轮没有同时满足时间证据和托管执行生命周期变化的条目；动态渲染页面中缺少精确发布日期的搜索摘要未写成事实。

## Coding Agent / Harness 的 AaaS 边界

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 已按托管执行、后台/定时任务、远程环境、并发、企业控制面和定价逐项检查；未发现本轮满足 AaaS 定义的新证据。本地 CLI、IDE、桌面、自托管 Agent loop、模型路由和插件更新不进入本页，详见开源专题页。

## AaaS 与 MaaS / PaaS

- **AaaS**：服务方托管或管理 Agent 的执行、会话、生命周期、环境、异步任务、可观测性、预算或企业控制面。
- **MaaS**：仅提供模型推理 API，不自动构成 AaaS。
- **PaaS**：通用容器、Kubernetes 或沙箱若没有 Agent 生命周期能力，属于邻近基础设施。

Claude Computer use 的企业策略与远程接入、Replit Missions 的预算/审批/云端 swarm、Microsoft Foundry 的生产评估闭环都具有 AaaS 控制面意义；OpenAI Space 本身是协作容器，只有与 Dot 的持续任务结合时才是 AaaS 信号。

## 日期未确认

- **Claude Computer use beta**：官方 Release notes 仅标 11 月 20 日，未给时刻；保留为日期未确认，详见 Claude 专题页。来源：[Claude Help Center](https://support.claude.com/en/articles/12138966-release-notes)。
- **Gulf Air / Microsoft Foundry 生产案例**：官方博客仅标 11 月 20 日，无法确认是否晚于窗口起点；它证明 Agent 已上线和持续评估方法，不代表 Foundry 在当日发布新产品。来源：[Microsoft](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/gulf-airs-continuous-improvement-journey-with-microsoft-foundry/4574913)。

## 未证实传闻

本轮没有保留单一来源泄露或未证实产品发布传闻。

## 邻近信号观察池

- **OpenAI Space / Dot**：Space 向 Plus 扩展本身偏协作产品；Dot 的持续任务、主动建议和跨端入口才构成托管 Agent 信号。来源：[ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)，详见 OpenAI 专题页。
- **Replit Missions**：首发日期已超 72 小时边界附近，但页面在 11 月 19 日有更新，且其预算、审批、并行执行和云端汇报能力与 AaaS 高度相关，因此作为 48–72 小时观察保留，不写成今日发布。来源：[Replit](https://replit.com/blog/introducing-replit-missions)。
- 通用模型路由、单纯模型上新和本地 Agent 工具，只有与托管执行生命周期结合时才进入 AaaS 主体。

## 趋势

有限的一手证据显示，AaaS 正从“提供一个远程 Agent”扩展到预算与审批边界、持续评估、跨端接入和协作工作区；但本轮样本少且时间证据有限，不足以宣称新的市场拐点。

## 来源链接

1. [Claude Release notes：Computer use beta](https://support.claude.com/en/articles/12138966-release-notes)
2. [Microsoft Foundry：Gulf Air 的生产 Agent 持续改进](https://techcommunity.microsoft.com/blog/azure-ai-foundry-blog/gulf-airs-continuous-improvement-journey-with-microsoft-foundry/4574913)
3. [OpenAI：ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
4. [Replit：Introducing Replit Missions](https://replit.com/blog/introducing-replit-missions)

## 采集状态

- 已检查：17 类官方入口，包含 Cognition Devin 和 xAI/Grok 的指定能力维度，以及 7 个 Coding Agent / Harness 的 AaaS 边界。
- 失败来源：Cognition 缺少稳定日期索引；Grok changelog 没有本轮日期的新 AaaS 条目；部分中国厂商动态页缺少精确发布时间；X 未登录结果不可稳定核验。
- 初始候选：9 条；最终保留来源：4 条。
- 二次补搜：是。首轮无可严格确认的 24 小时正式发布，已扩大中英文关键词并检查备用官方列表、GitHub 与可信二手来源。

今日扫描完成，共 4 条动态，重点：企业 AaaS 的竞争面正延伸到远程计算机接入、生产评估闭环、持续任务协作，以及带预算和审批边界的多 Agent 云端执行。

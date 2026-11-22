---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-22T00:00:00+08:00"
updatedAt: "2026-11-22T10:54:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "New in AWS Quick: More capable flows, an updated web experience, and agents that work together"
featuredUrl: "https://aws.amazon.com/blogs/machine-learning/new-in-aws-quick-more-capable-flows-an-updated-web-experience-and-agents-that-work-together/"
featuredSummary: "AWS Quick 新增更长流程、关闭浏览器后继续工作、Mission Control 和多 Agent 编排。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-20"
featuredTags: ["24–48h","AWS Quick","Multi-agent","Background tasks"]
tags:
  - "24–48h"
  - "48–72h"
  - "观察池"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "AWS Quick"
  - "Background tasks"
  - "Cloud Agent"
  - "Computer use"
  - "Dot"
  - "Enterprise"
  - "Google Gemini"
  - "Managed Agent"
  - "Multi-agent"
  - "OpenAI"
  - "Plugins"
  - "Private network"
  - "Replit"
  - "Space"
---

## 今日概览

主采集窗口为 **2026-11-21 10:40 至 2026-11-22 10:40（Asia/Shanghai）**。首轮没有找到带具体时刻、可严格确认落入过去 24 小时的 AaaS 正式发布，因此已扩大中英文关键词并切换官方列表、GitHub 与可信二手索引完成第二轮搜索。最终保留 1 条仅给日期的窗口候选、2 条 24–48 小时补充和 2 条邻近观察信号；日期证据不足的项目不写成严格落窗事实。

## 重点动态

| 平台 | 动态 | 时间 / 证据状态 | AaaS 意义 |
|---|---|---|---|
| AWS Quick | [Plugins 打包 agents、skills、connectors 与 flows](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-plugins-bundle-agents-skills-connectors-flows/) | 2026-11-21，官方仅给日期，日期未确认 | 插件把执行 Agent、流程、工具连接和团队知识打成可安装单元，并支持用对话为组织创建和分发；属于托管 Agent 控制面与生态分发能力，但无法确认是否晚于窗口起点。 |
| AWS Quick | [长流程、后台执行与多 Agent 协作](https://aws.amazon.com/blogs/machine-learning/new-in-aws-quick-more-capable-flows-an-updated-web-experience-and-agents-that-work-together/) | 2026-11-20，24–48 小时补充 | Quick 可在关闭浏览器后继续运行任务，并由 Mission Control 管理等待用户介入的 Agent；新 Flows 组合 Agent、技能、工具与确定性步骤，多 Agent 可并行汇总结果。 |
| Replit | [Tunnels 连接企业私有网络](https://replit.com/blog/build-with-private-data-using-tunnels) | 首发 2026-11-11，更新于 2026-11-20；观察池 | 企业可让 Replit Agent 和连接器经 mTLS 隧道访问被授权的内部数据库与 API，IT 逐工作区控制端点；这是企业托管 Agent 的网络与治理能力更新，不冒充 11 月 20 日首发。 |

## 远程 / 云端 Agent 执行

- **AWS Quick**：11 月 20 日更新明确支持长流程、关闭标签页后持续工作、多 Agent 编排、任务调度与 Mission Control；11 月 21 日插件能力进一步将 Agent、技能、连接器和流程封装为团队可分发组件。
- **OpenAI ChatGPT**：[ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 记载 11 月 20 日 Space 向 Plus 推出，可依据连接应用自动更新页面，并邀请 Dot 协作。它是协作与持续任务入口的邻近信号；Space 本身不等于托管执行，详见 OpenAI 专题页。
- **Google Gemini**：[Gemini for Mac computer use](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) 于 11 月 19 日发布，在隔离后台窗口操作本地文件、桌面应用和网站，关键动作需批准。它是受控远程/后台执行形态的 48–72 小时补充，不写成今日发布。

## 海外厂商

- **Cognition Devin（必查）**：已检查 Cognition Blog、Devin Docs 与 Knowledge Base，覆盖托管异步执行、环境与快照、并发会话、定价、企业接入、API 和集成；未发现可核实落入本轮窗口的新发布。公开入口缺少稳定统一的日级 changelog，因此没有把抓取时间当作发布时间。
- **xAI / Grok（必查）**：已检查 xAI News、Grok Docs、Grok Bot changelog 和 Grok Build changelog，特别核查持久云端计算机、routines、异步/后台任务、工具调用、远程执行和企业控制。Grok Bot 现有能力满足 AaaS 定义，但本轮没有可确认的新 AaaS 事件；普通模型/API 或本地 Grok Build CLI 变化留在行业/开源专题。
- Anthropic、Microsoft、Cursor、Lindy、CrewAI/LangGraph Platform、GitHub、Amazon Q、Cloudflare、Factory 与 Sourcegraph/Amp 的公开入口均已检查；没有把无日期搜索线索升级为发布。Claude / OpenAI 的跨页候选均已注明详见对应专题页。

## 中国市场（字节重点）

字节 Coze / 火山引擎 / Doubao / Trae / Seed，以及阿里百炼 / Qoder / 通义 / 夸克、腾讯元宝 / 混元 / 云、百度 AgentBuilder / Comate、智谱、Moonshot/Kimi、MiniMax 与 DeepSeek 的公开入口已检查。本轮没有找到同时具备可核验时间证据与托管执行生命周期变化的项目；动态页面搜索摘要未被写成事实。

## Coding Agent / Harness 的 AaaS 边界

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 已按云端托管、后台/定时任务、远程环境、并发、企业控制面和定价逐项检查；本轮没有新增证据满足 AaaS 定义。本地 CLI、IDE、桌面、自托管 Agent loop、模型路由、插件与普通 release 属于开源专题。

## AaaS 与 MaaS / PaaS

- **AaaS**：服务方托管或管理 Agent 的执行、会话、环境、异步任务、生命周期、可观测性或企业控制面。
- **MaaS**：只提供模型推理 API，不自动构成 AaaS。
- **PaaS**：通用计算、网络或沙箱只有与 Agent 生命周期和控制面结合时才进入本页主体。

AWS Quick 的后台工作、Mission Control 和多 Agent 编排属于 AaaS；Replit Tunnels 只有与 Replit Agent / Connectors 的托管执行结合时才具有 AaaS 意义。Gemini Mac computer use 是本地受控执行能力，因缺少独立托管生命周期证据而保留为邻近信号。

## 日期未确认

- **AWS Quick Plugins**：官方页面只标 11 月 21 日，没有时刻，无法确认是否晚于上海时间 10:40；因此保留为日期未确认候选，不写成严格过去 24 小时发布。来源：[AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-plugins-bundle-agents-skills-connectors-flows/)。

## 未证实传闻

本轮没有保留单一来源泄露或未证实产品发布传闻。

## 邻近信号观察池

- **OpenAI Space / Dot**：Space 的自动更新与 Dot 协作是持续 Agent 工作面的分发信号，但 Space 本身仍是协作容器；来源：[OpenAI](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)，详见 OpenAI 专题页。
- **Gemini for Mac computer use**：隔离后台窗口、应用权限和关键动作确认构成受控执行面，但当前证据更接近端侧 Agent，而非独立云端 AaaS；来源：[Google](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/)。
- **Replit Tunnels**：11 月 20 日更新把 Agent 工具调用接入企业私网，属于企业 AaaS 的网络与治理配套；因首发较旧，保留在观察池。来源：[Replit](https://replit.com/blog/build-with-private-data-using-tunnels)。

## 趋势

本轮证据指向同一个产品方向：托管 Agent 的差异化正在从“能否远程执行”扩展到后台持续运行、多人共享能力包、跨 Agent 编排、任务监控，以及受控访问企业私网；不过严格 24 小时时间证据有限，不足以宣称市场拐点。

## 来源链接

1. [AWS Quick Plugins](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-quick-plugins-bundle-agents-skills-connectors-flows/)
2. [AWS Quick：Flows、后台工作与多 Agent](https://aws.amazon.com/blogs/machine-learning/new-in-aws-quick-more-capable-flows-an-updated-web-experience-and-agents-that-work-together/)
3. [Replit Tunnels](https://replit.com/blog/build-with-private-data-using-tunnels)
4. [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
5. [Gemini for Mac computer use](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/)

## 采集状态

- 已检查：16 类官方入口，包含 Cognition Devin 和 xAI/Grok 的指定能力维度，以及 7 个 Coding Agent / Harness 的 AaaS 边界。
- 失败来源：Cognition 缺少统一日级日志；Grok Bot changelog 未稳定暴露本轮日级时间；部分中国厂商动态页缺少精确发布时间；X 未登录结果不可稳定核验。
- 初始候选：12 条；最终保留来源：5 条。
- 二次补搜：是。首轮无可严格确认的 24 小时正式发布，已扩大中英文关键词并检查备用官方列表、GitHub 与可信二手索引。

今日扫描完成，共 5 条动态，重点：AWS Quick 把后台持续工作、多 Agent 编排与团队可安装插件组合为更完整的企业 Agent 控制面。

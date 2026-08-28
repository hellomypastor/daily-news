---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-28T00:00:00+08:00"
updatedAt: "2026-08-28T12:05:48+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Grok Bot is now included with more plans"
featuredUrl: "https://x.ai/news/grok-bot-more-plans"
featuredSummary: "Grok Bot 扩展至更多个人和团队套餐，提供常驻云端计算机、多 Bot 并行和跨应用持续执行。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-26"
featuredTags: ["AaaS","Grok Bot","Cloud Agent","24–72h"]
tags:
  - "24–72h"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "AgentZ"
  - "Automation"
  - "Background Agent"
  - "Claude"
  - "Cloud Agent"
  - "Devin"
  - "Enterprise"
  - "GA"
  - "Grok"
  - "Grok Bot"
  - "Identity"
  - "MaaS"
  - "Managed Agent"
  - "PaaS"
  - "Pricing"
  - "Qoder"
  - "Sandbox"
  - "Security Agent"
  - "WorkBuddy"
---

## 今日概览

扫描窗口为 **2026-08-27 12:05 至 2026-08-28 12:05（Asia/Shanghai）**。严格 24 小时窗口内新增 3 条可核验 AaaS 动态：AccuKnox 发布 AgentZ 托管 Agent 平台，SonarQube Hunter Agent 在 Cloud 版 GA，Dock 为云端 Agent 增加免复制凭据的 Claude 登录流程。当天早先来源继续累积；本轮另补录 Devin 8 月 26 日官方更新为 24–72h 观察项，并保留腾讯云 WorkBuddy Managed Agents、PPIO Agent 托管两个日期未确认的明确 AaaS 官方入口。

## 重点动态

- [AccuKnox 发布 AgentZ](https://www.globenewswire.com/news-release/2026/08/27/3351759/0/en/accuknox-launches-agentz-to-help-enterprises-build-run-and-govern-ai-agents-at-scale.html)：厂商新闻稿称平台已提供托管免费方案，并把 Agent、工作流、隔离 Sandbox、运行时凭据、权限、追踪与审计纳入统一控制面；同时支持本地与隔离部署。
- [SonarQube Hunter Agent GA](https://www.sonarsource.com/company/press-releases/sonar-launches-sonarqube-hunter-agent/)：该 Agent 可按计划或按需在后台扫描完整代码库，并已在 SonarQube Cloud 正式可用，符合托管后台 Agent 服务定义。
- [Dock 云端 Agent 登录改进](https://trydock.ai/changelog/2026-08-27-cloud-agents-sign-themselves-in)：云端 Agent 现在可通过浏览器授权取得自己的 Claude CLI 凭据并持久化在 Agent 卷中，减少远程环境的人工凭据搬运（涉及 Claude，详见 Claude 专题页）。

## 远程 / 云端 Agent 执行

| 平台 | 动态 | 证据状态 | AaaS 意义 |
|---|---|---|---|
| AccuKnox | [AgentZ 发布](https://www.globenewswire.com/news-release/2026/08/27/3351759/0/en/accuknox-launches-agentz-to-help-enterprises-build-run-and-govern-ai-agents-at-scale.html) | 厂商新闻稿，2026-08-27 | 托管执行、独立计算机与文件系统、工作流触发、权限、审计和企业部署形成完整生命周期控制面。 |
| Sonar | [Hunter Agent GA](https://www.sonarsource.com/company/press-releases/sonar-launches-sonarqube-hunter-agent/) | 官方，2026-08-27 | 在 SonarQube Cloud 后台按计划或按需运行，属于特定安全任务的托管 Agent。 |
| Dock | [云端 Agent 自助登录](https://trydock.ai/changelog/2026-08-27-cloud-agents-sign-themselves-in) | 官方 changelog，2026-08-27 | 改善远程 Agent 的身份生命周期与持久凭据管理；Claude 相关能力详见 Claude 专题页。 |
| SpaceXAI / xAI | [Grok Bot 扩大套餐覆盖](https://x.ai/news/grok-bot-more-plans) | 官方，2026-08-26（24–72h） | Bot 具有自己的常驻云端计算机、浏览器和终端，可跨应用持续执行、多 Bot 并行协作并配置例行任务；套餐扩展扩大托管执行商业覆盖。 |
| Cognition Devin | [8 月 26 日 Recent Updates](https://docs.devin.ai/release-notes/overview) | 官方，2026-08-26（24–72h） | 改进长等待期间的排队消息、自动化计划与触发器、企业级批量修复 API、MCP 安装与权限控制，体现托管异步执行和企业控制面的持续完善。 |

## 海外厂商

- **Cognition Devin（必查）**：已显式检查官方产品新闻、2026 release notes 与文档，覆盖托管异步执行、环境、并发、定价、企业接入和集成；24 小时内无新增。8 月 26 日 [Recent Updates](https://docs.devin.ai/release-notes/overview) 仍在 24–72h 观察范围，包含长等待时接收排队消息、更细自动化日程、多 Slack 触发频道、批量修复 API 与 MCP/OAuth 流程等托管控制面更新。
- **Grok（必查）**：已检查 xAI News、Grok Bot 与 Build 入口；Grok Bot 的云端计算机、后台持续执行、多 Bot 与 routine 符合 AaaS 定义并继续累积保留，窗口内无新发布；普通 Grok 4.6 模型分发仅作邻近信号。
- Anthropic、OpenAI、Google、Microsoft、Replit、Cursor、GitHub、Amazon、Cloudflare、Factory、Amp、Lindy、CrewAI 与 LangGraph Platform 官方入口均已检查，本轮无其他可核验新增。

## 中国市场（字节重点）

- 字节 Coze/火山/Doubao/Trae/Seed 已检查，未发现本轮可核验的新 AaaS 发布。
- 阿里百炼/Qoder、腾讯、百度、智谱、Moonshot/Kimi、MiniMax、DeepSeek 入口已检查；Qoder Cloud Agents、腾讯云 WorkBuddy Managed Agents 与 PPIO Agent 托管均符合 AaaS 边界，但页面缺少可核验发布时间，见下方“日期未确认”。

## AaaS 与 MaaS / PaaS 边界

AgentZ、Hunter Agent、Dock Cloud Agent、Grok Bot、Devin、WorkBuddy Managed Agents 与 PPIO Agent 托管都由服务方托管或管理执行环境及生命周期，属于 AaaS。Grok 4.6 在 Foundry 的托管模型端点本身更接近 MaaS/PaaS，只有与 Agent 编排、运行环境和治理结合后才构成完整 AaaS。

## 日期未确认

- [Qoder Cloud Agents](https://qoder.com/zh/cloud-agents)：当前官方页面描述 API 驱动的托管 Agent、长时 Session、断点恢复、独立 Sandbox、SSE 可观测与弹性并发，产品定义明确符合 AaaS；页面未显示可核验发布日期，因此不当作本轮新发布。
- [腾讯云 WorkBuddy Managed Agents](https://intl.cloud.tencent.com/zh/products/workbuddy-managed-agents)：官方页面描述云端托管运行底座、长周期异步、沙箱暂停/唤醒、API / SDK、MCP / OAuth / A2A 连接器、Trace 与评测；搜索入口可读但原页本轮打开超时，且没有可核验发布日期，因此仅作为日期未确认候选。
- [PPIO Agent 托管](https://ppio.com/agents)：官方页面提供云端 Agent 沙箱、控制台与 CLI 管理、暂停保留状态且停费、秒级恢复、持续运行与飞书集成；页面未显示发布时间，不当作本轮发布。

## 未证实传闻

暂无。

## 邻近信号观察池

- [Grok 4.6 on Microsoft Foundry](https://x.ai/news/grok-4-6-microsoft-foundry)：模型进入带企业治理的托管平台有利于 Agent 构建，但原文没有宣布新的独立远程 Agent 服务。
- 本地 Cline、Pi Coding Agent、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code 的常规 harness 更新不满足托管执行定义，未误收为 AaaS。

## 趋势

AaaS 的控制面正在细化为隔离执行、权限与运行时凭据、定时后台任务、追踪审计和企业部署选项；同时必须继续区分“模型进入云市场”和“服务方管理 Agent 生命周期”。

## 采集状态

- 已检查：海外与中国指定厂商、所有 Coding Agent/harness 托管信号；特别完成 Devin 与 Grok 的强制专项检查，并核验 AgentZ、Hunter Agent 与 Dock 官方/厂商原文。
- 失败来源：Devin 24 小时内无新条目，最新官方更新为 8 月 26 日；腾讯云 WorkBuddy 原页本轮超时但搜索入口可读；若干中国厂商页面缺少逐条日期；部分社交账号需登录。
- 初始候选数：14；保留来源数：9。
- 二次补搜：是（当天早先 verified 24 小时动态为空时已完成；本轮新增来源后无需再次触发，但继续检查官方备用入口与可信二手来源）。

今日扫描完成，共 9 条动态/候选，重点：AgentZ、Hunter Agent 与 Dock 构成 24 小时内新增；Devin 的 24–72h 控制面更新，以及 WorkBuddy 与 PPIO 两个日期未确认托管入口补足异步运行、沙箱和企业治理覆盖。

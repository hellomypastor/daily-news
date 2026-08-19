---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T01:11:38+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Microsoft Agent Framework removes AG-UI history special cases"
featuredUrl: "https://github.com/microsoft/agent-framework/commit/e2938f4531fed8003ea118e9b49b4e3df7e43090"
featuredSummary: "Agent Framework .NET 主分支移除 AG-UI history 特例；尚非发布。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-20 00:50 +08:00"
featuredTags: ["Microsoft Agent Framework","AG-UI","Development Signal"]
tags:
  - "AaaS"
  - "Adjacent Signal"
  - "AG-UI"
  - "Agent"
  - "Agent Payments"
  - "Agent.ai"
  - "Agents SDK"
  - "AI Agent"
  - "AI Cloud"
  - "Alipay"
  - "Auditability"
  - "Baidu"
  - "Cloud Agent"
  - "Cloudflare Agents"
  - "Codex"
  - "Cost"
  - "Date Unconfirmed"
  - "Deep Agents"
  - "Development Signal"
  - "Durable Recovery"
  - "Event"
  - "Foundry"
  - "Google ADK"
  - "Governance"
  - "Hosted Session"
  - "HubSpot"
  - "Langfuse"
  - "MaaS"
  - "Managed Agent"
  - "Microsoft Agent Framework"
  - "Observability"
  - "OpenAI"
  - "Persistent Threads"
  - "Qwen Code"
  - "Release"
  - "Remote Exec"
  - "Remote Session"
  - "Telemetry"
  - "Watchlist"
  - "Zendesk"
---

## 扫描结论

主窗口：2026-08-19 01:11:38 至 2026-08-20 01:11:38（Asia/Shanghai）；24–72 小时观察窗口：2026-08-17 01:11:38 至 2026-08-19 01:11:38。本轮确认的 AaaS 重点不是单一平台大发布，而是远程会话、审批恢复、持久聊天、Agent 治理与成本观测继续向 SDK/运行时下沉。Claude/OpenAI 链接允许重复，并均注明详见对应专题页。

## 重点动态

| 平台 | 动态 | 日期 / 状态 | AaaS 含义 |
|---|---|---|---|
| Microsoft | [Agent Framework 移除 AG-UI history 特例](https://github.com/microsoft/agent-framework/commit/e2938f4531fed8003ea118e9b49b4e3df7e43090) | 2026-08-20 00:50 +08:00，主分支 | 会话历史处理趋向统一，但尚未进入 release，不能写成 Foundry 服务 rollout。 |
| Google | [ADK 补齐 prompt-cache token 计量](https://github.com/google/adk-python/commit/d0b33a0569c940be0364cd4e0d4317a99bf52330) | 2026-08-20 00:44 +08:00，主分支 | 托管多模型 Agent 的 Bedrock/LiteLLM 缓存成本可更准确纳入遥测；尚非 Vertex 平台发布。 |
| OpenAI | [Agents SDK JavaScript v0.17.0](https://github.com/openai/openai-agents-js/releases/tag/v0.17.0) | 2026-08-19 22:38 +08:00，正式发布 | approval checkpoint fail-closed、guardrail 批次结清与 replay 脱敏提高长任务恢复安全；详见 OpenAI 专题页。 |
| OpenAI | [Agents SDK Python v0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0) | 2026-08-19 21:44 +08:00，正式发布 | 收紧 terminal response、RunState checkpoint 用量隔离与 handoff graph；不等同托管服务单独 rollout，详见 OpenAI 专题页。 |
| Cloudflare | [Durable chat recovery 设为无条件路径](https://github.com/cloudflare/agents/commit/9620b58fcc78035e1dd9a65a647455f83328bc28) | 2026-08-19 22:11 +08:00，主分支 | AIChatAgent/Think 入口统一进入 recovery fiber，体现持久会话成为运行时不变量；尚待 release。 |
| Microsoft | [Agent Hooks 拦截契约](https://github.com/microsoft/agent-framework/commit/10bf8d7d9ef56304cb6936452e64c90c99850f6c) | 2026-08-19 18:48 +08:00，主分支 | 八个拦截点、fail-closed 与 verdict-before-durability 面向 host-owned session 治理；尚未发布。 |
| Qwen | [Qwen Code v0.21.14](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14) | 2026-08-19 10:46 +08:00，正式发布 | live-session registry、daemon turn polling 与 Local Control 配对凭据强化远程会话控制；不等同 Qoder Cloud Agents 服务端 rollout。 |

## 远程 / 云端 Agent 执行

- [Qwen Code 首轮显示已加载上下文文件](https://github.com/QwenLM/qwen-code/commit/39fc769d3a49a883d250914d8f705b6b3735720c)（2026-08-19 23:53 +08:00）在 ACP/daemon 会话中按 session 工作目录显示真实注入文件，增强远程会话的提示来源审计；尚非发布。
- [Codex 使用 `mem::take` 排空 unified exec 输出缓冲](https://github.com/openai/codex/commit/18937b226524164546e7328a2ed47c0d52536e0a)（2026-08-20 00:30 +08:00）简化远程执行输出缓冲复位；属于主分支工程信号，详见 OpenAI 专题页。
- [Codex turn summary 使用存储的 item type](https://github.com/openai/codex/commit/db675cc005db424855319cb1f86cc5c89700318d)（2026-08-20 00:20 +08:00）并兼容旧行，改善持久线程摘要物化；尚非发布，详见 OpenAI 专题页。

## 海外平台

- Zendesk 于 [The Future of AI Agents is Here](https://community.zendesk.com/events/the-future-of-ai-agents-is-here-everything-you-need-to-know-330) 官方活动页说明正在统一 AI Agent 产品体验，并讨论套餐、rollout 与自助 onboarding；活动时间为 2026-08-19 23:00–24:00 +08:00。活动说明可核实，但具体功能范围仍以正式文档为准。
- Langfuse [Turn scores into charts](https://langfuse.com/changelog/2026-08-19-turn-scores-into-charts)允许把 score table 转成时间图、异常 Pulse 与 dashboard widget，增强 Agent 评测/观测；官方仅标日期，精确时刻未确认。

## 中国平台（字节系优先）

本轮对 Coze、AgentKit、veADK、OpenViking、Trae/Seed 做了官方入口与 GitHub feed 复核，主窗口未确认新的正式托管平台发布；不把普通主分支维护提交扩大为云端 rollout。阿里侧确认 Qwen Code 的远程会话控制更新，但 Qoder Cloud Agents 与百炼服务端未发现可核实的新公告；腾讯、百度、智谱、Kimi、MiniMax 与 DeepSeek 同样未确认主窗口正式 AaaS 发布。

## 近 24–72 小时补充

- [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)（2026-08-18 22:30 +08:00）加入 Foundry hosted session、用户身份透传与 Agent 并发工具选择，直接关联托管沙箱连续性与多用户隔离。
- [百度 Q2 2026 财报会](https://ir.baidu.com/events/event-details/q2-2026-baidu-earnings-conference-call)（2026-08-18）是 AI Cloud 商业化观察入口；官方结果正文在截止时未稳定可见，因此不引用二手指标。

## AaaS 与 MaaS / PaaS 边界

- AaaS：托管 Agent 运行、会话恢复、环境隔离、生命周期、审批/治理和可观测。
- MaaS：只提供模型推理 API；本轮 Deep Agents 的 [OpenRouter GLM-5.3 模型选项](https://github.com/langchain-ai/deepagents/commit/6295924d428fb061945cd83940c47c765091353b)归入邻近信号，不当作托管 Agent 发布。
- PaaS：通用云、沙箱或支付底座；只有明确承载 Agent 生命周期时才进入正文主区。

## 日期未确认

- [Agent.ai 平台迁移公告](https://agent.ai/transition)称独立平台将在 2026-08-22 退役并迁向 HubSpot Agent Builder，页面未给可靠发布日期；保留为平台整合观察，不能写成过去 24 小时新公告。
- Langfuse 更新只标 2026-08-19，无精确时刻，故不声称具体落在窗口哪一小时。

## 未证实传闻

本轮没有保留可达到基本来源要求的单源泄露；未把模型选择器中的产品名、社交讨论或搜索摘要改写成厂商发布。

## 邻近信号观察池

- [支付宝 AI 支付开放平台](https://aipay.alipay.com/docs/overview.html)定位于 AI 应用、Agent、API/Skill/MCP 的订阅、按量计费与授权支付；页面更新时间为 2026-08-07，属于较旧商业化底座，不是本轮 AaaS 发布。
- Deep Agents 的 GLM-5.3 选项只证明模型路由集成；托管执行、SLA 与企业隔离没有随该提交得到证明。

## 来源链接

正文已直接链接全部 17 个保留来源；同页 URL 已去重。

## 采集状态

- 已检查：海外与中国托管 Agent、远程编码、SDK、会话/沙箱、观测与商业化入口。
- 失败来源：Replit RSS 404，部分 LangChain/xAI/中国厂商页面 403 或依赖脚本，X 互动量不可稳定复核；百度结果页未稳定显示。
- 初始候选：173 条（含官方 commits/releases feeds 与网页检索结果）；保留 17 个唯一来源。
- 二次补搜：未运行（最终 sources 非 0，secondPass=false）。

今日扫描完成，共 17 条动态，重点：Agent 恢复、持久会话、审批治理和成本观测继续成为托管运行时的共同控制面。

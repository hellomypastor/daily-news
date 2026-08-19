---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T07:11:12+08:00"
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
  - "Alpha"
  - "Anthropic"
  - "Artifacts"
  - "Auditability"
  - "Authentication"
  - "Baidu"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloud Workstations"
  - "Cloudflare Agents"
  - "Codex"
  - "Compaction"
  - "Cost"
  - "Date Unconfirmed"
  - "Date Verified"
  - "Deep Agents"
  - "Deep Agents Code"
  - "Development Signal"
  - "DSW"
  - "Durable Recovery"
  - "EAS"
  - "Enterprise Policy"
  - "Event"
  - "Execution Policy"
  - "Foundry"
  - "Gemini CLI"
  - "Google"
  - "Google ADK"
  - "Governance"
  - "Hosted Session"
  - "HubSpot"
  - "Isolation"
  - "Langfuse"
  - "LangGraph SDK"
  - "MaaS"
  - "Managed Agent"
  - "MCP"
  - "Microsoft Agent Framework"
  - "Observability"
  - "OpenAI"
  - "Persistence"
  - "Persistent Threads"
  - "Preview"
  - "Qwen Code"
  - "Release"
  - "Remote Control"
  - "Remote Exec"
  - "Remote Session"
  - "Runtime"
  - "Session"
  - "Session Pool"
  - "Session State"
  - "Telemetry"
  - "Validation"
  - "Watchlist"
  - "Workflow"
  - "Zendesk"
---

## 扫描结论

主窗口：2026-08-19 07:11:12 至 2026-08-20 07:11:12（Asia/Shanghai）；24–72 小时观察窗口：2026-08-17 07:11:12 至 2026-08-19 07:11:12。本轮确认的 AaaS 重点继续从会话恢复、审批治理延伸到企业强制策略、MCP 会话池、认证恢复、状态与制品持久化；这些能力正在向客户端 SDK/运行时下沉，但不应等同各云平台的服务端 rollout。Claude/OpenAI 链接允许重复，并均注明详见对应专题页。

## 重点动态

| 平台 | 动态 | 日期 / 状态 | AaaS 含义 |
|---|---|---|---|
| LangChain | [Deep Agents Code 0.1.58](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.58) | 2026-08-20 06:19 +08:00，正式发布 | viewer 支持 MCP 重新认证，并完善 config、offload、hook 与 MCP 日志；要求 Python 3.12+。 |
| LangChain | [Deep Agents managed_config.toml](https://github.com/langchain-ai/deepagents/commit/d419122bfb748a823d1fa7cfd7207c428f4fbcab) | 2026-08-20 06:57 +08:00，主分支 | 固定系统路径、只读、managed-first 且异常时 fail-closed，增强企业主机策略治理；尚未发布。 |
| Google | [ADK MCP 会话池空闲逐出](https://github.com/google/adk-python/commit/69a3ca5e119a821bc375246f0bfa2e9e2cfefc79)与[节点级认证恢复](https://github.com/google/adk-python/commit/5b59139e0ec944a8618d4a1df4182db464337566) | 2026-08-20 05:44–05:58 +08:00，主分支 | 面向长生命周期 Agent 的连接回收和中断后认证连续性；尚非 Vertex 服务 rollout。 |
| Google | [ADK JSON 状态持久化](https://github.com/google/adk-python/commit/3f9e6bec37cd66315d619a2dbb339f545c86e09a)与[文件制品原子发布](https://github.com/google/adk-python/commit/94475c9a76c7c71246d6f5e4b083b3c3ee6869c0) | 2026-08-20 05:33–05:37 +08:00，主分支 | 降低不可序列化状态、并发写入或中断保存破坏持久会话/制品的风险；尚未发布。 |
| LangChain | [LangGraph SDK 0.4.3](https://github.com/langchain-ai/langgraph/releases/tag/sdk%3D%3D0.4.3) | 2026-08-20 02:05 +08:00，正式发布 | 加入 decrypt replacement result，并允许清空 cron end_time，关联托管图执行与调度控制。 |
| OpenAI | [Codex 0.149.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.2) | 2026-08-20 06:36 +08:00，alpha | 官方页面未列变更明细，不据版本号推断云端功能；详见 OpenAI 专题页。 |
| Anthropic | [Claude Code v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236) | 2026-08-20 04:02 +08:00，正式发布 | 增加跨会话 idle 通知，修复 Remote Control 离线标记、自托管 runner 交接与后台 session；详见 Claude 专题页。 |
| OpenAI | [Codex 不再把 Git 命令视为天然安全](https://github.com/openai/codex/commit/3b45c29062ff0e76e71c91b6753290400e7fa8da) | 2026-08-20 01:48 +08:00，主分支 | 仓库配置可触发 helper，因此 `unless-trusted` 下 Git 操作也需要显式规则或审批；尚非发布，详见 OpenAI 专题页。 |
| Microsoft | [Agent Framework 移除 AG-UI history 特例](https://github.com/microsoft/agent-framework/commit/e2938f4531fed8003ea118e9b49b4e3df7e43090) | 2026-08-20 00:50 +08:00，主分支 | 会话历史处理趋向统一，但尚未进入 release，不能写成 Foundry 服务 rollout。 |
| Google | [ADK 补齐 prompt-cache token 计量](https://github.com/google/adk-python/commit/d0b33a0569c940be0364cd4e0d4317a99bf52330) | 2026-08-20 00:44 +08:00，主分支 | 托管多模型 Agent 的 Bedrock/LiteLLM 缓存成本可更准确纳入遥测；尚非 Vertex 平台发布。 |
| OpenAI | [Agents SDK JavaScript v0.17.0](https://github.com/openai/openai-agents-js/releases/tag/v0.17.0) | 2026-08-19 22:38 +08:00，正式发布 | approval checkpoint fail-closed、guardrail 批次结清与 replay 脱敏提高长任务恢复安全；详见 OpenAI 专题页。 |
| OpenAI | [Agents SDK Python v0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0) | 2026-08-19 21:44 +08:00，正式发布 | 收紧 terminal response、RunState checkpoint 用量隔离与 handoff graph；不等同托管服务单独 rollout，详见 OpenAI 专题页。 |
| Cloudflare | [Durable chat recovery 设为无条件路径](https://github.com/cloudflare/agents/commit/9620b58fcc78035e1dd9a65a647455f83328bc28) | 2026-08-19 22:11 +08:00，主分支 | AIChatAgent/Think 入口统一进入 recovery fiber，体现持久会话成为运行时不变量；尚待 release。 |
| Microsoft | [Agent Hooks 拦截契约](https://github.com/microsoft/agent-framework/commit/10bf8d7d9ef56304cb6936452e64c90c99850f6c) | 2026-08-19 18:48 +08:00，主分支 | 八个拦截点、fail-closed 与 verdict-before-durability 面向 host-owned session 治理；尚未发布。 |
| Qwen | [Qwen Code v0.21.14](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14) | 2026-08-19 10:46 +08:00，正式发布 | live-session registry、daemon turn polling 与 Local Control 配对凭据强化远程会话控制；不等同 Qoder Cloud Agents 服务端 rollout。 |

## 远程 / 云端 Agent 执行

- [Google ADK 会话压缩计入工具调用与响应字符](https://github.com/google/adk-python/commit/66908e4c613ff3686e85374696640e84c4d0f20f)（06:20）改善长会话 compaction 估算；[Google 凭据刷新移出事件循环](https://github.com/google/adk-python/commit/2aa2b469b062cf94718edd6b2ebdfb52cfcad076)（05:46）避免阻塞异步 Agent runtime。两者均为主分支提交，不等同 Vertex Agent Engine 发布。
- ADK 的状态落盘与制品原子发布分别覆盖 Database/SQLite/Firestore JSON 状态列和本地文件制品版本，可视为自托管或托管 Agent 持久化底座增强，而非云服务 GA。

- [Codex 隔离自动插件 Git 操作](https://github.com/openai/codex/commit/ffad92234000c3c0cf4b48cbf1e92c96b0ab5742)（2026-08-20 01:23 +08:00）移除自动 marketplace/plugin 刷新继承的仓库级 Git 环境，并改用临时受信仓库，降低远程 Agent 后台同步触发重写 remote 或 helper 的风险；尚非发布，详见 OpenAI 专题页。
- [Qwen Code 首轮显示已加载上下文文件](https://github.com/QwenLM/qwen-code/commit/39fc769d3a49a883d250914d8f705b6b3735720c)（2026-08-19 23:53 +08:00）在 ACP/daemon 会话中按 session 工作目录显示真实注入文件，增强远程会话的提示来源审计；尚非发布。
- [Codex 使用 `mem::take` 排空 unified exec 输出缓冲](https://github.com/openai/codex/commit/18937b226524164546e7328a2ed47c0d52536e0a)（2026-08-20 00:30 +08:00）简化远程执行输出缓冲复位；属于主分支工程信号，详见 OpenAI 专题页。
- [Codex turn summary 使用存储的 item type](https://github.com/openai/codex/commit/db675cc005db424855319cb1f86cc5c89700318d)（2026-08-20 00:20 +08:00）并兼容旧行，改善持久线程摘要物化；尚非发布，详见 OpenAI 专题页。

## 海外平台

- Deep Agents Code 0.1.58 把 MCP 重新认证放进 viewer，并完善恢复/offload 与诊断；随后主分支 managed_config.toml 提交加入管理员强制策略。前者是正式客户端发布，后者仍是未发布工程信号。
- LangGraph SDK 0.4.3 是主窗口内正式发布；decrypt replacement 与 cron end_time 清空面向托管图执行的数据替换和调度管理。

- [Gemini CLI v0.57.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0)（2026-08-20 03:18 +08:00）包含 Cloud Workstations OAuth 重定向、容量错误静默重试 TTL、多轮请求取消回滚和 sub-agent handoff 修复；属于预览客户端发布，不等同 Vertex Agent Engine/Jules 服务端 rollout。
- Zendesk 于 [The Future of AI Agents is Here](https://community.zendesk.com/events/the-future-of-ai-agents-is-here-everything-you-need-to-know-330) 官方活动页说明正在统一 AI Agent 产品体验，并讨论套餐、rollout 与自助 onboarding；活动时间为 2026-08-19 23:00–24:00 +08:00。活动说明可核实，但具体功能范围仍以正式文档为准。
- Langfuse [Turn scores into charts](https://langfuse.com/changelog/2026-08-19-turn-scores-into-charts)允许把 score table 转成时间图、异常 Pulse 与 dashboard widget，增强 Agent 评测/观测；官方仅标日期，精确时刻未确认。

## 中国平台（字节系优先）

本轮对 Coze、AgentKit、veADK、OpenViking、Trae/Seed 做了官方入口与 GitHub feed 复核，主窗口未确认新的正式托管平台发布；不把普通主分支维护提交扩大为云端 rollout。阿里侧除 Qwen Code 的远程会话控制更新外，还出现 [DSW/EAS 全链路验证制品](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-full-20260820-r1)（2026-08-20 01:13 +08:00），其说明仅确认基于 v0.21.14 完成 SWE-bench 与 Terminal-Bench 验证，不能据此推断 Qoder Cloud Agents、PAI DSW 或 EAS 服务端发布。百炼、腾讯、百度、智谱、Kimi、MiniMax 与 DeepSeek 未确认主窗口正式 AaaS 发布。

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
- Deep Agents 的 GLM-5.3 选项已随 0.1.58 发布，但仍只证明模型路由集成；托管执行、SLA 与企业隔离没有随该选项得到证明。
- Codex 0.149.0-alpha.2 的发布时间可核实，但发布页只有版本号；在出现 release notes 前不推断远程/云端能力变化，并注明详见 OpenAI 专题页。

## 趋势

- 企业治理从运行时审批向固定系统路径、只读且 fail-closed 的主机级策略推进；Deep Agents managed_config.toml 是本轮最直接的工程信号。
- Google ADK 同一批提交同时覆盖 MCP 会话回收、认证恢复、状态 JSON 化与制品原子发布，显示会话连续性和持久化正被作为一组运行时不变量建设。
- 正式 SDK/客户端版本与服务端 rollout 仍需分开判断：Deep Agents Code、LangGraph SDK 有正式版本，Google ADK 新能力仍停留在主分支，Codex alpha 页面没有变更明细。

## 来源链接

正文已直接链接全部 32 个保留来源；同页 URL 已去重。

## 采集状态

- 已检查：海外与中国托管 Agent、远程编码、SDK、会话/沙箱、观测与商业化入口。
- 失败来源：Replit RSS 404，部分 LangChain/xAI/中国厂商页面 403 或依赖脚本，X 互动量不可稳定复核；百度结果页未稳定显示。
- 初始候选：221 条（含官方 commits/releases feeds 与网页检索结果）；保留 32 个唯一来源。
- 二次补搜：未运行（最终 sources 非 0，secondPass=false）。

今日扫描完成，共 32 条动态，重点：企业强制策略、MCP 会话回收、认证恢复、状态与制品持久化正在成为托管运行时的共同控制面。

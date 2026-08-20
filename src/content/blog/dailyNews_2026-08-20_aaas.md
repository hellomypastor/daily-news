---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T15:20:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Microsoft Agent Framework removes AG-UI history special cases"
featuredUrl: "https://github.com/microsoft/agent-framework/commit/e2938f4531fed8003ea118e9b49b4e3df7e43090"
featuredSummary: "Agent Framework .NET 主分支移除 AG-UI history 特例；尚非发布。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-20 00:50 +08:00"
featuredTags: ["Microsoft Agent Framework","AG-UI","Development Signal"]
tags:
  - "A2A"
  - "AaaS"
  - "Adjacent Signal"
  - "AG-UI"
  - "Agent"
  - "Agent Channel"
  - "Agent Payments"
  - "Agent Sandbox"
  - "Agent.ai"
  - "AgentKit"
  - "Agents SDK"
  - "AI Agent"
  - "AI Cloud"
  - "Alipay"
  - "Alpha"
  - "Anthropic"
  - "Artifacts"
  - "Attribution"
  - "Auditability"
  - "Authentication"
  - "Automations"
  - "Baidu"
  - "Checkpoint"
  - "Claude"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloud Agents"
  - "Cloud Workstations"
  - "Cloudflare Agents"
  - "Code Executor"
  - "Codex"
  - "Compaction"
  - "Conversation Isolation"
  - "Conversational Flows"
  - "Cost"
  - "CozeLoop"
  - "Credentials"
  - "CrewAI"
  - "Date Unconfirmed"
  - "Date Verified"
  - "Deep Agents"
  - "Deep Agents Code"
  - "Development Signal"
  - "DingTalk"
  - "DSW"
  - "Durable Recovery"
  - "EAS"
  - "Enterprise Policy"
  - "Event"
  - "Execution Policy"
  - "Execution State"
  - "Failure Handling"
  - "Foundry"
  - "Function Calling"
  - "Gateway"
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
  - "Nightly"
  - "Observability"
  - "OpenAI"
  - "OpenHands"
  - "PaaS"
  - "Performance"
  - "Persistence"
  - "Persistent Threads"
  - "Preview"
  - "Project Control Plane"
  - "PTY Worker"
  - "Qoder"
  - "Qwen Code"
  - "Recovery"
  - "Release"
  - "Remote Control"
  - "Remote Exec"
  - "Remote Session"
  - "Runtime"
  - "Security"
  - "Session"
  - "Session Continuity"
  - "Session Pool"
  - "Session State"
  - "State Streaming"
  - "SWIRL"
  - "Telemetry"
  - "Tencent Cloud"
  - "Tool Error"
  - "Tool Execution"
  - "Trajectory"
  - "Validation"
  - "Watchlist"
  - "Web Shell"
  - "Workflow"
  - "Zendesk"
---

## 扫描结论

主窗口：2026-08-19 15:20:00 至 2026-08-20 15:20:00（Asia/Shanghai）；24–72 小时观察窗口：2026-08-17 15:20:00 至 2026-08-19 15:20:00。重点增量复核 2026-08-20 12:11:03 后的新来源。本轮确认的 AaaS 重点继续从会话恢复、审批治理延伸到远程 A2A 凭据边界、MCP 连接级会话连续性、可恢复工具错误和 checkpoint 输入恢复；这些能力正在向客户端 SDK/运行时下沉，但不应等同各云平台的服务端 rollout。Claude/OpenAI 及开源/行业交叉链接允许重复，相关条目均标明详见对应专题页。

## 重点动态

| 平台 | 动态 | 日期 / 状态 | AaaS 含义 |
|---|---|---|---|
| Qwen | [Qwen Code 加入独立会话隔离原语](https://github.com/QwenLM/qwen-code/commit/a659539bc7cb)并[同步 Web Shell 侧栏会话](https://github.com/QwenLM/qwen-code/commit/50a0d2a7616f817b5424b089e5d1185b18a21993) | 2026-08-20 14:15–14:21 +08:00，主分支 | 私有会话目录、fail-closed 恢复与实时会话目录同步强化远程长任务隔离；尚非 Qoder Cloud Agents rollout。 |
| Google | [ADK 捕获客户端工具结果](https://github.com/google/adk-python/commit/4599a52659f9c3655263b3aabd39a189c692c0d2) | 2026-08-20 13:42 +08:00，主分支 | 为 Antigravity 实验轨迹补齐客户端工具成功/错误结果，但提交明确说明尚无调用方，不能写成 Vertex rollout。 |
| OpenHands | [自动化 dashboard 与 Add/Import 流程改进](https://github.com/All-Hands-AI/OpenHands/commit/7a9aacb7b69e) | 2026-08-20 14:32 +08:00，主分支 | 托管自动化的发现、添加与导入界面继续产品化；尚未发布。 |
| Qwen | [Qwen Code 公开工作流执行状态](https://github.com/QwenLM/qwen-code/commit/63fe7c174a6a5dc50d25f78c214fb671df5a3547)并[加入 Agent View PTY workers](https://github.com/QwenLM/qwen-code/commit/bba2e1a1845445d312b681a1cf3313dbe4d1591d) | 2026-08-20 11:11–11:41 +08:00，主分支 | 工作流快照/恢复和可重连 PTY worker 强化长任务观测与远程执行；尚非 Qoder Cloud Agents rollout。 |
| Google | [ADK 修正 SQLite 会话状态合并](https://github.com/google/adk-python/commit/e4ba7040fb12f9a3ea468052567ec174dc31d443) | 2026-08-20 10:58 +08:00，主分支 | 避免重复事件增量更新时旧键残留，增强持久会话一致性；尚非 Vertex rollout。 |
| Google | [ADK 阻止 RemoteA2aAgent 转发凭据请求](https://github.com/google/adk-python/commit/2aea8595fb1c5e0fddef7893a1985dc96dc82692)并[按 MCP 连接维持会话](https://github.com/google/adk-python/commit/4e68bad19953a4b2cf5facca99108eb94f872663) | 2026-08-20 07:14–07:50 +08:00，主分支 | 修补远程 peer 凭据外泄风险与 MCP SDK 2.x 下每次调用丢失对话的问题；尚非 Vertex 服务 rollout，详见开源专题页。 |
| Microsoft | [Agent Framework A2A 输入恢复](https://github.com/microsoft/agent-framework/commit/435201b71b9685eef4379fd1b1eeea932684b9e8) | 2026-08-20 07:55 +08:00，主分支 | 让 INPUT_REQUIRED 暂停、相关性校验和 checkpoint 恢复沿既有 session 路径工作；尚非 Foundry rollout，详见开源专题页。 |
| CrewAI | [CrewAI 1.15.17](https://github.com/crewAIInc/crewAI/releases/tag/1.15.17) | 2026-08-20 08:27 +08:00，正式发布 | 加入声明式 conversational flows，并修复 MCP server 命名、失败 scope 关闭、SSRF redirect-hop 校验及 Responses tool call；详见开源专题页。 |
| Anthropic | [Claude Code v2.1.237](https://github.com/anthropics/claude-code/releases/tag/v2.1.237) | 2026-08-20 08:54 +08:00，正式客户端发布 | 修复 LLM gateway/custom base URL 会话的 prompt caching，并加入 Concise 输出风格；不是托管服务 rollout，详见 Claude 专题页。 |
| LangChain | [Deep Agents 让 ask_user 参数错误可恢复](https://github.com/langchain-ai/deepagents/commit/a7027edc6449e9a7dbf0e082b8747d0999125ca2) | 2026-08-20 08:27 +08:00，主分支 | 由 ToolErrorMiddleware 把模型生成的无效参数转成可重试 ToolMessage，避免整次运行终止；尚未发布，详见开源专题页。 |
| Google | [ADK 避免 CFC 重复执行](https://github.com/google/adk-python/commit/c986ff0fceedef2107485cf136dc3b70acec32d8)并[降低本地代码执行启动成本](https://github.com/google/adk-python/commit/c244a9c8330589d93046823ea21da80ae33a1406) | 2026-08-20 08:39–09:04 +08:00，主分支 | 前者阻止 run_async/support_cfc 双路径重复工具调用，后者改用普通子解释器并避免无结果子进程永久等待；均非云端 rollout，详见开源专题页。 |
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

- [Qwen Code 独立会话隔离原语](https://github.com/QwenLM/qwen-code/commit/a659539bc7cb)加入私有会话目录、目录身份校验、大小写一致的 session 锁与 fail-closed 恢复；[Web Shell 会话同步](https://github.com/QwenLM/qwen-code/commit/50a0d2a7616f817b5424b089e5d1185b18a21993)则让侧栏 catalog 跟随 workspace live state。两项均为主分支工程信号，不是 Qoder Cloud Agents 服务端 rollout。
- [Google ADK Antigravity 工具结果捕获](https://github.com/google/adk-python/commit/4599a52659f9c3655263b3aabd39a189c692c0d2)通过 post-tool-call/on-tool-error hook 缓冲客户端工具结果并转为匹配的 `function_response`，补齐运行轨迹；提交明确说明尚无调用方，因此只作为实验运行时信号。
- [OpenAI Agents SDK Python 深拷贝 MCP 缓存工具](https://github.com/openai/openai-agents-python/commit/eb3a5d5b5d15)避免调用方修改污染跨运行共享缓存，属于多会话隔离修补，尚未发布，详见 OpenAI 专题页。
- [Microsoft Agent Framework 避免未变化的 AG-UI predictive state 快照](https://github.com/microsoft/agent-framework/commit/26b28b43863f)，减少远程状态流冗余；仍是 Python 主分支提交，并非 Foundry rollout。
- [Qwen Code Agent View PTY workers](https://github.com/QwenLM/qwen-code/commit/bba2e1a1845445d312b681a1cf3313dbe4d1591d)加入 supervisor、认证 sideband、可重连 attach lease、退出轮询和 socket 所有权保护；[工作流执行状态](https://github.com/QwenLM/qwen-code/commit/63fe7c174a6a5dc50d25f78c214fb671df5a3547)则公开快照、日志投影和依赖尾部并校验恢复 run ID。两项均在主分支，不能写成 Qoder Cloud Agents 服务端 rollout。
- [Google ADK SQLite 状态合并修补](https://github.com/google/adk-python/commit/e4ba7040fb12f9a3ea468052567ec174dc31d443)让重复事件的增量状态按 `dict.update()` 语义更新，避免旧键残留；这是持久会话底座修补，尚非 Vertex Agent Engine rollout。
- Google ADK 的 [RemoteA2aAgent 凭据请求清理](https://github.com/google/adk-python/commit/2aea8595fb1c5e0fddef7893a1985dc96dc82692)在消息重建和文本化前移除携带 OAuth client secret / service-account key 的 function call；[MCP agent-server 会话按连接键控](https://github.com/google/adk-python/commit/4e68bad19953a4b2cf5facca99108eb94f872663)兼容 MCP SDK 1.x/2.x，避免每次 tool call 重建会话。两项均是主分支工程修补，尚非 Vertex rollout，详见开源专题页。
- Google ADK 还[把 function response 与原 call 配对](https://github.com/google/adk-python/commit/deee6d2c474ccb9710e0b25a0b290bb76cc54c45)，并[阻止 support_cfc 下重复工具执行](https://github.com/google/adk-python/commit/c986ff0fceedef2107485cf136dc3b70acec32d8)；[本地代码执行改用普通子解释器](https://github.com/google/adk-python/commit/c244a9c8330589d93046823ea21da80ae33a1406)，官方提交说明简单程序启动从约 2.3 秒降至约 35 毫秒。这些指标来自提交说明，未独立复测，且均不等同托管服务发布；详见开源专题页。
- Microsoft Agent Framework [A2A 输入处理修补](https://github.com/microsoft/agent-framework/commit/435201b71b9685eef4379fd1b1eeea932684b9e8)明确拒绝空调用，把远程 INPUT_REQUIRED 映射到既有用户输入请求，并可从 checkpoint 恢复同一 task；仍是主分支，不能写成 Foundry 服务 rollout，详见开源专题页。
- [Google ADK 会话压缩计入工具调用与响应字符](https://github.com/google/adk-python/commit/66908e4c613ff3686e85374696640e84c4d0f20f)（06:20）改善长会话 compaction 估算；[Google 凭据刷新移出事件循环](https://github.com/google/adk-python/commit/2aa2b469b062cf94718edd6b2ebdfb52cfcad076)（05:46）避免阻塞异步 Agent runtime。两者均为主分支提交，不等同 Vertex Agent Engine 发布。
- ADK 的状态落盘与制品原子发布分别覆盖 Database/SQLite/Firestore JSON 状态列和本地文件制品版本，可视为自托管或托管 Agent 持久化底座增强，而非云服务 GA。

- [Codex 隔离自动插件 Git 操作](https://github.com/openai/codex/commit/ffad92234000c3c0cf4b48cbf1e92c96b0ab5742)（2026-08-20 01:23 +08:00）移除自动 marketplace/plugin 刷新继承的仓库级 Git 环境，并改用临时受信仓库，降低远程 Agent 后台同步触发重写 remote 或 helper 的风险；尚非发布，详见 OpenAI 专题页。
- [Qwen Code 首轮显示已加载上下文文件](https://github.com/QwenLM/qwen-code/commit/39fc769d3a49a883d250914d8f705b6b3735720c)（2026-08-19 23:53 +08:00）在 ACP/daemon 会话中按 session 工作目录显示真实注入文件，增强远程会话的提示来源审计；尚非发布。
- [Codex 使用 `mem::take` 排空 unified exec 输出缓冲](https://github.com/openai/codex/commit/18937b226524164546e7328a2ed47c0d52536e0a)（2026-08-20 00:30 +08:00）简化远程执行输出缓冲复位；属于主分支工程信号，详见 OpenAI 专题页。
- [Codex turn summary 使用存储的 item type](https://github.com/openai/codex/commit/db675cc005db424855319cb1f86cc5c89700318d)（2026-08-20 00:20 +08:00）并兼容旧行，改善持久线程摘要物化；尚非发布，详见 OpenAI 专题页。

## 海外平台

- [OpenHands 自动化 dashboard 与 Add/Import 流程](https://github.com/All-Hands-AI/OpenHands/commit/7a9aacb7b69e)改进推荐区域、自动化发现和导入体验，属于托管自动化产品界面开发信号；尚未发布。
- [CrewAI CLI 在用户项目命令中回填 project_id](https://github.com/crewAIInc/crewAI/commit/0c2bcb510c8b)，让本地项目与控制平面的关联更一致；尚未发布，不能据此推断 CrewAI Enterprise rollout。
- [CrewAI project_id 遥测契约](https://github.com/crewAIInc/crewAI/commit/7c72d57b738e9caff24c7017a523a07189aec1b3)始终发出字段，用空值区分“当前客户端可上报但项目未声明”和旧客户端缺字段，改善托管观测归因；主分支尚未发布。
- [OpenAI Agents SDK JavaScript 失败终态处理](https://github.com/openai/openai-agents-js/commit/c3bfb2c737569e34d64ffd45c72a8e839f8bd29c)拒绝 unsuccessful Responses terminal state，并补强重试和 usage tracking；属于未发布 SDK 工程信号，不等同托管服务 rollout，详见 OpenAI 专题页。
- [CrewAI 1.15.17](https://github.com/crewAIInc/crewAI/releases/tag/1.15.17)正式发布声明式 conversational flows，并修复 MCP HTTP/SSE server_name、失败 scope、SSRF redirect-hop/peer-IP 校验和 Responses 原生 tool calls；这是框架发布，不自动证明 CrewAI Enterprise/托管控制面同步 rollout，详见开源专题页。
- [Claude Code v2.1.237](https://github.com/anthropics/claude-code/releases/tag/v2.1.237)修复经 LLM gateway 或 custom base URL 运行的会话 prompt caching，并新增 Concise 输出风格；属于客户端发布，详见 Claude 专题页。
- [Deep Agents ask_user 错误恢复](https://github.com/langchain-ai/deepagents/commit/a7027edc6449e9a7dbf0e082b8747d0999125ca2)使模型可在错误 ToolMessage 后重试，但该提交尚未 release；详见开源专题页。
- Deep Agents Code 0.1.58 把 MCP 重新认证放进 viewer，并完善恢复/offload 与诊断；随后主分支 managed_config.toml 提交加入管理员强制策略。前者是正式客户端发布，后者仍是未发布工程信号。
- LangGraph SDK 0.4.3 是主窗口内正式发布；decrypt replacement 与 cron end_time 清空面向托管图执行的数据替换和调度管理。

- [Gemini CLI v0.57.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.57.0-preview.0)（2026-08-20 03:18 +08:00）包含 Cloud Workstations OAuth 重定向、容量错误静默重试 TTL、多轮请求取消回滚和 sub-agent handoff 修复；属于预览客户端发布，不等同 Vertex Agent Engine/Jules 服务端 rollout。
- Zendesk 于 [The Future of AI Agents is Here](https://community.zendesk.com/events/the-future-of-ai-agents-is-here-everything-you-need-to-know-330) 官方活动页说明正在统一 AI Agent 产品体验，并讨论套餐、rollout 与自助 onboarding；活动时间为 2026-08-19 23:00–24:00 +08:00。活动说明可核实，但具体功能范围仍以正式文档为准。
- Langfuse [Turn scores into charts](https://langfuse.com/changelog/2026-08-19-turn-scores-into-charts)允许把 score table 转成时间图、异常 Pulse 与 dashboard widget，增强 Agent 评测/观测；官方仅标日期，精确时刻未确认。

## 中国平台（字节系优先）

- [Qwen Code 钉钉引用媒体处理](https://github.com/QwenLM/qwen-code/commit/36c77ff803f54f93a5c93702baf3a243072a6fa7)让 Agent 接收被引用消息中的图片、音频、视频或文件，并在落盘失败时降级保留文本；属于企业消息渠道集成的主分支修补，尚非云服务发布。

本轮对 Coze、AgentKit、veADK、OpenViking、Trae/Seed 做了官方入口与 GitHub feed 复核，主窗口未确认新的正式托管平台发布；不把普通主分支维护提交扩大为云端 rollout。日期未确认的官方资料仍确认：CozeLoop 可注册部署到 VeFaaS/AgentKit 的火山智能体并开展观测、调试和评测；Qoder 官网列出 Cloud Agents 为企业全托管平台；腾讯 Agent 沙箱为 Agent 提供托管 Code/Browser 隔离环境。它们都不是本轮新发布。阿里侧除 Qwen Code 的远程会话控制更新外，还出现 [DSW/EAS 全链路验证制品](https://github.com/QwenLM/qwen-code/releases/tag/dsw-eas-full-20260820-r1)（2026-08-20 01:13 +08:00），其说明仅确认基于 v0.21.14 完成 SWE-bench 与 Terminal-Bench 验证，不能据此推断 Qoder Cloud Agents、PAI DSW 或 EAS 服务端发布。百炼、腾讯、百度、智谱、Kimi、MiniMax 与 DeepSeek 未确认主窗口正式 AaaS 发布。

## 近 24–72 小时补充

- [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)（2026-08-18 22:30 +08:00）加入 Foundry hosted session、用户身份透传与 Agent 并发工具选择，直接关联托管沙箱连续性与多用户隔离。
- [百度 Q2 2026 财报会](https://ir.baidu.com/events/event-details/q2-2026-baidu-earnings-conference-call)（2026-08-18）是 AI Cloud 商业化观察入口；官方结果正文在截止时未稳定可见，因此不引用二手指标。

## AaaS 与 MaaS / PaaS 边界

- AaaS：托管 Agent 运行、会话恢复、环境隔离、生命周期、审批/治理和可观测。
- MaaS：只提供模型推理 API；本轮 Deep Agents 的 [OpenRouter GLM-5.3 模型选项](https://github.com/langchain-ai/deepagents/commit/6295924d428fb061945cd83940c47c765091353b)归入邻近信号，不当作托管 Agent 发布。
- PaaS：通用云、沙箱或支付底座；[腾讯云 Agent 沙箱](https://cloud.tencent.cn/product/agsx)虽明确服务 Agent 的 Code/Browser 隔离执行并自 2026-07-14 商业计费，但未单独证明完整 Agent 生命周期托管，故本轮保留为较旧边界信号。

## 日期未确认

- [CozeLoop 火山智能体注册文档](https://docs.coze.cn/cozeloop_register_veadk)确认 VeFaaS/AgentKit 部署、A2A/MCP Server 注册、Trace 观测、调试与评测链路；页面未给可靠发布时间，不写成本轮 rollout。
- [Qoder 官方首页](https://qoder.cn/)确认 Cloud Agents 定位为企业云端全托管 AI Agent 平台，并列出多智能体协同与长时委派；页面发布时间未确认，不写成 24 小时新发布。
- SWIRL 官方博客列出 8 月 20 日的 [Claude 经 MCP 搜索企业数据演示](https://swirlaiconnect.com/blog)，但未给精确时刻；它证明企业搜索/MCP 集成演示，不证明 SWIRL 或 Claude 新托管执行服务，详见 Claude 专题页。
- [Agent.ai 平台迁移公告](https://agent.ai/transition)称独立平台将在 2026-08-22 退役并迁向 HubSpot Agent Builder，页面未给可靠发布日期；保留为平台整合观察，不能写成过去 24 小时新公告。
- Langfuse 更新只标 2026-08-19，无精确时刻，故不声称具体落在窗口哪一小时。

## 未证实传闻

本轮没有保留可达到基本来源要求的单源泄露；未把模型选择器中的产品名、社交讨论或搜索摘要改写成厂商发布。

## 邻近信号观察池

- [Gemini CLI 2026-08-20 nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260820.ge90c63fa1)仅修复含 tools/media 的空文本 turn 保留并同步 preview changelog；是预发布客户端信号，不是 Vertex/Jules 服务端 rollout，详见行业专题页。
- [腾讯云 Agent 沙箱](https://cloud.tencent.cn/product/agsx)官方页确认 Code/Browser 托管隔离环境与 2026-07-14 起商业计费；它强化 Agent 执行底座，但完整编排、生命周期与 SLA 仍需其他产品证据，因此按 AaaS/PaaS 边界保留。
- [支付宝 AI 支付开放平台](https://aipay.alipay.com/docs/overview.html)定位于 AI 应用、Agent、API/Skill/MCP 的订阅、按量计费与授权支付；页面更新时间为 2026-08-07，属于较旧商业化底座，不是本轮 AaaS 发布。
- Deep Agents 的 GLM-5.3 选项已随 0.1.58 发布，但仍只证明模型路由集成；托管执行、SLA 与企业隔离没有随该选项得到证明。
- Codex 0.149.0-alpha.2 的发布时间可核实，但发布页只有版本号；在出现 release notes 前不推断远程/云端能力变化，并注明详见 OpenAI 专题页。

## 趋势

- 独立会话运行时正在把私有目录身份、恢复锁和 fail-closed 元数据校验做成基础原语；Qwen Code 的实现仍在主分支，但比单纯 UI 远控更接近托管执行隔离底座。
- 轨迹完整性开始覆盖“工具在客户端执行”的分布式边界；Google ADK Antigravity 已加入结果捕获缓冲，但尚无调用方，显示实现与可用 rollout 仍有距离。
- 远程 Agent 的安全边界从“不要回传 credential response”扩展到在消息重建阶段同时清理 credential request；Google ADK 的 RemoteA2aAgent 修补是本轮最明确的远程 peer 数据边界信号。
- A2A/MCP 的会话连续性正在从连接复用走向 INPUT_REQUIRED 暂停、task correlation 与 checkpoint 恢复；Google 与 Microsoft 的提交分别覆盖连接层和工作流层。
- 企业治理从运行时审批向固定系统路径、只读且 fail-closed 的主机级策略推进；Deep Agents managed_config.toml 是本轮最直接的工程信号。
- Google ADK 同一批提交同时覆盖 MCP 会话回收、认证恢复、状态 JSON 化与制品原子发布，显示会话连续性和持久化正被作为一组运行时不变量建设。
- 正式 SDK/客户端版本与服务端 rollout 仍需分开判断：Deep Agents Code、LangGraph SDK 有正式版本，Google ADK 新能力仍停留在主分支，Codex alpha 页面没有变更明细。

## 来源链接

正文已直接链接全部 59 个保留来源；同页 URL 已去重。

## 采集状态

- 已检查：Anthropic/OpenAI/Google/Microsoft、Cloudflare/LangChain/OpenHands/Replit/Devin/Cursor/Factory/Amp/CrewAI/Lindy，以及字节 Coze/AgentKit/veADK、阿里百炼/Qoder/Qwen Code、腾讯 ADP/Agent Sandbox、百度/智谱/Kimi/MiniMax/DeepSeek；同时复核 remote/session/sandbox/A2A/hosting/observability/pricing 关键词。
- 失败来源：Replit RSS 404；部分 LangChain/xAI/中国厂商页面 403 或依赖脚本；X 互动量不可稳定复核；Agent.ai、Langfuse、SWIRL、Coze/Qoder 页面缺精确发布时间；百度结果页未稳定显示；GitHub compare 早前 403；15:20 单提交 REST 接口触发未认证限流后改用官方 commit HTML；Cursor/Datadog 活动只检得二手转述且发生在截止后。
- 初始候选：300 条（含官方 commits/releases、24–72 小时观察入口与网页检索结果）；保留 59 个唯一来源。
- 二次补搜：未运行（最终 sources 非 0，secondPass=false）。

今日扫描完成，共 59 条动态，重点：独立会话隔离、Web Shell 会话同步、客户端工具轨迹补全与自动化控制台产品化继续向 Agent 运行时和托管控制面下沉。

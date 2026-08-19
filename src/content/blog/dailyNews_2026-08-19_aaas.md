---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-19T00:00:00+08:00"
updatedAt: "2026-08-19T13:12:08+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Microsoft Agent Framework .NET 1.18.0"
featuredUrl: "https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0"
featuredSummary: "正式 release 增加 Foundry hosted session 与用户身份透传，并允许 Agent 选择并发工具调用；直接涉及托管沙箱连续性和多用户隔离。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-18 22:30 +08:00"
featuredTags: ["Microsoft Agent Framework","Foundry","Hosted Session"]
tags:
  - "AaaS"
  - "Adjacent Signal"
  - "ADP"
  - "AG-UI"
  - "Agent"
  - "Agent Backend"
  - "Agent Commerce"
  - "Agent Governance"
  - "Agent Handoff"
  - "Agent OS"
  - "Agent Platform"
  - "Agent Runtime"
  - "Agent SDK"
  - "AgentKit"
  - "Agents SDK"
  - "Approval"
  - "Async Agent"
  - "Async Task"
  - "Authentication"
  - "Automation"
  - "Baidu Cloud"
  - "Bedrock"
  - "BYOA"
  - "ByteDance"
  - "China Telecom Cloud"
  - "Claude"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloud Backend"
  - "Cloud Handoff"
  - "Cloud Session"
  - "Cloudflare"
  - "Cloudflare Agents"
  - "Code Hosting"
  - "Codex"
  - "Coding Agent"
  - "Collaboration"
  - "Community"
  - "Composio"
  - "Computer Use"
  - "Concurrency"
  - "Control Plane"
  - "Coze Loop"
  - "Credential Lifecycle"
  - "CubeSandbox"
  - "Cursor"
  - "Date Unverified"
  - "Deep Agents"
  - "Deep Agents Code"
  - "DeepSeek Harness"
  - "Development Signal"
  - "Discovery"
  - "Docker"
  - "Durable Job"
  - "Durable Workflow"
  - "Enterprise"
  - "Environment Policy"
  - "Evaluation"
  - "External Agent"
  - "FastPath"
  - "Foundry"
  - "Google ADK"
  - "Governance"
  - "Guardian"
  - "Guardrail"
  - "Harness"
  - "Hosted Session"
  - "Huawei Cloud"
  - "Kubernetes"
  - "LangSmith"
  - "Lifecycle"
  - "Long-running Task"
  - "MaaS"
  - "Managed Agent"
  - "Marketplace"
  - "MCP"
  - "Microsoft Agent Framework"
  - "Observability"
  - "Octomind"
  - "Older Context"
  - "Open Source"
  - "OpenHands"
  - "OpenSandbox"
  - "OpenViking"
  - "PaaS"
  - "Permission"
  - "PowerShell"
  - "Pre-release"
  - "Qoder"
  - "QuickJS"
  - "Red Hat"
  - "Reliability"
  - "Remote Agent"
  - "Remote Control"
  - "Remote Environment"
  - "Remote Plugin"
  - "Remote Skills"
  - "Replit"
  - "Resource Limits"
  - "Review"
  - "Risk Classification"
  - "Routing"
  - "Rumor"
  - "Sample Signal"
  - "Sandbox"
  - "SDK"
  - "Secondary"
  - "Security"
  - "Self-hosted"
  - "Semantic Kernel"
  - "Session"
  - "Session History"
  - "Session Queue"
  - "Session Resume"
  - "SkillHub"
  - "Snapshot Integrity"
  - "Stable Release"
  - "Startup"
  - "Template Lifecycle"
  - "Tencent Cloud"
  - "Tool Router"
  - "Tooling"
  - "Tracing"
  - "Unverified"
  - "veADK"
  - "Vercel AI SDK"
  - "Video"
  - "Voice AI"
  - "Volcengine"
  - "Watchlist"
  - "Workflow Resume"
  - "WorkflowAgent"
  - "Workspace Policy"
---

## 今日概览

主窗口：2026-08-18 13:12:08 至 2026-08-19 13:12:08（Asia/Shanghai）；24–72 小时观察窗：2026-08-16 13:12:08 至 2026-08-18 13:12:08。当天来源按累积规则全部保留；窗口仅用于发现与标注本轮候选，不用于删除此前来源。

主窗口内最明确的正式 AaaS 更新仍包括 Microsoft Agent Framework .NET 1.18.0、Codex 0.148.0 稳定版、Claude Code v2.1.235、Claude Agent SDK Python v0.2.140 和 Composio Core 0.17.0。10:12 后新增的 Codex 跨线程审批隔离、按名称排队到最近会话与 Bedrock 凭据刷新，以及 Microsoft 工作流恢复/会话历史修复，都只是主分支工程信号；字节 OpenViking/Coze Loop 的异步任务与评测可观测更新同样未证明 AgentKit 云端 rollout。OpenSandbox/CubeSandbox 增量归入沙箱 PaaS 邻近信号；Claude、Codex 相关分别详见对应专题页。

## 重点动态

1. **Microsoft Agent Framework .NET 1.18.0 正式发布。** [官方 release](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)于 22:30 发布，包含 Foundry hosted session、`x-ms-user-identity` 透传和可选并发工具调用。托管沙箱可跨 turn 粘性复用，同时会话轨迹与委托用户隔离分开处理，属于本轮最直接的 AaaS SDK 发布。
2. **Deep Agents 修复后端并发。** [0.7.7](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.7)于 23:07 发布，对 ContextHubBackend 并发变更批处理并修复 glob 递归；这是 Agent 后端可靠性更新，发布页没有声称 LangGraph Platform 托管层同步上线。
3. **Vercel durable WorkflowAgent 修复重试语义。** [@ai-sdk/workflow 1.0.68](https://github.com/vercel/ai/releases/tag/%40ai-sdk%2Fworkflow%401.0.68)于 00:53 发布，避免模型调用重试与 durable step 重试叠加，并保留流错误原值。它是持久工作流工程发布，不等同于 Vercel 托管服务单独 rollout。
4. **OpenHands 补齐云后端与 Automations。** [v1.14.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.14.0)于 05:41 发布 Git Sync 页面、云后端完整文件树、backend scope 保留和 LLM 配置预检；证据覆盖开源发行版，不据此推断 OpenHands Cloud 采用规模。
5. **Cloudflare Agents 与 OpenViking 继续下沉运行控制面。** [Cloudflare Agents 0.21.0](https://github.com/cloudflare/agents/releases/tag/agents%400.21.0)加入子 Agent 路由、Workflow retention、流式转发与遥测；[OpenViking durable source job](https://github.com/volcengine/OpenViking/commit/67603473a5a67c2ac7d4ccc6d22a8190004c5c39)把 `wait=false` 导入改为持久入队和后台处理。后者只是主分支工程信号，未证明 AgentKit 云端 rollout。
6. **Codex 增加远程执行器转发模式。** [exec-server forward commit](https://github.com/openai/codex/commit/77e688960196dbc82bbeb00c844d2555a61925aa)把既有 WebSocket exec-server 注册为远程环境，并为每条认证 relay stream 建立独立目的连接；目标端仍掌管 session、进程与恢复，转发器不持久化执行状态。这是 02:15 合入的主分支开发信号，尚非产品发布或云端启用，**详见 OpenAI 专题页**。
7. **Codex 0.148.0 转为稳定发布。** [官方 release](https://github.com/openai/codex/releases/tag/rust-v0.148.0)于 06:26 发布，发行说明汇总 gRPC code-mode sessions、持久线程恢复、远程 exec 与审批/Guardian 等控制面改动；发布页不证明 Codex cloud 已同步启用，**详见 OpenAI 专题页**。
8. **Claude 补强后台与跨会话执行。** [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)降低后台 cloud session 事件流开销、限制过大跨会话消息并统一 Remote Control 企业网关检查；[Agent SDK Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)加入 subagent 文本转发、结构化错误、MCP 2.x 与取消支持，**详见 Claude 专题页**。
9. **Microsoft 强化连续性与 fail-closed。** [AG-UI run continuity](https://github.com/microsoft/agent-framework/commit/e6536fb45915b1d91e8702e43dcfe31d9b671561)持久化 checkpoint 所有权；[MiddlewareFailure](https://github.com/microsoft/agent-framework/commit/58da0cc2534b0e5350bd1a83d75f363a08c3103d)让策略失败终止整批工具调用并结清 service-managed conversation 的悬空调用。两项均未进入新 release。
10. **07:20 后控制面继续收紧异步沟通、认证与环境边界。** Codex 主分支加入[异步用户消息工具](https://github.com/openai/codex/commit/71dbf72b0576f9e7be1ef28d275bc79ece6d4b6c)、[header 认证工作区限制](https://github.com/openai/codex/commit/b537d5a0970f9d3153b1e647e2b42deed32555e0)、[hook MCP 连接复用](https://github.com/openai/codex/commit/d35e5495f991508409ff30e38db8dbe49d565570)与[环境 MCP 策略](https://github.com/openai/codex/commit/fde2156057c38c0227ce94c8514d04c7498df60d)；均未进入稳定 release 或证明云端启用，**详见 OpenAI 专题页**。
11. **10:12–13:12 增量集中在会话隔离、恢复与沙箱生命周期。** Codex [按 thread 隔离审批](https://github.com/openai/codex/commit/8843960ba06b1b2570e689f3fff354c324ab2417)并[把同名排队请求指向最近会话](https://github.com/openai/codex/commit/14a8ac89af0a3c9033c1fa4d747ec5d6333e9890)；Microsoft Agent Framework 修复[JSON 工作流恢复载荷](https://github.com/microsoft/agent-framework/commit/e74ac4613c2d7b8653457dd94c26a67f572c74d7)与[会话历史超线性增长](https://github.com/microsoft/agent-framework/commit/da11daebe51ef70a03908f610165714a17491da4)。四项均是主分支 commit、尚未进入新 release；Codex 两项**详见 OpenAI 专题页**。

## 远程 / 云端 Agent 执行

| 动态 | 执行形态 | AaaS 含义 | 证据状态 |
|---|---|---|---|
| Microsoft Agent Framework .NET 1.18.0 | Foundry hosted sandbox、会话、用户身份、并发工具 | 多用户受管沙箱连续性与身份隔离 | 官方 release、主窗口内 |
| Codex exec-server forward | Noise relay 到既有 WebSocket 执行器 | 远程环境可复用独立执行后端与其 session retention | 主分支 commit；无 release/rollout；详见 OpenAI 专题页 |
| Microsoft session-persisted routing | 路由选择写入 Agent session | 长会话恢复后维持相同模型路由 | 主分支 commit；尚未发布 |
| Google ADK relay fencing | 跨 Agent 消息以显式数据边界转交 | 降低低权限入口向高权限 Agent 注入指令的结构歧义 | 主分支 commit；官方说明未宣称完全消除风险 |
| Vercel WorkflowAgent 1.0.68 | durable model step 与工作流重试 | 长任务错误与重试边界更清晰 | 官方 release；未证明托管层 rollout |
| OpenHands 1.14.0 | Automations、Git Sync、cloud backend 文件树 | 云端编码会话和仓库同步能力 | 官方 release、主窗口内 |
| Cloudflare Agents 0.21.0 | Workers/Durable Objects、子 Agent、Workflow、Browser | 路由、持久性、流式转发与遥测 | 官方 release、主窗口内 |
| Claude Code Remote Control | Desktop/VS Code 与手机、网页联动 | 权限、模型、文件与 effort 跨端同步 | 官方 release、主窗口内；详见 Claude 专题页 |
| OpenViking durable source job | task_id、持久队列、后台下载/解析/向量化 | 异步任务可恢复与状态可查 | 官方主分支 commit；未证明托管发布 |
| Codex 0.148.0 | gRPC code-mode、持久线程、远程 exec 与审批控制面 | 稳定 CLI / app-server 发行版连接多种远程执行能力 | 官方 release；未证明 Codex cloud rollout；详见 OpenAI 专题页 |
| Codex 异步消息 / 环境 MCP 策略 | turn 内异步用户更新、当前 MCP 连接集、环境级工具过滤 | 长任务可持续汇报，同时将托管环境与工作区策略下沉到执行控制面 | 主分支 commits；尚未进入稳定 release；详见 OpenAI 专题页 |
| Claude Code / Agent SDK | 后台 cloud session、跨会话消息、Remote Control、subagent/MCP | 后台任务资源、远程接入和嵌套 Agent 流更可控 | 官方 release；详见 Claude 专题页 |
| Microsoft AG-UI / MiddlewareFailure | checkpoint 所有权与 fail-closed 工具批次 | 恢复连续性与策略失败后的会话结清 | 主分支 commits；尚未发布 |
| Google ADK | Live resumption handle、后台 tool task 回收 | 会话恢复与运行结束边界 | 官方 release；未证明 Vertex/Jules 同步发布 |
| pi-wake | SSH watcher、持久 outbox、同 session resume | 自托管长任务唤醒与至少一次交付 | 原仓库、主窗口内；不是托管服务 |
| Replit 黑盒渗透测试 | 托管应用扫描与 Agent 修复 | 安全验证进入托管构建生命周期 | 官方、24–72 小时 |
| Cumora Cloud | 每 Agent Pod、工作区、团队协调、成本台账 | 受管执行与运维 | 原仓库、24–72 小时；商业规模未验证 |
| Codex 会话队列与审批隔离 | 最近同名会话选择、thread+approval 双键 | 并发后台线程不会误处理另一线程审批，异步排队定位更确定 | 主分支 commits；尚未发布；详见 OpenAI 专题页 |
| Microsoft 工作流恢复与历史持久化 | AG-UI JSON resume coercion、序列感知消息去重 | 跨进程恢复类型更稳定，长会话历史不再超线性膨胀 | 主分支 commits；尚未发布 |
| OpenViking 上传任务统计 | 完成任务返回上传归属的 context_count | 异步资源导入结果更可观测 | 主分支 commit；未证明 AgentKit 云端 rollout |

### OpenAI 控制面开发信号（尚非产品发布）

- **10:12–13:12 新增。** [审批请求按 thread 隔离](https://github.com/openai/codex/commit/8843960ba06b1b2570e689f3fff354c324ab2417)避免并发主/后台线程因相同 approval ID 误解析、误提交或误关闭；[同名排队选择最近会话](https://github.com/openai/codex/commit/14a8ac89af0a3c9033c1fa4d747ec5d6333e9890)覆盖非交互和自定义来源 session；[Bedrock 过期凭据刷新](https://github.com/openai/codex/commit/3929c99a97d1aa0fb8000903a4b57b24fbabe742)对匹配 provider 共享刷新状态并重签重试；[旧 Bubblewrap 的 FD mount 兼容](https://github.com/openai/codex/commit/6cc2ba8a9567e3083531283f923127b86a6c5908)保留 inode 校验并拒绝重复、错配或符号链接替换。四项均未进入稳定 release，不能写成 Codex cloud rollout，**详见 OpenAI 专题页**。
- **07:20–10:12 新增。** [异步用户消息工具](https://github.com/openai/codex/commit/71dbf72b0576f9e7be1ef28d275bc79ece6d4b6c)让根 Agent 在 turn 继续运行时发出不回填模型上下文的用户可见更新；[header 认证工作区限制](https://github.com/openai/codex/commit/b537d5a0970f9d3153b1e647e2b42deed32555e0)拒绝缺失或不允许的 ChatGPT workspace；[hook MCP 连接复用](https://github.com/openai/codex/commit/d35e5495f991508409ff30e38db8dbe49d565570)避免 hook 等待重连并按更短 timeout 执行；[环境 MCP 策略](https://github.com/openai/codex/commit/fde2156057c38c0227ce94c8514d04c7498df60d)把环境过滤应用到工具暴露、OAuth、遥测和 Skill 依赖。同期 [0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)为无功能说明的预发布；这些证据均不证明 Codex cloud rollout，**详见 OpenAI 专题页**。
- **04:11 后新增。** [Codex 0.148.0](https://github.com/openai/codex/releases/tag/rust-v0.148.0)是稳定 release，但发布页只证明 CLI/app-server 发行版；[异步消息 delivery 元数据](https://github.com/openai/codex/commit/fb356f3d2c9fa05f9b06771f8e3c877ca66ed330)让不结束当前 turn 的用户可见消息在历史、重放与 schema 中保留标记；[托管配置参与项目发现](https://github.com/openai/codex/commit/6ec012668b0decdd4506e376f0553816ab684e67)把 MDM/managed-file 信任与根目录规则纳入 app-server 和远程 TUI；[Guardian v2 分类失败关闭](https://github.com/openai/codex/commit/c97bd2dcb52a8120d96086fac49665452af3161b)在无法评分时回退到严格审批。三项 commits 均晚于 release tag，尚未发布，**详见 OpenAI 专题页**。
- **01:12–04:11 新增。** [exec-server forward](https://github.com/openai/codex/commit/77e688960196dbc82bbeb00c844d2555a61925aa)连接认证 Noise relay 与既有 WebSocket 执行器；[remote plugin bundle 去重](https://github.com/openai/codex/commit/a998c7a1ce88a521d319a4f336e0a4bf36095637)限制同缓存根的后台同步；[permission profile 安全交集](https://github.com/openai/codex/commit/19d185fec8e1216ddd7b5522b331d69a6ecf3b1c)对文件、网络和拒绝路径取更严格策略；[Guardian v2 风险分类](https://github.com/openai/codex/commit/846a16852f6bcd155d552236d4d893749c6130e6)与[Node REPL 评审策略](https://github.com/openai/codex/commit/4a3e829c56415f8c1e69b18fbe74f4d81eaa926a)扩展默认评审和浏览器/Computer Use 审批上下文。五项均是 01:42–03:22 主分支 commits，没有正式 release 或云端启用范围，**详见 OpenAI 专题页**。
- [memory workspace 拒绝符号链接](https://github.com/openai/codex/commit/a04940cb12cca43510aaf8d601ce42352f0902cb)、[PowerShell fail-closed lowerer](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd)、[自定义 provider 不继承环境认证](https://github.com/openai/codex/commit/e13c1d569d953ecac06a09cf5663fb3cd405636d)和[外部 Agent 迁移跳过重定向目标](https://github.com/openai/codex/commit/2a30972fcb646f9d6bfed6de6606aa3f0f8c3dd2)集中收紧文件、命令、认证与仓库边界。
- [Guardian 认证变化后重连 WebSocket](https://github.com/openai/codex/commit/76ceaddb29444388fbbbae07c46f7e8849f9658b)、[v2 审批评审指标](https://github.com/openai/codex/commit/e7e13c68e224da4dde35fc685ea2a2ab1a62dc9d)与[node_repl 截图纳入评审](https://github.com/openai/codex/commit/9b9b614b02ba04df55479284749c5cbbed695c24)分别覆盖认证刷新、评分滞后和多模态审查来源。
- 此前窗口内的权限画像、resume/fork、strict review、远程压缩、MCP provenance、沙箱验证与敏感文件读取 commits 仍在今日 24 小时主窗口；它们和两个 0.148.0 alpha 页面都没有正式功能说明或云端启用范围。以上均**详见 OpenAI 专题页**。

## 海外厂商

### 主窗口内

- **Microsoft 会话恢复与历史持久化。** [JSON workflow resume commit](https://github.com/microsoft/agent-framework/commit/e74ac4613c2d7b8653457dd94c26a67f572c74d7)递归按声明类型转换 AG-UI 的普通 JSON 恢复载荷；[history dedup commit](https://github.com/microsoft/agent-framework/commit/da11daebe51ef70a03908f610165714a17491da4)用序列感知过滤避免 `save_messages` 反复保存已有消息而产生超线性增长。两项均为 12:20–12:40 主分支信号，尚未发布。
- **Claude 后台与 Agent SDK。** [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)改进后台 cloud session 资源占用、跨会话消息拒绝与 Remote Control 企业网关检查；[Agent SDK Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)正式发布 subagent 流转发、MCP 2.x 兼容/取消、结构化 ResultError 与父 tool-use ID 恢复，**详见 Claude 专题页**。
- **Microsoft AG-UI 与中间件。** [run continuity commit](https://github.com/microsoft/agent-framework/commit/e6536fb45915b1d91e8702e43dcfe31d9b671561)调整 continuation/checkpoint ownership 并持久化；[MiddlewareFailure commit](https://github.com/microsoft/agent-framework/commit/58da0cc2534b0e5350bd1a83d75f363a08c3103d)为 guardrail 提供 fail-closed 退出，并在 service-managed conversation 上结清悬空 function call。均未进入 release。
- **Microsoft 会话路由。** [Agent Framework commit](https://github.com/microsoft/agent-framework/commit/4be584cc53b2094d5a5fa1aa96bf33f126f7f33b)新增 `RoutePersistingRoutingChatClient`，把路由决策写入 Agent session；它可能改善长会话/恢复时的模型一致性，但尚未进入新 release。
- **Google ADK 跨 Agent 转交防护。** [官方 commit](https://github.com/google/adk-python/commit/9ffe8be6f92fae76541cc948c38c5ef5dc3755b9)把其他 Agent 的文本、思考、工具参数和结果包在显式数据标记内，避免转交内容在结构上与真实用户指令不可区分；提交说明明确承认模型仍可能被说服，因此只写成缓解而非彻底修复。
- **Deep Agents 长任务与快照。** [offload 可中断 commit](https://github.com/langchain-ai/deepagents/commit/ab82d48cc012c5a991660ad53785c2e26030596e)允许取消卡住的 `/offload`/`/compact`；[QuickJS snapshot HMAC commit](https://github.com/langchain-ai/deepagents/commit/749b386f97ed7b920acfd5936b01f8c425976d92)为 thread 模式快照增加可选签名校验。两项均未进入 release，分别属于长任务控制与执行状态完整性信号。
- **Deep Agents Code。** [0.1.57](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.57)加入 ACP 审批模式、恢复线程修复、长会话成本提醒、MCP reload 与 offload 上下文改进；[resume trace commit](https://github.com/langchain-ai/deepagents/commit/345859e8e13d5b48348efebd0a48bfb4d3fbf132)随后把多次审批恢复、headless 和 offload 轮次标为同一用户 turn，便于 LangSmith 分组。前者是 CLI release，后者尚未发布。
- **Cloudflare 追踪兼容。** [主分支 commit](https://github.com/cloudflare/agents/commit/bf94bb2f8242f2ad46f6c6c88e56ee5e196cc706)对旧 workerd 的部分 tracing API 做能力检测，无法启动 span 时降级为空 tracer；它晚于 0.21.0 release，不能写成已发布修复。
- **Docker 沙箱安全。** [官方文章](https://www.docker.com/blog/coding-agent-horror-stories-the-command-you-already-approved/)于 21:00 发布，讨论已批准命令仍会运行攻击者内容，并将隔离边界放在 Agent sandbox；这是 PaaS/运行时安全邻近信号。
- **Composio CLI beta。** [0.3.4-beta.355](https://github.com/ComposioHQ/composio/releases/tag/%40composio%2Fcli%400.3.4-beta.355)校验来自不可信输入的路径和 API 返回 URL；属于工具连接层安全信号，不是托管 Agent 发布。
- **Composio 会话工具路由。** [Core 0.17.0](https://github.com/ComposioHQ/composio/releases/tag/%40composio%2Fcore%400.17.0)允许 Anthropic/OpenAI provider helper 通过 Tool Router session 执行，使 session meta-tools 保留上下文，并为 API 返回的下载/上传 URL 增加 SSRF 防护；属于连接层 SDK release，不是托管 Agent 服务。
- **Google ADK 视频模态。** [主分支 commit](https://github.com/google/adk-python/commit/dd998a7d5352225b944806abfe0fc7f463abbf38)允许 ADK API server 接收 VIDEO modality；没有 release 或 Vertex/Jules rollout 证据。
- **Semantic Kernel。** [.NET 1.80.0](https://github.com/microsoft/semantic-kernel/releases/tag/dotnet-1.80.0)主要调整 OpenAPI client、Gemini function list 与向量依赖，未显示受管执行层变化。

### 24–72 小时观察

- [Replit 黑盒渗透测试](https://replit.com/blog/black-box-pen-tests)发布于 2026-08-18 00:52，已比今日主窗口早 20 分钟；Level 3 并行白盒/黑盒检查，确认问题可交给 Agent 修复。
- [Cumora](https://github.com/yetone/cumora)创建于 2026-08-17 17:13，README 描述每 Agent 托管 Pod、工具循环与成本台账，商业规模和 SLA 未验证。
- [Replit 企业治理](https://replit.com/blog/new-enterprise-governance-tools)发布于 2026-08-17 07:57，加入 Agent 审计事件、SIEM 输出与 Admin API beta。
- [Coze Loop 异步 CustomRPC evaluator](https://github.com/coze-dev/coze-loop/commit/d3b797b4c5cc5b7ebde858d2da5eb5dab2497e60)与[Speko HN 发现帖](https://news.ycombinator.com/item?id=49332751)都位于观察窗；前者是评测工程，后者只能证明社区发现时间。

### 较旧观察

- [Red Hat Day 0–2 蓝图](https://www.redhat.com/en/blog/operationalizing-agentic-ai-day-0-2-blueprint-enterprise-infrastructure)发布于 8 月 11 日，描述 BYOA、受治理沙箱、框架 starter kits 与生产治理，是较旧平台基线。
- [Cloudflare @cloudflare/computer](https://blog.cloudflare.com/cloudflare-computer/)是 isolate、container、browser 与持久文件系统统一运行时的较旧架构基线。
- [Forklane](https://forklane.ai/)与[HN Public Beta 发现帖](https://news.ycombinator.com/item?id=49291014)显示共享代码库、实时会话与任务板候选，但官方页缺少托管执行边界和发布日期。
- [华为云 AgentRun](https://www.huaweicloud.com/product/servicestage/agentrun.html)是全托管运行时、断点续传、沙箱与可观测的较旧官方基线。

## 中国厂商（字节跳动重点）

- **字节 OpenViking 异步任务与 SDK。** [上传任务 context_count](https://github.com/volcengine/OpenViking/commit/da138de7cea1ceda014608dd9c3e9d43c0a498dc)在完成的 `add_resource` task 中暴露幂等统计；[tree level limit](https://github.com/volcengine/OpenViking/commit/9a5b47a2ce213087e21dfcca05f82dd4f36d622b)把已有树深度契约补齐到 Python/TypeScript/Go SDK；[pathlock config error](https://github.com/volcengine/OpenViking/commit/d88967aaeb969106ed3e77249bb3ef8248a03ebb)让缺少 manager 的 multi-write/raw copy 返回明确配置错误而非 panic。三项是 10:32–12:21 主分支工程信号，未证明 AgentKit 云端 rollout。
- **字节 Coze Loop 评测控制面。** [官方 commit](https://github.com/coze-dev/coze-loop/commit/2bf8536159a5f9e4c166849c5d1a8b7bb3014123)让异步评测上下文 TTL 跟随空间配置、把 sandbox 日志 URL 暴露到标准结果，并修复共享评测集过滤全表扫描/分页不稳定；是 11:43 合入的开源评测工程信号，未证明 Coze 托管服务上线。
- **腾讯 CubeSandbox 模板别名。** [官方 commit](https://github.com/TencentCloud/CubeSandbox/commit/c868f9acc8da811622f4139a2887940cb0042f49)增加对已有模板设置、转移或清除 alias 的事务化控制，并处理并发抢占与 redo 同步；属于沙箱/PaaS 生命周期，不证明腾讯 ADP rollout。
- **OpenSandbox FastPath 与运维。** [fleet create/status mapping](https://github.com/opensandbox-group/OpenSandbox/commit/28984f714f44c934bab90e10827e2bdd3eb77b4a)把创建请求、资源与生命周期映射到 FastPath v2；[HTTP OTLP metrics](https://github.com/opensandbox-group/OpenSandbox/commit/426300f86a9437fc5a3302f89956dc477595997e)补充服务端请求观测；[chart 0.2.2 修复](https://github.com/opensandbox-group/OpenSandbox/commit/8f01e935c2cabba778cf37a152033fae062fa0f4)避免默认 containerd socket 导致 controller crash-loop；[CPU 校验 PR](https://github.com/opensandbox-group/OpenSandbox/pull/1568)拒绝 NaN、无穷与溢出的 CPU limits。四项均属开源沙箱/PaaS 主分支，不写成阿里云 AaaS 发布。
- **火山 veADK DeepSeek Harness 沙箱信息。** [主分支 commit](https://github.com/volcengine/veadk-python/commit/f3eccd4c7d0084721c4fc826f1cb65df4308934d)在 Studio system info 中加入 `deepseek_harness` 与 snapshot 类型并固定沙箱工具展示顺序；这是 09:57 合入的前端/CLI 工程信号，没有 veADK 或 AgentKit 云端 rollout 证据。
- **OpenSandbox 容器安全上下文。** [合并 PR](https://github.com/opensandbox-group/OpenSandbox/pull/1564)修复 BatchSandbox 从模板生成 Pod 时丢失容器级 `securityContext` 的问题；它改善 Kubernetes 沙箱隔离配置传递，但仍属于开源 PaaS/运行时主分支，不是阿里云 AaaS 发布。
- **OpenSandbox FastPath。** [官方 commit](https://github.com/opensandbox-group/OpenSandbox/commit/415259e527d2d692deffda80a50faddd046bf49c)新增面向 fast-sandbox backend 的 FastPath v2 gRPC client、类型化错误与 RPC deadline；这是 Alibaba 发起的开源沙箱运行时主分支信号，不证明阿里云 AaaS 服务已 rollout。
- **OpenViking 异步生命周期。** [durable source job commit](https://github.com/volcengine/OpenViking/commit/67603473a5a67c2ac7d4ccc6d22a8190004c5c39)把 `wait=false` 资源导入前移到持久入队，后台完成下载、解析、语义理解与向量化；[计划层级 commit](https://github.com/volcengine/OpenViking/commit/3590b47a25bd008068e35c8423149e3baa3203b8)为火山/BytePlus 增加 Agent/Coding Plan 和按量 API 入口。前者是异步控制面信号，后者更接近 MaaS 商业接入。
- **OpenViking 0.4.15。** [官方 release](https://github.com/volcengine/OpenViking/releases/tag/v0.4.15)修复 xxhash 4.x 可导致向量未落库却误报任务完成的问题；这是本地记忆/召回可靠性更新。
- **火山 veADK 与 OpenViking Remote Skills。** [veADK commit](https://github.com/volcengine/veadk-python/commit/0bbfc1ab119618b68c30c7fd8d2d62f744488205)增加远程 Skills manifest、schema 校验、超时和执行代理；[OpenViking commit](https://github.com/volcengine/OpenViking/commit/e3c8e56fea818bcabe675b98ebff11d687851ae7)增加远程 Skill 摘要、缓存、本地物化边界与策略交集。两者都没有 release 或 AgentKit 云端 rollout。
- **AgentKit 样例。** [Situla v0.1.1](https://github.com/bytedance/agentkit-samples/commit/df534245143acbd38ac68d4e6753ecf227da3bef)加入 session snapshot restore、sandbox preview 与更长 turn timeout；[Ark CUA Skill](https://github.com/bytedance/agentkit-samples/commit/e9dd57f93b72e296a870fae46132080d1b924a67)进入 SkillHub。只证明公开样例仓库变化。
- **veADK-Python 1.1.2（24–72 小时）。** [官方 release](https://github.com/volcengine/veadk-python/releases/tag/1.1.2)加入用量统计、可唤醒沙箱快照、IAM 预检、生成物持久化和可恢复的本地到云端交接。
- **腾讯邻近信号。** [CubeSandbox egress commit](https://github.com/TencentCloud/CubeSandbox/commit/a59396362cc957cda2f87014e7cc10782723de2e)支持 L7 规则自定义端口与 scheme；它属于沙箱网络/PaaS，未证明 ADP 托管层同步发布。
- 本轮增量再次检查字节 Coze、AgentKit、Doubao、Trae、Seed 与 veADK/OpenViking 官方仓库；07:20–10:12 仅核实 veADK 的 DeepSeek Harness system-info commit，未发现 AgentKit 云端 release。阿里侧新增 OpenSandbox `securityContext` 合并修复；腾讯、百度、华为、智谱、Moonshot/Kimi、MiniMax、DeepSeek 的官方入口仍未发现主窗口内可核实的托管服务 GA、定价或 SLA 更新。

## AaaS 与 MaaS/PaaS 分类说明

- AaaS 至少包含托管/受管执行、异步任务、隔离环境、生命周期、编排、可观测、企业治理或远程编码之一。Microsoft Foundry hosted session 是直接 AaaS 信号；OpenHands cloud backend、Cloudflare Agents 与 Replit 托管闭环也连接明确运行层。
- 模型 API、路由和 plan 套餐属于 MaaS；容器、网络、沙箱和本地 VectorDB 属于 PaaS/运行时。Vercel WorkflowAgent、Deep Agents、Google ADK、OpenViking 与 Codex 主分支 commits 可作为相关工程信号，但不能冒充托管服务发布。
- SDK、CLI 或主分支 commit 只有在明确连接受管运行层时才进入正文，并保留“尚未发布/未证明 rollout”限制。

## 日期未确认

- **Octomind 0.44.2。** [官方文章](https://octomind.run/blog/octomind-0-44-2-release)只给 2026-08-18 日期，没有精确时刻；它描述跨重启保存验证策略、证据 ledger 与计划状态，并增加 monitor、会话恢复和 MCP 进度感知超时，因此作为强相关候选保留，但不计入精确 24 小时已验证发布。
- **Cursor Origin Code Hosting。** [官方 Changelog](https://cursor.com/changelog/origin-code-hosting)只标注 2026-08-17，描述托管仓库、PR、GitHub 同步与仓库内 Agent 操作。
- **Qoder Cloud Agents。** [官方页](https://qoder.com/zh/cloud-agents)描述全托管运行、独立 Sandbox、长程执行、断点恢复与 SSE 可观测，但页面无发布时间。
- **中国托管平台基线。** [腾讯云 ADP](https://cloud.tencent.cn/product/adp)、[火山 AgentKit](https://www.volcengine.com/product/agentkit)、[天翼云智能体引擎](https://www.ctyun.cn/products/age)、[华为 AgentArts](https://www.huaweicloud.com/product/agentarts)与[百度千帆 Agent 开发平台](https://cloud.baidu.com/doc/AppBuilder/s/Em35m1zob)都有官方能力页，均未显示本轮发布时间。
- **WorkToper。** [厂商页](https://www.worktoper.com/)直连仍为 HTTP 403，搜索索引快照仅能支持云端 Agent OS、IDE、沙箱和持续在线任务的厂商自述；缺少日期、公司披露与第二来源。

## 未证实传闻

- **AgentHub/agent commerce（单一来源，来源数：1）。** [Reddit 原帖](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)由相关方账号称测试 Agent 身份/支付验证，并转述本人也无法确认的交易额说法。缺少官方公告、支付方或第二来源，不把规模、交易额或 beta 状态写成事实。

## 邻近信号观察池

- **10:12–13:12 沙箱控制面。** Codex [旧 Bubblewrap FD mount 兼容](https://github.com/openai/codex/commit/6cc2ba8a9567e3083531283f923127b86a6c5908)（详见 OpenAI 专题页）、CubeSandbox [模板 alias 生命周期](https://github.com/TencentCloud/CubeSandbox/commit/c868f9acc8da811622f4139a2887940cb0042f49)、OpenSandbox [FastPath fleet mapping](https://github.com/opensandbox-group/OpenSandbox/commit/28984f714f44c934bab90e10827e2bdd3eb77b4a)、[OTLP HTTP metrics](https://github.com/opensandbox-group/OpenSandbox/commit/426300f86a9437fc5a3302f89956dc477595997e)、[chart 0.2.2](https://github.com/opensandbox-group/OpenSandbox/commit/8f01e935c2cabba778cf37a152033fae062fa0f4)和[CPU limits 校验](https://github.com/opensandbox-group/OpenSandbox/pull/1568)都改善隔离环境兼容、生命周期或观测，但仍是 PaaS/本地运行时证据。
- **沙箱与工具连接层。** [OpenSandbox FastPath commit](https://github.com/opensandbox-group/OpenSandbox/commit/415259e527d2d692deffda80a50faddd046bf49c)与[容器 securityContext 修复](https://github.com/opensandbox-group/OpenSandbox/pull/1564)属于 PaaS/运行时；[Composio Core 0.17.0](https://github.com/ComposioHQ/composio/releases/tag/%40composio%2Fcore%400.17.0)属于 session-aware tool router/连接层。三项都不写成托管 Agent 服务上线。
- **MaaS/模型接入。** [OpenViking 火山/BytePlus plan commit](https://github.com/volcengine/OpenViking/commit/3590b47a25bd008068e35c8423149e3baa3203b8)、[Amazon Bedrock 跨区 OpenAI 模型](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-cross-region-openai-v2/)、[Cloudflare Workers AI Qwen](https://developers.cloudflare.com/changelog/post/2026-08-17-qwen-3.8-27b-workers-ai/)与[腾讯 youtu 模型切换公告](https://cloud.tencent.com/announce/detail/2393)都更接近模型或兼容性层。
- **语音路由与自托管沙箱。** [Speko](https://speko.ai/)提供语音模型 gateway；[h5i](https://github.com/h5i-dev/h5i)明确声明 no hosted sandbox/no SaaS，[社区发现帖](https://www.reddit.com/r/ClaudeAI/comments/1vqupxf/selfhosted_sandbox_for_coding_agents/)只作为窗口内发现证据。
- **Docker sandbox 与 CubeSandbox。** Docker 的[安全文章](https://www.docker.com/blog/coding-agent-horror-stories-the-command-you-already-approved/)和腾讯的[网络策略 commit](https://github.com/TencentCloud/CubeSandbox/commit/a59396362cc957cda2f87014e7cc10782723de2e)都指向隔离边界，属于 PaaS/运行时而不是 Agent 生命周期服务。
- **Harness 活动。** [官方活动页](https://www.harness.io/events/autonomous-worker-agents-live)的直播时间为 2026-08-19 01:00，落在截止前 12 分钟；页面描述 OPA、RBAC 与审计轨迹，但活动页面不是功能发布证据。
- **较旧中国公告。** [腾讯 ADP 认证升级公告](https://cloud.tencent.com/announce/detail/2409)实际发布于 8 月 3 日，只是 8 月 18 日生效，不列为今日发布。

## 趋势

- **并发长任务的控制键从单一 ID 扩展到会话作用域。** Codex 用 thread+approval 双键隔离审批，并对同名异步排队选择最近会话；Microsoft 则把 JSON 恢复载荷和消息序列持久化做得更确定。它们都只是主分支开发信号。
- **中国开源 Agent 基础设施补齐“任务结果—评测日志—沙箱生命周期”链路。** OpenViking 暴露上传 context_count，Coze Loop 改善异步评测 TTL 与 sandbox 日志，OpenSandbox/CubeSandbox 加强 fleet、模板与观测；这些不能外推为 AgentKit、Coze、ADP 或阿里云托管服务 rollout。
- **稳定发行版开始打包此前分散的远程控制面。** Codex 0.148.0 把 gRPC code-mode、远程 exec、持久线程与审批/Guardian 汇入稳定版；Claude 同轮把后台 cloud session 和 Agent SDK 嵌套流控制推进到正式 release，但两者都不能据此推断云服务端 rollout。
- **会话连续性与失败结清正在变成显式协议。** Microsoft AG-UI checkpoint ownership、MiddlewareFailure 的悬空调用结清，以及 Codex 异步 delivery 元数据与异步用户消息工具都在减少恢复、长任务汇报或策略失败后的状态歧义。
- **远程执行控制面正在拆分注册、转发与状态所有权。** Codex forwarder 只转发认证 payload，session、进程与恢复仍由目的执行器持有；Microsoft 则把模型路由选择持久化到 session。两者都尚未正式发布。
- **跨 Agent 边界开始同时处理权限、身份与工具来源。** Google ADK 给转交内容加数据围栏，Codex 对 permission profile 求更严格交集、校验 workspace 身份并应用环境 MCP policy；这些是工程信号，不据此推断云端已启用。
- **托管沙箱开始显式拆分连续性、会话轨迹与用户隔离。** Microsoft 1.18.0 的 hosted session/user identity 是最直接证据；Codex 的认证和路径边界 commits 说明控制面安全仍在快速下沉。
- **durable Agent 执行从“能恢复”走向“能解释重试和观测”。** Vercel WorkflowAgent、OpenViking durable job、Deep Agents resume trace、Google ADK 与 pi-wake 分别覆盖重试、队列、追踪、回收和唤醒。
- **正式 release 与主分支开发信号必须分开。** Microsoft、Deep Agents、OpenHands、Cloudflare、Vercel 是 release；OpenAI Guardian、OpenViking 23:22/23:31 和 Cloudflare 23:19 仍只是 commits。
- 样本包含 release、官方文章、主分支 commits、样例、静态产品页、社区发现和单源传闻；不据此推断市场份额、收入、采用规模或成熟度。

## 来源链接

1. [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)
2. [Deep Agents 0.7.7](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.7)
3. [@ai-sdk/workflow 1.0.68](https://github.com/vercel/ai/releases/tag/%40ai-sdk%2Fworkflow%401.0.68)
4. [OpenHands v1.14.0](https://github.com/OpenHands/OpenHands/releases/tag/v1.14.0)
5. [Cloudflare Agents SDK 0.21.0](https://github.com/cloudflare/agents/releases/tag/agents%400.21.0)
6. [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)（详见 Claude 专题页）
7. [Black-box pen tests on Replit](https://replit.com/blog/black-box-pen-tests)
8. [Cumora](https://github.com/yetone/cumora)
9. [pi-wake](https://github.com/Jasperxjy/pi-wake)
10. [Persist active permission profiles in turn context](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)（详见 OpenAI 专题页）
11. [Restore permission profiles on resume and fork](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)（详见 OpenAI 专题页）
12. [Guardian strict review notification](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)（详见 OpenAI 专题页）
13. [Govern Replit at scale](https://replit.com/blog/new-enterprise-governance-tools)
14. [Your agent needs a computer, not a container — introducing @cloudflare/computer](https://blog.cloudflare.com/cloudflare-computer/)
15. [Origin Code Hosting](https://cursor.com/changelog/origin-code-hosting)
16. [腾讯云智能体开发平台 AI 应用工程师认证升级公告](https://cloud.tencent.com/announce/detail/2409)
17. [Agent-to-agent to hit $1.5B by 2030](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)
18. [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)（详见 OpenAI 专题页）
19. [Refresh collaboration instructions when content changes](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)（详见 OpenAI 专题页）
20. [Prevent Marketplace identity spoofing](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)（详见 OpenAI 专题页）
21. [Autonomous Worker Agents, Live: Governed AI That Ships](https://www.harness.io/events/autonomous-worker-agents-live)
22. [Google ADK-Python v1.39.0](https://github.com/google/adk-python/releases/tag/v1.39.0)
23. [Google ADK-Python v2.7.1](https://github.com/google/adk-python/releases/tag/v2.7.1)
24. [Drop descendant progress updates after remote compaction](https://github.com/openai/codex/commit/711a5f8b3a6eb40134146ae9ec22fdcdda5e3170)（详见 OpenAI 专题页）
25. [Skip empty user messages for automatic idle turns](https://github.com/openai/codex/commit/63b268c81b28bb65203afdc57862efaa3879998b)（详见 OpenAI 专题页）
26. [veADK-Python 1.1.2](https://github.com/volcengine/veadk-python/releases/tag/1.1.2)
27. [Amazon Bedrock expands API support and introduces Cross Region Inferencing for OpenAI models](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-cross-region-openai-v2/)
28. [Qwen 3.8 27B now available on Workers AI](https://developers.cloudflare.com/changelog/post/2026-08-17-qwen-3.8-27b-workers-ai/)
29. [关于 youtu-agent 及 youtu-mrc-pro 模型升级及切换安排的公告](https://cloud.tencent.com/announce/detail/2393)
30. [Codex 0.148.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.22)（详见 OpenAI 专题页）
31. [Add a symlink-safe reader for sensitive files](https://github.com/openai/codex/commit/b5ea64a203ce1b04629010d3ef0a0d18c3c870a9)（详见 OpenAI 专题页）
32. [Preserve MCP resource origins across compaction](https://github.com/openai/codex/commit/a397079287e6638b39dda329835350d93222681f)（详见 OpenAI 专题页）
33. [Keep Codex verification for development sandboxed](https://github.com/openai/openai-agents-python/commit/ebb746dc00b0dd6a90c30bc5ccb7e9c445e55493)（详见 OpenAI 专题页）
34. [Scope MCP app resource reads to their originating call](https://github.com/openai/codex/commit/880f1135ea5902f85d7c13d60ee01d61334b6ad9)（详见 OpenAI 专题页）
35. [Add remote skills proxy wrapper](https://github.com/volcengine/veadk-python/commit/0bbfc1ab119618b68c30c7fd8d2d62f744488205)
36. [Support OpenViking remote skills](https://github.com/volcengine/OpenViking/commit/e3c8e56fea818bcabe675b98ebff11d687851ae7)
37. [Update Situla sample to v0.1.1](https://github.com/bytedance/agentkit-samples/commit/df534245143acbd38ac68d4e6753ecf227da3bef)
38. [Add ark-cua skill to SkillHub](https://github.com/bytedance/agentkit-samples/commit/e9dd57f93b72e296a870fae46132080d1b924a67)
39. [Support async CustomRPC evaluators](https://github.com/coze-dev/coze-loop/commit/d3b797b4c5cc5b7ebde858d2da5eb5dab2497e60)
40. [Support custom L7 port and scheme in egress rules](https://github.com/TencentCloud/CubeSandbox/commit/a59396362cc957cda2f87014e7cc10782723de2e)
41. [The Router for Voice AI](https://speko.ai/)
42. [Launch HN: Speko (YC S26) – OpenRouter for Voice AI](https://news.ycombinator.com/item?id=49332751)
43. [Forklane](https://forklane.ai/)
44. [Forklane AI – Public Beta Launch](https://news.ycombinator.com/item?id=49291014)
45. [h5i integrated sandbox for AI coding agents](https://github.com/h5i-dev/h5i)
46. [Self-Hosted Sandbox for Coding Agents](https://www.reddit.com/r/ClaudeAI/comments/1vqupxf/selfhosted_sandbox_for_coding_agents/)
47. [Qoder Cloud Agents](https://qoder.com/zh/cloud-agents)
48. [腾讯云智能体开发平台 ADP](https://cloud.tencent.cn/product/adp)
49. [火山引擎 AgentKit](https://www.volcengine.com/product/agentkit)
50. [Huawei Cloud AgentRun](https://www.huaweicloud.com/product/servicestage/agentrun.html)
51. [天翼云智能体引擎](https://www.ctyun.cn/products/age)
52. [WorkToper Agent OS](https://www.worktoper.com/)
53. [华为云 AgentArts](https://www.huaweicloud.com/product/agentarts)
54. [百度千帆 Agent 开发平台](https://cloud.baidu.com/doc/AppBuilder/s/Em35m1zob)
55. [Deep Agents Code 0.1.57](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.57)
56. [Reject symbolic links in memory workspaces](https://github.com/openai/codex/commit/a04940cb12cca43510aaf8d601ce42352f0902cb)（详见 OpenAI 专题页）
57. [Add a fail-closed Tree-sitter PowerShell lowerer](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd)（详见 OpenAI 专题页）
58. [Prevent custom providers from inheriting ambient auth](https://github.com/openai/codex/commit/e13c1d569d953ecac06a09cf5663fb3cd405636d)（详见 OpenAI 专题页）
59. [Reconnect Guardian sampling WebSockets after auth changes](https://github.com/openai/codex/commit/76ceaddb29444388fbbbae07c46f7e8849f9658b)（详见 OpenAI 专题页）
60. [Skip redirected external-agent migration destinations](https://github.com/openai/codex/commit/2a30972fcb646f9d6bfed6de6606aa3f0f8c3dd2)（详见 OpenAI 专题页）
61. [Add Guardian v2 approval review metrics](https://github.com/openai/codex/commit/e7e13c68e224da4dde35fc685ea2a2ab1a62dc9d)（详见 OpenAI 专题页）
62. [Include node_repl screenshots in Guardian v2 reviews](https://github.com/openai/codex/commit/9b9b614b02ba04df55479284749c5cbbed695c24)（详见 OpenAI 专题页）
63. [Fix tracing capability checks for older workerd](https://github.com/cloudflare/agents/commit/bf94bb2f8242f2ad46f6c6c88e56ee5e196cc706)
64. [Make wait=false resource ingestion a durable source job](https://github.com/volcengine/OpenViking/commit/67603473a5a67c2ac7d4ccc6d22a8190004c5c39)
65. [Add VolcEngine and BytePlus plan tiers to OpenViking init](https://github.com/volcengine/OpenViking/commit/3590b47a25bd008068e35c8423149e3baa3203b8)
66. [Group Deep Agents Code resume trace rounds](https://github.com/langchain-ai/deepagents/commit/345859e8e13d5b48348efebd0a48bfb4d3fbf132)
67. [OpenViking v0.4.15](https://github.com/volcengine/OpenViking/releases/tag/v0.4.15)
68. [Octomind 0.44.2: The Supervisor Learns to Demand Proof](https://octomind.run/blog/octomind-0-44-2-release)
69. [Coding Agent Horror Stories: The Command You Already Approved](https://www.docker.com/blog/coding-agent-horror-stories-the-command-you-already-approved/)
70. [Operationalizing agentic AI: The Day 0-2 blueprint for enterprise infrastructure](https://www.redhat.com/en/blog/operationalizing-agentic-ai-day-0-2-blueprint-enterprise-infrastructure)
71. [CLI Beta @composio/cli 0.3.4-beta.355](https://github.com/ComposioHQ/composio/releases/tag/%40composio%2Fcli%400.3.4-beta.355)
72. [Semantic Kernel .NET 1.80.0](https://github.com/microsoft/semantic-kernel/releases/tag/dotnet-1.80.0)
73. [Add exec-server forwarding mode](https://github.com/openai/codex/commit/77e688960196dbc82bbeb00c844d2555a61925aa)（详见 OpenAI 专题页）
74. [Deduplicate remote plugin bundle syncs](https://github.com/openai/codex/commit/a998c7a1ce88a521d319a4f336e0a4bf36095637)（详见 OpenAI 专题页）
75. [Add safe permission profile intersection](https://github.com/openai/codex/commit/19d185fec8e1216ddd7b5522b331d69a6ecf3b1c)（详见 OpenAI 专题页）
76. [Improve Guardian v2 risk classification](https://github.com/openai/codex/commit/846a16852f6bcd155d552236d4d893749c6130e6)（详见 OpenAI 专题页）
77. [Inject Node REPL policy into Guardian review sessions](https://github.com/openai/codex/commit/4a3e829c56415f8c1e69b18fbe74f4d81eaa926a)（详见 OpenAI 专题页）
78. [.NET: Add session-persisted chat client routing](https://github.com/microsoft/agent-framework/commit/4be584cc53b2094d5a5fa1aa96bf33f126f7f33b)
79. [Fence relayed agent output so it cannot pose as instructions](https://github.com/google/adk-python/commit/9ffe8be6f92fae76541cc948c38c5ef5dc3755b9)
80. [Make /offload interruptible](https://github.com/langchain-ai/deepagents/commit/ab82d48cc012c5a991660ad53785c2e26030596e)
81. [Add HMAC check to QuickJS snapshot bytes](https://github.com/langchain-ai/deepagents/commit/749b386f97ed7b920acfd5936b01f8c425976d92)
82. [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)（详见 Claude 专题页）
83. [Claude Agent SDK Python v0.2.140](https://github.com/anthropics/claude-agent-sdk-python/releases/tag/v0.2.140)（详见 Claude 专题页）
84. [Codex 0.148.0](https://github.com/openai/codex/releases/tag/rust-v0.148.0)（详见 OpenAI 专题页）
85. [Add async delivery metadata to agent messages](https://github.com/openai/codex/commit/fb356f3d2c9fa05f9b06771f8e3c877ca66ed330)（详见 OpenAI 专题页）
86. [Honor managed config during project discovery](https://github.com/openai/codex/commit/6ec012668b0decdd4506e376f0553816ab684e67)（详见 OpenAI 专题页）
87. [Fail closed on Guardian V2 risk scoring errors](https://github.com/openai/codex/commit/c97bd2dcb52a8120d96086fac49665452af3161b)（详见 OpenAI 专题页）
88. [Align AG-UI run continuity](https://github.com/microsoft/agent-framework/commit/e6536fb45915b1d91e8702e43dcfe31d9b671561)
89. [Add MiddlewareFailure fail-closed signal](https://github.com/microsoft/agent-framework/commit/58da0cc2534b0e5350bd1a83d75f363a08c3103d)
90. [Composio Core 0.17.0](https://github.com/ComposioHQ/composio/releases/tag/%40composio%2Fcore%400.17.0)
91. [OpenSandbox FastPath v2 client](https://github.com/opensandbox-group/OpenSandbox/commit/415259e527d2d692deffda80a50faddd046bf49c)
92. [Allow VIDEO modality in Google ADK API server](https://github.com/google/adk-python/commit/dd998a7d5352225b944806abfe0fc7f463abbf38)
93. [Add the async user message tool](https://github.com/openai/codex/commit/71dbf72b0576f9e7be1ef28d275bc79ece6d4b6c)（详见 OpenAI 专题页）
94. [Enforce workspace restrictions for header authentication](https://github.com/openai/codex/commit/b537d5a0970f9d3153b1e647e2b42deed32555e0)（详见 OpenAI 专题页）
95. [Route hook MCP calls through current connections](https://github.com/openai/codex/commit/d35e5495f991508409ff30e38db8dbe49d565570)（详见 OpenAI 专题页）
96. [Enforce environment MCP policies](https://github.com/openai/codex/commit/fde2156057c38c0227ce94c8514d04c7498df60d)（详见 OpenAI 专题页）
97. [Codex 0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)（详见 OpenAI 专题页）
98. [Add DeepSeek Harness sandbox system info](https://github.com/volcengine/veadk-python/commit/f3eccd4c7d0084721c4fc826f1cb65df4308934d)
99. [Propagate template container securityContext to BatchSandbox pods](https://github.com/opensandbox-group/OpenSandbox/pull/1564)
100. [Scope TUI approval requests to their threads](https://github.com/openai/codex/commit/8843960ba06b1b2570e689f3fff354c324ab2417)（详见 OpenAI 专题页）
101. [Prefer the most recent session when queueing by name](https://github.com/openai/codex/commit/14a8ac89af0a3c9033c1fa4d747ec5d6333e9890)（详见 OpenAI 专题页）
102. [Refresh expired AWS credentials for Bedrock](https://github.com/openai/codex/commit/3929c99a97d1aa0fb8000903a4b57b24fbabe742)（详见 OpenAI 专题页）
103. [Support FD mounts with older system Bubblewrap versions](https://github.com/openai/codex/commit/6cc2ba8a9567e3083531283f923127b86a6c5908)（详见 OpenAI 专题页）
104. [Coerce JSON workflow resume payloads](https://github.com/microsoft/agent-framework/commit/e74ac4613c2d7b8653457dd94c26a67f572c74d7)
105. [Prevent superlinear history growth by deduplicating messages](https://github.com/microsoft/agent-framework/commit/da11daebe51ef70a03908f610165714a17491da4)
106. [Expose context count in OpenViking upload tasks](https://github.com/volcengine/OpenViking/commit/da138de7cea1ceda014608dd9c3e9d43c0a498dc)
107. [Expose OpenViking tree level limit](https://github.com/volcengine/OpenViking/commit/9a5b47a2ce213087e21dfcca05f82dd4f36d622b)
108. [Return OpenViking pathlock config error instead of panic](https://github.com/volcengine/OpenViking/commit/d88967aaeb969106ed3e77249bb3ef8248a03ebb)
109. [Fix Coze Loop eval-set filter and async evaluation context](https://github.com/coze-dev/coze-loop/commit/2bf8536159a5f9e4c166849c5d1a8b7bb3014123)
110. [Set alias on an existing CubeSandbox template](https://github.com/TencentCloud/CubeSandbox/commit/c868f9acc8da811622f4139a2887940cb0042f49)
111. [OpenSandbox FastPath fleet create/status mapping](https://github.com/opensandbox-group/OpenSandbox/commit/28984f714f44c934bab90e10827e2bdd3eb77b4a)
112. [OpenSandbox HTTP request metrics via OTLP](https://github.com/opensandbox-group/OpenSandbox/commit/426300f86a9437fc5a3302f89956dc477595997e)
113. [OpenSandbox chart 0.2.2 controller socket fix](https://github.com/opensandbox-group/OpenSandbox/commit/8f01e935c2cabba778cf37a152033fae062fa0f4)
114. [Reject non-finite OpenSandbox CPU limits](https://github.com/opensandbox-group/OpenSandbox/pull/1568)

## 采集状态

- 已检查来源：Microsoft Agent Framework/Semantic Kernel/Copilot/Azure Foundry，LangChain Deep Agents/LangGraph，Vercel AI SDK，OpenHands，Anthropic Claude Code，OpenAI Codex/Agents SDK，Google ADK/Jules/Vertex，Cloudflare Agents/Sandbox/Workers AI，AWS Bedrock/AgentCore，Replit、Cursor、Devin、Factory、Sourcegraph/Amp、CrewAI、Lindy、Harness、Docker、Red Hat、Composio、Octomind；以及字节 Coze/AgentKit/veADK/OpenViking/Trae/Seed、阿里百炼/Qoder、腾讯 ADP/CubeSandbox、百度、华为、天翼云、智谱、Moonshot/Kimi、MiniMax、DeepSeek；并补查 GitHub Releases/commits、HN Algolia、可访问 Reddit，以及 10:12–13:12 的官方 commits/releases API 增量与海外/中国厂商官方网页入口，复核主 24 小时与 24–72 小时观察窗口。
- 失败来源：Replit Blog RSS 404；LangChain changelog feed 403，改查 GitHub Releases；Sourcegraph/Amp 与部分猜测的公开 releases API 路径 404，改查可用官方入口；X 未登录无法稳定读取完整时间线；WorkToper 直连 403；serverlessagent.dev、context-engine.app、premissai.com 仍受本地网络策略限制；部分中国厂商静态页和本轮部分官方博客/产品页没有可核实更新时间；Octomind 页面只有日期没有时刻；GitHub 网页搜索增量索引滞后，本轮改用官方 API 并成功读取批量增量。
- 累计候选审阅记录：274 条（本轮新增 59 条原始记录：20 条官方仓库 commits、0 个新 release、39 条网页检索结果；加上既有累计 215 条审阅记录；该口径包含重复与未采纳候选）；保留：114 个唯一来源、96 条动态（16 组主窗口已核实 release/官方发布，39 组主分支或样例开发信号，5 组 24–72 小时观察，8 组较旧基线，9 组日期未确认候选，1 条未证实传闻，18 组 MaaS/PaaS/活动/预发布邻近信号）。
- 二次补搜：未运行（主窗口已有正式 AaaS release 且最终 sources 非 0，secondPass=false）。

今日扫描完成，共 96 条动态，重点：正式发布主线不变；10:12–13:12 新增 Codex 并发线程审批/会话排队、Microsoft 工作流恢复与历史持久化，以及字节 OpenViking/Coze Loop 的异步任务和评测可观测工程信号；OpenSandbox/CubeSandbox 更新严格归入 PaaS 邻近池。

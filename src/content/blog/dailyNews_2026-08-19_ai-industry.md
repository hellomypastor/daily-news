---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-19T00:00:00+08:00"
updatedAt: "2026-08-19T22:25:00+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "Agent Framework .NET 1.18.0"
featuredUrl: "https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0"
featuredSummary: "Microsoft Agent Framework 正式发布 .NET 1.18.0。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-08-18 22:30 +08:00"
featuredTags: ["Microsoft","Agent Framework","Release"]
tags:
  - "ACP"
  - "ADK"
  - "AG-UI"
  - "Agent"
  - "Agent Framework"
  - "Agent SDK"
  - "Agents SDK"
  - "AI"
  - "Anthropic"
  - "Approvals"
  - "ASR"
  - "Async"
  - "Authentication"
  - "AWS Bedrock"
  - "Billing"
  - "BrowserSkill"
  - "ChatGPT Business"
  - "Claude"
  - "Claude Code"
  - "Claude Desktop"
  - "CLI"
  - "Code Review"
  - "Codex"
  - "Coding Agent"
  - "Cohere"
  - "Community"
  - "Compatibility"
  - "Context"
  - "Copilot"
  - "Cowork"
  - "CPM-Ant"
  - "Daemon"
  - "Data"
  - "Date Unconfirmed"
  - "Deep Agents"
  - "Deep Research"
  - "Development Signal"
  - "Diagnostics"
  - "Edge AI"
  - "Education"
  - "Evaluation"
  - "Extensions"
  - "Fail Closed"
  - "Foxglove"
  - "Gemini"
  - "Generation"
  - "GitHub Action"
  - "Google"
  - "Governance"
  - "Graph"
  - "Guardian"
  - "Guardrails"
  - "Handoff"
  - "Hooks"
  - "Hugging Face"
  - "Images"
  - "Industry"
  - "Instructions"
  - "Integration"
  - "LangChain"
  - "LFM2.5"
  - "Linear"
  - "Linux"
  - "Liquid AI"
  - "LlamaIndex"
  - "Logging"
  - "MCP"
  - "Memory"
  - "Messaging"
  - "Microsoft"
  - "Middleware"
  - "Model"
  - "Models"
  - "Multi-agent"
  - "Multi-Agent"
  - "OAuth"
  - "Observability"
  - "Open Source"
  - "OpenAI"
  - "Orchestration"
  - "Pagination"
  - "Performance"
  - "Permissions"
  - "Plugin"
  - "Policy"
  - "PowerShell"
  - "Prerelease"
  - "Protocol"
  - "Provider"
  - "Python"
  - "Quantization"
  - "Queue"
  - "QuickJS"
  - "Qwen"
  - "Qwen Code"
  - "Reasoning"
  - "Reinforcement Learning"
  - "Release"
  - "Reliability"
  - "Replay"
  - "Research"
  - "Responses"
  - "Resume"
  - "Retrieval"
  - "Review"
  - "Robotics"
  - "Routing"
  - "RunState"
  - "Safety"
  - "Sandbox"
  - "Schema"
  - "SDK"
  - "Security"
  - "Sessions"
  - "Skills"
  - "Subagents"
  - "Telemetry"
  - "Tencent"
  - "Token Counting"
  - "Tool Calling"
  - "Tools"
  - "Tracing"
  - "Training"
  - "Transcript"
  - "Transformers"
  - "Usage"
  - "Validation"
  - "Vision"
  - "Visualization"
  - "VLM"
  - "Web Shell"
  - "Whisper"
  - "Windows"
  - "Workflow"
---

## 扫描结论

主窗口：2026-08-18 22:25:00 至 2026-08-19 22:25:00（Asia/Shanghai）；近两日为 2026-08-17 22:25:00 至 2026-08-18 22:25:00，近三日为 2026-08-16 22:25:00 至 2026-08-17 22:25:00。本轮继续保留当天全部既有来源，并新增确认 Liquid AI 的 LFM2.5 QAD Q4_0 checkpoints、OpenAI Agents SDK Python 0.22.0，以及 Qwen Code、Transformers、LangChain 与 OpenAI Agents SDK 的主分支工程信号。所有 OpenAI/Anthropic 条目均按专题分流注明，主分支提交不自动归入正式版本；Liquid AI 自报评测仅按发布方数据呈现。

## 优先动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| OpenAI | [Sam Altman：暂停部分 frontier RL 训练](https://x.com/sama/status/2089787807611195475) | 官方负责人社交账号 | 2026-08-19 02:53 +08:00，已核实 | 原帖称为满足对当前能力水平的 alignment、安全与监控标准，暂停“some frontier RL training”；未说明模型、训练规模、期限或恢复条件。详见 OpenAI 专题页。 | 是高优先级治理信号，但不能扩大为 OpenAI 全面暂停前沿模型训练，也不是产品发布。 |
| Foxglove | [Foxglove goes agentic](https://foxglove.dev/blog/foxglove-goes-agentic) | 官方产品发布 | 2026-08-19 01:00 +08:00，已核实 | 在应用内加入 Agent sidebar，并以桌面应用内本地 MCP 让外部 Agent 操作机器人数据；官方说明本地/云端工具、skills 与 eval pipeline，beta 面向全部客户。 | 把 Agent 工作流带到多模态机器人数据检索、可视化和脚本场景，是 Physical AI 工具链的直接产品信号。 |
| OpenAI | [Codex 0.148.0](https://github.com/openai/codex/releases/tag/rust-v0.148.0) | 官方 GitHub 正式发布 | 2026-08-19 06:26 +08:00，已核实 | 正式 tag 与发布时间可确认，发布页仅写 Release 0.148.0，未列变更说明，因此不把同期主分支提交自动归因到该版本。详见 OpenAI 专题页。 | 将此前 alpha 序列推进为稳定版本，但功能范围仍应等待 changelog 或构建内容核对。 |
| Anthropic | [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235) | 官方 GitHub 发布 | 2026-08-19 04:38 +08:00，已核实 | 新增可选 spellcheck，修复权限评论框误授权、不可用默认 subagent、notebook 审批信息缺失等问题，并降低后台 cloud session 事件流的 CPU/内存开销。详见 Claude 专题页。 | 同时涉及权限准确性、Agent 可用性提示与后台会话资源效率。 |
| Microsoft | [Agent Framework MiddlewareFailure](https://github.com/microsoft/agent-framework/commit/58da0cc2534b0e5350bd1a83d75f363a08c3103d) | 官方主分支提交，非正式发布 | 2026-08-19 06:33 +08:00，已核实 | 为 function middleware 增加显式 fail-closed 异常；触发时终止调用循环并取消同批并行工具任务，普通异常仍沿用工具错误并继续的契约。 | 让 guardrail/enforcement middleware 能可靠停止 Agent 执行，而不是被吸收后继续运行；尚待正式发布。 |
| Microsoft | [Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0) | 官方 GitHub 发布 | 2026-08-18 22:30 +08:00，已核实 | 正式发布页确认此前仅见于版本号提交的 .NET 1.18.0；发布页本身未列详细说明，不外推功能。 | 把窗口内的“发布准备信号”提升为可确认 release，但具体能力仍以包和后续说明为准。 |
| LangChain | [langchain-openai 1.5.2](https://github.com/langchain-ai/langchain/releases/tag/langchain-openai%3D%3D1.5.2) | 官方 GitHub 发布 | 2026-08-19 01:38 +08:00，已核实 | 正式版本包含 reasoning item 边界保留、响应头 gateway metadata 提取和 o-series token 计数支持。 | 把此前主分支修复带入版本化分发，影响 OpenAI 模型接入层的事件结构和计量。 |
| LangChain | [Deep Agents 0.7.7](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.7) | 官方 GitHub 发布 | 2026-08-18 23:07 +08:00，已核实 | 发布 Deep Agents Python 库 0.7.7；发布页可确认版本与时刻，具体变更需结合提交记录。 | Hosted/本地 Agent 编排库得到正式版本承载。 |
| Hugging Face | [Transformers 合入 NVFP4 量化](https://github.com/huggingface/transformers/commit/80c667443da1c5cfbd258f46ecceee09950f544a) | 官方主分支提交，非正式发布 | 2026-08-18 23:05 +08:00，已核实 | 增加 NVFP4 量化支持及相应配置、集成与测试；截止时间前未见对应稳定版。 | 为低精度推理与显存优化提供上游实现信号，但仍需等待 release。 |
| OpenAI | [Codex fail-closed PowerShell lowerer](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd) | 官方主分支提交，非正式发布 | 2026-08-18 22:59 +08:00，已核实 | 新增基于 Tree-sitter 的保守 PowerShell 命令降级器；动态表达式、解析恢复与不支持结构一律拒绝。详见 OpenAI 专题页。 | 明确收紧 Windows shell 的安全判定边界，但提交注明生产调用迁移仍待后续。 |
| OpenAI | Codex Windows 与权限边界修复 | 官方主分支提交组，非正式发布 | 2026-08-19 02:57 至 03:08 +08:00，已核实 | [阻止 ConPTY 从当前目录加载 DLL](https://github.com/openai/codex/commit/726ec7ecbf2f74784bf88f8722d031b1565a0184)，并要求对[已拒绝权限路径下的访问重新审批](https://github.com/openai/codex/commit/d68b85a0978e15c49c6e96bde1f73ddaeac35d79)。详见 OpenAI 专题页。 | 分别封堵 Windows DLL 搜索路径和父级授权覆盖子路径拒绝规则的边界；均尚未形成正式版本。 |
| OpenAI | Codex 认证、记忆与 Guardian 边界更新 | 官方主分支提交组，非正式发布 | 2026-08-18 22:14 至 2026-08-19 00:38 +08:00，已核实 | [拒绝 memory workspace 符号链接](https://github.com/openai/codex/commit/a04940cb12cca43510aaf8d601ce42352f0902cb)、[阻止自定义 provider 继承环境认证](https://github.com/openai/codex/commit/e13c1d569d953ecac06a09cf5663fb3cd405636d)，并把 [node_repl 截图纳入 Guardian v2 review](https://github.com/openai/codex/commit/9b9b614b02ba04df55479284749c5cbbed695c24)。详见 OpenAI 专题页。 | 连续收紧凭据、符号链接和审阅证据边界，仍不能写成正式产品发布。 |

## 常规动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| OpenAI | Codex Bedrock 认证与旧版 Linux 沙箱兼容 | 官方主分支提交组，非正式发布 | 2026-08-19 12:06 至 12:46 +08:00，已核实 | [Bedrock 过期凭据刷新](https://github.com/openai/codex/commit/3929c99a97d1aa0fb8000903a4b57b24fbabe742)可在可刷新认证失败后执行受配置命令、重载 SDK 凭据并重新签名重试；[旧版 Bubblewrap FD mount](https://github.com/openai/codex/commit/6cc2ba8a9567e3083531283f923127b86a6c5908)通过受校验的 /proc/self/fd 只读绑定兼容缺少 ro-bind-fd 的系统版本。详见 OpenAI 专题页。 | 分别改善长会话云端凭据恢复和旧 Linux 沙箱兼容，同时保留并发刷新合并、inode/符号链接校验等安全边界；尚待 release。 |
| OpenAI | Codex 线程审批隔离与重名会话排队 | 官方主分支提交组，非正式发布 | 2026-08-19 10:28 至 10:45 +08:00，已核实 | [TUI 审批请求按 thread ID 与 approval ID 联合路由](https://github.com/openai/codex/commit/8843960ba06b1b2570e689f3fff354c324ab2417)，避免并发线程 ID 碰撞误批；[按名称排队时优先最近会话](https://github.com/openai/codex/commit/14a8ac89af0a3c9033c1fa4d747ec5d6333e9890)，并纳入非交互与自定义来源会话。详见 OpenAI 专题页。 | 收紧多线程审批归属并减少重名会话的歧义失败，但都是主分支证据。 |
| Microsoft | Agent Framework Python 历史与恢复载荷修复 | 官方主分支提交组，非正式发布 | 2026-08-19 12:20 至 12:40 +08:00，已核实 | [save_messages 采用顺序感知去重](https://github.com/microsoft/agent-framework/commit/da11daebe51ef70a03908f610165714a17491da4)，避免历史记录超线性增长；[AG-UI workflow resume](https://github.com/microsoft/agent-framework/commit/e74ac4613c2d7b8653457dd94c26a67f572c74d7)递归按声明类型转换 JSON 载荷，无法满足类型时保留输入。 | 同时改善长会话存储复杂度与跨 JSON 边界恢复的类型可靠性；尚待正式版本。 |
| Qwen | Qwen Code Web Shell 审批与后台 Agent 状态 | 官方主分支提交组，非正式发布 | 2026-08-19 10:49 至 11:54 +08:00，已核实 | [审批/提问改为不遮挡消息的内嵌 sheet](https://github.com/QwenLM/qwen-code/commit/b04db26db8aca0b2698d3a33c3a2f4f295a51013)，并避免启动审批待定时把后台 Agent 误判失败；[流式输出渲染保持响应](https://github.com/QwenLM/qwen-code/commit/3192323c1d9272577592434952f8fd2253f6d6d6)则重做增量 transcript 到 UI 的更新路径。 | 改善长输出和多 Agent 审批期间的交互正确性；两项都晚于 0.21.14 正式 tag，不能归入该版。 |
| Qwen | Qwen Code 会话活动游标与 ACP 内存测量 | 官方主分支提交组，非正式发布 | 2026-08-19 11:31 至 13:00 +08:00，已核实 | [live-state activity watermark](https://github.com/QwenLM/qwen-code/commit/dd82ba404ea55e5b3c3bcee1a49151d3938a9392)合并内存与持久化时间并防止分页重复；[ACP 子进程 old-generation heap 峰值测量](https://github.com/QwenLM/qwen-code/commit/83fc634f616ac52f441bacd1e78da0f0d05af5e0)加入 serve 侧资源观测。 | 前者提升会话列表/等待游标一致性，后者是容量诊断信号；均为截止前主分支提交。 |
| Qwen | [Qwen Code 0.21.14-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14-preview.0) | 官方 GitHub 预发布 | 2026-08-19 08:52 +08:00，已核实 | 发布说明覆盖 live-session registry、会话状态、媒体引用、`/advisor`、可恢复 PR review、记忆召回与 fail-closed autofix。 | 是本轮功能面最完整的正式预览版本，但仍应按预发布质量看待。 |
| OpenAI | [Codex 0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1) | 官方 GitHub 预发布 | 2026-08-19 08:54 +08:00，已核实 | tag 与发布时间可确认，发布页未给 changelog，不把同期提交自动归因到该版本。详见 OpenAI 专题页。 | 0.149 序列已启动，功能范围仍待正式说明。 |
| OpenAI | Codex 环境、认证与异步消息边界 | 官方主分支提交组，非正式发布 | 2026-08-19 07:17 至 09:21 +08:00，已核实 | [hooks 使用捕获会话环境并清理凭据](https://github.com/openai/codex/commit/4d8c664a4976833b2142974bdba6e8d1a270d671)、[新增不中断 turn 的异步用户消息](https://github.com/openai/codex/commit/71dbf72b0576f9e7be1ef28d275bc79ece6d4b6c)、[对 header 认证执行工作区限制](https://github.com/openai/codex/commit/b537d5a0970f9d3153b1e647e2b42deed32555e0)，并[将环境 MCP 策略用于工具、OAuth、遥测与 skill 依赖](https://github.com/openai/codex/commit/fde2156057c38c0227ce94c8514d04c7498df60d)。详见 OpenAI 专题页。 | 同时收紧环境/身份策略并扩展后台沟通协议；均为主分支证据。 |
| Qwen | [Qwen Code review thread 完整分页](https://github.com/QwenLM/qwen-code/commit/b6e93d27adf9fb08959049843d43032144f2681b) | 官方主分支修复，非正式发布 | 2026-08-19 09:32 +08:00，已核实 | Autofix 改为分页拉取 review thread，并加固部分失败和 stderr 临时文件路径。 | 避免长 PR 的新线程无法被回复或标记解决，并修补失败路径风险；尚待 release。 |
| Microsoft | [Agent Framework AG-UI run continuity](https://github.com/microsoft/agent-framework/commit/e6536fb45915b1d91e8702e43dcfe31d9b671561) | 官方主分支提交，非正式发布 | 2026-08-19 06:53 +08:00，已核实 | 对 Python AG-UI 的恢复所有权、checkpoint 与 approval replay 进行统一，测试覆盖本地/托管审批和参数编辑后的恢复边界。 | 减少恢复时重复执行或错投审批控制的风险，仍待 release。 |
| OpenAI | Codex 执行、角色与 Guardian 边界更新 | 官方主分支提交组，非正式发布 | 2026-08-19 05:45 至 06:47 +08:00，已核实 | [Agent role 只允许有限配置覆盖](https://github.com/openai/codex/commit/1a6e07a4febcc0ecfa04464f5e95cb47144cd746)，[Node REPL token 不再传入子进程](https://github.com/openai/codex/commit/fe50b616899eef5aac0dacf1e2d36a09c109944b)，[Guardian V2 评分错误改为高风险 strict review](https://github.com/openai/codex/commit/c97bd2dcb52a8120d96086fac49665452af3161b)，并将[统一执行审批绑定到 shell executable](https://github.com/openai/codex/commit/7d9990fa30ab495d473fc555f0d5e7c68e9d205a)。详见 OpenAI 专题页。 | 分别限制子 Agent 扩权、凭据继承、风险评分失败和伪装 shell 复用审批；均为主分支信号，不能视为已进入 0.148.0。 |
| OpenAI | Codex MCP hooks 与异步 Agent 消息 | 官方主分支提交组，非正式发布 | 2026-08-19 05:32 至 07:00 +08:00，已核实 | [MCP tool hooks](https://github.com/openai/codex/commit/87070a77925cbffed8b34ddc99afaf40d56863aa) 仅调用已连接、已编目且策略允许的工具；[异步消息 delivery metadata](https://github.com/openai/codex/commit/fb356f3d2c9fa05f9b06771f8e3c877ca66ed330) 可标识不结束当前 turn 的可见消息。详见 OpenAI 专题页。 | 分别扩展 session hook 能力和后台消息协议，但都尚未形成带说明的正式版本。 |
| Microsoft | [Agent Framework 会话持久化多模型路由](https://github.com/microsoft/agent-framework/commit/4be584cc53b2094d5a5fa1aa96bf33f126f7f33b) | 官方主分支提交，非正式发布 | 2026-08-19 01:45 +08:00，已核实 | 新增 RoutePersistingRoutingChatClient，把当前路由保存在会话状态中；切换模型时复用客户端侧完整对话历史。 | 为长会话中的多模型切换提供原生状态承载，但尚未进入后续正式 release。 |
| LangChain | [Deep Agents QuickJS 快照 HMAC](https://github.com/langchain-ai/deepagents/commit/749b386f97ed7b920acfd5936b01f8c425976d92) | 官方主分支提交，非正式发布 | 2026-08-19 03:17 +08:00，已核实 | 为 thread 模式的持久化 REPL 快照增加可选 HMAC-SHA256 签名与恢复前校验；缺失或被篡改的签名会拒绝恢复。 | 强化持久化执行状态的完整性，但默认需配置 signing key 且仍待 release。 |
| Qwen | [Qwen Code sandboxed verification flakiness gate](https://github.com/QwenLM/qwen-code/commit/f0dcdfc1570ed4e8852060ff55e8b37f61827240) | 官方主分支提交，非正式发布 | 2026-08-18 23:26 +08:00，已核实 | Triage 流程加入确定性的 flaky 判定门槛，避免一次性失败直接决定验证结论。 | 改善 Agent 自动验证对非确定性测试的处理；仍待正式版本。 |
| Qwen | [Qwen Code /review 纯文本评论与严重度归属](https://github.com/QwenLM/qwen-code/commit/081a96d86459b618fdba2d153f784d9226f37d06) | 官方主分支提交，非正式发布 | 2026-08-18 22:47 +08:00，已核实 | 调整 review 评论的纯文本呈现，并让严重度标记遵循 review.attribution 设置。 | 影响自动评审的下游展示与策略一致性，但不是 release。 |
| LangChain | [严格工具 schema 要求嵌套属性完整](https://github.com/langchain-ai/langchain/commit/65e5e3cfa36c6fff2897140a1bfb5fd35de1bdbd) | 官方主分支修复，非正式发布 | 2026-08-19 01:08 +08:00，已核实 | strict tool schema 会把所有嵌套 object 属性纳入 required，以保持递归严格性。 | 减少工具调用 schema 在深层对象处失去严格约束的风险。 |
| LangChain | [保留 reasoning item 边界](https://github.com/langchain-ai/langchain/commit/32c15bbbd5538677a750229f4f732ad70b8903f4) | 官方主分支修复，后续已发布 | 2026-08-19 00:59 +08:00，已核实 | OpenAI 集成修复 reasoning item 边界保留，随后进入 langchain-openai 1.5.2。 | 有助于多段推理事件的结构一致性，不代表模型能力变化。 |
| LlamaIndex | [Google GenAI 默认模型改为 Gemini 3.7 Flash](https://github.com/run-llama/llama_index/commit/30e759af1f0ff1f4c062bc13f90c7236fae06c65) | 官方项目主分支提交，非 Google 发布 | 2026-08-19 00:37 +08:00，已核实 | LlamaIndex 的 Google GenAI 集成与文档修改默认模型；这是 LlamaIndex 客户端选择，不能据此宣称 Google 发布新模型。 | 默认值变更可能影响新项目行为，需与 Google 官方文档单独核对。 |
| Tencent | [EVIE-Preview-4.5B](https://github.com/Tencent/EVIE-Preview-4.5B) | 官方新公开模型仓库 | 2026-08-18，已核实 | 腾讯公开 4.54B 多语言视觉文档检索模型；仓库中的榜单数据仍属发布方自报。 | 为视觉文档检索提供公开权重和复现入口。 |
| Tencent | [BrowserSkill 支持跨进程 iframe](https://github.com/Tencent/BrowserSkill/commit/c7252529f429e769302f060ba0168061a734f712) | 官方主分支提交，非正式发布 | 2026-08-18 21:16 +08:00，已核实 | 扩展 frame geometry、引用与交互路径，使浏览器 Agent 可观察和操作 OOPIF。 | 改善复杂 iframe 页面的 Agent 覆盖，仍待 release。 |
| Hugging Face | [Transformers generation_config 优先级修复](https://github.com/huggingface/transformers/commit/bc7772617f789287d7b754478bab38799192765a) | 官方主分支修复，非正式发布 | 2026-08-18 22:02 +08:00，已核实 | 文本生成 pipeline 不再用 pipeline 默认值覆盖模型自身 generation_config。 | 避免部署时模型级生成参数被静默改写。 |

## 播客与访谈

截至 22:25，Latent Space、The Cognitive Revolution、a16z AI 与厂商播客入口未发现主窗口内可核实的新一期；No Priors 官方 YouTube RSS 仅在 05:55 出现 Chess.com 相关短片，不按完整节目收录。Dwarkesh 入口仍返回 403，未据搜索索引单独确认新节目。

## 近两日补充（24–48 小时）

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| LangChain | [Deep Agents CLI 0.1.57](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.57) | 官方 GitHub 发布 | 2026-08-18 12:31 +08:00，已核实 | 增加冷缓存提示、可调整输入、多选提问、ACP 审批模式和模型选择，并修复恢复与转录问题。 | Agent CLI 的审批和交互能力获得正式更新。 |
| Anthropic | [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234) | 官方 GitHub 发布 | 2026-08-18 04:20 +08:00，已核实 | 覆盖 GitLab MR、用量重置续跑、Remote Control、安全与可靠性修复。详见 Claude 专题页。 | Claude 编码主工具获得正式更新。 |
| Anthropic | [Agent SDK TypeScript v0.3.234](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.234) | 官方 GitHub 发布 | 2026-08-18 04:21 +08:00，已核实 | 同步 VCS、权限来源、effort 初始化与类型修正。详见 Claude 专题页。 | Agent 集成接口获得版本化更新。 |
| Anthropic | [Claude Code Action v1.0.194](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194) | 官方 GitHub 发布 | 2026-08-18 04:25 +08:00，已核实 | 加强路径与附件限制，修补依赖漏洞并改进 PR 上下文。详见 Claude 专题页。 | CI/评审 Agent 的安全边界和上下文处理同步更新。 |
| Anthropic | [claude-academy-guide Skill](https://github.com/anthropics/skills/commit/89dcaa3a283f79ed84fd8fe53e2208b9442a6427) | 官方仓库提交 | 2026-08-17 21:03 +08:00，已核实 | 新增按需读取 Claude Academy 实时目录的课程推荐 Skill。详见 Claude 专题页。 | 是官方 Skill 增量，但已不在主窗口。 |
| OpenAI | [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) | 官方 GitHub 预发布 | 2026-08-18 03:27 +08:00，已核实 | 发布页无变更说明，不推断具体功能。详见 OpenAI 专题页。 | 可确认版本存在，功能判断仍应等待 changelog 或稳定版。 |

## 近三日补充（48–72 小时）

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| OpenAI | [The Defender's Window](https://openai.com/index/the-defenders-window) | 官方安全文章 | 2026-08-17 13:30 +08:00，已核实 | OpenAI 说明其对 AI 网络安全攻防变化与防护实践的判断。详见 OpenAI 专题页。 | 提供厂商对 Agent 化安全能力和防御窗口的正式立场。 |

## 日期未确认

| 厂商 | 标题 | 状态 | 处理 |
|---|---|---|---|
| Anthropic | [Claude Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog) | v1.32352.1 标注 2026-08-18，但无时刻 | 保留日期证据，不判定是否落入精确 24 小时窗口；详见 Claude 专题页。 |
| Microsoft | [Copilot 消费者版 Deep Research 退役说明](https://support.microsoft.com/en-US/microsoft-copilot/deep-research-in-microsoft-copilot) | 官方支持页写明 2026-08-18 起退役，但页面未给发布时间 | 仅确认生效日期；现有报告仍保留，Microsoft 365 Premium 用户可改用 Researcher。因发布时间未知，不写成主窗口内发布。 |
| Linear | [How teams build：AI usage patterns in software teams](https://linear.app/data) | 官方数据页可打开，但未给可靠发布日期 | 页面说明采用口径、样本与 2026 年数据，用于观察 coding agents 与团队行为的相关性；不将相关性写成因果，也不判定为 24 小时内新发布。 |
| OpenAI | [ChatGPT Business：新增付费席位改为即时扣费](https://help.openai.com/en/articles/8542115-chatgpt-business-faq) | 官方帮助页确认 2026-08-19 生效；本轮访问只显示相对更新时间 | 按当前周期剩余时间即时收费，总金额口径不变；因无稳定绝对更新时间，不写成精确时刻发布。详见 OpenAI 专题页。 |

## 观察池

| 厂商 | 候选 | 状态 | 处理 |
|---|---|---|---|
| Hugging Face 社区 | [Bedrock-RL：确定性 Minecraft VLM Agent 训练框架](https://huggingface.co/blog/Michael-E/bedrock-rl) | 2026-08-19 09:42 +08:00；社区作者文章，非 Hugging Face 官方研究 | 原文公开基于 Netherite 与 verl 的可替换训练/评测框架；示例指标为作者自报且明确称不构成 benchmark claim，因此仅作邻近工程信号。 |
| Google / LlamaIndex | Gemini 3.7 Flash 默认值 | 仅在 LlamaIndex 主分支核实 | 不把第三方集成默认值写成 Google 产品发布，等待 Google 官方 changelog。 |
| Meta、xAI、Mistral、Cohere、中国主要厂商 | 官方入口扫描 | 未核实到主窗口内的新正式技术发布 | 保留无新增结论；动态页依赖脚本或索引滞后的厂商已列入失败来源。 |
| Google DeepMind、Microsoft、LangChain、Hugging Face、NVIDIA | 常规依赖、文档、测试与主分支提交 | 原始仓库信号 | 已检查；只保留有明确 Agent、模型接入或安全意义的提交，不因提交数量放大为重大动态。 |
| 播客入口 | 时间不稳定的节目候选 | 日期证据不足 | 不写成窗口内事实，等待原始节目页提供可核实时间。 |

## 16:10 滚动补充

本轮未发现新的正式 release；以下均为官方仓库主分支信号，不自动归入 Qwen Code 0.21.14 或 Google ADK 既有版本。

| 厂商 | 动态 | 日期 / 状态 | 摘要与意义 |
|---|---|---|---|
| Qwen | [compress-fast 后 rewind 保留历史](https://github.com/QwenLM/qwen-code/commit/aa0178df29ca596f534549c3af3809be590ddbcd) | 16:03；主分支 | 修复快速压缩后 /rewind 丢弃对话历史，涉及 transcript 与 microcompaction 状态一致性。 |
| Qwen | [Token Plan 列表加入 qwen3.8-max](https://github.com/QwenLM/qwen-code/commit/ff5aa6be824a8979713c8e07bc90f10bc1020905) | 15:57；主分支 | 只证明 Qwen Code provider preset 出现该名称，不据此宣称模型正式发布或可用范围。 |
| Qwen | [daemon 重复 tool-call breaker 显示 loop-detected](https://github.com/QwenLM/qwen-code/commit/577f719130f103d67ba879bd6e969240f1f28e65) | 15:14；主分支 | 将此前静默终止显式报告为循环检测停止，改善 Agent 可诊断性。 |
| Qwen | [daemon 扩展批量启停 API](https://github.com/QwenLM/qwen-code/commit/daa7d619907f2f73038cb0b1132c6f6cbfde6431) | 14:42；主分支 | 增加 workspace 扩展批量激活、能力版本与 TypeScript daemon client 接口，尚待 release。 |
| Qwen | [PR review resume 接入 CLI 与工作流](https://github.com/QwenLM/qwen-code/commit/1eb8a0c7f8126de179b4c80b932d915983ce51f1) | 13:13；主分支 | 将本地恢复功能接到 /review、review run 与 GitHub workflow 路径。 |
| Google | [ADK debug log 脱敏 http_options 凭据](https://github.com/google/adk-python/commit/1cd6f464e5b8ececa957928ca67d65145be558ab) | 15:16；主分支 | 避免 generate_content_config.http_options 中的 credential 在 debug 日志暴露；尚非正式版本。 |
| Google | [ADK 避免重复 OAuth 提示并修复工具恢复](https://github.com/google/adk-python/commit/eaad2f83b93d7e0c678336923ca5be7a3b9d1260) | 14:53；主分支 | 改善认证预处理和暂停工具恢复的一致性。 |
| Google | [ParallelAgent 支持 sub-agent escalation event](https://github.com/google/adk-python/commit/0fd681e7d203d2bc7b86c72e4b539de6c735c889) | 14:52；主分支 | 允许并行子 Agent 升级事件进入恢复路径，是编排协议开发信号。 |
| Hugging Face | [Whisper 长音频左填充 position IDs 修复](https://github.com/huggingface/transformers/commit/e12c79c582bc742029e5f12b538ec71391ace8b3) | 15:10；主分支 | 修复 left-padded batch 长音频生成中每项位置偏移被统一 past length 覆盖的问题；尚待稳定 release。 |

## 19:12 滚动补充

本轮新确认 6 个版本发布与 12 个官方主分支工程信号；版本页只提供 tag/时间而无 changelog 时，不外推功能。

| 厂商 | 动态 | 日期 / 状态 | 摘要与意义 |
|---|---|---|---|
| Cohere | [Cohere Python 7.0.9](https://github.com/cohere-ai/cohere-python/releases/tag/7.0.9) | 18:59；正式发布 | 关闭流式 dataset 响应，并在 API key 为空时省略 Authorization header，改善连接清理与无密钥场景兼容。 |
| Hugging Face | [Transformers 5.15.1](https://github.com/huggingface/transformers/releases/tag/v5.15.1) | 18:50；正式发布 | 修复 DFlash/device_map、CandidateGenerator logits、MTP 配置、CUDA 插值和 Gemma4 视频设备等问题。 |
| OpenAI | [Codex 0.149.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.2) | 17:07；官方预发布 | 发布页确认版本与时间但未给 changelog，不把同期提交归因到该版本；详见 OpenAI 专题页。 |
| Anthropic | [Agent SDK TypeScript 0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235) 与 [Claude Code Action 1.0.195](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195) | 04:39–04:40；正式发布 | SDK 页说明同步 Claude Code 2.1.235；Action 页只确认版本与时间。详见 Claude 专题页。 |
| 腾讯 | [BrowserSkill dsh-plugin 0.1.1](https://github.com/Tencent/BrowserSkill/releases/tag/dsh-plugin-v0.1.1) | 12:03；正式发布 | 官方页确认 dsh plugin 0.1.1，未提供更细变更说明，不外推能力范围。 |
| Microsoft | Agent Framework interception 与状态保真 | 17:57–18:48；主分支，非正式发布 | [agent-hooks interception contract](https://github.com/microsoft/agent-framework/commit/10bf8d7d9ef56304cb6936452e64c90c99850f6c)引入 fail-closed、流式缓冲与 verdict-before-durability 边界；另修复[合并 chat options 时保留结构化 instructions](https://github.com/microsoft/agent-framework/commit/8be7c930632b981e01eb26412959f7e7fe62e5f4)及 [HandoffBuilder clone 保留 additional_properties](https://github.com/microsoft/agent-framework/commit/ec407cf56f1069421e978d0f0ff303184a15d6f)。 |
| Qwen | Qwen Code 上游失败、扩展安装与评审边界 | 16:15–18:34；主分支，非正式发布 | [拒绝上游 fail-fast 占位响应](https://github.com/QwenLM/qwen-code/commit/bb45a09c0674cc68caecaad836d1ab597dbab7dd)、[Git 扩展安装使用认证 HTTPS](https://github.com/QwenLM/qwen-code/commit/e4f5504e9fc74d8794067bda43d9e0ba7261225d)、[限制 PR review 发帖量](https://github.com/QwenLM/qwen-code/commit/e352037078006ef04f0072423eadd2105f7b601d)，并[拒绝命名 teammate 使用 run_in_background:false](https://github.com/QwenLM/qwen-code/commit/6d06b2d11d95e8e77f79d12908d02e2f26d67eb)。 |
| OpenAI | Codex 与 Agents SDK 运行边界 | 16:40–17:01；主分支，非正式发布 | Codex [移除异步用户消息旧 feature gate](https://github.com/openai/codex/commit/f5a3dc55404ddc066a4e4a65602fee166ecc46b3)并改按模型能力判定；Agents SDK 分别[隔离 RunState checkpoint usage](https://github.com/openai/openai-agents-python/commit/fb8fa1ba5c23f7ec61ca20c735999cf81e829a8e)、[扩展 agent graph handoff targets](https://github.com/openai/openai-agents-python/commit/9432f7ed30b9554ab5eaa84a4c0977059f96d5f0)和[拒绝失败/未完成终态响应](https://github.com/openai/openai-agents-python/commit/0486792662bd44791dfa5838425c54c52e971d08)。详见 OpenAI 专题页。 |
| Hugging Face | [Qwen Omni generation 兼容 compilable cache](https://github.com/huggingface/transformers/commit/279dbcf4d66051c6e184d8d6960e96294d830f11) | 18:56；主分支，非正式发布 | 修复 Qwen2.5-Omni 与 Qwen3-Omni-MoE generation 在 compilable cache 路径的兼容问题，尚待后续 release 承载。 |

## 22:25 滚动补充

本轮新增确认 13 个唯一来源：1 项 Liquid AI 日期可核实发布、1 项 OpenAI Agents SDK 正式版，以及 Qwen Code、Transformers、LangChain、OpenAI Agents SDK 的 11 项主分支工程信号。所有主分支提交均非正式 release；OpenAI 项详见 OpenAI 专题页。

| 厂商 | 动态 | 日期 / 状态 | 摘要与意义 |
|---|---|---|---|
| Liquid AI | [LFM2.5 Q4_0：面向边缘部署的量化感知蒸馏](https://www.liquid.ai/blog/qad) | 2026-08-19；原文无时刻，Hugging Face 官方组织同步页为 21:48 +08:00 | 发布 LFM2.5-230M、350M、1.2B-Instruct 与 2.6B 的 QAD Q4_0 GGUF；官方称在其七项任务与五次重复口径下恢复各 BF16 基线约 96.5%–97.4% 的表现。指标均属发布方自报，不外推为独立 benchmark 结论。 |
| OpenAI | [Agents SDK Python 0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0) | 21:44；正式发布 | 正式版汇总 guardrail 后 replay/session state、Responses 终态、usage、handoff graph、tracing 与 sandbox 修复；详见 OpenAI 专题页。 |
| OpenAI | Agents SDK Python 发布后修复 | 21:55–22:07；主分支，非正式发布 | [聚合 usage entry 深拷贝](https://github.com/openai/openai-agents-python/commit/629f9b56a5d32d52d1216f8866f5f0beae2484dc)避免来源对象后续变更互相污染；[同名 graph 节点保留](https://github.com/openai/openai-agents-python/commit/fe34ba3aa9a0f53e190badb41fc8b921ec2ca51b)以稳定 ID 区分同名 agent、tool 与 MCP server。两项均晚于 0.22.0 tag，详见 OpenAI 专题页。 |
| OpenAI | Agents SDK TypeScript guardrail 与 provider 配置 | 20:29–21:56；主分支，非正式发布 | [阻止被 output guardrail 拒绝的 tool output 及别名进入 replay state](https://github.com/openai/openai-agents-js/commit/33fe55c62e5a0535766f8adbac63430593b7acd9)，并在[显式 client 与 organization/project 并用时拒绝静默忽略](https://github.com/openai/openai-agents-js/commit/d80736ace3c8ac32c41ba2b353a3e64ed31354b3)。详见 OpenAI 专题页。 |
| Qwen | Qwen Code 图像载荷与重复 tool-call 回放边界 | 19:33–20:02；主分支，非正式发布 | [隔离 image payload eviction state](https://github.com/QwenLM/qwen-code/commit/872dd614f79b2a15d5c41902eeb420a78b3ceae2)，保护后台 Agent 历史快照并限制图片重挂载；[重复 provider tool-call ID 仅在参数指纹相同时视为 replay](https://github.com/QwenLM/qwen-code/commit/4b77a6e47201e21124171d66feadd5573f5c1509)，避免 Kimi 等每轮重用 ID 的调用被误杀。 |
| Qwen | Qwen Code W3C trace 关联与 transcript 预校验 | 20:21–22:13；主分支，非正式发布 | [daemon HTTP span 关联入站 W3C traceparent](https://github.com/QwenLM/qwen-code/commit/d96f264de76bc522ce0564fdd51d37b093dde9a6)，并让 telemetry 关闭时 access log 仍携带 traceId；[transcript contract prevalidation](https://github.com/QwenLM/qwen-code/commit/5003ab3c7f0d35ce00de61ed43a6698fcd2cc25f)只固化证据与 fail-closed 门禁，当前 overall 为 fail、MR2 生产迁移尚未进入主分支，不改变 Web Shell/Desktop 生产行为。 |
| Hugging Face | Transformers CPM-Ant 与 ASR 多声道输入修复 | 19:58–20:00；主分支，非正式发布 | [CPM-Ant lm_head 按 vocab_size 构建](https://github.com/huggingface/transformers/commit/e872ca25f3746721b900ddeafcd041b8466feb0d)以匹配已发布 checkpoint；[ASR pipeline 对不符合 documented channels-first 的多声道布局 fail closed](https://github.com/huggingface/transformers/commit/bb8f235353fb7a29ef293c9925182c497cad4ba4)，避免 channels-last 音频被错误压成极短序列。 |
| LangChain | [ContextEditingMiddleware 支持自定义 token_counter](https://github.com/langchain-ai/langchain/commit/37f266278d780cd7ebdfbf1891ba92066192d687) | 21:35；主分支，非正式发布 | 自定义计数器优先于内置 approximate/model 方式，可针对 CJK 重负载或 provider tokenizer 决定 context edit 触发时机；尚待 release。 |

## 来源链接

- [Sam Altman：暂停部分 frontier RL 训练](https://x.com/sama/status/2089787807611195475)
- [Foxglove goes agentic](https://foxglove.dev/blog/foxglove-goes-agentic)
- [Codex 0.148.0](https://github.com/openai/codex/releases/tag/rust-v0.148.0)（详见 OpenAI 专题页）
- [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235)（详见 Claude 专题页）
- [Agent Framework MiddlewareFailure](https://github.com/microsoft/agent-framework/commit/58da0cc2534b0e5350bd1a83d75f363a08c3103d)
- [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)
- [Deep Agents 0.7.7](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.7)
- [Transformers NVFP4](https://github.com/huggingface/transformers/commit/80c667443da1c5cfbd258f46ecceee09950f544a)
- [Codex fail-closed PowerShell lowerer](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd)（详见 OpenAI 专题页）
- [Qwen Code flakiness gate](https://github.com/QwenLM/qwen-code/commit/f0dcdfc1570ed4e8852060ff55e8b37f61827240)
- [LangChain strict nested tool schemas](https://github.com/langchain-ai/langchain/commit/65e5e3cfa36c6fff2897140a1bfb5fd35de1bdbd)
- [Qwen Code 0.21.14-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14-preview.0)
- [Codex 0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)（详见 OpenAI 专题页）
- [Codex environment MCP policies](https://github.com/openai/codex/commit/fde2156057c38c0227ce94c8514d04c7498df60d)（详见 OpenAI 专题页）
- [Qwen Code review thread pagination](https://github.com/QwenLM/qwen-code/commit/b6e93d27adf9fb08959049843d43032144f2681b)
- [Bedrock-RL 社区文章](https://huggingface.co/blog/Michael-E/bedrock-rl)
- [Qwen Code 0.21.14](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14)
- [Codex Bedrock expired credential refresh](https://github.com/openai/codex/commit/3929c99a97d1aa0fb8000903a4b57b24fbabe742)（详见 OpenAI 专题页）
- [Codex older Bubblewrap FD mounts](https://github.com/openai/codex/commit/6cc2ba8a9567e3083531283f923127b86a6c5908)（详见 OpenAI 专题页）
- [Codex thread-scoped approvals](https://github.com/openai/codex/commit/8843960ba06b1b2570e689f3fff354c324ab2417)（详见 OpenAI 专题页）
- [Codex most-recent named session queueing](https://github.com/openai/codex/commit/14a8ac89af0a3c9033c1fa4d747ec5d6333e9890)（详见 OpenAI 专题页）
- [Agent Framework message history deduplication](https://github.com/microsoft/agent-framework/commit/da11daebe51ef70a03908f610165714a17491da4)
- [Agent Framework JSON workflow resume coercion](https://github.com/microsoft/agent-framework/commit/e74ac4613c2d7b8653457dd94c26a67f572c74d7)
- [Qwen Code Web Shell in-flow approvals](https://github.com/QwenLM/qwen-code/commit/b04db26db8aca0b2698d3a33c3a2f4f295a51013)
- [Qwen Code responsive streaming output](https://github.com/QwenLM/qwen-code/commit/3192323c1d9272577592434952f8fd2253f6d6d6)
- [Qwen Code live-state activity watermark](https://github.com/QwenLM/qwen-code/commit/dd82ba404ea55e5b3c3bcee1a49151d3938a9392)
- [Qwen Code ACP child heap measurement](https://github.com/QwenLM/qwen-code/commit/83fc634f616ac52f441bacd1e78da0f0d05af5e0)
- [Cohere Python 7.0.9](https://github.com/cohere-ai/cohere-python/releases/tag/7.0.9)
- [Transformers 5.15.1](https://github.com/huggingface/transformers/releases/tag/v5.15.1)
- [Codex 0.149.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.2)（详见 OpenAI 专题页）
- [Claude Agent SDK TypeScript 0.3.235](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.235)（详见 Claude 专题页）
- [Claude Code Action 1.0.195](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.195)（详见 Claude 专题页）
- [BrowserSkill dsh-plugin 0.1.1](https://github.com/Tencent/BrowserSkill/releases/tag/dsh-plugin-v0.1.1)
- [Agent Framework agent-hooks interception contract](https://github.com/microsoft/agent-framework/commit/10bf8d7d9ef56304cb6936452e64c90c99850f6c)
- [Agent Framework preserves structured instructions](https://github.com/microsoft/agent-framework/commit/8be7c930632b981e01eb26412959f7e7fe62e5f4)
- [Agent Framework preserves handoff additional properties](https://github.com/microsoft/agent-framework/commit/ec407cf56f1069421e978d0f0ff303184a15d6f)
- [Qwen Code rejects upstream fail-fast placeholders](https://github.com/QwenLM/qwen-code/commit/bb45a09c0674cc68caecaad836d1ab597dbab7dd)
- [Qwen Code authenticated HTTPS extension installs](https://github.com/QwenLM/qwen-code/commit/e4f5504e9fc74d8794067bda43d9e0ba7261225d)
- [Qwen Code clamps PR review posting volume](https://github.com/QwenLM/qwen-code/commit/e352037078006ef04f0072423eadd2105f7b601d)
- [Qwen Code rejects foreground named teammates](https://github.com/QwenLM/qwen-code/commit/6d06b2d11d95e8e77f79d12908d02e2f26d67eb)
- [Codex model-capability gating for async messages](https://github.com/openai/codex/commit/f5a3dc55404ddc066a4e4a65602fee166ecc46b3)（详见 OpenAI 专题页）
- [Agents SDK isolates checkpoint usage](https://github.com/openai/openai-agents-python/commit/fb8fa1ba5c23f7ec61ca20c735999cf81e829a8e)（详见 OpenAI 专题页）
- [Agents SDK expands graph handoff targets](https://github.com/openai/openai-agents-python/commit/9432f7ed30b9554ab5eaa84a4c0977059f96d5f0)（详见 OpenAI 专题页）
- [Agents SDK rejects failed terminal responses](https://github.com/openai/openai-agents-python/commit/0486792662bd44791dfa5838425c54c52e971d08)（详见 OpenAI 专题页）
- [Transformers Qwen Omni compilable cache fix](https://github.com/huggingface/transformers/commit/279dbcf4d66051c6e184d8d6960e96294d830f11)

**一句话总结：22:25 增量新增 Liquid AI 的边缘量化模型发布与 OpenAI Agents SDK Python 0.22.0；Qwen、Transformers、LangChain 和 OpenAI 的后续提交集中在 replay/状态隔离、可观测性、fail-closed 输入与上下文计量，均未被误写为已交付版本。**

## 采集状态

- 已检查：Anthropic、OpenAI、Google DeepMind/Research、Meta AI、Microsoft、xAI、Mistral、Cohere、Qwen/阿里/DAMO、字节 Seed/豆包、百度、腾讯、DeepSeek、智谱/GLM、Moonshot/Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain、LlamaIndex、Foxglove、Linear，以及 Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 与厂商播客入口；按主窗口、24–48h、48–72h 分档复核。
- 19:12 补查：逐项打开 Anthropic Agent SDK/Code Action、Codex、Transformers、BrowserSkill、Cohere Python 的发布页，以及 Microsoft Agent Framework、Qwen Code、OpenAI Codex/Agents SDK、Transformers 的原始提交页；本轮保留 18 个唯一增量来源。
- 22:25 补查：新增核验 Liquid AI 1 项原始发布、OpenAI Agents SDK Python 0.22.0，以及 Qwen Code、Transformers、LangChain、OpenAI Agents SDK 11 项主分支提交；本轮保留 13 个唯一增量来源。
- 失败来源：OpenAI News 网页、xAI、百度、Kimi、Dwarkesh 与 No Priors 旧域名存在 403、连接失败、脚本依赖或精确时间缺失；已改用可访问官方 RSS、GitHub、YouTube feed 与原始文章交叉核验，未据集合页 dateModified 或搜索索引单独确认发布。
- 当日各轮粗筛候选累计 466（22:25 本轮新增粗筛 46 个）；累积保留 102 个唯一来源 URL；二次补搜：否（最终来源不为 0）。

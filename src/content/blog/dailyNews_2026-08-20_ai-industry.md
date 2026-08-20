---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T12:11:03+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "Microsoft Agent Framework removes AG-UI history special cases"
featuredUrl: "https://github.com/microsoft/agent-framework/commit/e2938f4531fed8003ea118e9b49b4e3df7e43090"
featuredSummary: "Agent Framework .NET 主分支移除 AG-UI history 特例；尚非正式发布。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-08-20 00:50 +08:00"
featuredTags: ["Microsoft","Agent Framework","AG-UI"]
tags:
  - "A2A"
  - "ADK"
  - "AG-UI"
  - "Agent"
  - "Agent Framework"
  - "Agent View"
  - "Agent.ai"
  - "Agents SDK"
  - "AI"
  - "Anthropic"
  - "Artifacts"
  - "Baidu"
  - "Claude Code"
  - "Claude Code Action"
  - "Code Execution"
  - "Cohere"
  - "Compaction"
  - "Context"
  - "Date Unconfirmed"
  - "Deep Agents"
  - "Development Signal"
  - "Earnings"
  - "Edge AI"
  - "Enterprise"
  - "Evaluation"
  - "Foundry"
  - "Google"
  - "Governance"
  - "HubSpot"
  - "Hugging Face"
  - "Industry"
  - "LangChain"
  - "Liquid AI"
  - "MCP"
  - "Microsoft"
  - "Model Routing"
  - "NeMo Guardrails"
  - "NVIDIA"
  - "OAuth"
  - "Observability"
  - "OGX"
  - "OpenAI"
  - "Performance"
  - "Persistence"
  - "Planner"
  - "Privacy"
  - "Provider"
  - "PTY"
  - "Quantization"
  - "Qwen"
  - "Qwen Code"
  - "Release"
  - "Reliability"
  - "Reproducibility"
  - "Research"
  - "Responses"
  - "Runtime"
  - "Safety"
  - "SDK"
  - "Security"
  - "Sessions"
  - "Spanner"
  - "State"
  - "Telemetry"
  - "Tool Calling"
  - "Tool Execution"
  - "Transformers"
  - "Validation"
  - "Voice"
  - "Watchlist"
  - "Workflow"
  - "ZDR"
---

## 扫描结论

主窗口：2026-08-19 12:11:03 至 2026-08-20 12:11:03（Asia/Shanghai）；近两日：2026-08-18 12:11:03 至 2026-08-19 12:11:03；近三日：2026-08-17 12:11:03 至 2026-08-18 12:11:03。本轮在累计集合上进一步新增 Google ADK 的 SQLite 状态浅合并修复、Qwen Code 的可持久化工作流执行状态与 Agent View PTY worker，以及 OpenAI Agents SDK 的失败终态/用量和 voice provider 修复；均为尚未发布的主分支信号。此前累计集合已新增 Google ADK 的 A2A 凭据隔离、函数调用一致性、本地执行器提速与 MCP 会话连续性修复，Microsoft Agent Framework 的 A2A 输入恢复，Deep Agents 的可恢复工具参数错误，以及 NVIDIA NeMo Guardrails 的默认日志副作用修复；这些主分支提交均标为开发信号，不等同正式上线。Anthropic 同期发布 Claude Code 2.1.237 与 Code Action 1.0.197，行业页保留其工程意义，并注明详见 Claude 专题页；OpenAI 项目同样保留专题页标注。

## 优先动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Google | [ADK 阻止 RemoteA2aAgent 向远端转发凭据请求](https://github.com/google/adk-python/commit/2aea8595fb1c5e0fddef7893a1985dc96dc82692) | 官方主分支提交 | 2026-08-20 07:48 +08:00，已核实 | 同时清理含 AuthConfig 的 function call 与 response，避免 OAuth client secret 或 service-account key 被历史重放给远端 peer；尚未发布。 | 修补跨 Agent A2A 会话中的直接凭据泄漏路径。 |
| Google | [ADK 本地代码执行改用普通子解释器](https://github.com/google/adk-python/commit/c244a9c8330589d93046823ea21da80ae33a1406) | 官方主分支提交 | 2026-08-20 08:38 +08:00，已核实 | UnsafeLocalCodeExecutor 从 multiprocessing spawn 改为普通子解释器；发布方测试把简单程序启动从约 2.3 秒降至约 35 毫秒，并避免子进程异常退出时永久等待。 | 显著降低本地代码工具的固定延迟，但数字仍是提交方测试。 |
| Google | [ADK 修复 support_cfc 下函数重复执行](https://github.com/google/adk-python/commit/c986ff0fceedef2107485cf136dc3b70acec32d8) | 官方主分支提交 | 2026-08-20 09:04 +08:00，已核实 | support_cfc=True 时直接采用 live 路径已完成的后处理，避免同一工具再次进入普通 postprocess；尚未发布。 | 防止 Agent 因 runtime 路径重叠重复产生副作用。 |
| Microsoft | [Agent Framework 修复编排中的 A2A 输入处理](https://github.com/microsoft/agent-framework/commit/435201b71b9685eef4379fd1b1eeea932684b9e8) | 官方主分支提交 | 2026-08-20 07:55 +08:00，已核实 | Python A2A 显式拒绝空 invocation，并让 group chat 的 INPUT_REQUIRED 可通过 checkpoint 恢复到同一 remote task；尚未发布。 | 补齐远端 Agent 暂停、用户补充输入与持久化恢复链路。 |
| LangChain | [Deep Agents Code 0.1.58](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.58) | 官方正式发布 | 2026-08-20 06:19 +08:00，已核实 | 要求 Python 3.12+，正式交付 MCP viewer 重新认证、GLM-5.3 路由、可中断 offload、MCP stderr 日志和多项终端交互修复。 | 把此前分散的开发信号收束为可安装版本，并明确了一项运行环境 breaking change。 |
| LangChain | [Deep Agents Code 加入管理员托管配置](https://github.com/langchain-ai/deepagents/commit/d419122bfb748a823d1fa7cfd7207c428f4fbcab) | 官方主分支提交 | 2026-08-20 06:57 +08:00，已核实 | 固定 OS 路径的只读 `managed_config.toml` 可覆盖用户配置；安全边界键无法执行时 fail closed，尚未进入新 release。 | 编码 Agent 的企业治理从用户偏好推进到管理员强制策略与来源追踪。 |
| Google | [ADK 恢复工作流节点认证时校验原始 OAuth 状态](https://github.com/google/adk-python/commit/5b59139e0ec944a8618d4a1df4182db464337566) | 官方主分支提交 | 2026-08-20 05:44 +08:00，已核实 | 恢复凭证使用节点自身 auth config，并要求 OAuth 响应回传请求生成的 state；尚未发布。 | 缩小 HITL 工作流恢复时被替换 token endpoint 或混淆授权响应的风险。 |
| Google | [ADK 阻断 agent-config 中的 YAML / ruamel 反序列化](https://github.com/google/adk-python/commit/924d802f5bb232a294df8e5a5c036d000077e19a) | 官方主分支提交 | 2026-08-20 03:12 +08:00，已核实 | 配置代码引用检查扩大到阻断 YAML 与 ruamel 反序列化路径；仍是未发布主分支修复。 | 降低 Agent 配置加载不受信对象的风险。 |
| Google | [ADK 校验 Spanner 搜索工具的 SQL 标识符](https://github.com/google/adk-python/commit/8d2f2779e6143aaa75460ca698476b4114759d5b) | 官方主分支提交 | 2026-08-20 03:52 +08:00，已核实 | 对表名、列名和附加过滤器引入标识符与操作符校验；提交包含对应测试。 | Agent 数据工具的输入边界开始显式收紧。 |
| Microsoft | [Agent Framework 修复 A2A 流式 artifact 更新](https://github.com/microsoft/agent-framework/commit/d29e7be7fd7277f15e37ddda5b6bf154c9ef428b) | 官方主分支提交 | 2026-08-20 03:28 +08:00，已核实 | .NET A2A 路径修复流式 artifact 更新处理；不能外推为已发布版本。 | 提升跨 Agent 协议流式状态传递的可靠性。 |
| LangChain | [Deep Agents 支持从 viewer 重新认证 MCP server](https://github.com/langchain-ai/deepagents/commit/d7c24d85f7b4d478116f022e1e969ddac89aeb2f) | 官方主分支提交 | 2026-08-20 02:49 +08:00，已核实 | viewer 增加 MCP server 重新认证入口；仅代表主分支开发信号。 | 托管编码 Agent 的 MCP 凭证恢复路径更完整。 |
| Microsoft | [Agent Framework 移除 AG-UI history 特例](https://github.com/microsoft/agent-framework/commit/e2938f4531fed8003ea118e9b49b4e3df7e43090) | 官方主分支提交 | 2026-08-20 00:50 +08:00，已核实 | .NET 路径移除 AG-UI history 特例；提交说明较短，不能外推为正式版本能力。 | 是 Agent 前端协议与会话历史趋向统一的工程信号。 |
| Google | [ADK 补齐 LiteLLM/Anthropic prompt-cache token 计量](https://github.com/google/adk-python/commit/d0b33a0569c940be0364cd4e0d4317a99bf52330) | 官方主分支提交 | 2026-08-20 00:44 +08:00，已核实 | 从用量元数据提取 cache read/write tokens 并写入遥测，用于更准确计算 Bedrock 等提供方的 prompt caching 成本。 | 多模型 Agent 的成本观测开始细化到缓存读写。 |
| Qwen | [Qwen Code 显示首轮已加载上下文文件](https://github.com/QwenLM/qwen-code/commit/39fc769d3a49a883d250914d8f705b6b3735720c) | 官方主分支提交 | 2026-08-19 23:53 +08:00，已核实 | CLI 在首个可送模提示前一次性显示实际注入的 QWEN.md/自定义上下文文件，并处理 ACP/daemon 工作目录与控制字符。 | 提高系统提示来源的可见性，便于发现上下文配置错误。 |
| LangChain | [Deep Agents 加入 OpenRouter GLM-5.3 选项](https://github.com/langchain-ai/deepagents/commit/6295924d428fb061945cd83940c47c765091353b) | 官方主分支提交 | 2026-08-19 23:50 +08:00，已核实 | Deep Agents Code 模型选择器加入 `z-ai/glm-5.3`；仅证明该集成和 OpenRouter 模型 ID，不等同智谱官方发布范围声明。 | 展示编码 Agent 的模型路由扩展，但需与模型官方信息分开看待。 |
| OpenAI | [Agents SDK JavaScript v0.17.0](https://github.com/openai/openai-agents-js/releases/tag/v0.17.0) | 官方正式发布 | 2026-08-19 22:38 +08:00，已核实 | 发布 approval checkpoint fail-closed、guardrail 批次结清与 replay 脱敏；详见 OpenAI 专题页。 | 强化 Agent 恢复与安全裁决的一致性。 |
| OpenAI | [Agents SDK Python v0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0) | 官方正式发布 | 2026-08-19 21:44 +08:00，已核实 | 汇总 guardrail、Responses 终态、usage、handoff、tracing 与 sandbox 修复；详见 OpenAI 专题页。 | 是开发者 Agent runtime 的集中加固版本。 |
| Liquid AI | [LFM2.5 Q4_0 量化感知蒸馏](https://www.liquid.ai/blog/qad) | 官方技术发布 | 2026-08-19，精确时刻未确认 | 发布四个 LFM2.5 QAD Q4_0 GGUF；质量与边缘吞吐数字均为发布方自评。 | 为端侧低比特部署提供新的官方 checkpoint 与方法说明。 |

## 常规动态

| 厂商 | 标题 | 日期 / 状态 | 摘要 |
|---|---|---|---|
| Google | [ADK 让 SQLite 状态合并遵循 `dict.update()` 语义](https://github.com/google/adk-python/commit/e4ba7040fb12f9a3ea468052567ec174dc31d443) | 2026-08-20 10:57 +08:00，主分支 | 避免 `json_patch` 深合并对象和把 null 当删除，令 app/user/session state delta 顶层键始终覆盖旧值；尚未发布。 |
| Qwen | [Qwen Code 暴露并持久化工作流执行状态](https://github.com/QwenLM/qwen-code/commit/63fe7c174a6a5dc50d25f78c214fb671df5a3547) | 2026-08-20 11:41 +08:00，主分支 | 增加 workflow snapshot、事件边界、lineage 与 replay 校验，支持重启后保持执行投影；尚未发布。 |
| Qwen | [Qwen Code 加入 Agent View PTY workers](https://github.com/QwenLM/qwen-code/commit/bba2e1a1845445d312b681a1cf3313dbe4d1591d) | 2026-08-20 11:11 +08:00，主分支 | 引入 supervisor/PTY worker、鉴权、socket ownership、流式 attach 与 backpressure 防护；尚未发布。 |
| Google | [ADK 清理 PlanReActPlanner 内部标签](https://github.com/google/adk-python/commit/ac8dad258065ff58e91a1ca44afc72368250d241) | 2026-08-20 08:33 +08:00，主分支 | 从最终文本与 thought block 中移除 PLANNING、REASONING、ACTION、REPLANNING 等内部标记；尚未发布。 |
| Google | [ADK 将异步函数响应配对到对应调用](https://github.com/google/adk-python/commit/deee6d2c474ccb9710e0b25a0b290bb76cc54c45) | 2026-08-20 07:49 +08:00，主分支 | 当 function-call ID 重用或长任务多次汇报进度时，把 response 归属到之前最近的同 ID call，并保留最终更新。 |
| Google | [ADK 按连接维持 MCP Agent session](https://github.com/google/adk-python/commit/4e68bad19953a4b2cf5facca99108eb94f872663) | 2026-08-20 07:13 +08:00，主分支 | 兼容 MCP SDK 2.x 每次请求新建 ServerSession 的行为，改用底层 connection 作为会话键，避免工具每调用一次就丢失 Agent 对话。 |
| LangChain | [Deep Agents 让工具参数校验错误可恢复](https://github.com/langchain-ai/deepagents/commit/a7027edc6449e9a7dbf0e082b8747d0999125ca2) | 2026-08-20 08:27 +08:00，主分支 | ask_user 的模型生成参数不合法时改为错误 ToolMessage，让模型可修正重试；非预期异常仍 fail closed。 |
| NVIDIA | [NeMo Guardrails 默认构造不再接管日志配置](https://github.com/NVIDIA-NeMo/Guardrails/commit/afe020ecdb6f9cdf9cc4e9b2f3d87ce145c023e7) | 2026-08-20 10:10 +08:00，主分支 | 默认 Guardrails 构造不再附加 handler 或关闭日志传播，只有 verbose=True 才显式配置 DEBUG；尚未发布。 |
| Google | [ADK 回收 MCP session pool 的空闲会话](https://github.com/google/adk-python/commit/69a3ca5e119a821bc375246f0bfa2e9e2cfefc79) | 2026-08-20 05:58 +08:00，主分支 | 为 MCP session pool 加入空闲回收，并保护执行中的调用不被 sweep 中途关闭；尚未发布。 |
| Google | [ADK 压缩阈值计入工具调用与响应字符](https://github.com/google/adk-python/commit/66908e4c613ff3686e85374696640e84c4d0f20f) | 2026-08-20 06:20 +08:00，主分支 | token 阈值估算不再只看文本，也计入 function call 参数和 function response 内容。 |
| Google | [ADK 原子发布文件工件版本](https://github.com/google/adk-python/commit/94475c9a76c7c71246d6f5e4b083b3c3ee6869c0) | 2026-08-20 05:33 +08:00，主分支 | 文件 artifact 版本分配与发布改为原子路径，降低并发写入的版本竞争。 |
| Google | [ADK 写入 JSON 状态列前清洗 state delta](https://github.com/google/adk-python/commit/3f9e6bec37cd66315d619a2dbb339f545c86e09a) | 2026-08-20 05:37 +08:00，主分支 | 在持久化到 JSON state columns 前清洗状态增量，避免不可序列化值破坏写入。 |
| Google | [ADK 修复异步 generator 的 contextvars 泄漏](https://github.com/google/adk-python/commit/bb86bdd737c1792d40e05c1d388d9ad4020aa702) | 2026-08-20 03:53 +08:00，主分支 | 在异步 Agent 运行和 live 路径中围绕每次 yield 恢复调用者 OpenTelemetry context，避免上下文跨任务泄漏。 |
| Microsoft | [Agent Framework 在快照间保留 AG-UI tool message ID](https://github.com/microsoft/agent-framework/commit/26b9200c214f24526d94a8a2b90b8e255a2a48ef) | 2026-08-20 01:43 +08:00，主分支 | Python 路径修复快照恢复后 tool message ID 丢失。 |
| LangChain | [Deep Agents 记录 stdio MCP server stderr](https://github.com/langchain-ai/deepagents/commit/a61bc6feeb6aefd780ad8435acc9ce2057fe9151) | 2026-08-20 03:18 +08:00，主分支 | 将 stdio MCP server 的 stderr 纳入 logger，改善失败诊断。 |
| OGX | [允许关闭 chat completions 持久化](https://github.com/ogx-ai/ogx/commit/a03a71e45fb0832d55cd27d95fa8c3e3cef51a35) | 2026-08-20 02:34 +08:00，主分支 | 新增关闭 chat completions persistence 的配置；仅为官方仓库开发信号。 |
| Hugging Face | [Transformers 5.15.1](https://github.com/huggingface/transformers/releases/tag/v5.15.1) | 2026-08-19 18:50 +08:00，正式发布 | 修复生成、配置、CUDA 插值与视频设备等问题。 |
| Microsoft | [Agent Framework agent-hooks 拦截契约](https://github.com/microsoft/agent-framework/commit/10bf8d7d9ef56304cb6936452e64c90c99850f6c) | 2026-08-19 18:48 +08:00，主分支 | 引入 fail-closed 拦截、流式缓冲与持久化前裁决；尚未发布。 |
| Cohere | [Cohere Python 7.0.9](https://github.com/cohere-ai/cohere-python/releases/tag/7.0.9) | 2026-08-19 18:59 +08:00，正式发布 | 修复流式 dataset 响应关闭，并在 API key 为空时省略 Authorization header。 |
| Qwen | [Qwen Code 0.21.14](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14) | 2026-08-19 10:46 +08:00，正式发布 | 覆盖会话、审阅、记忆、媒体引用与 autofix。 |
| Qwen | [Transcript 契约预验证](https://github.com/QwenLM/qwen-code/commit/5003ab3c7f0d35ce00de61ed43a6698fcd2cc25f) | 2026-08-19 22:13 +08:00，主分支 | 固化 transcript 证据与 fail-closed 门禁；提交本身明确仍有未完成验收，不写成正式能力。 |
| Hugging Face | [Trainer 长度分组评估顺序确定化](https://github.com/huggingface/transformers/commit/94f09cfec149050b5355bab7f207ac69e21f1a02) | 2026-08-20 00:02 +08:00，主分支 | 为 LengthGroupedSampler 使用固定 generator，使多样本 batch 的评估顺序可复现。 |

## Anthropic / OpenAI 行业信号

- [OpenAI Agents SDK JavaScript 拒绝不成功的 Responses 终态](https://github.com/openai/openai-agents-js/commit/c3bfb2c737569e34d64ffd45c72a8e839f8bd29c)并保留失败请求的已计费用量；主分支尚未发布，详见 OpenAI 专题页。
- [OpenAI Agents SDK Python 让显式 provider 选项优先于默认 client](https://github.com/openai/openai-agents-python/commit/bfb981d63e10ab21adf1d2fa8e1df42379c8ecc8)，覆盖 core 与 voice 路径；主分支尚未发布，详见 OpenAI 专题页。
- [OpenAI Agents SDK Python 补齐当前 TTS voice 类型](https://github.com/openai/openai-agents-python/commit/9fd6c81c597785500a4a7676ea7cffed47cbf333)，加入 ballad、verse、marin 与 cedar；主分支尚未发布，详见 OpenAI 专题页。
- [Claude Code v2.1.237](https://github.com/anthropics/claude-code/releases/tag/v2.1.237) 修复 gateway / 自定义 base URL 的 prompt caching，并新增 Concise 输出风格；详见 Claude 专题页。
- [Claude Code Action v1.0.197](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.197)中和 actions/checkout v6+ include 布局下的 checkout credential；详见 Claude 专题页。
- [Claude Code v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236) 增加跨会话 idle 通知，并修复 Remote Control、自托管 runner 交接和后台 session；详见 Claude 专题页。
- [OpenAI 的 Zero Data Retention 与 Private Safety Processing 公告](https://openai.com/index/offering-zero-data-retention-for-frontier-models)确认符合条件的 API 客户继续可用 ZDR，新处理方案仍在早期客户测试；详见 OpenAI 专题页。
- [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235) 更新权限对话框、subagent 提示与后台 cloud session 资源效率；详见 Claude 专题页。
- [Sam Altman 关于暂停部分 frontier RL 训练的帖子](https://x.com/sama/status/2089787807611195475)只说明为满足 alignment、安全与监控标准而暂停部分训练，未披露模型、范围或期限；详见 OpenAI 专题页，不扩大为全面停训。

## 播客

截止 12:11，Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 与厂商播客入口未发现可同时核实原始发布日期且落入主窗口的新一期；无法稳定取得精确时刻的候选未写成确认发布。

## 近两日补充

- [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)（2026-08-18 22:30 +08:00）加入 Foundry hosted session、用户身份透传与 Agent 并发工具选择，是托管会话的重要补充。
- [百度 Q2 2026 财报会](https://ir.baidu.com/events/event-details/q2-2026-baidu-earnings-conference-call)官方页面确认会议发生于 8 月 18 日；截止时结果页未稳定可访问，因此不采用网络二手流传的收入增速和金额。

## 近三日补充

未发现可同时核实原始来源与时间、且落入 2026-08-17 12:11:03 至 2026-08-18 12:11:03 的新增条目；不以搜索索引日期代替发布时间。

## 日期未确认

- Liquid AI 原文只标 2026-08-19，精确时刻未展示；因此纳入当日技术动态，但不声称其位于窗口内某个具体小时。

## 观察池

- [Agent.ai 平台迁移公告](https://agent.ai/transition)称独立平台将在 2026-08-22 退役并转向 HubSpot Agent Builder；原页未给可靠发布日期，作为产业整合信号观察，不写成过去 24 小时新闻。
- 百度财报的 AI Cloud 指标在多个二手入口出现，但官方结果正文在截止时未稳定可见，等待后续轮次复核。

## 来源链接

正文已直接链接全部 52 个保留来源；同页 URL 已去重。

## 采集状态

- 已检查：规范列出的国内外厂商、研究机构、Agent 平台、官方 GitHub feeds 与六类播客。
- 失败来源：OpenAI News/xAI/部分中国厂商和播客入口存在 403、脚本依赖、索引滞后或精确时刻缺失；百度结果页尚未稳定显示；部分次级 GitHub 仓库的未认证 API 后段触发限流，核心新增改用官方 patch/HTML 复核。
- 初始候选：375 条（在上一轮 363 个候选基础上，增量复核 12 个核心仓库与厂商/播客入口候选）；保留 52 个唯一来源。
- 二次补搜：未运行（最终 sources 非 0，secondPass=false）。

一句话：本轮增量主轴是 Agent runtime 的可恢复状态与失败语义继续收紧，Qwen 工作流/PTY 执行面和 OpenAI SDK provider 边界获得主分支加固。

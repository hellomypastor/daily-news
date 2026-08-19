---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T07:11:12+08:00"
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
  - "Agent.ai"
  - "Agents SDK"
  - "AI"
  - "Anthropic"
  - "Artifacts"
  - "Baidu"
  - "Claude Code"
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
  - "OAuth"
  - "Observability"
  - "OGX"
  - "OpenAI"
  - "Persistence"
  - "Privacy"
  - "Quantization"
  - "Qwen"
  - "Qwen Code"
  - "Release"
  - "Reliability"
  - "Reproducibility"
  - "Research"
  - "Runtime"
  - "Safety"
  - "SDK"
  - "Security"
  - "Spanner"
  - "State"
  - "Telemetry"
  - "Transformers"
  - "Validation"
  - "Watchlist"
  - "ZDR"
---

## 扫描结论

主窗口：2026-08-19 07:11:12 至 2026-08-20 07:11:12（Asia/Shanghai）；近两日：2026-08-18 07:11:12 至 2026-08-19 07:11:12；近三日：2026-08-17 07:11:12 至 2026-08-18 07:11:12。本轮新增 Deep Agents Code 0.1.58 正式发布，以及 LangChain 企业托管配置、Google ADK 会话回收、压缩计数、OAuth 恢复和工件持久化等主分支信号；主分支提交均标为开发信号，不等同正式上线。Anthropic/OpenAI 项目在本页保留行业意义，并注明详见专题页。

## 优先动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
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

- [Claude Code v2.1.236](https://github.com/anthropics/claude-code/releases/tag/v2.1.236) 增加跨会话 idle 通知，并修复 Remote Control、自托管 runner 交接和后台 session；详见 Claude 专题页。
- [OpenAI 的 Zero Data Retention 与 Private Safety Processing 公告](https://openai.com/index/offering-zero-data-retention-for-frontier-models)确认符合条件的 API 客户继续可用 ZDR，新处理方案仍在早期客户测试；详见 OpenAI 专题页。
- [Claude Code v2.1.235](https://github.com/anthropics/claude-code/releases/tag/v2.1.235) 更新权限对话框、subagent 提示与后台 cloud session 资源效率；详见 Claude 专题页。
- [Sam Altman 关于暂停部分 frontier RL 训练的帖子](https://x.com/sama/status/2089787807611195475)只说明为满足 alignment、安全与监控标准而暂停部分训练，未披露模型、范围或期限；详见 OpenAI 专题页，不扩大为全面停训。

## 播客

截止 07:11，Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 与厂商播客入口未发现可同时核实原始发布日期且落入主窗口的新一期；无法稳定取得精确时刻的候选未写成确认发布。

## 近两日补充

- [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)（2026-08-18 22:30 +08:00）加入 Foundry hosted session、用户身份透传与 Agent 并发工具选择，是托管会话的重要补充。
- [百度 Q2 2026 财报会](https://ir.baidu.com/events/event-details/q2-2026-baidu-earnings-conference-call)官方页面确认会议发生于 8 月 18 日；截止时结果页未稳定可访问，因此不采用网络二手流传的收入增速和金额。

## 日期未确认

- Liquid AI 原文只标 2026-08-19，精确时刻未展示；因此纳入当日技术动态，但不声称其位于窗口内某个具体小时。

## 观察池

- [Agent.ai 平台迁移公告](https://agent.ai/transition)称独立平台将在 2026-08-22 退役并转向 HubSpot Agent Builder；原页未给可靠发布日期，作为产业整合信号观察，不写成过去 24 小时新闻。
- 百度财报的 AI Cloud 指标在多个二手入口出现，但官方结果正文在截止时未稳定可见，等待后续轮次复核。

## 来源链接

正文已直接链接全部 35 个保留来源；同页 URL 已去重。

## 采集状态

- 已检查：规范列出的国内外厂商、研究机构、Agent 平台、官方 GitHub feeds 与六类播客。
- 失败来源：OpenAI News/xAI/部分中国厂商和播客入口存在 403、脚本依赖、索引滞后或精确时刻缺失；百度结果页尚未稳定显示。
- 初始候选：338 条（在上一轮 316 个候选基础上，增量复核 22 个核心仓库 feed 条目）；保留 35 个唯一来源。
- 二次补搜：未运行（最终 sources 非 0，secondPass=false）。

一句话：本轮主轴是 Deep Agents Code 正式收束 MCP 与终端修复，同时企业托管策略、OAuth 恢复、会话回收和持久化一致性继续下沉到 Agent runtime。

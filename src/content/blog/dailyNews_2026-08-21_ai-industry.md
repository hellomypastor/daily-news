---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-21T00:00:00+08:00"
updatedAt: "2026-08-21T15:19:43+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "Google ADK adds configurable maximum LLM calls"
featuredUrl: "https://github.com/google/adk-python/commit/75679db3fa42521a9316d1f8325225e51f5e9090"
featuredSummary: "ADK 增加可配置的最大 LLM 调用数。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-08-21 07:13 +08:00"
featuredTags: ["Google ADK","Agent"]
featuredImage: "https://opengraph.githubassets.com/760ce0d5f9f73952b7ab41f5f92f078e3e356972eafe9e5fd6fa170e9dc889d2/google/adk-python/commit/75679db3fa42521a9316d1f8325225e51f5e9090"
featuredImageAlt: "Google ADK Python GitHub commit preview"
featuredImageCaption: "图片来源：Google ADK / GitHub"
tags:
  - "A2A"
  - "Agent"
  - "Agent Registry"
  - "AI"
  - "Anthropic"
  - "Authentication"
  - "Autofix"
  - "Background Task"
  - "Breaking Change"
  - "Callback"
  - "CI"
  - "Claude Code"
  - "Code Review"
  - "Codex"
  - "Deep Agents"
  - "DeepSeek"
  - "Gemini"
  - "Google ADK"
  - "Guardrails"
  - "HITL"
  - "Industry"
  - "LangChain"
  - "Limits"
  - "Long-running Tasks"
  - "MCP"
  - "Memory"
  - "Microsoft"
  - "Model Support"
  - "Multimodal"
  - "NVIDIA"
  - "OpenTelemetry"
  - "Performance"
  - "Persistence"
  - "Qwen Code"
  - "Reasoning"
  - "Release"
  - "Reranking"
  - "Research"
  - "Security"
  - "Session"
  - "Skills"
  - "Tool Calling"
  - "Transformers"
  - "Web Shell"
  - "Workflow"
---

## 今日概览

扫描窗口：2026-08-20 13:02 至 2026-08-21 13:02（Asia/Shanghai）。窗口内可核实的技术动态主要来自官方发布与代码提交：Claude Code 与 Codex 均有版本更新；Google ADK 增加 LLM 调用上限配置、回滚破坏 HITL 确认的 A2A guard，并补强 RemoteA2aAgent 认证；Microsoft Agent Framework 增加托管 Agent 与 Azure Blob 会话持久化，并迁移至新版 MCP 长任务扩展；LangChain、Qwen Code、Hugging Face Transformers 与 NVIDIA NeMo Guardrails 也有明确工程变更。提交事实可核实，但尚不能等同 GA 发布、广泛采用或已完成生产验证。13:02 滚动轮进一步检出 ADK、Microsoft Agent Framework、Qwen Code 与 NeMo Guardrails 的工程增量。

## 优先动态

| 厂商 | 动态 | 类型 / 时间 | 摘要与意义 |
|---|---|---|---|
| Anthropic | [Claude Code v2.1.238](https://github.com/anthropics/claude-code/releases/tag/v2.1.238) | 官方发布，04:33 | 加入 GitHub PR 状态展示并修复多项会话与交互问题；详见 Claude 专题页。 |
| OpenAI | [Codex 0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0) | 官方发布，05:04 | 稳定版本包含会话与工具链变更；完整版本上下文和口碑详见 OpenAI 专题页。 |
| Google | [ADK_MAX_LLM_CALLS](https://github.com/google/adk-python/commit/75679db3fa42521a9316d1f8325225e51f5e9090) | 官方提交，07:13 | 为单次运行增加可配置的最大 LLM 调用数，有助于限制失控循环；默认值与生产策略仍应以正式文档为准。 |
| Google | [回滚破坏 HITL tool confirmation 的 A2A guard](https://github.com/google/adk-python/commit/9a32eba1e271981fd079bdee489b9159c6ecc72a) | 官方提交，06:57 | 提交信息明确说明前一 guard 影响所有 HITL 工具确认；这是代码修复证据，不据此推断所有已发布版本均受影响。 |
| Google | [RemoteA2aAgent 认证支持](https://github.com/google/adk-python/commit/d42c634bd6ef4041440d833327d63969a39315be) 与 [AgentRegistry 认证解析](https://github.com/google/adk-python/commit/d6954946df8b156ab27554ca02d2d6234c8595a1) | 官方提交，03:37 / 06:03 | 补充远程 A2A Agent 的 auth scheme、credential 与注册表解析，是跨 Agent 调用安全边界的重要工程信号。 |
| Microsoft | [Foundry 托管 Agent 状态持久化](https://github.com/microsoft/agent-framework/commit/ab0f7d5d08ce753e17559a0bee94e8b77fa68fa2) | 官方提交，04:38 | 为托管 Agent 补充状态持久化；具体服务可用性和 SLA 仍需看 Foundry 正式文档。 |
| Microsoft | [Azure Blob Storage 会话持久化](https://github.com/microsoft/agent-framework/commit/e6617c407a1d94a9eb8421e1fd3f385ee6da7e13) | 官方提交，02:30 | 增加基于 Blob Storage 的会话保存路径，利于长任务恢复和外部化状态。 |
| Microsoft | [迁移 MCP 2026-07-28 Tasks 扩展](https://github.com/microsoft/agent-framework/commit/96560bbf65973d098e09f38cc69f45826845d08e) | 官方提交，07:26 | .NET 路径的破坏性变更，说明长任务接口跟进新版扩展；升级方需关注兼容性。 |

<figure class="source-image">
  <a href="https://github.com/google/adk-python/commit/75679db3fa42521a9316d1f8325225e51f5e9090"><img src="https://opengraph.githubassets.com/760ce0d5f9f73952b7ab41f5f92f078e3e356972eafe9e5fd6fa170e9dc889d2/google/adk-python/commit/75679db3fa42521a9316d1f8325225e51f5e9090" alt="Google ADK Python GitHub commit preview" loading="lazy" /></a>
  <figcaption><a href="https://github.com/google/adk-python/commit/75679db3fa42521a9316d1f8325225e51f5e9090">图片来源：Google ADK / GitHub</a></figcaption>
</figure>

## 13:02 滚动增量

| 厂商 / 项目 | 动态 | 状态与意义 |
|---|---|---|
| Google ADK | [多模态工具结果可选会话保留](https://github.com/google/adk-python/commit/775c1bd36e205eec65e207ad29fdc4cf2184e47e) 与 [简化默认 LLM 调用上限](https://github.com/google/adk-python/commit/77cfe4349d2c8fba095d39b87048883efd1fd629) | 官方提交；前者提供 opt-in retention，后者延续早间运行上限配置，具体稳定包版本待确认。 |
| Google ADK | [跳过 frontmatter 无效的 Skill 搜索结果](https://github.com/google/adk-python/commit/3c977bc2ef31cf0fd7d94592f660cec5fc68b722)、[Workflow 遵循 before_run_callback 提前退出](https://github.com/google/adk-python/commit/dac18699b9ce423f7e98d1cb245cfdde20b18147) | 分别补强 Skills 输入校验与工作流控制流；均为主分支提交。 |
| Google ADK | [Gemini 与 AnthropicLlm 可注入自定义客户端](https://github.com/google/adk-python/commit/a01d516a6bcf93f12d26a083af587455d0bb2592) | 为代理、传输与测试定制提供接口；涉及 Anthropic 的完整生态动态详见 Claude 专题页。 |
| Microsoft | [统一 OTel GenAI 语义约定版本](https://github.com/microsoft/agent-framework/commit/4e754a636d6d688b35027de4070d64d4f1566d15) 与 [修复 MCP 参数遮蔽远程工具名](https://github.com/microsoft/agent-framework/commit/aeaabe5abf67d1dc36d017118d2c4af2d6b66eef) | 前者明确标记为 Python 破坏性变更，升级方需复核 telemetry；后者修正远程工具调用绑定。 |
| Qwen Code | [Autofix 超预算后审计方案](https://github.com/QwenLM/qwen-code/commit/2c64ebe980e7d0d9d7a97cf1de6dc47014bc3449) 与 [后台 shell 期间保持 turn 展开](https://github.com/QwenLM/qwen-code/commit/e443f26bfc8db038ca655a1f5f8589a9d8d2dded) | 增强自动修复的恢复策略和后台任务可见性；尚未据此推断已进入稳定版。 |
| Qwen Code | [限制 daemon transcript 防止 renderer OOM](https://github.com/QwenLM/qwen-code/commit/54a3a7f6693b0ac50c6459e91cc2cac32983d393) 与 [加固 release CI](https://github.com/QwenLM/qwen-code/commit/a074d3b0423b8c99ea272b598602d7cf0c24b15c) | 分别处理 Web Shell 内存边界与供应链执行面；影响版本待发布说明确认。 |
| NVIDIA | [NeMo Guardrails 支持 reasoning-only 非流式响应](https://github.com/NVIDIA-NeMo/Guardrails/commit/c9d10d7041d2016aa53a5fa0a74d81ff860c1a55) | 与早间 think-tag 修复共同表明 reasoning 输出兼容仍在收敛。 |

## 常规工程更新

| 厂商 / 项目 | 动态 | 状态 |
|---|---|---|
| LangChain | [Fireworks document reranking](https://github.com/langchain-ai/langchain/commit/b8d1ab5946cdb306fa01e0117dbf151f9cd2d308) 与 [1.6.0 release commit](https://github.com/langchain-ai/langchain/commit/ca3acde9b461b74601ec964cae6e31e0abda7990) | 官方仓库已合入；能力范围以对应集成文档为准。 |
| Deep Agents | [deepagents-code 0.1.59 release commit](https://github.com/langchain-ai/deepagents/commit/b650b412988ba53c59830b4207fcdb63c45a9a3c) 与 [tool-call args 线性流式处理](https://github.com/langchain-ai/deepagents/commit/57bfa6bdc57056265047744dc32f3337a964ddc8) | 版本与性能修复信号均来自官方提交，未独立基准测试。 |
| Qwen | [Qwen Code v0.21.14 release commit](https://github.com/QwenLM/qwen-code/commit/808c9c9f3d64bb54d5ee0265658c48bf4826ceda) 与 [Aone Code review 支持](https://github.com/QwenLM/qwen-code/commit/5715782279938080ee664004db4b93ae19231384) | 版本提交可核实；后者通过 a1 CLI 向 Aone Code 发表评论，适用范围以仓库文档为准。 |
| Hugging Face | [Transformers 接入 ESMC 与 ESMFold2](https://github.com/huggingface/transformers/commit/c8df3fc99546229bf4c7ab7d188973af1a64fc2e) | 官方提交；是模型实现接入，不等同模型今日首次发布。 |
| Hugging Face | [修复 DeepSeek V2 默认词表大小](https://github.com/huggingface/transformers/commit/e4dd56a373b51a2ed2a6330b64f9d44c51260d5c) | 兼容性修复；影响范围未作独立复测。 |
| NVIDIA | [NeMo Guardrails 处理 reasoning content 的 think tags](https://github.com/NVIDIA-NeMo/Guardrails/commit/d49ff4125271fbc6fba809b9acfb86b28a8dd388) | 官方提交；服务端输出兼容性修复。 |

## 厂商覆盖与无新增

Anthropic 与 OpenAI 的窗口内版本已在优先动态交叉引用，并分别注明详见专题页。Meta AI、xAI、Mistral、Cohere、ByteDance Seed/豆包、百度、腾讯、DeepSeek、智谱、Moonshot/Kimi、StepFun 与 MiniMax 未发现能够同时打开原文并核实落入 24 小时窗口的新公告。厂商名仅是扫描范围，不据此推断产品更新。

## 播客

Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 与可访问厂商播客入口均已检查；截至截止时间没有找到可稳定核验为窗口内发布的新一期。集合页缺精确时分的候选没有被提升为今日事实。

## 近两日补充

本次新日期页不以窗口外内容充数；后续滚动扫描若发现 24–48 小时内漏项，将保留在本节并标明原始日期。

## 近三日补充

暂无新增。

## 日期未确认

部分中国厂商和播客集合页存在更新提示但缺少稳定原文日期或精确时分，暂不形成独立事实条目；后续若原始页面补齐日期再转入相应分区。

## 观察池

- Google、Microsoft、LangChain、Qwen、Hugging Face 与 NVIDIA 的条目主要是主分支提交；是否已经进入稳定包、托管服务或默认部署需继续观察。
- 搜索摘要中出现的新型号、融资与发布日期说法没有可打开的一手证据，因此未写成已确认动态，也不据此推断厂商路线。

## 今日结论

窗口内最明确的方向是 Agent 运行控制、远程认证、持久化与长任务协议继续工程化；本轮证据更接近代码落地而非大规模产品发布。

## 采集状态

- 已检查：Anthropic、OpenAI、Google、Meta、Microsoft、xAI、Mistral、Cohere、Qwen/Alibaba、ByteDance、百度、腾讯、DeepSeek、智谱、Moonshot/Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain、LlamaIndex 及六组播客入口；并复核十个核心官方 GitHub 仓库。
- 失败/受限：部分入口返回 403、依赖脚本或无精确时间；部分播客和中国厂商集合页无法稳定核验新一期；社交互动量未登录不可稳定复核。
- 初始候选 114 条，保留 30 个唯一来源；最终来源非 0，未触发二次补搜（secondPass=false）。

---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-19T00:00:00+08:00"
updatedAt: "2026-08-19T01:12:02+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "Agent Framework .NET 1.18.0"
featuredUrl: "https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0"
featuredSummary: "Microsoft Agent Framework 正式发布 .NET 1.18.0。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-08-18 22:30 +08:00"
featuredTags: ["Microsoft","Agent Framework","Release"]
tags:
  - "Agent"
  - "Agent Framework"
  - "Agent SDK"
  - "AI"
  - "Anthropic"
  - "Authentication"
  - "BrowserSkill"
  - "Claude"
  - "Claude Code"
  - "Claude Desktop"
  - "CLI"
  - "Code Review"
  - "Codex"
  - "Cowork"
  - "Date Unconfirmed"
  - "Deep Agents"
  - "Education"
  - "Evaluation"
  - "Gemini"
  - "Generation"
  - "GitHub Action"
  - "Google"
  - "Guardian"
  - "Hugging Face"
  - "Industry"
  - "Integration"
  - "LangChain"
  - "LlamaIndex"
  - "Memory"
  - "Microsoft"
  - "Open Source"
  - "OpenAI"
  - "PowerShell"
  - "Prerelease"
  - "Quantization"
  - "Qwen"
  - "Qwen Code"
  - "Reasoning"
  - "Release"
  - "Research"
  - "Retrieval"
  - "Review"
  - "Safety"
  - "Schema"
  - "Security"
  - "Skills"
  - "Tencent"
  - "Tools"
  - "Transformers"
  - "Vision"
---

## 扫描结论

主窗口：2026-08-18 01:12 至 2026-08-19 01:12（Asia/Shanghai）；近两日为 2026-08-17 01:12 至 2026-08-18 01:12，近三日为 2026-08-16 01:12 至 2026-08-17 01:12。本轮窗口末端出现一组可核实的 Agent 工程增量：Microsoft Agent Framework .NET 1.18.0 与 Deep Agents 0.7.7 已正式发布；Transformers 合入 NVFP4；Codex、Qwen Code、LangChain 和 LlamaIndex 则是已合入但尚未形成正式版本的主分支信号。

## 优先动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Microsoft | [Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0) | 官方 GitHub 发布 | 2026-08-18 22:30 +08:00，已核实 | 正式发布页确认此前仅见于版本号提交的 .NET 1.18.0；发布页本身未列详细说明，不外推功能。 | 把窗口内的“发布准备信号”提升为可确认 release，但具体能力仍以包和后续说明为准。 |
| LangChain | [Deep Agents 0.7.7](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.7) | 官方 GitHub 发布 | 2026-08-18 23:07 +08:00，已核实 | 发布 Deep Agents Python 库 0.7.7；发布页可确认版本与时刻，具体变更需结合提交记录。 | Hosted/本地 Agent 编排库得到正式版本承载。 |
| Hugging Face | [Transformers 合入 NVFP4 量化](https://github.com/huggingface/transformers/commit/80c667443da1c5cfbd258f46ecceee09950f544a) | 官方主分支提交，非正式发布 | 2026-08-18 23:05 +08:00，已核实 | 增加 NVFP4 量化支持及相应配置、集成与测试；截止时间前未见对应稳定版。 | 为低精度推理与显存优化提供上游实现信号，但仍需等待 release。 |
| OpenAI | [Codex fail-closed PowerShell lowerer](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd) | 官方主分支提交，非正式发布 | 2026-08-18 22:59 +08:00，已核实 | 新增基于 Tree-sitter 的保守 PowerShell 命令降级器；动态表达式、解析恢复与不支持结构一律拒绝。详见 OpenAI 专题页。 | 明确收紧 Windows shell 的安全判定边界，但提交注明生产调用迁移仍待后续。 |
| OpenAI | Codex 认证、记忆与 Guardian 边界更新 | 官方主分支提交组，非正式发布 | 2026-08-18 22:14 至 2026-08-19 00:38 +08:00，已核实 | [拒绝 memory workspace 符号链接](https://github.com/openai/codex/commit/a04940cb12cca43510aaf8d601ce42352f0902cb)、[阻止自定义 provider 继承环境认证](https://github.com/openai/codex/commit/e13c1d569d953ecac06a09cf5663fb3cd405636d)，并把 [node_repl 截图纳入 Guardian v2 review](https://github.com/openai/codex/commit/9b9b614b02ba04df55479284749c5cbbed695c24)。详见 OpenAI 专题页。 | 连续收紧凭据、符号链接和审阅证据边界，仍不能写成正式产品发布。 |

## 常规动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Qwen | [Qwen Code sandboxed verification flakiness gate](https://github.com/QwenLM/qwen-code/commit/f0dcdfc1570ed4e8852060ff55e8b37f61827240) | 官方主分支提交，非正式发布 | 2026-08-18 23:26 +08:00，已核实 | Triage 流程加入确定性的 flaky 判定门槛，避免一次性失败直接决定验证结论。 | 改善 Agent 自动验证对非确定性测试的处理；仍待正式版本。 |
| Qwen | [Qwen Code /review 纯文本评论与严重度归属](https://github.com/QwenLM/qwen-code/commit/081a96d86459b618fdba2d153f784d9226f37d06) | 官方主分支提交，非正式发布 | 2026-08-18 22:47 +08:00，已核实 | 调整 review 评论的纯文本呈现，并让严重度标记遵循 review.attribution 设置。 | 影响自动评审的下游展示与策略一致性，但不是 release。 |
| LangChain | [严格工具 schema 要求嵌套属性完整](https://github.com/langchain-ai/langchain/commit/65e5e3cfa36c6fff2897140a1bfb5fd35de1bdbd) | 官方主分支修复，非正式发布 | 2026-08-19 01:08 +08:00，已核实 | strict tool schema 会把所有嵌套 object 属性纳入 required，以保持递归严格性。 | 减少工具调用 schema 在深层对象处失去严格约束的风险。 |
| LangChain | [保留 reasoning item 边界](https://github.com/langchain-ai/langchain/commit/32c15bbbd5538677a750229f4f732ad70b8903f4) | 官方主分支修复，非正式发布 | 2026-08-19 00:59 +08:00，已核实 | OpenAI 集成修复 reasoning item 边界保留；截止时间前未见对应 release。 | 有助于多段推理事件的结构一致性，不代表模型能力变化。 |
| LlamaIndex | [Google GenAI 默认模型改为 Gemini 3.7 Flash](https://github.com/run-llama/llama_index/commit/30e759af1f0ff1f4c062bc13f90c7236fae06c65) | 官方项目主分支提交，非 Google 发布 | 2026-08-19 00:37 +08:00，已核实 | LlamaIndex 的 Google GenAI 集成与文档修改默认模型；这是 LlamaIndex 客户端选择，不能据此宣称 Google 发布新模型。 | 默认值变更可能影响新项目行为，需与 Google 官方文档单独核对。 |
| OpenAI | [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) | 官方 GitHub 预发布 | 2026-08-18 03:27 +08:00，已核实 | 发布页无变更说明，不推断具体功能。详见 OpenAI 专题页。 | 可确认版本存在，功能判断仍应等待 changelog 或稳定版。 |
| Anthropic | [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234) | 官方 GitHub 发布 | 2026-08-18 04:20 +08:00，已核实 | 覆盖 GitLab MR、用量重置续跑、Remote Control、安全与可靠性修复。详见 Claude 专题页。 | Claude 编码主工具获得正式更新。 |
| Anthropic | [Agent SDK TypeScript v0.3.234](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.234) | 官方 GitHub 发布 | 2026-08-18 04:21 +08:00，已核实 | 同步 VCS、权限来源、effort 初始化与类型修正。详见 Claude 专题页。 | Agent 集成接口获得版本化更新。 |
| Anthropic | [Claude Code Action v1.0.194](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194) | 官方 GitHub 发布 | 2026-08-18 04:25 +08:00，已核实 | 加强路径与附件限制，修补依赖漏洞并改进 PR 上下文。详见 Claude 专题页。 | CI/评审 Agent 的安全边界和上下文处理同步更新。 |
| LangChain | [Deep Agents CLI 0.1.57](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.57) | 官方 GitHub 发布 | 2026-08-18 12:31 +08:00，已核实 | 增加冷缓存提示、可调整输入、多选提问、ACP 审批模式和模型选择，并修复恢复与转录问题。 | Agent CLI 的审批和交互能力获得正式更新。 |
| Tencent | [EVIE-Preview-4.5B](https://github.com/Tencent/EVIE-Preview-4.5B) | 官方新公开模型仓库 | 2026-08-18，已核实 | 腾讯公开 4.54B 多语言视觉文档检索模型；仓库中的榜单数据仍属发布方自报。 | 为视觉文档检索提供公开权重和复现入口。 |
| Tencent | [BrowserSkill 支持跨进程 iframe](https://github.com/Tencent/BrowserSkill/commit/c7252529f429e769302f060ba0168061a734f712) | 官方主分支提交，非正式发布 | 2026-08-18 21:16 +08:00，已核实 | 扩展 frame geometry、引用与交互路径，使浏览器 Agent 可观察和操作 OOPIF。 | 改善复杂 iframe 页面的 Agent 覆盖，仍待 release。 |
| Hugging Face | [Transformers generation_config 优先级修复](https://github.com/huggingface/transformers/commit/bc7772617f789287d7b754478bab38799192765a) | 官方主分支修复，非正式发布 | 2026-08-18 22:02 +08:00，已核实 | 文本生成 pipeline 不再用 pipeline 默认值覆盖模型自身 generation_config。 | 避免部署时模型级生成参数被静默改写。 |

## 播客与访谈

主窗口内，Latent Space、No Priors、The Cognitive Revolution、a16z AI 与厂商播客入口未发现可同时确认原始页面和发布时间的新一期；Dwarkesh 入口直接抓取返回 403，搜索索引也未显示可核实的新节目。

## 近两日补充（24–48 小时）

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| OpenAI | [The Defender's Window](https://openai.com/index/the-defenders-window) | 官方安全文章 | 2026-08-17 13:30 +08:00，已核实 | OpenAI 说明其对 AI 网络安全攻防变化与防护实践的判断。详见 OpenAI 专题页。 | 提供厂商对 Agent 化安全能力和防御窗口的正式立场。 |
| Anthropic | [claude-academy-guide Skill](https://github.com/anthropics/skills/commit/89dcaa3a283f79ed84fd8fe53e2208b9442a6427) | 官方仓库提交 | 2026-08-17 21:03 +08:00，已核实 | 新增按需读取 Claude Academy 实时目录的课程推荐 Skill。详见 Claude 专题页。 | 是官方 Skill 增量，但已不在主窗口。 |

## 近三日补充（48–72 小时）

本轮未新增可同时核实原文、日期且足够相关的 48–72 小时条目。

## 日期未确认

| 厂商 | 标题 | 状态 | 处理 |
|---|---|---|---|
| Anthropic | [Claude Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog) | v1.32352.1 标注 2026-08-18，但无时刻 | 保留日期证据，不判定是否落入精确 24 小时窗口；详见 Claude 专题页。 |

## 观察池

| 厂商 | 候选 | 状态 | 处理 |
|---|---|---|---|
| Google / LlamaIndex | Gemini 3.7 Flash 默认值 | 仅在 LlamaIndex 主分支核实 | 不把第三方集成默认值写成 Google 产品发布，等待 Google 官方 changelog。 |
| Meta、xAI、Mistral、Cohere、中国主要厂商 | 官方入口扫描 | 未核实到主窗口内的新正式技术发布 | 保留无新增结论；动态页依赖脚本或索引滞后的厂商已列入失败来源。 |
| Google DeepMind、Microsoft、LangChain、Hugging Face | 常规依赖、文档与测试提交 | 原始仓库信号 | 已检查但不因提交数量放大为重大动态。 |
| 播客入口 | 时间不稳定的节目候选 | 日期证据不足 | 不写成窗口内事实，等待原始节目页提供可核实时间。 |

## 来源链接

- [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)
- [Deep Agents 0.7.7](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.7)
- [Transformers NVFP4](https://github.com/huggingface/transformers/commit/80c667443da1c5cfbd258f46ecceee09950f544a)
- [Codex fail-closed PowerShell lowerer](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd)
- [Qwen Code flakiness gate](https://github.com/QwenLM/qwen-code/commit/f0dcdfc1570ed4e8852060ff55e8b37f61827240)
- [LangChain strict nested tool schemas](https://github.com/langchain-ai/langchain/commit/65e5e3cfa36c6fff2897140a1bfb5fd35de1bdbd)

**一句话总结：本轮最明确的正式增量是 Agent Framework .NET 1.18.0 与 Deep Agents 0.7.7，窗口末端同时出现一批围绕量化、shell 安全、认证隔离、评审证据和严格工具 schema 的主分支工程更新。**

## 采集状态

- 已检查：Anthropic、OpenAI、Google DeepMind/Research、Meta AI、Microsoft、xAI、Mistral、Cohere、Qwen/阿里/DAMO、字节、百度、腾讯、DeepSeek、智谱/GLM、Moonshot/Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain、LlamaIndex，以及六类播客/访谈入口。
- 失败来源：OpenAI News、Dwarkesh 直接抓取 403；xAI、StepFun 及部分中国厂商页面依赖脚本或索引滞后；部分播客缺少稳定精确时刻。GitHub 原始提交与 release API 可访问。
- 初始候选：191；保留来源：22；二次补搜：否（最终来源不为 0）。

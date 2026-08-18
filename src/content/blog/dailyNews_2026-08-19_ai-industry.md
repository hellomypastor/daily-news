---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-19T00:00:00+08:00"
updatedAt: "2026-08-19T04:28:00+08:00"
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
  - "Copilot"
  - "Cowork"
  - "Date Unconfirmed"
  - "Deep Agents"
  - "Deep Research"
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
  - "Permissions"
  - "PowerShell"
  - "Prerelease"
  - "Quantization"
  - "QuickJS"
  - "Qwen"
  - "Qwen Code"
  - "Reasoning"
  - "Release"
  - "Research"
  - "Retrieval"
  - "Review"
  - "Routing"
  - "Safety"
  - "Schema"
  - "Security"
  - "Skills"
  - "Tencent"
  - "Tools"
  - "Transformers"
  - "Vision"
  - "Windows"
---

## 扫描结论

主窗口：2026-08-18 04:11 至 2026-08-19 04:11（Asia/Shanghai）；近两日为 2026-08-17 04:11 至 2026-08-18 04:11，近三日为 2026-08-16 04:11 至 2026-08-17 04:11。本轮新增可核实的正式版本是 LangChain OpenAI 集成 1.5.2；工程侧新增 Microsoft Agent Framework 的会话持久化多模型路由、Deep Agents QuickJS 快照 HMAC，以及 Codex 的 Windows DLL 搜索路径和拒绝路径审批修复。Microsoft 同时确认消费者 Copilot 的 Deep Research 自 8 月 18 日起退役，但支持页未给发布时间，故只列入“日期未确认”。

## 优先动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
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
| Microsoft | [Agent Framework 会话持久化多模型路由](https://github.com/microsoft/agent-framework/commit/4be584cc53b2094d5a5fa1aa96bf33f126f7f33b) | 官方主分支提交，非正式发布 | 2026-08-19 01:45 +08:00，已核实 | 新增 RoutePersistingRoutingChatClient，把当前路由保存在会话状态中；切换模型时复用客户端侧完整对话历史。 | 为长会话中的多模型切换提供原生状态承载，但尚未进入后续正式 release。 |
| LangChain | [Deep Agents QuickJS 快照 HMAC](https://github.com/langchain-ai/deepagents/commit/749b386f97ed7b920acfd5936b01f8c425976d92) | 官方主分支提交，非正式发布 | 2026-08-19 03:17 +08:00，已核实 | 为 thread 模式的持久化 REPL 快照增加可选 HMAC-SHA256 签名与恢复前校验；缺失或被篡改的签名会拒绝恢复。 | 强化持久化执行状态的完整性，但默认需配置 signing key 且仍待 release。 |
| Qwen | [Qwen Code sandboxed verification flakiness gate](https://github.com/QwenLM/qwen-code/commit/f0dcdfc1570ed4e8852060ff55e8b37f61827240) | 官方主分支提交，非正式发布 | 2026-08-18 23:26 +08:00，已核实 | Triage 流程加入确定性的 flaky 判定门槛，避免一次性失败直接决定验证结论。 | 改善 Agent 自动验证对非确定性测试的处理；仍待正式版本。 |
| Qwen | [Qwen Code /review 纯文本评论与严重度归属](https://github.com/QwenLM/qwen-code/commit/081a96d86459b618fdba2d153f784d9226f37d06) | 官方主分支提交，非正式发布 | 2026-08-18 22:47 +08:00，已核实 | 调整 review 评论的纯文本呈现，并让严重度标记遵循 review.attribution 设置。 | 影响自动评审的下游展示与策略一致性，但不是 release。 |
| LangChain | [严格工具 schema 要求嵌套属性完整](https://github.com/langchain-ai/langchain/commit/65e5e3cfa36c6fff2897140a1bfb5fd35de1bdbd) | 官方主分支修复，非正式发布 | 2026-08-19 01:08 +08:00，已核实 | strict tool schema 会把所有嵌套 object 属性纳入 required，以保持递归严格性。 | 减少工具调用 schema 在深层对象处失去严格约束的风险。 |
| LangChain | [保留 reasoning item 边界](https://github.com/langchain-ai/langchain/commit/32c15bbbd5538677a750229f4f732ad70b8903f4) | 官方主分支修复，后续已发布 | 2026-08-19 00:59 +08:00，已核实 | OpenAI 集成修复 reasoning item 边界保留，随后进入 langchain-openai 1.5.2。 | 有助于多段推理事件的结构一致性，不代表模型能力变化。 |
| LlamaIndex | [Google GenAI 默认模型改为 Gemini 3.7 Flash](https://github.com/run-llama/llama_index/commit/30e759af1f0ff1f4c062bc13f90c7236fae06c65) | 官方项目主分支提交，非 Google 发布 | 2026-08-19 00:37 +08:00，已核实 | LlamaIndex 的 Google GenAI 集成与文档修改默认模型；这是 LlamaIndex 客户端选择，不能据此宣称 Google 发布新模型。 | 默认值变更可能影响新项目行为，需与 Google 官方文档单独核对。 |
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
| OpenAI | [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) | 官方 GitHub 预发布 | 2026-08-18 03:27 +08:00，已核实 | 发布页无变更说明，不推断具体功能。详见 OpenAI 专题页。 | 可确认版本存在，功能判断仍应等待 changelog 或稳定版。 |

## 近三日补充（48–72 小时）

本轮未新增可同时核实原文、日期且足够相关的 48–72 小时条目。

## 日期未确认

| 厂商 | 标题 | 状态 | 处理 |
|---|---|---|---|
| Anthropic | [Claude Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog) | v1.32352.1 标注 2026-08-18，但无时刻 | 保留日期证据，不判定是否落入精确 24 小时窗口；详见 Claude 专题页。 |
| Microsoft | [Copilot 消费者版 Deep Research 退役说明](https://support.microsoft.com/en-US/microsoft-copilot/deep-research-in-microsoft-copilot) | 官方支持页写明 2026-08-18 起退役，但页面未给发布时间 | 仅确认生效日期；现有报告仍保留，Microsoft 365 Premium 用户可改用 Researcher。因发布时间未知，不写成主窗口内发布。 |

## 观察池

| 厂商 | 候选 | 状态 | 处理 |
|---|---|---|---|
| Google / LlamaIndex | Gemini 3.7 Flash 默认值 | 仅在 LlamaIndex 主分支核实 | 不把第三方集成默认值写成 Google 产品发布，等待 Google 官方 changelog。 |
| Meta、xAI、Mistral、Cohere、中国主要厂商 | 官方入口扫描 | 未核实到主窗口内的新正式技术发布 | 保留无新增结论；动态页依赖脚本或索引滞后的厂商已列入失败来源。 |
| Google DeepMind、Microsoft、LangChain、Hugging Face、NVIDIA | 常规依赖、文档、测试与主分支提交 | 原始仓库信号 | 已检查；只保留有明确 Agent、模型接入或安全意义的提交，不因提交数量放大为重大动态。 |
| 播客入口 | 时间不稳定的节目候选 | 日期证据不足 | 不写成窗口内事实，等待原始节目页提供可核实时间。 |

## 来源链接

- [Microsoft Agent Framework .NET 1.18.0](https://github.com/microsoft/agent-framework/releases/tag/dotnet-1.18.0)
- [Deep Agents 0.7.7](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.7)
- [Transformers NVFP4](https://github.com/huggingface/transformers/commit/80c667443da1c5cfbd258f46ecceee09950f544a)
- [Codex fail-closed PowerShell lowerer](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd)
- [Qwen Code flakiness gate](https://github.com/QwenLM/qwen-code/commit/f0dcdfc1570ed4e8852060ff55e8b37f61827240)
- [LangChain strict nested tool schemas](https://github.com/langchain-ai/langchain/commit/65e5e3cfa36c6fff2897140a1bfb5fd35de1bdbd)

**一句话总结：本轮在两个正式版本之外，最值得跟踪的是会话级多模型路由和持久化执行快照完整性校验；Codex 则继续收紧 Windows 与权限边界，而 Copilot Deep Research 的消费者入口进入退役状态。**

## 采集状态

- 已检查：Anthropic、OpenAI、Google DeepMind/Research、Meta AI、Microsoft、xAI、Mistral、Cohere、Qwen/阿里/DAMO、字节、百度、腾讯、DeepSeek、智谱/GLM、Moonshot/Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain、LlamaIndex，以及六类播客/访谈入口。
- 失败来源：OpenAI News、Dwarkesh 直接抓取 403；GitHub 组织列表在后段批量扫描触发 403 限流，已切换单项 HTML/发布页；xAI、StepFun 及部分中国厂商页面依赖脚本或索引滞后；部分播客缺少稳定精确时刻。
- 初始候选：240；保留来源：29；二次补搜：否（最终来源不为 0）。

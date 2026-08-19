---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T07:11:12+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "LFM2.5 Q4_0 Checkpoints from Quantization-Aware Distillation"
featuredUrl: "https://huggingface.co/blog/LiquidAI/qad"
featuredSummary: "发布四档 LFM2.5 QAD Q4_0 GGUF，并给出多评测和多设备项目方实验。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-08-19 21:48 +08:00"
featuredTags: ["LLM","Quantization","Inference"]
featuredImage: "https://cdn-uploads.huggingface.co/production/uploads/644249b08443bce4c9890a0f/PYy1cufo9frwFjiHZLq2S.png"
featuredImageAlt: "Liquid AI 的 LFM2.5 QAD 四比特量化模型文章配图"
featuredImageCaption: "图片来源：Liquid AI / Hugging Face"
tags:
  - "A2A"
  - "AG-UI"
  - "Agent"
  - "Agent Evaluation"
  - "Agent Memory"
  - "Agent Protocol"
  - "Agent Skills"
  - "AI"
  - "AI Security"
  - "Android"
  - "ASR"
  - "Benchmark"
  - "BI"
  - "CLI"
  - "Code Generation"
  - "Coding Agent"
  - "Compiler"
  - "Date Unverified"
  - "DeepSeek Harness"
  - "Developer Tools"
  - "Embeddings"
  - "Engineering"
  - "Essay"
  - "Evaluation"
  - "Governance"
  - "GPU"
  - "Hardware"
  - "Hardware Agent"
  - "Harness"
  - "HN"
  - "Inference"
  - "Interpretability"
  - "Knowledge Graph"
  - "LLM"
  - "LLM Judge"
  - "Mathematics"
  - "MCP"
  - "Mechanistic Interpretability"
  - "Memory"
  - "MLX"
  - "Mobile"
  - "Mojo"
  - "Open Model"
  - "Open Source"
  - "Open Source Governance"
  - "Open Weights"
  - "Protocol"
  - "Quantization"
  - "RAG"
  - "Reinforcement Learning"
  - "Relational Learning"
  - "Research"
  - "Resurfaced"
  - "Robotics"
  - "Runtime"
  - "Rust"
  - "Safety"
  - "Sandbox"
  - "Security"
  - "Software Design"
  - "Sparse Autoencoder"
  - "Specification"
  - "Text Normalization"
  - "Tokenizer"
  - "Training"
  - "Trending"
  - "Video"
  - "Watchlist"
  - "Workflow"
  - "Workspace"
---

## 概览

技术高亮窗口为 2026-08-18 07:11:12 至 2026-08-20 07:11:12，HN 讨论/发现窗口为 2026-08-19 07:11:12 至 2026-08-20 07:11:12（Asia/Shanghai）。本轮在既有集合上复扫 HN 七组检索实际返回 425 条，并逐条复核 04:12–07:11 newest 增量 150 条；同时检查 GitHub 三类 Trending 48 行、五组新仓库检索 50 条、arXiv 215 条、Hugging Face Daily Papers 100 条、Blog RSS 10 条与 Simon Willison feed 15 条；原始候选计数（含入口间重叠）共 1,013 条，累计保留 100 个唯一来源 URL。发布日期、仓库创建时间、GitHub 榜单快照与 HN 讨论时间分别记录，不互相替代。

## 已核实高亮

| 项目 / 文章 | 是什么 | 为什么重要 | 日期 / 证据状态 |
|---|---|---|---|
| [LFM2.5 Q4_0 Checkpoints from Quantization-Aware Distillation](https://huggingface.co/blog/LiquidAI/qad) | Liquid AI 发布 LFM2.5 230M、350M、1.2B 与 2.6B 四档 QAD Q4_0 GGUF | 作者将 BF16、PTQ 与 QAD 在推理、指令、tool use、agentic 等评测上做五次重复，并测试 Mac、AMD 迷你机、Galaxy S26 Ultra 与树莓派；精度恢复和吞吐仍属项目方实验 | HF RSS：2026-08-19 21:48 +08:00；原文和公开配图可打开 |
| [How Much Memory Does Your Agent Actually Need?](https://huggingface.co/blog/ibm-research/altk-evolve-hmm) | IBM Research 比较无记忆、全量指南与按任务检索指南等 Agent memory dosage | 把“记忆越多越好”改写为按基础模型能力校准记忆剂量的问题，并同时讨论准确率与成本；结论以作者实验为准 | HF RSS：2026-08-19 02:09 +08:00；原文可打开 |
| [Mojo is now open source](https://www.modular.com/blog/mojo-open-source) | Modular 开放 Mojo 编译器、工具链与语言源码，采用 Apache-2.0 并含 LLVM 例外 | 此次范围不只标准库；官方给出 Bazel 源码构建与测试路径，同时说明编译器/工具链暂未接受外部贡献 | 官方结构化时间：2026-08-19 00:17 +08:00；原文可打开 |
| [INXM // local](https://github.com/inxm-ai/inxm-local) | Rust 本地桌面应用让 LLM 先把意图编译为带类型、版本化的 plan，再由确定性执行器运行 | README 展示拓扑执行、逐步持久化、人工确认、失败修复和 MCP 管理，适合观察“模型编译、确定性运行”的 Agent 边界 | 仓库创建于 2026-08-19 03:09 +08:00；Apache-2.0 |
| [Extensible Software in the Age of LLMs](https://jeremymorrell.dev/blog/extensible-software-in-the-age-of-llms/) | Jeremy Morrell 讨论 LLM 编程如何改变软件的长尾扩展方式 | 文章把 personal software、插件边界与安全/维护责任放在同一框架中；属于工程论证，不写成普遍产品结论 | 页面元数据：2026-08-18 08:00 +08:00 |
| [Introducing Unsloth Dynamic v3 Qwen3.8](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF/discussions/74) | Unsloth 为 Qwen3.8-27B 发布 Dynamic v3 GGUF 量化，并公开量化尺寸与测试讨论 | 官方称同体积准确率改善等数字来自项目方测试，尚无独立复核；页面时间与文件讨论可核验 | Hugging Face 首帖：2026-08-20 00:42 +08:00 |
| [dsh-plugin-llm-verifier](https://github.com/uson1x/dsh-plugin-llm-verifier) | DeepSeek Harness 插件并行运行多个 rollout，再由 LLM verifier 选择、比较、追踪或打分 | README 明确 verifier 仍是模型而非 sandbox，并公开与论文方法的差异、mock test 和结果界面，适合作为 harness 内评估组件观察 | 仓库创建于 2026-08-19 05:28 +08:00；MIT |
| [sabrix-bench](https://github.com/Pro-Kla/sabrix-bench) | Rust CLI 检查 MCP JSON-RPC 流量，并模拟多轮 Agent loop 的本地解析和序列化开销 | 内置规则只覆盖列出的危险命令、SQL 与凭据模式；微秒级延迟和对比数字均属项目方 benchmark，不等同完整安全审计 | 仓库创建于 2026-08-20 03:27 +08:00；Apache-2.0 |

<figure class="source-image">
  <a href="https://huggingface.co/blog/LiquidAI/qad"><img src="https://cdn-uploads.huggingface.co/production/uploads/644249b08443bce4c9890a0f/PYy1cufo9frwFjiHZLq2S.png" alt="Liquid AI 的 LFM2.5 QAD 四比特量化模型文章配图" loading="lazy" /></a>
  <figcaption><a href="https://huggingface.co/blog/LiquidAI/qad">图片来源：Liquid AI / Hugging Face</a></figcaption>
</figure>

## GitHub Trending

07:11 的公开日榜相关项目包括：[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)（2,221 stars today）、[OpenViking](https://github.com/volcengine/OpenViking)（803）、[munder-difflin](https://github.com/chaitanyagiri/munder-difflin)（797）、[mattpocock/skills](https://github.com/mattpocock/skills)（1,214）、[Graphify](https://github.com/Graphify-Labs/graphify)（454）和 [Strix](https://github.com/usestrix/strix)（590）；新增相关榜单项目见下方 07:11 增量。榜单数字只证明当前热度，不代表今日创建、技术质量或独立采用。

## HN 讨论

| 讨论 | HN 时间与快照 | 证据解读 |
|---|---|---|
| [Mojo language now open-source](https://news.ycombinator.com/item?id=49358327) | 2026-08-19 15:47 +08:00；193 points / 95 comments | 指向 Modular 的 ModCon 公告；热度用于说明讨论，不替代官方发布时间和许可证核验 |
| [Ornith-1.5](https://news.ycombinator.com/item?id=49362401) | 2026-08-19 22:48 +08:00；56 / 4 | 原始 [Ornith-1.5 文章](https://ornith.ai/ornith_1_5.html) 可读，但只显示月份，故模型规模和 benchmark 均按项目方自报且日期未确认 |
| [OneCLI](https://news.ycombinator.com/item?id=49363710) | 2026-08-20 00:29 +08:00；14 / 0 | [当前仓库](https://github.com/onecli/onecli) 描述团队 Agent、隔离 sandbox、gateway 凭据注入与人工审批；仓库创建于 2026-03-08，属于旧项目今日回流 |
| [Extensible Software in the Age of LLMs](https://news.ycombinator.com/item?id=49363668) | 2026-08-20 00:26 +08:00；12 / 4 | 讨论发生在 24 小时内，文章原日为 8 月 18 日 |
| [Mathematics in the Age of AI](https://news.ycombinator.com/item?id=49362728) | 2026-08-19 23:14 +08:00；14 / 5 | [arXiv 论文](https://arxiv.org/abs/2608.16753) 是基于 ICM 公开演讲的观点文，讨论数学共同体目标与价值，不是模型能力 benchmark |
| [INXM // local](https://news.ycombinator.com/item?id=49362974) | 2026-08-19 23:35 +08:00；4 / 3 | HN 发现落入讨论窗口；项目创建时间和功能仍以 GitHub 原仓库为准 |
| [Unsloth Dynamic v3 Qwen3.8](https://news.ycombinator.com/item?id=49364914) | 2026-08-20 01:59 +08:00；2 / 0 | 指向 Hugging Face 官方讨论；发布日期和量化说明以原帖为准 |
| [dsh-plugin-llm-verifier](https://news.ycombinator.com/item?id=49366057) | 2026-08-20 03:25 +08:00；1 / 0 | 新仓库创建时间位于 48 小时窗口；评分可靠性仍以 README 限制为准 |
| [Open Bot](https://news.ycombinator.com/item?id=49365575) | 2026-08-20 02:45 +08:00；11 / 1 | [OpenBot 仓库](https://github.com/CopilotKit/openbot) 创建于 8 月 17 日，强调逐动作策略判定、审计记录和隔离 browser/files；成熟度与安全主张尚待独立审计 |
| [S1-mini](https://news.ycombinator.com/item?id=49364361) | 2026-08-20 01:17 +08:00；10 / 1 | [S1-mini 模型卡](https://huggingface.co/superwhisper/s1-mini) 是单任务英文 ASR 文本规范化模型；94.8% token accuracy 等为项目方 held-out 实验，仓库创建早于七天 |
| [Prefill and Decode Want Different Computers](https://news.ycombinator.com/item?id=49365961) | 2026-08-20 03:17 +08:00；2 / 0 | [原文](https://hiraditya.github.io/posts/prefill-and-decode-want-different-computers/) 日期为 8 月 17 日，讨论 prefill/decode 在算力、内存带宽与 KV cache 上的硬件侧差异 |
| [nff-core](https://news.ycombinator.com/item?id=49366373) | 2026-08-20 03:55 +08:00；1 / 0 | 指向较早的 [nff-core 仓库](https://github.com/GLechevalier/nff-core)，其本地 MCP 可编译、烧录、读串口和诊断硬件；README 同时说明 OTA、repair、agent 需登录托管后端 |
| [sabrix-bench](https://news.ycombinator.com/item?id=49366379) | 2026-08-20 03:55 +08:00；1 / 0 | 新仓库和 HN 发现都在窗口内；性能与风险规则只按项目方 README 记录 |
| [HyperSAE](https://news.ycombinator.com/item?id=49366528) | 2026-08-20 04:07 +08:00；3 / 0 | [HyperSAE 仓库](https://github.com/vishal-dehurdle/hypersae) 是 7 月旧项目，提出 Euclidean forward path 与 hyperbolic weight regularization；benchmark 为作者自报 |
| [Inference Engineering](https://news.ycombinator.com/item?id=49364934) | 2026-08-20 02:00 +08:00；2 / 0 | 指向 Baseten 的免费推理系统工程书；原页面未给出可归因于本次发布的明确日期，列日期未确认 |

## 论文 / 研究

- [On the Fragility of Self-Improving Agents](https://arxiv.org/abs/2608.18066)（arXiv v1：2026-08-19 01:55 +08:00）复跑两种 memory-based self-improvement 方法，指出多轮方差、任务顺序隐含 curriculum 与任务/环境欠规范会显著影响结论；改进 rubric 和环境反馈只能部分缩小差距。
- [StagedWorkspace](https://arxiv.org/abs/2608.18050)（v1：2026-08-19 01:44 +08:00）把解析视图、原生文件、diff 与提交物绑定到版本和内容哈希，要求 knowledge-work Agent 遵守 workspace-state contract；分数均为论文作者实验。
- [LEGO-RL](https://arxiv.org/abs/2608.17393)（v1：2026-08-19 13:34 +08:00）通过进程内 LLM proxy、trainer 端 log-prob 重算与 sandbox 防护连接原生 coding harness 和策略梯度训练；SWE-bench 结果属于作者复现管线。
- [PTXBench](https://arxiv.org/abs/2608.17379)（v1：2026-08-19 13:14 +08:00）同时测 GPU kernel 的正确性、目标 PTX 指令实际执行与相对前沿库加速，作者发现执行指定指令并不等于具备竞争力的性能。
- [Agent Lightning v1.0](https://arxiv.org/abs/2608.17528)（v1：2026-08-19 16:50 +08:00）聚焦 harness 拥有环境交互循环时的重分词、样本合并、advantage 和调度问题，并发布可复现 coding-agent RL 流程；增益数字为论文实验。
- [HarnessRisk](https://arxiv.org/abs/2608.17597)（v1：2026-08-19 18:03 +08:00）以 128 个 sandbox case 覆盖配置、扩展、运行、持久状态、动作控制与事故恢复六阶段，强调识别风险并不自动意味着采取安全动作。

## 旧项目回流

以下仓库原始创建时间早于七天，但在 HN 最近 24 小时重新出现，因此不冒充本日发布：

- [RelArena-α](https://github.com/PriorLabs/relarena) 创建于 2026-08-06、Apache-2.0，统一 RelBench v1 数据状态、调参和评估协议；README 明确称 alpha research code、非 production-ready。[HN](https://news.ycombinator.com/item?id=49363970) 于 2026-08-20 00:48 +08:00 出现，快照 2 / 0。
- [Grove](https://github.com/alxshelepenok/grove) 创建于 2026-05-05、AGPL-3.0，以 checksummed lockfile、typed reasoning graph 和可证伪 evidence 约束长周期 coding Agent；绝对可复现等表述仍属项目方主张。[HN](https://news.ycombinator.com/item?id=49362786) 于 2026-08-19 23:19 +08:00 出现，2 / 0。
- [android-remote-control-mcp](https://github.com/danielealbano/android-remote-control-mcp) 创建于 2026-02-11、MIT，把 Android 控制和文件能力暴露为本机 MCP server；PII 与 tunnel 安全性需独立审计。[HN](https://news.ycombinator.com/item?id=49362047) 于 22:23 出现，5 / 0。
- [CrewCode](https://github.com/OnPoint-Dev-Tools/crewcode) 创建于 2026-08-07、Apache-2.0，用桌面界面协调多 Agent、Git worktree、会话和 review；跨平台成熟度仍以 README 为证据。[HN](https://news.ycombinator.com/item?id=49364088) 于 2026-08-20 00:56 +08:00 出现，1 / 0。
- [NAEOS](https://github.com/NAEOS-foundation/naeos) 创建于 2026-07-09、Apache-2.0，将 YAML/JSON spec 解析为统一工程模型、DAG 任务与多语言生成结果；生成质量未独立复核。[HN](https://news.ycombinator.com/item?id=49363778) 于 2026-08-20 00:34 +08:00 出现，3 / 0。
- [HyperSAE](https://github.com/vishal-dehurdle/hypersae) 创建于 2026-07-15、MIT，将 hyperbolic regularization 放在 dictionary weights 的慢路径、保留 Euclidean activation 快路径；Gemma-2-2B Layer 13 benchmark 均按作者自报。[HN](https://news.ycombinator.com/item?id=49366528) 于 2026-08-20 04:07 +08:00 出现，快照 3 / 0。
- [nff-core](https://github.com/GLechevalier/nff-core) 创建于 2026-04-25、MIT，是让 coding Agent 控制嵌入式编译、烧录、串口和诊断的本地 MCP；托管 OTA/repair/agent 并非本仓库开源范围。[HN](https://news.ycombinator.com/item?id=49366373) 于 2026-08-20 03:55 +08:00 出现，1 / 0。
- [S1-mini](https://huggingface.co/superwhisper/s1-mini) 仓库创建于 2026-08-12，模型卡称其为 596M unique parameters 的英文 ASR 文本规范化模型，并要求检查自定义许可证；准确率、文件大小和 CPU 可运行性按项目方证据。[HN](https://news.ycombinator.com/item?id=49364361) 于 2026-08-20 01:17 +08:00 出现，10 / 1。

## 日期未确认

- [Ornith-1.5 原文](https://ornith.ai/ornith_1_5.html) 只标示“Aug. 2026”，未提供可靠日号，不能硬判为 48 小时内发布；HN 发现时间已在上表记录。文章描述 397B MoE、35B MoE 与 9B dense 三档，以及自生成任务、harness 和 solution rollout 的训练闭环；所有 benchmark 对比均按项目方自报，等待模型卡、精确发布日期与独立评测交叉验证。
- [Inference Engineering](https://www.baseten.co/inference-engineering/) 介绍模型服务所需的硬件、软件、优化与基础设施，并提供在线免费阅读；页面未显示可可靠归因于本轮发布的日期，因此只记录 [HN 发现](https://news.ycombinator.com/item?id=49364934)（2026-08-20 02:00 +08:00；2 / 0），不写成今日出版。

## 观察池

- [Let's Infer](https://github.com/letsinferlabs/letsinfer) 创建于 2026-08-19 04:19 +08:00、AGPL-3.0，尝试把 checkpoint revision、硬件契约、digest-pinned runtime、cache 兼容性和 benchmark evidence 打包为可复现实例；README 明确第一项公共 runtime 尚未 sealed，因此列观察池而不是成熟发布。
- [OpenBot](https://github.com/CopilotKit/openbot) 创建于 2026-08-17 08:44 +08:00、MIT，用 AG-UI 接入不同 Agent，并把 browser/file/MCP 动作置于 fail-closed policy、隔离容器和审计记录之后；因创建时间早于 48 小时窗口、生产安全主张未独立审计，仅作为 [HN 回流信号](https://news.ycombinator.com/item?id=49365575) 保留。
- [Prefill and Decode Want Different Computers](https://hiraditya.github.io/posts/prefill-and-decode-want-different-computers/) 原日为 2026-08-17 11:00 +08:00，已在本轮 48 小时窗口之外；文章关于 prefill 更偏 compute-bound、decode 更偏 bandwidth-bound 以及分离式服务的论证仍有工程参考价值，故凭 [HN 发现](https://news.ycombinator.com/item?id=49365961) 留在观察池。
- 新仓库搜索中出现规避订阅、游戏作弊和仅堆砌关键词的仓库；这些候选与本页技术选择无关或存在明显滥用风险，未作为来源。没有许可证、仅有营销页或只有项目方性能主张的候选，也没有被提升为已验证技术事实。

## 07:11 增量

### 已核实技术高亮

- [Multi-Vector Embedding Models with Sentence Transformers](https://huggingface.co/blog/multi-vector-encoder)（HF RSS：2026-08-18 08:00 +08:00）说明 ColBERT-style late interaction 的 MaxSim、视觉文档检索与索引压缩；它保留 token 级匹配但增加索引和重排成本。
- [Hacking SAML with Claude Code](https://oblique.security/blog/hacking-saml/)（页面元数据：2026-08-20 02:10 +08:00）公开用既有漏洞知识与 coding-agent harness 研究 SAML 库的流程、修复链接和限制；不把这组受控实验扩展成“模型可自动发现任意 0-day”。
- [Conceptual integrity and counting lines of code](https://simonwillison.net/2026/Aug/19/conceptual-integrity-and-counting-lines-of-code/)（2026-08-20 06:46 +08:00）讨论 Agent 提高产码速度后，团队认知容量和架构一致性成为新的工程瓶颈。
- 新增论文：[TokEval](https://arxiv.org/abs/2608.18062)（2026-08-19 01:52 +08:00）评估 tokenizer 的结构性指标；[Chain-of-Experience](https://arxiv.org/abs/2608.18027)（01:22）研究推理时反馈循环；[Judge, Retrieve, or Abstain](https://arxiv.org/abs/2608.17994)（00:42）以校准阈值控制 LLM judge 已接受判决的风险。所有数字和保证边界以论文实验与假设为准。

### GitHub Trending 增量

07:11 日榜新出现的相关项目为 [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)（767 stars today）、[superpowers](https://github.com/obra/superpowers)（514）、[oMLX](https://github.com/jundot/omlx)（467）、[MTPLX](https://github.com/youssofal/MTPLX)（44）、[last30days-skill](https://github.com/mvanhorn/last30days-skill)（130）、[Hermes Agent](https://github.com/NousResearch/hermes-agent)（563）、[Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)（63）和 [GitNexus](https://github.com/abhigyanpatwari/GitNexus)（48）。这些只是日榜快照；性能、覆盖面、采用度与成熟度没有被 Trending 独立验证。

### HN 讨论与旧项目回流

- [DFlash 2 HN](https://news.ycombinator.com/item?id=49366792) 于 04:28 出现，快照 53 / 5；[原文](https://inco.ai/blog/dflash2/) 只给 2026-08-18 日号、无时分，无法严格判断是否晚于本轮 48 小时起点，16–25% 接受长度改善和吞吐数字均按 Inco AI 自报。
- [only-cli/oc HN](https://news.ycombinator.com/item?id=49367419) 于 05:26 出现，3 / 2；[仓库](https://github.com/only-cli/oc) 创建于窗口内，把网站操作压成 Agent CLI，但 GitHub API 未识别许可证。
- 旧项目回流包括 [Semantica](https://github.com/semantica-agi/semantica) / [HN](https://news.ycombinator.com/item?id=49367995)（06:28，2 / 0）、[CHAP](https://github.com/BrightbeamAI/chap) / [HN](https://news.ycombinator.com/item?id=49367836)（06:09，11 / 2）和 [ComputeFence](https://github.com/Francisco-Booth/ComputeFence) / [HN](https://news.ycombinator.com/item?id=49367187)（05:02，1 / 0）；仓库创建时间分别为 2025-06-25、2026-05-17、2026-08-04，不冒充今日发布。
- [Node.js AI use policy](https://github.com/nodejs/node/blob/main/doc/contributing/ai-guidelines.md) 首次合入于 2026-08-13，经 [HN](https://news.ycombinator.com/item?id=49367779) 于 06:03 回流（2 / 0）；它是贡献治理指南，不是工具发布。
- [NVIDIA Alpamayo 2 Super](https://blogs.nvidia.com/blog/alpamayo-2-super-open-model-now-available/) 原日为 2026-08-04、采用 OpenMDW-1.1，经 [HN](https://news.ycombinator.com/item?id=49367388) 于 05:23 回流（5 / 0）；能力与采用度按官方自报。
- [Orion-app](https://github.com/nicolasakf/Orion-app) 经 [HN](https://news.ycombinator.com/item?id=49367844) 于 06:10 回流（2 / 0），未识别许可证；[Vibe-Kanban-Alternative](https://github.com/flashlan/vibe-kanban-alternative) 经 [HN](https://news.ycombinator.com/item?id=49367532) 于 05:38 发现（1 / 0），Apache-2.0、成熟度未知。

### 日期未确认与观察池

- Agent Swarms [原文](https://av.codes/blog/on-agent-swarms/)和“Half-Day” 0-Day [原文](https://margin.re/2026/08/introducing-the-half-day-0-day-in-the-age-of-ai/)在本环境被域名拦截；仅确认 [HN 发现](https://news.ycombinator.com/item?id=49368141)（06:45，1 / 0）与 [HN 发现](https://news.ycombinator.com/item?id=49368297)（07:03，1 / 0），不概括正文或推断发布日期。
- [GEN-1.5](https://generalistai.com/blog/gen-1.5) 页面可读但未给可靠发布日期或开源权重；仅按厂商自报记录一次示范学习实验，并保留 [HN 发现](https://news.ycombinator.com/item?id=49367510)（05:36，2 / 0）。
- [Qwen 3.8 27B scores 52](https://simonwillison.net/2026/Aug/17/qwen-38-27b-scores-52/) 发布于 2026-08-18 07:58 +08:00，位于窗口边缘，属于单人模型测试。
- 新仓库搜索保留：[sprix-sage-router](https://github.com/wang2122/sprix-sage-router)（MIT，A2A 路由）、[herdrm](https://github.com/missuo/herdrm)（未识别许可证，coding-agent 终端控制台）、[Wake](https://github.com/iAmCorey/Wake)（MIT，会话检索恢复）、[omp-best-of](https://github.com/wolfiesch/omp-best-of)（MIT，Best-of-N verifier）、[PhoneBuddySDK](https://github.com/APUS-AI-Lab/PhoneBuddySDK)（Apache-2.0，移动 Agent runtime）和 [agent-codemode](https://github.com/janwilmake/agent-codemode)（MIT，脚本调用 MCP）；均只有 README/API 元数据，未做独立安全与性能复核。

## 来源链接

来源均已在对应条目直接链接；本页优先使用官方工程文章、GitHub 原仓库、arXiv 原条目与 Hacker News 原帖。所有 100 个 sources URL 都在正文出现，同一 URL 在 sources 内唯一。

## 采集状态

- 已检查：HN 首页/newest 与 Algolia 最近 24 小时七组实际返回 425 条，并逐条复核 04:12–07:11 newest 增量 150 条；GitHub Trending 全站/Python/TypeScript 48 行；GitHub Search 五组 50 条；arXiv 48 小时四分类 215 条；Hugging Face Daily Papers 100 条、Blog RSS 10 条；Simon Willison feed 15 条，以及重点原文、README、许可证、创建时间和提交元数据。
- 失败/受限：GitHub Trending 无结构化官方 API；Agent Swarms 与“Half-Day”原文在本环境被域名拦截；DFlash 2 只给日号，GEN-1.5、Ornith 与 Baseten book 缺精确日期；only-cli、Orion 等仓库未识别许可证；宽口径 GitHub 搜索仍有噪声；项目方性能、安全和成熟度均按自报或观察状态处理。
- 原始候选计数 1,013 条（入口间有重叠），累计保留 100 个唯一来源；最终来源非 0，未触发二次补搜（secondPass=false）。

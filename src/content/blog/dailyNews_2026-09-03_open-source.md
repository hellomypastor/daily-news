---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-09-03T00:00:00+08:00"
updatedAt: "2026-09-03T17:05:02+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Cline Desktop v0.0.23-beta.1"
featuredUrl: "https://github.com/cline/cline/releases/tag/desktop-v0.0.23-beta.1"
featuredSummary: "beta 新增可选图像生成设置，provider 凭据留在服务端，生成结果留在会话历史。定时运行按本地/SSH runtime 分组，避免同名任务混淆；SSH 环境下明确媒体设置只影响本地 runtime。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-09-03 09:46 +08:00"
featuredTags: ["Cline","Beta","Agent Harness"]
featuredImage: "https://opengraph.githubassets.com/9595fbf4a2c28b94d021e2ff54f4869662f9848a68240c4b59614e1f77da61d7/cline/cline/releases/tag/desktop-v0.0.23-beta.1"
featuredImageAlt: "Cline Desktop 0.0.23-beta.1 官方 GitHub 发布页预览图"
featuredImageCaption: "图片来源：Cline 官方 GitHub beta 发布页"
tags:
  - "24–48 小时补充"
  - "观察池"
  - "日期未确认"
  - "Agent"
  - "Agent Harness"
  - "Agent Skills"
  - "AI"
  - "Alpha"
  - "Beta"
  - "Browser"
  - "CLI"
  - "Cline"
  - "Code Review"
  - "Coding Agent"
  - "Community"
  - "Context"
  - "DeepSeek Harness"
  - "Developer Tools"
  - "Engineering"
  - "Evaluation"
  - "GitHub Trending"
  - "Inference"
  - "LLM"
  - "MCP"
  - "Memory"
  - "Multi-Agent"
  - "Open Source"
  - "OpenCode"
  - "Planning"
  - "Post-training"
  - "Prerelease"
  - "Prompt Optimization"
  - "Reliability"
  - "Research"
  - "Retrieval"
  - "Runtime"
  - "SDK"
  - "Security"
  - "Self-hosted LLM"
  - "Session Import"
  - "SRE"
  - "Tool Execution"
  - "World Model"
---

## 今日概览

本轮发现窗口为 **2026-09-02 17:05 至 2026-09-03 17:05（Asia/Shanghai）**，技术补充回溯 48 小时。当天已有 54 条来源全部保留；新增 DSH 0.1.2-rc.1、mex 0.8.0、Pi 待发布修复，以及多人规划、上下文与重试工程候选。日期未确认内容单列，不当作今日首发。

## Coding Agent / Harness 雷达

| 项目 | 检查结论 |
|---|---|
| Cline | 官方仓库、releases、CHANGELOG 已查；稳定版 Desktop 0.0.22、扩展 4.1.17、SDK 0.0.82、CLI 3.0.61 保留；新增 Desktop 0.0.23-beta.1。 |
| Pi / pi-mono | 旧地址重定向 earendil-works/pi；官方 packages 与 changelog 已查，最新 release 0.84.4 为 8 月 28 日；Unreleased 包含代理 HTTP 工具调用挂起、字节计数及 RPC 取消手动压缩修复，不当作新 release。 |
| DeepSeek Harness / DSH | 仓库、README/文档入口、releases 已查，新增 0.1.2-rc.1，alpha.4/alpha.5 当天累积保留；rc.1 仍是预发布。 |
| OpenCode | 官方 anomalyco/opencode 仓库与 release changelog 已查，新增 1.18.27，原 1.18.26 继续当天累积保留。 |
| Aider | 官方仓库、releases、HISTORY 已查；无窗口内 release。 |
| Continue | 官方仓库、releases、CLI changelog 已查；无窗口内 release。VS Code 旧 changelog 路径 404，已切换仓库 tree 与 CLI 入口。 |
| Roo Code | 官方仓库、releases、CHANGELOG 已查；无窗口内 release。 |

## 已验证技术亮点

- **[DeepSeek Harness v0.1.2-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1)**（2026-09-03 14:06 +08:00）：0.1.2 首个候选版汇总此前 alpha 变更，补齐 ACP 会话、模型、MCP、权限及取消，提供 Windows x64 Python runtime，父子 Agent 改用 send_message 双向通信。会话日志增量上传默认关闭；官方同时声明尚未经安全审计，审批与沙箱不保证隔离。属于本地 harness 预发布，不推断为托管 AaaS。

- **[mex 0.8.0：团队项目记忆](https://github.com/mex-memory/mex/releases/tag/v0.8.0)**（2026-09-03 00:40 +08:00）：将仓库内 Markdown 记忆、代码图、Wiki 和仅限 loopback 的 Project Hub 连接起来；Spec 提案区分预览、审批与应用，Relay 保存交接上下文。提供 Claude Code/Codex skills，索引读取不会隐式迁移；本地 Hub 不等于云托管服务。


### Cline Desktop v0.0.23-beta.1

beta 新增可选图像生成设置，provider 凭据留在服务端，生成结果留在会话历史。定时运行按本地/SSH runtime 分组，避免同名任务混淆；SSH 环境下明确媒体设置只影响本地 runtime。 日期：2026-09-03 09:46 +08:00。来源：[Cline GitHub](https://github.com/cline/cline/releases/tag/desktop-v0.0.23-beta.1)。

<figure class="source-image">
  <a href="https://github.com/cline/cline/releases/tag/desktop-v0.0.23-beta.1"><img src="https://opengraph.githubassets.com/9595fbf4a2c28b94d021e2ff54f4869662f9848a68240c4b59614e1f77da61d7/cline/cline/releases/tag/desktop-v0.0.23-beta.1" alt="Cline Desktop 0.0.23-beta.1 官方 GitHub 发布页预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/cline/cline/releases/tag/desktop-v0.0.23-beta.1">图片来源：Cline 官方 GitHub beta 发布页</a></figcaption>
</figure>

### OpenCode v1.18.27

provider 响应头和流式 chunk 默认超时改为五分钟，chunk 超时可关闭；thinking.blockBinding 限制于 Claude 5.1+ 并允许配置退出，修复取消超时 SSE 读取的未处理错误。 日期：2026-09-03 05:41 +08:00。来源：[OpenCode GitHub](https://github.com/anomalyco/opencode/releases/tag/v1.18.27)。

### llm-gemini 0.34

支持 gemini-3.8-flash 的 low/medium/high 思考档位，并修复异步响应未记录实际模型版本的问题。 日期：2026-09-03 00:39 +08:00。来源：[Simon Willison GitHub](https://github.com/simonw/llm-gemini/releases/tag/0.34)。

### llm-gemini 0.34：HTML 工具实验

作者使用 llm-coding-agent 为 Markdown 渲染工具加入 sandboxed iframe HTML 预览；这是个人工程实验，不把单次演示费用或速度写成普适评测。 日期：2026-09-03 00:39 +08:00。来源：[Simon Willison](https://simonwillison.net/2026/Sep/2/llm-gemini/)。

### Co-Designing AI Models Using Speculative Decoding for Faster LLM Inference

在接受长度、draft 成本和验证开销之间选择推测解码机制与长度；比较 MTP、EAGLE-3、DFlash、DSpark 等，建议用真实工作负载测端到端收益，目标模型微调后需重新测量接受率。 日期：2026-09-03 00:04 +08:00。来源：[NVIDIA Technical Blog](https://developer.nvidia.com/blog/co-designing-ai-models-using-speculative-decoding-for-faster-llm-inference/)。



### 1. DeepSeek Harness v0.1.2-alpha.4

[官方发布](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4) · 2026-09-01 23:45 +08:00。DSH 为父 Agent 与可持续子 Agent 增加双向 send_message，并调整 web_fetch 与 Session API。该版本仍为 alpha，升级前需阅读兼容性说明。

### 2. DeepSeek Harness v0.1.2-alpha.5

[官方发布](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5) · 2026-09-02 18:02 +08:00。修复从特定旧版升级后应用可能无法启动或会话列表标题消失的兼容性回归。该版本仍为 alpha，升级前需阅读兼容性说明。

### 3. Desktop v0.0.22

[官方发布](https://github.com/cline/cline/releases/tag/desktop-v0.0.22) · 2026-09-02 13:20 +08:00。Cline Desktop 可导入 Claude Code、Codex 与 OpenCode 历史为可恢复会话，并改善定时任务分组、macOS 语音与 Web 搜索默认设置。

### 4. Cline v4.1.17

[官方发布](https://github.com/cline/cline/releases/tag/v4.1.17) · 2026-09-02 13:40 +08:00。Cline 修复长会话 Hub 完整 transcript 广播导致的内存放大，并增强 hook 与运行可靠性。

### 5. SDK v0.0.82

[官方发布](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.82) · 2026-09-02 12:40 +08:00。Cline SDK 增加跨 Claude Code、Codex 与 OpenCode 的事务式会话导入，并修复 capability 误判、checkpoint 恢复与 MCP 连接等可靠性问题。

### 6. CLI v3.0.61

[官方发布](https://github.com/cline/cline/releases/tag/cli-v3.0.61) · 2026-09-02 12:49 +08:00。Cline CLI 改善 Hub 升级排空、远程 MCP 启动、工具能力识别、checkpoint 恢复保护与 Codex OAuth/刷新处理。

### 7. OpenCode v1.18.26

[官方发布](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) · 2026-09-02 05:52 +08:00。OpenCode 修复 Claude 5 thinking blocks、Bedrock GPT-5.6 推理回放、工具计时与桌面会话重命名。

## 论文 / 研究

### Agent Memory Is a Surface for Endogenous Authorization Laundering

EAL-Bench 研究持久记忆误写权限、限制与撤销后，执行 Agent 如何继承虚假授权。有效来源事件绑定和受限事件溯源可缓解，但存在拒绝合法操作的权衡；未独立复现。 日期：2026-09-02 04:12 +08:00。来源：[arXiv](https://arxiv.org/abs/2609.01836)。

### SolarWM：开放数据与长程视频世界模型训练

统一多源视频、相机几何和来源元数据，并适配不同视频模型骨干，以三阶段训练研究长程交互视频生成；论文声称开放数据、权重和训练管线，未独立验证实时性能。 日期：2026-09-03 01:59 +08:00。来源：[arXiv](https://arxiv.org/abs/2609.02886)。



### Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement

[论文](https://arxiv.org/abs/2609.01481) · 2026-09-02 00:17 +08:00。在既有 coding-agent harness 之上组织可验证的多轮规划、编码与测试循环。论文结论为作者报告，本页未独立复现。

### What's in Your Agent's Context? Context Privilege Escalation Attacks against AI Agent Harness

[论文](https://arxiv.org/abs/2609.01222) · 2026-09-02 22:46 +08:00。系统分析 Agent harness 上下文装配中的消息角色与跨作用域权限提升风险。本轮确认 v2 于 9 月 2 日 22:46 更新，初版为 9 月 1 日 21:26。论文结论为作者报告，本页未独立复现。

### From Production Traffic to Post-Training: Building a Self-Hosted LLM That Covers the Corporate Request Mix

[论文](https://arxiv.org/abs/2609.01572) · 2026-09-02 01:39 +08:00。从生产错误分析拆分三类后训练专家并合并，以覆盖企业内部请求组合。论文结论为作者报告，本页未独立复现。

### Control-Data Flow Separation: Stable Prompt Optimization in Multi-Agent LLMs

[论文](https://arxiv.org/abs/2609.00621) · 2026-09-01 11:04 +08:00。用类型化、可验证控制对象隔离执行协议与可优化自然语言数据流，降低多 Agent 提示漂移导致的协议失效。论文结论为作者报告，本页未独立复现。



### 本轮新增工程与研究

- **[GitHub：按完整任务优化 Coding Agent 成本](https://github.blog/ai-and-ml/github-copilot/how-we-make-ai-coding-more-cost-efficient-without-sacrificing-task-quality/)**（2026-09-03 02:00 +08:00）：GitHub 工程实验发现，删掉必要工具输出可能触发重读和重跑，增加完整任务成本；建议选择性压缩噪声并用行为测试保护提示语义。结论限于所测 harness 和工作负载，不泛化为所有压缩工具无效。

- **[Repo-To-Skill：把代码仓库蒸馏为可复用研究技能](https://arxiv.org/abs/2609.02749)**（2026-09-02 23:49 +08:00）：DisCo 将仓库操作知识蒸馏为任务无关与任务导向技能，在固定模型和执行预算下评估技能库作用；效果是作者实验结果，未独立复现。

- **[EarlyEval：预测中途结果以降低 Agent 评估成本](https://arxiv.org/abs/2609.02783)**（2026-09-03 00:15 +08:00）：使用成功与失败分类器分析中间轨迹，置信度达阈值后提前停止评测；在 SWE-bench Verified、TerminalBench、Toolathlon 上报告成本与准确率权衡，不能代替所有完整运行。

- **[HarnessDev：评估模型创建与演化自身 harness](https://arxiv.org/abs/2609.01437)**（2026-09-01 23:45 +08:00）：区分从最小种子构建执行系统和依据反馈迭代两个阶段；生成 harness 在编码、搜索研究上仍落后所选成熟参照，演化收益不稳定。属于 24–48 小时补充，未独立复现。

- **[Declarative Attention：模型声明需要关注的上下文](https://arxiv.org/abs/2609.02737)**（2026-09-02 23:43 +08:00）：通过全局、指定区域与近期输出三类声明让推理引擎跳过部分 KV cache 读取；论文报告长上下文成本下降伴随准确率损失，属于研究方案。

- **[VibeVoice-ASR-Streaming 技术报告](https://arxiv.org/abs/2609.02812)**（2026-09-03 00:52 +08:00）：将固定音频块、少量前瞻和历史文本交错输入，实现流式转录和说话人归属；作者声明开放 1.5B 与 7B 权重及推理代码，性能未独立复测。

- **[PaperCompiler：以仓库级规格约束论文到代码](https://arxiv.org/abs/2609.02272)**（2026-09-02 16:21 +08:00）：将论文证据编译为跨文件依赖、所有权和实现约束，区分原文支持、推断与未解决信息，减少后续编码 Agent 忽略方法细节；评测结果为作者报告。

- **[ExecRetrieval：检索是否分辨功能正确与近似错误代码](https://arxiv.org/abs/2609.01865)**（2026-09-02 04:55 +08:00）：以执行验证的正确实现与单编辑错误变体构成检索候选池，测量 embedding 的功能判别差距；提醒 coding agent 不能把语义相近视为执行正确。24–48 小时补充。

- **[Cliff：从首次推理错误构造过程奖励](https://arxiv.org/abs/2609.02817)**（2026-09-03 01:03 +08:00）：用教师模型定位 rollout 首次错误，为正确前缀和错误后缀分配不同 token 优势，探索比结果奖励更细的训练信号；收益为论文实验，未独立复现。

## GitHub Trending

以下保留当天早轮已记录的榜单快照。本轮已重查 overall/Python/TypeScript，原有项目仍可见；不为小幅星数波动重写历史快照，也不把榜单热度当作发布时间。

- [Atlas：面向 Agent 的源码与会话追踪](https://github.com/pacifio/atlas)：新抓取 Trending 显示 895 stars today；将提交与 Agent 会话、工具调用关联，并共享本地记忆。仅为当期热度，非今日发布。
- [SIE：Agent 模型推理服务](https://github.com/superlinked/sie)：新抓取 Trending 显示 61 stars today；开源模型推理服务器与生产集群，面向 Agent 所需模型。热度不等于性能验证。
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)：新抓取 TypeScript Trending 显示 140 stars today；将浏览器开发工具接入 coding agent。非今日首发。
- [WebLLM：浏览器内 LLM 推理](https://github.com/mlc-ai/web-llm)：本轮进入 HN 与 TypeScript Trending，榜单显示 64 stars today；提供浏览器内 LLM 推理实现。原始发布日期未核实。

## HN 讨论

front/newest 与 Algolia 已查。FrontierHarness 提交于 9 月 3 日 00:14 +08:00，AURA 提交于 9 月 2 日 23:55 +08:00；提交时间只证明被讨论，不等于原文发表时间。本页不以实时互动量的小幅变化推导趋势。

## 日期未确认

### zvec-grep：本地优先混合检索

统一 ripgrep、BM25 和向量搜索，面向人和 Agent 的本地工作区检索；窗口内 HN 提交发现，首次发布日期未确认。 证据状态：日期未确认。来源：[zvec-ai GitHub](https://github.com/zvec-ai/zvec-grep)。

### README 证据生成 skill

根据代码、清单、测试与工作流生成 README 的 public beta；作者明确其他宿主尚未完成场景验证，不能因可安装就宣称兼容性已验证。 证据状态：日期未确认。来源：[pekral GitHub](https://github.com/pekral/github-readme-generator)。

### Brain：可扩展 Agent runtime 预览

Agent loop 编译为 Wasm，在运行时中执行，会话事件可观察和回放；属于 early preview，API 可能不兼容变更。项目自报 benchmark 不含模型延迟，本页不据此宣称胜过其他 Agent。 证据状态：日期未确认。来源：[aexhq GitHub](https://github.com/aexhq/brain)。

### Connecting an AI agent to Safari

官方文档标题确认 AI agent 接入 Safari；抓取仅得到 JavaScript 壳，未核实具体能力、版本要求和发布日期，作为窗口内 HN 发现信号。 证据状态：日期未确认。来源：[Apple Developer](https://developer.apple.com/documentation/safari-developer-tools/connecting-an-ai-agent-to-safari)。



- [FrontierHarness Eval](https://frontierharness.org/)：新发现的 Runta 自发布 harness 评测；宣称以同一 Kimi K3 模型与冷启动环境比较 9 个 harness、12 种配置。网页发布日期未确认，未独立复现，不能据此泛化谁超越谁。
- [AURA：开源 SRE Agent 平台](https://github.com/mezmo/aura)：新发现的 Rust SRE Agent 平台，提供工具审批、MCP、多 Agent 与可观测性；生产采用为项目方自述，未核实原始发布日期。

## 观察池

### DSH / Pi 的 Sol 工具调用问题：作者已收窄结论

作者更正：失败证据仅适用于其 DSH 0.1.1-rc.2 / pi-ai 0.82.1 路径；Pi 0.84.4 + Sol 多步工具调用正常。Responses Lite 差异不证明故障因果，已撤回 capability gate 建议，等待 stock DSH alpha.4 复测。 日期：2026-09-02。来源：[GitHub 社区讨论](https://github.com/deepseek-ai/deepseek-harness/discussions/5377)。

### MemHub：共享持久记忆候选

HN 于上海 9 月 3 日 09:43 提交；原页 web open 失败，只有提交标题描述为 coding agent 共享记忆，功能与发布日期未确认。 证据状态：日期未确认。来源：[HN 发现 / 项目入口](https://memhub.simplex.lat/)。

### AI-Memory 2.0：Agent 与团队记忆经验文章

HN 于上海 9 月 3 日 07:03 提交，原文 web open 失败；保留记忆工程候选，不将标题中的最佳系统评价当作事实，原文日期未确认。 证据状态：日期未确认。来源：[HN 发现 / Akita on Rails](https://akitaonrails.com/en/2026/09/02/ai-memory-2-0-best-memory-system-for-agents-and-teams/)。

### CoOS：本地插件式业务应用候选

HN 于上海 9 月 3 日 07:18 提交，标题称 Agent 通过本地插件构建 CRM/ERP；原文 web open 失败，未核验功能、开源状态或发布日期。 证据状态：日期未确认。来源：[HN 发现 / 项目入口](https://pirol.ai/)。



FrontierHarness 页面提供同模型、相同运行环境的具名比较，但同时由 Runta 发布并引导试用，属于厂商自报；成本表格的“每任务”与“仅成功任务”口径不同，不直接把标题中的倍率作为普适效率结论。AURA 的权限控制和生产采用需要额外验证；Trending 的 Atlas、SIE、Chrome DevTools MCP、WebLLM 只作新热度信号。

## 旧文再热

未确认同时满足原文早于七天、过去24小时 HN 再讨论且原始日期可核验的条目。



### 本轮 HN 项目候选（日期未确认）

- **[PromptSonar](https://github.com/meghal86/promptsonar)**：对提示、MCP 配置与 Agent 工作流进行本地静态扫描；仓库可读，不将项目安全对齐宣称当作独立安全认证。 证据状态：原仓库已打开，发布日期未确认。

- **[Ava](https://github.com/SmartAI/ava)**：面向原生产品与容器服务的 C++ coding-agent runtime，强调持久会话；未核实首次发布日期及性能。 证据状态：原仓库已打开，发布日期未确认。

- **[Panic Room](https://github.com/storesm/panicroom)**：HN 提交称本地零依赖 Agent sandbox，原仓库存在；隔离边界与安全保证未独立验证。 证据状态：原仓库已打开，发布日期未确认。

- **[ThoughtDAG](https://github.com/chenxiachan/thoughtdag)**：把 LLM 对话组织成可编辑思维图，以连接关系组织上下文；近期 HN 提及 coding-agent 会话，初次发布日期未核实。 证据状态：原仓库已打开，发布日期未确认。

- **[Kit](https://github.com/speakeasy-api/kit)**：coding-agent runtime 项目；标题中更快、更便宜属于项目方宣传，本页不据此作跨工具排名。 证据状态：原仓库已打开，发布日期未确认。

- **[Aplexica](https://github.com/Aplexica/Aplexica)**：尝试跨 Agent 状态与对话迁移；持续迁移能力及兼容性未实际测试。 证据状态：原仓库已打开，发布日期未确认。

- **[Sensez](https://github.com/popov95s/sensez)**：面向 coding agents 的代码质量辅助候选；来自 HN 提交与原始仓库，不将识别所有代码异味视为已验证。 证据状态：原仓库已打开，发布日期未确认。

- **[HEIDES](https://github.com/AbduljabbarBXR/heides)**：提供确定性代码 harness，项目定位涵盖代码感知、记忆与判断；效果未独立评估。 证据状态：原仓库已打开，发布日期未确认。

- **[Agent Voice Kit](https://github.com/franciscocarloserra/agent-voice-kit)**：HN 描述为使用 whisper 与 supertonic 的本地 Agent 语音工具；仓库可读，首次发布日期与端到端体验未验证。 证据状态：原仓库已打开，发布日期未确认。

- **[Shelley](https://github.com/boldsoftware/shelley)**：独立 coding-agent 项目，原始仓库可读；窗口内 HN 发现不意味着今天发布。 证据状态：原仓库已打开，发布日期未确认。

- **[Authorizer](https://github.com/authorizerdev/authorizer)**：自托管认证授权项目，HN 将其作为企业应用与 Agent 访问控制候选；现有项目不包装成今日首发。 证据状态：原仓库已打开，发布日期未确认。

- **[ToolJet](https://github.com/ToolJet/ToolJet)**：开源内部工具基础平台，仓库说明可经 MCP 接入 Claude Code、Codex 和 Cursor；当前发现不确认集成发布日。 证据状态：原仓库已打开，发布日期未确认。

- **[ReviewAssist：会话辅助 PR 审查候选](https://reviewassist.dev/)**：HN 于上海 9 月 3 日 12:50 提交，标题描述利用编码会话辅助修复和 PR 导览；原页 web open 返回 Internal Error，能力、开源状态与发布时间未核实。

## 本轮新增日期未确认与观察池

- **[Pi：RPC 取消压缩修复待发布](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/CHANGELOG.md)**（日期未确认）：Unreleased 新见 RPC abort 成功却未取消手动 compaction 的修复记录；最新正式 release 仍为 0.84.4。修复进入记录的具体时间未确认，不写成已发布版本。

- **[Chopin：多人实时 Agent 规划原型](https://githubnext.com/projects/chopin/)**（日期未确认）：官方页面标为 Research Prototype、2026 年 9 月，探索多人和 Agent 共同规划与研究。HN 上海 9 月 3 日 16:58 发现；准确发布日期、开放可用范围未确认，不当作正式产品上线。

- **[PicoLM v1.0-rc1 候选](https://github.com/whoreson/picolm/)**（日期未确认）：HN 新提交指向 RightNow-AI/picolm 的独立 fork；README 列出 C 实现的 SIMD/GPU 推理、GGUF 模型和兼容 API。首次发布日期未确认，作者更快、更简单及 AI 编码占比宣称未独立验证。

- **[GitHub CLI：在议题与 PR 附加媒体](https://github.blog/changelog/2026-09-01-github-cli-media-in-issues-pull-requests-and-comments/)**（2026-09-01）：官方 9 月 1 日说明 gh 2.99.0 的 --attach 可用于 issue/pr 创建、编辑和评论，适合自动化提交截图证据；本轮 HN 再发现，属于较早工具补充，不视为今日首发。

- **[Context complexity：Agent API 上下文复杂度](https://mchav.github.io/context-complexity/)**（日期未确认）：HN 上海 9 月 3 日 17:01 提交，标题讨论 Agent API 的上下文复杂度。原页 web open 返回 Internal Error，正文和发布日期未核实，保留工程候选。

- **[Marginal：面向 Coding Agent 的 Markdown 编辑器候选](https://marginal.md/blog.html)**（日期未确认）：HN 上海 9 月 3 日 14:45 提交，标题称为 Coding Agent 重做 Markdown 编辑器；原页 web open 返回 Internal Error，能力、开源状态与日期未核实。

- **[AurumFlux：支付重试语义候选](https://aurumflux.co/retry-safety/)**（日期未确认）：HN 上海 9 月 3 日 14:27 提交，标题讨论回复丢失后的 Agent 支付重试；原页 web open 返回 Internal Error，无法确认代码机制或支付一次保证，仅列观察池。

- **[Mozaik：多 Agent 互操作架构经验](https://mozaik.jigjoy.ai/blog/the-interoperability-triangle)**（日期未确认）：作者以自己的软件工厂描述共享总线、并行 Agent、依赖暂停恢复与边界协商；HN 上海 9 月 3 日 14:00 发现，发布日期未确认，运行案例和最佳架构结论为作者自述。

- **[Catalyst Agent Stack：基础设施接口候选](https://catalyst.zoho.com/agent-stack/)**（日期未确认）：原文描述面向 Coding Agent 的结构化 skills、部署接口、MCP 与预览环境；HN 上海 9 月 3 日 16:48 发现，日期及安全保证未独立核实。此处是开发平台邻近信号，不能据此认定托管 Agent 执行。

- **[LLMs and self-referentiality](https://scottaaronson.blog/?p=10046)**（日期未确认）：作者讨论自指与智能的关系，属理论观点而非具名基准；本轮 HN 首页再讨论，评论显示至少 9 月 1 日已存在，精确发布时间与时区未确认，作为观察池背景。

## 来源链接

- [Cline Desktop v0.0.23-beta.1](https://github.com/cline/cline/releases/tag/desktop-v0.0.23-beta.1)
- [OpenCode v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27)
- [llm-gemini 0.34](https://github.com/simonw/llm-gemini/releases/tag/0.34)
- [llm-gemini 0.34：HTML 工具实验](https://simonwillison.net/2026/Sep/2/llm-gemini/)
- [Co-Designing AI Models Using Speculative Decoding for Faster LLM Inference](https://developer.nvidia.com/blog/co-designing-ai-models-using-speculative-decoding-for-faster-llm-inference/)
- [Agent Memory Is a Surface for Endogenous Authorization Laundering](https://arxiv.org/abs/2609.01836)
- [SolarWM：开放数据与长程视频世界模型训练](https://arxiv.org/abs/2609.02886)
- [DSH / Pi 的 Sol 工具调用问题：作者已收窄结论](https://github.com/deepseek-ai/deepseek-harness/discussions/5377)
- [zvec-grep：本地优先混合检索](https://github.com/zvec-ai/zvec-grep)
- [README 证据生成 skill](https://github.com/pekral/github-readme-generator)
- [Brain：可扩展 Agent runtime 预览](https://github.com/aexhq/brain)
- [Connecting an AI agent to Safari](https://developer.apple.com/documentation/safari-developer-tools/connecting-an-ai-agent-to-safari)
- [MemHub：共享持久记忆候选](https://memhub.simplex.lat/)
- [AI-Memory 2.0：Agent 与团队记忆经验文章](https://akitaonrails.com/en/2026/09/02/ai-memory-2-0-best-memory-system-for-agents-and-teams/)
- [CoOS：本地插件式业务应用候选](https://pirol.ai/)


- [DeepSeek Harness v0.1.2-alpha.4](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4)
- [DeepSeek Harness v0.1.2-alpha.5](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5)
- [Desktop v0.0.22](https://github.com/cline/cline/releases/tag/desktop-v0.0.22)
- [Cline v4.1.17](https://github.com/cline/cline/releases/tag/v4.1.17)
- [SDK v0.0.82](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.82)
- [CLI v3.0.61](https://github.com/cline/cline/releases/tag/cli-v3.0.61)
- [OpenCode v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26)
- [Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement](https://arxiv.org/abs/2609.01481)
- [What's in Your Agent's Context? Context Privilege Escalation Attacks against AI Agent Harness](https://arxiv.org/abs/2609.01222)
- [From Production Traffic to Post-Training: Building a Self-Hosted LLM That Covers the Corporate Request Mix](https://arxiv.org/abs/2609.01572)
- [Control-Data Flow Separation: Stable Prompt Optimization in Multi-Agent LLMs](https://arxiv.org/abs/2609.00621)
- [Atlas：面向 Agent 的源码与会话追踪](https://github.com/pacifio/atlas)
- [SIE：Agent 模型推理服务](https://github.com/superlinked/sie)
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- [WebLLM：浏览器内 LLM 推理](https://github.com/mlc-ai/web-llm)
- [FrontierHarness Eval](https://frontierharness.org/)
- [AURA：开源 SRE Agent 平台](https://github.com/mezmo/aura)

## 采集状态

- 已检查来源：Cline 官方仓库、releases 与 changelog；Pi Coding Agent / pi-mono 官方仓库（已重定向至 earendil-works/pi）、packages 与 releases；DeepSeek Harness / DSH 官方仓库、releases 与 README/文档；OpenCode 官方仓库 anomalyco/opencode 与 releases；Aider 官方仓库 Aider-AI/aider、releases 与 changelog；Continue 官方仓库 continuedev/continue、releases 与 changelog；Roo Code 官方仓库 RooCodeInc/Roo-Code、releases 与 changelog；GitHub Trending daily：overall、Python、TypeScript；Hacker News front/newest 与 Algolia recent submissions；Hugging Face Daily Papers/API；arXiv recent AI/Agent/LLM papers；Simon Willison Weblog Atom 与原文；本轮重查七个 harness 官方 releases API；Cline/Pi raw changelog、Pi packages、DSH README/官方文档、Continue CLI tree、Roo CHANGELOG、Aider 仓库；NVIDIA Technical Blog 原文与发布时间 meta；llm-gemini GitHub release / Simon Atom / 原文；DSH discussions/5377 作者更正；zvec-grep、README skill、Brain 原始仓库；Apple Safari 文档入口；本轮七个 harness GitHub releases API；Cline 原始 CHANGELOG/文档；Pi coding-agent CHANGELOG/packages/docs；DSH docs/README/release；Aider HISTORY；Continue CLI tree；Roo CHANGELOG；本轮 HN front/newest、Algolia agent 24h；GitHub 三类 Trending；HF Papers 9/3 API 与 blog；arXiv recent 和八篇原文 submission history；Simon 首页；GitHub Blog 原文发布时间 meta；本轮十二个 HN 项目原仓库与 ReviewAssist 入口；Cline 配图正常 TLS HTTP 200 image/png；17 时轮：七个 harness releases API、Cline CHANGELOG/README、Pi packages/CHANGELOG/RPC 文档、DSH master README/docs/agent-lifecycle 与 rc.1 原文、Aider HISTORY、Continue CLI tree、Roo CHANGELOG；17 时轮：HN front/newest 与 Algolia agent 24h；GitHub overall/Python/TypeScript Trending；HF Papers/blog、arXiv recent、Simon Weblog；mex release、Chopin、PicoLM、GitHub CLI、Mozaik、Catalyst 原文；Cline 配图 HTTP 200 image/png。
- 失败来源与原因：MemHub、AI-Memory 2.0、CoOS 原文 web open 失败：保留 HN 窗口内发现证据，未核验正文；Apple Safari 文档仅返回 JavaScript 壳：发布日期与能力细节未核实；ReviewAssist 原页 web open 返回 Internal Error：保留 HN 标题和提交时刻，仅列日期未确认观察池；DSH main/README 初次 404：已切换实际 master 分支恢复；Continue release body 为 null：已用 release 元数据和 CLI tree 核验；Context complexity、Marginal、AurumFlux 原页 web open 返回 Internal Error：仅保留 HN 提交标题与时刻，正文未确认。
- 初始候选数：92（含当天既有候选及本轮 release、HN、研究/邻近候选）。
- 保留来源数：66（原有 54 条全部保留，新增 12 条）。
- 二次补搜：否；最终来源不为 0，release 已以 GitHub API 和原文交叉核验。
- 未遇 TLS 或安全检查错误；Cline 官方 beta 发布页配图重查 HTTP 200、image/png。

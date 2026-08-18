---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-18T00:00:00+08:00"
updatedAt: "2026-08-18T23:32:31+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "OpenAI President Greg Brockman: Compute is becoming the new oil of the AI age"
featuredUrl: "https://www.youtube.com/watch?v=eXBFnfrt2gU"
featuredSummary: "CNBC 对 OpenAI 总裁 Greg Brockman 的原始访谈，涵盖网络安全、AI 经济与资本开支。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-08-17 21:26 +08:00"
featuredTags: ["OpenAI","Company","Infrastructure","Security"]
featuredImage: "https://i.ytimg.com/vi/eXBFnfrt2gU/maxresdefault.jpg"
featuredImageAlt: "CNBC 对 OpenAI 总裁 Greg Brockman 的视频访谈画面"
featuredImageCaption: "题图来源：CNBC Television / YouTube"
tags:
  - "Agent"
  - "Agent Framework"
  - "Agent SDK"
  - "Agents"
  - "Agents SDK"
  - "AI"
  - "Anthropic"
  - "API"
  - "Approval"
  - "Authentication"
  - "Browser Agent"
  - "Claude"
  - "Claude Code"
  - "Claude Desktop"
  - "CLI"
  - "Code Review"
  - "Codex"
  - "Cohere"
  - "Collaboration"
  - "Company"
  - "Cowork"
  - "Date Unconfirmed"
  - "Deep Agents"
  - "Deprecation"
  - "Documentation"
  - "Education"
  - "EVIE"
  - "Foundry"
  - "Gemini"
  - "GitHub Action"
  - "Google"
  - "Google DeepMind"
  - "Hugging Face"
  - "Identity"
  - "Industry"
  - "Infrastructure"
  - "JavaScript"
  - "LangChain"
  - "LangChain Core"
  - "Logging"
  - "Maintenance"
  - "Marketplace"
  - "MCP"
  - "Microsoft"
  - "Model"
  - "Multi-Agent"
  - "Multimodal"
  - "OpenAI"
  - "Permissions"
  - "Persistence"
  - "Plugins"
  - "Pre-release"
  - "Privacy"
  - "Python"
  - "Qwen"
  - "Realtime API"
  - "Release"
  - "Release Candidate"
  - "Research"
  - "Responses API"
  - "Review"
  - "Safety"
  - "SDK"
  - "Security"
  - "Simply"
  - "Skills"
  - "Tencent"
  - "Tracing"
  - "Transformers"
  - "UX"
  - "Visual Retrieval"
---

## 扫描结论

主窗口：2026-08-17 22:11 至 2026-08-18 22:11（Asia/Shanghai）；近两日为 2026-08-16 22:11 至 2026-08-17 22:11，近三日为 2026-08-15 22:11 至 2026-08-16 22:11。本轮在原有 EVIE、Qwen、BrowserSkill、OpenAI、Microsoft、LangChain 与 Anthropic 更新之外，又确认 EVIE 双向注意力补丁及训练预算外推说明、BrowserSkill 跨进程 iframe 观察支持、Qwen Code 评审严重度发布边界、OpenAI Codex 的 MCP 来源约束与敏感文件安全读取，以及 Hugging Face Transformers 生成配置优先级修复。均按正式发布、已合入提交或开发信号分别标注。

## 优先动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| 腾讯 | [EVIE-Preview-4.5B](https://github.com/Tencent/EVIE-Preview-4.5B) | 官方新公开模型仓库 | 2026-08-18 17:15–20:17 +08:00，已核实 | 腾讯公开 4.54B 多语言视觉文档检索模型；随后提交[双向注意力补丁](https://github.com/Tencent/EVIE-Preview-4.5B/commit/37d0c7c989a3ba1bc9bb957ec1cd4b7c9640fb98)，并[明确 1,792 visual tokens 是超出 768 训练预算的外推](https://github.com/Tencent/EVIE-Preview-4.5B/commit/4691f5b2162da4fa8d6bb2f3a3b0660a149d7448)。榜单仍属发布方自报。 | 补丁让公开权重的复现路径更完整；外推说明也降低了误读长视觉序列能力的风险。 |
| OpenAI | Codex 安全、权限与协作提交组 | 官方主分支提交，非正式发布 | 2026-08-18 13:15–15:51 +08:00，已核实 | [日志 Token 遮罩](https://github.com/openai/codex/commit/9a254ba1fa0315e90e0cb2eed5038eaf418a19cd)、[权限配置持久化](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)与[恢复](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)、[Guardian strict review](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)、[动态 shell 审批](https://github.com/openai/codex/commit/4216123b3df55c7f59323e9d57055e1c8dc4dbba)、[协作说明刷新](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)与[Marketplace 身份防伪](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)。详见 OpenAI 专题页。 | 同一窗口内连续收紧凭据、审批、恢复与来源身份边界，但仍需等待正式版本承载。 |
| LangChain | [Deep Agents CLI 0.1.57](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.57) | 官方 GitHub 发布 | 2026-08-18 12:31 +08:00，已核实 | 增加冷缓存提示、可调整输入、多选提问、ACP 审批模式和模型选择，并修复恢复、转录与自动审批问题。 | Agent CLI 的审批与交互能力获得实质性版本更新。 |
| Anthropic | [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)、[Agent SDK TS v0.3.234](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.234)、[Code Action v1.0.194](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194) | 官方 GitHub 发布 | 2026-08-18 04:20–04:25 +08:00，已核实 | 覆盖 GitLab MR、用量重置续跑、VCS/权限事件、路径与附件限制、依赖漏洞和 PR 上下文。详见 Claude 专题页。 | Claude 编码工具、SDK 与 CI 集成同时更新。 |
| OpenAI | Go、Node.js、Python、Ruby、Java SDK 更新 | 官方 SDK 发布 | 2026-08-18 03:10–03:19 +08:00，已核实 | [Go v3.52.0](https://github.com/openai/openai-go/releases/tag/v3.52.0)、[Node.js v7.5.0](https://github.com/openai/openai-node/releases/tag/v7.5.0)、[Python v3.2.0](https://github.com/openai/openai-python/releases/tag/v3.2.0)、[Ruby v0.80.0](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)、[Java v4.52.0](https://github.com/openai/openai-java/releases/tag/v4.52.0)同步 Bedrock Runtime 及相关类型/事件。详见 OpenAI 专题页。 | API 能力跨五种语言生态同步落地。 |

## 常规动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Qwen | [Qwen Code Aone 评审读取路径](https://github.com/QwenLM/qwen-code/commit/da26cffc3612a97e0304c0195b6bf697b3299ea5) | 官方主分支提交，非正式发布 | 2026-08-18 17:19 +08:00，已核实 | `/review` 新增 Aone Code 只读 provider，可抓取 CR、构建 worktree/diff 并关联工作项；写评论仍拒绝，提交同时补强远端身份、refspec 与凭据遮罩。 | 把代码评审 Agent 的读取链路扩展到第二种评审平台，但尚未形成 release。 |
| Qwen | [Qwen-MM-Plugins 支持 CodeBuddy / WorkBuddy](https://github.com/QwenLM/Qwen-MM-Plugins/commit/e4cfd146e1a3e81e4bfa34481fafa13e6c50bc98) | 官方主分支提交，非正式发布 | 2026-08-18 17:42 +08:00，已核实 | 安装脚本、文档与测试增加两个 harness 的插件路径适配。 | 扩展多模态插件在更多编码 Agent 宿主中的可安装性。 |
| Qwen | [Qwen Code 评审严重度发布边界](https://github.com/QwenLM/qwen-code/commit/fb2170c0c53c8b256d74d87e636e6df6c17f0ad4) | 官方主分支提交，非正式发布 | 2026-08-18 21:32 +08:00，已核实 | 在实际发帖边界强制执行已解析的 severity floor，并更新授权、inline count、artifact 与 submit 测试。 | 把评审策略从提示层落实到提交边界，减少低于门槛的评论被误发；仍待 release。 |
| 腾讯 | BrowserSkill 观察缓存与 [OOPIF 支持](https://github.com/Tencent/BrowserSkill/commit/c7252529f429e769302f060ba0168061a734f712) | 官方主分支提交，非正式发布 | 2026-08-18 18:15、21:16 +08:00，已核实 | 在两槽内存观察帧之外，扩展统一 frame geometry、引用与交互路径，使扩展可观察和操作跨进程 iframe；覆盖 VOM、截图引用与 human-loop 测试。 | 同时改善浏览器 Agent 的持久化边界与复杂 iframe 页面覆盖，尚未形成 release。 |
| OpenAI | Codex MCP 来源约束、敏感文件读取与长会话修复 | 官方主分支提交，非正式发布 | 2026-08-18 17:25–21:36 +08:00，已核实 | 除[跳过空 idle 消息](https://github.com/openai/codex/commit/63b268c81b28bb65203afdc57862efaa3879998b)和[remote compaction v2](https://github.com/openai/codex/commit/711a5f8b3a6eb40134146ae9ec22fdcdda5e3170)外，又将 [MCP resource read 限定到原始 call](https://github.com/openai/codex/commit/880f1135ea5902f85d7c13d60ee01d61334b6ad9)、[在 compaction 后保留来源](https://github.com/openai/codex/commit/a397079287e6638b39dda329835350d93222681f)，并增加[敏感文件的 symlink-safe reader](https://github.com/openai/codex/commit/b5ea64a203ce1b04629010d3ef0a0d18c3c870a9)。详见 OpenAI 专题页。 | 收紧 MCP 跨调用读取与符号链接边界，同时改善恢复一致性；仍待正式版本。 |
| OpenAI | Agents SDK 保持 Codex 验证沙箱 | 官方主分支提交，非正式发布 | 2026-08-18 18:54–19:46 +08:00，已核实 | [JavaScript](https://github.com/openai/openai-agents-js/commit/272cb52e23947f3f47fd9a39475ae3a2a27572b9)与 [Python](https://github.com/openai/openai-agents-python/commit/ebb746dc00b0dd6a90c30bc5ccb7e9c445e55493) 仓库的代码变更验证流程均明确保持 Codex 沙箱并补测试；这是开发流程，不是 SDK API 发布。详见 OpenAI 专题页。 | 反映两个 SDK 仓库采用一致的 Agent 验证安全边界。 |
| Cohere | [TypeScript SDK 空 Token 时省略 Authorization](https://github.com/cohere-ai/cohere-typescript/commit/7c29ae7bc5bb928a102b671400231b5543665c98) | 官方主分支提交，非正式发布 | 2026-08-18 19:10 +08:00，已核实 | 当 token 为空时不再发送空的 Authorization header；尚未看到对应 release。 | 避免代理或匿名端点把空凭据误当成认证尝试。 |
| Microsoft | [Agent Framework .NET 1.18.0 版本号更新](https://github.com/microsoft/agent-framework/commit/1b45c15749dbef06b9b97b5d09b7f0b3b1e7ceb3) | 官方发布准备提交 | 2026-08-18 18:01 +08:00，已核实 | 主分支把 NuGet package version 更新到 1.18.0；截止时间前未发现对应 GitHub release/tag。 | 是明确发布准备信号，不能单凭版本号提交宣称 1.18.0 已正式发布。 |
| OpenAI | Agents SDK 运行时探测审批与 Codex dashboard 快捷操作 | 官方主分支提交，非正式发布 | 2026-08-18 13:24–15:07 +08:00，已核实 | [Agents JavaScript](https://github.com/openai/openai-agents-js/commit/42489cda7f38a1da7220fda2e403ef6b7222fc4b)及[Agents Python](https://github.com/openai/openai-agents-python/commit/9648a401a041919cef91fd68069ef2514708f10e)明确 Skills 运行时探测审批，[Codex](https://github.com/openai/codex/commit/f47f77ada6699460bf13b0b7278e710692e0ea34)增加 Agents dashboard 快捷操作。详见 OpenAI 专题页。 | 改动具有工程价值，但未形成正式版本。 |
| Anthropic | [Claude Agent SDK Python 主分支更新](https://github.com/anthropics/claude-agent-sdk-python/commits/main/) | 官方仓库维护，非正式发布 | 2026-08-18 07:31 +08:00，已核实 | 修复子 Agent 文本转发、父级 tool-use ID 恢复与 string prompt 权限回调，并补充 ResultError 类型。详见 Claude 专题页。 | 提升 SDK 在嵌套 Agent 与错误处理中的一致性。 |
| Anthropic | Skills 与插件目录维护 | 官方仓库维护 | 2026-08-18 01:23–17:21 +08:00，已核实 | 主窗口内新增 [discernment-nudge](https://github.com/anthropics/skills/commit/f379e5ad66e2febc1616cf8d6284666fecbe514e) 并同步[官方插件目录](https://github.com/anthropics/claude-plugins-official/commits/main/)与[知识工作插件目录](https://github.com/anthropics/knowledge-work-plugins/commits/main/)；claude-academy-guide 已滑入近两日。详见 Claude 专题页。 | 展示 Skills 与插件索引维护，不等同于产品大版本。 |
| Google DeepMind | [Simply Bash null timeout 修复](https://github.com/google-deepmind/simply/commit/ee2579ccfcec3c54488327c76184b6a54592405f) | 官方组织仓库维护，非产品发布 | 2026-08-18 14:59 +08:00，已核实 | 修复关闭 Bash action timeout 时的 null 处理并补测试；同期另三项仅为依赖升级，且仓库声明 Simply 不是官方 Google 产品。 | 是明确工程修复，但不应上升为 Google 产品发布。 |
| Hugging Face | [Transformers generation_config 优先级修复](https://github.com/huggingface/transformers/commit/bc7772617f789287d7b754478bab38799192765a) | 官方主分支修复，非正式发布 | 2026-08-18 22:02 +08:00，已核实 | 文本生成 pipeline 不再用 pipeline 默认值覆盖模型自身 generation_config，并补回归测试；同窗口其余候选多为集成测试或常规修复。 | 避免部署时模型级生成参数被静默改写，但仍需等待 release。 |
| Microsoft | Agent Framework 安全与可观测性维护 | 官方主分支提交，非正式发布 | 2026-08-18 01:28–12:26 +08:00，已核实 | [限制工作流类型反序列化](https://github.com/microsoft/agent-framework/commit/af4347a61d6335938282b8c4e6e7a9173832c33f)、改进 [trace context](https://github.com/microsoft/agent-framework/commit/00d7102c54aa4ed14676cfceb41645e19097b62e) 并加入 [Foundry session 用户身份透传](https://github.com/microsoft/agent-framework/commit/74808cb6c7979be6e4513115e35cd8497b38bbaf)。 | 安全边界和可观测性有具体改进，但属于主分支维护。 |
| LangChain | [langchain-core 1.5.6](https://github.com/langchain-ai/langchain/releases/tag/langchain-core%3D%3D1.5.6) 与 [langchain-openai 1.5.2a1](https://github.com/langchain-ai/langchain/releases/tag/langchain-openai%3D%3D1.5.2a1) | 官方发布 / 预发布 | 2026-08-18 05:26、09:51 +08:00，已核实 | Core 将 Gateway metadata 纳入 traces；OpenAI 集成补充 metadata 提取与 o-series Token 计数支持，后者仍为 alpha。 | 有助于网关可观测性，但预发布能力需等待稳定验证。 |
| OpenAI | [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) | 官方 GitHub 预发布 | 2026-08-18 03:27 +08:00，已核实 | 发布页未提供变更说明，不推断具体功能。详见 OpenAI 专题页。 | 版本存在可确认，功能判断应等 changelog 或稳定版。 |

除表内项目外，Google DeepMind、Microsoft 与 LangChain 同窗口的大量候选主要是依赖、文档、样例或常规修复；Meta、xAI、Mistral、字节/百度/DeepSeek/智谱/Moonshot/StepFun/MiniMax、NVIDIA 与 LlamaIndex 官方入口未核实到同窗口内的新技术发布；Hugging Face Transformers 的多项候选为常规修复，Cohere 则仅确认 TypeScript SDK 主分支修复。

## 播客与访谈

主窗口内，Latent Space、No Priors、The Cognitive Revolution、a16z AI 与厂商播客入口未发现可同时确认原始页面和发布时间的新一期；Dwarkesh 入口直接抓取返回 403，搜索索引亦未显示可核实新节目。OpenAI / CNBC 访谈已随窗口移动到“近两日补充”，详见 OpenAI 专题页。

## 近两日补充（24–48 小时）

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| OpenAI | [The Defender’s Window](https://openai.com/index/the-defenders-window) | 官方安全文章 | 2026-08-17 13:30 +08:00，已核实；已随窗口滑入本节 | OpenAI 说明其对 AI 网络安全攻防变化的判断与防护实践。详见 OpenAI 专题页。 | 提供厂商对 Agent 化安全能力和防御窗口的正式立场。 |
| OpenAI / CNBC | [Greg Brockman: Compute is becoming the new oil of the AI age](https://www.youtube.com/watch?v=eXBFnfrt2gU) | 原始视频访谈 | 2026-08-17 21:26 +08:00，已核实；已滑入近两日 | 涉及网络安全、AI 经济与资本开支。详见 OpenAI 专题页。 | 管理层直接表述，但不是技术发布。 |
| Anthropic | [claude-academy-guide Skill](https://github.com/anthropics/skills/commit/89dcaa3a283f79ed84fd8fe53e2208b9442a6427) | 官方仓库提交 | 2026-08-17 21:03 +08:00，已核实；已滑入近两日 | 新增按需读取 Claude Academy 实时目录的课程推荐 Skill。详见 Claude 专题页。 | 是官方 Skill 增量，但已离开主窗口。 |

<figure class="source-image">
  <a href="https://www.youtube.com/watch?v=eXBFnfrt2gU"><img src="https://i.ytimg.com/vi/eXBFnfrt2gU/maxresdefault.jpg" alt="CNBC 对 OpenAI 总裁 Greg Brockman 的视频访谈画面" loading="lazy" /></a>
  <figcaption><a href="https://www.youtube.com/watch?v=eXBFnfrt2gU">题图来源：CNBC Television / YouTube</a></figcaption>
</figure>

## 近三日补充（48–72 小时）

未发现新的 48–72 小时条目。

## 日期未确认

| 厂商 | 标题 | 状态 | 处理 |
|---|---|---|---|
| Anthropic | [Claude Desktop / Cowork changelog](https://claude.com/docs/cowork/changelog) | v1.32352.1 标注 2026-08-18、v1.32352.0 标注 2026-08-17，但均无时刻 | 保留日期证据，不判定是否落入精确 24 小时窗口；内容包括 Windows 首窗启动修复，以及 Code/Cowork/Chrome 权限与托管配置更新。详见 Claude 专题页。 |

## 观察池

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Google | [Gemini API 模型弃用记录](https://ai.google.dev/gemini-api/docs/changelog) | 官方旧公告、窗口内生效 | 公告日期 2026-06-15；下线日 2026-08-17 | Imagen 4 与 Gemini 3 Image 若干模型 ID 在本轮窗口前后完成下线；不是本窗口发布的新公告。 | 调用旧模型 ID 的应用需要确认迁移状态。 |
| Google DeepMind / Microsoft / LangChain | 常规提交候选 | 原始仓库信号 | 2026-08-18 | Simply 的三项依赖升级、Agent Framework 的文档/样例/依赖维护，以及 LangChain 多仓库的常规提交均已检查；未因数量放大为重大动态。 | 保留扫描证据，同时避免把自动维护误读为产品发布。 |
| Microsoft / Qwen / Hugging Face | 窗口末端常规修复候选 | 原始仓库信号 | 2026-08-18 19:12–22:11 | Agent Framework release build analyzer、Qwen WebUI / devx、Transformers 集成测试与 CUDA resize 等候选均已检查；未因提交数量放大为发布。 | 保留扫描证据，区分实质边界修复与例行维护。 |

## 来源链接

- [EVIE bidirectional attention patch](https://github.com/Tencent/EVIE-Preview-4.5B/commit/37d0c7c989a3ba1bc9bb957ec1cd4b7c9640fb98)
- [EVIE visual-token extrapolation note](https://github.com/Tencent/EVIE-Preview-4.5B/commit/4691f5b2162da4fa8d6bb2f3a3b0660a149d7448)
- [Qwen Code severity posting boundary](https://github.com/QwenLM/qwen-code/commit/fb2170c0c53c8b256d74d87e636e6df6c17f0ad4)
- [BrowserSkill OOPIF support](https://github.com/Tencent/BrowserSkill/commit/c7252529f429e769302f060ba0168061a734f712)
- [Codex scopes MCP resource reads](https://github.com/openai/codex/commit/880f1135ea5902f85d7c13d60ee01d61334b6ad9)
- [Codex preserves MCP resource origins](https://github.com/openai/codex/commit/a397079287e6638b39dda329835350d93222681f)
- [Codex symlink-safe sensitive-file reader](https://github.com/openai/codex/commit/b5ea64a203ce1b04629010d3ef0a0d18c3c870a9)
- [OpenAI Agents Python keeps verification sandboxed](https://github.com/openai/openai-agents-python/commit/ebb746dc00b0dd6a90c30bc5ccb7e9c445e55493)
- [Transformers generation_config precedence fix](https://github.com/huggingface/transformers/commit/bc7772617f789287d7b754478bab38799192765a)

- [Tencent EVIE-Preview-4.5B](https://github.com/Tencent/EVIE-Preview-4.5B)
- [Qwen Code Aone review provider](https://github.com/QwenLM/qwen-code/commit/da26cffc3612a97e0304c0195b6bf697b3299ea5)
- [Qwen-MM-Plugins CodeBuddy / WorkBuddy support](https://github.com/QwenLM/Qwen-MM-Plugins/commit/e4cfd146e1a3e81e4bfa34481fafa13e6c50bc98)
- [Tencent BrowserSkill observation ring](https://github.com/Tencent/BrowserSkill/commit/a9489282fa614d105e30fd131ed2692cd71308a6)
- [Codex skips empty automatic idle messages](https://github.com/openai/codex/commit/63b268c81b28bb65203afdc57862efaa3879998b)
- [Codex remote compaction drops descendant progress](https://github.com/openai/codex/commit/711a5f8b3a6eb40134146ae9ec22fdcdda5e3170)
- [OpenAI Agents JS keeps Codex verification sandboxed](https://github.com/openai/openai-agents-js/commit/272cb52e23947f3f47fd9a39475ae3a2a27572b9)
- [Cohere TypeScript omits empty Authorization](https://github.com/cohere-ai/cohere-typescript/commit/7c29ae7bc5bb928a102b671400231b5543665c98)
- [Microsoft Agent Framework prepares .NET 1.18.0](https://github.com/microsoft/agent-framework/commit/1b45c15749dbef06b9b97b5d09b7f0b3b1e7ceb3)
- [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)
- [Claude Agent SDK TypeScript v0.3.234](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.234)
- [Claude Code Action v1.0.194](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194)
- [Add discernment-nudge skill](https://github.com/anthropics/skills/commit/f379e5ad66e2febc1616cf8d6284666fecbe514e)
- [Add claude-academy-guide skill](https://github.com/anthropics/skills/commit/89dcaa3a283f79ed84fd8fe53e2208b9442a6427)
- [Anthropic official plugin directory commits](https://github.com/anthropics/claude-plugins-official/commits/main/)
- [Anthropic knowledge-work-plugins commits](https://github.com/anthropics/knowledge-work-plugins/commits/main/)
- [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
- [OpenAI Go v3.52.0](https://github.com/openai/openai-go/releases/tag/v3.52.0)
- [OpenAI Node.js v7.5.0](https://github.com/openai/openai-node/releases/tag/v7.5.0)
- [OpenAI Python v3.2.0](https://github.com/openai/openai-python/releases/tag/v3.2.0)
- [OpenAI Ruby v0.80.0](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)
- [OpenAI Java v4.52.0](https://github.com/openai/openai-java/releases/tag/v4.52.0)
- [The Defender’s Window](https://openai.com/index/the-defenders-window)
- [OpenAI President Greg Brockman: Compute is becoming the new oil of the AI age](https://www.youtube.com/watch?v=eXBFnfrt2gU)
- [Gemini API Release Notes](https://ai.google.dev/gemini-api/docs/changelog)
- [Claude Agent SDK Python main branch updates](https://github.com/anthropics/claude-agent-sdk-python/commits/main/)
- [Claude Desktop and Cowork changelog](https://claude.com/docs/cowork/changelog)
- [Codex rejects unmanaged marketplace-name spoofing](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)
- [Codex refreshes collaboration instructions by content hash](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)
- [Codex dynamic shell approval](https://github.com/openai/codex/commit/4216123b3df55c7f59323e9d57055e1c8dc4dbba)
- [OpenAI Agents JavaScript makes runtime probe approval explicit](https://github.com/openai/openai-agents-js/commit/42489cda7f38a1da7220fda2e403ef6b7222fc4b)
- [OpenAI Agents Python makes runtime probe approval explicit](https://github.com/openai/openai-agents-python/commit/9648a401a041919cef91fd68069ef2514708f10e)
- [Codex Guardian strict-review wiring](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)
- [Codex restores permission profiles on resume and fork](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)
- [Codex persists permission profiles](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)
- [Codex agents dashboard shortcuts](https://github.com/openai/codex/commit/f47f77ada6699460bf13b0b7278e710692e0ea34)
- [Codex redacts auth tokens from logs](https://github.com/openai/codex/commit/9a254ba1fa0315e90e0cb2eed5038eaf418a19cd)
- [Simply handles disabled Bash action timeouts](https://github.com/google-deepmind/simply/commit/ee2579ccfcec3c54488327c76184b6a54592405f)
- [Microsoft Agent Framework restricts workflow type deserialization](https://github.com/microsoft/agent-framework/commit/af4347a61d6335938282b8c4e6e7a9173832c33f)
- [Microsoft Agent Framework trace context propagation](https://github.com/microsoft/agent-framework/commit/00d7102c54aa4ed14676cfceb41645e19097b62e)
- [Microsoft Agent Framework Foundry session identity pass-through](https://github.com/microsoft/agent-framework/commit/74808cb6c7979be6e4513115e35cd8497b38bbaf)
- [Deep Agents CLI 0.1.57](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.1.57)
- [langchain-openai 1.5.2a1](https://github.com/langchain-ai/langchain/releases/tag/langchain-openai%3D%3D1.5.2a1)
- [langchain-core 1.5.6](https://github.com/langchain-ai/langchain/releases/tag/langchain-core%3D%3D1.5.6)

**一句话总结：本轮窗口末端的关键增量集中在浏览器跨 iframe、评审发布边界、MCP 来源约束、敏感文件符号链接安全与模型生成配置优先级；均已合入主分支，但除原有明确 release 外仍不能写成正式产品发布。**

## 采集状态

- 已检查：Anthropic、OpenAI、Google DeepMind/Research、Meta AI、Microsoft、xAI、Mistral、Cohere、Qwen/阿里/DAMO、字节、百度、腾讯、DeepSeek、智谱/GLM、Moonshot/Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain、LlamaIndex，以及六类播客/访谈入口；19:12–22:11 增量又逐仓库核查。
- 失败来源：OpenAI News、Dwarkesh 直接抓取 403；xAI、StepFun 及部分中国厂商页面依赖脚本或索引滞后；部分播客缺少稳定精确时刻。GitHub commit API 本轮可访问。
- 初始候选：155；保留来源：53；二次补搜：否（最终来源不为 0）。

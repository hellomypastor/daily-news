---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-18T00:00:00+08:00"
updatedAt: "2026-08-18T22:11:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Black-box pen tests on Replit"
featuredUrl: "https://replit.com/blog/black-box-pen-tests"
featuredSummary: "Replit 为托管应用加入并行白盒/黑盒渗透测试，确认的问题可交由 Replit Agent 修复。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-18 00:52 +08:00"
featuredTags: ["Replit","Security","Managed Agent"]
featuredImage: "https://cdn.sanity.io/images/bj34pdbp/migration/e76e2cbc56e0c02edda0e7b4292229a0cafdc670-2048x1071.jpg?w=1200&h=630&fit=max&fm=jpg"
featuredImageAlt: "Replit black-box penetration testing product illustration"
featuredImageCaption: "题图来源：Replit"
tags:
  - "AaaS"
  - "Adjacent Signal"
  - "ADP"
  - "Agent"
  - "Agent Commerce"
  - "Agent OS"
  - "Agent Platform"
  - "Agent Runtime"
  - "AgentKit"
  - "Agents SDK"
  - "Baidu Cloud"
  - "ByteDance"
  - "China Telecom Cloud"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloud Handoff"
  - "Cloudflare"
  - "Code Hosting"
  - "Codex"
  - "Coding Agent"
  - "Collaboration"
  - "Community"
  - "Control Plane"
  - "Coze Loop"
  - "CubeSandbox"
  - "Cursor"
  - "Date Unverified"
  - "Development Signal"
  - "Discovery"
  - "Enterprise"
  - "Evaluation"
  - "Google ADK"
  - "Governance"
  - "Guardian"
  - "Harness"
  - "Huawei Cloud"
  - "Lifecycle"
  - "MaaS"
  - "Managed Agent"
  - "Marketplace"
  - "MCP"
  - "Observability"
  - "Older Context"
  - "Open Source"
  - "OpenViking"
  - "PaaS"
  - "Pre-release"
  - "Qoder"
  - "Remote Agent"
  - "Remote Control"
  - "Remote Skills"
  - "Replit"
  - "Rumor"
  - "Sample Signal"
  - "Sandbox"
  - "SDK"
  - "Secondary"
  - "Security"
  - "Self-hosted"
  - "Session Resume"
  - "SkillHub"
  - "Startup"
  - "Tencent Cloud"
  - "Unverified"
  - "veADK"
  - "Voice AI"
  - "Volcengine"
  - "Watchlist"
---

## 今日概览

主窗口：2026-08-17 22:11 至 2026-08-18 22:11（Asia/Shanghai）；24–72 小时观察窗：2026-08-15 22:11 至 2026-08-17 22:11。按托管执行、异步任务、隔离环境、生命周期、编排、可观测、企业接入、远程编码和商业化维度重扫海外与中国厂商。

本轮主窗口内保留 5 组已核实的 AaaS 相关发布或工程动态：Replit 黑盒渗透测试、Claude Code Remote Control 修复、pi-wake 远程容器唤醒、Google ADK 会话恢复/后台任务生命周期，以及新增的 Cloudflare Agents SDK 0.21.0。Cumora 已滑入 24–72 小时观察。字节/火山新增远程 Skills、会话快照、沙箱预览与 SkillHub 样例信号，但证据来自主分支 commits 或样例仓库，不能写成 AgentKit 托管服务发布。OpenAI 窗口后段新增的 Codex/Agents SDK 安全与来源约束也只列控制面开发信号。

## 重点动态

1. **Cloudflare Agents SDK 0.21.0 发布。** [官方 release](https://github.com/cloudflare/agents/releases/tag/agents%400.21.0)于 2026-08-18 17:08（上海时间）发布，增加 Kitesurf 浏览器会话选项、Workflow retention 透传、规范化 Agent/子 Agent 外部地址、子 Agent 请求体流式转发，以及审批跨度和 invoke_agent 父子层级的遥测修复。它直接作用于 Cloudflare Workers 上的 Agent 运行与编排层，属于本轮主窗口内 AaaS 工程发布。
2. **Replit 把黑盒渗透测试并入托管构建闭环。** [官方文章](https://replit.com/blog/black-box-pen-tests)发布于 2026-08-18 00:52。Level 3 扫描并行运行白盒与黑盒检查，确认的问题可交给 Replit Agent 修复。
3. **Claude Code Remote Control 修复跨端状态。** [v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)于 04:20 发布，覆盖手机/网页端文件打开、权限与模型同步、远端 effort 设置和账户切换反馈；AaaS 含义是宿主会话与远程控制面更一致，**详见 Claude 专题页**。
4. **pi-wake 公开远程容器事件与离线同会话唤醒。** [原仓库](https://github.com/Jasperxjy/pi-wake)创建于 13:13，描述 SSH watcher、持久 outbox、离线 headless resume 和至少一次交付；它是自托管扩展，不代表成熟托管服务。
5. **Google ADK 补齐会话恢复与后台任务回收。** [v1.39.0](https://github.com/google/adk-python/releases/tag/v1.39.0)于 03:25 发布，Live 会话使用 resumption handle 并在 run 结束时停止后台 tool tasks；[v2.7.1](https://github.com/google/adk-python/releases/tag/v2.7.1)于 02:28 增加 session 初始化事件校验并修复 OpenTelemetry 依赖。发布页没有声称 Vertex/Jules 托管层同步上线。

<figure class="source-image">
  <a href="https://replit.com/blog/black-box-pen-tests"><img src="https://cdn.sanity.io/images/bj34pdbp/migration/e76e2cbc56e0c02edda0e7b4292229a0cafdc670-2048x1071.jpg?w=1200&amp;h=630&amp;fit=max&amp;fm=jpg" alt="Replit black-box penetration testing product illustration" loading="lazy" /></a>
  <figcaption><a href="https://replit.com/blog/black-box-pen-tests">题图来源：Replit</a></figcaption>
</figure>

## 远程 / 云端 Agent 执行

| 动态 | 执行形态 | AaaS 含义 | 证据状态 |
|---|---|---|---|
| Cloudflare Agents 0.21.0 | Workers/Durable Objects 上的 Agent、子 Agent、Workflow、Browser Tools | 路由、持久性、流式转发与遥测进入正式 SDK release | 官方、主窗口内 |
| Replit 黑盒渗透测试 | 托管应用、浏览器/网络侧扫描、Agent 修复 | 安全验证成为远程构建与发布生命周期的一部分 | 官方、主窗口内 |
| Claude Code Remote Control | Desktop/VS Code 宿主与手机、网页联动 | 权限、模型和文件状态同步 | 官方、主窗口内；详见 Claude 专题页 |
| pi-wake | SSH 容器 watcher、持久 outbox、同 session 恢复 | 为等待、故障唤醒和异步长任务提供生命周期层 | 原仓库、主窗口内；自托管 |
| Google ADK | 会话恢复、后台工具任务回收、初始化校验 | 运行结束与恢复路径更完整 | 官方 release；未证明托管层同步发布 |
| Cumora Cloud | 每 Agent Pod、工具循环、工作区与成本台账 | 把执行、协作和运维放进受管服务层 | 原仓库、24–72 小时；规模未验证 |
| Cloudflare @cloudflare/computer | isolate、container、browser 与持久文件系统 | 异构 Agent runtime 架构 | 较旧官方原文 |

### OpenAI 控制面开发信号（尚非产品发布）

- [保存 turn 权限画像](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)与[冷恢复/fork 恢复](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)继续补齐会话恢复后的 approval、reviewer 与 permission profile；[Guardian strict review](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)为实验性 app-server 提供结构化审批状态。
- [远程压缩](https://github.com/openai/codex/commit/711a5f8b3a6eb40134146ae9ec22fdcdda5e3170)、[自动空闲 turn](https://github.com/openai/codex/commit/63b268c81b28bb65203afdc57862efaa3879998b)、[协作说明刷新](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)与[Marketplace 身份防仿冒](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)涉及多 Agent 长任务、恢复和供应链控制。
- 窗口后段新增[敏感文件符号链接安全读取](https://github.com/openai/codex/commit/b5ea64a203ce1b04629010d3ef0a0d18c3c870a9)、[压缩后保留 MCP resource origin](https://github.com/openai/codex/commit/a397079287e6638b39dda329835350d93222681f)、[MCP app resource 限制到原始调用](https://github.com/openai/codex/commit/880f1135ea5902f85d7c13d60ee01d61334b6ad9)，以及 Agents SDK Python 的[沙箱内 Codex verification](https://github.com/openai/openai-agents-python/commit/ebb746dc00b0dd6a90c30bc5ccb7e9c445e55493)。这些均是官方主分支证据，没有 release、cloud rollout 或启用范围。
- [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)与新增的[0.148.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.22)页面都只有版本号，无法据此证明远程服务变化。以上均**详见 OpenAI 专题页**。

## 海外厂商

### 24–72 小时观察

- [Cumora](https://github.com/yetone/cumora)创建于 2026-08-17 17:13，已滑出主窗口；README 描述 Cumora Cloud 为每个 Agent 提供独立托管 Pod，但商业规模和 SLA 未验证。
- [Replit 企业治理](https://replit.com/blog/new-enterprise-governance-tools)发布于 2026-08-17 07:57，加入覆盖 Agent 活动的审计事件、SIEM 流式输出和 Admin API beta。页面后续更新时间没有差异说明，不视为新发布。
- [Coze Loop 异步 CustomRPC evaluator commit](https://github.com/coze-dev/coze-loop/commit/d3b797b4c5cc5b7ebde858d2da5eb5dab2497e60)进入 24–72 小时观察：它补充并发异步回调、TTL 兼容和失败恢复，属于评测/可观测工程信号，不等同于 Coze 托管服务发布。

### 较旧观察

- [Cloudflare @cloudflare/computer](https://blog.cloudflare.com/cloudflare-computer/)发布于 2026-08-03，作为 isolate、container、browser 与持久文件系统统一运行时的架构基线保留。
- [Forklane 产品页](https://forklane.ai/)称工程师与 Agent 可在同一代码库、实时会话和共享任务板并行；[HN Public Beta 发现帖](https://news.ycombinator.com/item?id=49291014)时间为 2026-08-14，已超 72 小时。官方页缺少托管执行边界与发布日期，因此不写成今日发布。
- [华为云 AgentRun](https://www.huaweicloud.com/product/servicestage/agentrun.html)是全托管运行时、断点续传、沙箱与可观测的较旧官方基线；本轮无新发布时间。

## 中国厂商（字节跳动重点）

- **火山 veADK 远程 Skills。** [官方 commit](https://github.com/volcengine/veadk-python/commit/0bbfc1ab119618b68c30c7fd8d2d62f744488205)于 18:53 增加远程 Skills manifest、schema 校验、超时与执行代理封装。这是主分支工程信号，没有 release 或 AgentKit 云端 rollout。
- **AgentKit 样例的会话快照、沙箱预览与 SkillHub。** [Situla v0.1.1 样例 commit](https://github.com/bytedance/agentkit-samples/commit/df534245143acbd38ac68d4e6753ecf227da3bef)于 11:25 加入 session snapshot restore、sandbox preview 并延长 turn timeout；[Ark CUA Skill commit](https://github.com/bytedance/agentkit-samples/commit/e9dd57f93b72e296a870fae46132080d1b924a67)于 15:56 提交新 Skill 到 SkillHub。两者只证明公开样例仓库变化。
- **OpenViking 远程 Skills。** [官方 commit](https://github.com/volcengine/OpenViking/commit/e3c8e56fea818bcabe675b98ebff11d687851ae7)于 21:14 为 Vikingbot 增加远程 Skill 摘要、读取、缓存、本地物化边界与策略交集，属于开源控制面信号。
- **veADK-Python 1.1.2（24–72 小时）。** [官方 release](https://github.com/volcengine/veadk-python/releases/tag/1.1.2)于 2026-08-17 14:13 发布，增加用量统计、可唤醒沙箱快照、IAM 预检、生成物持久化和可恢复的本地到云端交接。
- **腾讯云两条旧公告已补齐日期。** [ADP 认证升级公告](https://cloud.tencent.com/announce/detail/2409)实际发布于 2026-08-03 21:00，只是 8 月 18 日生效；[youtu-agent/youtu-mrc-pro 调整公告](https://cloud.tencent.com/announce/detail/2393)发布于 7 月 28 日 18:36，8 月 28 日起停止调用。前者是较旧生态信号，后者是较旧服务兼容性/MaaS 邻近信号，均不再列作日期未确认。
- 字节 Coze、AgentKit、Doubao、Trae、Seed，及阿里、腾讯、百度、华为、智谱、Moonshot/Kimi、MiniMax、DeepSeek 的官方入口未发现主窗口内可核实的托管服务 GA、定价或 SLA 更新。

## AaaS 与 MaaS/PaaS 分类说明

- AaaS 至少应包含托管/受管执行、异步任务、隔离环境、生命周期、编排、可观测、企业治理或远程编码工作之一。
- 仅模型推理、语音模型聚合或模型版本属于 MaaS；仅计算、容器、网络和沙箱基础设施属于 PaaS。SDK/主分支 commit 只有在明确连接受管运行层时才作为 AaaS 工程信号，并且不能冒充产品发布。
- Cumora、pi-wake、Forklane 与 h5i 都有相关执行/协作能力，但证据分别受商业规模未验证、自托管、托管边界不明或明确非 SaaS 的限制。

## 日期未确认

- **Cursor Origin Code Hosting。** [官方 Changelog](https://cursor.com/changelog/origin-code-hosting)只标注 2026-08-17，没有精确时间。它描述托管仓库、PR、GitHub 同步与仓库内 Agent 操作，是强 AaaS 候选，但不计入 24 小时已验证条目。
- **Qoder Cloud Agents。** [官方页](https://qoder.com/zh/cloud-agents)描述全托管运行、独立 Sandbox、长程执行、断点恢复和 SSE 可观测；页面无发布时间，官方并发/时长数字未独立验证。
- **中国托管平台基线。** [腾讯云 ADP](https://cloud.tencent.cn/product/adp)描述云端 Agent Harness、7×24 小时服务、沙箱、Skills 与长时任务；[火山 AgentKit](https://www.volcengine.com/product/agentkit)描述全托管运行时、Serverless、沙箱、记忆、监控与评测；[天翼云智能体引擎](https://www.ctyun.cn/products/age)描述一站式托管、虚机级隔离与监控；[华为 AgentArts](https://www.huaweicloud.com/product/agentarts)和[百度千帆 Agent 开发平台](https://cloud.baidu.com/doc/AppBuilder/s/Em35m1zob)提供全生命周期或 Agent 引擎基线。这些静态官方页都没有本轮发布时刻。
- **WorkToper。** [厂商页](https://www.worktoper.com/)的搜索索引快照自述云端 Agent OS、IDE、沙箱和持续在线任务；本轮直连返回 HTTP 403，且缺少日期、公司披露和第二来源，仅作受限候选，不认定为发布。

## 未证实传闻

- **AgentHub/agent commerce（单一来源，来源数：1）。** [Reddit 原帖](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)由相关方账号称测试 Agent 身份/支付验证，并转述其本人也无法确认的交易额说法。缺少官方公告、支付方或第二来源，不把产品规模、交易额或 beta 状态写成事实。

## 邻近信号观察池

- **Speko 语音模型路由。** [官方页](https://speko.ai/)提供多语种语音模型基准、统一 API/gateway 与 voice worker 观测；[HN Launch 讨论](https://news.ycombinator.com/item?id=49332751)在主窗口内出现。它更接近语音 MaaS/gateway，官方页没有发布日期，不能写成 AaaS 发布。
- **h5i 自托管沙箱。** [原仓库](https://github.com/h5i-dev/h5i)明确声明 local-first、no hosted sandbox、no SaaS，并提供自有 Linux runner、隔离浏览器、审计和分享；[Reddit 发现帖](https://www.reddit.com/r/ClaudeAI/comments/1vqupxf/selfhosted_sandbox_for_coding_agents/)在窗口内出现。它是 AaaS 运行时邻近基础设施，不是托管服务。
- **腾讯 CubeSandbox 网络策略。** [官方 commit](https://github.com/TencentCloud/CubeSandbox/commit/a59396362cc957cda2f87014e7cc10782723de2e)于 19:47 支持 L7 egress 规则绑定自定义端口与 scheme，属于沙箱网络/PaaS 邻近信号，未显示 ADP 托管层同步发布。
- **Amazon Bedrock 模型跨区推理。** [AWS 公告](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-cross-region-openai-v2/)于 04:29 发布，增加模型 API、跨区推理、日志和成本归因；这是 MaaS，不是 Agent 生命周期服务。
- **Cloudflare Workers AI 模型。** [Qwen 3.8 27B changelog](https://developers.cloudflare.com/changelog/post/2026-08-17-qwen-3.8-27b-workers-ai/)只有日期没有时刻，属于 MaaS；与 Agents 0.21.0 分开分类。
- **Harness 活动。** [官方活动页](https://www.harness.io/events/autonomous-worker-agents-live)的直播时间折算为 2026-08-19 01:00，晚于截止；页面描述带 OPA、RBAC 与审计轨迹的受管流水线 Agent，是未来事件信号，不是本轮已发生发布。

## 趋势

- **受管执行继续向安全、来源和审计下沉。** Replit 黑盒测试、Cloudflare 遥测/路由、Codex 的 MCP provenance 与敏感文件边界、CubeSandbox egress 规则都指向可验证控制面，但后两者仍是主分支开发信号。
- **长任务控制面开始围绕恢复、持久交付和远程能力装载收敛。** Google ADK、pi-wake、veADK/OpenViking 远程 Skills 与 AgentKit snapshot 样例分别覆盖恢复、唤醒、Skills 和沙箱状态；不能据此推断同一厂商已完成托管产品 rollout。
- **中国市场已出现多个全托管产品基线，但本轮新增证据主要来自工程仓库。** Qoder、腾讯 ADP、火山 AgentKit、华为 AgentRun/AgentArts 与天翼云均有官方能力页，因发布时间缺失或较旧只作基线。
- 样本包含 release、主分支 commits、样例、静态产品页、社区发现和单源传闻；不据此推断市场份额、收入、采用规模或成熟度。

## 来源链接

1. [Black-box pen tests on Replit](https://replit.com/blog/black-box-pen-tests)
2. [Cumora](https://github.com/yetone/cumora)
3. [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)（详见 Claude 专题页）
4. [pi-wake](https://github.com/Jasperxjy/pi-wake)
5. [Persist active permission profiles in turn context](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)（详见 OpenAI 专题页）
6. [Restore permission profiles on resume and fork](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)（详见 OpenAI 专题页）
7. [Guardian strict review notification](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)（详见 OpenAI 专题页）
8. [Govern Replit at scale](https://replit.com/blog/new-enterprise-governance-tools)
9. [Your agent needs a computer, not a container — introducing @cloudflare/computer](https://blog.cloudflare.com/cloudflare-computer/)
10. [Origin Code Hosting](https://cursor.com/changelog/origin-code-hosting)
11. [腾讯云智能体开发平台 AI 应用工程师认证升级公告](https://cloud.tencent.com/announce/detail/2409)
12. [Agent-to-agent to hit $1.5B by 2030](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)
13. [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)（详见 OpenAI 专题页）
14. [Refresh collaboration instructions when content changes](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)（详见 OpenAI 专题页）
15. [Prevent Marketplace identity spoofing](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)（详见 OpenAI 专题页）
16. [Autonomous Worker Agents, Live: Governed AI That Ships](https://www.harness.io/events/autonomous-worker-agents-live)
17. [Google ADK-Python v1.39.0](https://github.com/google/adk-python/releases/tag/v1.39.0)
18. [Google ADK-Python v2.7.1](https://github.com/google/adk-python/releases/tag/v2.7.1)
19. [Drop descendant progress updates after remote compaction](https://github.com/openai/codex/commit/711a5f8b3a6eb40134146ae9ec22fdcdda5e3170)（详见 OpenAI 专题页）
20. [Skip empty user messages for automatic idle turns](https://github.com/openai/codex/commit/63b268c81b28bb65203afdc57862efaa3879998b)（详见 OpenAI 专题页）
21. [veADK-Python 1.1.2](https://github.com/volcengine/veadk-python/releases/tag/1.1.2)
22. [Amazon Bedrock expands API support and introduces Cross Region Inferencing for OpenAI models](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-bedrock-cross-region-openai-v2/)
23. [Qwen 3.8 27B now available on Workers AI](https://developers.cloudflare.com/changelog/post/2026-08-17-qwen-3.8-27b-workers-ai/)
24. [关于 youtu-agent 及 youtu-mrc-pro 模型升级及切换安排的公告](https://cloud.tencent.com/announce/detail/2393)
25. [Cloudflare Agents SDK 0.21.0](https://github.com/cloudflare/agents/releases/tag/agents%400.21.0)
26. [Codex 0.148.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.22)（详见 OpenAI 专题页）
27. [Add a symlink-safe reader for sensitive files](https://github.com/openai/codex/commit/b5ea64a203ce1b04629010d3ef0a0d18c3c870a9)（详见 OpenAI 专题页）
28. [Preserve MCP resource origins across compaction](https://github.com/openai/codex/commit/a397079287e6638b39dda329835350d93222681f)（详见 OpenAI 专题页）
29. [Keep Codex verification for development sandboxed](https://github.com/openai/openai-agents-python/commit/ebb746dc00b0dd6a90c30bc5ccb7e9c445e55493)（详见 OpenAI 专题页）
30. [Scope MCP app resource reads to their originating call](https://github.com/openai/codex/commit/880f1135ea5902f85d7c13d60ee01d61334b6ad9)（详见 OpenAI 专题页）
31. [Add remote skills proxy wrapper](https://github.com/volcengine/veadk-python/commit/0bbfc1ab119618b68c30c7fd8d2d62f744488205)
32. [Support OpenViking remote skills](https://github.com/volcengine/OpenViking/commit/e3c8e56fea818bcabe675b98ebff11d687851ae7)
33. [Update Situla sample to v0.1.1](https://github.com/bytedance/agentkit-samples/commit/df534245143acbd38ac68d4e6753ecf227da3bef)
34. [Add ark-cua skill to SkillHub](https://github.com/bytedance/agentkit-samples/commit/e9dd57f93b72e296a870fae46132080d1b924a67)
35. [Support async CustomRPC evaluators](https://github.com/coze-dev/coze-loop/commit/d3b797b4c5cc5b7ebde858d2da5eb5dab2497e60)
36. [Support custom L7 port and scheme in egress rules](https://github.com/TencentCloud/CubeSandbox/commit/a59396362cc957cda2f87014e7cc10782723de2e)
37. [The Router for Voice AI](https://speko.ai/)
38. [Launch HN: Speko (YC S26) – OpenRouter for Voice AI](https://news.ycombinator.com/item?id=49332751)
39. [Forklane](https://forklane.ai/)
40. [Forklane AI – Public Beta Launch](https://news.ycombinator.com/item?id=49291014)
41. [h5i integrated sandbox for AI coding agents](https://github.com/h5i-dev/h5i)
42. [Self-Hosted Sandbox for Coding Agents](https://www.reddit.com/r/ClaudeAI/comments/1vqupxf/selfhosted_sandbox_for_coding_agents/)
43. [Qoder Cloud Agents](https://qoder.com/zh/cloud-agents)
44. [腾讯云智能体开发平台 ADP](https://cloud.tencent.cn/product/adp)
45. [火山引擎 AgentKit](https://www.volcengine.com/product/agentkit)
46. [Huawei Cloud AgentRun](https://www.huaweicloud.com/product/servicestage/agentrun.html)
47. [天翼云智能体引擎](https://www.ctyun.cn/products/age)
48. [WorkToper Agent OS](https://www.worktoper.com/)
49. [华为云 AgentArts](https://www.huaweicloud.com/product/agentarts)
50. [百度千帆 Agent 开发平台](https://cloud.baidu.com/doc/AppBuilder/s/Em35m1zob)

## 采集状态

- 已检查来源：Anthropic/OpenAI/GitHub、Google ADK/Jules/Vertex、Microsoft/GitHub Copilot、AWS Bedrock/AgentCore、Cloudflare Agents/Sandbox/Workers AI、Replit、Cursor、Devin、Factory、Sourcegraph、LangChain、CrewAI/Lindy、Harness、GitHub 组织 commits/新建仓库、HN、Reddit，以及字节 Coze/AgentKit/veADK/OpenViking/Trae/Seed、阿里、腾讯、百度、华为、天翼云、智谱、Moonshot/Kimi、MiniMax、DeepSeek 等入口。
- 失败来源：Replit RSS 404；LangChain feed 403；GitHub REST API 后段匿名限流，已切换 HTML/搜索原页；X 未登录不可稳定读取；serverlessagent.dev、context-engine.app、premissai.com 被本地网络策略拦截；WorkToper 直连 403；Forklane 只返回有限静态元数据，HN 旧帖直连 429 后改用 Algolia；部分中国厂商页无可核实发布时间。Microsoft Agent Framework 1.18.0 的 22:30 发布时间晚于截止，未纳入。
- 初始候选：63 条；保留：50 个来源、44 条动态（5 组主窗口已核实 AaaS、4 条 24–72 小时、6 条较旧官方/二手基线、8 条日期未确认平台候选、1 条未证实传闻、20 条主分支开发/样例/MaaS/PaaS/未来事件邻近信号）。
- 二次补搜：未运行（主窗口已有已验证 AaaS 且最终 sources 非 0，secondPass=false）。

今日扫描完成，共 44 条动态，重点：Cloudflare Agents 0.21.0 更新受管 Agent/子 Agent 路由、持久性与遥测；字节/火山补充远程 Skills、会话快照与沙箱预览开发信号但尚非托管发布；OpenAI 新增 MCP 来源与沙箱边界 commits，腾讯两条旧公告已纠正发布日期。

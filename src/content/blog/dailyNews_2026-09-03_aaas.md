---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-03T00:00:00+08:00"
updatedAt: "2026-09-03T09:38:36+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Introducing Agent Relay: Cloud-Hosted Agents, Self-Hosted Execution"
featuredUrl: "https://coder.com/blog/introducing-agent-relay-cloud-hosted-agents-self-hosted-execution"
featuredSummary: "Agent Relay 私有预览让 Cursor 云端推理循环连接企业自托管 Coder 工作区；工具执行与企业策略留在客户环境，推理仍经过供应商基础设施。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-09-03 00:00:02 +08:00"
featuredTags: ["AaaS","Cursor","Remote Execution","Private Preview"]
featuredImage: "https://www.datocms-assets.com/19109/1788364124-blog-thumbnail-1.png?fit=clip&fm=webp&w=800"
featuredImageAlt: "Coder Agent Relay 官方发布配图"
featuredImageCaption: "图片来源：Coder 官方 Agent Relay 发布文章"
tags:
  - "24–72 小时观察"
  - "观察池"
  - "可信二手"
  - "邻近信号"
  - "日期未确认"
  - "腾讯"
  - "原文访问受阻"
  - "字节跳动"
  - "AaaS"
  - "Agent"
  - "Agent Lifecycle"
  - "Agent Platform"
  - "Cloud Agent"
  - "Cloud Operations"
  - "Cursor"
  - "Enterprise Automation"
  - "GA"
  - "Governance"
  - "Government"
  - "Industrial Agent"
  - "Managed Agent"
  - "Managed AI"
  - "MCP"
  - "PaaS"
  - "Private Preview"
  - "Remote Execution"
  - "Security Agent"
  - "Self-hosted"
  - "Voice Agent"
---

## 今日概览

采集窗口：**2026-09-02 00:33 至 2026-09-03 00:33（Asia/Shanghai）**；24–72 小时观察窗口为 **2026-08-31 00:33 至 2026-09-02 00:33**。本日新建页面，不复制昨日旧背景。确认 3 条具有精确时间且落在窗口内的 AaaS 事件：Coder Agent Relay 私有预览、Celigo Ora GA、Automat-it Mate 生产应用。其余有用候选按日期、来源和托管边界分层保留，不能视为同等确认的发布。

## 重点动态

- **Coder Agent Relay：云端推理与企业自托管执行分离。** 原页元数据为上海 9 月 3 日 00:00:02。首个集成伙伴是 Cursor：供应商继续运行推理循环，工具在客户 Coder 工作区执行，身份归属与策略由企业管理。当前为设计伙伴私有预览，不是全量 GA；推理流量仍经供应商基础设施，不能解释成“所有数据完全不出企业”。[Coder 官方技术说明](https://coder.com/blog/introducing-agent-relay-cloud-hosted-agents-self-hosted-execution)
- **Celigo Ora 正式可用。** 原页元数据为上海 9 月 2 日 09:36:43；官方 FAQ 明确 GA 日期为 9 月 2 日。Ora 在 Celigo 平台内构建集成流程、映射与代码，排查失败并管理环境等资源；变更先暂存供人工批准，属于平台托管执行和企业控制面，不是仅生成建议的聊天机器人。[Celigo 官方文章](https://www.celigo.com/blog/celigo-ora-ga-launch/)
- **Automat-it Mate 已进入首批客户生产环境。** 原页发布时间为上海 9 月 2 日 16:56:07。Mate 持续监控多个 AWS 客户环境，开展调查、根因分析、修复建议，并协调 Slack、工单升级和报告；官方明确多租户架构与细粒度权限。没有据此推断其可无审批自动修复全部问题，也不采信标题中的“行业首个”比较。[Automat-it 官方公告](https://www.automat-it.com/blog/automat-it-launches-the-industrys-first-autonomous-ai-support-engineer-for-aws-production/)

<figure class="source-image">
  <a href="https://coder.com/blog/introducing-agent-relay-cloud-hosted-agents-self-hosted-execution"><img src="https://www.datocms-assets.com/19109/1788364124-blog-thumbnail-1.png?fit=clip&amp;fm=webp&amp;w=800" alt="Coder Agent Relay 官方发布配图" loading="lazy" /></a>
  <figcaption><a href="https://coder.com/blog/introducing-agent-relay-cloud-hosted-agents-self-hosted-execution">图片来源：Coder 官方 Agent Relay 发布文章</a></figcaption>
</figure>

## 远程 / 云端 Agent 执行

本轮最清晰的架构变化是 Coder 的混合部署：Agent 服务方托管推理循环，企业控制实际执行环境。它仍符合 AaaS 的托管生命周期与企业接入定义，但区别于纯供应商云端沙箱。Cursor 同日的自托管机器公告还包含动态团队池、休眠重连、Linux/Mac computer use，以及多个基础设施接入；该页仅核实日历日期，详见下方日期未确认条目。

Devin 已专项检查异步 session、环境、并发、计划任务、ACU/定价、企业权限与集成，官方 release notes 最新仍为 8 月 28 日，未确认窗口内新增。Grok Bot、Automations、Workflows、工具与远程执行亦已独立检查；未发现 Grok 品牌新增。Coder 与 SpaceXAI/Cursor 的合作不能等同于 Grok Bot 发布。

## 海外厂商

海外正式新增聚焦于混合远程执行、集成自动化和托管运维，分别见上述 Coder、Celigo、Mate。Google Vertex/Jules、Microsoft Agent服务、Replit、Lindy、CrewAI、LangGraph、GitHub coding agent、Amazon Q、Cloudflare、Factory、Amp 等已检查；当前证据未支持额外窗口内托管Agent发布，不能以“无新增”推断厂商没有在研发。

Cline 的新 SDK 迁移、Pi、DSH 与其 SSH/Cloudflare 社区项目，以及 OpenCode、Aider、Continue、Roo Code 的本地或自部署入口，都按“谁负责托管执行生命周期”划界；本地 harness 变化详见开源专题页。

## 中国市场（字节跳动重点）

- **字节跳动：豆包工作候选保留，不冒充云端发布。** 二手报道涉及多 Agent 并行和 Mac 本地 GUI 操作；未取得供应商托管运行时、异步服务或远程环境的新证据，因此列于邻近信号。Coze、火山引擎、Trae、Seed入口有动态渲染限制，不能声明已完整核验全部更新。
- **腾讯 WorkBuddy：可信二手观察。** 科技日报记者 9 月 2 日报道开放平台上线，提供 Agent Harness 接口和 Skill、Expert、Connector 能力，支持任务、记忆、产物跨端同步，并介绍伙伴应用。报道足以保留生态候选，但官方开放平台正文未提取成功，托管边界、配额与计价待核，不列入 3 条官方确认事件。[科技日报](https://www.stdaily.com/web/gdxw/2026-09/02/content_574097.html)
- 阿里百炼/Qoder/通义/夸克、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax、DeepSeek等均已定向检索；模型兼容 API 或本地工具适配不自动进入 AaaS。

## AaaS 与 MaaS / PaaS 边界

AaaS 需有托管任务、会话、调度、环境或生命周期证据。模型 API 是 MaaS；通用云平台、数据平台、MCP接入和本地GUI控制是邻近能力。企业自托管工具执行不必排除 AaaS，但必须像 Coder/Cursor 一样明确仍由供应商运行 Agent 循环；纯自部署开源 harness 不属于同一商业服务。

## 日期未确认

这里的“日期未确认”包含已知日历日期但缺少精确时间/时区的情况，事实与是否严格落入 24 小时窗口分别判断。

- **Cursor Self-hosted machines（官方、仅确认 9 月 2 日）**：支持个人机器与团队工作池、动态容量、空闲休眠及重连；云端 Agent 可在企业沙箱执行，并支持 Linux/Mac computer use。与 Coder 事件合并理解，但不能替该页面编造精确发布时间。[Cursor 官方 changelog](https://cursor.com/changelog/self-hosted-machines)
- **Syspro Torque（官方、仅确认 9 月 2 日公告）**：制造业平台生成并运行受审批的 Agent 工作流，记录决策依据、预估运行成本并按使用量计价；8 月已进入受控可用计划，因此不是 9 月 2 日全量 GA。部署责任与普遍可用范围继续观察。[Syspro 官方公告](https://www.syspro.com/press_release/syspro-launches-torque-the-industrial-ai-platform-that-transforms-manufacturing-decisions-into-auditable-automatic-action/)
- **Bud Agent（官方、仅确认 9 月 2 日）**：厂商描述从模型/工具选择、测试部署到上线后观察与权限内纠正的生命周期管理。托管运营责任、可用范围和效果尚未独立核验，不将愿景直接写成已验证生产能力。[Bud 官方公告](https://budecosystem.com/news/bud-ecosystem-launches-bud-agent-to-bring-recursive-intelligence-to-enterprise-ai/)
- **CrowdStrike agentic SOC（官方索引可见，原页访问受阻）**：9 月 2 日新闻索引描述 Charlotte AI 并行调度跨端点、身份、SaaS、云和网络的领域 Agent，并共享调查上下文。尚未核实原页全文、精确时刻及可用范围，保留观察候选。[官方新闻入口](https://crowdstrike.gcs-web.com/news-releases/news-release-details/crowdstrike-unveils-next-evolution-agentic-soc)

## 24–72 小时观察池

- **SkySwitch 白标语音 Agent（可信二手）**：ChannelPro 9 月 2 日转载的公告事件日期为 9 月 1 日，称 SkyConnect 已可使用语音Agent处理来电、预约、订单和流程，CoreConnect计划后续接入。无精确事件时间，仅作为观察窗口内候选，不算今日确认发布。[ChannelPro](https://www.channelpronetwork.com/2026/09/02/skyswitch-launches-native-ai-agent-bringing-enterprise-ai-communications-to-every-white-label-partner/)

## 未证实传闻

未保留只有泄漏或匿名声称的产品发布；上述原文受限候选是可定位公告或报道，不与匿名传闻混同。

## 邻近信号观察池

- **Beeline MCP（官方，上海 9 月 2 日 20:59:40）**：为 Agent 的工具和数据访问继承身份、角色权限与人工审批。它是受治理的连接点，不证明 Beeline 托管外部 Agent 的完整执行循环。[Beeline 官方公告](https://www.beeline.com/news/beeline-pioneers-agentic-ai-for-the-extended-workforce-with-beeline-mcp)
- **Coforge AI Launchpad（官方，9 月 2 日，时刻未确认）**：提供企业自有AI栈、模型路由及 Managed Run 等服务；原文缺少具体托管 Agent 任务的证据，先按 MaaS/PaaS 与治理服务观察。[Coforge 官方公告](https://news.coforge.com/newsroom/press-release/coforge-introduces-ai-launchpad-the-open-weight-ai-ecosystem-for-the-enterprise)
- **Zoho Catalyst（公告分发索引，原文受阻）**：9 月 2 日材料提到 Agent Skills、非交互 CLI、MCP，以及 Claude Code/Codex 集成。这是 Agent 可操作的 PaaS，不等于云端 Agent 托管；Claude/OpenAI相关背景详见 Claude 专题页、详见 OpenAI 专题页。[公告分发入口](https://ebs.publicnow.com/view/1E0A441FE4FB50BE8FCC1CEB3A8D32E53F81E8F7)
- **Microsoft Fabric GCC High（官方，9 月 2 日）**：当日公测、计划 10 月 1 日 GA，为 Copilot Studio/Foundry等提供受治理数据基础；不等于这些 Agent 产品同步推出新的托管能力。[微软官方公告](https://www.microsoft.com/en-us/microsoft-cloud/blog/us-government/2026/09/02/microsoft-fabric-in-gcc-high-building-the-data-foundation-for-ai/)
- **豆包工作（可信二手，报道时间上海 9 月 2 日 21:32:10）**：证券之星转载紫金财经称新增多Agent并行和Mac本地GUI操作。原页提取失败，仅核到索引；并行执行与本地控制本身不能证明AaaS，故不列正式托管发布。[报道入口](https://wap.stockstar.com/detail/IG2026090200042496)

## 趋势判断

本轮证据支持“执行边界与审批控制变得更明确”这一有限判断：Coder拆分推理与工具执行，Celigo把变更暂存给人审批，Mate把多租户运维组织成持续服务。候选还显示制造、集成、通信和SOC等场景在探索Agent化；没有足够独立数据推导市场份额、收入增速或性能领先。

## 来源链接

- [Introducing Agent Relay: Cloud-Hosted Agents, Self-Hosted Execution](https://coder.com/blog/introducing-agent-relay-cloud-hosted-agents-self-hosted-execution)
- [Self-hosted machines](https://cursor.com/changelog/self-hosted-machines)
- [Agents all the way down: How building Celigo Ora rebuilt everything else](https://www.celigo.com/blog/celigo-ora-ga-launch/)
- [Automat-it Launches the Industry’s First Autonomous AI Support Engineer for AWS Production](https://www.automat-it.com/blog/automat-it-launches-the-industrys-first-autonomous-ai-support-engineer-for-aws-production/)
- [Syspro Launches Torque: The Industrial AI Platform That Transforms Manufacturing Decisions into Auditable, Automatic Action](https://www.syspro.com/press_release/syspro-launches-torque-the-industrial-ai-platform-that-transforms-manufacturing-decisions-into-auditable-automatic-action/)
- [Bud Ecosystem Launches Bud Agent – An AI that creates AI.](https://budecosystem.com/news/bud-ecosystem-launches-bud-agent-to-bring-recursive-intelligence-to-enterprise-ai/)
- [CrowdStrike Unveils the Next Evolution of the Agentic SOC](https://crowdstrike.gcs-web.com/news-releases/news-release-details/crowdstrike-unveils-next-evolution-agentic-soc)
- [腾讯WorkBuddy开放平台上线](https://www.stdaily.com/web/gdxw/2026-09/02/content_574097.html)
- [SkySwitch launches native AI agent, bringing enterprise AI communications to every white-label partner](https://www.channelpronetwork.com/2026/09/02/skyswitch-launches-native-ai-agent-bringing-enterprise-ai-communications-to-every-white-label-partner/)
- [Beeline Pioneers Agentic AI for the Extended Workforce with Beeline MCP](https://www.beeline.com/news/beeline-pioneers-agentic-ai-for-the-extended-workforce-with-beeline-mcp)
- [Coforge Introduces AI Launchpad, the Open-Weight AI Ecosystem for the Enterprise](https://news.coforge.com/newsroom/press-release/coforge-introduces-ai-launchpad-the-open-weight-ai-ecosystem-for-the-enterprise)
- [Catalyst by Zoho Solves The Shortfalls of Moving from Coding to Production With an Agent-Ready, Full-Stack Cloud and Built-In Governance](https://ebs.publicnow.com/view/1E0A441FE4FB50BE8FCC1CEB3A8D32E53F81E8F7)
- [Microsoft Fabric in GCC High: Building the data foundation for AI](https://www.microsoft.com/en-us/microsoft-cloud/blog/us-government/2026/09/02/microsoft-fabric-in-gcc-high-building-the-data-foundation-for-ai/)
- [豆包工作双功能升级：多Agents并行上线，Mac端首度支持操作电脑](https://wap.stockstar.com/detail/IG2026090200042496)

## 采集状态

- 已检查：Devin与xAI/Grok专项；全部规定海外厂商官方入口/定向搜索；Cline、Pi、DSH及OpenCode/Aider/Continue/Roo Code边界；字节重点及主要中国厂商。检查方式和限制已写入scan.checkedSources。
- 失败与限制：部分动态中文产品页无正文；Continue、腾讯云/WorkBuddy入口提取失败；CrowdStrike原文Access Denied；Zoho分发页及证券之星原文失败；若干官方页仅有日历日期。首轮失败的Coder、Celigo、Mate、Syspro、Bud已通过备用入口恢复。
- 初始候选：14条；最终保留：14条来源（3条精确窗口官方AaaS事件、4条日期/原文受限候选、2条可信二手生态/语音观察、5条邻近信号）。Cursor与Coder为相互关联的架构事件，不把两条来源宣传成两个独立产品发布。
- 二次补搜：是。首轮没有新确认事件后，扩大中英文关键词，切换官方changelog、GitHub、科技日报和公告分发入口；随后核实3条窗口事件。
- 图片：采用Coder已确认事件官方OpenGraph图，来源页元数据可验证，HTTP 200、image/webp；观察池和邻近信号不作首页配图。

今日扫描完成，共 14 条来源动态，重点：Coder混合执行架构、Celigo Ora GA与Mate托管运维；Cursor、WorkBuddy等分层观察；Devin及Grok未确认窗口内新增。

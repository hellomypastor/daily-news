---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-03T00:00:00+08:00"
updatedAt: "2026-09-03T10:05:00+08:00"
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
  - "客户案例"
  - "邻近信号"
  - "日期未确认"
  - "腾讯"
  - "原文访问受阻"
  - "字节跳动"
  - "AaaS"
  - "Agent"
  - "Agent Lifecycle"
  - "Agent Platform"
  - "ChatGPT Work"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloud Operations"
  - "Commerce"
  - "Cowork"
  - "Cursor"
  - "Customer Service"
  - "Cyber Defense"
  - "Edge Cloud"
  - "Enterprise"
  - "Enterprise Automation"
  - "GA"
  - "Google"
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

本轮发现窗口：**2026-09-02 10:05 至 2026-09-03 10:05（Asia/Shanghai）**；24–72 小时观察窗口为 **2026-08-31 10:05 至 2026-09-02 10:05**。当天累积保留原有 14 条来源，并增加 7 条：Fairwind 云端防御、ChatGPT Work 客户采用、Claude Code 远程生命周期修复，以及 AWS CX GA、commerce 参考蓝图、Formula E 端云案例和 Cowork 企业控制观察。部分此前事件已滑出新窗口，仍按累计规则保留；日期未确认、案例自述和托管边界不明的条目不冒充同等确认的新服务发布。

## 重点动态

- **Claude Code 远程执行可靠性与企业控制更新（9 月 3 日 06:33）**：v2.1.259 修复远程 Stop 后后台 Agent 仍运行、旧工作流退出前重复恢复，以及定时/远程会话批准连接器后不继续的问题；组织可统一下发 HTTP/SSE MCP，配置解析失败时拒绝启动。这里只计远程生命周期相关变化，不把整个本地 CLI 当成 AaaS。详见 Claude 专题页。[官方发布](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)
- **Fairwind 将网络防御 Agent 接入受信组织的云环境（9 月 2 日 23:40）**：Google 将 Gemini 3.8 Flash Cyber 与 CodeMender harness 结合，用于漏洞发现、验证和补丁生成，运行于组织安全云环境；Cyber 访问优先向受信伙伴提供。原文另指出其他 Google Cloud 客户可使用 CodeMender 与公开模型。这里关注云端防御工作流与准入，不把单纯模型 API 视为 AaaS，也不声称全量无条件 GA。详见行业专题页。[官方说明](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/)
- **ChatGPT Work 的小团队采用案例（9 月 2 日 20:00）**：ATV Big Air Tour 使用每日定时任务检查活动信息和网站，再生成纠错邮件草稿；商品照片可用于库存表与补货建议，最终订单由负责人审核后发送。案例称库存补货从数天缩短为数小时，属于客户自述，不是独立评测。定时服务是 AaaS 相关证据，文章本身是采用案例而非新产品发布。详见 OpenAI 专题页。[官方案例](https://openai.com/index/atv-big-air-tour)

### 当天此前保留

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

海外正式新增聚焦于混合远程执行、集成自动化和托管运维，分别见上述 Coder、Celigo、Mate。Google Vertex/Jules、Microsoft Agent服务、Replit、Lindy、CrewAI、LangGraph、GitHub coding agent、Amazon Q、Cloudflare、Factory、Amp 等已检查；本轮新增 Fairwind 与 AWS CX 设计部署能力，并补充 OpenAI 采用案例与 Anthropic 远程修复；其他入口未核实新事件，不能以“无新增”推断厂商没有在研发。

Cline 的新 SDK 迁移、Pi、DSH 与其 SSH/Cloudflare 社区项目，以及 OpenCode、Aider、Continue、Roo Code 的本地或自部署入口，都按“谁负责托管执行生命周期”划界；本地 harness 变化详见开源专题页。

## 中国市场（字节跳动重点）

- **字节跳动：豆包工作候选保留，不冒充云端发布。** 二手报道涉及多 Agent 并行和 Mac 本地 GUI 操作；未取得供应商托管运行时、异步服务或远程环境的新证据，因此列于邻近信号。Coze、火山引擎、Trae、Seed入口有动态渲染限制，不能声明已完整核验全部更新。
- **腾讯 WorkBuddy：可信二手观察。** 科技日报记者 9 月 2 日报道开放平台上线，提供 Agent Harness 接口和 Skill、Expert、Connector 能力，支持任务、记忆、产物跨端同步，并介绍伙伴应用。报道足以保留生态候选，但官方开放平台正文未提取成功，托管边界、配额与计价待核，不列入 3 条官方确认事件。[科技日报](https://www.stdaily.com/web/gdxw/2026-09/02/content_574097.html)
- 阿里百炼/Qoder/通义/夸克、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax、DeepSeek等均已定向检索；模型兼容 API 或本地工具适配不自动进入 AaaS。

## AaaS 与 MaaS / PaaS 边界

AaaS 需有托管任务、会话、调度、环境或生命周期证据。模型 API 是 MaaS；通用云平台、数据平台、MCP接入和本地GUI控制是邻近能力。企业自托管工具执行不必排除 AaaS，但必须像 Coder/Cursor 一样明确仍由供应商运行 Agent 循环；纯自部署开源 harness 不属于同一商业服务。

## 日期未确认

- **AWS Agentic CX designer GA（官方 9 月 2 日，时刻未确认）**：Amazon Connect Customer 宣布可在同一无代码画布设计、测试并部署语音与数字自助体验；支持业务集成、护栏和确定性审批/路由流程。正式可用地区包含北美、东京、首尔、新加坡、悉尼、法兰克福和伦敦。厂商声称上线周期缩短，没有独立实施时长验证。[AWS 公告](https://aws.amazon.com/about-aws/whats-new/2026/09/agentic-cx-designer/)
- **Commerce Agents（官方索引 9 月 2 日，原文受限）**：购物和商家参考蓝图可选 Managed Agents beta，也可选自行构建的 Messages API 或 Agent SDK；只有托管路径符合 AaaS，开放参考代码不等于供应商维护的端到端商用服务。博客原页抓取失败，保留官方索引证据。详见 Claude 专题页。[官方入口](https://claude.com/blog/claude-for-commerce-agents)
- **Cowork 企业控制（官方文档，更新日未确认）**：云端会话与 Desktop 内置浏览器使用独立开关。文档说明内置浏览器在 Enterprise 初始关闭，计划9月10日默认开启，组织已经关闭时除外；不能把这项安排解释成所有企业的云端会话自动开启。详见 Claude 专题页。[管理员文档](https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans)
- **Formula E 端云 A2A 采用（9 月 2 日案例文章）**：回顾7月Goodwood试验：赛车内实时工作在设备端执行，赛后才通过A2A向云端Agent交接媒体和工程分析。这是混合Agent采用案例，不是今日赛事或新云产品GA；精确文章时间未核实。详见行业专题页。[Google Cloud 案例](https://cloud.google.com/transform/formula-e-goodwood-record-setting-edge-computing-gemma-ai)

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

当天累积证据支持“执行边界与审批控制变得更明确”这一有限判断：Coder拆分推理与工具执行，Celigo把变更暂存给人审批，Mate把多租户运维组织成持续服务。候选还显示制造、集成、通信和SOC等场景在探索Agent化；新增 Fairwind、ChatGPT Work 与 Formula E 案例分别展示防御工作流、定时运营和赛后端云交接；没有足够独立数据推导市场份额、收入增速或性能领先。

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
- [Proactive cyber defense for governments and enterprises](https://blog.google/innovation-and-ai/technology/safety-security/fairwind-program/)
- [ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT](https://openai.com/index/atv-big-air-tour)
- [Claude Code v2.1.259](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)
- [Building commerce agents with Claude](https://claude.com/blog/claude-for-commerce-agents)
- [Amazon Connect Customer announces general availability of agentic CX designer](https://aws.amazon.com/about-aws/whats-new/2026/09/agentic-cx-designer/)
- [Racers, start your agents: Formula E brings realtime AI to the edge](https://cloud.google.com/transform/formula-e-goodwood-record-setting-edge-computing-gemma-ai)
- [Use Claude Cowork on Team and Enterprise plans](https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans)

## 采集状态

- 已检查：本轮 Cognition Devin：正常打开2026 release notes并查billing、自助/Enterprise计价、企业环境部署、异步sessions、并发、计划任务、集成；最新公告仍为8月28日，无新增，不重复旧源；本轮 xAI/Grok：打开News与Tools Overview，专项查询Grok Bot、Automations、Workflows、/goal、云端/远程执行和企业/API；仅查到窗口外旧公告，无新AaaS事件；本轮海外：Anthropic Claude Code/SDK/Managed Agents/Cowork与Commerce；OpenAI ChatGPT Work/Codex；Google Vertex/Gemini Enterprise/Jules/Fairwind；AWS Amazon Q/Connect；Microsoft Copilot Studio/Azure；GitHub coding agent定向搜索；本轮 Replit、LangChain/LangGraph、Cloudflare、Amp 官方博客已打开；Lindy、CrewAI、Factory 官方域名日期搜索未核实新增；本轮 Cline、Pi/pi-mono、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code cloud/hosted/remote关键词与官方DSH/Cloudflare文档交叉检查；没有新增供应商托管生命周期证据，本地harness不当AaaS；本轮字节重点：Coze/火山/豆包/Trae/Seed中英文日期关键词；阿里百炼/Qoder/通义/夸克、腾讯、百度/Comate、智谱、Kimi、MiniMax、DeepSeek托管智能体搜索；新候选多数较旧或仅模型API，不跨日重复背景；当日已有14条来源与Coder官方配图完整保留，未因窗口滑动删除；本轮图片仍使用已核验的Coder发布图。
- 失败与限制：web首次打开Coder/Celigo/Mate/Syspro/Bud出现Internal Error，改用搜索结果入口与curl后恢复；Node直连fetch失败，curl可用。；CrowdStrike两处IR/新闻原文入口返回Internal Error或Access Denied；仅官方索引可读，候选降级至观察池。；Coze、Seed、Trae博客、百炼控制台、Comate动态页正文为空或过少；腾讯云agent入口、WorkBuddy开放平台、Continue changelog提取失败。；Zoho Publicnow正文与证券之星豆包报道原页提取失败，保留索引内容并显式标注；不引用其未经独立核验的性能或行业首创结论。；Cursor、Syspro、Bud等仅核实日历日期，未得到可用精确时间/时区；不把抓取时刻视为发布时间。；本轮Commerce Agents原页web抓取失败，官方搜索索引可读，保留日期未确认观察；本轮中文厂商检索主要返回较旧内容或动态产品页，不能据此声称完整核验所有更新；未将社区转载等同官方公告；AWS CX及Formula E页面只取得日历日期，精确时分未确认；Cowork管理员文档无可靠更新时间。
- 本轮候选：21（含当前新增、已有事件与窗口外资料）；新增保留：7；当天累积来源：21，原有14条全部保留。
- 二次补搜：是（当天此前已完成；本轮又扩展中英文日期查询、官方公告与云端案例入口）。
- 配图：保留此前验证的Coder官方OG图；新增日期未确认材料不配置首页配图。

今日扫描完成，共 21 条动态，重点：Fairwind云端防御、ChatGPT Work采用、Claude远程任务修复与AWS CX GA；保留Coder/Celigo/Mate等当天资料，Devin及Grok无新增。

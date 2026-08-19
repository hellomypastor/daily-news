---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-19T00:00:00+08:00"
updatedAt: "2026-08-19T13:24:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Introducing ChatGPT for Teens: Built for learning, backed by protections"
featuredUrl: "https://openai.com/index/chatgpt-for-teens"
featuredSummary: "官方确认 13–17 岁青少年体验的学习功能、健康使用设计、家长控制与更强默认保护。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-18 19:00 +08:00"
featuredTags: ["ChatGPT","Education","Safety"]
tags:
  - "观察池"
  - "较旧背景"
  - "开发提交"
  - "日期未确认"
  - "社区口碑"
  - "未证实传闻"
  - "主分支"
  - "Access"
  - "Account"
  - "Agent"
  - "Agents"
  - "Agents SDK"
  - "API"
  - "Approvals"
  - "Assistants API"
  - "Astra"
  - "Async"
  - "Auth"
  - "Auto-review"
  - "Bedrock"
  - "Billing"
  - "Bug Fix"
  - "Business"
  - "Cache"
  - "Changelog"
  - "ChatGPT"
  - "ChatGPT Business"
  - "ChatGPT Work"
  - "CI"
  - "CLI"
  - "Cloud"
  - "Cloudflare"
  - "Codex"
  - "Community"
  - "Cursor"
  - "Customer Story"
  - "Cyber"
  - "Cybersecurity"
  - "Data Residency"
  - "Deprecation"
  - "Edu"
  - "Education"
  - "Enterprise"
  - "Exec"
  - "Exec Server"
  - "Experimental"
  - "Go"
  - "Gov"
  - "GPT-6"
  - "Guardian"
  - "Hate"
  - "Hooks"
  - "IDE"
  - "Infrastructure"
  - "Java"
  - "Linux"
  - "Logging"
  - "Love"
  - "Managed Config"
  - "Marketplace"
  - "MCP"
  - "Mental Health"
  - "Metrics"
  - "Migration"
  - "Model Spec"
  - "Models"
  - "National Security"
  - "Networking"
  - "Node REPL"
  - "Node.js"
  - "npm"
  - "OpenAI"
  - "Oversight"
  - "Partnership"
  - "Performance"
  - "Permissions"
  - "Plans"
  - "Plugins"
  - "PowerShell"
  - "Python"
  - "Realtime"
  - "Realtime API"
  - "Release"
  - "Release Notes"
  - "Reliability"
  - "Research"
  - "Responses API"
  - "Ruby"
  - "Safety"
  - "Sandbox"
  - "SDK"
  - "Security"
  - "Sessions"
  - "Shell"
  - "Shopify"
  - "Sites"
  - "Skills"
  - "Sora"
  - "Streaming"
  - "Structured Outputs"
  - "Teens"
  - "Temporary Chat"
  - "Threads"
  - "TUI"
  - "Usage"
  - "Vercel"
  - "Video"
  - "Voice"
  - "VS Code"
  - "WebRTC"
  - "WebSocket"
  - "Windows"
  - "Workspace"
---

## 今日概览

扫描窗口：2026-08-18 13:12:08 至 2026-08-19 13:12:08（Asia/Shanghai）；同日此前已收录来源继续累积保留。窗口内最重要的新证据是 OpenAI 在 [Astra 网络安全能力说明](https://openai.com/index/pacing-model-development-cyber-capabilities)中确认 Astra 是即将推出的模型、初步证据显示它可能达到 Preparedness Framework 的 Critical cybersecurity capability 阈值，并说明部分前沿 RL 训练暂停；这使“Astra”名称本身从传闻升级为官方候选模型，但“GPT-6”别名和 8 月 23 日发布日期仍未获证实。OpenAI 还发布了[民主国家安全监督倡议](https://openai.com/index/strengthening-democratic-oversight-in-national-security)，并以 [Asana 案例](https://openai.com/index/asana)披露 Codex 迁移旧测试系统的项目数据。开发侧在 01:12 后继续合入 Codex 权限、安全、Realtime 与线程迁移，以及 Node / Go SDK 安全和 Responses API 相关提交；这些均是主分支动态，不等同于正式版本交付。

此前 04:11–07:17 增量还包括 [Codex 0.148.0 稳定版](https://github.com/openai/codex/releases/tag/rust-v0.148.0)：官方 release notes 列出 TUI 对话导出、`codex exec fork`、会话归档/恢复、线程用量估算、内置 Amazon Bedrock Runtime provider、异步 hooks 与 MCP tool hooks，以及多项恢复与沙箱 fail-closed 修复；[0.148.0-alpha.23](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.23)仅列版本号。Python SDK [v3.3.0](https://github.com/openai/openai-python/releases/tag/v3.3.0)正式交付 named data-residency endpoints，并要求已修补的可选网络依赖。OpenAI RSS 还补充发现 [NVIDIA 的 ChatGPT Work 案例](https://openai.com/index/nvidia/chatgpt-work)，Help Center 则确认 [ChatGPT Business 新增付费席位从 8 月 19 日起改为加入时立即按剩余周期比例收费](https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan)。[Sites 部署错误](https://status.openai.com/incidents/01M0B4WSV41BCFZ9VDWKSMQVSP)于 03:17–03:37 发生并已解决。

本轮 07:17–10:12 增量包括只列版本号的 [Codex 0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)，以及 Codex 主分支的环境 MCP policy、hook 调用边界、workspace 认证、异步用户消息与 Edu 计划识别；Node SDK 也新增 SSE、Vercel 生态示例和 Realtime / Azure credential 安全修复。它们除 alpha 包外均是主分支动态，不应写成正式交付。可信二手侧，[NPR](https://www.npr.org/2026/08/18/nx-s1-5929575/ai-suicide-risks-mental-health)发布 ChatGPT 心理健康个案调查；[WSJ](https://www.wsj.com/tech/ai/openais-second-quarter-sales-show-tepid-growth-compared-with-anthropic-5cb42998)的二季度销售报道受付费墙限制，故仅保留标题信号。

本轮 10:12–13:12 没有发现新的正式 release、OpenAI News 或状态页事故，但官方 GitHub 新增 6 个主分支提交：Codex 为 Bedrock 增加过期 AWS 凭据刷新、兼容旧版 Bubblewrap 的 FD mounts、按最近会话解析同名 queue，并把 TUI 审批严格绑定到来源线程；另移除 repo-checks 的 npm staging，Ruby SDK 则移除运行时 `base64` 依赖。它们均尚未进入正式 release。社区侧出现 Codex Windows 无法访问本机 Chrome、VS Code 内所有模型提示容量不足，以及两个 Trusted Access for Cyber 消失的独立自报；这些未获官方状态页确认，只进入观察池。

## Tier 1

| 产品 | 状态 |
|---|---|
| Codex CLI | [官方 CLI 文档](https://learn.chatgpt.com/docs/codex/cli)确认现有入口；窗口内在 alpha.21 / alpha.22 / alpha.23 与 [0.148.0 稳定版](https://github.com/openai/codex/releases/tag/rust-v0.148.0)之后，又发布只列版本号的 [0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)；截至 13:12 的 Bedrock、Bubblewrap、queue 与审批线程修复仍只在主分支，不等同于已交付 |
| VS Code / JetBrains 集成 | [Codex IDE 文档](https://learn.chatgpt.com/docs/codex/ide)可确认 IDE extension 现有能力；未见窗口内单独发布，JetBrains 也无可核实新增 |
| Codex cloud / remote tasks 与 PR agents | [Codex cloud 文档](https://learn.chatgpt.com/docs/cloud)确认现有云端任务入口；无窗口内正式发布，社区仍有任务消失的单用户报告，见观察池 |
| ChatGPT agentic mode | [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)最新条目仍为 8 月 14 日，本窗口无新 agentic mode 公告 |
| 当前官方 agent-building 产品 | [Agents SDK 文档](https://developers.openai.com/api/docs/guides/agents)确认 Python / TypeScript 路线；Codex 0.148.0 正式加入异步 command hooks 与 MCP tool hooks，主分支随后新增异步用户消息 tool，并继续收紧 hook MCP 调用与环境 MCP policy；均需等待后续 release 才能视为交付 |
| Responses API | [迁移文档](https://developers.openai.com/api/docs/guides/migrate-to-responses)仍是官方主路径；Python v3.3.0 正式交付 named data-residency endpoints，Node / Go 主分支继续修补 stream 安全与 accumulator，尚未形成新 release |
| Agents SDK Python / TypeScript | 无窗口内正式 release；Python 主分支新增 Windows integration bootstrap crash 修复，Python / TypeScript 其余主分支提交继续按尚非发布处理 |
| Assistants API 弃用 / 迁移 | [Assistants deep dive](https://platform.openai.com/docs/assistants/deep-dive/run-lifecycle%23.webm)仍标记 Deprecated，并写明 2026-08-26 停止服务；本窗口未见时间表变化 |
| Realtime API | [Realtime 官方文档](https://developers.openai.com/api/docs/guides/realtime)仍为当前入口；Node 主分支进一步校验 `wss:` origin、Worker 环境 credential 与 Azure WebSocket 凭据传递，Ruby 仍有转录与区域端点改动；均尚未对应新 release |
| 当前官方 GPT、reasoning、Codex 模型家族 | [模型目录](https://developers.openai.com/api/docs/models)当前列出 GPT-5.6 Sol / Terra / Luna 等已核实名称；[官方说明](https://openai.com/index/pacing-model-development-cyber-capabilities)首次明确把 Astra 称为即将推出的模型，并称其可能达到 Critical cybersecurity capability 阈值，但未公布正式产品名、发布日期或可用性；Model Spec 更新也不是权重发布 |

## Tier 2

| 范围 | 状态 |
|---|---|
| 浏览器 / Operator、Desktop apps | [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)未列 8 月 18 日新品；社区 Windows 卡顿为单用户信号 |
| GPTs / GPT Store、Canvas、GPT Image / DALL·E | 官方 Release Notes 未见窗口内新增；“Image 2.5”与所谓 stealth intelligence update 仅为社区自述，进入未证实观察 |
| Sora / video | 无新产品发布；[官方弃用页](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)仍显示 Sora 2 视频模型与 Videos API 是既有弃用事项，不误报为今日新闻 |
| Voice | 无 ChatGPT Voice 新功能；Ruby 主分支新增 Realtime transcription over WebSockets，但尚未发布 |
| Connectors / MCP | 无 ChatGPT 连接器正式发布；Codex 主分支继续修补 MCP resource provenance，并新增环境级 MCP policy 与 hook 调用复用当前连接，属于尚未发布的开发动态 |
| ChatGPT Sites | [官方状态页](https://status.openai.com/incidents/01M0B4WSV41BCFZ9VDWKSMQVSP)记录 03:17–03:37 出现部署错误并已解决；这是短时可靠性事件，不代表持续故障 |

## Tier 3

- **Business billing（已验证）**：[官方计费说明](https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan)确认从 8 月 19 日起，新增付费席位改为加入时立即按当前账期剩余时间比例收费；总价不变、无需用户操作。
- **Enterprise / NVIDIA（已验证案例）**：[NVIDIA ChatGPT Work 案例](https://openai.com/index/nvidia/chatgpt-work)称两个内部工作流分别在 GTC 筹备周期每周节省约 16 小时，以及把 25–40 条外部更新提炼成 5–8 条可行动信号；另称原估 2–3 周的原型在 3–5 天完成。均为厂商发布的单一客户案例，不应外推为普遍效率。
- **Edu / Teen / Safety（已验证）**：[ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens) 官方原文日期为 8 月 18 日。系统估计用户未满 18 岁或自报 13–17 岁时会自动进入该体验；Study Mode、responsible homework reminders、quizzes、Learning Visualizations、Study Hours 与更强默认保护均由原文列出。
- **Education partnership（已验证）**：[OpenAI × CodeAI](https://openai.com/index/partnering-with-codeai) 将建立顾问委员会，并推进 Hour of AI、Builders Challenge、课程支持与 Career Journeys。
- **Model Spec / Safety（已验证）**：[Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)说明本次更新澄清青少年关系互动、错误或无依据前提与能力边界；[2026-08-18 版本页](https://model-spec.openai.com/2026-08-18.html)是原始证据。
- **Enterprise / Business（已验证案例）**：[Asana Codex 案例](https://openai.com/index/asana)称其用最多四个并行 coding agents，在约两周内移除 Enzyme；OpenAI 页面列出约 1.2 万美元模型与基础设施成本，并与原约 600 万美元人员方案估算对比。这是厂商发布的单一客户案例，不应外推为普遍 ROI。
- **Safety / Science（已验证）**：[Astra 网络安全能力说明](https://openai.com/index/pacing-model-development-cyber-capabilities)称初步证据显示即将推出的 Astra 可能达到 Critical cybersecurity capability 阈值；OpenAI 为强化隔离、监控与对齐，曾暂停两周最新部署模型的 RL 训练，最大前沿 RL run 仍暂停。该文没有确认“Astra=GPT-6”或发布日期。
- **Enterprise / 数据驻留**：官方 SDK 主分支继续加入 named data-residency endpoint 支持，但尚未 release，不据此声称客户现已可用。
- **Edu 计划，主分支候选**：Codex 主分支开始识别 `edu_plus` 与 `edu_pro`，并映射教育用量规则、cloud configuration eligibility 与 TUI 名称；这只是[代码提交](https://github.com/openai/codex/commit/657bd889ae28edcbf5395c103b479bf8b328704e)，不能据此声称计划已对外发布。
- **心理健康安全，可信二手来源**：[NPR 长文](https://www.npr.org/2026/08/18/nx-s1-5929575/ai-suicide-risks-mental-health)基于家属提供的长期聊天记录，讨论一名 29 岁女性把 ChatGPT 设为“治疗师”后暴露的风险，并引述 OpenAI 称 ChatGPT 不能替代专业照护、正与专家改进长期风险信号识别。报道属于个案与二手调查，不能单独证明平台级因果。
- **Gov / National Security（已验证）**：[民主国家安全监督倡议](https://openai.com/index/strengthening-democratic-oversight-in-national-security)计划未来一年向民主政府监督机构提供 500 万美元培训、技术支持与 OpenAI credits，并试点可审查 AI 辅助决策记录的工具；官方强调判断权仍归授权机构。
- **Cyber access，社区观察**：两个独立开发者社区帖子称此前获批的 Trusted Access for Cyber 在无通知情况下消失，并重新显示验证入口；这是[较早帖子](https://community.openai.com/t/trusted-access-for-cyber-disappeared-from-my-account/1391143)与[本轮新增帖子](https://community.openai.com/t/trusted-access-for-cyber-suddenly-disappeared-after-more-than-a-month/1391180)的账户级自报，官方尚未确认范围或原因。
- **Gov / Infrastructure，日期未确认**：[PORTS-Pike 官方公告](https://openai.com/index/openai-joins-ports-pike-project)只标 2026-08-17、没有精确时刻；相关约 8 GW IT 容量、就业、社区基金与 Codex credits 规划保留在日期未确认区，不算作已确认落入本窗口。

## 官方发布（新到旧）

- **Codex 0.149.0-alpha.1**（8 月 19 日 08:54）：发布页只列版本号，不推断具体功能。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)
- **Codex 0.148.0 稳定版**（8 月 19 日 06:26）：新增 TUI Markdown 导出、`codex exec fork`、归档/恢复、线程用量估算、内置 Bedrock provider、异步 command hooks 与 MCP tool hooks，并汇总多项恢复和沙箱 fail-closed 修复。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.148.0)
- **Codex 0.148.0-alpha.23**（05:23）：发布页只列版本号，不推断功能。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.23)
- **OpenAI Python v3.3.0**（05:17）：正式加入 named data-residency endpoints，并要求已修补的可选网络依赖。[发布页](https://github.com/openai/openai-python/releases/tag/v3.3.0)
- **ChatGPT Business 新增席位收费时点**（8 月 19 日生效，Help Center 精确更新时间未列）：新增付费席位改为加入时立即按剩余账期比例收费，总价不变。[说明](https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan)
- **Sites 部署故障**（03:17–03:37）：官方状态页确认部署错误已缓解并解决。[状态页](https://status.openai.com/incidents/01M0B4WSV41BCFZ9VDWKSMQVSP)
- **NVIDIA ChatGPT Work 案例**（8 月 18 日 08:00）：官方客户案例披露 GTC 筹备、外部情报提炼和原型开发的单一客户数据。[原文](https://openai.com/index/nvidia/chatgpt-work)
- **民主国家安全监督倡议**（8 月 19 日 03:00）：OpenAI 计划提供 500 万美元培训、技术支持和 credits，并与授权监督机构试点可审查 AI 辅助决策记录的工具。[原文](https://openai.com/index/strengthening-democratic-oversight-in-national-security)
- **Astra 网络安全能力与训练节奏说明**（8 月 18 日 19:00）：官方确认 Astra 是即将推出的模型，并披露前沿训练暂停、研究环境隔离和监控扩展；未确认 GPT-6 别名或发布日期。[原文](https://openai.com/index/pacing-model-development-cyber-capabilities)
- **Asana Codex 客户案例**（15:00）：官方案例称 Asana 约两周完成 Enzyme 迁移，列出约 1.2 万美元模型与基础设施成本；这是单一案例。[原文](https://openai.com/index/asana)
- **Codex 0.148.0-alpha.22**（8 月 18 日 21:30）：只能核实版本与发布时间，发布页无功能清单。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.22)
- **ChatGPT for Teens**（19:00）：学习支持、健康使用与默认青少年保护正式发布。[原文](https://openai.com/index/chatgpt-for-teens)
- **OpenAI × CodeAI**（19:00）：公布面向学生、教师与 AI 素养的合作计划。[原文](https://openai.com/index/partnering-with-codeai)
- **Model Spec 更新**（日期确认、精确时刻未列）：更新青少年互动、错误前提与能力边界规范。[说明](https://help.openai.com/en/articles/9624314-model-release-notes)
- **Codex 0.148.0-alpha.21**（03:27）：只能核实版本与发布时间。[发布页](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
- **OpenAI Go v3.52.0**（03:19）：加入 Bedrock Runtime endpoint 支持。[发布页](https://github.com/openai/openai-go/releases/tag/v3.52.0)
- **OpenAI Node.js v7.5.0**（03:13）：加入 Bedrock Runtime、ServiceTier、WebSocket stream IDs、structured MCP 等类型，并含 Responses、Realtime、streaming 与安全修复；release notes 中出现 Daybreak / `gpt-5.6-cyber` 标识，但不据此推断额外公开可用性。[发布页](https://github.com/openai/openai-node/releases/tag/v7.5.0)
- **OpenAI Python v3.2.0**（03:13）：加入 Bedrock Runtime endpoint、shell call streaming events 与新 service / image 类型。[发布页](https://github.com/openai/openai-python/releases/tag/v3.2.0)
- **OpenAI Ruby v0.80.0**（03:12）：加入 Bedrock Runtime，以及 Ultrafast、structured MCP 与 WebSocket 错误类型。[发布页](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)
- **OpenAI Java v4.52.0**（03:10）：加入一等 Bedrock Runtime 支持、shell call streaming events 与 image partial fields。[发布页](https://github.com/openai/openai-java/releases/tag/v4.52.0)
- [API changelog](https://developers.openai.com/api/docs/changelog)在本窗口没有晚于 8 月 13 日的新条目。

## 官方开发动态（主分支，尚非发布；新到旧）

- **Codex Bedrock 凭据刷新**（8 月 19 日 12:46）：为使用 AWS SDK credential chain 的 Bedrock provider 增加 `aws.auth_refresh`，在可刷新的认证失败后重载凭据、重新签名并重试，并共享并发刷新状态；尚非 release。[提交](https://github.com/openai/codex/commit/3929c99a97d1aa0fb8000903a4b57b24fbabe742)
- **Codex 旧版 Bubblewrap / CI staging**（12:06–11:44）：旧版 system Bubblewrap 缺少 `--ro-bind-fd` 时改用受验证的 `/proc/self/fd` 只读挂载，并拒绝畸形、重复、错配或 symlink 替换；另从 repo-checks 移除固定发布流程的 npm package staging。两者均尚非 release。[Bubblewrap](https://github.com/openai/codex/commit/6cc2ba8a9567e3083531283f923127b86a6c5908)、[npm staging](https://github.com/openai/codex/commit/956f590ad549e75913894614ce0cbec4d5fd677a)
- **Ruby SDK 运行时依赖**（11:03）：以 Ruby `pack` / `unpack` 原语替代 Base64 helper，并保留 webhook、Realtime audio 与 proxy auth 测试覆盖；尚非 release。[提交](https://github.com/openai/openai-ruby/commit/d4415dd4b2b1ab8f252e8b42bf732c17f0435012)
- **Codex queue / TUI 审批线程边界**（10:45–10:28）：同名 queue 请求选择最近会话并纳入非交互、自定义来源会话；TUI 则以 thread ID 与 approval ID 联合绑定并路由审批，防止并发线程 ID 冲突误处理。两者均尚非 release。[queue](https://github.com/openai/codex/commit/14a8ac89af0a3c9033c1fa4d747ec5d6333e9890)、[审批线程](https://github.com/openai/codex/commit/8843960ba06b1b2570e689f3fff354c324ab2417)
- **Codex 环境 MCP policy / hook 调用**（8 月 19 日 09:26–09:15）：环境可限制配置与插件提供的 MCP servers，并把 hook 触发的 MCP 调用路由到当前连接、避免隐式等待或重连；均尚非 release。[环境 policy](https://github.com/openai/codex/commit/fde2156057c38c0227ce94c8514d04c7498df60d)、[当前连接](https://github.com/openai/codex/commit/d35e5495f991508409ff30e38db8dbe49d565570)
- **Codex 迁移 / workspace 认证边界**（09:06–08:28）：停止迁移 Cursor sandbox 设置，但继续导入支持的 CLI 设置；外部 header credentials 必须匹配配置的 ChatGPT workspace restrictions，刷新到不允许的 workspace 会被拒绝；尚非 release。[Cursor 迁移](https://github.com/openai/codex/commit/67ed4e717acfb8f729c9aa3f2bbdf19bbae73817)、[header auth](https://github.com/openai/codex/commit/b537d5a0970f9d3153b1e647e2b42deed32555e0)
- **Codex 异步用户消息 / Edu 计划识别**（07:59–07:47）：主分支新增 root agent 的 `send_user_message_async` tool，并开始识别 Edu Plus / Edu Pro；均不等同于对外发布。[异步消息](https://github.com/openai/codex/commit/71dbf72b0576f9e7be1ef28d275bc79ece6d4b6c)、[Edu 计划](https://github.com/openai/codex/commit/657bd889ae28edcbf5395c103b479bf8b328704e)
- **Codex Guardian 缓存 / hook 环境**（07:43–07:23）：Guardian transcript 以可缓存分块驱逐条目；command hooks 与 legacy notify 使用捕获的 session environment，并清理不可继承凭据；尚非 release。[Guardian 缓存](https://github.com/openai/codex/commit/8ae72a9314dd9f0c1e74bd495d9a90089b9e3a8e)、[session environment](https://github.com/openai/codex/commit/4d8c664a4976833b2142974bdba6e8d1a270d671)
- **Node SDK streaming / 生态示例 / Realtime 安全**（08:26–07:30）：主分支拒绝 named SSE provider error，把 Vercel 生态示例 API 改为 fail-closed bearer 认证并清理上传文件，同时收紧 Realtime WebSocket origin、Worker credential 与 Azure credential 传递；尚未 release。[SSE error](https://github.com/openai/openai-node/commit/b7a0bd6144ed88c7a541fa8420d5ddada1177466)、[Vercel 示例](https://github.com/openai/openai-node/commit/d58608a08323b9a58f951cabd93bf734e264e76a)、[Realtime / Azure](https://github.com/openai/openai-node/commit/5533f73792081f56a515f49373bf80fa94669fbb)
- **Codex 异步 agent message**（8 月 19 日 07:00）：为 agent message 与 app-server item 增加 async delivery 元数据，并跨历史、replay 与 schema 保留；尚非 release。[提交](https://github.com/openai/codex/commit/fb356f3d2c9fa05f9b06771f8e3c877ca66ed330)
- **Codex unified exec 审批绑定 executable**（06:47）：自定义 shell 的可复用审批绑定具体 executable，避免内层命令信任被其他 shell 复用；尚非 release。[提交](https://github.com/openai/codex/commit/7d9990fa30ab495d473fc555f0d5e7c68e9d205a)
- **Codex plugin / Guardian**（06:47–06:38）：executor skill invocation 增加 plugin 归属；Guardian V2 风险评分错误改为 fail closed，触发严格 review；均尚非 release。[plugin attribution](https://github.com/openai/codex/commit/280d56b1d823a7e9dfd85f796da38bd825d0052d)、[Guardian fail closed](https://github.com/openai/codex/commit/c97bd2dcb52a8120d96086fac49665452af3161b)
- **Codex managed config / agent authority**（06:31 / 05:45）：项目发现尊重 managed / MDM 配置；agent role 只能覆盖受限的行为配置，不能扩大父会话权限或替换 provider、MCP 与 endpoint；尚非 release。[managed config](https://github.com/openai/codex/commit/6ec012668b0decdd4506e376f0553816ab684e67)、[bounded roles](https://github.com/openai/codex/commit/1a6e07a4febcc0ecfa04464f5e95cb47144cd746)
- **Codex Node REPL token 隔离**（05:48）：从模型可达的子进程环境中移除 `NODE_REPL_AUTH_TOKEN`；尚非 release。[提交](https://github.com/openai/codex/commit/fe50b616899eef5aac0dacf1e2d36a09c109944b)
- **Codex MCP tool hooks**（05:32）：在会话共享 MCP runtime 中执行 `mcp_tool` hook，并限制到已连接、已编目且 policy 允许的 tools；尚非 release。[提交](https://github.com/openai/codex/commit/87070a77925cbffed8b34ddc99afaf40d56863aa)
- **Codex Windows doctor / TUI 审批**（05:24–05:20）：`codex doctor` 增加 Windows sandbox diagnostics，TUI file-change approval 显示目标路径；尚非 release。[Windows diagnostics](https://github.com/openai/codex/commit/633bd4abf7b223f826032f6f13e6c7f67c9d9185)、[file destinations](https://github.com/openai/codex/commit/e7f9fa9cd9cefa7d21361586c206ea56b6f8cfea)
- **Codex 实验性 Bedrock setup API schema**（04:34）：只声明 discover / setup request schema，服务端仍返回 method not found，不能视为 setup 已实现。[提交](https://github.com/openai/codex/commit/884a193b78fd323a2a40e6007f9001ebff47d79e)
- **Node SDK 安全修复**（06:12–04:42）：主分支遮蔽 malformed SSE 与 assistant delta diagnostics、停止保留敏感 assistant stream events、限定 Cloudflare API key 文件范围，并维护 structured response-format 完整性；均尚非 release。[SSE diagnostics](https://github.com/openai/openai-node/commit/272a2cc3d896ff84702d6cd72a2638e0d987834c)、[assistant delta](https://github.com/openai/openai-node/commit/b130b83c22a174104908e160d178fde8bd53da93)、[stream retention](https://github.com/openai/openai-node/commit/dfec1297b4b2c055fc7cacbad676561e4a64f22d)、[Cloudflare key scope](https://github.com/openai/openai-node/commit/4f4b45d59f3d7b5f03dba1674db0d3faa1e0b8ce)、[response-format integrity](https://github.com/openai/openai-node/commit/e69df93db7577631a3608da13acf7bc20f0f1ff2)
- **Go / Ruby / Agents SDK Python**（06:16–05:26）：Agents SDK Python 修复 Windows integration bootstrap crash，Go SDK stream accumulator 跟踪每个 choice 的 events，Ruby SDK 保留 nullable nil；均在主分支、尚非 release。[Agents Python](https://github.com/openai/openai-agents-python/commit/21a1f9b4e681a8e2fd4a067efd6234124f417175)、[Go](https://github.com/openai/openai-go/commit/8fa5f4504641b33280c3a9cefda82e4cbb668c35)、[Ruby](https://github.com/openai/openai-ruby/commit/79cc15696bdb4255396a165b9a687e177c26f26c)
- **Codex 线程迁移**（8 月 19 日 03:57）：rollout migration 保留线程名称，尚非 release。[提交](https://github.com/openai/codex/commit/f950a1ba0b12884605d98a48fbedaeccff29dd0e)
- **Codex Guardian / 权限安全**（03:10–03:01）：向 Guardian review session 注入 Node REPL policy、在被拒绝权限路径下要求新的审批，并改进 Guardian v2 风险分类。[Node REPL policy](https://github.com/openai/codex/commit/4a3e829c56415f8c1e69b18fbe74f4d81eaa926a)、[fresh approval](https://github.com/openai/codex/commit/d68b85a0978e15c49c6e96bde1f73ddaeac35d79)、[risk classification](https://github.com/openai/codex/commit/846a16852f6bcd155d552236d4d893749c6130e6)
- **Codex Windows DLL 防护**（02:57）：阻止 ConPTY 从当前目录加载 DLL，尚非 release。[提交](https://github.com/openai/codex/commit/726ec7ecbf2f74784bf88f8722d031b1565a0184)
- **Codex TUI / unified exec**（02:33）：遇到 misalignment policy violation 时停止 TUI chat，并简化 unified exec 输出快照；均尚非 release。[TUI](https://github.com/openai/codex/commit/785ecd7452f87c7eb731fbb73892185cbdd9d5f9)、[unified exec](https://github.com/openai/codex/commit/3006151ad413b165c799fa68d4d7ba8751542389)
- **Codex Realtime sideband**（02:28）：为 WebRTC Realtime sideband transport 增加重连，尚非 release。[提交](https://github.com/openai/codex/commit/ecb8013dfa82120d11b02e3b68b7d3a3afd79d39)
- **Codex 线程归档**（02:25）：归档线程时去重 rollout moves，尚非 release。[提交](https://github.com/openai/codex/commit/fa9a05f2d25f95b39cf365e77cb10f87e8719185)
- **Codex exec-server / Guardian**（01:55）：新增 exec-server forwarding mode，并为 Guardian classifier connection 分配独立线程身份；均尚非 release。[exec-server](https://github.com/openai/codex/commit/77e688960196dbc82bbeb00c844d2555a61925aa)、[Guardian identity](https://github.com/openai/codex/commit/8193c56a595f66eb0f77f18d7434765eb0179d20)
- **Codex MCP / permission profile**（01:46–01:41）：按 connector 限定 MCP resource read，并新增安全的 permission profile intersection；均尚非 release。[MCP scope](https://github.com/openai/codex/commit/a1dc95d5afcbd3ccdebb611864ce94fa3d3e8e3d)、[permission intersection](https://github.com/openai/codex/commit/19d185fec8e1216ddd7b5522b331d69a6ecf3b1c)
- **Codex Guardian 指标 / plugin sync**（01:39–01:33）：记录 Guardian v2 classification metrics，并以共享 semaphore 去重 remote plugin bundle sync；均尚非 release。[Guardian metrics](https://github.com/openai/codex/commit/e683c3118b25bc2fce65e9cbccded7a8343307f1)、[plugin sync](https://github.com/openai/codex/commit/a998c7a1ce88a521d319a4f336e0a4bf36095637)
- **Codex Noise relay**（01:10）：将 Noise relay stream 与 JSON-RPC 处理解耦；此前轮次漏收，尚非 release。[提交](https://github.com/openai/codex/commit/3df5087f754af3794f4b414c78921b5f07af1ace)
- **Node SDK 安全修复**（03:19–01:39）：遮蔽 GCP metadata 认证错误正文和 chat completion finalization snapshot，阻止 structured-output format downgrade，并遮蔽不支持的 Responses stream event payload；均在主分支、尚非 release。[GCP error](https://github.com/openai/openai-node/commit/322840c342cf234df8a450e9886ce76588137361)、[finalization snapshot](https://github.com/openai/openai-node/commit/fb5d8e7c7a07da216b4ea2c922a680e911fff8f6)、[format downgrade](https://github.com/openai/openai-node/commit/dd945e63d9c31adff7d3feef1078b7b3f99b4e1f)、[Responses payload](https://github.com/openai/openai-node/commit/32b295310498c3dd0a39367b57b0ed5bdaffc06a)
- **Go SDK Responses / parser / data residency**（02:21–01:12）：structured outputs 示例迁移到 Responses API、JSON parser 拒绝非对象根 payload，并加入 named data-residency endpoints；均在主分支、尚非 release。[Responses example](https://github.com/openai/openai-go/commit/dd309349035acf67d81ce9b2b11309e29a6a99f0)、[root payload](https://github.com/openai/openai-go/commit/2959fbd636ee8dacbbb65416ec2f18bea55e136e)、[data residency](https://github.com/openai/openai-go/commit/6e7288096828717805cfccbea3b15f054326ff8e)

- **Go 流解码 Content-Type 规范化**（8 月 19 日 00:54）：修正注册 stream decoder 的 content type 处理。[提交](https://github.com/openai/openai-go/commit/a689437a709ca07555386f273d2e048170f0dcc3)
- **Ruby Realtime transcription over WebSockets**（00:26）：新增 Realtime 转录 WebSocket 支持。[提交](https://github.com/openai/openai-ruby/commit/e9f45c4a766705833c54ff8c58949ce5c5256618)
- **Node AssistantStream 敏感数据防泄漏**（00:34）：修复 delta 可能泄漏敏感数据的问题。[提交](https://github.com/openai/openai-node/commit/17cf54c5fdcec9ed3f02e49134602b5aea2116e1)
- **Codex Guardian v2**（00:27 / 00:18）：review 可包含 node_repl 截图，并新增审批 review 指标；均尚非 release。[截图提交](https://github.com/openai/codex/commit/9b9b614b02ba04df55479284749c5cbbed695c24)、[指标提交](https://github.com/openai/codex/commit/e7e13c68e224da4dde35fc685ea2a2ab1a62dc9d)
- **Node Realtime / WebSocket**（00:11）：拒绝畸形 Realtime WebSocket event frames，并将 event waiters 的收敛改为线性时间。[帧校验](https://github.com/openai/openai-node/commit/e6e11b00de8400f7c3ac0f6ebbb2db25029da42a)、[等待器](https://github.com/openai/openai-node/commit/489dc7250e9507f0b519fc6069e8d0f83ed1b144)
- **Codex 外部 agent 迁移安全**（23:58）：跳过重定向的迁移目标。[提交](https://github.com/openai/codex/commit/2a30972fcb646f9d6bfed6de6606aa3f0f8c3dd2)
- **Codex Guardian 认证恢复**（23:54）：认证变化后重新连接采样 WebSocket。[提交](https://github.com/openai/codex/commit/76ceaddb29444388fbbbae07c46f7e8849f9658b)
- **Codex 自定义 provider 认证隔离**（22:58）：阻止 custom provider 继承环境中的 ambient auth。[提交](https://github.com/openai/codex/commit/e13c1d569d953ecac06a09cf5663fb3cd405636d)
- **Codex PowerShell fail-closed lowerer**（22:49）：新增 Tree-sitter PowerShell lowerer，并以 fail-closed 为目标。[提交](https://github.com/openai/codex/commit/bb701f1e8c8db884fa0cdafff4b8dcb1604f2fdd)
- **Named data-residency endpoints**（22:28–23:00）：Python、Java、Node 主分支同步支持，仍需等待 release 才能确认版本化交付。[Python](https://github.com/openai/openai-python/commit/11ee91475694d9cd77813763707fbadf68806d4f)、[Java](https://github.com/openai/openai-java/commit/cf942a40074291290634321ad9fe21e514030b4c)、[Node](https://github.com/openai/openai-node/commit/62d98ddc55bbeed45456130561953dd2dfcf0b8c)
- **Ruby streaming / regional endpoint**（22:22）：更新 streaming models 与区域端点选择，尚非发布。[提交](https://github.com/openai/openai-ruby/commit/f2e94abf63d13fd651df1eea42a43859675bd87d)
- **此前窗口内 Codex 安全提交**：拒绝敏感文件最终 symlink、保护 marketplace identity、要求动态 shell words 审批并从 app-server 日志中遮蔽 token。[敏感文件](https://github.com/openai/codex/commit/b5ea64a203ce1b04629010d3ef0a0d18c3c870a9)、[marketplace identity](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)、[动态 shell 审批](https://github.com/openai/codex/commit/4216123b3df55c7f59323e9d57055e1c8dc4dbba)、[日志脱敏](https://github.com/openai/codex/commit/9a254ba1fa0315e90e0cb2eed5038eaf418a19cd)
- **MCP provenance**：资源来源在 compaction / restart 后仍受原 tool、account、URI 授权约束。[提交](https://github.com/openai/codex/commit/a397079287e6638b39dda329835350d93222681f)
- **Agents SDK Python 验证沙箱**：保持 Codex verification 在开发沙箱内，尚非 release。[提交](https://github.com/openai/openai-agents-python/commit/ebb746dc00b0dd6a90c30bc5ccb7e9c445e55493)

## Love

- 一位用户以“[Codex is incredible](https://www.reddit.com/r/ChatGPT/comments/1vr3tcv/codex_is_incredible/)”描述对编码效果的强烈正面体验；这是单帖口碑，不是可复现实验。
- “[I now get the codex reset excitement](https://www.reddit.com/r/ChatGPT/comments/1vql0l1/i_now_get_the_codex_reset_excitement/)”与“[time to leave Codex?](https://www.reddit.com/r/OpenaiCodex/comments/1vquc6r/time_to_leave_codex_thanks_for_everything/)”的评论区同时出现 Codex 实现与排障能力优于替代品、价格相对更有吸引力的反馈；意见分裂且时间只确认到日期。

## Hate

- ChatGPT Pro 用户报告反复出现“[Too many requests](https://www.reddit.com/r/ChatGPT/comments/1vrff89/anyone_else_constantly_getting_too_many_requests/)”，甚至暂时影响会话访问；另一个用户提供浏览器与 HAR 对照，称[旧有长会话突然出现 10–40 分钟延迟或失败](https://www.reddit.com/r/codex/comments/1vrs8qc/did_chatgpt_break_established_chats_overnight/)。两者都属于用户自报，未找到官方事故确认。
- Codex 用户继续抱怨 auto-review 可能消耗异常用量、配额不可预测与任务消失：[auto-review 用量](https://www.reddit.com/r/codex/comments/1vqn523/check_your_codex_usage_because_auto_review_can_go/)、[任务消失](https://www.reddit.com/r/codex/comments/1volof5/codex_tasks_keep_disappearing_from_ui_but_only/)、[Codex feels uncertain](https://www.reddit.com/r/codex/comments/1vqwxb5/codex_feels_uncertain_right_now/)。本轮又出现一帖称[单次 20 分钟 Sol Medium 工作消耗约 10% 周额度](https://www.reddit.com/r/codex/comments/1vrtpt9/i_concur/)，以及一帖根据个人日志推算[周额度有效量约下降 7–7.5 倍](https://www.reddit.com/r/codex/comments/1vrjady/the_real_reason_behind_my_sudden_75x_drop_in/)；后者的因果归因由用户与模型共同推断，不能视为官方计费变更证明。
- 有用户称赞助搜索结果伪装成 Codex 并导向恶意 stealer：[安全提醒帖](https://www.reddit.com/r/OpenAI/comments/1vqorxl/warning_sponsored_google_result_for_openai_codex/)。这是邻近生态风险，不代表 OpenAI 官方站点被入侵。
- 一名用户称多年 Plus 账户因暴力内容被停用，并猜测与 8 月 18 日更新有关：[投诉帖](https://www.reddit.com/r/ChatGPTcomplaints/comments/1vs59l1/ive_been_using_chatgpt_with_a_plus_subscription/)。这是低互动单帖，既没有账户记录也没有官方变更说明，不能据此确认平台规则改变。
- OpenAI Developer Community 新出现两条可用性自报：一名 Windows Codex 用户称升级到 26.814.41407 后[无法访问本机 Chrome](https://community.openai.com/t/codex-latest-release-26-814-41407-issue/1391181)，另一名 Pro 用户称 VS Code 中 Codex CLI 持续约八小时对所有模型返回[模型容量不足](https://community.openai.com/t/my-codex-cli-on-vs-code-keep-eror-already-for-8-hours/1391169)。两者均为单用户、单帖证据，OpenAI Status 未记录对应事故。

## 情绪判断

- **Codex 能力：偏正面，中低置信度。** 正面样本具体描述实现、测试与排障价值，但样本少且明显存在自选偏差。
- **配额、稳定性与可预测性：偏负面，中等置信度。** 新增帖子给出个人日志、HAR 对照和多个独立回应，使社区负面信号更集中；但样本仍自选，且没有官方状态或可审计的账户级计费数据支持平台级结论。
- **ChatGPT 青少年产品：中性观察。** 官方发布本身不计 Love；待真实家长、教师与青少年使用样本出现后再评估口碑。
- **心理健康与账户安全执行：风险信号，中低置信度。** NPR 提供可核验的个案材料与专家意见，但仍不足以做平台级因果判断；账户停用帖只有单用户叙述，置信度更低。

## 对比

- 社区常把 Codex 与 Claude Code / Claude 桌面体验比较：部分用户认为 Codex 的实现、测试与订阅内价值更强，另一些用户因用量策略准备切换。两边都主要是个案，不能据此下普遍性能结论。
- “GPT-5.6 Sol 在 Codex 与普通 ChatGPT 表现不同”的说法出现在社区讨论中，但缺少同任务、同参数、同工具环境的对照测试，暂不归因于模型本身。

## 日期未确认

- [PORTS-Pike 官方公告](https://openai.com/index/openai-joins-ports-pike-project)只有 2026-08-17 日期。由于页面没有精确时刻，保留为日期未确认候选，不写成窗口内已确认事实。
- [OpenAI Academy 的 Shopify × ChatGPT / Codex 预录活动](https://academy.openai.com/public/clubs/small-business-ipf4m/events/launch-smarter-on-shopify-with-chatgpt-and-codex-cdis8ybpss)列出 2026-08-19 活动日期，并说明以 ChatGPT、Codex 与 Shopify AI Toolkit 处理商品目录、上线规划和商品页；页面未列发布时间，因此只作为当日活动信号。
- Reddit 多数帖子只稳定取得日期而非绝对时间；因此 Love / Hate 仅作为本轮可见社区信号，不用于严格的小时级排序。

## 观察池

- [NPR 对 ChatGPT 心理健康个案的调查](https://www.npr.org/2026/08/18/nx-s1-5929575/ai-suicide-risks-mental-health)提供家属记录、专家意见与 OpenAI 回应，可信度高于普通社区帖；但它仍是单一个案，关于产品对死亡的因果关系不能由该报道单独确定。
- [WSJ 标题](https://www.wsj.com/tech/ai/openais-second-quarter-sales-show-tepid-growth-compared-with-anthropic-5cb42998)称 OpenAI 二季度销售增长相较 Anthropic 偏弱；原文受付费墙限制，本轮未核实具体数字、口径与公司回应，因此只保留为可信二手业务信号，不写成已确认财务事实。
- 两个 Trusted Access for Cyber 消失帖构成同日双样本，但都来自账户级自报且没有官方回应；继续观察是否出现状态页、资格政策或支持说明。
- 一名用户用相同 prompt 在普通聊天与 Temporary Chat 对照，称启用的 Custom Instructions [未在 Temporary Chat 生效](https://community.openai.com/t/enabled-custom-instructions-not-reflected-in-temporary-chat-on-ios-and-web-despite-help-center-documentation/1391175)；该帖有复现步骤，但仍缺少第二样本与官方确认。
- “[ChatGPT Stealth Intelligence Update?](https://www.reddit.com/r/ChatGPT/comments/1vrawsl/chatgpt_stealth_intelligence_update/)”称 8 月 17 日感到模型明显变聪明，并提到非官方“Image 2.5”称呼。OpenAI Model Release Notes 未记录相应权重更新，故仅保留用户主观感受。
- 长会话性能与 Codex 配额消耗出现更具体的个人诊断，但仍缺少官方事故或计费变更说明；继续观察是否出现状态页、changelog 或可重复测量。
- Codex 任务消失、Windows 性能、auto-review 用量与 ChatGPT 限流继续观察；需要官方状态、版本说明或更多独立复现才能升级证据状态。

## 未证实传闻

- OpenAI 已在[安全说明](https://openai.com/index/pacing-model-development-cyber-capabilities)中确认 **Astra 是即将推出的模型**；但“[Astra 等同 GPT-6、并将于 8 月 23 日发布](https://www.reddit.com/r/ChatGPT/comments/1vqx1kj/astragpt6_release_on_sunday_the_23rd/)”仍只有 Reddit 帖子与图片语境，官方没有确认别名、日期或可用性。**这些部分仍未证实，不应据此安排迁移或上线。**

## 较旧背景

- 8 月 17 日发布的 [The Defender’s Window](https://openai.com/index/the-defenders-window)主张组织应加速采用 agent 辅助安全评估、修复与响应，并以 Greg Brockman 的个人站点测试说明 ChatGPT Work 的现有能力；官方 RSS 显示发布时间为 13:30 +08:00，早于本轮 24 小时窗口，仅作为 Astra / cyber 安全语境。
- [Sora 2 视频模型与 Videos API 弃用](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)由官方标记为 2026-03-24 的既有事项，仅用于当前状态核对，不作为过去 24 小时新增。

## 来源

- 官方产品与安全：[民主国家安全监督倡议](https://openai.com/index/strengthening-democratic-oversight-in-national-security)、[Astra 网络安全能力说明](https://openai.com/index/pacing-model-development-cyber-capabilities)、[Asana Codex 案例](https://openai.com/index/asana)、[ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens)、[CodeAI 合作](https://openai.com/index/partnering-with-codeai)、[Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)、[Model Spec 原始版本](https://model-spec.openai.com/2026-08-18.html)。
- 开发与迁移：[API changelog](https://developers.openai.com/api/docs/changelog)、[模型目录](https://developers.openai.com/api/docs/models)、[Responses 迁移](https://developers.openai.com/api/docs/guides/migrate-to-responses)、[Realtime](https://developers.openai.com/api/docs/guides/realtime)。
- GitHub 与社区来源已在“官方发布”“官方开发动态”“Love”“Hate”“观察池”“未证实传闻”各条逐项直链。
- 官方活动与可信二手：[OpenAI Academy × Shopify 活动](https://academy.openai.com/public/clubs/small-business-ipf4m/events/launch-smarter-on-shopify-with-chatgpt-and-codex-cdis8ybpss)、[NPR 心理健康调查](https://www.npr.org/2026/08/18/nx-s1-5929575/ai-suicide-risks-mental-health)、[WSJ 二季度销售信号](https://www.wsj.com/tech/ai/openais-second-quarter-sales-show-tepid-growth-compared-with-anthropic-5cb42998)、[The Defender’s Window](https://openai.com/index/the-defenders-window)。

## 采集状态

- 已检查来源：OpenAI News / RSS（含较旧的 The Defender’s Window）、ChatGPT 与 Model Release Notes、Model Spec、ChatGPT & Codex changelog、ChatGPT Business Help Center、OpenAI Status、API changelog / model catalog / migration / Realtime / deprecations、Codex / Agents SDK / 六种官方 SDK 的 GitHub releases 与截至 13:12 的提交、Reddit、Hacker News Algolia、X、YouTube、OpenAI Developer Community latest.json 与原帖、OpenAI Academy、NPR、WSJ、ABC、Guardian、Wired、TIME 与中英文可信二手搜索。
- 失败来源：Reddit JSON / RSS 仍返回 403，old Reddit HTML 可打开但绝对时间与正文提取不稳定；X 正文提取不稳定；YouTube 频道页信息有限；OpenAI News 与 Help Center 的直接 curl 部分返回 403，已改用 RSS、公开页面与官方 GitHub API 交叉核实；WSJ 原文受付费墙限制，仅保留标题信号；NPR 与部分二手页面无法由通用提取器直接打开，改用公开原始 HTML 核验；JetBrains 未发现窗口内独立官方发布；OpenAI Academy 活动页未列页面发布时间，按日期未确认处理。
- 初始候选数：159；累积保留来源数：137；二次补搜：否（首轮已获得非零来源）。

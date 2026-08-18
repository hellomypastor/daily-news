---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-19T00:00:00+08:00"
updatedAt: "2026-08-19T04:14:34+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Introducing ChatGPT for Teens: Built for learning, backed by protections"
featuredUrl: "https://openai.com/index/chatgpt-for-teens"
featuredSummary: "官方确认 13–17 岁青少年体验的学习功能、健康使用设计、家长控制与更强默认保护。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-18 19:00 +08:00"
featuredTags: ["ChatGPT","Education","Safety"]
tags:
  - "观察池"
  - "开发提交"
  - "日期未确认"
  - "社区口碑"
  - "未证实传闻"
  - "Agent"
  - "Agents SDK"
  - "API"
  - "Assistants API"
  - "Astra"
  - "Auth"
  - "Auto-review"
  - "Bedrock"
  - "Changelog"
  - "ChatGPT"
  - "CLI"
  - "Cloud"
  - "Codex"
  - "Customer Story"
  - "Cybersecurity"
  - "Data Residency"
  - "Deprecation"
  - "Education"
  - "Enterprise"
  - "Exec"
  - "Exec Server"
  - "Go"
  - "Gov"
  - "GPT-6"
  - "Guardian"
  - "Hate"
  - "IDE"
  - "Infrastructure"
  - "Java"
  - "Logging"
  - "Love"
  - "Marketplace"
  - "MCP"
  - "Metrics"
  - "Migration"
  - "Model Spec"
  - "Models"
  - "National Security"
  - "Networking"
  - "Node.js"
  - "OpenAI"
  - "Oversight"
  - "Partnership"
  - "Performance"
  - "Permissions"
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
  - "Shell"
  - "Sora"
  - "Streaming"
  - "Structured Outputs"
  - "Teens"
  - "Threads"
  - "TUI"
  - "Usage"
  - "Video"
  - "Voice"
  - "WebRTC"
  - "WebSocket"
  - "Windows"
---

## 今日概览

扫描窗口：2026-08-18 04:11:00 至 2026-08-19 04:11:00（Asia/Shanghai）；同日此前已收录来源继续累积保留。窗口内最重要的新证据是 OpenAI 在 [Astra 网络安全能力说明](https://openai.com/index/pacing-model-development-cyber-capabilities)中确认 Astra 是即将推出的模型、初步证据显示它可能达到 Preparedness Framework 的 Critical cybersecurity capability 阈值，并说明部分前沿 RL 训练暂停；这使“Astra”名称本身从传闻升级为官方候选模型，但“GPT-6”别名和 8 月 23 日发布日期仍未获证实。OpenAI 还发布了[民主国家安全监督倡议](https://openai.com/index/strengthening-democratic-oversight-in-national-security)，并以 [Asana 案例](https://openai.com/index/asana)披露 Codex 迁移旧测试系统的项目数据。开发侧在 01:12 后继续合入 Codex 权限、安全、Realtime 与线程迁移，以及 Node / Go SDK 安全和 Responses API 相关提交；这些均是主分支动态，不等同于正式版本交付。

## Tier 1

| 产品 | 状态 |
|---|---|
| Codex CLI | [官方 CLI 文档](https://learn.chatgpt.com/docs/codex/cli)确认现有入口；窗口内发布 [0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) 与 [0.148.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.22)，发布页仅列版本号，不能把主分支提交等同于已随 alpha 交付 |
| VS Code / JetBrains 集成 | [Codex IDE 文档](https://learn.chatgpt.com/docs/codex/ide)可确认 IDE extension 现有能力；未见窗口内单独发布，JetBrains 也无可核实新增 |
| Codex cloud / remote tasks 与 PR agents | [Codex cloud 文档](https://learn.chatgpt.com/docs/cloud)确认现有云端任务入口；无窗口内正式发布，社区仍有任务消失的单用户报告，见观察池 |
| ChatGPT agentic mode | [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)最新条目仍为 8 月 14 日，本窗口无新 agentic mode 公告 |
| 当前官方 agent-building 产品 | [Agents SDK 文档](https://developers.openai.com/api/docs/guides/agents)确认 Python / TypeScript 路线；本窗口未见 Agents SDK 正式 release，但主分支有验证沙箱与运行器调整 |
| Responses API | [迁移文档](https://developers.openai.com/api/docs/guides/migrate-to-responses)仍是官方主路径；Python、Node.js、Java SDK 发布同步 shell streaming / image / service 类型，Node 主分支另有流安全修复 |
| Agents SDK Python / TypeScript | 无窗口内正式 release；Python 与 TypeScript 主分支均有开发提交，均按“尚非发布”处理 |
| Assistants API 弃用 / 迁移 | [Assistants deep dive](https://platform.openai.com/docs/assistants/deep-dive/run-lifecycle%23.webm)仍标记 Deprecated，并写明 2026-08-26 停止服务；本窗口未见时间表变化 |
| Realtime API | [Realtime 官方文档](https://developers.openai.com/api/docs/guides/realtime)仍为当前入口；Node 与 Ruby 主分支出现 WebSocket 帧校验、等待器性能、转录与区域端点改动，尚未对应新 release |
| 当前官方 GPT、reasoning、Codex 模型家族 | [模型目录](https://developers.openai.com/api/docs/models)当前列出 GPT-5.6 Sol / Terra / Luna 等已核实名称；[官方说明](https://openai.com/index/pacing-model-development-cyber-capabilities)首次明确把 Astra 称为即将推出的模型，并称其可能达到 Critical cybersecurity capability 阈值，但未公布正式产品名、发布日期或可用性；Model Spec 更新也不是权重发布 |

## Tier 2

| 范围 | 状态 |
|---|---|
| 浏览器 / Operator、Desktop apps | [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)未列 8 月 18 日新品；社区 Windows 卡顿为单用户信号 |
| GPTs / GPT Store、Canvas、GPT Image / DALL·E | 官方 Release Notes 未见窗口内新增；“Image 2.5”与所谓 stealth intelligence update 仅为社区自述，进入未证实观察 |
| Sora / video | 无新产品发布；[官方弃用页](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)仍显示 Sora 2 视频模型与 Videos API 是既有弃用事项，不误报为今日新闻 |
| Voice | 无 ChatGPT Voice 新功能；Ruby 主分支新增 Realtime transcription over WebSockets，但尚未发布 |
| Connectors / MCP | 无 ChatGPT 连接器正式发布；Codex 主分支继续修补 MCP resource provenance 与跨 compaction 恢复，属于开发动态 |

## Tier 3

- **Edu / Teen / Safety（已验证）**：[ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens) 官方原文日期为 8 月 18 日。系统估计用户未满 18 岁或自报 13–17 岁时会自动进入该体验；Study Mode、responsible homework reminders、quizzes、Learning Visualizations、Study Hours 与更强默认保护均由原文列出。
- **Education partnership（已验证）**：[OpenAI × CodeAI](https://openai.com/index/partnering-with-codeai) 将建立顾问委员会，并推进 Hour of AI、Builders Challenge、课程支持与 Career Journeys。
- **Model Spec / Safety（已验证）**：[Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)说明本次更新澄清青少年关系互动、错误或无依据前提与能力边界；[2026-08-18 版本页](https://model-spec.openai.com/2026-08-18.html)是原始证据。
- **Enterprise / Business（已验证案例）**：[Asana Codex 案例](https://openai.com/index/asana)称其用最多四个并行 coding agents，在约两周内移除 Enzyme；OpenAI 页面列出约 1.2 万美元模型与基础设施成本，并与原约 600 万美元人员方案估算对比。这是厂商发布的单一客户案例，不应外推为普遍 ROI。
- **Safety / Science（已验证）**：[Astra 网络安全能力说明](https://openai.com/index/pacing-model-development-cyber-capabilities)称初步证据显示即将推出的 Astra 可能达到 Critical cybersecurity capability 阈值；OpenAI 为强化隔离、监控与对齐，曾暂停两周最新部署模型的 RL 训练，最大前沿 RL run 仍暂停。该文没有确认“Astra=GPT-6”或发布日期。
- **Enterprise / 数据驻留**：官方 SDK 主分支继续加入 named data-residency endpoint 支持，但尚未 release，不据此声称客户现已可用。
- **Gov / National Security（已验证）**：[民主国家安全监督倡议](https://openai.com/index/strengthening-democratic-oversight-in-national-security)计划未来一年向民主政府监督机构提供 500 万美元培训、技术支持与 OpenAI credits，并试点可审查 AI 辅助决策记录的工具；官方强调判断权仍归授权机构。
- **Gov / Infrastructure，日期未确认**：[PORTS-Pike 官方公告](https://openai.com/index/openai-joins-ports-pike-project)只标 2026-08-17、没有精确时刻；相关约 8 GW IT 容量、就业、社区基金与 Codex credits 规划保留在日期未确认区，不算作已确认落入本窗口。

## 官方发布（新到旧）

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

## 情绪判断

- **Codex 能力：偏正面，中低置信度。** 正面样本具体描述实现、测试与排障价值，但样本少且明显存在自选偏差。
- **配额、稳定性与可预测性：偏负面，中等置信度。** 新增帖子给出个人日志、HAR 对照和多个独立回应，使社区负面信号更集中；但样本仍自选，且没有官方状态或可审计的账户级计费数据支持平台级结论。
- **ChatGPT 青少年产品：中性观察。** 官方发布本身不计 Love；待真实家长、教师与青少年使用样本出现后再评估口碑。

## 对比

- 社区常把 Codex 与 Claude Code / Claude 桌面体验比较：部分用户认为 Codex 的实现、测试与订阅内价值更强，另一些用户因用量策略准备切换。两边都主要是个案，不能据此下普遍性能结论。
- “GPT-5.6 Sol 在 Codex 与普通 ChatGPT 表现不同”的说法出现在社区讨论中，但缺少同任务、同参数、同工具环境的对照测试，暂不归因于模型本身。

## 日期未确认

- [PORTS-Pike 官方公告](https://openai.com/index/openai-joins-ports-pike-project)只有 2026-08-17 日期。由于页面没有精确时刻，保留为日期未确认候选，不写成窗口内已确认事实。
- Reddit 多数帖子只稳定取得日期而非绝对时间；因此 Love / Hate 仅作为本轮可见社区信号，不用于严格的小时级排序。

## 观察池

- “[ChatGPT Stealth Intelligence Update?](https://www.reddit.com/r/ChatGPT/comments/1vrawsl/chatgpt_stealth_intelligence_update/)”称 8 月 17 日感到模型明显变聪明，并提到非官方“Image 2.5”称呼。OpenAI Model Release Notes 未记录相应权重更新，故仅保留用户主观感受。
- 长会话性能与 Codex 配额消耗出现更具体的个人诊断，但仍缺少官方事故或计费变更说明；继续观察是否出现状态页、changelog 或可重复测量。
- Codex 任务消失、Windows 性能、auto-review 用量与 ChatGPT 限流继续观察；需要官方状态、版本说明或更多独立复现才能升级证据状态。

## 未证实传闻

- OpenAI 已在[安全说明](https://openai.com/index/pacing-model-development-cyber-capabilities)中确认 **Astra 是即将推出的模型**；但“[Astra 等同 GPT-6、并将于 8 月 23 日发布](https://www.reddit.com/r/ChatGPT/comments/1vqx1kj/astragpt6_release_on_sunday_the_23rd/)”仍只有 Reddit 帖子与图片语境，官方没有确认别名、日期或可用性。**这些部分仍未证实，不应据此安排迁移或上线。**

## 较旧背景

- [Sora 2 视频模型与 Videos API 弃用](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)由官方标记为 2026-03-24 的既有事项，仅用于当前状态核对，不作为过去 24 小时新增。

## 来源

- 官方产品与安全：[民主国家安全监督倡议](https://openai.com/index/strengthening-democratic-oversight-in-national-security)、[Astra 网络安全能力说明](https://openai.com/index/pacing-model-development-cyber-capabilities)、[Asana Codex 案例](https://openai.com/index/asana)、[ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens)、[CodeAI 合作](https://openai.com/index/partnering-with-codeai)、[Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)、[Model Spec 原始版本](https://model-spec.openai.com/2026-08-18.html)。
- 开发与迁移：[API changelog](https://developers.openai.com/api/docs/changelog)、[模型目录](https://developers.openai.com/api/docs/models)、[Responses 迁移](https://developers.openai.com/api/docs/guides/migrate-to-responses)、[Realtime](https://developers.openai.com/api/docs/guides/realtime)。
- GitHub 与社区来源已在“官方发布”“官方开发动态”“Love”“Hate”“观察池”“未证实传闻”各条逐项直链。

## 采集状态

- 已检查来源：OpenAI News / RSS 与新原文、ChatGPT 与 Model Release Notes、Model Spec、ChatGPT & Codex changelog、API changelog / model catalog / migration / Realtime / deprecations、Codex / Agents SDK / 六种官方 SDK 的 GitHub releases 与截至 04:11 的提交、Reddit、Hacker News、X、YouTube、Developer Community 与可信二手搜索。
- 失败来源：Reddit JSON / RSS 403 或内容不完整；X 正文提取不稳定；YouTube 频道页信息有限；部分 Hacker News 请求限流；OpenAI 原始 HTML 对 curl 返回 403，已改用可公开打开的原文核实。
- 初始候选数：105；累积保留来源数：84；二次补搜：否（首轮已获得非零来源）。

---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-18T00:00:00+08:00"
updatedAt: "2026-08-18T19:12:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "OpenAI President Greg Brockman: Compute is becoming the new oil of the AI age"
featuredUrl: "https://www.youtube.com/watch?v=eXBFnfrt2gU"
featuredSummary: "CNBC 对 OpenAI 总裁 Greg Brockman 的原始访谈，涵盖网络安全、AI 经济与资本开支。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-17 21:26 +08:00"
featuredTags: ["Company","Infrastructure","Security"]
featuredImage: "https://i.ytimg.com/vi/eXBFnfrt2gU/maxresdefault.jpg"
featuredImageAlt: "CNBC 对 OpenAI 总裁 Greg Brockman 的视频访谈画面"
featuredImageCaption: "题图来源：CNBC Television / YouTube"
tags:
  - "观察池"
  - "较旧背景"
  - "日期未确认"
  - "未证实传闻"
  - "Agent"
  - "Agents"
  - "Agents SDK"
  - "API"
  - "Approval"
  - "Auto-review"
  - "ChatGPT"
  - "Cloud"
  - "Codex"
  - "Collaboration"
  - "Commit"
  - "Compaction"
  - "Company"
  - "Deprecation"
  - "Desktop"
  - "Education"
  - "GPT-5.6"
  - "Guardian"
  - "Infrastructure"
  - "MCP"
  - "Model Spec"
  - "OpenAI"
  - "Partnership"
  - "Permissions"
  - "Pricing"
  - "Realtime API"
  - "Responses API"
  - "Safety"
  - "Sandbox"
  - "SDK"
  - "Security"
  - "Sentiment"
  - "Skills"
  - "Sora"
  - "Teens"
  - "Turns"
  - "UI"
  - "Workflow"
---

## 今日概览

扫描窗口：2026-08-17 19:12 至 2026-08-18 19:12（Asia/Shanghai）。19:00 的 OpenAI News RSS 新增 ChatGPT for Teens 与 CodeAI 教育合作两篇官方公告；同日 Model Release Notes 记录 Model Spec 针对青少年互动、错误或无依据前提及能力边界的更新。产品原文链接在扫描时仍返回 404，因此只采用官方 RSS 摘要、可公开打开的合作公告和 Model Release Notes 能交叉确认的范围，不推断地区、套餐或完整上线节奏。16:20 后另有 2 个 Codex 与 3 个 Agents SDK 主分支提交，均为开发动态、不是已发布版本。窗口内此前的 Codex alpha、五个客户端 SDK 版本和 CNBC 访谈继续有效；未发现新的 API changelog、ChatGPT / Codex changelog 条目或状态事故。

## Tier 1

| 产品 | 状态 |
|---|---|
| Codex CLI | [0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) 于 2026-08-18 03:27 +08:00 发布；发布页仅有版本标识。主分支随后出现权限、安全、agents dashboard 与会话恢复提交，见开发动态；不推断已向用户发布 |
| VS Code / JetBrains 集成 | 无经官方原文确认的窗口内新增 |
| Codex cloud / remote tasks 与 PR agents | 官方无发布；观察池保留单用户报告云任务从 UI 消失 |
| ChatGPT agentic mode | 无产品发布；较旧背景中的《The Defender’s Window》提供 ChatGPT Work 用于授权安全检查的官方案例 |
| 当前官方 agent-building 产品 | 无发布 |
| Responses API | Python、Node.js、Java SDK 同步 shell / streaming、Responses 类型或流错误处理；见各发布说明 |
| Agents SDK Python / TypeScript | 两个仓库主分支在上一轮 skills runtime probe 审批修正后，又出现验证沙箱、示例 / 集成 runner 与 workflow 执行职责调整；尚无对应 release，见开发动态 |
| Assistants API 弃用 / 迁移 | 官方 deprecations 未见窗口内新增 |
| Realtime API | Node.js SDK 增加 WebSocket stream ID，并修复多项 Realtime 重定向、凭据与错误处理问题；属于客户端更新 |
| 当前官方 GPT、reasoning、Codex 模型家族 | 无新模型发布；Node.js SDK 的 Daybreak 与 gpt-5.6-cyber 标识仍仅视为类型同步。官方 Model Release Notes 同日记录 Model Spec 行为规范更新，不等同于模型权重或产品版本发布 |

## Tier 2

| 范围 | 状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| Desktop apps | 官方无发布；Windows 性能问题进入观察池 |
| GPTs / GPT Store、Canvas、GPT Image / DALL·E | 无新增 |
| Sora / video | Node.js SDK 标记 Sora 视频 API 弃用；[官方弃用页](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)显示这是 2026-03-24 已通知、计划 2026-09-24 移除的既有状态，不是窗口内新公告 |
| Voice | 无 ChatGPT Voice 新功能；Node.js SDK 有麦克风泄漏、播放管线死锁等客户端修复 |
| Connectors / MCP | Node.js 与 Ruby SDK 同步 structured MCP / WebSocket 错误类型；无 ChatGPT 连接器新发布 |

## Tier 3

- **Edu / Teen / Safety**（19:00）：官方 RSS 宣布 [ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens)，定位为以学习为中心的青少年专用体验，摘要称包含更强的内置保护、健康使用功能和额外家长控制；原文扫描时返回 404，暂不写地区、套餐与完整可用性。公开可读的 [CodeAI 合作公告](https://openai.com/index/partnering-with-codeai)交叉确认该产品，并列出联合顾问委员会、Hour of AI、Builders Challenge、课程支持与职业分享等合作计划。
- **Model Spec**（2026-08-18，官方页面未给精确时刻）：[Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)称本次规范更新进一步澄清与青少年的适当关系互动、对错误或无依据前提的处理，并新增“清楚说明能力与限制”等内容；这是行为规范更新，不写成模型能力升级。
- **Enterprise / Business / Gov / Science**：未发现窗口内官方产品发布。
- **基础设施 / 公司访谈**（2026-08-17 21:26 +08:00）：CNBC 发布对 OpenAI 总裁 Greg Brockman 的[原始访谈](https://www.youtube.com/watch?v=eXBFnfrt2gU)，主题涵盖 AI 网络安全、领导层、AI 经济与资本开支。可核实采访对象、标题和发布时间；本页不把节目标题中的“compute is the new oil”扩展成量化结论。
- **安全组织调整**：可信二手报道位于主窗口之前，见“较旧背景”；OpenAI 未在本轮给出可核实的窗口内官方说明。

<figure class="source-image">
  <a href="https://www.youtube.com/watch?v=eXBFnfrt2gU"><img src="https://i.ytimg.com/vi/eXBFnfrt2gU/maxresdefault.jpg" alt="CNBC 对 OpenAI 总裁 Greg Brockman 的视频访谈画面" loading="lazy" /></a>
  <figcaption><a href="https://www.youtube.com/watch?v=eXBFnfrt2gU">题图来源：CNBC Television / YouTube</a></figcaption>
</figure>

## 官方发布（新到旧）

- **ChatGPT for Teens**（19:00）：官方 RSS 宣布专用青少年体验；原文暂不可达，已按上述证据边界收录。[原文链接](https://openai.com/index/chatgpt-for-teens)
- **OpenAI × CodeAI**（19:00）：合作将围绕 AI 素养、青少年安全反馈、建设者挑战、课堂课程与职业认知展开。[公告](https://openai.com/index/partnering-with-codeai)
- **Model Spec 行为规范更新**（日期确认为 2026-08-18，精确时刻未列）：增加青少年关系互动、错误前提与能力边界方面的澄清。[Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)
- **Codex 0.148.0-alpha.21**（03:27）：仅能核实版本与发布时间，无功能清单。
- **OpenAI Go v3.52.0**（03:19）：加入 Bedrock Runtime endpoint 支持。[发布页](https://github.com/openai/openai-go/releases/tag/v3.52.0)
- **OpenAI Node.js v7.5.0**（03:13）：加入 Bedrock Runtime、Daybreak / `gpt-5.6-cyber` 标识、ServiceTier、WebSocket IDs、structured MCP，并包含 Responses、Realtime、streaming 与凭据处理修复。[发布页](https://github.com/openai/openai-node/releases/tag/v7.5.0)
- **OpenAI Python v3.2.0**（03:13）：加入 Bedrock Runtime endpoint、shell call streaming events 和新的 service / image 类型。[发布页](https://github.com/openai/openai-python/releases/tag/v3.2.0)
- **OpenAI Ruby v0.80.0**（03:12）：加入 Bedrock Runtime，以及 Ultrafast、structured MCP 和 WebSocket 错误类型。[发布页](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)
- **OpenAI Java v4.52.0**（03:10）：加入一等 Bedrock Runtime 支持、shell call streaming events 和 image partial fields。[发布页](https://github.com/openai/openai-java/releases/tag/v4.52.0)
- 其后为上面的 CNBC 访谈；OpenAI News RSS 未显示其他窗口内新文章。

## 官方开发动态（主分支提交，尚非发布；新到旧）

- **Agents SDK TypeScript runner 职责迁移**（18:54）：[dcbb1e7](https://github.com/openai/openai-agents-js/commit/dcbb1e7ba9bcf5ce50052a2a8d287c94d1d84daf)将示例与集成 runner 从 skills 迁至仓库脚本 / workflow，并把分析 skill 约束为只读；属于仓库维护。
- **Agents SDK TypeScript 验证沙箱**（18:54）：[272cb52](https://github.com/openai/openai-agents-js/commit/272cb52e23947f3f47fd9a39475ae3a2a27572b9)要求 Codex 验证流程留在普通 workspace sandbox，并移除继承的 API key；尚非 SDK 发布。
- **Agents SDK Python workflow 职责迁移**（18:34）：[82e3571](https://github.com/openai/openai-agents-python/commit/82e3571fc55a8583239c74a0cec8c5497f0d7a2c)把 workflow 执行移出仓库 skills；属于开发流程重构。
- **Codex 远程压缩消息保留修正**（17:32）：[711a5f8](https://github.com/openai/codex/commit/711a5f8b3a6eb40134146ae9ec22fdcdda5e3170)让远程 compaction 后丢弃后代 agent 的进度更新，同时保留后代任务，避免后续请求携带冗余进度。
- **Codex 自动空闲回合空消息修正**（17:19）：[63b268c](https://github.com/openai/codex/commit/63b268c81b28bb65203afdc57862efaa3879998b)在自动 idle UserInput 采样时不再加入空用户消息，同时继续排队 response-item 输入。
- **Codex Marketplace 身份校验**（15:51）：[`0acf302`](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)拒绝非托管来源冒用保留 marketplace 名称，并收紧路径与 symlink 来源判定。
- **Codex 协作说明刷新**（15:20）：[`e2eea07`](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)在内容变化时向保留历史追加新协作说明，避免只按模式 / 模型判断而遗留旧指令。
- **Codex 动态 shell words 审批**（15:19）：[`4216123`](https://github.com/openai/codex/commit/4216123b3df55c7f59323e9d57055e1c8dc4dbba)让包含未加引号 expansion、glob 或 escape 的 Bash / Zsh 命令在 `UnlessTrusted` 下要求审批，避免安全规则按静态 argv 误判。
- **Agents SDK TypeScript skills probe**（15:07）：[`42489cd`](https://github.com/openai/openai-agents-js/commit/42489cda7f38a1da7220fda2e403ef6b7222fc4b)把 skills runtime probe 的审批要求改为显式。
- **Agents SDK Python skills probe**（15:04）：[`9648a40`](https://github.com/openai/openai-agents-python/commit/9648a401a041919cef91fd68069ef2514708f10e)做出同类审批修正。两项都尚未进入新 release。
- **Codex Guardian strict-review 通知**（14:38）：[`f5e9d66`](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)增加实验性 app-server 通知，用于 Guardian v2 因高风险或陈旧评分而保留严格审批时告知客户端。
- **Codex 恢复权限配置**（14:10）：[`539a09c`](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)让冷恢复与 fork 恢复已持久化的 approval policy、reviewer 与 permission-profile ID，同时保留显式覆盖优先级。
- **Codex 持久化权限配置**（13:31）：[`230791f`](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)在 turn context 中记录当前 permission profile，为上一项恢复逻辑提供状态。
- **Codex agents dashboard 快捷键**（13:24）：[`f47f77a`](https://github.com/openai/codex/commit/f47f77ada6699460bf13b0b7278e710692e0ea34)增加可配置的全局与 dashboard 上下文快捷键，并处理既有绑定冲突。
- **Codex app-server 日志 Token 遮罩**（13:15）：[`9a254ba`](https://github.com/openai/codex/commit/9a254ba1fa0315e90e0cb2eed5038eaf418a19cd)避免记录原始 JSON-RPC 响应、遮罩 `access_token`，并减少回调错误保留原始响应载荷。

## Love

- **日期未确认、单一用户陈述**：一位无编程经验的教师称 Codex 帮其迭代英语学习应用并生成辅助教学音频，体现了编程之外的使用价值；未独立验证产物质量。[讨论](https://www.reddit.com/r/ChatGPT/comments/1vql0l1/i_now_get_the_codex_reset_excitement/)

## Hate

- **日期未确认、单一长期用户陈述**：一名自称使用 Codex 近一年的 Pro 用户认为近期用量、长时 agent token 消耗与多模型选择让产品更难控制，并称转试其他工具后更容易推进工作；评论也有人认为 OpenAI 用量仍较宽松。该帖是主观迁移信号，不是配额或性能测量。[讨论](https://www.reddit.com/r/codex/comments/1vqwxb5/codex_feels_uncertain_right_now/)
- **日期未确认、社区争议**：Pro 用户抱怨高价套餐周用量不足；评论同时指出 Ultra、超大上下文、长时间 agent 与高频 MCP tool calls 会放大消耗，因而不能把原因归结为单一配额调整。[讨论](https://www.reddit.com/r/codex/comments/1vr2osw/pro_20x_is_a_joke/)
- **日期未确认、两份用户自报**：一名用户称 Auto-review 在一周内运行 141 次并消耗约 1040 万 tokens；另一名用户称其分析页显示 1600 次 reviewer turns，并把高频触发归因于 writable roots 与工作目录不匹配。[报告一](https://www.reddit.com/r/codex/comments/1vr8pvh/i_found_the_culprit_eating_your_usage_limit/)；[报告二](https://www.reddit.com/r/codex/comments/1vqn523/check_your_codex_usage_because_auto_review_can_go/)。这些数字来自个人截图 / 日志，未获 OpenAI 核实。

## 情绪

**34/100，低置信度。** 计分采用一条正面用例、两条配额 / 迁移负面讨论与两条 Auto-review 负面报告；新增迁移帖来自一名长期用户，评论存在反向意见，全部仍是自选社区样本。官方 [Auto-review 文档](https://learn.chatgpt.com/docs/sandboxing/auto-review)确认越过沙箱边界、网络或 writable roots 的审批请求会交给 reviewer，普通沙箱内操作不会触发；选择获批 Daybreak 模型时，桌面端在功能可用且组织策略允许时会自动切换到 Approve for me。它支持“配置可导致大量 reviewer 调用”的机制解释，但不证明两名用户的 token 换算或“无故开启”判断。此前的[用户自算样本](https://www.reddit.com/r/codex/comments/1vr3yfe/i_have_bad_news/)认为 7 月至 8 月每 1% 用量的 API 等值大致稳定，评论质疑其 reset 与百分比口径，故继续作为反向证据，不直接改成官方结论。官方发布与仓库提交不计作正向情绪。

## 对比

- **语言 SDK**：五个客户端版本都覆盖 Bedrock Runtime，但 Python / Java 更侧重 shell streaming 类型，Node.js 同步面最广且包含大量安全与流处理修复，Ruby 同步 MCP / WebSocket 类型，Go 发布说明仅列 Bedrock endpoint。版本说明不能替代跨语言稳定性基准。
- **Auto-review 报告内部对照**：两份帖子都看到 reviewer 用量异常，但一份指向未主动开启，另一份明确归因于权限根和旧 agent 配置。官方文档说明触发条件；同日下午进入主分支的权限配置恢复与 strict-review 通知提交也只是开发中变化，不能替代账号级审计。
- **配额争议内部对照**：一条帖子称 Pro 20x 三天即耗尽；另一条以个人 rollout 日志估算每 1% API 等值在多个时段大致稳定。两者都不是官方配额说明，任务结构、模型档位、reset 与换算方法也不统一，因此只能说明社区对原因没有共识。
- **Codex 与替代方案**：新增迁移帖称其他工具在用量与控制感上更合适，既有配额争议帖评论也比较 Claude 或中国模型；但没有统一任务、模型、推理档位和计费口径，因此只保留为主观迁移信号，不下性能或性价比结论。

## 日期未确认

以下页面仅显示相对时间、日期无稳定绝对时刻或文档未标发布日期，相关内容不写成窗口内已确认事实：

- 教师的 Codex 教学与音频用例。
- Pro 用量限制争议、长期用户的迁移 / 控制感陈述与配额削减反向检验。
- 两份 Codex Auto-review 用量异常报告，以及当前 Auto-review 官方文档的上线日期。
- Windows 桌面端 CPU / 鼠标卡顿报告。
- Codex 云任务从 UI 消失的单用户报告。
- 冒充 Codex 安装入口的恶意广告报告。

## 观察池

- **Codex 控制感 / 迁移信号**：一名长期 Pro 用户称近期用量与长时 agent 消耗使 Codex 失去此前的可控感，并以另一工具作主观对比；评论存在“OpenAI 限额仍较宽松”等反向意见，帖子也没有统一任务或日志，故不推导为普遍退订或性能退化。[帖子](https://www.reddit.com/r/codex/comments/1vqwxb5/codex_feels_uncertain_right_now/)
- **Auto-review 用量争议**：两名用户分别报告异常 reviewer turns / token 消耗。官方 [Auto-review 文档](https://learn.chatgpt.com/docs/sandboxing/auto-review)说明该模式会把原本交给人的沙箱边界审批交给独立 reviewer；[Codex 0.147.0 发布说明](https://github.com/openai/codex/releases/tag/rust-v0.147.0)则确认加入 `--approve-for-me`。官方材料未支持“该版本对所有用户静默开启”或帖子中的具体 token 因果，继续等待 OpenAI 状态页、修复说明或可复现实验。
- **Windows 桌面端性能**：用户称版本 `26.810.4967.0` 在比较 Chrome plugin 路径时反复重建 junction，导致高磁盘读取与 CPU 占用；两名回复者称禁用插件或临时 workaround 有效，但尚无 OpenAI 官方确认，且绝对日期未核实。[帖子](https://www.reddit.com/r/codex/comments/1vorxvv/workaround_for_latest_windows_cpu_mouse_lag_issue/)
- **Codex cloud 任务可见性**：单一用户报告部分 GitHub repo 任务短暂出现后从主页消失，而 README 任务仍能创建并合并 PR；尚无官方状态页或可复现结论。[帖子](https://www.reddit.com/r/codex/comments/1volof5/codex_tasks_keep_disappearing_from_ui_but_only/)
- **仿冒安装入口 / 安全提醒**：单一用户称 Google sponsored result 将其带到冒充 Codex 的页面，并诱导执行混淆后的远程 shell 命令；帖子展示了命令结构，但恶意载荷、投放范围及 OpenAI 是否知情均未独立确认。[帖子](https://www.reddit.com/r/OpenAI/comments/1vqorxl/warning_sponsored_google_result_for_openai_codex/)

## 较旧背景

- **官方安全观点**（2026-08-17 13:30 +08:00，已滑出主窗口）：OpenAI 的 [The Defender’s Window](https://openai.com/index/the-defenders-window)讨论 AI 攻防变化，并披露内部以 Codex、安全插件和模型协助代码与基础设施防护的做法。这是官方观点与案例，不是独立效果评测。
- **Preparedness 团队调整**（2026-08-17 05:32 +08:00，可信二手；所述事件更早）：[The Verge](https://www.theverge.com/ai-artificial-intelligence/980817/openai-disbands-preparedness-team)转述 Financial Times 称 OpenAI 在 7 月底解散独立 Preparedness 团队，并把生物、网络等职责分配到现有团队；OpenAI 本轮没有可核实的官方说明，因此不把“职责被放弃”或“安全投入下降”写成已证实结论。
- **Sora 弃用计划**：Videos API 与 Sora 2 模型计划于 2026-09-24 移除，公告日期为 2026-03-24；本轮仅因 Node.js SDK 类型同步再次核对，不算新发布。

## 未证实传闻

- Hacker News 的重复提交指向 [OpenRouter 页面](https://openrouter.ai/openai/gpt-5.6-sol)，该页显示 OpenAI 路由的 GPT-5.6 Sol 为“50% off”、$2.50 / $15；但 [OpenAI 官方模型页](https://developers.openai.com/api/docs/models/gpt-5.6-sol)在本轮仍显示 $5 / $30，且没有窗口内官方降价公告。因此不能写成 OpenAI 已降价，继续观察其是否为渠道促销、页面同步差异或未来变更。

## 来源

- [ChatGPT for Teens](https://openai.com/index/chatgpt-for-teens)
- [OpenAI × CodeAI 合作公告](https://openai.com/index/partnering-with-codeai)
- [Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)
- [Agents SDK TypeScript runner 职责迁移提交](https://github.com/openai/openai-agents-js/commit/dcbb1e7ba9bcf5ce50052a2a8d287c94d1d84daf)
- [Agents SDK TypeScript 验证沙箱提交](https://github.com/openai/openai-agents-js/commit/272cb52e23947f3f47fd9a39475ae3a2a27572b9)
- [Agents SDK Python workflow 职责迁移提交](https://github.com/openai/openai-agents-python/commit/82e3571fc55a8583239c74a0cec8c5497f0d7a2c)
- [Codex 远程压缩消息保留提交](https://github.com/openai/codex/commit/711a5f8b3a6eb40134146ae9ec22fdcdda5e3170)
- [Codex 自动空闲回合空消息提交](https://github.com/openai/codex/commit/63b268c81b28bb65203afdc57862efaa3879998b)
- [Codex 近期控制感讨论](https://www.reddit.com/r/codex/comments/1vqwxb5/codex_feels_uncertain_right_now/)
- [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
- [OpenAI Go v3.52.0](https://github.com/openai/openai-go/releases/tag/v3.52.0)
- [OpenAI Node.js v7.5.0](https://github.com/openai/openai-node/releases/tag/v7.5.0)
- [OpenAI Python v3.2.0](https://github.com/openai/openai-python/releases/tag/v3.2.0)
- [OpenAI Ruby v0.80.0](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)
- [OpenAI Java v4.52.0](https://github.com/openai/openai-java/releases/tag/v4.52.0)
- [Greg Brockman CNBC 原始访谈](https://www.youtube.com/watch?v=eXBFnfrt2gU)
- [Codex Marketplace 身份校验提交](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)
- [Codex 协作说明刷新提交](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)
- [Codex 动态 shell words 审批提交](https://github.com/openai/codex/commit/4216123b3df55c7f59323e9d57055e1c8dc4dbba)
- [Agents SDK TypeScript skills probe 提交](https://github.com/openai/openai-agents-js/commit/42489cda7f38a1da7220fda2e403ef6b7222fc4b)
- [Agents SDK Python skills probe 提交](https://github.com/openai/openai-agents-python/commit/9648a401a041919cef91fd68069ef2514708f10e)
- [Codex Guardian strict-review 通知提交](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)
- [Codex 恢复权限配置提交](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)
- [Codex 持久化权限配置提交](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)
- [Codex agents dashboard 快捷键提交](https://github.com/openai/codex/commit/f47f77ada6699460bf13b0b7278e710692e0ea34)
- [Codex app-server 日志 Token 遮罩提交](https://github.com/openai/codex/commit/9a254ba1fa0315e90e0cb2eed5038eaf418a19cd)
- [Auto-review 官方文档](https://learn.chatgpt.com/docs/sandboxing/auto-review)
- [Codex 0.147.0](https://github.com/openai/codex/releases/tag/rust-v0.147.0)
- [Auto-review 用量报告一](https://www.reddit.com/r/codex/comments/1vr8pvh/i_found_the_culprit_eating_your_usage_limit/)
- [Auto-review 用量报告二](https://www.reddit.com/r/codex/comments/1vqn523/check_your_codex_usage_because_auto_review_can_go/)
- [The Defender’s Window](https://openai.com/index/the-defenders-window)
- [Preparedness 团队调整二手报道](https://www.theverge.com/ai-artificial-intelligence/980817/openai-disbands-preparedness-team)
- [Sora 2 / Videos API 弃用状态](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)
- [教师的 Codex 用例](https://www.reddit.com/r/ChatGPT/comments/1vql0l1/i_now_get_the_codex_reset_excitement/)
- [Pro 用量限制争议](https://www.reddit.com/r/codex/comments/1vr2osw/pro_20x_is_a_joke/)
- [配额削减说法的用户自算反向样本](https://www.reddit.com/r/codex/comments/1vr3yfe/i_have_bad_news/)
- [Windows CPU / 鼠标卡顿观察](https://www.reddit.com/r/codex/comments/1vorxvv/workaround_for_latest_windows_cpu_mouse_lag_issue/)
- [Codex 云任务消失观察](https://www.reddit.com/r/codex/comments/1volof5/codex_tasks_keep_disappearing_from_ui_but_only/)
- [冒充 Codex 的恶意广告报告](https://www.reddit.com/r/OpenAI/comments/1vqorxl/warning_sponsored_google_result_for_openai_codex/)
- [OpenRouter GPT-5.6 Sol 页面](https://openrouter.ai/openai/gpt-5.6-sol)
- [OpenAI GPT-5.6 Sol 官方模型页](https://developers.openai.com/api/docs/models/gpt-5.6-sol)

## 采集状态

- 已检查：OpenAI News RSS 与新原文、ChatGPT Release Notes、Model Release Notes、API changelog / models / deprecations、ChatGPT & Codex changelog、Auto-review 官方文档、Codex 与五个官方客户端 SDK、两套 Agents SDK 的 releases 与主分支提交、OpenAI Status、Reddit 五个社区、Hacker News、X、YouTube、CNBC 原始访谈、The Verge、The Next Web 与 404 Media。
- 失败来源：OpenAI News HTML 首页 403（已用 RSS 替代）；ChatGPT for Teens 原文链接在发布后仍返回 404（只采用 RSS、CodeAI 合作页和 Model Release Notes 可交叉确认内容）；Reddit JSON / RSS 403 或不可解析（已用 HTML 与搜索索引替代）；HN 单条页此前 429（使用 Algolia）；X 页面无可提取正文；OpenAI YouTube 频道页信息不足；CNBC / WSJ 数据中心报道 403；404 Media 与 The Next Web 正文打开失败，均未据此新增事实。
- 初始候选：49；保留引用来源：41；二次补搜：否（最终来源不为 0）。

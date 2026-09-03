---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-03T00:00:00+08:00"
updatedAt: "2026-09-03T17:01:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT"
featuredUrl: "https://openai.com/index/atv-big-air-tour"
featuredSummary: "官方客户案例介绍 ChatGPT Work 定时检查活动信息、从商品照片整理库存并生成补货建议；效率数字为客户案例自述，不是独立评测。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-02 20:00 +08:00"
featuredTags: ["ChatGPT Work","客户案例","Agent"]
featuredImage: "https://images.ctfassets.net/kftzwdyauwt9/49oJo0HsEQBLrr5rWLdYHh/6e651b242ddec9857a2563f1efa24c65/A-seo-og.png?w=1600&h=900&fit=fill"
featuredImageAlt: "ATV Big Air Tour 官方案例图：轮胎纹理特写，两侧为 OpenAI 与 ATV Big Air Tour 标识"
featuredImageCaption: "图片来源：OpenAI ATV Big Air Tour 客户案例"
tags:
  - "安全"
  - "服务状态"
  - "功能建议"
  - "观察池"
  - "活动"
  - "活动预告"
  - "可靠性"
  - "可信二手来源"
  - "客户案例"
  - "日期未确认"
  - "容量"
  - "社区反馈"
  - "未证实传闻"
  - "稳定版"
  - "限额"
  - "修复版"
  - "已恢复"
  - "预发布"
  - "Agent"
  - "AI Adoption"
  - "API"
  - "ChatGPT"
  - "ChatGPT Work"
  - "Codex"
  - "Codex CLI"
  - "Codex Security"
  - "Daybreak"
  - "Developer Platform"
  - "DSH"
  - "Enterprise"
  - "iOS"
  - "Node SDK"
  - "OpenAI"
  - "Pi"
  - "Python SDK"
  - "Responses API"
  - "UX"
  - "Voice"
---

## 今日概览

本轮发现窗口：**2026-09-02 17:01 至 2026-09-03 17:01（Asia/Shanghai）**。当天累积保留此前全部 51 个来源，即使已滑出本轮窗口。本轮新增 10 条社区反馈/建议及网络安全官方页面的日期未确认候选；此前已收录已恢复的 Work Mode 错误率事件与活动观察。当天已收录 Codex 0.153.0 稳定版与 alpha.5.1；当天官方主线还包括 Codex 0.152.1 修复与三个 alpha 版本、Python/Node SDK 更新、API 错误码细分，以及 ChatGPT Work 的 ATV 客户案例。客户效率数字仅按官方案例归因，社区问题均按个体反馈处理。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 状态与证据 |
| --- | --- |
| Codex CLI | **新增 0.153.0 稳定版与 alpha.5.1**，插件管理、恢复与上下文实验配置见下方；累计保留 0.152.1 修复 Guardian 对模型元数据 Node REPL 策略的遵循；0.153.0-alpha.4/.5/.6 仅版本信号，不推断功能。 |
| VS Code / JetBrains 集成 | 无官方独立新增；Windows VS Code app-server 崩溃个案见观察池。 |
| Codex 云端 / 远程任务 / PR Agent | 新发现 Codex Security Cloud 官方介绍，发布日期未确认，见观察池；不认定今日上线。 |
| ChatGPT agentic mode / Work | 官方状态页确认短时错误率事件已恢复；ATV 案例展示定时信息核查、库存与营销工作流。 |
| Agents SDK Python | 官方 releases 最新 v0.22.0，8 月 19 日，无新增。 |
| Agents SDK TypeScript | 官方 releases 最新 v0.17.0，8 月 19 日，无新增。 |
| 当前官方 Agent 构建产品 | Agents SDK Python/TypeScript releases 未见窗口内发布。 |
| Responses API | Node SDK 7.9.0 **阻止** WebSocket 跟随重定向；平台另细分流量突增与模型过载错误码。 |
| Assistants API 迁移 / 弃用 | 本轮未核实窗口内迁移时间线变更。 |
| Realtime API | 无窗口内可核实独立更新。 |
| GPT / reasoning / Codex 模型家族 | 未核实窗口内新模型或别名变化，不从社区提及推断发布。 |

## Tier 2：消费端功能

| 方向 | 状态 |
| --- | --- |
| 浏览器 / Operator；桌面应用 | 无官方独立新增；桌面上下文恢复问题见社区观察池。 |
| GPTs / GPT Store；Canvas | 无官方新增；iPhone 自定义 GPT 入口反馈见观察池。 |
| Sora / 视频；GPT Image / DALL·E | 无窗口内可核实新增；不重复较旧停用背景。 |
| Voice | 无官方新增；iOS 朗读入口反馈与会议静默聆听建议见观察池。 |
| Connectors / MCP | release notes 最新仍是 9 月 1 日医疗插件，本页不跨日重复旧来源。 |

## Tier 3：企业、教育、安全与行业

ATV 与 AI-native 工作流为本窗口官方企业采用案例。新发现网络安全解决方案官方页面，但公告日期未确认；Enterprise、Business、Edu、Gov、Science 未发现其他可核实的窗口内独立公告，不将旧 Astra / 医疗新闻重新包装。

## 官方更新（最新在前）

- **Codex 0.153.0**（2026-09-03 09:37 +08:00）：新增 Vim 撤销/重做、远程 marketplace 插件管理、可关闭自动 recap、提前限额提醒；改进断连恢复、Guardian 历史保持与 MCP 账号审批作用域，并提供默认关闭的上下文管理实验配置。 [官方 release](https://github.com/openai/codex/releases/tag/rust-v0.153.0)
- **Codex 0.153.0-alpha.5.1**（2026-09-03 08:41 +08:00）：官方预发布，仅有版本标识，未披露功能清单。 [官方 release](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5.1)

0.153.0 的上下文管理实验默认关闭，仅面向符合条件、使用 Codex 后端的 ChatGPT Plus、Pro、Pro Lite 会话；API key、自定义 provider 和临时结构化线程不包含在内。远程 marketplace 支持列表、安装与移除插件；MCP 已记住的工具批准绑定到选定应用账号。

- **Work Mode 错误率事件已恢复**（2026-09-03 08:10 +08:00）：官方状态页记录 Work Mode 错误率升高，上海时间 08:04 开始调查、08:10 标记恢复；不能据此解释全部社区报告或断言所有用户受影响。 [官方状态页](https://status.openai.com/incidents/avwnvk1f)

- **ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT**（2026-09-02 20:00 +08:00）：官方客户案例介绍 ChatGPT Work 定时检查活动信息、从商品照片整理库存并生成补货建议；效率数字为客户案例自述，不是独立评测。 [原文](https://openai.com/index/atv-big-air-tour)
- **Codex 0.153.0-alpha.6**（2026-09-02 19:26 +08:00）：Codex 官方发布新预发布版本；release 只有版本标识，没有披露功能变化。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.6)
- **Codex 0.153.0-alpha.5**（2026-09-02 11:05 +08:00）：Codex 官方仓库发布 0.153.0-alpha.5 预发布；页面未披露功能细节。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5)
- **OpenAI Python SDK 3.7.0**（2026-09-02 09:30 +08:00）：OpenAI Python SDK 3.7.0 更新 usage API 与文档，并避免 embeddings 重复检查 NumPy。 [原文](https://github.com/openai/openai-python/releases/tag/v3.7.0)
- **OpenAI Node SDK 7.9.0**（2026-09-02 09:24 +08:00）：OpenAI Node SDK 7.9.0 更新 usage API，阻止 Responses WebSocket 跟随重定向，并修复 CommonJS 兼容问题。 [原文](https://github.com/openai/openai-node/releases/tag/v7.9.0)
- **Codex 0.152.1**（2026-09-02 06:33 +08:00）：Codex 0.152.1 修复 Guardian approval review，使其遵循模型元数据提供的 Node REPL 策略。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.152.1)
- **Codex 0.153.0-alpha.4**（2026-09-02 05:02 +08:00）：Codex 官方仓库发布 0.153.0-alpha.4 预发布；页面未披露功能细节。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.4)
- **How AI-native companies turn workflows into operating capability**（2026-09-02 01:00 +08:00）：OpenAI 介绍 Basis、Clay 与 Exa Labs 如何使用 AI Agent 改进客户入驻、客户管理与开发者集成。 [原文](https://openai.com/index/ai-native-company-workflows)
- **API errors distinguish traffic spikes from temporary model overload**（2026-09-02）：官方 changelog 区分流量突增 429 slow_down 与临时过载 503 server_is_overloaded；有 Retry-After 时遵守等待时长，否则指数退避。 [原文](https://developers.openai.com/api/docs/changelog)

<figure class="source-image">
  <a href="https://openai.com/index/atv-big-air-tour"><img src="https://images.ctfassets.net/kftzwdyauwt9/49oJo0HsEQBLrr5rWLdYHh/6e651b242ddec9857a2563f1efa24c65/A-seo-og.png?w=1600&amp;h=900&amp;fit=fill" alt="ATV Big Air Tour 官方案例图：轮胎纹理特写，两侧为 OpenAI 与 ATV Big Air Tour 标识" loading="lazy" /></a>
  <figcaption><a href="https://openai.com/index/atv-big-air-tour">图片来源：OpenAI ATV Big Air Tour 客户案例</a></figcaption>
</figure>

API changelog 仅提供 9 月 2 日日期，没有时分；这里不编造精确发布时间。ATV 案例介绍每天自动核查活动信息并起草更正邮件、用库存照片生成表格与网站以及人工复核补货建议；案例称库存到补货从两三天缩短为两三小时，不代表普遍效果。

## Love

新增低置信度正面样本：开源计划获邀帖作者表示 Plus 已能完成其工作且未碰限额；Plus 选型帖部分评论肯定 Pro 价值，另有用户肯定 Sol 能力但批评编排成本。见下方原帖；官方客户故事不计入口碑。

## Hate

个体反馈集中在 Plus 限额、短时容量与速度、CLI 授权规则、桌面恢复和朗读入口。具体出处与证据限制见下方观察池；用户所述缺陷未经独立复现，不能认定平台级故障。

## 口碑判断

**褒贬并存、负面问题报告更集中，低置信度**：新增正面体验不足以抵消或量化负面反馈；采样来自主动发帖者，且包括产品建议，不是代表性抽样。不得据此判断全体用户满意度，也不能把用户建议当成官方路线图。

## 对比与替代工具信号

Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH 仍是编码工作流比较对象；本轮没有可支持追平或超过结论的具名评测。新增 DSH/Pi 同账号集成对比已按作者更正保留；Claude/Codex 选型帖仅代表社区偏好。后面三者的完整扫描归开源 Harness 雷达。

## 日期未确认

新增活动预告与 Codex 社区额度帖的公告/发表日期未确认，集中保留在观察池；活动日程与公告发布日期分别处理。API changelog 的具体时分未知，但日期明确。

## 观察池

- **The 5-Hour Limit for Plus Users for Codex is Absoolutely Ridiculous**（2026-09-02 11:12 +08:00；个体反馈/建议）：一名 Plus 用户称 Codex 五小时限额打断既有工作流，并表示若限制持续将考虑替代方案；这是单一用户反馈。 [原帖](https://community.openai.com/t/the-5-hour-limit-for-plus-users-for-codex-is-absoolutely-ridiculous/1394239)
- **Our servers are currently overloaded. Please try again later**（2026-09-02 09:39 +08:00；个体反馈/建议）：一名用户报告并行 Agent 会话出现服务器过载，并认为 GPT-5.6 Sol 输出缓慢；这是未经独立验证的短时个人体验。 [原帖](https://community.openai.com/t/our-servers-are-currently-overloaded-please-try-again-later/1394229)
- **Codex always allow choice on Codex CLI begs improvement**（2026-09-02 10:08 +08:00；个体反馈/建议）：一名用户建议 Codex CLI 的 always allow 支持编辑命令前缀，以提高长命令工作流中的授权复用性。 [原帖](https://community.openai.com/t/codex-always-allow-choice-on-codex-cli-begs-improvement/1394236)
- **Reproducible context loss after crashes and transport failures in recent Codex desktop releases**（2026-09-02 08:24 +08:00；个体反馈/建议）：用户报告桌面端崩溃或传输失败后界面恢复较旧上下文，并提供环境与日志现象；尚无官方确认，不认定平台普遍缺陷。 [原帖](https://community.openai.com/t/reproducible-context-loss-after-crashes-and-transport-failures-in-recent-codex-desktop-releases/1394220)
- **Please Restore One-Tap Read Aloud on iOS**（2026-09-02 22:59 +08:00；个体反馈/建议）：用户称 iOS 朗读入口移到三点菜单增加操作摩擦，希望恢复一键朗读；不是官方变更公告。 [原帖](https://community.openai.com/t/please-restore-one-tap-read-aloud-on-ios/1394374)
- **Feature Request: Information Intake Mode for Voice with Long-Term Cloud Knowledge**（2026-09-02 18:21 +08:00；个体反馈/建议）：用户提出会议静默聆听并关联长期云端知识的功能建议；并非已发布功能。 [原帖](https://community.openai.com/t/feature-request-information-intake-mode-for-voice-with-long-term-cloud-knowledge/1394310)
- **Let chat titles update as the conversation evolves**（2026-09-02 17:12 +08:00；个体反馈/建议）：用户建议对话主题变化后可选地更新标题，保留手动改名；并非官方计划。 [原帖](https://community.openai.com/t/let-chat-titles-update-as-the-conversation-evolves/1394299)
- **Enhancing the User-Friendly Experience Through Agent Knowledge of the Interface and Enhanced Retention**（2026-09-02 12:58 +08:00；个体反馈/建议）：用户认为助手对自身界面知识与项目规则保持不足，建议改进；属于单一用户经验。 [原帖](https://community.openai.com/t/enhancing-the-user-friendly-experience-through-agent-knowledge-of-the-interface-and-enhanced-retention/1394258)


### 本轮新增观察候选

- **Censoring policies for Biology in the name of the 'Trusted Access'**（2026-09-03 09:02 +08:00；观察池）：用户抱怨生物研究任务遇到 Trusted Access 内容限制；帖子回顾八月经历，是新发表的个人反馈，不证明新政策或误拦截已被官方确认。 [原帖或报道](https://community.openai.com/t/censoring-policies-for-biology-in-the-name-of-the-trusted-access/1394469)
- **Windows app and iPhone app do not sync projects**（2026-09-03 04:32 +08:00；观察池）：用户称某项目仍见于手机和网页，却不见于 Windows 桌面；尚未独立复现，不等于数据被删除。 [原帖或报道](https://community.openai.com/t/windows-app-and-iphone-app-do-not-sync-projects/1394439)
- **Clarification Sidebar Feature**（2026-09-03 09:12 +08:00；观察池）：用户建议从消息打开关联的澄清侧栏，避免追问打断主对话；非官方功能公告。 [原帖或报道](https://community.openai.com/t/clarification-sidebar-feature/1394474)
- **Local Codex Projects all gone. All Threads in recents**（2026-09-03 09:50 +08:00；观察池）：用户称桌面更新后本地项目结构消失，但线程仍在最近列表；同类另一帖合并计作一个事件，不把界面缺失认定为底层数据被删除。 [原帖或报道](https://community.openai.com/t/local-codex-projects-all-gone-all-threads-in-recents/1394479)
- **Optional cooldown after repeated abusive messages**（2026-09-03 09:02 +08:00；观察池）：用户建议可选的辱骂消息冷却机制，并强调不应限制正常批评；仅为功能提案。 [原帖或报道](https://community.openai.com/t/optional-cooldown-after-repeated-abusive-messages/1394467)
- **Codex active tasks now stop immediately at usage limit, despite documentation saying they can continue**（2026-09-03 08:09 +08:00；观察池）：用户称达到用量限额后当前任务立即停止，要求澄清文档中可以继续当前轮次的表述；没有官方确认政策变化。 [原帖或报道](https://community.openai.com/t/codex-active-tasks-now-stop-immediately-at-usage-limit-despite-documentation-saying-they-can-continue/1394462)
- **Remove the rolling 5-hour Codex cap**（2026-09-03 08:29 +08:00；观察池）：用户建议取消或可选化滚动五小时上限、保留周额度；工作量和额度消耗仅为个人自述。 [原帖或报道](https://community.openai.com/t/remove-the-rolling-5-hour-codex-cap/1394464)
- **Allow ChatGPT Projects to be sorted alphabetically by project name**（2026-09-03 07:23 +08:00；观察池）：用户建议项目按名称排序、手动排序或分文件夹；非已发布能力。 [原帖或报道](https://community.openai.com/t/allow-chatgpt-projects-to-be-sorted-alphabetically-by-project-name/1394460)
- **Background-mode Responses stuck in "queued" indefinitely (never scheduled), reproducible with minimal requests**（2026-09-03 04:06 +08:00；观察池）：用户报告部分 Responses API 后台请求一直 queued，同时相同环境其他请求成功；提供最小请求描述，尚未独立复现，不能推断全平台故障。 [原帖或报道](https://community.openai.com/t/background-mode-responses-stuck-in-queued-indefinitely-never-scheduled-reproducible-with-minimal-requests/1394434)
- **ChatGPT Studio — A Live, Interactive AI Mixing, Mastering & Learning**（2026-09-03 06:55 +08:00；观察池）：用户提议 ChatGPT Studio 音乐制作、混音和教学环境；名称属于社区构想，不是官方产品。 [原帖或报道](https://community.openai.com/t/chatgpt-studio-a-live-interactive-ai-mixing-mastering-learning/1394459)
- **Issues with how codex calls itself**（2026-09-03 06:18 +08:00；观察池）：用户报告嵌套 Codex 审查迟迟未完成及高额费用，同时肯定 Sol 对其工作的能力；费用和故障未独立验证。 [原帖或报道](https://community.openai.com/t/issues-with-how-codex-calls-itself/1394448)
- **Suspicious activity restriction still active after 2 days**（2026-09-03 06:48 +08:00；观察池）：用户称在 VPN 与多标签使用后账户被限制，保护账户后仍未恢复；仅为个案，不认定触发原因。 [原帖或报道](https://community.openai.com/t/suspicious-activity-restriction-still-active-after-2-days/1394453)
- **Feature Proposal: AI-Mediated Idea Analysis and Human Expertise Routing**（2026-09-03 06:47 +08:00；观察池）：用户提议经同意把想法整理并路由给人类专家评估；非官方路线图。 [原帖或报道](https://community.openai.com/t/feature-proposal-ai-mediated-idea-analysis-and-human-expertise-routing/1394451)
- **Make ChatGPT feel like a real conversation, not a turn-based Q&A**（2026-09-03 05:52 +08:00；观察池）：用户建议文本对话支持多条连续输入、拆分回复和打断；非已发布异步聊天功能。 [原帖或报道](https://community.openai.com/t/make-chatgpt-feel-like-a-real-conversation-not-a-turn-based-q-a/1394445)
- **Got OSS invite, 6 free months of Pro 20x right after paying for plus annual, pain**（2026-09-02；观察池）：用户称获开源计划邀请，并肯定 Plus 已足够完成其工作且未碰限额；获邀和福利为本人陈述，不证明当前普遍权益。 [原帖或报道](https://www.reddit.com/r/ChatGPT/comments/1w4umyb/got_oss_invite_6_free_months_of_pro_20x_right/)
- **Codex or Claude code?**（2026-09-02；观察池）：用户因 Claude Code 额度与预期不匹配询问是否转用 Codex；属于选型需求，不是双盲或可复现评测。 [原帖或报道](https://www.reddit.com/r/ChatGPT/comments/1w50em4/codex_or_claude_code/)
- **ChatGPT Projects should be accessible with Codex instead of being separated**（2026-09-02；观察池）：用户希望移动端 ChatGPT 项目和桌面 Codex 项目更连贯；反映其使用理解和跨端摩擦，不据此判定支持范围。 [原帖或报道](https://www.reddit.com/r/ChatGPT/comments/1w4txg5/chatgpt_projects_should_be_accessible_with_codex/)
- **Codex 25m users, but how many for Claude?**（2026-09-02；观察池）：讨论包含对 Codex 性价比和 Claude 架构能力的不同偏好；标题用户数未独立核实，不作为采用统计。 [原帖或报道](https://www.reddit.com/r/codex/comments/1w5h7vh/codex_25m_users_but_how_many_for_claude/)
- **Thinking of getting chatgpt plus mainly for codex**（2026-09-02；观察池）：学习和审查用量引发选型讨论；评论对 Pro 价值、速度与限额感受分歧，不能据此推断套餐统一表现。 [原帖或报道](https://www.reddit.com/r/codex/comments/1w52mbp/thinking_of_getting_chatgpt_plus_mainly_for_codex/)
- **DSH integration failure report corrected after working Pi comparison**（2026-09-02；观察池）：作者把失败限定到 DSH 0.1.1-rc.2 路径，确认 Pi 0.84.4 的 Sol 多步工具可工作；Responses Lite 请求差异不能证明故障因果，撤回 capability gate 建议。 [原帖或报道](https://github.com/deepseek-ai/deepseek-harness/discussions/5377)
- **OpenAI gets cautious as Anthropic courts customers ahead of IPOs**（2026-09-02；观察池）：可信二手分析讨论 Astra 发布保障与商业沟通；原文打开失败，只核验搜索摘要，不据此断言模型已经普遍上线或 IPO 时间。 [原帖或报道](https://www.axios.com/2026/09/02/openai-anthropic-fable-astra-ipo)


### 14:01 滚动扫描补充

- **Assistance with account issues**（2026-09-03 13:53 +08:00；观察池）：用户求助账户系统标记与支持处理，问题自八月持续；这是新发表的个人求助，身份、损失与平台原因未独立验证。 [原文](https://community.openai.com/t/assistance-with-account-issues/1394512)
- **Add “Lock Task / Protected Archive” to prevent accidental permanent deletion**（2026-09-03 13:21 +08:00；观察池）：用户在迁移与清理归档后称任务疑似被误删，建议任务锁定、回收期和完整导出恢复；非已发布功能。 [原文](https://community.openai.com/t/add-lock-task-protected-archive-to-prevent-accidental-permanent-deletion/1394509)
- **subscline resubmission still in review after known image authorization issue**（2026-09-03 11:59 +08:00；观察池）：开发者称应用图片授权问题导致重新提交后仍在审核；审查队列与延迟原因仅为作者陈述，非官方确认。 [原文](https://community.openai.com/t/subscline-resubmission-still-in-review-after-known-image-authorization-issue/1394502)
- **Feature Request: Secure Chat Transfer Code for Instant Cross-Device Conversation Handoff**（2026-09-03 11:12 +08:00；观察池）：用户提议短期、单次使用的跨设备会话转移码；作者承认已有对话同步，这只是主动交接体验建议。 [原文](https://community.openai.com/t/feature-request-secure-chat-transfer-code-for-instant-cross-device-conversation-handoff/1394492)
- **ChatGPT Business invites randomly failing**（2026-09-03 10:08 +08:00；观察池）：管理员报告 SSO 登录成功后邀请仍待处理且工作区内容加载失败；尚未独立复现，不认定全平台邀请故障。 [原文](https://community.openai.com/t/chatgpt-business-invites-randomly-failing/1394483)
- **ChatGPT Work for marketing teams**（日期未确认；观察池）：官方预告营销团队 Work 入门演示，安排为上海 9 月 4 日 02:00–02:30；公告发布日期未确认，活动尚未发生，不是产品发布。 [原文](https://academy.openai.com/public/clubs/work-users-ynjqu/events/chatgpt-work-for-marketing-teams-ojz856zm5d)
- **AI for Economic Opportunity Demo Day**（日期未确认；观察池）：官方活动页预告经济机会基金项目演示与讨论，安排为上海 9 月 4 日 03:00–05:30；公告发布日期未确认，不能当作今日成果。 [原文](https://forum.openai.com/public/events/openai-academy-x-gitlab-foundation-ai-for-economic-opportunity-demo-day-6brhei2k0t)
- **Codex Meetups: Bengaluru and Stockholm**（日期未确认；观察池）：官方目录列出 9 月 3 日 Bengaluru 与 Stockholm 社区见面会；仅核实活动日期，未核实精确时区时刻或公告发布日期。 [原文](https://developers.openai.com/community/meetups)
- **What the hell is actually consuming our Codex quota?**（日期未确认；观察池）：用户称上下文压缩消耗大量五小时额度，并询问其他人的情况；原帖已打开但本轮未取得精确发表日期，消耗比例及原因未独立核验。 [原文](https://www.reddit.com/r/codex/comments/1w4rusy/what_the_hell_is_actually_consuming_our_codex/)

桌面项目消失的新帖与当日既有项目结构缺失事件合并；作者明确尚不清楚项目记录是删除、隐藏还是迁移或索引失败，不把界面不可见写成数据已丢失。

### 17:01 滚动扫描补充

- **Feature Request: Secure Cross-Application Handoff Between ChatGPT Agents in Excel, PowerPoint, and Word**（2026-09-03 16:31 +08:00；观察池）：用户提议 Excel、PowerPoint 与 Word 内的 Agent 在授权下传递选定数据、上下文和来源，并保留审计记录；这是交接协议构想，非已发布能力。 [原文](https://community.openai.com/t/feature-request-secure-cross-application-handoff-between-chatgpt-agents-in-excel-powerpoint-and-word/1394540)
- **Automatic Chat Organization / Organize All Chats**（2026-09-03 16:06 +08:00；观察池）：用户希望按主题自动整理历史对话、建议项目并先预览再执行；属于功能建议，非官方路线图。 [原文](https://community.openai.com/t/automatic-chat-organization-organize-all-chats/1394538)
- **ChatGPT Household: 3 Plus Accounts for $29.99 - A Consumer Conversion Strategy Beyond ‘Duo’**（2026-09-03 16:02 +08:00；观察池）：用户提出三账户家庭订阅及分档价格构想；标题价格仅为作者建议，不是 OpenAI 已公布套餐。 [原文](https://community.openai.com/t/chatgpt-household-3-plus-accounts-for-29-99-a-consumer-conversion-strategy-beyond-duo/1394535)
- **Windows Codex app-server crashes with 0xC000001D**（2026-09-03 15:28 +08:00；观察池）：用户报告 Windows 11 的 Codex 桌面、CLI 与 VS Code app-server 以 0xC000001D 退出，提供硬件与排查步骤；尚未独立复现，不确定根因或影响范围。 [原文](https://community.openai.com/t/windows-codex-app-server-crashes-with-0xc000001d/1394531)
- **Unacceptable 5-day lockout for a paid $20/month ChatGPT Plus subscription**（2026-09-03 14:45 +08:00；观察池）：Plus 用户称达到额度后需等待五天并要求改善配额或退款选项；具体限制原因和账户情况未经核实，不推断统一限额政策变化。 [原文](https://community.openai.com/t/unacceptable-5-day-lockout-for-a-paid-20-month-chatgpt-plus-subscription/1394519)
- **Please bring back proper navigation for long conversations**（2026-09-03 14:55 +08:00；观察池）：用户称长对话逐段加载使历史导航困难，建议目录、跳转与整段加载选项；这是个人界面体验与建议，非官方公告。 [原文](https://community.openai.com/t/please-bring-back-proper-navigation-for-long-conversations/1394520)
- **Missing access to custom gpts on latest iphone app**（2026-09-03 14:41 +08:00；观察池）：用户称 iPhone 应用中除置顶项外自定义 GPT 入口不见，但网页仍可见；不据此认定 GPT 已删除或功能退役。 [原文](https://community.openai.com/t/missing-access-to-custom-gpts-on-latest-iphone-app/1394518)
- **An integrated live camera mode within voice conversations feature update request**（2026-09-03 14:06 +08:00；观察池）：用户建议语音对话内直接使用实时摄像头并举例视觉问答；帖子只证明功能诉求，不用于判断现有功能覆盖或新发布。 [原文](https://community.openai.com/t/an-integrated-live-camera-mode-within-voice-conversations-feature-update-request/1394514)
- **Usage does not compute right**（2026-09-03 04:27 +08:00；观察池）：用户称升级套餐后周额度消耗与预期不符；截图与使用量属于个人报告，未核实计费错误或原因。 [原文](https://community.openai.com/t/usage-does-not-compute-right/1394437)
- **Chat does what it wants to**（2026-09-02 21:47 +08:00；观察池）：付费用户抱怨指令遵循、记忆和响应速度，并表示取消订阅；为个体负面体验，不能外推总体质量趋势。 [原文](https://community.openai.com/t/chat-does-what-it-wants-to/1394363)
- **Frontier intelligence for cybersecurity**（日期未确认；观察池）：官方页面列出 Daybreak Blue/Red 申请入口及 Codex Security 插件、GitHub 托管持续扫描和 CLI 形态，并预告上海 9 月 4 日 04:00 直播；公告发布日期未确认，不作为今日发布或普遍开放的证据。 [原文](https://openai.com/business/solutions/cybersecurity/)

## 未证实传闻

- **Astra release incoming?**：社区讨论 Astra 是否即将发布；发布时间猜测未经官方证实，不采纳为正式上线消息。 [讨论](https://www.reddit.com/r/codex/comments/1w529nd/astra_release_incoming/)

Reddit 和 GitHub Discussion 仅确认页面日期，未推测精确时分；Axios 原文访问受限。社区新帖中的历史经历按反馈发表日期记录，不当成事件在本轮首次发生。

## 来源链接

- [The 5-Hour Limit for Plus Users for Codex is Absoolutely Ridiculous](https://community.openai.com/t/the-5-hour-limit-for-plus-users-for-codex-is-absoolutely-ridiculous/1394239)
- [Our servers are currently overloaded. Please try again later](https://community.openai.com/t/our-servers-are-currently-overloaded-please-try-again-later/1394229)
- [Codex always allow choice on Codex CLI begs improvement](https://community.openai.com/t/codex-always-allow-choice-on-codex-cli-begs-improvement/1394236)
- [Codex 0.153.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5)
- [OpenAI Python SDK 3.7.0](https://github.com/openai/openai-python/releases/tag/v3.7.0)
- [OpenAI Node SDK 7.9.0](https://github.com/openai/openai-node/releases/tag/v7.9.0)
- [Codex 0.152.1](https://github.com/openai/codex/releases/tag/rust-v0.152.1)
- [Codex 0.153.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.4)
- [How AI-native companies turn workflows into operating capability](https://openai.com/index/ai-native-company-workflows)
- [Codex 0.153.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.6)
- [ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT](https://openai.com/index/atv-big-air-tour)
- [API errors distinguish traffic spikes from temporary model overload](https://developers.openai.com/api/docs/changelog)
- [Reproducible context loss after crashes and transport failures in recent Codex desktop releases](https://community.openai.com/t/reproducible-context-loss-after-crashes-and-transport-failures-in-recent-codex-desktop-releases/1394220)
- [Please Restore One-Tap Read Aloud on iOS](https://community.openai.com/t/please-restore-one-tap-read-aloud-on-ios/1394374)
- [Feature Request: Information Intake Mode for Voice with Long-Term Cloud Knowledge](https://community.openai.com/t/feature-request-information-intake-mode-for-voice-with-long-term-cloud-knowledge/1394310)
- [Let chat titles update as the conversation evolves](https://community.openai.com/t/let-chat-titles-update-as-the-conversation-evolves/1394299)
- [Enhancing the User-Friendly Experience Through Agent Knowledge of the Interface and Enhanced Retention](https://community.openai.com/t/enhancing-the-user-friendly-experience-through-agent-knowledge-of-the-interface-and-enhanced-retention/1394258)

- [Codex 0.153.0](https://github.com/openai/codex/releases/tag/rust-v0.153.0)
- [Codex 0.153.0-alpha.5.1](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5.1)
- [Censoring policies for Biology in the name of the 'Trusted Access'](https://community.openai.com/t/censoring-policies-for-biology-in-the-name-of-the-trusted-access/1394469)
- [Windows app and iPhone app do not sync projects](https://community.openai.com/t/windows-app-and-iphone-app-do-not-sync-projects/1394439)
- [Clarification Sidebar Feature](https://community.openai.com/t/clarification-sidebar-feature/1394474)
- [Local Codex Projects all gone. All Threads in recents](https://community.openai.com/t/local-codex-projects-all-gone-all-threads-in-recents/1394479)
- [Optional cooldown after repeated abusive messages](https://community.openai.com/t/optional-cooldown-after-repeated-abusive-messages/1394467)
- [Codex active tasks now stop immediately at usage limit, despite documentation saying they can continue](https://community.openai.com/t/codex-active-tasks-now-stop-immediately-at-usage-limit-despite-documentation-saying-they-can-continue/1394462)
- [Remove the rolling 5-hour Codex cap](https://community.openai.com/t/remove-the-rolling-5-hour-codex-cap/1394464)
- [Allow ChatGPT Projects to be sorted alphabetically by project name](https://community.openai.com/t/allow-chatgpt-projects-to-be-sorted-alphabetically-by-project-name/1394460)
- [Background-mode Responses stuck in "queued" indefinitely (never scheduled), reproducible with minimal requests](https://community.openai.com/t/background-mode-responses-stuck-in-queued-indefinitely-never-scheduled-reproducible-with-minimal-requests/1394434)
- [ChatGPT Studio — A Live, Interactive AI Mixing, Mastering & Learning](https://community.openai.com/t/chatgpt-studio-a-live-interactive-ai-mixing-mastering-learning/1394459)
- [Issues with how codex calls itself](https://community.openai.com/t/issues-with-how-codex-calls-itself/1394448)
- [Suspicious activity restriction still active after 2 days](https://community.openai.com/t/suspicious-activity-restriction-still-active-after-2-days/1394453)
- [Feature Proposal: AI-Mediated Idea Analysis and Human Expertise Routing](https://community.openai.com/t/feature-proposal-ai-mediated-idea-analysis-and-human-expertise-routing/1394451)
- [Make ChatGPT feel like a real conversation, not a turn-based Q&A](https://community.openai.com/t/make-chatgpt-feel-like-a-real-conversation-not-a-turn-based-q-a/1394445)
- [Got OSS invite, 6 free months of Pro 20x right after paying for plus annual, pain](https://www.reddit.com/r/ChatGPT/comments/1w4umyb/got_oss_invite_6_free_months_of_pro_20x_right/)
- [Codex or Claude code?](https://www.reddit.com/r/ChatGPT/comments/1w50em4/codex_or_claude_code/)
- [ChatGPT Projects should be accessible with Codex instead of being separated](https://www.reddit.com/r/ChatGPT/comments/1w4txg5/chatgpt_projects_should_be_accessible_with_codex/)
- [Astra release incoming?](https://www.reddit.com/r/codex/comments/1w529nd/astra_release_incoming/)
- [Codex 25m users, but how many for Claude?](https://www.reddit.com/r/codex/comments/1w5h7vh/codex_25m_users_but_how_many_for_claude/)
- [Thinking of getting chatgpt plus mainly for codex](https://www.reddit.com/r/codex/comments/1w52mbp/thinking_of_getting_chatgpt_plus_mainly_for_codex/)
- [DSH integration failure report corrected after working Pi comparison](https://github.com/deepseek-ai/deepseek-harness/discussions/5377)
- [OpenAI gets cautious as Anthropic courts customers ahead of IPOs](https://www.axios.com/2026/09/02/openai-anthropic-fable-astra-ipo)

- [ChatGPT Work Mode High Error Rates](https://status.openai.com/incidents/avwnvk1f)
- [Assistance with account issues](https://community.openai.com/t/assistance-with-account-issues/1394512)
- [Add “Lock Task / Protected Archive” to prevent accidental permanent deletion](https://community.openai.com/t/add-lock-task-protected-archive-to-prevent-accidental-permanent-deletion/1394509)
- [subscline resubmission still in review after known image authorization issue](https://community.openai.com/t/subscline-resubmission-still-in-review-after-known-image-authorization-issue/1394502)
- [Feature Request: Secure Chat Transfer Code for Instant Cross-Device Conversation Handoff](https://community.openai.com/t/feature-request-secure-chat-transfer-code-for-instant-cross-device-conversation-handoff/1394492)
- [ChatGPT Business invites randomly failing](https://community.openai.com/t/chatgpt-business-invites-randomly-failing/1394483)
- [ChatGPT Work for marketing teams](https://academy.openai.com/public/clubs/work-users-ynjqu/events/chatgpt-work-for-marketing-teams-ojz856zm5d)
- [AI for Economic Opportunity Demo Day](https://forum.openai.com/public/events/openai-academy-x-gitlab-foundation-ai-for-economic-opportunity-demo-day-6brhei2k0t)
- [Codex Meetups: Bengaluru and Stockholm](https://developers.openai.com/community/meetups)
- [What the hell is actually consuming our Codex quota?](https://www.reddit.com/r/codex/comments/1w4rusy/what_the_hell_is_actually_consuming_our_codex/)

## 采集状态

- 已检查：OpenAI News、ChatGPT release notes、API changelog、模型与弃用文档；Codex、Python/Node SDK、Agents SDK Python/TypeScript 五个官方 GitHub release API。Codex 最新仍为 0.153.0，API changelog 最新仍为 9 月 2 日，无新增 SDK 发布。
- Tier 1/2/3：VS Code/JetBrains、远程/PR Agent、agentic mode、Agent 构建产品、Responses、Realtime、GPT/reasoning/Codex；浏览器/Operator、桌面、GPTs/Store、Canvas、Sora、Image/DALL·E、Voice、MCP，以及企业、Business、Edu、Gov、科学与安全定向搜索；新增网络安全解决方案原文。
- 社区：Developer Community latest.json 与 12 个候选原文；Reddit r/OpenAI、r/ChatGPT、r/ChatGPTCoding、r/singularity、r/codex、Hacker News、官方 X 与 YouTube 日期检索。没有可靠新样本不等于没有动态。
- 失败与限制：两个 Trusted Access hardware-key 帖子正文已被作者删除，无法核实；Reddit/HN/X/YouTube 主要命中较旧结果，未作为今天新反馈重复加入。保留此前 Axios 原文访问失败限制。本轮未发生 TLS 或安全校验失败。
- 候选口径：此前 51 个来源与本轮 13 个候选合计 64；新增 10 条社区原帖和 1 条日期未确认官方页面，两个删除帖不据标题推测内容；当天累计 62 个来源，原有来源全部保留。二次补搜：否（来源非零，仍扩展了定向搜索）。
- 配图：ATV 官方原文正常打开；原有图片公开 URL 本轮返回 HTTP 200 image/png。日期未确认网络安全页、活动与社区观察均不作为首页图片。

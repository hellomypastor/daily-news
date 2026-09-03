---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-03T00:00:00+08:00"
updatedAt: "2026-09-03T11:00:48+08:00"
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
  - "功能建议"
  - "观察池"
  - "可靠性"
  - "可信二手来源"
  - "客户案例"
  - "容量"
  - "社区反馈"
  - "未证实传闻"
  - "稳定版"
  - "限额"
  - "修复版"
  - "预发布"
  - "Agent"
  - "AI Adoption"
  - "API"
  - "ChatGPT"
  - "ChatGPT Work"
  - "Codex"
  - "Codex CLI"
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

本轮发现窗口：**2026-09-02 10:05 至 2026-09-03 10:05（Asia/Shanghai）**。当天累积保留此前全部 17 个来源，即使已滑出本轮窗口。本轮重点新增 Codex 0.153.0 稳定版与 alpha.5.1；当天官方主线还包括 Codex 0.152.1 修复与三个 alpha 版本、Python/Node SDK 更新、API 错误码细分，以及 ChatGPT Work 的 ATV 客户案例。客户效率数字仅按官方案例归因，社区问题均按个体反馈处理。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 状态与证据 |
| --- | --- |
| Codex CLI | **新增 0.153.0 稳定版与 alpha.5.1**，插件管理、恢复与上下文实验配置见下方；累计保留 0.152.1 修复 Guardian 对模型元数据 Node REPL 策略的遵循；0.153.0-alpha.4/.5/.6 仅版本信号，不推断功能。 |
| VS Code / JetBrains 集成 | 无窗口内独立新增。 |
| Codex 云端 / 远程任务 / PR Agent | 无窗口内独立新增。 |
| ChatGPT agentic mode / Work | ATV 案例展示定时信息核查、库存与营销工作流；不是新产品发布。 |
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
| GPTs / GPT Store；Canvas | 无新增。 |
| Sora / 视频；GPT Image / DALL·E | 无窗口内可核实新增；不重复较旧停用背景。 |
| Voice | 无官方新增；iOS 朗读入口反馈与会议静默聆听建议见观察池。 |
| Connectors / MCP | release notes 最新仍是 9 月 1 日医疗插件，本页不跨日重复旧来源。 |

## Tier 3：企业、教育、安全与行业

ATV 与 AI-native 工作流为本窗口官方企业采用案例。Enterprise、Business、Edu、Gov、Science 与安全方向未发现其他可核实的窗口内独立公告，不将旧 Astra / 医疗新闻重新包装。

## 官方更新（最新在前）

- **Codex 0.153.0**（2026-09-03 09:37 +08:00）：新增 Vim 撤销/重做、远程 marketplace 插件管理、可关闭自动 recap、提前限额提醒；改进断连恢复、Guardian 历史保持与 MCP 账号审批作用域，并提供默认关闭的上下文管理实验配置。 [官方 release](https://github.com/openai/codex/releases/tag/rust-v0.153.0)
- **Codex 0.153.0-alpha.5.1**（2026-09-03 08:41 +08:00）：官方预发布，仅有版本标识，未披露功能清单。 [官方 release](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5.1)

0.153.0 的上下文管理实验默认关闭，仅面向符合条件、使用 Codex 后端的 ChatGPT Plus、Pro、Pro Lite 会话；API key、自定义 provider 和临时结构化线程不包含在内。远程 marketplace 支持列表、安装与移除插件；MCP 已记住的工具批准绑定到选定应用账号。

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

未新增需单列的日期未知新闻；API changelog 的具体时分未知，但日期明确。

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

## 采集状态

- 已检查：OpenAI News / Research / Product RSS，API changelog、模型与弃用文档，ChatGPT、Enterprise/Edu 和 Business release notes 检索，Codex / Agents SDK Python/TypeScript / Python/Node SDK releases；VS Code/JetBrains、云端任务、PR Agent、Work、Responses、Realtime；Tier 2 浏览器/Operator、桌面、GPTs/Store、Canvas、Sora/视频、Image/DALL·E、Voice、MCP；Tier 3 企业、教育、政府、科学、安全。
- 社区：Developer Community 最新主题和原帖，Reddit r/OpenAI、r/ChatGPT、r/ChatGPTCoding、r/singularity 与 r/codex；Hacker News、X 官方账号、YouTube/播客检索。
- 限制：X、Hacker News、YouTube 未检出可信本轮新样本，不代表无动态；Axios 原文打开失败，以搜索摘要保留在观察池。前轮 OpenAI 图片 HTTP 403 本轮已恢复。
- 累计候选统计 **42**（既有 17 个来源加本轮 25 个候选，去重前口径）；本轮初始相关候选 **25**：2 个 release、15 篇论坛帖、6 篇 Reddit、1 篇 DSH Discussion、1 篇 Axios；桌面项目两帖合并一个事件，新增 **24** 个来源；当天累计 **41** 个来源，原有 17 个全部保留。二次补搜：**否**（来源不为 0）。
- 配图：已核验 ATV 官方原文 OpenGraph 图，公开 URL 返回 HTTP 200 image/png，并人工查看 1600×900 图片。

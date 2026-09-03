---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-03T00:00:00+08:00"
updatedAt: "2026-09-03T00:33:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "The 5-Hour Limit for Plus Users for Codex is Absoolutely Ridiculous"
featuredUrl: "https://community.openai.com/t/the-5-hour-limit-for-plus-users-for-codex-is-absoolutely-ridiculous/1394239"
featuredSummary: "一名 Plus 用户称 Codex 五小时限额打断既有工作流，并表示若限制持续将考虑替代方案；这是单一用户反馈。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-02 11:12 +08:00"
featuredTags: ["Codex","社区反馈","限额"]
tags:
  - "安全"
  - "功能建议"
  - "观察池"
  - "可靠性"
  - "客户案例"
  - "容量"
  - "社区反馈"
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
  - "Enterprise"
  - "iOS"
  - "Node SDK"
  - "OpenAI"
  - "Python SDK"
  - "Responses API"
  - "UX"
  - "Voice"
---

## 今日概览

采集窗口：**2026-09-02 00:33 至 2026-09-03 00:33（Asia/Shanghai）**。这是新一天的五篇固定主题页之一，不携带窗口外较旧背景。官方主线包括 Codex 0.152.1 修复与三个 alpha 版本、Python/Node SDK 更新、API 错误码细分，以及 ChatGPT Work 的 ATV 客户案例。客户效率数字仅按官方案例归因，社区问题均按个体反馈处理。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 状态与证据 |
| --- | --- |
| Codex CLI | 0.152.1 修复 Guardian 对模型元数据 Node REPL 策略的遵循；0.153.0-alpha.4/.5/.6 仅版本信号，不推断功能。 |
| VS Code / JetBrains 集成 | 无窗口内独立新增。 |
| Codex 云端 / 远程任务 / PR Agent | 无窗口内独立新增。 |
| ChatGPT agentic mode / Work | ATV 案例展示定时信息核查、库存与营销工作流；不是新产品发布。 |
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

- **ATV Big Air Tour turned 3 days of work into 3 hours with ChatGPT**（2026-09-02 20:00 +08:00）：官方客户案例介绍 ChatGPT Work 定时检查活动信息、从商品照片整理库存并生成补货建议；效率数字为客户案例自述，不是独立评测。 [原文](https://openai.com/index/atv-big-air-tour)
- **Codex 0.153.0-alpha.6**（2026-09-02 19:26 +08:00）：Codex 官方发布新预发布版本；release 只有版本标识，没有披露功能变化。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.6)
- **Codex 0.153.0-alpha.5**（2026-09-02 11:05 +08:00）：Codex 官方仓库发布 0.153.0-alpha.5 预发布；页面未披露功能细节。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.5)
- **OpenAI Python SDK 3.7.0**（2026-09-02 09:30 +08:00）：OpenAI Python SDK 3.7.0 更新 usage API 与文档，并避免 embeddings 重复检查 NumPy。 [原文](https://github.com/openai/openai-python/releases/tag/v3.7.0)
- **OpenAI Node SDK 7.9.0**（2026-09-02 09:24 +08:00）：OpenAI Node SDK 7.9.0 更新 usage API，阻止 Responses WebSocket 跟随重定向，并修复 CommonJS 兼容问题。 [原文](https://github.com/openai/openai-node/releases/tag/v7.9.0)
- **Codex 0.152.1**（2026-09-02 06:33 +08:00）：Codex 0.152.1 修复 Guardian approval review，使其遵循模型元数据提供的 Node REPL 策略。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.152.1)
- **Codex 0.153.0-alpha.4**（2026-09-02 05:02 +08:00）：Codex 官方仓库发布 0.153.0-alpha.4 预发布；页面未披露功能细节。 [原文](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.4)
- **How AI-native companies turn workflows into operating capability**（2026-09-02 01:00 +08:00）：OpenAI 介绍 Basis、Clay 与 Exa Labs 如何使用 AI Agent 改进客户入驻、客户管理与开发者集成。 [原文](https://openai.com/index/ai-native-company-workflows)
- **API errors distinguish traffic spikes from temporary model overload**（2026-09-02）：官方 changelog 区分流量突增 429 slow_down 与临时过载 503 server_is_overloaded；有 Retry-After 时遵守等待时长，否则指数退避。 [原文](https://developers.openai.com/api/docs/changelog)

API changelog 仅提供 9 月 2 日日期，没有时分；这里不编造精确发布时间。ATV 案例介绍每天自动核查活动信息并起草更正邮件、用库存照片生成表格与网站以及人工复核补货建议；案例称库存到补货从两三天缩短为两三小时，不代表普遍效果。

## Love

未得到可定性的独立正面样本；官方客户故事不计入社区正面口碑。

## Hate

个体反馈集中在 Plus 限额、短时容量与速度、CLI 授权规则、桌面恢复和朗读入口。具体出处与证据限制见下方观察池；用户所述缺陷未经独立复现，不能认定平台级故障。

## 口碑判断

**偏负面，低置信度**：采样来自主动发帖者，且包括产品建议，不是代表性抽样。不得据此判断全体用户满意度，也不能把用户建议当成官方路线图。

## 对比与替代工具信号

Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH 仍是编码工作流比较对象；本轮没有可支持追平或超过结论的具名评测。后面三者的完整扫描归开源 Harness 雷达。

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

## 采集状态

- 已检查：OpenAI News / Research / Product RSS 与原文，API changelog、模型与弃用文档检索，ChatGPT 和 Enterprise/Edu release notes，Codex / Agents SDK / Python / Node releases，Developer Community，以及 Reddit、Hacker News、X、YouTube/播客公开检索。
- 失败与限制：OpenAI 原文直连 HTML 图片请求 403，文本已通过网页工具读取；社交平台检索没有得到可靠新样本，不等于不存在动态。
- 初始候选 **20**；保留 **17** 个来源；同事件重复朗读建议合并，旧窗口背景不带入；二次补搜 **否**（最终来源不为 0）。
- 配图：未配置。原文图地址未可靠核验，不使用头像、logo 或观察池配图。

---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-21T00:00:00+08:00"
updatedAt: "2026-08-21T07:51:05+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "ChatGPT — Release Notes: August 20, 2026"
featuredUrl: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
featuredSummary: "官方集中发布 Sites URL、Apple Messages、Computer History、Codex chat sharing 与 pinned chats 更新。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-20（精确时间未列）"
featuredTags: ["ChatGPT","Codex","Official"]
tags:
  - "未证实"
  - "主分支"
  - "Agent"
  - "API"
  - "Apple Messages"
  - "Assistants API"
  - "Changelog"
  - "ChatGPT"
  - "ChatGPT Sites"
  - "CLI"
  - "Codex"
  - "Computer History"
  - "Deprecation"
  - "Desktop"
  - "Go"
  - "Hate"
  - "Image"
  - "Incident"
  - "Login"
  - "Love"
  - "Luna"
  - "Models"
  - "No Update"
  - "Node.js"
  - "Official"
  - "OpenAI"
  - "Performance"
  - "Plugins"
  - "Prerelease"
  - "Projects"
  - "Python"
  - "Release"
  - "Responses"
  - "SDK"
  - "Security"
  - "Sentiment"
  - "Sharing"
  - "Thinking"
  - "Usage"
  - "Webhooks"
  - "Workflow"
---

## 今日概览

扫描窗口：2026-08-20 07:51:05 至 2026-08-21 07:51:05（Asia/Shanghai）。本轮最重要的产品变化来自 [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)：Plus / Pro 的 ChatGPT Sites 可更换托管 URL，Apple silicon Mac 上的 ChatGPT 桌面端新增 Apple Messages plugin，Computer History 扩展至 EEA、瑞士和英国，Codex chat 可生成只读快照链接，桌面端与 iOS 的 pinned chats 开始同步。编码侧，[Codex 0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0) 已由预发布序列转为稳定版；其 release 页面仅给出版本级说明，因此本文不推断未列出的功能归属。

可靠性方面，OpenAI 状态页记录了三起已恢复事件：登录与注册故障、ChatGPT Thinking / 图像生成错误，以及 Codex API 鉴权错误。社区口碑的主要负向信号是多帖集中声称 Codex 周额度消耗明显加快；这些帖子有截图或自测叙述，但官方尚未确认额度政策变化或统一根因。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 过去 24 小时状态 | 证据判断 |
|---|---|---|
| Codex CLI | [0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0) 于 05:04 发布为稳定版；[0.149.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.7) 与 [0.150.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.1) 分别是此前及后续预发布。 | 稳定版确认；预发布不等于正式交付 |
| VS Code / JetBrains | 未发现独立正式发布；Codex chat sharing 与 pinned chats 同步属于跨桌面端能力。 | 无 IDE 专项新增 |
| Codex cloud / remote / PR agents | [只读 Codex chat 快照](https://learn.chatgpt.com/docs/use-chatgpt)允许任何持链接者查看静态快照；不包含 tool calls 或 shell 输入输出，但官方提醒仍需人工检查路径、diff、图片等敏感信息。 | 官方功能更新 |
| ChatGPT agentic / Work Mode | Apple Messages plugin 可在 Apple silicon Mac 上读取、搜索并准备或发送 Messages 内容，发送前默认要求确认收件人和消息；详见[插件文档](https://learn.chatgpt.com/docs/plugins?surface=app)。 | 官方功能更新 |
| 当前官方 agent-building 产品 | 未发现 Agent Builder、Apps SDK 或现行 agent-building 产品的新版本公告。 | 无新增 |
| Responses API | [API changelog](https://developers.openai.com/api/docs/changelog)未列窗口内平台级条目；Node 主分支仅出现长文本累积性能与大流式响应修补，尚非 release。 | 无平台级新增 |
| Agents SDK Python / TypeScript | 未核实到窗口内正式 release；GitHub 批量复扫后触发限流，已在失败来源中记录。 | 无确认新增 |
| Assistants API | 官方 [deep dive](https://platform.openai.com/docs/assistants/deep-dive/run-lifecycle)仍标注 2026-08-26 shutdown；窗口内未发现新的迁移公告。 | 既有期限，非 24 小时新增 |
| Realtime API | 未见官方 changelog 或 SDK 正式版本新增。 | 无新增 |
| 当前 GPT / reasoning / Codex 模型家族 | [官方 model guidance](https://developers.openai.com/api/docs/guides/latest-model)仍是命名与可用性基准；本窗口未发现新模型 release。 | 无新增 |

## Tier 2：消费端与多模态

| 方向 | 状态 |
|---|---|
| Browser / Operator 类能力 | 无正式新增。 |
| Desktop apps | Apple Messages plugin、Computer History 区域扩展、pinned chats 跨桌面端与 iOS 同步均已进入 8 月 20 日 release notes。 |
| GPTs / GPT Store / Canvas | 无新增。 |
| Sora / video | 无新增。 |
| GPT Image / DALL·E | 无产品发布；官方记录一次 Thinking 与图像生成共同受影响的已恢复事故。 |
| Voice | 无新增。 |
| Connectors / MCP | Apple Messages plugin 是本轮明确新增；其他 connector / MCP 未见正式更新。 |
| Sites | Plus / Pro Site 所有者可通过[管理文档](https://help.openai.com/en/articles/20001339)更换 ChatGPT 托管 URL，旧地址会重定向且无需重新部署。 |

## Tier 3：企业、教育、政府、安全与行业

- 企业 / Work：Apple Messages plugin 同时适用于 Codex 与 ChatGPT Work；官方默认在发送前要求用户批准消息和收件人。
- 区域与隐私：Computer History 现向 EEA、瑞士、英国的 Pro 用户开放，仍默认关闭并要求开启 Memories；详见[官方说明](https://learn.chatgpt.com/docs/customization/computer-history)。
- 协作：pinned chats 可在同一 Codex 账户的桌面端与 iOS 间同步，Android 尚未包含；[projects 与 chats 文档](https://learn.chatgpt.com/docs/projects?surface=app)是当前使用说明。
- Enterprise、Business、Edu、Gov、Science 与安全产品未发现窗口内新的独立公告。

## 官方与原始更新（由新到旧）

1. 06:06，Codex 发布 [0.150.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.1)，标为预发布，不能写成稳定版。
2. 05:04，Codex [0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0) 发布为稳定版；release 页面只有版本级说明。
3. 02:29，Codex [0.149.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.7) 发布，随后已被稳定版取代。
4. 8 月 20 日，OpenAI [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)集中公布 Sites URL 更换、Apple Messages plugin、Computer History 区域扩展、Codex chat 快照与 pinned chats 同步。
5. 17:52，官方确认 [Codex API 鉴权错误](https://status.openai.com/incidents/01M0G1RZER839AZXWMYKSZF3GR)完全恢复；事件 16:58 被识别，17:15 进入监控。
6. 16:51，官方确认 [ChatGPT Thinking mode 与图像生成错误](https://status.openai.com/incidents/01M0FQAR3NNH3ANVTQMBRD47DC)完全恢复；事件 13:56 起调查，14:53 已实施缓解。
7. 00:54，官方确认 [ChatGPT 登录与注册故障](https://status.openai.com/incidents/01M0E7K87VJNMGW0QTMHPEQQ39)恢复；该事件开始于 00:02，属于本窗口早段。
8. SDK 主分支出现多项尚未 release 的修补：Python [保持自定义 TLS hostname](https://github.com/openai/openai-python/commit/aa5fbc401f179fc515905d84623718c2b66ec653)；Node [限制事件流并校验 streamed item identity](https://github.com/openai/openai-node/commit/7df29a98c69f1dd14300737e42cc6f22965b6b73)与[避免长文本累积出现二次复杂度](https://github.com/openai/openai-node/commit/95628cee9b4d6869f1b0b54e323248eed5bd59c5)；Go [校验带前缀 webhook signing secret](https://github.com/openai/openai-go/commit/c88e19a1c266ef8fbc140969c862c1eb635142d8)。这些提交均不能视为已交付版本。

## Love

- 社区有开发者整理 [Codex 使用技巧](https://www.reddit.com/r/codex/comments/1vtoduv/basic_tips_and_tricks/)，建议以 ChatGPT Chat 做规划、用 ADR 减少上下文搜索，并按任务拆分 subagents；这是个人工作流经验，不是官方最佳实践或效果保证。

## Hate

- [“The s**ttiest update”](https://www.reddit.com/r/codex/comments/1vtdb8e/the_sttiest_update/)与[“Is the Usage limit nerfed?”](https://www.reddit.com/r/codex/comments/1vtiymv/is_the_usage_limit_nerfed/)两帖都声称重置后额度在少量 prompt 或数小时内快速耗尽；前者评论也出现相近体验，后者给出个人 token / 项目叙述。
- 另一帖以 Luna Max 的个人测量声称每小时额度消耗从约 1% 升至 8–9%，见[原帖](https://www.reddit.com/r/codex/comments/1vtlko7/youre_such_evil_geniuses_do_you_really_think_were/)。这些均为用户自报，套餐、模型、reasoning effort、上下文和 auto-review 等变量不一致，不能据此确认官方已下调额度。

## 口碑判断

- 编码 / Agent：**负向，置信度中等**。负向依据是同日多个高互动帖集中报告额度消耗异常，且 16:58–17:52 确有 Codex API 鉴权事故；但两者不能直接建立因果，额度政策变化仍未获官方确认。
- ChatGPT / Work：**中性，置信度中等**。五项正式功能更新提供明确正向产品信号，但 Thinking / 图像生成与登录分别发生已恢复事故。
- API / SDK：**中性，置信度中高**。无平台级新版本，主分支持续修补安全与流式边界；Codex API 鉴权事故已恢复。

## 比较与迁移提示

- Codex 0.149.0 已是稳定版，0.150.0-alpha.1 仍是预发布；自动更新、企业部署或固定版本时应区分两条通道。
- 分享 Codex chat 快照前仍需人工复核：官方只保证静态快照不包含 tool calls 或 shell 输入输出，并会处理已知 secret patterns，但路径、diff、图片和正文仍可能泄露敏感信息。
- Assistants API 既有关闭日临近；新集成继续以 Responses API 与 Agents SDK 为迁移方向，并以官方 deep dive 为准。
- 额度争议目前缺少统一基线。跨 Codex 与 Claude / Cursor 比较时，应同时记录套餐、模型、reasoning effort、会话长度、自动 review 和工具调用，避免把单次百分比变化当成模型价格或配额事实。

## 日期未确认

- ChatGPT Release Notes 标注 8 月 20 日，但未展示精确发布时间；页面在本轮截止前显示近期更新，故收录为当日官方更新，无法进一步精确到小时。
- Sites、Apple Messages plugin、Computer History、chat sharing 与 pinned chats 的独立文档没有逐项展示精确上线时刻；可用范围以 release notes 为准。

## 观察池

- Codex 额度消耗投诉形成同日聚集信号，但官方状态页只确认 API authentication errors，没有确认额度下调、计费异常或与 auto-review 的统一关联。后续应继续观察官方定价 / usage 文档、状态页与可复现 telemetry。
- Codex 主分支还出现 app signature 校验、unified exec、MCP event streaming、managed developer instructions 和 sandbox policy 等大量提交；由于 0.149.0 release 页面未列明对应关系，本文没有把它们归入稳定版功能。
- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)与 API changelog 在截止时未列出可与上述 release notes 分离的 8 月 20 日新增。

## 来源链接

正文各条标题已直接链接官方原文、GitHub 原页或社区原帖；同页 URL 已去重。官方公告与状态页用于事实，社区帖子只用于口碑和观察信号。

## 采集状态

- 已检查来源：OpenAI Release Notes / Help / Learn、ChatGPT & Codex changelog、API changelog、model guidance、Assistants migration、Status、Newsroom、8 个官方 GitHub 仓库、Developer Community、Reddit、HN、X 与中英文新闻检索。
- 失败来源：OpenAI News 普通 curl 403；GitHub 未认证 API 批量扫描后 403 rate limit；Reddit JSON / RSS 与 X 正文提取不稳定；JetBrains 与 YouTube 未见可核实新增。均已改用可访问官方原页、网页索引或公开帖子，并降低社区证据等级。
- 初始候选数：86；保留来源数：24。
- 二次补搜：否（最终来源不为 0）。

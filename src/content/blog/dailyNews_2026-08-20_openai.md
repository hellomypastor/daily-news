---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-20T00:00:00+08:00"
updatedAt: "2026-08-20T01:20:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "How to Turn a Business Question Into a Strategy Deck With ChatGPT Work | Tutorial"
featuredUrl: "https://www.youtube.com/watch?v=XjSJ6ybS9I8"
featuredSummary: "OpenAI 官方教程演示用 ChatGPT Work 汇总研究、客户数据与策略材料，形成并审核策略演示。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-19 03:05 +08:00"
featuredTags: ["ChatGPT Work","Enterprise","Tutorial"]
featuredImage: "https://i.ytimg.com/vi/XjSJ6ybS9I8/maxresdefault.jpg"
featuredImageAlt: "OpenAI 官方 ChatGPT Work 策略演示视频缩略图"
featuredImageCaption: "图片来源：OpenAI 官方 YouTube 频道"
tags:
  - "观察池"
  - "日期未确认"
  - "无新增"
  - "主分支"
  - "Access"
  - "Ads"
  - "Agent"
  - "Agents SDK"
  - "API"
  - "Apps SDK"
  - "Assistants API"
  - "Async"
  - "Azure"
  - "Batch API"
  - "Billing"
  - "Browser"
  - "Bug"
  - "Business"
  - "Capacity"
  - "Changelog"
  - "ChatGPT"
  - "ChatGPT Business"
  - "ChatGPT Work"
  - "CLI"
  - "Cloud"
  - "Codex"
  - "Codex Security"
  - "Community"
  - "Compaction"
  - "Compatibility"
  - "Cyber"
  - "Daybreak"
  - "Deprecation"
  - "Documentation"
  - "Enterprise"
  - "Exec"
  - "Gov"
  - "GPT Image"
  - "GPT-5.6"
  - "Hate"
  - "Love"
  - "Migration"
  - "Models"
  - "National Security"
  - "Node.js"
  - "Official"
  - "OpenAI"
  - "Oversight"
  - "Performance"
  - "Publishing"
  - "Python"
  - "Realtime"
  - "Realtime API"
  - "Release"
  - "Release Notes"
  - "Reliability"
  - "Replit"
  - "SDK"
  - "Security"
  - "Shopify"
  - "Sites"
  - "Summary"
  - "Tutorial"
  - "TypeScript"
  - "Usage"
  - "Usage Limits"
  - "Voice"
  - "Web"
  - "Windows"
---

## 今日概览

扫描窗口：2026-08-19 01:20:00 至 2026-08-20 01:20:00（Asia/Shanghai）。窗口内最明确的产品与开发者动态有三组：OpenAI 发布 [Replit × GPT-5.6 Luna 案例](https://openai.com/index/replit)，说明 Replit Free Mode 由 Luna 驱动、复杂任务可路由到 Sol；Python SDK 连续发布 [v3.3.0](https://github.com/openai/openai-python/releases/tag/v3.3.0) 与安全依赖修补版 [v3.3.1](https://github.com/openai/openai-python/releases/tag/v3.3.1)；Agents SDK 则分别交付 Python [v0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0) 和 TypeScript [v0.17.0](https://github.com/openai/openai-agents-js/releases/tag/v0.17.0)，重点都包含 guardrail、replay/session state 与 provider 配置的 fail-closed 行为。

Codex CLI 的正式稳定增量仍是 [0.148.0](https://github.com/openai/codex/releases/tag/rust-v0.148.0)，本轮后段只见主分支提交，不应写成已发布功能。ChatGPT / Codex、API 与 ChatGPT Release Notes 的官方更新页在截止时均没有 8 月 19 日新条目。社区侧出现两个相互呼应、但未获状态页确认的 Work Mode 故障样本；因此正文将其列入观察池，而不是宣称平台事故。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 过去 24 小时状态 | 证据判断 |
|---|---|---|
| Codex CLI | [0.148.0](https://github.com/openai/codex/releases/tag/rust-v0.148.0) 正式加入 TUI 导出、`codex exec fork`、会话归档/恢复、线程用量估算、Bedrock provider、异步 hooks 与 MCP tool hooks；[异步用户消息解除旧 feature gate](https://github.com/openai/codex/commit/f5a3dc55404ddc066a4e4a65602fee166ecc46b3)、[统一执行输出改用 `mem::take`](https://github.com/openai/codex/commit/18937b226524164546e7328a2ed47c0d52536e0a)、[turn summary 按存储类型还原](https://github.com/openai/codex/commit/db675cc005db424855319cb1f86cc5c89700318d) 均仅在主分支。 | release 高置信；commit 不等于交付 |
| VS Code / JetBrains | 未发现独立正式发布；社区仍有 Windows browser plugin 报告，见观察池。 | 无新增 |
| Codex cloud / remote / PR agents | 未见 changelog 新条目；Codex Security cloud 有单用户 409 自报。 | 无官方新增 |
| ChatGPT agentic / Work Mode | 官方发布了 [策略演示教程](https://www.youtube.com/watch?v=XjSJ6ybS9I8)；两名用户分别报告卡在 Thinking 与 Network error。 | 教程确认；故障低置信 |
| 当前官方 agent-building 产品 | [Replit 案例](https://openai.com/index/replit)确认 Luna / Sol 在 Replit Agent 路由中的实际使用；没有新的 Agent Builder / Apps SDK 正式版本公告。 | 官方案例 |
| Responses API | 官方 [API changelog](https://developers.openai.com/api/docs/changelog)没有窗口内条目；SDK 与 Agents SDK 的 Responses 终态、流式边界修补见下文。 | 无平台级新增 |
| Agents SDK Python | [v0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0) 阻止被 guardrail 拒绝的工具输出进入 replay/session state，并拒绝 failed/incomplete Responses 终态。 | 正式 release |
| Agents SDK TypeScript | [v0.17.0](https://github.com/openai/openai-agents-js/releases/tag/v0.17.0) 对不明确的 output-bearing checkpoint fail closed，清理被拒工具输出，并拒绝与显式 client 冲突的 provider 参数。 | 正式 release |
| Assistants API | 官方 [deprecated deep dive](https://platform.openai.com/docs/assistants/deep-dive/run-lifecycle)仍写明 2026-08-26 shutdown；本窗口无新迁移公告。 | 既有期限，非 24h 新消息 |
| Realtime API | 未见官方 changelog 新条目；Node SDK 主分支新增 [Realtime WebSocket 错误原因脱敏](https://github.com/openai/openai-node/commit/e7a1a440450caa4db760bfa402c60ed39e3390d5)，社区有单用户 allowlist 401 报告。 | commit + 观察信号 |
| 当前 GPT / reasoning / Codex 模型家族 | [官方 model guidance](https://developers.openai.com/api/docs/guides/latest-model)确认当前 GPT-5.6 Sol / Terra / Luna 命名；本窗口没有新模型 release。 | 当前目录核验，无新增 |

<figure class="source-image">
  <a href="https://www.youtube.com/watch?v=XjSJ6ybS9I8"><img src="https://i.ytimg.com/vi/XjSJ6ybS9I8/maxresdefault.jpg" alt="OpenAI 官方 ChatGPT Work 策略演示视频缩略图" loading="lazy" /></a>
  <figcaption><a href="https://www.youtube.com/watch?v=XjSJ6ybS9I8">图片来源：OpenAI 官方 YouTube 频道</a></figcaption>
</figure>

## Tier 2：消费端与多模态

| 方向 | 状态 |
|---|---|
| Browser / Operator 类能力 | 无正式新增；Windows Codex browser plugin 有未确认回归样本。 |
| Desktop apps | 无正式新增；Work Mode 与归档错误进入观察池。 |
| GPTs / GPT Store / Canvas | 无新增。 |
| Sora / video | 无新增。 |
| GPT Image / DALL·E | 无正式新增；Batch image edits 有单用户 401 报告。 |
| Voice | 无正式新增；社区对语音和长篇写作的正面反馈并非产品公告。 |
| Connectors / MCP | 无正式新增；0.148.0 已包含 MCP tool hooks。 |
| ChatGPT Ads | [欧洲扩展公告](https://openai.com/index/chatgpt-ads-expands-across-europe)称将扩至 31 个欧洲市场；这是广告业务更新，不代表回答内容受广告影响。 |

## Tier 3：企业、教育、政府、安全与行业

- 政府与安全：OpenAI 的[民主国家安全监督倡议](https://openai.com/index/strengthening-democratic-oversight-in-national-security)宣布提供 500 万美元的培训、技术支持与 credits，并试点审查工具。官方公告不计入社区正面口碑。
- 企业计费：[ChatGPT Business 计费说明](https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan)标明新增付费席位从 8 月 19 日起在加入时按剩余周期比例计费；页面精确更新时间未列，因此日期证据限于页面说明。
- 企业教学：OpenAI 官方 [ChatGPT Work 策略 deck 教程](https://www.youtube.com/watch?v=XjSJ6ybS9I8)演示汇总市场研究、客户数据与既有材料后生成并审核演示文稿。
- 创业生态：[Replit Free Mode](https://openai.com/index/replit)由 GPT-5.6 Luna 驱动，复杂任务可转给 Sol，同时保留项目上下文；这是厂商案例，效果数据未作独立复核。

## 官方与原始更新（由新到旧）

1. 00:52，Node SDK 主分支[关闭被拒绝 Azure managed-identity response streams](https://github.com/openai/openai-node/commit/387bbc8d267a85245c36fe8e640e9b1c6baf76a3)；00:25 还[限制 SSE / NDJSON 帧在缓冲前的大小](https://github.com/openai/openai-node/commit/0e250a4c90b7742ee70d1ff510eda5ac95469cc2)。两者均尚非正式 release。
2. 00:30，Python SDK [v3.3.1](https://github.com/openai/openai-python/releases/tag/v3.3.1)更新带公开安全修补的依赖，并迁移到 uv、锁定仓库工具链。
3. 00:21–00:10，Codex 主分支分别改进统一执行输出 buffer 排空和 turn summary 物化；相关提交见 Tier 1，尚非正式 release。
4. 22:37，TypeScript Agents SDK [v0.17.0](https://github.com/openai/openai-agents-js/releases/tag/v0.17.0)发布；21:44，Python Agents SDK [v0.22.0](https://github.com/openai/openai-agents-python/releases/tag/v0.22.0)发布。
5. 15:00，OpenAI 发布 [Replit × GPT-5.6 Luna](https://openai.com/index/replit)案例。
6. 06:26，Codex [0.148.0](https://github.com/openai/codex/releases/tag/rust-v0.148.0)稳定版发布；05:17，Python SDK [v3.3.0](https://github.com/openai/openai-python/releases/tag/v3.3.0)发布。
7. 03:17–03:37，[Sites 部署错误](https://status.openai.com/incidents/01M0B4WSV41BCFZ9VDWKSMQVSP)由官方状态页记录并在约 20 分钟内解决。

## Love

- 一名开发者自报[用 Codex 完成教师效率应用并提交 Apple review](https://www.reddit.com/r/codex/comments/1vsfmsx/ive_finished_my_first_project_using_codex/)，同时列出系统局限；成果没有独立验证。
- r/ChatGPT 的[长篇写作与语音体验讨论](https://www.reddit.com/r/ChatGPT/comments/1vs4z50/chatgpt_is_getting_scarily_good/)包含正面反馈，也有速度、文风和选择偏差反例，因此只作为混合口碑。

## Hate

- [Codex 周额度信任争议](https://www.reddit.com/r/OpenaiCodex/comments/1vseh5u/lost_of_trust/)包含支持与反例，不能据此推出官方配额调整。
- [Codex 0.148.0 prompt_cache_retention issue](https://github.com/openai/codex/issues/39397)与[自定义 harness 的相似错误](https://community.openai.com/t/custom-harness-getting-random-prompt-cache-retention-errors/1391197)构成两个独立兼容性样本，但没有官方事故或修复关联。
- [长任务 compaction 后丢失验收目标](https://community.openai.com/t/codex-desktop-repeatedly-loses-the-original-acceptance-goal-after-compaction-and-enters-endless-subagent-test-loops/1391211)和[长代码会话 Web UI 冻结](https://community.openai.com/t/web-ui-unresponsive-in-long-chats-the-include-code/1391189)都是单用户复现，保持低置信度。

## 口碑判断

- 编码 / Agent：**中性偏正，置信度中等**。依据是两套 Agents SDK 与 Codex 稳定版正式交付，加上一项完成应用的自报；负向证据集中在配额、compaction、browser 与兼容性问题。
- ChatGPT / Work：**中性偏负，置信度低到中等**。两个彼此呼应的 Work Mode 故障样本提高了信号强度，但样本仍小，且官方状态页没有相应事故。
- API / SDK：**中性，置信度中等**。正式 SDK 安全修补是积极工程信号，Realtime、Batch Image 和 Apps SDK 的问题仍只是论坛自报。

## 比较与迁移提示

- Replit 案例给出的实际路由是 Luna 处理高频探索、Sol 处理更高推理需求；它支持“按任务成本与难度分层”的产品做法，但不构成对其他厂商模型的独立基准比较。
- Assistants API 关闭日临近；新集成应以 Responses API 与 Agents SDK 为主，迁移状态以官方 deprecated deep dive 为准。
- Codex 主分支提交不能与 0.148.0 稳定版混写。仅 release notes 中列出的功能视为正式交付。

## 日期未确认

- [OpenAI Academy 的 Shopify × ChatGPT / Codex 活动页](https://academy.openai.com/public/clubs/small-business-ipf4m/events/launch-smarter-on-shopify-with-chatgpt-and-codex-cdis8ybpss)确认活动日期为 8 月 19 日，但页面发布时间未列。
- [ChatGPT Business 计费说明](https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan)明确写有 8 月 19 日规则生效，页面本身未提供精确更新时刻。
- Irish Independent 的[收购说法被澄清为玩笑](https://www.independent.ie/business/irish-business/openai-says-announcement-it-would-buy-irish-teenagers-start-up-was-meant-as-a-joke/a/160138187.html)原页抓取受限；仅按可信二手标题与公开摘要作为纠偏观察，不扩写未经核实细节。

## 观察池

- Work Mode：一名用户称[所有模型卡在 Thinking，随后 Error in message stream](https://community.openai.com/t/work-mode-stuck-on-thinking-for-all-models-eventually-shows-error-in-message-stream/1391324)，另一名用户独立报告[普通 Chat 正常但 Work 持续 Network error](https://community.openai.com/t/work-mode-consistently-failing-with-network-error-while-regular-chat-works/1391336)。两人互相印证，但没有官方范围说明。
- Apps SDK：两个用户报告[已批准 app 因 image authorization 400 无法发布或创建 draft](https://community.openai.com/t/approved-app-can-t-be-published-or-drafted-400-app-image-is-not-authorized-composer-icon-endpoints-404/1391309)；仍缺官方确认。
- Codex cloud：单用户报告[删除 scan configuration 后因隐藏软删除记录收到 409](https://community.openai.com/t/codex-security-cloud-409-error-after-deleting-a-scan-configuration/1391314)。
- 容量与额度：一名用户报告[Codex CLI 与 ChatGPT app 均提示模型容量不足](https://community.openai.com/t/selected-model-is-at-capacity-please-try-a-different-model/1391254)；另一名用户称[banked reset 在 app 更新后提前消失](https://community.openai.com/t/banked-reset-shown-as-valid-until-aug-31-disappeared-after-app-update-support-denies-escalation-case-13317840/1391299)。均无账户记录或官方确认。
- Windows browser：用户提供版本和复现步骤，称[Codex Desktop browser plugins 因 trusted code path error 失败](https://community.openai.com/t/codex-desktop-browser-plugins-fail-with-trusted-code-path-error/1391291)。
- API：单用户称 [Realtime calls 在 IP allowlist 开启时返回 401](https://community.openai.com/t/realtime-v1-realtime-calls-suddenly-failing-with-401-ip-not-authorized-despite-static-cloud-run-ip-being-allowlisted/1391236)；另一名用户称 [Batch image edits 引用 file_id 时返回 401](https://community.openai.com/t/batch-images-edits-failing-with-401-unable-to-authorize-file-access/1391232)。
- Cyber access：本日第三个独立样本称[通过 Trusted Access 后一天即失去 Daybreak Blue 资格](https://community.openai.com/t/cyber-access-disappeared-after-one-day/1391279)，仍没有范围或原因说明。

## 来源与发布面核对

- [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)、[ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)和 [API changelog](https://developers.openai.com/api/docs/changelog)截止本轮均未列出 8 月 19 日新条目。
- 官方模型命名以 [model guidance](https://developers.openai.com/api/docs/guides/latest-model)为准；搜索中出现的别名或未来版本若没有官方页面，均不作为事实。

## 采集状态

- 已检查来源：OpenAI News / RSS、API changelog、ChatGPT & Codex changelog、ChatGPT Release Notes、model guidance、Assistants 迁移、Status、Help Center、官方 YouTube / Academy、8 个官方 GitHub 仓库、Developer Community、Reddit、HN、X 与中英文可信二手检索。
- 失败来源：OpenAI News 直接 curl 403；Reddit JSON / RSS 403 或结果不完整；X 正文提取不稳定；YouTube 频道页提取有限；Irish Independent 原页受抓取限制；JetBrains 独立入口与 HN 近窗未找到可核实新增。
- 初始候选数：179；保留来源数：41。
- 二次补搜：否（最终来源不为 0）。

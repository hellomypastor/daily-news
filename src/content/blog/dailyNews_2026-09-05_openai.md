---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-05T00:00:00+08:00"
updatedAt: "2026-09-05T15:02:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex 0.153.4"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.153.4"
featuredSummary: "修复 Astra 在内置模型选择器中的可见性和默认行为，并限定异步提问指导的适用条件。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-05 07:25 +08:00"
featuredTags: ["Codex","GPT-6 Astra","修复版"]
tags:
  - "安全"
  - "定价"
  - "观察池"
  - "可靠性"
  - "模型成本"
  - "日期未确认"
  - "社区反馈"
  - "推理质量"
  - "文件上传"
  - "修复版"
  - "用户体验"
  - "支持"
  - "状态事件"
  - "Academic Researchers"
  - "Agent"
  - "Amazon Bedrock"
  - "ChatGPT"
  - "ChatGPT Business"
  - "ChatGPT Edu"
  - "Codex"
  - "Codex Cloud"
  - "Daybreak"
  - "GPT-5.6"
  - "GPT-6 Astra"
  - "Memory"
  - "MFA"
  - "OpenAI"
  - "Trusted Access"
  - "Usage"
---

## 今日概览

发现窗口：**2026-09-04 15:02 至 2026-09-05 15:02（Asia/Shanghai）**。窗口内最明确的产品变化来自 Codex 0.153.3 与 0.153.4：前者把 GPT‑6 Astra 加入 Amazon Bedrock 的 Mantle/Runtime 模型目录并修正异步提问指导，后者修复 Astra 在内置模型选择器中的可见性、在未显式配置时将其设为内置默认，并限定只有会话具备相应工具时才使用异步提问。OpenAI 同时记录 APAC 区域 ChatGPT、Work、图像、文件、Voice 与 Codex Cloud 的错误升高事件，已在 18:46 宣布恢复。官方 Developers Blog 另有两篇 9 月 4 日 Astra/Codex 实作文章，但未展示精确时刻，按“日期未确认”保留。社区反馈集中在额度重置、模型成本/重试、跨系统可靠性、编辑历史、文件上传、安全拦截、支持路由、记忆控制、套餐缺口与企业/研究账号访问；这些均未独立复现。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 状态与证据 |
| --- | --- |
| Codex CLI | **0.153.3、0.153.4** 连续修复 Astra 接入：增加 Bedrock 目录、修正异步问题指导，并修复内置模型选择器可见性与默认模型行为。 |
| VS Code / JetBrains | 未见窗口内独立官方新增；Codex 版本变更属于产品主线，官方 release 未声明 IDE 专属改动。 |
| Codex Cloud / 远程任务 / PR Agent | APAC 状态事件包含 Codex Cloud，18:46 已恢复；未见 PR Agent 独立发布。 |
| ChatGPT agentic mode / Work | APAC 事件包含 ChatGPT 与 Work；除此之外未见窗口内独立功能公告。 |
| Responses API | 未见窗口内官方 changelog 新条目；社区仍有较早的 background queued 报告，但创建时间早于窗口，不作为今日新增。 |
| Agents SDK Python / TypeScript | 最新 release 仍分别为 v0.22.0 与 v0.17.0，窗口内无新增。 |
| Assistants API 迁移 / 弃用 | 未核实到时间线变化。 |
| Realtime API | 未见独立更新；Voice 仅出现在已恢复的 APAC 状态事件中。 |
| GPT / reasoning / Codex 模型家族 | Astra 的正式发布早于本窗口；本轮只有 Codex 客户端接入修复，不重复包装为新模型发布。 |

## Tier 2：消费端功能

| 方向 | 状态 |
| --- | --- |
| 浏览器 / Operator；桌面应用 | 无可核实独立新增；跨系统可靠性个案见观察池。 |
| GPTs / GPT Store；Canvas | 无可核实独立新增；编辑历史消失为单一用户报告。 |
| Sora / 视频 | 无可核实独立新增。 |
| GPT Image / DALL·E | 无官方新增；社区的 RAW 图片模式为功能建议，不是已发布能力。 |
| Voice | APAC 错误事件包含 Voice 且已恢复，未见功能更新。 |
| Connectors / MCP | 无可核实窗口内独立新增。 |

## Tier 3：企业、教育、安全与行业

窗口内无新的 Enterprise、Business、Edu、Gov、Science 或安全产品公告。社区出现 ChatGPT Business 所有者因 MFA 丢失而等待人工所有权审核，以及 CSU ChatGPT Edu 用户报告 Pro 权益不可用且重置日期每日后移；两者均为未独立核实的账号个案，保留于观察池。

## 官方更新（最新在前）

- **Codex 0.153.4**（2026-09-05 07:25 +08:00）：修复 Astra 在内置模型选择器中的可见性，并在未显式配置模型时将其设为内置默认；同时限定仅在会话提供相应工具时才使用异步提问。 [官方 release](https://github.com/openai/codex/releases/tag/rust-v0.153.4)
- **Codex 0.153.3**（2026-09-05 03:01 +08:00）：把 Astra 加入 Amazon Bedrock 的 Mantle 与 Runtime global/US 目录，并修正异步澄清问题的工具与纯文本参数指导。 [官方 release](https://github.com/openai/codex/releases/tag/rust-v0.153.3)
- **APAC 多项服务错误升高，已恢复**（2026-09-04 15:00 至 18:46 +08:00）：官方记录 ChatGPT、Work、图像生成、文件上传、Voice 与 Codex Cloud 错误升高；17:48 应用缓解，18:46 宣布完全恢复。 [状态事件](https://status.openai.com/incidents/01M1NKFZH5EEYEREC54HNAHY35)

## Love

本轮没有足够可核实、独立于官方公告的正面体验样本。Developer Community 的 Astra 作品征集属于官方发起讨论，不能据此判断用户满意度。

## Hate

可见负面样本集中在：额度重置后仍显示无剩余额度、Luna/Terra 重试可能推高实际成本、长上下文推理被认为难以收敛、多处 ChatGPT 功能同时失常、编辑后版本切换入口消失、Excel 上传不可读、安全请求被拦截，以及 Business/Edu/Academic Researchers 账号权益问题。它们提供了具体情境，但均为单一或少量用户自述，不能外推为普遍故障。

## 口碑判断

**可靠性与计量摩擦信号偏负面，低置信度。** 官方 APAC 事件能确认一段区域性故障，但社区个案是否与该事件、客户端版本或账号配置有关尚不明确；本轮没有足够独立正面样本形成平衡比较。

## 对比与替代工具信号

一名 Codex 用户认为 Sol 单次使用成本较高，但 Luna/Terra 因重试与上下文恢复可能带来更高实际消耗；这是个人工作流观察，不是受控评测。未发现窗口内对 Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH 的可复现同任务比较，完整 Harness 雷达留给开源专题。

## 日期未确认

ChatGPT Release Notes 在不同缓存入口显示的最新条目不一致，本轮未发现能以页面内明确日期确认落在窗口的新条目，因此不把缓存更新时间当作产品发布时间。OpenAI News 索引也未发现可明确落入窗口的新文章。OpenAI Developers Blog 的 [Astra 建筑可视化实作](https://developers.openai.com/blog/architectural-visualization-with-astra) 与 [Astra 游戏开发实作](https://developers.openai.com/blog/how-to-build-games-with-astra) 均标注 2026-09-04，但页面未给出时分，无法确认是否落在本轮从 15:02 开始的窗口；两篇分别展示 Codex 驱动 Blender/Unreal Engine 3D 场景迭代，以及以 Astra 构建游戏原型的工作流，作为官方采用案例而非新产品发布保留。

## 观察池

- **额度重置已消费但额度未恢复**（2026-09-04 10:28 +08:00）：用户称执行 reset 后醒来仍显示周额度剩余 0%；信息很短，未提供计量明细。 [原帖](https://community.openai.com/t/limit-reset-consumed-while-usage-not-actually-reset/1394765)
- **ChatGPT 跨多个系统异常**（2026-09-04 23:28 +08:00）：付费用户称从 8 月底起模型行为、文件与界面多处不稳定，并称支持方确认过平台故障；公开信息无法核验其工单或具体因果。 [原帖](https://community.openai.com/t/chatgpt-is-breaking-across-multiple-systems/1394915)
- **编辑历史切换入口消失**（2026-09-05 03:50 +08:00）：用户称编辑消息后无法用箭头切换历史版本；未确认是灰度变更、客户端差异或故障。 [原帖](https://community.openai.com/t/edit-history-is-gone-again/1394939)
- **Sol 成本与 Luna/Terra 重试成本**（2026-09-05 04:23 +08:00）：用户以遗留 MUD 工程为例，认为较便宜模型的重试与恢复上下文可能抵消单次价格优势；缺少统一任务与计量对照。 [原帖](https://community.openai.com/t/sol-is-expensive-but-luna-terra-retries-can-cost-even-more/1394943)
- **ChatGPT Business 所有者 MFA 锁定**（2026-09-05 06:31 +08:00）：工作区所有者称丢失认证器且无备用方式，已进入人工所有权审核；属于个别账号支持案例。 [原帖](https://community.openai.com/t/chatgpt-business-owner-locked-out-by-mfa-manual-ownership-review-pending/1394959)
- **CSU ChatGPT Edu Pro 重置日期后移**（2026-09-05 09:41 +08:00）：用户称 Pro 始终不可选，但界面显示的重置日期每日后移；帖子给出连续三天文字记录，尚无官方确认。 [原帖](https://community.openai.com/t/chatgpt-edu-csu-pro-reset-date-moves-forward-by-one-day-every-day-while-pro-remains-unavailable/1394969)
- **GPT‑5.6 High/Very High 推理质量退化**（2026-09-05 10:56 +08:00）：用户称长上下文开发与调试任务更难收敛，并伴随约 25–26 分钟停止、文件访问与请求审查异常；无法确认后端变化或这些现象是否同源。 [原帖](https://community.openai.com/t/gpt-5-6-high-very-high-now-feels-like-performative-reasoning-rather-than-deep-reasoning/1394975)
- **Excel 上传后无法读取**（2026-09-05 11:10 +08:00）：用户称持续上传含每日工作表的 Excel 文件后，ChatGPT 的文件处理环境仍无法访问，需改用截图；属于单一个案。 [原帖](https://community.openai.com/t/chatgpt-having-trouble-finding-uploaded-excel-file/1394976)
- **Academic Researchers 席位未获额度重置**（2026-09-05 11:22 +08:00）：用户询问免费研究席位是否包含已向部分付费方案提供的额度重置，尚无官方答复。 [原帖](https://community.openai.com/t/do-academic-researchers-seats-get-usage-resets-mine-have-never-received-one/1394977)
- **网络安全请求触发 Daybreak 提示**（2026-09-05 11:33 +08:00）：用户称在 VPS 上执行普通命令生成任务时收到网络安全内容不可显示及 Daybreak 资格提示；请求内容与分类依据不足，无法判断是否误拦截。 [原帖](https://community.openai.com/t/why-am-i-getting-this-content-can-t-be-shown-we-re-especially-careful-with-cybersecurity-requests-if-you-re-a-security-professional-you-may-be-eligible-for-daybreak/1394978)
- **自动支持工单即时关闭循环**（2026-09-05 13:47 +08:00）：用户称支持请求被自动回复并立即关闭，而邮件入口再次触发同一流程；属于单一支持案例，未确认影响范围。 [原帖](https://community.openai.com/t/bug-automated-support-ticketing-loop-tickets-instantly-closing-case-14407052/1394986)
- **记忆隔离聊天功能建议**（2026-09-05 14:20 +08:00）：长期用户希望能创建持续保持、但不读取全局记忆的聊天，以恢复可控的“干净上下文”；这是 UX 建议，不是已发布能力。 [原帖](https://community.openai.com/t/feature-request-persistent-memory-isolated-chats/1394992)
- **个人用户中档套餐建议**（2026-09-05 14:37 +08:00）：重度 ChatGPT/Codex 用户建议在 Plus 与更高价方案之间提供 40–50 美元档位和更高额度；这是价格敏感度样本，不代表产品计划。 [原帖](https://community.openai.com/t/please-consider-a-40-50-mid-tier-plan-for-heavy-individual-users/1394995)
- **Daybreak 复核生成新待处理验证**（2026-09-05 14:38 +08:00）：安全研究用户称原验证失败已被告知结果最终，但入口随后又生成新的 Persona inquiry；无法核验工单与验证系统状态。 [原帖](https://community.openai.com/t/daybreak-verification-created-a-new-pending-inquiry-after-finalized-failure-case-14228255/1394998)

## 未证实传闻

未发现值得保留的新产品传闻。社区提出的 RAW 图片模式、学生计划等属于功能建议，不写成即将发布的产品。

## 来源链接

- [Codex 0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4)
- [Codex 0.153.3](https://github.com/openai/codex/releases/tag/rust-v0.153.3)
- [APAC 服务状态事件](https://status.openai.com/incidents/01M1NKFZH5EEYEREC54HNAHY35)
- [额度重置反馈](https://community.openai.com/t/limit-reset-consumed-while-usage-not-actually-reset/1394765)
- [跨系统可靠性反馈](https://community.openai.com/t/chatgpt-is-breaking-across-multiple-systems/1394915)
- [编辑历史反馈](https://community.openai.com/t/edit-history-is-gone-again/1394939)
- [Codex 模型成本反馈](https://community.openai.com/t/sol-is-expensive-but-luna-terra-retries-can-cost-even-more/1394943)
- [Business MFA 锁定反馈](https://community.openai.com/t/chatgpt-business-owner-locked-out-by-mfa-manual-ownership-review-pending/1394959)
- [Edu Pro 权益反馈](https://community.openai.com/t/chatgpt-edu-csu-pro-reset-date-moves-forward-by-one-day-every-day-while-pro-remains-unavailable/1394969)
- [GPT‑5.6 推理质量反馈](https://community.openai.com/t/gpt-5-6-high-very-high-now-feels-like-performative-reasoning-rather-than-deep-reasoning/1394975)
- [Excel 文件上传反馈](https://community.openai.com/t/chatgpt-having-trouble-finding-uploaded-excel-file/1394976)
- [Academic Researchers 额度反馈](https://community.openai.com/t/do-academic-researchers-seats-get-usage-resets-mine-have-never-received-one/1394977)
- [Daybreak 安全拦截反馈](https://community.openai.com/t/why-am-i-getting-this-content-can-t-be-shown-we-re-especially-careful-with-cybersecurity-requests-if-you-re-a-security-professional-you-may-be-eligible-for-daybreak/1394978)
- [Astra 建筑可视化实作](https://developers.openai.com/blog/architectural-visualization-with-astra)
- [Astra 游戏开发实作](https://developers.openai.com/blog/how-to-build-games-with-astra)
- [自动支持工单循环反馈](https://community.openai.com/t/bug-automated-support-ticketing-loop-tickets-instantly-closing-case-14407052/1394986)
- [记忆隔离聊天建议](https://community.openai.com/t/feature-request-persistent-memory-isolated-chats/1394992)
- [中档套餐建议](https://community.openai.com/t/please-consider-a-40-50-mid-tier-plan-for-heavy-individual-users/1394995)
- [Daybreak 验证复核反馈](https://community.openai.com/t/daybreak-verification-created-a-new-pending-inquiry-after-finalized-failure-case-14228255/1394998)

## 采集状态

- 已检查：OpenAI News、Developers Blog、ChatGPT Release Notes、开发者平台 changelog/模型/弃用文档；Codex、Python/Node SDK、Agents SDK releases；OpenAI Status、Developer Community 与公共社区日期检索。
- Tier 1/2/3：逐项检查编码与 Agent、消费功能和企业/教育/政府/科学/安全方向；确认两枚 Codex 修复版与 APAC 状态事件为窗口内官方变化。
- 失败与限制：主站部分直连受限；Release Notes 缓存视图不一致；Reddit/HN/X/YouTube 未获可靠新增样本；社区条目均未独立复现。
- 候选 38 条，保留 19 个来源；二次补搜：否（来源非零）。
- 配图：本页不使用图片；GitHub release 与状态页未提供适合正文插入、来源稳定且内容明确的官方题图。

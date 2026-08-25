---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-25T00:00:00+08:00"
updatedAt: "2026-08-25T22:45:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.149.1"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.149.1"
featuredSummary: "Codex 官方仓库发布稳定版 0.149.1；发布页仅给出与 0.149.0 的完整比较链接，没有逐项变更说明。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-24 08:28 +08:00"
featuredTags: ["Codex","CLI","Release"]
featuredImage: "https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.149.1"
featuredImageAlt: "GitHub 上 OpenAI Codex 仓库 0.149.1 发布页的预览图"
featuredImageCaption: "图片来源：OpenAI / GitHub"
tags:
  - "观察池"
  - "日期未确认"
  - "未证实传闻"
  - "Agent"
  - "App Server"
  - "AWS"
  - "ChatGPT"
  - "CLI"
  - "Cloud"
  - "Code Review"
  - "Codex"
  - "Coding Agent"
  - "Community"
  - "Deprecation"
  - "Desktop"
  - "GPT-5.6"
  - "Kiro"
  - "macOS"
  - "MCP"
  - "Model Cache"
  - "OpenAI"
  - "Pre-release"
  - "Release"
  - "Usage Limits"
  - "Usage Reset"
  - "Windows"
---

## 今日概览

采集窗口为 **2026-08-24 22:45 至 2026-08-25 22:45（Asia/Shanghai）**。当天累计保留三项可精确核验的 Codex CLI 发布：稳定版 0.149.1 于 8 月 24 日 08:28 发布，预发布版 0.150.0-alpha.8 于 8 月 25 日 06:11、0.150.0-alpha.9 于 8 月 25 日 20:51 发布；三页都没有逐项变更说明，因此不推断具体修复。官方 ChatGPT & Codex changelog 同日宣布弃用 `codex mcp-server`、建议改用 Codex App Server；该条只有自然日而没有精确发布时间，故保守列入“日期未确认”。OpenAI 另宣布 GPT‑5.6 系列已进入 AWS Kiro，并给出特定 Terminal-Bench 2.1 成本测试口径；官方页仅标自然日，故列入日期未确认。ChatGPT、API、Agents SDK 及 Tier 2/3 其他产品线未发现窗口内新的官方发布。社区方面累计保留用量重置与模型缓存变化信号，并累计收录四条可精确核时的 Codex Desktop / Cloud 问题报告；这些报告均由用户提交且仍为 open，不代表 OpenAI 已确认普遍缺陷。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
|---|---|---|
| Codex CLI | **当天累计：稳定版 0.149.1 与预发布版 0.150.0-alpha.8、0.150.0-alpha.9**；三页均无逐项 release notes | [0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1)、[0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)、[0.150.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9) |
| VS Code / JetBrains 集成 | 无新增 | 已检查官方 changelog、Codex 文档与仓库 |
| Codex cloud / remote tasks / PR agents | 无新增 | 已检查官方 changelog、文档与状态页 |
| ChatGPT agentic mode / Work | 无新增 | ChatGPT Release Notes 与官方 changelog |
| 当前官方 Agent 构建产品 | 无新增 | 官方 Agent 文档与 changelog |
| Responses API | 无新增 | API changelog |
| Agents SDK Python / TypeScript | 无新增；窗口内未见新 release | GitHub Releases |
| Assistants API 迁移 / 弃用 | 无新增 | 官方弃用与迁移文档 |
| Realtime API | 无新增 | API changelog 与 Realtime 文档 |
| GPT / reasoning / Codex 模型家族 | GPT‑5.6 系列进入 AWS Kiro，窗口归属未完全确认 | [OpenAI 官方公告](https://openai.com/index/gpt-5-6-in-kiro/)；仅标自然日 |

<figure class="source-image">
  <a href="https://github.com/openai/codex/releases/tag/rust-v0.149.1"><img src="https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.149.1" alt="GitHub 上 OpenAI Codex 仓库 0.149.1 发布页的预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/openai/codex/releases/tag/rust-v0.149.1">图片来源：OpenAI / GitHub</a></figcaption>
</figure>

## Tier 2：ChatGPT 产品面

| 产品面 | 过去 24 小时状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| macOS / Windows / 移动端 | 无新增 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | `codex mcp-server` 弃用公告见“日期未确认”；其属于 Codex 的 MCP 接口迁移，不代表 MCP 协议本身被弃用 |

## Tier 3：企业、安全与行业方案

Enterprise、Business、Edu、Gov、Science、安全与行业方案均已检查；窗口内未发现可核验的新公告，也未发现值得保留但日期不完整的新候选。

## 官方更新（新到旧）

### Codex CLI 0.150.0-alpha.9（预发布）

OpenAI 的 GitHub 发布页显示 Codex CLI 0.150.0-alpha.9 于 **2026-08-25 20:51 +08:00** 发布，并明确标为预发布版。页面正文只有版本名称，没有逐项变更说明；本页仅确认该预发布版本出现，不推断功能变化。[查看官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)

### Codex CLI 0.150.0-alpha.8（预发布）

OpenAI 的 GitHub 发布页显示 Codex CLI 0.150.0-alpha.8 于 **2026-08-25 06:11 +08:00** 发布，并明确标为预发布版。页面正文只有版本名称，没有逐项变更说明；本页仅确认该预发布版本出现，不推断功能变化。[查看官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)

### Codex CLI 0.149.1

OpenAI 的 GitHub 发布页显示 Codex CLI 0.149.1 于 **2026-08-24 08:28 +08:00** 发布。页面只给出从 0.149.0 到 0.149.1 的完整比较入口，没有逐项变更说明；该来源已在当天早一轮核验并累计保留。[查看官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.149.1)

## Love

一条当日 Reddit 帖欢迎 Codex 全局用量重置，但样本仅一人、语气带讽刺，且缺少精确发布时间，因此只作为低置信度信号。[查看社区原帖](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/)

## Hate

同一帖子称作者刚使用 banked full reset，随后全局重置又覆盖了这次额度安排，因而表达不满。另一条 [r/codex 讨论](https://www.reddit.com/r/codex/comments/1vwz6yy/the_reset_was_supposed_to_fix_the_usage_limit_bugs/) 中，发帖者称重置后一次约两小时任务消耗 19% 的 Pro 周额度；这些都是自报体验，未获官方说明支持。另有两名用户在官方 Codex 仓库分别报告 [恢复代码编辑器标签时 Desktop 反复冻结](https://github.com/openai/codex/issues/40559)，、[流中断后历史投影与运行时状态不一致](https://github.com/openai/codex/issues/40563)、[普通 PR 评论意外触发 Cloud task](https://github.com/openai/codex/issues/40606)，以及 [Windows 拖入图片后 WebSocket 10054](https://github.com/openai/codex/issues/40608)；报告包含复现或诊断细节，但 issue 仍为 open，不能外推为普遍问题。

## 情绪判断

**偏负面，置信度低至中。** 社区讨论集中在重置时机、额度消耗、行为变化猜测和两类 Desktop 恢复故障。GitHub issue 的时间与技术细节可核验，提高了“存在个案”的置信度，但样本仍少、各问题尚未获维护者确认，不能据此判断整体口碑或影响范围。

## 比较信号

新增社区帖的评论中出现 OpenCode、Pi 等替代工具的泛化比较，但没有同任务复现或具名评测；本页不据此对 Codex 与 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness / DSH 作优劣判断。

## 日期未确认

- OpenAI 的 [GPT‑5.6 in Kiro 公告](https://openai.com/index/gpt-5-6-in-kiro/) 标为 2026-08-24，确认 Sol、Terra、Luna 已可在 AWS Kiro 使用。文中称特定测试里 GPT‑5.6 Terra 在 Kiro 的 Terminal-Bench 2.1 成功任务成本约降低 82%，但未公开精确发布时间，故状态为 **官方来源 / 日期确认 / 窗口归属未完全确认**；该数字不外推为所有编码任务。
- OpenAI 的 [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog) 将 **“Codex MCP server command deprecated”** 标为 2026-08-24，并明确建议用 Codex App Server 替代 `codex mcp-server`；若要从 Claude Code 调用 Codex，则建议使用官方 Codex plugin。页面没有精确发布时间，无法严格确认是否晚于本窗口起点 10:01，因此状态为 **官方来源 / 日期确认 / 窗口归属未完全确认**。这是一项命令迁移提示，不应误写成外部 MCP server 支持或 MCP 协议被弃用。

## 观察池

- Reddit 的 [“Huzzah! Codex has been reset!”](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/) 标为 2026-08-24，正文称全局重置已经发生，但同时抱怨它紧接作者使用 banked reset 之后到来。公开索引没有精确发布时间，状态为 **社区原帖 / 日期确认 / 窗口归属未完全确认 / 单一样本**。它只能支持“至少一位用户看到重置”的有限判断，不能证明覆盖范围或官方规则。
- Reddit 的 [“I Have Proof That OpenAI Changed Something on Their End Before Usage Limit Was Reset”](https://www.reddit.com/r/codex/comments/1vwxtgn/i_have_proof_that_openai_changed_something_on/) 标为 2026-08-24。作者根据本地 `models_cache.json` 总体字数变化推测 OpenAI 在重置前修改了后端指令；评论者指出缓存包含多个模型和字段，整体体积变化不能定位到现有模型的系统指令。状态为 **社区原帖 / 日期确认 / 精确时间未核验 / 推断受争议 / 观察池**，仅保留为可复核线索，不将其写成“静默升级”事实。

- Reddit 的 [重置后额度消耗讨论](https://www.reddit.com/r/codex/comments/1vwz6yy/the_reset_was_supposed_to_fix_the_usage_limit_bugs/) 标为 2026-08-24。发帖者称一次约两小时任务消耗 19% Pro 周额度。状态为 **社区原帖 / 精确时间未核验 / 自报体验 / 观察池**，不据此确认配额规则。

- openai/codex 的 [Desktop 编辑器标签恢复冻结报告](https://github.com/openai/codex/issues/40559) 创建于 **2026-08-25 14:13 +08:00**。报告者称 macOS Codex Desktop 26.818.61809 打开代码文件后冻结，重启恢复持久化标签时复现，清除单一任务的标签状态后恢复。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一个案**；仅确认报告存在，不代表维护者已复现或确认根因。

- openai/codex 的 [中断后线程状态不一致报告](https://github.com/openai/codex/issues/40563) 创建于 **2026-08-25 14:33 +08:00**。报告者称一次流中断后，分页历史仍显示 inProgress，而 app-server 重建为 interrupted、运行时为 idle。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一个案**；报告无确定性公共复现，根因未确认。

- openai/codex 的 [普通 PR 评论意外触发 Cloud task 报告](https://github.com/openai/codex/issues/40606) 创建于 **2026-08-25 21:19 +08:00**。报告者称启用仓库 workspace、关闭 Auto review 但保留实验性 Smart detect 时，不含 `@codex` 的普通 review comment 偶尔会触发其个人 workspace 中的 Cloud task。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一个案**；仅确认报告存在，不代表 OpenAI 已复现或该行为适用于所有配置。

- openai/codex 的 [Windows 图片附件 WebSocket 10054 报告](https://github.com/openai/codex/issues/40608) 创建于 **2026-08-25 21:24 +08:00**。报告者称 Windows Codex Desktop 26.818.8289.0 拖入或粘贴 PNG 后连接被远端关闭，且后续纯文本 turn 也可能卡住。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一个案**；版本与复现均为用户自报，尚无维护者确认。

## 未证实传闻

- “OpenAI 在重置前静默修改了现有 Codex 模型系统指令”目前没有官方发布、可定位字段差异或可复现实验支持；相关社区帖只能证明作者观察到缓存整体大小变化，结论仍属 **未证实**。

## 来源链接

1. [Codex CLI 0.150.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)
2. [Codex CLI 0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)
3. [Codex CLI 0.149.1](https://github.com/openai/codex/releases/tag/rust-v0.149.1)
4. [GPT‑5.6 in Kiro](https://openai.com/index/gpt-5-6-in-kiro/)
5. [ChatGPT & Codex changelog](https://learn.chatgpt.com/docs/changelog)
6. [Huzzah! Codex has been reset!](https://www.reddit.com/r/ChatGPT/comments/1vwrpbc/huzzah_codex_has_been_reset/)
7. [I Have Proof That OpenAI Changed Something on Their End Before Usage Limit Was Reset](https://www.reddit.com/r/codex/comments/1vwxtgn/i_have_proof_that_openai_changed_something_on/)
8. [The reset was supposed to fix the usage limit bugs](https://www.reddit.com/r/codex/comments/1vwz6yy/the_reset_was_supposed_to_fix_the_usage_limit_bugs/)
9. [Desktop editor-tab restore can freeze the renderer](https://github.com/openai/codex/issues/40559)
10. [Restored thread history can retain stale inProgress state](https://github.com/openai/codex/issues/40563)
11. [GitHub PR comments trigger Codex Cloud tasks without @codex mention](https://github.com/openai/codex/issues/40606)
12. [Dragged image attachments trigger WebSocket 10054](https://github.com/openai/codex/issues/40608)

## 采集状态

- 已检查：OpenAI News / Research、ChatGPT Release Notes、ChatGPT & Codex changelog、API changelog、模型与弃用文档、Codex 各产品入口、OpenAI Status、Codex 与 Agents SDK / 官方 SDK GitHub Releases、Reddit 五个相关社区、Hacker News、YouTube 与公开中英文网页搜索。
- 失败来源：X（未登录无法稳定核验原帖与精确时间）；Reddit JSON（403，无法取得新增帖子精确 UTC 时间；公开搜索仅标自然日）；YouTube（无可交叉核验的窗口内新增）。
- 初始候选：37；最终保留来源：12。
- 二次补搜：否（最终来源不为 0）。

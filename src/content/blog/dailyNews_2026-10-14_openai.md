---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-10-14T00:00:00+08:00"
updatedAt: "2026-10-14T10:43:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Deprecations | OpenAI API"
featuredUrl: "https://developers.openai.com/api/docs/deprecations"
featuredSummary: "OpenAI 宣布部分 GPT-4o、GPT-4o mini、GPT-4.1 与 GPT-4.1 mini 固定快照及其微调版本将于 2027-01-14 从 API 移除，推荐迁移到 gpt-6-luna。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-10-14（官方未给出具体时刻）"
featuredTags: ["API","模型退役","GPT-4"]
tags:
  - "低置信度"
  - "观察池"
  - "模型退役"
  - "日期未确认"
  - "社区"
  - "社区口碑"
  - "Agent"
  - "API"
  - "API 迁移"
  - "ChatGPT"
  - "Codex"
  - "GPT-4"
  - "OpenAI"
---

## 今日概览

采集窗口为 **2026-10-13 10:43 至 2026-10-14 10:43（Asia/Shanghai）**。窗口内确认到 1 项官方开发者平台变化：OpenAI 在 [API Deprecations](https://developers.openai.com/api/docs/deprecations) 新增 2026-10-14 通知，四组 GPT-4 系列固定快照及其微调版本将于 2027-01-14 从 API 移除，官方建议迁移到 `gpt-6-luna`。这是 API 生命周期公告，不等于 ChatGPT 中所有 GPT-4 产品同时下线。

## Tier 1：编码、Agent 与开发者平台

| 产品面 | 过去 24 小时状态 | 证据与解读 |
| --- | --- | --- |
| Codex CLI | 无已核实正式更新 | 检查官方仓库、releases 与安装入口；检索到 npm alpha 版本候选，但详情页不可访问，未据此写成发布事实。 |
| VS Code / JetBrains 集成 | 无新增 | 未见官方 release note、文档或原始公告更新。 |
| Codex cloud / remote tasks / PR agents | 无新增 | 未见官方公告；社区滚动页出现集成问题活动，保留在观察池。 |
| ChatGPT agentic mode | 无新增 | 官方 ChatGPT release notes 在窗口内无新条目。 |
| Agents API / 当前官方 Agent 构建产品 | 无新增 | 官方 API changelog 在窗口内无新条目。 |
| Responses API | 无新增 | 本轮仅有模型退役通知，未见 Responses API 功能更新。 |
| Agents SDK Python | 无已核实更新 | 检查官方 GitHub releases；未确认窗口内正式版本。 |
| Agents SDK TypeScript | 无已核实更新 | 检查官方 changelog；未确认窗口内正式版本。 |
| Assistants API 迁移 | 无新增 | 官方退役页仍显示 Assistants API 已于 2026-08-26 移除，迁移目标为 Responses API 与 Conversations API。 |
| Realtime API | 无新增 | API changelog 与退役页均未出现窗口内 Realtime 变更。 |
| GPT / reasoning / Codex 模型 | **有更新** | [官方退役通知](https://developers.openai.com/api/docs/deprecations) 将 `gpt-4o-2024-08-06`、`gpt-4o-2024-11-20`、`gpt-4o-mini-2024-07-18`、`gpt-4.1-2025-04-14`、`gpt-4.1-mini-2025-04-14` 的 API 移除日定为 2027-01-14；微调版本同样适用，推荐替代为 `gpt-6-luna`。 |

## Tier 2：应用与多模态能力

| 产品面 | 过去 24 小时状态 |
| --- | --- |
| 浏览器 / Operator 类能力 | 无新增；未见官方 release note。 |
| 桌面应用 | 无新增；未见官方 release note。 |
| GPTs / GPT Store | 无新增；本轮未发现新的官方迁移通知。 |
| Canvas | 无新增。 |
| Sora / 视频 | 无新增。 |
| GPT Image / DALL·E | 无新增。 |
| Voice | 无新增。 |
| Connectors / MCP / Plugins | 无官方新增；社区滚动页有连接与授权问题报告，证据仅为用户报告。 |

## Tier 3：企业、安全与行业场景

Enterprise、Business、Edu、Gov、Science、安全与行业方案的官方新闻索引在本窗口内均未出现已核实的新发布。社区中出现 SSO 与连接器问题讨论，但没有官方确认，见观察池。

## 官方更新（由新到旧）

### GPT-4 系列 API 固定快照进入退役期

OpenAI 的 [API 退役页](https://developers.openai.com/api/docs/deprecations) 将公告日期标为 2026-10-14：涉及 GPT-4o 两个固定快照、GPT-4o mini、GPT-4.1 与 GPT-4.1 mini 固定快照；这些模型以及对应微调版本计划在 2027-01-14 关闭，推荐迁移到 `gpt-6-luna`。团队应先盘点显式模型 ID，并针对输出质量、工具调用、延迟和成本做迁移回归；官方表格并未承诺替代模型行为完全一致。

## Love

本轮没有足够的窗口内独立社区样本支持明确正面口碑结论。官方公告不计作正面情绪。

## Hate

[OpenAI Developer Community 最新主题页](https://community.openai.com/latest) 在本轮检查时可见 Codex、ChatGPT Work、插件/MCP 与连接器相关的失败、卡住、慢响应和授权问题活动。该页面混合了旧帖的新回复与新帖，不能证明问题始于本窗口，也不能据此推断影响范围；因此只作为低置信度观察信号。

## 情绪判断

- **方向：偏负面，但置信度低。**
- **证据：** 窗口内社区滚动页的可见活动以故障、限额、卡住和连接问题为主；缺少系统抽样、官方事故确认与可比基线。
- **限制：** 活动日期可能是回帖时间，不一定是首发时间；官方生命周期公告不纳入情绪样本。

## 对比与竞争观察

本轮没有具名评测或可复现实验足以支持 Codex 相对 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness / DSH 的追平或领先结论。Cline、Pi 与 DSH 的完整版本扫描归入开源 Coding Agent / Harness 专题；本页仅记录 OpenAI 生态的直接信号。

## 日期未确认

- [Reddit 社区帖：GPT-4 系列退役表解读](https://www.reddit.com/r/CodexAutomation/comments/1x5d7nf/openai_lists_january_14_api_shutdown_for_five/) 在检查时显示“约 2 小时前”，并正确链接到官方退役页，但页面未给出可稳定引用的绝对发布时间。其核心事实已由官方来源独立核实；帖子中的迁移建议属于作者解读。

## 观察池

- npm 搜索摘要显示 `@openai/codex-sdk` 有新的 alpha 构建候选，但 npm 详情页返回 403，GitHub API 又因 DNS 失败，未能核实 tag、正式性与完整 release notes，因此不列为已确认发布。
- [OpenAI Developer Community 最新主题页](https://community.openai.com/latest) 汇集了 Codex/ChatGPT/插件故障活动；需等待对应原帖时间线、官方状态页或产品团队回应，不能把单一用户报告扩展为普遍故障。

## 来源链接

1. [OpenAI API Deprecations](https://developers.openai.com/api/docs/deprecations)
2. [Reddit：OpenAI lists January 14 API shutdown for five GPT-4 snapshots](https://www.reddit.com/r/CodexAutomation/comments/1x5d7nf/openai_lists_january_14_api_shutdown_for_five/)
3. [OpenAI Developer Community：Latest topics](https://community.openai.com/latest)

## 采集状态

- 已检查：OpenAI 新闻与产品发布说明、ChatGPT release notes、API changelog / deprecations / model docs、Codex 与 Agents SDK 官方 GitHub、npm、OpenAI Developer Community、Reddit、Hacker News、X、YouTube。
- 失败来源：GitHub REST API DNS 解析失败；npm 详情页返回 403；X、Hacker News、YouTube 未取得可独立核验的窗口内一手新增。
- 初始候选数：22。
- 保留来源数：3（1 个官方事实源、1 个可信度受限的社区二次解读、1 个滚动社区观察入口）。
- 二次补搜：否；最终来源不为 0。

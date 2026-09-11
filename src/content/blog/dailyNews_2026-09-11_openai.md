---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-11T00:00:00+08:00"
updatedAt: "2026-09-11T10:47:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Release 0.155.0-alpha.3"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3"
featuredSummary: "Codex CLI 0.155.0-alpha.3 预发布；页面未提供变更说明。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-11 10:35 +08:00"
featuredTags: ["Codex","预发布"]
tags:
  - "对比"
  - "观察池"
  - "社区口碑"
  - "预发布"
  - "Agent"
  - "Agents SDK"
  - "Bug"
  - "ChatGPT"
  - "Codex"
  - "Codex Desktop"
  - "Hate"
  - "Love"
  - "OpenAI"
  - "Python SDK"
  - "Realtime"
  - "Responses API"
---

## 今日概览

采集窗口：2026-09-10 10:47 至 2026-09-11 10:47（Asia/Shanghai）。本轮主线是 Codex 与 Agent SDK：Codex Python SDK 发布 0.154.0，TypeScript Agents SDK 发布 0.18.0；Codex Rust CLI 同时连续出现 0.155.0 alpha 预发布，但 release 页面没有变更说明，只能视作预发布节奏信号。社区体验呈明显分化：有人肯定高阶模型用于规划与代码审查，也有人集中报告额度消耗焦虑和桌面首条消息延迟。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 状态 | 本轮证据 |
|---|---|---|
| Codex CLI | 有更新 | [0.155.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.1)、[0.155.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2)、[0.155.0-alpha.2.3](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.2.3)、[0.154.0-alpha.6.2](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6.2) 与 [0.155.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.3) 均在窗口内发布；页面仅写 release 名称，无 changelog，不能据此推断功能。 |
| Codex Python SDK | 有更新 | [openai-codex 0.154.0](https://github.com/openai/codex/releases/tag/python-v0.154.0) 增加 max/ultra 推理档、可在进行中的 turn 注入 ExternalMessage，并扩展 resume/fork 历史读取、单 turn service tier 与来源元数据；官方同时列出升级兼容注意事项。 |
| VS Code / JetBrains 集成 | 无新增 | 已查官方 Codex release、文档与仓库；窗口内未见独立发布。 |
| Codex cloud / remote tasks / PR agents | 无新增 | 已查官方入口，未发现可核实的新公告。 |
| ChatGPT agentic mode | 无新增 | ChatGPT release notes 在窗口内没有带明确发布日期的新条目。 |
| Agents SDK TypeScript | 有更新 | [v0.18.0](https://github.com/openai/openai-agents-js/releases/tag/v0.18.0) 将 Docker 文件 API 移入容器内执行，新增 UnixLocal 文件保护选项，并让 imageGenerationTool 显式选择 generate/edit/auto。 |
| Agents SDK Python | 无新增 | 最新可见正式 release 为 0.22.2，发布时间早于本轮窗口。 |
| Responses API | 间接更新 | Agents JS 0.18.0 的图像生成 action 会透传到流式和非流式 Responses 请求；未发现独立 API changelog。 |
| Assistants API 迁移 | 无新增 | 已检查弃用/迁移入口；窗口内无新里程碑。 |
| Realtime API | 修复 | Agents JS 0.18.0 修复 realtime 的 agent_end response ownership；未见 Realtime API 独立发布。 |
| 当前 GPT / reasoning / Codex 模型家族 | 无新增 | 未将社区猜测或仅有名称的候选写成模型发布。 |

## Tier 2：产品面合并扫描

| 产品面 | 状态 |
|---|---|
| Browser / Operator 能力 | 无新增 |
| macOS / Windows 桌面应用 | 无官方新增；见下方社区问题观察 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / video | 无新增 |
| GPT Image / DALL·E | 无窗口内新增；9 月 8 日 Images 2.5 更新未跨日重复收录 |
| Voice | 无新增 |
| Connectors / MCP | 无新增 |

## Tier 3：企业、安全与行业产品

Enterprise、Business、Edu、Gov、Science、安全与行业方案均已检查官方新闻、帮助中心及开发者入口；窗口内没有可确认的新发布。与产品无直接版本关系的政策文章未硬塞进更新表。

## 官方更新（由新到旧）

1. **Codex CLI 预发布连续推进。** 9 月 11 日 10:35 发布 0.155.0-alpha.3；此前同日上午还有 0.154.0-alpha.6.2 与 0.155.0-alpha.2.3，9 月 11 日凌晨及 9 月 10 日晚间另有 alpha.2、alpha.1。由于官方未附变更说明，本页只记录版本和时间，不宣称新能力。
2. **Agents SDK TypeScript 0.18.0。** Docker 文件访问的执行边界改为容器内部，UnixLocal 增加可配置文件保护，图像生成工具补充动作选择；这是本轮 Agent 构建侧最完整的正式更新。
3. **Codex Python SDK 0.154.0。** 新增推理档位、外部消息注入与线程历史/单 turn 控制，升级者需留意 HookMetadata 包装和晚加入事件流等迁移差异。

## Love

- [一则 r/codex 讨论](https://www.reddit.com/r/codex/comments/1wcsedz/chatgpt_web_is_upgrading_to_pro_worth_it/) 中，有用户认为高阶模型对大表格分析、规划和代码审查体验突出，也有人认可将 ChatGPT 用于规划、Codex 用于执行的组合。这是少量自报体验，不代表整体口碑或官方能力承诺。

## Hate

- [r/OpenaiCodex 的窗口内讨论](https://www.reddit.com/r/OpenaiCodex/comments/1wczs6u/im_too_scared_touching_codex_right_now/) 集中表达对额度消耗异常或限额收紧的担忧；帖子和回复没有官方诊断，因此只能确认焦虑存在，不能确认平台确实调整了计费。
- [Codex GitHub issue #44469](https://github.com/openai/codex/issues/44469) 提供日志时间线，报告 macOS 桌面端新会话的首条 TurnInput 在 thread/start 后延迟约 81 秒；这是单一环境复现，尚不能外推为普遍故障。

## 情绪判断

**结论：分化、略偏负面；置信度中等。** 正向证据来自少数高阶模型和工作流体验，负向证据同时出现在 Reddit 额度讨论与带日志的 GitHub 缺陷报告中。样本量小、社区自选择偏差明显，且没有官方事故或额度调整说明，因此不做趋势量化。官方 release 不计入正向情绪。

## 横向比较

- 本轮 Codex Python SDK 对外部消息、恢复/分叉历史和单 turn 配置的扩展，显示其控制面正从单次 CLI 调用向可嵌入式 Agent runtime 延伸。
- 社区讨论仍常把 ChatGPT 规划/审查与 Codex 执行组合使用，也提到 Pi Coding Agent；Claude Code、Cursor、Cline、DeepSeek Harness / DSH 未出现可核实的新对比测试。上述开源 harness 的完整扫描留给开源专题页。
- 没有具名 benchmark 或可复现实验，故不下“追平”或“超过”结论。

## 日期未确认

- 无。所有保留来源均能核对到窗口内发布时间；未将只有搜索摘要日期、无法打开原文的候选纳入事实。

## 观察池

- Codex 0.155.0 多个 alpha release 没有说明，需等待稳定版 changelog 才能判断用户可见变化。
- 社区对额度消耗的报告值得继续追踪，但现阶段缺少官方状态页事件、计费文档变更或一致的可复现实验。
- GitHub issues 还出现容量、配额显示、context 增长和桌面连接类报告；本页仅保留证据更具体且落在窗口内的代表项，未将 issue 数量解释为故障率。

## 来源链接

正文中的 10 个去重来源均列入结构化 sources；同一事件的多个 alpha tag 分开记录，以满足逐项展示且不推测变更。

## 采集状态

- 已检查：OpenAI News/Research、开发者文档与 changelog、ChatGPT release notes、开发者社区公告、Codex/Agents SDK 官方 GitHub release 与 issues，以及 Reddit 六个相关社区；并补查 Hacker News、X、YouTube 和开发者播客。
- 失败/限制：X 无法稳定核对公开原帖全文与时间；HN、YouTube/播客未找到窗口内可独立核实的新产品证据；平台 changelog 未返回窗口内条目。
- 初始候选：13；保留来源：10；二次补搜：否（最终来源不为 0）。

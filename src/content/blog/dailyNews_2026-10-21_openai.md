---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-10-21T00:00:00+08:00"
updatedAt: "2026-10-21T12:35:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Changelog: 12-hour prompt caching"
featuredUrl: "https://developers.openai.com/api/docs/changelog"
featuredSummary: "Responses API 新增可选的 12 小时提示缓存，缓存写入价格为普通输入的 2.5 倍。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-10-20（官方仅标注日期，时分未公开）"
featuredTags: ["Responses API","Prompt Caching","Agent"]
tags:
  - "低置信度"
  - "观察池"
  - "较旧背景"
  - "日期未确认"
  - "社区口碑"
  - "预发布"
  - "Agent"
  - "ChatGPT"
  - "Codex"
  - "Codex CLI"
  - "Hate"
  - "Love"
  - "OpenAI"
  - "Prompt Caching"
  - "Responses API"
  - "Science"
---

## 今日概览

采集窗口为 **2026-10-20 12:35 至 2026-10-21 12:35（Asia/Shanghai）**。本轮主线是开发者平台与 Codex：Responses API 增加 12 小时提示缓存，Codex CLI 连续发布两个无变更说明的 alpha 构建。OpenAI 同日宣布收购 Orchestra Bio，将其生命科学工作流与 Rosalind 体系结合；但官方页面只给出日期、没有精确时刻，因此列入“日期未确认”，不把它写成已确认落入 24 小时窗口的事实。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
| --- | --- | --- |
| Codex CLI | **有更新**：`0.164.0-alpha.7` 与 `0.164.0-alpha.8` 先后发布，均为预发布版本；GitHub 未展示变更说明，不能推断新增能力。 | [alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.7) · [alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.8) |
| VS Code / JetBrains 集成 | 无新增：已检查 Codex 仓库、发布页与公开官方入口，未发现窗口内独立公告。 | — |
| Codex cloud / remote tasks / PR agents | 无新增：未发现窗口内官方发布。 | — |
| ChatGPT agentic mode | 无新增：ChatGPT Release Notes 在窗口内没有新条目。 | — |
| Responses API | **有更新**：新增可选的 12 小时 prompt cache；长期缓存写入按输入价格的 2.5 倍计费，适合跨数小时复用相同指令、工具与上下文。 | [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog) |
| Agents SDK（Python / TypeScript） | 无新增：已检查两个官方仓库 release 入口。 | — |
| Assistants API 迁移 / 弃用 | 无新增：已检查 changelog 与 deprecations 入口；本轮不重复较旧迁移背景。 | — |
| Realtime API | 无新增：未发现窗口内 changelog 条目。 | — |
| 当前 GPT / reasoning / Codex 模型族 | 无新增：未发现窗口内官方模型发布。 | — |

## Tier 2：应用与多模态能力

| 能力组 | 过去 24 小时状态 |
| --- | --- |
| 浏览器 / Operator 类能力、桌面应用 | 无新增；已检查 ChatGPT Release Notes 与官方新闻索引。 |
| GPTs / GPT Store、Canvas | 无新增。 |
| Sora / 视频、GPT Image / DALL·E | 无新增。 |
| Voice | 无新增。 |
| Connectors / MCP | 无新增。 |

## Tier 3：企业、科研与安全

- **生命科学 / 企业工作流（日期未确认）**：OpenAI 在 10 月 20 日宣布[收购 Orchestra Bio](https://openai.com/index/openai-to-acquire-orchestra-bio/)，计划把其药物研发协作平台与 Rosalind 的模型和工具结合。官方描述的方向包括由 Agent 跟踪研究与项目依赖、协助团队比较响应方案；公告没有披露交易条款。
- Enterprise、Business、Edu、Gov、Science 与安全入口均已检查；除上述日期未确认候选外，没有发现可核验的窗口内独立更新。

## 官方更新（由新到旧）

1. **Codex CLI 0.164.0-alpha.8** — GitHub 显示 10 月 20 日 22:15 发布，提交为 `57dedf2`；页面未提供 release notes，因此只确认构建发布，不解读功能变化。[官方 release](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.8)
2. **Codex CLI 0.164.0-alpha.7** — GitHub 显示 10 月 20 日 13:47 发布，提交为 `fe136d4`；同样没有可见 release notes。[官方 release](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.7)
3. **Responses API 12 小时提示缓存** — 10 月 20 日 changelog 明确新增 12 小时选项，并说明 2.5 倍缓存写入价格；这为持续数小时、反复复用稳定上下文的 Agent 工作负载提供了更长复用窗口。[官方 changelog](https://developers.openai.com/api/docs/changelog)

## Love

- 社区中有少数用户认为订阅仍能支撑高强度日常开发，并呼吁更多分享实际产出；这是单帖回复中的个体体验，不能外推为总体口碑。[社区讨论](https://www.reddit.com/r/codex/comments/1wthcyb/codex_for_developers_changed_forever_today/)

## Hate

- 一条 10 月 20 日的 r/codex 讨论集中抱怨“28 days”发布节奏中重置多、可感知改进少，并有人拿 Claude 订阅的可用额度作比较。这是自选样本且情绪强烈，适合视为摩擦信号，不代表全体用户。[社区讨论](https://www.reddit.com/r/codex/comments/1xb5y6q/were_halfway_through_28_days_now_do_you_think/)

## 情绪判断

**偏负面，置信度低。** 可定位的近期样本主要集中在 Codex 专门社区，负面内容围绕用量、重置和改进感知；正面样本较少但仍存在。样本量小、社区自选择明显，且官方公告不计入正面口碑，因此不做总体用户满意度结论。

## 比较观察

- 社区比较主要落在 Codex 与 Claude 的订阅用量和稳定性体验，而不是可复现实验；本轮没有发现足以支持“追平”或“超过”的具名评测。
- Cline、Pi Coding Agent、DeepSeek Harness / DSH、Cursor 与 Claude Code 的完整版本扫描留给开源 Harness 专题；本页只记录与 Codex 口碑直接相关的比较信号。

## 日期未确认

- [OpenAI 收购 Orchestra Bio](https://openai.com/index/openai-to-acquire-orchestra-bio/)：官方只标注 **2026-10-20**，未提供时分与时区，可能落入也可能早于本轮窗口起点；事实本身已由官方确认，窗口归属未确认。

## 观察池

- Codex `0.164.0-alpha.7` / `.8` 都缺少可见变更说明；待稳定版或正式 changelog 出现后再判断其功能意义。
- 12 小时提示缓存的成本收益取决于命中率与上下文复用模式；目前只有官方定价机制与零散讨论，尚无足够的真实工作负载对照数据。

## 来源链接

- [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
- [Codex CLI 0.164.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.8)
- [Codex CLI 0.164.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.7)
- [OpenAI acquires Orchestra Bio](https://openai.com/index/openai-to-acquire-orchestra-bio/)
- [r/codex：28 days 中期口碑讨论](https://www.reddit.com/r/codex/comments/1xb5y6q/were_halfway_through_28_days_now_do_you_think/)
- [r/codex：订阅价值的正面个体样本](https://www.reddit.com/r/codex/comments/1wthcyb/codex_for_developers_changed_forever_today/)

## 采集状态

- **已检查来源**：OpenAI News / Research / RSS、API changelog 与 deprecations、ChatGPT Release Notes、Codex GitHub releases、Agents SDK Python / TypeScript、公开官方社交入口、Reddit 五个相关社区、Hacker News、YouTube 与可信开发者二手报道。
- **失败来源**：X 未登录检索不稳定；GitHub alpha release 动态资产与说明区加载失败；官方收购文章未暴露可确认的公开 OG 图；已删除或低信息量 Reddit 结果未采用。
- **初始候选数**：9；**保留来源数**：6；**二次补搜**：否（最终来源非 0）。

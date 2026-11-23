---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-11-23T00:00:00+08:00"
updatedAt: "2026-11-23T10:50:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Perplexity and Intelligence"
featuredUrl: "https://openai.com/index/perplexity-and-intelligence/"
featuredSummary: "OpenAI 首席科学家披露内部困惑度度量，并倡议前沿实验室建立共同透明度、安全评估和能力推进规范。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-11-22"
featuredTags: ["OpenAI","Research","Safety","Evaluation"]
featuredImage: "https://images.ctfassets.net/kftzwdyauwt9/6rIIhCRSKrhIfe385Onmcz/aca2d190553c62fd5d49efb5d5ce1eb6/perplexity-and-intelligence-social.png?w=1600&h=900&fit=fill"
featuredImageAlt: "OpenAI《Perplexity and Intelligence》研究文章的官方分享图"
featuredImageCaption: "图片来源：OpenAI"
tags:
  - "观察池"
  - "社区口碑"
  - "社区讨论"
  - "Agent"
  - "ChatGPT"
  - "Codex"
  - "Evaluation"
  - "Hate"
  - "OpenAI"
  - "Research"
  - "Safety"
---

## 今日概览

采集窗口：2026-11-22 10:50 至 2026-11-23 10:50（Asia/Shanghai）。本窗口内最明确的官方新增是 OpenAI 首席科学家 Jakub Pachocki 发布的研究文章：以困惑度 / 交叉熵损失观察预训练进展，并倡议行业围绕透明度、安全评估与能力推进节奏建立共同规范。Codex、ChatGPT 产品发布说明、API changelog 与官方仓库未出现同窗口新版本；社区侧则出现多个关于 Codex 配额消耗过快的当日个案，尚无官方说明能够确认原因。

## Tier 1：编码、Agent 与开发者平台

| 产品 / 能力 | 本轮状态 | 核查结论 |
|---|---|---|
| Codex CLI | 有社区观察 | 未见官方 release；r/codex 汇总帖在 11 月 22–23 日聚合到配额消耗过快及多 Agent 恢复卡住等个案，不能据此断言平台策略变更 |
| VS Code / JetBrains 集成 | 无新增 | 官方文档、变更记录与仓库未发现窗口内可确认更新 |
| Codex cloud / remote tasks / PR agents | 无新增 | 未发现窗口内新的远程任务、PR Agent、环境或配额公告 |
| ChatGPT agentic mode | 无新增 | ChatGPT 发布说明未见窗口内条目 |
| 当前官方 Agent 构建产品 | 无新增 | Responses API 与 Agents SDK Python / TypeScript 未见窗口内 changelog |
| Responses API | 无新增 | API changelog 最近可见更新为 11 月 17 日 |
| Agents SDK Python / TypeScript | 无新增 | 官方仓库、文档未发现窗口内 release |
| Assistants API 弃用 / 迁移 | 无新增 | 未发现迁移日期或要求变化 |
| Realtime API | 无新增 | 未发现窗口内官方更新 |
| 当前 GPT、推理与 Codex 模型族 | 研究信号 | 新文章披露 OpenAI 以内部代码数据集的 log-perplexity 跟踪预训练进展，但没有发布新模型或新 API |

## Tier 2：ChatGPT 产品面

| 产品组 | 状态 | 说明 |
|---|---|---|
| 浏览器 / Operator 能力、桌面应用 | 无新增 | 官方发布说明未见窗口内新条目 |
| GPTs / GPT Store、Canvas | 无新增 | 未发现可核实更新 |
| Sora / 视频、GPT Image / DALL·E | 无新增 | 未发现窗口内官方发布 |
| Voice、Connectors / MCP | 无新增 | 官方发布说明与开发者 changelog 均未见窗口内条目 |

## Tier 3：行业方案与安全

OpenAI 在 [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/) 中提出，将困惑度视为跨代模型预训练进展的重要观察指标，并倡议前沿实验室建立共同透明度、安全评估及推进限制。文章明确承认该指标难以跨实验室直接比较、无法覆盖推理链等后训练进展，也不直接等于具体任务能力，因此不应把文中的内部数字当成通用能力排名。Enterprise、Business、Edu、Gov、Science 及具体行业产品未检出窗口内新发布。

<figure class="source-image">
  <a href="https://openai.com/index/perplexity-and-intelligence/"><img src="https://images.ctfassets.net/kftzwdyauwt9/6rIIhCRSKrhIfe385Onmcz/aca2d190553c62fd5d49efb5d5ce1eb6/perplexity-and-intelligence-social.png?w=1600&amp;h=900&amp;fit=fill" alt="OpenAI《Perplexity and Intelligence》研究文章的官方分享图" loading="lazy" /></a>
  <figcaption><a href="https://openai.com/index/perplexity-and-intelligence/">图片来源：OpenAI</a></figcaption>
</figure>

## 官方更新（最新优先）

### 困惑度、智能与共同安全节奏

OpenAI 首席科学家 Jakub Pachocki 在 11 月 22 日发布 [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/)。文章披露 OpenAI 自 GPT-3.5 起在固定的内部代码留出集上跟踪 log-perplexity，并主张行业探索可比较的透明度框架，以便在能力跃迁前建立监控、红队和推进限制。其价值更多在于提出一种可讨论的上游度量与治理提案，而非新产品发布或可直接复现的模型排行榜。

## Love

本轮没有达到可单独列为正向口碑的 24 小时高可信用户样本。官方研究发布不计作正向口碑。

## Hate

- r/codex 的持续更新汇总在 11 月 22–23 日记录了两个近期“配额异常快速消耗”报告，并同时收录文件变更摘要缺失、外部磁盘权限、多 Agent 交接恢复卡住等个案：[公开汇总帖](https://www.reddit.com/r/codex/comments/1tjfxcf/anyone_else_ask_here_about_current_codex_issues/)。该页面由社区机器人聚合，不能证明问题普遍存在或由产品策略变化引起。

## 情绪判断

- **方向：中性偏负；置信度：低。** 官方新增是研究与治理主张，社区负面样本集中在配额透明度和 Codex 可靠性，但数量少且多数缺少可复现实验。
- **主要疑问：** 配额消耗变化究竟来自模型选择、推理强度、缓存计费、客户端行为还是服务端策略，现有公开证据无法区分。
- **需要继续观察：** OpenAI 是否发布配额说明、状态事件、Codex changelog 或可验证的客户端修复。

## 比较与生产力观察

[Hacker News 讨论](https://news.ycombinator.com/item?id=50601525) 很快将文章引向“困惑度是否能跨模型、跨实验室比较”的争论；这与原文自己列出的数据集差异和指标脱离具体任务等限制一致。本窗口没有具名且可复现的评测支持 Codex 与 Claude Code、Cline、Pi Coding Agent、DeepSeek Harness / DSH、Cursor 等工具的胜负结论；开源 harness 的完整扫描详见开源专题页。

## 日期未确认

本轮未保留新的日期未确认条目。OpenAI News 页面已明确标注研究文章为 2026-11-22。

## 观察池

- [Hacker News 讨论](https://news.ycombinator.com/item?id=50601525) 提供快速增长的外部讨论，但积分与评论数持续变化，因此不记录快照数字，也不把评论当作事实。
- [r/codex 问题汇总](https://www.reddit.com/r/codex/comments/1tjfxcf/anyone_else_ask_here_about_current_codex_issues/) 目前只支持“存在个案”的判断；等待官方状态页、变更记录或更多可复现证据。

## 来源链接

1. [Perplexity and Intelligence](https://openai.com/index/perplexity-and-intelligence/)
2. [Perplexity and Intelligence — Hacker News 讨论](https://news.ycombinator.com/item?id=50601525)
3. [ANYONE ELSE? — Codex issues and workarounds](https://www.reddit.com/r/codex/comments/1tjfxcf/anyone_else_ask_here_about_current_codex_issues/)

## 采集状态

- 已检查：OpenAI News / Research / Product、Developer API changelog、模型与弃用文档、ChatGPT / Enterprise / Model Release Notes、Codex changelog 与 GitHub releases、Developer Community、Responses API、Agents SDK、Realtime API，以及 Reddit、HN、X、YouTube 和开发者播客。
- 失败来源：X 无法稳定取得原帖完整时间与互动量；YouTube 无可核实的官方 24 小时新发布；Codex GitHub releases 无本窗口稳定版；部分 Reddit 独立帖子已删除或仅能看到标题。
- 初始候选 10 条，保留 3 条来源；最终来源不为 0，未触发二次补搜。

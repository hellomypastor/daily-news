---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-23T00:00:00+08:00"
updatedAt: "2026-09-23T10:47:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Introducing GPT-6 Sol and Luna"
featuredUrl: "https://openai.com/index/introducing-gpt-6-sol-and-luna/"
featuredSummary: "OpenAI 发布 GPT-6 Sol 与 Luna，公布 Codex、Work、桌面和 API 可用性，以及编码、缓存与对齐信息。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-22"
featuredTags: ["GPT-6","Codex","Agent"]
tags:
  - "比较"
  - "观察池"
  - "日期未确认"
  - "社区口碑"
  - "Agent"
  - "API"
  - "ChatGPT"
  - "ChatGPT Work"
  - "Codex"
  - "GPT-6"
  - "Hate"
  - "OpenAI"
  - "Responses API"
---

## 今日概览

采集窗口：**2026-09-22 10:47 至 2026-09-23 10:47（Asia/Shanghai）**。本轮唯一明确的官方主线是 GPT-6 Sol 与 GPT-6 Luna 发布：两款推理模型进入 API，并向 ChatGPT Work 与 Codex 的 Plus、Pro、Business、Enterprise、Edu 用户推出；Free 与 Go 用户可在桌面端试用 Luna，但它们尚未进入普通 Chat。官方还把更低价格、Agent 长上下文缓存与编码效率作为重点。

## Tier 1：编码、Agent 与开发平台

| 必查项 | 本轮结论 |
|---|---|
| Codex CLI | **有更新**：GPT-6 Sol / Luna 开始在 Codex 推出；未发现独立 CLI 版本公告。 |
| VS Code / JetBrains 集成 | 模型可用性随 Codex 推出；未发现独立 IDE 集成公告。 |
| Codex cloud / remote tasks / PR agents | 新模型适用于 Codex，但未发现云任务或 PR Agent 的独立功能更新。 |
| ChatGPT agentic mode | 无独立新增；新模型仅确认进入 Work 与 Codex，尚未进入普通 Chat。 |
| 当前官方 Agent 构建产品 | 无独立新增；Responses API、Agents API/SDK 仍按现行文档。 |
| Responses API | **有更新**：`gpt-6-sol` 与 `gpt-6-luna` 支持 Responses API。 |
| Agents SDK Python / TypeScript | 无独立 release 公告。 |
| Assistants API 迁移 / 弃用 | 未发现本窗口内状态变化；继续以官方 migration / deprecations 页为准。 |
| Realtime API | 无新增。 |
| GPT / reasoning / Codex 模型族 | **有更新**：GPT-6 Sol 与 GPT-6 Luna 正式发布。 |

## Tier 2：ChatGPT 产品面

| 产品面 | 本轮结论 |
|---|---|
| Browser / Operator、Desktop | Free / Go 可在桌面端使用 GPT-6 Luna；浏览器与 Operator 无独立新增。 |
| GPTs / GPT Store、Canvas | 无新增。 |
| Sora / video、GPT Image / DALL·E | 无新增。 |
| Voice | 无新增。 |
| Connectors / MCP | 无新增。 |

## Tier 3：企业、安全与行业方案

- Business、Enterprise 与 Edu 被列入 GPT-6 Sol / Luna 的 Work 与 Codex 推出范围。
- 官方称两款模型继承 Astra 的对齐改进，并公布编码欺骗等内部评测；这些是厂商评测，不等同于独立复现。
- Enterprise、Gov、Science 与其他行业方案未发现本窗口内独立更新。

## 官方更新（由新到旧）

### GPT-6 Sol 与 GPT-6 Luna 发布

OpenAI 的[发布文章](https://openai.com/index/introducing-gpt-6-sol-and-luna/)确认：Sol 与 Luna 在 ChatGPT Work 和 Codex 中面向 Plus、Pro、Business、Enterprise、Edu 推出，Free 与 Go 可在桌面端访问 Luna；两款模型暂未进入普通 Chat。API 名称分别为 `gpt-6-sol` 与 `gpt-6-luna`。

官方[API changelog](https://developers.openai.com/api/docs/changelog)进一步确认两款模型支持文本、图像输入，经 Responses API 与 Chat Completions API 输出文本。272K 以内标准价每百万 token：Sol 输入 $2、缓存输入 $0.20、输出 $10；Luna 输入 $0.10、缓存输入 $0.01、输出 $0.50。

开发者社区的[官方公告帖](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna/1399925)补充称，相比 GPT-5.6 的促销价，Sol 与 Luna 的 API 价格降低 50%，并再次明确推出范围。

编码侧，OpenAI 报告 Sol max 在 DeepSWE v1.1 为 68.8%，Luna max 为 66.6%；这属于官方披露，页面也提示生产环境输出可能因系统提示词和工具不同而有差异。缓存侧，GPT-6 的缓存读取折扣为 90%，调整 reasoning effort 或工具可用性时可保留先前上下文复用，且支持显式 cache breakpoints。

## Love

- r/OpenAI 的[发布讨论](https://www.reddit.com/r/OpenAI/comments/1wnivaq/openai_launches_gpt6_sol_luna_astra_intelligence/)把低价格、缓存复用和 Agent 编码性价比视为主要亮点；这是社区解读，不是独立基准验证。
- r/OpenaiCodex 有用户报告[Codex 内出现升级提示](https://www.reddit.com/r/OpenaiCodex/comments/1wntocv/gpt_6_sol_available/)，与官方分阶段推出说法方向一致，但单用户观察不能证明所有账户已完成 rollout。

## Hate

- r/ChatGPT 的[讨论](https://www.reddit.com/r/ChatGPT/comments/1wnj0l8/psa_gpt6_sol_just_launched_chatgpt_plus_still/)主要不满新模型尚未进入普通 Chat；这一可用性边界由官方公告确认，但情绪强度仅代表样本帖。
- r/OpenAI 的[早期实测讨论](https://www.reddit.com/r/OpenAI/comments/1wnlhhu/misunderstanding_about_new_models/)认为体感更像 GPT-5.6 的增量改进，最明显优势是价格；这是匿名用户主观体验，尚无可复现实验。

## 情绪判断

**谨慎偏正面，置信度中等。** 正面证据集中在官方定价、缓存能力和 Codex 可用性；负面证据集中在普通 Chat 缺席，以及少量用户对能力跃迁有限的主观判断。社区样本仍早、数量有限，不能据此推断整体口碑。官方公告不计入正面情绪。

## 比较观察

- 官方把 Astra 定位为更高能力档，Sol 偏生产主力，Luna 偏高吞吐低成本；不要把价格层级直接写成所有任务上的能力排序。
- 官方与 Claude 的 DeepSWE / OSWorld 对比来自厂商报告，需等待独立复现；社区[基准汇总讨论](https://www.reddit.com/r/OpenAI/comments/1wnk30g/opus_55_and_gpt6_sol_dropped_on_the_same_day_so_i/)提出 Claude Opus 5.5 在其汇总表中多项领先，但数据拼表和运行设置仍需逐项核验。
- Cline、Pi Coding Agent、DeepSeek Harness / DSH、Claude Code 与 Cursor 的完整产品扫描留给开源 Harness 专题；本页仅记录新 OpenAI 模型可能改变这些 Harness 的路由与成本选择。

## 日期未确认

上述 Reddit 帖可确认页面日期为 9 月 22–23 日，但公开页面未稳定给出可换算到本窗口截止时刻的精确时间，因此均作为社区候选保留，不将其互动量或覆盖范围写成事实。

## 观察池

- 分阶段 rollout 可能导致不同账户看到模型的时间不同；需后续观察 Codex、Work、桌面端与普通 Chat 的实际覆盖。
- 官方编码、事实性与对齐数据均需独立评测复现；特别是跨模型成本比较依赖 effort、token 用量和 Harness 配置。

## 来源链接

- [OpenAI：Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
- [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)
- [OpenAI Developer Community：官方公告](https://community.openai.com/t/announcing-gpt-6-sol-and-gpt-6-luna/1399925)
- [r/OpenAI：发布讨论](https://www.reddit.com/r/OpenAI/comments/1wnivaq/openai_launches_gpt6_sol_luna_astra_intelligence/)
- [r/OpenaiCodex：Codex 可用性观察](https://www.reddit.com/r/OpenaiCodex/comments/1wntocv/gpt_6_sol_available/)
- [r/ChatGPT：普通 Chat 可用性讨论](https://www.reddit.com/r/ChatGPT/comments/1wnj0l8/psa_gpt6_sol_just_launched_chatgpt_plus_still/)
- [r/OpenAI：早期实测观点](https://www.reddit.com/r/OpenAI/comments/1wnlhhu/misunderstanding_about_new_models/)
- [r/OpenAI：跨模型基准汇总讨论](https://www.reddit.com/r/OpenAI/comments/1wnk30g/opus_55_and_gpt6_sol_dropped_on_the_same_day_so_i/)

## 采集状态

已检查 OpenAI 新闻、API / 模型 / 弃用文档、ChatGPT 与 Codex 更新、GitHub、Developer Community，以及 Reddit、Hacker News、X、YouTube 和可信媒体。初始候选 **9** 条，去重并按证据分层后保留 **8** 个来源；最终来源非零，未触发二次补搜。失败项：X 未登录搜索不稳定；Hacker News 与 YouTube 未检出可独立核验的新增材料。

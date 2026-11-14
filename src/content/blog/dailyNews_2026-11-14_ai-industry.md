---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-11-14T00:00:00+08:00"
updatedAt: "2026-11-14T11:31:00+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "Gemini 4 Hydrogen Model Card"
featuredUrl: "https://deepmind.google/models/model-cards/gemini-4-hydrogen/"
featuredSummary: "Google 将 Gemini 4 Hydrogen 定位为面向快速编码、子 Agent 编排和多模态知识工作的高效模型，并披露能力与安全评测。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-11-12"
featuredTags: ["Gemini","Agent","Coding","近两日补充"]
tags:
  - "近两日补充"
  - "近三日补充"
  - "Agent"
  - "Agent Skills"
  - "AI"
  - "Coding"
  - "Coding Agent"
  - "Context Compaction"
  - "Gemini"
  - "Genomics"
  - "Industry"
  - "Multimodal"
  - "Podcast"
  - "Preview"
  - "Qwen"
  - "Research"
  - "Science"
  - "Tool Use"
---

## 今日概览

采集窗口：2026-11-13 11:31 至 2026-11-14 11:31（Asia/Shanghai）。严格 24 小时窗口内未发现足够明确的新厂商发布；本页按规范保留近 48 小时与近 72 小时的官方补充。重点是 Google DeepMind 面向快速编码与 Agent 工作流的 Gemini 4 Hydrogen、Microsoft Research 对长时编码 Agent 上下文压缩的生产级研究，以及 Google DeepMind AlphaGenome 2 与阿里云 Qwen4-Max 预览。

## 优先动态（过去 24 小时）

本轮未发现能由官方原文和明确时间共同确认、且落在严格 24 小时窗口内的新发布。Anthropic 与 OpenAI 仍已完整检查；Claude Code 更新及服务事故详见 Claude 专题页，OpenAI 相关动态详见 OpenAI 专题页。

## 近两日补充（24–48 小时）

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Google DeepMind | [Gemini 4 Hydrogen 模型卡](https://deepmind.google/models/model-cards/gemini-4-hydrogen/) | 模型 / Agent | 2026-11-12，官方 | Hydrogen 定位于快速、低延迟的编码与 Agent 工作流，支持四档思考强度；官方模型卡披露 Agent 编码、知识工作、计算机使用与安全评测。 | 它展示 Google 将前沿模型家族细分为长时推理与快速执行层，尤其强调作为子 Agent 被编排的用途；具体分数均为厂商评测，不能直接外推为通用领先。 |
| Microsoft Research | [Research Focus #98](https://www.microsoft.com/en-us/research/podcast/microsoft-research-focus-edition-98/) | 研究播客 | 2026-11-12，官方 | 节目介绍 CompactionBench 与 APEC：对 1,350 万次编码会话的研究显示仅 7.8% 触发压缩，却占 44.2% token 消耗；异步渐进压缩在实验中最高降低 25.4% 成本和 9.6% 执行时间。 | 这是 Agent harness 的系统效率问题，而非单纯模型能力比较；大规模生产轨迹让 context compaction 的延迟、缓存与成本权衡更可测。 |

## 近三日补充（48–72 小时）

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Google DeepMind | [AlphaGenome 2](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/) | 科学模型 / API | 2026-11-11，官方 | 新一代 DNA 序列模型以细胞类型或状态作为条件，基于超过 1 亿个单细胞档案训练；已向非商业研究开放 API，商业研究为私有预览。 | 它把基础模型与专业科研 Agent 工具衔接起来；官方称稍后会在 Google Antigravity 中提供 AlphaGenome 2 Skills，但尚未把“即将提供”写成已上线。 |
| Alibaba Cloud / Qwen | [Qwen4-Max-Preview](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen4-max-preview) | 多模态模型预览 | 2026-11-11，官方 | 预览模型支持文本、图像和视频理解、深度推理、联网搜索、工具调用与结构化输出；仅在 Token Plan 提供，预览至 11 月 25 日 24:00（UTC+8）后退役。 | 这是限时、限定套餐的预览而非正式 GA；其 OpenAI / Anthropic API 兼容与工具调用能力值得 Agent 开发者评估。 |

## 例行扫描

| 范围 | 结果 |
|---|---|
| Anthropic / OpenAI | 已检查。Claude Code 与服务状态详见 Claude 专题页；OpenAI 动态详见 OpenAI 专题页，本页不重复常规产品条目。 |
| Meta、Mistral、Cohere | 官方新闻、研究与更新入口未发现窗口内可核实新增。 |
| 百度、腾讯、DeepSeek、智谱、Moonshot/Kimi、StepFun、MiniMax | 已逐项检查官方入口；未将聚合站点传言或无明确日期条目升级为事实。 |
| NVIDIA、Hugging Face、LangChain、LlamaIndex | 官方博客、研究与变更入口未见本轮需单列的新发布。 |
| Cline、Pi Coding Agent、DeepSeek Harness / DSH | 已检查公司、仓库与文档；本轮未发现融资、合作、企业采用、分发或生态级信号。常规提交与版本留给开源专题页。 |

## xAI / Grok 专项检查

已显式检查 xAI News、Grok 文档、API 与模型变更入口、官方仓库，并覆盖模型 / API、DeepSearch、语音、编码、工具调用与 Agent 能力。窗口内无新的官方可报告动态。旧的 Voice Agent Builder 与 Grok Code 资料未为证明检查而重复收录。

## 播客

Microsoft Research Focus #98 是本轮唯一保留的官方研究播客。Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 与厂商播客均已检查，窗口内未找到发布日期清晰且与本页主题高度相关的新一期。

## 日期未确认

未发现值得保留且仅缺发布日期的高相关官方候选。

## 观察池

- 若干二手摘要声称 11 月 13 日有更多模型和公司人事变化，但未能在对应厂商官方入口完成核对，未列入确认动态。
- Google DeepMind 表示 AlphaGenome 2 Skills 将在 Antigravity 中推出；目前是路线信号，不是已上线功能。
- Gemini 4 Hydrogen 模型卡的横向分数来自 Google 自测；需等待独立、可复现实验后再作跨模型强弱结论。

## 一句话总结

本轮没有严格 24 小时新发布，近三日信号显示厂商继续沿着“快速执行型子 Agent、可测的上下文压缩、专业科研 Skills 与多模态工具调用”推进。

## 来源链接

- [Gemini 4 Hydrogen 模型卡](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
- [Microsoft Research Focus #98](https://www.microsoft.com/en-us/research/podcast/microsoft-research-focus-edition-98/)
- [AlphaGenome 2](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/)
- [Qwen4-Max-Preview](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen4-max-preview)

## 采集状态

已检查 30 组厂商、研究、Coding Agent 公司与播客入口，包括强制的 xAI/Grok news、docs、API/model changelog 与官方仓库。初始候选 17 条，经官方原文、发布时间和主题边界核对后保留 4 个页面内唯一 URL；严格 24 小时为 0 条，近两日 2 条、近三日 2 条。最终来源不为 0，未触发二次补搜。失败入口及原因已记录在 `scan.failedSources`。

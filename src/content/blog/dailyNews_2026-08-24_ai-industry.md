---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-24T00:00:00+08:00"
updatedAt: "2026-08-24T16:07:55+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "From Atari to EVE Online: Building on 15 Years of AI Research in Games"
featuredUrl: "https://deepmind.google/blog/from-atari-to-eve-online-building-on-15-years-of-ai-research-in-games/"
featuredSummary: "DeepMind 介绍以游戏环境研究长期学习、适应和记忆的最新合作方向。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-08-21"
featuredTags: ["Google DeepMind","Research","Agent"]
tags:
  - "定价"
  - "观察池"
  - "日期未确认"
  - "Agent"
  - "Agent Security"
  - "AI"
  - "ARC-AGI-3"
  - "DeepSeek"
  - "Doubao"
  - "Google DeepMind"
  - "Grok"
  - "Grok 4.6"
  - "Grok Bot"
  - "Harness"
  - "Industry"
  - "Industry Analysis"
  - "NVIDIA"
  - "OpenShell"
  - "Podcast"
  - "Qwen"
  - "Research"
  - "Simulation"
  - "Vertex AI"
  - "xAI"
---

## 今日概览

采集窗口：**2026-08-23 16:02 至 2026-08-24 16:02（Asia/Shanghai）**。本轮没有在可公开核验的厂商原始发布页中发现明确落入 24 小时窗口的新产品或模型发布；累计保留既有来源，并在近三日分区补入两条 8 月 21 日的 xAI 官方动态。

## 优先动态（过去 24 小时）

| 厂商 | 动态 | 类型 | 日期/状态 | 摘要与意义 |
|---|---|---|---|---|
| DeepSeek | [周末低谷时段价格信号](https://www.lyceumnews.com/the-lyceum-ai-daily-aug-23-2026/) | 商业/定价 | 2026-08-23；**可信二手、原始公告未定位** | Lyceum 的当日汇总援引中文媒体称，DeepSeek 自 8 月 23 日起将周末纳入 API 低谷优惠时段。若后续获得官方价格页确认，可能影响长时 Agent 任务的调度成本；当前不作为已确认官方发布。 |

## 常规厂商扫描

Anthropic 与 OpenAI 官方入口已检查，本窗口未发现需要在行业页重复的新条目。Google、Meta、Microsoft、Mistral、Cohere、Qwen、Seed、百度、腾讯、DeepSeek、智谱、Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain 与 LlamaIndex 均完成入口检查，未硬凑无动态条目。

## 播客

已检查 Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 及厂商播客；无 24 小时内新一期，Latent Space 的 8 月 21 日节目列入近三日补充，8 月 22 日行业分析列入近两日补充。

## 近两日补充

| 来源 | 标题 | 类型 | 日期/状态 | 摘要与意义 |
|---|---|---|---|---|
| Latent Space | [The Evolution of the Agent Harness](https://www.latent.space/p/attention-interface) | 行业分析/Agent Harness | 2026-08-22；原始文章 | 文章以 ReAct、早期自治 Agent、IDE 协作与终端 Agent 为线索，论证模型训练与 Harness 共同演化，并预测 Harness 的重心会转向权限、身份、信任与人类注意力调度。它是技术生态分析，不是厂商产品发布；对 Agent 平台评估的启示是应同时考察模型与运行环境，而非只比较裸模型。 |

## 近三日补充

| 厂商 | 标题 | 类型 | 日期/状态 | 摘要与意义 |
|---|---|---|---|---|
| Google DeepMind | [From Atari to EVE Online: Building on 15 Years of AI Research in Games](https://deepmind.google/blog/from-atari-to-eve-online-building-on-15-years-of-ai-research-in-games/) | 研究合作 | 2026-08-21；官方 | DeepMind 回顾游戏环境对 Atari、围棋与 StarCraft 研究的作用，并披露与游戏开发者探索更长时间尺度学习、适应和记忆的合作；它是 Agent 长程记忆与开放环境研究的邻近信号，而非新模型发布。 |
| NVIDIA | [NVIDIA AVO Reaches 100% on ARC-AGI-3](https://developer.nvidia.com/blog/nvidia-avo-reaches-100-on-arc-agi-3-demonstrating-a-frontier-level-general-purpose-architecture-for-long-horizon-autonomous-agents/) | Agent 架构/基准 | 2026-08-21；官方 | AVO 以持久记忆、监督和工具循环支持长时自主任务，官方报告其在 ARC-AGI-3 公开集完成 25 个环境、183 关；实验涉及 Claude Opus 5（详见 Claude 专题页）与有限的 GPT-5.6 Sol 子集对比（详见 OpenAI 专题页），不应将系统成绩归因为单一模型能力。 |
| NVIDIA | [Where Security Fits in an AI Agent Stack](https://developer.nvidia.com/blog/where-security-fits-in-an-ai-agent-stack/) | Agent 安全/架构 | 2026-08-21；官方 | 文章将行为引导与权威强制分层，主张在 harness 之下的运行时与基础设施实施最小权限、隔离、即时授权与审计；对可编程 Agent 栈的生产安全边界具有直接参考价值。 |
| Latent Space | [Simulation: the new Scaling Law — Joon Sung Park, Simile AI](https://www.latent.space/p/simile) | 播客/仿真 Agent | 2026-08-21；原始节目 | 节目讨论从 Generative Agents 到人类行为基础模型、数字双胞胎与群体仿真的路线，强调访谈、交易、观察与随机试验数据对评估行为仿真的意义。 |
| xAI | [Grok Bot is now included with more plans](https://x.ai/news/grok-bot-more-plans) | Agent 产品/套餐 | 2026-08-21；官方，具体时刻未披露 | Grok Bot 扩展至 SuperGrok Plus、Cursor Pro+ 与全部 Cursor Teams 套餐；官方将其定位为可在应用和收件箱中持续工作、并行执行任务的数字队友，显示 xAI 正扩大常驻云端 Agent 的可用范围。 |
| xAI | [Grok 4.6 on Vertex AI](https://x.ai/news/grok-4-6-vertex-ai) | 模型分发/API | 2026-08-21；官方，具体时刻未披露 | Grok 4.6 进入 Google Cloud Vertex Model Garden，官方列出 500k 上下文、可配置推理强度及输入/缓存输入/输出价格；这为企业在托管云上调用长时 Agent 模型增加了正式入口。 |

## xAI / Grok 专项检查

已显式检查 xAI News、Grok 文档、API/model changelog、xai-org 官方仓库，并对 Grok 的模型、API、DeepSearch、语音、编码、工具调用和 Agent 能力逐项检索。本轮 24 小时内未发现新公告、文档变更或仓库 release；补录 8 月 21 日 Grok Bot 扩大套餐覆盖与 Grok 4.6 上架 Vertex AI 两条官方动态。8 月 19 日的 [Grok Build 全平台开放](https://x.ai/news/grok-build-for-everyone) 已超出 72 小时窗口，保留为观察背景，不上升为今日动态。

## 日期未确认

- DeepSeek 周末低谷价格目前只有可信二手汇总可访问，尚未定位到可公开打开的官方价格公告；因此发布时间与生效范围仍待核。
- **可信二手、厂商原文未定位**：新浪财经 8 月 23 日转载的[界面新闻 AI 应用周度观察](https://finance.sina.com.cn/stock/t/2026-08-23/doc-inipichq2453300.shtml)称，通义 App 于 8 月 22 日更名为“千问”并升级至 5.0.0。可访问页面能确认二手报道时间，但本轮未找到阿里官方公告或可核验的应用商店版本记录，因此不作为官方确认发布。

## 观察池

- **前瞻说法、尚未发生**：同一份界面新闻周报称豆包“最快将于下周”发布独立办公 App；这是二手前瞻信息，产品是否发布、名称与时间均待字节跳动官方确认。
- **较旧官方背景**：Grok Build 已覆盖网页与移动端，并允许生成应用调用 Grok 的聊天、图片和语音能力；本轮仅用于判断 xAI 产品线是否继续演进，不代表 24 小时内发布。
- **检索摘要候选，未收录为来源**：搜索结果出现视觉模型、融资与收购类说法，但缺少可直接核对的厂商原始发布，继续观察。

## 一句话总结

过去 24 小时仍以待官方确认的厂商信号为主；近三日补充显示 xAI 正通过更多订阅套餐与 Vertex AI 扩大 Grok Agent 和模型的分发范围。

## 采集状态

- 已检查来源：Anthropic News/Research/Docs；OpenAI News/Research/Developer changelog；Google DeepMind；Meta AI；Microsoft Research/AI；xAI News、Grok 文档、API/model changelog 与 xai-org 官方仓库，并逐项检索 Grok 模型/API、DeepSearch、语音、编码、工具调用和 Agent；Mistral、Cohere、Qwen/阿里云、Seed、百度、腾讯混元、DeepSeek、智谱、Kimi、StepFun、MiniMax；NVIDIA Developer/Research、Hugging Face、LangChain、LlamaIndex；Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 及厂商播客；新浪财经转载的界面新闻 AI 应用周度观察。
- 失败来源：X 时间线未登录无法稳定读取；部分脚本渲染列表页缺少精确时间；部分中文厂商仅有搜索索引摘要；界面新闻原转载入口无法打开，因此相关说法未作为官方确认发布。
- 初始候选：12 条；保留：10 条来源（含日期未确认与观察背景）；二次补搜：否（最终来源不为 0）。

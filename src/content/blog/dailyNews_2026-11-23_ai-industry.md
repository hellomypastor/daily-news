---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-11-23T00:00:00+08:00"
updatedAt: "2026-11-23T10:52:00+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTags: []
tags:
  - "较旧背景"
  - "日期未确认"
  - "Agent"
  - "AI"
  - "Foundry"
  - "Healthcare"
  - "Hosted Agent"
  - "Industry"
  - "Microsoft"
  - "Microsoft Research"
  - "NVIDIA"
  - "Omniverse"
  - "Research"
  - "World Model"
---

## 今日概览

截至 2026-11-23 10:52（Asia/Shanghai），严格 24 小时窗口内未发现能够由厂商原文同时确认发布时间与关键事实的重大模型或 Agent 发布。本页保留两条日期精度不足但有一手页面支撑的微软候选，以及一条较旧的 NVIDIA 工程观察；它们均未被写成‘今日发布’。

## 优先动态（过去 24 小时）

本轮无经严格时间核验的优先动态。Anthropic 与 OpenAI 的相关扫描详见 Claude、OpenAI 专题页；没有用跨日旧公告填充。

## 例行扫描

| 厂商 / 机构 | 状态 | 说明 |
|---|---|---|
| xAI / Grok | 无新增 | 已单独检查 xAI 新闻、Grok 文档、API/模型说明与官方仓库，覆盖模型/API、DeepSearch、语音、编码、工具调用及 Agent 能力；未发现窗口内可核实新公告。 |
| Google / Meta / Mistral / Cohere | 无新增 | 官方新闻、研究与产品入口未发现可核实的 24 小时新条目。 |
| Qwen / Seed / DeepSeek / GLM / Kimi / StepFun / MiniMax | 无新增 | 官方入口未发现可同时核实原文和窗口时间的新条目；动态列表摘要不作为事实。 |
| Cline / Pi / DeepSeek Harness | 无行业级新增 | 已检查产品方向、分发、合作、融资、企业采用、评测与生态增长；窗口内讨论以例行工程问题和社区插件为主，详见开源专题页。 |

## 日期未确认

### Microsoft Foundry：托管 Agent 私网排障指南

微软 Foundry 团队的 [《Hosted agents in your own virtual network: five checks when the Agents page times out》](https://devblogs.microsoft.com/foundry/hosted-agents-private-network-setup/) 标注 2026-11-21，但未给出可换算到上海时区的具体时刻，因此不强行归入 24–48 小时或 48–72 小时。文章说明托管 Agent 会话及项目级数据代理运行在委派子网，并给出私有 DNS、Entra ID、TLS 检查、对等网络与子网回收的诊断路径。它的重要性在于把生产 Agent 的网络边界、身份和可观测故障落到可操作的基础设施检查。

### Microsoft Research：MANAS 脑健康世界模型研究计划

Microsoft Research 列表将 [MANAS](https://www.microsoft.com/en-us/research/project/manas-2/) 标注为 2026-11-21。项目探索解剖结构感知表征与脑部变化世界模型；由于只公开日级日期，本轮将它放入日期未确认，而不宣称属于精确 48 小时窗口。

## 观察池

### 较旧背景：NVIDIA Omniverse 与前沿 Agent 的仿真工作流

NVIDIA 在 2026-11-19 发布的 [Omniverse 工程案例汇总](https://blogs.nvidia.com/blog/developers-simulation-frontier-ai-agents/) 已超过本轮 72 小时重点窗口，故仅作较旧背景。原文展示开发者如何用前沿模型配合 Omniverse、Isaac Sim 和开放技能构建数字孪生、机器人抓取、语音 VR 与批量物理仿真；其行业信号是 Agent 正在进入可检查、可回放的工程仿真环节，而不只是文本工作流。

## 播客扫描

Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 及厂商播客均已检查。聚合入口显示最近节目多停留在 11 月 19–21 日，且部分无法稳定回到原始节目页确认精确时间，本轮未把聚合摘要列为正式条目。

## 今日判断

今日行业面没有足够证据支持‘重大模型发布’结论；更值得持续观察的是托管 Agent 的私网落地与研究型世界模型，但两者的时间边界需要继续核实。

## 来源链接

- [Microsoft Foundry：Hosted agents in your own virtual network](https://devblogs.microsoft.com/foundry/hosted-agents-private-network-setup/)
- [Microsoft Research：MANAS](https://www.microsoft.com/en-us/research/project/manas-2/)
- [NVIDIA：How Developers Turn Ideas Into Simulations With Frontier AI Agents](https://blogs.nvidia.com/blog/developers-simulation-frontier-ai-agents/)

## 采集状态

- 采集窗口：2026-11-22 10:52 至 2026-11-23 10:52（Asia/Shanghai）；补充检查延伸至 72 小时，较旧内容只进观察池。
- 已检查来源：Anthropic、OpenAI、Google、Meta、Microsoft、xAI/Grok、Mistral、Cohere、中外主要模型厂商、NVIDIA、Hugging Face、LangChain/LlamaIndex、Coding Agent 厂商与指定播客。
- 失败来源：xAI/Grok 无窗口内新增；部分中国厂商页面动态渲染；播客聚合缺少原始时间；若干列表只有日级日期。
- 初始候选数：9；保留来源数：3；二次补搜：否（最终来源不为 0）。

---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-19T00:00:00+08:00"
updatedAt: "2026-09-19T10:50:37+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "The new AgentCore runtime: Elastic, optimized, and consistently fast starts"
featuredUrl: "https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts/"
featuredSummary: "新版托管 Runtime 改善会话内存回收、冷启动一致性和按实际使用计费。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-09-18 23:31 +08:00"
featuredTags: ["AgentCore","Managed Runtime","已验证"]
featuredImage: "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2026/09/17/ML-21766-featured-image.png"
featuredImageAlt: "AWS AgentCore Runtime 官方文章配图"
featuredImageCaption: "图片来源：AWS Machine Learning Blog"
tags:
  - "邻近信号"
  - "内部采用"
  - "托管迁移"
  - "已验证"
  - "AaaS"
  - "Agent"
  - "AgentCore"
  - "Cloud Agent"
  - "Managed Agent"
  - "Managed Runtime"
---

## 今日概览

采集窗口：**2026-09-18 10:46 至 2026-09-19 10:46（Asia/Shanghai）**。AWS 在 9 月 18 日发布新版 AgentCore Runtime，并发表托管迁移实践；原文发布时间元数据分别为 9 月 18 日 07:31 与 07:38（-08:00），换算为上海时间 23:31 与 23:38，均落入本轮窗口。本轮未找到其他可核实的 AaaS 发布。

## 重点动态

- **AWS AgentCore Runtime（9 月 18 日 23:31 +08:00）**：[新版 Runtime 公告](https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts/)称，托管计算层可随会话结束释放内存，并使冷启动时间在不同容器大小和 Agent 并发下保持稳定；计费跟随实际使用。AWS 将其定位于交互式与长期后台 Agent 的执行环境。此为托管执行能力更新，不是单纯模型 API。
- **AWS AgentCore 迁移实践（9 月 18 日 23:38 +08:00）**：[同日技术文章](https://aws.amazon.com/blogs/machine-learning/migrating-multi-model-ai-agents-to-amazon-bedrock-agentcore-runtime/)把多模型医疗 Agent 从自管 ECS/Fargate 迁至 AgentCore Runtime，保留三模型编排与检索流程，同时由平台管理容器生命周期、扩缩容、身份和可观测性。这是参考实现，不应写成客户生产部署。

<figure class="source-image">
  <a href="https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts/"><img src="https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2026/09/17/ML-21766-featured-image.png" alt="AWS AgentCore Runtime 官方文章配图" loading="lazy" /></a>
  <figcaption><a href="https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts/">图片来源：AWS Machine Learning Blog</a></figcaption>
</figure>

## 远程 / 云端 Agent 执行

新版 AgentCore 的会话资源回收、冷启动一致性和按使用计费，直接影响长任务及并发执行的运营成本。迁移案例则展示从自管容器转向托管 Agent 生命周期的工程路径。

## 海外厂商

- **Cognition Devin（强制检查）**：检查 Recent Updates、News、Docs、Pricing、Enterprise、环境、并发和集成。未查到 9 月 18–19 日新增托管异步执行、定价或企业接入公告；不重复上一日已收录的 9 月 16 日说明。
- **xAI/Grok（强制检查）**：检查 News、Grok Bot、Build Changelog、Automations、Agent Tools API 与 Enterprise。9 月 18 日的 Grok Voice Transcribe 2.0 是语音模型发布，不具备新的托管 Agent 生命周期证据，不列作 AaaS 条目；Grok Bot 较旧资料不跨日重复。
- **Anthropic、OpenAI、Google、Microsoft/GitHub、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph/Amp、Amazon Q**：本轮官方入口未见可核实的新托管任务、远程环境、并发或定价公告。Claude/OpenAI 动态详见对应专题页。

## 中国市场（字节重点）

检查字节 **Coze、火山、Doubao、Trae、Seed**，以及阿里 Bailian/Qoder、腾讯元宝/云、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax、DeepSeek 的公开入口。未核实到本窗口内满足托管执行定义的新公告。

## Coding Agent / Harness 的 AaaS 边界

Cline、Pi Coding Agent/pi-mono、DeepSeek Harness/DSH，以及 OpenCode、Aider、Continue、Roo Code 均检查了官方仓库、发布记录及托管入口。未找到本轮新增由供应商管理后台任务、远程环境或并发服务的证据；本地和自托管 harness 更新归开源专题。

## AaaS vs MaaS / PaaS

AgentCore Runtime 负责 Agent 会话、容器和运行资源生命周期，属于 AaaS。仅提供模型推理、语音转录或通用云计算的更新不自动归入 AaaS。

## 日期未确认

本轮收录的两篇 AWS 原文在页面元数据中给出发布时间，已换算为上海时间；其他候选若只有日期，仍需继续核对。

## 未证实传闻

未发现足以记录、且直接涉及托管执行的可归属单源传闻。

## 邻近信号观察池

- [Google 内部代码安全 Agent 实践](https://cloud.google.com/blog/topics/systems/using-ai-agents-to-secure-google-infrastructure)发表于 9 月 18 日，描述在 Google 基础设施中持续扫描代码变更，并提及 Gemini Enterprise Agent Platform。它证明内部采用场景，但未宣布新的对外托管 Agent 服务或价格，故仅列邻近信号。

## 趋势

已核实的信号集中在托管 Runtime 的资源弹性和从自管系统迁移的可操作性；两篇 AWS 文章同属 AgentCore 主题，不能据此断言全行业增长趋势。

## 来源链接

1. [AWS：The new AgentCore runtime](https://aws.amazon.com/blogs/machine-learning/the-new-agentcore-runtime-elastic-optimized-and-consistently-fast-starts/) — 9 月 18 日 23:31 +08:00（页面元数据）。
2. [AWS：Migrating multi-model AI agents](https://aws.amazon.com/blogs/machine-learning/migrating-multi-model-ai-agents-to-amazon-bedrock-agentcore-runtime/) — 9 月 18 日 23:38 +08:00（页面元数据）。
3. [Google：Using AI agents to secure Google infrastructure](https://cloud.google.com/blog/topics/systems/using-ai-agents-to-secure-google-infrastructure) — 9 月 18 日，邻近信号。

## 采集状态

- **已检查来源**：AWS AgentCore 官方博客/Release Notes；Cognition Devin 官方更新、文档、定价、企业、环境、并发和集成；xAI News/Grok Bot/Build Changelog/Automations/Agent Tools API/Enterprise；Google、Microsoft/GitHub、Anthropic、OpenAI、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph/Amp、Amazon Q；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code；主要中国厂商公开入口。
- **失败来源与原因**：部分中国厂商动态页依赖客户端渲染或登录，未据搜索片段确认产品事实；Devin/xAI 未见本轮符合定义的新发布。
- **初始候选数**：7；**保留来源数**：3（AaaS 2，邻近信号 1）；**二次补搜**：否（来源非零）。

今日扫描完成，共 **2 条 AaaS 动态、1 条邻近信号**，重点：AWS AgentCore Runtime 的资源弹性与托管迁移路径；两篇原文发布时间元数据均落入本轮窗口。

---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-04T00:00:00+08:00"
updatedAt: "2026-11-04T10:49:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "LangSmith BYOC is now available on AWS, Azure, and Google Cloud"
featuredUrl: "https://www.langchain.com/blog/langsmith-byoc-aws-gc-azure"
featuredSummary: "LangSmith BYOC 扩展到 AWS、Azure 与 Google Cloud；客户保留数据平面，LangChain 管理平台运维与扩缩容，并提供 Managed Deep Agents endpoints。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-03"
featuredTags: ["AaaS","BYOC","Managed Agent","Enterprise"]
featuredImage: "https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6aea10da672af68b149a7fc2_6aea100d5e02bf39048b42b8_byoc-multicloud-cover.png"
featuredImageAlt: "LangSmith BYOC 跨 AWS、Azure 与 Google Cloud 的多云部署示意图"
featuredImageCaption: "图片来源：LangChain"
tags:
  - "AaaS"
  - "Agent"
  - "BYOC"
  - "Cloud Agent"
  - "Enterprise"
  - "Managed Agent"
---

## 今日概览

采集窗口：2026-11-03 10:49 至 2026-11-04 10:49（Asia/Shanghai）。本轮确认 1 条符合 AaaS 定义的新增：LangChain 把 LangSmith BYOC 从 AWS 扩展到 Azure 与 Google Cloud，并在三种数据平面中提供 Managed Deep Agents endpoints。其余候选要么是较旧背景，要么只是本地/自托管 harness 更新，不作为 AaaS 新发布。

## 重点动态

### LangSmith BYOC 扩展为三云托管数据平面

LangChain 于 11 月 3 日发布 [LangSmith BYOC is now available on AWS, Azure, and Google Cloud](https://www.langchain.com/blog/langsmith-byoc-aws-gc-azure)：AWS 已 GA，Azure 与 Google Cloud 为 Beta。客户保有云账户与数据平面，LangChain 管理控制面、编排、扩缩容、平台更新和运行时依赖；官方说明三种数据平面都可运行 Managed Deep Agents endpoints。

<figure class="source-image">
  <a href="https://www.langchain.com/blog/langsmith-byoc-aws-gc-azure"><img src="https://cdn.prod.website-files.com/65c81e88c254bb0f97633a71/6aea10da672af68b149a7fc2_6aea100d5e02bf39048b42b8_byoc-multicloud-cover.png" alt="LangSmith BYOC 跨 AWS、Azure 与 Google Cloud 的多云部署示意图" loading="lazy" /></a>
  <figcaption><a href="https://www.langchain.com/blog/langsmith-byoc-aws-gc-azure">图片来源：LangChain</a></figcaption>
</figure>

这符合本页 AaaS 定义：它不只是模型 API，而是由供应商持续管理 Agent 部署、运行基础设施、可观测数据与扩缩容。边界也很清楚——敏感 traces、prompts、datasets、部署和 secrets 留在客户数据平面；LangChain 的控制面保存认证、组织/工作区配置与计费元数据。Azure 沙箱支持仍标记为 coming soon，不应写成已可用。

## 远程 / 云端 Agent 执行

| 平台 | 本轮状态 | AaaS 判断 |
|---|---|---|
| LangSmith BYOC / Managed Deep Agents | 11 月 3 日确认三云覆盖 | 已验证 AaaS：托管控制面、数据平面运维、Agent endpoints、扩缩容与迁移 |
| Cognition Devin | 已检查官方产品、文档、更新、定价、企业与集成入口；窗口内无新增 | 既有产品符合托管异步 coding Agent，但本轮不重复旧背景来源 |
| xAI Grok Bot / Grok Build | 已检查官方新闻、Bot、Build、API/Console changelog；窗口内无新增 | 既有云电脑 Bot 与后台 workflow 符合 AaaS，但没有本轮新事件，不用旧文凑条目 |
| Cline / Pi / DSH / OpenCode / Aider / Continue / Roo Code | 已逐一快速检查官方仓库、release 或 changelog | DSH 11 月 3 日 release 涉及宿主自动化、后台工作流等本地/自托管 harness 能力；未发现由供应商托管执行生命周期的新证据，故不计入 AaaS |

## 海外厂商

Anthropic、OpenAI、Google、Microsoft、Replit、Cognition、xAI、Cursor、Lindy、CrewAI、LangChain、GitHub、Amazon、Cloudflare、Factory 与 Sourcegraph/Amp 的公开入口均已检查。除 LangSmith BYOC 外，没有发现能在截止时刻前确认、同时满足托管执行或企业控制面定义的新发布。Claude 与 OpenAI 的相关链接若出现，详见对应专题页。

## 中国厂商

已检查字节 Coze/火山/Doubao/Trae/Seed（重点关注托管 workflow 与远程环境）、阿里百炼/Qoder/通义/夸克、腾讯元宝/混元/云、百度 AgentBuilder/Comate、智谱、Moonshot/Kimi、MiniMax、DeepSeek 及可信创业公司公开入口。本轮没有发现可在窗口内核实且满足 AaaS 定义的新动态；普通模型/API 更新不计入此页。

## AaaS 与 MaaS / PaaS 边界

- AaaS：供应商负责 Agent 执行生命周期、异步任务、环境、部署、状态、观测或企业控制面。本轮 LangSmith BYOC 属于此类。
- MaaS：只提供模型推理 API、模型版本或价格变化，不足以进入重点动态。
- PaaS：只提供通用容器、数据库或云资源，也不足以进入重点动态；只有明确承载并管理 Agent runtime 时才收录。

## 日期未确认

本轮未保留日期无法确认但足以单独列出的 AaaS 产品候选。

## 未证实传闻

本轮没有保留单一消息源泄露或无法核对的产品发布传闻。

## 邻近信号观察池

- DeepSeek Harness/DSH 的 11 月 3 日预发布包含统一宿主级自动化任务、后台 workflow 与 SDK 扩展等能力，但官方仓库证据指向本地或自托管 harness，并未显示 DeepSeek 代管远程环境、并发额度、企业控制面或执行生命周期。因此只记录“已检查”，不将其误写成 AaaS。完整 release 动态详见开源专题页。
- 单纯的 Grok 模型/API、普通 coding harness release 与模型路由更新均属于行业或开源专题；本轮没有把它们提升为托管 Agent 发布。

## 趋势

企业 Agent 平台正在从“厂商云托管”细分为“供应商管理、数据留在客户云”的 BYOC 模式。今天的 LangSmith 更新表明，控制面托管、客户 VPC 数据平面和 Managed Agent endpoints 可以被打包为同一商业服务；对受监管团队而言，运行位置与运维责任的分拆正在成为采购维度。

## 来源链接

正文仅把 LangChain 11 月 3 日原文列为本轮动态来源。Devin、Grok 和 coding harness 的旧背景页没有为证明“已检查”而重复加入 sources。

## 采集状态

- 已检查：海外与中国主要 AaaS 厂商、Devin 强制入口、Grok 强制入口，以及 Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的托管边界。
- 失败来源：Devin 部分信息需登录；部分中国厂商页与社交入口依赖客户端或登录，无法稳定核时。
- 初始候选：6 条；最终保留：1 条已验证动态，另记录 2 组不进入 sources 的边界观察。
- 二次补搜：未执行；本页最终来源为 1，不触发零来源二次补搜。

今日扫描完成，共 1 条动态，重点：LangSmith BYOC 把受管理的 Agent 数据平面和 Managed Deep Agents endpoints 扩展到 AWS、Azure 与 Google Cloud。

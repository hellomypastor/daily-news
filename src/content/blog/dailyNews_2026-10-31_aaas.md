---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-10-31T00:00:00+08:00"
updatedAt: "2026-10-31T10:56:56+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Jules Turndown"
featuredUrl: "https://jules.google/docs/changelog/2026-10-29"
featuredSummary: "Google 宣布 Jules 将于 2026 年底结束服务，并提供设置、环境、定时任务、memory 与完整 session 历史导出。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-10-29（精确时间未确认）"
featuredTags: ["Google Jules","AaaS","近三日补充","Lifecycle"]
tags:
  - "近三日补充"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "AWS DevOps Agent"
  - "Cloud Agent"
  - "Cloudflare"
  - "Google Jules"
  - "Lifecycle"
  - "Managed Agent"
  - "PaaS"
---

## 今日概览

采集窗口：**2026-10-30 10:56:56 至 2026-10-31 10:56:56（Asia/Shanghai）**。本轮没有发现可同时核验发布时间、且严格落在 24 小时窗口内的 AaaS 新发布。为避免把有价值的边缘证据直接丢弃，保留 Google Jules 停服与导出安排、AWS DevOps Agent 权限变化两条 24–72 小时/日期未确认信号，并把 Cloudflare 私有源 GA 单列为邻近基础设施信号。

## 今日重点

严格 24 小时窗口内暂无已验证 AaaS 产品发布。Google 正在结束 Jules 这一托管异步编码 Agent，并把经验汇入 Antigravity；这不是新功能上线，但对使用托管后台任务、定时任务和云端执行环境的团队构成明确迁移事件。

## 远程 / 云端 Agent 执行

| 平台 | 状态 | AaaS 判断 |
|---|---|---|
| Google Jules | **近三日补充** | [Jules 官方停服说明](https://jules.google/docs/changelog/2026-10-29) 标注 2026-10-29：会话可继续至 11 月 11 日，之后只读，并于 12 月 31 日结束服务；导出覆盖账户设置、环境变量、定时任务、仓库、memory、setup scripts 及完整 session 历史。它直接涉及托管异步执行的生命周期与数据迁移，符合 AaaS 范畴，但不冒充 24 小时内发布。 |
| AWS DevOps Agent | **日期未确认** | [官方 What's new](https://docs.aws.amazon.com/devopsagent/latest/userguide/whats-new.html) 记录 10 月 29 日托管策略新增 Agent Space 范围的只读资产搜索与 webhook 列表权限；页面未给具体时刻，且更接近托管控制面的权限维护而非新品发布。 |
| Claude cloud sessions / Managed Agents | 无独立新增 | 已检查云会话、环境、网关、预算和策略控制；Claude Code 版本变化详见 Claude 专题页。本页不重复把 CLI/SDK 常规更新包装成新 AaaS 发布。 |
| OpenAI Codex cloud / Agents API | 无独立新增 | 已检查远程任务、PR agent、Agents API、Responses API；窗口内没有新的托管生命周期公告，详见 OpenAI 专题页。 |

## 海外厂商

- **Cognition Devin（必查）**：检查官方产品、文档、API、定价、企业与集成入口，重点核对托管异步 session、环境、并发、Outposts、企业控制和集成；未发现窗口内可核验新增。既有能力不重复收录为今日动态。
- **xAI / Grok（必查）**：检查官方新闻、API/docs/changelog 与仓库，并专项搜索 hosted Agent、async task、remote execution、tool use 与 coding；未发现同时满足 AaaS 定义和窗口要求的新公告。普通 Grok 模型/API 信息留在行业专题，不进入本页。
- **Google**：Jules 停服是本轮最重要的平台生命周期信号；官方说明称其经验正在影响 Google Antigravity，但未据此推断 Antigravity 已承接 Jules 的托管后台任务。
- **Microsoft / GitHub、Replit、Cursor、Lindy、CrewAI、LangGraph Platform、Amazon Q、Cloudflare、Factory、Sourcegraph/Amp**：已检查公开发布与 changelog，未见窗口内可核验且需单列的新 AaaS 发布。

## 中国市场（字节重点）

- **字节系 Coze / 火山 / Doubao / Trae / Seed**：已检查托管运行、后台任务、远程环境与企业控制相关入口；未见窗口内可核验新增。
- **阿里百炼 / Qoder / 通义 / 夸克、腾讯元宝 / 混元 / 云、百度 AgentBuilder / Comate、智谱、Kimi、MiniMax、DeepSeek**：公开入口未发现可同时核验时间与托管执行生命周期的新发布；不以页面已有功能填充今日动态。

## Coding Agent / Harness 云化边界检查

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 均完成 hosted/cloud/background/scheduled/remote/concurrency/enterprise/pricing 专项检查。本轮发现的 OpenCode 与 DSH 版本属于本地或自托管 harness 更新，完整情况详见开源专题页；没有证据表明服务商新增托管执行生命周期，因此不纳入 AaaS 动态。

## AaaS 与 MaaS / PaaS 边界

本页只把服务商实际管理 Agent 会话、环境、调度、并发、生命周期、企业控制面或远程执行的产品计作 AaaS。模型 API 本身属于 MaaS；只提供网络、沙箱或通用计算而不管理 Agent 任务生命周期的能力属于 PaaS/邻近基础设施。

## 日期未确认

- **AWS DevOps Agent 权限维护**：官方 [What's new](https://docs.aws.amazon.com/devopsagent/latest/userguide/whats-new.html) 标注 10 月 29 日，但缺少具体发布时间，无法精确归入 24–48 小时或 48–72 小时。其意义在于托管 Agent Space 控制面权限继续细化，不代表新 Agent 产品上线。

## 未证实传闻

本轮未保留单一来源泄漏或无法追溯原文的产品传闻。

## 邻近信号观察池

- **Cloudflare 私有源 GA**：[官方公告](https://blog.cloudflare.com/private-origins-public-to-private/) 标注 2026-10-30，允许通过既有 Cloudflare One 连接把代理 DNS 指向私有 IP，并明确提到 AI agent backends 与 MCP servers 可在不暴露公网源站的情况下接受外部请求。它有助于 Agent 后端接入与网络隔离，但不管理 Agent 的任务生命周期，因此列为 PaaS/网络邻近信号，而非 AaaS 发布。

## 趋势判断

今天更值得关注的是**托管 Agent 的可退出性与控制面**：Jules 导出把环境变量、定时任务、memory 和完整 session 历史都纳入迁移范围，说明 AaaS 采购不能只比较模型效果，还应审查状态可携带性、停服流程、审计和权限边界。AWS 的细粒度权限维护与 Cloudflare 的私有源接入从侧面强化了同一方向，但不构成 24 小时内行业爆发。

## 来源链接

1. [Google Jules：Jules Turndown](https://jules.google/docs/changelog/2026-10-29)
2. [AWS DevOps Agent：What's new](https://docs.aws.amazon.com/devopsagent/latest/userguide/whats-new.html)
3. [Cloudflare services for private origins is now generally available](https://blog.cloudflare.com/private-origins-public-to-private/)

## 采集状态

- 已检查：Claude/OpenAI 托管 Agent 入口，Google Jules/Vertex/Agent Platform，Microsoft/GitHub，Devin，xAI/Grok，主要海外托管 Agent 平台，中国主要厂商，以及七个 coding-agent harness 的云化信号。
- 失败/受限：Devin 公开索引缺少窗口内稳定时间线；Grok 未找到满足 AaaS 定义的当日公告；社交时间线访问不稳定；部分中国厂商页面无可核验更新时间。
- 初始候选 8 条，保留 3 个来源；二次补搜：否（最终来源不为 0）。本页不配置图片，因为三条保留项均为近三日补充、日期未确认或邻近信号，按规范不得作为首页图片。

今日扫描完成，共 3 条动态，重点：严格 24 小时窗口暂无已验证新品；Jules 停服迁移凸显托管 Agent 状态可携带性与退出机制的重要性。

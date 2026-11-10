---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-10T00:00:00+08:00"
updatedAt: "2026-11-10T10:46:31+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Agents Changelog: Run Codex, Exo and Nanocode agents on Cloudflare"
featuredUrl: "https://developers.cloudflare.com/changelog/product/agents/"
featuredSummary: "Cloudflare 发布三条 Agent 运行更新：Codex、Exo 与 Nanocode 可借助 Durable Objects、Workers 或 Sandboxes 获得持久会话、工具环境与中断恢复能力。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-09"
featuredTags: ["Cloudflare","Hosted Agent","Durable Execution","Remote Environment"]
featuredImage: "https://developers.cloudflare.com/og-changelog.png"
featuredImageAlt: "Cloudflare 开发者文档 Changelog 官方分享图"
featuredImageCaption: "图片来源：Cloudflare Developers Agents Changelog"
tags:
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Cloudflare"
  - "Durable Execution"
  - "Hosted Agent"
  - "Managed Agent"
  - "Remote Environment"
---

## 今日概览

采集主窗口：**2026-11-09 10:42 至 2026-11-10 10:42（Asia/Shanghai）**。本轮确认一组来自 Cloudflare 官方 changelog 的 24 小时 AaaS 更新：Cloudflare 把 Codex、Exo 与 Nanocode 三种 Agent / harness 接到 Durable Objects、Workers 或 Sandboxes，使会话、文件、工具结果和中断恢复可由云端运行时持久管理。Devin 与 Grok 已按强制项逐一检查，窗口内无可核实的新公告。

## 今日重点

- **Cloudflare 为三类 Agent 增加可恢复云端运行路径。** 官方 [`Agents Changelog`](https://developers.cloudflare.com/changelog/product/agents/) 在 11 月 9 日列出 Codex、Exo 和 Nanocode 三项更新；共同点是把 Agent 的执行生命周期放入 Cloudflare 的 Durable Objects / Workers / Sandboxes。
- **这组更新属于 AaaS 基础能力，而不是模型 API 上新。** Codex 示例持久化任务、会话、事件与工作区；Exo 用 Durable Objects 协调会话、用 Sandboxes 跑 Linux 工具；Nanocode 保存进度与工具结果，并以 alarms 恢复待办工作。
- **Cognition Devin、xAI/Grok 无 24h 新增。** 已检查环境、并发、定价、企业入口、异步与远程执行渠道；没有复用昨日较旧来源来充数。

<figure class="source-image">
  <a href="https://developers.cloudflare.com/changelog/product/agents/"><img src="https://developers.cloudflare.com/og-changelog.png" alt="Cloudflare 开发者文档 Changelog 官方分享图" loading="lazy" /></a>
  <figcaption><a href="https://developers.cloudflare.com/changelog/product/agents/">图片来源：Cloudflare Developers Agents Changelog</a></figcaption>
</figure>

## 远程 / 云端 Agent 执行

| 平台 | 状态 | 核心能力 | AaaS 判断 |
|---|---|---|---|
| Cloudflare + Codex | 24h 已验证 | Durable Object 中运行 Codex agent loop；Tasks 记录模型与工具调用，Sessions 保存/压缩上下文，Streams 可重放事件，Workspace 提供持久文件 | 符合：云端运行时管理执行、状态与中断恢复；示例仍标为 experimental |
| Cloudflare + Exo | 24h 已验证 | Durable Objects 协调会话，Cloudflare Sandboxes 提供 Linux 工具环境，可通过 CLI 或 HTTP API 调用 | 符合：提供远程环境与托管执行构件；适配器由 Exo 项目维护 |
| Cloudflare + Nanocode | 24h 已验证 | Rust/Wasm 引擎在 Durable Objects 运行，SQLite 保存进度和工具结果，alarms 恢复未完成工作 | 符合：具备持久会话与故障恢复；主机实现由 Nanocode 项目维护 |
| Cognition Devin | 无新增 | 已查托管异步执行、环境、并发、定价、企业接入与集成 | 官方首页最新文章早于窗口；不将第三方连续性记录提升为新品发布 |
| xAI / Grok | 无新增 | 已查 Grok Bot、Build、工具调用、编码、远程执行、企业与 API Agent 能力 | 普通模型/API 更新不构成 AaaS；本轮没有符合定义的新公告 |

## 海外厂商

Cloudflare 的三项更新共享同一份官方 changelog，因此本页以一个来源支持三条产品路径，避免页内重复 URL。Codex 路径使用 OpenAI 模型和 Codex turn-processing 代码，但本次事实主体是 Cloudflare 的托管运行时，**OpenAI 生态动态详见 OpenAI 专题页**。Nanocode 实现了 Codex 与 Claude Code 的提示及工具约定，但本次同样是 Cloudflare 主机能力，**Claude 生态动态详见 Claude 专题页**。

Cognition 官网最新可见文章为 11 月 4 日的 SWE-2 Flash；公开搜索还发现 11 月 9 日的第三方 Devin Desktop 连续性记录，但未取得同日官方变更正文，故没有把它写成确认发布。xAI News、Grok Bot / Build changelog 与官方文档亦未显示主窗口内新的托管 Agent、异步任务、远程环境、并发或企业控制公告。

## 中国厂商（字节系重点）

字节 Coze / 火山引擎 / 豆包 / Trae / Seed 已重点检查；阿里百炼 / Qoder、腾讯云 / 混元、百度 AgentBuilder / Comate、智谱、Kimi、MiniMax、DeepSeek 也完成检索。本轮未发现可由官方页面确认的 24 小时托管执行、配额、定价或企业控制更新。

## 开源 Coding Harness 的云端边界

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH 已检查 hosted、cloud、background、remote environment、concurrency、enterprise 与 pricing 证据；OpenCode、Aider、Continue、Roo Code 也完成快速检查。本轮它们自身没有新的托管服务公告。Cloudflare 对 Codex、Exo、Nanocode 的集成之所以进入本页，是因为证据明确包含持久状态、远程工具环境和中断恢复；普通本地 CLI、IDE 或自托管 release 仍只属于开源/Harness 专题。

## 日期未确认

- **Devin Desktop 连续性线索。** 第三方聚合页显示 11 月 9 日有 Continuity 记录，但没有公开列出可与官方正文交叉核验的变更详情；因此仅记录为已检查线索，不加入 `sources`，也不宣称 Devin 发布了新功能。

## 未证实传闻

无。本轮没有发现值得保留且能说明单一来源边界的窗口内泄露。

## 邻近信号观察池

- Grok Bot / Build 已具备云端计算机、持久 Agent 和后台工作等 AaaS 方向，但最新可见相关条目早于本窗口；本页不重复昨日背景链接。
- 各模型 SDK 或普通 API 的工具调用、流式事件字段变化属于 MaaS / 开发框架信号，除非同时出现托管执行生命周期证据，否则不计作 AaaS 发布。

## AaaS 与 MaaS / PaaS 边界

- 模型或推理 API 上新本身是 MaaS；只有服务同时管理 Agent 会话、任务、环境、恢复或治理时才进入 AaaS。
- Durable Objects、Workers 与 Sandboxes 单独看是 PaaS；本次之所以计入，是因为官方示例把它们组合成有任务日志、会话持久化、工具环境和恢复机制的 Agent 运行层。
- 官方示例、第三方适配器与正式托管 SaaS 的成熟度不同。本页确认的是可用的云端执行路径，不把 experimental 示例表述成全面 GA 商业服务。

## 趋势

今天的明确信号是 AaaS 正从“单一厂商提供完整 Agent”扩展为“云运行时承载多种 harness”：同一套持久任务、会话、工作区和恢复原语可服务不同 Agent loop，但适配器归属与实验状态仍需逐项说明。

## 来源链接

1. [Cloudflare Agents Changelog：Codex、Exo 与 Nanocode 云端运行更新](https://developers.cloudflare.com/changelog/product/agents/)

## 采集状态

- 已检查：Cloudflare 官方 Agents / Workers / Durable Objects / Sandboxes；Cognition Devin；xAI/Grok；海外主要托管 Agent；国内厂商；Cline / Pi / DSH 与 OpenCode / Aider / Continue / Roo Code 的云端边界。
- 失败来源：Devin 未找到带官方正文的 24h 独立条目；xAI 最新可见 AaaS 相关更新早于窗口；X 未登录无法稳定复核；部分中国厂商索引只返回较旧或无日期条目。
- 初始候选：9；保留来源：1；已验证 24h 动态：3（同一官方来源）；二次补搜：否。

今日扫描完成，共 3 条动态，重点：Cloudflare 为 Codex、Exo 与 Nanocode 提供持久、可恢复的云端 Agent 运行路径。

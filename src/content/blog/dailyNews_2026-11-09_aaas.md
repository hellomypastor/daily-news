---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-09T00:00:00+08:00"
updatedAt: "2026-11-09T10:45:36+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "二手来源"
  - "观察池"
  - "较旧背景"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Hosted Agent"
  - "Jules"
  - "Managed Agent"
  - "Qoder"
---

## 今日概览

采集主窗口：**2026-11-08 10:45 至 2026-11-09 10:45（Asia/Shanghai）**。本轮在官方渠道中**未确认 24 小时内新的 AaaS 发布**。按规范完成扩大中英文关键词、备用入口、GitHub 与可信二手来源的第二轮补搜；保留两条较旧但有边界价值的候选，均不作为今日上线事实或首页精选。

## 今日重点

- **无已验证的 24 小时新发布。** 未发现新的托管执行、异步任务、远程环境、并发、企业控制面或定价公告。
- OpenAI 两个 Agents SDK alpha 在窗口内更新了会话存储、托管工具、A2A 与预算等开发能力，但这不是一个新的 AaaS 商业服务发布，故仅在边界说明中提及，**详见 OpenAI 专题页**。
- Cognition Devin 与 xAI/Grok 均已显式检查；没有为了满足必查要求而复用昨日较旧背景来源。

## 远程 / 云端 Agent 执行

| 平台 | 24h 状态 | 证据边界 |
|---|---|---|
| Cognition Devin | 无新增 | 已检查官方 News/Blog、Devin 文档/changelog、环境、并发、定价、企业接入与集成入口；未见窗口内可核实新条目。 |
| xAI / Grok | 无新增 | 已检查 xAI News、API 与 Grok Build changelog、工具/编码/远程执行入口；普通模型/API 变化不自动构成 AaaS，本轮亦未见满足定义的新公告。 |
| OpenAI Codex / Agents | 无独立 AaaS 发布 | 窗口内 SDK alpha 更新属于开发框架能力，未据此宣称新托管服务上线；详见 OpenAI 专题页。 |
| Anthropic managed / hosted Agents | 无新增 | 已检查托管 Agent、Agent SDK、Skills 与 Claude Code 云端入口；无窗口内新公告。 |
| Google / Microsoft / GitHub / Replit / Cursor | 无新增 | 已检查云端异步执行与 PR Agent 入口；未见窗口内可核实的新发布。 |
| Cloudflare / LangGraph / CrewAI / Factory / Amp | 无新增 | 已检查托管运行时、后台任务、沙箱与企业控制入口；未见窗口内新公告。 |

## 海外厂商

Cognition Devin 的托管异步执行、环境、并发、定价、企业访问和集成渠道均已逐项搜索；本轮没有发现可验证的新条目。xAI/Grok 也已按 AaaS 定义检查：其较旧 Grok Build 工作流与长任务能力说明产品具备相关方向，但因不是本窗口新动态，且昨日已记录过 xAI 背景来源，本页不重复收录旧链接。

## 中国厂商（字节系重点）

字节 Coze / 火山引擎 / 豆包 / Trae / Seed 已重点检查，未见窗口内新的托管执行、配额、定价或企业控制公告。阿里百炼 / Qoder、腾讯云 / 混元、百度 AgentBuilder / Comate、智谱、Kimi、MiniMax、DeepSeek 也未发现可验证的 24 小时新增。

## 开源 Coding Harness 的云端边界

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH 已检查 hosted、cloud、background、remote environment、concurrency、enterprise 与 pricing 证据；OpenCode、Aider、Continue、Roo Code 也完成快速检查。本轮没有发现能证明服务商托管其执行生命周期的新发布。普通本地 CLI、IDE、桌面或自托管 harness 更新不进入 AaaS。

## 日期未确认

无。本轮检索到的近期二手线索若缺少官方交叉验证，均未提升为确认事实。

## 未证实传闻

无。没有发现值得保留且至少能说明单一来源的窗口内产品泄露。

## 邻近信号观察池

- 阿里云官方 [`Qoder Cloud Agents 更新日志`](https://changelog.qoder.com/zh/cloud-agents) 显示 2026-10-30 的 1.0 更新提供全托管 Agents API、Batch 异步处理与长时任务。它符合 AaaS 定义，但已超过本轮 72 小时范围，仅作为**较旧背景**；不代表今日更新，也不用于页面图片或首页精选。
- 可信二手报道 [`Google shutters Jules`](https://www.techradar.com/pro/google-kills-off-jules-its-ai-coding-agent-which-promised-to-do-all-the-jobs-you-didnt-want-to) 发布于 2026-11-02，称 Google 将 Jules 的异步编码经验整合到统一 Agent 方向。该信息已超过 72 小时且本轮未找到同日官方页面，故标为**较旧、二手来源观察**，不作为今日事实标题。

## AaaS 与 MaaS / PaaS 边界

- 模型或 API 上新本身是 MaaS，不进入 AaaS，除非同时出现托管 Agent 生命周期、后台任务、环境或治理证据。
- 通用沙箱、云主机或容器是 PaaS；只有服务替用户管理 Agent 会话、工具、执行与恢复时才计入 AaaS。
- SDK 增加工具封装或会话接口是重要邻近信号，但不能自动等同于一个可购买、可托管的 Agent 服务正式发布。

## 趋势

今天的有效信号不是“又有一个平台上线”，而是托管 Agent 产品正在围绕持久会话、批处理、异步恢复、权限和企业治理形成共同能力栈；但本轮没有新的 24 小时证据足以更新市场判断。

## 来源链接

1. [Qoder Cloud Agents 更新日志（较旧背景）](https://changelog.qoder.com/zh/cloud-agents)
2. [TechRadar：Google shutters Jules（较旧、二手来源观察）](https://www.techradar.com/pro/google-kills-off-jules-its-ai-coding-agent-which-promised-to-do-all-the-jobs-you-didnt-want-to)

## 采集状态

- 已检查：Cognition Devin 与 xAI/Grok 的指定官方渠道；海外主要托管 Agent、国内厂商、远程执行平台，以及 Cline / Pi / DSH 和 OpenCode / Aider / Continue / Roo Code 的云端边界。
- 失败来源：Cognition 未出现带明确窗口日期的新条目；xAI 最新可见 AaaS 相关 changelog 早于窗口；X 未登录无法稳定复核；部分中国厂商索引只返回较旧更新。
- 初始候选：5；保留来源：2；已验证 24h 动态：0；二次补搜：是。

今日扫描完成，共 2 条背景/观察动态，重点：24 小时内无可确认 AaaS 新发布，Devin 与 Grok 已完成强制检查。

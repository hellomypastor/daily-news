---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-10-30T00:00:00+08:00"
updatedAt: "2026-10-30T10:47:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Async"
  - "Cloud Agent"
  - "Cloud Coding Agent"
  - "Managed Agent"
  - "Migration"
  - "Pricing"
  - "Remote Environment"
  - "Sandbox"
  - "Service Closure"
---

## 今日概览

本轮严格 24 小时窗口为 **2026-10-29 10:42 至 2026-10-30 10:42（Asia/Shanghai）**。发现三项明确符合 AaaS 定义的一手动态：Managed Deep Agents 增加托管浏览器与异步子 Agent，Google 宣布异步 coding agent Jules 将停止服务并开放配置和会话导出，Amp 为托管 Orb 增加按需 macOS 执行环境。三篇官方页面均只公开 10 月 29 日自然日、没有具体时分，因此统一列入「日期未确认」，不写成严格 24 小时内已确认事实。

Cognition Devin 与 xAI/Grok 已分别核查托管异步执行、环境、并发、定价、企业接入、工具与远程执行入口，本轮均无新的合格动态。

## 重点动态

严格 24 小时内暂无同时核实自然日与具体时刻的新增。以下三项均有官方原文并符合托管执行定义，但时间精度不足，详见「日期未确认」。

## 远程 / 云端 Agent 执行

| 平台 | 能力 | AaaS 证据 | 状态 |
|---|---|---|---|
| LangChain Managed Deep Agents | 浏览器操作与异步子 Agent | 浏览器运行于独立 LangSmith sandbox；子 Agent 可在后台执行、被查询/改向/取消，完成后主动唤醒主 Agent，并把结果送回原 Slack 线程 | 日期未确认 |
| Google Jules | 托管异步 coding agent 停服与数据迁移 | 11 月 11 日后转为只读，12 月 31 日停止；官方提供账户设置、环境变量、定时任务、仓库、记忆、脚本及完整 session 的导出路径 | 日期未确认 |
| Amp Orbs / macOS Satellites | 按需托管 macOS 执行环境 | Linux Orb 可自动启动带 Xcode 和模拟器的新 Mac，远程构建、测试与运行；空闲 20 分钟后删除，并按每小时规格计费 | 日期未确认 |

## 海外厂商

- **LangChain**：Managed Deep Agents v0.10 把长任务下放为不阻塞主对话的异步 subagent。任务拥有独立线程但共享 sandbox，可在主 Agent 空闲时自动触发新的 run；浏览器则由 LangSmith 隔离托管，并支持登录时把控制权交还用户。这是托管执行生命周期与人机审批能力的实质扩展。
- **Google Jules**：这不是新功能发布，而是托管服务收缩信号。官方说明 Jules 将于 2026 年底停止，用户需在 11 月 11 日前完成 session；其异步 coding-agent 经验将转入 Google Antigravity。完整导出覆盖计划、活动日志与补丁，降低迁移时的状态丢失。
- **Amp**：macOS Satellites 将 Orb 的远程执行扩展到 iOS/macOS 构建链。Mac 由服务端约 30 秒启动，代码与 Linux Orb 同步，用户可观看或接管桌面；`mac.medium` / `mac.large` 分别为 2 / 4 美元每小时，处于 beta 等候名单阶段。
- **Cognition Devin（必查）**：已检查 Recent Updates、托管 session、云 VM、并发、Automations、Oncall、Review、定价、企业 RBAC/SSO/SCIM、私网与集成；本轮无新增，不重复较旧背景来源。
- **xAI / Grok（必查）**：已检查 Grok Bot、Developer release notes、持久云电脑、后台任务、connectors、routines、审批与企业能力；本轮未发现新的托管 Agent 生命周期变化。普通 Grok 模型、API 与工具调用信息不计入 AaaS。
- **Anthropic / OpenAI**：已检查 Managed Agents、Agent SDK、Codex cloud/remote、Agents API 与 ChatGPT agent，本轮未发现新的托管执行发布；若出现产品侧更新，详见 Claude 专题页或 OpenAI 专题页。

## 中国市场（字节跳动重点）

已检查字节跳动 Coze、火山引擎、豆包、Trae 与 Seed，以及阿里云百炼/Qoder、腾讯云 Agent 平台、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek。未找到能由公开原始页面核实为本窗口新增的托管执行、并发、定价或企业控制面变化；不以无日期产品页填充正文。

## 日期未确认

1. **Managed Deep Agents v0.10**：LangChain 在 [官方发布](https://www.langchain.com/blog/managed-deep-agents-browser-use-and-asynchronous-subagents) 中加入托管浏览器与异步 subagent。后台任务可被主 Agent 查询、修改和取消，结束时主动通知；页面只有 10 月 29 日自然日，无法确认是否晚于窗口起点。
2. **Google Jules 停止服务**：Jules [官方 changelog](https://jules.google/docs/changelog/2026-10-29) 宣布 11 月 11 日后转只读、12 月 31 日停止，并提供配置、环境变量、定时任务、记忆和全部 session 的导出方案。页面没有具体时分。
3. **Amp macOS Satellites**：Amp [官方公告](https://ampcode.com/news/macos-satellites) 显示，托管 Orb 可按需启动云端 Mac 执行 Xcode 构建、模拟器测试和界面操作，支持用户实时接管，并公布 2 / 4 美元每小时的规格。页面仅有自然日。

## 未证实传闻

本轮未保留单一来源泄漏或无法追溯到官方原文的“新 Agent 云平台”传闻。

## AaaS 与 MaaS / PaaS 边界

- Managed Deep Agents、Jules 与 Amp 均涉及由供应商管理的运行环境、后台任务或完整 session 生命周期，因此属于 AaaS，而不只是模型 API。
- xAI Developer API 的模型、语音或普通 tool calling 若没有托管任务生命周期，仍是 MaaS；本轮未把它们误写为 Grok AaaS。
- Cline、Pi、DSH、OpenCode、Aider、Continue 与 Roo Code 的本地 CLI、IDE、桌面或自托管 harness 更新属于开源专题；只有供应商托管远程环境、异步任务、并发或企业控制面时才进入本页。

## 邻近信号观察池

- **Oxide Cloud Computer**：10 月 29 日新闻稿介绍以隔离 VM 自托管 Claude Code 与 Amp Agent。它更接近企业自建 IaaS/PaaS 方案，并非 Oxide 托管 Agent 生命周期，因此不进入 sources。
- **Coder 企业 Agent 治理访谈**：可信二手采访讨论自托管 workspace、凭据控制面和网络策略，但不是新的官方产品发布；保留为企业执行环境方向信号，不写成新增 AaaS。

## 趋势判断

本轮同时出现“增强”和“收缩”两类信号：LangChain 与 Amp 把后台执行、隔离环境和专用硬件继续产品化，Google 则将独立的 Jules 服务并入更大的 agent-first 平台方向。AaaS 的竞争已不仅是能否远程运行，而是 **任务能否异步续接、环境能否按需扩展、状态能否迁移，以及服务退出时数据能否完整带走**。

## 采集状态

- 已检查：LangChain、Google Jules、Amp、Cognition Devin、xAI/Grok、Anthropic、OpenAI、GitHub/Microsoft、Google Cloud、AWS、Cloudflare、Replit、Cursor、Factory、Sourcegraph、Lindy、CrewAI，以及主要中国厂商；同时核对 Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的托管边界。
- 失败来源：三篇候选均缺少时分；部分中国厂商缺少按时间排序的公开 changelog；X 未登录结果不可稳定核验。
- 初始候选：11 条；保留：3 条唯一来源。
- 二次补搜：否（最终来源不为 0）。

今日扫描完成，共 3 条动态，重点：托管 Agent 正同时向异步子任务、专用远程硬件与可迁移的完整会话状态演进。

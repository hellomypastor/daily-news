---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-06T00:00:00+08:00"
updatedAt: "2026-11-06T10:44:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.2.2-rc.1"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.1"
featuredSummary: "候选版加入本机子 Agent 委派、独立 Git worktree 变更请求流程和开发者统计插件。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-04 21:07 +08:00"
featuredTags: ["DeepSeek Harness","Coding Agent","Release"]
tags:
  - "日期未确认"
  - "Agent"
  - "AI"
  - "Coding Agent"
  - "DeepSeek Harness"
  - "eBPF"
  - "LLM"
  - "Observability"
  - "Open Source"
  - "OpenCode"
  - "PTY"
  - "Release"
---

## 今日概览

本轮窗口为 **2026-11-04 10:44 至 2026-11-06 10:44（Asia/Shanghai）**，技术亮点按 48 小时核验；HN 讨论按最近 24 小时观察。确认两条 Coding Agent / Harness 组件更新：DeepSeek Harness 发布候选版，OpenCode 发布 PTY 进程组件。另保留一项在 HN 当日出现、但原页未标发布日期的系统级 Agent 可观测工具。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 | 证据与意义 |
|---|---|---|
| Cline | 无新增 | 官方 releases 最新可见版本早于 48 小时窗口；本轮未把普通提交包装成发布事件。 |
| Pi Coding Agent / pi-mono | 无 48h 新增 | 官方 release 当前指向 `earendil-works/pi`；v1.5.0 发布于 11 月 2 日，已超出窗口，仅作为已检查背景，不重复收录。 |
| DeepSeek Harness / DSH | **近 48h 新增** | [v0.2.2-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.1) 是候选版，加入实验性 `subagent_oar`、独立 Git worktree 中的变更请求/评审流程，以及按轮次查看上下文、缓存、模型与工具耗时的统计插件。它把多 Agent 委派、隔离工作树与可观测性放进同一 harness。 |
| OpenCode | **24h 新增** | [process-daemon v0.5.0](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.5.0) 发布 `opencode-pty` 0.5.0（protocol 8），并以 `@opencode/pty` 发布到 npm；release notes 信息有限，因此不外推兼容性或性能结论。 |
| Aider | 无新增 | 官方 releases 最新可见稳定版早于本轮窗口。 |
| Continue | 无新增 | 官方仓库已转为只读，当前 release 列表未见窗口内更新。 |
| Roo Code | 无新增 | 官方仓库已归档，产品关闭信息为旧背景；本轮不重复作为新闻。 |

## 已验证技术亮点

### DeepSeek Harness v0.2.2-rc.1：本机子 Agent、工作树与统计插件进入同一候选版

官方 [release notes](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.1) 标明这是预发布版本，发布时间为 2026-11-04 21:07（上海时间）。除多语言和界面调整外，技术主线是：可把独立任务交给本机 Codex 或 Claude CLI 的实验性子 Agent 工具、在独立 Git worktree 中运行会话并查看差异/评审状态，以及按轮次分析上下文、缓存、模型和工具耗时。对 harness 设计而言，这分别对应委派、隔离和可观测性三个关键面。

### OpenCode process-daemon v0.5.0：PTY 协议推进到 8

OpenCode 官方 [release](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.5.0) 于 2026-11-06 01:39（上海时间）发布，说明 `packages/process-daemon` 中的 `opencode-pty` 0.5.0 使用 protocol 8，并同步发布 npm 包。由于发布说明只有这一行，本页仅确认组件与协议版本变化，不推断对终端稳定性或用户体验的具体影响。

## GitHub Trending

GitHub Trending 实时页面本轮请求超时。公开趋势镜像出现若干 Agent 项目，但无法在截止时间前以 GitHub 当日榜单原页复核排名和日增星数，因此不把镜像数字写成已确认事实。

## HN 讨论

最近 24 小时的 HN Algolia newest 检索中，多数 Agent 条目互动较低。AgentSight 的提交在 2026-11-06 06:27（上海时间）被发现，但抓取时仅 2 分、0 评论；这只能证明当日出现于 HN，不能代表社区趋势或采用度。

## 论文 / 研究

本轮检索到的相关论文候选，要么原始发布日期超出 48 小时，要么只有二手/提交时间而无法在截止前确认版本日期；未将其提升为当日已验证亮点。

## 旧文再浮现

未发现同时满足“原文超过 7 天、HN 最近 24 小时重新讨论且有可核验互动量”的高相关条目。

## 日期未确认

### AgentSight：用 eBPF 从系统边界观察 Coding Agent

[AgentSight 官方页面](https://eunomia.dev/agentsight/) 将其描述为本地优先、类似 `top` / `strace` 的 Agent 可观测工具：无需 SDK 或代理即可关联模型调用、进程、文件和网络活动，并列出 Claude Code、Codex、Gemini CLI、OpenCode 等支持对象。页面未提供可确认的发布日期；这里只记录 HN 当日发现时间，不把它表述为 24 小时内发布。

<figure class="source-image">
  <a href="https://eunomia.dev/agentsight/"><img src="https://eunomia.dev/og/default.png" alt="eunomia 开源项目的默认 OpenGraph 图片，用于 AgentSight 系统级 Agent 观测工具页面" loading="lazy" /></a>
  <figcaption><a href="https://eunomia.dev/agentsight/">图片来源：eunomia AgentSight 官方页面</a></figcaption>
</figure>

## 观察池

- Pi v1.5.0（11 月 2 日）包含流式渲染优化、自定义自更新命令和工具参数校验变化，但已超出 48 小时窗口，本轮只在雷达中说明已检查。
- HN 上的 Rivet Agent 编排项目有较高当日讨论度，但其仓库创建/发布节点未在截止前完成核验，暂不纳入 `sources`。
- 多个 Show HN 安全与审批工具只有极低互动，先保留为候选信号，不据此宣称形成趋势。

## 来源链接

- [DeepSeek Harness v0.2.2-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.1)
- [OpenCode process-daemon v0.5.0](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.5.0)
- [AgentSight 官方页面](https://eunomia.dev/agentsight/)

## 采集状态

- 已检查：Cline、Pi、DeepSeek Harness、OpenCode、Aider、Continue、Roo Code 的官方仓库/release/changelog；HN Algolia；GitHub Trending；arXiv；Hugging Face；Simon Willison 与工程博客。
- 失败来源：GitHub Trending 实时 HTML 超时；部分 GitHub 动态 release 页面加载错误，已用官方 REST API 补核；Hugging Face 当日列表无可双重核验的高相关新增。
- 初始候选：16 条；最终保留来源：3 条。
- 二次补搜：否（最终来源不为 0）。

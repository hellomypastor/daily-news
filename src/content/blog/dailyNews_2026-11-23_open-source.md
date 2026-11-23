---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-23T00:00:00+08:00"
updatedAt: "2026-11-23T10:50:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.2.3-alpha.1"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.1"
featuredSummary: "DSH 扩展插件源、任务时间线、代码审阅、会话状态、连接器、MCP OAuth、多 Agent 和 Computer Use 接口。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-22 11:19 +08:00"
featuredTags: ["Coding Agent","Harness","Pre-release"]
tags:
  - "观察池"
  - "较旧背景"
  - "Agent"
  - "AI"
  - "Coding Agent"
  - "Desktop"
  - "Harness"
  - "HN"
  - "LLM"
  - "Memory"
  - "Multi-Agent"
  - "Open Source"
  - "Pre-release"
  - "Research"
  - "Runtime"
  - "Session"
---

## 今日概览

本轮以 2026-11-21 10:50 至 2026-11-23 10:50（Asia/Shanghai）的 48 小时窗口核查开源技术动态。主线集中在 Coding Agent harness：DeepSeek Harness 连发两个 alpha 版本，把插件、连接器、代码审阅、会话状态、多 Agent 和 Computer Use 接口向前推进；两个独立 macOS 项目 AgentDE 与 Agent Hive 则分别强化多会话切换和分层记忆。

## Coding Agent / Harness 雷达

| 项目 | 状态 | 本轮结论 |
|---|---|---|
| Cline | 无新增 | 已检查官方仓库、release 与 changelog；最新正式可见 release 仍为 11 月 21 日 14:05（上海时间）的 v4.1.27，已在前一日页面收录，本轮不跨日重复。 |
| Pi Coding Agent | 无新增 | 已检查原 `badlogic/pi-mono` 重定向后的官方仓库与 release；最新正式可见 release 仍为 11 月 20 日的 v1.6.0，窗口内无新增。 |
| DeepSeek Harness / DSH | 有更新 | [v0.2.3-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.1) 增加 Git 插件源、任务时间线、PR 审阅、会话状态、远程登录、MCP OAuth、连接器和按需工具加载；[alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.2) 随后收紧 Node.js 运行时要求。 |
| OpenCode | 无新增 | 已检查官方仓库、release 与 changelog；最新可见正式 release 为 11 月 18 日，窗口内无新增。 |
| Aider | 无新增 | 已检查官方仓库与 release；窗口内无新增正式发布。 |
| Continue | 无新增 | 已检查官方仓库与 release；窗口内无新增正式发布。 |
| Roo Code | 无新增 | 已检查官方仓库与 release；窗口内无新增正式发布。 |

## 已验证技术精选

### DeepSeek Harness v0.2.3-alpha.1：插件化 harness 扩展到审阅、连接器与多 Agent

[DSH v0.2.3-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.1) 于 11 月 22 日 11:19（上海时间）发布。其范围很广，但与 harness 设计直接相关的变化可以归为四组：插件市场可接 Git/私有仓库并集中管理连接器账号；MCP 加入 OAuth 与凭据自动刷新、工具可按需加载；会话状态面板统一显示工作目录、变更请求、子 Agent、任务和插件；代码审阅支持 GitHub/GitLab 扩展视图与行注解。

同一 release 还加入任务时间线和阻塞/进展报告、跨会话消息、`list_agents` 并发占用信息、SDK 恢复会话权限覆盖，以及以 MCP 暴露 Computer Use 的接口。它显示 DSH 正从本地对话壳扩展为可组合的 Agent 运行与协作层；版本仍是 alpha，接口迁移与稳定性应按预发布看待。

### DSH alpha.2：运行时门槛变化需纳入部署兼容检查

[DSH v0.2.3-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.2) 于 11 月 22 日 19:00（上海时间）发布，唯一列明的变化是 Node.js 最低版本调整为 24.22.3（24.x）或 26.13.1。它不是功能扩展，但会直接影响 CLI、SDK/headless 和插件开发环境的可运行性，因此与 alpha.1 分开记录。

### AgentDE 0.4.1 / 0.4.2：终端 Agent 的原生多会话工作台

[AgentDE v0.4.1](https://github.com/AgentDE/agentde/releases/tag/v0.4.1) 于 11 月 23 日 07:39（上海时间）提供签名并公证的 macOS 下载和 Homebrew cask，并修复 workstream 文件保存、面板答复路由、链接打开边界、内存峰值与路径兼容问题。它把 Claude Code、Codex 等终端 Agent 的长期会话放进原生标签页、状态提示和代码/文件查看器中。

随后发布的 [v0.4.2](https://github.com/AgentDE/agentde/releases/tag/v0.4.2) 增加跨组的 Agent 状态切换器：按工作中、需要用户、已完成状态在最近使用顺序中切换。两版连看，重点不是又一个聊天 UI，而是让同时运行的多个终端 Agent 更容易被发现、接管和恢复。项目仍较新，当前 release 说明不能替代更大规模采用证据。

### Agent Hive 1.6.0：把长期记忆拆成事实、观察与可追溯替换

[Agent Hive v1.6.0](https://github.com/ericwang915/agent-hive/releases/tag/v1.6.0) 于 11 月 22 日 00:14（上海时间）发布。其分层记忆把对话语句保存为事实，再累积为观察；记忆页展示确认次数和支撑句，纠正会留下 `Replaced` 关系，用户手写内容不由自动流程改写。相比每晚重写整页，这种结构更便于追踪来源、纠错和避免错误记忆反复回流。

发布说明明确说明：分层记忆只用 Claude Code 作为 Dreamer 做过三晚模拟测试，其他 CLI 未测；迁移只由单元测试覆盖。因此本页把它视为值得观察的设计实现，而不是已证明跨模型稳定的记忆方案。

## GitHub Trending

本轮检查 overall、Python 与 TypeScript 榜单，但没有取得可复核的历史快照，因此不记录无法确认的日增星标或排名变化。本文项目按官方 release 时间收录，不声称它们进入 Trending。

## HN 讨论

HN newest 在 11 月 23 日出现 AgentDE、Agent Hive 等作者提交，采集时互动很低；这些提交用于发现候选，不作为流行度或采用结论。

## 论文 / 研究

### 旧论文新提交：Harness-Zero

[Harness-Zero 论文](https://arxiv.org/abs/2609.24974) 研究以 Agent 充当 harness、再把搜索得到的 harness 行为蒸馏进模型的路线。原始论文编号显示其并非本窗口首次发布；它在 11 月 23 日被提交到 [HN 讨论页](https://news.ycombinator.com/item?id=50606747)，采集时仅少量互动，因此列为旧内容的新提交，不据此宣称形成趋势。

## 旧文再讨论

除上述 Harness-Zero 外，未发现符合“原文超过 7 天且近 24 小时形成有意义讨论”的条目；其 HN 互动也不足以称为有意义再讨论，故仅保留发现记录。

## 日期未确认

- 本轮没有把无法核实日期的候选写成 48 小时内新发布。

## 观察池

- HN 上出现多个多 Agent、邮箱技能与终端工作台 Show HN，除已有正式 release 的项目外，多数只有作者自述和低互动；已计入候选数，但未把性能或采用宣称写成事实。
- Cline v4.1.27 与 Pi v1.6.0 已在前一日页面收录；当前没有后续 release，按规则不跨日重复较旧背景。

## 来源链接

- [DeepSeek Harness v0.2.3-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.1)
- [DeepSeek Harness v0.2.3-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.2)
- [AgentDE v0.4.1](https://github.com/AgentDE/agentde/releases/tag/v0.4.1)
- [AgentDE v0.4.2](https://github.com/AgentDE/agentde/releases/tag/v0.4.2)
- [Agent Hive v1.6.0](https://github.com/ericwang915/agent-hive/releases/tag/v1.6.0)
- [Harness-Zero paper](https://arxiv.org/abs/2609.24974)
- [HN: Harness-Zero](https://news.ycombinator.com/item?id=50606747)

## 采集状态

- 已检查：Cline、Pi、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库/release/changelog；GitHub Trending、HN/Algolia、arXiv、Hugging Face、Simon Willison，以及 AgentDE/Agent Hive 官方 release。
- 失败/受限：GitHub Trending 缺少可复核历史快照；Hugging Face 与 Simon Willison 本轮无同时满足窗口与主题相关性的新增；低互动 Show HN 不能支持趋势结论。
- 初始候选：18；最终保留来源：7；二次补搜：否（最终来源不为 0）。

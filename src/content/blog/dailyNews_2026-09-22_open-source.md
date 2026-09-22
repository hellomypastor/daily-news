---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-09-22T00:00:00+08:00"
updatedAt: "2026-09-22T10:46:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Pi Coding Agent v0.87.0"
featuredUrl: "https://github.com/earendil-works/pi/releases/tag/v0.87.0"
featuredSummary: "正式发行加入可持久化上下文编辑、可编程扩展边界、完整 transcript 变换与按模型配置的图像输入限制。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-09-22 02:29 +08:00"
featuredTags: ["Pi","Release","Context","Extensions"]
featuredImage: "https://opengraph.githubassets.com/1009f55072f64a3b9a05f8037ac5df380e0c2ff76db27ef67b6220ef30edf65a/earendil-works/pi/releases/tag/v0.87.0"
featuredImageAlt: "Pi Coding Agent v0.87.0 的 GitHub 官方发行卡片"
featuredImageCaption: "图片来源：Pi v0.87.0 官方 GitHub Release OpenGraph 卡片"
tags:
  - "观察池"
  - "Agent"
  - "Agent Framework"
  - "Agent Memory"
  - "AI"
  - "Bedrock"
  - "Benchmark"
  - "Coding Agent"
  - "Computer Use"
  - "Context"
  - "Database"
  - "Environment"
  - "Extensions"
  - "GitHub Trending"
  - "LLM"
  - "Memory"
  - "Open Source"
  - "OpenCode"
  - "Paper"
  - "Pi"
  - "Release"
---

## 今日概览

重点采集窗口：2026-09-20 10:46 至 2026-09-22 10:46（Asia/Shanghai）。本轮确认 Pi 与 OpenCode 各有一项正式发行；Pi 把上下文编辑、压缩和扩展边界进一步变成可持久化、可编程的会话能力，OpenCode 则以兼容性修复为主。研究侧有两篇直接触及 coding agent 评测和 Agent 图记忆成本的新论文。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 |
|---|---|
| Cline | 官方仓库、release、changelog 与文档已逐项检查；最新可见正式发行仍为 9 月 18 日的 Desktop v0.0.32，本轮无新增正式发行。 |
| Pi Coding Agent / pi-mono | 原 `badlogic/pi-mono` 已由 GitHub 官方跳转到 `earendil-works/pi`；v0.87.0 于窗口内发布，重点是 canonical session context、上下文编辑及扩展生命周期边界。 |
| DeepSeek Harness / DSH | 官方仓库、release、packages 与文档已逐项检查；最新可见发行仍为 9 月 17 日的 dsh-v0.1.6-alpha.2，本轮无新增。 |
| OpenCode | v1.18.32 于窗口内发布，修复 Bedrock 图像附件提升条件与 Together AI 流式用量上报。 |
| Aider | 官方仓库、release 与文档已快速检查；最新可见正式发行仍为 2025 年 8 月的 v0.86.0，本轮无新增。 |
| Continue | 官方仓库、release 与文档已快速检查；窗口内有仓库活动，但未核实到新的正式发行或 changelog 公告。 |
| Roo Code | 官方仓库、release 与文档已快速检查；最新可见正式发行仍为 2026 年 5 月的 v3.54.0，本轮无新增。 |

## 已验证技术动态

- **Pi Coding Agent v0.87.0**（2026-09-22 02:29 +08:00，正式发行）：新增 append-only `ContextEditEntry`，可以在不改写原始历史的情况下改变后续模型上下文；同时加入可返回持久化条目的 `turn_end` / `agent_before_settle` 扩展边界、包含 system message 的 `context_with_system` 事件，以及按模型配置的图像缩放上限。对构建长会话、压缩策略和插件化 harness 的开发者而言，这是一次会话语义层面的升级，并包含需要迁移的 breaking changes。[原始来源](https://github.com/earendil-works/pi/releases/tag/v0.87.0)。

<figure class="source-image">
  <a href="https://github.com/earendil-works/pi/releases/tag/v0.87.0"><img src="https://opengraph.githubassets.com/1009f55072f64a3b9a05f8037ac5df380e0c2ff76db27ef67b6220ef30edf65a/earendil-works/pi/releases/tag/v0.87.0" alt="Pi Coding Agent v0.87.0 的 GitHub 官方发行卡片" loading="lazy" /></a>
  <figcaption><a href="https://github.com/earendil-works/pi/releases/tag/v0.87.0">图片来源：Pi v0.87.0 官方 GitHub Release OpenGraph 卡片</a></figcaption>
</figure>

- **OpenCode v1.18.32**（2026-09-22 06:51 +08:00，正式发行）：限制 Bedrock 图像附件提升仅应用于 Claude、Nova 与 Llama 4，并修复 Together AI 流式用量报告；发行说明还列出 Zen / Go 模型目录更新，但未把目录变化外推为模型能力结论。[原始来源](https://github.com/anomalyco/opencode/releases/tag/v1.18.32)。

## GitHub Trending

当日榜单只能证明当前关注，不能证明项目今日发布；以下均以“趋势信号”保留。

- **BuilderIO / agent-native**（趋势信号，607 stars today）：TypeScript 框架把同一 action 暴露给 Agent、UI、HTTP、MCP、A2A 与 CLI，并提供共享数据、权限和 UI 状态；适合观察 Agent 应用从聊天框转向有界操作面的工程模式。[项目](https://github.com/BuilderIO/agent-native)。

- **trycua / cua**（趋势信号，609 stars today）：开源 computer-use 驱动、跨操作系统运行环境与训练/评测工具链，代表 computer-use 基础设施的持续热度。[项目](https://github.com/trycua/cua)。

- **akitaonrails / ai-memory**（趋势信号，217 stars today）：面向多种 coding agent CLI 的长期记忆与跨供应商交接工具；榜单热度不等同于新版本发布。[项目](https://github.com/akitaonrails/ai-memory)。

- **coder / coder**（趋势信号，461 stars today）：为开发者及其 Agent 提供安全开发环境；其上榜是远程执行与环境控制受关注的邻近信号。[项目](https://github.com/coder/coder)。

## HN 讨论

已检查 HN 首页、newest 与 Algolia 最近投稿。窗口内有多个低互动的 Show HN / Agent 工程投稿，但未发现同时具备足够原始证据与讨论强度、需要提升为独立事实条目的候选；未以少量投票推断趋势。

## 论文与研究

- **TicTacBench：面向 RTL 时序收敛的 coding-agent 评测**（2026-09-20 13:17 +08:00，arXiv v1）：提供 30 个含约束、等价验证和 post-PnR 报告的任务，并报告 8 个前沿模型驱动 Agent 的 300 余次运行；论文称最佳 Agent 完成 53.3% 任务，TicTacSkill 将 Timing Closure Rate 提高 9%。这些数字仅代表论文设定，不据此宣称某通用 coding agent“领先”。[论文](https://arxiv.org/abs/2609.23363)。

- **Graph Memory for LLM Agents：图数据库查询、摄取与更新成本比较**（2026-09-20 11:04 +08:00，arXiv v1）：在合成生物医学属性图上比较八种数据库/引擎，结论不是单一系统全面最快，而是查询形态与数据可用化成本决定取舍；对设计 Agent memory 后端有直接参考价值。作者包含被测 Corvic AI 相关方，结果仍需独立复现。[论文](https://arxiv.org/abs/2609.23315)。

## 旧文再受关注

未发现同时满足“原文超过七日”和“近 24 小时在 HN 有明确再讨论数据”的条目。

## 日期未确认

暂无需要保留但无法核实日期的高相关候选。

## 观察池

- GitHub Trending 四项已按当日热度信号列出，不作为发布日期或版本发布证据。
- HN 上的低互动 Agent 投稿、Hugging Face 当日聚合与 Simon Willison 近期条目已审阅；相关性或原始证据不足，未升级为正文事实。
- 未证实传闻：没有具备可引述来源的具体候选；邻近信号：远程开发环境、computer-use 与跨 coding-agent 记忆仍在榜单中活跃。

## 来源链接

- [Pi Coding Agent v0.87.0](https://github.com/earendil-works/pi/releases/tag/v0.87.0)
- [OpenCode v1.18.32](https://github.com/anomalyco/opencode/releases/tag/v1.18.32)
- [BuilderIO / agent-native](https://github.com/BuilderIO/agent-native)
- [trycua / cua](https://github.com/trycua/cua)
- [akitaonrails / ai-memory](https://github.com/akitaonrails/ai-memory)
- [coder / coder](https://github.com/coder/coder)
- [TicTacBench](https://arxiv.org/abs/2609.23363)
- [Graph Memory for LLM Agents](https://arxiv.org/abs/2609.23315)

## 采集状态

- 已检查来源：Cline、Pi / pi-mono、DeepSeek Harness / DSH 三个 Tier 1 项目的官方仓库、release、changelog/packages 与文档；OpenCode、Aider、Continue、Roo Code 四个 Tier 2 项目的官方仓库、release 与 changelog/文档；HN 首页/newest/Algolia；GitHub Trending 总榜、Python、TypeScript；arXiv cs.AI；Hugging Face Papers/blog；Simon Willison；可信工程博客与项目官方页面。
- 失败来源：无；指定入口均可访问。GitHub 页面偶有动态区域加载提示，已用官方 API 交叉核对 release 时间与说明。
- 初始候选数量：26；保留原始 URL：8。
- 二次补搜：否，最终来源不为 0。

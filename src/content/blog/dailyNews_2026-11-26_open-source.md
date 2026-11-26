---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-26T00:00:00+08:00"
updatedAt: "2026-11-26T10:44:43+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Pi v1.6.1"
featuredUrl: "https://github.com/earendil-works/pi/releases/tag/v1.6.1"
featuredSummary: "Pi 新版本加入 Code Mode 决策模型调用、细分 notice 设置与扩展阻塞状态，并集中修复长会话、工具输出及模型适配可靠性。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-25 21:41 +08:00"
featuredTags: ["Coding Agent","Harness","Release"]
tags:
  - "48h 补充"
  - "日期未确认"
  - "Agent"
  - "Agent Harness"
  - "AI"
  - "Automation"
  - "Coding Agent"
  - "CUGA"
  - "Harness"
  - "LLM"
  - "Open Source"
  - "Permissions"
  - "Pre-release"
  - "Release"
  - "Research Agent"
  - "Safety"
  - "Voice Agent"
---

## 今日概览

本轮窗口为 **2026-11-25 10:43 至 2026-11-26 10:43（Asia/Shanghai）**；技术精选可向前查看 48 小时。共保留 5 条原始来源：Pi 与 OpenCode 都在主窗口内发布新版本，AMD GAIA 的预发布版本处于 48 小时补充窗口；IBM Research 与 Ai2 则分别给出多语言语音 Agent 的工程实践和科研 Agent 的责任边界。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 | 证据与意义 |
|---|---|---|
| Pi Coding Agent / pi-mono | **v1.6.1，已验证** | [官方 Release](https://github.com/earendil-works/pi/releases/tag/v1.6.1) 于 11 月 25 日 21:41（上海时间）发布。新增 Code Mode 决策模型调用、按类型拆分的 transcript notice 设置与扩展对话框阻塞状态，并修复大上下文加载、工具输出、Windows 进程清理及多家模型适配问题。原 `badlogic/pi-mono` 官方入口当前会重定向至 `earendil-works/pi`。 |
| OpenCode | **v2.4.2，已验证** | [官方 Release](https://github.com/anomalyco/opencode/releases/tag/v2.4.2) 于 11 月 26 日 08:59（上海时间）发布。重点包括自动化失败后继续按计划运行、超时 shell 不再遗留后台进程、会话移动连带子 Agent、MCP 登录修复、权限规则修复，以及桌面端 session/inbox 改进；这是一轮覆盖 Agent 生命周期与权限边界的实质更新。 |
| Cline | 无新增 | 已检查 `cline/cline` 仓库、changelog 与 Releases；最新可核验版本为 11 月 21 日发布的 v4.1.27，超出本轮 48 小时精选窗口，未重复收录。 |
| DeepSeek Harness / DSH | 无新增 | 已检查 `deepseek-ai/deepseek-harness` 仓库、文档与 Releases；最新可核验标签为 11 月 22 日的 v0.2.3-alpha.2，超出窗口，未将旧版本当作今日动态。 |
| Aider | 无新增 | 已检查官方仓库、Release 与 HISTORY；未发现本轮窗口内发布。 |
| Continue | 无新增 | 已检查 `continuedev/continue` 官方仓库与 Releases；未发现本轮窗口内发布。 |
| Roo Code | 无新增 | 已检查 `RooCodeInc/Roo-Code` 官方仓库、文档与 Releases；项目文档显示已于 2026 年 5 月结束服务，本轮无新发布。 |

## 已验证技术精选

### 1. Pi v1.6.1 把决策模型与运行状态进一步纳入 harness

[Pi v1.6.1](https://github.com/earendil-works/pi/releases/tag/v1.6.1) 允许 Code Mode 通过 `models.classify()` 调用 GitHub Copilot 与 Radius 的决策模型，并返回 provider response ID；扩展的 `select`、`confirm`、`input` 对话框还能标明 permission、question 或 login 等阻塞类型。这让外部 UI、终端状态协议与 Agent 权限交互之间的边界更清晰。大量修复集中在长会话、compaction 后状态、bash 完整输出、工具严格模式和临时 provider 故障重试，说明维护重点仍是长任务可靠性，而非只扩充模型列表。

### 2. OpenCode v2.4.2 修补自动化、权限与子 Agent 生命周期

[OpenCode v2.4.2](https://github.com/anomalyco/opencode/releases/tag/v2.4.2) 明确规定失败的自动化不会自动暂停，后续轮次仍照常运行；超时 shell 会被停止并令该调用失败。版本还让移动父会话时同步移动子 Agent，并修复 deny 规则后工具仍对模型可见的问题。对生产型 coding agent 来说，这些变化比单纯 UI 更新更关键：失败恢复、进程收尾和权限可见性直接影响后台任务是否可控。

### 3. IBM Research 用 CUGA 构建多语言、可追溯的语音 Agent

IBM Research 在 [An Indic Voice Agent with CUGA](https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga) 中公开一个面向农业问答的实现：语音转文字后，用多语言 embedding 在英文手册中检索，再生成受来源约束的短回答并转回语音。文章的技术价值在于揭示一个容易被表面成功掩盖的问题：英语 embedding 对印地语等输入可能返回形式正确但语义错误的段落，因此跨语言检索必须独立验证。CUGA 在这里负责模型接线、工具、线程、知识检索与 guardrail，语音层保持可替换。页面日期为 2026-11-25，但未提供精确时刻。

<figure class="source-image">
  <a href="https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga"><img src="https://cdn-uploads.huggingface.co/production/uploads/67fe070a4e8cc28ba346f53c/-QNcrxSDbjI8VOCBlhi-C.png" alt="IBM Research 的 CUGA 多语言语音 Agent 文章配图" loading="lazy" /></a>
  <figcaption><a href="https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga">图片来源：IBM Research / Hugging Face</a></figcaption>
</figure>

### 4. Ai2 访谈研究提出科研 Agent 的五维信任框架

Ai2 在 [Where scientists draw the line on AI agents](https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents) 中总结对 17 名美国科学家的探索性访谈，归纳 validation、privacy、objectivity、accountability、transparency 五个信任维度。作者强调科研 Agent 的评测不能只看答案正确率，还应检查是否遗漏冲突证据、是否越权访问文件，以及方法是否可复现。它不是某个 Agent 的性能评测，也不代表科学界共识，但为开放科研 Agent 的轨迹审计和细粒度数据控制提供了明确设计方向。页面日期为 2026-11-25，但未提供精确时刻。

## 48 小时补充

### AMD GAIA v0.27.0-rc11：本地 Agent 加入共享浏览器与显式技能调用

[GAIA v0.27.0-rc11](https://github.com/amd/gaia/releases/tag/v0.27.0-rc11) 发布于 11 月 25 日 08:18（上海时间），早于主窗口约 2 小时 25 分，因此作为 48 小时补充而非“过去 24 小时”新闻。该预发布版加入与 Agent 共用同一标签页的桌面浏览器窗格、`/skill-name` 显式技能调用、多账户连接器和 Office/幻灯片/日志分诊技能，并调整完整访问模式的命令权限。它仍是 release candidate，安装器默认继续提供稳定版，不能写成正式 GA。

## GitHub Trending

已检查 overall、Python 与 TypeScript 榜单，但页面在本轮未稳定展示可复核的 stars/day 数字，因此不记录易波动排名，也不把“今日上榜”等同于今日发布。

## HN 讨论

已检查 Hacker News front/newest 与 Algolia 最近提交。本轮没有找到既处于发现窗口、又能回到原始技术来源核实的高质量独立条目；不以低证据讨论补位。

## 论文 / 研究

本轮保留 Ai2 的科研 Agent 访谈研究作为方法论条目；它是探索性访谈，不是基准实验。arXiv 入口未检出可确认处于窗口且高度相关的新论文。

## 旧文再浮现

本轮未发现满足“原文超过 7 天、但过去 24 小时在 HN 形成可核验新讨论”的条目。

## 日期未确认

IBM Research 与 Ai2 两篇 Hugging Face 文章均标明 2026-11-25，但页面没有公开精确发布时间；它们可能处于也可能略早于严格 24 小时窗口，因此在时效判断上保留限制，不将其写成已核验到小时的新闻。

## 观察池

- AMD GAIA v0.27.0-rc11 为预发布版本，功能与已知问题仍可能在正式版前变化。
- GitHub Trending 仅说明当下热度，不证明项目在今天首次发布；本轮没有使用无法复核的增长数字。
- 社区目录与 Reddit 自荐中出现若干新 Agent 候选，但缺少足够的一手版本记录或独立技术验证，本轮不升级为精选来源。

## 来源链接

1. [Pi v1.6.1](https://github.com/earendil-works/pi/releases/tag/v1.6.1)
2. [OpenCode v2.4.2](https://github.com/anomalyco/opencode/releases/tag/v2.4.2)
3. [An Indic Voice Agent with CUGA](https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga)
4. [Where scientists draw the line on AI agents](https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents)
5. [GAIA v0.27.0-rc11](https://github.com/amd/gaia/releases/tag/v0.27.0-rc11)

## 采集状态

- **已检查来源**：Cline、Pi/pi-mono、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库/Release/changelog；GitHub Trending（overall/Python/TypeScript）；HN front/newest/Algolia；arXiv；Hugging Face Papers/Blog；Simon Willison；AMD GAIA。
- **失败或受限来源**：GitHub Trending 未稳定显示可核验日增；HN/Algolia 与 arXiv 未返回足够强的新候选；部分 GitHub Releases 动态页信息不全，已改用 GitHub 官方 API 核对。
- **初始候选数**：8；**最终保留来源数**：5；**二次补搜**：否（最终来源非 0）。

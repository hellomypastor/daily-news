---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-04T00:00:00+08:00"
updatedAt: "2026-11-04T10:51:01+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.2.2-alpha.3"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases"
featuredSummary: "预发布版统一变更请求与 worktree 审查入口，增强自动化任务、apply_patch 与 SDK 控制能力。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-03 15:56 +08:00"
featuredTags: ["Coding Agent","Harness","Release"]
tags:
  - "仓库归档"
  - "较旧背景"
  - "日期未确认"
  - "无新增"
  - "Adoption Signal"
  - "Agent"
  - "Agent Harness"
  - "Agent Security"
  - "AI"
  - "Benchmark"
  - "Checked"
  - "Coding Agent"
  - "Computer Use"
  - "Evaluation"
  - "GitHub Trending"
  - "Harness"
  - "LLM"
  - "Long Context"
  - "Open Source"
  - "Release"
  - "Reproducibility"
  - "Reproduction"
  - "Security"
  - "Watchlist"
  - "Worktree"
---

## 今日概览

本轮窗口重点覆盖 2026-11-02 10:49 至 2026-11-04 10:49（Asia/Shanghai）。确认两项 Coding Agent / Harness 正式发布：DeepSeek Harness 的预发布版强化变更审查、自动化任务和 SDK，Pi 的迁移后仓库发布 v1.5.0；另有 IBM Research 提供同模型、不同 harness 的可复现实验。GitHub Trending 仅用于当日关注度信号，不等同于项目当天发布。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 | 关键变化 |
|---|---|---|
| DeepSeek Harness / DSH | **已验证更新** | [v0.2.2-alpha.3](https://github.com/deepseek-ai/deepseek-harness/releases) 于 GitHub 显示 11 月 3 日发布；统一变更请求与 worktree 审查入口，新增宿主级定时任务管理、默认关闭的 `apply_patch` 工具，并扩展 TypeScript/Python SDK 的计划审阅、目标续跑与审批能力。 |
| Pi Coding Agent | **近 48 小时更新** | 原 `badlogic/pi-mono` 已重定向至迁移后的仓库；[v1.5.0](https://github.com/earendil-works/pi/releases) 于 11 月 2 日发布，加入扩展更新说明、流式工具调用增量解析和自定义自更新命令。 |
| Cline | 无窗口内正式发布 | 已检查 [官方 Releases](https://github.com/cline/cline/releases)；最新可见正式记录早于窗口，本轮不重复旧背景。 |
| OpenCode | 无窗口内正式发布 | 已确认当前官方入口为 [anomalyco/opencode Releases](https://github.com/anomalyco/opencode/releases)，最新可见版本早于窗口。 |
| Aider | 无窗口内正式发布 | 已检查 [Aider Releases](https://github.com/Aider-AI/aider/releases)，未发现窗口内版本。 |
| Continue | 无窗口内正式发布 | 已检查 [Continue Releases](https://github.com/continuedev/continue/releases)，未发现窗口内版本。 |
| Roo Code | 仓库状态变化需注意 | [原官方仓库 Releases](https://github.com/RooCodeInc/Roo-Code/releases) 页面显示仓库已于 2026-05-15 归档；本轮未发现新的第一方迁移发布入口，不以 fork 代替。 |

## 已验证技术精选

### 1. DSH 把代码审查、自动化任务与 SDK 控制面继续收进 harness

[DeepSeek Harness v0.2.2-alpha.3](https://github.com/deepseek-ai/deepseek-harness/releases) 将本地与 PR diff 的文件树审查、评论交给 Agent、检查/评审跟踪合并到统一入口；同时把计划审阅、续跑与操作审批扩到 SDK。它的重要性在于：harness 的差异正从“能否调用模型”转向会话生命周期、变更复核、权限和自动化编排。该版本是预发布版，稳定性结论仍应等待后续正式版。

### 2. Pi v1.5.0 优化扩展可见性与大工具调用的流式体验

[Pi v1.5.0](https://github.com/earendil-works/pi/releases) 为扩展更新增加 changelog 展示，并改为增量解析大型工具调用、复用高亮和 Markdown 渲染结果。原 `badlogic/pi-mono` URL 目前重定向到 `earendil-works/pi`；这里按迁移后的第一方仓库记录，不把重定向误判为新 fork。

### 3. IBM Research：同一模型仅更换 harness，AppWorld 完成率可从 30% 到 81%

IBM Research 在 [Same Model, Different Harness](https://huggingface.co/blog/ibm-research/cuga-harness) 中固定 GLM-5.3-flash，以 90 个 AppWorld 任务比较 CUGA、Hermes 与 Deep Agents，并公开 Harbor 配置。结果为 CUGA 73/90、Hermes 42/90、Deep Agents 27/90。作者明确提醒：样本只有一个基准、三套配置并不相同，不能泛化成全场景排名；但实验有具名任务、公开配置与限制说明，足以支持“harness 设计会显著影响特定工作负载”的结论。

### 4. CyberArena 用实时攻防替代静态安全题

[CyberArena](https://huggingface.co/blog/2077AIDataFoundation/cyberarena) 公布代码、挑战与论文入口，让两个 Agent 在相同易受攻击服务上同时进攻和修补，并由外部设施验证夺旗与健康检查。作者报告 12 个 Agent、40 个挑战、466 场有效对局；这类对抗式评测比固定题更能暴露“未验证即宣称修复”和局部补丁等 Agent 行为缺陷。模型名次与数值仅按该评测报告呈现，不外推为通用能力排名。

### 5. StateBench 将长上下文中的状态跟踪拆成四级难度

Ai2 在 [StateBench](https://huggingface.co/blog/allenai/statebench) 中开源代码与数据，区分不可变赋值、按值重赋值、自引用更新和按引用赋值。它与 coding agent 直接相关：长会话中变量、文件与任务状态持续变化，单纯“找最近一句”不能覆盖依赖链。文章报告循环/混合架构在针对性训练后能比 Transformer 外推更远，但该结论限定于其任务设计。

### 6. CWE-bench v2 开放 100 个可复现安全修复任务

[CWE-bench v2](https://huggingface.co/blog/cwe-bench) 开放 100 个任务、覆盖 91 类 CWE；每个任务提供真实开源仓库检出、自然语言修复指令与确定性验证器，并可通过 Harbor 运行。相比仅看代码生成正确率，这更接近安全 coding agent 的端到端修复与回归验证。其榜单结果仍受模型、harness、运行成本与 pass@k 设置影响。

## GitHub Trending（热度信号，不是发布日期）

[GitHub Trending 当日页](https://github.com/trending) 显示，`vercel-labs/agent-desktop`、`max-sixty/worktrunk` 等 Agent 工具进入总榜。

- [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)：面向 AI Agent 的 computer-use CLI；当日榜显示 3,791 stars today。
- [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)：为并行 Agent 工作流管理 Git worktree；当日榜显示 438 stars today。
- TypeScript 榜还出现 DSH 远程访问插件与沙箱 Agent 编排项目，但它们属于采用/关注度信号，未据此宣称当天发布或达到生产成熟度。

## Hacker News 讨论

已检查 front/newest 与可访问的近期索引。发现 coding-agent 中途停止、企业内多 Agent 运维等新提交，但当前互动量低、原文验证不足，因此未提升为技术精选；保留在观察池，不用早期 HN 票数推断趋势。

## 论文与研究

- [The Sleeper in the Weights](https://huggingface.co/blog/FINAL-Bench/the-sleeper-in-the-weights-we-planted-a-backdoor-i)（2026-11-02）：社区复现实验称后门行为可绕过常规行为扫描，并主张在工具执行前做运行时约束。其复现使用微调植入而非原论文的大规模预训练污染，作者已明确标注差异，因此作为近 48 小时安全观察，不与原论文结果混写。
- CyberArena、StateBench 与 CWE-bench v2 见上；三者均提供论文、代码、数据或可复现运行入口。

## 旧文再热

本轮未发现满足“原文早于 7 天且过去 24 小时在 HN 明显再热”的高置信候选。

## 日期未确认

- Hacker News 新提交中出现 coding agent 可靠性与多 Agent 成本案例，但部分原文未提供可核验发布时间，且讨论仍处早期；不列入正式来源集合。

## 观察池

- GitHub Trending 中的 Agent skills、computer-use CLI 与 worktree 工具呈现强关注度，但 stars today 只证明榜单期内热度，不能证明发布日、安装量或生产采用。
- Roo Code 原仓库归档后，未在本轮确认新的第一方迁移入口；后续继续从官网、组织页和包元数据交叉查找，避免将社区 fork 误标为官方。
- DSH v0.2.2-alpha.3 是预发布版；其自动化任务与变更审查能力值得跟踪，但不把预发布说明转写成稳定性承诺。

## 来源链接

正文中的每条正式来源均使用原始项目、发布页或作者文章链接；同页 URL 已去重。

## 采集状态

- 采集窗口：2026-11-02 10:49 至 2026-11-04 10:49（Asia/Shanghai；开源精选优先 48 小时，HN 再热观察最近 24 小时）。
- 已检查：Cline、Pi、DSH 三个 Tier 1 的仓库/Release/文档入口；OpenCode、Aider、Continue、Roo Code 四个 Tier 2 官方入口；GitHub Trending 总榜/Python/TypeScript；HN front/newest/近期索引；arXiv、Hugging Face Papers/Blog；Simon Willison 与工程博客。
- 失败来源：HN Algolia 网页入口返回内部错误；GitHub 部分 Releases 动态区块偶发加载失败；Trending 无官方历史快照。均已采用公开替代入口，并未猜测缺失日期。
- 初始候选 18 条，最终保留 10 个来源 URL；二次补搜：否（最终来源不为 0）。

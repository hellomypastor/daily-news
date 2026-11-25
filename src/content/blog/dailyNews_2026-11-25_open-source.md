---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-25T00:00:00+08:00"
updatedAt: "2026-11-25T10:45:30+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "How to build and maintain an agentic evaluation"
featuredUrl: "https://huggingface.co/blog/agentic-evals"
featuredSummary: "拆解 Agent 评测的任务、环境、harness、trace 与 verifier，并给出开放复核方法。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-23"
featuredTags: ["Agent","Evaluation","Harness"]
featuredImage: "https://huggingface.co/blog/assets/agentic-evals/thumbnail.png"
featuredImageAlt: "Hugging Face 的 Agentic Evaluation 方法文章题图"
featuredImageCaption: "图片来源：Hugging Face"
tags:
  - "观察池"
  - "日期未确认"
  - "Agent"
  - "Agent Skills"
  - "AI"
  - "Coding Agent"
  - "Document AI"
  - "Evaluation"
  - "GitHub Trending"
  - "Harness"
  - "Inference"
  - "LLM"
  - "Open Model"
  - "Open Source"
  - "Release"
  - "Research"
  - "RL"
  - "Security"
  - "Tooling"
---

## 今日概览

采集窗口以 Asia/Shanghai 计：**2026-11-23 10:45 至 2026-11-25 10:45**（技术亮点 48 小时）；Hacker News 与热度信号重点看最近 24 小时。今日主线是：OpenCode 用补丁版本修复 compaction 与旧版 macOS 的会话持久化问题；Hugging Face 给出可复核的 Agent 评测工程方法；两项 11 月 24 日研究分别展示小型证明模型的开放 RL 复现与 LoopLM 解码优化。GitHub Trending 仍明显偏向 Agent skills 与工具化，但热榜只代表当日关注，不代表项目当日发布。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 | 核查结论 |
|---|---|---|
| Cline | 无新增 | 已检查 `cline/cline` 仓库、release 与 changelog；最新可见扩展版仍为 v4.1.27（11 月 21 日），不在 48 小时亮点窗内。 |
| Pi Coding Agent / pi-mono | 无新增 | 已检查 `badlogic/pi-mono` 及其当前发布入口 `earendil-works/pi`；最新可见 v1.6.0 为 11 月 20 日。 |
| DeepSeek Harness / DSH | 无新增 | 已检查官方仓库、release 与文档；最新可见 v0.2.3-alpha.2 为 11 月 22 日 19:00（上海时间），未跨入本轮 48 小时窗。 |
| OpenCode | **有更新** | [v2.4.1](https://github.com/anomalyco/opencode/releases/tag/v2.4.1) 于 11 月 23 日 23:57（上海时间）发布，修复旧版 SQLite 导致的消息保存失败、compaction 保留量错误与长目标会话额外缓存成本，并让仅通过配置接入的 provider 模型出现在 `/models`。 |
| Aider | 无新增 | 官方 release 最新仍为 v0.86.0（2025-08-09）；本轮未发现新的正式发布。 |
| Continue | 无新增 | 官方 release 入口最新可见 VS Code 版本停留在 2026 年 6 月；本轮未发现新的正式发布。 |
| Roo Code | 无新增 | 官方 release 入口最新可见 v3.54.0（2026-05-15）；本轮未发现新的正式发布。 |

OpenCode 2.4.1 值得关注的不是新增大功能，而是对 Agent 长会话可靠性的集中修补：compaction 边界、缓存成本和消息持久化都直接影响长任务的可恢复性。

## 已验证技术亮点

### 1. Hugging Face：如何构建并维护 Agentic Evaluation

Hugging Face 在 11 月 23 日发布 [How to build and maintain an agentic evaluation](https://huggingface.co/blog/agentic-evals)，把任务、环境、Agent harness、rollout/trace、verifier 和结论拆开讨论。文章用开放的 Harbor/Terminal-Bench 任务做物理实验数据拟合案例，并强调要用“无操作 Agent”和投机捷径主动攻击 grader；这比只报一个总分更能暴露评测到底测到了什么。文章还指出固定模型、只改变 harness 时，既有审计中准确率可相差最高 29.9 个百分点，因此任何“某模型/工具追平或超过”的判断都必须绑定 harness、环境、配置、trace 与可复现实验。

<figure class="source-image">
  <a href="https://huggingface.co/blog/agentic-evals"><img src="https://huggingface.co/blog/assets/agentic-evals/thumbnail.png" alt="Hugging Face 的 Agentic Evaluation 方法文章题图" loading="lazy" /></a>
  <figcaption><a href="https://huggingface.co/blog/agentic-evals">图片来源：Hugging Face</a></figcaption>
</figure>

### 2. FineProofEnvs：2B 模型的开放数学证明 RL 复现

11 月 24 日发布的 [FineProofEnvs: Better Math Proofs from a 2B Model with RL](https://huggingface.co/blog/FineEnvs/fineproofenvs-rl-2b-prover) 公开了环境、约 280 行 harness、模型、训练日志和全部评测尝试。作者报告 Qwen3.5-2B 在 500 步 RL 后，留出集 rubric 均分由 0.217 升至 0.407，满分证明占比由 12% 升至 25%；这些数字来自该项目自己的设置，不能外推为通用数学能力排名。其工程价值在于展示 Harbor harness 与 OpenEnv 训练代理如何解耦，便于复现和审计。

### 3. Loop-Behind：把额外循环移到读出之后

清华团队 11 月 24 日发布 [Loop Behind: Rethinking Where Extra Loops Pay Off in Looped Language Models](https://huggingface.co/blog/XijieGong/loop-behind-rethinking-where-extra-loops-pay-off-i)，并开放代码。作者实验认为 LoopLM 的主要收益更多来自为后续 token 提供更深的 Loop KV，而不是只改善当前 token 的读出；提出的 Loop-Behind 解码让当前 token 首轮后即可读出，其余循环与后续 token 并行。作者报告在 Huginn-0125 上接近 16-loop 准确率并获得 1.75× 加速；该结果仍应以论文给定模型和基准范围理解。

### 4. IVE / Ivonnet：面向文档决策的开放小模型

Hugging Face 社区 11 月 23 日发布 [Meet IVE, the handyman of your document pipeline](https://huggingface.co/blog/QuentinJG/ive-release)，开放 Apache-2.0 的 IVE-4B 与 Ivonnet-0.8B。它们将页面相关性、字段选择、图表理解等任务统一为“问题 + 选项”的概率评分，适合 Agent 文档管线中的路由与决策节点。文中榜单和延迟数字均来自作者给定的 Decision Index 与硬件设置，属于项目自报结果。

### 5. AgentKey：让 Agent 登录但不接触密码

[AgentKey](https://github.com/edan-ais/agentkey) 是 11 月 23 日创建、11 月 25 日提交到 Hacker News 的 Apache-2.0 项目，目标是在本地保存凭据，由用户批准后替 Agent 完成登录，而不是把密码暴露给模型上下文。它切中 Agent 浏览器自动化的凭据边界，但项目刚出现、HN 互动很低，当前应视为**早期候选**，尚不足以证明安全设计已经过独立审计。

## GitHub Trending 热度快照

以下为 11 月 25 日 10:45 左右抓取的 GitHub Trending 页面信号；星数与“今日新增”会变化，只表示当日关注度，不代表当日发布，也不构成质量或安全背书。

| 项目 | 扫描时信号 | 为什么值得看 |
|---|---:|---|
| [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | 约 21.6k stars，页面显示今日约 +1,826 | 将漏洞研究流程封装为 Claude Code skills；高热度同时意味着应审查 skill 权限与提示注入边界。 |
| [CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 约 64.9k stars，页面显示今日约 +1,074 | 试图把 GUI 软件包装成可供 Agent 调用的 CLI，代表“软件 Agent-native 接口层”的持续需求。 |
| [Superpowers](https://github.com/obra/superpowers) | 约 325.9k stars，页面显示今日约 +1,003 | 把开发方法论封装为跨 Agent skills；热度说明 skills 正在成为 coding harness 的共享扩展面。 |

## Hacker News 讨论

最近 24 小时与开源 Agent 直接相关的新提交以早期项目为主。AgentKey 在扫描时仅有初始提交级互动，因此本页保留项目与安全边界，不将其描述为社区趋势。未发现满足“旧文超过 7 天、但最近 24 小时在 HN 显著复热”条件且优先级足够高的条目。

## 论文 / 研究

本轮可验证的新研究主要是上述 Loop-Behind 与 FineProofEnvs；前者关注推理解码结构，后者提供完整开放的 RL 环境与 harness。Hugging Face 的 Agentic Evaluation 指南则提醒：比较结果必须同时披露 harness、环境、verifier、rollout 次数和 trace，单一总分不足以支持产品优劣结论。

## 旧文复热

本轮未发现符合条件且具有足够讨论量的旧文复热。

## 日期未确认

- 本轮未保留发布日期完全无法确认、且证据强度足够进入正文的独立技术发布。GitHub Trending 项目均已明确放在热度快照，不把上榜日期当成项目发布日期。

## 观察池

- **Agent skills 安全性**：Claude-BugHunter、Superpowers 等 skills 集合持续高热，但安装前需要审查脚本、网络访问、凭据读取和隐式执行路径；热榜无法替代代码审计。
- **AgentKey 的可信执行边界**：思路与凭据最小暴露原则一致，但仓库很新，需等待威胁模型、独立审计和真实集成反馈。
- **OpenCode v2.4.0 背景**：11 月 23 日较早发布的大版本加入 automations、内置桌面浏览器和 MCP Events；本轮不单列为 48 小时新条目，只作为 v2.4.1 修补背景。

## 来源链接

- [OpenCode v2.4.1](https://github.com/anomalyco/opencode/releases/tag/v2.4.1)
- [How to build and maintain an agentic evaluation](https://huggingface.co/blog/agentic-evals)
- [FineProofEnvs: Better Math Proofs from a 2B Model with RL](https://huggingface.co/blog/FineEnvs/fineproofenvs-rl-2b-prover)
- [Loop Behind: Rethinking Where Extra Loops Pay Off in Looped Language Models](https://huggingface.co/blog/XijieGong/loop-behind-rethinking-where-extra-loops-pay-off-i)
- [Meet IVE, the handyman of your document pipeline](https://huggingface.co/blog/QuentinJG/ive-release)
- [AgentKey](https://github.com/edan-ais/agentkey)
- [Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)
- [CLI-Anything](https://github.com/HKUDS/CLI-Anything)
- [Superpowers](https://github.com/obra/superpowers)

## 采集状态

- **已检查**：Cline、Pi Coding Agent / pi-mono（含迁移后的发布入口）、DeepSeek Harness / DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库/release/changelog；GitHub Trending 总榜、Python、TypeScript；Hacker News newest/Algolia；Hugging Face Blog/Community/Papers；arXiv；Simon Willison。
- **失败或受限**：GitHub Trending 没有官方历史快照，故只记录扫描时可见热度；arXiv 关键词结果噪声高，未纳入无法充分核实的候选；HN 新提交互动尚低，不把低样本反馈写成趋势。
- **候选与留存**：初始候选 16 条，最终保留 9 个独立 URL；页面内已按 URL 去重。
- **二次补搜**：未执行（`secondPass=false`）；最终来源不为 0，且必查 harness 与备用发现入口均已覆盖。

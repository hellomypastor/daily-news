---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-09-03T00:00:00+08:00"
updatedAt: "2026-09-03T00:33:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.1.2-alpha.4"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4"
featuredSummary: "DSH 为父 Agent 与可持续子 Agent 增加双向 send_message，并调整 web_fetch 与 Session API。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-09-01 23:45 +08:00"
featuredTags: ["DeepSeek Harness","Agent Harness","Multi-Agent"]
featuredImage: "https://opengraph.githubassets.com/df4e2150333f4424187d637a45a96c8cd67b569d7364ad085ee2ea5f66b8a047/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4"
featuredImageAlt: "DeepSeek Harness v0.1.2-alpha.4 GitHub 发布页预览图"
featuredImageCaption: "图片来源：DeepSeek Harness GitHub 官方发布页"
tags:
  - "观察池"
  - "日期未确认"
  - "Agent"
  - "Agent Harness"
  - "AI"
  - "Alpha"
  - "CLI"
  - "Cline"
  - "Coding Agent"
  - "DeepSeek Harness"
  - "Evaluation"
  - "GitHub Trending"
  - "Inference"
  - "LLM"
  - "MCP"
  - "Multi-Agent"
  - "Open Source"
  - "OpenCode"
  - "Post-training"
  - "Prompt Optimization"
  - "Reliability"
  - "Research"
  - "SDK"
  - "Security"
  - "Self-hosted LLM"
  - "Session Import"
  - "SRE"
  - "Tool Execution"
---

## 今日概览

采集窗口：**2026-09-01 00:33 至 2026-09-03 00:33（Asia/Shanghai，48 小时）**。跨日新建本页，不搬运昨日较旧背景和未确认候选。技术主线是 Cline 的会话迁移与运行可靠性、DSH 的双向子 Agent 消息与升级修复，以及上下文权限边界研究；新发现 FrontierHarness 与 AURA 作为带限制的观察信号保留。

## Coding Agent / Harness 雷达

| 项目 | 检查结论 |
|---|---|
| Cline | 官方仓库、releases、CHANGELOG 已查；窗口内稳定版 Desktop 0.0.22、扩展 4.1.17、SDK 0.0.82、CLI 3.0.61。 |
| Pi / pi-mono | 旧地址重定向 earendil-works/pi；官方 packages 与 changelog 已查，最新 release 0.84.4 为 8 月 28 日；Unreleased 包含代理 HTTP 工具调用挂起与字节计数修复，不当作新 release。 |
| DeepSeek Harness / DSH | 仓库、README/文档入口、releases 已查，alpha.4 和 alpha.5 在窗口内；仍属 developer preview。 |
| OpenCode | 官方 anomalyco/opencode 仓库与 release changelog 已查，最新 1.18.26 在窗口内。 |
| Aider | 官方仓库、releases、HISTORY 已查；无窗口内 release。 |
| Continue | 官方仓库、releases、CLI changelog 已查；无窗口内 release。VS Code 旧 changelog 路径 404，已切换仓库 tree 与 CLI 入口。 |
| Roo Code | 官方仓库、releases、CHANGELOG 已查；无窗口内 release。 |

## 已验证技术亮点

### 1. DeepSeek Harness v0.1.2-alpha.4

[官方发布](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4) · 2026-09-01 23:45 +08:00。DSH 为父 Agent 与可持续子 Agent 增加双向 send_message，并调整 web_fetch 与 Session API。该版本仍为 alpha，升级前需阅读兼容性说明。

<figure class="source-image">
  <a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4"><img src="https://opengraph.githubassets.com/df4e2150333f4424187d637a45a96c8cd67b569d7364ad085ee2ea5f66b8a047/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4" alt="DeepSeek Harness v0.1.2-alpha.4 GitHub 发布页预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4">图片来源：DeepSeek Harness GitHub 官方发布页</a></figcaption>
</figure>

### 2. DeepSeek Harness v0.1.2-alpha.5

[官方发布](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5) · 2026-09-02 18:02 +08:00。修复从特定旧版升级后应用可能无法启动或会话列表标题消失的兼容性回归。该版本仍为 alpha，升级前需阅读兼容性说明。

### 3. Desktop v0.0.22

[官方发布](https://github.com/cline/cline/releases/tag/desktop-v0.0.22) · 2026-09-02 13:20 +08:00。Cline Desktop 可导入 Claude Code、Codex 与 OpenCode 历史为可恢复会话，并改善定时任务分组、macOS 语音与 Web 搜索默认设置。

### 4. Cline v4.1.17

[官方发布](https://github.com/cline/cline/releases/tag/v4.1.17) · 2026-09-02 13:40 +08:00。Cline 修复长会话 Hub 完整 transcript 广播导致的内存放大，并增强 hook 与运行可靠性。

### 5. SDK v0.0.82

[官方发布](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.82) · 2026-09-02 12:40 +08:00。Cline SDK 增加跨 Claude Code、Codex 与 OpenCode 的事务式会话导入，并修复 capability 误判、checkpoint 恢复与 MCP 连接等可靠性问题。

### 6. CLI v3.0.61

[官方发布](https://github.com/cline/cline/releases/tag/cli-v3.0.61) · 2026-09-02 12:49 +08:00。Cline CLI 改善 Hub 升级排空、远程 MCP 启动、工具能力识别、checkpoint 恢复保护与 Codex OAuth/刷新处理。

### 7. OpenCode v1.18.26

[官方发布](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) · 2026-09-02 05:52 +08:00。OpenCode 修复 Claude 5 thinking blocks、Bedrock GPT-5.6 推理回放、工具计时与桌面会话重命名。

## 论文 / 研究

### Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement

[论文](https://arxiv.org/abs/2609.01481) · 2026-09-02 00:17 +08:00。在既有 coding-agent harness 之上组织可验证的多轮规划、编码与测试循环。论文结论为作者报告，本页未独立复现。

### What's in Your Agent's Context? Context Privilege Escalation Attacks against AI Agent Harness

[论文](https://arxiv.org/abs/2609.01222) · 2026-09-02 22:46 +08:00。系统分析 Agent harness 上下文装配中的消息角色与跨作用域权限提升风险。本轮确认 v2 于 9 月 2 日 22:46 更新，初版为 9 月 1 日 21:26。论文结论为作者报告，本页未独立复现。

### From Production Traffic to Post-Training: Building a Self-Hosted LLM That Covers the Corporate Request Mix

[论文](https://arxiv.org/abs/2609.01572) · 2026-09-02 01:39 +08:00。从生产错误分析拆分三类后训练专家并合并，以覆盖企业内部请求组合。论文结论为作者报告，本页未独立复现。

### Control-Data Flow Separation: Stable Prompt Optimization in Multi-Agent LLMs

[论文](https://arxiv.org/abs/2609.00621) · 2026-09-01 11:04 +08:00。用类型化、可验证控制对象隔离执行协议与可优化自然语言数据流，降低多 Agent 提示漂移导致的协议失效。论文结论为作者报告，本页未独立复现。

## GitHub Trending

以下为本轮新抓取的榜单信号，仅表明当期热度；不证明项目当日发布，也不重复昨日未确认候选。

- [Atlas：面向 Agent 的源码与会话追踪](https://github.com/pacifio/atlas)：新抓取 Trending 显示 895 stars today；将提交与 Agent 会话、工具调用关联，并共享本地记忆。仅为当期热度，非今日发布。
- [SIE：Agent 模型推理服务](https://github.com/superlinked/sie)：新抓取 Trending 显示 61 stars today；开源模型推理服务器与生产集群，面向 Agent 所需模型。热度不等于性能验证。
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)：新抓取 TypeScript Trending 显示 140 stars today；将浏览器开发工具接入 coding agent。非今日首发。
- [WebLLM：浏览器内 LLM 推理](https://github.com/mlc-ai/web-llm)：本轮进入 HN 与 TypeScript Trending，榜单显示 64 stars today；提供浏览器内 LLM 推理实现。原始发布日期未核实。

## HN 讨论

front/newest 与 Algolia 已查。FrontierHarness 提交于 9 月 3 日 00:14 +08:00，AURA 提交于 9 月 2 日 23:55 +08:00；提交时间只证明被讨论，不等于原文发表时间。本页不以实时互动量的小幅变化推导趋势。

## 日期未确认

- [FrontierHarness Eval](https://frontierharness.org/)：新发现的 Runta 自发布 harness 评测；宣称以同一 Kimi K3 模型与冷启动环境比较 9 个 harness、12 种配置。网页发布日期未确认，未独立复现，不能据此泛化谁超越谁。
- [AURA：开源 SRE Agent 平台](https://github.com/mezmo/aura)：新发现的 Rust SRE Agent 平台，提供工具审批、MCP、多 Agent 与可观测性；生产采用为项目方自述，未核实原始发布日期。

## 观察池

FrontierHarness 页面提供同模型、相同运行环境的具名比较，但同时由 Runta 发布并引导试用，属于厂商自报；成本表格的“每任务”与“仅成功任务”口径不同，不直接把标题中的倍率作为普适效率结论。AURA 的权限控制和生产采用需要额外验证；Trending 的 Atlas、SIE、Chrome DevTools MCP、WebLLM 只作新热度信号。

## 旧文再热

未确认同时满足原文早于七天、过去24小时 HN 再讨论且原始日期可核验的条目。

## 来源链接

- [DeepSeek Harness v0.1.2-alpha.4](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4)
- [DeepSeek Harness v0.1.2-alpha.5](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5)
- [Desktop v0.0.22](https://github.com/cline/cline/releases/tag/desktop-v0.0.22)
- [Cline v4.1.17](https://github.com/cline/cline/releases/tag/v4.1.17)
- [SDK v0.0.82](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.82)
- [CLI v3.0.61](https://github.com/cline/cline/releases/tag/cli-v3.0.61)
- [OpenCode v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26)
- [Harness-of-Harness: Multi-Day Autonomous Software Development with Continual Improvement](https://arxiv.org/abs/2609.01481)
- [What's in Your Agent's Context? Context Privilege Escalation Attacks against AI Agent Harness](https://arxiv.org/abs/2609.01222)
- [From Production Traffic to Post-Training: Building a Self-Hosted LLM That Covers the Corporate Request Mix](https://arxiv.org/abs/2609.01572)
- [Control-Data Flow Separation: Stable Prompt Optimization in Multi-Agent LLMs](https://arxiv.org/abs/2609.00621)
- [Atlas：面向 Agent 的源码与会话追踪](https://github.com/pacifio/atlas)
- [SIE：Agent 模型推理服务](https://github.com/superlinked/sie)
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp)
- [WebLLM：浏览器内 LLM 推理](https://github.com/mlc-ai/web-llm)
- [FrontierHarness Eval](https://frontierharness.org/)
- [AURA：开源 SRE Agent 平台](https://github.com/mezmo/aura)

## 采集状态

- **已检查来源**：Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 官方仓库、releases/changelog（Pi另查包元数据，DSH另查README与文档入口）；GitHub Trending overall/Python/TypeScript；HN front/newest/Algolia；arXiv recent/原文；Hugging Face Daily Papers；Simon Willison。
- **失败来源**：Continue 旧 VS Code CHANGELOG 路径404，已用仓库 tree 找到 CLI CHANGELOG；DSH alpha.5 HTML直连读取超时，release API正常，配图改用已验证 alpha.4 官方 OpenGraph（HTTP 200、image/png）。
- **初始候选数**：27（七项目最近release及新增研究/社区/榜单候选，去重后）。
- **保留来源数**：17。
- **二次补搜**：否（最终来源不为0；失败入口已切换）。

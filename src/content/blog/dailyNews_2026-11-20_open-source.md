---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-20T00:00:00+08:00"
updatedAt: "2026-11-20T11:02:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Hermes Agent v0.23.3"
featuredUrl: "https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3"
featuredSummary: "稳定补丁版汇总 prompt cache 生命周期、压缩归档与持久化接口改造。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-20 08:34 +08:00"
featuredTags: ["Agent","Prompt Cache","Persistence"]
featuredImage: "https://opengraph.githubassets.com/1/NousResearch/hermes-agent"
featuredImageAlt: "Hermes Agent 官方 GitHub 仓库预览卡片"
featuredImageCaption: "图片来源：NousResearch 官方 GitHub 仓库"
tags:
  - "观察池"
  - "Agent"
  - "Agent Runtime"
  - "AI"
  - "Code Mode"
  - "Coding Agent"
  - "Computer Use"
  - "Hooks"
  - "LLM"
  - "LLM Gateway"
  - "MCP"
  - "Messages"
  - "Multi-Agent"
  - "Open Source"
  - "Persistence"
  - "Prompt Cache"
  - "Reliability"
  - "Remote Environment"
---

## 今日概览

采集窗口为 **2026-11-19 10:48 至 2026-11-20 10:48（Asia/Shanghai）**；技术亮点按规范向前扩展到 48 小时。本轮确定性主线来自 Coding Agent/Harness 的会话与子 Agent 可见性、代码模式工具执行、提示缓存和计算机使用驱动可靠性。

## Coding Agent / Harness 雷达

| 项目 | 状态 | 本轮结论 |
|---|---|---|
| Pi Coding Agent / pi-mono | **24h 内主分支进展，尚非 release** | [P2 子 Agent 状态提交](https://github.com/earendil-works/pi/commit/e42343cb55a52c770521cdbb83862d97bf9a7e6e) 把运行中的子 Agent 展示到主会话编辑器上方；另有 [Codex system prompt 修复](https://github.com/earendil-works/pi/commit/edfe6b2ef32283d31efc9e26db86fe48be19d3b2)，将提示作为 leading developer item 发送。均待正式 release 确认。 |
| Cline | 无新增 | 已逐项检查官方仓库、Changelog、extension/CLI/Desktop/SDK Releases；24–48h 内未见新 release。 |
| DeepSeek Harness / DSH | 无新增 | 已检查官方仓库、文档与 Releases；最新 rc.5 已落在本轮窗口之外，不跨日复用旧背景条目。 |
| OpenCode | 无新增 | 已检查官方仓库与 Releases；最近 v2.3.2 已落在窗口之外。 |
| Aider | 无新增 | 已检查官方仓库与 Releases；未见近期正式发布。 |
| Continue | 无新增 | 已检查官方仓库与 Releases；未见 24–48h 新 release。 |
| Roo Code | 无新增 | 已检查官方仓库与 Releases；未见 24–48h 新 release。 |

## 已验证技术亮点（24 小时）

### 1. Hermes Agent v0.23.3：稳定版汇总缓存、压缩与持久化改造

[Hermes Agent v0.23.3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3) 发布于 2026-11-20 08:34（上海时间）。官方将其定义为稳定补丁版，汇总自 v0.23.2 以来的改动，包括 prompt-cache 生命周期、长工具调用后的缓存保温、压缩时归档被丢弃的工具结果，以及存储层持久化接口。发布说明明确表示完整整理版说明将随 v0.24.0 提供，因此本页只采用其已明示的能力，不外推未列出的行为。

<figure class="source-image">
  <a href="https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3"><img src="https://opengraph.githubassets.com/1/NousResearch/hermes-agent" alt="Hermes Agent 官方 GitHub 仓库预览卡片" loading="lazy" /></a>
  <figcaption><a href="https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3">图片来源：NousResearch 官方 GitHub 仓库</a></figcaption>
</figure>

### 2. Deep Agents QuickJS 0.4.0：代码模式获得受控文件系统

[langchain-quickjs 0.4.0](https://github.com/langchain-ai/deepagents/releases/tag/langchain-quickjs%3D%3D0.4.0) 发布于 2026-11-20 07:25（上海时间）。它为代码模式增加可选的 Node 风格 `fs` 接口，可通过 Agent backend 执行 read/write/readdir/access/rm；同时让代码中调用的工具正确应用 `Command` 状态更新，并把字典型 MCP 参数 schema 渲染为类型签名。对 Harness 而言，这同时扩展了代码执行能力和工具协议一致性。

### 3. Deep Agents Talon 0.1.1：主 Agent 与本地子 Agent 获得命令钩子

[deepagents-talon 0.1.1](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-talon%3D%3D0.1.1) 发布于 2026-11-20 09:54（上海时间）。官方 release 增加主 Agent 和本地子 Agent 的 command hooks，并加入 DeepSeek reasoning level 支持；这为多 Agent 执行前后插入受控动作提供了正式扩展点。

### 4. LiteLLM v1.110.1：修复 GPT-6.2 system prompt 缓存

[LiteLLM v1.110.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.1) 发布于 2026-11-19 13:05（上海时间）。该稳定版修复在 `/v1/chat/completions` 或 `/v1/messages` 且 `store: false` 时 GPT-6.2 system prompt 的缓存问题；这直接影响使用代理网关的 Agent 长会话成本与缓存命中。

### 5. Cua Driver 0.55.0：浏览器隔离与跨平台窗口控制修复

[Cua Driver 0.55.0](https://github.com/trycua/cua/releases/tag/cua-driver-rs-v0.55.0) 发布于 2026-11-20 09:26（上海时间）。新增在隔离浏览器启动中保留策略强制扩展，并修复 macOS 首次页面内容读取、Windows 右键修饰键、Hyprland 坐标空间和后台可访问性动作等问题；这些改动主要改善 computer-use Agent 的可复现性和企业策略兼容性。

### 6. Cua Spaces 0.38.18：恢复 Windows/Linux 本地控制入口

[Cua Spaces 0.38.18](https://github.com/trycua/cua/releases/tag/cua-spaces-v0.38.18) 发布于 2026-11-20 08:20（上海时间）。它修复 Windows 与 Linux 上 loopback control server 未提供服务、导致 `open_space_viewer` 不可用的问题，属于远程/隔离环境查看链路的明确可靠性修复。

## GitHub Trending

已检查 overall、Python、TypeScript 当日榜单。榜单用于识别当前热度，不等同于当天发布；由于未取得可稳定复核的统一日增长数字，本轮不抄录 stars/day，也不把入榜本身写成发布事实。

## HN 讨论

已检查 front/newest 与 Algolia 近期提交；本窗口未发现同时具备明确原始技术材料、窗口内讨论时间和足够专题相关性的新增条目，因此不硬凑 HN 热点。

## 论文 / 研究

已检查 arXiv、Hugging Face Papers/Blog 和 Simon Willison Weblog 的近期 Agent、coding、evaluation 入口；未找到能同时确认首发日期与本专题相关性的高置信窗口内新增论文或文章。

## 日期未确认

本轮没有仅因日期无法确认而保留的候选。

## 观察池

- **Pi 子 Agent 可见性与提示缓存**：上述两项官方提交均已进入主分支，但尚未见对应 release；因此只作为未发布实现信号，不把它们表述为所有用户已可用。
- **Deep Agents 0.7.41**：[官方 release](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.41) 发布于 2026-11-20 10:07（上海时间），仅说明用 LangGraph 的消息 delta reducer 修复 message-channel handling，影响范围说明有限，暂留观察池。

## 来源链接

本页的实质事实均指向项目官方 GitHub release 或 commit；未使用搜索摘要替代原始来源。

## 采集状态

- 已检查：Cline、Pi/pi-mono、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库、release/changelog；另查 GitHub Trending、HN/Algolia、arXiv、Hugging Face、Simon Willison，以及 Hermes Agent、LiteLLM、Deep Agents、Cua 官方发布。
- 失败/受限：GitHub Trending 缺少稳定统一增长数字；HN/Algolia、arXiv 与 Hugging Face 本窗口未找到足够高置信新增条目。
- 初始候选：16 条；最终保留：9 个唯一来源，覆盖 7 组事件/进展。
- 二次补搜：否（最终来源不为 0）。

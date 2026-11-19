---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-19T00:00:00+08:00"
updatedAt: "2026-11-19T10:45:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.2.2-rc.5"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.5"
featuredSummary: "DeepSeek 模型改用服务端搜索，其他模型默认使用 DeepSeek Search API。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-18 20:51 +08:00"
featuredTags: ["Coding Agent","Harness","Search"]
featuredImage: "https://opengraph.githubassets.com/1/deepseek-ai/deepseek-harness"
featuredImageAlt: "DeepSeek Harness GitHub 仓库的项目预览卡片"
featuredImageCaption: "图片来源：DeepSeek Harness 官方 GitHub 仓库"
tags:
  - "观察池"
  - "近两日补充"
  - "Agent"
  - "Agent Runtime"
  - "AI"
  - "Automation"
  - "Canary"
  - "Coding Agent"
  - "Computer Use"
  - "Harness"
  - "LiveShare"
  - "LLM"
  - "LLM Gateway"
  - "MCP"
  - "Open Source"
  - "Permissions"
  - "Plugins"
  - "Prompt Caching"
  - "Reliability"
  - "Responses API"
  - "Search"
  - "Session"
  - "Shell"
---

## 今日概览

采集窗口为 **2026-11-18 10:45 至 2026-11-19 10:45（Asia/Shanghai）**；技术亮点按规范向前扩展到 48 小时。今天的确定性主线是：DeepSeek Harness 调整模型搜索路由，Pi 主分支继续推进项目/会话组织，Deep Agents 加固后台命令与 MCP 审批，LiteLLM 修复 Responses 路径的缓存与流式重试；OpenCode 的两次重要发布落在 24–48 小时补充区。

## Coding Agent / Harness 雷达

| 项目 | 状态 | 本轮结论 |
|---|---|---|
| DeepSeek Harness / DSH | **24h 内有发布** | [v0.2.2-rc.5](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.5) 调整搜索路由：DeepSeek 模型使用服务端搜索，其他模型默认走 DeepSeek Search API。 |
| Pi Coding Agent / pi-mono | **主分支进展，尚非 release** | 官方仓库迁移后的 [项目分组提交](https://github.com/earendil-works/pi/commit/5a14e69c067d40dfbff4f2fff7d3b34c897e2dc9) 为 P2 增加由所有者定义的项目分组、位置选择器和侧栏主会话状态；作为未发布信号观察。 |
| OpenCode | **近 48h 发布** | v2.3.1/2.3.2 连续处理后台命令、后台 compaction、自动化与 GPT-6.2 prompt caching，详见下方补充。 |
| Cline | 无新增 | 已检查官方仓库、extension/CLI/Desktop/SDK Releases；24–48h 内未见新 release。 |
| Aider | 无新增 | 已检查官方仓库与 Releases；未见近期正式发布。 |
| Continue | 无新增 | 已检查官方仓库与 Releases；24–48h 内未见新 release。 |
| Roo Code | 无新增 | 已检查官方仓库与 Releases；24–48h 内未见新 release。 |

<figure class="source-image">
  <a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.5"><img src="https://opengraph.githubassets.com/1/deepseek-ai/deepseek-harness" alt="DeepSeek Harness GitHub 仓库的项目预览卡片" loading="lazy" /></a>
  <figcaption><a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.5">图片来源：DeepSeek Harness 官方 GitHub 仓库</a></figcaption>
</figure>

## 已验证技术亮点（24 小时）

### 1. DSH v0.2.2-rc.5：按模型来源分流搜索

[官方 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.5) 发布于 2026-11-18 20:51（上海时间）。DeepSeek 模型改用 DeepSeek 服务端搜索且不按搜索次数收费，其他模型默认使用 DeepSeek Search API。它把搜索工具的路由策略直接绑定到模型来源，影响 Agent 的工具成本与行为一致性。

### 2. Hermes Agent canary：模型、插件与持久化接口同步扩展

[Hermes Agent canary v0.23.2](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261118T064620Z) 发布于 2026-11-18 15:55（上海时间）。官方说明列出新模型支持、插件目录扩展，以及围绕会话、委派、路由和对话存储的持久化接口；这是 canary 构建，应视作前沿验证版本而非稳定版承诺。

### 3. LiteLLM v1.109.2：稳定分支集中回补 Responses 与限流修复

[LiteLLM v1.109.2](https://github.com/BerriAI/litellm/releases/tag/v1.109.2) 发布于 2026-11-19 10:38（上海时间）。该稳定版回补团队限流、用户用量拆分、Responses prompt caching 与流式重试边界等修复；其中“不在已向客户端输出 item 后重试流”有助于减少代理网关产生重复输出。

### 4. Deep Agents：后台 shell 与 MCP 审批进入修复重点

[deepagents-code 0.2.11](https://github.com/langchain-ai/deepagents/releases/tag/deepagents-code%3D%3D0.2.11) 发布于 2026-11-19 02:48（上海时间），修复 MCP hook 审批策略和关闭时后台 worker 清理；同批 [deepagents 0.7.40](https://github.com/langchain-ai/deepagents/releases/tag/deepagents%3D%3D0.7.40) 则保留超时 shell 的输出并清理被取消的命令。两者共同指向 Agent 后台执行生命周期与权限边界的可靠性。

### 5. Cua Spaces 0.38.13：更新计算机使用驱动

[Cua Spaces 0.38.13](https://github.com/trycua/cua/releases/tag/cua-spaces-v0.38.13) 发布于 2026-11-19 06:27（上海时间），将 Cua Driver 0.54.0 打包进 Spaces。说明较短，因此只能确认依赖驱动升级，不能据此推断新的交互能力。

## 近 48 小时补充

### OpenCode v2.3.1：后台化长任务、compaction 与自动化

[OpenCode v2.3.1](https://github.com/anomalyco/opencode/releases/tag/v2.3.1) 发布于 2026-11-18 08:17（上海时间），比主窗口起点早约 2.5 小时。官方 release 显示：超时 shell 转入后台继续运行，自动 compaction 的摘要改为后台生成，并以 automation API 替代实验性 schedule API；同时改进插件更新、代码评论和子 Agent 权限提示。

### OpenCode v2.3.2：修复多 Responses 路由的 prompt caching

[OpenCode v2.3.2](https://github.com/anomalyco/opencode/releases/tag/v2.3.2) 发布于 2026-11-18 09:35（上海时间），距主窗口仅早约 70 分钟。它把 system prompt 改为前置 developer message，以便 Responses 路由从第二步开始命中缓存；官方给出了特定 Copilot 路径的 token 变化，但该数字属于维护者测试，未在本轮独立复现。

### DSH v0.2.2-rc.4：异常响应与 LiveShare 修复

[DSH v0.2.2-rc.4](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.4) 发布于 2026-11-18 01:53（上海时间），修复桌面端 LiveShare 无法创建分享，并改善模型返回异常消息时的处理。它已被 rc.5 覆盖，但对理解本轮 release 链仍有价值。

## GitHub Trending

已检查 overall、Python、TypeScript 当日入口。由于页面未提供可稳定复核的统一日增长数据，本轮不抄录二手 stars/day，也不把“进入榜单”误写为当天发布。上述项目的发布事实均以各自官方 release 或 commit 为准。

## HN 讨论

已检查 front/newest 与 Algolia 近期提交；没有发现同时具备明确原始技术材料、窗口内讨论时间和足够主题相关性的新增条目，因此本轮不硬凑 HN 热点。

## 论文 / 研究

已检查 arXiv 与 Hugging Face Papers/Blog 的近期 Agent、coding 与 evaluation 入口；未找到能在本轮同时确认首发日期与技术相关性的高置信新增论文。

## 日期未确认

本轮没有仅因日期无法确认而保留的候选。

## 观察池

- **Pi P2 项目分组**：上述 [官方提交](https://github.com/earendil-works/pi/commit/5a14e69c067d40dfbff4f2fff7d3b34c897e2dc9) 已进入主分支，但尚未见对应 release；待后续正式版本确认用户可用范围。
- **Cua Driver 0.54.0**：官方 release 仅说明打包版本变化，功能细节不足，暂不扩写能力结论。

## 来源链接

本页所有事实均链接至项目官方 GitHub release 或 commit；没有以搜索摘要代替原始来源。

## 采集状态

- 已检查：Cline、Pi/pi-mono、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库与 release/changelog；另查 GitHub Trending、HN/Algolia、arXiv、Hugging Face、Simon Willison，以及 Hermes Agent、LiteLLM、Deep Agents、Cua 官方发布。
- 失败/受限：GitHub Trending 动态榜单缺少稳定可复核的统一增长数字；arXiv 与 HN 本窗口未找到足够高置信的新增条目。
- 初始候选：14 条；最终保留：10 个唯一来源，覆盖 8 组事件/进展。
- 二次补搜：否（最终来源不为 0）。

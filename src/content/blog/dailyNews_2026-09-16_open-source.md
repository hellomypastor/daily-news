---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-09-16T00:00:00+08:00"
updatedAt: "2026-09-16T10:48:28+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Your Inference Server is Secretly a Learner: Reef Infrastructure for Continual Self-Improving Agents"
featuredUrl: "https://huggingface.co/blog/quao627/your-inference-server-is-secretly-a-learner-reef"
featuredSummary: "作者开源 Reef，将在线推理记录、反馈、模型与 harness 更新纳入可评估、可版本化的持续改进流程。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-09-15（页面只给日期）"
featuredTags: ["Open Source","Agent","Inference"]
featuredImage: "https://cdn-uploads.huggingface.co/production/uploads/6556223bb3bb6c3a41809f7e/lvfib4a1TDKG3lGy3-ha0.gif"
featuredImageAlt: "Reef 文章展示 Agent 从交互经验到评估和新版本的循环动画"
featuredImageCaption: "图片来源：Reef 作者发布的 Hugging Face Community Article"
tags:
  - "日期未确认"
  - "ACP"
  - "Agent"
  - "Agent Harness"
  - "AI"
  - "CLI"
  - "Coding Agent"
  - "Inference"
  - "LLM"
  - "Open Source"
  - "Pre-release"
  - "SDK"
---

## 今日概览

采集窗口：2026-09-14 10:46 至 2026-09-16 10:46（Asia/Shanghai，精选 48 小时）。本轮核实到 Cline、DeepSeek Harness、OpenCode 的官方 release，以及 Reef 作者在 Hugging Face 发布的开源基础设施文章。以下只陈述发行说明或作者原文支持的功能，不推断实际性能或采用量。

## Coding Agent / Harness 雷达

| 项目 | 本轮结论 | 证据 |
| --- | --- | --- |
| Cline | SDK 与 CLI 同日更新：Hub 管理 Agent Plugins；暂时性 provider 错误的重试避开已输出的轮次；优化流式事件和 checkpoint。工作区 `.agents/plugins` 不自动扫描，以免打开仓库即启动其中 MCP。 | [SDK v0.0.83](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.83)、[CLI v3.0.62](https://github.com/cline/cline/releases/tag/cli-v3.0.62)，均为 9 月 15 日官方发布。 |
| Pi Coding Agent / Pi mono | 原 `badlogic/pi-mono` 入口重定向到 `earendil-works/pi`；检查官方仓库及 release，窗口内未见新增 release。 | 官方 GitHub API 重定向核对；最近公开 release 为 9 月 5 日，不以旧版凑条目。 |
| DeepSeek Harness / DSH | `0.1.6-alpha.1` 扩展 headless、MCP、SSH 远端工作区；Browser Use / Computer Use / Auto review 明确标为实验性。 | [官方预览版](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.6-alpha.1)，9 月 15 日。 |
| OpenCode | `v1.18.31` 修复 ACP 会话恢复/分叉状态，启动时显示远端配置认证错误。 | [官方 release](https://github.com/anomalyco/opencode/releases/tag/v1.18.31)，9 月 15 日。 |
| Aider、Continue、Roo Code | 官方仓库和 release 快查，未见窗口内可报告的 release；不重复较旧版本。 | 检查记录见末尾。 |

## 已核实技术精选

1. **Cline Hub 插件与 Agent loop 稳定性。** [Cline SDK v0.0.83](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.83) 把 Agent Plugins 的发现、校验、启停放在 Hub。插件 skill 进入 skills tool，MCP server 不必写入旧配置；release 特别说明不自动扫描工作区插件目录。暂时性 provider 错误最多尝试三次，已流出文本或工具调用的轮次不重试以避免重复执行。发行日期：2026-09-15 13:53 +08:00。

2. **Cline CLI 修补执行与检查点路径。** [CLI v3.0.62](https://github.com/cline/cline/releases/tag/cli-v3.0.62) 将 Hub 插件带到 CLI，使用每会话持久 snapshot index 避免每轮重复哈希未跟踪大文件；修复后台子进程使 `run_commands` 悬挂、`Add File` 覆盖已存在文件等问题。此处是发行说明中的修复范围，未独立量测性能。发行日期：2026-09-15 14:04 +08:00。

3. **DSH 扩大自动化与工具表面。** [dsh-v0.1.6-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.6-alpha.1) 为 Headless 增加 stdin 任务、`--session-id` 续会话、`--json` 事件流；MCP 增加资源发现、读取和 URI 模板；文件/命令/PTC 可在本地 DSH 下通过 SSH 使用远程工作区。Browser Use、Computer Use 和 Auto review 仍为实验性，预览版还包含多项不兼容插件接口调整，升级前需阅读原文。发行日期：2026-09-15 12:57 +08:00。

4. **OpenCode 保存 ACP 会话边界。** [OpenCode v1.18.31](https://github.com/anomalyco/opencode/releases/tag/v1.18.31) 修复 ACP 会话加载、恢复、分叉时的模型、effort、mode 和 reasoning chunk 边界；TUI 在远端配置认证失败时显示错误并以失败状态退出。发行日期：2026-09-15 01:47 +08:00。

5. **Reef 将在线推理与 Agent 版本演进接在一起。** [Reef 作者文章](https://huggingface.co/blog/quao627/your-inference-server-is-secretly-a-learner-reef) 介绍可追踪推理记录和反馈的 stateful inference：learning recipe 可更新模型权重，也可基于 Cordis 更新 Pi 等 harness，并在候选通过评估后发布版本。项目公开了源码；这是一套作者提出和实现的基础设施，文中示例不等于普遍性能结论。页面标注发布日：2026-09-15，未展示时分。

<figure class="source-image">
  <a href="https://huggingface.co/blog/quao627/your-inference-server-is-secretly-a-learner-reef"><img src="https://cdn-uploads.huggingface.co/production/uploads/6556223bb3bb6c3a41809f7e/lvfib4a1TDKG3lGy3-ha0.gif" alt="Reef 文章展示 Agent 从交互经验到评估和新版本的循环动画" loading="lazy" /></a>
  <figcaption><a href="https://huggingface.co/blog/quao627/your-inference-server-is-secretly-a-learner-reef">图片来源：Reef 作者发布的 Hugging Face Community Article</a></figcaption>
</figure>

## GitHub Trending

检查 GitHub 今日 overall、Python、TypeScript 榜单。榜单仅证明当前热度，不证明当天发布；本轮没有将未核实的日增 star 或旧项目计入精选。

## HN 讨论

检查 front/newest 与 Algolia 近期提交。近窗口的 coding-agent 新项目讨论较多，但多数原始发布日期和使用证据不足；相关 Ordewell 见“日期未确认”。本轮不以低互动提交推断社区共识。

## 论文与研究

检查 arXiv 与 Hugging Face Papers/Blog；没有找到同时满足窗口和可靠核验的独立论文精选。Reef 为社区技术文章，列在上方而非论文。

## 旧文再讨论

未核实到原文超过七天且过去 24 小时在 HN 明确重新升温、足以单列的文章。

## 日期未确认

- **Ordewell（状态：原始发布日期未确认，HN 新提交只是发现线索）。** [官方仓库](https://github.com/ordewell/ordewell) 描述可在执行前编辑的任务计划、多 runner（Claude Code、Codex、OpenCode 等）和由 runner 输出证据判断完成的机制。仓库内容可核实，但未把 HN 提交时间当作项目发布日期，也不声称已经广泛采用。

## 观察池

- Pi、Aider、Continue、Roo Code 的较旧 release 仅作雷达核对，没有跨日重复写入旧条目。
- HN 的其他 Show HN 小项目和营销页是邻近信号；原始日期、技术实现或使用证据不充分，本轮暂不升为已核实精选。

## 来源链接

本页原始来源见各条 Markdown 链接；官方 release 与作者文章是主要证据。

## 采集状态

已检查：Cline 仓库/release/changelog，Pi 原入口及迁移后的官方仓库/release，DSH 仓库/release/文档，OpenCode、Aider、Continue、Roo Code 官方仓库/release，GitHub Trending overall/Python/TypeScript，HN front/newest 和 Algolia，arXiv，Hugging Face Papers/Blog，Simon Willison 与工程博客。失败或限制：browser-use 文章通过网页入口打开报安全 URL 错误，未据此写已核实条目；部分 GitHub 网页 release 列表加载错误，改用官方 GitHub API 读取发布时间与发行说明；Reef 页面只列发布日期，未给时分。初始候选 18，保留来源 6；因来源非零，未触发零来源二次补搜。

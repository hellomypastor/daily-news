---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-28T00:00:00+08:00"
updatedAt: "2026-08-28T18:03:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.151.0-alpha.7"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7"
featuredSummary: "Codex 官方仓库发布 0.151.0-alpha.7 预发布版；页面没有逐项变更说明。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-28 06:15 +08:00"
featuredTags: ["Codex","CLI","Pre-release"]
featuredImage: "https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.151.0-alpha.7"
featuredImageAlt: "GitHub 上 OpenAI Codex 0.151.0-alpha.7 发布页的预览图"
featuredImageCaption: "图片来源：OpenAI / GitHub"
tags:
  - "较旧背景"
  - "日期未确认"
  - "Agent"
  - "Brazil"
  - "Bug Fix"
  - "ChatGPT"
  - "CLI"
  - "Codex"
  - "Connectors"
  - "Developer Platform"
  - "Edu"
  - "Education"
  - "Enterprise"
  - "OpenAI"
  - "Plugins"
  - "Pre-release"
  - "Realtime"
  - "Research"
  - "Responses API"
  - "SDK"
  - "Startup"
  - "Temporary Chat"
  - "Voice"
---

## 今日概览

采集窗口为 **2026-08-27 18:03 至 2026-08-28 18:03（Asia/Shanghai）**。可精确核时的官方动态包括 Codex CLI 0.151.0-alpha.6、alpha.7 与 alpha.8 三个预发布版，以及 OpenAI Node SDK v7.8.0；三个 Codex 发布页都没有逐项变更说明，因此不推断功能。Node SDK 新版加入 Responses / Chat Completions 的 `compute_units` 用量字段和 WebSocket 标识，并带来认证、事件、浏览器 ESM 与上传检测修复。ChatGPT Release Notes、教育研究、巴西业务与 OpenAI Academy 的 Ariso 案例均只有自然日而没有精确时刻，本页保守列入“日期未确认”。Agent SDK、Realtime 与模型目录未发现窗口内新条目。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
|---|---|---|
| Codex CLI | **0.151.0-alpha.6、alpha.7 与 alpha.8 发布**；三者均无逐项说明 | [alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6)、[alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7)、[alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.8) |
| VS Code / JetBrains 集成 | 无官方新增 | 官方文档与 changelog |
| Codex cloud / remote tasks / PR agents | 无官方新增 | 官方 Codex 文档与 changelog |
| ChatGPT agentic mode | 无官方新增；临时聊天控制属于普通 ChatGPT 产品更新 | ChatGPT Release Notes |
| 当前官方 Agent 构建产品 | 无新增 | 官方 Agent 文档 |
| Responses API | Node SDK v7.8.0 增加 `compute_units` 用量字段并完善 WebSocket 标识 | [官方 GitHub Release](https://github.com/openai/openai-node/releases/tag/v7.8.0) |
| Agents SDK Python / TypeScript | 无新增 | 官方 GitHub Releases |
| Assistants API 弃用 / 迁移 | 无新增 | 官方弃用与迁移文档 |
| Realtime API | 无新增 | API changelog 与 Realtime 文档 |
| GPT / reasoning / Codex 模型家族 | 无新增 | 官方模型目录与 changelog |

<figure class="source-image">
  <a href="https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7"><img src="https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.151.0-alpha.7" alt="GitHub 上 OpenAI Codex 0.151.0-alpha.7 发布页的预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7">图片来源：OpenAI / GitHub</a></figcaption>
</figure>

## Tier 2：ChatGPT 产品面

| 产品面 | 过去 24 小时状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| macOS / Windows / 移动端 | 无新增 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | 8 月 27 日临时聊天新增可选 memory、plugins 与 custom instructions 个性化控制，并可保存为普通聊天；精确发布时间未确认 |

## Tier 3：企业、安全与行业方案

Enterprise、Business、Gov、Science 与安全方案未发现可精确核时的新发布。Edu 侧有一项随机实验结果；巴西业务文章同时涉及 Enterprise、Edu、API 与 Codex 采用；OpenAI Academy 则刊出 Ariso 使用 voice models、连接器与 Codex 的厂商案例。三篇均只有自然日，列入“日期未确认”，文章中的规模、效果与增长数据均视为发布方或受访者自报，不外推为独立市场统计。

## 官方更新（新到旧）

### OpenAI Node SDK v7.8.0

官方 [GitHub 发布页](https://github.com/openai/openai-node/releases/tag/v7.8.0) 显示该版本于 **2026-08-28 00:46 +08:00** 发布。新版为 Responses 与 Chat Completions 的 usage 类型增加 `compute_units`，为 Realtime / Responses WebSocket 增加默认 SDK User-Agent，并修复 workload identity / X.509 认证、WebSocket 监听器异常、浏览器原生 ESM 导入及 multipart 上传检测等问题。

### Codex CLI 0.151.0-alpha.8

官方 [GitHub 发布页](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.8) 显示该预发布版于 **2026-08-28 12:42 +08:00** 发布。页面仅标注版本号，没有逐项 changelog，本页不推断功能或修复。

### Codex CLI 0.151.0-alpha.7

官方 [GitHub 发布页](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7) 显示该预发布版于 **2026-08-28 06:15 +08:00** 发布。页面仅标注版本号，没有逐项 changelog，本页不推断功能或修复。

### Codex CLI 0.151.0-alpha.6

官方 [GitHub 发布页](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6) 显示该预发布版于 **2026-08-27 20:31 +08:00** 发布。页面同样没有逐项变更说明。

## Love

窗口内未找到同时具备公开原帖、精确时间和足够上下文的新增正面社区样本。官方公告不计作正面口碑，因此不硬凑 Love 结论。

## Hate

窗口内公开检索出现 Codex Desktop、会话恢复与资源占用等用户问题候选，但未完成足够的同事件交叉核验，本轮不把单一个案写成产品事实；相关方向留作后续滚动扫描。

## 情绪判断

**中性，置信度低。** 本轮有三个无说明的 Codex 预发布版本、一项 Node SDK 正式更新和四项只有自然日的官方内容，缺少可精确核时且可交叉验证的社区正负样本，证据不足以判断口碑方向。

## 比较信号

未发现窗口内可精确核时、具名且同任务复现的新增对比评测。Cline、Pi Coding Agent、DeepSeek Harness / DSH、Claude Code、Cursor 等均无足够证据支持新的强弱结论；完整 harness 扫描留给开源专题。

## 日期未确认

- [ChatGPT 临时聊天新增更多控制](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)：8 月 27 日条目说明，用户可在创建临时聊天时选择是否使用既有 memory、plugins 与 custom instructions，并可将临时聊天保存为普通聊天。页面没有精确发布时间。
- [ChatGPT 与批判性思维训练随机实验](https://openai.com/index/what-students-gain-from-chatgpt-critical-thinking-training/)：OpenAI 与博科尼大学合作的逾千名学生实验称，ChatGPT 使用与因果推理训练带来互补效果；页面只有 8 月 27 日自然日，研究结论应结合原论文与实验范围理解。
- [OpenAI 扩展巴西业务](https://openai.com/index/expanding-our-presence-in-brazil/)：官方宣布在圣保罗启动商业运营，并介绍 ChatGPT、API、Codex、Enterprise 与 Edu 的当地采用及合作；页面只有自然日，采用数字均为厂商自报。
- [Ariso 使用 OpenAI 模型构建职场教练](https://academy.openai.com/public/blogs/how-ariso-uses-openai-models-to-build-a-workplace-coach-2026-08-27)：OpenAI Academy 文章标注 8 月 28 日，介绍 Ari 使用 OpenAI voice models、Google Workspace 等连接来源，并让 Codex 参与开源工具 Ivan 的代码审查流程；效果与规模数据来自受访者自述，且页面没有精确发布时间。

## 较旧背景

- [Codex CLI 0.150.1](https://github.com/openai/codex/releases/tag/rust-v0.150.1) 于 **2026-08-27 09:56 +08:00** 发布，早于本轮窗口约两小时。其修复让 remote compaction 默认把保留图片计入 token 预算，并按需裁剪较旧图片；此项仅作版本背景，不计作过去 24 小时新增。

## 观察池

- Codex 官方仓库的 Desktop、会话恢复、计费与资源占用 issue 仍是后续扫描重点；本轮未选取缺少交叉信号的单一报告作为情绪证据。
- 临时聊天对 plugins 的可选使用属于 Connectors / MCP 邻近产品信号，不代表插件接口或 MCP 协议本身发布新版本。

## 未证实传闻

本轮没有需要单列的新产品传闻。搜索结果中的版本猜测、根因判断和采用外推均未当作事实。

## 来源链接

1. [Codex CLI 0.151.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.7)
2. [Codex CLI 0.151.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.6)
3. [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
4. [Better answers, broader thinking](https://openai.com/index/what-students-gain-from-chatgpt-critical-thinking-training/)
5. [Expanding OpenAI’s presence in Brazil](https://openai.com/index/expanding-our-presence-in-brazil/)
6. [Codex CLI 0.151.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.8)
7. [How Ariso uses OpenAI models to build a workplace coach](https://academy.openai.com/public/blogs/how-ariso-uses-openai-models-to-build-a-workplace-coach-2026-08-27)
8. [Codex CLI 0.150.1](https://github.com/openai/codex/releases/tag/rust-v0.150.1)
9. [OpenAI Node SDK v7.8.0](https://github.com/openai/openai-node/releases/tag/v7.8.0)

## 采集状态

- 已检查：OpenAI News / Research / Global Affairs / Academy、OpenAI Developers API changelog、模型与弃用文档、Responses / Realtime / Assistants 迁移资料、ChatGPT Release Notes、Codex CLI / IDE / Cloud / Remote Tasks / PR Review / Desktop 官方入口、五个官方 GitHub Releases 集合、OpenAI Status、Reddit 五个社区、Hacker News、X、YouTube 与公开中英文网页搜索。
- 失败来源：X（未登录无法稳定核验原帖时间）；Reddit（新帖时间与正文访问不稳定）；YouTube（无可交叉核验的窗口内新增）。
- 初始候选：25；最终保留来源：9。
- 二次补搜：否（最终来源不为 0）。

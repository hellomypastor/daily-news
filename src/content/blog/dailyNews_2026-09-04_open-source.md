---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-09-04T00:00:00+08:00"
updatedAt: "2026-09-04T09:04:11+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.1.2-rc.1"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1"
featuredSummary: "0.1.2 首个候选版扩展子代理选模、双向消息、ACP、Headless、插件与会话运行时能力，并重申安全隔离限制。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-09-03 14:06 +08:00"
featuredTags: ["DeepSeek Harness","Multi-Agent","ACP","Release"]
tags:
  - "趋势"
  - "日期未确认"
  - "社区信号"
  - "ACP"
  - "Agent"
  - "Agent Harness"
  - "AI"
  - "Anthropic"
  - "Cline"
  - "DeepSeek Harness"
  - "Desktop"
  - "GitHub Trending"
  - "Hacker News"
  - "LLM"
  - "MCP"
  - "Multi-Agent"
  - "Open Source"
  - "OpenCode"
  - "Pi"
  - "Plugins"
  - "Release"
  - "Reliability"
  - "Timeout"
  - "Tool Execution"
---

## 今日概览

采集窗口为 **2026-09-02 09:04 至 2026-09-04 09:04（Asia/Shanghai）**。本轮最有实质性的变化集中在 Coding Agent / Harness：DeepSeek Harness 发布大版本候选版，Cline 桌面端开始由共享 Hub 发现和运行 Agent Plugins，OpenCode 调整慢启动模型与流式响应的超时策略；Pi 则发生官方仓库迁移并继续快速修补工具执行语义。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 | 关键变化 |
|---|---|---|
| Cline | 已验证更新 | [Desktop v0.0.23](https://github.com/cline/cline/releases/tag/desktop-v0.0.23) 让共享 Hub 自动发现并运行 `~/.agents/plugins` 下的 Agent Plugins，支持技能与 stdio/HTTP/SSE MCP；同时修复计划任务报告消失和 MCP 进程无法完整退出。 |
| Pi Coding Agent / pi-mono | 已验证迁移与更新 | 旧入口 `badlogic/pi-mono` 已重定向到官方 [earendil-works/pi](https://github.com/earendil-works/pi)。主分支最新的[进程退出码修复](https://github.com/earendil-works/pi/commit/c2d3dc55b0b20af5aa3bb1d25774968116c9733f)避免被信号杀死的工具进程因空退出码而被误判为成功。 |
| DeepSeek Harness / DSH | 已验证更新 | [v0.1.2-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1) 增加可授权的子代理模型选择、父子 Agent 双向 `send_message`、完整 ACP 会话控制、Inspector/Web Preview，并强化 Headless、插件、会话与连接能力。 |
| OpenCode | 已验证更新 | [v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27) 将 provider header 与流式 chunk 默认超时设为五分钟，并处理超时 SSE 取消异常，降低慢模型启动时的假失败。 |
| Aider | 无新增 | 官方 release 最新仍为 2025-08-09 的 v0.86.0，本窗口未见 release 或主分支新提交。 |
| Continue | 无新增 | 官方 release 最新为 2026-06-19，主分支最新可见提交为 2026-07-21，本窗口无新增。 |
| Roo Code | 无新增 | 官方 release 与主分支最新活动均停留在 2026-05-15，本窗口无新增。 |

## 已验证重点

### 1. DeepSeek Harness 0.1.2 首个 RC 把多 Agent、ACP 与运行时接口一起推向可用态

[官方发布说明](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1)显示，子代理现在可在授权范围内自主选模，调用方也能指定 provider、模型、推理力度和最大输出；父 Agent 与持续型子 Agent 改用双向 `send_message`。同时 ACP 补齐标准会话控制、模型设置、MCP、权限与取消，Headless 模式将进度写入 stderr、stdout 仅保留最终结果。这些变化共同指向更容易嵌入自动化和多 Agent 工作流的 harness。发布说明也明确强调其尚未经安全审计，沙箱、审批与权限不能被视作绝对隔离。

### 2. Cline Desktop 让 Agent Plugins 成为共享 Hub 的一等扩展

[Cline Desktop v0.0.23](https://github.com/cline/cline/releases/tag/desktop-v0.0.23) 会从用户级 `~/.agents/plugins` 发现插件，验证 `plugin.json`，加载有效 Skills，并自动启动插件贡献的 stdio、Streamable HTTP 或 SSE MCP 服务。插件启停由 Hub 管理，桌面设置页会单独展示 Agent Plugins；工作区级 `.agents/plugins` 则被有意忽略。这个边界设计既统一了桌面与 CLI 的运行核心，也减少工作区任意扩展被静默加载的风险。

### 3. OpenCode 为慢启动模型放宽超时，并收紧 Anthropic thinking 兼容范围

[OpenCode v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27) 将 provider header 和 streamed chunk 的默认超时改为五分钟，chunk timeout 还可显式关闭；它同时限制 Anthropic `thinking.blockBinding` 仅用于 Claude 5.1 及以上版本，并处理取消超时 SSE reader 时的未捕获异常。对自托管或冷启动较慢的推理端点而言，这是稳定性修复而非新能力宣传。

### 4. Pi 修正被信号终止的工具进程可能被误报成功

Pi 官方仓库迁移后的[提交 c2d3dc5](https://github.com/earendil-works/pi/commit/c2d3dc55b0b20af5aa3bb1d25774968116c9733f)记录了一个关键执行语义修复：子进程被信号（例如 OOM 导致 SIGKILL）终止时，空退出码过去可能被映射成 0；现在会按 shell 约定回退为 `128 + signal`。这能避免 Agent 把实际失败的 bash 工具调用当作成功继续规划。

## GitHub Trending

- [earendil-works/pi](https://github.com/earendil-works/pi) 出现在本轮 GitHub TypeScript Daily Trending；页面采集时显示 **101,458 stars、今日新增 493 stars**。Trending 只证明当前热度，不代表项目今天首次发布。仓库描述为统一 LLM API、agent loop、TUI 与 coding-agent CLI 的工具集。

## HN 讨论

- Pi 作者的文章 [There are many agent harnesses, but this one is mine](https://earendil.com/posts/there-are-many-agent-harnesses-but-this-one-is-mine/) 在窗口内两次提交至 HN；截至采集时，较早一条为 3 points / 1 comment，较晚一条为 1 point / 0 comments。讨论量仍很小，不能据此推导广泛社区共识。对应 [HN 讨论页](https://news.ycombinator.com/item?id=49548816)。

## 论文 / 研究

本轮检查 arXiv 与 Hugging Face Papers 后，没有发现同时满足 48 小时窗口、主题相关性和可核实原始发布日期、且优先级高于上述工程更新的论文；不以低相关候选凑数。

## 旧文再热

未发现“原文早于七天、但过去 24 小时在 HN 获得实质讨论”的合格条目。

## 日期未确认

无。

## 观察池

- Pi 作者的 harness 设计文章与仓库迁移高度相关，但原站页面的机器读取不稳定；目前仅将其作为 HN 讨论信号，不把文中未独立核实的设计论断写成事实。
- Aider、Continue、Roo Code 均完成官方入口快速检查但窗口内无更新，因此只保留在雷达的“无新增”状态，不重复收录旧 release。

## 来源链接

- [DeepSeek Harness v0.1.2-rc.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-rc.1)
- [Cline Desktop v0.0.23](https://github.com/cline/cline/releases/tag/desktop-v0.0.23)
- [OpenCode v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27)
- [Pi signal-killed process exit-code fix](https://github.com/earendil-works/pi/commit/c2d3dc55b0b20af5aa3bb1d25774968116c9733f)
- [Pi repository](https://github.com/earendil-works/pi)
- [There are many agent harnesses, but this one is mine](https://earendil.com/posts/there-are-many-agent-harnesses-but-this-one-is-mine/)
- [HN discussion](https://news.ycombinator.com/item?id=49548816)

## 采集状态

- 已检查来源：Cline、Pi、DeepSeek Harness/DSH 的仓库/release/changelog；OpenCode、Aider、Continue、Roo Code 官方仓库与 releases；GitHub Trending overall/Python/TypeScript；HN front/newest/Algolia；arXiv；Hugging Face Papers/blog；Simon Willison。
- 失败来源：无；Pi 旧仓库发生官方重定向，已追踪到新入口。
- 初始候选数：18；最终保留来源数：7。
- 二次补搜：否（已有合格来源）。

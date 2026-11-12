---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-12T00:00:00+08:00"
updatedAt: "2026-11-12T10:42:31+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.2.2-rc.2"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.2"
featuredSummary: "新增 Worktree 代码审阅、具名多层 SubAgent、AgentTeam 协作面板及多项插件与会话能力。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-11 19:33 +08:00"
featuredTags: ["Coding Agent","Harness","Multi-Agent"]
featuredImage: "https://opengraph.githubassets.com/da3cbbe3caa324647e9283d765f6e67550b7b70fbc0bc56eea5f76cd8643c332/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.2"
featuredImageAlt: "DeepSeek Harness v0.2.2-rc.2 GitHub Release 的项目预览图"
featuredImageCaption: "图片来源：DeepSeek Harness GitHub Release"
tags:
  - "观察池"
  - "日期未确认"
  - "Agent"
  - "Agent Security"
  - "AI"
  - "Coding Agent"
  - "GitHub Trending"
  - "Harness"
  - "Inference"
  - "LLM"
  - "Memory"
  - "Multi-Agent"
  - "Open Source"
  - "OpenCode"
  - "Paper"
  - "Pi"
  - "PTY"
  - "Release"
  - "Session"
  - "Skills"
  - "Verification"
---

## 今日概览

本轮以 Coding Agent / Harness 为主轴，核实到 DSH、OpenCode 与 Pi 的三项版本动态；研究侧选入三篇 48 小时内公开的 Agent 论文。未发现足够证据支持任何工具“追平”或“超过”另一工具的结论。

## Coding Agent / Harness 雷达

| 项目 | 状态 | 更新与意义 |
|---|---|---|
| DeepSeek Harness / DSH | 24 小时内正式候选版本 | [v0.2.2-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.2) 增加按分支、提交和文件类别的 Git Worktree 审阅，支持具名、多层 SubAgent，并让 AgentTeam 共享成员与任务面板；同时扩展动态 MCP 注册、并行只读工具和会话压缩提示。它把代码审阅、多 Agent 协作、插件与会话管理放进同一 Harness。 |
| OpenCode | 24 小时内组件更新 | [process-daemon v0.5.2](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.5.2) 发布 `@opencode/pty@0.5.2`、协议版本 8。Release 说明很短，因此只能确认 PTY 守护进程包发布，不能外推更广泛的产品能力。 |
| Pi Coding Agent | 48 小时内补充 | [v1.5.2](https://github.com/earendil-works/pi/releases/tag/v1.5.2) 允许在原工作目录被移动或删除后，把已有会话分叉进当前目录，并修复导入时产生重复会话副本的问题；这是面向长周期会话恢复的实用改进。原 `badlogic/pi-mono` 入口现重定向至 `earendil-works/pi`。 |
| Cline | 已检查，无新增 Release | 官方仓库当天仍有提交活动，但最近公开 Release 为 2026-10-26；未把普通提交硬凑为新闻。 |
| Aider | 已检查，无新增 | 最近公开 Release 早于本轮窗口。 |
| Continue | 已检查，无新增 | 未发现 48 小时内公开 Release。 |
| Roo Code | 已检查，无新增 | 未发现 48 小时内公开 Release。 |

<figure class="source-image">
  <a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.2"><img src="https://opengraph.githubassets.com/da3cbbe3caa324647e9283d765f6e67550b7b70fbc0bc56eea5f76cd8643c332/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.2" alt="DeepSeek Harness v0.2.2-rc.2 GitHub Release 的项目预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.2">图片来源：DeepSeek Harness GitHub Release</a></figcaption>
</figure>

## 已验证技术精选

### DSH 把多层子代理、团队面板与代码审阅串在一起

DSH 的 [v0.2.2-rc.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.2-rc.2) 于 11 月 11 日 19:33（上海时间）发布。版本说明还明确提到：归档会话可清理符合条件的 Worktree、插件可动态管理 MCP 服务、更多只读工具可并行运行。由于它是 RC，生产使用仍应先验证迁移说明与插件兼容性。

### OpenCode 发布 PTY 守护进程包

OpenCode 的 [process-daemon v0.5.2](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.5.2) 于 11 月 12 日 05:34（上海时间）发布。可确认信息限于 npm 包 `@opencode/pty@0.5.2` 与协议版本 8；Release 未给出完整变更列表。

### Pi 改善目录迁移后的会话续接

Pi [v1.5.2](https://github.com/earendil-works/pi/releases/tag/v1.5.2) 于 11 月 10 日 20:25（上海时间）发布，处于本页 48 小时技术精选窗口。新的 Fork 选项会为当前目录创建新会话 ID，避免原项目目录消失后每次恢复都再次询问。

## GitHub Trending

当日总榜可见 [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)，它整理可复用的 Agent Skills。Trending 只能证明当日受到关注，不能证明项目当日发布；页面未稳定显示可核验的日增 Star，因此不记录增长数字。

## HN 讨论

HN 最近提交中出现 Cisco 的 [Agentic AI 安全评测开放规范](https://github.com/CiscoDevNet/foundry-security-spec)。本轮发现时互动量很低，暂作为邻近的 Agent 安全工程信号，不把 HN 提交时间当成仓库发布日期。

## 论文与研究

- [EngineAgent](https://arxiv.org/abs/2611.14356)（11 月 11 日 01:16 上海时间）：针对端侧 LLM 推理引擎跨转换、算子与硬件后端的改造任务，论文报告在 12 个任务上达到 75% 端到端成功率，对比其最强 Coding Agent 基线的 33.3%。这是作者报告的实验结果，尚未独立复现。
- [ProofCoder](https://arxiv.org/abs/2611.14106)（11 月 10 日 21:59 上海时间）：把持续推理与证明助手反馈用于 Rocq 自动验证；作者在 280 个任务上报告成功率从 47% 提升至 60%，约为一半成本。
- [Coding Agent Memory Post-Training II](https://arxiv.org/abs/2611.14009)（11 月 10 日 20:49 上海时间）：以普通文件操作和持久工作区作为跨上下文记忆接口，并用异步 on-policy distillation 训练；论文称相对最强 OPD 基线获得 2.97 倍增益，仍需外部复核。

## 旧文再热

本轮未发现同时满足“原文超过七天且过去 24 小时在 HN 明显再热”的条目。

## 日期未确认

- Cisco 安全规范的 HN 提交发生在窗口内，但仓库首次公开时间未在本轮确认，故仅列为讨论信号。

## 观察池

- GitHub Trending 的 Agent Skills 项目有当日热度，但不是当日发布证据，也未记录不可稳定复现的 Star 增量。
- HN 上多条个人 Show HN Agent 项目仅获少量互动，尚缺技术文档或可复现实验，未提升为精选。

## 来源链接

正文已直接链接全部来源；同一页面内 URL 已去重。

## 采集状态

- 采集窗口：技术精选 2026-11-10 10:42:31 至 2026-11-12 10:42:31（Asia/Shanghai）；HN 讨论重点检查最近 24 小时。
- 已检查：Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 官方仓库与 Release；GitHub Trending；HN/Algolia；arXiv；Hugging Face Papers；Simon Willison。
- 失败/受限：GitHub Trending 未稳定给出日增 Star；Hugging Face 列表结构不稳定，论文改由 arXiv 原文核验。
- 初始候选 13 条，保留 8 个唯一来源；最终来源非零，未触发二次补搜。

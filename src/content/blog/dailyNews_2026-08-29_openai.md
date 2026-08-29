---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-29T00:00:00+08:00"
updatedAt: "2026-08-29T12:05:16+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex 0.151.0-alpha.12"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12"
featuredSummary: "官方仓库发布 Codex CLI 0.151.0-alpha.12；release 正文仅列版本号，版本比较显示多项在研能力，不能视为稳定版上线。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-29 09:29 +08:00"
featuredTags: ["Codex CLI","alpha","官方预览"]
tags:
  - "采用案例"
  - "额度"
  - "观察池"
  - "官方预览"
  - "教育"
  - "媒体"
  - "日期未确认"
  - "社区反馈"
  - "生态"
  - "生态合作"
  - "稳定性"
  - "Agent"
  - "alpha"
  - "API"
  - "ChatGPT"
  - "ChatGPT Work"
  - "Codex"
  - "Codex CLI"
  - "Codex Desktop"
  - "Coding Agent"
  - "Cursor"
  - "OpenAI"
  - "Temporary Chat"
  - "Windows"
  - "WSL"
---

## 今日概览

采集窗口为 **2026-08-28 12:02 至 2026-08-29 12:02（Asia/Shanghai）**。本轮可精确落入窗口的新增证据主要来自 OpenAI 官方 Codex 仓库的用户报告；OpenAI Newsroom、Academy 与 ChatGPT Release Notes 的新页面只给出日历日期，没有公开精确发布时间，因此统一放入“日期未确认”。窗口内新增 Codex CLI 0.151.0 alpha 预览序列；未核实到稳定版 Codex CLI、Responses API、Agents SDK、Realtime API 或模型家族的正式版本更新。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 本轮状态 | 证据与判断 |
|---|---|---|
| Codex CLI | 官方 alpha 预览 + 社区负面信号 | 官方仓库发布 0.151.0 alpha 预览序列；另有 npm 安装、Windows 沙箱与 WSL 项目路径问题报告，均不能视为官方确认的普遍回归。 |
| VS Code / JetBrains 集成 | 无新增 | 已查官方文档、Codex 仓库与社区入口，未见窗口内可确认发布。 |
| Codex Cloud / Remote / PR Agents | 无新增 | 未见窗口内官方版本或功能公告。 |
| ChatGPT agentic mode / ChatGPT Work | 日期未确认 | 当日 Academy 案例展示 ChatGPT Work 与 Codex 的生产使用，但属于采用案例而非新功能发布。 |
| Responses API / Agents SDK Python、TypeScript | 无新增 | 已查开发者文档与官方 GitHub releases，未见窗口内可确认 release。 |
| Assistants API 迁移状态 | 无新增 | 未见窗口内新的弃用或迁移节点；不重复较旧背景。 |
| Realtime API | 日期未确认的采用案例 | 泰国加速器页面提到医院电话线多语音 Agent 与实时语音模型评估，但不构成 API 新版本公告。 |
| GPT / reasoning / Codex 模型家族 | 无新增 | 已查官方模型指南、Newsroom 与开发者社区公告，未见窗口内可确认的新模型或别名变化。 |

## Tier 2：ChatGPT 全家桶

| 产品面 | 状态 |
|---|---|
| 浏览器 / Operator 能力、桌面应用 | 无官方新增；观察池有 Windows Codex Desktop 沙箱问题报告。 |
| GPTs / GPT Store、Canvas | 无新增。 |
| Sora / 视频、GPT Image / DALL·E | 无新增。 |
| Voice | 无产品发布；日期未确认的泰国案例涉及实时语音 Agent 评估。 |
| Connectors / MCP | 无新增。 |

## Tier 3：企业、教育、科研与区域生态

本轮有四篇官方采用/生态页面标注 8 月 28 日，但没有精确发布时间，均列入下方“日期未确认”：泰国十家初创企业加速器，以及 Codex 在民权档案、健身创业和新闻编辑部内部工具中的使用案例。它们说明 Codex/ChatGPT 正向非技术用户与小团队扩散，但不能据此推断整体采用率或产品能力变化。

## 官方动态（按证据时间）

[Codex 0.151.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12) 于 2026-08-29 09:29 +08:00 发布。官方 release 正文仅给出版本号；同一官方仓库的版本比较显示 MCP 单工具输出限额、压缩历史读取、远程插件刷新等在研变更。它是 alpha 预览，不能据此声称稳定客户端已获得这些能力。

## Love

- 官方 Academy 的三个案例显示 Codex 被用于大规模公开记录整理、两人健身创业团队和新闻编辑部自动化；这是由 OpenAI 选择发布的案例，属于采用信号，不作为独立社区好评计数。

## Hate

- [npm install exits 0 and leaves broken Codex CLI when platform tarball download fails](https://github.com/openai/codex/issues/41283)（2026-08-28 14:11 +08:00）记录：平台 tarball 传输失败时，npm 仍可能以成功状态退出，随后 CLI 因缺少平台包而无法启动。报告给出 npm 日志、重试与完整性校验，复现证据较完整，但仍是单一用户问题。
- [[Windows] Sandboxed profile-directory reads return EPERM](https://github.com/openai/codex/issues/41237)（2026-08-28 08:51 +08:00）记录：Windows Codex Desktop 更新前后，沙箱无法枚举用户目录，阻断 esbuild/本地服务启动。作者明确说明未做回滚 A/B，因此“由更新导致”尚未证实。

- [[Windows + WSL] Cannot create projects – AbsolutePathBuf deserialized without a base path](https://github.com/openai/codex/issues/41463)（2026-08-29 11:52 +08:00）记录：用户在两个 Desktop build 上复现 WSL 仓库项目创建失败，并提供路径与文件监视错误日志；尚无官方根因确认。
- [Codex desktop repeatedly hangs silently during long-running commands](https://github.com/openai/codex/issues/41418)（2026-08-29 05:28 +08:00）记录：Windows 用户提供后端意外退出、连接转为错误与任务中断日志；日志不能证明 Remote Control WebSocket 停止是根因。

## 情绪判断

**偏负面，低到中等置信度。** 可精确落窗的两条证据都是可操作的故障报告，而正面采用案例只有日期、缺少精确时间且来自 OpenAI 自身编辑渠道。样本小，不能外推整体用户口碑。

## 比较与替代信号

本轮没有具名、可复现的新评测足以判断 Codex 相对 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness / DSH 的领先关系。社区故障只说明安装和沙箱边界的摩擦，不等同于模型编码能力下降；开源 harness 的完整扫描留给开源专题页。

## 日期未确认

- [Supporting Thailand’s next generation of AI startups](https://openai.com/index/supporting-next-generation-ai-startups-thailand/) 标注 2026-08-28，但无精确时刻。OpenAI 与泰国 MHESI 启动八周加速器，覆盖十家医疗、健康和教育初创企业；每队获 2,000 美元 API credits、技术指导和模型访问。页面还称泰国 Codex 周活使用自 2026 年初增长超过 350 倍；这是 OpenAI 内部口径。
- [How a high school student built a civil-rights archive with ChatGPT](https://academy.openai.com/public/blogs/how-a-high-school-student-built-a-civil-rights-archive-with-chatgpt-2026-08-28) 标注 2026-08-28、无精确时刻。官方案例称 Codex 帮助整理约 15 万份公开校园民权记录；数字来自案例叙述，未独立审计。
- [This European startup founder is building a fitness business with Codex and ChatGPT Work](https://academy.openai.com/public/blogs/this-startup-founder-is-building-a-fitness-business-with-codex-and-chatgpt-work-2026-08-28) 标注 2026-08-28、无精确时刻。案例称两人团队用 Codex 与 ChatGPT Work 运营健身产品，并服务逾 5,000 名用户；为当事人/官方案例口径。
- [How a journalist uses OpenAI to build tools for his Singapore newsroom](https://academy.openai.com/public/blogs/how-a-journalist-uses-openai-to-build-tools-for-his-singapore-newsroom-2026-08-28) 标注 2026-08-28、无精确时刻。案例描述记者用 Codex 为编辑部构建职位追踪等内部工具。
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-gpt-4) 新增 2026-08-27 条目，介绍临时聊天可选择个性化并可保存为普通聊天；页面没有该条目的精确发布时间，无法确认是否落入本轮起点之后。

- [Our decision on Cursor following its acquisition by SpaceX](https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/) 标注 2026-08-28、无精确时刻。OpenAI 宣布拟于 2026-11-12 停止向 Cursor 提供 OpenAI 模型，并称不会向其提供未来模型；这是编码 Agent 生态合作的未来安排，尚未生效。

## 观察池

- [Codex Rate Limits Discussion Thread](https://community.openai.com/t/codex-rate-limits-discussion-thread/1378553/634) 的 2026-08-28 08:25 帖文称五小时额度限制影响长任务，并主观感到 GPT-5.6 Sol 质量/效率下降。该帖只有单一用户经验、无可复现实验，不作为模型退化事实。

## 来源链接

正文中的每条链接均已列入结构化 `sources`；同页 URL 已去重。

## 采集状态

- 已检查：OpenAI Newsroom 各分类、OpenAI Developers 与模型/Codex 页面、ChatGPT Release Notes、Codex 与 Agents SDK 官方 GitHub、Developer Community、OpenAI Academy、Reddit、Hacker News，以及中英文 Web 搜索。
- 失败来源：X 未登录时间线无法稳定读取；YouTube 未找到可交叉核实的新发布；官方页面未稳定暴露可确认的可靠原图，因此本页未配置图片。
- 初始候选：19；保留来源：12；二次补搜：否（最终来源非 0）。

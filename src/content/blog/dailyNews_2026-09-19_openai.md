---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-19T00:00:00+08:00"
updatedAt: "2026-09-19T10:48:35+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.155.1"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.155.1"
featuredSummary: "修复新本地 TUI 会话的 reasoning summary 默认值，避免不兼容提供方拒绝请求。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-19 04:03 +08:00"
featuredTags: ["Codex","CLI"]
tags:
  - "观察池"
  - "官方更新"
  - "社区反馈"
  - "Agent"
  - "ChatGPT"
  - "CLI"
  - "Codex"
  - "OpenAI"
---

## 今日概览

采集窗口：2026-09-18 10:47 至 2026-09-19 10:47（Asia/Shanghai）。窗口内可核实的正式更新集中在 Codex CLI 0.155.1 的兼容性修复；社区层面有桌面端标签恢复和内置浏览器访问的个案报告。没有证据支持把这两例扩大成整体故障率。

## Tier 1：编码、Agent 与开发平台

| 方向 | 本轮状态 | 证据 |
| --- | --- | --- |
| Codex CLI | 0.155.1 修复本地 TUI 新会话默认启用 reasoning summary 时，部分不支持它的提供方拒绝请求的问题；显式设置仍生效 | [官方 GitHub 发布](https://github.com/openai/codex/releases/tag/rust-v0.155.1) |
| VS Code / JetBrains 集成 | 无新增 | 已检查官方更新入口 |
| Codex 云端任务、PR Agent | 无新增 | 已检查官方更新入口 |
| ChatGPT Agent / Work | 无新增 | 已检查官方更新入口 |
| Agents API、Responses API、Agents SDK Python/TypeScript | 无新增 | 已检查开发者变更日志 |
| Assistants API 迁移、Realtime API、模型家族 | 无新增 | 已检查开发者文档与变更日志 |

[ChatGPT 与 Codex 官方变更日志](https://learn.chatgpt.com/docs/changelog) 将 0.155.1 列为 9 月 18 日更新；GitHub release 时间为 9 月 19 日 04:03（上海时间）。

## Tier 2：其他产品面

| 方向 | 本轮状态 |
| --- | --- |
| 浏览器与 Operator 能力、桌面应用 | 无经官方发布验证的新功能；下列桌面问题为用户反馈 |
| GPTs / GPT Store、Canvas、Sora、图片、语音、Connectors / MCP | 无新增 |

## Tier 3：企业、教育、政府、科学与安全

官方新闻、帮助中心和开发者更新中，未核实到窗口内新的 Enterprise、Business、Edu、Gov、Science 或安全产品发布。旧条目不重复作为当日新闻。

## 官方更新（新到旧）

1. **Codex CLI 0.155.1**：修复新本地 TUI 会话的 reasoning summary 默认值，以免不支持该字段的提供方拒绝请求；用户显式配置不受影响。见[发布页](https://github.com/openai/codex/releases/tag/rust-v0.155.1)。

## Love

本轮未采集到足以代表近期积极口碑的可核实独立样本；官方发布不计作正面口碑。

## Hate

- 有用户在 [GitHub issue #46411](https://github.com/openai/codex/issues/46411) 报告 macOS 桌面端关闭特定右侧工件标签后，重新打开会话时标签重现。该帖提供复现步骤和本地状态观察，但尚未确认根因；仅作个案反馈。
- 另一用户在 [GitHub issue #46350](https://github.com/openai/codex/issues/46350) 报告 macOS 内置浏览器一次策略校验不可用，随后访问超时。该帖明确指出新会话复现性及错误间关系尚未确认；仅作个案反馈。

## 口碑判断

样本量仅两条公开 issue，且均为自述。可说“桌面工作流可靠性存在待核实反馈”，不可推算发生率或判定服务整体质量。信心：低。

## 对比观察

本轮未找到可复现的 Codex 对 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness/DSH 同题评测。产品能力比较暂不下结论，开源 harness 细节见开源专题。

## 日期未确认

暂无与本轮相关且值得保留的日期未确认候选。

## 观察池

桌面端两项用户问题等待维护者复现或修复说明；本页仅保留原始报告，不视作官方已确认缺陷。

## 来源链接

- [Codex CLI 0.155.1 GitHub release](https://github.com/openai/codex/releases/tag/rust-v0.155.1)
- [ChatGPT 与 Codex 官方变更日志](https://learn.chatgpt.com/docs/changelog)
- [桌面工件标签恢复报告](https://github.com/openai/codex/issues/46411)
- [内置浏览器访问报告](https://github.com/openai/codex/issues/46350)

## 采集状态

已检查：OpenAI News、ChatGPT release notes、ChatGPT/Codex changelog、OpenAI API changelog、Codex GitHub releases/issues、OpenAI GitHub、OpenAI Developer Community，以及 Reddit、Hacker News、X、YouTube 搜索入口。失败来源：X 页面登录与索引限制，无法独立核实具体帖子；YouTube 未找到可核实的窗口内原始发布。初始候选 8 条，保留 4 个来源；二次补搜：否。

---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-11T00:00:00+08:00"
updatedAt: "2026-11-11T10:55:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Pi v1.5.2"
featuredUrl: "https://github.com/earendil-works/pi/releases/tag/v1.5.2"
featuredSummary: "改善跨目录 session 恢复并修复 import 重复文件。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-10 20:25 +08:00"
featuredTags: ["Coding Agent","Session","已验证"]
tags:
  - "观察池"
  - "日期未确认"
  - "未发布"
  - "已验证"
  - "Agent"
  - "AI"
  - "Coding Agent"
  - "LLM"
  - "MCP"
  - "Open Source"
  - "Session"
---

## 今日概览

采集截止：**2026-11-11 10:49（Asia/Shanghai）**；技术亮点采用 48 小时窗口。本轮确认 Pi 与 OpenCode 两个版本，并保留一篇只有日期的 Hugging Face 决策模型文章。

## Coding Agent / Harness 雷达

| 项目 | 状态 | 核心变化 |
|---|---|---|
| Pi | [v1.5.2](https://github.com/earendil-works/pi/releases/tag/v1.5.2)，已验证 | 旧目录丢失或移动后可把 session fork 到当前目录，并修复 `/import` 重复 session 文件 |
| OpenCode | [v2.2.7](https://github.com/anomalyco/opencode/releases/tag/v2.2.7)，已验证 | Copilot Auto 路由、MCP token 并发修复、后台 compaction 与 ACP steering 等 |
| Cline | 无新 release；见观察池未发布提交 | 不把主分支提交写成正式版本 |
| DeepSeek Harness / DSH | 无新增 | 最新候选早于窗口 |
| Aider / Continue / Roo Code | 无新增 | 已快速检查官方仓库与 changelog |

## 已验证技术亮点

- Pi v1.5.2 改善跨目录 session 恢复，直接影响长周期 Agent 会话可迁移性。
- OpenCode v2.2.7 同时处理模型路由、MCP 并发、context compaction 和工具状态同步，属于 harness 核心循环与上下文管理更新。

## GitHub Trending / HN / 论文

Trending 仅代表当前热度，因官方页面没有稳定日期化快照，本轮不报告排名或增长数字。HN 与 arXiv 未找到证据强度高于上述候选且可可靠核时的新条目。

## 日期未确认

Hugging Face 的 [Decision Models in Hugging Face](https://huggingface.co/blog/decision) 标注 11 月 10 日但无时分；文章提出以 state、typed questions 与 allowed answers 返回结构化决策及概率，对 Agent 路由有工程意义，但不把合作方主张写成通用共识。

<figure class="source-image">
  <a href="https://huggingface.co/blog/decision"><img src="https://huggingface.co/blog/assets/decision/thumbnail.png" alt="Hugging Face Decision Models 文章缩略图" loading="lazy" /></a>
  <figcaption><a href="https://huggingface.co/blog/decision">图片来源：Hugging Face 官方博客</a></figcaption>
</figure>

## 观察池

- Cline 的[未发布提交](https://github.com/cline/cline/commit/d9b24c20317af6412b7a2c32f6f6453420500961)涉及 CLI 非交互运行默认行为与 Desktop cloud recency 修复。
- Pi 的[未发布提交](https://github.com/earendil-works/pi/commit/473515f9c297c75cf2c3ebb3ba027049ed836d27)涉及可暂停工作、signals、gates 与 hook tasks。
- OpenCode 的[未发布提交](https://github.com/anomalyco/opencode/commit/33432347ce82bd805f4d6bec5d252119170a92ce)加入 LM Studio decision model 支持。以上均不写成已发布功能。

## 采集状态

七个 harness 必查项目、GitHub Trending、HN、arXiv、Hugging Face 与 Simon Willison 均已检查。初始候选 9 条，保留 6 个唯一来源；二次补搜：否。

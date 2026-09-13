---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-09-13T00:00:00+08:00"
updatedAt: "2026-09-13T10:49:41+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Orcrist：用状态机驱动桌面编码 Agent"
featuredUrl: "https://github.com/simone20a/Orcrist"
featuredSummary: "GitHub 仓库创建时间为 2026-09-12 14:52 UTC；项目 README 展示将任务先写成状态机，再逐状态执行，并声明失败路径、重试预算和升级状态。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-09-12 22:52 +08:00"
featuredTags: ["Coding Agent","Agent Harness"]
featuredImage: "https://raw.githubusercontent.com/simone20a/Orcrist/main/screens/session.png"
featuredImageAlt: "Orcrist 桌面编码 Agent 运行界面，左侧为会话记录，右侧为执行环境与存储"
featuredImageCaption: "图片来源：Orcrist 项目官方仓库截图"
tags:
  - "观察池"
  - "较旧背景"
  - "Agent"
  - "Agent Harness"
  - "AI"
  - "Coding Agent"
  - "LLM"
  - "Open Source"
---

## 今日概览

采集窗口：2026-09-12 10:46 至 2026-09-13 10:46（Asia/Shanghai）。本轮必查的七个 Coding Agent 官方仓库在窗口内未发现新提交或发行版。新发现集中于较小的开源工程项目；不据此推断采用率或性能排名。

## Coding Agent / Harness 雷达

Cline、Pi（原 badlogic/pi-mono，现重定向至 earendil-works/pi）、DeepSeek Harness / DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库和 release 已逐一检查。七者在本轮窗口未见可核实的新提交；Roo Code 原仓库已归档。未将较旧版本重新包装成今日发布。

## 已验证技术亮点

- **Orcrist：用状态机驱动桌面编码 Agent。** [原始仓库](https://github.com/simone20a/Orcrist) 创建于 9 月 12 日 22:52（上海时间）。它先为任务生成状态机，再逐状态执行工具调用，并预设失败路径、重试预算和升级状态。README 还说明了 authoring 与 execution 两种模型角色，以及工作区内的会话记录。项目很新，功能描述来自作者文档，尚无独立性能验证。

<figure class="source-image">
  <a href="https://github.com/simone20a/Orcrist"><img src="https://raw.githubusercontent.com/simone20a/Orcrist/main/screens/session.png" alt="Orcrist 桌面编码 Agent 运行界面，左侧为会话记录，右侧为执行环境与存储" loading="lazy" /></a>
  <figcaption><a href="https://github.com/simone20a/Orcrist">图片来源：Orcrist 项目官方仓库截图</a></figcaption>
</figure>

## GitHub Trending

本轮 Github Trending 页面未能稳定读取，因此没有用当前热度推断项目发布时间或捏造星标增量。

## HN 讨论

HN 最近提交检索发现 Orcrist 与下方两个较旧项目的讨论；HN 提交时间仅代表讨论出现，不代表原项目今日发布。

## 论文与研究

检查 arXiv 和 Hugging Face Papers/博客入口，未取得既能核实原文日期又与本页主轴足够相关的新论文。

## 旧文重现

未发现符合“原文超过七天、过去 24 小时 HN 再讨论”且能核实互动数据的技术文章。

## 日期未确认

本轮没有需要仅凭未核实发布日期入选的条目。

## 观察池

- **Sorify（较旧项目，新 HN 讨论）：** [原始仓库](https://github.com/rakutentech/sorify) 创建于 8 月 13 日；项目自述提供 Agent 端到端测试、CI webhook、定时和 MCP。HN 于 9 月 13 日出现开源介绍，但这些功能未作独立测试。
- **no_human（较旧项目，新 HN 讨论）：** [原始仓库](https://github.com/no-human-ai/no_human) 创建于 8 月 5 日；自述在本地把 ticket 推进为审查后 PR。9 月 13 日的 HN 展示不等于当日发布。

## 来源链接

上文每条已附原始仓库链接；未引用不可确认出处的图片。

## 采集状态

已检查：七个必查项目的官方仓库及 releases、Cline 更新记录、DSH 官方文档、GitHub Trending（总榜/Python/TypeScript）、HN newest 与 Algolia、arXiv、Hugging Face Papers/博客、Simon Willison 与工程博客。失败：GitHub Trending 页面读取报错；HN 网页入口报错，已改用 Algolia API。初始候选 8 条，保留 3 条；因官方项目零新增，已扩大中英文关键词并改查 GitHub 和 HN 完成二次补搜。

---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-01T00:00:00+08:00"
updatedAt: "2026-09-01T07:03:42+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "定价"
  - "日期未确认"
  - "中国"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Managed Agent"
---

## 今日概览

采集窗口：2026-08-31 07:00 至 2026-09-01 07:00（Asia/Shanghai）；24–72 小时观察窗口为 2026-08-28 07:00 至 2026-08-31 07:00。本轮没有发现能够核实发布时间、且满足托管 Agent 生命周期定义的新动态。因首轮没有可确认来源，已完成中英文关键词、备用官方入口、GitHub 与可信二手来源的第二轮补搜；补搜保留 1 个日期未确认的中国 AaaS 定价候选。

## 重点动态

过去 24 小时没有可确认的 AaaS 新发布。第二轮补搜发现巨章 DesireCore 的官方定价页明确描述云托管 Agent 和企业套餐，但没有页面发布日，故仅列入“日期未确认”，不作为窗口内新闻。

## 远程 / 云端 Agent 执行

Devin、Grok Bot、GitHub coding agent、Jules、Cursor、Replit Agent、Factory、Amp、Cloudflare Agents 等官方入口均已检查，未发现本窗口内可核实的新托管异步任务、远程环境、并发、定价或企业控制面发布。

## 海外厂商

- **Cognition Devin：无新增。** 已显式检查官方 2026 release notes、Recent Updates、API release notes、博客与文档，覆盖托管异步 session、环境与快照、并发和子 session、计划任务、ACU/定价、企业治理以及 Slack、Linear、Jira、MCP 和 API 集成；未发现截止窗口末的新条目。
- **xAI/Grok：无新增。** 已显式检查 Grok Bot、Automations、Workflows、Agent Tools API、远程代码执行、托管计算机和企业/API Agent 能力。8 月 29 日 Grok Bot 与 X 集成已在前一日报告，依照“不连续重复旧背景来源”规则，本日不重复收录；普通 Grok 模型/API 动态不等于 AaaS，详见行业专题页。
- **Coding Agent / Harness：无新增。** Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue、Roo Code 均检查了托管 cloud/background/scheduled/remote execution、并发、企业控制与定价证据；DSH-Remote、DSH Remote SSH、dsh-watch 等命中均由用户自托管或本地执行，不是供应商托管执行生命周期，仍归开源专题。

## 中国市场（字节跳动重点）

- **字节跳动 Coze / 火山引擎 / Doubao / Trae / Seed：无可确认新增。** 已检查托管执行、定时任务、远程环境与企业控制相关入口。
- 阿里云百炼 / Qoder / 通义 / 夸克、腾讯元宝 / 混元 / 云、百度 AgentBuilder / Comate、智谱、Kimi、MiniMax、DeepSeek 等官方入口未见本窗口内可确认的 AaaS 发布。产品文档仅展示当前能力而没有发布日期时，不据此宣称当日上线。
- **巨章 DesireCore：日期未确认候选。** 官方定价页展示 SaaS 云托管 Agent、企业权限与审计、10/25/60/100 Agent 团队套餐，以及含 SLA、同企业共享 Credits、宣称不限 Agent 并发的算力包；这些信息符合 AaaS 商业化观察范围，但页面没有发布日，不能判定为本窗口新发布。[官方定价页](https://www.desirecore.cn/pricing/)

## AaaS 与 MaaS / PaaS 边界

- 模型、推理 API、上下文窗口、工具调用接口和模型进入云市场属于 MaaS；只有服务方进一步托管任务、会话、环境、调度或执行生命周期时才计入 AaaS。
- 通用容器、沙箱、浏览器和云运行时属于 PaaS 邻近能力；没有 Agent loop、任务编排、持久状态或企业控制面的证据时不作为 AaaS 发布。
- 本地或自托管 coding harness 的 release、插件和模型适配不等于供应商托管服务。

## 日期未确认

### 巨章 DesireCore 企业 SaaS 与算力包定价

官方页可直接打开，并明确给出 Agent 云端托管、团队规模、权限/审计和算力包价格等商业化信息；基础企业 SaaS 套餐标示为 6 万元/年起，企业算力包标示为 799 元/月起。页面本身没有发布日期；HTTP `Last-Modified` 只能反映静态文件状态，不能当作产品发布时刻，因此本条不计入 24 小时确认动态。[官方定价页](https://www.desirecore.cn/pricing/)

## 未证实传闻

本轮没有保留单一来源泄漏或未经官方确认的产品发布传闻。

## 邻近信号观察池

检索到的普通模型/API 更新、Cloudflare Sandbox 等通用执行基础设施、以及本地/自托管 harness 信号均未出现本窗口内新的“供应商托管 Agent 生命周期”证据，因此不列为 AaaS 动态。

## 趋势判断

本轮证据不足以支持新的行业趋势结论。DesireCore 页面提供了“软件订阅与执行 Credits 分离”的一个中国市场样本，但因日期未确认，不据此判断近期定价趋势。

## 来源链接

- [巨章 DesireCore 定价](https://www.desirecore.cn/pricing/)

## 采集状态

- 已检查：Devin 与 xAI/Grok 必查入口；GitHub、Google、Microsoft、Replit、Cursor、Lindy、CrewAI、LangGraph、Amazon Q、Cloudflare、Factory、Amp；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code；字节跳动重点、主要中国厂商及 DesireCore 官方入口。
- 失败入口：部分产品/文档页无逐条日期；部分社交入口需要登录或仅有摘要；部分 changelog 存在索引延迟。
- 初始候选：7 条；最终保留：1 条。其余候选为已于前一日报告的旧条目、窗口外更新或 MaaS/PaaS/自托管 harness 邻近信号。
- 二次补搜：是；扩展中英文关键词并切换官方 changelog、GitHub 与可信二手入口，保留 1 个日期未确认候选。
- 图片：无。保留来源没有可核实的合格原始题图，因此不配置页面图片。

今日扫描完成，共 1 条动态，重点：过去 24 小时无可确认 AaaS 新发布；新增 1 个日期未确认的中国云托管 Agent 商业化候选。

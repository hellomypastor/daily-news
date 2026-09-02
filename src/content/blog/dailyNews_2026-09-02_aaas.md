---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-02T00:00:00+08:00"
updatedAt: "2026-09-02T13:16:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Copilot code review can now approve pull requests"
featuredUrl: "https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests"
featuredSummary: "GitHub Copilot code review 在公测中新增 approval assessment；管理员可授权其提交计入合并规则的正式批准，并按企业、组织、仓库和文件路径控制。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-09-02 03:25 +08:00"
featuredTags: ["AaaS","GitHub Copilot","PR Agent","Enterprise"]
tags:
  - "24–72 小时观察"
  - "多 Agent"
  - "邻近信号"
  - "日期未确认"
  - "视频创作"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Enterprise"
  - "GitHub Copilot"
  - "Grok"
  - "Managed Agent"
  - "PR Agent"
  - "Safety"
  - "xAI"
---

## 今日概览

采集窗口：**2026-09-01 04:02 至 2026-09-02 04:02（Asia/Shanghai）**；24–72 小时观察窗口为 **2026-08-30 04:02 至 2026-09-01 04:02**。本轮确认 1 条新的 AaaS 企业治理能力：GitHub Copilot 托管代码审查进入可批准 PR 的公测；同时在观察窗口保留 1 条可信二手 AaaS 候选，并记录 1 条官方 MaaS/安全邻近信号。Devin 与 xAI/Grok 已按要求独立核查；均未出现新的托管异步执行、远程环境、并发、定价、企业控制面或集成动态。当天早先因确认来源为 0 已完成第二轮搜索，本轮从 GitHub 官方 changelog 补入可核实新增。

## 重点动态

- **GitHub Copilot code review 可批准 PR（Public Preview）**：Copilot 的每次代码审查现在给出 approval assessment；管理员授权后，它可提交计入 required approvals 的正式批准。能力默认关闭，提供企业、组织、仓库三级控制，并可限制允许批准的文件路径；新提交会像人类批准一样使旧批准失效。这属于托管 PR Agent 的执行与企业治理能力。[GitHub 官方 changelog](https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests)

## 远程 / 云端 Agent 执行

Devin、Grok Bot、Jules、GitHub Copilot cloud agent、Replit Agent、Cursor、Factory、Amp、Cloudflare Agents 等官方入口均已检查。GitHub Copilot code review 新增可由管理员启用的 PR 正式批准，并以企业、组织、仓库和文件路径策略约束；其余入口未发现本窗口内可核实的新托管异步任务、远程环境、并发、定价或企业控制面发布。

## 海外厂商

- **GitHub Copilot：PR Agent 企业控制增强。** Copilot code review 的 approval assessment 会出现在每次审查概览中；管理员可选择允许其提交正式批准，且可按企业、组织、仓库及文件路径配置。公测覆盖 Copilot Pro、Pro+、Max、Business 与 Enterprise。[官方说明](https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests)
- **Cognition Devin：无新增。** 已显式检查官方 2026 release notes、Recent Updates、API release notes、博客与文档，覆盖托管异步 session、环境与快照、并发和子 session、计划任务、ACU/定价、企业治理以及 API、Slack、Linear、Jira 与 MCP 集成。
- **xAI/Grok：无新增。** 已显式检查 Grok Bot、Automations、Workflows、Agent Tools API、远程代码执行、托管计算机、异步任务与企业/API Agent 能力。普通 Grok 模型/API 新闻不等于 AaaS，详见行业专题页。
- **Coding Agent / Harness：无新增。** Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue、Roo Code 均检查托管 cloud/background/scheduled/remote execution、并发、企业控制与定价证据；本地或自托管变化仍归开源专题。

## 中国市场（字节跳动重点）

- **字节跳动 Coze / 火山引擎 / Doubao / Trae / Seed：无可确认新增。** 已检查托管执行、定时任务、远程环境与企业控制相关入口。
- 阿里云百炼 / Qoder / 通义 / 夸克、腾讯元宝 / 混元 / 云、百度 AgentBuilder / Comate、智谱、Kimi、MiniMax、DeepSeek 等官方入口未见本窗口内可确认的 AaaS 发布。

## AaaS 与 MaaS / PaaS 边界

- 模型、推理 API、上下文窗口与工具调用接口属于 MaaS；只有服务方进一步托管任务、会话、环境、调度或执行生命周期时才计入 AaaS。
- 通用容器、沙箱、浏览器和云运行时属于 PaaS 邻近能力；没有 Agent loop、任务编排、持久状态或企业控制面证据时不作为 AaaS 发布。
- 本地或自托管 coding harness 的 release、插件和模型适配不等于供应商托管服务。

## 日期未确认

- **千问创作 Agent Teams（可信二手、事件日期为 8 月 31 日，具体时刻未确认）**：艾媒网 9 月 1 日报道，千问创作面向全部用户开放 Agent Teams，并接入 Wan3.0，将视频创作拆分为脚本、分镜、画面和配音配乐等多 Agent 协作环节。该事件位于 24–72 小时观察窗，尚未找到带精确发布时间的独立官方公告，因此不计为过去 24 小时已确认发布。[可信二手报道](https://www.iimedia.cn/c1088/115562.html)

## 未证实传闻

本轮没有保留单一来源泄漏或未经官方确认的产品发布传闻。

## 邻近信号观察池

- **xAI Grok 4.6 生物安全评测（官方、非 AaaS）**：xAI 于 9 月 1 日发布 LatchBio 独立评测解读，涉及 Agent harness 中的文件检查、工具使用与环境推理，但没有新增托管执行、后台任务、远程环境或企业 Agent 服务证据，故仅作为 MaaS/安全邻近信号。[xAI 官方文章](https://x.ai/news/biosafety-at-the-frontier)
- 其余普通模型/API 更新、通用执行基础设施与本地/自托管 harness 命中均未出现本窗口内新的“供应商托管 Agent 生命周期”证据。

## 趋势判断

GitHub Copilot 的新增表明托管 PR Agent 正从“提出审查意见”延伸到可计入合并规则的治理动作，同时保留管理员分层授权与路径边界。观察窗内的千问创作候选则显示多 Agent 协作正向托管内容生产流程延伸，但目前只有可信二手报道，证据不足以据此推断更广泛行业趋势。

## 来源链接

- [Copilot code review can now approve pull requests](https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests)
- [千问创作推出 Agent Teams（可信二手）](https://www.iimedia.cn/c1088/115562.html)
- [Biosecurity at the frontier（xAI 官方，邻近信号）](https://x.ai/news/biosafety-at-the-frontier)

## 采集状态

- 已检查：Devin 与 xAI/Grok 必查入口；GitHub、Google、Microsoft、Replit、Cursor、Lindy、CrewAI、LangGraph、Amazon Q、Cloudflare、Factory、Amp；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code；字节跳动重点及主要中国厂商。
- 失败入口：部分产品/文档页无逐条日期；部分社交入口需要登录或仅有摘要；部分 changelog 存在索引延迟。
- 初始候选：9 条；最终保留：3 条（1 条过去 24 小时官方 AaaS 更新、1 条 24–72 小时可信二手 AaaS 候选、1 条官方 MaaS/安全邻近信号）；过去 24 小时确认的 AaaS 发布为 1 条。
- 二次补搜：是；已扩大中英文关键词并切换官方 changelog、GitHub 与可信二手入口，仍未发现合格新增。
- 图片：无；观察池与邻近信号均不适合作为首页图片，故不配置页面图片。

今日扫描完成，共 3 条动态，重点：GitHub Copilot code review 新增受企业策略约束的 PR 正式批准能力；千问 Agent Teams 进入日期未确认观察，xAI 生物安全评测仅作邻近信号；Devin 与 xAI/Grok 均已完成专项检查且无 AaaS 新增。

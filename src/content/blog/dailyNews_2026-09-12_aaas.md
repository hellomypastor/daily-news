---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-12T00:00:00+08:00"
updatedAt: "2026-09-12T10:47:25+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Introducing the Agents API"
featuredUrl: "https://openai.com/index/introducing-the-agents-api/"
featuredSummary: "OpenAI 将 Codex harness、长会话编排、恢复、subagent 与可选托管沙箱开放为 Agents API 公测，属于 24–72 小时 AaaS 观察项。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-09-10"
featuredTags: ["OpenAI","Agents API","Hosted Harness","Sandbox","24–72h"]
tags:
  - "24–72h"
  - "AaaS"
  - "Agent"
  - "Agents API"
  - "Cloud Agent"
  - "Hosted Harness"
  - "Managed Agent"
  - "OpenAI"
  - "Sandbox"
---

## 今日概览

主窗口：Asia/Shanghai 2026-09-11 10:47:25 至 2026-09-12 10:47:25；24–72 小时观察窗回溯至 2026-09-09 10:47:25。本轮没有发现可确认落入严格 24 小时、且满足托管执行生命周期定义的 AaaS 新发布。保留一项 9 月 10 日的强相关官方更新：OpenAI Agents API 把 Codex harness、长会话编排和可选托管沙箱开放为 API；该项位于 24–72 小时观察窗，详见 OpenAI 专题页。

由于严格 24 小时来源为 0，已扩大中英文关键词并切换官方列表、文档、GitHub 与可信二手入口完成第二轮检索。

## 重点动态

严格 24 小时内已验证动态：**0 条**。没有以抓取时间代替发布时间，也没有把模型 API、通用云基础设施或本地 coding harness 更新误写为 AaaS。

## 远程 / 云端 Agent 执行

### OpenAI Agents API：托管 Codex harness 与可选云沙箱（24–72 小时）

[OpenAI 官方公告](https://openai.com/index/introducing-the-agents-api/)于 2026-09-10 发布 Agents API 公测。OpenAI 托管并维护 Codex harness，负责长会话的上下文压缩、工具编排、恢复和 subagent 协作；开发者可选 OpenAI 托管沙箱、自有基础设施或合作伙伴环境。官方还明确描述异步扇出数百个 Agent、稍后收集结果的客户场景。该能力管理 Agent 的执行生命周期而不只是提供模型推理，因此符合 AaaS 定义（详见 OpenAI 专题页）。

公告称 Agents API 本身不另收费，按模型 token 与工具计费；托管沙箱等资源仍依相应价格计算。页面只标自然日，但无论当天具体时刻均落在本轮 24–72 小时观察窗，不将其称作严格 24 小时动态。

## 海外厂商扫描

- **Cognition Devin**：已显式检查官方 Blog、2026 Release Notes、文档、API、价格和企业页面，覆盖托管异步执行、环境、并发、定价、企业接入和集成。最新强相关发布仍是 9 月 9 日 Devin Plugins，本轮没有新事件，不跨日重复旧来源。
- **xAI / Grok**：已显式检查官方 News、developer docs 与 Grok Build changelog，覆盖 Grok Bot、Automations、托管电脑、异步任务、工具调用、编码/远程执行、并行协作及企业/API Agent 能力。Grok Bot 的既有形态符合 AaaS，但最新相关官方内容早于 72 小时；Grok Build 9 月 9 日更新属于本地/客户端 harness 维护，本轮无新的 AaaS 公告。
- **OpenAI**：Agents API 符合 AaaS 定义，作为 24–72 小时观察项保留，详见 OpenAI 专题页。
- **Anthropic、Google/Jules、Microsoft/GitHub、Replit、Lindy、CrewAI、LangGraph、Amazon Q/AgentCore、Cloudflare、Factory、Sourcegraph/Amp**：未检出严格主窗口内可核验的新托管运行、并发、定价或企业控制面发布。

## 中国平台（ByteDance 重点）

- **字节跳动：Coze / 火山引擎 / 豆包 / Trae / Seed**：已检查托管运行时、后台任务、工具沙箱、记忆、监控与评测入口；未取得主窗口内带明确发布时间的新公告。
- **阿里：百炼 / Qoder / 通义 / 夸克**：未发现窗口内新的云端 Session、长程执行、弹性并发或企业控制面公告；无日期的既有产品页不重复当作今日动态。
- **腾讯、百度、智谱、Moonshot/Kimi、MiniMax、DeepSeek 与可信创业公司**：第二轮中英文补搜仍未找到窗口内可核验的原始发布。

## Harness 的 AaaS 边界

已逐一检查 Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 是否出现供应商托管的云端执行、后台或定时任务、远程环境、多 Agent 服务、并发、企业控制面或定价证据。本轮未发现新增托管生命周期证据；本地 CLI、IDE、桌面、headless/CI 或自托管 harness 的更新属于开源专题。

## AaaS vs MaaS / PaaS

- OpenAI Agents API 由供应商管理 harness、会话、恢复、工具编排及可选沙箱，属于 AaaS，而不是只有模型调用的 MaaS。
- 仅提供推理或工具调用 API 属于 MaaS 邻近信号；通用容器、沙箱与 Workers 若不管理 Agent 生命周期，更接近 PaaS。
- 本地或自托管 harness 即使支持后台任务、subagent 或并发，也不能自动证明供应商提供托管服务。

## 日期未确认

OpenAI Agents API 的自然日已经由官方确认，不属于日期未确认项；本轮未新增其他值得保留的无日期候选。

## 未证实传闻

本轮未发现具备明确来源链、值得保留的 AaaS 泄露或传闻。

## 24–72 小时观察池

OpenAI Agents API 于 9 月 10 日发布，提供托管 Codex harness、长会话、异步并发、subagent、工具编排和可选托管沙箱。它是明确的 AaaS 产品事件，但早于本轮 24 小时起点，因此仅作观察项，不进入“今日已验证”计数（详见 OpenAI 专题页）。

## 邻近信号观察池

Amazon Bedrock AgentCore 的 September 2026 release notes 展示 TypeScript Agent framework 评测与托管 Consent Portal 等强相关能力，但页面没有逐条日期，无法判断本轮新增，故不把文档当前状态包装为今日发布。普通 Grok 模型/API 和本地 Grok Build 维护同样不满足本轮 AaaS 事件条件。

## 趋势判断

OpenAI 的发布进一步印证托管 Agent 平台正在拆分为两个可组合层：供应商维护 harness、会话和编排，运行环境则允许官方托管、自有基础设施或专业沙箱伙伴。单个 24–72 小时事件不足以证明全行业同步转向，但“控制面与执行环境解耦”值得持续观察。

## 来源链接

1. [Introducing the Agents API](https://openai.com/index/introducing-the-agents-api/)（详见 OpenAI 专题页）

## 采集状态

- 已检查：Cognition Devin 的托管异步执行、环境、并发、定价、企业接入与集成；xAI Grok 的托管 Agent、异步任务、工具、编码/远程执行与企业/API 能力；OpenAI、Anthropic、Google/Jules、Microsoft/GitHub、Replit、Lindy、CrewAI、LangGraph、Amazon Q/AgentCore、Cloudflare、Factory、Amp，以及中国主要平台。
- Harness 边界：已检查 Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code；无供应商托管执行生命周期新证据。
- 失败或受限：Devin 与 Grok 无窗口内 AaaS 新公告；AgentCore 月度 notes 无逐条日期；部分中国入口依赖登录/客户端渲染；OpenAI 公告无精确时刻但自然日足以归入 24–72 小时。
- 初始候选：33；保留来源：1；二次补搜：是（严格确认的 24 小时来源为 0，已扩大中英文关键词、替换官方入口并检查 GitHub 与可信二手来源）。
- 图片：未配置。官方页正文可见的媒体没有取得稳定、公开且可直接核验的原始图片 URL；不使用搜索缩略图或页面抓取占位。

今日扫描完成，共 1 条动态，重点：严格 24 小时无新增；OpenAI Agents API 作为 24–72 小时 AaaS 观察项，展示托管 harness 与可选执行环境的分层模式。

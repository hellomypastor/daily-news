---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-13T00:00:00+08:00"
updatedAt: "2026-11-13T10:54:20+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Automation"
  - "Cloud Agent"
  - "Devin"
  - "Enterprise"
  - "Managed Agent"
---

## 今日概览

采集窗口：**2026-11-12 10:48 至 2026-11-13 10:48（Asia/Shanghai）**。本轮核实到 1 个第一方来源：Cognition 在 11 月 12 日更新 Devin 的托管会话、企业权限、集成治理与自动化可观测性。xAI/Grok、海外平台、中国平台及 coding harness 云端能力均已显式检查；未以旧闻或普通模型 API 填充 AaaS 条目。

## 顶部动态

- Cognition 的 [Devin Recent Updates（2026-11-12）](https://docs.devin.ai/release-notes/overview) 同时覆盖托管执行与企业控制面：会话可展示 Agent 设置的 reminder，批量凭据/审批/网络请求合并呈现；Devin Review 新页面向全部组织开放，并新增“自动修复 Review findings”的独立策略。企业管理员还可关闭七类 GitHub 可选权限、按组织限制单个 MCP 工具并把工具设为 Allow / Needs approval / Block。
- 同一更新还增强托管运营链路：自动化卡片把 RRULE 转为可读计划；Oncall 报告通知展示周期、行动项和 PR 状态；Slack/Teams 增加提及触发、工作状态与消息更新行为。这些变化不是新模型发布，而是围绕远程 Agent 生命周期、审批、工具治理、定时执行和企业集成的 AaaS 控制面升级。

## 远程 / 云端 Agent 执行

Devin 的 reminder、scheduled automation、Oncall report 与云端会话共同构成后台执行信号；本次 Release Notes 没有宣布新的并发额度或价格，因此不推断配额和商业条款变化。Release Notes 只标日期、未标精确时分，虽然 11 月 12 日与本轮窗口重叠，仍不声称具体发布时间。

## 海外厂商

- **Cognition Devin**：已检查托管异步执行、环境、并发、定价、企业接入与集成。窗口内确认上述 11 月 12 日控制面更新；未发现公开的新定价或并发数字。
- **xAI/Grok**：已检查 News、Grok Bot/Build changelog、Agent 工具与远程执行文档。最新 Bot changelog 仍是 11 月 11 日 v1.0.1，已在上一日报收录；本日无新增，不重复旧背景。普通 Grok 模型/API 与 SDK 异步客户端不等同于托管 Agent。
- **其他平台**：Google、Microsoft、AWS、GitHub、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory 与 Sourcegraph/Amp 未定位到需要新增的同窗内第一方 AaaS 发布。Anthropic 与 OpenAI 相关入口已检查；若涉及产品细节，分别**详见 Claude 专题页**与**详见 OpenAI 专题页**。

## 中国市场

已检查 ByteDance（Coze/火山引擎/Trae/Seed）、Alibaba（百炼/Qoder）、Tencent、Baidu、Zhipu、Moonshot/Kimi、MiniMax 与 DeepSeek。搜索命中以既有平台说明、较旧发布或缺少第一方日期的二手整理为主，本轮不把它们写成窗口内新品。

## 日期未确认

- Devin 11 月 12 日 Release Notes 为官方日期，但没有精确时分；因此可确认发生在该自然日，无法进一步证明其在 24 小时窗口中的精确时点。

## 未证实传闻

本轮未发现值得保留的单源泄露或未证实产品发布。

## 邻近信号观察池

- xAI 的普通 Responses API 工具调用、Batch API 或 SDK 并发示例属于 MaaS/开发者能力，除非服务商进一步托管 Agent 的环境、任务状态和执行生命周期，否则不作为 AaaS。
- Cline、Pi Coding Agent、DeepSeek Harness/DSH、OpenCode、Aider、Continue 与 Roo Code 的本地、桌面、CLI、headless 或自托管 release 继续归入开源专题；本轮未找到符合云端托管、后台任务、远程环境、并发、企业控制面或定价证据的新事件。

## 趋势

本轮最清晰的方向是：AaaS 竞争继续从“能否远程执行”进入企业级治理深水区，工具级权限、组织边界、审批、定时任务与 Oncall 可观测性开始成为同一控制面的组成部分。

## 采集状态

已检查 Devin 与 xAI/Grok 强制渠道、海外及中国平台、七个 coding harness；失败入口及边界排除原因已记录。初始候选 9 条，保留 1 个唯一来源；最终来源非 0，未触发二次补搜。

**今日扫描完成，共 1 条动态，重点：Devin 将 MCP 工具策略、企业权限、自动化与 Oncall 进一步收拢到托管 Agent 控制面。**

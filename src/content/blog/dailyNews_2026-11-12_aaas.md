---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-12T00:00:00+08:00"
updatedAt: "2026-11-12T11:08:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "回顾"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "AgentCore"
  - "Cloud Agent"
  - "Enterprise"
  - "Enterprise Agent"
  - "Grok Bot"
  - "Managed Agent"
  - "MCP"
  - "Plugin"
---

## 今日概览

采集窗口：**2026-11-11 10:42 至 2026-11-12 10:42（Asia/Shanghai）**。本轮确认两组 AaaS 进展：xAI 为 Grok Bot 增加企业会议、共享连接器与团队管理能力；Databricks 发布持续运行的企业 Agent Genie，并把受治理的业务上下文接入多家托管 Agent。两组官方页面均只标日期、没有精确时分，因此保留日期限制，不声称精确落入 24 小时。

## 顶部动态

- xAI [Grok Bot 1.0.1 changelog](https://x.ai/changelog/bot) 标注 11 月 11 日：Team、Enterprise 与 Ultra 计划的 Bot 可从链接加入 Google Meet、Zoom 或 Microsoft Teams，回答会议聊天并发送会后摘要；Team Bot 还增加 Teams 接入、共享连接器、学习内容审核与分享范围控制。它具有托管 Bot、计划分层、企业控制面和持续云端计算机，符合 AaaS 定义。
- Databricks [The new Genie](https://www.databricks.com/blog/new-genie-autonomous-ai-complex-enterprise-work) 将 Genie 描述为 always-on 企业 Agent，可持续处理长时任务、跨应用行动，并由 Unity Gateway 管理身份、工具、轨迹和成本。新 always-on Genie 尚为即将进入 preview/beta 的能力，不能写成全面 GA。

## 远程 / 云端 Agent 执行

Databricks 同日发布的 [Genie plugins](https://www.databricks.com/blog/bring-your-business-context-chatgpt-claude-microsoft-copilot-cowork-and-grok-bot) 可把受治理的 Genie Ontology 与专业 Genie Agents 接入 ChatGPT、Claude、Microsoft Copilot Cowork 和 Grok Bot，也可通过 MCP 服务连接其他 Agent。它本身偏企业上下文与工具层，但与 always-on Genie 的托管执行结合后，体现了 AaaS 控制面从单一 Agent 扩展到跨平台上下文、权限和审计。涉及 ChatGPT 与 Claude 的产品细节分别**详见 OpenAI 专题页**与**详见 Claude 专题页**。

## 海外厂商

Cognition Devin 已显式检查托管异步执行、环境、并发、定价、企业接入与集成，窗口内无新增。Anthropic、OpenAI、Google、Microsoft、AWS、GitHub、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory 与 Sourcegraph/Amp 入口也已检查，未发现需要新增的同窗内第一方 AaaS 发布。

## 中国市场

ByteDance、Alibaba、Tencent、Baidu、Zhipu、Moonshot/Kimi、MiniMax 与 DeepSeek 相关入口已检查。本轮未定位到同时满足时间窗口、第一方证据与托管执行定义的新条目，因此不以二手汇总硬凑新品。

## 日期未确认

- [Grok Bot 1.0.1](https://x.ai/changelog/bot) 与 [Databricks new Genie](https://www.databricks.com/blog/new-genie-autonomous-ai-complex-enterprise-work) 均有 11 月 11 日官方日期，但缺少具体时分；以“日期未确认”处理是否严格落入本轮 24 小时。
- [Databricks Genie plugins](https://www.databricks.com/blog/bring-your-business-context-chatgpt-claude-microsoft-copilot-cowork-and-grok-bot) 同样只标日期；其跨平台连接能力已确认，具体功能在不同合作平台上的上线节奏仍以各平台与 Databricks workspace 配置为准。

## 未证实传闻

本轮未发现值得保留的单源泄露或未证实产品发布。

## 邻近信号观察池

AWS 的 [October AI builders roundup](https://aws.amazon.com/blogs/machine-learning/icymi-what-landed-for-ai-builders-in-october-2026/) 于 11 月 11 日汇总 Bedrock AgentCore 与 Strands Box 等既有能力；这是回顾性文章而非当日新品。普通模型 API、MCP 连接器或本地 sandbox 也不自动构成 AaaS。Cline、Pi、DSH、OpenCode、Aider、Continue 与 Roo Code 的本地、桌面、headless、自托管或普通 release 变化继续留在开源专题，只有服务商托管生命周期、远程环境、后台任务、并发、企业控制面或定价证据才进入本页。

## 趋势

本轮信号集中在两点：托管 Agent 从对话界面进入会议和长期企业工作；治理从单 Agent 权限扩展为跨平台的身份、上下文、工具、轨迹与成本控制。

## 采集状态

已检查 Devin 与 xAI/Grok 强制渠道、海外及中国平台、七个 coding harness；失败入口及边界排除原因已记录。初始候选 12 条，保留 4 个唯一来源；最终来源非 0，未触发二次补搜。

**今日扫描完成，共 4 条动态，重点：Grok Bot 企业协作控制与 Databricks always-on Genie 推动 AaaS 向持续执行和统一治理演进。**

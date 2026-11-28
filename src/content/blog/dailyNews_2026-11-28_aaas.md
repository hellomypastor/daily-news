---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-28T00:00:00+08:00"
updatedAt: "2026-11-28T10:43:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "观察池"
  - "较旧背景"
  - "日期未确认"
  - "社区信号"
  - "AaaS"
  - "Agent"
  - "Agent Platform"
  - "Cloud Agent"
  - "Enterprise"
  - "Managed Agent"
  - "OpenCode"
  - "PaaS"
  - "Remote Agent"
  - "Remote Session"
  - "Sandbox"
---

## 今日概览

扫描窗口为 **2026-11-27 10:43 至 2026-11-28 10:43（Asia/Shanghai）**。本轮没有找到可由官方原文确认、且在主窗口内发布的 AaaS 新产品或重大能力更新；因此已执行第二轮扩大检索。以下保留的是日期较旧、日期未确认或偏基础设施的有效信号，均不写成今日发布事实。

## 重点动态

- **主窗口内已验证动态：0 条。** Devin 与 xAI/Grok 均完成专项检查，未发现符合托管执行、异步任务、远程环境、并发或企业控制面定义的新公告。

## 远程 / 云端 Agent 执行

| 状态 | 项目 | 观察 | AaaS 判断 |
|---|---|---|---|
| 日期未确认 | OpenCode on Render | Render 的公开指南给出把 OpenCode 部署成远程编码 Agent 的模板，同时明确提醒它不是经过加固的沙箱，并要求保护任务触发 API。[原文](https://render.com/articles/host-your-own-background-coding-agent-on-render) | 属于可托管的远程执行方案，但更接近用户自建 PaaS 模板；发布日期未能从页面确认。 |
| 社区信号 | VS Code Agent Host Protocol 移动端客户端 | 社区作者称其 Android 客户端可连接远程 tunnel、镜像会话状态与审批；这是远程操控需求信号，不是平台正式发布。[讨论](https://www.reddit.com/r/GithubCopilot/comments/1y5rt38/i_built_an_android_client_to_drive_my_copilot/) | 有远程会话控制特征，但证据仅为社区帖子，进入观察而非正式动态。 |

## 海外厂商

- **Cognition Devin**：已核对官方产品新闻、文档、变更日志、环境、并发、定价、企业接入和集成入口；公开可核验入口没有主窗口内新增，不用旧材料补位。
- **xAI / Grok**：已核对 News、Grok Build/Bot changelog、Docs、API 与工具调用入口。最近可见的 Bot changelog 为 2026-11-24，超出 72 小时；且该条目并非新的托管 Agent 执行能力，因此未纳入来源。Grok Build 的历史后台工作流能力亦未重复收录。
- **Anthropic / OpenAI**：已检查 Managed Agents、Claude cloud sessions、Codex cloud/remote tasks 与 agent-building 产品；没有主窗口内新增，产品全量动态分别**详见 Claude 专题页**与**详见 OpenAI 专题页**。
- **Google、Microsoft/GitHub、AWS、Cloudflare、Replit、Cursor、Lindy、CrewAI/LangGraph、Factory、Sourcegraph/Amp**：官方入口未发现可确认的主窗口新增。

## 中国市场（字节系重点）

- **字节系**：Coze、火山引擎、Doubao、Trae 与 Seed 的公开入口未发现主窗口内可核实的托管 Agent 执行更新。
- **阿里、腾讯、百度、智谱、Kimi、MiniMax、DeepSeek**：完成官网/文档与中英文关键词检索；部分页面缺少条目级日期，未把搜索摘要抓取时间当成发布日期。

## AaaS 与 MaaS / PaaS 边界

本页只把供应商代管 Agent 生命周期、异步任务、环境、编排、观测、企业控制或远程编码执行列为 AaaS。模型 API 单独更新仍是 MaaS；把开源 harness 放进普通云主机，则通常是 PaaS/自托管方案。

## 日期未确认

- **OpenCode on Render**：页面当前公开可访问并描述远程任务执行，但未显示可核验的原始发布日期，故只作为日期未确认候选。[来源](https://render.com/articles/host-your-own-background-coding-agent-on-render)

## 未证实传闻

- 本轮没有保留单一来源泄露或无法追溯原帖的产品发布传闻。

## 邻近信号观察池

- **Huawei Cloud AgentArts 入门文档（文档版本 01，2026-11-23）**：文档描述平台内 Agent 创建、沙箱资源委托和运行时鉴权，具备托管平台相关能力，但已超出 72 小时，只作较旧背景，不作为今日发布。[官方 PDF](https://support.huaweicloud.com/qs-agentarts/AgentArts-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-pdf.pdf)
- **社区远程控制需求**：Android 客户端帖子显示开发者希望跨设备查看 Agent 会话与审批，但它不证明 GitHub 或微软推出了新的托管能力。[讨论](https://www.reddit.com/r/GithubCopilot/comments/1y5rt38/i_built_an_android_client_to_drive_my_copilot/)
- **OpenCode 托管模板**：Render 指南证明通用云平台可承载开源 harness，但其安全边界由部署者负责，不等同于供应商全托管 AaaS。[指南](https://render.com/articles/host-your-own-background-coding-agent-on-render)

## 趋势

在缺少新发布的情况下，本轮最明确的信号仍是“远程执行”与“受控环境”被拆成不同层：社区和 PaaS 模板能快速提供后台运行与跨设备控制，但身份、短期凭据、隔离、审计和并发治理仍决定其是否达到企业 AaaS。

## 来源链接

1. [Render：Host your own background coding agent](https://render.com/articles/host-your-own-background-coding-agent-on-render)（日期未确认，PaaS/自托管边界）
2. [Reddit：Android client for Copilot agent sessions](https://www.reddit.com/r/GithubCopilot/comments/1y5rt38/i_built_an_android_client_to_drive_my_copilot/)（2026-11-27，社区信号）
3. [华为云 AgentArts 开始使用](https://support.huaweicloud.com/qs-agentarts/AgentArts-%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8-pdf.pdf)（文档版本 2026-11-23，较旧背景）

## 采集状态

- 已检查来源：Devin 官方产品与文档；xAI/Grok News、Build/Bot changelog、Docs/API；Anthropic、OpenAI、Google、Microsoft/GitHub、AWS、Cloudflare 及主要中外托管 Agent 平台；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的 hosted 证据。
- 失败来源：Devin 部分产品内日志需登录；xAI 最近条目超出 72 小时；部分中国厂商页面动态渲染或无精确日期；X 未登录时间线不可稳定核验。
- 初始候选 9 条，最终保留 3 个唯一来源；主窗口正式动态为 0，已扩大中英文关键词并切换官方文档、GitHub、产品 changelog、备用入口与可信二手来源完成第二轮搜索（secondPass=true）。

今日扫描完成，共 3 条动态，重点：主窗口无已验证 AaaS 新发布；远程执行模板与跨设备会话控制继续显现需求，但不应与供应商全托管能力混为一谈。

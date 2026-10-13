---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-10-13T00:00:00+08:00"
updatedAt: "2026-10-13T10:44:13+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Introducing DigitalOcean Agent Data Services: The Data Foundation for Agents"
featuredUrl: "https://www.digitalocean.com/blog/introducing-agent-data-services"
featuredSummary: "Agent Data Services 进入 private preview，为 Managed Agents 提供托管多模态数据、执行轨迹、索引、治理及评测反馈闭环。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-10-12（官方仅标日期，具体时刻未披露）"
featuredTags: ["DigitalOcean","Agent Data Services","Private Preview","Managed Agent"]
featuredImage: "https://doimages.nyc3.cdn.digitaloceanspaces.com/002Blog/mysql.png"
featuredImageAlt: "DigitalOcean Agent Data Services 官方文章的数据库主题配图"
featuredImageCaption: "图片来源：DigitalOcean 官方文章 OpenGraph 图片"
tags:
  - "邻近信号观察池"
  - "AaaS"
  - "Agent"
  - "Agent Data Services"
  - "Agent Governance"
  - "Cloud Agent"
  - "DigitalOcean"
  - "Enterprise"
  - "Google Cloud"
  - "Harness Runtime"
  - "Human-in-the-loop"
  - "Managed Agent"
  - "Private Preview"
  - "Remote Execution"
---

## 今日概览

主采集窗口：**2026-10-12 10:44:13 至 2026-10-13 10:44:13（Asia/Shanghai）**；同时检查此前 24–72 小时信号。本轮确认 DigitalOcean 两条窗口内 AaaS 动态：Agent Data Services 进入 private preview，把托管 Agent 的上下文、执行轨迹和评测闭环接到同一受管数据层；另一篇生产实测披露 Managed Agents Harness Runtime 的隔离环境、暂停恢复、网络白名单、按秒计费与无人值守运行边界。Google 10 月 12 日修订 Agent AI Use Guidelines，属于治理邻近信号，不写成新的托管执行产品。

## 今日重点

| 层级 | 动态 | AaaS 判断 |
|---|---|---|
| 24 小时已验证 | DigitalOcean Agent Data Services private preview | 与 Managed Agents 集成，托管上下文、执行轨迹、索引、访问控制及评测数据闭环，属于 Agent 生命周期平台扩展 |
| 24 小时已验证 | DigitalOcean 发布 Harness Runtime 生产运行实测 | 明确展示每会话 microVM、暂停/恢复/检查点、网络出口白名单和无人值守长任务，直接符合远程托管执行定义 |
| 邻近治理信号 | Google 更新 Agent AI Use Guidelines | 约束高风险动作、资源支出、权限和多 Agent 监督；影响 AaaS 治理，但不是产品发布 |

## 远程 / 云端 Agent 执行

DigitalOcean 的 [生产 Agent 实测](https://www.digitalocean.com/community/tutorials/ai-customer-support-agent-human-in-the-loop) 使用 Managed Agents Harness Runtime 连续运行 1 小时 48 分钟，处理 99 个合成工单；运行环境为每会话硬件隔离的 microVM，支持 pause、resume、fork 与 checkpoints。文章同时说明默认网络出口并不受限，生产部署必须显式配置 egress allowlist；本次演示把发送回复的权限从 Agent 凭据中移除，并保留人工审批。文中披露该规格计算成本约 0.11 美元、按秒计费，但模型 token 另计。该数据是一次厂商自测，不应外推为通用可靠性或成本承诺。

[Agent Data Services](https://www.digitalocean.com/blog/introducing-agent-data-services) 于 10 月 12 日进入 private preview。它托管多模态数据流、向量索引、结构化记录、数据血缘与 SQL/API 查询，并接收 Agent session、tool call 和 execution trace；这些数据再连接 Insights、Signals、Evaluations 与 Simulations。它可与 DigitalOcean Managed Agents 集成，也可独立使用。由于 private preview 无 SLA、标准支持或常规合规认证，当前更适合验证，而非被描述为已具备稳定生产承诺。

<figure class="source-image">
  <a href="https://www.digitalocean.com/blog/introducing-agent-data-services"><img src="https://doimages.nyc3.cdn.digitaloceanspaces.com/002Blog/mysql.png" alt="DigitalOcean Agent Data Services 官方文章的数据库主题配图" loading="lazy" /></a>
  <figcaption><a href="https://www.digitalocean.com/blog/introducing-agent-data-services">图片来源：DigitalOcean 官方文章 OpenGraph 图片</a></figcaption>
</figure>

## 海外厂商

- **Cognition Devin（必查）：**已核对官方 product news、changelog、docs、定价、Enterprise、API 与集成入口，逐项检查异步会话、远程环境、并发、自动化、企业控制、价格和集成；主窗口与 24–72 小时内均无新增，不重复旧来源。
- **xAI / Grok（必查）：**已核对 Grok Bot、Cloud Agents、Grok Build、新闻和开发者文档，覆盖托管 Agent、异步任务、工具、编码/远程执行、企业和 API 能力。Bot changelog 最近仍为 10 月 7 日；普通 Grok 模型/API 变化不算 AaaS。
- **Anthropic / OpenAI：**托管 Agent、Claude Code cloud、Codex cloud 与 ChatGPT agents 本轮无新的 AaaS 发布；如后续重复引用，需注明详见 Claude / OpenAI 专题页。
- **Google / Microsoft / GitHub / AWS：**除 Google 治理规范更新外，未核实到窗口内新的托管运行、远程环境、并发或定价发布。
- **Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Amp：**未发现主窗口内新的 hosted runtime 或远程执行商业化动态。

## 中国市场（字节重点）

- **字节跳动：**Coze / 扣子、火山引擎、豆包、Trae 与 Seed 均已检查，本轮未发现可由一手来源确认的托管执行、异步任务、云环境或企业控制面新增。Trae 的本地 / IDE 更新不自动等于 AaaS。
- **阿里、腾讯、百度：**百炼、Qoder、通义、夸克、元宝、混元、腾讯云智能体、AgentBuilder 与 Comate 未见窗口内可核验的 AaaS 新发布。
- **智谱、Moonshot / Kimi、MiniMax、DeepSeek 与创业公司：**未发现一手来源确认的 24 小时托管 Agent 动态。

## Coding Harness 的 hosted / cloud 边界

Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH 已逐项检查 hosted/cloud、后台或定时任务、远程环境、多 Agent 服务、并发、企业控制与定价；本轮没有供应商托管执行生命周期的新证据。OpenCode、Aider、Continue、Roo Code 同样未发现窗口内新的远程托管执行。其本地 CLI、IDE、桌面或自托管 harness 更新属于开源专题，不因支持工具调用或多 Agent 就自动进入 AaaS。

## AaaS 与 MaaS / PaaS 边界

- **AaaS：**供应商管理 Agent 的运行环境、会话、异步队列、生命周期、并发、可观测性或企业治理。DigitalOcean Harness Runtime 与 Agent Data Services 的组合符合该定义。
- **MaaS：**模型 API 或推理路由即使支持 tool calling，若不管理 Agent 执行生命周期，仍属于模型服务。
- **PaaS：**通用 microVM、数据库、向量索引或对象存储本身不构成 AaaS；本轮 Agent Data Services 之所以相关，是因为它明确接入 Managed Agents 的 session、tool call、trace 与评测闭环。

## 日期未确认

- DigitalOcean 两篇官方原文仅标 10 月 12 日，不显示具体时刻；同源新闻稿在 09:33 EDT（21:33 上海时间）发布，交叉证明整组发布位于主窗口。为避免把新闻稿时刻错误套到每篇博客，sources 中保留日期并注明具体时刻未披露。

## 未证实传闻

本轮没有保留达到相关性门槛的单源泄露或新品传闻；社区比较、搜索摘要和路线图猜测均未写成发布事实。

## 邻近信号观察池

Google [Agent AI Use Guidelines](https://cloud.google.com/terms/agentic-ai-use-guidelines) 于 10 月 12 日修订，要求部署方管理 Agent 权限、资源消耗和高风险动作，并反对用多 Agent 通信规避人工监督。它是 AaaS 采购和治理的重要边界信号，但没有宣布新的 runtime、异步队列或托管产品，因此不列为 AaaS 产品发布。

## 趋势判断

1. **托管执行正在向闭环运营扩展。** 竞争不再只看能否启动 sandbox，而是能否把执行轨迹、上下文、评测和改进连成可治理的数据回路。
2. **权限与网络边界比提示词更关键。** DigitalOcean 的实测把“不能发送”落实为凭据范围和 egress allowlist，而非仅写进 system prompt。
3. **预览期能力必须和生产承诺分开。** private preview 无 SLA、标准支持与常规合规认证，实际采用需要额外验证。
4. **厂商实测不等于普遍基准。** 99 个合成工单和约 0.11 美元计算成本说明一种实现方式，但不能证明其他任务、模型或持续时间下表现相同。

## 来源链接

1. [DigitalOcean：Introducing Agent Data Services](https://www.digitalocean.com/blog/introducing-agent-data-services)
2. [DigitalOcean：Agents in Production, Part 1](https://www.digitalocean.com/community/tutorials/ai-customer-support-agent-human-in-the-loop)
3. [Google Cloud：Agent AI Use Guidelines](https://cloud.google.com/terms/agentic-ai-use-guidelines)

## 采集状态

- **已检查：**Cognition Devin 与 xAI / Grok 两项必查已逐维度完成；DigitalOcean、Anthropic、OpenAI、Google、Microsoft、GitHub、AWS、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Amp，以及字节、阿里、腾讯、百度、智谱、Moonshot、MiniMax、DeepSeek均已覆盖。Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的 hosted/cloud 边界已检查。
- **失败来源：**Devin 动态 changelog 改用可索引官方入口；xAI 最近 Bot 更新早于观察窗；部分中国厂商更新页缺稳定精确时间；X 无可靠公开时间戳。
- **图片尝试：**检查 DigitalOcean 两篇官方原文；页面可见插图，但未能从公开 HTML 稳定取得可直接验证的原始 OG 图片 URL，因此本页不配置图片，避免使用搜索缩略图或不明资源。
- **初始候选：**13 条；**最终保留来源：**3 条（2 条 AaaS 动态、1 条治理邻近信号）。
- **二次补搜：**否（主窗口内已有可验证来源）。

**今日扫描完成，共 3 条动态，重点：DigitalOcean 将托管 Agent 从隔离运行时延伸到数据、轨迹和评测闭环，并用生产实测强调凭据、网络出口与人工审批边界。**

---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-18T00:00:00+08:00"
updatedAt: "2026-08-18T11:07:35+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
tags:
  - "AaaS"
  - "Adjacent Signal"
  - "ADP"
  - "Agent"
  - "Agent Commerce"
  - "Agent Runtime"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloudflare"
  - "Code Hosting"
  - "Codex"
  - "Cursor"
  - "Date Unverified"
  - "Enterprise"
  - "Governance"
  - "Harness"
  - "Managed Agent"
  - "Older Context"
  - "Open Source"
  - "Pre-release"
  - "Remote Control"
  - "Replit"
  - "Rumor"
  - "Security"
  - "Tencent Cloud"
  - "Unverified"
  - "Watchlist"
---

## 今日概览

主窗口：2026-08-17 10:20 至 2026-08-18 10:20（Asia/Shanghai）；观察窗口延伸至 72 小时。按托管执行、异步任务、隔离环境、生命周期、编排、可观测性、企业接入和远程编码等维度扫描海外与中国厂商。

本轮核实到 3 条主窗口内 AaaS 相关动态：Replit 为托管应用加入黑盒渗透测试，Cumora 首次公开包含每 Agent 托管 Pod 的团队运行平台，Claude Code 更新修复多项 Remote Control 跨端会话问题。另补录一篇此前漏抓但与 AaaS 高度相关的 Cloudflare 较旧官方原文，并明确标注其已超出 72 小时窗口。

## 重点动态

1. **Replit 为托管应用加入黑盒渗透测试。** [官方文章](https://replit.com/blog/black-box-pen-tests)发布于 2026-08-18 00:52（上海时间）。Level 3 扫描会并行运行白盒与黑盒检查；黑盒扫描从应用链接出发，经浏览器和网络模拟外部攻击，确认的问题可交给 Replit Agent 修复。这把安全验证进一步并入托管 Agent 的构建、发布闭环。
2. **Cumora 公开云端与自带 Agent 双运行路径。** [GitHub 原仓库](https://github.com/yetone/cumora)创建于 2026-08-17 17:13（上海时间）。其 README 明确称 Cumora Cloud 为每个 Agent 提供独立托管 Pod，并提供工具调用循环、工作区、成本台账、团队协调、邮件和跨端客户端；也可把本机/VPS 上的 Claude Code 或 Codex 作为 Agent 大脑。这里确认的是仓库与架构公开，不等同于已验证商业规模或 SLA。
3. **Claude Code Remote Control 跨端会话可靠性更新。** [v2.1.234 官方发布页](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)显示发布时间为 2026-08-18 04:20（上海时间），修复手机/网页端文件打开、权限模式与模型同步、远端 effort 设置，以及切换账号/组织后的会话终止反馈；另有远程文件读取与权限预览安全加固。AaaS 含义是远程控制面与宿主会话状态更一致，**详见 Claude 专题页**。

<figure class="source-image">
  <a href="https://replit.com/blog/black-box-pen-tests"><img src="https://cdn.sanity.io/images/bj34pdbp/migration/e76e2cbc56e0c02edda0e7b4292229a0cafdc670-2048x1071.jpg?w=1200&amp;h=630&amp;fit=max&amp;fm=jpg" alt="Replit black-box penetration testing product illustration" loading="lazy" /></a>
  <figcaption><a href="https://replit.com/blog/black-box-pen-tests">题图来源：Replit</a></figcaption>
</figure>

## 远程 / 云端 Agent 执行

| 动态 | 执行形态 | AaaS 含义 | 证据状态 |
|---|---|---|---|
| Replit 黑盒渗透测试 | Replit 托管应用、浏览器/网络侧扫描、Agent 修复 | 安全验证成为远程构建与发布生命周期的一部分 | 官方、主窗口内 |
| Cumora Cloud | 每 Agent Kubernetes Pod、工具循环、共享工作区与成本台账 | 把 Agent 执行、协作与运维放进受管服务层 | 原仓库、主窗口内；规模未验证 |
| Claude Code Remote Control | Desktop/VS Code 宿主会话与手机、claude.ai/code 联动 | 改进远程操控、权限与状态同步 | 官方、主窗口内；详见 Claude 专题页 |
| Cloudflare @cloudflare/computer | isolate、Linux container sandbox、browser 与持久文件系统 | 以异构执行后端组成可审计的 Agent runtime | 官方、较旧原文；已超 72 小时 |

## 海外厂商

### 24–72 小时观察

- **Replit 企业治理。** [官方文章](https://replit.com/blog/new-enterprise-governance-tools)发布于 2026-08-17 07:57（上海时间），已滑出主窗口但仍在 72 小时观察窗。文章宣布 50 余类审计事件覆盖部署、身份、密钥、连接器与 Agent 活动，并可流式发送到 Datadog、Splunk、Amazon S3 或通用 HTTP；Admin API 同日进入 beta。页面在 2026-08-18 08:44 更新，但未提供版本差异，因此不把更新时间当作新的独立发布。

### 较旧观察

- **Cloudflare @cloudflare/computer（较旧原文）。** [官方文章](https://blog.cloudflare.com/cloudflare-computer/)发布于 2026-08-03 21:15（上海时间），已超出 72 小时窗口。文章介绍 early preview 阶段的开源 Agent runtime：按任务在 isolate、Linux container sandbox 或 browser 之间选择和编排执行后端，并提供跨 isolate/container 的持久文件系统；文件操作可经 Code Mode 或 bash 执行，且支持 gate、audit 与 observe。此处作为 AaaS 运行时架构信号补录，不写成今日发布。

## 中国厂商（含字节跳动重点扫描）

- **腾讯云 ADP 认证体系更新，发布日期未确认。** [腾讯云官方公告](https://cloud.tencent.com/announce/detail/2409)写明 2026-08-18 起将“智能体开发平台 AI 应用工程师认证”更名为“ADP 前沿部署工程师（FDE）认证”，并增加方案设计、全生命周期交付运维与安全合规考查。它是生态与交付能力信号，不代表 ADP 平台在本窗口发布了新运行时功能。
- **字节跳动重点扫描：** 已检查 Coze、火山引擎 AgentKit、Doubao、Trae 与 Seed 的官方/文档入口；未找到主窗口内可核实发布日期的显著 AaaS 发布。AgentKit 静态文档虽明确提供全托管运行时、沙箱、记忆、监控与评测，但本轮没有可确认的新变更，故不把既有能力写成今日发布。
- 阿里百炼/Qoder、腾讯 Hunyuan、百度 AgentBuilder/Comate、智谱、Moonshot/Kimi、MiniMax 与 DeepSeek 的扫描亦未发现主窗口内可核实的新 AaaS 发布；搜索结果中的无日期产品介绍和营销稿未升级为事实动态。

## AaaS 与 MaaS/PaaS 分类说明

- AaaS 必须包含 Agent 的托管/受管执行、异步任务、环境隔离、生命周期、编排、可观测、企业治理或远程编码工作之一。
- 仅提供模型推理 API 或模型版本的变化属于 MaaS；仅提供计算、容器、数据库或存储的变化属于 PaaS。
- 开源仓库只有在明确提供托管或受管 Agent 服务层时才进入正文；Cumora 因其 README 明示每 Agent 云端 Pod 与协调/运维能力而满足本轮门槛。

## 日期未确认

- **Cursor Origin Code Hosting。** [官方 Changelog](https://cursor.com/changelog/origin-code-hosting)标注 2026-08-17，但未给出足以判断是否落入 10:20 分界线的精确发布时间。Origin 以 early beta 向付费计划滚动开放，提供 Cursor 托管仓库、PR、代码浏览和 GitHub 双向同步，并让 Agent 在仓库中回答问题、改代码、更新 PR 或推送分支。它是强 AaaS 候选，但本轮不计入 24 小时已验证条目。
- 腾讯云 ADP 认证公告同样未展示发布日期；正文只陈述公告中可核实的 8 月 18 日生效信息，不推断发布时刻。

## 未证实传闻

- **AgentHub/agent commerce（单一来源）。** [Reddit 原帖](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)由自称相关方的账号称正在测试 Agent 身份/支付验证，并转述 MoltBook Agent 上月交易额的说法；发帖者本人明确表示无法确认。缺少官方公告、支付方或第二来源，本页不将产品规模、交易额或 beta 状态写成事实。

## 邻近信号观察池

- **Codex CLI 预发布。** [0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)于 2026-08-18 03:27（上海时间）发布，但页面只有版本号、没有功能说明，也没有证据表明 Codex cloud/remote 服务层发生变化，故仅作为邻近信号；**详见 OpenAI 专题页**。
- **Harness Autonomous Worker Agents 活动。** [官方活动页](https://www.harness.io/events/autonomous-worker-agents-live)列出的直播时间折算为 2026-08-19 01:00（上海时间），晚于本轮截止。页面介绍把 Agent 作为继承 OPA、RBAC 与审计轨迹的受管流水线步骤，并提到 Agent Marketplace；这是即将进行的演示/生态信号，不是本轮已发生的产品发布。

## 趋势

- **受管执行的竞争点向治理与安全下沉。** Replit 同时补充运行中应用的黑盒验证与企业 Agent 活动审计，关注点已从“能运行”扩展到“可验证、可追溯”。
- **Agent runtime 正在走向异构执行与持久状态。** Cloudflare 把 isolate、container sandbox、browser 与持久文件系统置于同一运行时抽象下，说明 AaaS 的运行层不再等同于单一容器。该信号来自较旧官方原文，不代表本窗口的新发布。
- **代码托管与 Agent 执行正在靠拢。** Cursor Origin 与 Cumora 分别从代码协作面和团队协作面把仓库、PR、工作区、Agent 执行放到同一受管控制面；前者发布时间仍需确认。
- 样本仍小，且包含早期仓库和候选项，不据此推断市场份额、收入或成熟度。

## 来源链接

1. [Replit：Black-box pen tests on Replit](https://replit.com/blog/black-box-pen-tests)
2. [Cumora GitHub 仓库](https://github.com/yetone/cumora)
3. [Anthropic：Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)
4. [Replit：Govern Replit at scale](https://replit.com/blog/new-enterprise-governance-tools)
5. [Cloudflare：introducing @cloudflare/computer](https://blog.cloudflare.com/cloudflare-computer/)
6. [Cursor：Origin Code Hosting](https://cursor.com/changelog/origin-code-hosting)
7. [腾讯云 ADP 认证升级公告](https://cloud.tencent.com/announce/detail/2409)
8. [Reddit：AgentHub/agent commerce 单源说法](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)
9. [OpenAI Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
10. [Harness：Autonomous Worker Agents 活动](https://www.harness.io/events/autonomous-worker-agents-live)

## 采集状态

- 已检查来源：Anthropic/OpenAI/GitHub/Google/Microsoft/AWS 官方入口，Cloudflare Blog 的 Agents/Sandboxes/Computer/Workers，Replit、Cursor、Factory、Sourcegraph、LangChain、Harness，GitHub 主窗口新仓库，Reddit，以及字节、阿里、腾讯、百度、智谱、Moonshot/Kimi、MiniMax、DeepSeek 等中国厂商入口。
- 失败来源：Cognition/Devin Blog 直访返回 HTTP 403；X 未登录无法稳定读取完整时间线；部分中国厂商页面缺少可核实发布日期。
- 初始候选：13 条；保留：10 条（3 条主窗口已验证、1 条 24–72 小时、1 条较旧官方原文、2 条日期未确认/生态、1 条未证实传闻、2 条邻近/未来信号）。
- 二次补搜：未运行（最终 sources 非 0，`secondPass=false`）。

今日扫描完成，共 10 条动态，重点：Replit 将渗透测试和企业审计纳入托管 Agent 生命周期，Cumora 展示每 Agent 托管 Pod 架构，Claude Code 加固 Remote Control 跨端状态一致性；另补录 Cloudflare 的异构 Agent runtime 较旧原文。

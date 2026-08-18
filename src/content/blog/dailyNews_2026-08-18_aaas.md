---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-18T00:00:00+08:00"
updatedAt: "2026-08-18T16:26:47+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Black-box pen tests on Replit"
featuredUrl: "https://replit.com/blog/black-box-pen-tests"
featuredSummary: "Replit 为托管应用加入并行白盒/黑盒渗透测试，确认的问题可交由 Replit Agent 修复。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-18 00:52 +08:00"
featuredTags: ["Replit","Security","Managed Agent"]
featuredImage: "https://cdn.sanity.io/images/bj34pdbp/migration/e76e2cbc56e0c02edda0e7b4292229a0cafdc670-2048x1071.jpg?w=1200&h=630&fit=max&fm=jpg"
featuredImageAlt: "Replit black-box penetration testing product illustration"
featuredImageCaption: "题图来源：Replit"
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
  - "Collaboration"
  - "Control Plane"
  - "Cursor"
  - "Date Unverified"
  - "Development Signal"
  - "Enterprise"
  - "Governance"
  - "Guardian"
  - "Harness"
  - "Lifecycle"
  - "Managed Agent"
  - "Marketplace"
  - "Older Context"
  - "Open Source"
  - "Pre-release"
  - "Remote Agent"
  - "Remote Control"
  - "Replit"
  - "Rumor"
  - "Security"
  - "Session Resume"
  - "Tencent Cloud"
  - "Unverified"
  - "Watchlist"
---

## 今日概览

主窗口：2026-08-17 16:26 至 2026-08-18 16:26（Asia/Shanghai）；观察窗口向前延伸至 72 小时。按托管执行、异步任务、隔离环境、生命周期、编排、可观测性、企业接入和远程编码等维度扫描海外与中国厂商。

本轮保留 4 条主窗口内已核实的 AaaS 相关动态：Replit 黑盒渗透测试、Cumora 每 Agent 托管 Pod 架构、Claude Code Remote Control 修复，以及新公开的 pi-wake 远程容器监测与离线同会话唤醒扩展。OpenAI Codex 另出现 5 个与权限、风险审查、会话指令和 Marketplace 身份治理有关的官方主分支 commits；本页将它们按 4 组控制面/邻近信号收录，并明确标为尚非产品发布。Cloudflare Agents 官方 changelog 本轮未出现新的 24/72 小时条目。

## 重点动态

1. **Replit 为托管应用加入黑盒渗透测试。** [官方文章](https://replit.com/blog/black-box-pen-tests)发布于 2026-08-18 00:52（上海时间）。Level 3 扫描会并行运行白盒与黑盒检查；黑盒扫描从应用链接出发，经浏览器和网络模拟外部攻击，确认的问题可交给 Replit Agent 修复。这把安全验证进一步并入托管 Agent 的构建、发布闭环。
2. **Cumora 公开云端与自带 Agent 双运行路径。** [GitHub 原仓库](https://github.com/yetone/cumora)创建于 2026-08-17 17:13（上海时间）。其 README 明确称 Cumora Cloud 为每个 Agent 提供独立托管 Pod，并提供工具调用循环、工作区、成本台账、团队协调、邮件和跨端客户端；也可把本机/VPS 上的 Claude Code 或 Codex 作为 Agent 大脑。这里确认的是仓库与架构公开，不等同于已验证商业规模或 SLA。
3. **Claude Code Remote Control 跨端会话可靠性更新。** [v2.1.234 官方发布页](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)显示发布时间为 2026-08-18 04:20（上海时间），修复手机/网页端文件打开、权限模式与模型同步、远端 effort 设置，以及切换账号/组织后的会话终止反馈；另有远程文件读取与权限预览安全加固。AaaS 含义是远程控制面与宿主会话状态更一致，**详见 Claude 专题页**。
4. **pi-wake 公开远程容器事件与离线同会话唤醒扩展。** [GitHub 原仓库](https://github.com/Jasperxjy/pi-wake)创建于 2026-08-18 13:13（上海时间）。README 描述以 SSH 只读监测远程 Docker 容器退出、异常、日志匹配和连接失败；会话离线时由 daemon 以原 session headless resume，并通过持久 outbox、claim 与 CAS 提供至少一次交付和多进程协调。它符合远程异步执行与生命周期编排边界，但刚公开、当前 0 star，且需用户自行运行 daemon，不代表已验证的托管服务、规模或 SLA。

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
| pi-wake | SSH 远程容器 watcher、持久 outbox、离线同 session headless resume | 为长任务等待、故障唤醒和多阶段异步流程提供轻量生命周期层 | 原仓库、主窗口内；非托管服务、成熟度未验证 |
| Cloudflare @cloudflare/computer | isolate、Linux container sandbox、browser 与持久文件系统 | 以异构执行后端组成可审计的 Agent runtime | 官方、较旧原文；已超 72 小时 |

### OpenAI 控制面开发信号（尚非产品发布）

- **权限画像跨 turn 与冷恢复持久化。** [保存 turn 上下文的 commit](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)于 2026-08-18 13:31（上海时间）进入主分支；[冷恢复/fork 恢复 commit](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)于 14:10 继续补齐 approval policy、reviewer 与 permission profile，并让显式覆盖优先。它直接涉及会话恢复后的控制面状态一致性，但证据仅是官方仓库主分支 commits，没有 release、cloud rollout 或用户可用性说明，**尚非产品发布，详见 OpenAI 专题页**。
- **Guardian strict review 通知。** [官方 commit](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)于 2026-08-18 14:38（上海时间）为实验性 app-server 加入 strictReviewRequired 通知：Guardian v2 因风险升高或结果过期而把审批保留在严格审查时，客户端可获得结构化状态。这是受管执行审批编排的官方开发信号；没有 release 或启用范围说明，**尚非产品发布，详见 OpenAI 专题页**。

## 海外厂商

### 24–72 小时观察

- **Replit 企业治理。** [官方文章](https://replit.com/blog/new-enterprise-governance-tools)发布于 2026-08-17 07:57（上海时间），已滑出主窗口但仍在 72 小时观察窗。文章宣布 50 余类审计事件覆盖部署、身份、密钥、连接器与 Agent 活动，并可流式发送到 Datadog、Splunk、Amazon S3 或通用 HTTP；Admin API 同日进入 beta。页面在 2026-08-18 08:44 更新，但未提供版本差异，因此不把更新时间当作新的独立发布。

### 较旧观察

- **Cloudflare @cloudflare/computer（较旧原文）。** [官方文章](https://blog.cloudflare.com/cloudflare-computer/)发布于 2026-08-03 21:15（上海时间），已超出 72 小时窗口。文章介绍 early preview 阶段的开源 Agent runtime：按任务在 isolate、Linux container sandbox 或 browser 之间选择和编排执行后端，并提供跨 isolate/container 的持久文件系统；文件操作可经 Code Mode 或 bash 执行，且支持 gate、audit 与 observe。此处作为 AaaS 运行时架构信号补录，不写成今日发布。Cloudflare Agents 官方 changelog 本轮最新条目仍早于观察窗，没有新增发布可写入正文。

## 中国厂商（含字节跳动重点扫描）

- **腾讯云 ADP 认证体系更新，发布日期未确认。** [腾讯云官方公告](https://cloud.tencent.com/announce/detail/2409)写明 2026-08-18 起将“智能体开发平台 AI 应用工程师认证”更名为“ADP 前沿部署工程师（FDE）认证”，并增加方案设计、全生命周期交付运维与安全合规考查。它是生态与交付能力信号，不代表 ADP 平台在本窗口发布了新运行时功能。
- **字节跳动重点扫描：** 已检查 Coze、火山引擎 AgentKit、Doubao、Trae 与 Seed 的官方/文档入口；未找到主窗口内可核实发布日期的显著 AaaS 发布。AgentKit 静态文档虽明确提供全托管运行时、沙箱、记忆、监控与评测，但本轮没有可确认的新变更，故不把既有能力写成今日发布。
- 阿里百炼/Qoder、腾讯 Hunyuan、百度 AgentBuilder/Comate、智谱、Moonshot/Kimi、MiniMax 与 DeepSeek 的扫描亦未发现主窗口内可核实的新 AaaS 发布；搜索结果中的无日期产品介绍和营销稿未升级为事实动态。

## AaaS 与 MaaS/PaaS 分类说明

- AaaS 必须包含 Agent 的托管/受管执行、异步任务、环境隔离、生命周期、编排、可观测、企业治理或远程编码工作之一。
- 仅提供模型推理 API 或模型版本的变化属于 MaaS；仅提供计算、容器、数据库或存储的变化属于 PaaS。
- 开源仓库只有在明确提供托管或受管 Agent 服务层，或可核实的远程异步生命周期层时才进入正文；Cumora 因明示每 Agent 云端 Pod，pi-wake 因远程容器 watcher、持久交付与 headless resume 满足本轮门槛。两者都不能据此视为成熟商业托管服务。

## 日期未确认

- **Cursor Origin Code Hosting。** [官方 Changelog](https://cursor.com/changelog/origin-code-hosting)标注 2026-08-17，但未给出足以判断是否落入 16:26 分界线的精确发布时间。Origin 以 early beta 向付费计划滚动开放，提供 Cursor 托管仓库、PR、代码浏览和 GitHub 双向同步，并让 Agent 在仓库中回答问题、改代码、更新 PR 或推送分支。它是强 AaaS 候选，但本轮不计入 24 小时已验证条目。
- 腾讯云 ADP 认证公告同样未展示发布日期；正文只陈述公告中可核实的 8 月 18 日生效信息，不推断发布时刻。

## 未证实传闻

- **AgentHub/agent commerce（单一来源，来源数：1）。** [Reddit 原帖](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)由自称相关方的账号称正在测试 Agent 身份/支付验证，并转述 MoltBook Agent 上月交易额的说法；发帖者本人明确表示无法确认。缺少官方公告、支付方或第二来源，本页不将产品规模、交易额或 beta 状态写成事实。

## 邻近信号观察池

- **Codex CLI 预发布。** [0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)于 2026-08-18 03:27（上海时间）发布，但页面只有版本号、没有功能说明，也没有证据表明 Codex cloud/remote 服务层发生变化，故仅作为邻近信号；**详见 OpenAI 专题页**。
- **协作说明随内容变化刷新。** [OpenAI 官方 commit](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)于 2026-08-18 15:20（上海时间）在 retained history 中按内容哈希刷新 collaboration instructions，并清理过期指引。它可能改善长会话/保留历史的控制状态，但没有 hosted/remote rollout 或 release 证据，故仅列邻近信号，**尚非产品发布，详见 OpenAI 专题页**。
- **Marketplace 身份防仿冒。** [OpenAI 官方 commit](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)于 2026-08-18 15:51（上海时间）阻止非托管 marketplace 名称仿冒 managed/remote marketplace 身份，并检查路径/符号链接来源。这与远程插件供应链治理邻近，但仍是主分支实现信号，没有发布与启用范围，**尚非产品发布，详见 OpenAI 专题页**。
- **Harness Autonomous Worker Agents 活动。** [官方活动页](https://www.harness.io/events/autonomous-worker-agents-live)列出的直播时间折算为 2026-08-19 01:00（上海时间），晚于本轮截止。页面介绍把 Agent 作为继承 OPA、RBAC 与审计轨迹的受管流水线步骤，并提到 Agent Marketplace；这是即将进行的演示/生态信号，不是本轮已发生的产品发布。

## 趋势

- **受管执行的竞争点向治理与安全下沉。** Replit 的黑盒验证与企业审计、Codex 的权限画像恢复和 Guardian strict review 都指向可验证、可追溯的控制面；其中 Codex 证据仍只是主分支 commits。
- **长任务编排开始强调事件唤醒与持久交付。** pi-wake 把远程容器状态、离线 session 恢复和 durable outbox 组合起来，显示轻量远程编码栈也在补齐异步生命周期；它仍是刚公开的自托管扩展。
- **Agent runtime 正在走向异构执行与持久状态。** Cloudflare 把 isolate、container sandbox、browser 与持久文件系统置于同一运行时抽象下，说明 AaaS 的运行层不再等同于单一容器。该信号来自较旧官方原文，不代表本窗口的新发布。
- **代码托管与 Agent 执行正在靠拢。** Cursor Origin 与 Cumora 分别从代码协作面和团队协作面把仓库、PR、工作区、Agent 执行放到同一受管控制面；前者发布时间仍需确认。
- 样本仍小，且包含早期仓库、主分支开发信号和候选项，不据此推断市场份额、收入或成熟度。

## 来源链接

1. [Replit：Black-box pen tests on Replit](https://replit.com/blog/black-box-pen-tests)
2. [Cumora GitHub 仓库](https://github.com/yetone/cumora)
3. [Anthropic：Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)
4. [pi-wake GitHub 仓库](https://github.com/Jasperxjy/pi-wake)
5. [OpenAI Codex：persist active permission profiles](https://github.com/openai/codex/commit/230791fd1f255b9bd5ca5228326239db980f08dd)
6. [OpenAI Codex：restore permission profiles on resume/fork](https://github.com/openai/codex/commit/539a09cb28ca1ded4278c6d54716abbacab42428)
7. [OpenAI Codex：Guardian strict review notification](https://github.com/openai/codex/commit/f5e9d66851a20311b8385204686990c6c5960014)
8. [Replit：Govern Replit at scale](https://replit.com/blog/new-enterprise-governance-tools)
9. [Cloudflare：introducing @cloudflare/computer](https://blog.cloudflare.com/cloudflare-computer/)
10. [Cursor：Origin Code Hosting](https://cursor.com/changelog/origin-code-hosting)
11. [腾讯云 ADP 认证升级公告](https://cloud.tencent.com/announce/detail/2409)
12. [Reddit：AgentHub/agent commerce 单源说法](https://www.reddit.com/r/AI_Agents/comments/1vqe85r/agenttoagent_to_hit_15b_by_2030/)
13. [OpenAI Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
14. [OpenAI Codex：refresh collaboration instructions](https://github.com/openai/codex/commit/e2eea071405a4d312ca9eabeed91b7e7cb9685c3)
15. [OpenAI Codex：prevent Marketplace identity spoofing](https://github.com/openai/codex/commit/0acf302db5ffedea4b8ef0112f4cbcddd65cff57)
16. [Harness：Autonomous Worker Agents 活动](https://www.harness.io/events/autonomous-worker-agents-live)

## 采集状态

- 已检查来源：Anthropic/OpenAI/GitHub/Google/Jules/Microsoft/AWS 官方入口，Cloudflare Agents changelog 与 Blog，Replit、Cursor、Devin、Factory、Sourcegraph、LangChain、CrewAI/Lindy、Harness，GitHub 主窗口新仓库，Reddit，以及字节、阿里、腾讯、百度、智谱、Moonshot/Kimi、MiniMax、DeepSeek 等中国厂商入口。
- 失败来源：Cognition/Devin Blog 直访返回 HTTP 403，改查文档与搜索摘要后未发现窗口内可核实发布；X 未登录无法稳定读取完整时间线；部分中国厂商页面缺少可核实发布日期；GitHub 新建仓库搜索初轮曾触发 secondary rate limit，16:26 改用 API 与仓库原页重试成功。
- 初始候选：23 条；保留：16 个来源、15 条动态（4 条主窗口已验证、1 条 24–72 小时、1 条较旧官方原文、2 条日期未确认/生态、1 条未证实传闻、6 条主分支开发/邻近/未来信号）。
- 二次补搜：未运行（最终 sources 非 0，secondPass=false）。

今日扫描完成，共 15 条动态，重点：Replit 将渗透测试纳入托管 Agent 生命周期，pi-wake 展示远程事件唤醒与持久交付，OpenAI Codex 的权限恢复和严格审查 commits 显示控制面治理继续下沉但尚非发布；Cloudflare Agents 本轮无新官方条目。

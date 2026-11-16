---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-16T00:00:00+08:00"
updatedAt: "2026-11-16T10:49:40+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Introducing Devin Apps"
featuredUrl: "https://devin.ai/blog/devin-apps"
featuredSummary: "Devin Apps 让 Devin 在其云端计算机上构建和托管私有应用，提供稳定 URL、访问控制、休眠唤醒、版本与按机器唤醒时间计费。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-13 22:53 +08:00"
featuredTags: ["近三日补充","Devin","Hosted Agent","Cloud Environment"]
featuredImage: "https://devin.ai/images/blog/devin-apps/cover.png"
featuredImageAlt: "Devin Apps 官方发布页封面图，展示由 Devin 构建和托管私有应用的产品能力"
featuredImageCaption: "图片来源：Devin 官方博客"
tags:
  - "观察池"
  - "近三日补充"
  - "略超72小时"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Cloud Environment"
  - "Concurrency"
  - "Devin"
  - "Enterprise"
  - "Hosted Agent"
  - "Managed Agent"
---

## 今日概览

采集窗口：**2026-11-15 10:46 至 2026-11-16 10:46（Asia/Shanghai）**。过去 24 小时没有发现可由官方原文核实的新 AaaS 发布。近三日最值得跟踪的补充是 Cognition 的 Devin Apps：它把 Agent 的云端机器从任务执行环境延伸为私有应用托管面；略早的 Teams 方案更新则给出了并发免费会话、SSO 和分组用量控制等企业商业化信号。

## 重点动态

### 过去 24 小时

本轮未发现经官方日期确认、且满足“托管或管理 Agent 执行生命周期”定义的新发布。模型 API、普通本地 coding harness 更新和通用云基础设施不计入 AaaS 正文。

### 近三日补充：Devin Apps 把 Agent 云端机器变成私有应用运行面

Cognition 在 [Devin Apps 官方公告](https://devin.ai/blog/devin-apps) 中介绍了由 Devin 构建并直接运行在其云端计算机上的私有 Web 应用。应用拥有稳定 URL、必须登录 Devin、可按个人/组织/企业共享，并能使用团队既有 MCP、集成与代码库；机器闲置时休眠、访问时唤醒，费用按机器唤醒时间计算。官方同时明确单个应用运行在一台机器上，定位是内部工具、仪表盘和预览部署，而非高流量生产服务。

<figure class="source-image">
  <a href="https://devin.ai/blog/devin-apps"><img src="https://devin.ai/images/blog/devin-apps/cover.png" alt="Devin Apps 官方发布页封面图，展示由 Devin 构建和托管私有应用的产品能力" loading="lazy" /></a>
  <figcaption><a href="https://devin.ai/blog/devin-apps">图片来源：Devin 官方博客</a></figcaption>
</figure>

这条更新符合 AaaS 定义：服务商不仅提供模型，而是托管 Agent 所在的远程环境、应用运行生命周期、访问控制和计费。其限制同样重要——官方尚未给出公开单价、容量、可用性承诺或灾备细节。

## 远程 / 云端 Agent 执行

| 平台 | 本轮状态 | AaaS 证据 |
|---|---|---|
| Cognition Devin | 近三日有更新 | Devin Apps 运行在 Devin 云端机器，具备休眠/唤醒、版本、稳定 URL、组织级访问与按唤醒时间计费 |
| xAI / Grok | 无新增 | 已检查 Grok Bot、Grok Build、官方 news/changelog 与 API 文档；未发现本窗口内新的托管 Agent、异步任务或远程执行发布 |
| Anthropic / Claude | 无新增 | 已检查 managed/hosted Agent 相关入口；无新 AaaS 事件，详见 Claude 专题页 |
| OpenAI / Codex | 无新增 | 已检查 remote/cloud Agent 与 agent-building 入口；无新 AaaS 事件，详见 OpenAI 专题页 |
| Google / Microsoft / AWS / GitHub | 无新增 | 官方 Agent 服务与远程 coding agent 入口未见窗口内新发布 |
| Cursor / Replit / Factory / Amp / Cloudflare | 无新增 | 已检查云端 Agent、环境、自动化和沙箱入口；没有满足时间窗口的新事件 |

## 海外厂商

Devin Apps 显示 AaaS 的产品边界正在从“代办一个任务”扩展到“由 Agent 生成并持续托管一个内部工作界面”。这使身份、共享范围、机器生命周期与用量计费成为产品本体，而不只是底层基础设施。

## 中国市场

本轮已检查字节系 Coze/火山/豆包/Trae/Seed、阿里百炼/Qoder/通义/夸克、腾讯元宝/混元云、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek 的公开入口，未发现可在过去 24 小时内核实且满足 AaaS 定义的新发布。普通模型、IDE 或本地 harness 更新未误收为托管服务。

## 日期未确认

没有保留日期无法确认、但足以支持产品结论的候选。对缺少公开发布时间的营销页，本轮只记入已检查来源，不写成新事实。

## 观察池

- **略超 72 小时 / 官方来源**：[Devin 新 Teams 方案](https://devin.ai/blog/devins-new-teams-plan) 于 2026-11-12 发布，提供每位用户两条并发 Free 会话、全员 Devin Desktop、SSO、按用户或分组的用量限制以及标准 BAA 申请入口。它反映 Devin 的并发与企业控制面在加强，但已略超本轮 72 小时补充边界，因此不列为当日重点。
- **Grok 强制检查 / 无新增**：Grok Bot 的持久 Agent、云端计算机与后台工作能力属于既有背景；本轮没有新的官方日期事件，因此不为证明检查而重复旧来源。
- **Coding harness 边界**：Cline、Pi/pi-mono、DeepSeek Harness/DSH、OpenCode、Aider、Continue 与 Roo Code 本轮未出现新的厂商托管、后台/定时任务、远程环境、企业控制面或托管定价证据；本地 CLI/IDE 更新应归入开源专题。

## 未证实传闻

本轮未保留达到最低相关性的一手泄露或单源传闻，也没有将社区推测表述为产品发布。

## AaaS 与 MaaS / PaaS 边界

- **AaaS**：服务商管理 Agent 的任务、机器/沙箱、生命周期、身份、并发、观察与企业控制面；Devin Apps 属于这一类。
- **MaaS**：只提供模型推理 API，即使支持异步或批处理，也不自动等于托管 Agent。
- **PaaS**：只提供通用计算、容器或函数；若没有 Agent 生命周期与控制面证据，本页仅视为邻近基础设施。

## 邻近信号观察池

本轮未发现需要单独保留的窗口内 MaaS/PaaS 信号。xAI API 的异步客户端与 Batch API 属于模型请求层能力，未作为 Grok AaaS 新事件。

## 趋势判断

Devin Apps 的意义不在新增一个模型，而在把远程 Agent 环境、应用托管、访问控制和计费合并成同一产品面；同时，单机与内部工具定位说明当前能力仍更适合轻量企业工作流，而非通用生产托管。

## 来源链接

- [Devin Apps 官方公告](https://devin.ai/blog/devin-apps)
- [Devin 新 Teams 方案](https://devin.ai/blog/devins-new-teams-plan)

## 采集状态

- 已检查来源：Devin 官方首页/博客/文档、xAI News 与 Grok Bot/Grok Build/API 文档，以及海外与中国主要托管 Agent 平台；Devin 与 Grok 均已按强制维度逐项检查。
- 失败来源：部分页面依赖脚本或登录态；X 原帖访问不稳定；若中文厂商页面缺少可核验日期，则未将其写成新事实。
- 初始候选：14 条；最终保留：2 条来源（1 条近三日补充、1 条略超 72 小时观察）。
- 二次补搜：否；最终来源不为 0。

今日扫描完成，共 2 条动态，重点：Devin Apps 将云端 Agent 的执行环境延伸到私有应用托管，Teams 方案则补强并发与企业控制面。

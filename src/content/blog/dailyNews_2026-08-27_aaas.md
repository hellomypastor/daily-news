---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-27T00:00:00+08:00"
updatedAt: "2026-08-27T01:04:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Glean Agents can now work independently, build faster, and stay governed at scale"
featuredUrl: "https://www.glean.com/blog/glean-agents-go-2026"
featuredSummary: "Glean 为独立 Agent 增加主动工作流、独立身份、Git 同步、A2A、评测和治理策略。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-26"
featuredTags: ["Managed Agent","Governance","Enterprise"]
featuredImage: "https://cdn.prod.website-files.com/613513981b0efaf850830620/6a8ecd5c847f851871aa6214_agents-banner.webp"
featuredImageAlt: "Glean Agents 企业智能体产品发布横幅"
featuredImageCaption: "图片来源：Glean 官方博客"
tags:
  - "观察池"
  - "邻近信号"
  - "AaaS"
  - "Agent"
  - "Agent Security"
  - "Cloud Agent"
  - "DSH"
  - "Enterprise"
  - "Enterprise Agent"
  - "Google Cloud"
  - "Governance"
  - "Managed Agent"
  - "Third-party"
---

## 今日概览

采集主窗口为 **2026-08-26 01:04 至 2026-08-27 01:04（Asia/Shanghai）**，24–72 小时观察窗回溯至 **2026-08-24 01:04**。本轮确认 2 条主窗口内动态：Glean 为企业独立 Agent 增加身份、主动执行、评测与治理控制；独立第三方项目 DSH Cloud 发布 0.2.4，继续完善托管工作台与自部署交付。另有 1 条 Google 行业 Agent 平台动态进入观察池，1 条 Agent 执行安全能力作为邻近信号保留。

## 重点动态

### Glean 推进独立 Agent、Agent 身份与上线治理

Glean 在 [官方发布](https://www.glean.com/blog/glean-agents-go-2026) 中宣布，Independent Agents 可在无需逐次提示的情况下主动承担工作流，并以独立身份和受限凭据访问十余种连接工具；Agent identity 进入公开测试。平台还加入 Git 同步、版本检查点、协同编辑和 A2A 互操作，内置评测与发布扫描分别处于私测和测试阶段。其价值不只是模型能力，而是覆盖身份、运行、评测、审批和策略的托管控制面，符合 AaaS 边界。

<figure class="source-image">
  <a href="https://www.glean.com/blog/glean-agents-go-2026"><img src="https://cdn.prod.website-files.com/613513981b0efaf850830620/6a8ecd5c847f851871aa6214_agents-banner.webp" alt="Glean Agents 企业智能体产品发布横幅" loading="lazy" /></a>
  <figcaption><a href="https://www.glean.com/blog/glean-agents-go-2026">图片来源：Glean 官方博客</a></figcaption>
</figure>

### 第三方 DSH Cloud 0.2.4 完善托管工作台交付

独立项目 DSH Cloud 在 [0.2.4 发布提交](https://github.com/AgentsDanceAI/deepseek-harness-cloud/commit/91bf0bace2505f603c53937909745373f9e0fae3) 中将试用安装收敛为一条无需交互的启动命令，并让下载与云工作台指向托管服务；自部署模式仍保留独立配置。该项目同时提供账号、团队、用量与并发门控、监控、备份及可选浏览器 Agent workspace，满足托管执行生命周期边界。**证据限制：这是独立第三方项目，不隶属 DeepSeek，也不代表 DeepSeek 官方推出云服务。**

## 远程 / 云端 Agent 执行

本轮新增的两条确认动态分别覆盖企业工作流托管与编码 Agent 工作台托管。Glean 强调主动执行、独立身份、连接器和发布治理；DSH Cloud 强调账号、工作区、升级、监控与备份。二者共同显示 AaaS 竞争继续从“能运行 Agent”向身份、审计、版本、策略与运维责任扩展。

Cline、Pi Coding Agent 与 DeepSeek 官方 DSH 均完成显式边界检查：Cline 本轮代码更新仍集中于本地 SDK、CLI、桌面与 Hub 事件；Pi 更新仍属本地 TUI / coding-agent；DeepSeek 官方 DSH 仓库仍描述为本地启动的开源 harness。未发现供应商承担远程环境、后台任务、并发控制、企业控制面或托管计费的新增证据，因此不将这些本地更新写成 AaaS。

## 海外厂商

- **Cognition Devin：**已检查官方产品新闻、文档、Changelog、环境、并发、定价、企业接入与集成入口；本轮未找到可核验新增，不重复较旧背景来源。
- **xAI / Grok：**已检查官方 News 与文档中的托管 Agent、异步任务、工具调用、编码和远程执行；本轮窗口内无新增。普通 Grok 模型/API 动态不满足 AaaS 边界，未收录；相关模型动态应见行业专题页。
- **Google：**24–72 小时观察窗内出现面向法律行业的托管 Agent 平台预览，见下方观察池。
- **Microsoft、AWS、GitHub、Cloudflare、Replit、Cursor、Lindy、CrewAI、LangGraph、Factory、Sourcegraph/Amp：**已扫描官方更新入口，本轮未发现可核验且落入窗口的新增 AaaS 事件。

## 中国市场（ByteDance 重点）

- **ByteDance / 火山引擎 / 扣子 / 豆包 / Trae / Seed：**已检查方舟、扣子与相关产品文档及公告；聚合页无法为候选提供本轮可核验单项发布时间，无确认新增。
- **阿里云百炼 / Qoder / 通义 / 夸克：**官方入口未发现本轮符合托管执行边界的新增。
- **腾讯云：**检索到智能体平台模型迁移公告，但页面发布时间无法核验，且打开工具失败，本轮不将其写成事实条目。
- **百度、智谱、Kimi、MiniMax、DeepSeek 与可信创业公司：**未发现本轮可核验新增。独立第三方 DSH Cloud 已在重点动态中明确披露其非官方身份。

## AaaS 与 MaaS / PaaS 边界

本页只把供应商托管或管理 Agent 执行、身份、环境、生命周期、并发、治理或远程任务的证据列为 AaaS。仅提供模型 API 属于 MaaS；仅提供通用算力、沙箱或连接层属于 PaaS / 邻近基础设施。Cline、Pi、OpenCode、Aider、Continue、Roo Code 与官方 DSH 的本地 CLI、IDE 或自托管 harness 更新不因“可远程访问”自动成为 AaaS。

## 日期未确认

本轮没有保留可独立成条、但仅缺日期的候选。腾讯云公告因页面访问失败且时间不可核验，仅记录在失败来源，不推断发布日期。

## 观察池（24–72 小时）

Google Cloud 于 8 月 25 日发布 [Gemini Enterprise for Legal](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-for-legal)，在预览阶段提供法律行业 skills、MCP 连接、预置 Agent 与统一治理控制面，并强调权限继承、私有数据隔离和可追溯引用。它符合企业托管 Agent 平台定义，但落在 24–72 小时观察窗，暂不列为主窗口新品。

## 未证实传闻

本轮未发现值得保留的一手泄露或多源传闻；未以社交平台单帖推断产品发布。

## 邻近信号观察池

Check Point 于 8 月 26 日发布 [上下文式 Agent 行为防护](https://blog.checkpoint.com/ai-security/stopping-the-ai-agent-actions-no-rule-could-see-coming/)，宣称其系统会结合用户意图、历史工具动作和策略，在执行前拦截越权或有害操作，并正逐步向 AI Security 客户推出。它为托管 Agent 的执行治理提供重要安全组件，但并不托管 Agent 生命周期，因此作为 AaaS 邻近安全信号而非平台发布。

## 趋势判断

1. **身份成为控制面入口：**独立 Agent 需要可撤销、最小权限且可审计的机器身份。
2. **发布治理前移：**内置评测、定义扫描、版本回滚和审批门槛开始成为平台标配。
3. **托管边界必须披露清楚：**第三方围绕开源 harness 提供云服务时，应明确运营主体、隔离责任及与上游项目的关系。
4. **执行安全成为邻近关键层：**只检测单次提示或工具调用不足以覆盖长链路 Agent，跨步骤上下文策略正在进入生产。

## 来源链接

- [Glean Agents can now work independently, build faster, and stay governed at scale](https://www.glean.com/blog/glean-agents-go-2026)
- [DSH Cloud 0.2.4 发布提交](https://github.com/AgentsDanceAI/deepseek-harness-cloud/commit/91bf0bace2505f603c53937909745373f9e0fae3)
- [Now introducing Gemini Enterprise for Legal](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-for-legal)
- [Stopping the AI Agent Actions No Rule Could See Coming](https://blog.checkpoint.com/ai-security/stopping-the-ai-agent-actions-no-rule-could-see-coming/)

## 采集状态

- 已检查：Glean、Google Cloud、Microsoft、AWS、GitHub、Cloudflare、Cognition Devin、xAI/Grok、Cline、Pi、DeepSeek Harness / DSH、OpenCode、Aider、Continue、Roo Code，以及火山引擎、阿里云、腾讯云、百度等官方入口。
- 失败来源：Cognition 未检出窗口内可核验官方更新；腾讯云候选公告打开失败且日期不可核验；部分火山引擎聚合页无法定位单项时间；xAI 聚合页无窗口内 AaaS 新条目。
- 初始候选：12 条；最终保留：4 条；第二轮补搜：否（最终来源非 0）。

今日扫描完成，共 4 条动态，重点：Glean 将独立身份、主动工作流、评测与治理整合进托管 Agent 平台；第三方 DSH Cloud 继续完善托管工作台交付，同时需严格区分其与 DeepSeek 官方的关系。

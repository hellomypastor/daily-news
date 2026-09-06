---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-06T00:00:00+08:00"
updatedAt: "2026-09-06T09:23:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "二手来源"
  - "观察池"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Devin"
  - "Enterprise"
  - "Grok Bot"
  - "Managed Agent"
  - "Persistent Agent"
---

## 今日概览

采集窗口：**2026-09-05 09:23 至 2026-09-06 09:23（Asia/Shanghai）**。严格核验后，窗口内没有可确认的新 AaaS 发布；因此已按规范完成第二轮扩展搜索。24–72 小时观察窗内最清晰的信号来自 SpaceXAI：Grok Bot 展示采购流程中的持续执行案例，并发布持久 Agent 的产品设计与企业治理材料。Cognition Devin 有 9 月 5 日的 Continuity 候选，但原始 changelog 未能直达，仅放入日期未确认/观察池。

## 重点动态

1. **24 小时内：无已验证新增。** 没有把普通模型/API发布、本地 harness 或缺少托管执行证据的产品误归 AaaS。
2. **24–72 小时观察：Grok Bot 的 AaaS 定位更具体。** [采购案例](https://x.ai/news/grok-bot-procurement)显示 Bot 被授权读取支出、合同与用量数据并持续执行分析和谈判准备；官方声称案例找到超过 10 万美元直接节省，该数值仅作为厂商案例陈述，不作独立效果保证。
3. **企业化与生命周期管理。** [Grok Bot for Enterprise](https://x.ai/news/grok-bot-for-enterprise)说明 Bot 在独立云端计算机运行，可自主持续执行，并新增访问、网络和审计控制；这满足托管执行与企业治理的 AaaS 边界。

## 远程 / 云端 Agent 执行

| 厂商/产品 | 时间范围 | 托管执行证据 | 判断 |
|---|---|---|---|
| SpaceXAI Grok Bot | 24–72 小时 | 独立云端计算机、跨应用执行、持续工作、企业访问/网络/审计控制 | 明确 AaaS，观察池 |
| Cognition Devin | 日期候选为 9 月 5 日 | Devin 本身是云 Agent，但本轮 Continuity 条目的原始变更内容未核验 | 日期未确认，不作发布事实 |
| OpenAI Codex cloud/remote | 24 小时 | 本轮未发现新的官方托管执行发布 | 无新增，详见 OpenAI 专题页 |
| Anthropic managed/remote | 24 小时 | 本轮未发现新的官方托管执行发布 | 无新增，详见 Claude 专题页 |
| Cursor Cloud Agents / Jules / GitHub coding agent / Replit Agent | 24 小时 | 已核对官方产品与更新入口，未见窗口内新事件 | 无新增 |

## 海外厂商

### SpaceXAI：持久 Agent 的交互与企业治理

[持久 Agent 设计文章](https://x.ai/news/designing-grok-bot)解释 Grok Bot 如何从单次聊天转向长期存在的 Bot：每个 Bot 有自己的计算机、状态与可接管界面，工作可在没有新 prompt 的情况下开始。这是产品设计说明，不是新的性能评测，但为其托管生命周期模型提供了直接证据。

企业版本材料则明确了独立环境、组织访问、网络与审计控制，以及 Bot 之间共享上下文的能力。企业采用数量和“数百万 Bots”等数字均为厂商自述，尚无第三方核验。

### Cognition Devin：强制检查结果

已检查 Cognition Blog、Devin Docs Recent Updates 与可检索的更新聚合。Devin 的托管 VM、异步 session、调度、并发与企业接入属于既有能力；本轮没有找到窗口内可直接引用的官方新公告。二手页面列出 9 月 5 日 “Devin Desktop: Continuity”，但缺少可打开的原始 changelog 与具体变更，故仅列观察候选。

### 其他海外厂商

Google Vertex Agent/Jules、Microsoft Copilot Studio/Azure Agent、Replit Agent、Cursor Cloud Agents、Lindy、CrewAI、LangGraph Platform、GitHub coding agent、Amazon Q Developer、Cloudflare Agents/Sandboxes、Factory 与 Sourcegraph/Amp 均完成窗口扫描，未发现可验证的新增 AaaS 事件。

## 中国厂商（字节系重点）

字节 Coze/火山引擎/豆包/Trae/Seed 已重点检查，未见窗口内新的托管 Agent 执行、定价、配额或企业控制公告。阿里百炼/Qoder/通义/夸克、腾讯元宝/混元/云、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax、DeepSeek 也未发现可验证的 24 小时新增。Qoder Cloud Agents 现有页面能证明其全托管运行形态，但不是本窗口新增，因此不重复作为当日动态。

## 开源 Coding Harness 的云端边界

- **Cline、Pi Coding Agent、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code：** 已逐项检查 hosted/cloud execution、background/scheduled tasks、remote environment、并发、企业控制与定价证据；本窗口没有来自各项目方的新增托管服务公告。
- 搜索中出现第三方托管网页，声称托管 Codex CLI、OpenCode 与 DSH，但缺少可靠发布日期与成熟度证据，未作为已确认行业动态。
- 本地 CLI、IDE/桌面功能、自托管 headless 模式和“可部署到 VPS”不等于提供方托管执行，因此留在开源专题，不归入本页正文动态。

## AaaS 与 MaaS / PaaS 边界

- **AaaS：** 服务方托管 Agent 的计算环境、任务队列、生命周期、权限与观测，例如 Grok Bot 的独立云端计算机和企业控制。
- **MaaS：** 只提供模型推理 API，即使模型擅长 tool use 或长程任务，也不自动成为 AaaS。
- **PaaS：** 只提供 sandbox、容器或通用云基础设施，若没有托管 Agent 生命周期，属于邻近基础设施。

## 日期未确认

- [Devin Central 的更新索引](https://devincentral.com/)列出 “Devin Desktop: Continuity — 2026-09-05”。该站不是 Cognition 官方来源，本轮也未定位到对应原始 changelog，因此只确认“二手索引存在此候选”，不确认具体功能已发布。

## 未证实传闻

本轮未保留单源泄露或产品传闻。

## 邻近信号观察池

- [Cognition 9 月 3 日更新聚合](https://releases.sh/cognition)称 v3 API 增加增量扫描触发、多仓库摄取与 scan effort 选择，并有 scheduled code scans。它与托管生命周期相关，但来源为第三方聚合且在 24–72 小时观察窗，等待官方原文复核。
- 模型 API、Grok 4.6 的模型能力和本地 Grok Build/OpenCode 集成本身不满足 AaaS 定义，本页不把它们计为动态。

## 趋势判断

持久 Agent 的竞争正在从“模型会不会调用工具”转向“是否拥有持续在线的计算机、能否跨应用完成闭环，以及企业能否治理访问、网络与审计”。Grok Bot 近 72 小时的三份官方材料集中展示了这条路线；但本轮没有 24 小时内新品，且采购节省与采用规模均是厂商自报，结论置信度为中等。

## 来源链接

全部来源已在对应条目中直接链接。

## 采集状态

- 已检查：Cognition Devin；SpaceXAI Grok Bot/Agent/API；OpenAI 与 Anthropic 托管 Agent；Google、Microsoft、GitHub、Cursor、Replit、Cloudflare 等海外平台；字节系及主要中国厂商；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 云端边界。
- 失败来源：Devin 9 月 5 日候选缺少可直达官方原文；部分中国厂商页无法按日期可靠筛选；社区搜索噪声高。
- 初始候选数：11；最终保留来源数：5。
- 二次补搜：是。由于 24 小时已验证动态为 0，已扩大中英文关键词，并补查官方新闻索引、GitHub/项目入口及可信二手聚合。

**今日扫描完成，共 5 条动态，重点：24 小时内无已验证新增；24–72 小时内 Grok Bot 的持久云端执行、企业治理与采购案例构成主要 AaaS 信号。**

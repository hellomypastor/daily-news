---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-11-19T00:00:00+08:00"
updatedAt: "2026-11-19T10:45:23+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Daydream Launches Autonomous Agent for Fashion Shopping, Styling and Checkout"
featuredUrl: "https://www.streetinsider.com/PRNewswire/Daydream%2BLaunches%2BFirst-Ever%2BAutonomous%2BAgent%2Bfor%2BFashion%2BShopping%2C%2BStyling%2Band%2BCheckout/27359890.html"
featuredSummary: "Daydream Agent 可在后台持续监控商品并在用户批准后完成购买，属于消费型托管 Agent。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-11-17 21:00 +08:00（原公告 08:00 EST）"
featuredTags: ["近两日补充","Shopping Agent","Background Task"]
tags:
  - "观察池"
  - "近两日补充"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Agent Governance"
  - "Agent Memory"
  - "Background Task"
  - "Cloud Agent"
  - "Devin"
  - "Identity"
  - "Managed Agent"
  - "PaaS"
  - "Shopping Agent"
---

## 今日概览

采集窗口为 **2026-11-18 10:45 至 2026-11-19 10:45（Asia/Shanghai）**。严格按“平台托管或管理 Agent 执行生命周期”的定义，本轮没有找到发布时间可精确确认落在窗口内的新 AaaS 发布；因此已扩大中英文关键词、切换官方列表、GitHub 与可信二手入口完成第二轮补搜。保留 1 条日期有日无时的企业治理候选，以及 24–48 小时内的托管消费 Agent 与 Devin 产品信号；它们均未冒充“过去 24 小时已确认事实”。

## 今日重点

过去 24 小时无可精确确认的新发布。当前值得跟踪的方向是：托管 Agent 正从“能运行任务”扩展到身份、权限、共享范围和持续后台工作；消费侧 Agent 则开始把长期偏好、后台监控与经用户批准的交易闭环结合。

## 远程 / 云端 Agent 执行

| 状态 | 平台 | 动态 | AaaS 判断 |
|---|---|---|---|
| 日期未确认（仅确认 2026-11-18，未确认时刻） | Oleria | [Oleria Extends Identity Governance to AI Agents](https://www.oleria.com/news/oleria-extends-identity-governance-to-ai-agents) 宣布 AI Gateway，并把人员、服务账号、API key 与 Agent 纳入统一身份发现、所有权、访问控制和运行时治理。 | 属于 Agent 控制面与生命周期治理，但不是托管执行环境；作为 AaaS 管理层候选保留，不写成窗口内已确认发布。 |
| 近两日补充（2026-11-17） | Daydream | [Daydream Agent 公告转载](https://www.streetinsider.com/PRNewswire/Daydream%2BLaunches%2BFirst-Ever%2BAutonomous%2BAgent%2Bfor%2BFashion%2BShopping%2C%2BStyling%2Band%2BCheckout/27359890.html) 显示服务可持续在后台监控降价、新品和周期性趋势，并在用户批准后完成购买。 | 由供应商托管、可后台持续执行并连接交易工具，符合消费型 AaaS；但原始发布时间已超出 24 小时窗口，列为 24–48 小时补充。 |
| 近两日补充 / 可信二手索引 | Cognition Devin | [Cognition November 2026 release index](https://releases.sh/cognition) 记录 11 月 17 日会话订阅侧栏、“Mark done”后会话继续运行、跨 Devin/Slack 身份标记等变化。 | Devin 本身是托管远程工程 Agent；该变化强化共享与持续运行管理，但当前只能稳定访问二手 release 索引，故不升级为官方确认。 |

## 海外厂商

### Cognition Devin 专项

已显式检查 Cognition Blog、Devin 文档/Changelog、云端会话、环境/VM、并发、自动化、定价、企业部署、SSO/权限与集成。24 小时内未找到可稳定回到官方原始条目的新增。二手索引显示 11 月 17 日有会话订阅与持续运行相关变化，已作为“近两日补充 / 可信二手索引”保留；没有据此编造并发额度、价格或可用范围。

### xAI / Grok 专项

已显式检查 xAI News、docs.x.ai、API/Models 与官方仓库，重点搜索托管 Agent 执行、异步任务、远程环境、后台工作、工具调用和企业/API Agent 能力。**24 小时内无符合 AaaS 定义的新发布**。普通 Grok 模型/API、语音或 DeepSearch 更新不满足托管执行生命周期定义，留在行业主题，不在本页硬凑条目。

### 其他海外平台

Google、Microsoft、AWS、GitHub、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory 与 Sourcegraph/Amp 的官方入口已检查；未发现能在本轮截止时间前同时确认原文和发布时间的新 AaaS 事件。

## 中国市场（ByteDance 重点）

已检查 Coze/Volcano/Doubao/Trae/Seed、Bailian/Qoder/Tongyi/Quark、Tencent、Baidu、Zhipu、Moonshot/Kimi、MiniMax 与 DeepSeek。ByteDance 相关入口未确认 24 小时内新的托管异步 Agent 发布。部分入口依赖脚本或登录，已列入失败来源，未把搜索抓取时间当发布时间。

## Coding Agent / Harness 托管边界

- Cline、Pi Coding Agent / pi-mono、DeepSeek Harness / DSH 已逐一核对；同时快速检查 OpenCode、Aider、Continue、Roo Code。
- 本轮未确认这些上游官方项目在 24 小时内新增供应商托管执行、后台/定时任务、远程环境、企业控制面或定价。
- 搜索发现第三方 `deepseek-harness-cloud` 托管项目，但它不是 DeepSeek Harness 上游官方发布，且缺少本轮日期证据，因此未作为确认事件收录。普通本地 CLI、IDE 或自托管 harness 更新 **详见开源专题页**。

## AaaS 与 MaaS / PaaS 边界

- 模型 API、推理价格或模型上线只属于 MaaS，不自动构成 AaaS。
- 通用沙箱、数据库、记忆或身份基础设施若不托管 Agent 生命周期，属于邻近 PaaS/治理层。
- 本页保留 Oleria 是因为它直接治理运行中 Agent 的身份与动作，但明确说明其不是托管执行环境。

## 日期未确认

- Oleria 官方页面给出 2026-11-18，但未提供可核验时刻；无法判断是否落在本轮上海时间 24 小时窗口，故仅列日期未确认。

## 未证实传闻

本轮没有达到“单一来源但仍值得记录”的产品泄露；未将社交摘要或聚合站标题写成发布事实。

## 邻近信号观察池

- [百度智能云 Agent 记忆服务文档](https://bce-cdn.bj.bcebos.com/p3m/pdf/bce-doc/online/VDB/VDB.pdf?timeStamp=1733788800081) 显示云端托管的记忆提取、召回、反思与管理能力于 11 月 16 日商业化。这是 Agent 基础设施/PaaS 信号，不是完整托管 Agent 执行服务，且位于 48–72 小时边界。
- Oleria 的 Agent 身份治理值得继续观察其是否扩展到执行托管、任务编排与可观测性闭环。

## 趋势

托管 Agent 的产品边界正分化为三层：执行环境与后台任务、跨人/Agent 的会话协作、以及独立的身份和运行时治理。本轮证据更多落在后两层，而不是新的通用托管运行时。

## 来源链接

- [Oleria AI Agent identity governance](https://www.oleria.com/news/oleria-extends-identity-governance-to-ai-agents)
- [Daydream autonomous shopping Agent announcement mirror](https://www.streetinsider.com/PRNewswire/Daydream%2BLaunches%2BFirst-Ever%2BAutonomous%2BAgent%2Bfor%2BFashion%2BShopping%2C%2BStyling%2Band%2BCheckout/27359890.html)
- [Cognition November release index](https://releases.sh/cognition)
- [百度智能云 Agent 记忆服务文档](https://bce-cdn.bj.bcebos.com/p3m/pdf/bce-doc/online/VDB/VDB.pdf?timeStamp=1733788800081)

## 采集状态

- 已检查来源：海外、中国、远程执行、Devin、Grok，以及 Cline/Pi/DSH/OpenCode/Aider/Continue/Roo Code 的指定入口均已覆盖。
- 失败来源：Cognition changelog 脚本渲染；xAI 索引文本异常；部分中国厂商登录/脚本限制；X 登录限制。
- 初始候选数：14。
- 最终保留来源数：4。
- 二次补搜：是；因 24 小时内无可精确确认发布，已扩大中英文关键词并切换官方列表、GitHub 与可信二手来源。

今日扫描完成，共 4 条动态/观察信号，重点：Agent 执行之外的会话协作、后台持续工作与身份治理正在成为 AaaS 控制面的关键层。

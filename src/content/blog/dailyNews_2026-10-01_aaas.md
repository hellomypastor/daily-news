---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-10-01T00:00:00+08:00"
updatedAt: "2026-10-01T10:07:14+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Slalom Unveils New Agentic Managed Services Offering That Puts Business Outcomes First"
featuredUrl: "https://www.globenewswire.com/news-release/2026/09/30/3372236/0/en/slalom-unveils-new-agentic-managed-services-offering-that-puts-business-outcomes-first.html"
featuredSummary: "Slalom 推出以业务结果和 SLO 为中心、由 agents 与人工共同交付的 Agentic Managed Services。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-10-01 00:00 +08:00"
featuredTags: ["AaaS","Managed Agent","Human-in-the-loop","Enterprise"]
tags:
  - "24–72 小时"
  - "72 小时边界"
  - "观察池"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Agent Observability"
  - "Agent Runtime"
  - "BYOC"
  - "Cloud Agent"
  - "Enterprise"
  - "Governance"
  - "Grok"
  - "Human-in-the-loop"
  - "Managed Agent"
  - "Managed Orchestration"
  - "PaaS"
  - "Pricing"
  - "Sandbox"
  - "Security"
  - "xAI"
---

## 今日重点

采集窗口为 **2026-09-30 09:55 至 2026-10-01 09:55（Asia/Shanghai）**，另保留 24–72 小时、日期未确认和邻近信号。本轮确认 Slalom 一条明确的 AaaS/托管 Agent 服务更新；MongoDB Atlas Agent Engine 与 xAI Team Bots 因官方仅标日期，分别按日期未确认和 72 小时边界候选收录。Union.ai 的 managed control plane + 客户云 data plane 耐久执行平台兼具多 Agent 用途与更广义 AI workflow PaaS 属性；CoreWeave Forge 更接近 Agent 开发与基础设施 PaaS，单列为邻近信号。

## 远程 / 云端 Agent 执行

### Slalom 推出 Agentic Managed Services

[Slalom Agentic Managed Services](https://www.globenewswire.com/news-release/2026/09/30/3372236/0/en/slalom-unveils-new-agentic-managed-services-offering-that-puts-business-outcomes-first.html) 于 9 月 30 日 12:00 ET（10 月 1 日 00:00 上海时间）发布并宣称当日可用。该服务让 AI agents 在人工监督下执行工作，合同围绕业务结果、SLO 与绩效指标；底层 Traverse 平台把 agents、人工专家与客户系统置于统一治理环境，可运行在 Slalom 云或客户环境。它符合“服务方管理执行与交付生命周期”的 AaaS 定义，但成本与效果主张仍来自厂商发布稿。

### Union.ai 以 managed control plane + BYOC data plane 自助上架

[Union.ai on AWS Marketplace](https://www.globenewswire.com/news-release/2026/09/30/3371934/0/en/union-ai-launches-self-service-access-on-aws-marketplace-to-enable-sovereign-ai.html) 于 9 月 30 日 09:00 ET（21:00 上海时间）发布。团队可订阅后在自己的 AWS 账户连接集群；Union 管理的控制面保存 run IDs、schedules 与 artifact references，而输入、输出、日志、代码、密钥与加密密钥留在客户 data plane。工作负载中断可从已完成步骤恢复，平台支持多云/多集群执行，并给出 30 天试用及每月 950 美元最低消费抵扣用量的公开价格。它既覆盖 Agent/多 Agent 工作流，也覆盖训练、评估和 serving，因此更准确的定位是 AaaS 邻近的耐久执行 / AI workflow PaaS，而非纯粹托管 Agent 服务。

## 海外厂商

### MongoDB Atlas Agent Engine：生产 Agent 的托管控制面

[MongoDB Atlas Agent Engine](https://www.mongodb.com/company/blog/product-release-announcements/how-atlas-agent-engine-powers-mongodbs-internal-ai-strategy) 官方文章标注 9 月 30 日但未披露时刻，因此列为“日期未确认”。文章称该 public preview 提供 runtime、security、identity、orchestration、state、observability 与 lifecycle management，并内置 memory/retrieval。MongoDB 内部 Holly 工作区以约 30 个 agents 连接 Salesforce、Teams、Drive、Meet、Calendar 等系统；这是厂商自用案例，不等于外部客户已验证相同规模或收益。

### Cognition Devin 与 xAI/Grok 必查结果

- **Devin**：已核对 News、Recent Updates、托管 session/VM、自动化、共享 Outpost、并发/企业权限、定价与集成入口。官方 Recent Updates 最新公开日期为 9 月 25 日，主窗口与 24–72 小时均无新增；不重复旧条目。
- **xAI/Grok**：已核对 xAI/SpaceXAI News、Grok Bot、Grok Build 与开发者文档。官方 [Team Bots](https://x.ai/news/team-bots) 页面仅标 9 月 28 日，描述共享 Bot 在 Grok Bot 计算机上运行、接入 Slack、插件与凭据，并可协调 Cloud Agents，符合托管 Agent/AaaS 候选；但缺少精确时刻，按 09:55 截止可能位于 72 小时边界内外，故不声称严格落入近三日。普通模型/API 信息不提升为 AaaS。

## 中国厂商（字节重点）

已重点检查字节跳动 Coze、火山引擎、豆包、Trae 与 Seed 的托管运行、异步任务、远程环境、企业治理和商业化入口；主窗口内没有可核实的新 AaaS 公告。阿里百炼/Qoder/通义/夸克、腾讯元宝/混元/云、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek 同样未发现主窗口内带可验证日期的新增。本轮不以搜索摘要或产品名存在推断产品发布。

## AaaS 与 MaaS / PaaS 边界

Cline v4.1.22、Pi v0.99.2、DSH v0.2.0-rc.2 以及 OpenCode 的近期版本属于本地、桌面或自部署 harness 更新；没有证据显示其厂商接管远程执行生命周期，详见开源专题页。Aider、Continue 与 Roo Code 也未见主窗口内托管执行证据。模型 API 本身属于 MaaS；沙箱、训练、评估、registry 与 observability 若不管理具体 Agent 生命周期，则更接近 PaaS。

## 日期未确认

- **官方仅标日期 / 符合 AaaS**：[MongoDB Atlas Agent Engine](https://www.mongodb.com/company/blog/product-release-announcements/how-atlas-agent-engine-powers-mongodbs-internal-ai-strategy) 标注 9 月 30 日，未给时刻；因此无法证明严格晚于窗口起点。
- **官方仅标日期 / 72 小时边界 AaaS 候选**：[xAI Team Bots](https://x.ai/news/team-bots) 标注 9 月 28 日，具备托管计算机、工具、Slack 协作与 Cloud Agent 协调能力；按本轮截止可能在 72 小时边界内外。
- **官方仅标日期 / 邻近 PaaS**：[CoreWeave Forge](https://coreweave.com/news/coreweave-forge-launches-turning-the-ai-loop-production-run-into-a-better-model-and-agent) 标注 9 月 30 日，未给时刻；内容覆盖 Agent 开发、观测与沙箱，但不等同于代客户运营具体 Agent。

## 未证实传闻

本轮没有保留单一来源的 AaaS 泄露或传闻。没有把搜索结果中的产品名、招聘描述或路线图猜测写成发布事实。

## 邻近信号观察池

- **Agent PaaS / 日期未确认**：[CoreWeave Forge](https://coreweave.com/news/coreweave-forge-launches-turning-the-ai-loop-production-run-into-a-better-model-and-agent) 把训练、推理、评估、Agent traces、registry 与 sandbox 接成一体；ARIA coding agent、Agent Lens 和 Sandboxes 已宣布可用。其核心仍是帮助团队开发和改进 models/agents，而非托管业务任务交付。
- **24–72 小时 / 托管 Agent 生态**：[Google Cloud partner security agents](https://cloud.google.com/blog/products/identity-security/google-cloud-partners-deliver-new-security-agents-and-ai-defenses-with-gemini-enterprise) 标注 9 月 29 日。Gemini Enterprise 增加多家 partner security agents，并通过 Agent Gateway/Registry 提供治理与保护；因日期超出主窗口且无精确时刻，保留观察。

## 趋势判断

1. **控制面与数据面分离成为商业包装重点**：Union 明确托管 orchestration 元数据、把数据与计算留在客户云；Slalom 也允许在服务商云或客户环境交付。
2. **Agent 生命周期平台开始吸收数据库与可观测基础设施**：MongoDB 把 memory、retrieval、identity、state 和 orchestration 合并到 Atlas；CoreWeave 将 traces、evaluation、sandbox 与 registry 合并。
3. **AaaS 边界仍需逐条辨认**：能构建 Agent、提供模型或沙箱不自动等于服务方托管执行；本页继续把纯 harness、MaaS 与通用 PaaS 分开。

## 来源链接

- [Slalom Agentic Managed Services](https://www.globenewswire.com/news-release/2026/09/30/3372236/0/en/slalom-unveils-new-agentic-managed-services-offering-that-puts-business-outcomes-first.html)
- [Union.ai on AWS Marketplace](https://www.globenewswire.com/news-release/2026/09/30/3371934/0/en/union-ai-launches-self-service-access-on-aws-marketplace-to-enable-sovereign-ai.html)
- [MongoDB Atlas Agent Engine](https://www.mongodb.com/company/blog/product-release-announcements/how-atlas-agent-engine-powers-mongodbs-internal-ai-strategy)
- [xAI Team Bots](https://x.ai/news/team-bots)
- [CoreWeave Forge](https://coreweave.com/news/coreweave-forge-launches-turning-the-ai-loop-production-run-into-a-better-model-and-agent)
- [Google Cloud partner security agents](https://cloud.google.com/blog/products/identity-security/google-cloud-partners-deliver-new-security-agents-and-ai-defenses-with-gemini-enterprise)

## 采集状态

- **已检查来源**：Devin 与 xAI/Grok 必查入口；Google、Microsoft、AWS、GitHub、MongoDB、CoreWeave、Union、Slalom 等海外 AaaS/平台；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的托管边界；字节系重点及主要中国厂商。
- **失败来源**：部分官方页无精确发布时间；Devin 9 月 25 日后无 release note；xAI/Grok Team Bots 缺精确发布时间、只能作为 72 小时边界候选；部分中国厂商正文不可索引。
- **候选数量**：15；**保留来源**：6。
- **二次补搜**：否（主窗口内已有可验证来源）。

**今日扫描完成，共 6 条动态，重点：Slalom 托管 Agent 服务、xAI Team Bots 的 72 小时边界信号、Union.ai BYOC 耐久执行、MongoDB Atlas Agent Engine，以及 CoreWeave/Google 的平台邻近信号。**

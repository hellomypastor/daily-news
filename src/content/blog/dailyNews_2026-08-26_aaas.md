---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-26T00:00:00+08:00"
updatedAt: "2026-08-26T01:01:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "观察池"
  - "较旧背景"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Cloudflare"
  - "Cursor"
  - "DeepSeek Harness"
  - "Grok Build"
  - "Hosted App"
  - "Managed Agent"
  - "Pi Coding Agent"
  - "Self-hosted"
  - "Third Party"
---

## 今日结论

采集窗口：**2026-08-25 01:01 至 2026-08-26 01:01（Asia/Shanghai）**。本轮未发现可严格确认的 24 小时内 AaaS 发布。已按要求扩大中英文关键词并切换官方新闻、文档/changelog、GitHub 和可信二手入口进行第二轮补搜。值得持续观察的是 Grok Build 已具备托管生成、发布和分享应用的能力，以及社区出现将 DeepSeek Harness 部署到 Cloudflare 的第三方实现；两者都不属于本窗口新发布，且后者不是供应商托管服务，因此不写成当日 AaaS 事实。

## 重点动态

- **严格窗口内已验证动态：0 条。**
- **较旧但相关：** [Grok Build](https://x.ai/news/grok-build-for-everyone) 于 8 月 19 日扩展到 web、移动端和全部套餐，可构建、托管发布并分享应用；这是 xAI/Grok 本轮唯一明确具有托管生命周期含义的官方候选，但已超出 72 小时。
- **第三方观察：** [dsh-cloud](https://github.com/dorisgyl/dsh-cloud) 将 DeepSeek Harness 移植到用户自己的 Cloudflare 账户，使用 Durable Objects 保存会话、Sandboxes 执行工具，并宣称关页后继续运行；项目明确标注非官方、自行部署，不能视为 DeepSeek 提供 AaaS。

## 远程 / 云端 Agent 执行

| 产品 | 状态 | AaaS 边界结论 |
|---|---|---|
| Cognition Devin | 无新增 | 官方既有资料确认其为云 Agent，可在独立环境异步运行、开 PR、测试、自检，并支持并行 managed Devins；本轮已检查环境、并发、定价、企业接入和 Windsurf/Slack/Jira/Linear/API 集成，但无窗口内变化，按规范不重复引用旧背景。 |
| xAI / Grok | 较旧相关候选 | Grok Build 的托管应用构建/发布符合部分 AaaS 生命周期特征；普通 Grok 模型、Voice Agent API 或 MaaS 更新不自动构成 AaaS。 |
| Cursor Cloud Agents | 无新增 | 官方文档继续显示远程环境、团队共享、secrets、MCP、hooks、远程桌面与计费能力，未发现窗口内独立更新。 |
| Codex remote/cloud | 无新增 | 已检查托管任务入口，无窗口内可核验发布；详见 OpenAI 专题页。 |
| Claude managed/cloud agents | 无新增 | 已检查托管与异步执行入口，无窗口内 AaaS 发布；详见 Claude 专题页。 |
| Jules / GitHub coding agent / Replit Agent | 无新增 | 未发现窗口内可核验发布。 |
| Cloudflare Agents / Sandboxes / Workers | 无新增 | 未发现窗口内官方 AaaS 发布；其基础设施被第三方 dsh-cloud 使用不等于 Cloudflare 发布 DSH 服务。 |

## 海外厂商

Google Vertex Agent、Microsoft Copilot Studio/Azure Agent Service、Amazon Q Developer、Lindy、CrewAI、LangGraph Platform、Factory、Sourcegraph/Amp 及其官方产品和更新入口均已检查，未发现窗口内可核验的新发布、GA、定价、配额、企业采用或融资并购动态。

## 中国厂商（字节跳动重点）

- **字节跳动：** Coze/扣子、火山引擎、豆包、Trae、Seed 的托管执行、后台任务、企业控制与定价入口均已检索，未发现窗口内可核验更新。
- **阿里、腾讯、百度：** 百炼/Qoder/通义/夸克，元宝/混元/腾讯云，AgentBuilder/Comate 均未发现窗口内 AaaS 新发布。
- **其他：** 智谱、Kimi、MiniMax、DeepSeek 与可信创业公司入口未发现窗口内可核验的新 AaaS 事件。DeepSeek Harness 官方页确认的是可安装、可从源码运行的开发者预览 harness，不是供应商托管服务。

## 指定 Harness 托管证据检查

| Harness | 本轮结论 |
|---|---|
| Cline | 未发现项目方托管执行生命周期、远程环境、后台/定时任务或 AaaS 定价的窗口内新证据。 |
| Pi Coding Agent | 搜到第三方 pi-dispatch，可在用户控制的容器中按 cron/webhook 运行；属于自托管工程，不是 Pi 官方 AaaS，且非本窗口新事件。 |
| DeepSeek Harness / DSH | 官方提供本地/自托管插件化 harness，包含 sessions、sandboxes、storage、loops、scheduling；第三方 dsh-cloud 与 SSH 插件提供远程形态，但没有 DeepSeek 官方托管执行证据。 |
| OpenCode / Aider / Continue / Roo Code | 未发现项目方托管执行生命周期的窗口内新证据；本地 CLI、IDE 或自托管能力留给开源专题。 |

## AaaS 与 MaaS / PaaS 边界

AaaS 要求供应商托管或管理 Agent 的执行、环境、生命周期、编排、可观测或企业访问。模型 API 本身是 MaaS；通用 VM、容器、Workers 或 Sandbox 本身是 PaaS。Grok Build 托管并发布应用，具有 AaaS 邻近特征；Grok 模型 API 单独不算。DSH 在用户自己的 Cloudflare 或 SSH 主机上运行属于自托管 Agent on PaaS，不是 DeepSeek 提供的 AaaS。

## 日期未确认

- [Cursor Cloud Agents 官方文档](https://prod.cursor.com/docs/cloud-agent) 可确认产品包含远程环境、运行控制、团队共享、secrets、MCP、hooks、远程桌面与 billing，但页面没有可用于本窗口判断的逐条更新时间，因此仅作为能力边界证据，不计作当日动态。

## 未证实传闻

未发现来源明确、与 AaaS 相关且值得保留的窗口内单源泄露或传闻。

## 邻近信号观察池

- [Grok Build on web and mobile](https://x.ai/news/grok-build-for-everyone)：8 月 19 日官方发布，具备构建、托管发布、分享、GitHub 导出、secrets 和 connectors；已超出 72 小时，不作为今日动态，也不把 Grok API 能力扩大解释为异步 Agent 服务。
- [DeepSeek Harness 官方开发者预览](https://www.deepseek.com/harness/en/)：插件体系覆盖 sessions、sandboxes、storage、loops 与 scheduling，但官方入口要求本地 npm 启动或源码安装，当前证据指向开源/自托管 harness。
- [dsh-cloud](https://github.com/dorisgyl/dsh-cloud)：第三方 Cloudflare 端口，有远程会话和 sandbox 执行证据；明确非 DeepSeek 官方，且由用户自行部署。
- [pi-dispatch](https://github.com/edgehero/pi-dispatch)：第三方把 Pi Coding Agent 包装为按需、定时或代码托管事件触发的容器服务；用户控制基础设施，不属于官方托管商业服务。

## 趋势

本轮信号继续显示“可远程运行”不等于“AaaS”：开源 harness 正通过 SSH、Cloudflare、容器队列获得后台与异步能力，但供应商是否承接环境、执行生命周期、安全隔离、企业权限和计费，仍是区分托管服务与自托管方案的关键。Grok Build 则把 Agent 输出直接托管为可分享应用，说明 AaaS 边界正在从 PR/代码任务扩展到应用交付，但本轮没有新事件可证明这一趋势加速。

## 来源链接

1. [SpaceXAI：Grok Build on web and mobile](https://x.ai/news/grok-build-for-everyone)
2. [Cursor Docs：Cloud Agents](https://prod.cursor.com/docs/cloud-agent)
3. [DeepSeek：DeepSeek Harness developer preview](https://www.deepseek.com/harness/en/)
4. [GitHub：dsh-cloud](https://github.com/dorisgyl/dsh-cloud)
5. [GitHub：pi-dispatch](https://github.com/edgehero/pi-dispatch)

## 采集状态

- 已检查来源：Cognition Devin 官方新闻/文档/定价/企业/集成；xAI/SpaceXAI News、Grok Build changelog 与开发者 release notes；OpenAI、Anthropic、Google、Microsoft、GitHub、Cursor、Replit、AWS、Cloudflare、Factory、Sourcegraph、Lindy、CrewAI、LangGraph；字节跳动重点及阿里、腾讯、百度、智谱、Kimi、MiniMax、DeepSeek；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code；GitHub 与中英文可信二手检索。
- 失败来源：Devin 与 xAI 未发现窗口内合格 AaaS 更新；指定 harness 未发现供应商托管服务的新证据；X 无法稳定核验；部分 changelog 无逐条时间戳。
- 初始候选数：14；保留来源数：5。
- 二次补搜：是；因严格窗口内已验证动态为 0，已扩大中英文关键词并切换 GitHub、备用官方入口及可信二手来源。

**今日扫描完成，共 5 条动态，重点：严格 24 小时内无已验证 AaaS 发布；持续关注 Grok Build 托管交付与开源 harness 的第三方远程化。**

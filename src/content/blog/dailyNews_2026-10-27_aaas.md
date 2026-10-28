---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-10-27T00:00:00+08:00"
updatedAt: "2026-10-27T10:44:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Cloud Agent"
  - "Coze"
  - "Grok"
  - "Managed Agent"
  - "Qoder"
  - "Remote Control"
---

## 今日结论

主窗口为 2026-10-26 10:44 至 2026-10-27 10:44（Asia/Shanghai），并向前检查 24–72 小时观察窗。两轮检索后，**没有发现可由原始来源确认、且发布时间落在主窗口内的 AaaS 新动态**；24–72 小时观察窗内也没有日期与 AaaS 边界同时清晰的新条目。以下保留若干日期未确认但边界相关的产品文档信号，并明确区分云端托管、本地远控与单纯模型/API 能力。

## 重点动态

本轮 verified 24h 为 0。没有把“页面今天被搜索引擎抓取”“仓库今天有普通提交”或“模型支持工具调用”当作产品发布。第二轮已扩大到中英文关键词、厂商文档、GitHub、可信二手来源以及 24–72 小时窗口。

## 远程 / 云端 Agent 执行

| 产品 | 扫描结论 | AaaS 边界 |
|---|---|---|
| Cognition Devin | **强制检查完成：无新增** | 已知产品属于托管云工作区和异步软件工程 Agent，但本轮未发现主窗口或观察窗内的官方 changelog、并发、定价、企业权限或集成变化 |
| xAI / Grok | **强制检查完成：无新增** | Grok 模型/API 与实时代码执行工具本身不等于托管任务生命周期；未发现窗口内新的远程异步 Agent 服务 |
| Anthropic Claude Code / Agent SDK / Skills | 无新增 | 未找到窗口内新的官方托管运行时、远程任务、并发或企业生命周期管理变化；相关 Claude 产品动态详见 Claude 专题页 |
| OpenAI Codex cloud / remote、ChatGPT agents、Agents API | 无新增 | 未找到窗口内新的托管执行或商业化变化；相关 OpenAI 产品动态详见 OpenAI 专题页 |
| Google Vertex Agent 产品 / Jules | 无新增 | 检索到更早的 Agent Compute Engine 材料，但已超出 72 小时观察窗，不重复作为今日动态 |
| Microsoft Copilot Studio / Azure Agent / GitHub coding agent | 无新增 | 未核验到窗口内 GA、preview、计费、配额或远程执行变化 |
| Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Amp、Amazon Q | 无新增 | 未发现满足日期和托管生命周期定义的更新 |

## 海外厂商扫描

- **Devin：** 官网 News、产品文档、changelog 关键词、pricing、enterprise、integrations、parallel/concurrency、async/background 均已检查。搜索只返回较旧的多 Devin 管理文章或无可靠日期的二手产品说明，未进入今日来源。
- **Grok：** xAI 新闻、开发者工具文档、Grok Build、code execution、workflows 与 hosted/remote/background/async 关键词均已检查。[Code Execution Tool](https://docs.x.ai/developers/tools/code-execution) 说明 Grok 可实时编写并执行 Python，但没有证据表明这是新增的异步托管 Agent 生命周期产品，故归入邻近信号。
- **GitHub / Microsoft：** 官方文档仍能确认 cloud coding agent 的异步执行形态，但没有窗口内变化；不以静态文档更新时间冒充发布。
- **Cline、Pi Coding Agent、DeepSeek Harness / DSH：** 未发现供应商托管远程环境、后台任务、调度、并发、企业控制或定价的新证据。其本地 CLI、IDE 与自托管 harness 变化不属于本页，详见开源 Harness 雷达专题。

## 中国厂商（字节跳动重点）

### 字节跳动：扣子 / 火山 / 豆包 / Trae / Seed

- [扣子三方精选 Agent](https://docs.coze.cn/cozespace_cloud_agent) 文档明确描述 Agent 运行在扣子提供的云电脑中，可选择 Claude Code、Codex CLI 等框架，符合托管执行与环境管理的 AaaS 定义；但页面没有可核验发布日期，因此只能列入“日期未确认”。其中 Claude Code 与 Codex CLI 是框架形态，**并非 Anthropic 或 OpenAI 官方托管入口**；相关官方生态分别详见 Claude 与 OpenAI 专题页。
- [扣子本地 Agent](https://docs.coze.cn/cozespace_local_agent) 支持从扣子远程向本机 Agent 下达任务，但执行依赖用户电脑保持在线，文档亦明确不会迁移到云端。这属于远程控制与协作管理，不应与云端托管执行混写。涉及 Claude Code / Codex CLI 的官方产品背景详见对应专题页。
- 火山引擎、豆包、Trae、Seed 未发现窗口内满足 AaaS 定义的新发布。

### 其他中国厂商

- [Qoder Cloud Mode](https://docs.qoder.cn/cli/cloud-mode) 文档说明 `--remote` 任务在 Qoder 管理的云端虚拟机执行，本地无需持续在线，符合远程托管执行边界；但页面无明确发布日期，列入日期未确认。
- 百炼、通义、夸克、腾讯元宝 / 混元 / 腾讯云、百度 AgentBuilder / Comate、智谱、Kimi、MiniMax、DeepSeek：未发现时间和托管执行证据均可确认的窗口内新条目。

## AaaS 与 MaaS / PaaS 边界

AaaS 的关键不是“模型会调用工具”，而是服务方托管或管理任务执行、环境、异步生命周期、调度、并发、可观测性或企业访问。模型 API 单独属于 MaaS，通用云 VM / 容器单独属于 PaaS；本机 Agent 的远程入口若不托管执行环境，应单独标为远控。

## 日期未确认

- **扣子三方精选 Agent：** 官方文档可确认云电脑托管、统一模型调用、权限和计费限流，但缺少公开发布日期；证据状态为“功能已确认、日期未确认”。
- **扣子本地 Agent：** 官方文档可确认跨端远控和协作管理，同时明确执行仍在本机；缺少公开发布日期。
- **Qoder Cloud Mode：** 官方文档可确认 Qoder 管理云端 VM 与全流程托管，但未标示发布日期。

## 未证实传闻

本轮没有收录单一消息源的 AaaS 发布传闻。搜索结果中的社交转述、无原文路线图和仅有产品名的聚合页不足以支持上线结论。

## 邻近信号观察池

- **Grok Code Execution：** [xAI 开发者文档](https://docs.x.ai/developers/tools/code-execution) 可确认实时 Python 代码执行能力，但没有显示异步任务队列、持久远程环境或生命周期托管，因此按 MaaS 工具能力处理，不列为 AaaS 动态。
- **扣子本地 Agent：** 具备远程下达指令和团队协作入口，但运行环境仍由用户本机承载，是远控/协作层而非完整云端 AaaS。
- **Cline、Pi、DSH 等本地 harness：** 仅当出现厂商托管执行、后台调度、远程环境、并发或企业治理证据时才进入 AaaS 正文；普通本地版本更新留给开源专题。

## 趋势判断

今天没有足够的新事件支持趋势反转。现有产品形态继续显示三条分化路径：一是 Devin、Qoder Cloud Mode 一类完整云端工作区；二是 GitHub coding agent 一类仓库原生异步执行；三是扣子本地 Agent 一类“云端入口 + 本机执行”的远控层。第三类容易在营销表述中与托管云 Agent 混淆，后续应持续核验执行地点、离线能力和计费主体。

## 来源链接

- [xAI / Grok Code Execution Tool](https://docs.x.ai/developers/tools/code-execution)
- [扣子三方精选 Agent](https://docs.coze.cn/cozespace_cloud_agent)
- [扣子本地 Agent](https://docs.coze.cn/cozespace_local_agent)
- [Qoder Cloud Mode](https://docs.qoder.cn/cli/cloud-mode)

## 采集状态

- 已检查：海外与中国覆盖清单、远程/云执行关键词、Devin 与 Grok 强制项、Cline / Pi / DSH 边界、官方文档、GitHub、社区和可信媒体。
- 失败来源：Devin 缺少可按日期核验的完整公开 changelog；X 无登录态；部分中国厂商文档无发布日期。
- 初始候选数：11；经时间与 AaaS 边界复核后保留 4 个来源，均为日期未确认或邻近信号，没有把它们写成 24 小时新闻。
- 二次补搜：已完成，覆盖 24–72 小时观察窗、中英文扩展关键词、备用文档入口、GitHub 与可信二手来源。

今日扫描完成，共 0 条已验证 24 小时动态，重点：Devin 与 Grok 均无新增；扣子云端/本地 Agent 和 Qoder Cloud Mode 的执行边界已核清，作为日期未确认或邻近信号保留。

---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-25T00:00:00+08:00"
updatedAt: "2026-08-25T19:00:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: []
tags:
  - "24–72h观察项"
  - "单一来源"
  - "较旧背景"
  - "邻近信号"
  - "日期未确认"
  - "腾讯云"
  - "未证实传闻"
  - "主窗口"
  - "AaaS"
  - "Agent"
  - "Cline"
  - "Cloud Agent"
  - "Cloudflare"
  - "DSH"
  - "Enterprise"
  - "Harness"
  - "MaaS"
  - "Managed Agent"
  - "OpenCode"
  - "Pi Coding Agent"
  - "Remote Access"
  - "Scheduled Tasks"
  - "Self-hosted"
---

## 今日概览

采集窗口为 **2026-08-24 19:00 至 2026-08-25 19:00（Asia/Shanghai）**，并回看 24–72 小时观察窗（最早至 2026-08-22 19:00）。本轮没有发现能由官方原文确认、且发布时间落在主窗口内的 AaaS 新发布。新增发现腾讯云 WorkBuddy Managed Agents 官方产品页，但页面没有可核实发布日期，故仅列入日期未确认，不写成今日发布。Devin 与 Grok 已显式检查；七个 coding harness 也逐项检查。Cline Desktop v0.0.17 在上轮截止后发布，加入计划任务模板和计划会话标识，但其执行仍在本地桌面，故仅作为邻近信号；本地运行、远程访问插件或社区自行部署仍不等同于服务商托管执行生命周期。

## 重点动态

- **主窗口内暂无已验证动态。** 本页不以模型 API、普通 IDE/CLI 更新或单一社区说法填充已确认新闻。

## 远程 / 云端 Agent 执行

24–72 小时观察窗出现两条与 DeepSeek Harness（DSH）远程化相关的社区信号：一项声称把 DSH 移植到 Cloudflare Workers 与 Durable Objects，另一项通过 Cloudflare 隧道让手机访问本机 DSH。前者若能复现，技术形态接近托管运行时；后者仍由用户自己的电脑承担执行，因此不属于 AaaS。两项均缺少官方背书和独立复核，详见后文状态分区。

## 海外厂商

- **Cognition Devin：** 官方产品新闻、2026 release notes 与文档未见主窗口或观察窗内关于托管异步执行、环境、并发、定价、企业接入或集成的新增。
- **xAI / Grok：** 官方 News 未见窗口内新增。8 月 21 日的 Grok Bot 计划扩展早于本页 72 小时观察窗，不跨日重复作为背景条目；普通 Grok 模型/API 信息也不按 AaaS 收录。
- **Cline：** SDK v0.0.79 与 CLI v3.0.58 均维护本地 Hub durable event log；CLI 版还刷新模型目录。这是本地 harness 与客户端维护，不是供应商托管 execution lifecycle，故仅列为邻近信号。\n- **Pi Coding Agent：** v0.84.3 新增本地 PowerShell 工具、受管安装更新及会话/模型控制；这里的 managed updates 管理本地安装包，不是托管 Agent task 或环境。
- **Pi、Aider、Continue、Roo Code：** 未找到窗口内由供应商托管 execution lifecycle 的证据；本地后台进程、headless/CI 或自托管能力仍归 coding harness。

## 中国市场（字节跳动重点）

- **字节跳动 Coze / 火山引擎 / 豆包 / Trae / Seed：** 中英文公开入口未发现窗口内可核实的托管 Agent 新发布。
- **DeepSeek Harness / DSH：** 官方产品页将 DSH 定义为开发者预览的开源 Agent harness，并提供本地 Web UI、插件化 scheduling、sandbox、session 等能力；这说明其具备搭建 Agent runtime 的组件，但没有证明 DeepSeek 代用户托管执行。官方说明见 [DeepSeek Harness developer preview](https://www.deepseek.com/harness/en/)。
- **腾讯云 WorkBuddy Managed Agents：** 官方产品页明确其为云端托管智能体运行服务，提供 7×24 小时云端沙箱、自动休眠与恢复、长任务调度、生命周期治理、Trace/Eval、权限及 API/SDK 企业接入；但页面未展示发布日期，详见“日期未确认”。
- **阿里云百炼 / Qoder / 通义、百度、智谱、Kimi 与 MiniMax：** 未发现窗口内可核实的 AaaS 新发布。

## AaaS 与 MaaS / PaaS 边界

- 模型 API 只提供推理能力，属于 MaaS；云虚机、容器或通用 Workers 只提供基础设施，属于 PaaS。
- 只有服务商进一步管理 Agent 的异步任务、环境、生命周期、调度、观测、权限或企业控制面，才进入本页的已验证 AaaS 动态。
- DSH 的本地 Web UI、插件与用户自建隧道没有把执行责任转移给服务商，因此不能据此称为托管 Agent 服务。

## 日期未确认

- **腾讯云 WorkBuddy Managed Agents：** [官方产品页](https://cloud.tencent.com/product/workbuddy-managed-agents) 可确认这是由腾讯云管理运行环境与 Agent 生命周期的企业级托管平台，并披露云端沙箱、长任务、权限、观测与规模化能力；页面未提供可核实发布日期，因此不进入主窗口新闻或首页候选。
- **DSH 官方开发者预览页：** 页面可确认产品边界，但页面未展示可核实的发布日期；因此仅作为较旧背景，不进入主窗口新闻或首页候选：[官方页面](https://www.deepseek.com/harness/en/)。

## 未证实传闻

- **DSH 封闭测试说法（单一社区来源）：** 一名 Reddit 用户在 8 月 24 日称参与 DSH closed beta，但帖子没有可独立核验的官方测试说明，也没有给出服务商托管执行生命周期的清晰证据。仅作为观察线索，不视为产品发布：[社区原帖](https://www.reddit.com/r/DeepSeek/comments/1vwq1n4/i_attend_dsh_closed_beta_testshare_my_experience/)。
- **DSH on Cloudflare（单一社区来源，24–72 小时观察项）：** 一名社区开发者称将 DSH runtime 移植到 Workers、Durable Objects 与 SQLite。若属实，这是第三方托管化实验，而非 DeepSeek 官方 AaaS；当前缺少独立复现与供应商 SLA、定价或企业控制面证据：[社区原帖](https://www.reddit.com/r/CloudFlare/comments/1vw3xv5/built_a_full_ai_agent_runtime_on_workers_durable/)。

## 邻近信号观察池

- **Cline Desktop v0.0.17（主窗口）：** 官方 release 增加计划任务模板，并在侧栏标记计划会话；这些能力由本地 Desktop 调度，未见云端环境、托管并发、企业控制面或服务定价证据，因此不作为 AaaS 发布：[官方 release](https://github.com/cline/cline/releases/tag/desktop-v0.0.17)。
- **Cline SDK v0.0.79（主窗口）：** 官方 release 为本地 Hub 的 durable event log 增加 64 MiB 上限并修复任务完成遥测。它显示 harness 正在完善长任务事件与观测可靠性，但没有远程环境、托管并发、企业控制面或服务定价证据，因此不作为 AaaS 发布：[官方 release](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.79)。
- **Cline CLI v3.0.58（主窗口）：** 本地 Hub 事件日志和模型目录更新，没有供应商托管 Agent 生命周期证据：[官方 release](https://github.com/cline/cline/releases/tag/cli-v3.0.58)。\n- **Pi Coding Agent v0.84.3（主窗口）：** 本地 PowerShell、安装更新与会话控制不构成云端托管执行：[官方 release](https://github.com/earendil-works/pi/releases/tag/v0.84.3)。\n- **OpenCode v1.18.23（主窗口）：** 官方 release 修复经 Cloudflare AI Gateway 路由第三方及 Anthropic 模型，并修复 session-aware provider 的父会话请求头。这是模型网关与本地 harness 集成维护，没有云端 Agent 环境、异步生命周期、托管并发或企业控制面证据，因此不作为 AaaS 发布：[官方 release](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)。
- **手机隧道访问本机 DSH（24–72 小时观察项）：** 社区插件借助 Cloudflare tunnel 从手机连接仍运行在用户电脑上的 DSH。它提供远程访问，但执行环境和生命周期仍由用户自管，不属于 AaaS：[社区原帖](https://www.reddit.com/r/DeepSeek/comments/1vw9rel/made_deepseek_harness_tunnel_to_your_phone_using/)。

## 趋势判断

本轮最值得跟踪的不是新厂商发布，而是开源 harness 社区正尝试补齐远程入口与云端 runtime。判断是否真正跨入 AaaS，应继续观察三类硬证据：由谁托管计算环境、谁负责长任务生命周期，以及是否出现可验证的并发、权限、观测、SLA 与定价。

## 来源链接

1. [腾讯云 WorkBuddy Managed Agents（官方）](https://cloud.tencent.com/product/workbuddy-managed-agents)
2. [DeepSeek Harness developer preview（官方）](https://www.deepseek.com/harness/en/)
3. [DSH 封闭测试社区说法](https://www.reddit.com/r/DeepSeek/comments/1vwq1n4/i_attend_dsh_closed_beta_testshare_my_experience/)
4. [DSH on Cloudflare 社区实验](https://www.reddit.com/r/CloudFlare/comments/1vw3xv5/built_a_full_ai_agent_runtime_on_workers_durable/)
5. [手机隧道访问本机 DSH](https://www.reddit.com/r/DeepSeek/comments/1vw9rel/made_deepseek_harness_tunnel_to_your_phone_using/)
6. [Cline Desktop v0.0.17（官方）](https://github.com/cline/cline/releases/tag/desktop-v0.0.17)
7. [Cline SDK v0.0.79（官方）](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.79)
8. [Cline CLI v3.0.58（官方）](https://github.com/cline/cline/releases/tag/cli-v3.0.58)
9. [Pi Coding Agent v0.84.3（官方）](https://github.com/earendil-works/pi/releases/tag/v0.84.3)
10. [OpenCode v1.18.23（官方）](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)

## 采集状态

- 已检查：Devin、Grok，以及 Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库/release/changelog/docs；同时覆盖海外云与 Agent 厂商、中国主要厂商和社区备用入口。
- 失败来源：部分 GitHub 动态页缺少精确时间，部分中国厂商更新页无稳定时间索引；均已换用官方产品页、仓库与中英文补搜，社区说法降级标注。
- 初始候选：14 条；最终保留：10 条来源（日期未确认/官方背景 2、未证实传闻 2、邻近信号 6）。
- 二次补搜：是。主窗口内已验证动态仍为 0，因此扩大中英文关键词并切换官方备用入口、GitHub 与可信二手/社区来源。

今日扫描完成，共 10 条动态，重点：主窗口无已验证 AaaS 发布；腾讯云 WorkBuddy Managed Agents 已由官方产品页确认能力边界但发布日期未确认；Cline、Pi 与 OpenCode 的官方 release 均属本地 harness / MaaS 邻近信号，DSH 社区实验仍需官方或独立证据。

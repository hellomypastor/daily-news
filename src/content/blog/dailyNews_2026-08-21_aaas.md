---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-21T00:00:00+08:00"
updatedAt: "2026-08-21T09:57:27+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Claude Code v2.1.238"
featuredUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.238"
featuredSummary: "新增 self-hosted runner 延迟关停与代理鉴权，并集中修复 Remote Control、跨会话消息和 runner 生命周期。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-21 04:33 +08:00"
featuredTags: ["AaaS","Claude Code","Self-hosted Runner","Remote Control"]
tags:
  - "24-72h"
  - "较旧上下文"
  - "邻近信号"
  - "日期未确认"
  - "AaaS"
  - "Agent"
  - "Agent Framework"
  - "Agent Harness"
  - "Agent SDK"
  - "Async Tasks"
  - "Browser Agent"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloudflare Agents"
  - "Codex"
  - "Cowork"
  - "Cursor"
  - "Gemini CLI"
  - "LangGraph"
  - "Lifecycle"
  - "Managed Agent"
  - "MCP"
  - "Reliability"
  - "Remote Agent"
  - "Remote Control"
  - "SDK"
  - "Self-hosted Runner"
  - "Workflow"
---

## 今日概览

主扫描窗口：2026-08-20 09:57:27 至 2026-08-21 09:57:27（Asia/Shanghai）；另检查 24–72 小时信号至 2026-08-18 09:57:27。窗口内最明确的 AaaS 变化来自 [Claude Code v2.1.238](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)、[Claude Agent SDK TypeScript v0.3.238](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.238) 与 [OpenAI Codex v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0)：前者加强 self-hosted runner、Remote Control 和跨会话消息，后者加入 Agent 任务面板及向本地/远程会话排队消息的命令。它们共同指向托管 Agent 的核心竞争点——长任务生命周期、会话恢复、消息可靠性、运行环境与安全策略，而不是单纯模型 API。Claude 事件详见 Claude 专题页，Codex 事件详见 OpenAI 专题页。

## 今日重点

| 厂商 / 平台 | 动态 | AaaS 意义 | 状态 |
|---|---|---|---|
| Anthropic | Claude Code 2.1.238 新增 self-hosted runner 延迟关停与每连接代理鉴权，修复慢轮询移除健康 runner、Remote Control 消息消失、重连失败及跨会话拒收/丢队列静默成功 | 直接覆盖远程执行环境、会话接管、生命周期与消息可靠性 | 已验证；详见 Claude 专题页 |
| OpenAI | Codex 0.149.0 新增交互式 `codex agents` 任务面板与 `codex queue`，可搜索、启动、打开、重命名、停止任务并向本地或远程会话发送消息 | 把远程任务发现、控制和异步 steer 收敛到统一 CLI 表面 | 已验证；详见 OpenAI 专题页 |
| Google | [Gemini CLI nightly 20260821](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260821.g30573d2e4)只包含 ignore path 的 symlink 处理修复与 shellExecutionService 重构 | 属于 Agent harness 邻近信号，未证明 Vertex/Jules 托管能力变化 | 已验证 nightly；邻近信号 |

## 远程 / 云 Agent 执行

- **Anthropic self-hosted runner**：2.1.238 增加 `--defer-shutdown-max-min`，收到 SIGTERM 后可继续服务已连接会话，再停放剩余会话退出；新代理鉴权命令/文件可为每次连接签发 `Proxy-Authorization`。这是企业自托管执行器生命周期和网络边界的实质更新。详见 Claude 专题页。
- **Anthropic Remote Control**：同一版本修复会话进程崩溃后的复用、短暂网络续签、跨设备模型显示、每任务 Stop、跨会话 ListAgents/SendMessage 与消息丢失反馈。详见 Claude 专题页。
- **OpenAI Codex 远程任务**：0.149.0 的 `codex agents` 与 `codex queue` 同时覆盖本地和远程 session，并修复队列消息唤醒 idle session、同名会话选择及恢复/分叉权限配置。详见 OpenAI 专题页。
- **可靠性信号**：[Anthropic 多模型请求错误事件](https://status.anthropic.com/incidents/c0ncxxm2wd9r)在 03:16–03:42 影响 claude.ai、Claude API、Claude Code 与 Cowork 后恢复；状态页未披露根因。它不是功能发布，但对托管会话可用性有直接影响，详见 Claude 专题页。

## 海外厂商

| 厂商 | 状态 |
|---|---|
| Anthropic | 主窗口内有 self-hosted runner、Remote Control 与 Agent SDK 更新。 |
| OpenAI | 主窗口内 Codex 任务面板与远程消息队列属于直接 AaaS 增量。 |
| Google / Gemini / Jules | Gemini CLI nightly 有 harness 修复；未发现窗口内 Vertex Agent Engine 或 Jules 托管能力公告。 |
| Microsoft / GitHub | 未发现窗口内 Copilot Studio、Azure Agent 服务或 GitHub coding agent 的可核实新增。 |
| Replit / Devin / Lindy / Factory / Sourcegraph Amp | 未发现窗口内官方发布。 |
| Cursor | 有 24–72 小时且缺精确时分的 Cloud Agents 更新，见日期未确认。 |
| CrewAI / LangGraph | 有 24–72 小时 SDK/框架更新，见观察池；不把开源框架版本自动等同于托管服务发布。 |
| Cloudflare | Agents SDK 0.21.0 属 48–72 小时信号，见观察池。 |
| Amazon Q Developer | 未发现窗口内官方发布。 |

## 中国厂商

**字节跳动重点**：Coze、火山引擎、Doubao、Trae 与 Seed 的公开入口未检出主窗口内可核验的新托管 Agent 发布。阿里云百炼/Qoder、腾讯元宝/混元/腾讯云、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek 同样未发现窗口内可核验的 AaaS 新增。此处只说明本轮公开扫描结果，不代表厂商没有灰度、地区限定或登录态内更新。

## 24–72 小时观察池

- **CrewAI 1.15.17（约 25.5 小时）**：[发布说明](https://github.com/crewAIInc/crewAI/releases/tag/1.15.17)增加声明式 conversational flows，并修复 MCP HTTP/SSE server name、失败尝试的 agent scope 清理、逐跳 SSRF 检查与 Responses API native tool calls。它是 Agent 框架能力信号，不能单凭 release 认定托管平台上线。
- **LangGraph SDK 0.4.3（约 31.9 小时）**：[发布说明](https://github.com/langchain-ai/langgraph/releases/tag/sdk%3D%3D0.4.3)包含 decrypt replacement result 与清空 cron `end_time` 的支持；因 SDK 与 LangGraph Platform 生命周期接口相关，保留为平台邻近信号。
- **Cloudflare Agents 0.21.0（约 72.8 小时）**：[发布说明](https://github.com/cloudflare/agents/releases/tag/agents%400.21.0)略超 72 小时边界，包含 Workflow retention 透传、子 Agent canonical URL、请求体流式转发、Browser Tools、observability 与 Kitesurf 支持；作为边界外较旧上下文保留，不计入 24–72 小时统计。

## AaaS 与 MaaS / PaaS 边界

Claude self-hosted runner、Remote Control 与 Codex remote session 控制具备执行环境、异步会话、生命周期和消息管理，属于 AaaS。Gemini CLI nightly、CrewAI 和 Cloudflare Agents SDK 本身主要是 harness / SDK / PaaS 工具，只有与托管 runtime、workflow 或远程 session 结合时才构成 AaaS；因此它们放在邻近信号而非宣称为新托管服务。单纯模型版本、推理 API 或模型可用区变化属于 MaaS，本轮没有拿它们填充 AaaS 正文。

## 日期未确认

- **Cursor Cloud Agents**：[8 月 19 日 changelog](https://cursor.com/changelog/08-19-26)称 cloud agents 可订阅 PR、Slack thread 或 scheduled task 事件，持有 goal，并在长会话中持续运行；页面未给精确时分，无法判断是否处于本轮 24–48 小时的具体位置。作为日期已知但时分未确认的 AaaS 候选保留。

## 未证实传闻

本轮没有保留单源泄露或匿名“即将发布”候选。搜索结果中的产品名称若无法回到官方页面，没有写成发布事实。

## 邻近信号观察池

- Gemini CLI nightly：开源 CLI 的 symlink ignore 修复，不代表 Vertex Agent runtime 更新。
- CrewAI 1.15.17：框架 conversational flow 与安全修复，托管部署状态未由该 release 证明。
- LangGraph SDK 0.4.3：SDK 生命周期接口信号，未单独证明 LangGraph Platform 商业服务变更。
- Cloudflare Agents 0.21.0：与 Durable Objects、Workflows、Browser Tools 紧密相关，但发布时间已略超 72 小时。

## 趋势判断

本轮高信号不在“更多 Agent 名称”，而在执行控制面成熟：任务面板、消息队列、runner 延迟关停、代理鉴权、重连与丢消息可见性逐步成为托管 Agent 的标准组件。中国厂商公开面本轮无可核验同窗发布，不能据此推断竞争放缓。

## 来源链接

所有保留 URL 已在对应条目首次出现处链接原始 release、官方 changelog 或状态事件；Claude/OpenAI 重复来源均标注详见对应专题页。

## 采集状态

- 已检查：Anthropic、OpenAI、Google、Microsoft/GitHub、AWS、Cursor、Replit、Devin、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph/Amp，以及字节、阿里、腾讯、百度、智谱、Kimi、MiniMax、DeepSeek 的公开入口。
- 失败来源：部分官网缺精确时分或需客户端渲染；GitHub 匿名 API 后段限流；X/登录态社交入口无法稳定核验。
- 初始候选：93（9 个 GitHub 仓库各取最近 8 个 release，共 72；Anthropic 状态事件 3；公开 Web 搜索结果 18）。
- 最终保留：9 个独立来源 URL，其中主窗口 5 个、日期未确认 1 个、24–72 小时 2 个、72 小时边界外上下文 1 个。
- 二次补搜：否；最终来源不为 0。

今日扫描完成，共 9 条动态，重点：Claude 与 Codex 都在加强长任务、远程会话和异步消息的执行控制面。

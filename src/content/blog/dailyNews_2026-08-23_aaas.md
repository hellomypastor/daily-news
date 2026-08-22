---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-23T00:00:00+08:00"
updatedAt: "2026-08-23T01:01:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Introducing Grok Bot"
featuredUrl: "https://x.ai/news/introducing-grok-bot"
featuredSummary: "官方发布具有云端独立电脑、持续执行和多 Bot 并发的 Grok Bot；作为较旧背景保留。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-08-11"
featuredTags: ["AaaS","Grok Bot","Cloud Agent","较旧背景"]
featuredImage: "https://x.ai/images/news/introducing-grok-bot-og-2.png"
featuredImageAlt: "xAI Grok Bot 托管云端智能体产品发布图"
featuredImageCaption: "图片来源：xAI 官方发布"
tags:
  - "24-72h"
  - "较旧背景"
  - "可信二手"
  - "邻近信号"
  - "日期未确认"
  - "中国"
  - "AaaS"
  - "Agent"
  - "Agent SDK"
  - "AgentCore"
  - "Background Tasks"
  - "Claude Code"
  - "Cloud Agent"
  - "Cloud Session"
  - "Devin"
  - "Enterprise"
  - "Gemini CLI"
  - "GitHub Copilot"
  - "Grok Bot"
  - "Managed Agent"
  - "Memory"
  - "Qoder"
  - "Reliability"
  - "Sandbox"
  - "Slack Code"
  - "UiPath"
---

## 扫描结论

主发现窗口：2026-08-22 01:01 至 2026-08-23 01:01（Asia/Shanghai）；24–72 小时观察窗口：2026-08-20 01:01 至 2026-08-22 01:01。本窗口可核验的 AaaS 变化主要来自 Anthropic：Claude Code 2.1.239 强化云会话、Remote Control、远程 MCP 重连和跨机器消息，Agent SDK 0.3.239让重连宿主重新发现仍在运行的后台任务；截止前发布的 2.1.240/0.3.240 只有可靠性修复与版本同步说明，不扩写未知细节。Google 与 GitHub 的同窗更新偏执行安全、会话恢复和企业策略，属于 Agent harness 邻近信号。Devin 8 月 21 日更新覆盖会话订阅、Automation webhook、企业 MCP 和私网接入，但无时分，放入日期未确认。xAI/Grok 本轮未发现新的托管 Agent 发布；8 月 11 日 Grok Bot 因具有云端独立电脑、持续执行和多 Bot 并发而作为较旧官方背景保留。Claude 相关条目详见 Claude 专题页，OpenAI/Codex 相关条目详见 OpenAI 专题页。

## 今日重点

| 厂商 / 平台 | 动态 | AaaS 意义 | 证据状态 |
|---|---|---|---|
| Anthropic | [Claude Code v2.1.240](https://github.com/anthropics/claude-code/releases/tag/v2.1.240)仅披露 bug fixes and reliability improvements | 托管/远程执行可靠性相关版本，但不能从简短说明推断具体能力 | 2026-08-22 22:45 +08:00；已验证，详见 Claude 专题页 |
| Anthropic | [Claude Agent SDK v0.3.240](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.240)同步 Claude Code 2.1.240 | SDK 与执行器保持版本一致；官方未列额外功能 | 2026-08-22 22:45 +08:00；已验证，详见 Claude 专题页 |
| Anthropic | [Claude Code v2.1.239](https://github.com/anthropics/claude-code/releases/tag/v2.1.239)增加云端同步插件、跨机器会话消息、远程会话 keep-alive，并修复云会话 plan mode 与远程 MCP 重连 | 强化云会话隔离、跨端协作、长任务存活和故障恢复 | 2026-08-22 03:54 +08:00；已验证，详见 Claude 专题页 |
| Anthropic | [Claude Agent SDK v0.3.239](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.239)让重复初始化返回仍在运行的后台任务快照 | 重连宿主可重新发现存活任务，并改善异步任务用量可观测性 | 2026-08-22 03:55 +08:00；已验证，详见 Claude 专题页 |

## 远程 / 云 Agent 执行

- [Claude Code 2.1.239](https://github.com/anthropics/claude-code/releases/tag/v2.1.239)覆盖云端同步插件管理、跨机器会话消息、远程会话 keep-alive、云会话 plan mode、远程 MCP 瞬时失败后的恢复与 Remote Control；这些变化直接作用于托管会话生命周期和远程控制面，详见 Claude 专题页。
- [Claude Agent SDK 0.3.239](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.239)在运行中进程重复 initialize 后返回存活后台任务快照，并校正后台子 Agent 延后结果的成本和耗时；它让异步任务恢复与结算更可观测，详见 Claude 专题页。
- [Claude Code 2.1.240](https://github.com/anthropics/claude-code/releases/tag/v2.1.240)和[Agent SDK 0.3.240](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.240)均在截止前发布；前者仅注明可靠性改进，后者仅注明与 Claude Code 同步，因此只记录版本事实，不臆测具体托管能力。详见 Claude 专题页。

## 海外厂商

- [Gemini CLI nightly 20260822](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260822.g5411f113c)隔离 macOS Seatbelt 沙箱中的 Docker/容器运行时 socket 与二进制。这改善 Agent harness 的执行边界，但不等于 Vertex Agent Engine 或 Jules 服务端发布。
- [GitHub Copilot CLI v1.0.81-7](https://github.com/github/copilot-cli/releases/tag/v1.0.81-7)是预发布版本，增加异常退出后开放会话恢复，并让强制远程策略拉取失败时采用限制性姿态；它改善连续性和企业策略控制，但不代表 GitHub coding agent 托管服务 rollout。
- Cognition Devin 的环境、并发、定价、企业接入和集成入口已强制检查。可报告候选只有[Devin 2026 release notes](https://docs.devin.ai/release-notes/2026)的 8 月 21 日条目，因缺精确时分放入日期未确认。
- xAI/Grok 的托管 Agent、异步任务、工具与远程执行入口已强制检查。本轮未检出主窗口新发布；[Grok Bot](https://x.ai/news/introducing-grok-bot)的云端独立电脑、离线持续执行、多 Bot 并发和企业候补机制符合 AaaS 定义，但发布日期为 8 月 11 日，只作较旧背景，不写成今日发布。

<figure class="source-image">
  <a href="https://x.ai/news/introducing-grok-bot"><img src="https://x.ai/images/news/introducing-grok-bot-og-2.png" alt="xAI Grok Bot 托管云端智能体产品发布图" loading="lazy" /></a>
  <figcaption><a href="https://x.ai/news/introducing-grok-bot">图片来源：xAI 官方发布</a></figcaption>
</figure>

## 中国厂商（字节重点）

字节跳动 Coze、火山引擎、Doubao、Trae 与 Seed 的公开入口未检出主窗口内可核验的新托管 Agent 发布。阿里百炼/Qoder、腾讯 ADP/元宝/混元、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek同样未发现精确落入窗口的官方新增。[Qoder 官方主页](https://qoder.cn/)当前描述云端全托管 Cloud Agents、多智能体协同和长时委派执行，但没有发布日期，因此仅作日期未确认的现有能力说明。

## 24–72 小时观察池

- [AWS Bedrock AgentCore 多智能体迁移案例](https://aws.amazon.com/blogs/machine-learning/scaling-cloud-migrations-with-agentic-ai-on-amazon-bedrock-agentcore/)展示 serverless runtime、session isolation、Gateway、Identity、Memory、Policy 和 Observability 组合承载多类迁移 Agent；页面标注 8 月 20 日但无时分，案例指标未独立复测。
- [Slack Code 二手报道](https://venturebeat.com/orchestration/slack-wants-to-drag-ai-coding-out-of-the-terminal-and-into-the-group-chat)描述代码 Agent 在 Slack 专用频道运行，团队可查看计划和差异、引导或停止会话并留下审计轨迹；未找到同期 Slack 官方原文，仅作为可信二手观察。

## AaaS 与 MaaS / PaaS 边界

Claude 云会话、Remote Control 与后台任务恢复具备执行环境、异步会话和生命周期控制，属于 AaaS。Gemini CLI、Copilot CLI 是本地 harness 工程信号；单纯模型版本、推理 API 或普通云资源属于 MaaS/PaaS。本轮没有把 Grok 模型/API 新闻误写成 AaaS。AWS AgentCore 案例包含托管 runtime、会话隔离、身份、策略与可观测控制面，符合 AaaS，但文章是架构案例而非新 GA。

## 日期未确认

- [Devin 2026 release notes](https://docs.devin.ai/release-notes/2026)的 8 月 21 日条目增加会话订阅、Automation webhook Bearer secret、企业 MCP 统一配置，以及 Dedicated Deployment 私网 MCP 与私有 CA 支持；官方只给日期，无法确认属于 24 小时还是 24–72 小时窗口。
- [Qoder 智能体编程平台](https://qoder.cn/)列出 Cloud Agents 的全托管、多智能体协同与长时委派能力，但页面没有模块发布日期或变更日志，不能推断为本轮新增。
- [UiPath Agents 2026 年 8 月发布说明](https://docs.uipath.com/agents/automation-cloud/latest/release-notes/august-2026)在 8 月 19 日条目加入 Agent memory 预览与对话 Agent 的个人连接；页面只有日期，作为 Automation Cloud 托管能力的日期未确认背景。

## 未证实传闻

本轮未保留达到最低证据门槛的单源泄露。检索到的 Slack Code 只有可信二手报道，已放入观察池并明确未找到同期官方原文，不呈现为官方已核验发布。

## 邻近信号观察池

- Gemini CLI nightly：macOS 容器运行时隔离属于执行安全信号，不代表 Google 托管 Agent 服务端更新。
- GitHub Copilot CLI 预发布：会话恢复和远程策略 fail-closed 与托管 Agent 连续性、安全边界相关，但不代表服务端 rollout。
- Codex 0.150.0 alpha 在窗口内出现多个版本，但官方 release 只有版本号或占位说明，未据此推断远程 Agent 能力；详见 OpenAI 专题页。
- AWS AgentCore 迁移案例证明已有托管组件的组合用法，不代表 8 月 20 日新 GA。

## 趋势判断

高信号继续集中在长任务存活、断线恢复、跨端消息、沙箱边界和企业策略，而非单纯模型能力。Claude 同窗更新同时触及云会话与 SDK 后台任务，说明执行控制面正成为 AaaS 的差异化层；但 2.1.240 的简短说明不足以判断修复范围，中国厂商公开入口也缺少精确到窗口的发布，均不应过度推断。

## 来源链接

所有保留 URL 均已在对应条目首次出现处链接；Claude/OpenAI 重复来源均注明详见对应专题页。

## 采集状态

- 已检查：Anthropic、OpenAI、Google、Microsoft/GitHub、AWS、Cloudflare、Cursor、Replit、CrewAI、LangGraph、Lindy、Factory、Sourcegraph/Amp；强制核查 Cognition Devin release notes、环境、并发、定价、企业接入和集成；强制核查 xAI/Grok Bot、Build、开发者更新的托管执行、异步任务、工具和远程执行；另查字节、阿里、腾讯、百度、智谱、Kimi、MiniMax、DeepSeek公开入口，并做中英文网页与 GitHub release API 交叉检索。
- 失败来源：X/社交入口需登录；部分官网依赖客户端渲染；Devin、Qoder 与 UiPath 页面无精确时分；Claude Code 2.1.240、Codex alpha 说明过短，未扩写未知细节。
- 候选数量：43。
- 最终保留：12 个独立来源 URL。
- 二次补搜：否；最终来源不为 0。

今日扫描完成，共 12 条动态，重点：Claude 云会话与后台任务恢复是主窗口最明确的 AaaS 变化；Devin 企业 MCP/私网接入日期待确认，Grok 本轮无新托管发布，执行可靠性、恢复与安全边界仍是竞争焦点。

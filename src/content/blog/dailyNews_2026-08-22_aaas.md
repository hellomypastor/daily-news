---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-08-22T00:00:00+08:00"
updatedAt: "2026-08-22T01:02:24+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Scaling cloud migrations with agentic AI on Amazon Bedrock AgentCore"
featuredUrl: "https://aws.amazon.com/blogs/machine-learning/scaling-cloud-migrations-with-agentic-ai-on-amazon-bedrock-agentcore/"
featuredSummary: "展示 AgentCore runtime、会话隔离、身份、策略、记忆与可观测承载多 Agent 迁移流程；页面只给日期。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTags: ["AaaS","AgentCore","日期未确认"]
featuredImage: "https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2026/08/12/ML-20875-featured-image.png"
featuredImageAlt: "AWS 多智能体迁移框架架构示意图"
featuredImageCaption: "图片来源：AWS Machine Learning Blog"
tags:
  - "24-72h"
  - "邻近信号"
  - "日期未确认"
  - "中国"
  - "AaaS"
  - "Agent"
  - "Agent SDK"
  - "AgentArts"
  - "AgentCore"
  - "Claude"
  - "Claude Code"
  - "Cloud Agent"
  - "Codex"
  - "Cursor"
  - "Gemini CLI"
  - "Lifecycle"
  - "Managed Agent"
  - "Multi-Agent"
  - "Reliability"
  - "Remote Agent"
  - "Remote Control"
---

## 扫描结论

主窗口：2026-08-21 01:02:24 至 2026-08-22 01:02:24（Asia/Shanghai）；24–72 小时观察窗口：2026-08-19 01:02:24 至 2026-08-21 01:02:24。主窗口内最明确的 AaaS 信号来自 Claude Code self-hosted runner / Remote Control 与 Codex 本地、远程任务控制：竞争焦点继续落在长任务生命周期、会话恢复、消息可靠性和远程执行边界，而不是单纯模型 API。Claude 相关条目详见 Claude 专题页，OpenAI/Codex 相关条目详见 OpenAI 专题页。

## 今日重点

| 厂商 / 平台 | 动态 | AaaS 意义 | 状态 |
|---|---|---|---|
| Anthropic | [Claude Code v2.1.238](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)加强 self-hosted runner 延迟关停、每连接代理鉴权、Remote Control 重连与跨会话消息 | 直接覆盖远程执行器、会话接管、生命周期和消息可靠性 | 2026-08-21 04:33 +08:00；已验证，详见 Claude 专题页 |
| Anthropic | [Claude Agent SDK TypeScript v0.3.238](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.238)增加后台/嵌套任务事件元数据和跨会话拒收生命周期 | 让托管任务的层级、状态和失败边界更可观测 | 2026-08-21 04:33 +08:00；已验证，详见 Claude 专题页 |
| OpenAI | [Codex v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0)加入 `codex agents` 任务面板与 `codex queue`，覆盖本地和远程 session | 把远程任务发现、控制和异步 steer 收敛到统一 CLI | 2026-08-21 05:04 +08:00；已验证，详见 OpenAI 专题页 |
| Anthropic | [多模型请求错误事件](https://status.anthropic.com/incidents/c0ncxxm2wd9r)影响 claude.ai、API、Claude Code 与 Cowork，随后恢复 | 不是功能发布，但直接反映托管会话的可靠性边界 | 2026-08-21 03:16–03:42 +08:00；已验证，详见 Claude 专题页 |

## 远程 / 云 Agent 执行

- Claude Code 2.1.238 为 self-hosted runner 增加延迟关停能力：收到终止信号后可继续服务已连接会话，并能为每次代理连接签发鉴权；Remote Control 同时修复重连、会话复用、跨会话 ListAgents/SendMessage 和消息丢失反馈。以上均来自[官方 release](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)，详见 Claude 专题页。
- Claude Agent SDK 的[同版本 release](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.238)补充后台与嵌套任务事件元数据，使宿主更容易表达任务树和拒收状态；它是 SDK 能力，不自动等同 Anthropic 托管服务单独 rollout，详见 Claude 专题页。
- [Codex 0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0)把本地与远程 session 纳入同一任务面板，并允许向会话排队消息；这是 Agent 控制面与异步任务体验的实质变化，详见 OpenAI 专题页。
- [Anthropic 状态事件](https://status.anthropic.com/incidents/c0ncxxm2wd9r)在 26 分钟内恢复；官方未披露根因，因此不对故障机制作推断。详见 Claude 专题页。

## 海外厂商

- Anthropic 与 OpenAI 在主窗口有直接远程任务/会话控制更新；Google、Microsoft/GitHub、Replit、Devin、Lindy、Factory、Sourcegraph/Amp 和 Cloudflare 未检出截止前可核验的同窗托管服务发布。
- [Gemini CLI nightly 20260821](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260821.g30573d2e4)只有 ignore path 的 symlink 修复与 shell execution service 重构，属于 Agent harness 邻近信号，不能写成 Vertex Agent Engine 或 Jules 的托管能力更新。

## 中国厂商（字节重点）

字节跳动 Coze、火山引擎、Doubao、Trae 与 Seed 的公开入口未检出主窗口内可核验的新托管 Agent 发布。阿里百炼/Qoder、腾讯 ADP/元宝/混元、百度 AgentBuilder/Comate、智谱、Kimi、MiniMax 与 DeepSeek 同样未发现精确到本窗口的官方 AaaS 新增。此结论只代表本轮可公开复核的入口，不排除灰度、地区限定或登录态内更新。

## 24–72 小时观察池

- [Codex as a platform](https://developers.openai.com/blog/codex-as-a-platform)说明 Codex CLI、SDK 与 app-server 的嵌入边界，包括启动、恢复、事件流、持久会话和审批；文章日期为 8 月 19 日，作为平台化信号保留，详见 OpenAI 专题页。
- [AWS Bedrock AgentCore 多智能体迁移案例](https://aws.amazon.com/blogs/machine-learning/scaling-cloud-migrations-with-agentic-ai-on-amazon-bedrock-agentcore/)展示 serverless runtime、session isolation、Gateway、Identity、Memory、Policy 和 Observability 如何承载四类迁移 Agent。官方页面标注 8 月 20 日但无时分，无法精确判定与 24 小时边界的关系；其中效率数字来自 AWS Professional Services 内部项目跟踪，未独立复测。
- [Zephyr The AI Platform 发布新闻稿](https://www.prnewswire.com/news-releases/zephyr-launches-the-ai-platform-a-multi-agent-workspace-where-teams-work-alongside-ai-specialists-302855949.html)于 8 月 20 日 21:00 +08:00 宣布团队多 Agent 工作面正式可用；证据是公司提供的新闻稿，采用与成效数据未获独立验证。

<figure class="source-image">
  <a href="https://aws.amazon.com/blogs/machine-learning/scaling-cloud-migrations-with-agentic-ai-on-amazon-bedrock-agentcore/"><img src="https://d2908q01vomqb2.cloudfront.net/f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59/2026/08/12/ML-20875-featured-image.png" alt="AWS 多智能体迁移框架架构示意图" loading="lazy" /></a>
  <figcaption><a href="https://aws.amazon.com/blogs/machine-learning/scaling-cloud-migrations-with-agentic-ai-on-amazon-bedrock-agentcore/">图片来源：AWS Machine Learning Blog</a></figcaption>
</figure>

## AaaS 与 MaaS / PaaS 边界

Claude runner/Remote Control 与 Codex remote session 控制具备执行环境、异步会话和生命周期管理，属于 AaaS。Gemini CLI nightly 是 harness 工程信号；单纯模型版本、推理 API、路由与云资源变更属于 MaaS/PaaS，本轮没有把这些邻近信号写成托管 Agent 发布。AWS AgentCore 案例则明确包含托管 runtime、会话隔离、身份、策略与可观测控制面，符合 AaaS，但文章本身是架构案例而非新产品 GA。

## 日期未确认

- [Cursor Cloud Agents changelog](https://cursor.com/changelog/08-19-26)称 Cloud Agents 可订阅 PR、Slack thread 或定时事件、持有 goal 并持续处理长会话；页面仅给 8 月 19 日，无精确时分，无法稳定划入 24–72 小时的具体位置。
- [华为云 AgentArts 2026 年 8 月动态](https://support.huaweicloud.com/wtsnew-agentarts/index.html)列出智能体卫士、运行时灰度、网关会话保持及第三方托管智能体日志统一观测；官方只标月份，不能推断为今日更新。

## 未证实传闻

本轮未保留可达到最低证据门槛的单源泄露。搜索中出现的 Slack Code 等候选仅有二手报道且缺同窗官方原文，未呈现为产品发布事实。

## 邻近信号观察池

- Gemini CLI nightly：开源 CLI/harness 修复，不代表 Vertex 或 Jules 服务端 rollout。
- AWS AgentCore 迁移案例：证明已有托管组件的组合用法，不代表 8 月 20 日新 GA。
- 华为云 AgentArts 月度页：有托管日志、灰度与会话治理信号，但发布时间只能确认到月份。

## 趋势判断

本轮高信号仍集中在“Agent 跑多久、断线后怎么恢复、消息如何不丢、执行器如何安全停机”。这说明 AaaS 的产品差异正从模型能力转向运行控制面和可靠性。AWS 的多 Agent 迁移案例进一步显示，托管 runtime、身份、策略、记忆与可观测需要作为一体化底座组合；但中国厂商公开入口在本窗口缺少精确可核验的新发布，不能据此推断区域竞争放缓。

## 来源链接

所有保留 URL 均已在对应条目首次出现处链接；Claude/OpenAI 重复来源均标注详见对应专题页。

## 采集状态

- 已检查：Anthropic、OpenAI、Google、Microsoft/GitHub、AWS、Cursor、Replit、Devin、CrewAI、LangGraph、Cloudflare、OpenHands、Factory、Sourcegraph/Amp、Lindy，以及字节、阿里、腾讯、百度、智谱、Kimi、MiniMax、DeepSeek、华为云公开入口；并做中英文网页、官方 release/changelog/status 与可信二手交叉检索。
- 失败来源：X/社交入口需登录；部分官网依赖客户端渲染；Cursor/AWS/中国厂商部分页面无精确时分；GitHub Status 搜索缓存与历史页抓取不一致；Slack Code 未找到同窗官方原文。
- 候选数量：42。
- 最终保留：10 个独立来源 URL；主窗口 5 个（其中 Gemini CLI 为邻近信号）、24–72 小时/观察 3 个、日期未确认 2 个。
- 二次补搜：否；最终来源不为 0。

今日扫描完成，共 10 条动态，重点：Claude self-hosted runner/Remote Control 与 Codex 远程任务控制继续把竞争推向长任务生命周期、会话恢复、消息可靠性和安全执行边界。

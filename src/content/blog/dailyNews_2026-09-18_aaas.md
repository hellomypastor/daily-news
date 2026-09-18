---
title: "AaaS（Agent-as-a-Service）行业动态日报"
date: "2026-09-18T00:00:00+08:00"
updatedAt: "2026-09-18T10:46:00+08:00"
description: "托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredTitle: "Claude Code v2.1.275"
featuredUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.275"
featuredSummary: "更新 hosted sessions、cloud environments、routines、background agents 与 claude.ai 账号 Skills/Plugins 同步。 托管 Agent、远程异步执行平台及其商业化与生态动态。"
featuredPublishedAt: "2026-09-18 06:33 +08:00"
featuredTags: ["Claude Code","Managed Agent","Cloud Agent","详见 Claude 专题页"]
tags:
  - "24–72 小时观察"
  - "日期未确认"
  - "详见 Claude 专题页"
  - "异步执行"
  - "A_B Testing"
  - "AaaS"
  - "Agent"
  - "Amazon Bedrock AgentCore"
  - "Automations"
  - "Claude Code"
  - "Claude Projects"
  - "Cloud Agent"
  - "Devin"
  - "Enterprise"
  - "Managed Agent"
  - "Observability"
---

## 今日概览

主采集窗口为 **2026-09-17 10:46 至 2026-09-18 10:46（Asia/Shanghai）**，并将 24–72 小时相关内容放入观察段。本轮确认 1 条主窗口 AaaS 动态：Claude Code v2.1.275 更新托管 session、云环境、例程与账户侧 Skills/Plugins 同步。另有 Claude Projects beta 只标“Updated today”，发布时间未确认；Devin 与 Amazon Bedrock AgentCore 的 09-16 更新按 24–72 小时观察项保留。xAI/Grok 已显式检查，本轮无新托管 Agent、异步任务、远程执行、企业或定价发布。

## 重点动态

| 厂商 / 产品 | 时间与证据 | AaaS 判断 | 动态与意义 |
|---|---|---|---|
| Anthropic / Claude Code | 09-18 06:33，官方 GitHub | **符合托管生命周期特征** | [Claude Code v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275) 改善托管 session 的容器重启权限提示、云环境校验、可编辑 Artifact 的定时/Run now 例程复用，并同步 claude.ai 账户启用的 Skills 与 Plugins。详见 Claude 专题页。 |
| Anthropic / Projects beta | 官网仅标 Updated today | **符合云端异步执行，日期未确认** | [Projects 帮助页](https://support.claude.com/en/articles/9517075-what-are-projects) 描述把一个项目拆成多个并行云线程，关闭电脑后仍继续运行，并由 Library 汇集输入与产物；目前向部分 Claude Code Pro/Max 用户分阶段开放。详见 Claude 专题页。 |

## 远程 / 云端 Agent 执行

- **Claude Code 托管会话**：v2.1.275 的变化横跨 hosted sessions、cloud environments、routines、background agents 与账号配置同步。它不是单纯模型更新，而是供应商管理 session、环境、恢复、调度与扩展配置生命周期的 AaaS 更新。
- **Claude Projects beta**：帮助页将项目描述成可并行、可离线持续运行的云线程集合，具备远程异步执行特征；但官网没有精确发布时间，因此不把它写成已确认落入主窗口的首发。详见 Claude 专题页。
- **Cognition Devin（强制检查）**：官方 Recent Updates、Docs、Pricing、Enterprise、环境、并发与集成入口均已检查。09-16 更新涉及 Automations 的 Slack 用户组触发、GitLab public repo scope、v3 blueprint source、Teams 和 MCP 凭据管理；因缺少时分，放入 24–72 小时观察段。定价与并发未见本轮新变化。
- **SpaceXAI/xAI Grok（强制检查）**：检查 Grok Bot、Grok Build、Automations、Agent Tools API、Enterprise 与 changelog。窗口内未发现新托管 Agent、异步任务、远程电脑、并发、定价或企业接入发布；09-16 Memory 已在前一日页面收录，本页不跨日重复旧来源。

## 海外厂商

| 厂商 | 本轮状态 | 说明 |
|---|---|---|
| Anthropic Managed Agents / Claude Code | **有新增** | v2.1.275 更新 hosted session、cloud environment、routine 与账号扩展同步；Projects beta 日期未确认。详见 Claude 专题页。 |
| OpenAI Codex / Agents API / ChatGPT agents | 无新增 | 检查官方入口，未发现主窗口内新的托管执行、沙箱、并发、企业控制面或定价发布；不重复前一日 Sponsored Agents 与较旧 Agents API。 |
| Google Vertex / Gemini / Jules | 无新增 | Vertex Agent Engine、Gemini Enterprise Agent Platform、Jules 与 Cloud release notes 未见主窗口内独立发布。 |
| Microsoft / GitHub | 无新增 | Copilot Studio、Azure AI Foundry Agent Service 与 GitHub coding agent 官方入口未见合格近时发布。 |
| AWS AgentCore / Amazon Q | 24–72 小时观察 | 09-16 AgentCore optimization 技术文章说明从生产 trace 生成 prompt 改进、离线评估与在线 A/B 验证，属于托管可观测与优化闭环。 |
| Cognition Devin | 24–72 小时观察 | 09-16 release notes 更新 Automations 触发、GitLab scope、Teams、MCP secrets 与 blueprint API；没有新定价或并发公告。 |
| SpaceXAI/xAI | 无新增 | Grok Bot、Build、Automations 与 Agent Tools API 已显式检查；没有窗口内新动态。 |
| Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph/Amp | 无新增 | 检查官方发布与产品入口，未发现主窗口内可核实的新托管执行事件。 |

## Coding Agent / Harness 的 AaaS 边界

- **Cline**：检查官方仓库、releases、Desktop/CLI、scheduled runs 与 remote environment。近期材料仍以本地执行、桌面端或连接用户自有远程主机为主；没有供应商托管 VM、并发队列或企业控制面的新证据，不进入 AaaS 来源。
- **Pi Coding Agent / pi-mono**：检查官方仓库、packages 与 releases；未发现供应商托管后台任务、调度、远程环境、并发服务或 AaaS 定价。
- **DeepSeek Harness / DSH**：检查仓库、releases、docs、Remote API 与 discussions；可见内容指向自托管 Host/客户端协议，没有供应商管理执行生命周期的新证据。
- **OpenCode、Aider、Continue、Roo Code**：未找到窗口内符合 AaaS 定义的新动态。普通 CLI、IDE、插件或自托管 harness 更新留给开源专题。

## 中国市场

已检查字节 **Coze / 火山 / Doubao / Trae / Seed**，以及阿里 Bailian / Qoder / 通义 / 夸克、腾讯元宝 / 混元 / 云、百度 AgentBuilder / Comate、智谱、Kimi、MiniMax 与 DeepSeek 的官方入口。本窗口没有找到可回到公开原文、并同时具备托管执行、异步任务、远程环境、并发、企业控制面或定价证据的新发布；客户端渲染或登录受限页面不据片段硬凑。

## AaaS vs MaaS / PaaS

- **AaaS**：供应商托管或管理 Agent 的 session、任务、环境、调度、工具、记忆、权限、可观测或优化生命周期。Claude 的云线程、托管 session 与 routines，以及 Devin Automations，属于此范围。
- **MaaS**：仅提供模型推理或 tool-calling API，不自动成为 AaaS。本轮普通模型/API 更新未收入。
- **PaaS**：只提供计算、容器、存储或网络底座。只有当材料明确说明 Agent 生命周期由平台管理时才进入正文，否则放入邻近信号。

## 日期未确认

- [Claude Projects beta](https://support.claude.com/en/articles/9517075-what-are-projects) 只显示“Updated today”，无法核验更新时分；保留其并行云线程、后台持续执行与 Library 事实，不声称精确首发时间。详见 Claude 专题页。

## 24–72 小时观察段

- **Cognition Devin（09-16，官方）**：[Recent Updates](https://docs.devin.ai/release-notes/overview) 新增 Slack user-group 对 Automations/Oncall 的触发、GitLab automation scope、v3 blueprint 来源选择，并改善 Teams 与 MCP 凭据管理。它强化了托管自动化、企业集成与环境配置控制面，但官方未给时分，无法判定是否落入主窗口。
- **AWS AgentCore（09-16，官方）**：[系统提示优化技术文章](https://aws.amazon.com/blogs/machine-learning/optimizing-agent-system-prompts-with-amazon-bedrock-agentcore/) 说明 AgentCore optimization 读取 Observability 中的生产 trace 与奖励信号，提出配置改进，并通过离线批量评估与线上 A/B 测试验证后再推广；这是托管 Agent 运维闭环，而非单纯 MaaS。

## 未证实传闻

- 本轮未发现达到记录价值、且与托管执行直接相关的单一来源泄露或传闻。

## 邻近信号观察池

- AWS 同期发布生命科学 Agent skills 材料，但开源 skills 本身不等于供应商托管执行，本页不把它计作 AaaS 动态。
- Grok 普通模型/API 与 Agent Tools API 旧资料只作边界核对；本轮没有新事件，因此不重复列为来源。

## 趋势

本轮信号集中在**托管生命周期的可恢复性与企业控制面**：Claude Code 把 hosted session、环境、routine、Artifact 与账号扩展同步继续收拢；Devin 把事件触发、GitLab 范围、Teams 和 blueprint API 做成更细的管理面；AgentCore 则将生产 trace、评估和 A/B 验证接成持续优化环。相比“再发布一个 Agent”，平台竞争正在转向如何让 Agent 长期、可审计、可配置地运行。

## 来源链接

1. [Claude Code v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275) — Anthropic，主窗口，详见 Claude 专题页。
2. [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects) — Claude Help Center，日期未确认，详见 Claude 专题页。
3. [Devin Recent Updates](https://docs.devin.ai/release-notes/overview) — Cognition，09-16，24–72 小时观察。
4. [Optimizing agent system prompts with Amazon Bedrock AgentCore](https://aws.amazon.com/blogs/machine-learning/optimizing-agent-system-prompts-with-amazon-bedrock-agentcore/) — AWS，09-16，24–72 小时观察。

## 采集状态

- **已检查来源**：OpenAI、Anthropic、Google、Microsoft/GitHub、AWS、Cognition Devin、SpaceXAI/xAI、Replit、Cursor、Lindy、CrewAI、LangGraph、Cloudflare、Factory、Sourcegraph/Amp；Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code；以及主要中国厂商官方入口。
- **强制检查**：Cognition Devin 有 09-16 的 24–72 小时观察项；xAI/Grok 无新增；Cline/Pi/DSH 均无供应商托管执行的新证据。
- **失败来源**：Devin 09-16 release notes 缺时分；部分中国厂商页面依赖客户端渲染或登录；X 未登录检索不稳定；Cline/Pi/DSH 搜索结果未提供托管生命周期证据。
- **初始候选数**：11；**最终来源数**：4；**二次补搜**：否（最终来源不为 0）。

今日扫描完成，共 **4** 条动态，重点：Claude Code 强化托管 session 与 routines；Claude Projects beta 展示并行云线程；Devin 与 AgentCore 把企业触发、环境控制和持续优化做得更细。

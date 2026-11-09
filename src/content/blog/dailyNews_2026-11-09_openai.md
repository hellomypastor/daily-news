---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-11-09T00:00:00+08:00"
updatedAt: "2026-11-09T10:45:36+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "OpenAI Agents SDK TypeScript v0.22.0-alpha.2"
featuredUrl: "https://github.com/openai/openai-agents-js/releases/tag/v0.22.0-alpha.2"
featuredSummary: "TypeScript Agents SDK alpha 增加托管工具、应用自管会话存储、A2A、语音工作流与预算/监督控制。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-11-08 16:27 +08:00"
featuredTags: ["Agents SDK","TypeScript","Agent"]
tags:
  - "观察池"
  - "日期未确认"
  - "Agent"
  - "Agents SDK"
  - "ChatGPT"
  - "Codex"
  - "Coding Agent"
  - "OpenAI"
  - "Python"
  - "Responses API"
  - "SDK"
  - "TypeScript"
---

## 今日概览

采集窗口：**2026-11-08 10:45 至 2026-11-09 10:45（Asia/Shanghai）**。本轮确认两条窗口内的官方 Agents SDK alpha 发布：Python 与 TypeScript SDK 都把应用自管会话存储、托管工具、预算/监督控制和 A2A 等能力推向新的原生 Agent 运行时。另有 Codex 主分支提交与 Python SDK 类型定义变更，但它们尚不等同于稳定版产品发布，故放入观察池。

## Tier 1：编码、Agent 与开发平台

| 产品 / 能力 | 状态 | 本轮结论 |
|---|---|---|
| Codex CLI | 观察中 | 官方仓库主分支有命令中心历史搜索等提交，但窗口内未见稳定 release；详见观察池。 |
| VS Code / JetBrains 集成 | 无新增 | 未发现窗口内可验证的官方发布。 |
| Codex cloud / remote tasks / PR agents | 观察中 | 主分支包含 Cloud transcript 与 stream 修复，尚未形成稳定 release。 |
| ChatGPT agentic mode | 无新增 | 未发现窗口内可验证的官方发布。 |
| Agents API / Agent Builder | 无新增 | 官方文档可访问，但未见窗口内新公告。 |
| Responses API | 无新增 | 未见窗口内 changelog 新条目；SDK 预览版增加托管 Responses 工具封装。 |
| Agents SDK Python | **已更新** | `v0.24.0-alpha.7` 发布，加入自管 SessionStore、托管工具、上下文/完成钩子、预算、MCP 资源读取与 A2A 等。 |
| Agents SDK TypeScript | **已更新** | `v0.22.0-alpha.2` 发布，加入原生托管工具、SessionStore、A2A、语音工作流与执行预算等。 |
| Assistants API 迁移 | 无新增 | 官方迁移文档继续指向 Responses API；Assistants API 已于 2026-08-26 下线，本轮无新变化。 |
| Realtime API | 无新增 | 未发现窗口内可验证的官方发布。 |
| GPT / reasoning / Codex 模型家族 | 日期未确认 | Python SDK 主分支新增一个 beta Responses 模型字符串识别；这只能证明 SDK 类型变更，不能证明模型已正式发布。 |

## Tier 2：ChatGPT 客户端与创作能力

| 范围 | 状态 | 本轮结论 |
|---|---|---|
| Browser / Operator 能力、Desktop apps | 无新增 | 未发现窗口内可验证的官方更新。 |
| GPTs / GPT Store、Canvas | 无新增 | 未发现窗口内可验证的官方更新。 |
| Sora / video、GPT Image / DALL·E | 无新增 | 未发现窗口内可验证的官方更新。 |
| Voice、Connectors / MCP | 无独立产品公告 | TypeScript 与 Python Agents SDK alpha 均有语音/MCP 相关开发能力更新，见下方官方更新。 |

## Tier 3：企业、行业与安全

Enterprise、Business、Edu、Gov、Science、安全与行业方案在本窗口内未发现可验证的新公告。现有产品页或较旧报道不重复充当“今日动态”。

## 官方更新（最新在前）

### Agents SDK TypeScript v0.22.0-alpha.2

官方于 2026-11-08 16:27（上海时间）发布 [`v0.22.0-alpha.2`](https://github.com/openai/openai-agents-js/releases/tag/v0.22.0-alpha.2)。预览版把 `fileSearch()`、`codeInterpreter()`、`imageGeneration()` 等托管工具纳入原生运行时，并加入应用自管 `SessionStore`、A2A 1.0 适配、语音工作流、精确步骤 steering、`maxModelSteps` 与按已观察用量门控的 `RunBudget`。它仍是 alpha，升级还要求同步五个 SDK 包并审查严格写权限策略，不宜按稳定版能力承诺。

### Agents SDK Python v0.24.0-alpha.7

官方于 2026-11-08 15:05（上海时间）发布 [`v0.24.0-alpha.7`](https://github.com/openai/openai-agents-python/releases/tag/v0.24.0-alpha.7)。重点包括应用自管根会话存储、File Search / Code Interpreter / Image Generation 托管工具、上下文与完成钩子、观测式预算、MCP 资源/提示读取、项目搜索、A2A 适配和原生语音会话。升级说明同时强调新环境默认采用严格写策略，且若干 API 名称和回调签名已变化。

## Love

本轮没有足够、可复核且位于 24 小时窗口内的独立社区正向样本。官方发布说明不计作正向口碑。

## Hate

本轮没有足够、可复核且位于 24 小时窗口内的独立社区负向样本。搜索中出现的额度合并抱怨均早于本窗口，因此不把旧讨论重算为今日情绪。

## 情绪判断

**中性，低置信度。** 证据主要来自两份官方 alpha release，缺少同期独立用户反馈，不能据此推断社区满意度。

## 对比与竞争信号

两份 SDK alpha 显示 OpenAI 正把 Codex 风格的原生会话、执行环境、工具与恢复能力下沉到开发者 SDK；其价值在于更完整的运行生命周期，而不是单一模型升级。对 Claude Code、Cline、Pi Coding Agent、DeepSeek Harness / DSH、Cursor 等工具的性能优劣，本轮没有具名基准或可复现实验，因而不作“追平/超过”判断；Cline、Pi 与 DSH 的完整扫描留给开源专题页。

## 日期未确认

- [`openai-python` 主分支提交](https://github.com/openai/openai-python/commit/3774b7ed775b4bff99b45ef961c5d1f6c82b8e99) 于 2026-11-09 00:11（上海时间）加入 `gpt-6-rosalind` 的 beta Responses 类型识别。证据只覆盖 SDK 代码，不包含 OpenAI 模型页、changelog 或新闻稿，因此**不能据此声称该模型已发布、开放或具备任何能力**。

## 观察池

- [`openai/codex` 主分支提交](https://github.com/openai/codex/commit/4e4767ffa763ec0d0a19e04cf8ff0163a987297b) 于 2026-11-09 03:23（上海时间）为 agent command center 增加任务历史搜索。同一窗口还有 Cloud transcript / stream 修复与侧边会话导航提交；目前未见对应稳定 release，故仅记录工程方向，不把主分支提交表述为已面向所有用户发布。

## 来源链接

1. [OpenAI Agents SDK TypeScript v0.22.0-alpha.2](https://github.com/openai/openai-agents-js/releases/tag/v0.22.0-alpha.2)
2. [OpenAI Agents SDK Python v0.24.0-alpha.7](https://github.com/openai/openai-agents-python/releases/tag/v0.24.0-alpha.7)
3. [OpenAI Python SDK beta 模型类型提交](https://github.com/openai/openai-python/commit/3774b7ed775b4bff99b45ef961c5d1f6c82b8e99)
4. [Codex command center 历史搜索提交](https://github.com/openai/codex/commit/4e4767ffa763ec0d0a19e04cf8ff0163a987297b)

## 采集状态

- 已检查：OpenAI 新闻/研究、开发者 changelog 与模型/弃用文档、ChatGPT release notes、Codex 与官方 Python/TypeScript SDK 仓库和 release，以及规定的 Tier 1–3 产品入口和社区渠道。
- 失败来源：X 未登录状态下精确时间与内容不可稳定复核；YouTube 未找到可与官方原文交叉验证的窗口内新发布；HN 未发现对应窗口内官方新发布讨论。
- 初始候选：4；保留来源：4；二次补搜：否（最终来源非零）。

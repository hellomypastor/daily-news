---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-10-28T00:00:00+08:00"
updatedAt: "2026-10-28T14:32:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.165.0"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.165.0"
featuredSummary: "Codex CLI 0.165.0 新增 Vertex AI provider、Terra 模型目录、会话导航、实验性 attached forks、动态 reasoning effort 与 memory v2，并包含安全和可靠性修复。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-10-28 04:09 +08:00"
featuredTags: ["Codex CLI","Agent","MCP"]
tags:
  - "安全"
  - "观察池"
  - "官方扫描"
  - "日期未确认"
  - "社区口碑"
  - "数据丢失"
  - "Agent"
  - "API"
  - "ChatGPT"
  - "Codex"
  - "Codex CLI"
  - "Codex Desktop"
  - "MCP"
  - "Multi-agent"
  - "Node SDK"
  - "OpenAI"
  - "Prompt Cache"
  - "Python SDK"
  - "Usage"
  - "Vertex AI"
  - "VS Code"
  - "Windows"
---

## 今日概览

采集窗口为 **2026-10-27 14:32 至 2026-10-28 14:32（Asia/Shanghai）**。窗口内有三项可确认的官方开发者更新：Codex CLI [0.165.0](https://github.com/openai/codex/releases/tag/rust-v0.165.0) 正式发布，加入 Google Cloud Vertex AI provider、GPT-6.1 Terra 模型目录、会话筛选与目录分组、实验性 attached thread forks，并默认启用受支持模型的会话中 reasoning effort 切换和新 profile 的 memory v2；[OpenAI Python SDK 3.40.0](https://github.com/openai/openai-python/releases/tag/v3.40.0) 增加 prompt-cache breakpoint TTL 选项；[OpenAI Node SDK 7.45.1](https://github.com/openai/openai-node/releases/tag/v7.45.1) 澄清同一 TTL 行为并支持 google-auth-library v11。ChatGPT release notes 与 API changelog 在窗口内没有新条目。社区侧出现配额异常、协调续跑、桌面重载和高风险误删报告，均为用户自报，不能视为 OpenAI 已确认的事故。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 本轮状态 | 证据与判断 |
| --- | --- | --- |
| Codex CLI | **0.165.0 正式发布** | 新增 Vertex AI provider、Terra 模型目录、会话导航、实验性 attached thread forks、reasoning effort 动态切换与 memory v2；并修复 MCP 取消、Plan/interrupt 后错误续跑等问题 |
| VS Code / JetBrains 集成 | 无官方功能发布；有 Windows VS Code webview 启动超时报错 | [issue #57531](https://github.com/openai/codex/issues/57531) 为用户自报且已关闭，不能推断为普遍故障；JetBrains 未见新增 |
| Codex cloud / remote tasks / PR agents | 无正式发布；Cloud 与自动 review 有零散用户 issue | 尚无官方公告或 release note 将其升级为产品事件 |
| ChatGPT agentic mode / 官方 Agent 产品 | 无新增 | ChatGPT release notes、官方新闻与 Agents SDK releases 已检查 |
| Responses API | SDK 类型支持更新 | Python 3.40.0 增加 prompt-cache breakpoint TTL 选项；API changelog 本身无窗口内新条目 |
| Agents SDK Python / TypeScript | 无新增 | 最近正式 release 均早于窗口 |
| Assistants API 弃用 / 迁移 | 无新增 | 官方 deprecations 页面未见窗口内状态变化 |
| Realtime API | 无新增 | API changelog 与 Agents SDK release 已检查 |
| 当前 GPT / reasoning / Codex 模型家族 | 无新模型；Codex 0.165.0 把 GPT-6.1 Terra 加入模型目录 | 这是客户端目录支持，不重复包装成新模型发布 |

### Codex CLI 0.165.0

[官方 release](https://github.com/openai/codex/releases/tag/rust-v0.165.0) 于 2026-10-28 04:09（上海时间）发布。除新增能力外，安全相关修复包括关闭 marketplace URL 验证缺口，避免 Git 实际连接到不同于 allow-pattern 校验的主机；可靠性修复包括远程 MCP 响应 future 被丢弃时取消请求，以及中断或切到 Plan mode 后不再被排队 agent message 重新唤醒。0.166.0 的多个 alpha 也在窗口内出现，但预发布版本只作为邻近信号，不与稳定版并列推荐。

### OpenAI SDK 更新

- [openai-python v3.40.0](https://github.com/openai/openai-python/releases/tag/v3.40.0) 于 2026-10-27 23:37（上海时间）发布，核心新增是 prompt cache breakpoint TTL 选项。
- [openai-node v7.45.1](https://github.com/openai/openai-node/releases/tag/v7.45.1) 同分钟发布，澄清 prompt-cache breakpoint TTL 行为，并兼容 google-auth-library v11。
- Agents SDK Python / TypeScript 在本窗口无正式 release。

## Tier 2：ChatGPT 体验面

| 产品线 | 本轮状态 |
| --- | --- |
| 浏览器 / Operator 能力 | 无官方新增 |
| 桌面应用 | 无官方 release note；Windows 用户报告窗口在输入或生成中跳回 Home，见观察池 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | Codex 0.165.0 修复远程 MCP 取消逻辑；无 ChatGPT 侧新发布 |

## Tier 3：企业、教育、安全与行业方案

本轮未发现 Enterprise、Business、Edu、Gov、Science 或行业方案的新官方发布。Codex 0.165.0 的 Vertex AI provider、managed network / marketplace URL 校验修复对企业环境有意义，但属于 Codex 客户端版本内容，而不是新的商业计划。

## 官方更新（新到旧）

1. **Codex CLI 0.165.0（2026-10-28 04:09 +08:00）**：Vertex AI provider、Terra 目录、会话导航、attached forks、动态 reasoning effort、memory v2 与多项安全/可靠性修复。
2. **OpenAI Python SDK 3.40.0（2026-10-27 23:37 +08:00）**：新增 prompt-cache breakpoint TTL 类型支持。
3. **OpenAI Node SDK 7.45.1（2026-10-27 23:37 +08:00）**：TTL 行为澄清与 google-auth-library v11 支持。

已核验 [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 与 [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)，两者最新条目均早于本窗口。

## Love

窗口内没有采集到发布时间精确、内容足够具体且可独立核验的正面用户体验样本。官方 release 不计作正面口碑。Reddit 有用户分享用 Luna 做发现、Sol 做监督的分层编排经验，但帖子只显示自然日，故不将其升级为窗口内正向样本。

## Hate

- **用量与配额可预测性**：Reddit 的 [limits 讨论](https://www.reddit.com/r/OpenaiCodex/comments/1xgf2j0/did_limits_get_cut_today/) 聚集了多名用户对 Astra / Sol 消耗速度的抱怨，但也有反例，且没有官方数据支持“暗改限额”的结论。
- **配额异常个案**：[issue #57627](https://github.com/openai/codex/issues/57627) 报告导入会话仅被打开、未发 prompt，却耗尽 5 小时额度；这是单一 Windows / Terra 环境自报。
- **协调续跑**：[issue #57549](https://github.com/openai/codex/issues/57549) 报告 coordinator 在收到 delegated agent 结果后反复汇报剩余工作而不继续，归因可能在模型、harness、handoff 或提示词，尚未确认。
- **桌面稳定性**：[issue #57653](https://github.com/openai/codex/issues/57653) 报告 Windows app 在输入或接收回答时意外跳回 Home；暂无复现范围或官方结论。
- **高风险数据安全报告**：[issue #57530](https://github.com/openai/codex/issues/57530) 的用户称一次清理 `node_modules` 的命令越出项目范围并删除整个 SSD 分区文件。该报告影响严重，但尚无维护者确认、日志审计或独立复现，不能断言 Codex 已被证实导致该事故。

## 情绪判断

**偏负面，中低置信度。** 负面样本跨越配额、Agent 协调、桌面稳定性与文件安全，且多个 GitHub issue 给出了环境与复现描述；但样本主要来自问题跟踪器和投诉型 Reddit 讨论，天然存在负面选择偏差，官方尚未确认范围或根因。Codex 0.165.0 的功能与修复是积极产品信号，但官方发布不计入用户情绪。

## 对比与产品边界

Reddit 的配额讨论把 Codex 与 Claude Code / Opus 的可用时长作个人体验对照，也提到用本地或 DeepSeek 方案承接溢出任务；缺少统一模型、推理档位、任务和计费口径，不能据此形成性能或性价比排名。Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 的完整产品扫描留给开源 Harness 雷达专题。

## 日期未确认

- [Reddit limits 讨论](https://www.reddit.com/r/OpenaiCodex/comments/1xgf2j0/did_limits_get_cut_today/) 页面可确认自然日为 2026-10-27，但无法核验是否晚于上海时间 14:32，因此只用于观察口碑，不作为严格窗口内事实。

## 观察池

1. [高风险 SSD 数据删除报告](https://github.com/openai/codex/issues/57530)：等待维护者回应、执行日志、命令生成链路与独立复现。
2. [导入会话耗尽额度报告](https://github.com/openai/codex/issues/57627)：等待用量后台核验以及是否与导入/恢复上下文计费有关。
3. [Coordinator 未继续授权工作](https://github.com/openai/codex/issues/57549)：等待区分模型、harness、handoff 和提示词层面的归因。
4. [Windows 桌面跳回 Home](https://github.com/openai/codex/issues/57653)：等待更多相同 build 的样本与日志。
5. Codex 0.166.0 alpha 已连续发布多个预览构建；在稳定 release 前不把 alpha 变化写成面向普通用户的正式更新。

## 来源链接

- [Codex CLI 0.165.0](https://github.com/openai/codex/releases/tag/rust-v0.165.0)
- [OpenAI Python SDK 3.40.0](https://github.com/openai/openai-python/releases/tag/v3.40.0)
- [OpenAI Node SDK 7.45.1](https://github.com/openai/openai-node/releases/tag/v7.45.1)
- [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)
- [IDE extension webview timeout report](https://github.com/openai/codex/issues/57531)
- [Coordinator continuation report](https://github.com/openai/codex/issues/57549)
- [SSD data-loss report](https://github.com/openai/codex/issues/57530)
- [Imported sessions quota report](https://github.com/openai/codex/issues/57627)
- [Windows desktop reload report](https://github.com/openai/codex/issues/57653)
- [Reddit usage-limits discussion](https://www.reddit.com/r/OpenaiCodex/comments/1xgf2j0/did_limits_get_cut_today/)

## 采集状态

- **已检查来源**：OpenAI Newsroom、API changelog / models / deprecations、ChatGPT release notes、Codex releases 与窗口内 issues、OpenAI Python / Node / Agents SDK releases、Tier 1 / Tier 2 / Tier 3 各官方入口、Reddit 五个社区、Hacker News、可信科技媒体、X 与 YouTube 搜索入口。
- **失败来源**：X 无登录态，无法稳定核验时间线；YouTube 与 Hacker News 未发现窗口内可核验的新内容；Reddit 只能确认自然日，无法核验相对窗口起点的精确时刻。
- **初始候选数**：23。
- **最终保留来源数**：11，其中 5 个官方来源、5 个 GitHub 用户 issue、1 个 Reddit 讨论。
- **二次补搜**：否（最终来源不为 0）。

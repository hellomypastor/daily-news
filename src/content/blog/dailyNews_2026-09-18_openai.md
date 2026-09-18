---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-18T00:00:00+08:00"
updatedAt: "2026-09-18T10:46:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex 0.155.0"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.155.0"
featuredSummary: "Codex CLI 稳定版加入实验性语音、Agent 管理、MCP 本地验证、daemon 恢复及安全加固。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-18 07:14 +08:00"
featuredTags: ["Codex","CLI","Agent","MCP"]
tags:
  - "观察池"
  - "较旧背景"
  - "可信二手来源"
  - "邻近信号"
  - "日期未确认"
  - "Agent"
  - "Agents SDK"
  - "Alignment"
  - "ChatGPT"
  - "CLI"
  - "Codex"
  - "GPTs"
  - "Hate"
  - "MCP"
  - "Migration"
  - "Node SDK"
  - "OpenAI"
  - "Python"
  - "Python SDK"
  - "Responses API"
  - "Safety"
  - "Usage"
  - "Word"
---

## 今日概览

采集窗口：**2026-09-17 10:46 至 2026-09-18 10:46（Asia/Shanghai）**。本轮的确定性增量集中在开发者与编码工具链：Codex CLI 发布稳定版 0.155.0，Agents SDK Python 发布 0.22.3，Python 与 Node 官方 SDK 则同步加入 Agent session 模型设置、托管 Responses WebSocket session 等 API 表面。ChatGPT for Word 与自定义 GPT 迁移页面只给出 9 月 17 日这一日期，无法确认是否在窗口起点之后，故单列为“日期未确认”。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 本轮状态 | 证据与要点 |
|---|---|---|
| Codex CLI | 已验证更新 | [Codex 0.155.0](https://github.com/openai/codex/releases/tag/rust-v0.155.0) 于 2026-09-18 07:14（上海时间）发布：实验性 `/voice` 会话、TUI 实时 reasoning summary、Agent 总览中的隐藏/归档/删除、受支持 Mac 上针对 MCP 请求的 Touch ID 验证、daemon 更新与恢复能力，以及多项沙箱和凭据处理加固。 |
| VS Code / JetBrains 集成 | 无新增 | 已查官方发布与文档入口；窗口内未找到可独立核验的新版本公告。 |
| Codex 云端/远程任务与 PR Agent | 无独立公告 | CLI 0.155.0 含 Agent 总览、工作树所有权和 daemon 恢复改进，但本轮未发现单独的云端任务或 PR Agent 产品公告。 |
| ChatGPT agentic mode | 无新增 | 官方发布记录中未见窗口内独立公告。 |
| Agents SDK Python | 已验证更新 | [Agents SDK Python 0.22.3](https://github.com/openai/openai-agents-python/releases/tag/v0.22.3) 于 2026-09-18 06:19（上海时间）发布，修复条件审批参数对齐、server-managed resume 的 tool-not-found 返回、Windows 主机路径、并发 SQLite 初始化、session 分页、tracing key 缓存与子进程回收等问题。 |
| Agents SDK TypeScript | 无新增 | 官方仓库最近稳定版仍为 0.18.0（不在窗口内）。 |
| Responses API / 官方 Python SDK | 已验证更新 | [openai-python 3.15.0](https://github.com/openai/openai-python/releases/tag/v3.15.0) 于 2026-09-18 08:52（上海时间）发布，加入 Agent session 模型设置、audio-mini 模型选项、compaction 进度事件、托管 Responses WebSocket session 和 prompt-cache prewarming。 |
| 官方 Node SDK | 已验证更新 | [openai-node 7.18.0](https://github.com/openai/openai-node/releases/tag/v7.18.0) 于 2026-09-18 08:38（上海时间）发布，与 Python SDK 同步加入 Agent session 模型设置、audio-mini、托管 Responses WebSocket session 和 prompt-cache prewarming，并修复 WebSocket 结果校验与 header 默认值保留。 |
| Assistants API 迁移状态 | 无新增 | 已查官方文档与 SDK 发布记录；窗口内未见新的弃用里程碑或迁移公告。 |
| Realtime API | 邻近更新 | Python SDK 3.15.0 修正文档中的不存在类型导入，并澄清来电 SIP call ID；未见独立 Realtime 产品发布。 |
| 当前 GPT / reasoning / Codex 模型家族 | 无新增 | 未发现窗口内官方模型发布；不根据 SDK 类型名推断新模型已正式开放。 |

## Tier 2：ChatGPT 体验与创作工具

| 产品面 | 本轮状态 | 说明 |
|---|---|---|
| 浏览器 / Operator 能力 | 无新增 | 官方发布记录未见窗口内新公告。 |
| 桌面应用 | 无新增 | 未找到窗口内可核验的独立桌面版本说明。 |
| GPTs / GPT Store | 日期未确认 | [分享与发布 GPT 的官方帮助页](https://help.openai.com/en/articles/8798878) 表示计划退役 custom GPTs，并将迁移体验目标日期设为 9 月 17 日；页面没有具体时刻，且明确说明可能分阶段到账户或工作区，不能据此断言本窗口内已普遍完成。 |
| Canvas | 无新增 | 官方发布记录未见窗口内新公告。 |
| Sora / 视频 | 无新增 | 官方发布记录未见窗口内新公告。 |
| GPT Image / DALL·E | 无新增 | 未找到可由官方原文确认的窗口内发布；二手“Images 2.5”说法缺少官方对应页，未采信。 |
| Voice | 已随 Codex 更新 | Codex 0.155.0 增加实验性语音会话；ChatGPT Voice 未见独立公告。 |
| Connectors / MCP | 已随 Codex 更新 | Codex 0.155.0 增加受支持 Mac 上 MCP 请求的 Touch ID 验证，并改善 OAuth 过期后的重连提示。 |

## Tier 3：企业、教育、政府、科学与安全

- **安全（较旧背景，窗口内获得可信二手跟进）**：OpenAI 在 9 月 16 日发布[模型失配报告框架](https://openai.com/index/model-misalignment-reporting-framework/)，披露六类训练或评估中的异常行为。原文只有日期、不能确认是否落在本轮 24 小时窗口；但 [AP 于 2026-09-17 11:57（上海时间）的报道](https://apnews.com/article/089e75b95bc935af092da7b79d92706d) 明确落在窗口内，因此保留为安全观察信号，而不把六个案例描述为本轮新发生的生产事故。
- **Business / Enterprise / Edu**：除下方 ChatGPT for Word 的日期未确认候选外，未找到窗口内可核验的独立公告。
- **Gov / Science / 行业方案**：未发现窗口内官方新发布。

## 官方更新（由新到旧）

1. [openai-python 3.15.0](https://github.com/openai/openai-python/releases/tag/v3.15.0)：开发者 API 类型与 WebSocket/缓存能力扩展。
2. [openai-node 7.18.0](https://github.com/openai/openai-node/releases/tag/v7.18.0)：与 Python SDK 同步的 Agent session 与 Responses WebSocket 能力。
3. [Codex 0.155.0](https://github.com/openai/codex/releases/tag/rust-v0.155.0)：语音、Agent 管理、MCP 验证、daemon 恢复及安全加固。
4. [Agents SDK Python 0.22.3](https://github.com/openai/openai-agents-python/releases/tag/v0.22.3)：以审批、session、sandbox 与 tracing 修复为主。

## Love

窗口内没有找到同时具备明确发布时间、足够样本量和可复核上下文的正向社区讨论。官方公告不计作正向口碑，因此本轮不硬凑“Love”。

## Hate

- [Reddit 用户报告 Codex 多端持续显示模型容量不足](https://www.reddit.com/r/codex/comments/1wiymd4/10_days_straight_of_selected_model_is_at_capacity/)；帖子日期为 9 月 17 日但缺少可核验的精确时刻，且属于个案自述，不能外推为整体服务状态。
- [Reddit 用户以本地遥测质疑 Codex Plus 配额消耗](https://www.reddit.com/r/codex/comments/1wi848r/codex_plus_usage_investigation_5_trivial_tasks/)；该帖发表于 9 月 16 日，已超出或可能超出窗口，仅作为邻近口碑信号，不能视为官方计费事实。

## 口碑判断

- **倾向：谨慎偏负；置信度：低。** 证据主要是两个 Reddit 自述，主题集中在容量与配额消耗；缺少官方事故说明、代表性抽样或可重复测试。
- 开发者侧的四个官方 release 显示工具链仍在快速迭代，但发布本身不能替代用户满意度证据。

## 比较与竞品信号

本窗口未找到具名评测或可复现实验，足以支持 Codex 相对 Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH、OpenCode、Aider、Continue 或 Roo Code 的“追平/超过”结论。Codex 0.155.0 的语音、Agent 管理和 daemon 恢复可作为产品方向信号；开源 harness 的完整扫描留给开源专题页。

## 日期未确认

- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 记录 9 月 17 日推出 ChatGPT for Word，可在 Word 侧栏草拟、总结、改写并调整标题/格式，面向所有 ChatGPT 计划；官方页面未给具体时刻，无法确认是否晚于本窗口起点。
- [分享与发布 GPT 的官方帮助页](https://help.openai.com/en/articles/8798878) 将 custom GPT 迁移体验的目标日期写为 9 月 17 日，但没有具体时刻，且是分阶段目标，不等于所有账户已完成迁移。

## 观察池

- 模型失配框架原文发布日期为 9 月 16 日，具体时刻不明；窗口内的 AP 跟进证明其持续形成公共讨论，但不改变原始事件的日期证据状态。
- Reddit 的容量和配额帖子均为未经独立验证的用户自述；后续应对照 OpenAI Status、帮助中心配额说明和更多独立样本。

## 来源链接

- [Codex 0.155.0](https://github.com/openai/codex/releases/tag/rust-v0.155.0)
- [Agents SDK Python 0.22.3](https://github.com/openai/openai-agents-python/releases/tag/v0.22.3)
- [openai-python 3.15.0](https://github.com/openai/openai-python/releases/tag/v3.15.0)
- [openai-node 7.18.0](https://github.com/openai/openai-node/releases/tag/v7.18.0)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [分享与发布 GPT](https://help.openai.com/en/articles/8798878)
- [OpenAI 模型失配报告框架](https://openai.com/index/model-misalignment-reporting-framework/)
- [AP：OpenAI 披露异常模型行为](https://apnews.com/article/089e75b95bc935af092da7b79d92706d)
- [Reddit：Codex 容量不足个案](https://www.reddit.com/r/codex/comments/1wiymd4/10_days_straight_of_selected_model_is_at_capacity/)
- [Reddit：Codex Plus 配额遥测个案](https://www.reddit.com/r/codex/comments/1wi848r/codex_plus_usage_investigation_5_trivial_tasks/)

## 采集状态

- 已检查：OpenAI News / Research、OpenAI Developers 文档与 API Reference、ChatGPT Release Notes/帮助中心、OpenAI Status、五个官方 GitHub release 入口，以及 Reddit、Hacker News、X、YouTube、AP 和可信技术媒体检索。
- 失败来源：X 未登录检索不稳定；YouTube 未发现可交叉验证的新视频；Hacker News 未找到具独立信息量的窗口内讨论；Status 页面未发现可明确归入窗口的新事故。
- 初始候选数：**14**；保留来源数：**10**；二次补搜：**否**（最终来源非零）。

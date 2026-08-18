---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-18T00:00:00+08:00"
updatedAt: "2026-08-18T13:15:40+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
image: "https://i.ytimg.com/vi/eXBFnfrt2gU/maxresdefault.jpg"
imageAlt: "CNBC 对 OpenAI 总裁 Greg Brockman 的视频访谈画面"
imageSource: "https://www.youtube.com/watch?v=eXBFnfrt2gU"
imageCaption: "题图来源：CNBC Television / YouTube"
tags:
  - "观察池"
  - "日期未确认"
  - "未证实传闻"
  - "Agent"
  - "API"
  - "ChatGPT"
  - "Cloud"
  - "Codex"
  - "Company"
  - "Deprecation"
  - "Desktop"
  - "GPT-5.6"
  - "Infrastructure"
  - "MCP"
  - "OpenAI"
  - "Pricing"
  - "Realtime API"
  - "Responses API"
  - "Safety"
  - "SDK"
  - "Security"
  - "Sentiment"
  - "Sora"
---

## 今日概览

扫描窗口：2026-08-17 13:15 至 2026-08-18 13:15（Asia/Shanghai）。窗口内确认 1 篇 OpenAI 官方文章、1 段 OpenAI 总裁原始访谈、Codex 一个 alpha 构建，以及 Python、Node.js、Ruby、Java、Go 五个官方客户端 SDK 版本。SDK 变更集中在 Bedrock Runtime、Responses/Realtime 流式事件、MCP/WebSocket 类型与安全修复；这些是客户端发布，不等同于同日推出新的服务端产品。上一轮的 PORTS-Pike 与政策资助文章已滑出 24 小时主窗口，本轮移除。社区样本继续呈现实际工作价值与配额/稳定性抱怨并存，同时出现一份质疑“配额被削减”判断的用户自算样本。

## Tier 1

| 产品 | 状态 |
|---|---|
| Codex CLI | [0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) 于 2026-08-18 03:27 +08:00 发布；发布页仅有版本标识，不推断功能 |
| VS Code / JetBrains 集成 | 无经官方原文确认的窗口内新增 |
| Codex cloud/remote tasks 与 PR agents | 官方无新增；观察池有单用户报告云任务从 UI 消失 |
| ChatGPT agentic mode | 无产品发布；《The Defender’s Window》提供了 ChatGPT Work 用于授权安全检查的官方案例 |
| 当前官方 agent-building 产品 | 无新增 |
| Responses API | Python、Node.js、Java SDK 同步 shell/streaming、Responses 类型或流错误处理；见各发布说明 |
| Agents SDK Python / TypeScript | 官方 GitHub releases 最新版本均在主窗口之前，无新增 |
| Assistants API 弃用/迁移 | 官方 deprecations 未见窗口内新增 |
| Realtime API | Node.js SDK 增加 WebSocket stream ID，并修复多项 Realtime 重定向、凭据与错误处理问题；属于客户端更新 |
| 当前官方 GPT、reasoning、Codex 模型家族 | Node.js SDK 加入 Daybreak 与 `gpt-5.6-cyber` 标识；官方模型目录已列出相关模型，因此仅记为 SDK 类型同步，不写成同日模型发布 |

## Tier 2

| 范围 | 状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| Desktop apps | 官方无新增；Windows 性能问题进入观察池 |
| GPTs / GPT Store、Canvas、GPT Image / DALL·E | 无新增 |
| Sora / video | Node.js SDK 标记 Sora 视频 API 弃用；[官方弃用页](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)显示这是 2026-03-24 已通知、计划 2026-09-24 移除的既有状态，不是窗口内新公告 |
| Voice | 无 ChatGPT Voice 新功能；Node.js SDK 有麦克风泄漏、播放管线死锁等客户端修复 |
| Connectors / MCP | Node.js 与 Ruby SDK 同步 structured MCP / WebSocket 错误类型；无 ChatGPT 连接器新发布 |

## Tier 3

- **安全 / Science 邻近信号**（2026-08-17 13:30 +08:00）：OpenAI 发布 [The Defender’s Window](https://openai.com/index/the-defenders-window)，讨论进攻与防守两端的 AI 能力，并披露其内部以 Codex、安全插件和模型协助代码与基础设施防护的做法。这是官方观点与案例，不是独立效果评测。
- **基础设施 / 公司访谈**（2026-08-17 21:26 +08:00）：CNBC 发布对 OpenAI 总裁 Greg Brockman 的[原始访谈](https://www.youtube.com/watch?v=eXBFnfrt2gU)，主题涵盖 AI 网络安全、领导层、AI 经济与资本开支。可核实采访对象、标题和发布时间；本页不把节目标题中的“compute is the new oil”扩展成量化结论。

## 官方更新（新到旧）

- **Codex 0.148.0-alpha.21**（03:27）：仅能核实版本与发布时间，无功能清单。
- **OpenAI Go v3.52.0**（03:19）：加入 Bedrock Runtime endpoint 支持。[发布页](https://github.com/openai/openai-go/releases/tag/v3.52.0)
- **OpenAI Node.js v7.5.0**（03:13）：加入 Bedrock Runtime、Daybreak / `gpt-5.6-cyber` 标识、ServiceTier、WebSocket IDs、structured MCP，并包含 Responses、Realtime、streaming 与凭据处理修复。[发布页](https://github.com/openai/openai-node/releases/tag/v7.5.0)
- **OpenAI Python v3.2.0**（03:13）：加入 Bedrock Runtime endpoint、shell call streaming events 和新的 service/image 类型。[发布页](https://github.com/openai/openai-python/releases/tag/v3.2.0)
- **OpenAI Ruby v0.80.0**（03:12）：加入 Bedrock Runtime，以及 Ultrafast、structured MCP 和 WebSocket 错误类型。[发布页](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)
- **OpenAI Java v4.52.0**（03:10）：加入一等 Bedrock Runtime 支持、shell call streaming events 和 image partial fields。[发布页](https://github.com/openai/openai-java/releases/tag/v4.52.0)
- 其后为上面的 CNBC 访谈与 8 月 17 日 13:30 的官方安全文章。

## Love

- **日期未确认、单一用户陈述**：一位无编程经验的教师称 Codex 帮其迭代英语学习应用并生成辅助教学音频，体现了编程之外的使用价值；未独立验证产物质量。[讨论](https://www.reddit.com/r/ChatGPT/comments/1vql0l1/i_now_get_the_codex_reset_excitement/)

## Hate

- **日期未确认、社区争议**：Pro 用户抱怨高价套餐周用量不足；评论同时指出 Ultra、超大上下文、长时间 agent 与高频 MCP tool calls 会放大消耗，因而不能把原因归结为单一配额调整。[讨论](https://www.reddit.com/r/codex/comments/1vr2osw/pro_20x_is_a_joke/)

## 情绪

**44/100，低置信度。** 计分仍只采用一正一负两条可直接阅读的社区帖子；负面样本围绕配额价值且争议更集中，正面样本展示了明确的时间节省用例。新出现的[用户自算样本](https://www.reddit.com/r/codex/comments/1vr3yfe/i_have_bad_news/)认为 7 月至 8 月每 1% 用量的 API 等值大致稳定，但评论质疑其 reset 与百分比口径，故仅作为反向证据降低结论置信度，不直接改分。观察池中的故障报告不并入分数；官方发布不计作正向情绪。

## 对比

- **语言 SDK**：五个客户端版本都覆盖 Bedrock Runtime，但 Python/Java 更侧重 shell streaming 类型，Node.js 同步面最广且包含大量安全与流处理修复，Ruby 同步 MCP/WebSocket 类型，Go 发布说明仅列 Bedrock endpoint。版本说明不能替代跨语言稳定性基准。
- **配额争议内部对照**：一条帖子称 Pro 20x 三天即耗尽；另一条以个人 rollout 日志估算每 1% API 等值在多个时段大致稳定。两者都不是官方配额说明，任务结构、模型档位、reset 与换算方法也不统一，因此只能说明社区对原因没有共识。
- **Codex 与替代方案**：配额争议帖评论有人把 Codex 成本与 Claude 或中国模型比较，但没有统一任务、模型、推理档位和计费口径，因此只保留为主观迁移信号，不下性能或性价比结论。

## 日期未确认

以下页面仅显示相对时间或缺少稳定的绝对发布时间，相关内容不写成窗口内已确认事实：

- 教师的 Codex 教学与音频用例。
- Pro 用量限制争议。
- Windows 桌面端 CPU / 鼠标卡顿报告。
- Codex 云任务从 UI 消失的单用户报告。
- 用户基于个人 rollout 日志对“配额削减”说法的反向检验。
- 冒充 Codex 安装入口的恶意广告报告。

## 观察池

- **Windows 桌面端性能**：用户称版本 `26.810.4967.0` 在比较 Chrome plugin 路径时反复重建 junction，导致高磁盘读取与 CPU 占用；两名回复者称禁用插件或临时 workaround 有效，但尚无 OpenAI 官方确认，且绝对日期未核实。[帖子](https://www.reddit.com/r/codex/comments/1vorxvv/workaround_for_latest_windows_cpu_mouse_lag_issue/)
- **Codex cloud 任务可见性**：单一用户报告部分 GitHub repo 任务短暂出现后从主页消失，而 README 任务仍能创建并合并 PR；尚无官方状态页或可复现结论。[帖子](https://www.reddit.com/r/codex/comments/1volof5/codex_tasks_keep_disappearing_from_ui_but_only/)
- **仿冒安装入口 / 安全提醒**：单一用户称 Google sponsored result 将其带到冒充 Codex 的页面，并诱导执行混淆后的远程 shell 命令；帖子展示了命令结构，但恶意载荷、投放范围及 OpenAI 是否知情均未独立确认。[帖子](https://www.reddit.com/r/OpenAI/comments/1vqorxl/warning_sponsored_google_result_for_openai_codex/)

## 未证实传闻

- Hacker News 的重复提交指向 [OpenRouter 页面](https://openrouter.ai/openai/gpt-5.6-sol)，该页显示 OpenAI 路由的 GPT-5.6 Sol 为“50% off”、$2.50 / $15；但 [OpenAI 官方模型页](https://developers.openai.com/api/docs/models/gpt-5.6-sol)在本轮仍显示 $5 / $30，且没有窗口内官方降价公告。因此不能写成 OpenAI 已降价，继续观察其是否为渠道促销、页面同步差异或未来变更。

## 来源

- [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
- [OpenAI Go v3.52.0](https://github.com/openai/openai-go/releases/tag/v3.52.0)
- [OpenAI Node.js v7.5.0](https://github.com/openai/openai-node/releases/tag/v7.5.0)
- [OpenAI Python v3.2.0](https://github.com/openai/openai-python/releases/tag/v3.2.0)
- [OpenAI Ruby v0.80.0](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)
- [OpenAI Java v4.52.0](https://github.com/openai/openai-java/releases/tag/v4.52.0)
- [The Defender’s Window](https://openai.com/index/the-defenders-window)
- [Greg Brockman CNBC 原始访谈](https://www.youtube.com/watch?v=eXBFnfrt2gU)
- [Sora 2 / Videos API 弃用状态](https://developers.openai.com/api/docs/deprecations#2026-03-24-sora-2-video-generation-models-and-videos-api)
- [教师的 Codex 用例](https://www.reddit.com/r/ChatGPT/comments/1vql0l1/i_now_get_the_codex_reset_excitement/)
- [Pro 用量限制争议](https://www.reddit.com/r/codex/comments/1vr2osw/pro_20x_is_a_joke/)
- [配额削减说法的用户自算反向样本](https://www.reddit.com/r/codex/comments/1vr3yfe/i_have_bad_news/)
- [Windows CPU / 鼠标卡顿观察](https://www.reddit.com/r/codex/comments/1vorxvv/workaround_for_latest_windows_cpu_mouse_lag_issue/)
- [Codex 云任务消失观察](https://www.reddit.com/r/codex/comments/1volof5/codex_tasks_keep_disappearing_from_ui_but_only/)
- [冒充 Codex 的恶意广告报告](https://www.reddit.com/r/OpenAI/comments/1vqorxl/warning_sponsored_google_result_for_openai_codex/)
- [OpenRouter GPT-5.6 Sol 页面](https://openrouter.ai/openai/gpt-5.6-sol)
- [OpenAI GPT-5.6 Sol 官方模型页](https://developers.openai.com/api/docs/models/gpt-5.6-sol)

## 采集状态

- 已检查：OpenAI News RSS 与原文、ChatGPT Release Notes、API changelog / models / deprecations、Codex changelog、Codex 与五个官方客户端 SDK、两套 Agents SDK、OpenAI Status、Reddit 五个社区、Hacker News、X、YouTube 及 CNBC 原始访谈。
- 失败来源：OpenAI News HTML 首页与 ChatGPT Release Notes 403；Reddit JSON 403（已用 HTML 替代）；HN 单条讨论页 429；X 页面无可提取正文；OpenAI YouTube 频道页信息不足（已由 HN + 视频原页补获访谈）；CNBC / WSJ 俄亥俄数据中心报道正文 403，未据此新增事实。
- 初始候选：22；保留引用来源：17；二次补搜：否（最终来源不为 0）。

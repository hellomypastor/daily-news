---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-12T00:00:00+08:00"
updatedAt: "2026-09-12T10:47:25+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "1% of ChatGPT Work (mobile/web) turns are failing for existing threads"
featuredUrl: "https://status.openai.com/incidents/01M28MEQWTQJDRCRPFD9FWQ0H3"
featuredSummary: "ChatGPT Work 移动端/网页端既有线程约 1% 回合失败，官方状态页显示已恢复。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-12 01:57（状态页显示时区未注明）"
featuredTags: ["ChatGPT Work","服务状态"]
tags:
  - "服务状态"
  - "工程"
  - "观察池"
  - "日期未确认"
  - "社区样本"
  - "无新增"
  - "Agent"
  - "Agents API"
  - "ChatGPT"
  - "ChatGPT Work"
  - "Codex"
  - "Codex CLI"
  - "Connectors"
  - "Enterprise"
  - "Finance"
  - "GPT-5.6 Sol"
  - "Hate"
  - "Love"
  - "OpenAI"
  - "Realtime API"
  - "Responses API"
  - "Voice"
---

## 今日概览

采集窗口：**2026-09-11 10:47:25 至 2026-09-12 10:47:25（Asia/Shanghai）**。本轮可严格确认的新信号主要来自服务状态：GPT-5.6 Sol API、欧洲 ChatGPT，以及 ChatGPT Work 既有线程先后出现错误，状态页均显示已经恢复。OpenAI 同日另发布两篇工程/客户案例文章，但页面只给出 9 月 11 日日期、没有时刻，无法判断是否在窗口起点之后，故放入“日期未确认”。

## Tier 1：编码、Agent 与开发平台

| 产品线 | 本轮状态 | 证据与判断 |
|---|---|---|
| Codex CLI | 无新增 | 已检查 [openai/codex Releases](https://github.com/openai/codex/releases)；最新可见正式版为 9 月 9 日，早于窗口。 |
| VS Code / JetBrains 集成 | 无新增 | 官方新闻、Codex 发布页及文档检索未见窗口内独立公告。 |
| Codex cloud / remote tasks / PR agents | 无新增 | 状态页未见本窗口内 Codex 专属事故或发布；产品更新检索无新增。 |
| ChatGPT agentic mode / Work | 有服务事件 | [ChatGPT Work 既有线程故障](https://status.openai.com/incidents/01M28MEQWTQJDRCRPFD9FWQ0H3)自状态页显示的 9 月 11 日 16:22 起调查，约 1% 的移动端/网页端既有线程回合失败，9 月 12 日 01:57 标记恢复；状态页未注明显示时区。 |
| Agents API / 当前官方 Agent 构建产品 | 日期未确认 | [Agents API 公测公告](https://openai.com/index/introducing-the-agents-api/)标注 9 月 10 日但无时刻，可能在窗口外；作为观察背景保留，不计作已确认 24 小时更新。 |
| Responses API | 有服务事件 | [GPT-5.6 Sol API 错误事故](https://status.openai.com/incidents/01M27VK1VN54RQJGJEHB5JTQJJ)明确涉及 Chat Completions 与 Responses；状态页显示 9 月 11 日 09:08 识别、11:21 恢复，但未注明显示时区。 |
| Agents SDK Python / TypeScript | 无新增 | 已检查 Python、TypeScript 官方仓库 release、commit 与 changelog；未发现窗口内可核验正式发布。 |
| Assistants API 弃用 / 迁移 | 无新增 | 官方文档与更新检索未见窗口内迁移日期或政策变化。 |
| Realtime API | 日期未确认 | [GPT-Live-1 API 公告](https://openai.com/index/introducing-gpt-live-1-in-the-api/)标注 9 月 10 日但无时刻，不能确认是否落入本窗口。 |
| 当前 GPT / reasoning / Codex 模型族 | 有服务事件 | GPT-5.6 Sol API 在状态页出现已恢复的错误事件；未发现窗口内新模型发布。 |

## Tier 2：消费产品与多模态

| 产品线 | 本轮状态 |
|---|---|
| 浏览器 / Operator 类能力 | 无新增；官方新闻、帮助中心与社区抽样未见可核验发布。 |
| 桌面应用 | 无新增；未见 macOS、Windows 客户端窗口内正式发布。 |
| GPTs / GPT Store | 无新增；开发者社区出现插件目录可见性反馈，但缺少官方确认，列入观察池。 |
| Canvas | 无新增。 |
| Sora / video | 无官方新增；社区有审核拦截个案，证据不足以代表系统性变化。 |
| GPT Image / DALL·E | 无官方新增；本窗口未见独立更新。 |
| Voice / Realtime | 无可确认新增；GPT-Live-1 仅能确认日期为 9 月 10 日，列入日期未确认。 |
| Connectors / MCP / Library | 日期未确认；[ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)的 9 月 10 日条目提到 Data plugin 及 Box、Dropbox、SharePoint 进入 Library，但页面无具体时刻。 |

## Tier 3：企业、行业与安全

- **企业 / Business / Edu：** [Data agent 官方介绍](https://openai.com/index/put-data-to-work/)标注 9 月 10 日，介绍连接企业数据、调查变化并生成交互式看板；因无发布时间点，列为日期未确认。
- **金融行业：** [ChatGPT for Financial Services](https://openai.com/index/introducing-chatgpt-financial-services/)同样仅标注 9 月 10 日，内容包括内置金融数据、GPT-6 Astra 与企业治理能力；时间边界未确认。
- **基础设施工程：** [Habitat 存储平台工程文章](https://openai.com/index/scaling-storage-one-billion-users-part-one/)标注 9 月 11 日，介绍支撑超过十亿 ChatGPT 用户的在线存储扩展，但没有小时级发布时间，列入日期未确认。
- **客户案例 / 编码 Agent：** [Cognition 使用 GPT-6 Astra 改进 Devin 测试](https://openai.com/index/cognition-devin-testing-with-astra/)标注 9 月 11 日，称 Devin 会返回运行录像与测试范围报告；无小时级时间，列入日期未确认。
- **安全 / Gov / Science：** 已检查官方 News、Research 与安全入口，未见窗口内可核验独立更新。

## 官方更新（按可核验状态排序）

1. [ChatGPT Work 既有线程约 1% 回合失败](https://status.openai.com/incidents/01M28MEQWTQJDRCRPFD9FWQ0H3)：影响移动端和网页端，状态页已标记恢复。
2. [GPT-5.6 Sol API 错误升高](https://status.openai.com/incidents/01M27VK1VN54RQJGJEHB5JTQJJ)：影响 Chat Completions 与 Responses，扩容后恢复。
3. [欧洲 ChatGPT 用户错误升高](https://status.openai.com/incidents/01M27Q9GH7WVKNA61ZR3RDMSY5)：状态页显示 9 月 11 日 07:53 开始处置、10:16 恢复；页面未注明显示时区。

## Love

- [r/codex 的感谢帖](https://www.reddit.com/r/codex/comments/1wcv024/thank_you_openai/)称 Astra、Codex Voice 和记忆能力显著提升了个人开发效率。该帖显示为 9 月 10 日，已早于或接近窗口边界，仅作为社区观察样本，不作产品事实。

## Hate

- [OpenAI Developer Community 最新主题页](https://community.openai.com/latest?no_definitions=true&page=1)在 9 月 11 日可见关于 Codex rate limit、插件搜索可见性、API 付款和连接中断的反馈。它们是用户报告，未得到 OpenAI 逐项确认，不能外推为全体用户状况。
- 同一社区样本还包含 ChatGPT Work 下载、Sora API 审核和语音可访问性问题；本轮不将单个帖子当作已证实故障。

## 情绪判断

**混合、低至中等置信度。** 正面样本强调 Codex/Astra 带来的开发效率与记忆体验；负面样本集中在配额、连接、插件可见性与付款。可访问样本量有限，且官方状态页确有三起已恢复事件，因此只能说明“本轮社区反馈分化且可靠性体验承压”，不能推断总体满意度变化。官方发布与状态公告不计入正面情绪。

## 对比与生态观察

- Agents API 的托管 Codex harness、上下文压缩、工具搜索和多 Agent 能力，使 OpenAI 更直接地进入托管 Agent 基础设施竞争；但公告日期无法确认落入本窗口。
- 社区讨论仍会把 Codex 与 Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH 等并列比较。本轮未找到可复现评测，故不做“追平”或“超过”判断；后三者的完整动态应看开源 Harness 专题。

## 日期未确认

- 9 月 11 日两篇官方文章（Habitat 存储工程、Cognition/Devin 客户案例）均无小时级发布时间，无法证明在 10:47:25 +08:00 之后发布。
- 9 月 10 日的 Agents API、Data agent、ChatGPT for Financial Services、GPT-Live-1 与 ChatGPT Release Notes 条目可能因发布时区不同与本窗口部分重叠，但缺少时刻，均不列为确定 24 小时新增。
- 状态页给出精确钟点但未在页面注明显示时区；事件日期与本轮窗口相交，正文保留原显示时刻并明确这一限制。

## 观察池

- 开发者社区关于 Codex 配额、插件目录搜索与 API 付款的报告需要官方状态或可复现证据进一步验证。
- Reddit 正面帖可作为使用感受信号，但单帖不能代表总体口碑。
- 未发现本窗口内可核验的 Assistants API 迁移政策、Codex CLI/IDE 正式版、Agents SDK 正式版或新模型发布。

## 来源链接

- [OpenAI：Habitat 存储平台工程文章](https://openai.com/index/scaling-storage-one-billion-users-part-one/)
- [OpenAI：Cognition 使用 GPT-6 Astra 改进 Devin 测试](https://openai.com/index/cognition-devin-testing-with-astra/)
- [OpenAI Status：ChatGPT Work 既有线程错误](https://status.openai.com/incidents/01M28MEQWTQJDRCRPFD9FWQ0H3)
- [OpenAI Status：GPT-5.6 Sol API 错误](https://status.openai.com/incidents/01M27VK1VN54RQJGJEHB5JTQJJ)
- [OpenAI Status：欧洲 ChatGPT 错误](https://status.openai.com/incidents/01M27Q9GH7WVKNA61ZR3RDMSY5)
- [OpenAI：Agents API](https://openai.com/index/introducing-the-agents-api/)
- [OpenAI：GPT-Live-1](https://openai.com/index/introducing-gpt-live-1-in-the-api/)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [OpenAI：Data agent](https://openai.com/index/put-data-to-work/)
- [OpenAI：ChatGPT for Financial Services](https://openai.com/index/introducing-chatgpt-financial-services/)
- [GitHub：openai/codex Releases](https://github.com/openai/codex/releases)
- [Reddit：Thank you OpenAI](https://www.reddit.com/r/codex/comments/1wcv024/thank_you_openai/)
- [OpenAI Developer Community：Latest](https://community.openai.com/latest?no_definitions=true&page=1)

## 采集状态

- 已检查：OpenAI News/Index、ChatGPT Release Notes、开发者文档与更新、OpenAI Status、Codex 与 Agents SDK 官方 GitHub、Developer Community、Reddit、Hacker News，以及官方 X/YouTube/LinkedIn 搜索。
- 失败入口：X 无完整可核验时间线；YouTube 未找到窗口内可独立核时的官方上传；Hacker News 无足够证据的新条目；r/ChatGPTCoding 无可访问的相关结果；官方文章 HTML 未暴露稳定且可直接核验的公开 OpenGraph 图片 URL。
- 初始候选：15；保留来源：13；二次补搜：否（最终来源非 0）。
- 配图：未配置。已主动检查官方文章的公开配图入口，但未取得稳定、来源可确认的直链，宁可纯文字展示。

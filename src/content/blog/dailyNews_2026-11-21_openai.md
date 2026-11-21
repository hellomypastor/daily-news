---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-11-21T00:00:00+08:00"
updatedAt: "2026-11-21T10:46:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "GPT-Live-1.1 Model"
featuredUrl: "https://developers.openai.com/api/docs/models/gpt-live-1.1"
featuredSummary: "模型页记录 GPT-Live-1.1 的全双工、多语、后端委派、接口、能力边界和按分钟价格。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-11-20 可访问（模型页未标首发时刻）"
featuredTags: ["GPT-Live-1.1","Model","Pricing","Agent"]
featuredImage: "https://developers.openai.com/og/api/docs/models/gpt-live-1.1.png"
featuredImageAlt: "OpenAI Developers 的 GPT-Live-1.1 模型文档预览图"
featuredImageCaption: "图片来源：OpenAI Developers"
tags:
  - "观察池"
  - "日期边界"
  - "日期未确认"
  - "Agent"
  - "API"
  - "Benchmark"
  - "ChatGPT"
  - "Codex"
  - "Community"
  - "GPT-Live-1.1"
  - "Live API"
  - "Mobile"
  - "Model"
  - "OpenAI"
  - "Pricing"
  - "Standby"
  - "Voice"
---

## 今日概览

本轮窗口为 **2026-11-20 10:46 至 2026-11-21 10:46（Asia/Shanghai）**。窗口内可核实的 OpenAI 主更新集中在语音 Agent：GPT-Live-1.1 开放 API，并为 GPT-Live-1 / 1.1 的 WebRTC 会话新增 standby；官方称新版改善多语发音、口音一致性与转写，并可把复杂工作委派给后端 Agent。Codex、Responses API、Agents SDK 与通用 ChatGPT Agent 未发现窗口内独立发布。

## Tier 1：编码、Agent 与开发者平台

| 产品 / 能力 | 本轮状态 | 说明 |
|---|---|---|
| Codex CLI | 无新增 | 官方仓库 releases 未发现窗口内新的稳定版。 |
| VS Code / JetBrains 集成 | 无新增 | 未发现窗口内独立插件版本或功能公告。 |
| Codex cloud / remote tasks / PR agents | 无新增 | 官方文档、开发者博客与公告入口未见窗口内新发布。 |
| ChatGPT agentic mode | 无新增 | 未发现窗口内通用 Agent 模式公告。 |
| 当前官方 Agent 构建产品 | 无新增 | Responses API / Agents API 与官方指南未见窗口内独立变更。 |
| Responses API | 无新增 | API changelog 未列出窗口内新条目。 |
| Agents SDK Python / TypeScript | 无新增 | 两个官方 SDK 未发现窗口内稳定 release。 |
| Assistants API 迁移 | 无新增 | 未发现弃用或迁移时间线变化。 |
| Realtime / GPT-Live | **有更新** | GPT-Live-1.1 可通过 Live API 使用；WebRTC standby 可在静默时暂停推理、保留连接并在用户再次说话时恢复。[API Changelog](https://developers.openai.com/api/docs/changelog) |
| 当前 GPT / reasoning / Codex 模型族 | 无新文本 / 编码型号 | 本轮只确认语音模型 GPT-Live-1.1 的 API 开放；未发现新的通用 GPT 或 Codex 型号。 |

## Tier 2：ChatGPT 产品面

| 产品组 | 本轮状态 |
|---|---|
| Browser / Operator、GPTs / GPT Store、Canvas | 未发现窗口内独立新增。 |
| Desktop apps | 未发现窗口内独立发布；11 月 19 日移动端改版因具体时刻不明列入“日期未确认”。 |
| Sora / video、GPT Image / DALL·E | 未发现窗口内官方新发布。 |
| Voice | **开发者侧有更新**：GPT-Live-1.1 支持全双工语音、后端委派与 standby；官方模型页列出 active 每分钟 0.05 美元、standby 每分钟 0.02 美元，后端模型和工具另计。[模型页](https://developers.openai.com/api/docs/models/gpt-live-1.1) |
| Connectors / MCP / Plugins | 未发现窗口内新的协议或目录公告。 |

<figure class="source-image">
  <a href="https://developers.openai.com/api/docs/models/gpt-live-1.1"><img src="https://developers.openai.com/og/api/docs/models/gpt-live-1.1.png" alt="OpenAI Developers 的 GPT-Live-1.1 模型文档预览图" loading="lazy" /></a>
  <figcaption><a href="https://developers.openai.com/api/docs/models/gpt-live-1.1">图片来源：OpenAI Developers</a></figcaption>
</figure>

## Tier 3：企业、行业与安全

- 企业、Business、Edu、Gov、Science 与安全入口未发现窗口内独立新发布。
- GPT-Live-1.1 的 standby 为持续语音 Agent 提供了明确的空闲计费状态，但它是 API 能力，不代表新的企业套餐或托管业务上线。

## 官方更新（由新到旧）

1. **GPT-Live-1.1 API 与 standby**：OpenAI Developer Community 的官方公告显示帖子发布于 11 月 20 日 04:12（论坛显示时间）；模型能在说话时继续聆听，并可把复杂推理或工具流程交给后端。standby 的空闲超时可设为 5–60 秒，WebRTC 连接保持开启。[官方社区公告](https://community.openai.com/t/gpt-live-1-1-has-arrived-in-the-api/1418537)
2. **技术边界**：模型页显示 GPT-Live-1.1 使用 `v1/live/sessions`，支持 function calling，但不支持图像 / 视频输入与 structured outputs；并建议应用自行检查权限与动作确认。

## Love

- 一家语音 Agent 开发团队发布同日对照测试，报告 GPT-Live-1.1 相比 GPT-Live-1 的起声中位时间为 1.0 秒对 1.3 秒，并在 205 个真实通话片段的“给出企业批准回复”测试中取得 43% 对 34%。这是具名样本与同日对照，说明脚本遵循可能改善，但属于厂商自测而非独立基准。[社区测试](https://www.reddit.com/r/OpenAI/comments/1y1caw4/gptlive11_vs_gptlive1_our_phonecall_test_results/)

## Hate

- 同一测试仍观察到拼写姓名、分段回读电话号码及重复询问已回答问题；50 个模拟通话场景各只运行一次，不能据此推导稳定失败率。
- standby 只降低静默阶段的语音会话费率，后端模型和工具仍另行计费；实际总成本取决于委派频率和工作流长度。

## 口碑判断

**语音 Agent 的可用性信号偏正，但置信度低到中等。** 官方材料确认能力、接口和价格；社区只有一份带样本量的开发者自测，虽同时报告改善与失败案例，仍不足以代表广泛生产体验。官方公告不计作正面社区口碑。

## 对比与 Agent 生态

本轮没有独立、可复现的具名评测足以证明 Codex 或 OpenAI Agent 全面追平或超过 Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH。GPT-Live-1.1 的前台语音与后端 Agent 分离是架构能力，不等同于编码 Agent 排名；完整开源 harness 扫描留给开源专题页。

## 日期未确认

- **ChatGPT 新移动体验（官方日期 11 月 19 日，具体时刻未给）**：官方 release notes 称新版给 dot 独立标签页，并允许把 Codex、Projects、Images 等固定到标签栏；先面向符合条件的美国等地区成年 Pro 用户逐步推出。因无法确认是否落入本轮 24 小时窗口，仅作日期未确认候选。[ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- API Changelog 将 GPT-Live-1.1 条目标为 11 月 19 日，而官方社区公告显示 11 月 20 日 04:12；可能是文档记账日与公开公告时刻不同，因此正文只把 API 可用性作为已确认事实，不猜测精确上线分钟。

## 观察池

- 社区电话测试由语音 Agent 厂商自行完成，测试集、提示、音频链路与评分方法尚未经过第三方复现；性能数字不得外推为全行业结论。
- 新移动体验仍是分批推出且存在地区、年龄与计划限制，实际账户可见性可能不同。

## 来源链接

- [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
- [GPT-Live-1.1 模型页](https://developers.openai.com/api/docs/models/gpt-live-1.1)
- [GPT-Live-1.1 has arrived in the API](https://community.openai.com/t/gpt-live-1-1-has-arrived-in-the-api/1418537)
- [GPT-Live-1.1 vs GPT-Live-1：电话测试](https://www.reddit.com/r/OpenAI/comments/1y1caw4/gptlive11_vs_gptlive1_our_phonecall_test_results/)
- [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

## 采集状态

- 已检查：OpenAI News / Research / Safety、API changelog / models / Live / Responses / Realtime / Assistants、ChatGPT / Model / Enterprise / Edu release notes、Codex 与 Agents SDK GitHub、Developer Blog / Community、Status，以及 Reddit / HN / X / YouTube 抽样。
- 失败或受限：X 未登录时间线、Reddit 近期召回、YouTube 新事实召回及官方页面精确时刻存在限制；Codex 搜索索引未显示窗口内 release。
- 初始候选 **11** 条，最终保留 **5** 个来源；最终来源不为 0，未触发二次补搜。

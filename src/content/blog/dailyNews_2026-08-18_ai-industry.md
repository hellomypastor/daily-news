---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-08-18T00:00:00+08:00"
updatedAt: "2026-08-18T13:24:00+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
tags:
  - "Agent"
  - "Agent SDK"
  - "AI"
  - "Anthropic"
  - "API"
  - "Claude"
  - "Claude Code"
  - "Codex"
  - "Company"
  - "Deprecation"
  - "Education"
  - "Gemini"
  - "GitHub Action"
  - "Google"
  - "Industry"
  - "Infrastructure"
  - "Marketplace"
  - "MCP"
  - "OpenAI"
  - "Plugins"
  - "Realtime API"
  - "Research"
  - "Responses API"
  - "Safety"
  - "SDK"
  - "Security"
  - "Skills"
---

## 扫描结论

主窗口：2026-08-17 13:15 至 2026-08-18 13:15（Asia/Shanghai）；近两日补充窗口为 2026-08-16 13:15 至 2026-08-17 13:15，近三日补充窗口为 2026-08-15 13:15 至 2026-08-16 13:15。本轮在主窗口核实到 Anthropic 与 OpenAI 的 15 项官方发布、仓库维护或原始访谈信号；另保留一项旧公告在本窗口生效的 Google 模型下线信号。

## 优先动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Anthropic | [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234) | 官方 GitHub 发布 | 2026-08-18 04:20 +08:00，已核实 | 新增 GitLab MR、用量重置自动续跑，并包含 Remote Control、安全与可靠性修复。详见 Claude 专题页。 | 编码 Agent 的功能、权限与安全边界同步更新。 |
| Anthropic | [Claude Agent SDK TypeScript v0.3.234](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.234) | 官方 GitHub 发布 | 2026-08-18 04:21 +08:00，已核实 | 修正类型定义，并补充 VCS 目录事件、跨会话权限来源和 effort 初始化字段。详见 Claude 专题页。 | SDK 的事件与类型面变化会直接影响 Agent 集成。 |
| Anthropic | [Claude Code Action v1.0.194](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194) | 官方 GitHub 发布 | 2026-08-18 04:25 +08:00，已核实 | 加强删除路径与附件限制，修补 shell quoting 依赖漏洞，并改进浅克隆与 PR 评论上下文。详见 Claude 专题页。 | CI/CD 中的 Claude 集成获得一组明确的安全加固。 |
| OpenAI | [Go v3.52.0](https://github.com/openai/openai-go/releases/tag/v3.52.0)、[Node.js v7.5.0](https://github.com/openai/openai-node/releases/tag/v7.5.0)、[Python v3.2.0](https://github.com/openai/openai-python/releases/tag/v3.2.0)、[Ruby v0.80.0](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)、[Java v4.52.0](https://github.com/openai/openai-java/releases/tag/v4.52.0) | 官方 SDK 批量发布 | 2026-08-18 03:10–03:19 +08:00，已核实 | 五种 SDK 同步 Bedrock Runtime 支持及模型、Responses/streaming、MCP 等相关类型或事件，具体语言差异详见 OpenAI 专题页。 | 同时更新多语言 SDK，说明 API 能力正在跨生态同步落地。 |
| OpenAI | [The Defender’s Window](https://openai.com/index/the-defenders-window) | 官方安全文章 | 2026-08-17 13:30 +08:00，已核实 | OpenAI 说明其对 AI 网络安全攻防变化的判断与防护实践。详见 OpenAI 专题页。 | 文章给出厂商对 Agent 化安全能力和防御窗口的正式立场。 |
| OpenAI | [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21) | 官方 GitHub 预发布 | 2026-08-18 03:27 +08:00，已核实 | 官方发布页仅给出版本号，未提供变更说明，故不推断具体功能。详见 OpenAI 专题页。 | 版本存在与发布时间可确认，但应等待稳定版或 changelog。 |

## 常规动态

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Anthropic | [Add discernment-nudge skill](https://github.com/anthropics/skills/commit/f379e5ad66e2febc1616cf8d6284666fecbe514e) | 官方仓库提交 | 2026-08-18 01:23 +08:00，已核实 | 新增可选 Skill，以少量核验问题帮助用户检查将据此行动的回答。详见 Claude 专题页。 | 将回答后的审慎核验封装成可复用工作流。 |
| Anthropic | [Add claude-academy-guide skill](https://github.com/anthropics/skills/commit/89dcaa3a283f79ed84fd8fe53e2208b9442a6427) | 官方仓库提交 | 2026-08-17 21:03 +08:00，已核实 | 新增按需读取 Claude Academy 实时目录的课程推荐 Skill。详见 Claude 专题页。 | 展示官方 Skills 对学习与内容导航场景的扩展。 |
| Anthropic | [官方插件目录提交](https://github.com/anthropics/claude-plugins-official/commits/main/) | 官方仓库维护 | 2026-08-18 08:20 +08:00，已核实 | 同步多个第三方插件版本指针；仅确认目录维护，不视为独立产品发布。详见 Claude 专题页。 | 反映插件生态版本索引的持续维护。 |
| Anthropic | [Knowledge Work 插件目录提交](https://github.com/anthropics/knowledge-work-plugins/commits/main/) | 官方仓库维护 | 2026-08-18 08:27 +08:00，已核实 | 同步多个插件版本指针；仅确认目录维护。详见 Claude 专题页。 | 反映知识工作插件集合的同步状态。 |

除表内项目外，本轮未在其他已打开的厂商与研究机构官方入口核实到 24 小时内的新技术发布；这一结论受脚本渲染与搜索索引时差约束。

## 播客与访谈

| 厂商 / 节目 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| OpenAI / CNBC | [Greg Brockman: Compute is becoming the new oil of the AI age](https://www.youtube.com/watch?v=eXBFnfrt2gU) | 原始视频访谈 | 2026-08-17 21:26 +08:00，已核实 | CNBC 采访 OpenAI 总裁 Greg Brockman，涉及网络安全、AI 经济与资本开支。详见 OpenAI 专题页。 | 提供公司管理层对算力与安全产业趋势的直接表述。 |

Latent Space、No Priors、The Cognitive Revolution、a16z AI 与厂商播客入口未发现主窗口内可同时确认原始页面与发布时间的新一期；Dwarkesh 入口直接抓取返回 403，搜索索引亦未显示窗口内可核实节目。

## 近两日补充

未发现新的 24–48 小时条目。

## 近三日补充

未发现新的 48–72 小时条目。

## 日期未确认

无。搜索摘要中出现的若干候选无法回到带日期的厂商或节目原文，本轮不写成事实。

## 观察池

| 厂商 | 标题 | 类型 | 日期 / 状态 | 摘要 | 为什么重要 |
|---|---|---|---|---|---|
| Google | [Gemini API 模型弃用记录](https://ai.google.dev/gemini-api/docs/changelog) | 官方旧公告、窗口内生效 | 公告日期 2026-06-15；下线日 2026-08-17 | 官方变更记录宣布 Imagen 4 与 Gemini 3 Image 若干模型 ID 于 2026-08-17 下线；这是生命周期事件，不是本窗口发布的新公告。 | 调用旧模型 ID 的应用需要确认迁移状态。 |

## 来源链接

- [Claude Code v2.1.234](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)
- [Claude Agent SDK TypeScript v0.3.234](https://github.com/anthropics/claude-agent-sdk-typescript/releases/tag/v0.3.234)
- [Claude Code Action v1.0.194](https://github.com/anthropics/claude-code-action/releases/tag/v1.0.194)
- [Add discernment-nudge skill](https://github.com/anthropics/skills/commit/f379e5ad66e2febc1616cf8d6284666fecbe514e)
- [Add claude-academy-guide skill](https://github.com/anthropics/skills/commit/89dcaa3a283f79ed84fd8fe53e2208b9442a6427)
- [Anthropic official plugin directory commits](https://github.com/anthropics/claude-plugins-official/commits/main/)
- [Anthropic knowledge-work-plugins commits](https://github.com/anthropics/knowledge-work-plugins/commits/main/)
- [Codex 0.148.0-alpha.21](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21)
- [OpenAI Go v3.52.0](https://github.com/openai/openai-go/releases/tag/v3.52.0)
- [OpenAI Node.js v7.5.0](https://github.com/openai/openai-node/releases/tag/v7.5.0)
- [OpenAI Python v3.2.0](https://github.com/openai/openai-python/releases/tag/v3.2.0)
- [OpenAI Ruby v0.80.0](https://github.com/openai/openai-ruby/releases/tag/v0.80.0)
- [OpenAI Java v4.52.0](https://github.com/openai/openai-java/releases/tag/v4.52.0)
- [The Defender’s Window](https://openai.com/index/the-defenders-window)
- [Greg Brockman CNBC interview](https://www.youtube.com/watch?v=eXBFnfrt2gU)
- [Gemini API Release Notes](https://ai.google.dev/gemini-api/docs/changelog)

**一句话总结：本轮可核实增量集中在 Anthropic 的 Claude 开发工具与插件/Skills 生态、OpenAI 的多语言 SDK 与安全立场，其他厂商和播客未发现同窗口内可确认的新发布。**

## 采集状态

- 已检查：Anthropic、OpenAI、Google DeepMind/Research、Meta AI、Microsoft、xAI、Mistral、Cohere、Qwen/阿里/DAMO、字节跳动、百度、腾讯混元、DeepSeek、智谱/GLM、Moonshot/Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain、LlamaIndex 及规范列出的播客和厂商访谈入口。
- 失败来源：OpenAI News 与 Dwarkesh 直接抓取返回 HTTP 403，已改用官方文章、GitHub Releases 或搜索索引；xAI、StepFun 及部分中国厂商页面依赖脚本或索引滞后；部分播客页缺少可稳定抓取的精确时间。
- 初始候选：31；保留：16；二次补搜：否（最终来源不为 0）。

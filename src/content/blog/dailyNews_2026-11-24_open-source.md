---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-24T00:00:00+08:00"
updatedAt: "2026-11-24T10:45:01+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Did the user ask for this? Securing AI agents against intent hijacking with Semantic governance policies"
featuredUrl: "https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/"
featuredSummary: "在 AgentDojo 上评估动作级用户意图匹配策略，并报告攻击成功率与正常任务效用的权衡。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-23"
featuredTags: ["Agent Security","Prompt Injection","Evaluation"]
featuredImage: "https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/intent-hijacking-header-fullname-.2e16d0ba.fill-1200x600.png"
featuredImageAlt: "Google Semantic governance policies 防御 Agent 意图劫持文章的标题插图"
featuredImageCaption: "图片来源：Google Developers Blog"
tags:
  - "观察池"
  - "较旧背景"
  - "Agent"
  - "Agent Security"
  - "AI"
  - "Automation"
  - "Benchmark"
  - "Browser"
  - "Coding Agent"
  - "Community Signal"
  - "Compaction"
  - "Compatibility"
  - "Evaluation"
  - "Hacker News"
  - "LLM"
  - "LLM Memory"
  - "Long Context"
  - "MCP"
  - "Model Routing"
  - "Multi-Agent"
  - "Open Source"
  - "Paper"
  - "Plugins"
  - "Pre-release"
  - "Prompt Injection"
---

## 今日概览

本轮以 2026-11-24 10:45（Asia/Shanghai）为截止时间；技术精选主要核验过去 48 小时，HN 讨论与趋势信号主要核验过去 24 小时。可确认的主轴是 OpenCode 将浏览器、自动化与 MCP 事件合入同一 Agent 运行面，并在随后补丁中修复存储和压缩问题；DeepSeek Harness 则以 alpha 版本继续扩展团队、插件、代码审查和按需 MCP 工具能力。

## Coding Agent / Harness 雷达

| 项目 | 状态 | 关键变化 | 为什么重要 |
|---|---|---|---|
| OpenCode | 24 小时内更新 | [v2.4.0](https://github.com/anomalyco/opencode/releases/tag/v2.4.0) 加入内置桌面浏览器、按时间/cron/MCP 事件触发的 Automations、MCP Events 与插件自动更新；还调整权限、工具与后台任务行为 | 浏览、计划任务、插件和 Agent loop 被收进同一桌面/CLI 运行面，明显扩大了 harness 的持续执行能力 |
| OpenCode | 24 小时内补丁 | [v2.4.1](https://github.com/anomalyco/opencode/releases/tag/v2.4.1) 修复 macOS 12 消息存储、压缩保留窗口与长目标会话缓存成本，并让仅配置的本地提供方模型出现在 `/models` | 紧随大版本的可靠性修复，直接影响长会话、compaction 与本地模型路由 |
| DeepSeek Harness / DSH | 48 小时内预发布 | [v0.2.3-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.1) 增加 Git 插件源、Agent 任务时间线、GitHub/GitLab 代码审查扩展、远程 Web 登录、连接器账号管理、团队并发可见性和 MCP 工具按需加载 | 将插件、团队、多会话、代码审查和远程接入组合成更完整的 harness 控制面；这是预发布，接口迁移风险需按升级说明评估 |
| DeepSeek Harness / DSH | 48 小时内预发布补丁 | [v0.2.3-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.2) 调整 Node.js 最低版本要求 | 变化较小，但会直接影响安装与自部署兼容性；仍属 alpha 通道 |
| Cline | 已检查、无新增 | 官方仓库、release、SDK/CLI/Desktop 发布入口在本轮 48 小时窗内未见新版本 | 不用旧版本填充“已检查”证明 |
| Pi Coding Agent / pi-mono | 已检查、无新增 | 官方入口与当前重定向后的 release 页面在本轮 48 小时窗内未见新版本 | 仓库重定向被记录，未把第三方 fork 当作官方更新 |
| Aider / Continue / Roo Code | 已检查、无新增 | 三个官方 release 入口均未见 48 小时内版本 | 无新增不硬凑条目 |

## 已验证技术精选

### Google：用语义治理策略拦截 Agent 意图劫持

Google Developers Blog 于 11 月 23 日发布[实测文章](https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/)。作者在 AgentDojo v1.2.2 上用 Gemini 2.5 Flash、97 个正常任务和 949 个攻击样本进行六轮完整评测；文中报告默认的“用户意图匹配”把攻击成功率从 48.7% 降至 0.9%，正常任务效用平均下降 2.6 个百分点。它的重要性不在单个模型排名，而在于把不可信工具结果与可信用户意图分离，并在工具调用执行前做动作级判定；结果仍是 Google 自有策略引擎的报告，复现时应保留其测试 harness 与生产路径差异。

<figure class="source-image">
  <a href="https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/"><img src="https://storage.googleapis.com/gweb-developer-goog-blog-assets/images/intent-hijacking-header-fullname-.2e16d0ba.fill-1200x600.png" alt="Google Semantic governance policies 防御 Agent 意图劫持文章的标题插图" loading="lazy" /></a>
  <figcaption><a href="https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/">图片来源：Google Developers Blog</a></figcaption>
</figure>

### OpenCode：从交互式工具走向持续执行 harness

OpenCode [v2.4.0](https://github.com/anomalyco/opencode/releases/tag/v2.4.0) 的自动化可运行 prompt、Code Mode 程序或 shell 命令，并支持一次性、间隔、cron 与 MCP 推送事件；内置浏览器维持持久登录配置，Agent 可读取和驱动页面。随后 [v2.4.1](https://github.com/anomalyco/opencode/releases/tag/v2.4.1) 修补消息存储、压缩和模型发现问题。两份发布说明共同表明项目正在把浏览器、调度、插件、MCP 和会话状态收束为统一运行时，但不等同于云端托管服务。

### DeepSeek Harness：预发布版本扩展团队、审查与连接器

DSH [v0.2.3-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.1) 的范围较大：包括 Agent 任务树时间线、PR/MR 审查扩展、连接器 OAuth、子 Agent 并发信息、按需加载 MCP 工具与工作树权限调整。紧随其后的 [v0.2.3-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.2) 主要调整 Node.js 要求。由于均为 alpha，正文只描述发布说明中的能力，不把它们推断为稳定可用或性能领先。

## GitHub Trending

今日 overall、Python 与 TypeScript 榜单均已快速检查。Trending 仅能证明页面抓取时的相对热度，不能证明项目今天发布；本轮未发现需要在上述已验证更新之外单列、且同时具备可靠发布日期与技术细节的项目。

## HN 讨论

HN newest/Algolia 中出现多条 Agent、安全与评测提交，但大多互动很低。Stripe 的既有评测文章在本轮被重新提交到 [HN 讨论页](https://news.ycombinator.com/item?id=50621949)，抓取时仅 1 分、0 评论，因此只作为发现信号，不代表社区共识。

## 论文与研究

Hugging Face Daily Papers 于 11 月 23 日收录了 [MemOnce](https://arxiv.org/abs/2611.27973)，但 arXiv 原始提交日期为 11 月 20 日。论文提出只缓存少量末层隐藏状态、按需解码各层 KV cache，并在每次查询中复用稀疏检索索引；作者报告在 1M 上下文实验中大幅减少状态缓存和预填充延迟。由于原始发布时间超出 48 小时，它不计入当日已验证更新，只作为“今日被重新发现”的研究观察。

## 较旧内容与观察池

- [Stripe coding-agent integration evals](https://stripe.dev/blog/stripe-integration-evals-methodology) 原始发布日期为 11 月 19 日，已超出 48 小时精选窗。其公开评测覆盖 69 个场景、14 个模型/harness 组合；文章报告所有组合在加入 Stripe plugin 后得分均提高约 3–8 个百分点，同时严格通过率显著低于平均分。该结果适合用来提醒“可运行”与“集成正确”之间的差距，但属于厂商自建基准，不作跨工具胜负结论。
- MemOnce 为 11 月 20 日论文，详见上方研究观察；HF 的 11 月 23 日收录时间不改写原始论文日期。

## 日期未确认

本轮没有把日期无法确认的候选提升为正文事实。低互动 Show HN 项目、无法稳定打开的工程博客和只有搜索摘要的候选均未被写成发布事件。

## 来源链接

- [OpenCode v2.4.0](https://github.com/anomalyco/opencode/releases/tag/v2.4.0)
- [OpenCode v2.4.1](https://github.com/anomalyco/opencode/releases/tag/v2.4.1)
- [DeepSeek Harness v0.2.3-alpha.1](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.1)
- [DeepSeek Harness v0.2.3-alpha.2](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.2.3-alpha.2)
- [Google：Securing AI agents against intent hijacking](https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/)
- [MemOnce（arXiv）](https://arxiv.org/abs/2611.27973)
- [Stripe coding-agent integration evals](https://stripe.dev/blog/stripe-integration-evals-methodology)
- [Stripe evals 的 HN 提交](https://news.ycombinator.com/item?id=50621949)

## 采集状态

- 检查窗口：技术精选 2026-11-22 10:45 至 2026-11-24 10:45；HN/趋势信号重点为最近 24 小时，均为 Asia/Shanghai。
- 已检查：Cline、Pi/pi-mono、DeepSeek Harness、OpenCode、Aider、Continue、Roo Code 官方仓库/release/changelog；HN、GitHub Trending、arXiv、Hugging Face Papers、Simon Willison 与工程博客入口。
- 失败来源：GitHub Trending 无稳定快照 API，Snap Engineering 原文抓取失败，部分 Show HN 只有低互动自述；均未据此编造事实。
- 初始候选 18 条，保留 8 个去重来源；最终来源不为 0，未进行二次补搜。

---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-27T00:00:00+08:00"
updatedAt: "2026-11-27T10:46:27+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "Qwen Code v0.28.7"
featuredUrl: "https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7"
featuredSummary: "Qwen Code 更新 Harness 内核 CLI、托管会话跨实例接管、终端票据、工作树恢复与模型设置持久化。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-27 02:04 +08:00"
featuredTags: ["Coding Agent","Harness","Managed Agent"]
featuredImage: "https://raw.githubusercontent.com/wenshao/qwen-code/ef8c1b02b27acd1fbfd1444a6fd8dbf9c517e553/pr18009/9727ae7cbd/browser-02-retained-overview.png"
featuredImageAlt: "Qwen Code 工作树快照保留与恢复界面"
featuredImageCaption: "图片来源：Qwen Code 官方 Release"
tags:
  - "日期未确认"
  - "Agent"
  - "Agent Security"
  - "AI"
  - "Coding Agent"
  - "Desktop"
  - "Harness"
  - "LLM"
  - "Managed Agent"
  - "Model Routing"
  - "Open Source"
  - "Prompt Injection"
  - "Quantization"
  - "Release"
  - "Research"
  - "SDK"
---

## 今日概览

本轮发现窗口为 **2026-11-26 10:45 至 2026-11-27 10:45（Asia/Shanghai）**，技术精选同时向前检查 48 小时。共保留 6 条原始来源：Cline 在同一发布批次更新扩展、桌面与 SDK；Qwen Code v0.28.7 则集中推进 Harness 内核、托管会话接管与工作树恢复。MIT HAN Lab 的 QDA 和 Horizon Labs 的提示注入防护模型因页面缺少精确发布时间，按证据状态分别进入“日期未确认”。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 | 证据与意义 |
|---|---|---|
| Cline | **v4.1.28 / Desktop v0.0.51 / SDK v0.2.2，已验证** | 三个 [官方 Release](https://github.com/cline/cline/releases/tag/v4.1.28)、[Desktop Release](https://github.com/cline/cline/releases/tag/desktop-v0.0.51) 与 [SDK Release](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.2) 均在主窗口内发布。共同主题是刷新模型目录、移除上游已标记弃用的模型 ID、加入 Concentrate 与 Prima Labs provider，并清理遥测依赖；这属于模型路由与分发面的实质维护。 |
| Pi Coding Agent / pi-mono | 无新增 | 已检查官方仓库与 Releases；最新可核验版本仍为 11 月 25 日的 v1.6.1，早于主窗口，未跨日重复旧来源。 |
| DeepSeek Harness / DSH | 无新增 | 已检查 `deepseek-ai/deepseek-harness` 仓库、文档与 Releases；最新标签仍为 11 月 22 日的 v0.2.3-alpha.2。 |
| OpenCode | 无新增 | 已检查官方仓库与 Releases；v2.4.2 发布于 11 月 26 日 08:59（上海时间），在本轮主窗口前且已由前一日日报收录。 |
| Aider | 无新增 | 已检查官方仓库、HISTORY 与 Releases，未发现窗口内发布。 |
| Continue | 无新增 | 已检查官方仓库与 Releases，未发现窗口内发布。 |
| Roo Code | 无新增 | 已检查官方仓库、文档与 Releases；未发现窗口内发布。 |
| Qwen Code | **v0.28.7，已验证** | [官方 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7) 于 11 月 27 日 02:04（上海时间）发布，覆盖 Harness 内核、托管会话跨控制平面接管、工作树快照、权限上下文和守护进程可靠性。 |

<figure class="source-image">
  <a href="https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7"><img src="https://raw.githubusercontent.com/wenshao/qwen-code/ef8c1b02b27acd1fbfd1444a6fd8dbf9c517e553/pr18009/9727ae7cbd/browser-02-retained-overview.png" alt="Qwen Code 工作树快照保留与恢复界面" loading="lazy" /></a>
  <figcaption><a href="https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7">图片来源：Qwen Code 官方 Release</a></figcaption>
</figure>

## 已验证技术精选

### 1. Cline 同步更新扩展、桌面与 SDK 的模型目录

[Cline v4.1.28](https://github.com/cline/cline/releases/tag/v4.1.28) 与 [Desktop v0.0.51](https://github.com/cline/cline/releases/tag/desktop-v0.0.51) 于 11 月 26 日 17:54–17:57（上海时间）发布，[SDK v0.2.2](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.2) 则发布于 16:40。三者都依据上游目录移除已标记弃用的 OpenAI 模型 ID，并加入 Concentrate 与 Prima Labs provider；SDK 还减少 `@cline/llms` 依赖并移除部分遥测 helper 导出。这里能确认的是 Cline 的可选目录发生变化，不应反推被移除模型在其原厂 API 同时下线。

### 2. Qwen Code v0.28.7 把 CLI、Hosted Harness 与恢复机制放进同一版本

[Qwen Code v0.28.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7) 将 Qwen Code CLI 接入 Harness 内核，默认关闭使用统计；托管侧允许暂停会话释放 placement、由健康实例接管，并将 Web Terminal 单次票据放入 SQL 以支持多控制平面。客户端则按模型保存 reasoning effort 与上下文窗口，并按工作区保留、恢复 worktree 快照。值得注意的是版本同时取消模型循环检测和工具调用次数上限，让工具结果原样回到模型；这简化了核心路径，但也把防循环责任更多交给模型、调用方和运行时策略。

## GitHub Trending

已检查 overall、Python 与 TypeScript 榜单。榜单反映当前注意力，不等于当天首次发布；公开页没有稳定提供可复核的 stars/day 数字，因此本轮不记录易波动排名，也不把“更新于 11 月 26 日”直接写成发布事件。

## HN 讨论

HN Algolia 显示 QDA 项目页在 11 月 27 日 08:09（上海时间）首次提交，另有 Siren 沙箱评测等讨论；后者原文日期为 11 月 24 日且应由 Claude 专题处理，因此本页不重复作为新增来源。QDA 的原文日期无法确认，按“日期未确认”保留。

## 论文 / 研究

MIT HAN Lab 的 [QDA 项目页](https://mit-han-lab.github.io/qda-blog/) 给出闭环量化设计：Agent 组合 21 种后训练量化方法，以 KL 指标快速筛选候选，再用完整评测验收。作者报告在四个推理模型、三种精度上超过其选定的最强公开 recipe，并公开论文、代码和模型入口；这些数字是作者结果，尚不能视为独立复现。

## 旧文再浮现

本轮没有发现满足“原文超过 7 天、过去 24 小时在 HN 形成可核验新讨论且技术相关性足够高”的条目。

## 日期未确认

- [QDA: Closed-Loop LLM Quantization Design with Agents](https://mit-han-lab.github.io/qda-blog/)：项目页未标日期；HN 首次提交处于主窗口，只能确认发现时间，不能确认原始发布时间。项目描述的 350–990× 加速、精度与成本均为作者报告。
- [Prompt Injection Guard Small](https://huggingface.co/Horizon-Labs/prompt-injection-guard-small)：公开模型卡搜索索引标注 v2.6.1 于 2026-11-26 更新，仅调整 tokenizer/normalizer 以减少 ANSI 彩色终端输出的误报，权重未变；页面抓取入口失败且没有精确时刻，因此不把它写成严格 24 小时已验证发布。

## 观察池

- Cline 三个 release 属同一产品批次，分别保留 URL 是为了让扩展、桌面与 SDK 的版本证据可直接追溯，不将其夸大为三个独立事件。
- Qwen Code v0.28.7 的 Hosted Harness 条目同时具有 AaaS 意义，但本页只分析其开源 harness 与会话恢复机制；托管商业边界由 AaaS 专题核验。
- GitHub Topics 中出现多个当天更新的 Agent 项目，但“仓库更新”不足以证明形成新版本或获得采用，本轮不升级为技术精选。

## 来源链接

1. [Cline v4.1.28](https://github.com/cline/cline/releases/tag/v4.1.28)
2. [Cline Desktop v0.0.51](https://github.com/cline/cline/releases/tag/desktop-v0.0.51)
3. [Cline SDK v0.2.2](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.2)
4. [Qwen Code v0.28.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7)
5. [QDA: Closed-Loop LLM Quantization Design with Agents](https://mit-han-lab.github.io/qda-blog/)
6. [Prompt Injection Guard Small](https://huggingface.co/Horizon-Labs/prompt-injection-guard-small)

## 采集状态

- **已检查来源**：Cline、Pi/pi-mono、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code 与 Qwen Code 的官方仓库/Release/changelog；GitHub Trending；HN front/newest/Algolia；arXiv；Hugging Face Papers/Blog/模型卡；Simon Willison；MIT HAN Lab。
- **失败或受限来源**：Trending 无稳定日增；arXiv 未检出可同时确认日期和高相关性的新增；Hugging Face 模型页抓取失败；QDA 原文未给发布日期。
- **初始候选数**：10；**最终保留来源数**：6；**二次补搜**：否（最终来源非 0）。

---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-11-22T00:00:00+08:00"
updatedAt: "2026-11-22T10:47:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "a100-inference-hillclimb"
featuredUrl: "https://github.com/johnsonshi/a100-inference-hillclimb"
featuredSummary: "新公开的 Kubernetes 推理调参 harness，提供噪声校准、质量门禁和可审计结果账本。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-11-22 08:45 +08:00"
featuredTags: ["Inference","Benchmark","Harness"]
featuredImage: "https://raw.githubusercontent.com/johnsonshi/a100-inference-hillclimb/main/assets/pipeline.png"
featuredImageAlt: "A100 inference hill-climb harness 的六阶段自动调参流水线图"
featuredImageCaption: "图片来源：a100-inference-hillclimb 官方仓库"
tags:
  - "日期未确认"
  - "Agent"
  - "AI"
  - "Benchmark"
  - "Cline"
  - "Coding Agent"
  - "Desktop"
  - "Harness"
  - "HN"
  - "Inference"
  - "LLM"
  - "Multi-Agent"
  - "Open Source"
  - "Pi"
  - "Release"
  - "Sandbox"
  - "SDK"
---

## 今日概览

本轮以 2026-11-20 10:40 至 2026-11-22 10:40（Asia/Shanghai）的 48 小时窗口核查开源技术动态。可验证的主线是 Coding Agent harness：Cline 同步更新扩展、SDK 与桌面端，Pi 发布 v1.6.0；此外，一个新公开的 A100 推理调参 harness 给出了隔离试验、质量门禁与完整结果账本。

## Coding Agent / Harness 雷达

| 项目 | 状态 | 本轮结论 |
|---|---|---|
| Cline | 有更新 | [v4.1.27](https://github.com/cline/cline/releases/tag/v4.1.27) 改进模型路由、reasoning 参数兼容、compaction 与 `read_files` 上限；[SDK v0.2.1](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.1) 新增 UX 验证子 Agent、会话恢复、云任务与 MCP 注解等接口；[Desktop v0.0.50](https://github.com/cline/cline/releases/tag/desktop-v0.0.50) 同步了可停止 compaction、模型兼容和桌面体验修复。 |
| Pi Coding Agent | 有更新 | [v1.6.0](https://github.com/earendil-works/pi/releases/tag/v1.6.0) 更新多家模型/Provider 路由，修复 MCP 工具恢复、会话切换、长输出、WebSocket 重连与工具 schema 兼容；原 `badlogic/pi-mono` 官方入口已重定向到 `earendil-works/pi`。 |
| DeepSeek Harness / DSH | 无新增 | 已检查 [官方 Releases](https://github.com/deepseek-ai/deepseek-harness/releases)；最近正式可见条目为 11 月 18 日的预发布版，已超出 48 小时主窗口，本轮不重复作为背景新闻。 |
| OpenCode | 无新增 | 已检查官方仓库与 release；最新 release 为 11 月 18 日，窗口内没有新正式发布。 |
| Aider | 无新增 | 已检查官方仓库与 release；窗口内没有新正式发布。 |
| Continue | 无新增 | 已检查官方仓库与 release；窗口内没有新正式发布。 |
| Roo Code | 无新增 | 已检查官方仓库与 release；窗口内没有新正式发布。 |

## 已验证技术精选

### Cline：同一轮覆盖扩展、SDK 与 Desktop

[Cline v4.1.27](https://github.com/cline/cline/releases/tag/v4.1.27) 于 11 月 21 日 14:05（上海时间）发布。值得关注的不是模型目录数字本身，而是 harness 的稳健性：文件读取结果可传入更完整上下文，reasoning effort 会按模型能力收敛，compaction 与模型切换后的 reasoning 状态也得到修复。

[SDK v0.2.1](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.1) 于同日 13:19 发布，增加 `ux_verifier` 子 Agent、结构化 UX 报告、云会话 artifact、保存会话恢复与更完整的 MCP tool hint。它显示 Cline 正把 IDE Agent 的核心能力拆成可嵌入、可托管的 harness 接口。

[Desktop v0.0.50](https://github.com/cline/cline/releases/tag/desktop-v0.0.50) 于同日 13:54 发布，允许停止手动 compaction，并同步多项 reasoning、模型目录与长文件读取修复。三条 release 分开列出，是因为它们分别对应扩展、SDK 与桌面分发面。

### Pi v1.6.0：Provider 兼容与长会话可靠性

[Pi v1.6.0](https://github.com/earendil-works/pi/releases/tag/v1.6.0) 于 11 月 20 日 19:35（上海时间）发布。除 Provider/模型目录变化外，技术重点包括 MCP 工具在 resume/reload 后的恢复、长会话与 session 切换诊断、工具 schema 非严格模式回退、长连接重试、超长行与大 diff 渲染修复。这类改动直接影响 Agent loop 在真实仓库中的连续运行质量。

### 新项目：自动化推理引擎 hill-climbing harness

[a100-inference-hillclimb](https://github.com/johnsonshi/a100-inference-hillclimb) 于 11 月 22 日 08:45（上海时间）创建。仓库用 Kubernetes pod-per-trial 隔离 vLLM/SGLang 试验，包含噪声校准、复跑确认、吞吐/延迟 SLO、GSM8K/长上下文/对数似然质量门禁，并公开 SQLite 结果账本。它的价值在于把“调几个参数看吞吐”升级为可审计的搜索与回归流程；结果仍来自作者单一硬件环境，不宜外推为通用排名。

<figure class="source-image">
  <a href="https://github.com/johnsonshi/a100-inference-hillclimb"><img src="https://raw.githubusercontent.com/johnsonshi/a100-inference-hillclimb/main/assets/pipeline.png" alt="A100 inference hill-climb harness 的六阶段自动调参流水线图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/johnsonshi/a100-inference-hillclimb">图片来源：a100-inference-hillclimb 官方仓库</a></figcaption>
</figure>

## GitHub Trending

本轮检查了 overall、Python 与 TypeScript 榜单，但没有取得可复核的历史快照，因此不记录无法确认的“今日新增星标”或排名变化。上述新建推理 harness 是按创建时间与仓库证据收录，并非声称其进入 Trending。

## HN 讨论

HN newest 在 11 月 22 日 10:35（上海时间）出现 [“gVisor: The Sandbox Kernel for Agents”讨论](https://news.ycombinator.com/item?id=50595662)。采集时仅 1 分、0 评论，不能据此判断社区趋势；其原始项目页见下方“日期未确认”。

## 论文 / 研究

本轮检查 arXiv 与 Hugging Face Papers/Blog，未发现同时满足窗口、主题相关性和可核实日期的高置信候选，故不以数量为目标补条目。

## 旧文再讨论

未发现符合“原文超过 7 天且近 24 小时在 HN 形成有意义讨论”的条目。

## 日期未确认

- [gVisor：The Sandbox Kernel for Agents](https://gvisor.dev/)：原始页面把 gVisor 定位为面向 Agent 的沙箱内核，但页面未展示本次定位文案的发布日期。仅能确认它在本轮 HN newest 出现；因此不把它写成 24/48 小时内的新发布。

## 观察池

- 多个 Show HN/新仓库候选只有作者自述、缺少独立复核或互动极低；已计入候选数，但暂不把性能、采用或安全宣称写入正文。
- DSH 最新可见预发布为 11 月 18 日，OpenCode 最新可见 release 也为 11 月 18 日，均超出主窗口；本轮只记录已检查，不跨日重复旧背景。

## 来源链接

- [Cline v4.1.27](https://github.com/cline/cline/releases/tag/v4.1.27)
- [Cline SDK v0.2.1](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.2.1)
- [Cline Desktop v0.0.50](https://github.com/cline/cline/releases/tag/desktop-v0.0.50)
- [Pi v1.6.0](https://github.com/earendil-works/pi/releases/tag/v1.6.0)
- [a100-inference-hillclimb](https://github.com/johnsonshi/a100-inference-hillclimb)
- [HN discussion: gVisor](https://news.ycombinator.com/item?id=50595662)
- [gVisor original page](https://gvisor.dev/)

## 采集状态

- 已检查：Cline、Pi、DeepSeek Harness/DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库/release/changelog入口；GitHub Trending、新建仓库、HN/Algolia、arXiv、Hugging Face 与 Simon Willison。
- 失败/受限：GitHub Trending 缺少可复核历史快照；部分动态页面与低互动自述无法支持趋势结论；arXiv/Hugging Face 本轮无满足全部条件的高置信候选。
- 初始候选：15；最终保留来源：7；二次补搜：否（最终来源不为 0）。

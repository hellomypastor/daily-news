---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-11-04T00:00:00+08:00"
updatedAt: "2026-11-04T10:49:00+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "Agentic cheminformatics with Google Antigravity"
featuredUrl: "https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/"
featuredSummary: "Google DeepMind 展示 Antigravity Cheminformatics Skills 支持化合物检索、分析、建模和候选设计。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-11-03"
featuredTags: ["Google","Agent","Science"]
featuredImage: "https://lh3.googleusercontent.com/xPSpWQxbjrJMyHBI5jfRNm0AND2P0itnDlVpkJnKY-TkfZDR90Apc8tYmitx1ocedXUHJtQNi1v17fnN_aEyz5Iw7Zge1vblv0DMp_mgxt7E8Wjmwg%3Dw1440"
featuredImageAlt: "Google Antigravity 中展示化合物数据和多幅分析图表的界面"
featuredImageCaption: "图片来源：Google DeepMind"
tags:
  - "观察池"
  - "Agent"
  - "Agent Security"
  - "AI"
  - "Ai2"
  - "Benchmark"
  - "Coding Agent"
  - "Evaluation"
  - "Google"
  - "Harness"
  - "IBM"
  - "Industry"
  - "Long Context"
  - "Research"
  - "Science"
  - "Security"
---

## 今日概览

采集窗口：2026-11-03 10:49 至 2026-11-04 10:49（Asia/Shanghai）。本轮最明确的厂商级更新来自 Google DeepMind：Google Antigravity 增加面向药物发现的 Cheminformatics Skills。与此同时，IBM Research 发布了一组可复现实验，说明相同模型在不同 Agent harness 下会出现显著任务完成差异；Ai2 与 CWE-bench 则分别补充了长上下文状态追踪和安全修复能力的评测工具。

## 优先动态

| 厂商/机构 | 动态 | 类型 | 日期/状态 | 摘要与意义 |
|---|---|---|---|---|
| Google DeepMind | [Agentic cheminformatics with Google Antigravity](https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/) | 产品 / 科学工作流 | 2026-11-03，已验证 | 官方展示 Antigravity 配合 Cheminformatics Skills 检索化合物、做匹配分子对分析、训练预测模型并提出合成路线；官方同时强调计算结果仍需实验验证。它把通用 Agent 工作台推进到可审计的专业科学流程。 |
| IBM Research | [Same Model, Different Harness: CUGA, Hermes, and Deep Agents](https://huggingface.co/blog/ibm-research/cuga-harness) | Agent harness 评测 | 2026-11-03，已验证 | IBM Research 在 90 个 AppWorld 任务上固定 GLM-5.3-flash，仅切换 harness；文章报告 CUGA、Hermes、Deep Agents 分别完成 81.1%、46.7%、30.0%。作者明确说明样本、配置与任务适配限制，因此这不是通用排名，但提供了可复现配置和 Harbor 代码，显示 harness 的规划、工具筛选、沙箱与执行前验证会显著影响结果。 |
| Ai2 | [StateBench: Testing how language models track state changes over long documents](https://huggingface.co/blog/allenai/statebench) | 研究 / 基准 | 2026-11-03，已验证 | StateBench 将状态追踪拆为四种复杂度，并公开技术报告、数据与代码。文章报告多种前沿模型在长序列的复杂状态更新上明显下降；对长程 Agent memory、代码理解和持续会话评测具有直接参考价值。 |
| Collinear AI / CWE-bench | [CWE-bench v2](https://huggingface.co/blog/cwe-bench) | 安全评测 | 2026-11-03，已验证 | v2 公开 100 个覆盖 91 类 CWE 的可复现安全修复任务与确定性验证器。页面给出公开 leaderboard 与运行方法，适合评估编码 Agent 在真实仓库中发现并修复漏洞的能力；跨模型分数仍应结合成本和运行配置解读。 |

<figure class="source-image">
  <a href="https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/"><img src="https://lh3.googleusercontent.com/xPSpWQxbjrJMyHBI5jfRNm0AND2P0itnDlVpkJnKY-TkfZDR90Apc8tYmitx1ocedXUHJtQNi1v17fnN_aEyz5Iw7Zge1vblv0DMp_mgxt7E8Wjmwg%3Dw1440" alt="Google Antigravity 中展示化合物数据和多幅分析图表的界面" loading="lazy" /></a>
  <figcaption><a href="https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/">图片来源：Google DeepMind</a></figcaption>
</figure>

## 常规厂商扫描

- Anthropic 与 OpenAI 的窗口内产品更新由对应专题完整展开；行业页本轮不重复占位，详见 Claude 专题页与 OpenAI 专题页。
- xAI / Grok：已检查官方新闻、开发者文档、API/Console changelog、模型与工具入口，未发现 24 小时窗口内可核实的 Grok 模型、API、DeepSearch、语音、编码、工具调用或 Agent 新发布。
- Google、Meta、Microsoft、Mistral、Cohere、Qwen/阿里、字节 Seed、百度、腾讯混元、DeepSeek、智谱、Moonshot/Kimi、StepFun、MiniMax、NVIDIA、Hugging Face、LangChain、LlamaIndex 均检查当前官方列表或研究入口；除上表外，本轮未发现足够明确且落在窗口内的新增。
- Cline、Pi Coding Agent 与 DeepSeek Harness/DSH 的公司级产品方向、合作、融资、企业采用和生态信号已检查；未见需要从开源专题重复到行业页的新事件，例行 releases 详见开源专题页。

## 播客

Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 及厂商播客入口已检查，本轮没有发现能在截止时刻前确认发布日期且需要单列的新节目。

## 近两日补充

暂无需要从 24–48 小时区间补入的厂商级条目。

## 近三日补充

暂无需要从 48–72 小时区间补入的厂商级条目。

## 日期未确认

本轮未保留日期无法确认但足以进入正文的厂商候选。

## 观察池

- Hugging Face 社区在 11 月 2 日发布了 [The Sleeper in the Weights](https://huggingface.co/blog/FINAL-Bench/the-sleeper-in-the-weights-we-planted-a-backdoor-i)，复述并小规模复现预训练投毒研究，再展示动作执行前策略门控。它是社区实验而非主流厂商公告，且自述复现规模与原论文不同，因此仅作为 Agent 安全工程观察项，不把其指标外推为行业结论。

## 来源链接

正文链接均指向原始发布页或发布组织在 Hugging Face 的文章页；未采用搜索结果摘要作为事实来源。

## 采集状态

- 已检查：主流厂商官方新闻/研究/开发者入口、xAI/Grok 强制入口、Harness 生态入口以及指定播客。
- 失败来源：部分社交账号需登录或依赖客户端脚本；部分中文厂商动态页索引更新滞后。
- 初始候选：7 条；最终保留：5 条（4 条已验证、1 条观察池）。
- 二次补搜：未执行；本页最终来源不为 0。

一句话总结：专业领域 Agent 与 harness/评测基础设施同步推进，今天最值得关注的是可复现实验正在把“模型能力”与“执行系统能力”分开测量。

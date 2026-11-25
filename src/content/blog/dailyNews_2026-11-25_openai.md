---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-11-25T00:00:00+08:00"
updatedAt: "2026-11-25T10:45:19+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "GPT-6 models demonstrate intrinsic protein-design capabilities"
featuredUrl: "https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/"
featuredSummary: "OpenAI 披露 GPT-6 系列蛋白设计的计算评测与实验室结果，并说明专用模型依赖和局限。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-11-24"
featuredTags: ["GPT-6","Science","Protein Design"]
featuredImage: "https://images.ctfassets.net/kftzwdyauwt9/Eg5mCwwaA3KqnznOVCh0n/8e6deaef25fd508d9853ff86a95187c1/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities-social.png?w=1600&h=900&fit=fill"
featuredImageAlt: "OpenAI GPT-6 蛋白设计研究的官方发布配图"
featuredImageCaption: "图片来源：OpenAI Science"
tags:
  - "低置信度"
  - "观察池"
  - "官方更新"
  - "日期已确认"
  - "社区口碑"
  - "社区讨论"
  - "Agent"
  - "API"
  - "ChatGPT"
  - "Codex"
  - "Compliance"
  - "GPT-6"
  - "Hate"
  - "Healthcare"
  - "Love"
  - "Models"
  - "OpenAI"
  - "Pre-release"
  - "Protein Design"
  - "Responses API"
  - "Science"
  - "Work"
---

## 今日概览

采集窗口：**2026-11-24 10:45 至 2026-11-25 10:45（Asia/Shanghai）**。本轮最明确的开发者更新是 [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog) 在 11 月 24 日新增 Healthcare 模型配置，并更新 `chat-latest` 快照；医疗配置通过 Responses API 提供专门的临床问题 harness 与医疗检索索引。研究侧，[OpenAI 发布 GPT-6 蛋白设计研究](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)，披露计算评测与实验室验证，同时明确仍依赖专用模型筛选、完整蛋白结构预测仍是弱项。Codex 稳定版 0.172.0 在窗口开始前约 2 小时 41 分发布，本窗口内只有连续 alpha 预发行版，不能写成新的稳定发布。

<figure class="source-image">
  <a href="https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/"><img src="https://images.ctfassets.net/kftzwdyauwt9/Eg5mCwwaA3KqnznOVCh0n/8e6deaef25fd508d9853ff86a95187c1/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities-social.png?w=1600&amp;h=900&amp;fit=fill" alt="OpenAI GPT-6 蛋白设计研究的官方发布配图" loading="lazy" /></a>
  <figcaption><a href="https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/">图片来源：OpenAI Science</a></figcaption>
</figure>

## Tier 1：编码、Agent 与开发者平台

| 产品/入口 | 本轮状态 | 核验说明 |
|---|---|---|
| Codex CLI | **预发行更新** | [Codex 0.173.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.5) 于 11 月 24 日 14:44（上海时间）发布；随后进入 0.174 alpha 序列。alpha 页面没有完整变更说明，本页仅确认预发行活动，不推断功能。 |
| VS Code / JetBrains 集成 | 无新增 | 官方发布、文档与仓库未见窗口内独立公告。 |
| Codex cloud / remote tasks / PR agents | 无新增 | 未见窗口内正式产品或文档发布；稳定版 0.172.0 已在采集窗口外。 |
| ChatGPT agentic mode | 无新增 | 未见窗口内新的 Agent 功能公告；社区关于 Work 完成度的反馈属于未核实体验。 |
| 当前官方 Agent 构建产品 | **有更新** | Healthcare 模型配置通过 Responses API 暴露，属于特定领域 harness；不是新的通用 Agent 产品。 |
| Responses API | **有更新** | 新增 `gpt-6.2-astra-healthcare`、`gpt-6.2-sol-healthcare`、`gpt-6-astra-healthcare` 与 `gpt-6.1-sol-healthcare` 配置。 |
| Agents SDK Python / TypeScript | 无新增 | 官方仓库与文档未见窗口内新 release。 |
| Assistants API 迁移/弃用 | 无新增 | 本轮未见迁移期限或弃用状态变化。 |
| Realtime / Live API | 无新增 | 最近条目仍为 11 月 19 日的 GPT-Live-1.1，已在窗口外。 |
| GPT / reasoning / Codex 模型族 | **快照更新** | `chat-latest` 指向当前 ChatGPT 付费及组织账户可用的最新 Chat 模型；官方仍建议生产 API 使用 GPT-6.2 系列。 |

## Tier 2：消费端与创作能力

| 范围 | 本轮状态 |
|---|---|
| 浏览器/Operator、桌面应用、GPTs/GPT Store、Canvas | 无新增；未见窗口内官方说明。 |
| Sora/视频、GPT Image/DALL·E、Voice | 无新增；本轮官方发布集中在 API 医疗配置与科学研究。 |
| Connectors / MCP | 无独立发布；Codex 稳定版 0.172.0 的 MCP 懒启动和工具级审批功能位于窗口外，不计作本轮新增。 |

## Tier 3：企业、教育、安全与行业

- **Healthcare / API（已验证）**：[模型发布说明](https://help.openai.com/en/articles/9624314-model-release-notes) 确认医疗配置面向 API 组织、通过 Responses API 使用，不要求 ChatGPT for Healthcare workspace。
- **合规边界（已验证）**：[Healthcare 配置文档](https://help.openai.com/en/articles/20001656-healthcare-model-configurations-in-the-openai-api) 说明，处理受保护健康信息前，组织需要适用的 BAA 并满足账户与工具配置要求；这些模型不替代专业医疗判断。
- **Science（已验证）**：GPT-6 系列用推理与代码设计蛋白结构和序列，OpenAI 与 Onava 做了实验室测试；论文也明确专用模型仍参与序列生成、筛选或结构预测，不能解读为端到端替代专用生物模型。
- **Enterprise、Business、Edu、Gov 与其他行业方案**：除医疗 API 配置外，本窗口未发现可核验的独立官方新增。

## 官方更新（由新到旧）

### Healthcare 模型配置进入 Responses API

11 月 24 日的 API changelog 将四个 Healthcare 配置列为正式功能。启用网页搜索时，它们查询专门的医疗来源索引，用于临床研究与证据综合等场景。这里的“配置”包含面向临床问题的 harness，并非一次新的基础模型发布；准确可用性、价格与 PHI 条件应继续以官方文档为准。

### GPT-6 蛋白设计研究

OpenAI 报告 GPT-6.2 在蛋白结构设计、序列重设计、分子对接和突变效果排序上的实验。官方披露，在五个目标的 322 个 minibinder 中有 35 个显示结合信号，但也明确指出命中率受筛选流程和“结合”定义影响，且专用模型参与了候选筛选。该结果是早期研究信号，不代表药物安全性、有效性或端到端自动化已经解决。

## Love：正向口碑样本

- [GPT-6.2 rollout 讨论串](https://www.reddit.com/r/ChatGPT/comments/1y3sxna/62_in_chatgpt/) 中仍有用户称 6.2 High 是明显升级，尤其认可长上下文下的结果；同串也有人偏好旧模型。没有统一提示词和盲测，只能视为**低置信度个人体验**。
- [Hacker News 的蛋白研究讨论](https://news.ycombinator.com/item?id=50634658) 显示技术社区对实验设计、专用模型依赖和生物安全边界有实际讨论价值，但讨论热度本身不证明研究结论。

## Hate：负向口碑样本

- [r/ChatGPTcomplaints 的回归讨论](https://www.reddit.com/r/ChatGPTcomplaints/comments/1y47n2j/chatgpt_62_is_this_a_regression/) 集中抱怨回复更短、更冷、对长期对话风格遵循变差；评论中也有个别用户称早些时候的推理表现较好。
- [r/ChatGPT 的 Work/Chat 体验讨论](https://www.reddit.com/r/ChatGPT/comments/1y4e9n1/any_updates_on_the_62_situation/) 报告 Work 模式完成度、指令遵循和幻觉问题，但回复也有人认为 Chat 模式更好。账户、推理档位和灰度状态不一致，无法据此定位是模型、harness、配额还是 rollout 问题。

## 口碑判断

**结论：负向样本增多，但整体判断仍为分化、低置信度。** 本轮负面反馈聚焦对话温度、输出长度、开放任务完成度与指令遵循；正面样本聚焦较高推理档位和给足上下文后的表现。官方发布不算正向口碑，Reddit 自选择偏差明显，也缺少可复现实验，因此不做“GPT-6.2 整体退化”的事实判断。

## 比较与开发者影响

- Healthcare 配置说明 OpenAI 正把 Responses API 与领域 harness、专用检索索引组合；开发者应把它理解为受约束的领域配置，而不是新的基础模型家族。
- 蛋白设计论文给出实验室与计算证据，但任何“超过专用模型”的结论都必须限定到具名任务、评测方法和专用模型参与方式，不能外推到完整药物发现。
- 本轮没有可复现证据支持 Codex、Claude Code、Cline、Pi Coding Agent、DeepSeek Harness/DSH 或 Cursor 之间的新排名。Codex alpha 连续发布只说明开发活动，不代表稳定能力变化。

## 日期未确认

- OpenAI Developer Community 与公开社交搜索出现一些关于 Work 执行时长、工具调用和额度变化的帖子，但相对时间、账户配置或复现步骤不足；未把它们写成已确认平台变更。

## 观察池

- Codex 0.172.0 于 11 月 24 日 08:03（上海时间）发布，早于本轮窗口约 2 小时 41 分。它包含终端会话链接、slash command 参数补全、MCP 懒启动、单工具审批 reviewer 与远程会话路径保留等变化，作为较旧背景保留，但不计入本轮 24 小时正式更新。
- GPT-6.2 社区反馈很可能混合 Chat、Work、Codex、不同推理档位与分批 rollout；除非 OpenAI 发布问题说明或可复现实验出现，本页继续把“故意降级”“限流导致质量下降”等说法视作未证实推测。

## 来源链接

1. [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
2. [OpenAI Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes)
3. [Healthcare model configurations in the OpenAI API](https://help.openai.com/en/articles/20001656-healthcare-model-configurations-in-the-openai-api)
4. [GPT-6 models demonstrate intrinsic protein-design capabilities](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)
5. [Codex 0.173.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.173.0-alpha.5)
6. [r/ChatGPT：6.2 in ChatGPT](https://www.reddit.com/r/ChatGPT/comments/1y3sxna/62_in_chatgpt/)
7. [r/ChatGPTcomplaints：ChatGPT 6.2 — is this a regression?](https://www.reddit.com/r/ChatGPTcomplaints/comments/1y47n2j/chatgpt_62_is_this_a_regression/)
8. [r/ChatGPT：Any updates on the 6.2 situation](https://www.reddit.com/r/ChatGPT/comments/1y4e9n1/any_updates_on_the_62_situation/)
9. [Hacker News：GPT-6 protein-design discussion](https://news.ycombinator.com/item?id=50634658)

## 采集状态

- **已检查**：OpenAI 产品新闻、Research/Science、API changelog、模型与 ChatGPT release notes、Healthcare 文档、Codex 稳定版及 alpha releases、模型/弃用/Assistants 迁移文档、Agents SDK、Developer Community、Reddit 五个相关社区、Hacker News、公开社交搜索、YouTube 与可信技术媒体。
- **失败/受限来源**：X 未登录结果不稳定；YouTube 未发现窗口内可核验官方新增；Reddit 缺少一致的精确时分且体验不可复现；Developer Community 部分主题需登录或只有相对时间。
- **初始候选数**：14。
- **最终保留来源数**：9（4 个官方文档/研究来源、1 个 Codex 预发行来源、3 个社区口碑样本、1 个 HN 讨论）。
- **二次补搜**：否；已有多条可核验官方来源，不触发零来源二次搜索。

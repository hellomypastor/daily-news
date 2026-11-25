---
title: "主流 AI / Agent 厂商技术动态日报"
date: "2026-11-25T00:00:00+08:00"
updatedAt: "2026-11-25T10:58:00+08:00"
description: "主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredTitle: "Introducing Muse in the UK: A Personal AI Agent You Control"
featuredUrl: "https://about.fb.com/news/2026/11/introducing-muse-in-the-uk-a-personal-ai-agent-you-control/"
featuredSummary: "Meta 将 Muse 个人 Agent 扩展至英国，披露后台任务、连接器、审批、审计与订阅信息。 主流 AI 厂商、研究机构、Agent 平台和技术播客的最新动态。"
featuredPublishedAt: "2026-11-23"
featuredTags: ["Meta","Muse","Agent","近两日补充"]
featuredImage: "https://about.fb.com/wp-content/uploads/2026/11/England_v2a_4x3.png?w=1200"
featuredImageAlt: "Meta Muse 英国发布文章中的 Muse 角色与英国主题插图"
featuredImageCaption: "图片来源：Meta Newsroom"
tags:
  - "观察池"
  - "近两日补充"
  - "可信二手来源"
  - "日期未确认"
  - "详见 Claude 专题页"
  - "详见 OpenAI 专题页"
  - "Agent"
  - "AI"
  - "Ai2"
  - "Anthropic"
  - "API"
  - "Benchmark"
  - "Changelog"
  - "Google"
  - "Healthcare"
  - "Industry"
  - "MCP"
  - "Meta"
  - "Muse"
  - "NVIDIA"
  - "OpenAI"
  - "Protein Design"
  - "Research"
  - "Robotics"
  - "Safety"
  - "Science"
  - "Sim2Real"
  - "Transformer"
---

## 今日概览

采集窗口：**2026-11-24 10:58 至 2026-11-25 10:58（Asia/Shanghai）**；另按规范检查 24–48 小时与 48–72 小时补充。本轮可核实的主线是：OpenAI 将 GPT-6 系列扩展到医疗合规配置与蛋白设计研究，Anthropic 扩展 MCP 服务器可分发的 Agent 能力，机器人侧则出现从仿真训练到真实部署的完整工作流。Meta Muse 英国上线与 Google DeepCrossAttention 属于近两日补充。xAI/Grok 的新闻、文档、API/model release notes 与官方仓库已逐项检查，未发现 72 小时内可核实的新公告。

## 优先动态（过去 24 小时）

| 厂商/机构 | 标题 | 类型 | 日期/状态 | 摘要与意义 |
|---|---|---|---|---|
| OpenAI | [Healthcare model configurations in the OpenAI API](https://help.openai.com/en/articles/20001656-healthcare-model-configurations-in-the-openai-api) | API / 合规 | 2026-11-24，已核实 | OpenAI 为 GPT-6.2、GPT-6.1 与 GPT-6 mini 提供面向受监管医疗工作负载的特定配置，强调数据驻留、保留与零数据保留等控制。这是前沿模型向行业合规部署下沉的信号，**详见 OpenAI 专题页**。 |
| OpenAI | [GPT-6 models demonstrate intrinsic protein-design capabilities](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) | 科学研究 | 2026-11-24，已核实 | OpenAI 报告 GPT-6 系列在蛋白设计任务上的实验，并公开研究背景与限制；它把通用模型的科学能力从文本评测推向可实验验证的设计任务，**详见 OpenAI 专题页**。 |
| Anthropic | [MCP servers can now ship skills, run tasks, and more with Claude](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more) | Agent / MCP | 2026-11-24，日期到日已确认 | Anthropic 说明 MCP 服务器可携带 Skills、运行 Tasks 并使用 Elicitation，扩展连接器从工具暴露到工作流封装；官方页未披露具体时刻，**详见 Claude 专题页**。 |
| NVIDIA / Hugging Face | [Microduck Obstacle Avoidance](https://huggingface.co/blog/nvidia/microduck-obstacle-avoidance) | 机器人 / Sim2Real | 2026-11-24，已核实 | 教程用 Isaac Lab、Newton、ToF 传感与冻结步态策略构建避障控制器，覆盖并行训练、ONNX 导出和真机测试。价值在于给出从仿真到硬件部署的可复现链路，而非只展示机器人演示。 |

## 常规动态

| 厂商/机构 | 动态 | 状态 | 说明 |
|---|---|---|---|
| OpenAI | [API Changelog](https://developers.openai.com/api/docs/changelog) | 2026-11-24，已核实 | 官方变更日志记录 GPT-6 医疗模型配置；与上方医疗说明共同支持 API 侧事实，详见 OpenAI 专题页。 |
| Meta / Microsoft / Mistral / Cohere | 官方新闻、研究与变更入口已检查 | 主窗口无新增 | 没有把较旧条目或搜索摘要日期包装成过去 24 小时发布。 |
| Qwen/阿里 / 字节 Seed / 百度 / 腾讯混元 / DeepSeek / 智谱 / Kimi / 阶跃 / MiniMax | 官方新闻、文档或仓库已检查 | 主窗口无新增 | 部分动态页日期信息不完整，限制已记录；不据此推断厂商没有内部更新。 |
| LangChain / LlamaIndex | 官方博客与文档已检查 | 主窗口无新增 | 未发现可由原始页面确认的新平台发布。 |

## Coding Agent / Harness 行业信号

Cline、Pi Coding Agent / pi-mono 与 DeepSeek Harness / DSH 的官方仓库、release、文档和公司级入口均已检查。本轮未发现融资、合作、企业采用、桌面/IDE 分发、具名评测或生态扩张等足以进入行业页的新事件；例行版本与代码变化留在开源专题页，**详见开源专题页**。

## 近两日补充（24–48 小时）

- **Meta Muse 英国上线**：Meta 于 11 月 23 日宣布 [Muse 在英国面向 18 岁以上用户开放](https://about.fb.com/news/2026/11/introducing-muse-in-the-uk-a-personal-ai-agent-you-control/)，覆盖 iOS、Android、muse.ai 和 WhatsApp。官方说明其可在用户关闭应用后继续长任务，敏感动作需要批准，并提供连接器、审计记录与可选订阅；这是消费级托管 Agent 的区域扩张与控制面信号。
- **Google Research DeepCrossAttention**：Google 于 11 月 23 日发布 [Supercharging transformer residual connections](https://www.research.google/blog/supercharging-transformer-residual-connections/)，介绍按 token 动态选择历史层表示的深度交叉注意力。官方实验称它在特定设置下以更少训练步达到标准 Transformer 的质量；结论限定在文章列出的实验与基准内。
- **Ai2 RoboTrack**：Ai2 于 11 月 23 日发布 [RoboTrack](https://huggingface.co/blog/allenai/robotrack)，包含 307 段人工标注视频的 RoboTrack-Bench、1500 万轨迹的仿真数据与两个点跟踪模型。其意义是揭示通用点跟踪基准可能高估真实机器人操作表现，并提供可复核数据。

<figure class="source-image">
  <a href="https://about.fb.com/news/2026/11/introducing-muse-in-the-uk-a-personal-ai-agent-you-control/"><img src="https://about.fb.com/wp-content/uploads/2026/11/England_v2a_4x3.png?w=1200" alt="Meta Muse 英国发布文章中的 Muse 角色与英国主题插图" loading="lazy" /></a>
  <figcaption><a href="https://about.fb.com/news/2026/11/introducing-muse-in-the-uk-a-personal-ai-agent-you-control/">图片来源：Meta Newsroom</a></figcaption>
</figure>

## 近三日补充（48–72 小时）

未发现需要补入且尚未由近两日条目覆盖的原始来源。

## 播客

Latent Space、Dwarkesh、No Priors、The Cognitive Revolution、a16z AI 与厂商播客的公开归档已检查；当前公开列表没有显示过去 24 小时内可确认的新集，不用较旧节目填充。

## 日期未确认

- Anthropic MCP 文章可确认日期为 11 月 24 日，但没有公开具体时刻，因此可能落在主窗口边界两侧；本页保留为“日期到日已确认、时刻未确认”，不声称精确发布时间。

## 观察池

- [Axios：AI employees sound alarm](https://www.axios.com/2026/11/24/anthropic-openai-unreleased-ai-safety-risks) 引述二十多名匿名消息源，称 Anthropic 与 OpenAI 内部对未发布模型的安全风险存在争论。该报道属于可信二手来源，但核心材料无法由公开原始文件独立验证，因此仅作公司治理与安全文化信号，不把“存在某个不可发布模型”写成已确认事实。
- xAI/Grok：官方新闻、开发者文档、API/model release notes 与仓库已检查；普通模型/API、DeepSearch、语音、编码、工具调用和 Agent 方向均无本轮可报告变化，不以 11 月 19 日及更早的旧条目填充。

## 来源链接

1. [OpenAI：Healthcare model configurations](https://help.openai.com/en/articles/20001656-healthcare-model-configurations-in-the-openai-api)
2. [OpenAI：GPT-6 protein-design research](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/)
3. [Anthropic：Skills over MCP, Tasks and more](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more)
4. [NVIDIA / Hugging Face：Microduck obstacle avoidance](https://huggingface.co/blog/nvidia/microduck-obstacle-avoidance)
5. [OpenAI API Changelog](https://developers.openai.com/api/docs/changelog)
6. [Meta：Muse in the UK](https://about.fb.com/news/2026/11/introducing-muse-in-the-uk-a-personal-ai-agent-you-control/)
7. [Google Research：DeepCrossAttention](https://www.research.google/blog/supercharging-transformer-residual-connections/)
8. [Ai2：RoboTrack](https://huggingface.co/blog/allenai/robotrack)
9. [Axios：AI employees sound alarm](https://www.axios.com/2026/11/24/anthropic-openai-unreleased-ai-safety-risks)

## 采集状态

已检查规范列出的全部厂商、研究机构、Agent 框架与播客入口，并显式覆盖 xAI/Grok 的模型/API、DeepSearch、语音、编码、工具调用和 Agent 渠道，以及 Cline、pi-mono、DeepSeek Harness/DSH 的行业级信号。失败或受限项为 xAI 本轮无 72 小时新条目、部分中国厂商脚本型页面缺少精确日期、X 未登录限制与部分播客归档时间粒度不足。初始候选 **12** 条，最终保留 **9** 个唯一 URL；来源不为 0，未触发二次补搜。

今日结论：行业更新从单纯模型发布进一步分化为合规行业配置、Agent 协议封装和可复现的机器人训练/评测链路。

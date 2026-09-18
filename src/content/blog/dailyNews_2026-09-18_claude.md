---
title: "Claude 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-18T00:00:00+08:00"
updatedAt: "2026-09-18T10:46:00+08:00"
description: "Claude 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Claude Code v2.1.276"
featuredUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.276"
featuredSummary: "修复 v2.1.275 在代理或网关环境中因 advisor input tag 导致全部请求返回 400 的回归。 Claude 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-18 10:12 +08:00"
featuredTags: ["Claude Code","Gateway","Bugfix"]
tags:
  - "观察池"
  - "可信二手来源"
  - "日期未确认"
  - "社区口碑"
  - "时间锚点"
  - "Agent"
  - "Anthropic"
  - "Bugfix"
  - "Claude"
  - "Claude Code"
  - "Claude Science"
  - "Enterprise"
  - "Gateway"
  - "Hate"
  - "Life Sciences"
  - "Love"
  - "Managed Agents"
  - "Plugins"
  - "Projects"
  - "Research"
  - "Safety"
  - "Security"
  - "Skills"
  - "VS Code"
---

## 今日概览

采集窗口：**2026-09-17 10:46 至 2026-09-18 10:46（Asia/Shanghai）**。本轮可精确确认的产品更新是 Claude Code v2.1.275 与随后修复回归的 v2.1.276；前者扩展账户 Skills/Plugins 同步、消息队列、插件供应链防护、VS Code 逐项审阅与云端例程能力，后者修复网关用户请求全部失败的问题。生命科学验证计划有可信分发时间锚点落入窗口。Projects beta、生命科学模型优化和内部 Agent 监测文章均有官方内容，但官方页只给日期或“Updated today”，因此分别在正文中标注证据限制。

## Tier 1：编码与 Agent 主轴

| 产品面 | 状态 | 过去 24 小时核验结果 |
| --- | --- | --- |
| Claude Code CLI | **有新增** | [v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275) 于 09-18 06:33 发布，加入 `Ctrl+Enter` / `Ctrl+X Ctrl+S` 立即发送队列、账户 Skills/Plugins 同步与大量恢复、沙箱、插件、终端可靠性修复；[v2.1.276](https://github.com/anthropics/claude-code/releases/tag/v2.1.276) 于 10:12 紧急修复 2.1.275 在代理/网关下触发 `advisor_20260301` 400 的回归。 |
| VS Code 集成 | **有新增** | v2.1.275 增加在 Memory 对话框查看/编辑/删除记忆、无文字发送图片、MCP 重试、逐项接受或拒绝 proposed diff，并修复 Agent map、Remote Control、滚动、会话恢复和高对比度等问题。 |
| JetBrains 集成 | 无新增 | 已检查官方发布与文档入口，未发现窗口内独立更新。 |
| Managed Agents（sessions / webhooks / environments / memory stores） | **有新增** | v2.1.275 改进自托管 runner 关停排空、后台 Agent 恢复、托管 session 权限提示与云环境校验；[Projects beta 帮助页](https://support.claude.com/en/articles/9517075-what-are-projects) 描述并行云线程、关闭电脑后继续运行和共享 Library，但只标“Updated today”，精确发布时间未确认。 |
| Skills 与 marketplaces | **有新增** | v2.1.275 可把 claude.ai 启用的 Skills/Plugins 同步到终端，并新增安装时自动建议添加 marketplace；npm 来源改用 `npm pack --ignore-scripts` 且校验完整性，同时修复凭据在 URL、日志和插件对话框中暴露的问题。 |
| Claude Developer Platform | 无独立发布 | 已检查开发者文档与 Newsroom；窗口内未见新模型或 API 版本公告。 |
| Agent SDK | **有新增** | v2.1.275 修复 `--forward-subagent-text` 丢失由 fork skill 生成的子 Agent 消息，并改善动态系统提示缓存；未见 Agent SDK 独立版本公告。 |
| Cowork | **有相关更新** | Projects beta 页说明后续会扩展到 Cowork；v2.1.275 改善可编辑 Artifact 的更新与定时例程复用，但未见 Cowork 独立发布。 |
| Design | 无新增 | 帮助中心与官方入口未发现窗口内独立 Design 更新。 |
| Tag / @Claude sessions | **有新增** | v2.1.275 为 access bundle 增加 guest/Slack Connect 附加条件，新增 CloudWatch、SNS、Google Cloud Monitoring/Logging 与更多 Datadog 预设，并修复频道活跃、模型保持、重复回复和 AWS S3 上传。 |
| 当前 Sonnet 编码模型 | 无新增 | 未发现窗口内 Sonnet 家族的新模型或编码能力公告。 |
| 当前 Opus 编码模型 | 无新增 | 未发现窗口内 Opus 家族的新模型或编码能力公告。 |
| 当前 Haiku 编码模型 | 无新增 | 未发现窗口内 Haiku 家族的新模型或编码能力公告。 |

## Tier 2：客户端、连接器与创作面

| 产品面 | 状态 | 过去 24 小时核验结果 |
| --- | --- | --- |
| Chrome / browser agent | **有相关更新** | v2.1.275 调整 Chrome auto mode：分类器批准的调用可跳过扩展逐站点检查，修复重定向后的 `browser_batch` 权限拒绝；未见独立产品公告。 |
| Desktop / Preview | **有相关更新** | v2.1.275 改善图片附件保存位置与 `/desktop` 打开失败说明；Projects beta 可从 Desktop Code tab 进入，但精确更新时间未确认。 |
| Marketplace / Connectors / Plugins | **有新增** | 账户同步、npm 安全抓取、marketplace 安装与凭据脱敏均有更新；未发现独立 Connectors 新品发布。 |
| 当前官方创意 / 视频模型 | 无新增 | 未发现窗口内官方创意或视频模型发布。 |
| Voice Mode | 无新增 | 帮助中心与 release notes 未见窗口内新条目；社区有对语音变化的负面反馈，属于体验样本而非官方发布。 |
| Microsoft 365 集成 | 无新增 | 未发现窗口内 Microsoft 365 集成公告。 |

## Tier 3：垂直领域

- **生命科学：有新增。** [Life Sciences Verification Program 官方公告](https://www.anthropic.com/news/life-sciences-verification-program) 推出面向团队和机构的 beta：Standard Use 为广泛生命科学工作放宽生物分类器，High-risk Use 需更严格项目级审核；覆盖 Claude Science、Claude.ai、Claude Code 与 API。官方页仅列 09-17，[Public Technologies 的未改写分发记录](https://www.publicnow.com/view/E4721A242F8A3E1A94920BD4F418A456B8CD191D) 给出 09-18 01:41（上海时间）分发时间，作为窗口内时间锚点，不冒充官网首发时刻。
- **科学计算：日期未确认。** [Anthropic 研究文章](https://www.anthropic.com/research/claude-uplifts-biomolecular-modeling) 称 Claude 在不到四周内优化 30 多个生物分子模型，平均约 4 倍提速，并开放优化代码与低内存模式；官方页仅列 09-17，无法确认是否晚于本轮 10:46 起点。
- **安全与 Agent 监督：日期未确认。** [Anthropic Institute 文章](https://www.anthropic.com/institute/measuring-pace-of-ai-development) 披露其内部平台在 2026 年 8 月任一时刻约运行 3 万个研发 Agent，并给出在线/离线监测覆盖、延迟和升级率度量；官方索引仅列 09-17。该文是内部快照与方法提案，不能外推为所有 Claude 客户部署。
- **金融服务、医疗、法律、政府、非营利、教育、客户支持：无新增。** 已检查官方 Newsroom、Help Center 与近期媒体入口，窗口内未找到足以形成独立事实条目的新材料；LSVP beta 不可等同于 HIPAA-ready 医疗产品，官方说明其目前不适用于 BAA-enabled 组织。

<figure class="source-image">
  <a href="https://www.anthropic.com/institute/measuring-pace-of-ai-development"><img src="https://www.anthropic.com/_next/image?q=75&amp;url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F31704b297a9350f392f143ea078561f36cd14908-1920x1230.png&amp;w=3840" alt="Anthropic 文章中展示 Claude 参与模型研发自动化程度的官方图表" loading="lazy" /></a>
  <figcaption><a href="https://www.anthropic.com/institute/measuring-pace-of-ai-development">图片来源：Anthropic 官方研究文章</a></figcaption>
</figure>

## 官方更新（由新到旧）

### Claude Code v2.1.276：修复代理与网关的全请求失败回归

[v2.1.276](https://github.com/anthropics/claude-code/releases/tag/v2.1.276) 只有一项但影响直接：修复 2.1.275 在 `ANTHROPIC_BASE_URL` 指向代理或网关时，所有请求可能因不被支持的 `advisor_20260301` input tag 返回 400。它距离 2.1.275 约 3 小时 39 分钟，说明使用自建网关的团队应避免停留在 2.1.275。

### Claude Code v2.1.275：账户同步、队列控制与供应链防护

[v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275) 是一轮跨 CLI、VS Code、Web、Tag 与 Code Review 的大更新。生产力主线包括立即发送全部排队消息、账号 Skills/Plugins 同步、逐项审阅 diff、改进 Agent map 与云端例程；安全主线包括 marketplace/插件 URL 凭据脱敏、npm 包禁止执行 install scripts 并做完整性校验。版本也修复大量损坏 transcript、文件历史、后台任务与内存压力场景。

### Life Sciences Verification Program beta

[官方公告](https://www.anthropic.com/news/life-sciences-verification-program) 把生命科学访问拆成按团队续期的 Standard Use 与按项目、六个月续期的 High-risk Use，并要求持续监测与 30 天数据保留。官方称早期计划已接入数十家组织，预期首周接纳数百家；这些是厂商目标与自报进度，不是第三方采用验证。

## Love

- [Claude Project Showcase 讨论页](https://www.reddit.com/r/ClaudeAI/comments/1weari5/claude_project_showcase_discussion_hub_updated_on/) 的 09-17 样本包括非程序员用 Claude 迭代交互式网页并让其自行截屏修复移动端问题，以及开发者用 Claude Code 构建应用、语音桥接与多 Agent 工作流。公开索引中多数单条仅约 1 分，属于低互动自选展示，只能作为“有人分享成功工作流”的弱正向信号。

## Hate

- [Performance and Bugs 讨论页](https://www.reddit.com/r/ClaudeAI/comments/1wguzo8/performance_and_bugs_discussion_hub_updated_on_15/) 的 09-17 样本集中抱怨忽略素材、幻觉累积、新设计退步、语音变得机械，以及生物/网络安全主题触发分类器并消耗额度。索引可见互动多为 1–2 分，且帖子由负面问题聚合页采样，选择偏差很强。

## 情绪判断

**分化，置信度低。** 正向样本主要是 Showcase 中的实际构建与工作流，负向样本来自专门汇总性能与故障的讨论页；两类入口都不是随机样本，且可见互动量很低。官方公告不计入 Love，v2.1.276 的快速回归修复也只证明问题被修复，不能据此判断整体口碑。

## 对比与迁移信号

社区材料零散提到 Codex、GPT、Gemini 和 Copilot，也出现把 Claude Code 接入第三方模型的用法，但本轮没有同任务、同上下文、可复现实验，不能得出 Claude Code 追平或落后于 Codex、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH 的结论。Cline、Pi 与 DSH 的完整产品更新由开源 Coding Agent 专题处理。

## 日期未确认

- [Projects beta 帮助页](https://support.claude.com/en/articles/9517075-what-are-projects) 只显示“Updated today”，无法核验更新时分；保留其并行云线程、持久运行与 Library 的产品事实，不把它写成已确认在窗口内首发。
- [生物分子建模文章](https://www.anthropic.com/research/claude-uplifts-biomolecular-modeling) 与 [研发节奏测量文章](https://www.anthropic.com/institute/measuring-pace-of-ai-development) 均只显示 09-17；内容相关且原始来源可信，但可能早于 10:46 窗口起点。

## 观察池

- Projects beta 目前面向部分使用 Claude Code 的 Pro/Max 用户分阶段开放；继续观察官方是否给出公开 rollout 时间表，以及 chat、Cowork、Team、Enterprise 的后续接入。
- v2.1.275 到 v2.1.276 的网关回归已由官方修复说明确认；尚未找到可量化的受影响范围或独立社区样本，不夸大事故规模。
- LSVP 的“首周数百家”是计划性表述；后续关注实际接入、审计机制、数据保留与 BAA/HIPAA 兼容性的独立验证。

## 来源链接

1. [Claude Code v2.1.276](https://github.com/anthropics/claude-code/releases/tag/v2.1.276)
2. [Claude Code v2.1.275](https://github.com/anthropics/claude-code/releases/tag/v2.1.275)
3. [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects)
4. [Introducing the Life Sciences Verification Program](https://www.anthropic.com/news/life-sciences-verification-program)
5. [Public Technologies 分发时间记录](https://www.publicnow.com/view/E4721A242F8A3E1A94920BD4F418A456B8CD191D)
6. [How Claude is uplifting biomolecular modeling](https://www.anthropic.com/research/claude-uplifts-biomolecular-modeling)
7. [Measurements for understanding the pace of AI development](https://www.anthropic.com/institute/measuring-pace-of-ai-development)
8. [Claude Project Showcase Discussion Hub](https://www.reddit.com/r/ClaudeAI/comments/1weari5/claude_project_showcase_discussion_hub_updated_on/)
9. [Performance and Bugs Discussion Hub](https://www.reddit.com/r/ClaudeAI/comments/1wguzo8/performance_and_bugs_discussion_hub_updated_on_15/)

## 采集状态

- **已检查：** Anthropic Newsroom、Research、Institute、Help Center、Developer Platform、Agent SDK 与 Managed Agents 文档；Claude Code GitHub Releases/API；VS Code、JetBrains、Web、Tag、Chrome、Desktop、Cowork、Design、Skills、Plugins、Connectors；events、Status；Reddit 四个社区、Hacker News、X、YouTube，以及可信二手时间锚点。
- **失败来源：** Reddit JSON API 匿名访问返回 403，改用公开索引与搜索快照；X 没有可同时核验时间与互动量的窗口内原帖；YouTube 未发现合格近时视频；多篇 Anthropic 09-17 页面不显示时分；Hacker News 未找到两版 Claude Code 或 Projects beta 的有效近时讨论。
- **候选数：** 初始 14 条；按同一事件与规范化 URL 合并后保留 9 个唯一 URL。
- **二次补搜：** 未执行（最终 sources 不为 0）。

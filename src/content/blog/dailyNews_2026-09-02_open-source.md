---
title: "今日 AI / Agent 开源项目与技术博客精选"
date: "2026-09-02T00:00:00+08:00"
updatedAt: "2026-09-02T19:02:00+08:00"
description: "经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredTitle: "DeepSeek Harness v0.1.2-alpha.4"
featuredUrl: "https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4"
featuredSummary: "DSH 为父 Agent 与可持续子 Agent 增加双向 send_message，并调整 web_fetch 与 Session API。 经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。"
featuredPublishedAt: "2026-09-01 23:45 +08:00"
featuredTags: ["DeepSeek Harness","Agent Harness","Multi-Agent"]
featuredImage: "https://opengraph.githubassets.com/df4e2150333f4424187d637a45a96c8cd67b569d7364ad085ee2ea5f66b8a047/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4"
featuredImageAlt: "DeepSeek Harness v0.1.2-alpha.4 GitHub 发布页预览图"
featuredImageCaption: "图片来源：DeepSeek Harness GitHub 官方发布页"
tags:
  - "较旧背景"
  - "日期未确认"
  - "Agent"
  - "Agent Engineering"
  - "Agent Harness"
  - "Agent Reliability"
  - "Agent Runtime"
  - "Agent Skills"
  - "AI"
  - "Alpha"
  - "Beta"
  - "CLI"
  - "Cline"
  - "Codex"
  - "Coding Agent"
  - "DeepSeek Harness"
  - "Education"
  - "Engineering"
  - "Generative UI"
  - "Git"
  - "GitHub Trending"
  - "LLM"
  - "LLM Inference"
  - "Long Context"
  - "Memory"
  - "Multi-Agent"
  - "Observability"
  - "Open Source"
  - "OpenCode"
  - "Performance"
  - "Pi"
  - "Post-training"
  - "Prompt Optimization"
  - "Python"
  - "Reliability"
  - "Research"
  - "Science"
  - "SDK"
  - "Security"
  - "Self-hosted LLM"
  - "Session"
  - "Session Import"
  - "Tool Calling"
  - "Tool Execution"
  - "Video"
---

## 今日概览

本轮技术亮点窗口滚动至 **2026-08-31 19:02 至 2026-09-02 19:02（Asia/Shanghai，48 小时）**。新增 DeepSeek Harness v0.1.2-alpha.5，针对从特定旧版升级时可能无法启动或丢失会话标题的回归做了定向修复。新增一项企业自托管 LLM 研究，从生产流量错误分析出发，分别训练指令遵循、函数调用和内部任务分布专家后再合并。Cline Desktop 0.0.22 与扩展 4.1.17 两项稳定发布：前者把 Claude Code、Codex 与 OpenCode 历史导入做成可恢复会话，后者修复长会话 Hub 进程因反复广播完整 transcript 而可能膨胀到数十 GB 的问题。新论文 Harness-of-Harness 研究在既有 coding-agent harness 之上组织多轮规划—编码—测试循环；另一项安全研究则系统化描述低权限上下文进入高权限消息角色或跨作用域残留的风险。

Coding Agent / harness 主线累计出现 Cline Desktop、SDK/CLI、DeepSeek Harness 与 OpenCode 的明确发布：Cline SDK 0.0.82 与 CLI 3.0.61 新增跨 Claude Code、Codex 与 OpenCode 的会话导入，并修复空 capability 列表导致工具或图像被静默剥离、checkpoint 恢复可覆盖后续提交等风险。DSH 继续迭代长会话和可持续子 Agent 通信，OpenCode 修复跨模型推理回放与工具计时。新增的推理工程文章区分了调节延迟—吞吐取舍与整体外推效率边界的技术，多 Agent 研究则用类型化控制对象隔离可优化提示与执行协议。新研究同时覆盖 coding agent 的 Git 配置执行风险与工作记忆评测。GitHub Trending 仍以 Agent skills、交互式多 Agent 与工具安全为主，但 Trending 只证明当日热度，不代表项目当天发布。

## Coding Agent / Harness 雷达

| 项目 | 本轮状态 | 技术意义 | 一手来源 |
|---|---|---|---|
| Cline | **已验证稳定发布**：[Desktop v0.0.22](https://github.com/cline/cline/releases/tag/desktop-v0.0.22)，2026-09-02 13:20 +08:00 | 导入 Claude Code、Codex 与 OpenCode 历史为可恢复会话；定时任务运行折叠分组，macOS 语音输入修复，Web 搜索默认开启。 | 官方 release |
| Cline | **已验证稳定发布**：[v4.1.17](https://github.com/cline/cline/releases/tag/v4.1.17)，2026-09-02 13:40 +08:00 | 修复长会话 Hub 完整 transcript 广播导致的内存放大；hook 启动失败不再拖垮扩展核心。 | 官方 release |
| Cline | **已验证发布**：[SDK v0.0.82](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.82) / [CLI v3.0.61](https://github.com/cline/cline/releases/tag/cli-v3.0.61)，2026-09-02 12:40 / 12:49 +08:00 | SDK 增加 Claude Code、Codex、OpenCode 会话的事务式导入；SDK/CLI 共同修复 capability 误判、checkpoint 恢复覆盖后续提交、远程 MCP 启动超时及 Codex 登录刷新等可靠性问题。 | 官方 releases |
| Cline | **已验证 beta**：[Desktop v0.0.22-beta.1](https://github.com/cline/cline/releases/tag/desktop-v0.0.22-beta.1)，2026-09-02 06:39 +08:00 | 符合资格的内部账号可在桌面运行时直接注册 Composio 工具；OAuth 撤销与连接对账更稳健，新桌面会话默认启用 Web 搜索。beta 身份需明确，不视为稳定版。 | [官方 release](https://github.com/cline/cline/releases/tag/desktop-v0.0.22-beta.1) |
| Cline | **已验证发布**：Desktop v0.0.21，2026-09-01 05:41 +08:00 | Stop 现在会向 delegated subagents 与 teammates 传播取消，避免后台遗留任务；Marketplace 改为双栏浏览，provider 模型目录改为动态刷新，并修正认证错误分类。 | [官方 release](https://github.com/cline/cline/releases/tag/desktop-v0.0.21) |
| DeepSeek Harness / DSH | **已验证发布**：[v0.1.2-alpha.5](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5)，2026-09-02 18:02 +08:00 | 修复从 0.1.1-rc.2 或 0.1.2-alpha.3 升级后应用可能无法启动、会话列表标题可能消失的问题；这是 alpha 升级兼容性修复。 | [官方 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5) |
| DeepSeek Harness / DSH | **已验证发布**：v0.1.2-alpha.4，2026-09-01 23:45 +08:00 | 父 Agent 与可持续子 Agent 改用 `send_message` 双向跟进；Python SDK、Headless、ACP 和自定义 Profile 默认提供 `web_fetch`，同时用按需 API 替换整段 `Session.events` 读取。 | [官方 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4) |
| DeepSeek Harness / DSH | **已验证发布**：v0.1.2-alpha.3，2026-09-01 00:03 +08:00 | 长会话可预览未加载分页轮次，并降低渲染内存；运行中排队图片与可持续子代理后续消息的图片投递得到修复。SQLite Session 可选持久化后端被移除，升级者需留意迁移。 | [官方 release](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.3) |
| Pi Coding Agent | **已检查，无新 release** | `badlogic/pi-mono` 已由 GitHub 重定向到 `earendil-works/pi`；窗口内可见工具中止、in-memory fork 与受限 seccomp 启动兼容等提交，但尚未形成 release，本页不把提交集合包装成版本发布。 | 官方仓库与 releases |
| OpenCode | **已验证发布**：[v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26)，2026-09-02 05:52 +08:00 | 修复 Claude 5 会话中过期 thinking blocks、Bedrock GPT-5.6 的 `none` reasoning effort 与推理回放，并校正运行中工具元数据变化时的计时。 | [官方 release](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) |
| Aider / Continue / Roo Code | **已检查，无可报告 release** | 最新公开 release 均早于本窗口，因此不重复较旧背景。 | 各官方仓库、release 与 changelog |

<figure class="source-image">
  <a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4"><img src="https://opengraph.githubassets.com/df4e2150333f4424187d637a45a96c8cd67b569d7364ad085ee2ea5f66b8a047/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4" alt="DeepSeek Harness v0.1.2-alpha.4 GitHub 发布页预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4">图片来源：DeepSeek Harness GitHub 官方发布页</a></figcaption>
</figure>

## 已验证技术亮点

### 新增：Cline Desktop 0.0.22 与扩展 4.1.17

[Cline Desktop v0.0.22](https://github.com/cline/cline/releases/tag/desktop-v0.0.22) 于 2026-09-02 13:20 +08:00 发布，可扫描 Claude Code、Codex 与 OpenCode 本地历史并转换为可搜索、恢复的 Cline 会话；恢复时使用 Cline 当前配置的 provider/model。它还分组显示同一定时任务的多次运行，修复 macOS 语音权限，并默认开启 Web 搜索。

[Cline v4.1.17](https://github.com/cline/cline/releases/tag/v4.1.17) 于 2026-09-02 13:40 +08:00 发布。官方说明此前状态变化会把完整 transcript 广播给所有客户端，大任务可能让 Hub 增长到数十 GB；新版快照只携带状态。hook 启动失败也不再崩溃扩展核心。

### 1. Cline SDK / CLI：跨 Agent 会话导入与高风险恢复保护

[Cline SDK v0.0.82](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.82) 于 2026-09-02 12:40 +08:00 发布，[CLI v3.0.61](https://github.com/cline/cline/releases/tag/cli-v3.0.61) 于 12:49 +08:00 发布。SDK 新增 `SessionImportService`，可发现并事务式、幂等地导入 Claude Code、Codex 与 OpenCode 会话，转换为可列出和恢复的 Cline 会话。两版共同修复空 capability 列表使 Dify、SAP AI Core、OpenCode 与 Codex CLI 模型的工具定义被静默移除，以及 checkpoint 恢复可能把后续提交移出分支的问题；CLI 还为不可达远程 MCP 增加 10 秒连接预算，并改善 Codex OAuth 端口占用和临时刷新失败处理。

### 2. Cline Desktop beta：连接器工具进入打包运行时，默认开启 Web 搜索

[Cline Desktop v0.0.22-beta.1](https://github.com/cline/cline/releases/tag/desktop-v0.0.22-beta.1) 于 2026-09-02 06:39 +08:00 发布。符合资格的内部账号可让 Composio connectors 在打包桌面运行时直接注册工具，同时改善 OAuth 撤销、连接/断开与状态对账；新桌面会话默认启用 Web 搜索。该版本明确为 beta，本页不将其描述成稳定版普遍可用。

### 3. OpenCode 1.18.26：跨模型推理回放与工具计时可靠性

[OpenCode v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) 于 2026-09-02 05:52 +08:00 发布。Claude 5 会话现在能容忍提示或工具变化后残留的 thinking blocks；Bedrock GPT-5.6 接受 `none` reasoning effort，推理与 replay 处理也得到修复。工具运行中元数据更新不再重置起始计时，桌面会话重命名保存可靠性亦有改善。

### 4. Cline Desktop：取消操作覆盖子 Agent 全链路

[Cline Desktop v0.0.21](https://github.com/cline/cline/releases/tag/desktop-v0.0.21) 的核心不是界面换肤，而是生命周期控制：父会话停止时会中止 delegated subagents 与 teammates，并将取消状态持久化。这直接减少多 Agent 工作流里“前台已停、后台仍跑”的资源与权限风险。发布说明同时记录模型目录动态刷新、401/403 认证错误归类，以及 Langfuse release build 初始化修复。

### 5. DSH alpha.4：可持续子 Agent 从单向汇报变为双向消息

[DeepSeek Harness v0.1.2-alpha.4](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4) 让父 Agent 与可持续子 Agent 通过 `send_message` 双向传递后续任务，替代单向 `report`。这为长生命周期子任务提供了更清楚的续作语义；同时默认向 Headless、ACP 与 Python SDK 暴露 `web_fetch`，并收紧 Web PTC Mode 默认工具面。

### 新增：DSH alpha.5 修复升级启动与会话标题回归

[DeepSeek Harness v0.1.2-alpha.5](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5) 于 2026-09-02 18:02 +08:00 发布。官方说明该 alpha 定向修复从 `0.1.1-rc.2` 或 `0.1.2-alpha.3` 升级时，应用可能无法启动或会话列表标题消失的问题。该版本仍是 alpha，本页不将其升级兼容性修复扩写为稳定版能力。

### 6. DSH alpha.3：长会话导航与图片投递可靠性

[DeepSeek Harness v0.1.2-alpha.3](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.3) 补齐未加载分页轮次的预览和跳转，改善长会话内存与代码高亮；图片附件在运行中追加或排队发送时可正确回显并可靠投递。需要注意的是，可选 SQLite Session 持久化后端已移除，官方建议用旧版本导出已有内容。

### 7. wrapture：用 Python 包装器给第三方代码补观测

Simon Willison 介绍的 [wrapture](https://simonwillison.net/2026/Aug/31/introducing-wrapture/) 于 2026-09-01 07:59 +08:00 发布。它围绕 Python monkey-patching 提供声明式包装，目标是在不修改目标库源代码的情况下附加日志、追踪或测试行为；对 Agent 工程而言，这类低侵入 instrumentation 可用于观察工具调用与第三方 SDK 边界。该条是独立技术博客，不把作者评价扩写为性能结论。

### 8. GitSpawn：仓库 Git 配置可在 coding agent 启动阶段触发宿主执行

Manifold Security 于 2026-09-02 02:08 +08:00 发布 [GitSpawn 研究](https://www.manifold.security/blog/ai-coding-agents-git-hijack)。研究者称，多款 CLI coding agent 在启动或收集仓库上下文时调用 Git，却没有屏蔽仓库级 `core.fsmonitor` 等可执行配置，使不受信任仓库可能在提示发送甚至认证前触发宿主命令。文章逐项标注供应商响应：其中 Claude Code、Codex、Cursor 与 Goose 的相应问题已修补，另一些产品在发布时仍未修补；本页仅转述研究方复测状态，未独立执行攻击样例。

### 9. Codex 桌面运行时捆绑 LibreOffice、Poppler 与完整 Python/Node

Simon Willison 在 2026-09-02 03:03 +08:00 的 [运行时拆解](https://simonwillison.net/2026/Sep/1/codex-libreoffice/) 中记录，Codex 桌面应用缓存的 primary runtime 包含完整 Python、Node.js，以及 LibreOffice headless、Poppler、Git 等原生工具；配套 skills 指示 Agent 如何调用这些二进制。这提供了桌面 Agent 处理文档与 PDF 时“技能说明 + 本地开源运行时”的可观察实现样本，也提醒用户关注本地缓存体积和执行面。

### 10. Baseten：区分“沿效率边界移动”与“整体外推边界”

Baseten 于 2026-09-02 07:47 +08:00 发布 [The efficient frontier of LLM inference](https://www.baseten.co/blog/the-efficient-frontier-of-llm-inference/)。文章把 batch size、并行策略等视为在延迟—吞吐边界上选择工作点，而量化、内核优化、推测解码等可在特定条件下外推整体效率边界；同时强调真实边界并不平滑，配置拐点需通过 sweep 实测。该分类有助于避免把降低单用户延迟、提高总吞吐和降低成本混成单一“加速”指标。

## GitHub Trending

以下均为 2026-09-02 01:01 左右抓取的 daily 榜单快照；星数增量是页面当时显示值，只表示当日热度。

| 项目 | 榜单信号 | 是什么 / 为什么值得看 |
|---|---:|---|
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | 3,122 stars today | 开源多 Agent 交互课堂；体现多角色编排在教育场景的产品化，但并非当天发布。 |
| [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | 129 stars today（Python） | 面向 Agent skills 的静态安全扫描器，覆盖提示注入、数据外泄与供应链模式；热度不等同于安全效果验证。 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | 509 stars today | 让 coding agent 驱动视频编辑的工具链，显示 Agent 工具执行正扩展到媒体工作流。 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | 当日榜单可见 | 面向多后端的 Claude Code 兼容 CLI；榜单证明当日热度，仓库创建于 2026-04-01，不代表当天发布。 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | 当日榜单可见 | 面向 Claude Code 的学术研究 skills 集合；仅保留为当日采用信号，不验证其工作流效果。 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 914 stars today | 科研 Agent skills 集合；仓库自述的采用规模属于项目方口径，本页不作独立确认。 |

## HN 讨论

HN front/newest 与 Algolia recent submissions 已检查。GitSpawn 在 2026-09-02 02:06 +08:00 被提交到 HN；本轮抓取时为 2 points、1 条评论，互动仍低，因此不把它描述为热门讨论，其技术事实以上述研究原文为准。[Baseten 推理效率文章](https://news.ycombinator.com/item?id=49529898) 于 2026-09-02 07:48 +08:00 提交，10:04 抓取时为 42 points、7 条评论；互动数据仅描述当时讨论热度，技术结论仍以原文为准。另有 [Why Pi is my AI coding harness](https://news.ycombinator.com/item?id=49534014) 于 2026-09-02 17:47 +08:00 提交，抓取时为 3 points、0 条评论；原文页面未能取得可核验发布日期，因此仅作为 Pi 的社区采用信号保留，不据此作性能比较。

## 论文 / 研究

### 从生产流量到后训练：用分轴专家合并覆盖企业请求组合

[From Production Traffic to Post-Training](https://arxiv.org/abs/2609.01572) 于 2026-09-02 01:39 +08:00 提交。作者从 200 多个内部应用的生产错误分析中拆出指令遵循、函数调用和内部任务分布三个轴，分别训练 GRPO 专家，再以两阶段 SLERP 合并；作者报告合并模型承载平台 50% 流量、每月 1.16 亿请求。指标、流量比例与成本结论均为作者报告，本页未独立复现。

### Harness-of-Harness：在既有 harness 上组织持续改进循环

[Harness-of-Harness](https://arxiv.org/abs/2609.01481) 于 2026-09-02 00:17 +08:00 提交。框架在既有 coding-agent harness 上组织迭代式规划、编码与测试，并分离实现期测试与独立评估。作者报告三个 harness-model 组合在三套基准上的平均相对增益为 52.25%，但本页未独立复现实验。

### Context Privilege Escalation：上下文装配也是权限边界

[What's in Your Agent's Context?](https://arxiv.org/abs/2609.01222) 于 2026-09-01 21:26 +08:00 提交。论文区分低权限内容进入高权限消息角色的 M-CPE 与攻击内容跨原作用域残留的 X-CPE，并称分析了 12 个真实 harness；后果与覆盖范围均为作者报告。

### coding agent 工作记忆：相同 token 预算不等于相同有效上下文

[Measure Before You Manage](https://arxiv.org/abs/2608.31057) 于 2026-09-01 00:34 +08:00 提交。作者分析 55 条归档 coding-agent 轨迹，将工作记忆区分为指令、产物、工具输出与 Agent 自建状态，并比较对象感知压缩和检索策略。结果提示校准集增益未必迁移到留出任务，名义 token 预算也不能替代对实际送达上下文、管理开销与任务结果的分层评估；本文未独立复现实验。

### 控制—数据流分离：避免多 Agent 提示优化破坏执行协议

[Control-Data Flow Separation](https://arxiv.org/abs/2609.00621) 于 2026-09-02 04:00 +08:00 提交。论文指出，多 Agent 提示同时承担内容生成和路由、格式、终止信号等执行协议时，自动提示优化可能意外破坏整个流水线；其方案把执行控制表示为带类型且可验证的程序对象，只让自然语言数据流参与优化。作者在合成推理、协作评审和保险评级工作流中报告最终协议有效率达到 100%，但本页未独立复现实验。

### CAST：用动作级 critique 训练长程工具调用 Agent

Hugging Face Daily Papers 收录的 [CAST](https://huggingface.co/papers/2608.30147) 标注日期为 2026-08-31。论文把稀疏任务结果转成动作级有效性解释，用于 critique model 与策略优化；它关注的是多步、可逆性差的工具调用中如何在执行前拦截错误动作。本文保留作者报告的相对结果，但未独立复现实验。

### Super Library Agent：跨多个代码库维护共享组件

[Super Library Agent](https://huggingface.co/papers/2608.29310) 标注日期为 2026-08-29，已超出 48 小时优先窗口，作为研究观察保留。它研究 coding agent 顺序生成多个相关应用时，如何抽取共享库并在后续迁移依赖，评测覆盖 WebGen-Bench 与 PaperBench。

### EvoGenUI-Bench：多轮 UI 维护不只看单轮通过率

[EvoGenUI-Bench](https://huggingface.co/papers/2608.29387) 标注日期为 2026-08-29，作为较旧研究观察保留。基准包含 150 个五轮任务，并引入跨轮保留指标，用来区分“这一轮做对”与“持续维护后仍保持既有行为”。

## 旧文再热

本轮未取得满足“原文早于 7 天、过去 24 小时 HN 再讨论”且可同时核验原始日期与 HN 互动数据的条目。

## 日期未确认

- **Why Pi is my AI coding harness**：HN 提交时间为 2026-09-02 17:47 +08:00，抓取时 3 points、0 条评论；原文页面本轮返回 403，未取得可核验发布日期。仅作为 Pi 社区采用信号，不将个人体验写成性能事实。

## 观察池

- **Pi 活跃提交，未形成 release**：窗口内仓库持续修复工具中止、fork 与终端兼容，但没有新版本发布，待 release/changelog 聚合后再作为正式条目。
- **Cline beta 可用范围**：0.0.22-beta.1 的 Composio connector 仅面向符合资格的内部账号，待稳定版与更广泛可用性证据。
- **Pi 社区文章**：Why Pi is my AI coding harness 的原文日期未确认，且 HN 互动低；待原文可访问或出现可复现证据后再提升等级。
- **论文日期边界**：Super Library Agent 与 EvoGenUI-Bench 的聚合日期早于 48 小时窗口，仅作为研究信号，不列入今日头部亮点。

## 来源链接

- [Cline Desktop v0.0.22](https://github.com/cline/cline/releases/tag/desktop-v0.0.22)
- [Cline v4.1.17](https://github.com/cline/cline/releases/tag/v4.1.17)
- [Cline SDK v0.0.82](https://github.com/cline/cline/releases/tag/sdk/sdk/v0.0.82)
- [Cline CLI v3.0.61](https://github.com/cline/cline/releases/tag/cli-v3.0.61)
- [Cline Desktop v0.0.22-beta.1](https://github.com/cline/cline/releases/tag/desktop-v0.0.22-beta.1)
- [OpenCode v1.18.26](https://github.com/anomalyco/opencode/releases/tag/v1.18.26)
- [Cline Desktop v0.0.21](https://github.com/cline/cline/releases/tag/desktop-v0.0.21)
- [DeepSeek Harness v0.1.2-alpha.5](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.5)
- [DeepSeek Harness v0.1.2-alpha.4](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.4)
- [DeepSeek Harness v0.1.2-alpha.3](https://github.com/deepseek-ai/deepseek-harness/releases/tag/dsh-v0.1.2-alpha.3)
- [Introducing wrapture](https://simonwillison.net/2026/Aug/31/introducing-wrapture/)
- [GitSpawn: A Single Flaw Lets Untrusted Repos Run Code in Claude Code, Codex, Cursor, and Grok](https://www.manifold.security/blog/ai-coding-agents-git-hijack)
- [Codex bundles LibreOffice](https://simonwillison.net/2026/Sep/1/codex-libreoffice/)
- [openclaude](https://github.com/Gitlawb/openclaude)
- [academic-research-skills](https://github.com/Imbad0202/academic-research-skills)
- [Why Pi is my AI coding harness（HN）](https://news.ycombinator.com/item?id=49534014)
- [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)
- [NVIDIA SkillSpector](https://github.com/NVIDIA/SkillSpector)
- [video-use](https://github.com/browser-use/video-use)
- [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)
- [Measure Before You Manage](https://arxiv.org/abs/2608.31057)
- [CAST](https://huggingface.co/papers/2608.30147)
- [Super Library Agent](https://huggingface.co/papers/2608.29310)
- [EvoGenUI-Bench](https://huggingface.co/papers/2608.29387)
- [The efficient frontier of LLM inference](https://www.baseten.co/blog/the-efficient-frontier-of-llm-inference/)
- [Control-Data Flow Separation](https://arxiv.org/abs/2609.00621)
- [From Production Traffic to Post-Training](https://arxiv.org/abs/2609.01572)
- [Harness-of-Harness](https://arxiv.org/abs/2609.01481)
- [What's in Your Agent's Context?](https://arxiv.org/abs/2609.01222)

## 采集状态

- **已检查来源**：Cline、Pi、DSH、OpenCode、Aider、Continue、Roo Code 的官方仓库/release/changelog；GitHub Trending overall/Python/TypeScript；HN front/newest/Algolia；Hugging Face Daily Papers、arXiv；Simon Willison；Baseten 模型性能工程博客。
- **失败来源**：Why Pi is my AI coding harness 原文返回 HTTP 403；已改用 HN 提交页保留发现证据，原文发布日期仍未确认。
- **初始候选数**：46。
- **保留来源数**：29。
- **二次补搜**：否（最终来源不为 0）。

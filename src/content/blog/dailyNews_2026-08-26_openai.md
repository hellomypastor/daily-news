---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-26T00:00:00+08:00"
updatedAt: "2026-08-26T22:55:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.150.0-alpha.13"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13"
featuredSummary: "Codex 官方仓库发布 0.150.0-alpha.13 预发布版；发布页没有逐项变更说明。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-26 19:18 +08:00"
featuredTags: ["Codex","CLI","Pre-release"]
featuredImage: "https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.150.0-alpha.13"
featuredImageAlt: "GitHub 上 OpenAI Codex 0.150.0-alpha.13 发布页的预览图"
featuredImageCaption: "图片来源：OpenAI / GitHub"
tags:
  - "观察池"
  - "较旧背景"
  - "日期未确认"
  - "Agent"
  - "Android"
  - "ChatGPT"
  - "CLI"
  - "Codex"
  - "Community"
  - "Connector"
  - "Deprecation"
  - "Desktop"
  - "Enterprise"
  - "Git"
  - "GitHub"
  - "Global Affairs"
  - "MCP"
  - "Model Behavior"
  - "o3"
  - "OpenAI"
  - "Permissions"
  - "PR Review"
  - "Pre-release"
  - "Remote"
  - "Safety"
  - "Sandbox"
  - "Security"
  - "Subagent"
  - "UX"
  - "Windows"
  - "WSL2"
---

## 今日概览

采集窗口为 **2026-08-25 22:31 至 2026-08-26 22:31（Asia/Shanghai）**。窗口内可精确核验的官方产品动态累计为五项 Codex CLI 预发布：0.150.0-alpha.9 至 alpha.13；其中本轮新增 alpha.12 与 alpha.13，分别于 8 月 26 日 18:06 与 19:18 发布，但发布页均没有逐项变更说明，因此不推断具体功能或修复。OpenAI 同日发布一篇俄罗斯隐蔽影响行动调查，确认已封禁一批相关 ChatGPT 账户；页面只有自然日、没有精确时刻，故列入“日期未确认”。ChatGPT Release Notes 此前预告的 o3 ChatGPT 退役于 8 月 26 日生效；该公告发布于 5 月 28 日，属于今日生效的较旧官方背景，且不影响 API。社区侧累计保留十五条窗口内、可精确核时的 Codex 官方仓库用户报告，不能外推为 OpenAI 已确认的普遍缺陷。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
|---|---|---|
| Codex CLI | **0.150.0-alpha.9 至 alpha.13 预发布**；均无逐项 release notes | [alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)、[alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)、[alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11) |
| VS Code / JetBrains 集成 | 无新增 | 已检查官方文档、changelog 与仓库 |
| Codex cloud / remote tasks / PR agents | 无官方新增；Android 冷加载、跨主机子任务权限降级、GitHub connector 授权异常与 PR Review 提交元数据误报个案见观察池 | 官方 changelog、文档与仓库 issue |
| ChatGPT agentic mode / Work | 无新增 | ChatGPT Release Notes |
| 当前官方 Agent 构建产品 | 无新增 | 官方 Agent 文档与 changelog |
| Responses API | 无新增 | API changelog |
| Agents SDK Python / TypeScript | 无新增；窗口内未见新 release | GitHub Releases |
| Assistants API 迁移 / 弃用 | 无新增 | 官方弃用与迁移文档 |
| Realtime API | 无新增 | API changelog 与 Realtime 文档 |
| GPT / reasoning / Codex 模型家族 | **o3 于今日从 ChatGPT 退役**；5 月 28 日公告明确 API 不受影响；另有 GPT-5.6 Sol Ultra 在 Windows Codex Desktop 工具握手失败的单一个案见观察池 | ChatGPT Release Notes、官方模型目录与 changelog |

## Tier 2：ChatGPT 产品面

| 产品面 | 过去 24 小时状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| macOS / Windows / 移动端 | 无官方新增；Android 冷加载、Windows 会话消失与更新后启动失败个案见观察池 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | 无新增 |

## Tier 3：企业、安全与行业方案

Enterprise、Business、Edu、Gov、Science 与行业方案未发现窗口内可核验的新产品发布。安全侧，OpenAI 于 8 月 25 日发布俄罗斯隐蔽影响行动调查，但因官方页未给精确时刻，保守放入“日期未确认”。

## 官方更新（新到旧）\n\n### Codex CLI 0.150.0-alpha.13 与 alpha.12（预发布）\n\nOpenAI 的 GitHub 发布页显示 Codex CLI 0.150.0-alpha.12 与 alpha.13 分别于 **2026-08-26 18:06 +08:00** 和 **19:18 +08:00** 发布，并均标记为预发布版。两个页面都没有逐项变更说明；本页仅确认版本出现，不推断功能变化。[查看 alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12) 与 [alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13)\n
### Codex CLI 0.150.0-alpha.11 与 alpha.10（预发布）

<figure class="source-image">
  <a href="https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13"><img src="https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.150.0-alpha.13" alt="GitHub 上 OpenAI Codex 0.150.0-alpha.13 发布页的预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13">图片来源：OpenAI / GitHub</a></figcaption>
</figure>

OpenAI 的 GitHub 发布页显示 Codex CLI 0.150.0-alpha.10 与 alpha.11 分别于 **2026-08-26 04:36 +08:00** 和 **05:30 +08:00** 发布，并均标记为预发布版。两个页面都没有逐项变更说明；本页仅确认版本出现，不推断功能变化。[查看 alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10) 与 [alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)

### Codex CLI 0.150.0-alpha.9（预发布）

OpenAI 的 GitHub 发布页显示 Codex CLI 0.150.0-alpha.9 于 **2026-08-25 20:51 +08:00** 发布，并标记为预发布版。页面正文只有版本名称，没有逐项变更说明；本页仅确认该版本出现，不推断功能变化。[查看官方发布页](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)

### OpenAI o3 从 ChatGPT 退役（较旧公告、今日生效）

OpenAI 的 [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 于 5 月 28 日预告，o3 将在 **2026-08-26** 从 ChatGPT 退役；说明同时明确该变化仅适用于 ChatGPT，API 不变。由于公告本身较旧，本页把它作为“今日生效的较旧官方背景”，不表述为今天新发布。

## Love

窗口内未找到既可精确核时、又包含足够上下文的新增正面社区样本；官方公告不计作正面口碑，因此本轮不硬凑 Love 结论。

## Hate

官方 Codex 仓库累计保留十五条可精确核时的用户报告。除 Android Remote 冷加载、验证前编辑代码、嵌套路径权限、跨 Mac 子任务权限降级与 Windows 会话消失外，本轮新增两条相互独立的 Windows Desktop 更新后无法定位 CLI、进而无法启动的报告；另有用户报告 starter card 只提交单个动词、GitHub connector 获得私有仓库权限后全部工具返回 Unknown tool；10:02 后新增的报告涉及 PR Review 引用不可解析 SHA、Windows WSL2 更新后启动阻断、GPT-5.6 Sol Ultra 工具握手失败，以及 14:33 后出现的本地执行宿主缺失、WSL 线程恢复 MCP 配置错误和企业 deny_read 策略超时个案。所有 issue 均仍为 open，不能证明根因、影响范围或普遍性。详见 [Android Remote 冷加载报告](https://github.com/openai/codex/issues/40638)、[推测性修复报告](https://github.com/openai/codex/issues/40639)、[嵌套路径权限报告](https://github.com/openai/codex/issues/40685)、[跨主机权限降级报告](https://github.com/openai/codex/issues/40682)、[Windows 会话消失报告](https://github.com/openai/codex/issues/40674)、[Windows 启动失败报告一](https://github.com/openai/codex/issues/40752)、[报告二](https://github.com/openai/codex/issues/40754)、[starter card 报告](https://github.com/openai/codex/issues/40734) 、[GitHub connector 报告](https://github.com/openai/codex/issues/40729)、[PR Review 元数据报告](https://github.com/openai/codex/issues/40755)、[WSL2 启动报告](https://github.com/openai/codex/issues/40776) 与 [工具握手报告](https://github.com/openai/codex/issues/40798)。

## 情绪判断

**偏负面，置信度低。** 本轮可核验社区样本为十五条官方仓库问题报告，没有匹配的新增正面样本；两条 Windows 启动失败报告提供了有限交叉印证，但样本选择本身偏向故障反馈，且 issue 尚未获维护者确认，因此不能据此判断 Codex 整体口碑。

## 比较信号

窗口内未发现带具名评测或同任务复现的新增比较证据；不据泛化讨论判断 Codex 与 Claude Code、Cursor、Cline、Pi Coding Agent、OpenCode 或 DeepSeek Harness / DSH 的优劣。后四者的完整扫描留给开源 Harness 雷达。

## 日期未确认

- OpenAI 的 [俄罗斯隐蔽影响行动调查](https://openai.com/index/disrupting-malicious-uses-of-ai-influence-campaign-russia/) 标为 **2026-08-25**。官方称调查从 AI 生成社交媒体内容扩展到一个包含复制、错误归属学术内容并掩饰俄罗斯运营背景的网站网络，并已封禁一批相关 ChatGPT 账户。状态为 **官方来源 / 日期确认 / 精确时刻未提供 / 窗口归属未完全确认**；本页不进一步推断行动规模或效果。

## 观察池

- [Codex Remote on Android：超大历史任务冷加载失败](https://github.com/openai/codex/issues/40638) 创建于 **2026-08-26 00:39 +08:00**。报告者称约 244 MB、约 3.8 万条 JSONL 记录的长任务在 Android Remote 冷打开时无限加载，缩减为约 1 MB 后两次冷打开成功。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一个案**；“完整历史 hydration”只是报告者推断，根因未确认。
- [Agent 在验证前编辑并把推测写成已证明结论](https://github.com/openai/codex/issues/40639) 创建于 **2026-08-26 00:44 +08:00**。报告者给出一个数值计算反例，称长上下文会话中 Codex 曾在证明恒等式前修改生产代码和测试。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一个案**；行为被描述为非确定性，尚无维护者确认。
- [权限配置无法跨 Seatbelt 与 bubblewrap 保护尚不存在的嵌套路径](https://github.com/openai/codex/issues/40685) 创建于 **2026-08-26 03:44 +08:00**。报告者给出 macOS Seatbelt 与 WSL2 bubblewrap 对照复现。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一报告**；维护者尚未确认根因。
- [Remote Control 跨 Mac 创建子任务时权限配置被静默降级](https://github.com/openai/codex/issues/40682) 创建于 **2026-08-26 03:38 +08:00**。报告者给出同机与跨主机无网络、无写入的对照探针。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一报告**；尚无维护者确认。
- [Windows Desktop 活跃会话从界面消失](https://github.com/openai/codex/issues/40674) 创建于 **2026-08-26 02:55 +08:00**。报告者称 UI 会话消失，但底层任务仍为 active。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 间歇性单一报告**；触发条件未确认。
- [Windows Desktop 26.820.60940 更新后无法定位 Codex CLI](https://github.com/openai/codex/issues/40752) 创建于 **2026-08-26 09:27 +08:00**。报告者称更新后应用启动失败，把 `CODEX_CLI_PATH` 指向 `.cmd` 又触发 `spawn EINVAL`，直接指向原生 `codex.exe` 可绕过。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一报告**；根因与影响范围未获维护者确认。
- [另一名 Windows 用户报告更新后同类启动阻断](https://github.com/openai/codex/issues/40754) 创建于 **2026-08-26 10:00 +08:00**。报告者称重装未解决，显式设置 `CODEX_CLI_PATH` 并重新登录 Windows 后恢复。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 与上一条相互独立但仍属有限样本**。
- [Codex Desktop starter card 只提交单个动词](https://github.com/openai/codex/issues/40734) 创建于 **2026-08-26 07:31 +08:00**。报告者称卡片实际只向新任务发送 `Review` 等单词。状态为 **官方仓库用户 issue / 精确时间已核验 / open / macOS 单一复现**；尚无维护者确认。
- [GitHub connector 获得私有仓库权限后全部工具失效](https://github.com/openai/codex/issues/40729) 创建于 **2026-08-26 06:51 +08:00**。报告者称授权后多个 GitHub 工具统一返回 `Unknown tool`。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一仓库与账户个案**；根因未确认。

- [Codex PR Review 引用不可解析提交 SHA](https://github.com/openai/codex/issues/40755) 创建于 **2026-08-26 10:05 +08:00**。报告者提供跨 54 个 PR 的检查和公开最小复现，称 Review 在检查 author、committer 与 trailer 时引用仓库中不存在的重建提交对象。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 复现充分但未获维护者确认**。
- [Windows Desktop 更新后 WSL2 模式无法定位 CLI](https://github.com/openai/codex/issues/40776) 创建于 **2026-08-26 11:47 +08:00**。报告者称 26.820.7780.0 更新后应用无法启动，关闭 WSL2 集成可绕过。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一个案**；版本字段存在不一致，根因未确认。
- [GPT-5.6 Sol Ultra 在 Windows Codex Desktop 工具握手失败](https://github.com/openai/codex/issues/40798) 创建于 **2026-08-26 12:57 +08:00**。报告者在同一安装与环境中对照称 GPT-5.6 Sol Ultra 的工具调用在握手前失败，而 GPT-5.5 可执行同一命令。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一 A/B 个案**；不能外推为模型普遍问题。
- [Windows 更新后本地执行组件缺失](https://github.com/openai/codex/issues/40817) 创建于 **2026-08-26 14:33 +08:00**。报告者称 26.820.7780.0 更新后连只读命令也因执行宿主缺失而无法启动。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单机复现**；根因及范围未获维护者确认。
- [Windows WSL 托管线程恢复失败](https://github.com/openai/codex/issues/40819) 创建于 **2026-08-26 14:42 +08:00**。报告者提供 JSON-RPC 对照，称应用注入缺少 transport 的 MCP 配置。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 技术复现较完整但未获维护者确认**。
- [企业 deny_read 策略导致提交后超时](https://github.com/openai/codex/issues/40831) 创建于 **2026-08-26 15:43 +08:00**。用户给出最小策略对照，称移除 deny_read 后恢复。状态为 **官方仓库用户 issue / 精确时间已核验 / open / 单一企业环境**；根因与普遍性未确认。

## 未证实传闻

本轮没有需要单列的新传闻。对上述 issue 的根因推断均未被当作事实。

## 来源链接

1. [Codex CLI 0.150.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)
2. [Codex CLI 0.150.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)
3. [Codex CLI 0.150.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)
4. [Disrupting a new covert influence campaign from Russia](https://openai.com/index/disrupting-malicious-uses-of-ai-influence-campaign-russia/)
5. [Codex Remote on Android: very large task history causes indefinite cold-load](https://github.com/openai/codex/issues/40638)
6. [Agent edits code before validating hypotheses](https://github.com/openai/codex/issues/40639)
7. [Permission profiles cannot protect absent nested metadata paths](https://github.com/openai/codex/issues/40685)
8. [Remote Control create_thread silently downgrades child permission profile](https://github.com/openai/codex/issues/40682)
9. [Windows Desktop active chats unexpectedly disappear](https://github.com/openai/codex/issues/40674)
10. [Windows Desktop 26.820.60940 fails to start after update](https://github.com/openai/codex/issues/40752)
11. [Windows Desktop cannot locate CLI after update](https://github.com/openai/codex/issues/40754)
12. [Codex Desktop starter cards submit only one-word prompts](https://github.com/openai/codex/issues/40734)
13. [GitHub connector loses all tools after private-repository authorization](https://github.com/openai/codex/issues/40729)
14. [Windows local execution host missing](https://github.com/openai/codex/issues/40817)
15. [WSL thread resume MCP transport failure](https://github.com/openai/codex/issues/40819)
16. [Enterprise deny_read timeout](https://github.com/openai/codex/issues/40831)\n17. [Codex CLI 0.150.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12)\n18. [Codex CLI 0.150.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13)

## 采集状态

- 已检查：OpenAI News / Research / Global Affairs、ChatGPT Release Notes、ChatGPT & Codex changelog、API changelog、模型与弃用文档、Codex 各产品入口、OpenAI Status、Codex 与 Agents SDK / 官方 SDK GitHub Releases、Codex 官方仓库 issues、Reddit 五个相关社区、Hacker News、YouTube 与公开中英文网页搜索。
- 失败来源：X（未登录无法稳定核验原帖与精确时间）；Reddit（公开搜索未提供足够可精确核时的新正面样本）；YouTube（无可交叉核验的窗口内新增）。
- 初始候选：181；最终保留来源：22。
- 二次补搜：否（最终来源不为 0）。

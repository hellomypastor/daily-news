---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-08-27T00:00:00+08:00"
updatedAt: "2026-08-27T01:02:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.150.0-alpha.13"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13"
featuredSummary: "Codex 官方仓库发布 0.150.0-alpha.13 预发布版；页面没有逐项变更说明。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-08-26 19:18 +08:00"
featuredTags: ["Codex","CLI","Pre-release"]
featuredImage: "https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.150.0-alpha.13"
featuredImageAlt: "GitHub 上 OpenAI Codex 0.150.0-alpha.13 发布页的预览图"
featuredImageCaption: "图片来源：OpenAI / GitHub"
tags:
  - "观察池"
  - "邻近信号"
  - "日期未确认"
  - "Agent"
  - "Automation"
  - "Billing"
  - "ChatGPT"
  - "ChatGPT Work"
  - "CLI"
  - "Codex"
  - "Compaction"
  - "Desktop"
  - "Enterprise"
  - "Git"
  - "Inference"
  - "Infrastructure"
  - "MCP"
  - "o3"
  - "OpenAI"
  - "Permissions"
  - "Plugin"
  - "PR Review"
  - "Pre-release"
  - "Rate Limits"
  - "Scheduled Tasks"
  - "Subagent"
  - "Tools"
  - "Usage"
  - "WebMCP"
  - "Windows"
  - "WSL"
---

## 今日概览

采集窗口为 **2026-08-26 01:02 至 2026-08-27 01:02（Asia/Shanghai）**。窗口内可精确核验的官方版本动态为 Codex CLI 0.150.0-alpha.10 至 alpha.13 四个预发布版，发布页均没有逐项变更说明，因此只确认版本出现。另有四项 8 月 25 日官方内容——ChatGPT Work 定时任务 webhook 与分享、Admin plugin、Codex 重复工作实践文章、Jalapeño 首批测量结果——均只有自然日、没有精确时刻，本页保守列入“日期未确认”。o3 于 8 月 26 日从 ChatGPT 退役是较旧公告在本日生效，API 不受影响。社区侧窗口内 Codex 官方仓库 issue 候选达到 203 条，本页仅保留九条具有明确复现、对照或多报告交叉印证的代表性观察，均不能外推为 OpenAI 已确认缺陷。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 过去 24 小时状态 | 证据 |
|---|---|---|
| Codex CLI | **0.150.0-alpha.10 至 alpha.13 预发布**；均无逐项 release notes | [alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)、[alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)、[alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12)、[alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13) |
| VS Code / JetBrains 集成 | 无官方新增；JetBrains 终端重绘个案未列为产品更新 | 官方文档与仓库 |
| Codex cloud / remote tasks / PR agents | 无官方 changelog 新增；PR Review 不可解析 SHA、跨主机权限与线程恢复问题见观察池 | 官方 changelog、GitHub issue |
| ChatGPT agentic mode / Work | **8 月 25 日 Release Notes 新增 webhook 触发与定时任务分享**，但精确时刻未确认 | 日期未确认 |
| 当前官方 Agent 构建产品 | 无新增 | 官方 Agent 文档与 changelog |
| Responses API | 无新增 | API changelog |
| Agents SDK Python / TypeScript | 无新增；最近版本仍分别为 0.22.0 与 0.17.0 | GitHub Releases |
| Assistants API 迁移 / 弃用 | 无新增 | 官方弃用与迁移文档 |
| Realtime API | 无新增 | API changelog 与 Realtime 文档 |
| GPT / reasoning / Codex 模型家族 | **o3 于 8 月 26 日从 ChatGPT 退役**；5 月 28 日公告明确 API 不受影响 | ChatGPT Release Notes |

<figure class="source-image">
  <a href="https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13"><img src="https://opengraph.githubassets.com/1/openai/codex/releases/tag/rust-v0.150.0-alpha.13" alt="GitHub 上 OpenAI Codex 0.150.0-alpha.13 发布页的预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13">图片来源：OpenAI / GitHub</a></figcaption>
</figure>

## Tier 2：ChatGPT 产品面

| 产品面 | 过去 24 小时状态 |
|---|---|
| 浏览器 / Operator 能力 | 无新增 |
| macOS / Windows / 移动端 | 无官方新增；Windows 26.820 启动、WSL transport 与会话恢复多例报告见观察池 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | Admin plugin 与定时任务 webhook 为日期未确认的官方候选；MCP OAuth 与 WSL transport 个案见观察池 |

## Tier 3：企业、安全与行业方案

Enterprise / Business 侧，OpenAI 于 8 月 25 日介绍 Admin plugin，可在 ChatGPT Work 与 Codex 中按既有角色权限查看使用情况、管理成员与访问、处理额度和支出请求；因页面没有精确时刻，列入“日期未确认”。Edu、Gov、Science、安全与其他行业方案未发现窗口内可精确核验的新发布。Jalapeño 推理芯片测量结果属于基础设施邻近信号，同样因缺少精确时刻保守收录。

## 官方更新（新到旧）

### Codex CLI 0.150.0-alpha.10 至 alpha.13（预发布）

官方 GitHub 发布页显示 alpha.10、alpha.11、alpha.12、alpha.13 分别于 **2026-08-26 04:36、05:30、18:06、19:18 +08:00** 发布，均标为预发布。四个页面没有逐项变更说明，本页不推断功能或修复。参见 [alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)、[alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)、[alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12) 与 [alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13)。

### o3 从 ChatGPT 退役（较旧公告、今日生效）

OpenAI 的 [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 在 5 月 28 日预告 o3 将于 **2026-08-26** 从 ChatGPT 退役，并明确 API 不变。本页只把它作为本日生效的较旧官方背景，不表述为今日新公告。

## Love

窗口内未找到既可精确核时、又包含足够上下文的新增正面社区样本。官方发布和 OpenAI 自述案例不计作正面口碑，因此不硬凑 Love 结论。

## Hate

Codex 官方仓库在窗口内出现大量故障报告，其中 Windows 26.820 启动失败与 WSL `mcp_servers.codex_app` transport 错误有多名用户独立报告；另有 PR Review 引用不可解析 SHA、企业 `deny_read` 超时、额度刷新/消耗异常与意外 API 计费个案。它们均为用户提交且多仍 open，能支持“存在集中反馈”但不能证明根因、影响范围或普遍性。代表性证据见 [Windows 启动报告](https://github.com/openai/codex/issues/40752)、[WSL transport 报告一](https://github.com/openai/codex/issues/40829) 与 [报告二](https://github.com/openai/codex/issues/40894)、[PR Review 报告](https://github.com/openai/codex/issues/40755)、[企业策略报告](https://github.com/openai/codex/issues/40831)、[额度刷新报告](https://github.com/openai/codex/issues/40862) 和 [计费个案](https://github.com/openai/codex/issues/40871)。

## 情绪判断

**偏负面，置信度中低。** 负面判断来自官方仓库中同一 Windows / WSL 回归的多份独立报告，以及大量额度相关反馈；但 GitHub issue 天然偏向问题上报，缺少同窗口、可核时的正面社区对照，也没有维护者对影响范围的正式确认。

## 比较信号

窗口内未发现可精确核时、具名且同任务复现的新增比较评测。Jalapeño 官方文章引用跨硬件与模型测试，但不是 Codex 与 Claude Code、Cursor、Cline、Pi Coding Agent、OpenCode 或 DeepSeek Harness / DSH 的产品比较，因此不据此判断优劣；后四者的完整扫描留给开源 Harness 雷达。

## 日期未确认

- [ChatGPT Release Notes：定时任务支持 webhook 与分享](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) 标为 **2026-08-25**。官方称 ChatGPT Work 的定时任务可响应 Gmail 新邮件、Slack 频道消息和 GitHub PR 活动，也可分享任务供他人连接自己的应用后复制调度。状态为 **官方来源 / 日期确认 / 精确时刻未提供 / 窗口归属未完全确认**。
- [Introducing the Admin plugin for ChatGPT Work and Codex](https://openai.com/index/introducing-admin-plugin/) 标为 **2026-08-25**。官方称插件在既有角色、权限与审批控制内提供使用分析、成员与组、访问权限、额度及支出请求等支持动作。状态为 **官方来源 / 日期确认 / 精确时刻未提供**。
- [Automating repetitive work at OpenAI with Codex](https://developers.openai.com/blog/automating-repetitive-work-at-openai-with-codex) 标为 **2026-08-25**。文章介绍用 Runme notebook 与 WebMCP 保存上下文、审批边界和历次运行经验的内部实践；这是经验文章，不等同于新产品发布。状态为 **官方开发者博客 / 日期确认 / 精确时刻未提供**。
- [Jalapeño 首批测量结果](https://openai.com/index/jalapeno-first-results/) 标为 **2026-08-25**。官方披露其首款自研推理芯片在 InferenceX 上的跨模型测量，并说明 Codex 与 GPT-Astra 被用于移植和优化部分内核；指标均为 OpenAI 自报，本页不独立外推。状态为 **官方来源 / 日期确认 / 精确时刻未提供 / 基础设施邻近信号**。

## 观察池

- [Windows Desktop 26.820.60940 更新后无法定位 CLI](https://github.com/openai/codex/issues/40752) 创建于 **2026-08-26 09:27 +08:00**。报告者给出 `.cmd` 触发 `spawn EINVAL`、直指原生 `codex.exe` 可绕过的复现。状态为 **官方仓库用户 issue / open / 单一详细复现，另有多条同类报告**。
- [Codex PR Review 引用不可解析提交 SHA](https://github.com/openai/codex/issues/40755) 创建于 **2026-08-26 10:05 +08:00**。报告者提供跨多个 PR 的检查和公开最小复现，称提交元数据结论引用仓库中不存在的对象。状态为 **官方仓库用户 issue / open / 复现较完整 / 未获维护者确认**。
- [Windows WSL 注入的 codex_app 缺少 transport](https://github.com/openai/codex/issues/40829) 创建于 **2026-08-26 15:39 +08:00**；[另一份带配置对照的报告](https://github.com/openai/codex/issues/40894) 创建于 **22:40 +08:00**。两者均称 26.820 更新后 WSL 模式被 `invalid transport in mcp_servers.codex_app` 阻断。状态为 **两份独立用户 issue / open / 有限交叉印证**。
- [企业 deny_read 策略导致提交后超时](https://github.com/openai/codex/issues/40831) 创建于 **2026-08-26 15:43 +08:00**。报告者给出移除 `permissions.filesystem.deny_read` 后恢复的对照。状态为 **官方仓库用户 issue / open / 单一企业环境**。
- [5 小时额度到点后未刷新](https://github.com/openai/codex/issues/40862) 创建于 **2026-08-26 18:14 +08:00**。报告者附 `codex doctor` 输出，但其中缓存检查时间早于提交时间，不能单凭该输出确认服务端状态。状态为 **官方仓库用户 issue / open / 证据有限**。
- [Desktop 意外切换到旧 API key 并产生费用](https://github.com/openai/codex/issues/40871) 创建于 **2026-08-26 19:34 +08:00**。报告者称原本使用 ChatGPT 订阅的 Desktop 静默使用了旧 API key 并产生约 758 美元费用。状态为 **官方仓库用户 issue / 单一个案 / 金额与根因均未独立核验**。
- [完整历史 subagent fork 在 compaction 后丢失 workspace tools](https://github.com/openai/codex/issues/40890) 创建于 **2026-08-26 22:33 +08:00**。报告者提供父子任务对照，称 full-history fork 的旧前缀压缩后缺少当前工具。状态为 **官方仓库用户 issue / open / 单一技术复现**。
- [Windows / WSL thread 启动恢复 smoke test 请求](https://github.com/openai/codex/issues/40875) 创建于 **2026-08-26 20:15 +08:00**。该 issue 汇总多个更新后回归并建议增加安装、启动与恢复的门禁测试。状态为 **官方仓库用户提案 / 邻近信号 / 不代表维护者承认根因**。

## 未证实传闻

本轮没有需要单列的新产品传闻。对 issue 中版本、计费与根因的用户推断均未当作事实。

## 来源链接

1. [Codex CLI 0.150.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)
2. [Codex CLI 0.150.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)
3. [Codex CLI 0.150.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12)
4. [Codex CLI 0.150.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.13)
5. [ChatGPT Release Notes](https://help.openai.com/en/articles/6825453/chatgpt-release-notes)
6. [Admin plugin for ChatGPT Work and Codex](https://openai.com/index/introducing-admin-plugin/)
7. [Automating repetitive work with Codex](https://developers.openai.com/blog/automating-repetitive-work-at-openai-with-codex)
8. [Jalapeño first results](https://openai.com/index/jalapeno-first-results/)
9. [Windows Desktop startup regression](https://github.com/openai/codex/issues/40752)
10. [PR Review unresolvable SHA](https://github.com/openai/codex/issues/40755)
11. [WSL invalid transport report](https://github.com/openai/codex/issues/40829)
12. [Second WSL transport report](https://github.com/openai/codex/issues/40894)
13. [Enterprise deny_read timeout](https://github.com/openai/codex/issues/40831)
14. [Usage reset not refreshing](https://github.com/openai/codex/issues/40862)
15. [Unexpected API-key billing report](https://github.com/openai/codex/issues/40871)
16. [Full-history fork loses tools after compaction](https://github.com/openai/codex/issues/40890)
17. [Windows + WSL smoke-test proposal](https://github.com/openai/codex/issues/40875)

## 采集状态

- 已检查：OpenAI News / Research / Global Affairs、OpenAI Developers 与开发者博客、ChatGPT Release Notes、API / Codex changelog、模型与弃用文档、Responses / Realtime / Assistants 迁移资料、Codex 全产品入口、OpenAI Status、五个官方 GitHub Releases、Codex issue、Reddit 五个社区、Hacker News、YouTube 与公开中英文网页搜索。
- 失败来源：X（未登录无法稳定核验原帖与精确时间）；Reddit（新帖时间与正文访问不稳定，未形成可精确核时的正面样本）；YouTube（无可交叉核验的窗口内新增）。
- 初始候选：228；最终保留来源：17。
- 二次补搜：否（最终来源不为 0）。

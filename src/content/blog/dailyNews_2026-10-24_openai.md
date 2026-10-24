---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-10-24T00:00:00+08:00"
updatedAt: "2026-10-24T10:41:35+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex CLI 0.164.0"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.164.0"
featuredSummary: "Codex CLI 稳定版加入预设提示、内联模型和权限选择、终端图片预览、企业 MCP 鉴权与远程凭据保护，并包含多项恢复和沙箱修复。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-10-23 12:48 +08:00"
featuredTags: ["Codex CLI","MCP","安全"]
featuredImage: "https://opengraph.githubassets.com/ba656cc0bd038b25cbe4a796df2128ddddc2d520420582c4622037575b17a466/openai/codex/releases/tag/rust-v0.164.0"
featuredImageAlt: "OpenAI Codex GitHub 仓库 0.164.0 release 页面预览图"
featuredImageCaption: "图片来源：OpenAI Codex 官方 GitHub release 页面"
tags:
  - "安全"
  - "观察池"
  - "社区口碑"
  - "预发布"
  - "Agent"
  - "ChatGPT"
  - "Codex"
  - "Codex CLI"
  - "MCP"
  - "OpenAI"
---

## 今日概览

采集窗口为 **2026-10-23 10:41 至 2026-10-24 10:41（Asia/Shanghai）**。窗口内可确认的官方产品变化集中在 Codex CLI：稳定版 0.164.0 带来预设提示、内联模型与权限选择、终端图片预览、企业 MCP 鉴权、远程命令凭据遮蔽及多项恢复与沙箱修复；随后发布的 0.165.0-alpha.1 没有 changelog，只能视作开发活跃信号。ChatGPT、模型、Agents SDK 与其他开发者产品未发现窗口内可核实的新公告。社区样本偏负面，但仅来自少量自报体验。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 本轮状态 | 证据 |
| --- | --- | --- |
| Codex CLI | **有更新**：0.164.0 稳定版发布；另有无说明的 0.165.0-alpha.1 预发布构建 | [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0)、[0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1) |
| Codex VS Code / JetBrains | 无新增：未发现窗口内独立官方公告或可核实 release note | 官方新闻、产品说明与 Codex 仓库已检查 |
| Codex cloud / remote tasks / PR agents | 无独立新增；CLI 0.164.0 的远程命令凭据遮蔽和企业 MCP 鉴权属于相关能力更新 | [0.164.0](https://github.com/openai/codex/releases/tag/rust-v0.164.0) |
| ChatGPT agentic mode / 当前官方 Agent 产品 | 无新增 | OpenAI 新闻与 ChatGPT release notes 已检查 |
| Responses API | 无新增 | API changelog 与官方文档入口已检查 |
| Agents SDK Python / TypeScript | 无新增：两仓库最新 release 均早于窗口 | 官方 GitHub releases 已检查 |
| Assistants API 弃用 / 迁移 | 无新增：未发现窗口内官方状态变化 | 弃用与迁移文档入口已检查 |
| Realtime API | 无新增 | API changelog、Agents SDK Realtime release 已检查 |
| 当前 GPT / reasoning / Codex 模型家族 | 无新增：模型 release notes 最新条目早于窗口 | 官方模型 release notes 已检查 |

<figure class="source-image">
  <a href="https://github.com/openai/codex/releases/tag/rust-v0.164.0"><img src="https://opengraph.githubassets.com/ba656cc0bd038b25cbe4a796df2128ddddc2d520420582c4622037575b17a466/openai/codex/releases/tag/rust-v0.164.0" alt="OpenAI Codex GitHub 仓库 0.164.0 release 页面预览图" loading="lazy" /></a>
  <figcaption><a href="https://github.com/openai/codex/releases/tag/rust-v0.164.0">图片来源：OpenAI Codex 官方 GitHub release 页面</a></figcaption>
</figure>

### Codex CLI 0.164.0

[官方 release](https://github.com/openai/codex/releases/tag/rust-v0.164.0) 发布于 2026-10-23 12:48 +08:00。主要新增包括：十个 `/presets` 槽位保存可复用提示或命令；通过 `/model` 与 `/permissions` 的内联参数选择模型、推理强度、速度和权限配置；在支持 Kitty 或 Sixel 的终端预览图片；企业 MCP 连接鉴权；支持的远程 Bash 与 Zsh 会话凭据遮蔽；以及默认启用 Amazon Bedrock 设置向导。修复覆盖 compaction 失败、压缩历史恢复、Windows 代理鉴权、配置覆盖、待处理权限选择和 macOS 沙箱路径保护。

### Codex CLI 0.165.0-alpha.1

[官方预发布页](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1) 发布于 2026-10-23 22:09 +08:00，但页面只有版本标识，没有功能说明。不得从版本号推断新增能力。

## Tier 2：ChatGPT 体验面

| 产品线 | 本轮状态 |
| --- | --- |
| 浏览器 / Operator 能力 | 无新增 |
| 桌面应用 | 无新增 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | 无独立 ChatGPT 公告；Codex CLI 0.164.0 加强企业 MCP 鉴权 |

ChatGPT release notes 最新条目为 2026-10-20，不在本轮窗口内，因此没有把旧功能重复包装为今日更新。

## Tier 3：企业、教育、安全与行业方案

本轮未发现窗口内新的 OpenAI Enterprise、Business、Edu、Gov、Science、安全或行业方案官方发布。Codex CLI 0.164.0 的企业 MCP 鉴权、凭据遮蔽与沙箱强化具有企业和安全意义，但仍属于同一条 CLI release，不另行重复计数。

## 官方更新（新到旧）

1. **Codex CLI 0.165.0-alpha.1**：窗口内预发布构建；官方未给出 changelog。
2. **Codex CLI 0.164.0**：稳定版加入预设提示、内联模型与权限控制、图片预览、企业 MCP 鉴权及远程凭据保护，并修复恢复、代理与沙箱问题。

## Love

本轮没有采集到时间可核实、包含足够实际使用细节且可与具体新版本关联的独立正面样本。官方 release 不计作正面口碑。

## Hate

- 一位 r/codex 用户在[长文投诉](https://www.reddit.com/r/codex/comments/1xdft6r/200_pro_9797_cached_input_faster_quota_drain_and/)中称，近期 Codex 配额消耗更快、GPT-6.1 Sol 执行冗长且任务难以收尾，并附上其自行记录的缓存与 token 数据。数据未经独立审计，工作负载也非受控对比，只能作为具细节的个案。
- 另一位 r/ChatGPT 用户称[单次 Codex 任务约运行 20 分钟便触及额度限制](https://www.reddit.com/r/ChatGPT/comments/1xd60o8/chatgptcodex_not_practically_usable_lately/)，且原任务未完成；发帖者在回复中承认尚未做细致对比。该样本互动和证据均有限。

## 情绪判断

**偏负面，低置信度。** 两条窗口内独立帖子都指向配额耐用度和任务完成率，但均是自报体验，缺少同任务、同模型、同推理强度的受控比较；不能据此断言平台配额或模型能力发生系统性退化。

## 对比与产品边界

- 0.164.0 在提示复用、权限快速切换、MCP 企业鉴权、凭据保护与会话恢复方面继续强化 Codex 作为完整 Agent harness 的边界。
- 社区投诉提到与竞争工具的使用时长比较，但没有披露足以复现实验的完整设置。Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH、OpenCode 等的完整产品扫描留给开源与行业专题；本轮没有证据支持“追平”或“超过”结论。

## 日期未确认

- 本轮保留的 4 个来源均可确认发布时间；未发现值得保留但发布日期无法核实的新候选。

## 观察池

- 0.165.0-alpha.1 已确认发布，但没有 changelog；等待后续稳定版或官方说明后再评估功能影响。
- 两条额度与完成率投诉方向一致，但样本量小且缺乏受控测量，继续观察是否出现官方说明、状态页事件或可复现实验。

## 来源链接

- [Codex CLI 0.164.0 — OpenAI GitHub](https://github.com/openai/codex/releases/tag/rust-v0.164.0)
- [Codex CLI 0.165.0-alpha.1 — OpenAI GitHub](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1)
- [Codex quota and completion complaint — Reddit r/codex](https://www.reddit.com/r/codex/comments/1xdft6r/200_pro_9797_cached_input_faster_quota_drain_and/)
- [ChatGPT/Codex usability complaint — Reddit r/ChatGPT](https://www.reddit.com/r/ChatGPT/comments/1xd60o8/chatgptcodex_not_practically_usable_lately/)

## 采集状态

- **已检查来源**：OpenAI News（产品、研究、公司）、API changelog / 模型 / 弃用文档、ChatGPT 与模型 release notes、ChatGPT & Codex changelog、Codex 与 Agents SDK Python/TypeScript GitHub releases、Reddit 五个相关社区、Hacker News、OpenAI 官方 X 与 YouTube 搜索入口。
- **失败来源**：OpenAI 官方 X 未登录搜索无法稳定取得完整时间线；YouTube 与 Hacker News 未发现窗口内可核实的新内容；API changelog 的搜索索引未返回窗口内新增条目。
- **初始候选数**：9。
- **最终保留来源数**：4。
- **二次补搜**：否（最终来源不为 0）。

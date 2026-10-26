---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-10-26T00:00:00+08:00"
updatedAt: "2026-10-26T10:41:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTags: []
tags:
  - "安全"
  - "工具调用"
  - "观察池"
  - "Agent"
  - "ChatGPT"
  - "Codex"
  - "Codex CLI"
  - "Linux"
  - "macOS"
  - "MCP"
  - "OpenAI"
  - "VS Code"
  - "Windows"
---

## 今日概览

采集窗口为 **2026-10-25 10:41 至 2026-10-26 10:41（Asia/Shanghai）**。窗口内未发现 OpenAI 官方新闻、ChatGPT release notes、模型 release notes、API changelog、Codex release 或 Agents SDK release 的可核实新增。可保留信号来自 OpenAI Codex 官方 GitHub 仓库中新开的用户 issue：涉及 Windows 沙箱与 Unity 目录联接的数据丢失报告、macOS ARM64 CLI 签名校验报告、MCP 完整工具名搜索缺失，以及 Linux 上 VS Code 扩展 UI 无法启动。它们均为**用户自报、尚未获 OpenAI 确认**，只进入观察池与口碑分析，不作为已证实产品故障。

## Tier 1：编码、Agent 与开发者平台

| 产品线 | 本轮状态 | 证据 |
| --- | --- | --- |
| Codex CLI | 无官方 release；观察到两条新问题报告：macOS ARM64 0.164.0 签名校验失败，以及完整 MCP 工具名搜索为空 | [签名报告](https://github.com/openai/codex/issues/56894)、[MCP 搜索报告](https://github.com/openai/codex/issues/56973) |
| Codex VS Code / JetBrains | 无官方更新；一名 Linux 用户报告新版 VS Code 扩展 UI 无法启动、回退旧版后恢复；JetBrains 无新增 | [VS Code issue](https://github.com/openai/codex/issues/56992) |
| Codex cloud / remote tasks / PR agents | 无官方新增 | 官方新闻、changelog、Codex releases 与 issues 已检查 |
| ChatGPT agentic mode / 当前官方 Agent 产品 | 无官方新增 | OpenAI 新闻与 ChatGPT release notes 已检查 |
| Responses API | 无新增 | API changelog 与官方文档入口已检查 |
| Agents SDK Python / TypeScript | 无新增：最新 release 均早于窗口 | 官方 GitHub releases 已检查 |
| Assistants API 弃用 / 迁移 | 无新增：未发现窗口内官方状态变化 | 弃用与迁移文档入口已检查 |
| Realtime API | 无新增 | API changelog、Realtime 与 Agents SDK 入口已检查 |
| 当前 GPT / reasoning / Codex 模型家族 | 无新增：模型 release notes 最新条目早于窗口 | 官方模型 release notes 已检查 |

### Codex Windows 沙箱与 Unity 项目：高风险个案待核实

一名用户在 [OpenAI Codex issue #57003](https://github.com/openai/codex/issues/57003) 报告，Windows 版 Codex 在 Unity 验证流程中创建了指向真实 `Assets` 目录的 NTFS junction，随后真实目录被观察为空，Git 显示 4,864 个已跟踪资源删除。issue 给出了环境、事件序列和受影响文件数量，但报告刚建立、尚无维护者确认；多会话与 Unity 进程同时使用工作区也是尚待排除的变量。因此这里只把它视为严重的安全/数据保护信号，不能断言 Codex 已被证实造成删除。

### Codex CLI 0.164.0：签名与 MCP 搜索的用户报告

- [macOS ARM64 签名 issue](https://github.com/openai/codex/issues/56894) 称，下载资产的 SHA-256 与 GitHub release 元数据一致，但在一个 Codex 管理的本地执行环境中，`codesign --verify --strict` 返回签名无效。报告者没有运行二进制，且执行环境本身可能影响结果；暂无独立复现或官方结论。
- [MCP 工具搜索 issue](https://github.com/openai/codex/issues/56973) 提供了代码路径与复现步骤：使用完整名称 `mcp__<server>__<tool>` 查询 deferred MCP 工具时可能无结果，而短工具名可命中。报告称 0.160.0 可见、0.164.0 相关代码未变，并指出较小模型可能不会自动改用短查询；这仍是未确认的客户端缺陷报告。

### VS Code 扩展：Linux 启动失败个案

[VS Code issue #56992](https://github.com/openai/codex/issues/56992) 的报告者称，Linux 上新版扩展持续提示无法启动 UI，重装 CLI 与扩展未解决，回退到较旧扩展版本后恢复。该案例提供了版本和排查步骤，但只有单一环境，尚不能推断为普遍回归。

## Tier 2：ChatGPT 体验面

| 产品线 | 本轮状态 |
| --- | --- |
| 浏览器 / Operator 能力 | 无新增 |
| 桌面应用 | 无官方新增；Windows 沙箱数据丢失报告进入观察池 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | 无新增 |
| Voice | 无新增 |
| Connectors / MCP | 无官方新增；Codex CLI 完整 MCP 工具名搜索报告进入观察池 |

ChatGPT release notes 的最新公开条目早于窗口，因此未把旧功能重复包装为今日更新。

## Tier 3：企业、教育、安全与行业方案

本轮未发现窗口内新的 OpenAI Enterprise、Business、Edu、Gov、Science 或行业方案官方发布。Windows 沙箱数据保护和 macOS 二进制签名报告具有潜在企业安全意义，但证据仍停留在用户 issue，不能升级为已确认安全事件。

## 官方更新（新到旧）

本轮无窗口内可确认的官方产品、模型、API、SDK 或 Codex release 更新。

## Love

本轮没有采集到时间可核实、含充分实际使用细节的独立正面样本。官方页面与 issue 仓库活动不计作正面口碑。

## Hate

- **数据安全焦虑**：Unity 用户报告大规模文件删除，影响严重但归因尚未确认。
- **安装与集成可靠性**：macOS 用户报告签名校验失败，Linux 用户报告 VS Code UI 无法启动，MCP 用户报告完整工具名检索失败。

以上四条均来自 Codex 官方仓库的用户自报，不等同于 OpenAI 承认或已复现的问题。

## 情绪判断

**偏负面，中低置信度。** 四个独立 issue 覆盖数据安全、供应链校验、IDE 启动和 MCP 工具发现，说明边缘环境的可靠性值得关注；其中两条含较清晰复现或技术证据。但样本来自问题跟踪器，本身存在负面选择偏差，且没有维护者确认、修复状态或受影响比例，不能据此判断总体用户体验。

## 对比与产品边界

- 本轮信号集中在 Agent harness 的安全边界、工具发现和 IDE 分发，而非模型能力。
- Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH、OpenCode、Aider、Continue 与 Roo Code 的完整产品扫描留给开源与行业专题。没有具名评测或受控实验支持任何“追平”或“超过”结论。

## 日期未确认

本轮保留的四个来源均可通过 GitHub API 确认创建时间，未发现值得保留但日期无法确认的新候选。

## 观察池

1. [Windows / Unity 数据丢失报告](https://github.com/openai/codex/issues/57003)：等待维护者确认、最小复现和沙箱/联接清理机制分析。
2. [macOS ARM64 签名校验报告](https://github.com/openai/codex/issues/56894)：等待不同环境独立复现及官方构建/签名说明。
3. [MCP 完整工具名搜索报告](https://github.com/openai/codex/issues/56973)：已有代码级解释与复现步骤，等待维护者确认或修复合并。
4. [Linux VS Code UI 启动失败报告](https://github.com/openai/codex/issues/56992)：等待更多环境样本及新版扩展修复。

## 来源链接

- [Windows / Unity data loss report — OpenAI Codex GitHub](https://github.com/openai/codex/issues/57003)
- [macOS ARM64 signature validation report — OpenAI Codex GitHub](https://github.com/openai/codex/issues/56894)
- [MCP full tool name search report — OpenAI Codex GitHub](https://github.com/openai/codex/issues/56973)
- [Linux VS Code extension UI startup report — OpenAI Codex GitHub](https://github.com/openai/codex/issues/56992)

## 采集状态

- **已检查来源**：OpenAI News（产品、研究、公司）、API changelog / 模型 / 弃用文档、ChatGPT 与模型 release notes、ChatGPT & Codex changelog、Codex releases/issues/discussions、OpenAI Python/Node 与 Agents SDK Python/TypeScript releases、Reddit 五个相关社区、Hacker News、OpenAI 官方 X 与 YouTube 搜索入口。
- **失败来源**：OpenAI 官方 X 未登录搜索无法稳定取得完整时间线；YouTube、Hacker News 未发现窗口内可核实的新内容；Reddit 搜索噪声与已删除帖子较多；API changelog 的搜索入口未返回窗口内新增条目。
- **初始候选数**：16。
- **最终保留来源数**：4。
- **二次补搜**：否（最终来源不为 0）。

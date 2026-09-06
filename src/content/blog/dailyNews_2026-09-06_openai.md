---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-06T00:00:00+08:00"
updatedAt: "2026-09-06T09:23:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "[Windows desktop] Three consecutive app exits immediately after read_thread returns successfully (26.901.4073.0)"
featuredUrl: "https://github.com/openai/codex/issues/42966"
featuredSummary: "用户报告 Windows Codex 桌面应用在 read_thread 返回后连续退出；当前为公开 issue，未代表官方确认。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-05 16:43 +08:00"
featuredTags: ["Codex","Windows","用户报告"]
tags:
  - "功能建议"
  - "观察池"
  - "较旧背景"
  - "用户报告"
  - "Agent"
  - "Browser"
  - "ChatGPT"
  - "Codex"
  - "Image"
  - "OpenAI"
  - "Remote"
  - "VS Code"
  - "Windows"
---

## 今日概览

采集窗口：**2026-09-05 09:23 至 2026-09-06 09:23（Asia/Shanghai）**。窗口内未发现 OpenAI 官方新闻、ChatGPT release notes、开发者平台或官方 SDK 的新版本公告。可核验的新信号主要来自 `openai/codex` 官方仓库的用户 issue：Windows 启动/退出、VS Code hooks 提示、内置浏览器下载和 Android Remote 图像生成加载等问题。它们代表用户报告，不等于 OpenAI 已复现或确认。

## Tier 1：编码、Agent 与开发者平台

| 产品面 | 过去 24 小时状态 | 证据与判断 |
|---|---|---|
| Codex CLI | 无新增正式 release | 最新稳定版 0.153.4 位于窗口开始前约 2 小时，列入较旧背景 |
| VS Code / JetBrains 集成 | 有用户报告，未获官方确认 | VS Code untrusted hooks 的 review warning 被报告未出现；JetBrains 未见新增 |
| Codex cloud / remote tasks / PR agents | 有用户报告，未获官方确认 | Android Remote 的图像生成区域被报告持续加载 |
| ChatGPT agentic mode / Work | 无新增 | 官方 release notes 未见窗口内条目 |
| Responses API | 无新增 | 开发者文档与 SDK release 未见窗口内变更 |
| Agents SDK Python / TypeScript | 无新增 | 两个官方仓库未见窗口内 release |
| Assistants API 迁移/弃用状态 | 无新增 | 未发现窗口内官方状态变化 |
| Realtime API | 无新增官方发布 | 仅有 Android Remote / Realtime Voice 相关用户 issue，证据不足以推及 API |
| 当前 GPT、reasoning 与 Codex 模型家族 | 无新增 | 未发现窗口内官方模型发布或可用性变更 |

## Tier 2：终端产品与多模态

| 产品面 | 状态 |
|---|---|
| 浏览器 / Operator 类能力 | 内置浏览器下载被用户报告在“Always allow”后仍停止，尚未确认 |
| Desktop apps | Windows 用户集中报告启动或会话后退出问题，尚未确认 |
| GPTs / GPT Store、Canvas | 无新增 |
| Sora / video | 无新增 |
| GPT Image / DALL·E | 无官方新增；Android Remote 页面加载 issue 为邻近信号 |
| Voice | 无官方新增；Realtime Voice issue 为邻近信号 |
| Connectors / MCP | 无新增 |

## Tier 3：企业、安全与行业场景

Enterprise、Business、Edu、Gov、Science、安全与行业方案均未发现窗口内新的官方公告。未将 9 月 3 日的 Enterprise/Edu 插件更新重复包装为当日动态。

## 官方更新（由新到旧）

窗口内未发现新的官方发布。

### 较旧背景（不计入过去 24 小时新增）

- [Codex 0.153.4](https://github.com/openai/codex/releases/tag/rust-v0.153.4) 于 2026-09-05 07:25（上海时间）发布，修复 Astra 在内置模型选择器中的可见性与默认选择，并调整异步提问工具的指导；发布时间比本轮窗口起点早约 2 小时。

## Love

没有找到窗口内可独立核验、且不只是官方宣传的明确正向社区证据。避免用 star、issue 互动或官方公告替代真实口碑。

## Hate

以下均为公开 issue 中的单个或少量用户报告，置信度为**低至中**，不能视为已复现的普遍故障：

- Windows：[#42966](https://github.com/openai/codex/issues/42966) 报告 `read_thread` 成功返回后桌面应用连续退出；[#42964](https://github.com/openai/codex/issues/42964) 报告更新后因 `cua_node` runtime staging 不完整而无法启动。两个独立报告都指向 Windows 桌面稳定性，但根因尚未由维护者确认。
- VS Code：[#42959](https://github.com/openai/codex/issues/42959) 报告扩展会静默跳过 untrusted hooks，没有出现文档所述的 review warning。
- 内置浏览器：[#42960](https://github.com/openai/codex/issues/42960) 报告下载即使选择 “Always allow” 仍会停止。
- Remote / 多模态：[#42967](https://github.com/openai/codex/issues/42967) 报告 Android Remote 的图像生成区域持续加载，而 Windows host thread 可正常打开。

## 情绪判断

**偏负面，低置信度。** 证据是窗口内 5 个具体 bug issue，其中 Windows 相关报告有一定聚集；但样本来自主动报障渠道，没有活跃用户基数、复现结论或对照样本，因此只能说明需要关注的摩擦点，不能代表整体用户满意度。

## 对比与生态观察

本窗口没有可靠的新比较测试。社区 issue 指向 Codex 桌面/远程/扩展整合面的质量摩擦，但不足以据此断言其相对 Claude Code、Cursor、Cline、Pi Coding Agent 或 DeepSeek Harness/DSH 的优劣；开源 harness 的完整扫描留给对应专题。

## 日期未确认

未保留日期无法确认但足够重要的候选。

## 观察池

- [#42961](https://github.com/openai/codex/issues/42961) 请求扩展 diff 视图，属于功能建议而非故障；可观察后续是否进入产品路线。
- Windows 桌面相关 issue 是否获得维护者复现、关联版本或修复 PR，是下一轮重点。
- VS Code untrusted hooks 的提示行为是否属于文档偏差或回归，等待维护者标注。

## 来源链接

正文已在对应条目中直接链接全部来源。

## 采集状态

- 已检查：OpenAI Research/News、开发者文档与 changelog、ChatGPT 与 Enterprise/Edu release notes、Codex releases/issues、OpenAI Python/Node SDK 与 Agents SDK Python/TypeScript releases，以及 Reddit、Hacker News、X、YouTube 的相关关键词。
- 失败/受限：X 公开结果无法稳定核验时间与上下文；Reddit 噪声高且无值得保留的新候选；YouTube 未发现窗口内官方新增。
- 初始候选数：12；最终保留来源数：7。
- 二次补搜：否（最终来源不为 0）。

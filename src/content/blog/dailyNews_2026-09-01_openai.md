---
title: "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报"
date: "2026-09-01T00:00:00+08:00"
updatedAt: "2026-09-01T22:01:00+08:00"
description: "OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredTitle: "Codex 0.153.0-alpha.2"
featuredUrl: "https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.2"
featuredSummary: "Codex 官方仓库发布 0.153.0-alpha.2 预发布；页面未披露功能细节。 OpenAI 编码、Agent、模型、桌面与企业生态的每日动态和社区口碑。"
featuredPublishedAt: "2026-09-01 14:15 +08:00"
featuredTags: ["Codex","预发布"]
tags:
  - "当天较早已收录"
  - "观察池"
  - "客户案例"
  - "日期未确认"
  - "商业化"
  - "社区口碑"
  - "稳定版"
  - "移动端"
  - "预发布"
  - "Agent"
  - "ChatGPT"
  - "Codex"
  - "Gov"
  - "OpenAI"
---

## 今日概览

采集窗口：**2026-08-31 22:01 至 2026-09-01 22:01（Asia/Shanghai）**。本轮核对 Codex 官方发布列表，截至窗口终点仍以当天已收录的 `0.153.0-alpha.2` 为最新；`0.153.0-alpha.1`、`0.152.0` 稳定版与 4 个更早 alpha 预发布继续按累积规则保留。ChatGPT Release Notes 新检出 8 月 31 日的个性化贴纸包功能，但页面只给日期、未给时分，无法确认是否落在 22:01 之后，因此仅收入“日期未确认”，不列为严格窗口内事实。OpenAI News RSS 已收录的 Polimill 客户案例与 ChatGPT Ads 公告均已滑出本轮发现窗口，按当天累积规则保留。

## Tier 1：编码、Agent 与开发者平台

| 方向 | 本轮状态 | 证据与判断 |
| --- | --- | --- |
| Codex CLI | **稳定版 `0.152.0` + 6 个 alpha 预发布** | 新增 [`0.153.0-alpha.2`](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.2)；[`0.153.0-alpha.1`](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.1)； [`0.152.0`](https://github.com/openai/codex/releases/tag/rust-v0.152.0) 带完整功能与修复清单；[`0.152.0-alpha.7.2`](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7.2)、[`0.152.0-alpha.7`](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7)、[`0.152.0-alpha.6`](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6)、[`0.152.0-alpha.5`](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5) 均由官方仓库发布；alpha release note 只有版本标识。 |
| VS Code / JetBrains 集成 | 无新增 | 已查官方 Codex release、文档与公开检索，未发现窗口内可核实的独立更新。 |
| Codex 云端 / 远程任务 / PR Agent | 无新增 | 未发现窗口内官方独立公告。 |
| ChatGPT agentic mode / Work | 无新增 | ChatGPT Release Notes 在窗口内未列出新条目。 |
| 当前官方 Agent 构建产品 | 无新增 | Responses API、Agents SDK Python/TypeScript、Apps SDK 本轮未见可核实发布。 |
| Responses API | 无新增 | 平台文档与开发者社区已检查；没有官方确认的新变更。 |
| Assistants API 迁移 / 弃用 | 无新增 | 未发现窗口内迁移时间线变化；不得根据旧文档推断新节点。 |
| Realtime API | 无新增 | 未发现窗口内官方更新。 |
| GPT / reasoning / Codex 模型家族 | 无新增 | 未发现窗口内官方模型发布或别名变化。 |

### Codex 发布明细（最新在前）

1. **0.153.0-alpha.2**：官方 GitHub 于 **2026-09-01 14:15 +08:00** 发布，页面只有版本标识，应视为测试通道版本信号，不推断功能变化。[原始 release](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.2)
2. **0.153.0-alpha.1**：官方 GitHub 于 **2026-09-01 12:40 +08:00** 发布，页面只有版本标识，应视为测试通道版本信号，不推断功能变化。[原始 release](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.1)
3. **0.152.0 稳定版**：官方 GitHub 于 **2026-09-01 09:58 +08:00** 发布。新增 Vim 模式草稿内 `/`、`?` 搜索与 `n`/`N` 导航；限额提示可直达用量、credits、重置和套餐管理；CLI 展示凭据刷新进度；MCP server 名称支持包式字符，并可为单个 MCP 工具设置输出 token 上限。修复还覆盖压缩后的审批授权保留、恢复线程工作目录、MCP 缓存刷新、Windows sandbox 和云任务凭据来源限制等。[官方 release 与完整 changelog](https://github.com/openai/codex/releases/tag/rust-v0.152.0)
5. **0.152.0-alpha.7.2**：官方 GitHub 于 **2026-09-01 08:30 +08:00** 发布，页面只有版本标识，不据此推断功能变化。[原始 release](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7.2)
4. **0.152.0-alpha.7**：官方 GitHub 于 **2026-09-01 00:18 +08:00** 发布。页面仅写‘Release 0.152.0-alpha.7’，应视为测试通道版本信号，不解读为稳定版能力更新。[原始 release](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7)
6. **0.152.0-alpha.6**：官方 GitHub 于 **2026-08-31 10:12 +08:00** 发布，说明同样未披露功能细节。[原始 release](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6)
7. **0.152.0-alpha.5**：官方 GitHub 于 **2026-08-31 09:11 +08:00** 发布，说明同样未披露功能细节。[原始 release](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5)

## Tier 2：消费端功能

| 方向 | 本轮状态 |
| --- | --- |
| 浏览器 / Operator 能力 | 无新增 |
| 桌面应用 | 无新增；社区仍提出跨设备连续性需求，见观察池 |
| GPTs / GPT Store | 无新增 |
| Canvas | 无新增 |
| Sora / 视频 | 无新增 |
| GPT Image / DALL·E | **日期未确认**：8 月 31 日 release notes 列出个性化贴纸包，但无时分，见下文 |
| Voice | 无新增 |
| Connectors / MCP | 无新增 |

## Tier 3：企业、教育、安全与行业

- **Gov / 公共部门**：OpenAI 官方客户案例称 Polimill 使用 GPT 模型与 Codex 帮助日本地方政府检索、利用行政知识并加速开发；官方 RSS 时间为 **2026-08-31 15:00 +08:00**。[OpenAI 官方案例](https://openai.com/index/polimill)
- **企业 / Business / Edu / Science / safety**：官方 News、Help Center 与 Enterprise/Edu release notes 未发现窗口内可核实的独立更新。
- **商业化邻近信号**：ChatGPT Ads 公告的 RSS 时间为 **2026-08-31 12:00 +08:00**，已滑出当前发现窗口，但按当天累积规则保留。

## 官方更新（最新在前）

- Codex `0.153.0-alpha.2` 为新增官方预发布；`0.153.0-alpha.1` 为当天较早官方预发布；`0.152.0` 为官方稳定版，release 页面提供完整 changelog；`0.152.0-alpha.7.2`、`.7`、`.6`、`.5` 为官方预发布，alpha 页面仅有版本标识。本页只对稳定版摘要明确披露的变化。

## Love

- **证据较弱、样本仅 1 条**：跨设备同步请求的作者明确表示 Codex ‘很有帮助’，同时希望在多台 Windows 设备和虚拟机间可靠迁移会话、设置、skills 与附件。该反馈来自 OpenAI Developer Community，不代表总体用户口碑。[社区原帖](https://community.openai.com/t/feature-request-reliable-cross-device-codex-chat-synchronization/1393585)

## Hate

- **证据较弱、样本仅 1 条**：同一帖子称手动迁移数据库和设置不方便且偶尔失败，反映本地任务跨设备连续性仍是明确痛点；这是用户陈述，不是 OpenAI 已确认缺陷。[社区原帖](https://community.openai.com/t/feature-request-reliable-cross-device-codex-chat-synchronization/1393585)

## 口碑判断

整体情绪：**证据不足，暂不定性**。本轮能落入窗口并可打开的社区样本太少；官方公告不计入正面情绪。可确认的信号是：用户认可 Codex 的实用性，但希望获得更可靠的跨设备会话与任务连续性。

## 对比与替代工具信号

本轮没有足以支持‘追平’或‘超过’结论的具名评测或可复现实验。公开检索同时覆盖 Claude Code、Cursor、Cline、Pi Coding Agent、DeepSeek Harness / DSH 等关键词，但没有保留窗口内可核实的新对比；Cline、Pi 与 DSH 的完整产品扫描归开源 Harness 雷达。

## 日期未确认

- **ChatGPT 个性化贴纸包**：官方 ChatGPT Release Notes 列于 **2026-08-31**，称用户可从提示词、照片或模板生成贴纸包，下载后可在支持的设备上添加到 iMessage 或 WhatsApp；官方称该功能面向全球移动端用户。页面没有披露时分，无法判定是否在本轮 22:01 起点之后，故不计为严格窗口内新增。[ChatGPT 官方发布说明](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

## 当天较早已收录

### ChatGPT Ads 达到 10 亿美元年化收入运行率并扩展自助投放

OpenAI 官方 RSS 将发布时间标为 **2026-08-31 12:00 +08:00**，早于本轮窗口起点；本条因当天累积规则继续保留。公告称 ChatGPT Ads 在推出不到 200 天后达到 **10 亿美元年化收入运行率**，已有数万广告主；当天稍晚起，印度、欧洲、中东和北非广告主可直接通过 Ads Manager 购买广告。公告还称 ChatGPT 周活跃用户超过 10 亿，并重申广告会明确标注、与回答分离，广告主不能访问私人对话。该发布时间早于本轮窗口起点，因此不列为严格的窗口内新增事实。[OpenAI 官方公告](https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/)

## 观察池

- **跨设备 Codex 连续性诉求**：OpenAI Developer Community 帖子最初发布于 8 月 30 日，8 月 31 日仍有作者跟进；页面时区与本轮边界的对应关系未完全确认，因此作为社区观察信号保留。诉求包括同步或转移聊天、任务历史、设置、skills 与附件，并避免直接搬运 SQLite 数据库。[社区原帖](https://community.openai.com/t/feature-request-reliable-cross-device-codex-chat-synchronization/1393585)

## 来源链接

- [Codex 0.153.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.2)
- [Codex 0.153.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.153.0-alpha.1)
- [Codex 0.152.0](https://github.com/openai/codex/releases/tag/rust-v0.152.0)
- [Codex 0.152.0-alpha.7.2](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7.2)
- [Codex 0.152.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.7)
- [Codex 0.152.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.6)
- [Codex 0.152.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.152.0-alpha.5)
- [Polimill builds Japan's next-generation public AI infrastructure](https://openai.com/index/polimill)
- [A milestone in expanding access to AI](https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/)
- [Feature request: reliable cross-device Codex chat synchronization](https://community.openai.com/t/feature-request-reliable-cross-device-codex-chat-synchronization/1393585)
- [ChatGPT Release Notes：Create and share personalized sticker packs](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

## 采集状态

- 已检查：OpenAI News / Research / Product、开发者文档与平台 changelog、ChatGPT 及 Enterprise/Edu release notes、Codex / Agents SDK / Python / Node 官方 GitHub releases、OpenAI Developer Community、Reddit、Hacker News、X 与 YouTube/播客公开检索。
- 失败来源：OpenAI 文章 HTML 直连返回 403，未能验证稳定的官方原图 URL；X 未得到可直接验证时间戳的窗口内条目；YouTube/播客未发现可核实新条目。
- 初始候选：**15**；保留来源：**11**；二次补搜：**否**（最终来源不为 0）。
- 图片：**未配置**。官方文章页面可打开，但未能验证公开、稳定且来源明确的原始图片 URL，故宁可纯文字展示。

# Daily source data

一个 Codex Scheduled Task 每天生成五份主题数据，发布器再自动生成第六篇每日精选文章：

| order | file | slug |
|---:|---|---|
| 10 | `claude.json` | `claude` |
| 20 | `openai.json` | `openai` |
| 30 | `open-source.json` | `open-source` |
| 40 | `industry.json` | `ai-industry` |
| 50 | `aaas.json` | `aaas` |

路径为 `data/daily/YYYY-MM-DD/<file>`。每份 JSON 对应一篇独立主题页，当天必须恰好五份；`yarn news:publish` 额外生成 `dailyNews_YYYY-MM-DD_daily-edition.md`，无需也不得创建 `daily-edition.json`。

## Schema

```json
{
  "slug": "openai",
  "title": "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报",
  "description": "页面摘要。",
  "tags": ["OpenAI", "ChatGPT", "Codex", "Agent"],
  "order": 20,
  "updatedAt": "2026-08-18T13:30:00+08:00",
  "image": {
    "url": "https://example.com/original-image.jpg",
    "alt": "图片所展示内容的准确描述",
    "sourceUrl": "https://example.com/original-article",
    "caption": "图片来源：发布方名称"
  },
  "scan": {
    "checkedSources": ["OpenAI News", "OpenAI GitHub", "Reddit r/OpenAI"],
    "failedSources": ["X 搜索：页面未登录不可访问"],
    "candidateCount": 12,
    "secondPass": false
  },
  "content": "## 今日概览\n\n完整 Markdown 正文……",
  "sources": [
    {
      "title": "原文标题",
      "url": "https://example.com/original",
      "source": "来源或厂商名称",
      "publishedAt": "2026-08-17 09:00 +08:00",
      "summary": "这条来源支持的核心事实。",
      "tags": ["Codex"]
    }
  ]
}
```

## Rules

- `content` 是最终页面正文，不包含 YAML frontmatter；可以使用 Markdown 表格和小节。
- `image` 对单页可选，但当天五篇不能全部省略。优先选择本页已引用的官方原文、论文或项目页面自带的题图/OpenGraph 图；`sourceUrl` 必须对应 `sources` 中的 URL，并出现在正文对应新闻条目里。发布器会把图片插到首次引用该来源的段落或表格之后，而不是作为页面题图或列表缩略图。必须填写准确 `alt` 和来源说明，禁止使用搜索结果缩略图、图库水印图、头像或无法确认出处的图片。单页没有合适图片时可以省略，但应尽量让每个主题拥有可靠图片。
- 只引用公开可访问的 HTTP(S) 图片；不得使用登录态 URL、临时签名 URL、`data:` URL 或社交平台用户上传的争议图片。
- `updatedAt` 是本页发生实质内容变化的上海时间，格式固定为 `YYYY-MM-DDTHH:mm:ss+08:00`。仅推进扫描时间但内容无变化时不得改写它。
- `sources` 记录正文引用的来源；每个 URL 必须实际出现在 `content` 中，同一页面内 URL 唯一。
- 同一 URL 可以跨主题出现；行业与 AaaS 页面引用 Claude/OpenAI 来源时注明“详见专题页”。
- 优先使用可打开的原始来源；仅有可信二手来源或日期无法确认的候选也可收录，但必须放入“日期未确认”或“观察池”并清楚标注证据状态。
- `publishedAt` 无法确认时留空并标注，不得猜测。
- `scan` 记录已检查来源、失败来源、初始候选数量和是否完成二次补搜。最终来源为 0 时必须二次补搜并设置 `secondPass: true`。
- 当天无显著动态时仍可生成页面，但正文必须如实说明，`sources` 可以为空。
- 同一天重复运行采用“当天累积”：先读取已有 JSON，无条件保留已有 `sources`，再合并新条目并按规范化 URL/同一事件去重。向前 24 小时窗口只用于发现新候选，不用于删除当天已收录内容；跨日后创建新目录，历史页不改写。
- `yarn news:check YYYY-MM-DD` 会与 Git `HEAD` 中同日 JSON 比较并阻止来源减少。只有用户明确要求纠错时才可临时设置 `ALLOW_DAILY_SOURCE_REMOVAL=1`，且需说明删除原因。
- 禁止编造产品、版本、发布时间、指标、互动量、引文或趋势。

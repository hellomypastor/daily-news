# Daily source data

一个 Codex Scheduled Task 每天生成五份主题数据：

| order | file | slug |
|---:|---|---|
| 10 | `claude.json` | `claude` |
| 20 | `openai.json` | `openai` |
| 30 | `open-source.json` | `open-source` |
| 40 | `industry.json` | `ai-industry` |
| 50 | `aaas.json` | `aaas` |

路径为 `data/daily/YYYY-MM-DD/<file>`。每份 JSON 对应一篇独立页面，当天必须恰好五份。

## Schema

```json
{
  "slug": "openai",
  "title": "OpenAI / ChatGPT 全家桶过去 24 小时动态与口碑日报",
  "description": "页面摘要。",
  "tags": ["OpenAI", "ChatGPT", "Codex", "Agent"],
  "order": 20,
  "updatedAt": "2026-08-18T13:30:00+08:00",
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
- `updatedAt` 是本页发生实质内容变化的上海时间，格式固定为 `YYYY-MM-DDTHH:mm:ss+08:00`。仅推进扫描时间但内容无变化时不得改写它。
- `sources` 记录正文引用的全部原始来源；每个 URL 必须实际出现在 `content` 中。
- 五个主题之间 URL 全局唯一。重复事件按 `automation/topics/README.md` 的归属规则处理。
- 只使用能打开并核实的原始 HTTP(S) 链接，不使用搜索结果页。
- `publishedAt` 无法确认时留空，并按主题规范降级或排除，不得猜测。
- 当天无显著动态时仍可生成页面，但正文必须如实说明，`sources` 可以为空。
- 同一天重复运行时先读取已有 JSON，保留仍符合主题时间窗口的条目，合并新条目并更新完整正文；不要简单覆盖或无限累加。
- 禁止编造产品、版本、发布时间、指标、互动量、引文或趋势。

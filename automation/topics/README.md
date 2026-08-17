# Topic ownership and shared rules

Run all five topic scans in order. Each topic writes only its assigned JSON file.

## Ownership and deduplication

1. Anthropic/Claude product news and community sentiment → `claude.json`.
2. OpenAI/ChatGPT/Codex product news and community sentiment → `openai.json`.
3. Open-source repositories, independent engineering posts and papers → `open-source.json`.
4. Other vendors' official releases, research and podcasts → `industry.json`.
5. Hosted/managed/remote Agent business and platform developments → `aaas.json`.

An original URL may appear in exactly one file. When an event fits multiple topics, assign it to the earliest applicable owner above; later pages may describe the cross-topic conclusion without repeating that URL.

## Evidence

- Use Asia/Shanghai and compute explicit start/end timestamps for each topic's window.
- Open original sources and verify publication time. Search snippets are discovery only.
- Prefer official announcements, documentation, changelogs, releases, papers and original posts.
- Never infer that a product exists merely because its name appears in the instructions.
- For short quotes, keep each source excerpt within 25 words.
- If evidence is missing, say so. Never fill quotas with invented or stale items.
- `content` must cite every URL listed in `sources`; follow `data/daily/README.md`.

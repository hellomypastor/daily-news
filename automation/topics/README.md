# Topic ownership and shared rules

Run all five topic scans in order. Each topic writes only its assigned JSON file.

## Ownership and cross-topic coverage

1. Anthropic/Claude product news and community sentiment → `claude.json`.
2. OpenAI/ChatGPT/Codex product news and community sentiment → `openai.json`.
3. Open-source repositories, independent engineering posts and papers → `open-source.json`.
4. Other vendors' official releases, research and podcasts → `industry.json`.
5. Hosted/managed/remote Agent business and platform developments → `aaas.json`.

The same original URL may appear in multiple files when it is genuinely relevant. Deduplicate only within a page. Industry and AaaS pages may repeat Claude/OpenAI links and must add `详见 Claude 专题页` or `详见 OpenAI 专题页`. Do not omit a relevant event merely because another page already cited it.

## Evidence

- Use Asia/Shanghai and compute explicit start/end timestamps for each topic's window.
- Open original sources and verify publication time when possible. If the original is unavailable, retain useful candidates from reputable secondary sources in `日期未确认` or `观察池`, with the limitation stated.
- Prefer official announcements, documentation, changelogs, releases, papers and original posts.
- Never infer that a product exists merely because its name appears in the instructions.
- For short quotes, keep each source excerpt within 25 words.
- Prefer recall over aggressive exclusion: list verified items, unverified-date candidates, older/context items, rumors and adjacent signals in clearly separated sections.
- If evidence is incomplete, say so instead of dropping the candidate. Never turn an unverified candidate into a confirmed fact.
- `content` must cite every URL listed in `sources`; follow `data/daily/README.md`.
- Every page ends with `采集状态`: checked sources, failed sources with short reasons, initial candidate count, retained count and whether a second pass ran.
- If retained sources are zero, run a second search pass with broader Chinese/English queries, alternate official feeds, GitHub and reputable secondary coverage before finalizing.

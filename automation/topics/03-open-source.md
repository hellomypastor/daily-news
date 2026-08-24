# AI and Agent open-source digest

Write `open-source.json` with order `30`, slug `open-source`, title `今日 AI / Agent 开源项目与技术博客精选`, description `经过时效验证的 AI、Agent、LLM 开源项目、技术博客与研究精选。`, and tags `AI`, `Agent`, `Open Source`, `LLM`.

## Sources

Inspect Hacker News front/newest and recent Algolia submissions; GitHub daily trending overall, Python and TypeScript; arXiv; Hugging Face Papers/blog; Simon Willison and reputable model/infrastructure engineering blogs.

## Coding Agent / Harness radar

Treat coding-agent harnesses as a primary beat, not incidental GitHub Trending discoveries.

- Tier 1, mandatory every run: Cline (`cline/cline` and official changelog/releases), Pi Coding Agent / Pi mono (`badlogic/pi-mono` and official packages/releases), and DeepSeek Harness / DSH (`deepseek-ai/deepseek-harness`, official DSH packages/releases and first-party documentation).
- Tier 2, mandatory quick check every run: OpenCode, Aider, Continue and Roo Code through their current official repositories, release pages and changelogs. Discover the current first-party URL if a project moved; do not silently substitute a fork.
- Track meaningful changes to the agent loop, model routing, planning, context/compaction, memory, sessions, skills/plugins/MCP, permissions, sandboxing, tool execution, IDE/desktop/CLI surfaces, headless/CI use, multi-agent coordination, benchmarks and adoption signals.
- Do not claim one tool has caught or surpassed another from anecdotes alone. Performance comparisons require a named benchmark, reproducible evaluation, or clearly labeled community evidence.

Add a compact `Coding Agent / Harness 雷达` section to the page. Record all Tier 1 and Tier 2 channels in `scan.checkedSources`; if there is no reportable change, do not manufacture a row.

## Time and selection

- Verified highlights: prioritize original publications from the previous 48 hours and verify dates where possible.
- GitHub Trending: today's listing establishes current popularity, not today's publication. Record stars and daily growth only when displayed.
- Old article resurfacing: original older than seven days but discussed on HN in the previous 24 hours; isolate it and show original date plus current HN points/comments.
- Unverified date: retain in `日期未确认` with the reason and available discovery evidence.
- Older, weakly related, marketing-heavy or otherwise borderline candidates: retain compactly in `观察池` with a status label instead of discarding them.

Lead with 5–10 genuinely technical highlights when available, focusing on coding Agents/harnesses, AI/LLM/Agent/RAG/inference/evaluation/developer tools, then list remaining relevant candidates compactly. Do not present marketing or SEO claims as verified technical facts.

The Markdown page contains: overview; `Coding Agent / Harness 雷达`; verified highlights; GitHub Trending; HN discussion; papers/research; resurfaced articles; `日期未确认`; `观察池`; source links; and `采集状态`. Each item includes title, what it is, why it matters, source, original URL and verified date/status.

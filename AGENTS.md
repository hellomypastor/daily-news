# Daily News automation

This repository is published by one Codex Scheduled Task. A successful daily run must produce five independent topic pages plus one generated daily-edition page and push all six in one commit.

## Content contract

1. Work from the repository root and use the current date in `Asia/Shanghai`.
2. Require a clean working tree, then run `git pull --ff-only origin main` before changing files. Stop on local changes or divergence.
3. Write exactly five topic source files under `data/daily/YYYY-MM-DD/`, following `data/daily/README.md`.
4. Each source file represents one topic page. The publisher generates the sixth daily-edition Markdown from those five sources; do not hand-maintain a sixth JSON.
5. Prefer original HTTP(S) sources and verify claims when possible. Retain relevant unverified candidates in labeled watchlists; never present them as confirmed facts or invent an item.
6. Do not edit historical source data or generated posts unless the task explicitly requests a correction.
7. Repeated runs on the same Asia/Shanghai date are cumulative: retain every source already committed for that date, merge and deduplicate new findings, and never remove an earlier source merely because it falls outside the current 24-hour discovery window. Start a fresh set of five topic files after the date changes; regenerate the daily edition on every substantive publish.

## Publish contract

After all five topic source files are ready, run:

```bash
yarn news:publish YYYY-MM-DD
yarn news:check YYYY-MM-DD
yarn build
```

Stop without committing if any command fails. When all commands pass:

1. Confirm that changes are limited to the five source JSON files, the six generated Markdown files, and the generated search index.
2. Create one commit named `Publish daily news YYYY-MM-DD`.
3. Push the current `main` branch to `origin/main`.
4. Report the six page titles, commit hash, push result, and build result.

Never print credentials, tokens, or the full environment. Never use force push.

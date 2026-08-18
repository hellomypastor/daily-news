# Daily News automation

This repository is published by one Codex Scheduled Task. A successful daily run must produce exactly five independent news pages and push them in one commit.

## Content contract

1. Work from the repository root and use the current date in `Asia/Shanghai`.
2. Require a clean working tree, then run `git pull --ff-only origin main` before changing files. Stop on local changes or divergence.
3. Write exactly five source files under `data/daily/YYYY-MM-DD/`, following `data/daily/README.md`.
4. Each source file represents one page. Never combine the five topics into one page.
5. Prefer original HTTP(S) sources and verify claims when possible. Retain relevant unverified candidates in labeled watchlists; never present them as confirmed facts or invent an item.
6. Do not edit historical source data or generated posts unless the task explicitly requests a correction.

## Publish contract

After all five source files are ready, run:

```bash
yarn news:publish YYYY-MM-DD
yarn news:check YYYY-MM-DD
yarn build
```

Stop without committing if any command fails. When all commands pass:

1. Confirm that changes are limited to the five source JSON files, the five generated Markdown files, and the generated search index.
2. Create one commit named `Publish daily news YYYY-MM-DD`.
3. Push the current `main` branch to `origin/main`.
4. Report the five page titles, commit hash, push result, and build result.

Never print credentials, tokens, or the full environment. Never use force push.

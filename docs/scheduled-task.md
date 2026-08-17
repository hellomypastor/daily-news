# Codex Scheduled Task

Use one local-project task to research five topics, generate five pages, and publish them in one commit.

## Configuration

- Project: this repository
- Execution: local project, not an isolated worktree or cloud-only task
- Schedule: daily, for example 10:30 Asia/Shanghai
- Permissions: workspace write plus network access for research and Git
- Runtime: keep the computer on and the desktop app running

## Prompt to paste

```text
在当前 daily-news 仓库执行每日新闻发布。使用 Asia/Shanghai 时区计算运行日期 YYYY-MM-DD 和每个主题的准确时间窗口。

开始前：
1. 阅读 AGENTS.md、data/daily/README.md、automation/topics/README.md，以及 automation/topics/ 下 01 到 05 的全部主题规范。
2. 确认当前分支为 main，工作区干净，没有未提交或未跟踪的用户文件。
3. 执行 git pull --ff-only origin main。若存在本地改动、分支分叉或同步失败，立即停止；不得覆盖、删除或清理用户修改。

按 01 到 05 的顺序完成五个主题。每个主题都要打开原始来源、核实发布时间和关键事实，并严格遵守主题归属及 URL 全局去重规则。搜索结果摘要只能用于发现候选来源，不能直接作为事实证据。禁止编造产品、版本、日期、指标、互动量、引文或趋势。

生成当天恰好五份数据：
- data/daily/YYYY-MM-DD/claude.json
- data/daily/YYYY-MM-DD/openai.json
- data/daily/YYYY-MM-DD/open-source.json
- data/daily/YYYY-MM-DD/industry.json
- data/daily/YYYY-MM-DD/aaas.json

每完成一个主题就立即写入并重新读取对应 JSON，确认它是有效 JSON，content 是完整 Markdown 正文，sources 收录正文引用的全部原始 URL。不要写临时 Markdown、旧 workspace 输出或 index 文件。

五份数据完成后执行：
yarn news:publish YYYY-MM-DD
yarn news:check YYYY-MM-DD
yarn build

只有三条命令全部成功才允许发布。提交前检查 git status 和 diff，变更范围只允许包括：
- 当天五个 data/daily JSON
- 当天五个 src/content/blog Markdown
- public/search-index.json

如果出现其他改动、少于五份数据、重复 URL、校验失败或构建失败，停止且不要提交。

全部通过后执行一次统一提交：
git add data/daily/YYYY-MM-DD src/content/blog public/search-index.json
git commit -m "Publish daily news YYYY-MM-DD"
git push origin main

禁止 force push，禁止输出凭据、Token 或环境变量。

最终报告五篇页面标题、每篇来源数、生成路径、校验结果、构建结果、commit hash 和 push 结果。任何步骤失败时停止后续操作并明确报告原因。
```

Pushing `main` triggers repository CI. The existing Vercel Git integration performs deployment after the push.

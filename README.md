# Daily News

由 Codex Scheduled Task 每 3 小时滚动研究五个主题，每天维护五篇独立新闻页面，并在有实质变化时通过一次 Git 提交发布。站点使用 Astro 构建，通过 Vercel Git 集成部署。

## 工作流

```text
Codex Scheduled Task（每 3 小时）
  ├─ 研究 5 个主题
  ├─ 合并更新 5 个 data/daily/YYYY-MM-DD/*.json
  ├─ 生成 5 个 src/content/blog/*.md
  ├─ 校验并构建
  └─ 有变化时单次 commit + push main
             ↓
      GitHub Actions 校验
             ↓
       Vercel 自动部署
```

GitHub Actions 不再负责定时采集，不需要 OpenAI/Gemini API Key，也不会自动修改仓库。

## 本地开发

需要 Node.js 22 和 Yarn 1.x。

```bash
corepack enable
yarn install --frozen-lockfile
yarn dev
```

## 手动生成一天的页面

先按照 [数据格式](data/daily/README.md)准备当天恰好五个 JSON 文件，然后执行：

```bash
yarn news:publish 2026-08-17
yarn news:check 2026-08-17
yarn build
```

生成文件名为 `src/content/blog/dailyNews_YYYY-MM-DD_<slug>.md`，每份 JSON 对应一篇页面。

## Scheduled Task

可直接粘贴的任务提示词见 [Codex Scheduled Task 配置](docs/scheduled-task.md)，五个主题的详细规范保存在 [`automation/topics`](automation/topics/README.md)。

根据 OpenAI 官方说明，本地项目 Scheduled Task 依赖电脑开机且桌面应用运行。项目使用本地项目模式，以便五个主题在同一次运行中统一提交；任务执行前应避免在此 checkout 留下未提交改动。

## CI 与部署

每次 push 或 pull request 会执行：

```bash
yarn news:check:all
yarn check:type
yarn build
```

部署由 Vercel 的 Git 集成接管：连接本仓库并将 Production Branch 设为 `main`。推送成功后 Vercel 自动构建和发布。

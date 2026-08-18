# Codex Scheduled Task

Use one local-project task to refresh five topics every three hours, maintain five daily pages, and publish only substantive changes in one commit.

## Configuration

- Project: this repository
- Execution: local project, not an isolated worktree or cloud-only task
- Schedule: every 3 hours, using Asia/Shanghai as the reporting timezone
- Permissions: workspace write plus network access for research and Git
- Runtime: keep the computer on and the desktop app running

## Prompt to paste

```text
在当前 daily-news 仓库执行每 3 小时一次的滚动新闻更新。使用 Asia/Shanghai 时区计算运行日期 YYYY-MM-DD、当前时间和每个主题的准确滚动时间窗口。当天始终维护 5 篇页面，不为每轮运行新增页面。

开始前：
1. 阅读 AGENTS.md、data/daily/README.md、automation/topics/README.md，以及 automation/topics/ 下 01 到 05 的全部主题规范。
2. 确认当前分支为 main，工作区干净，没有未提交或未跟踪的用户文件。
3. 执行 git pull --ff-only origin main。若存在本地改动、分支分叉或同步失败，立即停止；不得覆盖、删除或清理用户修改。

并行采集 01 到 05 五个主题（按可用并发槽分批并行），最后由主任务统一合并、校验和提交。每个主题优先打开原始来源、核实发布时间和关键事实；日期或原文暂时无法确认的相关候选不得直接丢弃，应进入“日期未确认”或“观察池”并标明限制。禁止编造产品、版本、日期、指标、互动量、引文或趋势。

如果当天目录已存在，先完整读取五份已有 JSON，再做滚动更新：
- 重新扫描主题规定的时间窗口；日报主题的主窗口始终是运行时刻向前 24 小时，不是仅扫描最近 3 小时。
- 保留仍处于对应主题有效窗口且事实未失效的已有条目，加入本轮新核实的条目，移除已滑出窗口的条目。
- 按规范重写完整 content 和 sources；仅在单个页面内按 URL 去重，允许跨主题重复引用。行业与 AaaS 引用 Claude/OpenAI 链接时注明“详见专题页”。不得简单覆盖掉早先有效条目，也不得无限累加历史条目。
- 只有来源集合、事实、状态、指标或正文结论发生实质变化时才改写对应 JSON，并将其 updatedAt 设为本次上海时间，格式为 YYYY-MM-DDTHH:mm:ss+08:00。
- 仅扫描截止时间前移、措辞变化或互动数字的无意义波动不算实质变化；此时保留原文件及 updatedAt，不要改写。

生成当天恰好五份数据：
- data/daily/YYYY-MM-DD/claude.json
- data/daily/YYYY-MM-DD/openai.json
- data/daily/YYYY-MM-DD/open-source.json
- data/daily/YYYY-MM-DD/industry.json
- data/daily/YYYY-MM-DD/aaas.json

每完成一个主题就立即写入并重新读取对应 JSON，确认它是有效 JSON，content 是完整 Markdown 正文，sources 收录正文引用的全部原始 URL。不要写临时 Markdown、旧 workspace 输出或 index 文件。

每个主题必须填写 scan：已检查来源、失败来源及原因、候选数量、是否二次补搜；正文末尾写“采集状态”。如果某主题最终 sources 为 0，必须扩大中英文关键词，改查备用入口、GitHub 与可信二手来源再搜索一次，并设置 `scan.secondPass=true`。二次补搜后仍为 0 才可提交空结果。

每个主题在有合适素材时，从本页已引用的官方原文、论文或项目页面提取一张公开可访问的配图/OpenGraph 图，按 data/daily/README.md 填写 image.url、alt、sourceUrl 和 caption，并确保 sourceUrl 出现在正文对应新闻条目中。图片会紧跟该条目的说明段落或表格展示；不要把图片当作页面题图，也不要放到首页列表右侧。优先官方发布配图、项目截图和视频封面；禁止生成图片、使用搜索结果缩略图、头像、图库水印图或无法确认出处的图片。没有可靠图片就省略 image，不得硬凑。

五个主题检查完后，先运行 `git status --porcelain -- data/daily/YYYY-MM-DD`。如果当天五份 JSON 均已存在且没有实质变化，停止后续发布，不运行 publish/build，不创建空提交；最终明确报告“本轮无实质更新”。

五份数据完成后执行：
yarn news:publish YYYY-MM-DD
yarn news:check YYYY-MM-DD
yarn build

只有三条命令全部成功才允许发布。提交前检查 git status 和 diff，变更范围只允许包括：
- 当天五个 data/daily JSON
- 当天五个 src/content/blog Markdown
- public/search-index.json

如果出现其他改动、少于五份数据、页面内重复 URL、0 来源但未二次补搜、校验失败或构建失败，停止且不要提交。

全部通过且确有变更后执行一次统一提交：
git add data/daily/YYYY-MM-DD src/content/blog public/search-index.json
git commit -m "Update daily news YYYY-MM-DD HH:mm"
git push origin main

禁止 force push，禁止输出凭据、Token 或环境变量。

最终报告五篇页面标题、每篇来源数、生成路径、校验结果、构建结果、commit hash 和 push 结果。任何步骤失败时停止后续操作并明确报告原因。
```

Pushing `main` triggers repository CI. The existing Vercel Git integration performs deployment after the push.

# Codex Scheduled Task

Use one local-project task to refresh five topics every three hours, accumulate them, and publish five topic pages plus one generated daily edition in one commit.

## Configuration

- Project: this repository
- Execution: local project, not an isolated worktree or cloud-only task
- Schedule: every 3 hours, using Asia/Shanghai as the reporting timezone
- Permissions: workspace write plus network access for research and Git
- Runtime: keep the computer on and the desktop app running

## Prompt to paste

```text
在当前 daily-news 仓库执行每 3 小时一次的当天累积新闻更新。使用 Asia/Shanghai 时区计算运行日期 YYYY-MM-DD、当前时间和每个主题的采集窗口。当天维护 5 篇主题页，并由发布器自动生成 1 篇独立的每日精选文章，共 6 篇；不为每轮运行新增页面，跨日后创建新日期目录，历史日期不再改写。

开始前：
1. 阅读 AGENTS.md、data/daily/README.md、automation/topics/README.md，以及 automation/topics/ 下 01 到 05 的全部主题规范。
2. 确认当前分支为 main，工作区干净，没有未提交或未跟踪的用户文件。
3. 执行 git pull --ff-only origin main。若存在本地改动、分支分叉或同步失败，立即停止；不得覆盖、删除或清理用户修改。

并行采集 01 到 05 五个主题（按可用并发槽分批并行），最后由主任务统一合并、校验和提交。每个主题优先打开原始来源、核实发布时间和关键事实；日期或原文暂时无法确认的相关候选不得直接丢弃，应进入“日期未确认”或“观察池”并标明限制。禁止编造产品、版本、日期、指标、互动量、引文或趋势。

每轮必须显式检查 xAI/Grok 与 Cognition Devin，不得只依赖顺带发现：04 行业主题检查 Grok 模型、API、DeepSearch、语音、编码、工具调用和 Agent 官方动态；05 AaaS 主题检查 Devin 的托管异步执行、环境、并发、定价、企业接入与集成，同时检查 Grok 是否出现符合 AaaS 定义的托管 Agent、异步任务、工具或远程执行能力。普通 Grok 模型/API 更新只进入行业主题，不得误写成 AaaS。两项检查均写入对应 `scan.checkedSources`；无动态时不硬凑条目。

禁止为了证明“已检查”而跨日重复同一条较旧背景来源；没有新增时只在 `scan.checkedSources` 和采集状态中写明“无新增”。较旧背景、观察池、日期未确认、未证实传闻和邻近信号不得配置为页面 `image.sourceUrl`，也不得成为 Today 首页精选；没有合格配图时宁可纯文字展示。

如果当天目录已存在，先完整读取五份已有 JSON，再做当天累积更新：
- 每轮仍重新扫描运行时刻向前 24 小时，而不是只扫描最近 3 小时；这个窗口只用于发现新候选，不用于删除当天已经收录的内容。
- 无条件保留当天五份 JSON 中已有的 sources；加入本轮新核实条目，按规范化 URL 和同一事件去重。即使已有条目随后滑出本轮 24 小时采集窗口，也要保留到当天结束。
- 按累积后的来源集合重写完整 content 和 sources；允许跨主题重复引用。行业与 AaaS 引用 Claude/OpenAI 链接时注明“详见专题页”。禁止用本轮搜索结果替换已有集合。
- 只有用户明确要求纠错，或原链接被证实错误/恶意时才允许删除当天已有来源；这种人工纠错运行可设置 `ALLOW_DAILY_SOURCE_REMOVAL=1`，并必须在最终报告中列出删除项与原因。定时任务不得自行设置该变量。
- Asia/Shanghai 日期变化后创建新的五份 JSON；前一日及更早页面保持不变，因此不会跨日无限累加。
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

每个主题都应主动检查本页已引用的官方原文、论文或项目页面是否有公开可访问的配图/OpenGraph 图，并按 data/daily/README.md 填写 image.url、alt、sourceUrl 和 caption，确保 sourceUrl 出现在正文对应新闻条目中。图片会紧跟该条目的说明段落或表格展示；不要把图片当作页面题图，也不要放到首页列表右侧。优先官方发布配图、项目截图和视频封面；禁止生成图片、使用搜索结果缩略图、头像、图库水印图或无法确认出处的图片。单个主题没有可靠图片可以省略，但当天五篇不得全部无图；提交前必须检查至少一篇配置了可访问且来源明确的 image，目标是有可靠素材的主题都配置。

Today 首页会像 weblog 一样显示当天五条紧凑精选：每个主题取 `image.sourceUrl` 对应来源（无图时取第一条来源）的标题、2–3 句摘要、配图、时间和标签；不得展开完整日报。五篇专题详情页以及由发布器生成的第六篇 `dailyNews_YYYY-MM-DD_daily-edition.md` 均需保留独立永久链接。

当仓库中存在早于当天的日报时，Today 右侧自动显示 `Highlights`，按日期倒序列出最多 10 条历史精选；仅有当天内容时隐藏右栏并保持单栏。

构建会为每个日期生成 `/daily/YYYY-MM-DD` 精选展示页，内容与当天 Today 五条精选一致；发布器同时生成第六篇正式 Markdown 文章 `dailyNews_YYYY-MM-DD_daily-edition.md`。两者都由五份主题 JSON 派生，不新增第六份 JSON；Today 日期标题和 Highlights 日期均链接到精选展示页。

五个主题检查完后，先运行 `git status --porcelain -- data/daily/YYYY-MM-DD`。如果当天五份 JSON 均已存在且没有实质变化，停止后续发布，不运行 publish/build，不创建空提交；最终明确报告“本轮无实质更新”。

五份数据完成后执行：
yarn news:publish YYYY-MM-DD
yarn news:check YYYY-MM-DD
yarn build

只有三条命令全部成功才允许发布。提交前检查 git status 和 diff，变更范围只允许包括：
- 当天五个 data/daily JSON
- 当天六个 src/content/blog Markdown（含自动生成的 daily-edition）
- public/search-index.json

如果出现其他改动、少于五份数据、页面内重复 URL、0 来源但未二次补搜、校验失败或构建失败，停止且不要提交。

全部通过且确有变更后执行一次统一提交：
git add data/daily/YYYY-MM-DD src/content/blog public/search-index.json
git commit -m "Update daily news YYYY-MM-DD HH:mm"
git push origin main

禁止 force push，禁止输出凭据、Token 或环境变量。

最终报告六篇页面标题、五篇专题的来源数、生成路径、校验结果、构建结果、commit hash 和 push 结果。任何步骤失败时停止后续操作并明确报告原因。
```

Pushing `main` triggers repository CI. The existing Vercel Git integration performs deployment after the push.

# Agent-as-a-Service daily

Write `aaas.json` with order `50`, slug `aaas`, title `AaaS（Agent-as-a-Service）行业动态日报`, description `托管 Agent、远程异步执行平台及其商业化与生态动态。`, and tags `AaaS`, `Agent`, `Cloud Agent`, `Managed Agent`.

## Definition

AaaS here means a service that hosts or manages Agent execution, asynchronous tasks, environments, lifecycle, orchestration, observability, enterprise access or remote coding work. A model API alone is MaaS; generic cloud infrastructure alone is PaaS. Keep adjacent MaaS/PaaS signals in a separate `邻近信号观察池` instead of silently excluding them.

## Coverage

- Overseas: Anthropic managed/hosted Agents, Agent SDK/Skills/Claude Code; OpenAI agent-building products, ChatGPT agents and Codex remote/cloud; Google Vertex Agent products and Gemini/Jules; Microsoft Copilot Studio/Azure Agent services; Replit Agent; Cognition Devin; xAI/Grok Agent capabilities; Cursor, Lindy, CrewAI, LangGraph Platform, GitHub coding agent, Amazon Q Developer; Cloudflare Agents/Sandboxes/Computer/Workers; Factory and Sourcegraph/Amp.
- Remote/cloud execution: hosted async tasks, background agents, PR agents, environment/runtime isolation, concurrency, pricing and enterprise integration.
- China: ByteDance Coze/Volcano/Doubao/Trae/Seed; Alibaba Bailian/Qoder/Tongyi/Quark; Tencent Yuanbao/Hunyuan/Cloud; Baidu AgentBuilder/Comate; Zhipu, Moonshot/Kimi, MiniMax, DeepSeek and credible startups.
- Events: launches, beta/GA, hosted runtime, SDK/skills, pricing, quotas, enterprise adoption, revenue, funding/M&A and meaningful open-source/engineering updates.

Cognition Devin and xAI/Grok are mandatory checks on every run. For Devin, inspect official product news/changelog/docs for hosted or asynchronous execution, environments, concurrency, pricing, enterprise access and integrations. For Grok, look specifically for hosted Agent execution, asynchronous tasks, tool use, coding/remote execution and enterprise/API Agent capabilities; ordinary Grok model/API news belongs in the industry page and is only an AaaS item when it satisfies the definition above. Record both checks in `scan.checkedSources`, even when no reportable development is found.

Use a primary 24h window and include all relevant 24–72h items in a watchlist. Keep older or undated candidates in `日期未确认` or `观察池`. Product names are search terms until confirmed. One-source leaks/rumors may appear only in `未证实传闻`, labeled with source count and never presented as product launches.

Relevant links from Claude, OpenAI, open-source or industry pages may be repeated; add `详见对应专题页` and explain the AaaS implication.

The Markdown page contains: top items; remote/cloud Agent execution; overseas vendors; China with ByteDance highlighted; AaaS vs MaaS/PaaS notes; `日期未确认`; `未证实传闻`; `邻近信号观察池`; trends; source links; and `采集状态`. If verified 24h developments are empty, say so but still list relevant candidates and complete a second search pass. End with `今日扫描完成，共 N 条动态，重点：...`.

import fs from "node:fs";
import { DATA_ROOT, readSources } from "./lib.mjs";
import { spawnSync } from "node:child_process";

const dates = fs
	.readdirSync(DATA_ROOT, { withFileTypes: true })
	.filter(
		(entry) =>
			entry.isDirectory() &&
			/^\d{4}-\d{2}-\d{2}$/.test(entry.name) &&
			fs.readdirSync(new URL(`../../data/daily/${entry.name}/`, import.meta.url)).some((file) =>
				file.endsWith(".json"),
			),
	)
	.map((entry) => entry.name)
	.sort();

for (const date of dates) {
	readSources(date);
	const result = spawnSync(process.execPath, ["scripts/news/check.mjs", date], {
		stdio: "inherit",
	});
	if (result.status !== 0) process.exit(result.status ?? 1);
}

console.log(`全部新闻数据校验通过（${dates.length} 天）`);

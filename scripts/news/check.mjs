import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { outputFiles, outputPath, readSources, ROOT, shanghaiDate } from "./lib.mjs";

const date = process.argv[2] ?? shanghaiDate();
const sources = readSources(date);

if (process.env.ALLOW_DAILY_SOURCE_REMOVAL !== "1") {
	for (const source of sources) {
		const relativeSource = path.posix.join("data", "daily", date, source.name);
		let previous;
		try {
			previous = JSON.parse(execFileSync("git", ["show", `HEAD:${relativeSource}`], {
				cwd: ROOT,
				encoding: "utf8",
				stdio: ["ignore", "pipe", "ignore"],
			}));
		} catch {
			continue;
		}
		const currentUrls = new Set(source.sources.map((item) => item.url));
		const removedUrls = (previous.sources ?? [])
			.map((item) => item.url)
			.filter((url) => typeof url === "string" && !currentUrls.has(url));
		if (removedUrls.length > 0) {
			throw new Error(`${relativeSource}: 当天累积模式禁止删除已有来源：${removedUrls.join(", ")}。仅在用户明确要求纠错时设置 ALLOW_DAILY_SOURCE_REMOVAL=1`);
		}
	}
}

const expectedFiles = sources.map(({ slug }) => path.basename(outputPath(date, slug))).sort();
const actualFiles = outputFiles(date);
if (JSON.stringify(actualFiles) !== JSON.stringify(expectedFiles)) {
	throw new Error(`${date} 的页面集合不匹配；期望 ${expectedFiles.join(", ")}，实际 ${actualFiles.join(", ")}`);
}

for (const { slug, title, updatedAt, sources: references } of sources) {
	const target = outputPath(date, slug);
	if (!fs.existsSync(target)) {
		throw new Error(`缺少 ${path.relative(ROOT, target)}，请先运行 yarn news:publish ${date}`);
	}
	const content = fs.readFileSync(target, "utf8");
	if (!content.includes(`title: ${JSON.stringify(title)}`)) {
		throw new Error(`${path.relative(ROOT, target)} 标题与源数据不一致`);
	}
	if (updatedAt && !content.includes(`updatedAt: ${JSON.stringify(updatedAt)}`)) {
		throw new Error(`${path.relative(ROOT, target)} 最后更新时间与源数据不一致`);
	}
	for (const item of references) {
		if (!content.includes(item.url)) {
			throw new Error(`${path.relative(ROOT, target)} 缺少链接：${item.url}`);
		}
	}
	if (!content.endsWith("\n")) {
		throw new Error(`${path.relative(ROOT, target)} 必须以换行结尾`);
	}
	console.log(`校验通过：${path.relative(ROOT, target)}`);
}

console.log(`校验通过：${date} 共 5 篇页面`);

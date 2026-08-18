import fs from "node:fs";
import path from "node:path";
import { outputFiles, outputPath, readSources, ROOT, shanghaiDate } from "./lib.mjs";

const date = process.argv[2] ?? shanghaiDate();
const sources = readSources(date);
const expectedFiles = sources.map((source) => path.basename(outputPath(date, source.slug))).sort();
const staleFiles = outputFiles(date).filter((file) => !expectedFiles.includes(file));
if (staleFiles.length) {
	throw new Error(`发现当天不属于本次数据的旧页面，请人工确认后处理：${staleFiles.join(", ")}`);
}
const quote = (value) => JSON.stringify(value.replaceAll("/", "_"));
const escapeHtml = (value) => value
	.replaceAll("&", "&amp;")
	.replaceAll("<", "&lt;")
	.replaceAll(">", "&gt;")
	.replaceAll('"', "&quot;")
	.replaceAll("'", "&#39;");

const addInlineImage = (content, image) => {
	if (!image) return content;
	const sourcePosition = content.indexOf(image.sourceUrl);
	if (sourcePosition === -1) {
		throw new Error(`${image.sourceUrl}: 图片来源必须在正文对应条目中出现`);
	}
	const blockEnd = content.indexOf("\n\n", sourcePosition);
	const insertionPoint = blockEnd === -1 ? content.length : blockEnd;
	const figure = [
		'<figure class="source-image">',
		`  <a href="${escapeHtml(image.sourceUrl)}"><img src="${escapeHtml(image.url)}" alt="${escapeHtml(image.alt)}" loading="lazy" /></a>`,
		`  <figcaption><a href="${escapeHtml(image.sourceUrl)}">${escapeHtml(image.caption)}</a></figcaption>`,
		"</figure>",
	].join("\n");
	return `${content.slice(0, insertionPoint)}\n\n${figure}${content.slice(insertionPoint)}`;
};

for (const source of sources) {
	const tags = [...new Set([...source.tags, ...source.sources.flatMap((item) => item.tags)])]
		.sort((a, b) => a.localeCompare(b, "zh-CN"));
	const description = source.description || `过去 24 小时精选，共 ${source.sources.length} 个来源。`;
	const frontmatter = [
		"---",
		`title: ${JSON.stringify(source.title)}`,
		`date: ${JSON.stringify(`${date}T00:00:00+08:00`)}`,
		`updatedAt: ${JSON.stringify(source.updatedAt || `${date}T11:00:00+08:00`)}`,
		`description: ${JSON.stringify(description)}`,
		...(tags.length ? ["tags:", ...tags.map((tag) => `  - ${quote(tag)}`)] : ["tags: []"]),
		"---",
	].join("\n");
	const target = outputPath(date, source.slug);
	fs.mkdirSync(path.dirname(target), { recursive: true });
	fs.writeFileSync(target, `${frontmatter}\n\n${addInlineImage(source.content.trim(), source.image)}\n`);
	console.log(`已生成 ${path.relative(ROOT, target)}（${source.sources.length} 个来源）`);
}

console.log(`发布完成：${date} 共 5 篇页面`);

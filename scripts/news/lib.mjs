import fs from "node:fs";
import path from "node:path";

export const ROOT = path.resolve(import.meta.dirname, "../..");
export const DATA_ROOT = path.join(ROOT, "data", "daily");
export const BLOG_ROOT = path.join(ROOT, "src", "content", "blog");

export function shanghaiDate() {
	return new Intl.DateTimeFormat("en-CA", {
		timeZone: "Asia/Shanghai",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(new Date());
}

export function assertDate(value) {
	if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
		throw new Error(`日期必须是 YYYY-MM-DD，收到：${value}`);
	}
	return value;
}

function requiredString(value, field, file) {
	if (typeof value !== "string" || value.trim() === "") {
		throw new Error(`${file}: ${field} 必须是非空字符串`);
	}
	return value.trim();
}

function optionalString(value, field, file) {
	if (value == null) return "";
	if (typeof value !== "string") {
		throw new Error(`${file}: ${field} 必须是字符串`);
	}
	return value.trim();
}

export function readSources(date) {
	const directory = path.join(DATA_ROOT, assertDate(date));
	if (!fs.existsSync(directory)) {
		throw new Error(`没有找到 ${path.relative(ROOT, directory)}；主题采集任务尚未产出数据`);
	}

	const files = fs
		.readdirSync(directory)
		.filter((file) => file.endsWith(".json"))
		.sort();
	if (files.length === 0) {
		throw new Error(`${path.relative(ROOT, directory)} 中没有 JSON 数据文件`);
	}
	if (files.length !== 5) {
		throw new Error(`${path.relative(ROOT, directory)} 必须恰好包含 5 个 JSON 数据文件，当前为 ${files.length} 个`);
	}

	const seenUrls = new Set();
	const seenSlugs = new Set();
	const sources = files.map((name) => {
		const file = path.join(directory, name);
		let value;
		try {
			value = JSON.parse(fs.readFileSync(file, "utf8"));
		} catch (error) {
			throw new Error(`${path.relative(ROOT, file)}: JSON 解析失败：${error.message}`);
		}

		const displayFile = path.relative(ROOT, file);
		const slug = requiredString(value.slug, "slug", displayFile);
		if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
			throw new Error(`${displayFile}: slug 只能包含小写字母、数字和单个连字符`);
		}
		if (seenSlugs.has(slug)) {
			throw new Error(`${displayFile}: slug 重复：${slug}`);
		}
		seenSlugs.add(slug);
		const title = requiredString(value.title, "title", displayFile);
		if (title.length > 100) {
			throw new Error(`${displayFile}: title 不能超过 100 个字符`);
		}
		const description = optionalString(value.description, "description", displayFile);
		const content = requiredString(value.content, "content", displayFile);
		if (content.startsWith("---")) {
			throw new Error(`${displayFile}: content 不能包含 YAML frontmatter`);
		}
		const pageTags = value.tags ?? [];
		if (!Array.isArray(pageTags) || pageTags.some((tag) => typeof tag !== "string")) {
			throw new Error(`${displayFile}: tags 必须是字符串数组`);
		}
		const order = value.order == null ? 100 : Number(value.order);
		if (!Number.isFinite(order)) {
			throw new Error(`${displayFile}: order 必须是数字`);
		}
		if (!Array.isArray(value.sources)) {
			throw new Error(`${displayFile}: sources 必须是数组`);
		}

		const sources = value.sources.map((item, index) => {
			const prefix = `sources[${index}]`;
			const title = requiredString(item.title, `${prefix}.title`, displayFile);
			const url = requiredString(item.url, `${prefix}.url`, displayFile);
			try {
				const parsed = new URL(url);
				if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error();
			} catch {
				throw new Error(`${displayFile}: ${prefix}.url 不是有效的 HTTP(S) URL`);
			}
			if (seenUrls.has(url)) {
				throw new Error(`${displayFile}: 重复链接 ${url}`);
			}
			seenUrls.add(url);
			if (!content.includes(url)) {
				throw new Error(`${displayFile}: content 中没有引用 ${prefix}.url`);
			}

			const tags = item.tags ?? [];
			if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== "string")) {
				throw new Error(`${displayFile}: ${prefix}.tags 必须是字符串数组`);
			}
			return {
				title,
				url,
				source: requiredString(item.source, `${prefix}.source`, displayFile),
				publishedAt: optionalString(item.publishedAt, `${prefix}.publishedAt`, displayFile),
				summary: requiredString(item.summary, `${prefix}.summary`, displayFile),
				tags: tags.map((tag) => tag.trim()).filter(Boolean),
			};
		});

		return {
			slug,
			title,
			description,
			tags: pageTags.map((tag) => tag.trim()).filter(Boolean),
			content,
			order,
			name,
			sources,
		};
	});

	return sources.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

export function outputPath(date, slug) {
	return path.join(BLOG_ROOT, `dailyNews_${assertDate(date)}_${slug}.md`);
}

export function outputFiles(date) {
	const prefix = `dailyNews_${assertDate(date)}_`;
	return fs
		.readdirSync(BLOG_ROOT)
		.filter((file) => file.startsWith(prefix) && file.endsWith(".md"))
		.sort();
}

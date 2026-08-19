import type { MarkdownInstance } from "astro";

export interface BlogData {
	title: string;
	description?: string;
	tags: string[];
	date: string;
	updatedAt?: string;
	image?: string;
	author?: string;
	authorTwitter?: string;
	authorImage?: string;
	featuredTitle?: string;
	featuredUrl?: string;
	featuredSummary?: string;
	featuredPublishedAt?: string;
	featuredTags: string[];
	featuredImage?: string;
	featuredImageAlt?: string;
	featuredImageCaption?: string;
}

type BlogModule = MarkdownInstance<BlogData>;

export interface BlogPost {
	id: string;
	data: BlogData;
	Content: BlogModule["Content"];
}

const blogModules = import.meta.glob<BlogModule>(
	"../content/blog/**/*.{md,mdx}",
	{ eager: true },
);

export function getBlogPosts(): BlogPost[] {
	return Object.entries(blogModules).map(([path, module]) => ({
		id: path
			.split("/")
			.pop()!
			.replace(/\.(md|mdx)$/i, "")
			.toLowerCase(),
		data: {
			...module.frontmatter,
			tags: module.frontmatter.tags ?? [],
			featuredTags: module.frontmatter.featuredTags ?? [],
		},
		Content: module.Content,
	}));
}

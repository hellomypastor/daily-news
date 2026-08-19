import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.{md,mdx}",
	}),
	schema: z.object({
		title: z
			.string()
			.max(100, "The title length must be less than or equal to 100 chars"),
		description: z.string().optional(),
		tags: z
			.array(z.string())
			.nullable()
			.transform((tags) => tags ?? []),
		date: z.string(),
		updatedAt: z.string().optional(),
		image: z.string().optional(),
		featuredTitle: z.string().optional(),
		featuredUrl: z.string().url().optional(),
		featuredSummary: z.string().optional(),
		featuredPublishedAt: z.string().optional(),
		featuredTags: z.array(z.string()).optional().default([]),
		featuredImage: z.string().url().optional(),
		featuredImageAlt: z.string().optional(),
		featuredImageCaption: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};

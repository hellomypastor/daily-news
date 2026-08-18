import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
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
		imageAlt: z.string().optional(),
		imageSource: z.string().optional(),
		imageCaption: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};

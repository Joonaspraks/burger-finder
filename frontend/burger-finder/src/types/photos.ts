import { z } from "zod";

const PhotosSchema = z.array(
	z.object({
		id: z.string().min(1),
		created_at: z.string().min(1),
		prefix: z.string().min(1),
		suffix: z.string().min(1),
		width: z.number(),
		height: z.number(),
		classifications: z.array(z.string()).optional(),
	})
);

export type Photos = z.infer<typeof PhotosSchema>;

export default PhotosSchema;

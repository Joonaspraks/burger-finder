import { z } from "zod";

export default z.array(
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

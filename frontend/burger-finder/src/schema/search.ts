import { z } from "zod";

export default z.object({
	results: z
		.array(
			z.object({
				fsq_id: z.string().min(1),
				categories: z
					.array(
						z.object({
							id: z.number(),
							name: z.string().min(1),
							icon: z
								.object({
									prefix: z.string().min(1),
									suffix: z.string().min(1),
								})
								.optional(),
						})
					)
					.min(1)
					.optional(),
				chains: z.array(z.object({})).optional(),
				distance: z.number(),
				geocodes: z
					.object({
						main: z.object({ latitude: z.number(), longitude: z.number() }),
					})
					.optional(),
				link: z.string().min(1),
				location: z
					.object({
						country: z.string().min(1),
						cross_street: z.string(),
						formatted_address: z.string().optional(),
						locality: z.string().min(1).optional(),
						postcode: z.string().min(1).optional(),
						region: z.string().min(1).optional(),
					})
					.optional(),
				name: z.string().min(1),
				related_places: z
					.object({
						parent: z
							.object({ fsq_id: z.string().min(1), name: z.string().min(1) })
							.optional(),
					})
					.optional(),
				timezone: z.string().min(1),
			})
		)
		.min(1),
	context: z.object({
		geo_bounds: z.object({
			circle: z.object({
				center: z.object({ latitude: z.number(), longitude: z.number() }),
				radius: z.number(),
			}),
		}),
	}),
});

import PhotosSchema from "../types/photos";
import SearchSchema from "../types/search";

export const getBurgerVenues = async (
	coordinates: google.maps.LatLngLiteral
) => {
	const res = await fetch(
		"https://api.foursquare.com/v3/places/search?" +
			new URLSearchParams({
				query: "burger",
				ll: `${coordinates.lat},${coordinates.lng}`,
				limit: "50",
			}),
		{
			headers: {
				Authorization: process.env.REACT_APP_FOUR_SQUARE_API_KEY!,
			},
		}
	);

	return SearchSchema.parse(await res.json());
};

export const getBurgerVenuePhotos = async (fsq_id: string) => {
	const res = await fetch(
		`https://api.foursquare.com/v3/places/${fsq_id}/photos?` +
			new URLSearchParams({
				limit: "12",
				sort: "newest",
				/* classifications: "food,indoor,menu,outdoor", */
			}),
		{
			headers: {
				Authorization: process.env.REACT_APP_FOUR_SQUARE_API_KEY!,
			},
		}
	);

	return PhotosSchema.parse(await res.json());
};

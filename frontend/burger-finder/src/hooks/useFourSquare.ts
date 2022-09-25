import Photos from "../schema/photos";
import Search from "../schema/search";

const useFourSquare = () => {
	const getBurgerVenues = async (coordinates: google.maps.LatLngLiteral) => {
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

		return Search.parse(await res.json());
	};

	const getBurgerVenuePhotos = async (fsq_id: string) => {
		const res = await fetch(
			`https://api.foursquare.com/v3/places/${fsq_id}/photos`,
			{
				headers: {
					Authorization: process.env.REACT_APP_FOUR_SQUARE_API_KEY!,
				},
			}
		);

		return Photos.parse(await res.json());
	};

	return { getBurgerVenues, getBurgerVenuePhotos };
};

export default useFourSquare;

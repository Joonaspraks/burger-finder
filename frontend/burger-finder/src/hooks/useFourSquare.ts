const useFourSquare = () => {
	const getBurgerVenues = async (coordinates: google.maps.LatLngLiteral) => {
		const res = await fetch(
			"https://api.foursquare.com/v3/places/search?" +
				new URLSearchParams({
					query: "burger",
					ll: `${coordinates.lat},${coordinates.lng}`,
				}),
			{
				headers: {
					Authorization: process.env.REACT_APP_FOUR_SQUARE_API_KEY,
				},
			}
		);
		return res.json();
	};

	return { getBurgerVenues };
};

export default useFourSquare;

import { Loader } from "@googlemaps/js-api-loader";

const GoogleMaps = () => {
	const loader = new Loader({
		apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		version: "weekly",
	});

	loader.load().then(() => {
		initMap();
	});

	function initMap(): void {
		// default location is Tartu
		let coordinates: google.maps.LatLngLiteral = {
			lat: 58.378025,
			lng: 26.728493,
		};
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					coordinates = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					createInstance(coordinates);
				},
				() => {
					createInstance(coordinates);
				}
			);
		}
	}

	const createInstance = (coordinates: google.maps.LatLngLiteral) => {
		new google.maps.Map(document.getElementById("map") as HTMLElement, {
			center: coordinates,
			zoom: 15,
		});
	};

	return <div id="map" style={{ height: "500px" }} />;
};

export default GoogleMaps;

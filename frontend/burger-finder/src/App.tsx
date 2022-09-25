import { Loader } from "@googlemaps/js-api-loader";

function App() {
	let map: google.maps.Map;

	function initMap(): void {
		map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8,
		});
	}
	const loader = new Loader({
		apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
		version: "weekly",
	});

	loader.load().then(() => {
		initMap();
	});

	return (
		<div>
			<div id="map" style={{ height: "500px" }}></div>
			Tere
		</div>
	);
}

export default App;

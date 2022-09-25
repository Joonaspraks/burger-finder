import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
import useFourSquare from "../hooks/useFourSquare";

const GoogleMaps = () => {
	const { getBurgerVenues, getBurgerVenuePhotos } = useFourSquare();

	useEffect(() => {
		const loader = new Loader({
			apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
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
			getBurgerVenues(coordinates).then(({ results }) => {
				const map = new google.maps.Map(
					document.getElementById("map") as HTMLElement,
					{
						center: coordinates,
						zoom: 15,
					}
				);
				results.forEach((result) => {
					const { latitude, longitude } = result.geocodes.main;

					const marker = new google.maps.Marker({
						position: {
							lat: latitude,
							lng: longitude,
						},
						map,
						title: result.name,
					});

					marker.addListener("click", () => {
						const photos = getBurgerVenuePhotos(result.fsq_id);
						console.log(photos);
					});
				});
			});
		};
	}, []);

	return <div id="map" style={{ height: "500px" }} />;
};

export default GoogleMaps;

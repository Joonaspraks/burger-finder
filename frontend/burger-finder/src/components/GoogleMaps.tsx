import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";
import { TARTU, TARTU_BUSSIJAAM } from "../constants/coordinates";
import isInRadius from "../functions/isInRadius";
import useFourSquare from "../hooks/useFourSquare";
import Venue from "../types/venue";

interface Props {
	setVenue: (venue: Venue) => void;
}

const GoogleMaps = ({ setVenue }: Props) => {
	const { getBurgerVenues, getBurgerVenuePhotos } = useFourSquare();

	useEffect(() => {
		const loader = new Loader({
			apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
			version: "weekly",
			libraries: ["geometry"],
		});
		loader.load().then(() => {
			initMap();
		});

		function initMap(): void {
			let coordinates = TARTU;
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

					if (
						!isInRadius({
							point1: { lat: latitude, lng: longitude },
							point2: TARTU_BUSSIJAAM,
							radius: 1000,
						})
					) {
						const marker = new google.maps.Marker({
							position: {
								lat: latitude,
								lng: longitude,
							},
							map,
							title: result.name,
						});

						marker.addListener("click", async () => {
							const photoList = await getBurgerVenuePhotos(result.fsq_id);
							setVenue({ name: result.name, photoList });
						});
					}
				});
			});
		};
	}, []);

	return <div id="map" style={{ height: "500px" }} />;
};

export default GoogleMaps;

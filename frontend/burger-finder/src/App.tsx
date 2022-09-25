import { useState } from "react";
import GoogleMaps from "./components/GoogleMaps";
import Venue from "./components/Venue";
import VenueI from "./types/venue";
function App() {
	const [venue, setVenue] = useState<VenueI>();

	return (
		<div>
			<GoogleMaps setVenue={setVenue} />
			{venue && <Venue venue={venue} />}
		</div>
	);
}

export default App;

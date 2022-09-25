import { useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import GoogleMaps from "./components/GoogleMaps";
import Header from "./components/Header";
import Venue from "./components/Venue";
import { UP_TO_IPHONE_SCREEN } from "./constants/mediaBreakpoints";
import VenueI from "./types/venue";
function App() {
	const isPhoneScreen = useMediaQuery(UP_TO_IPHONE_SCREEN);
	const [isLoading, setLoading] = useState(false);

	const [venue, setVenue] = useState<VenueI>();

	return (
		<Grid2 margin={isPhoneScreen ? "1em" : "2em"}>
			<Header isLoading={isLoading} />
			<GoogleMaps setVenue={setVenue} setLoading={setLoading} />
			{venue && <Venue venue={venue} />}
		</Grid2>
	);
}

export default App;

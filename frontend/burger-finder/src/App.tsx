import { Typography, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import GoogleMaps from "./components/GoogleMaps";
import Venue from "./components/Venue";
import { UP_TO_IPHONE_SCREEN } from "./constants/mediaBreakpoints";
import VenueI from "./types/venue";
function App() {
	const isPhoneScreen = useMediaQuery(UP_TO_IPHONE_SCREEN);
	const [venue, setVenue] = useState<VenueI>();

	return (
		<Grid2 margin={isPhoneScreen ? "1em" : "2em"}>
			<Typography variant={"h4"} gutterBottom color="white">
				Venues
			</Typography>
			<GoogleMaps setVenue={setVenue} />
			{venue && <Venue venue={venue} />}
		</Grid2>
	);
}

export default App;

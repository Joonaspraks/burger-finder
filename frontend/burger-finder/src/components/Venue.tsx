import {
	ImageList,
	ImageListItem,
	Typography,
	useMediaQuery,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { UP_TO_IPHONE_SCREEN } from "../constants/mediaBreakpoints";
import VenueI from "../types/venue";
interface Props {
	venue: VenueI;
}
const Venue = ({ venue }: Props) => {
	const isPhoneScreen = useMediaQuery(UP_TO_IPHONE_SCREEN);
	return (
		<Grid2>
			<Grid2 display={"flex"} justifyContent={"center"}>
				<Typography variant={"h3"} gutterBottom color="white" align={"center"}>
					{venue.name}
				</Typography>
			</Grid2>

			{venue.photoList.length ? (
				<Grid2 display={"flex"} spacing={"10"}>
					<ImageList cols={isPhoneScreen ? 2 : 4} gap={16}>
						{venue.photoList.map((photo) => {
							const { id, created_at, prefix, suffix } = photo;
							return (
								<ImageListItem key={id}>
									<img
										src={`${prefix}${
											isPhoneScreen ? "250x250" : "600x600"
										}${suffix}`}
										alt={created_at}
										loading="lazy"
									/>
								</ImageListItem>
							);
						})}
					</ImageList>
				</Grid2>
			) : (
				<Grid2 display={"flex"} justifyContent={"center"}>
					<Typography variant="h5" color="white">
						This venue has no relevant photos
					</Typography>
				</Grid2>
			)}
		</Grid2>
	);
};

export default Venue;

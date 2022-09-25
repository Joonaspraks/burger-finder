import { ImageList, ImageListItem, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import VenueI from "../types/venue";
interface Props {
	venue: VenueI;
}
const Venue = ({ venue }: Props) => {
	return (
		<Grid2>
			<Grid2 display={"flex"} justifyContent={"center"}>
				<Typography variant={"h3"} gutterBottom>
					{venue.name}
				</Typography>
			</Grid2>

			{venue.photoList.length ? (
				<ImageList
					/* sx={{ width: 500, height: 450 }} */ cols={4} /*  rowHeight={164} */
				>
					{venue.photoList.map((photo) => {
						const { id, created_at, prefix, suffix } = photo;
						return (
							<ImageListItem key={id}>
								<img
									src={`${prefix}600x600${suffix}`}
									alt={created_at}
									loading="lazy"
								/>
							</ImageListItem>
						);
					})}
				</ImageList>
			) : (
				<Grid2 display={"flex"} justifyContent={"center"}>
					<Typography variant="h5">
						This venue has no relevant photos
					</Typography>
				</Grid2>
			)}
		</Grid2>
	);
};

export default Venue;

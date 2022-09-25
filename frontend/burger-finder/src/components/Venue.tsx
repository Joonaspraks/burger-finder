import { ImageList, ImageListItem, Typography } from "@mui/material";
import VenueI from "../types/venue";
interface Props {
	venue: VenueI;
}
const Venue = ({ venue }: Props) => {
	return (
		<>
			<Typography>{venue.name}</Typography>

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
		</>
	);
};

export default Venue;

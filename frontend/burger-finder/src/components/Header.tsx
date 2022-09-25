import { CircularProgress, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface Props {
	isLoading: boolean;
}

const Header = ({ isLoading }: Props) => {
	return (
		<Grid2 display={"flex"} justifyContent={"space-between"} color="white">
			<Typography variant={"h4"} gutterBottom>
				Venues
			</Typography>

			{isLoading ? (
				<Grid2
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Typography variant={"body1"} gutterBottom>
						Gathering data &nbsp;
					</Typography>
					<CircularProgress color="inherit" size={15} />
				</Grid2>
			) : undefined}
		</Grid2>
	);
};

export default Header;

interface Props {
	point1: google.maps.LatLngLiteral;
	point2: google.maps.LatLngLiteral;
	radius: number;
}

const isInRadius = ({ point1, point2, radius }: Props) => {
	const distance = google.maps.geometry.spherical.computeDistanceBetween(
		point1,
		point2
	);

	return distance <= radius;
};

export default isInRadius;

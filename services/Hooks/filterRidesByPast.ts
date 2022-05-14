import { Ride } from "../../models/ride";

export default function filterRidesByPast({ rides }: { rides: Ride[] }) {
  const currentDate = Date.now();

  const ridesBeforeDate = rides.filter(
    (ride) => Date.parse(ride.date) < currentDate
  );
  if (ridesBeforeDate != undefined) return ridesBeforeDate;
  else return [];
}

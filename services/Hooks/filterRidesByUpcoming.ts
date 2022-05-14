import { Ride } from "../../models/ride";

export default function filterRidesByUpcoming({ rides }: { rides: Ride[] }) {
  const currentDate = Date.now();

  const ridesAfterDate = rides.filter(
    (ride) => Date.parse(ride.date) >= currentDate
  );
  if (ridesAfterDate != undefined) return ridesAfterDate;
  else return [];
}

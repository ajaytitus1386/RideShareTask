import { Ride } from "../../models/ride";

/**
 * Returns the rides which are scheduled before current date
 * If the filtering returns no rides, it returns an empty list
 * @param rides An object list of type `Ride`
 *
 * @returns List of `Ride` objects
 */
export default function filterRidesByPast({ rides }: { rides: Ride[] }) {
  const currentDate = Date.now();

  const ridesBeforeDate = rides.filter(
    (ride) => Date.parse(ride.date) < currentDate
  );
  if (ridesBeforeDate != undefined) return ridesBeforeDate;
  else return [];
}

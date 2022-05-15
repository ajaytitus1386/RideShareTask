import { Ride } from "../../models/ride";

/**
 * Returns the rides which are scheduled after current date
 * If the filtering returns no rides, it returns an empty list
 * @param rides An object list of type `Ride`
 *
 * @returns List of `Ride` objects
 */
export default function filterRidesByUpcoming({ rides }: { rides: Ride[] }) {
  const currentDate = Date.now();

  const ridesAfterDate = rides.filter(
    (ride) => Date.parse(ride.date) >= currentDate
  );
  if (ridesAfterDate != undefined) return ridesAfterDate;
  else return [];
}

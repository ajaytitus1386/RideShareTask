import { Ride } from "../../models/ride";

/**
 * Returns the rides which match the city specified
 * If the filtering returns no rides, it returns an empty list
 * @param rides An object list of type `Ride`
 * @param city Name of city to filter rides by
 * @returns List of `Ride` objects
 */
export default function FilterByCity({
  rides,
  city,
}: {
  rides: Ride[];
  city: string;
}) {
  if (city == "") return rides;
  const ridesInCity = rides.filter((ride) => ride.city == city);
  if (ridesInCity != undefined) return ridesInCity;
  else return [];
}

import { Ride } from "../../models/ride";

/**
 * Returns the rides which match the state specified
 * If the filtering returns no rides, it returns an empty list
 * @param rides An object list of type `Ride`
 * @param state Name of state to filter rides by
 * @returns List of `Ride` objects
 */
export default function FilterByState({
  rides,
  state,
}: {
  rides: Ride[];
  state: string;
}) {
  if (state == "") return rides;

  const ridesInState = rides.filter((ride) => ride.state == state);
  if (ridesInState != undefined) return ridesInState;
  return [];
}

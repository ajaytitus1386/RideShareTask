import { Ride } from "../../models/ride";

/**
 * Generates a `String` list of States based on specified rides
 *Alphabetically sorts the list of states
 * @param rides List of `Ride`
 *
 * @returns List of State names as Strings
 */
export default function MakeListOfStates({ rides }: { rides: Ride[] }) {
  var states: string[] = [];
  rides.forEach((ride) => {
    if (!states.includes(ride.state)) {
      states.push(ride.state);
    }
  });
  states.sort((a, b) => a.localeCompare(b));

  return states;
}

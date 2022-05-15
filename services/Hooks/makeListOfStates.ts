import { Ride } from "../../models/ride";

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

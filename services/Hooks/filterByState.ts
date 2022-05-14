import { Ride } from "../../models/ride";

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

import { Ride } from "../../models/ride";

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

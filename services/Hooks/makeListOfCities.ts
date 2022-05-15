import { Ride } from "../../models/ride";

export default function MakeListOfCities({
  rides,
  state,
}: {
  rides: Ride[];
  state: string;
}) {
  var cities: string[] = [];
  rides.forEach((ride) => {
    if (!cities.includes(ride.city)) {
      if (state != "") {
        if (ride.state == state) cities.push(ride.city);
      } else cities.push(ride.city);
    }
  });
  cities.sort((a, b) => a.localeCompare(b));

  return cities;
}

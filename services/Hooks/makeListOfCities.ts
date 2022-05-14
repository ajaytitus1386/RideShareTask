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
    //TODO: consider same State also
    if (!cities.includes(ride.city)) {
      if (state != "") {
        if (ride.state == state) cities.push(ride.city);
      } else cities.push(ride.city);
    }
  });

  return cities;
}

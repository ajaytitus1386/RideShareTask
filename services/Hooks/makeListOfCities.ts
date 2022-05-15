import { Ride } from "../../models/ride";

/**
 * Generates a `String` list of Cities based on specified rides
 * If state parameter is not an empty string, it only adds cities which are within specified state
 * Alphabetically sorts the list of cities
 * @param rides List of `Ride`
 * @param state State name as `String`
 * @returns List of City names as Strings
 */
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

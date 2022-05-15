import { Ride } from "../../models/ride";
import { User } from "../../models/user";

/**
 * Returns the least distance and the corresponding station code of the station nearest to User
 *
 * @param user `User` object
 * @param ride `Ride` object
 * @returns an object with least distance the nearest station code
 */
export default function MakeDistanceFromUser({
  user,
  ride,
}: {
  user: User;
  ride: Ride;
}) {
  var leastDistance = 99;
  var nearestStationCode = 0;

  // Add origin and destination station temporarily
  ride.station_path.push(ride.origin_station_code);
  ride.station_path.push(ride.destination_station_code);

  ride.station_path.map((station_code) => {
    var distance = Math.abs(station_code - user.station_code);
    if (distance < leastDistance) {
      leastDistance = distance;
      nearestStationCode = station_code;
    }
  });

  ride.station_path.pop();
  ride.station_path.pop();

  return { leastDistance, nearestStationCode };
}

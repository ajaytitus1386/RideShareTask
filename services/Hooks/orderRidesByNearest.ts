import { Ride } from "../../models/ride";
import { User } from "../../models/user";
import MakeDistanceFromUser from "./makeDistancefronUser";

/**
 * Returns a list of Rides based on the least distance calculated between each ride and the specified user
 *
 * @param rides List of Rides
 * @param user User to calculate distance between
 * @returns List of `Ride`
 */
export default function orderRidesByNearest({
  rides,
  user,
}: {
  rides: Ride[];
  user: User;
}) {
  const distancesArray: {
    distance: { leastDistance: number; nearestStationCode: number };
    ride: Ride;
  }[] = rides.map((ride) => {
    return {
      distance: MakeDistanceFromUser({ user: user, ride: ride }),
      ride: ride,
    };
  });

  distancesArray.sort(
    (a, b) => a.distance.leastDistance - b.distance.leastDistance
  );
  const nearestRides = distancesArray.map((distanceMap) => distanceMap.ride);
  return nearestRides;
}

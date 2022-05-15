import Image from "next/image";
import React from "react";
import { Ride } from "../../models/ride";
import OvalCard from "./OvalCard";

const RideCard = ({ ride, distance }: { ride: Ride; distance: number }) => {
  var stationPathLabel = "[";
  ride.station_path.forEach((station_code) => {
    stationPathLabel += station_code.toString() + ", ";
  });
  //Remove last comma
  stationPathLabel = stationPathLabel.slice(0, -2);
  stationPathLabel += "]";

  const date = Date.parse(ride.date);
  const formattedDate = Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    hourCycle: "h24",
    minute: "numeric",
  }).format(date);

  return (
    <div className="flex flex-col items-center justify-between w-full p-8 rounded-md lg:items-start lg:flex-row text-lightGray h-fit bg-coal">
      <div className="flex flex-col space-y-4 lg:space-x-4 lg:flex-row">
        {/* Image */}
        <div className="h-full overflow-hidden rounded-md w-72 ">
          <Image
            src={ride.map_url}
            width={400}
            height={240}
            layout={"responsive"}
            priority={true}
          />
        </div>
        {/* Ride Info */}
        <div>
          <ul className="flex flex-col px-8 space-y-2">
            <li>
              Ride Id: <strong className="text-primary">{ride.id}</strong>
            </li>
            <li>
              Origin Station:{" "}
              <strong className="text-primary">
                {ride.origin_station_code}
              </strong>
            </li>
            <li>
              Station Path:{" "}
              <strong className="text-primary">{stationPathLabel}</strong>
            </li>
            <li>
              Date: <strong className="text-primary">{formattedDate}</strong>
            </li>
            <li>
              Distance: <strong className="text-primary">{distance}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row py-2 lg:space-x-2 text-primary">
        <OvalCard label={ride.city}></OvalCard>
        <OvalCard label={ride.state}></OvalCard>
      </div>
    </div>
  );
};

export default RideCard;

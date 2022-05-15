import React, { useEffect, useRef, useState } from "react";
import { GetStaticProps } from "next";
import { Ride } from "../../models/ride";
import getRides from "../../services/rides/getRides";
import getUser from "../../services/users/getUser";
import { User } from "../../models/user";
import MakeDistanceFromUser from "../../services/Hooks/makeDistancefronUser";
import orderRidesByNearest from "../../services/Hooks/orderRidesByNearest";
import filterRidesByUpcoming from "../../services/Hooks/filterRidesByUpcoming";
import filterRidesByPast from "../../services/Hooks/filterRidesByPast";
import Link from "next/link";
import RideCard from "../../components/Rides/RideCard";
import FiltersDropdown from "../../components/Rides/FiltersDropdown";
import SubDropdown from "../../components/Rides/SubDropdown";
import MakeListOfStates from "../../services/Hooks/makeListOfStates";
import FilterByCity from "../../services/Hooks/filterByCity";
import MakeListOfCities from "../../services/Hooks/makeListOfCities";
import FilterByState from "../../services/Hooks/filterByState";
import Layout from "../../components/Layout";

function Nearest({ data, user }: { data: Ride[]; user: User }) {
  // Rides States
  const [nearestRides, setNearestRides] = useState<Ride[]>([]);
  const [upcomingRides, setUpcomingRides] = useState<Ride[]>([]);
  const [pastRides, setPastRides] = useState<Ride[]>([]);

  // Filters States
  const [showFilters, setShowFilters] = useState(false);
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  //Initialization
  useEffect(() => {
    setNearestRides(orderRidesByNearest({ rides: data, user: user }));
  }, [data]);

  // Tab counter updates
  useEffect(() => {
    setUpcomingRides(filterRidesByUpcoming({ rides: nearestRides }));
    setPastRides(filterRidesByPast({ rides: nearestRides }));
  }, [nearestRides]);

  // City Filter Updates
  useEffect(() => {
    if (cityFilter != "") {
      const cityFilteredRides = FilterByCity({ rides: data, city: cityFilter });
      setNearestRides(
        orderRidesByNearest({ rides: cityFilteredRides, user: user })
      );
    }
    // In case State filter is already used and gets changed
    else if (stateFilter != "") {
      return;
    } else setNearestRides(orderRidesByNearest({ rides: data, user: user }));
  }, [cityFilter]);

  // State Filter Updates
  useEffect(() => {
    if (stateFilter != "") {
      // Remove any city filter if State is changed
      if (cityFilter != "") setCityFilter("");
      const stateFilteredRides = FilterByState({
        rides: data,
        state: stateFilter,
      });

      setNearestRides(
        orderRidesByNearest({ rides: stateFilteredRides, user: user })
      );
    } else setNearestRides(orderRidesByNearest({ rides: data, user: user }));
  }, [stateFilter]);

  function toggleFilters() {
    setShowFilters(!showFilters);
  }

  function clearFilters() {
    setCityFilter("");
    setStateFilter("");
  }

  //TODO: Cut or Keep?
  function useOutsideAlerter(ref: any, dropdownRef: any) {
    useEffect(() => {
      /**
       * Handler if clicked on outside of element
       */
      function handleClickOutside(event: Event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          !dropdownRef.current.contains(event.target)
        ) {
          setShowFilters(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const moreWrapperRef = useRef(null);
  const dropdownRef = useRef(null);
  useOutsideAlerter(moreWrapperRef, dropdownRef);

  return (
    <Layout user={user}>
      <div className="z-0 flex flex-col items-start min-h-screen px-16 py-16 bg-midGray">
        <div className="flex flex-row items-start justify-between w-full">
          {/* Page Select */}
          <div className="pb-16 text-xl ">
            <ul className="flex flex-row items-center justify-between space-x-8">
              <li className="font-semibold border-b-2 border-solid border-primary text-primary">
                <Link href="/nearest">{"Nearest rides"}</Link>
              </li>
              {upcomingRides && (
                <li className="text-lightGray hover:text-primary">
                  <Link href="/upcoming">
                    {"Upcoming (" + upcomingRides.length.toString() + ")"}
                  </Link>
                </li>
              )}
              {pastRides && (
                <li className="text-lightGray hover:text-primary">
                  <Link href="/past">
                    {"Past (" + pastRides.length.toString() + ")"}
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* Filter Options */}
          <div className="relative ">
            <div
              ref={moreWrapperRef}
              onClick={toggleFilters}
              onMouseEnter={toggleFilters}
              className="flex flex-row w-auto p-1 space-x-2 text-xl rounded-md text-primary hover:bg-coal "
            >
              <i className="material-icons">{"filter_list"}</i>
              <h2>Filters</h2>
            </div>
            <div ref={dropdownRef}>
              {showFilters && (
                <FiltersDropdown clearFilters={clearFilters}>
                  <SubDropdown
                    options={MakeListOfStates({ rides: data })}
                    label={"State"}
                    filter={stateFilter}
                    setFilter={setStateFilter}
                  ></SubDropdown>
                  <SubDropdown
                    options={MakeListOfCities({
                      rides: data,
                      state: stateFilter,
                    })}
                    label={"City"}
                    filter={cityFilter}
                    setFilter={setCityFilter}
                  ></SubDropdown>
                </FiltersDropdown>
              )}
            </div>
          </div>
        </div>
        {/* Render Ride Cards */}
        <div className="w-full space-y-4">
          {nearestRides &&
            nearestRides.map((ride) => {
              return (
                <RideCard
                  distance={
                    MakeDistanceFromUser({ user: user, ride: ride })
                      .leastDistance
                  }
                  ride={ride}
                ></RideCard>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export default Nearest;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getRides();
  const user = await getUser();
  return {
    props: {
      data: data,
      user: user,
    }, // will be passed to the page component as props
  };
};

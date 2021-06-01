import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { LocationContext } from "./LocationProvider";
import "./Location.css";

export const LocationList = () => {
  // This state changes when `getlocations()` is invoked below
  const { locations, getLocations } =
    useContext(LocationContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("locationList: useEffect - getlocations");
    getLocations();
  }, []);
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <section className="locations">
      {locations.map((location) => {
        return (
          <div
            className="location"
            id={`location--${location.id}`}
          >
            <div className="location__name">
              Name: {location.name}
            </div>
            <div className="location__address">
              Address: {location.address}
            </div>
          </div>
        );
      })}
    </section>
  );
};

import React, { useContext, useEffect } from "react";
// To start, you need to import the context object you created in the provider component so that the useContext() hook can access the objects it exposes.
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useHistory } from "react-router";

export const LocationList = () => {
  // This state changes when `getLocations()` is invoked below
  const { locations, getLocations } =
    useContext(LocationContext);

  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("locationList: useEffect - getLocations");
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //   The empty array bracket is the dependency array. It only runs on first render.

  return (
    <>
      <h2>Locations</h2>
      <button onClick={() => history.push("/locations/create")}>
        Open New Location
      </button>
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
    </>
  );
};

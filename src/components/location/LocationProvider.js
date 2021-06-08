import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const LocationContext = createContext();

// This component establishes what data can be used.
export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return fetch(
      "https://gqg-kennel-api.herokuapp.com/locations?_embed=employees&_embed=animals"
    )
      .then((res) => res.json())
      .then((data) => setLocations(data));
  };

  const addLocation = (locationObject) => {
    return fetch(
      "https://gqg-kennel-api.herokuapp.com/locations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(locationObject),
      }
    ).then(getLocations);
  };

  const updateLocation = (location) => {
    return fetch(
      `https://gqg-kennel-api.herokuapp.com/locations/${location.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(location),
      }
    ).then(getLocations);
  };

  // Where is getlocationById defined?
  const getLocationById = (locationId) => {
    return fetch(
      `https://gqg-kennel-api.herokuapp.com/locations/${locationId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  };

  /*
        You return a context provider which has the
        `locations` state, `getLocations` function,
        and the `addLocation` function as keys. This
        allows any child elements to access them.
    */
  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
        updateLocation,
        getLocationById,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

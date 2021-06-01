import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const LocationContext = createContext();

// This component establishes what data can be used.
export const LocationProvider = (props) => {
  const [locations, setlocations] = useState([]);

  const getLocations = () => {
    return fetch(
      "http://localhost:8088/locations?_expand=location&_expand=customer"
    )
      .then((res) => res.json())
      .then((data) => setlocations(data));
  };

  const addLocation = (locationObject) => {
    return fetch("http://localhost:8088/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObject),
    }).then(getLocations);
  };

  /*
        You return a context provider which has the
        `locations` state, `getlocations` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
  return (
    <LocationContext.Provider
      value={{
        locations,
        getLocations,
        addLocation,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};

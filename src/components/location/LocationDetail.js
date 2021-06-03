import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useParams } from "react-router-dom";

export const LocationDetail = () => {
  const { locations } = useContext(LocationContext);
  const [location, setLocation] = useState({
    employees: [],
    animals: [],
  });

  /*
        Given the example URL above, this will store the value
        of 5 in the locationId variable
    */
  const { locationId } = useParams();

  useEffect(() => {
    const thisLocation = locations.find(
      (a) => a.id === parseInt(locationId)
    ) || { employees: [], animals: [] };

    setLocation(thisLocation);
  }, [locationId]);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__employees">
        Staffed by:
        {location.employees
          .map((e) => {
            return e.name;
          })
          .join(", ")}
      </div>
      <div className="location__animals">
        Who wrangle:
        {location.animals
          .map((a) => {
            return a.name;
          })
          .join(", ")}
      </div>
    </section>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationProvider";
import "./Location.css";
import { useHistory, useParams } from "react-router-dom";

export const LocationDetail = () => {
  const { locations } = useContext(LocationContext);
  const [location, setLocation] = useState({
    employees: [],
    animals: [],
  });

  const history = useHistory();

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
      <div className="location__address">{location.address}</div>
      <div className="location__employees">
        Staffed by:{" "}
        {location.employees
          .map((e) => {
            return e.name;
          })
          .join(", ")}
      </div>
      <div className="location__animals">
        Pets:{" "}
        {location.animals
          .map((a) => {
            return a.name;
          })
          .join(", ")}{" "}
      </div>
      <button
        onClick={() => {
          history.push(`/locations/edit/${location.id}`);
        }}
      >
        Edit Location Details
      </button>
    </section>
  );
};

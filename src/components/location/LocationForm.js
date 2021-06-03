import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LocationContext } from "../location/LocationProvider";
import { EmployeeContext } from "../employee/EmployeeProvider";
import "./Location.css";

export const LocationForm = () => {
  const { addLocation } = useContext(LocationContext);
  const { employees, getEmployees } =
    useContext(EmployeeContext);

  const [location, setLocation] = useState({
    name: "",
    address: "",
  });

  const history = useHistory();

  useEffect(() => {
    getEmployees();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
    newLocation[event.target.id] = event.target.value;
    setLocation(newLocation);
  };

  const handleClickSaveLocation = (event) => {
    event.preventDefault();

    if (
      location.name.length === 0 ||
      location.address.length === 0
    ) {
      window.alert("Please complete all forms to submit.");
    } else {
      const newLocation = {
        name: location.name,
        address: location.address,
      };
      addLocation(newLocation).then(() =>
        history.push("/locations")
      );
    }
  };

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Location name"
            value={location.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Animal breed:</label>
          <input
            type="text"
            id="address"
            required
            autoFocus
            className="form-control"
            placeholder="Address"
            value={location.address}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        onClick={handleClickSaveLocation}
      >
        Build Location
      </button>
    </form>
  );
};

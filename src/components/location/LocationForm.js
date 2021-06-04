import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { LocationContext } from "../location/LocationProvider";
import { EmployeeContext } from "../employee/EmployeeProvider";
import "./Location.css";

export const LocationForm = () => {
  const { addLocation, updateLocation, getLocationById } =
    useContext(LocationContext);
  const { employees, getEmployees } =
    useContext(EmployeeContext);

  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { locationId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newLocation = { ...location };
    newLocation[event.target.name] = event.target.value;
    setLocation(newLocation);
  };

  const handleSaveLocation = (event) => {
    event.preventDefault();

    if (
      location.name.length === 0 ||
      location.address.length === 0
    ) {
      window.alert("Please complete all forms to submit.");
    } else {
      setIsLoading(true);
      if (locationId) {
        //PUT - update
        updateLocation({
          id: location.id,
          name: location.name,
          address: location.address,
        }).then(() =>
          history.push(`/locations/detail/${location.id}`)
        );
      } else {
        //POST - add
        addLocation({
          // id: location.id,
          name: location.name,
          address: location.address,
        }).then(() => history.push("/locations"));
      }
      /*       
      Old code in the above ELSE statement:
      const newLocation = {
        name: location.name,
        address: location.address,
      };
      addLocation(newLocation).then(() =>
        history.push("/locations")
      ); */
    }
  };

  useEffect(() => {
    getEmployees().then(() => {
      if (locationId) {
        getLocationById(locationId).then((location) => {
          setLocation(location);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className="locationForm">
      <h2 className="locationForm__title">New Location</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Location name:</label>
          <input
            type="text"
            id="locationName"
            name="name"
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
          <label htmlFor="name">Location Address:</label>
          <input
            type="text"
            id="locationAddress"
            name="address"
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
        disabled={isLoading}
        onClick={(event) => {
          event.preventDefault(); // Prevent browser from submitting the form and refreshing the page
          handleSaveLocation();
        }}
      >
        {locationId ? <>Save Location</> : <>Add Location</>}
      </button>
    </form>
  );
};

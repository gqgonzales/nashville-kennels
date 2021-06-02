import React from "react";
import { Route } from "react-router-dom";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerList } from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationForm } from "./location/LocationForm";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <LocationProvider>
        <EmployeeProvider>
          <Route exact path="/">
            <LocationList />
          </Route>
        </EmployeeProvider>
      </LocationProvider>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route path="/animals">
              <AnimalList />
            </Route>

            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route path="/employees">
              <EmployeeList />
            </Route>
            <Route exact path="/employees/create">
              {/* Need to import EmployeeForm at top */}
              <EmployeeForm />
            </Route>
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      <LocationProvider>
        <EmployeeProvider>
          <Route path="/locations">
            <LocationList />
          </Route>

          <Route exact path="/locations/create">
            <LocationForm />
          </Route>
        </EmployeeProvider>
      </LocationProvider>

      <CustomerProvider>
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
    </>
  );
};

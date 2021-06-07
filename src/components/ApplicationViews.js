import React from "react";
import { Route } from "react-router-dom";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalSearch } from "./animal/AnimalSearch";
import { CustomerList } from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationDetail } from "./location/LocationDetail";
import { LocationForm } from "./location/LocationForm";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";

export const ApplicationViews = () => {
  return (
    <>
      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <EmployeeProvider>
              {/* HOME */}
              <Route exact path="/">
                <LocationList />
              </Route>

              {/* ANIMALS */}
              <Route exact path="/animals">
                <AnimalSearch />
                <AnimalList />
              </Route>

              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>

              <Route path="/animals/edit/:animalId(\d+)">
                <AnimalForm />
              </Route>

              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>

              {/* LOCATIONS */}

              <Route
                exact
                path="/locations/detail/:locationId(\d+)"
              >
                <LocationDetail />
              </Route>

              <Route path="/locations">
                <LocationList />
              </Route>

              <Route path="/locations/edit/:locationId(\d+)">
                <LocationForm />
              </Route>

              <Route exact path="/locations/create">
                <LocationForm />
              </Route>

              {/* EMPLOYEES */}

              <Route
                exact
                path="/employees/detail/:employeeId(\d+)"
              >
                <EmployeeDetail />
              </Route>

              <Route path="/employees">
                <EmployeeList />
              </Route>

              <Route path="/employees/edit/:employeeId(\d+)">
                <EmployeeForm />
              </Route>

              <Route exact path="/employees/create">
                <EmployeeForm />
              </Route>

              {/* CUSTOMERS */}

              <Route path="/customers">
                <CustomerList />
              </Route>

              {/* AND SCENE */}
            </EmployeeProvider>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>
    </>
  );
};

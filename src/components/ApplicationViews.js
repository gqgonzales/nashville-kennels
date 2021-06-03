import React from "react";
import { Route } from "react-router-dom";
import { AnimalDetail } from "./animal/AnimalDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerList } from "./customer/CustomerList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
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
              <Route exact path="/animals/detail/:animalId(\d+)">
                <AnimalDetail />
              </Route>

              <Route path="/animals">
                <AnimalList />
              </Route>

              <Route exact path="/animals/create">
                <AnimalForm />
              </Route>

              {/* LOCATIONS */}

              <Route path="/locations">
                <LocationList />
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

      {/* <LocationProvider>
        <EmployeeProvider>
          <Route exact path="/">
            <LocationList />
          </Route>
        </EmployeeProvider>
      </LocationProvider>

      <AnimalProvider>
        <CustomerProvider>
          <LocationProvider>
            <Route path="/animals">
              <AnimalList />
            </Route>

            <Route exact path="/animals/detail/:animalId(\d+)">
              <AnimalDetail />
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
      </CustomerProvider> */}
    </>
  );
};

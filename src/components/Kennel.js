// import { Animal } from "./animal/Animal.js";
// import { Employee } from "./employee/Employee";
// import { Location } from "./location/Location";
// import { Customer } from "./customer/Customer";
/* import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider"; */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css";

export const Kennel = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("kennel_customer")) {
          return (
            <>
              <h1>Nashville Kennels</h1>
              <h2>Loving care when you're not there.</h2>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);

/* export const Kennel = () => (
  <>
    <h1>Nashville Kennels</h1>
    <h2>Loving care when you're not there.</h2>
    <NavBar />
    <ApplicationViews />
    <h2>Animals</h2>
    <article className="animals">
      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>
    </article>
    <h2>Employees</h2>
    <article className="employees">
      <EmployeeProvider>
        <EmployeeList />
      </EmployeeProvider>
    </article>
    <h2>Locations</h2>
    <article className="locations">
      <LocationProvider>
        <LocationList />
      </LocationProvider>
    </article>
    <h2>Customers</h2>
    <article className="customers">
      <CustomerProvider>
        <CustomerList />
      </CustomerProvider>
    </article>
  </>
);
 */

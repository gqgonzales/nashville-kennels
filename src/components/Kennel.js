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
import "./Kennel.css";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";

export const Kennel = () => (
  <>
    <h1>Nashville Kennels</h1>
    <h2>Loving care when you're not there.</h2>
    <NavBar />
    <ApplicationViews />
    {/*  It is crucial that you wrap components that need data with the provider component that exposes that data in JSX.
    You can wrap a component in as many providers as needed.
    */}

    {/*
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
    </article> */}
  </>
);

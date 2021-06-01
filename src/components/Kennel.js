import React from "react";
// import { Animal } from "./animal/Animal.js";
// import { Employee } from "./employee/Employee";
import { Location } from "./location/Location";
// import { Customer } from "./customer/Customer";
import "./Kennel.css";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationProvider";

export const Kennel = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>
    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>
    <h2>Animals</h2>
    {/*  It is crucial that you wrap components that need data with the provider component that exposes that data in JSX.
    You can wrap a component in as many providers as needed.
    */}
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

import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css";

export const CustomerList = () => {
  const { customers, getCustomers } =
    useContext(CustomerContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    getCustomers();
  }, []);

  //   The empty array bracket is the dependency array. It only runs on first render.
  return (
    <section className="customers">
      {customers.map((customer) => {
        return (
          <div
            className="customer"
            id={`customer--${customer.id}`}
          >
            <div className="customer__name">
              Name: {customer.name}
            </div>
            <div className="customer__address">
              Address: {customer.address}
            </div>
          </div>
        );
      })}
    </section>
  );
};

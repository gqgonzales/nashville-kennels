import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const CustomerContext = createContext();

// This component establishes what data can be used.
export const CustomerProvider = (props) => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    return fetch(
      "https://gqg-kennel-api.herokuapp.com/customers?_embed=animals"
    )
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  };

  const addCustomer = (cusotmerObject) => {
    return fetch(
      "https://gqg-kennel-api.herokuapp.com/customers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cusotmerObject),
      }
    ).then(getCustomers);
  };

  /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
  return (
    <CustomerContext.Provider
      value={{
        customers,
        getCustomers,
        addCustomer,
      }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};

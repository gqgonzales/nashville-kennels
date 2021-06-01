import React, { useState, createContext } from "react";
export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployee] = useState([]);

  const getEmployees = () => {
    return fetch(
      "http://localhost:8088/employees?_expand=location"
    )
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  };

  const addEmployee = (employeeObject) => {
    return fetch(
      "http://localhost:8088/employees?_expand=location",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeObject),
      }
    ).then(getEmployees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

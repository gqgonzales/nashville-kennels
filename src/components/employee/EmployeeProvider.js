import React, { useState, createContext } from "react";
export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
  const [employees, setEmployee] = useState([]);

  const getEmployees = () => {
    return fetch(
      "https://gqg-kennel-api.herokuapp.com/employees?_expand=location"
    )
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  };

  const addEmployee = (employeeObject) => {
    return fetch(
      "https://gqg-kennel-api.herokuapp.com/employees?_expand=location",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeeObject),
      }
    ).then(getEmployees);
  };

  const releaseEmployee = (employeeId) => {
    return fetch(
      `https://gqg-kennel-api.herokuapp.com/employees/${employeeId}`,
      {
        method: "DELETE",
      }
    ).then(getEmployees);
  };

  const updateEmployee = (employee) => {
    return fetch(
      `https://gqg-kennel-api.herokuapp.com/employees/${employee.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      }
    ).then(getEmployees);
  };

  // Where is getAnimalById defined?
  const getEmployeeById = (employeeId) => {
    return fetch(
      `https://gqg-kennel-api.herokuapp.com/employees/${employeeId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
        releaseEmployee,
        updateEmployee,
        getEmployeeById,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

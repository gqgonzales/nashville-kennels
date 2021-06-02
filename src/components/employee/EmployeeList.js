import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  const { employees, getEmployees } =
    useContext(EmployeeContext);

  const history = useHistory();

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <h2>Employees</h2>
      <button onClick={() => history.push("/employees/create")}>
        Hire Employee
      </button>
      <section className="employees">
        {employees.map((employee) => {
          return (
            <div
              className="employee"
              id={`employee--${employee.id}`}
            >
              <div className="employee__name">
                Name: {employee.name}
              </div>
              <div className="employee__location">
                Location: {employee.location.name}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

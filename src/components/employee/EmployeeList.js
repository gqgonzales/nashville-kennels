import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory, Link } from "react-router-dom";

export const EmployeeList = ({ taco }) => {
  const { employees, getEmployees } =
    useContext(EmployeeContext);
  const history = useHistory();

  // Initialization effect hook -> Go get employee data
  useEffect(() => {
    getEmployees();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2>Employees</h2>

      <button onClick={() => history.push("/employees/create")}>
        Hire a new employee!
      </button>
      <button onClick={() => history.push("/employees")}>
        Cancel!
      </button>

      <div className="employees">
        {employees.map((employee) => (
          <Link
            to={`/employees/detail/${employee.id}`}
            key={employee.id}
            className="employee"
          >
            {employee.name}
          </Link>
        ))}
      </div>
    </>
  );
};

/* export const EmployeeList = () => {
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
              key={employee.id}
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
}; */

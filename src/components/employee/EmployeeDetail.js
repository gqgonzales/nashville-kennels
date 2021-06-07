import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css";
import { useHistory, useParams } from "react-router-dom";

export const EmployeeDetail = () => {
  const { employees, releaseEmployee } =
    useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    location: {},
  });

  const history = useHistory();

  const handleRelease = () => {
    releaseEmployee(employee.id).then(() => {
      history.push("/employees");
    });
  };
  /*
        Given the example URL above, this will store the value
        of 5 in the EmployeeId variable
    */
  const { employeeId } = useParams();

  useEffect(() => {
    const thisEmployee = employees.find(
      (a) => a.id === parseInt(employeeId)
    ) || { location: {} };

    setEmployee(thisEmployee);
  }, [employeeId]);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">
        Corraling pups at the {employee.location.name} location!
      </div>
      <button className="delete__button" onClick={handleRelease}>
        Release Employee
      </button>
      <button
        onClick={() => {
          history.push(`/employees/edit/${employee.id}`);
        }}
      >
        Edit Employee Info
      </button>
      <button onClick={() => history.push("/employees")}>
        Cancel!
      </button>
    </section>
  );
};

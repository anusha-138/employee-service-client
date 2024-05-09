import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../common/Search";

const EmployeeView = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:9192/employee");
    setEmployees(result.data);
  };
  return (
    <section>
      <Search search={search} setSearch={setSearch} />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Serial Number</th>
            <th>EmployeeId</th>
            <th>First Name</th>
            <th>Depatment</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Date of joining</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {employees
            .filter((emp) => emp.employeeId.toLowerCase().includes(search)||emp.firstName.toLowerCase().includes(search))
            .map((employee, index) => (
              <tr key={employee.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.employeeId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.department}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>{employee.dateOfJoining}</td>
                <td>{employee.location}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default EmployeeView;

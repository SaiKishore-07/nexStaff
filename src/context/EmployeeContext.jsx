/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import employeesData from "../data/employees";

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(() => {
    const storedEmployees = localStorage.getItem("employee");
    return storedEmployees ? JSON.parse(storedEmployees) : employeesData;
  });

  useEffect(() => {
    localStorage.setItem("employee", JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee,
      ),
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id),
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, updateEmployee, deleteEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;

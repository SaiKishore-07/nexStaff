/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import SearchBar from "../components/SearchBar";
import DepartmentFilter from "../components/DepartmentFilter";
import EmployeeCard from "../components/EmployeeCard";
import { useSearchParams } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";
import EmptyState from "../components/EmptyState";

const Employees = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [department, setDepartment] = useState("All");
  const [searchParams] = useSearchParams();
  const navbarSearch = searchParams.get("search") || "";
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const departments = [
    "All",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  useEffect(() => {
    setSearchTerm(navbarSearch);
  }, [navbarSearch]);

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.empId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDepartment =
      department === "All" || employee.department === department;
    return matchesSearch && matchesDepartment;
  });

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setIsModelOpen(true);
  };

  const handleCloseModal = () => {
    setIsModelOpen(false);
    setSelectedEmployee(null);
  };

  const handleDelete = () => {
    deleteEmployee(selectedEmployee.id);
    handleCloseModal();
  };

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Employees</h1>
        <p className="text-slate-500 mt-1">Manage all employee records.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <div className="lg:w-60">
            <DepartmentFilter
              department={department}
              setDepartment={setDepartment}
              departments={departments}
            />
          </div>
        </div>
      </div>

      {filteredEmployees.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      <DeleteModal
        isOpen={isModalOpen}
        employee={selectedEmployee}
        onClose={handleCloseModal}
        onDelete={handleDelete}
      />
    </section>
  );
};

export default Employees;

/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

const EditEmployee = () => {
  const { employees, updateEmployee } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({
    empId: "",
    name: "",
    role: "",
    department: "",
    location: "",
    salary: "",
    status: "Active",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employees.find((emp) => emp.id === Number(id));

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    }
  }, [employee]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateEmployee(formData);
    navigate("/employees");
  };

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Edit Employee</h1>
        <p className="text-slate-500 mt-1">Update employee details.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <EmployeeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Save Changes"
        />
      </div>
    </section>
  );
};

export default EditEmployee;

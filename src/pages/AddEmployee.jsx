import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    empId: "",
    name: "",
    role: "",
    department: "",
    location: "",
    salary: "",
    status: "Active",
  });

  const { addEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      !formData.empId ||
      !formData.name ||
      !formData.role ||
      !formData.department ||
      !formData.location ||
      !formData.salary
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      createdAt: Date.now(),
      ...formData,
    };

    addEmployee(newEmployee);

    setFormData({
      empId: "",
      name: "",
      role: "",
      department: "",
      location: "",
      salary: "",
      status: "Active",
    });

    navigate("/employees");
  };
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Add Employee</h1>
        <p className="text-slate-500 mt-1">
          Fill in the employee details below.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <EmployeeForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Save Employee"
        />
      </div>
    </section>
  );
};

export default AddEmployee;

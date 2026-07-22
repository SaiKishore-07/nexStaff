import {
  FaUsers,
  FaUserCheck,
  FaBuilding,
  FaMoneyBillWave,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";

import DashboardCard from "../components/DashboardCard";
import EmployeeCard from "../components/EmployeeCard";
import { EmployeeContext } from "../context/EmployeeContext";

const Dashboard = () => {
  const { employees } = useContext(EmployeeContext);

  const totalPayroll = employees.reduce(
    (total, employee) => total + Number(employee.salary),
    0,
  );

  const formattedPayroll =
    totalPayroll >= 100000
      ? `₹${(totalPayroll / 100000).toFixed(1)}L`
      : `₹${totalPayroll.toLocaleString()}`;

  const dashboardStats = [
    {
      title: "Employees",
      value: employees.length,
      icon: <FaUsers />,
      bgColor: "bg-blue-600",
    },
    {
      title: "Active",
      value: employees.filter((emp) => emp.status === "Active").length,
      icon: <FaUserCheck />,
      bgColor: "bg-green-600",
    },
    {
      title: "Departments",
      value: [...new Set(employees.map((emp) => emp.department))].length,
      icon: <FaBuilding />,
      bgColor: "bg-purple-600",
    },
    {
      title: "Payroll",
      value: formattedPayroll,
      icon: <FaMoneyBillWave />,
      bgColor: "bg-orange-600",
    },
  ];

  const recentEmployees = [...employees]
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

          <p className="text-slate-500 mt-1">
            Welcome back! Here's an overview of your employees.
          </p>
        </div>

        <Link
          to="/add-employee"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition w-full md:w-auto"
        >
          <FaPlus />
          Add Employee
        </Link>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {dashboardStats.map((item) => (
          <DashboardCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </div>

      {/* Recent Employees */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">
              Recent Employees
            </h2>

            <p className="text-slate-500">Recently added employee records.</p>
          </div>

          <Link
            to="/employees"
            className="text-blue-600 font-medium hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              showActions={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

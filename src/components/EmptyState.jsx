import { Link } from "react-router-dom";
import { FaUsersSlash, FaPlus } from "react-icons/fa";

const EmptyState = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
      <FaUsersSlash className="text-6xl text-slate-300 mx-auto mb-4" />

      <h2 className="text-2xl font-bold text-slate-800">No Employees Found</h2>

      <p className="text-slate-500 mt-2">
        Try changing your search or add a new employee.
      </p>

      <Link
        to="/add-employee"
        className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        <FaPlus />
        Add Employee
      </Link>
    </div>
  );
};

export default EmptyState;

import {
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import StatusBadge from "./StatusBadge";
import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ employee, showActions = true, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition">
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            {employee.name.charAt(0)}
          </div>

          <div>
            <h2 className="font-bold text-lg">{employee.name}</h2>
            <p className="text-slate-500">{employee.role}</p>
            <p className="text-sm text-slate-400">{employee.empId}</p>
          </div>
        </div>

        <StatusBadge status={employee.status} />
      </div>

      <div className="mt-6 space-y-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <FaBuilding />
          {employee.department}
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />

          {employee.location}
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave />₹{employee.salary.toLocaleString()}
        </div>
      </div>

      {showActions && (
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => navigate(`/edit-employee/${employee.id}`)}
            className="flex-1 bg-gray-500 text-white py-2 rounded-xl hover:bg-gray-600 transition flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaEdit />
            Edit
          </button>

          <button
            onClick={() => onDelete(employee)}
            className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition flex justify-center items-center gap-2 cursor-pointer"
          >
            <FaTrash />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;

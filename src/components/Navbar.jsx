import { useState } from "react";
import { FaBell, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setIsSidebarOpen }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between h-20 px-6">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden mr-0.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition"
          >
            <FaBars size={28} />
          </button>
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-lg">
            N
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">NexStaff.</h1>
            <p className="text-sm text-slate-500 pb-1">Employee Management</p>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-3 w-95">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/employees?search=${search}`);
              }
            }}
            placeholder="Search by Name or Employee ID..."
            className="bg-transparent  outline-none  ml-3 w-full text-sm"
          />
        </div>

        <div className="flex items-center gap-7">
          <button className="relative p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition cursor-pointer">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 cursor-pointer">
            <FaUserCircle
              size={40}
              className="text-blue-600 transition hover:text-blue-700"
            />
            <div className="hidden md:block ml-2 mr-6 hover:-translate-y-0.5  transition duration-300">
              <h2 className="text-lg font-semibold mb-0.5">Ajay S</h2>
              <p className="text-xs text-slate-500">HR Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

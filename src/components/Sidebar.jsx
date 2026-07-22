import {
  FaHome,
  FaUsers,
  FaUserPlus,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaHome size={20} />,
    },
    {
      name: "Employees",
      path: "/employees",
      icon: <FaUsers size={20} />,
    },
    {
      name: "Add Employee",
      path: "/add-employee",
      icon: <FaUserPlus size={20} />,
    },
  ];
  return (
    <>
      {/* mobile overlay  */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* sidebar  */}
      <aside
        className={` fixed top-0 pt-25 md:pt-5 left-0 h-screen md:h-[89vh]  md:w-72 bg-white shadow-2xl border-r border-slate-200
        z-40 transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:flex lg:flex-col`}
      >
        {/* Menu  */}
        <nav className="flex-1 px-4 space-y-4">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4  px-5 py-3 rounded-xl font-medium transition-all duration-200
                    ${isActive ? "bg-blue-600 text-white shadow-md" : "text-slate-700 hover:bg-slate-100"}`
              }
            >
              {link.icon}
              <span className="hidden md:block">{link.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-2">
          <button className="w-full flex items-center gap-4 px-5 py-3 rounded-xl text-slate-700 hover:bg-slate-100 transition">
            <FaCog size={20} />
            <span className="hidden md:block">Settings</span>
          </button>
          <button className="w-full flex items-center gap-4 px-5 py-3 rounded-xl text-red-500 hover:bg-red-50 transition">
            <FaSignOutAlt size={20} />
            <span className="hidden md:block">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

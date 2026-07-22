const DepartmentFilter = ({ department, setDepartment }) => {
  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      className="bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
    >
      <option value="All">All Departments</option>
      <option value="HR">HR</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="UI/Ux">UI/Ux</option>
    </select>
  );
};

export default DepartmentFilter;

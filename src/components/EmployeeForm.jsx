const EmployeeForm = ({ formData, handleChange, handleSubmit, buttonText }) => {
  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block mb-3 font-medium">Employee ID</label>

        <input
          type="text"
          name="empId"
          value={formData.empId}
          onChange={handleChange}
          placeholder="EMP006"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-3 font-medium">Employee Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter employee name"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-3 font-medium">Role</label>

        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Frontend Developer"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-3 font-medium">Department</label>

        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Frontend"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-3 font-medium">Location</label>

        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Chennai"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-3 font-medium">Salary</label>

        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          placeholder="45000"
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-3 font-medium">Status</label>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Active</option>
          <option>On Leave</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="md:col-span-2 flex justify-end gap-4 mt-4">
        <button
          type="reset"
          className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 font-semibold cursor-pointer"
        >
          Reset
        </button>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-semibold cursor-pointer"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;

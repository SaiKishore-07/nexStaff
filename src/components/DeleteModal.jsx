const DeleteModal = ({ isOpen, employee, onClose, onDelete }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">
        <h2 className="text-xl font-bold text-slate-800">Delete Employee</h2>
        <p className="mt-4 text-slate-600">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{employee?.name}</span>?
        </p>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <FaExclamationTriangle className="text-7xl text-red-500 mb-6" />

      <h1 className="text-5xl font-bold text-slate-800">404</h1>

      <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>

      <p className="text-slate-500 mt-3 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        <FaHome />
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;

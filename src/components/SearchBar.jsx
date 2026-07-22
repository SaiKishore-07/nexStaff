import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full md:w-150">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        placeholder="Search employee by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-slate-50 border border-slate-300 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
      />
    </div>
  );
};

export default SearchBar;

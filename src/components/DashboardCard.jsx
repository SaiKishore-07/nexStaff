const DashboardCard = ({ title, value, icon, bgColor }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-500 text-md">{title}</p>

          <h2 className="text-2xl md:text-3xl  font-bold mt-2">{value}</h2>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white text-2xl ${bgColor}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

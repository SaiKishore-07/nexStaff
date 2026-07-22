const StatusBadge = ({ status }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return {
          dot: "bg-green-500",
          text: "text-green-600",
        };

      case "On Leave":
        return {
          dot: "bg-yellow-500",
          text: "text-yellow-600",
        };

      case "Inactive":
        return {
          dot: "bg-red-500",
          text: "text-red-600",
        };

      default:
        return {
          dot: "bg-gray-500",
          text: "text-gray-600",
        };
    }
  };

  const statusStyle = getStatusStyle(status);

  return (
    <span
      className={`flex items-center gap-2 text-md font-medium ${statusStyle.text}`}
    >
      <span className={`w-3 h-3 mt-0.5 rounded-full ${statusStyle.dot}`}></span>

      {status}
    </span>
  );
};

export default StatusBadge;

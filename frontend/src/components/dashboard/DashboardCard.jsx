import { Link } from "react-router-dom";

const DashboardCard = ({
  title,
  value,
  description,
  buttonText,
  link,
  icon,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:scale-105 transition duration-300 shadow-lg">
        <div className="mb-4 text-cyan-400">
  {icon}
</div>
      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-4xl font-bold text-cyan-400 mb-2">
        {value}
      </p>

      <p className="text-gray-400 mb-6">
        {description}
      </p>

      <Link to={link}>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-2 rounded-xl transition">
        {buttonText}
        </button>
      </Link>

    </div>
  );
};

export default DashboardCard;
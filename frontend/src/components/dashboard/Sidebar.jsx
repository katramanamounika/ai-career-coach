import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Home,
  FileText,
  Mic,
  BarChart3,
  LogOut,
  History,
} from "lucide-react";

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full lg:w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-cyan-400 mb-10">
        AI Coach
      </h1>

      {/* Navigation */}
      <div className="space-y-4">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition duration-300 ${
              isActive
                ? "bg-cyan-500 text-black font-semibold shadow-lg"
                : "text-white hover:bg-slate-800"
            }`
          }
        >
          <Home size={20} />
          <span>Dashboard</span>
        </NavLink>

        {/* Resume Analyzer */}
        <NavLink
          to="/resume-analyzer"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition duration-300 ${
              isActive
                ? "bg-cyan-500 text-black font-semibold shadow-lg"
                : "text-white hover:bg-slate-800"
            }`
          }
        >
          <FileText size={20} />
          <span>Resume Analyzer</span>
        </NavLink>

        {/* Mock Interview */}
        <NavLink
          to="/mock-interview"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition duration-300 ${
              isActive
                ? "bg-cyan-500 text-black font-semibold shadow-lg"
                : "text-white hover:bg-slate-800"
            }`
          }
        >
          <Mic size={20} />
          <span>Mock Interview</span>
        </NavLink>

        {/* Analytics */}
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition duration-300 ${
              isActive
                ? "bg-cyan-500 text-black font-semibold shadow-lg"
                : "text-white hover:bg-slate-800"
            }`
          }
        >
          <BarChart3 size={20} />
          <span>Analytics</span>
        </NavLink>

        {/* Interview History */}
<NavLink
  to="/interview-history"
  className={({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition duration-300 ${
      isActive
        ? "bg-cyan-500 text-black font-semibold shadow-lg"
        : "text-white hover:bg-slate-800"
    }`
  }
>
  <History size={20} />
  <span>Interview History</span>
</NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
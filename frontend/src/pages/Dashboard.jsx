import Sidebar from "../components/dashboard/Sidebar";
import DashboardCard from "../components/dashboard/DashboardCard";
import {
  FileText,
  Mic,
  BarChart3,
} from "lucide-react";

const Dashboard = () => {
  const hasData = false;
  return (
    <div className="flex bg-gradient-to-br from-slate-950 via-slate-900 to-black-950 text-white min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Heading */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-10">

  <h1 className="text-4xl font-bold mb-3">
    Welcome Back 👋
  </h1>

  <p className="text-gray-400 text-lg">
    Track your progress and improve your career skills.
  </p>

</div>

        {/* Dashboard Cards */}
{hasData ? (

  /* EXISTING USER DASHBOARD */

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <DashboardCard
      title="Resume Score"
      value="82%"
      description="ATS optimized resume"
      buttonText="View Analysis"
      link="/resume-analyzer"
    />

    <DashboardCard
      title="Mock Interviews"
      value="12"
      description="Interviews completed"
      buttonText="Continue"
      link="/mock-interview"
    />

    <DashboardCard
      title="Confidence"
      value="80%"
      description="Interview readiness"
      buttonText="View Analytics"
      link="/analytics"
    />

  </div>

) : (

  /* NEW USER EMPTY STATE */

  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl text-center">

    <h2 className="text-3xl font-bold mb-4">
      Welcome to AI Career Coach 🚀
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-8">

      Start by uploading your resume or practicing
      your first mock interview to track progress.

    </p>

    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="/resume-analyzer"
        className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-2xl transition"
      >
        Upload Resume
      </a>

      <a
        href="/mock-interview"
        className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-2xl transition"
      >
        Start Interview
      </a>

    </div>

  </div>
)}

<div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-8">

  <h2 className="text-2xl font-bold mb-4">
    Quick Tips
  </h2>

  <ul className="space-y-3 text-gray-300">

    <li>✅ Upload your resume for ATS analysis</li>

    <li>✅ Practice mock interviews regularly</li>

    <li>✅ Track your career improvement</li>

  </ul>

</div>

      </div>

   </div>
  );
};

export default Dashboard;
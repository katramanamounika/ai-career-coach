import Sidebar from "../components/dashboard/Sidebar";
import {
  BarChart3,
  TrendingUp,
  Target,
} from "lucide-react";

const Analytics = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex flex-col lg:flex-row-1 p-4 md:p-8 lg:p-10">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Analytics Dashboard
          </h1>

          <p className="text-gray-400 text-lg">
            Track your interview preparation and resume progress.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* ATS Score */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

            <div className="bg-cyan-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">

              <BarChart3 className="text-cyan-400" />

            </div>

            <h2 className="text-4xl font-bold mb-2">
              82%
            </h2>

            <p className="text-gray-400">
              Resume ATS Score
            </p>

          </div>

          {/* Interviews */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

            <div className="bg-green-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">

              <TrendingUp className="text-green-400" />

            </div>

            <h2 className="text-4xl font-bold mb-2">
              12
            </h2>

            <p className="text-gray-400">
              Interviews Completed
            </p>

          </div>

          {/* Confidence */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

            <div className="bg-yellow-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">

              <Target className="text-yellow-400" />

            </div>

            <h2 className="text-4xl font-bold mb-2">
              80%
            </h2>

            <p className="text-gray-400">
              Confidence Level
            </p>

          </div>

        </div>

        {/* Progress Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl mb-8">

          <h2 className="text-2xl font-bold mb-8">
            Career Progress
          </h2>

          <div className="space-y-8">

            {/* Resume */}
            <div>

              <div className="flex flex-col lg:flex-row justify-between mb-3">
                <span>Resume Optimization</span>
                <span>82%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div className="bg-cyan-400 h-3 rounded-full w-[82%]"></div>

              </div>

            </div>

            {/* Interview */}
            <div>

              <div className="flex flex-col lg:flex-row justify-between mb-3">
                <span>Interview Readiness</span>
                <span>75%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div className="bg-green-400 h-3 rounded-full w-[75%]"></div>

              </div>

            </div>

            {/* Communication */}
            <div>

              <div className="flex flex-col lg:flex-row justify-between mb-3">
                <span>Communication Skills</span>
                <span>80%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div className="bg-yellow-400 h-3 rounded-full w-[80%]"></div>

              </div>

            </div>

          </div>

        </div>

        {/* Activity */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-800 rounded-2xl p-4">
              ✅ Resume analyzed successfully
            </div>

            <div className="bg-slate-800 rounded-2xl p-4">
              🎤 Mock interview session completed
            </div>

            <div className="bg-slate-800 rounded-2xl p-4">
              📈 Confidence score improved
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Analytics;
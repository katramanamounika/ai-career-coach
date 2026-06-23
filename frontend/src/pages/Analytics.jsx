import Sidebar from "../components/dashboard/Sidebar";
import {
 // BarChart3,
  TrendingUp,
  Target,
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";

const Analytics = () => {

  const [analytics, setAnalytics] = useState({
  // atsScore: 0,
    totalInterviews: 0,
    confidenceLevel: 0,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {

      const token =
localStorage.getItem("token");

const response =
await axios.get(
  "http://localhost:5000/api/analytics",
  {
    headers: {
      Authorization:
        `Bearer ${token}`
    }
  }
);

      setAnalytics(response.data);

    } catch (error) {

      console.log("Analytics Error:", error);

    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-4 md:p-8 lg:p-10">

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


          {/* Interviews */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

            <div className="bg-green-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-green-400" />
            </div>

            <h2 className="text-4xl font-bold mb-2">
              {analytics.totalInterviews}
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
              {analytics.confidenceLevel}%
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

            {/* Interview */}
            <div>

              <div className="flex flex-col lg:flex-row justify-between mb-3">
                <span>Interview Readiness</span>
                <span>{analytics.confidenceLevel}%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className="bg-green-400 h-3 rounded-full"
                  style={{
                    width: `${analytics.confidenceLevel}%`
                  }}
                ></div>

              </div>

            </div>

            {/* Communication */}
            <div>

              <div className="flex flex-col lg:flex-row justify-between mb-3">
                <span>Communication Skills</span>
                <span>{analytics.confidenceLevel}%</span>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-3">

                <div
                  className="bg-yellow-400 h-3 rounded-full"
                  style={{
                    width: `${analytics.confidenceLevel}%`
                  }}
                ></div>

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
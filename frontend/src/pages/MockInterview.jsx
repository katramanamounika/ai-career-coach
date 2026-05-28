import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mic,
  Brain,
  Clock,
  Briefcase,
} from "lucide-react";

const MockInterview = () => {
  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8 md:p-12">

      {/* Header */}
      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-4">
          Mock Interview
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl">
          Practice AI-powered interviews and improve
          your confidence for real job opportunities.
        </p>

      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-8">

        {/* Left Panel */}
        <div className="lg:col-span-4">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

            <div className="flex items-center gap-3 mb-8">

              <div className="bg-cyan-500/20 p-3 rounded-2xl">
                <Mic className="text-cyan-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Interview Setup
                </h2>

                <p className="text-gray-400 text-sm">
                  Configure your interview
                </p>
              </div>

            </div>

            {/* Role */}
            <div className="mb-6">

              <label className="block mb-3 text-gray-300">
                Select Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4 outline-none"
              >
                <option value="">
                  Choose Role
                </option>

                <option>
                  Frontend Developer
                </option>

                <option>
                  Backend Developer
                </option>

                <option>
                  Full Stack Developer
                </option>

                <option>
                  Java Developer
                </option>

                <option>
                  Python Developer
                </option>

                <option>
                  Data Analyst
                </option>

                <option>
                  Data Scientist
                </option>

                <option>
                  Software Engineer
                </option>

                <option>
                  Devops Engineer
                </option>
                <option>
                  AI-ML Engineer
                </option>
                  Cybersecurity Engineer

                <option>
                  Mobile App Developer
                </option>
                <option>
                  Cloud Engineer
                </option>
                  
                <option>
                  QA Engineer
                </option>
                <option>
                  BlockChain Developer
                </option>
                <option>
                  UI UX Designer
                </option>
                <option>
                  Game Designer
                </option>
                <option>
                  Embedded Engineer
                </option>
              </select>

            </div>

            {/* Difficulty */}
            <div className="mb-8">

              <label className="block mb-3 text-gray-300">
                Difficulty Level
              </label>

              <select
                value={difficulty}
                onChange={(e) =>
                  setDifficulty(e.target.value)
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4 outline-none"
              >
                <option value="">
                  Select Difficulty
                </option>

                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>

              </select>

            </div>

            {/* Button */}
            <Link to="/interview-session">
            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition duration-300">
                Start Interview
            </button>
            </Link>
          </div>

        </div>

        {/* Right Panel */}
        <div className="lg:col-span-8 space-y-8">

          {/* Preview Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl">

            <h2 className="text-3xl font-bold mb-4">
              Interview Preview
            </h2>

            <p className="text-gray-400 mb-8">
              Your AI interview session details will appear here.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-slate-800 rounded-2xl p-6">

                <Brain className="text-cyan-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  AI Questions
                </h3>

                <p className="text-gray-400 text-sm">
                  Dynamic interview questions generated by AI.
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-6">

                <Clock className="text-yellow-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  Timed Session
                </h3>

                <p className="text-gray-400 text-sm">
                  Practice under real interview pressure.
                </p>

              </div>

              <div className="bg-slate-800 rounded-2xl p-6">

                <Briefcase className="text-green-400 mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  Role Specific
                </h3>

                <p className="text-gray-400 text-sm">
                  Questions tailored to your selected role.
                </p>

              </div>

            </div>

          </div>

          {/* Sample Question */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold mb-6">
              Sample Interview Question
            </h2>

            <div className="bg-slate-800 rounded-2xl p-6">

              <p className="text-lg leading-relaxed">
                “Can you explain a challenging project
                you worked on and how you solved the problem?”
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MockInterview;
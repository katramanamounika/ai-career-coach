import {
  Clock,
  Mic,
  Brain,
  Camera,
} from "lucide-react";

const InterviewSession = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8 md:p-12">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

        <div>

          <h1 className="text-5xl font-bold mb-3">
            AI Interview Session
          </h1>

          <p className="text-gray-400 text-lg">
            Answer the interview questions confidently.
          </p>

        </div>

        {/* Timer */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl">

          <Clock className="text-cyan-400" />

          <span className="text-2xl font-bold">
            05:00
          </span>

        </div>

      </div>

      {/* Main Layout */}
<div className="grid lg:grid-cols-12 gap-6">

  {/* Left Main Section */}
  <div className="lg:col-span-8">

    {/* Question Card */}
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl mb-6">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-cyan-500/20 p-3 rounded-2xl">
          <Brain className="text-cyan-400" />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Interview Question
          </h2>

          <p className="text-gray-400 text-sm">
            AI-generated technical question
          </p>

        </div>

      </div>

      {/* Question */}
      <div className="bg-slate-800 rounded-2xl p-6">

        <p className="text-lg leading-relaxed">

          Explain a challenging project you worked on
          and how you solved technical problems.

        </p>

      </div>

    </div>

    {/* Video Grid */}
    <div className="grid md:grid-cols-2 gap-4 mb-6">

      {/* Your Camera */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl h-64 flex flex-col items-center justify-center">

        <div className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">

          <Camera
            className="text-cyan-400"
            size={40}
          />

        </div>

        <p className="text-xl font-semibold">
          Your Camera
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Camera preview will appear here
        </p>

      </div>

      {/* AI Interviewer */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl h-64 flex flex-col items-center justify-center">

        <div className="w-24 h-24 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">

          <Brain
            className="text-cyan-400"
            size={40}
          />

        </div>

        <p className="text-xl font-semibold">
          AI Interviewer
        </p>

        <p className="text-gray-400 text-sm mt-2">
          Asking interview questions
        </p>

      </div>

    </div>

    {/* Controls */}
    <div className="flex items-center gap-4">

      <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl transition text-sm">

        Camera On

      </button>

      <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition text-sm">

        Next

      </button>

      <button className="bg-red-500 hover:bg-red-400 text-white font-semibold px-6 py-3 rounded-xl transition text-sm">

        End

      </button>

    </div>

  </div>

  {/* Right Side Panel */}
  <div className="lg:col-span-4 space-y-6">

    {/* Progress */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">

      <h2 className="text-xl font-bold mb-5">
        Interview Progress
      </h2>

      <div className="space-y-5">

        <div>

          <div className="flex justify-between text-sm mb-2">
            <span>Questions</span>
            <span>2 / 5</span>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-cyan-400 h-2 rounded-full w-[40%]"></div>
          </div>

        </div>

        <div>

          <div className="flex justify-between text-sm mb-2">
            <span>Confidence</span>
            <span>80%</span>
          </div>

          <div className="w-full bg-slate-800 rounded-full h-2">
            <div className="bg-green-400 h-2 rounded-full w-[80%]"></div>
          </div>

        </div>

      </div>

    </div>

    {/* Tips */}
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">

      <h2 className="text-xl font-bold mb-4">
        Quick Tips
      </h2>

      <div className="space-y-3 text-sm text-gray-300">

        <p>✅ Maintain eye contact</p>

        <p>✅ Answer confidently</p>

        <p>✅ Keep answers structured</p>

        <p>✅ Stay calm</p>

      </div>

    </div>

  </div>
  </div>
  </div>      

  );
};

export default InterviewSession;
import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ResumeAnalyzer = () => {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [resumePreview, setResumePreview] = useState("");
  
  const handleAnalyze = async () => {
    if (!resume) {
      alert("Please upload a resume");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("resume", resume);

      // Replace with backend API
      const response = await fetch(
        "http://localhost:5000/api/analyze-resume",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setResult(data);

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8 md:p-12">

    {/* Header */}
    <div className="mb-10">

      <h1 className="text-5xl font-bold mb-4">
        Resume Analyzer
      </h1>

      <p className="text-gray-400 text-lg max-w-2xl">
        Upload your resume and get ATS insights,
        skill analysis, and improvement suggestions.
      </p>

    </div>

    {/* Main Grid */}
    <div className="grid lg:grid-cols-3 gap-8">

      {/* Upload Section */}
      <div className="lg:col-span-1">

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <div className="flex items-center gap-3 mb-6">

            <div className="bg-cyan-500/20 p-3 rounded-2xl">
              <Upload className="text-cyan-400" size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Upload Resume
              </h2>

              <p className="text-gray-400 text-sm">
                PDF, DOC, DOCX
              </p>
            </div>

          </div>

          {/* Upload Box */}
          <label className="border-2 border-dashed border-slate-700 hover:border-cyan-400 transition rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer text-center">

            <FileText
              size={50}
              className="text-cyan-400 mb-4"
            />

            <p className="text-lg font-medium mb-2">
              Drag & Drop Resume
            </p>

            <p className="text-gray-400 text-sm mb-4">
              or click to browse files
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              onChange={(e) => {
              const file = e.target.files[0];
              setResume(file);
              if (file) {
                setResumePreview(
                URL.createObjectURL(file)
              );
              }
              }}
            />

          </label>

          {/* File Name */}
          {resume && (
  <div className="mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-4">

    <div className="flex items-start justify-between gap-4">

      {/* Left */}
      <div className="flex gap-4">

        <div className="bg-cyan-500/20 p-3 rounded-xl h-fit">
          <FileText
            className="text-cyan-400"
            size={24}
          />
        </div>

        <div className="min-w-0">

          {/* File Name */}
          <p className="font-semibold text-lg truncate">
            {resume.name}
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Resume uploaded successfully
          </p>

          {/* File Info */}
          <div className="flex gap-4 mt-3 text-xs text-gray-500 flex-wrap">

            <span>
              {(resume.size / 1024).toFixed(1)} KB
            </span>

            <span>
              DOCX File
            </span>

          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4">

            {/* Open File */}
            <a
              href={resumePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
            >
              View File
            </a>

            {/* Remove File */}
            <button
              onClick={() => {
              setResume(null);
              setResumePreview("");
            }}
              className="text-red-400 hover:text-red-300 text-sm font-medium"
            >
              Remove
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>
)}
          {/* Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-2xl transition duration-300 shadow-lg"
          >
            {loading
              ? "Analyzing Resume..."
              : "Analyze Resume"}
          </button>

        </div>

      </div>

      {/* Results Section */}
      <div className="lg:col-span-2">

        {result ? (

          <div className="space-y-8">

            {/* ATS Overview */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                <div className="flex items-center gap-6">

                  <div className="w-36 h-36 rounded-full border-[12px] border-cyan-400 flex items-center justify-center text-5xl font-bold text-cyan-400 shadow-lg">

                    {result.score}%

                  </div>

                  <div>

                    <h2 className="text-3xl font-bold mb-3">
                      ATS Compatibility
                    </h2>

                    <p className="text-gray-400 max-w-sm">
                      Your resume is optimized for Applicant Tracking Systems.
                    </p>

                  </div>

                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl px-6 py-4">

                  <p className="text-cyan-300 text-lg font-semibold">
                    Resume Quality: Good 🚀
                  </p>

                </div>

              </div>

            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Skills Found */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

                <h2 className="text-2xl font-bold mb-6 text-green-400">
                  Skills Found
                </h2>

                <div className="flex flex-wrap gap-3">

                  {result.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-500/20 text-green-300 px-5 py-3 rounded-2xl border border-green-500/20"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* Missing Skills */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

                <h2 className="text-2xl font-bold mb-6 text-red-400">
                  Missing Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                  {result.missingSkills?.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-red-500/20 text-red-300 px-5 py-3 rounded-2xl border border-red-500/20"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* Resume Insights */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

              <h2 className="text-2xl font-bold mb-6">
                Resume Insights
              </h2>

              <div className="space-y-6">

                <div>

                  <div className="flex justify-between mb-2">
                    <span>Formatting</span>
                    <span>85%</span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full w-[85%]"></div>
                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">
                    <span>Keyword Optimization</span>
                    <span>72%</span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full w-[72%]"></div>
                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-2">
                    <span>Readability</span>
                    <span>90%</span>
                  </div>

                  <div className="w-full bg-slate-800 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full w-[90%]"></div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        ) : (

          <div className="space-y-8">

            {/* Preview Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-xl">

              <h2 className="text-3xl font-bold mb-4">
                Resume Analysis Preview
              </h2>

              <p className="text-gray-400 mb-8">
                Upload your resume to receive ATS analysis and skill insights.
              </p>

              <div className="flex items-center gap-6">

                <div className="w-32 h-32 rounded-full border-[10px] border-slate-700 flex items-center justify-center text-4xl font-bold text-slate-600">

                  --%

                </div>

                <div>

                  <p className="text-2xl font-semibold mb-2">
                    Awaiting Resume Upload
                  </p>

                  <p className="text-gray-500">
                    Your analysis results will appear here.
                  </p>

                </div>

              </div>

            </div>

            {/* Features */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

              <h2 className="text-2xl font-bold mb-6">
                What We Analyze
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                    ATS Compatibility
                  </h3>

                  <p className="text-gray-400">
                    Check resume performance with ATS systems.
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-400">
                    Skills Detection
                  </h3>

                  <p className="text-gray-400">
                    Identify technical and professional skills.
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                    Keyword Optimization
                  </h3>

                  <p className="text-gray-400">
                    Improve keywords for recruiter visibility.
                  </p>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-red-400">
                    Missing Skills
                  </h3>

                  <p className="text-gray-400">
                    Discover missing skills for your role.
                  </p>
                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>

  </div>
);
};
export default ResumeAnalyzer;
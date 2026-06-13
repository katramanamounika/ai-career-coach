import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  FileText,
} from "lucide-react";

const ResumeAnalyzer = () => {
  const [resume, setResume] = useState(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [resumePreview, setResumePreview] = useState("");
  const handleAnalyze = async () => {

  if (!resume) {

    alert("Please upload resume");

    return;
  }

  try {

    setLoading(true);

    // STEP 1 - Detect Role

    const roleFormData = new FormData();

    roleFormData.append(
      "resume",
      resume
    );

    const roleResponse = await fetch(
      "http://localhost:5000/api/resume/upload",
      {
        method: "POST",
        body: roleFormData,
      }
    );

    const roleData =
      await roleResponse.json();

    const detectedRole =
      roleData.detectedRole;

    setRole(detectedRole);
console.log("Detected Role:", detectedRole);
    // STEP 2 - ATS Analysis

    const formData = new FormData();

    formData.append(
      "file",
      resume
    );

    formData.append(
      "role",
      detectedRole
    );

    const response = await fetch(
      "http://127.0.0.1:8000/analyze",
      {
        method: "POST",
        body: formData,
      }
    );

    const data =
      await response.json();

    setResult({
      score: data.score,
      skills: data.matched_skills,
      missingSkills: data.missing_skills,
    });

  } catch (error) {

    console.error(error);

    alert("Something went wrong");

  } finally {

    setLoading(false);

  }

};
const startResumeInterview = () => {

  if (!role) {

    alert(
      "Analyze resume first"
    );

    return;
  }

  navigate(
    "/mock-interview",
    {
      state: {
        detectedRole: role
      }
    }
  );

};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8 md:p-12">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-4">
          Resume Analyzer
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl">
          Upload your resume and get ATS insights,
          skill analysis, and improvement suggestions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* UPLOAD SECTION */}
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

    <div className="bg-slate-800 p-4 rounded-xl mb-4">

  <p className="text-sm text-gray-400">
    Detected Role
  </p>

  <p className="text-cyan-400 font-bold text-lg">
    {role || "Upload resume and analyze"}
  </p>

</div>

            {/* FILE UPLOAD */}
            <label className="border-2 border-dashed border-slate-700 hover:border-cyan-400 transition rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer text-center">

              <FileText size={50} className="text-cyan-400 mb-4" />

              <p className="text-lg font-medium mb-2">
                Drag & Drop Resume
              </p>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={(e) => {
                  const file = e.target.files[0];
                  setResume(file);

                  if (file) {
                    setResumePreview(URL.createObjectURL(file));
                  }
                }}
              />
            </label>

            {/* FILE INFO */}
            {resume && (
              <div className="mt-6 bg-slate-800 p-4 rounded-xl">
                <p className="font-semibold">{resume.name}</p>
                <p className="text-sm text-gray-400">
                  {(resume.size / 1024).toFixed(1)} KB
                </p>
              </div>
            )}

            {/* BUTTON */}
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-2xl"
            >
              {loading ? "Analyzing..." : "Analyze Resume"}
            </button>

          </div>
        </div>

        {/* RESULT SECTION */}
        <div className="lg:col-span-2">

          {result ? (
            <div className="space-y-8">

              {/* SCORE */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <h2 className="text-2xl font-bold mb-4">
                  ATS Score
                </h2>

                <div className="text-5xl font-bold text-cyan-400">
                  {result.score}%
                </div>
              </div>

              {/* SKILLS */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* MATCHED */}
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <h3 className="text-green-400 text-xl mb-4">
                    Matched Skills
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {result.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-green-500/20 text-green-300 px-3 py-1 rounded-xl"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button
  onClick={startResumeInterview}
  className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-2xl"
>
  Start Resume Based Interview
</button>
                </div>

                {/* MISSING */}
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                  <h3 className="text-red-400 text-xl mb-4">
                    Missing Skills
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {result.missingSkills?.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded-xl"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ) : (
            <div className="text-gray-400 text-center mt-20">
              Upload resume to see analysis
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
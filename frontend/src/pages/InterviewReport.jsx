import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const InterviewReport = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers || [];
  const score = location.state?.score;
  const feedback = location.state?.feedback || [];

  useEffect(() => {
    if (!location.state?.answers) {
      navigate("/mock-interview");
    }
  }, []);

  return (

    <div className="min-h-screen bg-black text-white p-8">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-cyan-400">
          AI Interview Report
        </h1>
        <p className="text-gray-400 mt-2">
          Performance analysis powered by AI
        </p>
      </div>

      {/* SCORE */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-8">
        <h2 className="text-xl font-bold">Overall Score</h2>
        <p className="text-4xl text-green-400 mt-2">
          {score ?? 0}
        </p>
      </div>

      {/* QUESTIONS */}
      <div className="space-y-6">

        {answers.map((item, index) => (

          <div key={index} className="bg-slate-900 p-6 rounded-2xl">

            <h2 className="text-cyan-400 font-bold mb-2">
              Question {index + 1}
            </h2>

            <p className="text-white mb-4">
              {item.question}
            </p>

            <div className="bg-slate-800 p-4 rounded-xl">
              <p className="text-gray-300">
                {item.answer || "No answer provided"}
              </p>
            </div>

            {feedback[index] && (
              <div className="mt-4 bg-yellow-900/20 p-4 rounded-xl">

                <p className="text-yellow-300">
                  🤖 {feedback[index].feedback}
                </p>

                <p className="text-green-400 mt-1">
                  Score: {feedback[index].score}/10
                </p>

              </div>
            )}

          </div>

        ))}

      </div>

      <button
        onClick={() => navigate("/mock-interview")}
        className="mt-10 bg-cyan-500 text-black px-6 py-2 rounded-xl"
      >
        Back
      </button>

    </div>
  );
};

export default InterviewReport;
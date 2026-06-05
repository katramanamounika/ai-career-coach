import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jsPDF from "jspdf";
const InterviewReport = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const answers = location.state?.answers || [];
  const score = location.state?.score;
  const feedback = location.state?.feedback || [];
  const role = location.state?.role || "Not Available";
const difficulty = location.state?.difficulty || "Not Available";
const downloadPDF = () => {

  const doc = new jsPDF();

  const today = new Date().toLocaleDateString();
const answeredQuestions =
  answers.filter(
    a => a.answer !== "No answer provided"
  ).length;
  let level = "Beginner";

if (score >= 70) {
  level = "Excellent";
}
else if (score >= 50) {
  level = "Good";
}
else if (score >= 30) {
  level = "Average";
}
  // Main Title
  doc.setFontSize(22);
  doc.text("AI CAREER COACH", 20, 20);

  // Subtitle
  doc.setFontSize(18);
  doc.text("Interview Performance Report", 20, 32);
doc.line(20, 38, 190, 38);
  // Candidate Details
  doc.setFontSize(12);

  doc.text(`Date: ${today}`, 20, 50);

  doc.text(
    `Role: ${role}`,
    20,
    60
  );

  doc.text(
    `Difficulty: ${difficulty}`,
    20,
    70
  );

  doc.text(
    `Overall Score: ${score ?? 0}`,
    20,
    80
  );
doc.setFontSize(14);
doc.text("SUMMARY", 20, 95);

doc.setFontSize(12);

doc.text(
  `Total Questions: ${answers.length}`,
  20,
  105
);


doc.text(
  `Answered Questions: ${answeredQuestions}`,
  20,
  115
);
doc.text(
  `Performance Level: ${level}`,
  20,
  125
);
  let y = 145;

  // Questions start here
  answers.forEach((item, index) => {

  doc.line(20, y - 5, 190, y - 5);

  doc.setFontSize(14);
  doc.text(`Question ${index + 1}`, 20, y);

  y += 10;

  doc.setFontSize(12);

  // Question
  doc.text("Question:", 20, y);
  y += 8;

  doc.text(
    doc.splitTextToSize(item.question, 160),
    20,
    y
  );

  y += 15;

  // Answer
  doc.text("Answer:", 20, y);
  y += 8;

  doc.text(
    doc.splitTextToSize(
      item.answer || "No answer provided",
      160
    ),
    20,
    y
  );

  y += 15;

  // 👇 ADD FEEDBACK HERE
  if (feedback[index]) {

    doc.text("Feedback:", 20, y);
    y += 8;

    doc.text(
      doc.splitTextToSize(
        feedback[index].feedback,
        160
      ),
      20,
      y
    );

    y += 12;

    doc.text(
      `Score: ${feedback[index].score}/10`,
      20,
      y
    );

    y += 12;
  }

  // 👇 KEEP PAGE BREAK CHECK HERE
  if (y > 260) {
    doc.addPage();
    y = 20;
  }

});

  doc.save("AI_Interview_Report.pdf");
};
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
          <p className="text-gray-300 mt-2">
  Role: {role}
</p>

<p className="text-gray-300">
  Difficulty: {difficulty}
</p>

<p className="text-gray-300">
  Date: {new Date().toLocaleDateString()}
</p>
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
  onClick={downloadPDF}
  className="mt-10 mr-4 bg-green-500 text-black px-6 py-2 rounded-xl"
>
  Download PDF
</button>

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
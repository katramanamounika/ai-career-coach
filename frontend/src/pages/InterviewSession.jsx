import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Clock, Brain, Mic } from "lucide-react";

const InterviewSession = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { questions, role, difficulty } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [answer, setAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [isEnded, setIsEnded] = useState(false);


  const currentQuestion = questions?.[currentQuestionIndex];

  // 🎤 Speak Question
  useEffect(() => {
    if (!currentQuestion) return;

    const speech = new SpeechSynthesisUtterance(currentQuestion);
    speech.lang = "en-US";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

  }, [currentQuestion]);

  // ⏱ TIMER
  useEffect(() => {
    const timer = setInterval(() => {

      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishInterview(allAnswers);
          return 0;
        }
        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(timer);
  }, []);

  
  // 🎤 SPEECH TO TEXT
  const startListening = () => {

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;

    recognition.onresult = (event) => {
      setAnswer(event.results[0][0].transcript);
    };

    recognition.start();
  };

  // ➡ NEXT QUESTION
  const nextQuestion = () => {

    const updated = [
      ...allAnswers,
      {
        question: currentQuestion,
        answer: answer || "No answer provided",
      }
    ];

    setAllAnswers(updated);
    setAnswer("");

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishInterview(updated);
    }
  };

  // 🧠 FINAL SUBMIT WITH AI SCORING
  const finishInterview = async (finalAnswersParam) => {

    let finalAnswers = finalAnswersParam;

if (!finalAnswers) {
  finalAnswers = [
    ...allAnswers,
    {
      question: currentQuestion,
      answer: answer.trim() || "No answer provided"
    }
  ];
}
    if (isEnded) return;
    setIsEnded(true);

    try {
const user = JSON.parse(localStorage.getItem("user"));
      const res = await axios.post(
  "http://localhost:5000/api/interview/save",
  {
    userId: user._id,
          role,
          difficulty,
          questions: finalAnswers.map(a => a.question),
          answers: finalAnswers.map(a => a.answer),
        }
      );

      navigate("/interview-report", {
        state: {
          answers: finalAnswers,
          score: res.data.score || 0,
          feedback: res.data.feedback || [],
          role,
          difficulty
        }
      });

    } catch (err) {

  console.log(err);

  navigate("/interview-report", {
    state: {
      answers: finalAnswers,
      score: 0,
      feedback: [],
      role,
      difficulty
    }
  });

}
  };

  if (!questions) {
    return <div>No questions found</div>;
  }

  return (

    <div className="min-h-screen bg-black text-white p-6">

      {/* Header */}
      <div className="flex justify-between mb-6">

        <h1 className="text-2xl font-bold">AI Interview</h1>

        <div className="flex items-center gap-2">
          <Clock />
          <span>
            {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </span>
        </div>

      </div>

      {/* Question */}
      <div className="bg-gray-900 p-5 rounded-xl mb-4">
        <Brain />
        <h2 className="mt-2">{currentQuestion}</h2>
      </div>

      {/* ANSWER */}
      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full h-40 p-3 bg-white text-black rounded-xl"
        placeholder="Type your answer..."
        spellCheck={false}
      />

      {/* BUTTONS */}
      <div className="flex gap-3 mt-3">

        <button
          onClick={startListening}
          disabled={isEnded}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          <Mic /> Speak
        </button>

        <button
          onClick={nextQuestion}
          disabled={isEnded}
          className="bg-green-500 px-4 py-2 rounded"
        >
          Next
        </button>

        <button
          onClick={()=>finishInterview()}
          className="bg-red-500 px-4 py-2 rounded"
        >
          End
        </button>

</div>
    </div>
  );
};

export default InterviewSession;
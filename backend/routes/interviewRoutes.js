const express = require("express");
const Interview = require("../models/Interview");
const { generateScore } = require("../services/aiService");

const router = express.Router();

// SAVE INTERVIEW
router.post("/save", async (req, res) => {

  //console.log("SAVE API HIT");
  //console.log(req.body);

  try {

    const {
      userId,
      role,
      difficulty,
      questions,
      answers
    } = req.body;

    let totalScore = 0;
    let feedbackList = [];

    for (let i = 0; i < questions.length; i++) {

      const question = questions[i];
      const answer = answers[i];
console.log("QUESTION:", question);
console.log("ANSWER:", answer);
if (
  !answer ||
  answer.trim() === "" ||
  answer === "No answer provided"
) {

        feedbackList.push({
          question,
          answer: "",
          score: 0,
          feedback: "No answer provided"
        });

        continue;
      }

      const aiResponse = await generateScore(
        question,
        answer
      );
      console.log(aiResponse);

      let score = 0;

      const scoreMatch =
        aiResponse.match(/Score:\s*(\d+)\s*\/\s*10/i) ||
        aiResponse.match(/Score:\s*(\d+)/i);

      if (scoreMatch) {
        score = parseInt(scoreMatch[1]);
      }

      let feedback = "No feedback";

      const feedbackMatch =
        aiResponse.match(/Feedback:\s*(.*)/i);

      if (feedbackMatch) {
        feedback = feedbackMatch[1].trim();
      }

      totalScore += score;

      feedbackList.push({
        question,
        answer,
        score,
        feedback
      });
    }

    const interview = new Interview({

      userId,

      role,
      difficulty,
      questions,
      answers,
      score: totalScore

    });

    await interview.save();
//console.log("INTERVIEW SAVED");
//console.log(interview);
    res.status(201).json({
      success: true,
      message: "Interview saved successfully",
      score: totalScore,
      feedback: feedbackList,
      interview
    });

  } catch (error) {

  console.log("========== SAVE ERROR ==========");
  console.log(error);
  console.log("================================");

  res.status(500).json({
    success: false,
    error: error.message
  });

}
});

// GET ALL INTERVIEWS
router.get("/all", async (req, res) => {

  try {

    const interviews =
      await Interview.find()
        .sort({ createdAt: -1 });

    res.json(interviews);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

});

module.exports = router;
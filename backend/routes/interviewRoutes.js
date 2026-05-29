const express = require("express");
const Interview = require("../models/Interview");
const { generateScore } = require("../services/aiService");

const router = express.Router();

// 🤖 SAVE INTERVIEW (FIXED AI SCORING)
router.post("/save", async (req, res) => {

  try {

    const { role, difficulty, questions, answers } = req.body;

    let totalScore = 0;
    let feedbackList = [];

    for (let i = 0; i < questions.length; i++) {

      const question = questions[i];
      const answer = answers[i];

      // 🚨 Handle empty answers
      if (!answer || answer.trim() === "") {
        feedbackList.push({
          question,
          answer: "",
          score: 0,
          feedback: "No answer provided"
        });
        continue;
      }

      const aiResponse = await generateScore(question, answer);

      // 🔥 SAFE SCORE EXTRACTION
      let score = 0;

      const scoreMatch =
        aiResponse.match(/Score:\s*(\d+)\s*\/\s*10/i) ||
        aiResponse.match(/Score:\s*(\d+)/i);

      if (scoreMatch) {
        score = parseInt(scoreMatch[1]);
      }

      // 🔥 SAFE FEEDBACK EXTRACTION
      let feedback = "No feedback";

      const feedbackMatch = aiResponse.match(/Feedback:\s*(.*)/i);

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
      role,
      difficulty,
      questions,
      answers,
      score: totalScore
    });

    await interview.save();

    res.status(201).json({
      message: "Interview saved with AI scoring",
      score: totalScore,
      feedback: feedbackList,
      interview
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
});

// 📊 GET ALL INTERVIEWS
router.get("/all", async (req, res) => {
  try {
    const interviews = await Interview.find().sort({ createdAt: -1 });
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
const mongoose = require("mongoose");

const interviewHistorySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  role: {
    type: String,
  },

  score: {
    type: Number,
  },

  questions: {
    type: [String],
  },

  answers: {
    type: [String],
  },
 
  feedback: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "InterviewHistory",
  interviewHistorySchema
);
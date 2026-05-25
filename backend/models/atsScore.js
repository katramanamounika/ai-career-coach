const mongoose = require("mongoose");

const atsScoreSchema = mongoose.Schema(
{
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
  },

  score: {
    type: Number,
    required: true,
  },

  feedback: {
    type: String,
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model(
  "AtsScore",
  atsScoreSchema
);
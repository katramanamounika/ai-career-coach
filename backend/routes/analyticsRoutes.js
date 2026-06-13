const express = require("express");
const router = express.Router();

const Interview = require("../models/Interview");

router.get("/", async (req, res) => {

  try {
const interviews = await Interview.find({
  userId: req.user.id
});

    const totalInterviews =
      interviews.length;

    let totalScore = 0;

    interviews.forEach((item) => {
      totalScore += item.score;
    });

    const confidenceLevel =
  totalInterviews > 0
    ? Math.round(
        (totalScore / totalInterviews) * 10
      )
    : 0;

    res.json({

      atsScore: 82,

      totalInterviews,

      confidenceLevel

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Analytics failed"
    });

  }

});


module.exports = router;
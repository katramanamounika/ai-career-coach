const express = require("express");

const router = express.Router();

const {
  getInterviewHistory,
} = require("../controllers/interviewHistoryController");

router.get("/ping", (req, res) => {
  res.send("Interview History Route Working");
});

router.get("/:userId", getInterviewHistory);

module.exports = router;
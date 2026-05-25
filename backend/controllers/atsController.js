const ATS = require("../models/atsScore");

const createATS = async (req, res) => {
  try {
    const { resumeId, score, feedback } = req.body;

    const ats = await ATS.create({
      user: req.user.id,
      resume: resumeId,
      score,
      feedback,
    });

    res.status(201).json(ats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getATS = async (req, res) => {
  try {
    const ats = await ATS.find({
      user: req.user.id,
    });

    res.json(ats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createATS,
  getATS,
};
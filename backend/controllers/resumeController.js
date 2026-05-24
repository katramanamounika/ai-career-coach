const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      user: req.user._id,
      resumeFile: req.file.path
    });

    res.status(201).json({
      message: "Resume uploaded",
      resume
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  uploadResume
};
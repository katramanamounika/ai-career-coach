const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {
  try {
    const resume = await Resume.create({
  user: req.user._id,
  resumeUrl: req.file.path,
  originalName: req.file.originalname,
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
const getUserResumes = async (req, res) => {
  try {

    const resumes = await Resume.find({
      user: req.user._id,
    });

    res.status(200).json(resumes);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
const deleteResume = async (req, res) => {
  try {

    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    if (resume.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await resume.deleteOne();

    res.status(200).json({
      message: "Resume deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};
module.exports = {
  uploadResume,
  getUserResumes,
  deleteResume
};
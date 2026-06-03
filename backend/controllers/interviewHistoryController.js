const Interview = require("../models/Interview");

const getInterviewHistory = async (req, res) => {
  try {

    const interviews = await Interview.find({
      userId: req.params.userId
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: interviews,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getInterviewHistory,
};
const easyAnswers = require("./expectedAnswersEasy");
const mediumAnswers = require("./expectedAnswersMedium");
const hardAnswers = require("./expectedAnswersHard");

const expectedAnswers = {
  ...easyAnswers,
  ...mediumAnswers,
  ...hardAnswers,
};

module.exports = expectedAnswers;
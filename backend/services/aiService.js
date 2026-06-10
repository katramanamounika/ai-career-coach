const expectedAnswersEasy =
require("../data/expectedAnswersEasy");

const expectedAnswersMedium =
require("../data/expectedAnswersMedium");

const expectedAnswersHard =
require("../data/expectedAnswersHard");
const generateScore = async (
  question,
  answer,
  difficulty
)  => {
    try {

      const cleanedAnswer = (answer || "")
        .trim()
        .toLowerCase();

      // Unanswered answers
      const invalidAnswers = [
        "",
        ".",
        "..",
        "...",
        "-",
        "--",
        "skip",
        "skipped",
        "next",
        "no",
        "nothing",
        "no answer",
        "not answered",
        "not sure",
        "dont know",
        "don't know",
        "i dont know",
        "i don't know",
        "n/a",
        "na"
      ];

      if (
        cleanedAnswer.length === 0 ||
        invalidAnswers.includes(cleanedAnswer)
      ) {
        return `
  Score: 0
  Feedback: Question not answered
  `;
      }

      // Find question safely
      const normalizedQuestion = question
        ?.trim()
        .toLowerCase();
let expectedAnswers = {};

if (difficulty === "Easy") {
  expectedAnswers = expectedAnswersEasy;
}
else if (difficulty === "Medium") {
  expectedAnswers = expectedAnswersMedium;
}
else {
  expectedAnswers = expectedAnswersHard;
}
      let answerData = null;

      for (const key in expectedAnswers) {
        if (
          key.trim().toLowerCase() === normalizedQuestion
        ) {
          answerData = expectedAnswers[key];
          break;
        }
      }
//console.log("QUESTION RECEIVED:", question);
//console.log("NORMALIZED:", normalizedQuestion);
//console.log("FOUND:", answerData);
      if (
  !answerData ||
  answerData.length === 0
) {
  return `
Score: 0
Feedback: Evaluation data not available
`;
} 
     const keywords = answerData.keywords;
//const keywords = answerData;
      let matchedKeywords = 0;

      keywords.forEach((keyword) => {
        if (
          cleanedAnswer.includes(
            keyword.toLowerCase()
          )
        ) {
          matchedKeywords++;
        }
      });

      const percentage =
        matchedKeywords / keywords.length;

      const wordCount =
        cleanedAnswer
          .split(/\s+/)
          .filter(word => word.length > 0)
          .length;

      // No keyword matched
      if (matchedKeywords === 0) {

        if (wordCount <= 1) {
          return `
  Score: 0
  Feedback: Question not answered
  `;
        }

        return `
  Score: 0
  Feedback: Wrong or irrelevant answer
  `;
      }

      // Weak answer
      if (
        percentage < 0.25 ||
        wordCount < 5
      ) {
        return `
  Score: 2
  Feedback: Very weak answer
  `;
      }

      // Partial answer
      if (
        percentage < 0.5 ||
        wordCount < 15
      ) {
        return `
  Score: 4
  Feedback: Partially correct answer
  `;
      }

      // Good answer
      if (
        percentage < 0.8 ||
        wordCount < 30
      ) {
        return `
  Score: 7
  Feedback: Good answer. Most concepts are covered.
  `;
      }

      // Excellent answer
      return `
  Score: 10
  Feedback: Excellent answer. Relevant concepts are clearly explained.
  `;

    } catch (error) {

      console.error("AI Evaluation Error:", error);

      return `
  Score: 0
  Feedback: Evaluation failed
  `;
    }
};

  module.exports = {
    generateScore,
  };
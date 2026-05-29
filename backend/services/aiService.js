const expectedAnswers = require("../data/expectedAnswers");

const generateScore = async (question, answer) => {

  try {

    // 🚨 EMPTY ANSWER
    if (
      !answer ||
      answer.trim() === "" ||
      answer.trim().length < 2
    ) {

      return `
Score: 0
Feedback: Question not answered
`;
    }

    // expected keywords
    const expected = expectedAnswers[question];

    // 🚨 No expected answer found
    if (!expected) {

      return `
Score: 5
Feedback: Answer submitted
`;
    }

    const lowerAnswer = answer.toLowerCase();

    let matchedKeywords = 0;

    // keyword matching
    expected.forEach((keyword) => {

      if (lowerAnswer.includes(keyword.toLowerCase())) {
        matchedKeywords++;
      }

    });

    // calculate percentage
    const percentage =
      matchedKeywords / expected.length;

    // 🚨 FULLY WRONG
    if (matchedKeywords === 0) {

      return `
Score: 0
Feedback: Wrong or irrelevant answer
`;
    }

    // 🚨 PARTIAL
    if (percentage < 0.5) {

      return `
Score: 3
Feedback: Partially correct answer
`;
    }

    // 🚨 GOOD
    if (percentage < 1) {

      return `
Score: 7
Feedback: Good answer but missing some concepts
`;
    }

    // 🚨 PERFECT
    return `
Score: 10
Feedback: Excellent and correct answer
`;

  } catch (error) {

    return `
Score: 0
Feedback: AI evaluation failed
`;

  }

};

module.exports = { generateScore };
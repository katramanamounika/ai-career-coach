const detectRole = (skills) => {

  const roleMapping = {

    "Python Developer": [
      "python",
      "django",
      "flask",
      "fastapi"
    ],

    "Frontend Developer": [
      "html",
      "css",
      "javascript",
      "react",
      "redux"
    ],

    "Backend Developer": [
      "nodejs",
      "express",
      "mongodb",
      "sql",
      "mysql",
      "postgresql"
    ],

    "Full Stack Developer": [
      "react",
      "nodejs",
      "express",
      "mongodb"
    ],

    "Machine Learning Engineer": [
      "machine learning",
      "deep learning",
      "tensorflow",
      "pytorch",
      "nlp"
    ]
  };

  let bestRole = "Python Developer";
  let maxMatches = 0;

  Object.keys(roleMapping).forEach(role => {

    const matches =
      roleMapping[role].filter(
        skill => skills.includes(skill)
      ).length;

    if (matches > maxMatches) {

      maxMatches = matches;
      bestRole = role;

    }

  });

  return bestRole;
};

module.exports = detectRole;
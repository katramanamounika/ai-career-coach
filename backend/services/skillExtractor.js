const extractSkills = (text) => {

    const skillsList = [

        "python",
    "java",
    "c++",
    "html",
    "css",
    "javascript",
    "react",
    "redux",
    "nodejs",
    "express",
    "mongodb",
    "sql",
    "mysql",
    "postgresql",
    "machine learning",
    "deep learning",
    "tensorflow",
    "pytorch",
    "nlp",
    "fastapi",
    "django",
    "flask",
    "docker",
    "kubernetes",
    "aws",
    "azure",
    "gcp",
    "linux",
    "jenkins",
    "power bi",
    "tableau",
    "excel",
    "figma",
    "flutter",
    "react native",
    "selenium",
    "ethical hacking",
    "network security",
    "data structures",
    "algorithms"

    ];

    const extractedSkills = skillsList.filter(skill =>
        text.toLowerCase().includes(skill.toLowerCase())
    );

    return extractedSkills;
};

module.exports = extractSkills;
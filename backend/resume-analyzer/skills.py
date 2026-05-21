SKILLS_DB = [

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
]

def extract_skills(text):

    found = []

    text = text.lower()

    for skill in SKILLS_DB:

        if skill in text:

            found.append(skill)

    return found
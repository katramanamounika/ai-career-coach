SKILLS_DB = [

    "python",
    "java",
    "c",
    "c++",
    "react",
    "nodejs",
    "mongodb",
    "sql",
    "machine learning",
    "fastapi",
    "git",
    "docker",
    "html",
    "css",
    "javascript"

]

def extract_skills(text):

    found_skills = []

    text = text.lower()

    for skill in SKILLS_DB:

        if skill in text:
            found_skills.append(skill)

    return found_skills
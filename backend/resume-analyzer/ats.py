REQUIRED_SKILLS = [

    "python",
    "react",
    "mongodb",
    "git",
    "docker"

]

def calculate_ats_score(found_skills):

    matched = 0

    for skill in REQUIRED_SKILLS:

        if skill in found_skills:
            matched += 1

    score = (matched / len(REQUIRED_SKILLS)) * 100

    return round(score, 2)

def missing_skills(found_skills):

    missing = []

    for skill in REQUIRED_SKILLS:

        if skill not in found_skills:
            missing.append(skill)

    return missing
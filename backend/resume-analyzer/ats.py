from roles_data import ROLES_DATA

def calculate_ats_score(role, skills):

    required_skills = ROLES_DATA[role]["skills"]

    matched = 0

    for skill in skills:

        if skill in required_skills:

            matched += 1

    score = (matched / len(required_skills)) * 100

    return round(score, 2)
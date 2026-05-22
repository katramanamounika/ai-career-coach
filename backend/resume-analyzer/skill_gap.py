from roles_data import ROLES_DATA

def find_missing_skills(role, skills):

    required_skills = ROLES_DATA[role]["skills"]

    missing_skills = []

    for skill in required_skills:

        if skill not in skills:

            missing_skills.append(skill)

    return missing_skills
from roles_data import ROLES

def calculate_ats_score(resume_text, role):
    print("ROLE:", role)
    print("TEXT LENGTH:", len(resume_text))

    role_skills = ROLES.get(role, [])

    resume_text = resume_text.lower()

    matched_skills = []

    missing_skills = []

    for skill in role_skills:

        if skill.lower() in resume_text:
            matched_skills.append(skill)
        else:
            missing_skills.append(skill)

    if len(role_skills) == 0:
        score = 0
    else:
        score = int((len(matched_skills) / len(role_skills)) * 100)

    return {
        "score": score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }
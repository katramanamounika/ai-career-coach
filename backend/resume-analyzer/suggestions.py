from roles_data import ROLES_DATA

def generate_suggestions(role, missing_skills):

    improvements = ROLES_DATA[role]["improvements"]

    suggestions = []

    for skill in missing_skills:

        if skill in improvements:

            suggestions.append({

                "skill": skill,

                "suggestion": improvements[skill]
            })

    return suggestions
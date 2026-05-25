from roles_data import ROLES_DATA

def detect_role(skills):

    scores = {}

    for role, data in ROLES_DATA.items():

        matched = 0

        for skill in skills:

            if skill in data["skills"]:

                matched += 1

        scores[role] = matched

    best_role = max(scores, key=scores.get)

    return best_role
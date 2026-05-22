from roles_data import ROLES_DATA
import random


def generate_questions(role):

    role = role.lower()

    role_questions = ROLES_DATA[role]["questions"]

    easy_questions = role_questions["easy"]

    medium_questions = role_questions["medium"]

    hard_questions = role_questions["hard"]

    selected_questions = []

    # Random easy question
    selected_questions.append(
        random.choice(easy_questions)
    )

    # Random medium question
    selected_questions.append(
        random.choice(medium_questions)
    )

    # Random hard question
    selected_questions.append(
        random.choice(hard_questions)
    )

    # Shuffle final order
    random.shuffle(selected_questions)

    return selected_questions
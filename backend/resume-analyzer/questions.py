import random
import time

from voice_output import speak_text


QUESTION_DB = {

    "python": [

        "What are Python decorators?",

        "Explain list vs tuple in Python.",

        "What is OOP in Python?",

        "What are generators in Python?",

        "Explain Python inheritance."
    ],

    "react": [

        "What are React hooks?",

        "Explain useState.",

        "What is virtual DOM?",

        "Explain component lifecycle.",

        "Difference between props and state?"
    ],

    "sql": [

        "What is normalization?",

        "Explain SQL joins.",

        "What is primary key?",

        "What is indexing?",

        "Difference between DELETE and TRUNCATE?"
    ],

    "mongodb": [

        "What is MongoDB?",

        "Difference between SQL and MongoDB?",

        "What is a document database?",

        "Explain aggregation pipeline.",

        "What is sharding?"
    ],

    "machine learning": [

        "What is overfitting?",

        "Explain supervised learning.",

        "What is bias vs variance?",

        "Explain decision trees.",

        "What is feature engineering?"
    ]
}


def generate_questions(skills):

    selected_questions = []

    for skill in skills:

        skill = skill.lower()

        if skill in QUESTION_DB:

            # Pick 2 RANDOM questions
            random_questions = random.sample(
                QUESTION_DB[skill],
                min(2, len(QUESTION_DB[skill]))
            )

            selected_questions.extend(random_questions)

    # Shuffle all questions
    random.shuffle(selected_questions)

    return selected_questions

QUESTION_DB = {

    "python": [
        "What are Python decorators?",
        "Explain list vs tuple in Python.",
        "What is OOP in Python?"
    ],

    "react": [
        "What are React hooks?",
        "Explain useState.",
        "What is virtual DOM?"
    ],

    "sql": [
        "What is normalization?",
        "Explain SQL joins.",
        "What is primary key?"
    ],

    "mongodb": [
        "What is MongoDB?",
        "Difference between SQL and MongoDB?",
        "What is a document database?"
    ],

    "machine learning": [
        "What is overfitting?",
        "Explain supervised learning.",
        "What is bias vs variance?"
    ]

}

from voice_output import speak_text
import time

def generate_questions(skills):

    questions = []

    for skill in skills:

        skill = skill.lower()

        if skill in QUESTION_DB:

            questions.extend(QUESTION_DB[skill])

    print("Generated Questions:", questions)

    for question in questions:

        print("Speaking:", question)

        speak_text(question)

        time.sleep(1)

    return questions
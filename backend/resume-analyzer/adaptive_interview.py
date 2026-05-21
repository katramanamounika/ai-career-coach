from questions import generate_questions
from voice_output import speak_text
from speech import listen_answer
from evaluator import evaluate_answer

import time


def start_interview(skills):

    questions = generate_questions(skills)

    results = []

    speak_text(
        "Welcome to the AI interview."
    )

    time.sleep(2)

    for question in questions:

        speak_text(question)

        time.sleep(2)

        print("\nAnswer now...\n")

        answer = listen_answer()

        feedback = evaluate_answer(answer)

        speak_text(feedback)

        results.append({

            "question": question,

            "answer": answer,

            "feedback": feedback
        })

        time.sleep(2)

    speak_text(
        "Interview completed successfully."
    )

    return results
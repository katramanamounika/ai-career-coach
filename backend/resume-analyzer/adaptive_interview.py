from questions import generate_questions
from voice_output import speak_text
from speech import listen_answer
from evaluator import evaluate_answer

import time


def start_interview(role):

    questions = generate_questions(role)

    results = []

    speak_text(
        "Welcome to the AI interview."
    )

    time.sleep(2)

    for question in questions:

        print("\nAI Question:\n")

        print(question)

        speak_text(question)

        print(
            "\nYou have 30 seconds to answer.\n"
        )

        answer = listen_answer()

        print("\nYour Answer:\n")

        print(answer)

        feedback = evaluate_answer(answer)

        print("\nAI Feedback:\n")

        print(feedback)

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
def evaluate_answer(answer):

    answer = answer.lower()

    if len(answer) > 150:

        return "Good Answer"

    elif len(answer) > 50:

        return "Average Answer"

    else:

        return "Poor Answer"
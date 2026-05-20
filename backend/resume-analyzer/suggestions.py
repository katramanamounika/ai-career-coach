def generate_suggestions(score):

    if score >= 80:

        return "Excellent Resume"

    elif score >= 60:

        return "Good Resume But Needs Some Improvements"

    else:

        return "Add More Relevant Skills And Projects"
def generate_report(

    ats_score,
    interview_results,
    missing_skills,
    suggestions

):

    total_score = 0

    for result in interview_results:

        total_score += result["score"]

    if len(interview_results) > 0:

        average_score = total_score / len(interview_results)

    else:

        average_score = 0

    report = {

        "ATS Score": ats_score,

        "Average Interview Score": average_score,

        "Missing Skills": missing_skills,

        "Suggestions": suggestions,

        "Interview Results": interview_results

    }

    return report
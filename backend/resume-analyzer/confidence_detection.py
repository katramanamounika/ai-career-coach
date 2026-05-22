from collections import Counter


def calculate_confidence(

    emotions,
    answers

):

    emotion_count = Counter(emotions)

    confidence_score = 50

    # =========================
    # EMOTION ANALYSIS
    # =========================

    happy = emotion_count.get("happy", 0)

    neutral = emotion_count.get("neutral", 0)

    fear = emotion_count.get("fear", 0)

    sad = emotion_count.get("sad", 0)

    angry = emotion_count.get("angry", 0)

    confidence_score += happy * 2

    confidence_score += neutral * 1

    confidence_score -= fear * 3

    confidence_score -= sad * 4

    confidence_score -= angry * 4

    # =========================
    # SPEECH ANALYSIS
    # =========================

    filler_words = [

        "umm",
        "uh",
        "like",
        "actually",
        "basically"
    ]

    filler_count = 0

    total_words = 0

    for answer in answers:

        answer = answer.lower()

        words = answer.split()

        total_words += len(words)

        for word in words:

            if word in filler_words:

                filler_count += 1

    # Too many filler words
    confidence_score -= filler_count * 2

    # Very short answers
    if total_words < 30:

        confidence_score -= 15

    # Very detailed answers
    elif total_words > 150:

        confidence_score += 10

    # Normalize
    confidence_score = max(
        0,
        min(confidence_score, 100)
    )

    return confidence_score
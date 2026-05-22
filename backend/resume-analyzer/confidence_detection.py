from collections import Counter


def calculate_confidence(emotions):

    emotion_count = Counter(emotions)

    confidence_score = 50

    happy_count = emotion_count.get("happy", 0)

    neutral_count = emotion_count.get("neutral", 0)

    fear_count = emotion_count.get("fear", 0)

    sad_count = emotion_count.get("sad", 0)

    angry_count = emotion_count.get("angry", 0)

    confidence_score += happy_count * 2

    confidence_score += neutral_count * 1

    confidence_score -= fear_count * 4

    confidence_score -= sad_count * 5

    confidence_score -= angry_count * 5

    confidence_score = max(
        0,
        min(confidence_score, 100)
    )

    return confidence_score
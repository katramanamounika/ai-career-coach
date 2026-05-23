from collections import Counter


def calculate_confidence(emotions):

    if len(emotions) == 0:

        return 0

    emotion_count = Counter(emotions)

    print("\nEmotion Analysis:\n")

    print(emotion_count)

    confidence_score = 60

    happy = emotion_count.get("happy", 0)

    neutral = emotion_count.get("neutral", 0)

    fear = emotion_count.get("fear", 0)

    sad = emotion_count.get("sad", 0)

    angry = emotion_count.get("angry", 0)

    not_visible = emotion_count.get(
        "not_visible",
        0
    )

    confidence_score += happy * 2

    confidence_score += neutral * 1

    confidence_score -= fear * 2

    confidence_score -= sad * 2

    confidence_score -= angry * 2

    confidence_score -= not_visible * 5

    confidence_score = max(

        0,

        min(confidence_score, 100)
    )

    return confidence_score
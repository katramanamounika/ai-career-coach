import speech_recognition as sr

recognizer = sr.Recognizer()

# VERY IMPORTANT
recognizer.pause_threshold = 3

recognizer.energy_threshold = 300


def listen_answer():

    with sr.Microphone() as source:

        print("\nListening Carefully...")

        recognizer.adjust_for_ambient_noise(
            source,
            duration=2
        )

        try:

            audio = recognizer.listen(

                source,

                timeout=40,

                phrase_time_limit=60
            )

            text = recognizer.recognize_google(audio)

            print("\nCandidate:", text)

            return text

        except sr.WaitTimeoutError:

            return "No answer given"

        except sr.UnknownValueError:

            return "Could not understand audio"

        except sr.RequestError:

            return "Speech service error"
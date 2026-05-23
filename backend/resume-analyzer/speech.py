import speech_recognition as sr
import time


def listen_answer():

    recognizer = sr.Recognizer()

    with sr.Microphone() as source:

        print("\nListening... You have 30 seconds.\n")

        recognizer.adjust_for_ambient_noise(
            source,
            duration=2
        )

        start_time = time.time()

        audio_data = []

        while time.time() - start_time < 30:

            try:

                audio = recognizer.listen(

                    source,

                    timeout=5,

                    phrase_time_limit=5
                )

                audio_data.append(audio)

            except:

                pass

        full_answer = ""

        for audio in audio_data:

            try:

                text = recognizer.recognize_google(audio)

                full_answer += " " + text

            except:

                pass

        if full_answer.strip() == "":

            return "No answer detected"

        return full_answer
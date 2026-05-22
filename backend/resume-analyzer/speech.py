import speech_recognition as sr


def listen_answer():

    recognizer = sr.Recognizer()

    with sr.Microphone() as source:

        print("\nListening...\n")

        recognizer.adjust_for_ambient_noise(

            source,

            duration=1
        )

        try:

            audio = recognizer.listen(

                source,

                timeout=30,

                phrase_time_limit=30
            )

            text = recognizer.recognize_google(audio)

            print("\nCandidate:", text)

            return text

        except sr.WaitTimeoutError:

            print("\nTime exceeded!\n")

            return ""

        except:

            print("\nCould not recognize voice.\n")

            return ""
import pyttsx3

def speak_text(text):

    engine = pyttsx3.init()

    engine.setProperty('rate', 120)

    engine.setProperty('volume', 1)

    voices = engine.getProperty('voices')

    engine.setProperty('voice', voices[1].id)

    print("\nAI Interviewer:", text)

    engine.say(text)

    engine.runAndWait()

    engine.stop()
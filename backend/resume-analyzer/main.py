import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

from resume_parser import extract_resume_text
from skills import extract_skills
from role_detection import detect_role
from ats import calculate_ats_score
from skill_gap import find_missing_skills
from suggestions import generate_suggestions
from adaptive_interview import start_interview
from confidence_detection import calculate_confidence

from tkinter import Tk
from tkinter.filedialog import askopenfilename

import cv2
from deepface import DeepFace
import threading
import time


# ==============================
# VIDEO INTERVIEW ANALYSIS
# ==============================

emotion_data = []

camera_running = True


def start_video_analysis():

    global emotion_data
    global camera_running

    camera = cv2.VideoCapture(0)

    while camera_running:

        success, frame = camera.read()

        if not success:
            continue

        try:

            result = DeepFace.analyze(

                frame,

                actions=['emotion'],

                enforce_detection=False
            )

            emotion = result[0]['dominant_emotion']

            emotion_data.append(emotion)

            cv2.putText(

                frame,

                f"Emotion: {emotion}",

                (20, 40),

                cv2.FONT_HERSHEY_SIMPLEX,

                1,

                (0, 255, 0),

                2
            )

        except Exception as e:

            print("Emotion Detection Error:", e)

        cv2.imshow("AI Video Interview", frame)

        if cv2.waitKey(1) == 27:
            break

    camera.release()

    cv2.destroyAllWindows()

# ==============================
# START APPLICATION
# ==============================

print("\n========== AI RESUME ANALYZER ==========\n")


# ==============================
# RESUME UPLOAD
# ==============================

Tk().withdraw()

resume_path = askopenfilename(

    title="Select Resume PDF",

    filetypes=[("PDF Files", "*.pdf")]
)

print("\nSelected Resume:\n")

print(resume_path)


# ==============================
# RESUME PARSING
# ==============================

resume_text = extract_resume_text(resume_path)

print("\nResume Text Extracted Successfully!\n")


# ==============================
# SKILL EXTRACTION
# ==============================

skills = extract_skills(resume_text)

print("\nExtracted Skills:\n")

print(skills)


# ==============================
# ROLE DETECTION
# ==============================

role = detect_role(skills)

print("\nDetected Role:\n")

print(role)


# ==============================
# ATS SCORE
# ==============================

ats_score = calculate_ats_score(role, skills)

print("\nATS Score:\n")

print(str(ats_score) + "%")


# ==============================
# MISSING SKILLS
# ==============================

missing_skills = find_missing_skills(role, skills)

print("\nMissing Skills:\n")

print(missing_skills)


# ==============================
# SUGGESTIONS
# ==============================

suggestions = generate_suggestions(

    role,
    missing_skills
)

print("\nSuggestions:\n")

for suggestion in suggestions:

    print("Skill:", suggestion["skill"])

    print("Suggestion:", suggestion["suggestion"])

    print()


# ==============================
# START VIDEO ANALYSIS
# ==============================

print("\nStarting Video Interview Analysis...\n")

video_thread = threading.Thread(

    target=start_video_analysis
)

video_thread.start()

time.sleep(3)


# ==============================
# START AI INTERVIEW
# ==============================

print("\n========== STARTING AI INTERVIEW ==========\n")
print("\n========Please answer every question=======\n")
print("\n========You will get 30 seconds to answer every question=========\n")

results = start_interview(skills)


# ==============================
# STOP CAMERA
# ==============================

camera_running = False

video_thread.join()


# ==============================
# CONFIDENCE SCORE
# ==============================

confidence_score = calculate_confidence(

    emotion_data
)

print("\nConfidence Score:\n")

print(str(confidence_score) + "%")


# ==============================
# FINAL REPORT
# ==============================

print("\n========== FINAL INTERVIEW REPORT ==========\n")

for result in results:

    print("Question:\n")

    print(result["question"])

    print()

    print("Candidate Answer:\n")

    print(result["answer"])

    print()

    print("AI Feedback:\n")

    print(result["feedback"])

    print("\n----------------------------------\n")


# ==============================
# FINAL SUMMARY
# ==============================

print("\n========== FINAL SUMMARY ==========\n")

print("Detected Role:", role)

print("ATS Score:", str(ats_score) + "%")

print("Confidence Score:", str(confidence_score) + "%")

print("\nInterview Completed Successfully!\n")
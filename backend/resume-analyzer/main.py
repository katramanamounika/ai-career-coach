from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

import pdfplumber

from ats import calculate_ats_score
from questions import QUESTION_DB


app = FastAPI()


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================
# ATS RESUME ANALYZER API
# =========================

@app.post("/analyze")

async def analyze_resume(
    file: UploadFile = File(...),
    role: str = Form(...)
):

    text = ""

    try:

        with pdfplumber.open(file.file) as pdf:

            for page in pdf.pages:

                extracted = page.extract_text()

                if extracted:
                    text += extracted

    except Exception as e:

        return {
            "error": str(e)
        }

    result = calculate_ats_score(text, role)

    return result


# =========================
# MOCK INTERVIEW API
# =========================

@app.get("/mock-interview/{role}/{difficulty}")

async def mock_interview(role: str, difficulty: str):

    try:

        questions = QUESTION_DB[role][difficulty]

        return {
            "success": True,
            "role": role,
            "difficulty": difficulty,
            "questions": questions
        }

    except Exception as e:

        return {
            "success": False,
            "message": str(e)
        }
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber

from ats import calculate_ats_score

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
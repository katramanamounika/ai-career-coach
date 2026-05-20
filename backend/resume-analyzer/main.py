from fastapi import FastAPI, UploadFile, File
import pdfplumber
from skills import extract_skills
from ats import calculate_ats_score,missing_skills
from suggestions import generate_suggestions

app = FastAPI()

@app.get("/")
def home():

    return {
        "message": "Resume Analyzer Running"
    }

@app.post("/upload-resume/")
async def upload_resume(file: UploadFile = File(...)):

    text = ""

    with pdfplumber.open(file.file) as pdf:

        for page in pdf.pages:

            page_text = page.extract_text()

            if page_text:
                text += page_text
    skills=extract_skills(text)
    score=calculate_ats_score(skills)
    missing=missing_skills(skills)
    suggestion=generate_suggestions(score)
    return {
        "resume_text": text,
        "skills": skills,
        "ats_score": score,
        "missing_skills": missing,
        "suggestion": suggestion
    }
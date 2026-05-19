from fastapi import FastAPI, UploadFile, File
import pdfplumber

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

    return {
        "resume_text": text
    }
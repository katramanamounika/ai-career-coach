from resume_parser import extract_resume_text
from skills import extract_skills
from role_detection import detect_role
from ats import calculate_ats_score
from skill_gap import find_missing_skills
from suggestions import generate_suggestions

resume_text = """

Python
FastAPI
SQL
Docker
AWS
"""

skills = extract_skills(resume_text)

print("Skills:", skills)

role = detect_role(skills)

print("Detected Role:", role)

ats = calculate_ats_score(role, skills)

print("ATS Score:", ats)

missing = find_missing_skills(role, skills)

print("Missing Skills:", missing)

suggestions = generate_suggestions(role, missing)

print("Suggestions:", suggestions)
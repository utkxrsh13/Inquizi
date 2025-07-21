from fastapi import FastAPI, UploadFile, File, HTTPException
from models import TextInput, QuizResponse
from services.file_parser import extract_text_from_pdf, extract_text_from_docx
from services.quiz_generator import generate_quiz_questions

app = FastAPI()  # Initialize FastAPI app

@app.get("/")  # Root endpoint
def root():
    return {"message": "Quiz Generator API is running"}

@app.post("/generate", response_model=QuizResponse) # Endpoint to generate quiz questions as text input
def generate_quiz(input: TextInput): #--->takes text input
    try:
        questions = generate_quiz_questions(input.content) # this function generates quiz questions
        return {"questions": questions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/upload", response_model=QuizResponse) # Endpoint to upload files and generate quiz questions
def upload_file(file: UploadFile = File(...)):
    filename = file.filename.lower()
    try:
        if filename.endswith(".pdf"):
            content = extract_text_from_pdf(file)
        elif filename.endswith(".docx"):
            content = extract_text_from_docx(file)
        else:
            raise HTTPException(status_code=400, detail="Unsupported file type")
        questions = generate_quiz_questions(content)
        return {"questions": questions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

from fastapi import FastAPI, UploadFile, File, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from models import TextInput, QuizResponse
from services.file_parser import extract_text_from_pdf, extract_text_from_docx
from services.quiz_generator import generate_quiz_questions

app = FastAPI()  # Initialize FastAPI app

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],  # Vite default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")  # Root endpoint
def root():
    return {"message": "Quiz Generator API is running"}

@app.post("/generate", response_model=QuizResponse) # Endpoint to generate quiz questions as text input
def generate_quiz(input: TextInput): #--->takes text input
    try:
        questions = generate_quiz_questions(input.content, input.question_count) # this function generates quiz questions
        return {"questions": questions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/upload", response_model=QuizResponse) # Endpoint to upload files and generate quiz questions
def upload_file(file: UploadFile = File(...), question_count: int = Form(default=5)):
    filename = file.filename.lower()
    try:
        # Validate question count
        if question_count < 1 or question_count > 10:
            raise HTTPException(status_code=400, detail="Question count must be between 1 and 10")
            
        if filename.endswith(".pdf"):
            content = extract_text_from_pdf(file)
        elif filename.endswith(".docx"):
            content = extract_text_from_docx(file)
        else:
            raise HTTPException(status_code=400, detail="Unsupported file type")
        questions = generate_quiz_questions(content, question_count)
        return {"questions": questions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

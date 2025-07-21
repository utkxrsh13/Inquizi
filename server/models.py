from pydantic import BaseModel
from typing import List, Optional

class TextInput(BaseModel):
    content: str

class Question(BaseModel):
    question: str
    options: Optional[List[str]] = None
    answer: Optional[str] = None

class QuizResponse(BaseModel):
    questions: List[Question]

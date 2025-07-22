from pydantic import BaseModel, Field
from typing import List, Optional

class TextInput(BaseModel):
    content: str
    question_count: Optional[int] = Field(default=5, ge=1, le=10, description="Number of questions to generate (1-10)")

class Question(BaseModel):
    question: str
    options: Optional[List[str]] = None
    answer: Optional[str] = None

class QuizResponse(BaseModel):
    questions: List[Question]

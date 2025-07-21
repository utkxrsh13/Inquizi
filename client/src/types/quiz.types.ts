export interface QuizRequest {
  content: string;
}

export interface Question {
  question: string;
  options?: string[];
  answer?: string;
}

export interface QuizResponse {
  questions: Question[];
}

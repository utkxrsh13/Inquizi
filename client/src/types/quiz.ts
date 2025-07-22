export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizResponse {
  questions: Question[];
}

export interface TextInput {
  content: string;
  question_count?: number;
}

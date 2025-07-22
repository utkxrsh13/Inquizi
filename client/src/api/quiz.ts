import type { QuizResponse, TextInput } from '../types/quiz';

const API_BASE_URL = 'http://localhost:8000';

export const quizApi = {
  async generateFromText(input: TextInput): Promise<QuizResponse> {
    const response = await fetch(`${API_BASE_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  async generateFromFile(file: File, questionCount: number = 5): Promise<QuizResponse> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('question_count', questionCount.toString());

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};

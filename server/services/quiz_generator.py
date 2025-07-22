import os
from huggingface_hub import InferenceClient
from dotenv import load_dotenv

load_dotenv()

client = InferenceClient(
    provider="together",
    api_key=os.getenv("HUGGINGFACEHUB_API_TOKEN")
)

def generate_quiz_questions(content: str, question_count: int = 5):
    prompt = f"""
You are an expert quiz maker. Based on the following content, generate exactly {question_count} multiple choice questions in this EXACT format:

Q1: [Question text here]
A) [Option A]
B) [Option B] 
C) [Option C]
D) [Option D]
Answer: [A/B/C/D]

Q2: [Question text here]
A) [Option A]
B) [Option B]
C) [Option C] 
D) [Option D]
Answer: [A/B/C/D]

Continue this pattern for all {question_count} questions. Make sure each question has exactly 4 options and a clear answer.

Content:
{content}
    """ 
    raw_output = client.chat.completions.create(
        model="moonshotai/Kimi-K2-Instruct",
        messages=[{"role": "user", "content": prompt}]
    ).choices[0].message.content

    questions = []
    # Split by question numbers Q1:, Q2:, etc.
    question_blocks = []
    lines = raw_output.split('\n')
    current_block = []
    
    for line in lines:
        if line.strip().startswith('Q') and ':' in line:
            if current_block:
                question_blocks.append('\n'.join(current_block))
            current_block = [line]
        else:
            current_block.append(line)
    
    if current_block:
        question_blocks.append('\n'.join(current_block))
    
    for block in question_blocks:
        if not block.strip():
            continue
            
        lines = [line.strip() for line in block.split('\n') if line.strip()]
        if len(lines) < 6:  # Need at least question + 4 options + answer
            continue
            
        # Extract question (remove Q1:, Q2:, etc.)
        question_line = lines[0]
        if ':' in question_line:
            question = question_line.split(':', 1)[1].strip()
        else:
            question = question_line.strip()
        
        # Extract options (A), B), C), D))
        options = []
        answer_line = ""
        
        for line in lines[1:]:
            if line.lower().startswith('answer:'):
                answer_line = line
                break
            elif any(line.startswith(f'{opt})') for opt in ['A', 'B', 'C', 'D']):
                options.append(line)
        
        # Extract answer
        answer = "---"
        if answer_line:
            answer_part = answer_line.replace('Answer:', '').strip()
            if answer_part in ['A', 'B', 'C', 'D']:
                answer = answer_part
        
        if len(options) == 4:  # Only add if we have exactly 4 options
            q_obj = {
                "question": question,
                "options": options,
                "answer": answer
            }
            questions.append(q_obj)
    
    # If parsing failed, return empty list or try a fallback
    if not questions:
        return [{
            "question": "Unable to generate questions from the provided content",
            "options": [
                "A) Content may be too short",
                "B) Content may not contain factual information", 
                "C) Try uploading a different file",
                "D) Check if the content is readable"
            ],
            "answer": "---"
        }]
    
    return questions[:question_count]  # Return requested number of questions
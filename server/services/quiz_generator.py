import os
from huggingface_hub import InferenceClient
from dotenv import load_dotenv

load_dotenv()

client = InferenceClient(
    provider="together",
    api_key=os.getenv("HUGGINGFACEHUB_API_TOKEN")
)

def generate_quiz_questions(content: str):
    prompt = f"Generate 5 MCQs with options A–D and answers:\n\n{content}"
    raw_output = client.chat.completions.create(
        model="moonshotai/Kimi-K2-Instruct",
        messages=[{"role": "user", "content": prompt}]
    ).choices[0].message["content"]

    questions = []
    raw_blocks = raw_output.split("MCQ")
    
    for block in raw_blocks:
        if not block.strip():
            continue
        lines = block.strip().split("\n")
        q_obj = {
            "question": lines[0].strip(),
            "options": [opt.strip() for opt in lines[1:5]],
            "answer": lines[-1].replace("Answer:", "").strip()
        }
        questions.append(q_obj)
    return questions

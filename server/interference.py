import os
from huggingface_hub import InferenceClient

from dotenv import load_dotenv
load_dotenv()

# Set your Hugging Face token here (securely load via env)
client = InferenceClient(
    model="distilgpt2",
    token=os.getenv("HUGGINGFACEHUB_API_TOKEN")  # Make sure HUGGINGFACEHUB_API_TOKEN is set
)

# Generate text
response = client.text_generation(prompt="Once upon a time,", max_new_tokens=50)

print(response)

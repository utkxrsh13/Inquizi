import fitz  # PyMuPDF
import docx

def extract_text_from_pdf(file) -> str:
    text = ""
    pdf = fitz.open(stream=file.file.read(), filetype="pdf")
    for page in pdf:
        text += page.get_text()
    return text

def extract_text_from_docx(file) -> str:
    doc = docx.Document(file.file)
    return "\n".join([para.text for para in doc.paragraphs])

# Test Question Count Functionality

## Summary of Changes

I've successfully added the ability for users to specify how many questions they want to generate (1-10 questions). Here's what was implemented:

### Backend Changes:

1. **Updated Models** (`models.py`):
   - Added `question_count` parameter to `TextInput` with validation (1-10 range)
   - Added Pydantic Field validation

2. **Enhanced Quiz Generator** (`quiz_generator.py`):
   - Modified function to accept `question_count` parameter
   - Updated prompt to dynamically request the specified number of questions
   - Updated return statement to limit results to requested count

3. **Updated API Endpoints** (`main.py`):
   - Modified `/generate` endpoint to use question count from request body
   - Modified `/upload` endpoint to accept question count as form parameter
   - Added validation for question count range (1-10)

### Frontend Changes:

1. **Updated Types** (`types/quiz.ts`):
   - Added optional `question_count` field to `TextInput` interface

2. **New Component** (`QuestionCountSelector.tsx`):
   - Dropdown selector for choosing 1-10 questions
   - Consistent styling and disabled state support

3. **Enhanced Text Input Form** (`TextInputForm.tsx`):
   - Added question count selector
   - Passes question count to submit handler

4. **Enhanced File Uploader** (`FileUploader.tsx`):
   - Added question count selector
   - Passes question count to file selection handler

5. **Updated API Service** (`api/quiz.ts`):
   - Modified to send question count in requests
   - Updated file upload to include question count as form data

6. **Updated Main App** (`App.tsx`):
   - Modified handlers to accept and use question count parameter

### Features Added:

- **Question Count Selection**: Users can choose 1-10 questions
- **Validation**: Backend validates the range (1-10)
- **Consistent UI**: Question count selector appears in both text and file input modes
- **Form Integration**: Question count is properly sent to backend
- **Responsive Design**: Selector fits well with existing UI

### How to Use:

1. **Text Input Mode**:
   - Select number of questions from dropdown (1-10)
   - Enter your text content
   - Click "Generate Quiz"

2. **File Upload Mode**:
   - Select number of questions from dropdown (1-10)
   - Upload your PDF/DOCX file
   - Quiz generates with specified number of questions

The feature is now fully functional and integrated with both input methods!

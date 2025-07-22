import React from 'react';
import QuestionCountSelector from './QuestionCountSelector';

interface TextInputFormProps {
  onSubmit: (text: string, questionCount: number) => void;
  isLoading: boolean;
}

const TextInputForm: React.FC<TextInputFormProps> = ({ onSubmit, isLoading }) => {
  const [text, setText] = React.useState('');
  const [questionCount, setQuestionCount] = React.useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length < 50) {
      alert('Please enter at least 50 characters to generate meaningful questions.');
      return;
    }
    onSubmit(text.trim(), questionCount);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <QuestionCountSelector 
        value={questionCount}
        onChange={setQuestionCount}
        disabled={isLoading}
      />
      
      <div>
        <label htmlFor="text-input" className="block text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Enter your text content
        </label>
        <div className="relative">
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text content here... Transform any content into an intelligent quiz! Minimum 50 characters required."
            rows={12}
            className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 resize-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 shadow-lg"
            disabled={isLoading}
            required
          />
          {text.length > 0 && (
            <div className="absolute top-4 right-4">
              <button
                type="button"
                onClick={handleClear}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
                disabled={isLoading}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${text.length >= 50 ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'} transition-colors`}></div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className={text.length >= 50 ? 'text-green-600 dark:text-green-400' : ''}>{text.length}</span> characters 
              {text.length > 0 && text.length < 50 && (
                <span className="text-amber-600 dark:text-amber-400 ml-1">(minimum 50 required)</span>
              )}
              {text.length >= 50 && (
                <span className="text-green-600 dark:text-green-400 ml-1">✓ Ready to generate</span>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          type="submit"
          disabled={isLoading || text.trim().length < 50}
          className="group flex-1 relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed font-semibold"
        >
          {isLoading ? (
            <span className="flex items-center justify-center space-x-3">
              <div className="relative">
                <div className="w-6 h-6 border-2 border-white/30 rounded-full animate-spin"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
              <span>Generating Quiz...</span>
            </span>
          ) : (
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Generate Quiz</span>
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </form>
  );
};

export default TextInputForm;

import React from 'react';

interface QuestionCountSelectorProps {
  value: number;
  onChange: (count: number) => void;
  disabled?: boolean;
}

const QuestionCountSelector: React.FC<QuestionCountSelectorProps> = ({ 
  value, 
  onChange, 
  disabled = false 
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <label htmlFor="question-count" className="text-sm font-semibold text-gray-800 dark:text-white">
            Number of Questions
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400">Choose how many questions to generate</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1 bg-white dark:bg-gray-800 rounded-xl p-1 shadow-lg">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <button
              key={num}
              type="button"
              onClick={() => onChange(num)}
              disabled={disabled}
              className={`w-8 h-8 rounded-lg font-semibold text-sm transition-all duration-200 ${
                value === num
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg transform scale-110'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {num}
            </button>
          ))}
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {value}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            question{value !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCountSelector;

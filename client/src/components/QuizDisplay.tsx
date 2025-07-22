import React from 'react';
import type { Question } from '../types/quiz';

interface QuizDisplayProps {
  questions: Question[];
  onReset: () => void;
}

const QuizDisplay: React.FC<QuizDisplayProps> = ({ questions, onReset }) => {
  const [selectedAnswers, setSelectedAnswers] = React.useState<Record<number, string>>({});
  const [showResults, setShowResults] = React.useState(false);

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer && question.answer !== '---') {
        correct++;
      }
    });
    return correct;
  };

  const getOptionLetter = (option: string) => {
    const match = option.match(/^([A-D])\)/);
    return match ? match[1] : '';
  };

  const getOptionText = (option: string) => {
    return option.replace(/^[A-D]\)\s*/, '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quiz Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              {questions.length} questions • AI Generated
            </p>
          </div>
          <button
            onClick={onReset}
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Generate New Quiz
          </button>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Question Header */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {questionIndex + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-relaxed">
                    {question.question}
                  </h3>
                </div>
              </div>
              
              {/* Options */}
              <div className="p-6 space-y-3">
                {question.options.map((option, optionIndex) => {
                  const optionLetter = getOptionLetter(option);
                  const optionText = getOptionText(option);
                  const isSelected = selectedAnswers[questionIndex] === optionLetter;
                  const isCorrect = question.answer === optionLetter && question.answer !== '---';
                  const isWrong = showResults && isSelected && !isCorrect && question.answer !== '---';
                  
                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(questionIndex, optionLetter)}
                      disabled={showResults}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                        isSelected
                          ? showResults
                            ? isCorrect
                              ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-300 shadow-green-200 dark:shadow-green-900/50 shadow-lg'
                              : isWrong
                              ? 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-300 shadow-red-200 dark:shadow-red-900/50 shadow-lg'
                              : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-800 dark:text-blue-300 shadow-blue-200 dark:shadow-blue-900/50 shadow-lg'
                            : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-800 dark:text-blue-300 shadow-blue-200 dark:shadow-blue-900/50 shadow-lg'
                          : showResults && isCorrect
                          ? 'bg-green-50 dark:bg-green-900/20 border-green-300 text-green-700 dark:text-green-400 shadow-lg'
                          : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 shadow-md hover:shadow-lg'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          isSelected && showResults && isCorrect
                            ? 'bg-green-500 text-white'
                            : isSelected && showResults && isWrong
                            ? 'bg-red-500 text-white'
                            : isSelected
                            ? 'bg-blue-500 text-white'
                            : showResults && isCorrect
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                        }`}>
                          {optionLetter}
                        </span>
                        <span className="flex-1">{optionText}</span>
                        {showResults && isCorrect && (
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        {showResults && isSelected && isWrong && (
                          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 text-sm">
                    <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium text-gray-600 dark:text-gray-300">Correct Answer:</span>
                    <span className="text-gray-800 dark:text-white">
                      {question.answer === '---' ? 'Answer not available' : `Option ${question.answer}`}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit/Results Section */}
        <div className="mt-12 text-center">
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={Object.keys(selectedAnswers).length === 0}
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Submit Quiz
              <div className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {Object.keys(selectedAnswers).length}/{questions.length}
              </div>
            </button>
          ) : (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Quiz Completed!
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
                  You scored <span className="font-bold text-blue-600 dark:text-blue-400">{calculateScore()}</span> out of{' '}
                  <span className="font-bold">{questions.filter(q => q.answer !== '---').length}</span> questions
                </p>
                {questions.some(q => q.answer === '---') && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Some questions had no definitive answers available
                  </p>
                )}
                
                {/* Score visualization */}
                <div className="mt-6 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${(calculateScore() / questions.filter(q => q.answer !== '---').length) * 100}%` 
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {Math.round((calculateScore() / questions.filter(q => q.answer !== '---').length) * 100)}% accuracy
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizDisplay;


import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FileUploader from './components/FileUploader';
import TextInputForm from './components/TextInputForm';
import QuizDisplay from './components/QuizDisplay';
import { quizApi } from './api/quiz';
import type { Question } from './types/quiz';

const App = () => {
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'text' | 'file'>('text');
  const [error, setError] = React.useState<string | null>(null);

  const handleTextSubmit = async (text: string, questionCount: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await quizApi.generateFromText({ content: text, question_count: questionCount });
      setQuestions(response.questions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate quiz from text');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (file: File, questionCount: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await quizApi.generateFromFile(file, questionCount);
      setQuestions(response.questions);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate quiz from file');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setQuestions([]);
    setError(null);
  };

  if (questions.length > 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <QuizDisplay questions={questions} onReset={handleReset} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {error && (
          <div className="mb-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl backdrop-blur-md">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-800 dark:text-red-200 font-medium">{error}</p>
            </div>
          </div>
        )}

        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Tab Navigation */}
          <div className="p-2 bg-gray-50 dark:bg-gray-700/50">
            <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-2xl">
              <button
                onClick={() => setActiveTab('text')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'text'
                    ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-white/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Text Input</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('file')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'file'
                    ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-lg transform scale-105'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-white/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <span>File Upload</span>
                </div>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'text' ? (
              <TextInputForm onSubmit={handleTextSubmit} isLoading={isLoading} />
            ) : (
              <FileUploader onFileSelect={handleFileUpload} isLoading={isLoading} />
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "Multiple Formats",
              description: "Support for PDF, DOCX files and direct text input with intelligent parsing",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "AI Powered",
              description: "Advanced AI generates contextual questions with perfect accuracy and relevance",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ),
              title: "Interactive Experience",
              description: "Real-time feedback, scoring system, and beautiful interactive quiz interface",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-center text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
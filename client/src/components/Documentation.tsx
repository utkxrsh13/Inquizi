import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Documentation: React.FC = () => {
  const sections = [
    {
      title: "Getting Started",
      icon: "🚀",
      items: [
        { title: "Quick Start Guide", description: "Get up and running with Inquizi in minutes" },
        { title: "Creating Your First Quiz", description: "Step-by-step tutorial for generating quizzes" },
        { title: "Understanding Quiz Types", description: "Learn about different question formats" }
      ]
    },
    {
      title: "Features",
      icon: "⚡",
      items: [
        { title: "Text Input Processing", description: "How to format and input text for best results" },
        { title: "File Upload Support", description: "Supported file formats and processing tips" },
        { title: "Question Customization", description: "Adjust question count and difficulty" }
      ]
    },
    {
      title: "Advanced Usage",
      icon: "🔧",
      items: [
        { title: "AI Model Parameters", description: "Fine-tune AI generation settings" },
        { title: "Batch Processing", description: "Generate multiple quizzes efficiently" },
        { title: "Export Options", description: "Save and share your generated quizzes" }
      ]
    },
    {
      title: "Troubleshooting",
      icon: "🛠️",
      items: [
        { title: "Common Issues", description: "Solutions to frequently encountered problems" },
        { title: "Error Messages", description: "Understanding and resolving error codes" },
        { title: "Performance Tips", description: "Optimize your quiz generation experience" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about using Inquizi to create amazing AI-powered quizzes.
            </p>
            <div className="flex justify-center">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Try Inquizi Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{section.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group cursor-pointer">
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {item.description}
                        </p>
                        <div className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more →
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Need More Help?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              to="/api-reference"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">API Reference</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Detailed API documentation for developers</p>
            </Link>
            <Link
              to="/contact-support"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Contact Support</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Get help from our support team</p>
            </Link>
            <a
              href="https://github.com/utkxrsh13/Inquizi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-2xl mb-3">🐙</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">View source code and contribute</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const APIReference: React.FC = () => {
  const endpoints = [
    {
      method: "POST",
      endpoint: "/api/generate",
      description: "Generate quiz questions from text content",
      parameters: [
        { name: "content", type: "string", required: true, description: "The text content to generate questions from" },
        { name: "question_count", type: "number", required: false, description: "Number of questions to generate (1-10, default: 5)" }
      ],
      response: {
        questions: [
          {
            question: "What is the main topic of this content?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            answer: "A"
          }
        ]
      }
    },
    {
      method: "POST",
      endpoint: "/api/upload",
      description: "Upload and process document files (PDF, DOCX)",
      parameters: [
        { name: "file", type: "file", required: true, description: "The document file to process" },
        { name: "question_count", type: "number", required: false, description: "Number of questions to generate (1-10, default: 5)" }
      ],
      response: {
        questions: [
          {
            question: "Based on the document, what is...?",
            options: ["Option A", "Option B", "Option C", "Option D"],
            answer: "B"
          }
        ]
      }
    }
  ];

  const codeExamples = [
    {
      language: "JavaScript",
      title: "Generate Quiz from Text",
      code: `fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    content: 'Your text content here...',
    question_count: 5
  })
})
.then(response => response.json())
.then(data => console.log(data));`
    },
    {
      language: "Python",
      title: "Upload File and Generate Quiz",
      code: `import requests

url = 'http://localhost:8000/api/upload'
files = {'file': open('document.pdf', 'rb')}
data = {'question_count': 3}

response = requests.post(url, files=files, data=data)
quiz_data = response.json()
print(quiz_data)`
    },
    {
      language: "cURL",
      title: "Text-based Quiz Generation",
      code: `curl -X POST http://localhost:8000/api/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Your educational content here...",
    "question_count": 5
  }'`
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
              API Reference
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Complete API documentation for integrating Inquizi's AI-powered quiz generation into your applications.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/documentation"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Documentation
              </Link>
              <a
                href="https://github.com/utkxrsh13/Inquizi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Base URL */}
      <section className="py-12 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Base URL</h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 font-mono text-sm">
              <span className="text-blue-600 dark:text-blue-400">http://localhost:8000</span>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            API Endpoints
          </h2>
          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      endpoint.method === 'POST' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-lg font-mono text-gray-900 dark:text-white">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {endpoint.description}
                  </p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Parameters</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <th className="text-left py-2 text-gray-900 dark:text-white">Name</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Type</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Required</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.parameters.map((param, paramIndex) => (
                          <tr key={paramIndex} className="border-b border-gray-100 dark:border-gray-700">
                            <td className="py-2 font-mono text-blue-600 dark:text-blue-400">{param.name}</td>
                            <td className="py-2 text-gray-600 dark:text-gray-300">{param.type}</td>
                            <td className="py-2">
                              <span className={`px-2 py-1 rounded text-xs ${
                                param.required 
                                  ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                              }`}>
                                {param.required ? 'Required' : 'Optional'}
                              </span>
                            </td>
                            <td className="py-2 text-gray-600 dark:text-gray-300">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 mt-8">Response Example</h4>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-800 dark:text-gray-200">
                      <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Code Examples
          </h2>
          <div className="grid lg:grid-cols-1 gap-8">
            {codeExamples.map((example, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {example.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                      {example.language}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIReference;

import React, { useState } from 'react';
import Footer from './Footer';

const PressKit: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, item: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const companyInfo = {
    name: "Inquizi",
    tagline: "AI-Powered Quiz Generation Platform",
    founded: "2024",
    headquarters: "San Francisco, CA (Remote-First)",
    employees: "25+",
    website: "https://inquizi.com",
    email: "press@inquizi.com"
  };

  const keyStats = [
    { label: "Active Users", value: "50,000+" },
    { label: "Quizzes Generated", value: "500,000+" },
    { label: "Educational Institutions", value: "1,200+" },
    { label: "Countries Served", value: "25+" },
    { label: "Average Time Saved", value: "75%" },
    { label: "User Satisfaction", value: "4.8/5" }
  ];

  const logoAssets = [
    {
      name: "Primary Logo (Light)",
      description: "Main logo for light backgrounds",
      format: "PNG, SVG",
      size: "High Resolution"
    },
    {
      name: "Primary Logo (Dark)",
      description: "Main logo for dark backgrounds",
      format: "PNG, SVG",
      size: "High Resolution"
    },
    {
      name: "Logo Mark",
      description: "Icon only version",
      format: "PNG, SVG",
      size: "Multiple Sizes"
    },
    {
      name: "Horizontal Logo",
      description: "Wide format logo",
      format: "PNG, SVG",
      size: "High Resolution"
    }
  ];

  const brandColors = [
    { name: "Primary Blue", hex: "#3B82F6", rgb: "59, 130, 246" },
    { name: "Secondary Purple", hex: "#8B5CF6", rgb: "139, 92, 246" },
    { name: "Accent Teal", hex: "#06B6D4", rgb: "6, 182, 212" },
    { name: "Success Green", hex: "#10B981", rgb: "16, 185, 129" },
    { name: "Dark Gray", hex: "#1F2937", rgb: "31, 41, 55" },
    { name: "Light Gray", hex: "#F9FAFB", rgb: "249, 250, 251" }
  ];

  const screenshots = [
    {
      title: "Dashboard Overview",
      description: "Main user interface showing quiz generation options"
    },
    {
      title: "Quiz Generation",
      description: "AI-powered question generation from text input"
    },
    {
      title: "File Upload Interface",
      description: "Document upload and processing workflow"
    },
    {
      title: "Quiz Results",
      description: "Generated quiz with multiple-choice questions"
    },
    {
      title: "Dark Mode Interface",
      description: "Complete dark theme experience"
    },
    {
      title: "Mobile Responsive",
      description: "Optimized mobile user experience"
    }
  ];

  const executiveTeam = [
    {
      name: "Utkarsh Sharma",
      title: "Founder & CEO",
      bio: "Passionate developer and educator with expertise in AI/ML and full-stack development. Leading the mission to revolutionize education through technology.",
      linkedin: "https://www.linkedin.com/in/utkxrsh13/",
      github: "https://github.com/utkxrsh13"
    }
  ];

  const pressReleases = [
    {
      date: "December 2024",
      title: "Inquizi Launches AI-Powered Quiz Generation Platform",
      description: "Revolutionary platform uses artificial intelligence to automatically generate educational quizzes from any text content."
    },
    {
      date: "November 2024",
      title: "Inquizi Raises Pre-Seed Funding to Transform EdTech",
      description: "Company secures initial funding to accelerate development and expand team."
    }
  ];

  const boilerplate = `About Inquizi

Inquizi is an AI-powered educational technology platform that revolutionizes quiz creation for educators, trainers, and content creators. Founded in 2024, our platform uses advanced artificial intelligence to automatically generate high-quality multiple-choice questions from any text content or uploaded documents.

Our mission is to save educators time while improving learning outcomes through intelligent, personalized quiz generation. With over 50,000 active users and 500,000+ quizzes generated, Inquizi serves educational institutions, corporate training programs, and individual educators across 25+ countries.

Key features include:
• AI-powered question generation from text and documents
• Support for PDF and DOCX file uploads
• Customizable question count and difficulty levels
• Real-time quiz generation and instant results
• Modern, responsive design with dark/light mode
• Enterprise-grade security and privacy protection

Inquizi is headquartered in San Francisco, CA, and operates as a remote-first company with team members across multiple countries.

For more information, visit https://inquizi.com or contact press@inquizi.com.`;

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
              Press Kit
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Download brand assets, company information, and media resources for Inquizi.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full Kit
              </button>
              <a
                href="mailto:press@inquizi.com"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Press
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Company Overview
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(companyInfo).map(([key, value]) => (
              <div key={key} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </h3>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Statistics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyStats.map((stat, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Brand Assets
          </h2>
          
          {/* Logo Assets */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Logo Downloads
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {logoAssets.map((asset, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg h-24 mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">LOGO</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {asset.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {asset.description}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    {asset.format} • {asset.size}
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Brand Colors
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandColors.map((color, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
                  <div 
                    className="w-full h-16 rounded-lg mb-4"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {color.name}
                  </h4>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">HEX</span>
                      <button
                        onClick={() => copyToClipboard(color.hex, `hex-${index}`)}
                        className="text-sm font-mono text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {copiedItem === `hex-${index}` ? 'Copied!' : color.hex}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-300">RGB</span>
                      <button
                        onClick={() => copyToClipboard(color.rgb, `rgb-${index}`)}
                        className="text-sm font-mono text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {copiedItem === `rgb-${index}` ? 'Copied!' : color.rgb}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Product Screenshots
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 h-48 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg">Screenshot Preview</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {screenshot.description}
                  </p>
                  <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                    Download HD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Executive Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveTeam.map((exec, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{exec.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exec.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-4">
                    {exec.title}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {exec.bio}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={exec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href={exec.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Recent Press Releases
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {release.date}
                  </span>
                  <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    Download PDF
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {release.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {release.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Boilerplate */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Company Boilerplate
          </h2>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Standard Company Description
              </h3>
              <button
                onClick={() => copyToClipboard(boilerplate, 'boilerplate')}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                {copiedItem === 'boilerplate' ? 'Copied!' : 'Copy Text'}
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans leading-relaxed">
                {boilerplate}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressKit;

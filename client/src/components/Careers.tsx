import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Careers: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build cutting-edge AI-powered educational tools. Work with React, TypeScript, Python, and machine learning technologies.",
      requirements: [
        "5+ years of full-stack development experience",
        "Proficiency in React, TypeScript, Node.js",
        "Experience with Python and AI/ML frameworks",
        "Strong understanding of modern web technologies",
        "Experience with cloud platforms (AWS, GCP, Azure)"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop and improve our AI models for intelligent quiz generation. Work on natural language processing, machine learning, and deep learning projects.",
      requirements: [
        "3+ years of ML/AI experience",
        "Strong background in NLP and text processing",
        "Experience with Python, TensorFlow, PyTorch",
        "Knowledge of transformer models and LLMs",
        "PhD or Master's in Computer Science, ML, or related field preferred"
      ]
    },
    {
      id: 3,
      title: "Product Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "4+ years",
      description: "Design intuitive and engaging user experiences for our educational platform. Work closely with engineering and product teams to create beautiful, functional interfaces.",
      requirements: [
        "4+ years of product design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Strong portfolio demonstrating UX/UI skills",
        "Experience with design systems and accessibility",
        "Background in EdTech or SaaS products preferred"
      ]
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "3+ years",
      description: "Lead our marketing efforts to grow user acquisition and engagement. Develop and execute marketing strategies across digital channels.",
      requirements: [
        "3+ years of digital marketing experience",
        "Experience with content marketing and SEO",
        "Strong analytical skills and data-driven mindset",
        "Knowledge of marketing automation tools",
        "EdTech or B2B SaaS marketing experience preferred"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment systems. Ensure scalability, security, and reliability of our platform.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Experience with AWS, Docker, Kubernetes",
        "Strong knowledge of CI/CD pipelines",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Monitoring and logging experience (DataDog, ELK stack)"
      ]
    },
    {
      id: 6,
      title: "Customer Success Specialist",
      department: "Customer Success",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "2+ years",
      description: "Help our customers succeed with Inquizi. Provide onboarding, training, and ongoing support to ensure customer satisfaction and retention.",
      requirements: [
        "2+ years of customer success experience",
        "Excellent communication and interpersonal skills",
        "Experience with SaaS products and educational tools",
        "Problem-solving mindset and attention to detail",
        "Background in education or training preferred"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and strong remote collaboration tools."
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Competitive salary, equity packages, and performance-based bonuses."
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend."
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and internal training programs."
    },
    {
      icon: "🌴",
      title: "Unlimited PTO",
      description: "Unlimited paid time off with a minimum vacation requirement to ensure work-life balance."
    },
    {
      icon: "🚀",
      title: "Growth Opportunities",
      description: "Rapid career advancement in a fast-growing company with mentorship programs."
    }
  ];

  const departments = [
    { value: 'all', label: 'All Departments' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Design', label: 'Design' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Customer Success', label: 'Customer Success' }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

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
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Help us revolutionize education with AI-powered tools. Build the future of learning with a passionate, innovative team.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#openings"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                </svg>
                View Open Positions
              </a>
              <Link
                to="/contact-support"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're building the future of education technology with a team that values innovation, collaboration, and making a real impact on learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Team Members</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">8</div>
              <div className="text-gray-600 dark:text-gray-300">Countries</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-300">Remote-Friendly</div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">4.9</div>
              <div className="text-gray-600 dark:text-gray-300">Glassdoor Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Find your next opportunity and help shape the future of education.
            </p>

            {/* Department Filter */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg p-2">
                <div className="flex space-x-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.value}
                      onClick={() => setSelectedDepartment(dept.value)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedDepartment === dept.value
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {dept.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Requirements:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6 lg:flex-shrink-0">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No openings in {departments.find(d => d.value === selectedDepartment)?.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Don't see a perfect fit? We're always looking for talented people.
              </p>
              <Link
                to="/contact-support"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join us in revolutionizing education with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:careers@inquizi.com"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Your Resume
              </a>
              <a
                href="https://www.linkedin.com/in/utkxrsh13/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using Inquizi. By using our service, you agree to these terms.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Welcome to Inquizi! These Terms of Service ("Terms") govern your use of the Inquizi platform and services ("Service") operated by Inquizi Inc. ("we," "us," or "our").
                </p>
                <p>
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                </p>
                <p>
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Inquizi is an AI-powered platform that generates quiz questions from text content and uploaded documents. Our Service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Text-based quiz generation from user-provided content</li>
                  <li>Document upload and processing (PDF, DOCX formats)</li>
                  <li>Customizable quiz parameters (question count, difficulty)</li>
                  <li>Real-time quiz generation and results display</li>
                  <li>User account management and preferences</li>
                  <li>Dark/light mode interface options</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of the Service at any time with or without notice.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Creation</h3>
                <p>
                  To access certain features of the Service, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Account Termination</h3>
                <p>
                  You may terminate your account at any time. We reserve the right to suspend or terminate accounts that violate these Terms or for any other reason at our sole discretion.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Acceptable Use</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree NOT to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Upload or submit content that is illegal, harmful, threatening, abusive, or offensive</li>
                  <li>Violate any applicable local, state, national, or international law</li>
                  <li>Infringe upon intellectual property rights of others</li>
                  <li>Transmit malicious code, viruses, or other harmful computer code</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Use the Service for commercial purposes without explicit permission</li>
                  <li>Submit copyrighted material without proper authorization</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use automated scripts or bots to access the Service</li>
                  <li>Reverse engineer or attempt to extract our AI models</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Content and Intellectual Property</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Content</h3>
                <p>
                  You retain ownership of any content you submit to our Service. By submitting content, you grant us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A non-exclusive license to process your content for quiz generation</li>
                  <li>The right to use anonymized content data to improve our AI models</li>
                  <li>Permission to store and process your content as necessary to provide the Service</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Intellectual Property</h3>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of Inquizi Inc. and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Generated Content</h3>
                <p>
                  Quiz questions generated by our AI are provided to you for your use. However, we cannot guarantee the originality or accuracy of generated content, and you are responsible for reviewing and validating all generated material.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Privacy and Data Protection</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  By using the Service, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.
                </p>
                <p>
                  We implement appropriate security measures to protect your data, but cannot guarantee absolute security of information transmitted over the internet.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Payment Terms</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Currently, Inquizi offers free access to our basic services. If we introduce paid plans in the future:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment terms will be clearly disclosed before purchase</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We reserve the right to change pricing with advance notice</li>
                  <li>Failure to pay fees may result in service suspension</li>
                </ul>
                <p>
                  Any future payment terms will be subject to separate agreement and these Terms of Service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Service Availability</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We strive to maintain high service availability, but we do not guarantee uninterrupted access to the Service. The Service may be temporarily unavailable due to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Scheduled maintenance and updates</li>
                  <li>Technical difficulties or system failures</li>
                  <li>Network or internet connectivity issues</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
                <p>
                  We will make reasonable efforts to provide advance notice of scheduled maintenance.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Disclaimers and Limitations of Liability</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Disclaimer</h3>
                <p>
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI-Generated Content</h3>
                <p>
                  We do not guarantee the accuracy, completeness, or quality of AI-generated quiz questions. Users are responsible for reviewing and validating all generated content before use.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Limitation of Liability</h3>
                <p>
                  IN NO EVENT SHALL INQUIZI INC. BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Indemnification</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  You agree to defend, indemnify, and hold harmless Inquizi Inc., its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your use of and access to the Service</li>
                  <li>Your violation of any term of these Terms</li>
                  <li>Your violation of any third-party right, including intellectual property rights</li>
                  <li>Any claim that your content caused damage to a third party</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Governing Law and Jurisdiction</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in San Francisco County, California.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Changes to Terms</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Severability</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. This Terms of Service constitutes the entire agreement between us regarding our Service.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Contact Information</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                  <p><strong>Email:</strong> legal@inquizi.com</p>
                  <p><strong>General Contact:</strong> support@inquizi.com</p>
                  <p><strong>Address:</strong> Inquizi Inc., San Francisco, CA, United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 text-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Related Policies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Privacy Policy
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/cookie-policy"
                  className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Cookie Policy
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/contact-support"
                  className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Contact Support
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;

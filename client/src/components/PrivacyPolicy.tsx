import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
                <p>
                  When you use Inquizi, we may collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Email address (for account creation and communication)</li>
                  <li>Name (if provided during account setup)</li>
                  <li>Profile information (if you choose to complete your profile)</li>
                  <li>Usage data and preferences</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Data</h3>
                <p>
                  We collect and process content you provide to generate quizzes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Text content you input for quiz generation</li>
                  <li>Uploaded documents (PDF, DOCX files)</li>
                  <li>Generated quiz questions and answers</li>
                  <li>Quiz settings and preferences</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Information</h3>
                <p>
                  We automatically collect certain technical information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Usage patterns and interaction data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Provision:</strong> To provide, maintain, and improve our quiz generation services</li>
                  <li><strong>AI Processing:</strong> To process your content through our AI models to generate quiz questions</li>
                  <li><strong>Account Management:</strong> To create and manage your account, authenticate users, and provide customer support</li>
                  <li><strong>Communication:</strong> To send service-related notifications, updates, and respond to inquiries</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns and improve our platform's functionality and user experience</li>
                  <li><strong>Security:</strong> To detect, prevent, and address technical issues and security vulnerabilities</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform (e.g., cloud hosting, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                  <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users or others</li>
                  <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We implement appropriate technical and organizational security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and monitoring</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure cloud infrastructure with industry-standard protections</li>
                  <li>Regular backup and disaster recovery procedures</li>
                </ul>
                <p>
                  While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Data Retention</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Account Data:</strong> Retained while your account is active and for a reasonable period after account deletion</li>
                  <li><strong>Content Data:</strong> Processed content may be retained to improve our AI models, subject to anonymization</li>
                  <li><strong>Usage Data:</strong> Typically retained for up to 24 months for analytics and improvement purposes</li>
                  <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights and Choices</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@inquizi.com. We will respond to your request within 30 days.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with your consent)</li>
                </ul>
                <p>
                  You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect site functionality.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. International Data Transfers</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Standard contractual clauses approved by regulatory authorities</li>
                  <li>Adequacy decisions by relevant data protection authorities</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Other appropriate safeguards as required by applicable law</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
                <p>
                  For users between 13 and 18, we recommend parental guidance when using our services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to This Policy</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification to registered users</li>
                  <li>Displaying a prominent notice on our platform</li>
                </ul>
                <p>
                  Your continued use of our services after the effective date of the updated policy constitutes acceptance of the changes.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Information</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                  <p><strong>Email:</strong> privacy@inquizi.com</p>
                  <p><strong>General Contact:</strong> support@inquizi.com</p>
                  <p><strong>Address:</strong> Inquizi Inc., San Francisco, CA, United States</p>
                </div>
                <p>
                  We are committed to resolving any privacy concerns promptly and transparently.
                </p>
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
                  to="/terms-of-service"
                  className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Terms of Service
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

export default PrivacyPolicy;

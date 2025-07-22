import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CookiePolicy: React.FC = () => {
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
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Learn about how we use cookies and similar technologies to enhance your experience on Inquizi.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. What Are Cookies?</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Cookies are small text files that are stored on your device (computer, mobile phone, or other device) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p>
                  Cookies allow websites to remember your preferences, login status, and other information that makes your browsing experience more convenient and personalized.
                </p>
                <p>
                  Similar technologies include web beacons, pixels, local storage, and session storage, which serve similar purposes to cookies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Cookies</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Inquizi uses cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keep you logged in to your account</li>
                  <li>Remember your preferences (theme, language, settings)</li>
                  <li>Analyze how our website is used and improve our services</li>
                  <li>Provide security and prevent fraud</li>
                  <li>Deliver relevant content and advertisements</li>
                  <li>Enable social media features and integrations</li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Essential Cookies</h3>
                  <p className="mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and authentication.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <th className="text-left py-2 text-gray-900 dark:text-white">Cookie Name</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Purpose</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">session_id</td>
                          <td className="py-2">Maintains user session</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">csrf_token</td>
                          <td className="py-2">Security protection</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono">auth_token</td>
                          <td className="py-2">User authentication</td>
                          <td className="py-2">30 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Preference Cookies</h3>
                  <p className="mb-3">
                    These cookies remember your choices and preferences to provide a more personalized experience.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <th className="text-left py-2 text-gray-900 dark:text-white">Cookie Name</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Purpose</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">theme_preference</td>
                          <td className="py-2">Dark/light mode setting</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">language_pref</td>
                          <td className="py-2">Language selection</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono">quiz_settings</td>
                          <td className="py-2">Default quiz preferences</td>
                          <td className="py-2">90 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Analytics Cookies</h3>
                  <p className="mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <th className="text-left py-2 text-gray-900 dark:text-white">Cookie Name</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Purpose</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">_ga</td>
                          <td className="py-2">Google Analytics tracking</td>
                          <td className="py-2">2 years</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">_gid</td>
                          <td className="py-2">Google Analytics session</td>
                          <td className="py-2">24 hours</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono">_gat</td>
                          <td className="py-2">Google Analytics throttling</td>
                          <td className="py-2">1 minute</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Marketing Cookies</h3>
                  <p className="mb-3">
                    These cookies track your browsing habits to deliver advertisements that are relevant to you and your interests.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-600">
                          <th className="text-left py-2 text-gray-900 dark:text-white">Cookie Name</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Purpose</th>
                          <th className="text-left py-2 text-gray-900 dark:text-white">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">_fbp</td>
                          <td className="py-2">Facebook Pixel tracking</td>
                          <td className="py-2">90 days</td>
                        </tr>
                        <tr className="border-b border-gray-100 dark:border-gray-600">
                          <td className="py-2 font-mono">_linkedin_tracking</td>
                          <td className="py-2">LinkedIn advertising</td>
                          <td className="py-2">30 days</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-mono">utm_campaign</td>
                          <td className="py-2">Campaign tracking</td>
                          <td className="py-2">30 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Third-Party Cookies</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We may use third-party services that set their own cookies on our website. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Fonts:</strong> For web font delivery</li>
                  <li><strong>Cloudflare:</strong> For content delivery and security</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and login features</li>
                  <li><strong>Customer Support Tools:</strong> For chat and support functionality</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and cookie policies. We recommend reviewing their policies to understand how they use cookies.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Browser Settings</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                  <li>Receive notifications when cookies are set</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Browser-Specific Instructions</h3>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
                  <div>
                    <strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                  </div>
                  <div>
                    <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                  </div>
                  <div>
                    <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                  </div>
                  <div>
                    <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cookie Consent Management</h3>
                <p>
                  We provide a cookie consent banner when you first visit our website. You can modify your preferences at any time by clicking the "Cookie Settings" link in our footer.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-blue-800 dark:text-blue-200">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for the site to function properly.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Opt-Out Options</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  For specific types of tracking, you can opt out through these services:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span><strong>Google Analytics:</strong> Opt out of analytics tracking</span>
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Opt Out
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span><strong>Facebook:</strong> Manage ad preferences</span>
                    <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Manage
                    </a>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span><strong>LinkedIn:</strong> Control advertising preferences</span>
                    <a href="https://www.linkedin.com/psettings/advertising" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      Control
                    </a>
                  </div>
                </div>

                <p>
                  You can also visit the Digital Advertising Alliance's opt-out page to manage preferences for participating advertising networks.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Mobile App Tracking</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If we develop mobile applications in the future, similar tracking technologies may be used. Mobile-specific opt-out options include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>iOS:</strong> Settings → Privacy & Security → Tracking → Allow Apps to Request to Track</li>
                  <li><strong>Android:</strong> Settings → Privacy → Ads → Opt out of Ads Personalization</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data Retention</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Different types of cookies are retained for different periods:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain until they expire or you delete them</li>
                  <li><strong>Analytics Data:</strong> Typically retained for 26 months (Google Analytics default)</li>
                  <li><strong>Marketing Data:</strong> Varies by service, typically 30-90 days</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Updates to This Policy</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last updated" date at the top of this policy</li>
                  <li>Displaying a notice on our website</li>
                  <li>Sending email notifications for significant changes</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Contact Us</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-2">
                  <p><strong>Email:</strong> privacy@inquizi.com</p>
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
                  to="/terms-of-service"
                  className="inline-flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Terms of Service
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

export default CookiePolicy;

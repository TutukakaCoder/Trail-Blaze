import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Trail Blazers',
  description: 'Trail Blazers privacy policy and data protection information.'
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Return Home Button */}
      <Link 
        href="/" 
        className="fixed top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Return to homepage"
      >
        <Home className="h-6 w-6 text-white" />
      </Link>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: January 30, 2025</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p>
                Trail Blazers ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our website, community platform, and services 
                (collectively, the "Services").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.1 Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Professional and business information</li>
                  <li>LinkedIn profile information</li>
                  <li>Communication preferences</li>
                  <li>User-generated content in our community platform</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.2 Information Automatically Collected</h3>
                  <ul className="list-disc pl-6 space-y-2">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and preferences</li>
                  <li>Cookies and similar technologies</li>
                  <li>Analytics data</li>
                </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.3 Business and Research Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Market analysis and research data</li>
                    <li>Business performance metrics</li>
                    <li>Strategic planning information</li>
                    <li>Other business-related data shared through our Services</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our Services</li>
                  <li>Personalize user experience</li>
                  <li>Process transactions</li>
                  <li>Send administrative information</li>
                  <li>Maintain our community platform</li>
                  <li>Conduct research and analysis</li>
                  <li>Ensure platform security</li>
                  <li>Comply with legal obligations</li>
                </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">4. Information Sharing</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.1 We May Share Information With:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers and partners</li>
                    <li>Professional advisors</li>
                    <li>Law enforcement when required</li>
                    <li>Other users (based on your privacy settings)</li>
                    <li>Future business transferees</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.2 We Do Not Sell Your Information</h3>
                  <p>We do not sell, rent, or trade your personal information to third parties for commercial purposes.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage</li>
                <li>Employee training</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">6. Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Control cookie preferences</li>
                <li>Export your data</li>
                <li>Modify privacy settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">7. Data Retention</h2>
              <p>We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide our Services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">8. International Data Transfers</h2>
              <p>
                We may transfer your information to other countries with different data protection 
                laws. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">9. Children's Privacy</h2>
              <p>
                Our Services are not intended for children under 13. We do not knowingly collect 
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">10. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any material 
                changes through our Services or via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">11. Cookies</h2>
              <p>Our detailed cookie policy explains:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Types of cookies we use</li>
                <li>How cookies are used</li>
                <li>How to control cookie preferences</li>
                <li>Third-party cookie usage</li>
              </ul>
            </section>

            {/* Section 11 - Additional Rights for Specific Regions */}
            <section>
              <h2 className="text-2xl font-bold text-white">11. Additional Rights for Specific Regions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">11.1 European Economic Area (EEA)</h3>
                  <p>Additional rights under GDPR include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to data portability</li>
                    <li>Right to restrict processing</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">11.2 California Residents</h3>
                  <p>Additional rights under CCPA include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to know if personal information is disclosed or sold</li>
                    <li>Right to opt-out of the sale of personal information</li>
                    <li>Right to request deletion of personal information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 12 - Business Data Processing */}
            <section>
              <h2 className="text-2xl font-bold text-white">12. Business Data Processing</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">12.1 Research and Analysis</h3>
                  <p>We process business data to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide market insights</li>
                    <li>Conduct industry analysis</li>
                    <li>Generate strategic recommendations</li>
                    <li>Support decision-making</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">12.2 Data Protection Measures</h3>
                  <p>We implement additional security measures for business data:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Confidentiality agreements</li>
                    <li>Access restrictions</li>
                    <li>Secure processing environments</li>
                    <li>Data minimization practices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 13 - Community Platform Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-white">13. Community Platform Privacy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">13.1 User Interactions</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Public vs. private information</li>
                    <li>Community guidelines</li>
                    <li>Content moderation practices</li>
                    <li>User privacy controls</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">13.2 Network Privacy</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Connection visibility settings</li>
                    <li>Message privacy</li>
                    <li>Profile visibility options</li>
                    <li>Data sharing controls</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 14 - Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white">14. Contact Information</h2>
              <div className="bg-slate-800 p-6 rounded-lg">
                <p className="mb-4">For privacy-related questions:</p>
                <p>
                  <span className="font-semibold">Email: </span>
                  <a 
                    href="mailto:paul@trail-blaze.ai" 
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    paul@trail-blaze.ai
                  </a>
                </p>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
} 
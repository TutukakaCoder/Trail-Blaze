import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Trail Blazers',
  description: 'Trail Blazers terms of service and user agreement.'
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last Updated: January 30, 2025</p>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using Trail Blazers' website, community platform, and services 
                (collectively, the "Services"), you agree to be bound by these Terms of Service 
                ("Terms"). If you disagree with any part of these terms, you may not access 
                the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">2. Services Description</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.1 Service Offerings</h3>
                  <ul className="list-disc pl-6 space-y-2">
                  <li>Strategic consulting services</li>
                  <li>Market research and analysis</li>
                  <li>Community platform access</li>
                  <li>Business intelligence tools</li>
                  <li>Educational resources</li>
                  <li>Networking opportunities</li>
                </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">2.2 Service Limitations</h3>
                  <ul className="list-disc pl-6 space-y-2">
                  <li>Services availability may vary by region</li>
                  <li>Some features require paid subscription</li>
                  <li>Access levels may be restricted based on membership type</li>
                  <li>Service quality dependent on user's internet connection</li>
                </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">3. User Accounts</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3.1 Account Creation</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Must provide accurate information</li>
                    <li>Responsible for maintaining account security</li>
                    <li>One account per individual/entity</li>
                    <li>Must be 18 or older to create account</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">3.2 Account Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintain confidentiality of credentials</li>
                    <li>Notify us of unauthorized access</li>
                    <li>Update account information as needed</li>
                    <li>Comply with community guidelines</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 - User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-white">4. User Conduct</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.1 Acceptable Use</h3>
                  <p>Users agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Comply with all applicable laws</li>
                    <li>Respect intellectual property rights</li>
                    <li>Maintain professional conduct</li>
                    <li>Provide accurate information</li>
                    <li>Protect account security</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">4.2 Prohibited Activities</h3>
                  <p>Users must not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any laws or regulations</li>
                    <li>Harass or discriminate against others</li>
                    <li>Share confidential information</li>
                    <li>Impersonate others</li>
                    <li>Manipulate platform features</li>
                    <li>Distribute malware or harmful code</li>
                    <li>Engage in unauthorized access</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 - Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5.1 Our Rights</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Services content is our property</li>
                    <li>Trademarks and logos are protected</li>
                    <li>Platform features are proprietary</li>
                    <li>Research and analysis are owned by us</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">5.2 User Content</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Users retain rights to their content</li>
                    <li>Grant us license to use content</li>
                    <li>Must have rights to shared content</li>
                    <li>Content removal at our discretion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 - Payment Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white">6. Payment Terms</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.1 Fees and Payments</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fees specified in service agreements</li>
                    <li>Payment methods and processing</li>
                    <li>Refund and cancellation policies</li>
                    <li>Late payment consequences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.2 Subscription Terms</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Subscription periods and renewal</li>
                    <li>Cancellation procedures</li>
                    <li>Price change notifications</li>
                    <li>Payment dispute resolution</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 - Termination */}
            <section>
              <h2 className="text-2xl font-bold text-white">7. Termination</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7.1 Account Termination</h3>
                  <p>We may terminate or suspend access to our Services:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For Terms violations</li>
                    <li>For illegal activities</li>
                    <li>For prolonged inactivity</li>
                    <li>At our discretion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">7.2 Effect of Termination</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access revocation</li>
                    <li>Content removal</li>
                    <li>Data retention policies</li>
                    <li>Refund policies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8 - Disclaimers */}
            <section>
              <h2 className="text-2xl font-bold text-white">8. Disclaimers</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8.1 Service Disclaimer</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Services provided "as is"</li>
                    <li>No guarantees of availability</li>
                    <li>Performance dependent on factors</li>
                    <li>Results may vary</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8.2 Information Disclaimer</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Not professional advice</li>
                    <li>User responsible for decisions</li>
                    <li>Accuracy not guaranteed</li>
                    <li>Independent verification needed</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9 - Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-white">9. Limitation of Liability</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">9.1 Liability Limits</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maximum liability limited</li>
                    <li>Indirect damages excluded</li>
                    <li>Consequential damages excluded</li>
                    <li>Force majeure events</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">9.2 Indemnification</h3>
                  <p>Users agree to indemnify us for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Terms violations</li>
                    <li>Law violations</li>
                    <li>Third-party claims</li>
                    <li>Misuse of Services</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10 - Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-white">10. Dispute Resolution</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">10.1 Resolution Process</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Notice of dispute required</li>
                    <li>Informal resolution first</li>
                    <li>Arbitration procedures</li>
                    <li>Jurisdiction and venue</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">10.2 Class Action Waiver</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Individual claims only</li>
                    <li>No class actions</li>
                    <li>No representative actions</li>
                    <li>Limited exceptions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 11 - Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-white">11. Changes to Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to modify Terms</li>
                <li>Notice of material changes</li>
                <li>Continued use is acceptance</li>
                <li>Previous versions archived</li>
              </ul>
            </section>

            {/* Section 12 - Business Services */}
            <section>
              <h2 className="text-2xl font-bold text-white">12. Business Services</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">12.1 Consulting Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service scope defined in agreements</li>
                    <li>Deliverable specifications</li>
                    <li>Timeline commitments</li>
                    <li>Quality standards</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">12.2 Research Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data usage rights</li>
                    <li>Confidentiality obligations</li>
                    <li>Delivery expectations</li>
                    <li>Usage restrictions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 13 - Community Guidelines */}
            <section>
              <h2 className="text-2xl font-bold text-white">13. Community Guidelines</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">13.1 Participation Rules</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Professional conduct required</li>
                    <li>Content guidelines</li>
                    <li>Interaction standards</li>
                    <li>Moderation policies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">13.2 Content Standards</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Quality requirements</li>
                    <li>Prohibited content</li>
                    <li>Reporting procedures</li>
                    <li>Enforcement actions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 14 - Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-white">14. Data Usage</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.1 Business Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processing terms</li>
                    <li>Security measures</li>
                    <li>Access controls</li>
                    <li>Usage limitations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.2 Analytics</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data collection scope</li>
                    <li>Usage purposes</li>
                    <li>Sharing restrictions</li>
                    <li>Retention periods</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 15 - Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-white">15. Contact Information</h2>
              <div className="bg-slate-800 p-6 rounded-lg">
                <p className="mb-4">For questions about these Terms:</p>
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
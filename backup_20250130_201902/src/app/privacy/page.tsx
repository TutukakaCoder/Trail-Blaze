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
              
              <div className="mt-4">
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
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">2.2 Information Automatically Collected</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Usage patterns and preferences</li>
                <li>Cookies and similar technologies</li>
                <li>Analytics data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">2.3 Business and Research Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Market analysis and research data</li>
                <li>Business performance metrics</li>
                <li>Strategic planning information</li>
                <li>Other business-related data shared through our Services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">3. Information Automatically Collected</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Usage patterns and preferences</li>
                <li>Cookies and similar technologies</li>
                <li>Analytics data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">4. How We Use Your Information</h2>
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
              <h2 className="text-2xl font-bold text-white">5. Information Sharing</h2>
              <div className="bg-slate-800 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">5.1 We May Share Information With:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers and partners</li>
                  <li>Professional advisors</li>
                  <li>Law enforcement when required</li>
                  <li>Other users (based on your privacy settings)</li>
                  <li>Future business transferees</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">5.2 We Do Not Sell Your Information</h3>
              <p>We do not sell, rent, or trade your personal information to third parties for commercial purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">13. Cookie Policy</h2>
              <p>Our detailed cookie policy explains:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Types of cookies we use</li>
                <li>How cookies are used</li>
                <li>How to control cookie preferences</li>
                <li>Third-party cookie usage</li>
              </ul>
            </section>

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
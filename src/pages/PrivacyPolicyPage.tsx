import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';

export function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16">
      <SEOHead
        title="Privacy Policy | SoCal Solar Clean"
        description="Our privacy policy details how SoCal Solar Clean collects, protects, and uses customer information, quote inquiries, and SMS messaging consent."
        canonicalPath="/privacy-policy/"
        schemaType="WebPage"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: October 2026 · {COMPANY_CONFIG.legalName}
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a quote request or contact inquiry on {COMPANY_CONFIG.name}, we collect personal information necessary to deliver accurate pricing and schedule service. This includes your full name, phone number, email address, physical property street address, city, and ZIP code, as well as property details (panel count, roof pitch, pest observations, and user-uploaded photos).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Satellite Imagery & Property Evaluation</h2>
            <p>
              By submitting your property address, you authorize {COMPANY_CONFIG.name} to view public and commercial high-resolution satellite imagery of your roof to count solar modules, inspect accessibility, and prepare a written quote.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. SMS Text Messaging Terms (A2P 10DLC Compliance)</h2>
            <p>
              If you provide your mobile phone number and opt in to SMS messaging, you consent to receive informational and transactional text messages regarding your quote request, appointment reminders, and technician dispatch notices.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Message and data rates may apply.</li>
              <li>You may reply <strong>STOP</strong> at any time to immediately cancel all future SMS messages.</li>
              <li>You may reply <strong>HELP</strong> for customer support.</li>
              <li>We strictly never sell, rent, or share your mobile number with third-party marketing brokers or affiliate networks for marketing purposes.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. California Consumer Privacy Act (CCPA / CPRA)</h2>
            <p>
              Under California law, California residents have the right to request disclosure of personal data collected, request deletion of their personal information, and opt out of any sale of personal information. We do not sell your personal data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or requests regarding your data, contact us at{' '}
              <a href={`mailto:${COMPANY_CONFIG.email}`} className="text-amber-400 underline">
                {COMPANY_CONFIG.email}
              </a>{' '}
              or call{' '}
              <a href={`tel:${COMPANY_CONFIG.phone}`} className="text-amber-400 underline">
                {COMPANY_CONFIG.phoneFormatted}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

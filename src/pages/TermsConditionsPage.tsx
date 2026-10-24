import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';

export function TermsConditionsPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16">
      <SEOHead
        title="Terms & Conditions | SoCal Solar Clean"
        description="Terms and conditions for residential and commercial solar panel cleaning, critter guard installation, and gutter cleaning across Southern California."
        canonicalPath="/terms-and-conditions/"
        schemaType="WebPage"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Terms & Conditions</h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: October 2026 · {COMPANY_CONFIG.legalName}
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Service Scope & Safe Access</h2>
            <p>
              {COMPANY_CONFIG.name} provides professional exterior cleaning, pure water solar panel washing, bird proofing mesh installation, and gutter clearing. Customer agrees to grant safe access to outdoor water spigots, roof perimeters, and electrical panels if requested.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Pre-Existing Roof & Panel Conditions</h2>
            <p>
              Our technicians perform a visual pre-inspection before starting. {COMPANY_CONFIG.name} is not responsible for pre-existing broken roof tiles, loose electrical wiring, delaminated solar backing, or hail fractures that were present prior to service. If pre-existing hazards are found, we document them with photos and notify the customer before proceeding.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. 0 PPM Pure Water Guarantee</h2>
            <p>
              We guarantee that solar cleaning water is filtered and deionized down to 0 PPM TDS, evaporating spot-free. We do not use abrasive pads, wire brushes, or harsh detergents on solar photovoltaic glass.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Bird Proofing Installation & Warranty</h2>
            <p>
              Our bird mesh is secured using specialized, non-penetrating solar frame clips engineered to avoid voiding manufacturer panel warranties. We guarantee mesh integrity and workmanship for a period of 5 years against detachment under normal weather conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Commercial Insurance & Liability</h2>
            <p>
              {COMPANY_CONFIG.name} carries a {COMPANY_CONFIG.licenseAndInsurance.insuranceCoverage} policy. Proof of insurance (COI) can be furnished to commercial property managers and HOAs upon request.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">6. Cancellations & Rescheduling</h2>
            <p>
              We understand schedules change. We request at least 24 hours notice for residential rescheduling. In the event of severe rain, high wind advisories (such as Santa Ana gusts exceeding 35 MPH), or extreme lightning, appointments may be rescheduled for crew safety.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Zap,
  MapPin,
  Calendar
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';
import { LOCATIONS } from '../../data/locations';

export function CommercialSolarCleaningPage() {
  const commercialCities = LOCATIONS.filter((l) =>
    ['los-angeles-ca', 'long-beach-ca', 'ontario-ca', 'riverside-ca', 'irvine-ca', 'anaheim-ca', 'san-diego-ca', 'corona-ca'].includes(l.slug)
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Commercial Solar Panel Cleaning Southern California | Property Managers & Warehouses"
        description="Scalable commercial solar panel cleaning for industrial warehouses, logistics parks, corporate campuses, and solar carports in Southern California. OSHA compliant, fully insured."
        canonicalPath="/commercial-solar-panel-cleaning/"
        schemaType="Service"
        schemaData={{
          serviceType: 'Commercial Solar Panel Cleaning Service',
          description: 'Industrial and commercial photovoltaic maintenance and 0 PPM pure water cleaning for large-scale solar arrays.',
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Commercial', url: '/commercial-solar-panel-cleaning/' },
          { name: 'Commercial Solar Cleaning', url: '/commercial-solar-panel-cleaning/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Commercial & Industrial Solar Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Commercial Solar Panel Cleaning in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                For commercial property managers, industrial asset owners, and corporate sustainability directors. We maintain rooftop arrays, ground-mount solar fields, and solar parking canopies up to multi-megawatt capacity with verified OSHA safety compliance and guaranteed 0 PPM pure water.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Submit Commercial RFP / Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Direct Line: {COMPANY_CONFIG.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BeforeAfterSlider project={GALLERY_PROJECTS[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Capabilities */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Enterprise Grade Specifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Built for Industrial Rigs & Facility Portfolios
          </h2>
          <p className="text-sm text-slate-400">
            We handle the complexities of commercial roofs, including perimeter safety cables, high-voltage conduits, and strict tenant scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-400/10 text-sky-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">$2,000,000 Insurance & OSHA Rigging</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fully insured with $2M general liability, comprehensive workers&apos; compensation, and rigorous OSHA fall protection certifications for all rooftop crews.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-400/10 text-sky-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">High-Capacity Mobile Pure Water</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial multi-membrane reverse osmosis trailers generate hundreds of gallons of 0 PPM deionized water per hour, enabling rapid cleaning of 500+ panel arrays.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-400/10 text-sky-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Night & Weekend Operations</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Prevent disruption to tenant parking, customer access, and distribution schedules with flexible early morning, evening, or weekend service windows.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Facility Types Covered */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-8">
        <h3 className="text-xl font-bold text-white text-center">
          Commercial Properties We Service
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Logistics & Warehouses', desc: 'Flat TPO/EPDM roofs, distribution hubs, air freight facilities.' },
            { title: 'Solar Parking Canopies', desc: 'Commercial carports, retail lots, corporate parking structures.' },
            { title: 'Corporate Campuses', desc: 'Life sciences, business parks, multi-tenant office complexes.' },
            { title: 'HOA & Multi-Family', desc: 'Apartment communities, condominiums, and clubhouses.' },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Quote Request CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-sky-950 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Managing a Large Commercial Portfolio?
          </h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            We provide customized multi-property maintenance agreements, quarterly performance reporting, and dedicated account management for Southern California asset managers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-a-quote/"
              className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg transition-colors"
            >
              Request Commercial Proposal
            </Link>
            <a
              href={`mailto:${COMPANY_CONFIG.email}?subject=Commercial%20Solar%20Cleaning%20Inquiry`}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold text-sm border border-slate-700 transition-colors"
            >
              Email Scope of Work
            </a>
          </div>
        </div>
      </section>

      {/* Commercial FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">
          Commercial Service FAQs
        </h3>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h4 className="text-sm font-bold text-white">Can you provide vendor COI (Certificate of Insurance) naming our property management firm as additionally insured?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Yes, immediately. Our insurance broker issues custom ACORD certificates naming your specific LLC or property management entity as additionally insured before our crew sets foot on site.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h4 className="text-sm font-bold text-white">Do you provide post-cleaning inspection reports?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Yes. Every commercial job includes high-resolution before-and-after imagery, pure water TDS verification readings, and an inspection report detailing any damaged micro-inverters, cracked glass, or biological debris found on the roof.
            </p>
          </div>
        </div>
      </section>

      <QuoteCTASection serviceContext="Commercial Solar Cleaning" />
    </div>
  );
}

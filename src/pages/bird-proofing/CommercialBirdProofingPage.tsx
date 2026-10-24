import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bird,
  ShieldCheck,
  Building2,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';

export function CommercialBirdProofingPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Commercial Solar Bird Proofing Southern California | Facility Critter Guards"
        description="Heavy-duty commercial solar bird proofing for warehouses, retail plazas, apartment complexes, and solar parking canopies in Southern California. OSHA compliant."
        canonicalPath="/commercial-solar-panel-bird-proofing/"
        schemaType="Service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Bird Proofing', url: '/solar-panel-bird-proofing/' },
          { name: 'Commercial Bird Proofing', url: '/commercial-solar-panel-bird-proofing/' },
        ]}
      />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                <Building2 className="w-4 h-4 text-sky-400" />
                <span>Commercial & Industrial Pest Exclusion</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Commercial Solar Panel Bird Proofing in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Commercial solar rooftops, logistics centers, and retail parking canopies face aggressive pest pressures from pigeons and seagulls. Bird droppings on commercial roofs cause health department citations, HVAC air intake contamination, and fire code hazards. We engineer permanent commercial-grade barrier systems.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Request Commercial RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {COMPANY_CONFIG.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BeforeAfterSlider project={GALLERY_PROJECTS[5]} />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Applications */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Commercial Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Pest Exclusion for Large-Scale Photovoltaics
          </h2>
          <p className="text-sm text-slate-400">
            Protect high-voltage commercial equipment, tenant vehicles under parking canopies, and HVAC air quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Solar Carports & Parking Structures</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Birds roosting in solar carport frames drop corrosive guano on customer and employee vehicles below. Our mesh systems enclose open framework cavities to prevent perching and roosting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">HVAC Proximity & Air Quality</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dried pigeon guano adjacent to commercial rooftop air conditioning units can be drawn into building ventilation systems, presenting OSHA indoor air quality liabilities.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Multi-Family Apartment Complexes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              HOAs and property managers eliminate tenant complaints regarding early morning noise, dirty balconies, and gutter overflows caused by active bird colonies.
            </p>
          </div>
        </div>
      </section>

      <QuoteCTASection serviceContext="Commercial Bird Proofing" />
    </div>
  );
}

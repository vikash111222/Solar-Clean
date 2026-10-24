import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';

export function CommercialGutterCleaningPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Commercial Gutter Cleaning Southern California | Industrial & Multi-Family"
        description="Commercial box gutter maintenance, parapet drain snaking, and multi-family gutter clearing in Southern California. OSHA compliant and fully insured."
        canonicalPath="/commercial-gutter-cleaning/"
        schemaType="Service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Gutter Cleaning', url: '/gutter-cleaning/' },
          { name: 'Commercial Gutter Cleaning', url: '/commercial-gutter-cleaning/' },
        ]}
      />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 text-xs font-semibold">
            <Building2 className="w-4 h-4 text-sky-400" />
            <span>Commercial Facility & HOA Drainage</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Commercial Gutter Cleaning in Southern California
          </h1>

          <p className="text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Heavy-duty gutter maintenance for commercial warehouses, retail centers, corporate offices, and multi-family apartment communities. We handle high-capacity box gutters, scupper drains, and industrial leaders with full OSHA tie-off safety.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/request-a-quote/"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <span>Request Commercial Gutter RFP</span>
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
      </section>

      {/* Commercial Drainage Systems Serviced */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Systems Serviced
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Commercial Drainage Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">High-Capacity Box Gutters</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial buildings use 6-inch to 8-inch commercial box gutters designed for high water volume. We clear heavy industrial silt and test solder seams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Scuppers & Parapet Drains</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Commercial flat roofs depend on scupper drains through parapet walls. Even a small blockage causes dangerous standing water weight on structural deck joists.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">HOA & Multi-Family Portfolios</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Scheduled pre-winter preventative maintenance programs for condominiums and apartment buildings, with complete photo reports for HOA boards.
            </p>
          </div>
        </div>
      </section>

      <QuoteCTASection serviceContext="Commercial Gutter Cleaning" />
    </div>
  );
}

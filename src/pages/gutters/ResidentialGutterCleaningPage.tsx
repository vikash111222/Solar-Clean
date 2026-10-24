import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Home
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';

export function ResidentialGutterCleaningPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Residential Gutter Cleaning Southern California | Homeowner Specialists"
        description="Spotless residential gutter clearing and downspout water flushing for Southern California homeowners. Protect roof eaves and foundations from seasonal overflow."
        canonicalPath="/residential-gutter-cleaning/"
        schemaType="Service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Gutter Cleaning', url: '/gutter-cleaning/' },
          { name: 'Residential Gutter Cleaning', url: '/residential-gutter-cleaning/' },
        ]}
      />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Home className="w-4 h-4 text-amber-400" />
                <span>Residential Homeowner Service</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Residential Gutter Cleaning in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Keep your home safe from seasonal rain storms. We extract packed leaves, pine needles, and roof grit by hand and vacuum, flush all downspouts to ground level, and bag all debris for haul-away with zero mess on your patio or walkways.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Request Residential Gutter Quote</span>
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
              <BeforeAfterSlider project={GALLERY_PROJECTS[4]} />
            </div>
          </div>
        </div>
      </section>

      {/* Bundle with Solar */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Popular Homeowner Bundle
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Bundle Solar Panel Cleaning + Rain Gutter Service
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Since our technicians are already safely rigged on your roof with pure water systems, combining solar washing with gutter clearing saves you time and up to 20% compared to separate appointments.
            </p>
          </div>
          <Link
            to="/request-a-quote/"
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg whitespace-nowrap transition-colors"
          >
            Get Multi-Service Quote
          </Link>
        </div>
      </section>

      <QuoteCTASection serviceContext="Residential Gutter Cleaning" />
    </div>
  );
}

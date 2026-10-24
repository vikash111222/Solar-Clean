import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bird,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Home,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';

export function ResidentialBirdProofingPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Residential Solar Panel Bird Proofing | Pigeon Guards for Homeowners"
        description="Stop pigeons from roosting and nesting under residential solar panels in Southern California. Non-drill warranty-safe mesh for Spanish tile and shingle roofs."
        canonicalPath="/residential-solar-panel-bird-proofing/"
        schemaType="Service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Bird Proofing', url: '/solar-panel-bird-proofing/' },
          { name: 'Residential Bird Proofing', url: '/residential-solar-panel-bird-proofing/' },
        ]}
      />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Home className="w-4 h-4 text-amber-400" />
                <span>Residential Homeowner Protection</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Residential Solar Panel Bird Proofing in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Tired of waking up at 5:00 AM to the scratching and cooing of pigeons living directly above your bedroom? Our specialized residential critter guard service completely humanely seals your solar perimeter, clears out contaminated nesting materials, and stops birds from ever coming back.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Get Residential Pigeon Guard Quote</span>
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
              <BeforeAfterSlider project={GALLERY_PROJECTS[1]} />
            </div>
          </div>
        </div>
      </section>

      {/* Spanish Tile & Shingle Roof Care */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Tile & Shingle Roof Precision
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Custom-Fitted to Every Roof Architecture
          </h2>
          <p className="text-sm text-slate-400">
            Pigeons can squeeze through gaps as small as 1.5 inches. We hand-contour our heavy-duty mesh to match the exact profile of your roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Spanish S-Tile & Barrel Clay</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Curved tile roofs have natural hollows under panels where pigeons love to nest. We contour the bottom wire edge down into every individual tile trough to create an impenetrable barrier.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Asphalt Shingle Roofs</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              On flat shingle roofs, panels sit 4 to 6 inches above the surface. We install straight, rigid perimeter mesh that remains flush with the roofline and withstands high winds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Attic & Vent Protection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When pigeons are displaced from solar panels, they often seek nearby dormer vents or roof hips. We inspect and can screen adjacent roof vents during the same service visit.
            </p>
          </div>
        </div>
      </section>

      <QuoteCTASection serviceContext="Residential Bird Proofing" />
    </div>
  );
}

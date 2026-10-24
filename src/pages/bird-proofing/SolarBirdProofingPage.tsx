import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bird,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Phone,
  MessageSquare,
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';
import { LOCATIONS } from '../../data/locations';

export function SolarPanelBirdProofingPage() {
  const topCities = LOCATIONS.slice(0, 8);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Solar Panel Bird Proofing Southern California | Pigeon Guard Mesh"
        description="Stop pigeons and critters from nesting under rooftop solar panels with heavy-duty galvanized black PVC steel mesh and non-penetrating warranty-safe clips."
        canonicalPath="/solar-panel-bird-proofing/"
        schemaType="Service"
        schemaData={{
          serviceType: 'Solar Panel Bird Proofing Service',
          description: 'Non-penetrating critter guard mesh barrier installation for residential and commercial solar panel systems.',
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/solar-panel-bird-proofing/' },
          { name: 'Bird Proofing', url: '/solar-panel-bird-proofing/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Bird className="w-4 h-4 text-amber-400" />
                <span>Permanent Rooftop Critter Protection</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Solar Panel Bird Proofing in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Pigeons, starlings, and squirrels view rooftop solar panels as the ultimate protected nesting sanctuary. Our heavy-gauge black PVC-coated steel mesh completely seals the perimeter beneath your panels without drilling, preserving your manufacturer warranty and stopping pest damage permanently.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Request Bird Proofing Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{COMPANY_CONFIG.phoneFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BeforeAfterSlider project={GALLERY_PROJECTS[1]} />
            </div>
          </div>
        </div>
      </section>

      {/* The Dangers of Pigeons Under Panels */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Why Bird Proofing Is Crucial
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Hidden Risks of Unprotected Solar Panels
          </h2>
          <p className="text-sm text-slate-400">
            Allowing pigeons to roost under solar arrays can cause thousands of dollars in electrical and structural damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800 text-red-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Corrosive Guano & Wire Damage</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pigeon droppings contain highly acidic uric acid that corrodes solar framing, electrical conduits, and wiring insulation, frequently causing ground faults and inverter shutdowns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800 text-red-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Fire Hazards from Dry Nesting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pigeons pack pounds of dry twigs, pine needles, and feathers beneath panels right next to high-voltage direct current (DC) solar wiring. In Southern California summer heat, this creates an acute fire hazard.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800 text-red-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Health Hazards & Bird Mites</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pigeon nests harbor parasites including bird mites and ticks that can migrate through attic vents into your living spaces, as well as airborne pathogens like histoplasmosis.
            </p>
          </div>
        </div>
      </section>

      {/* Our Bird Proofing Specifications */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Installation Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Engineered Specifically for Southern California Roofs
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">No-Drill Nylon Fasteners</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never drill or screw into your solar panel aluminum frames. We use patent-grade UV-resistant nylon speed clips that lock into the frame lip without voiding your warranty.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">1/2-Inch Galvanized Steel</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial-strength 19-gauge welded wire mesh with thick black PVC powder-coating stops both large pigeons and small finches, while resisting coastal salt air corrosion.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">Full Biological Sanitation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Before sealing, our technicians clear out all existing nests, wash out accumulated guano with pure water, and spray an eco-friendly sanitizer to destroy odors and bird mites.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white">Custom Tile Contouring</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              For Spanish S-tile and clay tile roofs, we custom-scribe and bend the bottom of the mesh to fit every curved tile valley, leaving zero gaps for birds to squeeze through.
            </p>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Sub-Page Links */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/residential-solar-panel-bird-proofing/"
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors group"
          >
            <div className="text-xs font-bold text-amber-400 mb-1">Residential Focus</div>
            <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
              Residential Solar Bird Proofing →
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore how we protect tile and shingle roofs for single family homes, eliminating morning cooing noise and protecting patio areas.
            </p>
          </Link>

          <Link
            to="/commercial-solar-panel-bird-proofing/"
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors group"
          >
            <div className="text-xs font-bold text-sky-400 mb-1">Commercial Focus</div>
            <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
              Commercial Solar Bird Proofing →
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial mesh installations for warehouse rooftops, corporate parking canopies, and apartment buildings with severe pest pressure.
            </p>
          </Link>
        </div>
      </section>

      <QuoteCTASection serviceContext="Solar Bird Proofing" />
    </div>
  );
}

export { SolarPanelBirdProofingPage as SolarBirdProofingPage };

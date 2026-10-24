import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Droplets,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  AlertTriangle,
  MapPin,
  Calendar
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';
import { LOCATIONS } from '../../data/locations';

export function GutterCleaningPage() {
  const topCities = LOCATIONS.slice(0, 8);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Rain Gutter Cleaning Southern California | Residential & Commercial"
        description="Professional rain gutter cleaning and downspout flushing in Southern California. Remove leaves, pine needles, and roof silt to prevent dry rot and water damage."
        canonicalPath="/gutter-cleaning/"
        schemaType="Service"
        schemaData={{
          serviceType: 'Gutter Cleaning Service',
          description: 'Comprehensive residential and commercial gutter clearing, debris bagging, and downspout water flow testing.',
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/gutter-cleaning/' },
          { name: 'Gutter Cleaning', url: '/gutter-cleaning/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Complete Eaves & Downspout Maintenance</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Professional Gutter Cleaning in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Southern California atmospheric river storms dump heavy rain in short bursts. When gutters are choked with eucalyptus leaves, pine needles, and granule runoff from roofs, water overflows behind fascia boards, rotting eaves and pooling at foundations. We clear the channels and flush all downspouts clean.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Request Gutter Cleaning Quote</span>
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

      {/* Why Gutter Cleaning Matters in SoCal */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Water Protection
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Protecting Your Roof, Fascia & Foundation
          </h2>
          <p className="text-sm text-slate-400">
            Overflowing gutters cause some of the most expensive hidden water damage on California homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Preventing Fascia & Eaves Rot</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When water backs up in gutters, it wicks into the unpainted back of wooden fascia boards, causing premature dry rot and costly termite infestations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Foundation Soil Erosion</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Uncontrolled rooftop waterfalling dumps hundreds of gallons right against home perimeters, leading to slab movement, stucco discoloration, and basement leaks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Mosquito & Pest Breeding</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Stagnant water trapped in clogged gutter channels creates ideal breeding conditions for mosquitoes, gnats, and mold in the warm Southern California climate.
            </p>
          </div>
        </div>
      </section>

      {/* What Every Gutter Cleaning Includes */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Our Thorough Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What Every Gutter Cleaning Service Includes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Hand & Vacuum Clearing',
              desc: 'We extract all leaves, twigs, mud, and composite shingle grit from horizontal gutter runs.',
            },
            {
              title: 'Downspout Water Flushing',
              desc: 'We test every downspout with water to verify clear, unobstructed discharge all the way to ground level.',
            },
            {
              title: 'Clean Bagging & Hauling',
              desc: 'All pulled gutter sludge is bagged and hauled away. We never blow gutter debris onto your patio or flower beds.',
            },
            {
              title: 'Gutter Pitch Inspection',
              desc: 'We inspect gutter hangers and slope, alerting you to loose brackets or sagging sections.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Residential vs Commercial Sub-Pages */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/residential-gutter-cleaning/"
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors group"
          >
            <div className="text-xs font-bold text-amber-400 mb-1">Residential Focus</div>
            <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
              Residential Gutter Cleaning →
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Explore residential gutter packages, seasonal reminders before winter rains, and bundle discounts with solar washing.
            </p>
          </Link>

          <Link
            to="/commercial-gutter-cleaning/"
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors group"
          >
            <div className="text-xs font-bold text-sky-400 mb-1">Commercial Focus</div>
            <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
              Commercial Gutter Cleaning →
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Commercial box gutters, industrial scupper drains, parapet drainage clearing, and multi-family scheduled maintenance.
            </p>
          </Link>
        </div>
      </section>

      <QuoteCTASection serviceContext="Rain Gutter Cleaning" />
    </div>
  );
}

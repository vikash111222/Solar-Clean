import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  Sun,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  MapPin
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';
import { LOCATIONS } from '../../data/locations';

export function SolarPanelCleaningPage() {
  const soCalLocations = LOCATIONS.slice(0, 8);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Solar Panel Cleaning Southern California | 0 PPM Pure Water"
        description="Professional solar panel cleaning across Southern California using 0 PPM pure deionized water. Recover up to 30% lost solar energy with zero chemical residue."
        canonicalPath="/solar-panel-cleaning/"
        schemaType="Service"
        schemaData={{
          serviceType: 'Solar Panel Cleaning Service',
          description: 'Demineralized deionized water washing with soft-bristle agitated poles for residential and commercial photovoltaic arrays.',
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/solar-panel-cleaning/' },
          { name: 'Solar Panel Cleaning', url: '/solar-panel-cleaning/' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Droplets className="w-4 h-4 text-amber-400" />
                <span>0 PPM Deionized Pure Water Technology</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Professional Solar Panel Cleaning in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Southern California’s relentless sunshine is accompanied by desert dust, urban smog, vehicle soot, and bird droppings that block light from reaching your photovoltaic cells. Our certified technicians clean rooftop and ground-mounted solar arrays using pure, filtered deionized water targeting 0 PPM TDS for a streak-free, spot-free shine.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Get Instant Satellite Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {COMPANY_CONFIG.phoneFormatted}</span>
                </a>
                <a
                  href={`sms:${COMPANY_CONFIG.smsNumber}`}
                  className="px-4 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-xl font-medium text-sm transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Text Us</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <BeforeAfterSlider project={GALLERY_PROJECTS[0]} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar Panels Need Regular Cleaning in SoCal */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            The Production Problem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Why Dirty Solar Panels Cost You Real Money Every Day
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Unlike cars, solar panels cannot be wiped with glass cleaner or rinsed with a garden hose. Soiling creates an opaque barrier that directly drops your solar inverter kilowatt-hour production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Up to 30% Output Loss</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Field studies demonstrate that unwashed panels in Southern California lose between 15% and 30% of energy generation due to baked-on particulate and tree pollen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Hotspots & Thermal Degradation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Localized bird droppings and leaf debris cause isolated cell shading. These shaded cells act as electrical resistors, overheating and causing irreversible micro-burns.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Warranty Protection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Solar manufacturers require non-abrasive soft brushing with demineralized water. Harsh chemicals, detergents, and pressure washers void manufacturer coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Suitability */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              For Residential Homeowners
            </div>
            <h3 className="text-xl font-bold text-white">
              Residential Rooftop Solar Cleaning
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tailored for single-family residences, townhouses, and luxury estates. We respect quiet hours, protect surrounding landscaping, and use zero-pressure telescopic poles to safeguard delicate Spanish clay tile roofs.
            </p>
            <div className="pt-2">
              <Link
                to="/residential-solar-panel-cleaning/"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
              >
                <span>Explore Residential Solar Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              For Commercial Property Managers
            </div>
            <h3 className="text-xl font-bold text-white">
              Commercial & Industrial Array Maintenance
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Built for logistics centers, manufacturing facilities, office parks, and solar carports. Full OSHA fall protection, $2M general liability, and flexible weekend scheduling to avoid tenant interruption.
            </p>
            <div className="pt-2">
              <Link
                to="/commercial-solar-panel-cleaning/"
                className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
              >
                <span>Explore Commercial Solar Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Related Services */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white text-center">
          Related Exterior Cleaning Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/solar-panel-bird-proofing/"
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors text-center"
          >
            <div className="font-bold text-sm text-white mb-1">Solar Panel Bird Proofing</div>
            <div className="text-xs text-slate-400">Keep pigeons from nesting beneath panels</div>
          </Link>
          <Link
            to="/gutter-cleaning/"
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors text-center"
          >
            <div className="font-bold text-sm text-white mb-1">Rain Gutter Cleaning</div>
            <div className="text-xs text-slate-400">Clear debris & flush downspouts</div>
          </Link>
          <Link
            to="/pure-water-solar-panel-cleaning/"
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors text-center"
          >
            <div className="font-bold text-sm text-white mb-1">0 PPM Pure Water Process</div>
            <div className="text-xs text-slate-400">Understand the RO/DI filtration science</div>
          </Link>
        </div>
      </section>

      {/* Local Coverage Directory Strip */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Available In These Southern California Cities
          </h3>
          <Link to="/service-areas/" className="text-xs text-amber-400 hover:underline">
            All 24 Cities →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
          {soCalLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}/`}
              className="p-2 rounded bg-slate-900 hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{loc.cityName}, CA</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">
          Solar Panel Cleaning FAQs
        </h3>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h4 className="text-sm font-bold text-white">How often should solar panels be cleaned in Southern California?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              In most suburban areas of Orange County and San Diego, cleaning every 6 months is optimal. Near agricultural areas, canyon wind funnels (like Corona or Rancho Cucamonga), or busy freeways, cleaning every 3 to 4 months produces the highest net financial return.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h4 className="text-sm font-bold text-white">Why can&apos;t I just spray them with a garden hose?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Southern California tap water has 250 to 450+ PPM of dissolved minerals. When tap water hits warm panels in the sun, it rapidly evaporates, leaving hard white mineral rings that permanently bond to the glass.
            </p>
          </div>
        </div>
      </section>

      <QuoteCTASection serviceContext="Solar Panel Cleaning" />
    </div>
  );
}

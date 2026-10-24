import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  Home,
  Check,
  Sparkles,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { BeforeAfterSlider } from '../../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../../data/galleryData';
import { LOCATIONS } from '../../data/locations';

export function ResidentialSolarCleaningPage() {
  const topCities = LOCATIONS.slice(0, 8);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Residential Solar Panel Cleaning Southern California | Homeowner Specialists"
        description="Spotless 0 PPM pure deionized water cleaning for residential solar panels. Protect fragile Spanish tile roofs, maximize utility bill savings, and safeguard manufacturer warranties."
        canonicalPath="/residential-solar-panel-cleaning/"
        schemaType="Service"
        schemaData={{
          serviceType: 'Residential Solar Panel Cleaning',
          description: 'Specialized rooftop solar panel washing for single-family homes and residential properties across Southern California.',
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/solar-panel-cleaning/' },
          { name: 'Residential Solar Cleaning', url: '/residential-solar-panel-cleaning/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Home className="w-4 h-4 text-amber-400" />
                <span>Dedicated Residential Homeowner Service</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Residential Solar Panel Cleaning in Southern California
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                As a Southern California homeowner, your solar investment was designed to lower electric bills and produce clean green power. But baked-on foothill dust, bird droppings, and pollen quietly rob up to 25% of your daily electricity yield. We restore your system with pure deionized water and zero tile damage.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Request Residential Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>{COMPANY_CONFIG.phoneFormatted}</span>
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

      {/* Benefits for Homeowners */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Homeowner Benefits
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Maximize Net Metering (NEM) & Protect Your Roof
          </h2>
          <p className="text-sm text-slate-400">
            With Southern California electric utilities charging record-high Time-of-Use rates, every kilowatt-hour your system produces keeps cash in your pocket.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Higher Summer Peak Credits</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Under SCE and SDG&E Time-Of-Use billing, 4 PM to 9 PM rates are the most expensive. Clean panels generate maximum peak wattage, offsetting high utility tiers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Brittle Tile Protection</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We specialize in Spanish clay and concrete tile roofs. Our crew uses telescopic water-fed poles from eaves and ladders, minimizing foot traffic on brittle tiles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white">Zero Chemicals & Zero Soap</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Detergents leave a sticky film that attracts dust faster, and runoff can kill flowers and lawn grass. We use 100% pure demineralized water that is non-toxic to pets.
            </p>
          </div>
        </div>
      </section>

      {/* The Residential Cleaning Process */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Our Method
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            What to Expect on Service Day
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: 'Step 1',
              title: 'Visual Pre-Inspection',
              desc: 'We inspect panels for cracked glass, loose wiring, and bird nests before starting.',
            },
            {
              step: 'Step 2',
              title: '0 PPM Water Calibration',
              desc: 'We calibrate our mobile reverse osmosis rig and confirm 000 PPM on the digital TDS meter.',
            },
            {
              step: 'Step 3',
              title: 'Gentle Agitation',
              desc: 'Ultra-soft boar-hair/nylon brush poles gently loosen baked dust and bird droppings without pressure.',
            },
            {
              step: 'Step 4',
              title: 'Spotless Pure Rinse',
              desc: 'A final cascade rinse of deionized water sheets off, evaporating with zero mineral spots.',
            },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-amber-400">{item.step}</span>
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Homeowner FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">
          Homeowner Solar Cleaning Questions
        </h3>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h4 className="text-sm font-bold text-white">Do I need to be home for the cleaning?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              No. As long as we have clear access to outdoor hose spigots and side gates, you do not need to take time off work. We text arrival updates and provide before-and-after photo links upon completion.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <h4 className="text-sm font-bold text-white">Will pure water cleaning damage my home’s landscaping?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Not at all. Pure deionized water contains no detergents, no bleaches, and no chemicals. It is purely filtered water that is completely safe for shrubs, grass, and pets.
            </p>
          </div>
        </div>
      </section>

      {/* Confirmed Cities Strip */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Residential Service In Your City
          </h3>
          <Link to="/service-areas/" className="text-xs text-amber-400 hover:underline">
            View All Cities →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
          {topCities.map((loc) => (
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

      <QuoteCTASection serviceContext="Residential Solar Cleaning" />
    </div>
  );
}

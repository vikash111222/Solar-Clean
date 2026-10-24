import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  MapPin,
  Sun,
  ShieldCheck,
  Droplets,
  Bird,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  HelpCircle,
  Sparkles,
  Zap
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../components/common/QuoteCTASection';
import { LOCATIONS } from '../data/locations';
import { GALLERY_PROJECTS } from '../data/galleryData';

export function LocationDetailPage() {
  const { citySlug } = useParams<{ citySlug: string }>();

  // Find location by slug
  const location = LOCATIONS.find((loc) => loc.slug === citySlug);

  // If not found, redirect to main service areas directory
  if (!location) {
    return <Navigate to="/service-areas/" replace />;
  }

  // Neighboring cities in same county or region
  const neighboringCities = LOCATIONS.filter(
    (loc) => loc.county === location.county && loc.slug !== location.slug
  ).slice(0, 4);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title={`Solar Panel Cleaning in ${location.cityName}, CA | 0 PPM Pure Water`}
        description={`Professional solar panel cleaning and bird proofing in ${location.cityName}, ${location.county}. Remove local soiling, boost kWh output, and protect tile roofs with 0 PPM pure water.`}
        canonicalPath={`/locations/${location.slug}/`}
        schemaType="Service"
        schemaData={{
          serviceType: `Solar Panel Cleaning in ${location.cityName}`,
          areaServed: {
            '@type': 'City',
            name: location.cityName,
            addressRegion: 'CA',
            postalCode: location.zipCodes,
          },
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas/' },
          { name: `${location.cityName}, CA`, url: `/locations/${location.slug}/` },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Link to="/" className="hover:text-amber-400">Home</Link>
                <span>/</span>
                <Link to="/service-areas/" className="hover:text-amber-400">Service Areas</Link>
                <span>/</span>
                <span className="text-amber-400">{location.cityName}, CA</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Confirmed Service Area · {location.county}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Solar Panel Cleaning & Bird Proofing in {location.cityName}, CA
              </h1>

              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                {location.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <span>Get {location.cityName} Quote</span>
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
                  href={`sms:${COMPANY_CONFIG.smsNumber}?body=Hi%2C%20I%20need%20a%20solar%20cleaning%20quote%20in%20${encodeURIComponent(location.cityName)}.`}
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

      {/* Local Climate & Soiling Analysis */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Local Environmental Profile
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {location.cityName} Solar Climate & Maintenance Needs
          </h2>
          <p className="text-sm text-slate-400">
            Microclimates across Southern California affect solar systems differently. Here is what impacts photovoltaic generation in {location.cityName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded">
                High Potential
              </span>
            </div>
            <h3 className="text-base font-bold text-white">
              {location.sunnyDaysPerYear} Sunny Days / Year
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              With over {location.sunnyDaysPerYear} days of strong irradiance, keeping panels spotless yields maximum kilowatt-hour offset against high California utility rates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded">
                {location.averageDustLevel}
              </span>
            </div>
            <h3 className="text-base font-bold text-white">Local Soiling Factors</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {location.localChallenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded">
                Schedule
              </span>
            </div>
            <h3 className="text-base font-bold text-white">Cleaning Recommendation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {location.localCleaningRecommendation}
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered in This City */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-8">
        <h3 className="text-xl font-bold text-white text-center">
          Exterior Cleaning Services Available in {location.cityName}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/residential-solar-panel-cleaning/"
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors space-y-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Sun className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-400">Residential Solar Cleaning</h4>
            <p className="text-xs text-slate-400">0 PPM pure water washing for {location.cityName} homes.</p>
          </Link>

          <Link
            to="/commercial-solar-panel-cleaning/"
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors space-y-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-sky-400/10 text-sky-400 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-400">Commercial Solar Washing</h4>
            <p className="text-xs text-slate-400">Warehouses, offices, and commercial carport arrays.</p>
          </Link>

          <Link
            to="/solar-panel-bird-proofing/"
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors space-y-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <Bird className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-400">Pigeon Guard Mesh</h4>
            <p className="text-xs text-slate-400">No-drill steel barrier keeping birds out from under panels.</p>
          </Link>

          <Link
            to="/gutter-cleaning/"
            className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors space-y-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white group-hover:text-amber-400">Rain Gutter Cleaning</h4>
            <p className="text-xs text-slate-400">Debris removal and downspout flushing to ground level.</p>
          </Link>
        </div>
      </section>

      {/* Neighborhoods & Zip Codes Served */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-6">
        <h3 className="text-base font-bold text-white">
          Neighborhoods & ZIP Codes Serviced in {location.cityName}
        </h3>
        <div className="space-y-4 text-xs">
          <div>
            <span className="font-semibold text-slate-300">Popular Neighborhoods: </span>
            <span className="text-slate-400">{location.popularNeighborhoods.join(', ')}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-300">Covered ZIP Codes: </span>
            <span className="text-amber-400 font-mono">{location.zipCodes.join(', ')}</span>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">
          {location.cityName} Solar Cleaning Questions
        </h3>
        <div className="space-y-3">
          {location.faqs.map((faq, i) => (
            <div key={i} className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Neighboring Cities */}
      {neighboringCities.length > 0 && (
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Nearby Service Areas in {location.county}
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {neighboringCities.map((nc) => (
              <Link
                key={nc.slug}
                to={`/locations/${nc.slug}/`}
                className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors flex items-center justify-between group"
              >
                <span className="font-medium text-slate-300 group-hover:text-amber-400">{nc.cityName}, CA</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </section>
      )}

      <QuoteCTASection
        title={`Restore Your ${location.cityName} Solar Output Today`}
        subtitle={`Request an instant satellite quote for your ${location.cityName} residence or commercial property.`}
      />
    </div>
  );
}

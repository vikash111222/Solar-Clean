import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Search,
  Sun,
  ShieldCheck,
  ChevronRight,
  Droplets,
  Bird,
  Compass
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { QuoteCTASection } from '../components/common/QuoteCTASection';
import { LOCATIONS, SO_CAL_COUNTIES } from '../data/locations';

export function ServiceAreasPage() {
  const [selectedCounty, setSelectedCounty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLocations = LOCATIONS.filter((loc) => {
    const matchesCounty = selectedCounty === 'All' || loc.county === selectedCounty;
    const matchesSearch =
      searchQuery === '' ||
      loc.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.zipCodes.some((z) => z.includes(searchQuery));
    return matchesCounty && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Southern California Solar Cleaning Service Areas & Locations"
        description="Explore confirmed service areas for professional solar panel cleaning, bird proofing, and gutter maintenance across Orange County, LA, Riverside, San Bernardino, and San Diego."
        canonicalPath="/service-areas/"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/service-areas/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Serving 5 Southern California Counties</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Southern California Service Areas
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From coastal fog zones to desert wind corridors, our mobile pure water rigs service residential homeowners and commercial facility managers throughout Southern California.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city name, county, or ZIP code..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs & Location Grid */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* County Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {['All', ...SO_CAL_COUNTIES].map((county) => (
            <button
              key={county}
              onClick={() => setSelectedCounty(county)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCounty === county
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {county}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-xs text-slate-400 text-center">
          Showing {filteredLocations.length} confirmed service {filteredLocations.length === 1 ? 'city' : 'cities'} in {selectedCounty === 'All' ? 'Southern California' : selectedCounty}
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}/`}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-900/80 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span>{loc.county}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {loc.sunnyDaysPerYear} Sunny Days
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {loc.cityName}, CA
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {loc.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1 text-xs">
                  <div className="text-[11px] font-semibold text-slate-300">
                    Primary Solar Challenge:
                  </div>
                  <div className="text-[11px] text-amber-300/90 leading-tight">
                    {loc.localChallenge}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                <span>View {loc.cityName} Solar Guide</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <div className="text-center py-12 space-y-3">
            <p className="text-slate-400 text-sm">No locations matched your search query &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCounty('All');
              }}
              className="text-xs font-semibold text-amber-400 hover:underline"
            >
              Reset filters to see all 24 Southern California cities
            </button>
          </div>
        )}
      </section>

      <QuoteCTASection title="Don't See Your City Listed?" subtitle="We service the entire greater Southern California region within 75 miles of Irvine. Request a quick quote to confirm coverage." />
    </div>
  );
}

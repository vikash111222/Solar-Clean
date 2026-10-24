import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Droplets,
  Award,
  Sun,
  Users,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { TrustBadges } from '../components/common/TrustBadges';
import { QuoteCTASection } from '../components/common/QuoteCTASection';

export function AboutPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="About Us | Southern California Solar Cleaning & Exterior Specialists"
        description="Learn about SoCal Solar Clean, Southern California's dedicated solar panel cleaning, 0 PPM deionized water washing, and solar bird proofing specialists."
        canonicalPath="/about-us/"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us/' },
        ]}
      />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Dedicated Exterior Solar Specialists</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            About {COMPANY_CONFIG.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Founded with a clear mission: to provide Southern California property owners with pure, safe, and warranty-compliant exterior solar cleaning and critter exclusion.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Our Mission & Standards */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Our Founding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Why We Never Cut Corners on Rooftop Solar Arrays
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              When solar systems were first widely installed across Southern California, many homeowners were told rain would naturally clean their panels. But California rain is infrequent and dusty, turning into muddy streaks that dry into an opaque film.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              At the same time, window washers and landscapers began spraying panels with hard municipal tap water and harsh detergents. This practice leaves permanent calcium scale, damages anti-reflective coatings, and risks cracking fragile Spanish roof tiles.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              We built {COMPANY_CONFIG.name} to do it the right way: investing in 4-stage mobile reverse osmosis systems that deliver true 0 PPM pure deionized water, non-penetrating bird barriers that protect warranties, and OSHA-certified fall protection.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
              The 4 Core Guarantees We Deliver
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>0 PPM Mineral Purity:</strong> Every batch of cleaning water is verified with digital TDS meters before application.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Zero-Breakage Tile Respect:</strong> Specialized weight dispersion and stand-off poles protect delicate clay and concrete tiles.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Full Warranty Compliance:</strong> We never drill into solar frames and never use pressure washers that void equipment warranties.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Verified Liability Coverage:</strong> Covered by a comprehensive $2,000,000 commercial policy for your peace of mind.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 border-b border-slate-800 text-center space-y-6">
        <h3 className="text-2xl font-bold text-white">Proudly Serving All of Southern California</h3>
        <p className="text-sm text-slate-300 max-w-2xl mx-auto">
          Headquartered in Orange County with mobile service rigs operating daily across Los Angeles County, Riverside County, San Bernardino County, and San Diego County.
        </p>
        <div className="pt-2">
          <Link
            to="/service-areas/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 rounded-xl font-bold text-xs transition-colors"
          >
            <span>Explore All 24 Service Areas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <QuoteCTASection />
    </div>
  );
}

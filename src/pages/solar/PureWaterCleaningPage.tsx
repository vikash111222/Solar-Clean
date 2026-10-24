import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Search,
  Sparkles,
  Layers,
  Gauge
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';

export function PureWaterCleaningPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Why We Use Filtered and Deionized Water for Solar Panel Cleaning"
        description="Learn why 0 PPM pure deionized water is essential for streak-free solar panel cleaning in Southern California, preventing mineral scale and adhering to manufacturer standards."
        canonicalPath="/pure-water-solar-panel-cleaning/"
        schemaType="Service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/solar-panel-cleaning/' },
          { name: 'Pure Water Process', url: '/pure-water-solar-panel-cleaning/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Droplets className="w-4 h-4 text-amber-400" />
            <span>The Science of Spot-Free Solar Washing</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why We Use Filtered and Deionized Water for Solar Panel Cleaning
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Water is filtered and deionized to target 0 PPM total dissolved solids (TDS), helping eliminate mineral spotting and residue as the water dries naturally under the Southern California sun.
          </p>

          <div className="pt-2">
            <Link
              to="/request-a-quote/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all"
            >
              <span>Schedule a 0 PPM Pure Water Cleaning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The 4-Step Process Visual Flow */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Visual Process Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            The 4 Stages of Our Pure Water Workflow
          </h2>
          <p className="text-sm text-slate-400">
            How municipal tap water is transformed on-site into laboratory-grade deionized cleaning water.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1: Water Filtration */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Layers className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold font-mono text-amber-400">Stage 01</div>
            <h3 className="text-base font-bold text-white">1. Multi-Stage Filtration</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Water passes through sediment filters and activated carbon blocks, stripping out rust, suspended dirt, silt, chlorine, and chemical oxidizers down to microscopic particle size.
            </p>
          </div>

          {/* Step 2: Deionization */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold font-mono text-amber-400">Stage 02</div>
            <h3 className="text-base font-bold text-white">2. Deionization (DI)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-grade mixed-bed ion-exchange resin vessels attract positively charged cations (calcium, magnesium) and negatively charged anions (chlorides, sulfates, silica), exchanging them for pure hydrogen and hydroxide ions.
            </p>
          </div>

          {/* Step 3: TDS Measurement */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Gauge className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold font-mono text-amber-400">Stage 03</div>
            <h3 className="text-base font-bold text-white">3. TDS Measurement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Before water touches your panels, we test it with an in-line digital Total Dissolved Solids meter to verify exactly 0 PPM. If the meter registers even 1 PPM, DI resin tanks are immediately swapped.
            </p>
          </div>

          {/* Step 4: Professional Cleaning */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 relative">
            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <Droplets className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold font-mono text-amber-400">Stage 04</div>
            <h3 className="text-base font-bold text-white">4. Professional Cleaning</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              0 PPM pure water is delivered through carbon-fiber telescopic poles with specialized solar brushes. Because pure water has zero mineral saturation, it acts like an electrostatic solvent, pulling dirt away effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Ordinary Tap Water vs 0 PPM Comparison */}
      <section className="py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 border-b border-slate-800 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Water Mineral Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ordinary Tap Water vs. Pure Deionized Water
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Ordinary municipal tap water contains dissolved minerals that can leave visible mineral deposits depending on the municipal water source and mineral hardness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-7 rounded-2xl bg-slate-900 border border-red-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Southern California Tap Water
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-red-950/80 text-red-300 font-bold">
                250–450+ PPM TDS
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Why Garden Hoses Leave Mineral Spots</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tap water carries dissolved calcium, magnesium bicarbonate, sulfates, and silica. When sprayed onto solar panels under direct sunlight, the water evaporates rapidly, leaving these solid minerals behind in the form of white chalky rings.
            </p>
            <ul className="text-xs text-slate-400 space-y-2 pt-2 border-t border-slate-800">
              <li>· High mineral hardness causes drying scale</li>
              <li>· Requires squeegeeing which risks scratching anti-reflective coatings</li>
              <li>· Squeegee rubber leaves static rubber lines that attract fresh dust</li>
            </ul>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900 border border-emerald-900/50 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Our Deionized Water System
              </span>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 font-bold">
                000 PPM TDS (True Pure)
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">Spotless Evaporation by Definition</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Because 0 PPM pure water contains zero dissolved solids, when it evaporates in the air, there is physically nothing left behind to form a spot or residue. The solar glass dries completely crystal-clear.
            </p>
            <ul className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
              <li className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% spot-free finish without touching rubber squeegees to glass</span>
              </li>
              <li className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero chemical detergents or environmental runoff</span>
              </li>
              <li className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Adheres directly to major manufacturer warranty cleaning guides</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compliance statement */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-amber-400 inline mr-1.5" />
          <span>
            <strong>Manufacturer Compliance Note:</strong> We strictly follow solar panel manufacturer cleaning guidelines (including Tesla, SunPower, Qcells, and Canadian Solar), which recommend cleaning with demineralized water and soft brushes rather than pressure washers or harsh chemicals.
          </span>
        </div>
      </section>

      <QuoteCTASection serviceContext="0 PPM Pure Water Washing" />
    </div>
  );
}

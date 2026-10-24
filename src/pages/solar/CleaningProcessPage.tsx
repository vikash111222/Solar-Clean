import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  Droplets,
  Search,
  Camera,
  ArrowRight,
  Sun
} from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { SEOHead } from '../../components/common/SEOHead';
import { QuoteCTASection } from '../../components/common/QuoteCTASection';

export function CleaningProcessPage() {
  const steps = [
    {
      num: '01',
      title: 'Safety Setup & Rooftop Pre-Inspection',
      icon: Search,
      desc: 'Our certified technicians begin by evaluating roof access, tile condition, and ladder anchor points. We conduct a thorough visual survey of your solar array, checking for pre-existing micro-fractures in glass, loose conduit, wire exposure, or pest nests beneath panels.',
    },
    {
      num: '02',
      title: 'Dry Sweep of Heavy Surface Debris',
      icon: Sun,
      desc: 'Before water is introduced, dry leaves, pine needles, and loose twigs trapped in panel crevices are gently brushed away. This prevents organic debris from turning into a muddy slurry during the wash.',
    },
    {
      num: '03',
      title: '0 PPM Pure Deionized Water Delivery',
      icon: Droplets,
      desc: 'We activate our mobile 4-stage reverse osmosis and deionization filtration rig. Digital in-line TDS testing confirms the water has 0 Parts Per Million dissolved solids before the first drop touches your glass.',
    },
    {
      num: '04',
      title: 'Soft-Bristle Agitation & Scrub',
      icon: ShieldCheck,
      desc: 'Using ultra-light carbon-fiber telescopic poles equipped with specialized dual-trim flagged solar brushes, our technicians gently agitate baked-on dust, traffic soot, and stubborn bird droppings without applying harmful mechanical pressure.',
    },
    {
      num: '05',
      title: 'Final Spot-Free Cascade Rinse',
      icon: Droplets,
      desc: 'A continuous sheeting flow of 0 PPM pure water rinses away all loosened suspended dirt. Because pure water contains zero minerals, it evaporates completely streak-free with no need for rubber squeegees.',
    },
    {
      num: '06',
      title: 'Post-Wash Photo Verification & Report',
      icon: Camera,
      desc: 'We capture comprehensive high-resolution after photos from multiple angles, verify the inverter display if accessible, and email you a verified completion report for your records.',
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Our Solar Panel Cleaning Process | 6-Step Spotless Methodology"
        description="Discover our 6-step professional solar panel cleaning process: safety pre-inspection, 0 PPM pure deionized water, soft-brush agitation, and photo verification."
        canonicalPath="/solar-panel-cleaning-process/"
        schemaType="Service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/solar-panel-cleaning/' },
          { name: 'Cleaning Process', url: '/solar-panel-cleaning-process/' },
        ]}
      />

      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Certified Exterior Standards</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Professional Solar Panel Cleaning Process
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every residential and commercial system in Southern California receives our meticulous 6-step treatment to guarantee maximum energy recovery with zero roof or panel damage.
          </p>
        </div>
      </section>

      {/* 6 Steps Grid */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col sm:flex-row items-start gap-6 shadow-lg"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-amber-400">{s.num}</span>
                    <h3 className="text-lg font-bold text-white">{s.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
          <h4 className="text-sm font-bold text-white">Need a Service Estimate for Your Rooftop?</h4>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Our satellite estimation team can calculate your panel count and provide transparent pricing in minutes.
          </p>
          <div className="pt-2">
            <Link
              to="/request-a-quote/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs shadow-md transition-colors"
            >
              <span>Get Your Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <QuoteCTASection serviceContext="Our Cleaning Process" />
    </div>
  );
}

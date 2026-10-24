import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  ShieldCheck,
  Droplets,
  Bird,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  MapPin,
  HelpCircle,
  Sparkles,
  ChevronRight,
  Calculator,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { TrustBadges } from '../components/common/TrustBadges';
import { QuoteCTASection } from '../components/common/QuoteCTASection';
import { GALLERY_PROJECTS } from '../data/galleryData';
import { REVIEWS_DATA } from '../data/reviews';
import { LOCATIONS } from '../data/locations';
import { FAQS_DATA } from '../data/faqs';

export function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const featuredLocations = LOCATIONS.slice(0, 8);
  const homeFaqs = FAQS_DATA.slice(0, 5);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-slate-950 text-slate-100">
      <SEOHead
        title="Professional Solar Panel Cleaning in Southern California"
        description="Maximize solar efficiency with 0 PPM pure deionized water cleaning, solar panel bird proofing, and gutter maintenance across Southern California."
        canonicalPath="/"
        schemaType="LocalBusiness"
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 border-b border-slate-800">
        {/* Subtle background solar grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Action Triggers */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Southern California’s 0 PPM Pure Water Specialists</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                Professional Solar Panel Cleaning in{' '}
                <span className="text-amber-400">Southern California.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Restore lost energy output, remove baked-on California dust and bird droppings, and safeguard your warranty with spot-free 0 PPM deionized pure water washing, heavy-duty bird proofing mesh, and complete rain gutter clearing.
              </p>

              {/* Action Buttons: Get Quote, Call Now, Text Us */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to="/request-a-quote/"
                  className="px-7 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-base shadow-xl shadow-amber-500/20 hover:scale-102 transition-all flex items-center justify-center gap-2 group"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold text-base transition-colors flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`sms:${COMPANY_CONFIG.smsNumber}`}
                  className="px-5 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl font-medium text-base transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Text Us</span>
                </a>
              </div>

              {/* Proof Metric Strip */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div>
                  <div className="text-2xl font-black text-amber-400 tabular-nums">Up to 30%</div>
                  <div className="text-xs text-slate-400">Power Output Recovery</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white tabular-nums">0 PPM</div>
                  <div className="text-xs text-slate-400">Target Pure Water TDS</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white tabular-nums">$2M</div>
                  <div className="text-xs text-slate-400">General Liability Policy</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Before/After Visual Teaser */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-2xl relative">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Interactive Result Comparison
                    </span>
                  </div>
                  <span className="text-[11px] text-amber-400 font-medium">Drag to compare</span>
                </div>
                <BeforeAfterSlider project={GALLERY_PROJECTS[0]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <TrustBadges />

      {/* 3. RESIDENTIAL VS COMMERCIAL SERVICE SPLIT CARDS */}
      <section className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Tailored Exterior Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designed for Homeowners & Property Managers
            </h2>
            <p className="text-sm text-slate-400">
              Whether preserving a residential Spanish tile roof or managing a multi-building logistics park, our certified technicians deliver compliant, spotless care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all shadow-xl group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Sun className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                    Single Family & Townhomes
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    Residential Solar & Exterior Care
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Designed specifically for Southern California homeowners looking to maximize electric bill offsets, protect brittle tile roofs, and stop noisy pigeons from nesting underneath arrays.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>0 PPM spot-free deionized pure water wash with soft brushes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Warranty-safe, non-penetrating bird proofing mesh clips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Spanish clay & concrete tile zero-breakage guarantee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Full rain gutter clearing and downspout water flushing</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/residential-solar-panel-cleaning/"
                  className="px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm text-center hover:bg-amber-300 transition-colors"
                >
                  Explore Residential Services
                </Link>
                <Link
                  to="/request-a-quote/"
                  className="px-5 py-3 rounded-xl bg-slate-800 text-white font-medium text-sm text-center hover:bg-slate-700 transition-colors"
                >
                  Get Residential Quote
                </Link>
              </div>
            </div>

            {/* Commercial Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all shadow-xl group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                    Warehouses & Corporate Campuses
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    Commercial Solar & Fleet Cleaning
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Scalable commercial maintenance for distribution centers, retail plazas, manufacturing plants, and solar parking canopies across Los Angeles, the Inland Empire, and Orange County.
                  </p>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>$2,000,000 commercial liability coverage & workers’ comp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>OSHA fall protection certified with safety tie-off rigging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>High-volume mobile RO/DI pure water filtration systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Night and weekend off-peak scheduling to prevent downtime</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/commercial-solar-panel-cleaning/"
                  className="px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm text-center hover:bg-amber-300 transition-colors"
                >
                  Explore Commercial Services
                </Link>
                <Link
                  to="/request-a-quote/"
                  className="px-5 py-3 rounded-xl bg-slate-800 text-white font-medium text-sm text-center hover:bg-slate-700 transition-colors"
                >
                  Commercial RFP & Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE MAIN SERVICE CARDS WITH DEDICATED LINKS */}
      <section className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 3 Signature Exterior Services
            </h2>
            <p className="text-sm text-slate-400">
              Each service is executed with specialized equipment, certified techniques, and zero chemical detergents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Solar Cleaning */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">01. Solar Panel Cleaning</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Laboratory-grade 0 PPM deionized water dissolves baked dust, traffic soot, and pollen without abrasive chemicals. Restores up to 30% lost energy production.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <div>· 4-Stage reverse osmosis pure water</div>
                  <div>· Soft-bristle agitated scrub poles</div>
                  <div>· 100% spot-free solar glass guarantee</div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/solar-panel-cleaning/"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 group"
                >
                  <span>Learn more about solar cleaning</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service 2: Bird Proofing */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <Bird className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">02. Solar Bird Proofing</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Stops pigeons and rodents from roosting beneath panels. Heavy galvanized steel mesh with black UV-coating installed with non-penetrating warranty-safe clips.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <div>· No drilling into panel frames or tile</div>
                  <div>· Nest removal & biological sanitation</div>
                  <div>· Lifetime mesh integrity guarantee</div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/solar-panel-bird-proofing/"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 group"
                >
                  <span>Learn more about bird proofing</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Service 3: Gutter Cleaning */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-7 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">03. Rain Gutter Cleaning</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Safely clears leaves, pine needles, and roof grit from gutters. Includes downspout water flushing to prevent fascia rot and foundation water pooling.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <div>· Complete manual and vacuum removal</div>
                  <div>· High-flow downspout pressure checks</div>
                  <div>· Clean debris bagging and hauling</div>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  to="/gutter-cleaning/"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 group"
                >
                  <span>Learn more about gutter cleaning</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EDUCATIONAL PURE WATER SECTION (0 PPM TDS) */}
      <section className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                The Science of Pure Water
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Why We Filter & Deionize Water to Exactly 0 PPM TDS
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ordinary municipal tap water in Southern California contains 200 to 450+ parts per million (PPM) of dissolved calcium, magnesium, and silica. In hot sun, tap water evaporates in seconds, leaving hard mineral crusts that permanently shade solar cells.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our 4-stage mobile filtration rig removes 100% of dissolved solids. Pure deionized water behaves like an electrostatic sponge: it absorbs dirt particles, rinses clean, and evaporates 100% spot-free with zero squeegee lines.
              </p>

              {/* TDS Comparison Metric */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-red-900/40">
                  <div className="text-xs font-bold text-red-400 mb-1">SoCal Tap Water</div>
                  <div className="text-3xl font-extrabold text-white tabular-nums">280–450 <span className="text-xs font-normal text-slate-400">PPM</span></div>
                  <p className="text-[11px] text-slate-400 mt-1">Leaves heavy calcium and silica spots</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-900/60">
                  <div className="text-xs font-bold text-emerald-400 mb-1">Our Deionized Water</div>
                  <div className="text-3xl font-extrabold text-amber-400 tabular-nums">0 <span className="text-xs font-normal text-slate-400">PPM</span></div>
                  <p className="text-[11px] text-slate-400 mt-1">100% mineral-free, spot-free evaporation</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/pure-water-solar-panel-cleaning/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"
                >
                  <span>Explore the complete 4-stage pure water process</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Process Illustration */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                  Our 4-Stage Pure Water System
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      num: '01',
                      title: 'Sediment Pre-Filter',
                      desc: 'Removes rust, sand, silt, and large particulate down to 5 microns.',
                    },
                    {
                      num: '02',
                      title: 'Carbon Block Filtration',
                      desc: 'Extracts chlorine, chloramines, and organic volatile chemicals.',
                    },
                    {
                      num: '03',
                      title: 'Reverse Osmosis (RO) Membrane',
                      desc: 'Strips out 95%+ of heavy mineral salts and hardness ions.',
                    },
                    {
                      num: '04',
                      title: 'Mixed-Bed Deionizing (DI) Resin',
                      desc: 'Pulls the remaining dissolved solids down to verified 0 PPM.',
                    },
                  ].map((stage) => (
                    <div key={stage.num} className="flex items-start gap-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                      <span className="font-mono text-sm font-bold text-amber-400">{stage.num}</span>
                      <div>
                        <h4 className="text-xs font-bold text-white">{stage.title}</h4>
                        <p className="text-[11px] text-slate-400 leading-normal">{stage.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BEFORE-AND-AFTER GALLERY PREVIEW */}
      <section className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Visual Evidence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Before & After Demonstrations
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Drag the interactive sliders below to view real results across residential dust, pigeon infestations, and commercial solar arrays.
              </p>
            </div>
            <Link
              to="/gallery/"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-xs border border-slate-700 transition-colors self-start md:self-auto flex items-center gap-1.5"
            >
              <span>View Full Gallery (6 Projects)</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BeforeAfterSlider project={GALLERY_PROJECTS[0]} />
            <BeforeAfterSlider project={GALLERY_PROJECTS[1]} />
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              The SoCal Solar Clean Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Southern California Homeowners Trust Us
            </h2>
            <p className="text-sm text-slate-400">
              We focus exclusively on rooftop solar arrays, pigeon proofing, and rain gutters. No pressure washers, no harsh soaps, and zero shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Tile Roof Specialists',
                desc: 'Specialized ladder stand-offs and weight dispersion techniques ensure brittle Spanish tile and concrete roofs remain 100% crack-free.',
                icon: ShieldCheck,
              },
              {
                title: 'No-Drill Bird Barriers',
                desc: 'Heavy-gauge black steel mesh attaches with non-penetrating solar clips, preserving equipment and roofing warranties entirely.',
                icon: Bird,
              },
              {
                title: 'Satellite Sizing',
                desc: 'We utilize high-resolution satellite imagery to verify panel count, roof angles, and access points, delivering accurate quotes in minutes.',
                icon: Sun,
              },
              {
                title: 'Photo Verification',
                desc: 'Before and after high-definition photos are provided with every completed invoice, verifying spot-free cleanliness and bird barrier fit.',
                icon: Sparkles,
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. SOUTHERN CALIFORNIA SERVICE AREA PREVIEW */}
      <section className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Local Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Southern California Service Areas
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Serving 24 key cities across Orange County, Los Angeles County, Riverside County, San Bernardino County, and San Diego County.
              </p>
            </div>
            <Link
              to="/service-areas/"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-xs border border-slate-700 transition-colors self-start md:self-auto flex items-center gap-1.5"
            >
              <span>Browse All 24 City Landing Pages</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}/`}
                className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/40 hover:bg-slate-900/60 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{loc.county}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">{loc.sunnyDaysPerYear} Sunny Days</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {loc.cityName}, CA
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {loc.localChallenge}
                  </p>
                </div>
                <div className="pt-3 flex items-center justify-between text-xs text-amber-400 font-medium">
                  <span>View local solar guide</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER REVIEWS SECTION */}
      <section className="py-16 md:py-24 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Verified Client Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Customer Reviews & Real Output Gains
            </h2>
            <p className="text-sm text-slate-400">
              Real Southern California homeowners and facility managers share their before-and-after results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    {review.powerIncrease && (
                      <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        {review.powerIncrease}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">&quot;{review.title}&quot;</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">&quot;{review.comment}&quot;</p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs">
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-slate-400">{review.location}</div>
                  <div className="text-[10px] text-amber-400 mt-0.5">{review.service}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/reviews/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline"
            >
              <span>Read all verified reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQS PREVIEW */}
      <section className="py-16 md:py-24 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-400">
              Common questions about pure deionized water, solar panel warranties, bird proofing, and pricing.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-amber-400 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/faqs/"
              className="text-xs font-semibold text-amber-400 hover:underline"
            >
              Have more questions? View our complete FAQ database →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FINAL QUOTE CTA */}
      <QuoteCTASection />
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Filter,
  CheckCircle2,
  Info,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { QuoteCTASection } from '../components/common/QuoteCTASection';
import { GALLERY_PROJECTS, GalleryProject } from '../data/galleryData';

export function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProjectModal, setSelectedProjectModal] = useState<GalleryProject | null>(null);

  const filteredProjects = GALLERY_PROJECTS.filter((proj) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'solar-cleaning') return proj.category === 'solar-cleaning';
    if (selectedFilter === 'bird-proofing') return proj.category === 'bird-proofing';
    if (selectedFilter === 'gutter-cleaning') return proj.category === 'gutter-cleaning';
    if (selectedFilter === 'residential') return proj.customerType === 'residential';
    if (selectedFilter === 'commercial') return proj.customerType === 'commercial';
    return true;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Before & After Solar Cleaning Gallery | Southern California"
        description="Interactive before and after comparison gallery for residential and commercial solar panel cleaning, bird proofing mesh installation, and gutter cleaning."
        canonicalPath="/gallery/"
        schemaType="WebPage"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Gallery', url: '/gallery/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Interactive Comparison Demonstrations</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Before & After Solar Cleaning Gallery
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Drag the interactive divider sliders left and right to inspect real results across residential dust removal, pigeon infestation cleanup, and commercial megawatt arrays.
          </p>

          <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-400 max-w-xl mx-auto flex items-center gap-2 text-left">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Demonstration Notice:</strong> Interactive comparison visuals accurately represent documented project results until custom job photo uploads are published for individual projects.
            </span>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'solar-cleaning', label: 'Solar Panel Cleaning' },
            { id: 'bird-proofing', label: 'Bird Proofing' },
            { id: 'gutter-cleaning', label: 'Gutter Cleaning' },
            { id: 'residential', label: 'Residential Projects' },
            { id: 'commercial', label: 'Commercial Projects' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedFilter === tab.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
            >
              <BeforeAfterSlider project={project} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 bg-slate-950 rounded-xl border border-red-950/60 space-y-1">
                  <span className="font-bold text-red-400">Before Treatment Condition:</span>
                  <p className="text-slate-400 leading-tight">{project.beforeDetails}</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-emerald-950/60 space-y-1">
                  <span className="font-bold text-emerald-400">After Treatment Condition:</span>
                  <p className="text-slate-400 leading-tight">{project.afterDetails}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTASection />
    </div>
  );
}

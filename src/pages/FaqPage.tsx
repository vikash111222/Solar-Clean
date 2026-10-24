import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { QuoteCTASection } from '../components/common/QuoteCTASection';
import { FAQS_DATA } from '../data/faqs';

export function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Frequently Asked Questions | Solar Cleaning & Bird Proofing FAQs"
        description="Find clear answers to common questions about pure deionized water, solar warranties, pigeon proofing mesh, gutter maintenance, and pricing in Southern California."
        canonicalPath="/faqs/"
        schemaType="FAQPage"
        schemaData={{
          mainEntity: FAQS_DATA.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQs', url: '/faqs/' },
        ]}
      />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Knowledge Base & Answers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our 0 PPM pure water filtration, warranty compliance, pigeon exclusion mesh, and gutter clearing services.
          </p>

          <div className="max-w-md mx-auto relative pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. warranty, tap water, pigeons)..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs & Accordions */}
      <section className="py-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All FAQs' },
            { id: 'pure-water', label: '0 PPM Pure Water' },
            { id: 'solar-cleaning', label: 'Solar Cleaning' },
            { id: 'bird-proofing', label: 'Bird Proofing' },
            { id: 'gutter-cleaning', label: 'Gutter Cleaning' },
            { id: 'commercial', label: 'Commercial Services' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="space-y-3 pt-2">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-amber-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
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
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 bg-slate-950/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 text-slate-400 text-xs">
            No questions matched your search query. Please try another keyword or contact us directly.
          </div>
        )}

        {/* Still have questions banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center space-y-4">
          <h3 className="text-lg font-bold text-white">Still Have Questions About Your Roof or Solar?</h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Our solar technicians are ready to answer any questions about tile roofs, equipment warranties, or pigeon exclusion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contact-us/"
              className="px-5 py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-md hover:bg-amber-300 transition-colors"
            >
              Contact Us Directly
            </Link>
            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="px-5 py-2.5 bg-slate-800 text-white font-semibold text-xs rounded-xl border border-slate-700 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: {COMPANY_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>

      <QuoteCTASection />
    </div>
  );
}

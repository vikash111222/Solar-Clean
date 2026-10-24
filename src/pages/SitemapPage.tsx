import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, FileText, Code, Check } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { LOCATIONS } from '../data/locations';

export function SitemapPage() {
  const [viewMode, setViewMode] = useState<'visual' | 'xml'>('visual');
  const [copied, setCopied] = useState<boolean>(false);

  const mainPages = [
    { url: '/', title: 'Homepage', priority: '1.0' },
    { url: '/about-us/', title: 'About the Company', priority: '0.8' },
    { url: '/contact-us/', title: 'Contact Information', priority: '0.8' },
    { url: '/request-a-quote/', title: 'Multi-Step Quote Request', priority: '0.9' },
    { url: '/service-areas/', title: 'Southern California Service Areas', priority: '0.9' },
    { url: '/gallery/', title: 'Before-and-After Gallery', priority: '0.8' },
    { url: '/reviews/', title: 'Customer Reviews', priority: '0.8' },
    { url: '/faqs/', title: 'Frequently Asked Questions', priority: '0.8' },
  ];

  const solarPages = [
    { url: '/solar-panel-cleaning/', title: 'Main Solar Panel Cleaning Service', priority: '0.9' },
    { url: '/residential-solar-panel-cleaning/', title: 'Residential Solar Cleaning', priority: '0.9' },
    { url: '/commercial-solar-panel-cleaning/', title: 'Commercial Solar Cleaning', priority: '0.9' },
    { url: '/pure-water-solar-panel-cleaning/', title: '0 PPM Pure Water Process', priority: '0.8' },
    { url: '/solar-panel-cleaning-process/', title: 'Our Cleaning Process', priority: '0.8' },
  ];

  const birdPages = [
    { url: '/solar-panel-bird-proofing/', title: 'Main Solar Bird Proofing Service', priority: '0.9' },
    { url: '/residential-solar-panel-bird-proofing/', title: 'Residential Bird Proofing', priority: '0.8' },
    { url: '/commercial-solar-panel-bird-proofing/', title: 'Commercial Bird Proofing', priority: '0.8' },
  ];

  const gutterPages = [
    { url: '/gutter-cleaning/', title: 'Main Gutter Cleaning Service', priority: '0.8' },
    { url: '/residential-gutter-cleaning/', title: 'Residential Gutter Cleaning', priority: '0.8' },
    { url: '/commercial-gutter-cleaning/', title: 'Commercial Gutter Cleaning', priority: '0.8' },
  ];

  const legalPages = [
    { url: '/privacy-policy/', title: 'Privacy Policy', priority: '0.4' },
    { url: '/terms-and-conditions/', title: 'Terms & Conditions', priority: '0.4' },
  ];

  const allUrls = [
    ...mainPages,
    ...solarPages,
    ...birdPages,
    ...gutterPages,
    ...LOCATIONS.map((loc) => ({
      url: `/locations/${loc.slug}/`,
      title: `${loc.cityName}, CA Solar Cleaning & Bird Proofing`,
      priority: '0.8',
    })),
    ...legalPages,
  ];

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://socalsolarclean.com';

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${origin}${item.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const handleCopyXml = () => {
    navigator.clipboard.writeText(xmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16">
      <SEOHead
        title="HTML & XML Sitemap | SoCal Solar Clean"
        description="Complete site index and XML sitemap for SoCal Solar Clean's services, 24 local landing pages, gallery, reviews, and quote calculator."
        canonicalPath="/sitemap/"
        schemaType="WebPage"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-white">Website Sitemap & Index</h1>
            <p className="text-xs text-slate-400 mt-1">
              Complete index of all {allUrls.length} published canonical pages across Southern California.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('visual')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                viewMode === 'visual' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Visual Directory
            </button>
            <button
              onClick={() => setViewMode('xml')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                viewMode === 'xml' ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              XML Code View
            </button>
          </div>
        </div>

        {viewMode === 'visual' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
            {/* Main Pages */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
                Core Pages
              </h2>
              <ul className="space-y-2 text-slate-300">
                {mainPages.map((page) => (
                  <li key={page.url}>
                    <Link to={page.url} className="hover:text-amber-400 transition-colors">
                      {page.title} <span className="text-slate-500 font-mono">({page.url})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solar Pages */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
                Solar Panel Cleaning Pages
              </h2>
              <ul className="space-y-2 text-slate-300">
                {solarPages.map((page) => (
                  <li key={page.url}>
                    <Link to={page.url} className="hover:text-amber-400 transition-colors">
                      {page.title} <span className="text-slate-500 font-mono">({page.url})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bird Proofing & Gutters */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
                Bird Proofing & Gutters
              </h2>
              <ul className="space-y-2 text-slate-300">
                {[...birdPages, ...gutterPages].map((page) => (
                  <li key={page.url}>
                    <Link to={page.url} className="hover:text-amber-400 transition-colors">
                      {page.title} <span className="text-slate-500 font-mono">({page.url})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
                Legal & Compliance
              </h2>
              <ul className="space-y-2 text-slate-300">
                {legalPages.map((page) => (
                  <li key={page.url}>
                    <Link to={page.url} className="hover:text-amber-400 transition-colors">
                      {page.title} <span className="text-slate-500 font-mono">({page.url})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* All 24 City Pages */}
            <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider text-amber-400">
                Local City Landing Pages (24 Locations)
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-slate-300">
                {LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}/`}
                    className="hover:text-amber-400 transition-colors py-1 truncate"
                  >
                    {loc.cityName}, CA
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex justify-end">
              <button
                onClick={handleCopyXml}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied XML to Clipboard' : 'Copy XML Code'}</span>
              </button>
            </div>
            <pre className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto max-h-[500px]">
              {xmlContent}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

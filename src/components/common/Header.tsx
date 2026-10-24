import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sun, Phone } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top utility strip (optional phone & coverage notice) */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 text-xs text-slate-400 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
          <span>Serving Los Angeles, Orange County, Riverside, San Bernardino & San Diego</span>
        </div>
        <div className="flex items-center gap-6">
          <span>0 PPM Pure Deionized Water Guaranteed</span>
          <a
            href={`tel:${COMPANY_CONFIG.phone}`}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us: {COMPANY_CONFIG.phoneFormatted}</span>
          </a>
        </div>
      </div>

      {/* Main Top Bar: Strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8 h-20" ref={dropdownRef}>
        {/* Zone 1: Brand Wordmark */}
        <Link to="/" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Sun className="w-6 h-6 text-slate-950 fill-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              {COMPANY_CONFIG.name}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
              Solar & Exterior Care
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links with Accessible Dropdowns */}
        <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-slate-300">
          <Link
            to="/"
            className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${
              location.pathname === '/' ? 'text-amber-400' : ''
            }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('services')}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2"
              aria-expanded={openDropdown === 'services'}
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-amber-400' : ''}`} />
            </button>
            {openDropdown === 'services' && (
              <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                <Link
                  to="/solar-panel-cleaning/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Solar Panel Cleaning
                </Link>
                <Link
                  to="/solar-panel-bird-proofing/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Solar Panel Bird Proofing
                </Link>
                <Link
                  to="/gutter-cleaning/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Gutter Cleaning
                </Link>
                <Link
                  to="/pure-water-solar-panel-cleaning/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Pure Water Cleaning Process
                </Link>
                <div className="border-t border-slate-800 my-1"></div>
                <Link
                  to="/solar-panel-cleaning-process/"
                  className="block px-4 py-2.5 text-xs text-amber-400 hover:bg-slate-800 transition-colors font-medium"
                >
                  View Step-by-Step Cleaning Process →
                </Link>
              </div>
            )}
          </div>

          {/* Residential Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('residential')}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2"
              aria-expanded={openDropdown === 'residential'}
            >
              <span>Residential</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'residential' ? 'rotate-180 text-amber-400' : ''}`} />
            </button>
            {openDropdown === 'residential' && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                <Link
                  to="/residential-solar-panel-cleaning/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Residential Solar Panel Cleaning
                </Link>
                <Link
                  to="/residential-solar-panel-bird-proofing/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Residential Bird Proofing (Mesh)
                </Link>
                <Link
                  to="/residential-gutter-cleaning/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Residential Gutter Cleaning
                </Link>
              </div>
            )}
          </div>

          {/* Commercial Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('commercial')}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2"
              aria-expanded={openDropdown === 'commercial'}
            >
              <span>Commercial</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'commercial' ? 'rotate-180 text-amber-400' : ''}`} />
            </button>
            {openDropdown === 'commercial' && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                <Link
                  to="/commercial-solar-panel-cleaning/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Commercial Solar Panel Cleaning
                </Link>
                <Link
                  to="/commercial-solar-panel-bird-proofing/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Commercial Bird Proofing
                </Link>
                <Link
                  to="/commercial-gutter-cleaning/"
                  className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                >
                  Commercial Gutter Cleaning
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/service-areas/"
            className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${
              location.pathname.startsWith('/service-areas') || location.pathname.startsWith('/locations')
                ? 'text-amber-400'
                : ''
            }`}
          >
            Service Areas
          </Link>

          <Link
            to="/gallery/"
            className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${
              location.pathname === '/gallery/' ? 'text-amber-400' : ''
            }`}
          >
            Gallery
          </Link>

          <Link
            to="/reviews/"
            className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${
              location.pathname === '/reviews/' ? 'text-amber-400' : ''
            }`}
          >
            Reviews
          </Link>

          <Link
            to="/about-us/"
            className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${
              location.pathname === '/about-us/' ? 'text-amber-400' : ''
            }`}
          >
            About Us
          </Link>

          <Link
            to="/contact-us/"
            className={`hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 ${
              location.pathname === '/contact-us/' ? 'text-amber-400' : ''
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/request-a-quote/"
            className="px-5 py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow-amber-500/20 transition-all duration-200 whitespace-nowrap shrink-0"
          >
            Get a Free Quote
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-6 py-5 max-h-[80vh] overflow-y-auto space-y-4">
          <div className="space-y-1">
            <Link
              to="/"
              className="block py-2 text-base font-medium text-white hover:text-amber-400"
            >
              Home
            </Link>

            <div className="pt-2 pb-1 text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Services
            </div>
            <div className="pl-3 space-y-1.5 border-l border-slate-800">
              <Link to="/solar-panel-cleaning/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Solar Panel Cleaning
              </Link>
              <Link to="/solar-panel-bird-proofing/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Solar Panel Bird Proofing
              </Link>
              <Link to="/gutter-cleaning/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Gutter Cleaning
              </Link>
              <Link to="/pure-water-solar-panel-cleaning/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Pure Water Process (0 PPM)
              </Link>
              <Link to="/solar-panel-cleaning-process/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Our Cleaning Process
              </Link>
            </div>

            <div className="pt-3 pb-1 text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Residential
            </div>
            <div className="pl-3 space-y-1.5 border-l border-slate-800">
              <Link to="/residential-solar-panel-cleaning/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Residential Solar Cleaning
              </Link>
              <Link to="/residential-solar-panel-bird-proofing/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Residential Bird Proofing
              </Link>
              <Link to="/residential-gutter-cleaning/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Residential Gutter Cleaning
              </Link>
            </div>

            <div className="pt-3 pb-1 text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Commercial
            </div>
            <div className="pl-3 space-y-1.5 border-l border-slate-800">
              <Link to="/commercial-solar-panel-cleaning/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Commercial Solar Cleaning
              </Link>
              <Link to="/commercial-solar-panel-bird-proofing/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Commercial Bird Proofing
              </Link>
              <Link to="/commercial-gutter-cleaning/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Commercial Gutter Cleaning
              </Link>
            </div>

            <div className="pt-3 pb-1 text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Locations & Company
            </div>
            <div className="pl-3 space-y-1.5 border-l border-slate-800">
              <Link to="/service-areas/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Southern California Service Areas
              </Link>
              <Link to="/gallery/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Before & After Gallery
              </Link>
              <Link to="/reviews/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Customer Reviews
              </Link>
              <Link to="/faqs/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                FAQs
              </Link>
              <Link to="/about-us/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                About Us
              </Link>
              <Link to="/contact-us/" className="block py-1 text-sm text-slate-300 hover:text-amber-400">
                Contact Information
              </Link>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <Link
              to="/request-a-quote/"
              className="w-full text-center py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
            >
              Request a Free Quote
            </Link>
            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="w-full text-center py-2.5 text-sm font-medium text-white bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {COMPANY_CONFIG.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

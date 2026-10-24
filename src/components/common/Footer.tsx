import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, Clock, ShieldCheck, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { LOCATIONS } from '../../data/locations';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const topCities = LOCATIONS.slice(0, 12);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20">
                <Sun className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_CONFIG.name}
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Southern California’s premier solar panel cleaning, pure deionized water washing, critter proofing, and gutter maintenance specialist. Dedicated to restoring solar efficiency and protecting rooftop investments.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_CONFIG.licenseAndInsurance.insuranceCoverage}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>{COMPANY_CONFIG.licenseAndInsurance.licenseType}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                <span>OSHA Fall Protection & Safety Compliant</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/solar-panel-cleaning/" className="hover:text-amber-400 transition-colors">
                  Solar Panel Cleaning
                </Link>
              </li>
              <li>
                <Link to="/residential-solar-panel-cleaning/" className="hover:text-amber-400 transition-colors">
                  Residential Solar Cleaning
                </Link>
              </li>
              <li>
                <Link to="/commercial-solar-panel-cleaning/" className="hover:text-amber-400 transition-colors">
                  Commercial Solar Cleaning
                </Link>
              </li>
              <li>
                <Link to="/solar-panel-bird-proofing/" className="hover:text-amber-400 transition-colors">
                  Solar Bird Proofing
                </Link>
              </li>
              <li>
                <Link to="/gutter-cleaning/" className="hover:text-amber-400 transition-colors">
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link to="/pure-water-solar-panel-cleaning/" className="hover:text-amber-400 transition-colors">
                  0 PPM Pure Water Process
                </Link>
              </li>
              <li>
                <Link to="/solar-panel-cleaning-process/" className="hover:text-amber-400 transition-colors">
                  Our 5-Step Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/request-a-quote/" className="hover:text-amber-400 transition-colors font-medium text-amber-400">
                  Request a Free Quote
                </Link>
              </li>
              <li>
                <Link to="/gallery/" className="hover:text-amber-400 transition-colors">
                  Before & After Gallery
                </Link>
              </li>
              <li>
                <Link to="/reviews/" className="hover:text-amber-400 transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link to="/service-areas/" className="hover:text-amber-400 transition-colors">
                  All Service Areas
                </Link>
              </li>
              <li>
                <Link to="/faqs/" className="hover:text-amber-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/about-us/" className="hover:text-amber-400 transition-colors">
                  About Our Company
                </Link>
              </li>
              <li>
                <Link to="/contact-us/" className="hover:text-amber-400 transition-colors">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operating Hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
              Contact & Hours
            </h3>
            <div className="space-y-2.5 text-sm text-slate-400">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_CONFIG.phoneFormatted}</span>
              </a>

              <a
                href={`sms:${COMPANY_CONFIG.smsNumber}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Text: {COMPANY_CONFIG.smsFormatted}</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{COMPANY_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-xs">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-slate-400">
                  <div>{COMPANY_CONFIG.businessHours.weekdays}</div>
                  <div>{COMPANY_CONFIG.businessHours.saturday}</div>
                  <div>{COMPANY_CONFIG.businessHours.sunday}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Headquarters: {COMPANY_CONFIG.address.headquartersCity}, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Service Area City Links (SEO Internal Links) */}
        <div className="py-8 border-b border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Southern California Confirmed Service Cities
            </h4>
            <Link to="/service-areas/" className="text-xs text-amber-400 hover:underline">
              View all 24 cities →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs text-slate-400">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}/`}
                className="hover:text-amber-400 transition-colors py-1 truncate"
              >
                {city.cityName}, CA
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {COMPANY_CONFIG.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy/" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions/" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap/" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

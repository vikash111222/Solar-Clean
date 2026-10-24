import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Home, Search, Calculator } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export function NotFoundPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex items-center justify-center py-20 px-4">
      <SEOHead
        title="Page Not Found (404) | SoCal Solar Clean"
        description="The requested page could not be found. Explore our solar panel cleaning services or request a free quote."
        canonicalPath="/404/"
      />

      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto">
          <Sun className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-black text-amber-400 font-mono">404</div>
          <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/request-a-quote/"
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>Request a Quote</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 space-x-3">
          <Link to="/service-areas/" className="hover:text-amber-400">Service Areas</Link>
          <span>·</span>
          <Link to="/solar-panel-cleaning/" className="hover:text-amber-400">Solar Cleaning</Link>
          <span>·</span>
          <Link to="/contact-us/" className="hover:text-amber-400">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

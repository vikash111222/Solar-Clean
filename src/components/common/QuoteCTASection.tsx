import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Sun } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface QuoteCTASectionProps {
  title?: string;
  subtitle?: string;
  serviceContext?: string;
}

export function QuoteCTASection({
  title = 'Ready to Restore Your Solar Output & Protect Your Roof?',
  subtitle = 'Get a transparent, satellite-verified quote in minutes. Serving Los Angeles, Orange County, Riverside, San Bernardino, and San Diego.',
  serviceContext,
}: QuoteCTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 text-white py-16 md:py-24 border-t border-slate-800">
      {/* Subtle background solar pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
          <Sun className="w-4 h-4 text-amber-400" />
          <span>{serviceContext ? `${serviceContext} · ` : ''}Guaranteed 0 PPM Pure Water Wash</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            to="/request-a-quote/"
            className="w-full sm:w-auto px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-base shadow-xl shadow-amber-500/20 hover:scale-102 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`tel:${COMPANY_CONFIG.phone}`}
            className="w-full sm:w-auto px-7 py-4 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold text-base transition-colors flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Call: {COMPANY_CONFIG.phoneFormatted}</span>
          </a>

          <a
            href={`sms:${COMPANY_CONFIG.smsNumber}`}
            className="w-full sm:w-auto px-6 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl font-medium text-base transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <span>Text Us</span>
          </a>
        </div>

        {/* Trust verification statement */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>$2,000,000 Commercial Liability Coverage</span>
          </div>
          <span>·</span>
          <span>No High-Pressure Sales</span>
          <span>·</span>
          <span>Same-Day Satellite Estimates</span>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      <a
        href={`tel:${COMPANY_CONFIG.phone}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 hover:bg-slate-800 transition-colors"
        aria-label="Call SoCal Solar Clean"
      >
        <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
        <span className="text-[11px] font-semibold">Call</span>
      </a>

      <a
        href={`sms:${COMPANY_CONFIG.smsNumber}?body=Hi%20SoCal%20Solar%20Clean%2C%20I%20would%20like%20a%20quote%20for%20my%20property.`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 hover:bg-slate-800 transition-colors"
        aria-label="Text SoCal Solar Clean"
      >
        <MessageSquare className="w-4 h-4 text-amber-400 mb-0.5" />
        <span className="text-[11px] font-semibold">Text</span>
      </a>

      <Link
        to="/request-a-quote/"
        className="flex-[1.5] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg font-bold text-xs shadow-md shadow-amber-500/20 transition-colors whitespace-nowrap"
      >
        <Calculator className="w-4 h-4" />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}

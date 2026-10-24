import { ShieldCheck, Droplets, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Fully Insured',
      description: COMPANY_CONFIG.licenseAndInsurance.insuranceCoverage,
    },
    {
      icon: Droplets,
      title: '0 PPM Pure Deionized Water',
      description: 'Zero minerals, zero streaks, zero calcium spot buildup',
    },
    {
      icon: Award,
      title: 'Warranty-Safe Methods',
      description: 'Compliant with Tesla, SunPower, Qcells & LG requirements',
    },
    {
      icon: Sparkles,
      title: 'Zero Chemical Residue',
      description: '100% safe for roof tiles, landscaping, pets, and runoff',
    },
    {
      icon: CheckCircle2,
      title: '100% Satisfaction Guarantee',
      description: 'Before & after photo proof provided on every single job',
    },
  ];

  return (
    <div className="bg-slate-900 border-y border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{b.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

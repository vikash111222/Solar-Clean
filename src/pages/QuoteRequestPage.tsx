import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  User,
  Building,
  Home,
  Shield,
  Sun,
  Droplets,
  Bird,
  Upload,
  Calendar,
  AlertCircle,
  FileCheck,
  Phone,
  Lock,
  ArrowRight
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { LOCATIONS } from '../data/locations';

export interface QuoteFormData {
  customerType: 'residential' | 'commercial' | 'property-manager' | 'other' | '';
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  city: string;
  zipCode: string;
  propertyType: string;
  panelCount: number | 'unknown';
  numberOfBuildings: number;
  roofAccessibility: string;
  selectedServices: string[];
  birdActivity: string;
  approximateGutterLinearFeet: string;
  preferredDate: string;
  additionalNotes: string;
  uploadedPhotoNames: string[];
  privacyConsent: boolean;
  smsConsent: boolean;
}

const INITIAL_FORM: QuoteFormData = {
  customerType: '',
  fullName: '',
  phone: '',
  email: '',
  propertyAddress: '',
  city: '',
  zipCode: '',
  propertyType: 'Single Family Home',
  panelCount: 24,
  numberOfBuildings: 1,
  roofAccessibility: 'Standard Pitch Roof (Safe Access)',
  selectedServices: ['Solar Panel Cleaning'],
  birdActivity: 'Noticeable birds roosting / occasional droppings',
  approximateGutterLinearFeet: '100-150 ft',
  preferredDate: '',
  additionalNotes: '',
  uploadedPhotoNames: [],
  privacyConsent: false,
  smsConsent: false,
};

export function QuoteRequestPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionId, setSubmissionId] = useState<string>('');

  const totalSteps = 6;

  const updateField = (field: keyof QuoteFormData, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleService = (service: string) => {
    const current = formData.selectedServices;
    if (current.includes(service)) {
      if (current.length > 1) {
        updateField('selectedServices', current.filter((s) => s !== service));
      }
    } else {
      updateField('selectedServices', [...current, service]);
    }
  };

  const validateStep = (step: number): boolean => {
    const stepErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.customerType) {
        stepErrors.customerType = 'Please select your customer or property category.';
      }
    }

    if (step === 2) {
      if (!formData.fullName.trim()) stepErrors.fullName = 'Full name is required.';
      if (!formData.phone.trim() || formData.phone.length < 10) {
        stepErrors.phone = 'Valid phone number is required for quote confirmation.';
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        stepErrors.email = 'Valid email address is required.';
      }
      if (!formData.propertyAddress.trim()) {
        stepErrors.propertyAddress = 'Property address is required for satellite roof sizing.';
      }
      if (!formData.city.trim()) stepErrors.city = 'City is required.';
      if (!formData.zipCode.trim() || formData.zipCode.length < 5) {
        stepErrors.zipCode = '5-digit ZIP code is required.';
      }
    }

    if (step === 3) {
      if (!formData.propertyType) stepErrors.propertyType = 'Please select a property type.';
    }

    if (step === 4) {
      if (formData.selectedServices.length === 0) {
        stepErrors.selectedServices = 'Please select at least one service.';
      }
    }

    if (step === 6) {
      if (!formData.privacyConsent) {
        stepErrors.privacyConsent = 'You must agree to the privacy policy to submit your quote request.';
      }
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;

    setIsSubmitting(true);

    // Simulate backend submission to CRM / Supabase / local storage
    setTimeout(() => {
      const generatedId = `SOCAL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionId(generatedId);

      const existingQuotes = JSON.parse(localStorage.getItem('socal_quote_requests') || '[]');
      existingQuotes.push({
        id: generatedId,
        submittedAt: new Date().toISOString(),
        ...formData,
      });
      localStorage.setItem('socal_quote_requests', JSON.stringify(existingQuotes));

      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 80, behavior: 'smooth' });
    }, 1200);
  };

  const handlePhotoUploadSim = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      updateField('uploadedPhotoNames', [...formData.uploadedPhotoNames, ...names]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 md:py-16">
      <SEOHead
        title="Request a Free Solar & Exterior Cleaning Quote"
        description="Get a fast, transparent quote for residential or commercial solar panel cleaning, bird proofing mesh, and gutter cleaning in Southern California."
        canonicalPath="/request-a-quote/"
        schemaType="Service"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Request a Quote', url: '/request-a-quote/' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Sun className="w-3.5 h-3.5" />
            <span>Fast Satellite Estimates · Zero Obligation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request Your Free Quote
          </h1>
          <p className="text-sm text-slate-400">
            Provide your property details below for an accurate, satellite-verified price estimate. We use 0 PPM pure deionized water and non-penetrating bird proofing.
          </p>
        </div>

        {/* Success Confirmation State */}
        {isSubmitted ? (
          <div className="bg-slate-900 border border-emerald-600/60 rounded-2xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-400">
                Quote Request Received Successfully
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Thank You, {formData.fullName}!
              </h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Your reference ID is <span className="font-mono font-bold text-amber-400">{submissionId}</span>. Our satellite estimation specialist will review your rooftop array and deliver your personalized quote shortly.
              </p>
            </div>

            {/* Summary card */}
            <div className="max-w-lg mx-auto bg-slate-950/80 rounded-xl p-5 border border-slate-800 text-left text-xs space-y-2.5">
              <div className="font-bold text-slate-300 border-b border-slate-800 pb-2 flex justify-between">
                <span>Summary of Request</span>
                <span className="text-amber-400 capitalize">{formData.customerType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Property:</span>
                <span className="text-white font-medium">{formData.propertyAddress}, {formData.city}, CA {formData.zipCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Services:</span>
                <span className="text-amber-300 font-medium">{formData.selectedServices.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Panel Estimate:</span>
                <span className="text-white">{formData.panelCount === 'unknown' ? 'Satellite Verification Needed' : `${formData.panelCount} Panels`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Phone & Email:</span>
                <span className="text-slate-300">{formData.phone} · {formData.email}</span>
              </div>
            </div>

            {/* Next steps timeline */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-3.5 bg-slate-950/50 rounded-xl border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold text-xs">Step 1: Satellite Review</div>
                <p className="text-[11px] text-slate-400">We inspect panel count and roof pitch via high-res aerial imagery.</p>
              </div>
              <div className="p-3.5 bg-slate-950/50 rounded-xl border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold text-xs">Step 2: Quote Delivery</div>
                <p className="text-[11px] text-slate-400">You receive a transparent quote via email and SMS text.</p>
              </div>
              <div className="p-3.5 bg-slate-950/50 rounded-xl border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold text-xs">Step 3: Easy Booking</div>
                <p className="text-[11px] text-slate-400">Select your preferred date with zero upfront payment required.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-sm transition-colors"
              >
                Return to Homepage
              </Link>
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium text-sm transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Urgent? Call {COMPANY_CONFIG.phoneFormatted}</span>
              </a>
            </div>
          </div>
        ) : (
          /* Multi-Step Form Container */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10">
            {/* Step Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span className="text-amber-400">
                  {currentStep === 1 && 'Customer Type'}
                  {currentStep === 2 && 'Contact & Property Details'}
                  {currentStep === 3 && 'System & Roof Information'}
                  {currentStep === 4 && 'Service Selection'}
                  {currentStep === 5 && 'Additional Details & Photos'}
                  {currentStep === 6 && 'Review & Confirmation'}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Step Content */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: Customer Type */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white">What type of property is this for?</h2>
                    <p className="text-xs text-slate-400">Select the option that best describes your needs.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {[
                      {
                        type: 'residential',
                        title: 'Residential Homeowner',
                        desc: 'Single-family homes, townhomes, and private residential solar systems.',
                        icon: Home,
                      },
                      {
                        type: 'commercial',
                        title: 'Commercial Business Owner',
                        desc: 'Warehouses, industrial sites, offices, retail buildings, and solar carports.',
                        icon: Building,
                      },
                      {
                        type: 'property-manager',
                        title: 'Property Manager / HOA',
                        desc: 'Multi-family residential complexes, apartment buildings, HOA portfolios.',
                        icon: User,
                      },
                      {
                        type: 'other',
                        title: 'Other Facility / Special Project',
                        desc: 'Churches, schools, agricultural sites, ground mount solar arrays.',
                        icon: Shield,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      const selected = formData.customerType === item.type;
                      return (
                        <button
                          key={item.type}
                          type="button"
                          onClick={() => updateField('customerType', item.type)}
                          className={`p-5 rounded-xl border text-left flex flex-col justify-between transition-all ${
                            selected
                              ? 'bg-amber-400/10 border-amber-400 text-white shadow-lg shadow-amber-500/10 ring-1 ring-amber-400'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            {selected && <Check className="w-5 h-5 text-amber-400" />}
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white mb-1">{item.title}</div>
                            <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {errors.customerType && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.customerType}</span>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2: Contact Details */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white">Contact & Property Location</h2>
                    <p className="text-xs text-slate-400">
                      We use your address to pull satellite imagery and verify panel layout and roof access.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-300">Full Name *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                      {errors.fullName && <p className="text-[11px] text-red-400">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="(949) 555-0123"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                      {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                      {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-300">Property Street Address *</label>
                      <input
                        type="text"
                        value={formData.propertyAddress}
                        onChange={(e) => updateField('propertyAddress', e.target.value)}
                        placeholder="1234 Pacific Coast Highway"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                      {errors.propertyAddress && <p className="text-[11px] text-red-400">{errors.propertyAddress}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">City *</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => updateField('city', e.target.value)}
                        placeholder="e.g. Irvine, Newport Beach, Los Angeles"
                        list="socal-cities"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                      <datalist id="socal-cities">
                        {LOCATIONS.map((loc) => (
                          <option key={loc.slug} value={loc.cityName} />
                        ))}
                      </datalist>
                      {errors.city && <p className="text-[11px] text-red-400">{errors.city}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">ZIP Code *</label>
                      <input
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => updateField('zipCode', e.target.value)}
                        placeholder="92618"
                        maxLength={5}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      />
                      {errors.zipCode && <p className="text-[11px] text-red-400">{errors.zipCode}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Property Information */}
              {currentStep === 3 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white">System & Roof Information</h2>
                    <p className="text-xs text-slate-400">
                      Helps our crew plan equipment, ladder heights, and pure water volume.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Roof Surface Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => updateField('propertyType', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      >
                        <option value="Single Family - Spanish Clay / S-Tile">Spanish Clay / S-Tile (Delicate Roof)</option>
                        <option value="Single Family - Concrete Tile">Concrete Tile Roof</option>
                        <option value="Single Family - Asphalt Shingle">Asphalt Composition Shingle</option>
                        <option value="Commercial - Flat Membrane / TPO">Commercial Flat Roof (TPO / Built-Up)</option>
                        <option value="Commercial - Metal Standing Seam">Metal Standing Seam</option>
                        <option value="Solar Carport / Canopy">Solar Carport / Parking Canopy</option>
                        <option value="Ground Mount Array">Ground-Mounted Array</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Roof Stories & Accessibility</label>
                      <select
                        value={formData.roofAccessibility}
                        onChange={(e) => updateField('roofAccessibility', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      >
                        <option value="1 Story - Easy Ground Access">1 Story - Easy Access</option>
                        <option value="2 Story - Standard Pitch">2 Story - Standard Pitch</option>
                        <option value="3+ Story or Steep Pitch">3+ Story or Steep Architectural Pitch</option>
                        <option value="Commercial Rooftop - Ladder Hatch">Commercial Rooftop with Hatch / Stair Access</option>
                      </select>
                    </div>

                    <div className="space-y-2 sm:col-span-2 pt-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-slate-300">
                          Approximate Solar Panel Count
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            updateField(
                              'panelCount',
                              formData.panelCount === 'unknown' ? 24 : 'unknown'
                            )
                          }
                          className="text-xs text-amber-400 hover:underline"
                        >
                          {formData.panelCount === 'unknown'
                            ? 'Switch to number input'
                            : "I don't know my exact panel count"}
                        </button>
                      </div>

                      {formData.panelCount !== 'unknown' ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <input
                              type="range"
                              min="8"
                              max="120"
                              step="2"
                              value={formData.panelCount as number}
                              onChange={(e) => updateField('panelCount', Number(e.target.value))}
                              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                            />
                            <span className="w-16 text-center font-bold text-amber-400 text-base bg-slate-950 py-1 rounded border border-slate-700">
                              {formData.panelCount}
                            </span>
                          </div>
                          <div className="flex justify-between text-[11px] text-slate-500">
                            <span>Small (8-16)</span>
                            <span>Average Home (20-32)</span>
                            <span>Large Estate (40-60)</span>
                            <span>Commercial (80+)</span>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-400">
                          No problem! Our satellite sizing technician will count your panels via aerial imaging and quote accordingly.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Select Services */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white">Select Services Needed</h2>
                    <p className="text-xs text-slate-400">
                      Combine services for our multi-service bundle discount.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: 'Solar Panel Cleaning',
                        badge: 'Most Popular',
                        desc: '0 PPM filtered deionized water wash, soft agitated brush, streak-free spotless rinse.',
                        icon: Droplets,
                      },
                      {
                        title: 'Solar Panel Bird Proofing',
                        badge: 'Pigeon Prevention',
                        desc: 'Heavy-gauge galvanized black steel mesh barriers with warranty-safe clips.',
                        icon: Bird,
                      },
                      {
                        title: 'Rain Gutter Cleaning',
                        badge: 'Drainage Protection',
                        desc: 'Debris vacuuming, downspout snaking/flushing, and clean bagging.',
                        icon: Shield,
                      },
                      {
                        title: 'Complete Exterior Solar & Gutter Bundle',
                        badge: 'Best Value',
                        desc: 'Full solar pure water wash + pigeon proofing check + complete gutter clearing.',
                        icon: Sun,
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      const selected = formData.selectedServices.includes(item.title);
                      return (
                        <div
                          key={item.title}
                          onClick={() => toggleService(item.title)}
                          className={`p-5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                            selected
                              ? 'bg-amber-400/10 border-amber-400 text-white ring-1 ring-amber-400'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${selected ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <span className="text-xs font-semibold text-amber-400">{item.badge}</span>
                            </div>
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${selected ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-700 bg-slate-950'}`}>
                              {selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                          </div>
                          <div>
                            <div className="font-bold text-sm text-white mb-1">{item.title}</div>
                            <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {errors.selectedServices && (
                    <p className="text-xs text-red-400">{errors.selectedServices}</p>
                  )}
                </div>
              )}

              {/* STEP 5: Additional Information */}
              {currentStep === 5 && (
                <div className="space-y-5">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white">Additional Information & Preferences</h2>
                    <p className="text-xs text-slate-400">
                      Help us prepare for your visit with any specific pest or roof notes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Pigeon or Bird Activity</label>
                      <select
                        value={formData.birdActivity}
                        onChange={(e) => updateField('birdActivity', e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      >
                        <option value="None observed">None observed</option>
                        <option value="Noticeable birds roosting / occasional droppings">Noticeable birds roosting / occasional droppings</option>
                        <option value="Heavy pigeon nesting with twigs and droppings under panels">Heavy pigeon nesting with twigs and droppings</option>
                        <option value="Squirrels or critters chewing wiring">Squirrels or rodents observed</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Preferred Service Timeframe</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.preferredDate}
                          onChange={(e) => updateField('preferredDate', e.target.value)}
                          placeholder="e.g. As soon as possible / Next Saturday"
                          className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                        />
                        <Calendar className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-semibold text-slate-300">Additional Notes / Special Instructions</label>
                      <textarea
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) => updateField('additionalNotes', e.target.value)}
                        placeholder="Gate code, dog on property, specific panel brand, or HOA constraints..."
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-400"
                      ></textarea>
                    </div>

                    {/* Photo Upload Area */}
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-xs font-semibold text-slate-300">Optional: Upload Roof or Panel Photos</label>
                      <label className="border-2 border-dashed border-slate-700 hover:border-amber-400/60 rounded-xl p-5 flex flex-col items-center justify-center text-center cursor-pointer bg-slate-950/40 transition-colors">
                        <Upload className="w-6 h-6 text-amber-400 mb-2" />
                        <span className="text-xs font-medium text-slate-200">
                          Click to select photos from your device
                        </span>
                        <span className="text-[11px] text-slate-500 mt-1">
                          PNG, JPG, or HEIC up to 15MB (Helps us verify roof access)
                        </span>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handlePhotoUploadSim}
                          className="hidden"
                        />
                      </label>

                      {formData.uploadedPhotoNames.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {formData.uploadedPhotoNames.map((name, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 rounded text-xs text-amber-300"
                            >
                              <FileCheck className="w-3.5 h-3.5" />
                              <span className="truncate max-w-[200px]">{name}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Review & Submit */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-white">Review Your Quote Information</h2>
                    <p className="text-xs text-slate-400">
                      Double-check your information before submission. You can click Edit to modify any step.
                    </p>
                  </div>

                  {/* Summary Review Grid */}
                  <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 space-y-4 text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <span className="text-slate-400">Customer Category:</span>{' '}
                        <span className="font-semibold text-white capitalize">{formData.customerType}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-amber-400 hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="font-semibold text-white">{formData.fullName}</div>
                        <div className="text-slate-400">{formData.phone} · {formData.email}</div>
                        <div className="text-slate-400">{formData.propertyAddress}, {formData.city}, CA {formData.zipCode}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="text-amber-400 hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="text-slate-400">Roof & System:</div>
                        <div className="font-semibold text-white">{formData.propertyType}</div>
                        <div className="text-slate-400">
                          {formData.panelCount === 'unknown' ? 'Panel count to be verified' : `${formData.panelCount} Solar Panels`} · {formData.roofAccessibility}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="text-amber-400 hover:underline"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-slate-400">Selected Services:</div>
                        <div className="font-semibold text-amber-300">
                          {formData.selectedServices.join(', ')}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="text-amber-400 hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                  </div>

                  {/* Consent Checkboxes */}
                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) => updateField('privacyConsent', e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded bg-slate-950 border-slate-700 text-amber-400 focus:ring-amber-400"
                      />
                      <span className="text-xs text-slate-300 leading-relaxed">
                        I agree to the{' '}
                        <Link to="/privacy-policy/" target="_blank" className="text-amber-400 underline">
                          Privacy Policy
                        </Link>{' '}
                        and consent to SoCal Solar Clean evaluating my property imagery and contacting me regarding this quote request. *
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-[11px] text-red-400 pl-7">{errors.privacyConsent}</p>
                    )}

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.smsConsent}
                        onChange={(e) => updateField('smsConsent', e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded bg-slate-950 border-slate-700 text-amber-400 focus:ring-amber-400"
                      />
                      <span className="text-xs text-slate-400 leading-relaxed">
                        (Optional) I consent to receive automated quote updates and scheduling SMS text messages at the phone number provided. Msg & data rates may apply. Reply STOP anytime.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-sm font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-bold flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-extrabold flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                        <span>Calculating & Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

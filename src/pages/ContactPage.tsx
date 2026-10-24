import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageSquare,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  Check,
  Send,
  AlertCircle
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      return;
    }

    // Save inquiry to localStorage
    const inquiries = JSON.parse(localStorage.getItem('socal_inquiries') || '[]');
    inquiries.push({
      ...formData,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem('socal_inquiries', JSON.stringify(inquiries));

    setSubmitted(true);
    setError('');
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Contact SoCal Solar Clean | Phone, SMS & Service Requests"
        description="Contact our Southern California solar panel cleaning team. Call, text, or submit a message for fast quotes, scheduling, or commercial RFP questions."
        canonicalPath="/contact-us/"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact Us', url: '/contact-us/' },
        ]}
      />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Responsive Local Team</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Contact SoCal Solar Clean
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about your solar panels, bird proofing, or commercial maintenance? Call, text, or send a message below for prompt assistance.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Get in Touch Directly</h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our customer service team and dispatchers are based right here in Southern California and available 6 days a week.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_CONFIG.phone}`}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Call Us Anytime</div>
                  <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {COMPANY_CONFIG.phoneFormatted}
                  </div>
                </div>
              </a>

              <a
                href={`sms:${COMPANY_CONFIG.smsNumber}`}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Send an SMS Text Message</div>
                  <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {COMPANY_CONFIG.smsFormatted}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-colors flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-slate-400">Email Direct</div>
                  <div className="text-base font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                    {COMPANY_CONFIG.email}
                  </div>
                </div>
              </a>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Operating Business Hours</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-white font-medium">7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white font-medium">8:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-amber-400 font-medium">By Appointment (Commercial)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{COMPANY_CONFIG.licenseAndInsurance.insuranceCoverage}</span>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Us a Quick Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Looking for a formal quote? Use our{' '}
                <Link to="/request-a-quote/" className="text-amber-400 underline font-semibold">
                  Multi-Step Quote Calculator
                </Link>{' '}
                for instant satellite pricing. For general inquiries, complete the form below.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-950/40 border border-emerald-600 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-200 max-w-sm mx-auto">
                    Thank you, {formData.name}. A representative from our team will respond to your inquiry within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', city: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-300">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(949) 555-0199"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">City / Region</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Irvine, CA"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Message / Inquiry *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your panels, tile roof, or pigeon concerns..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

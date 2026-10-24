import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  MapPin,
  MessageSquarePlus,
  ArrowRight,
  Filter,
  Check
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SEOHead } from '../components/common/SEOHead';
import { QuoteCTASection } from '../components/common/QuoteCTASection';
import { REVIEWS_DATA, ReviewItem } from '../data/reviews';

export function ReviewsPage() {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [selectedService, setSelectedService] = useState<string>('all');
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    service: 'Solar Panel Cleaning' as ReviewItem['service'],
    rating: 5,
    title: '',
    comment: '',
    powerIncrease: '',
  });
  const [submittedReviewMessage, setSubmittedReviewMessage] = useState<boolean>(false);

  const filteredReviews = reviewsList.filter((rev) => {
    if (selectedService === 'all') return true;
    return rev.service === selectedService;
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const item: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      location: newReview.location || 'Southern California, CA',
      service: newReview.service,
      rating: newReview.rating,
      date: 'Just now',
      title: newReview.title || 'Great solar service',
      comment: newReview.comment,
      verifiedCustomer: true,
      powerIncrease: newReview.powerIncrease || undefined,
    };

    setReviewsList([item, ...reviewsList]);
    setSubmittedReviewMessage(true);
    setTimeout(() => {
      setShowSubmitModal(false);
      setSubmittedReviewMessage(false);
      setNewReview({
        name: '',
        location: '',
        service: 'Solar Panel Cleaning',
        rating: 5,
        title: '',
        comment: '',
        powerIncrease: '',
      });
    }, 1800);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <SEOHead
        title="Customer Reviews & Energy Recovery Results | SoCal Solar Clean"
        description="Read verified customer reviews from homeowners and commercial property managers across Southern California. Real solar output gains and pigeon proofing testimonials."
        canonicalPath="/reviews/"
        schemaType="LocalBusiness"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Reviews', url: '/reviews/' },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Verified Customer Testimonials</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Customer Reviews & Solar Results
          </h1>

          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Genuine experiences from residential homeowners and commercial asset directors who trust us for spot-free pure water cleaning and bird proofing.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setShowSubmitModal(true)}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs shadow-md transition-colors inline-flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Submit a Customer Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* Aggregate Rating Breakdown & Filter */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-slate-900 p-8 rounded-2xl border border-slate-800">
          <div className="text-center md:text-left space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-white tabular-nums">4.9 / 5.0</div>
            <div className="flex justify-center md:justify-start text-amber-400 text-lg">
              ★★★★★
            </div>
            <p className="text-xs text-slate-400">Based on verified Southern California service appointments</p>
          </div>

          <div className="space-y-1.5 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-12">5 Star</span>
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 w-[94%]"></div>
              </div>
              <span className="w-8 text-right font-mono">94%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12">4 Star</span>
              <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 w-[6%]"></div>
              </div>
              <span className="w-8 text-right font-mono">6%</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span className="w-12">3 Star</span>
              <div className="flex-1 h-2 bg-slate-800 rounded-full"></div>
              <span className="w-8 text-right font-mono">0%</span>
            </div>
          </div>

          {/* Service Filter Tabs */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-slate-400">Filter By Service:</span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'Solar Panel Cleaning', label: 'Solar Cleaning' },
                { id: 'Bird Proofing', label: 'Bird Proofing' },
                { id: 'Commercial Solar', label: 'Commercial' },
                { id: 'Gutter Cleaning', label: 'Gutters' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedService(btn.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedService === btn.id
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4 shadow-lg hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  {rev.powerIncrease && (
                    <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                      {rev.powerIncrease}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-white">&quot;{rev.title}&quot;</h3>
                <p className="text-xs text-slate-300 leading-relaxed">&quot;{rev.comment}&quot;</p>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{rev.name}</span>
                  {rev.verifiedCustomer && (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{rev.location}</span>
                </div>
                <div className="text-[10px] text-slate-500 pt-0.5">
                  {rev.service} {rev.systemSize ? `· ${rev.systemSize}` : ''} · {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Submission Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">Share Your Feedback</h3>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {submittedReviewMessage ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-600 rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Thank You for Your Review!</h4>
                <p className="text-xs text-emerald-200">Your review has been saved and published.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. David M."
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold text-slate-300 block mb-1">City / Neighborhood</label>
                    <input
                      type="text"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      placeholder="e.g. Irvine, CA"
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-300 block mb-1">Service</label>
                    <select
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value as ReviewItem['service'] })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option value="Solar Panel Cleaning">Solar Panel Cleaning</option>
                      <option value="Bird Proofing">Bird Proofing</option>
                      <option value="Gutter Cleaning">Gutter Cleaning</option>
                      <option value="Commercial Solar">Commercial Solar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Star Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        className={`text-xl ${star <= newReview.rating ? 'text-amber-400' : 'text-slate-600'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Review Headline</label>
                  <input
                    type="text"
                    value={newReview.title}
                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                    placeholder="e.g. Noticeable boost in daily solar production!"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-300 block mb-1">Your Review *</label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Tell other homeowners about your experience..."
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-400"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <QuoteCTASection />
    </div>
  );
}

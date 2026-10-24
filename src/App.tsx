import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Common Components
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileActionBar } from './components/common/MobileActionBar';

// Main Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteRequestPage } from './pages/QuoteRequestPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqPage } from './pages/FaqPage';

// Solar Pages
import { SolarPanelCleaningPage } from './pages/solar/SolarPanelCleaningPage';
import { ResidentialSolarCleaningPage } from './pages/solar/ResidentialSolarCleaningPage';
import { CommercialSolarCleaningPage } from './pages/solar/CommercialSolarCleaningPage';
import { PureWaterCleaningPage } from './pages/solar/PureWaterCleaningPage';
import { CleaningProcessPage } from './pages/solar/CleaningProcessPage';

// Bird Proofing Pages
import { SolarBirdProofingPage } from './pages/bird-proofing/SolarBirdProofingPage';
import { ResidentialBirdProofingPage } from './pages/bird-proofing/ResidentialBirdProofingPage';
import { CommercialBirdProofingPage } from './pages/bird-proofing/CommercialBirdProofingPage';

// Gutter Cleaning Pages
import { GutterCleaningPage } from './pages/gutters/GutterCleaningPage';
import { ResidentialGutterCleaningPage } from './pages/gutters/ResidentialGutterCleaningPage';
import { CommercialGutterCleaningPage } from './pages/gutters/CommercialGutterCleaningPage';

// Legal & Utility Pages
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-amber-400 selection:text-slate-950">
        <Header />

        <main className="flex-1">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about-us/" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/contact-us/" element={<ContactPage />} />
            <Route path="/request-a-quote" element={<QuoteRequestPage />} />
            <Route path="/request-a-quote/" element={<QuoteRequestPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/service-areas/" element={<ServiceAreasPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/" element={<GalleryPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/reviews/" element={<ReviewsPage />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/faqs/" element={<FaqPage />} />

            {/* Solar Panel Cleaning Pages */}
            <Route path="/solar-panel-cleaning" element={<SolarPanelCleaningPage />} />
            <Route path="/solar-panel-cleaning/" element={<SolarPanelCleaningPage />} />
            <Route path="/residential-solar-panel-cleaning" element={<ResidentialSolarCleaningPage />} />
            <Route path="/residential-solar-panel-cleaning/" element={<ResidentialSolarCleaningPage />} />
            <Route path="/commercial-solar-panel-cleaning" element={<CommercialSolarCleaningPage />} />
            <Route path="/commercial-solar-panel-cleaning/" element={<CommercialSolarCleaningPage />} />
            <Route path="/pure-water-solar-panel-cleaning" element={<PureWaterCleaningPage />} />
            <Route path="/pure-water-solar-panel-cleaning/" element={<PureWaterCleaningPage />} />
            <Route path="/solar-panel-cleaning-process" element={<CleaningProcessPage />} />
            <Route path="/solar-panel-cleaning-process/" element={<CleaningProcessPage />} />

            {/* Bird Proofing Pages */}
            <Route path="/solar-panel-bird-proofing" element={<SolarBirdProofingPage />} />
            <Route path="/solar-panel-bird-proofing/" element={<SolarBirdProofingPage />} />
            <Route path="/residential-solar-panel-bird-proofing" element={<ResidentialBirdProofingPage />} />
            <Route path="/residential-solar-panel-bird-proofing/" element={<ResidentialBirdProofingPage />} />
            <Route path="/commercial-solar-panel-bird-proofing" element={<CommercialBirdProofingPage />} />
            <Route path="/commercial-solar-panel-bird-proofing/" element={<CommercialBirdProofingPage />} />

            {/* Gutter Cleaning Pages */}
            <Route path="/gutter-cleaning" element={<GutterCleaningPage />} />
            <Route path="/gutter-cleaning/" element={<GutterCleaningPage />} />
            <Route path="/residential-gutter-cleaning" element={<ResidentialGutterCleaningPage />} />
            <Route path="/residential-gutter-cleaning/" element={<ResidentialGutterCleaningPage />} />
            <Route path="/commercial-gutter-cleaning" element={<CommercialGutterCleaningPage />} />
            <Route path="/commercial-gutter-cleaning/" element={<CommercialGutterCleaningPage />} />

            {/* Location Pages (24 Southern California Cities) */}
            <Route path="/locations/:citySlug" element={<LocationDetailPage />} />
            <Route path="/locations/:citySlug/" element={<LocationDetailPage />} />

            {/* Legal Pages & Sitemap */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/terms-and-conditions/" element={<TermsConditionsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/sitemap/" element={<SitemapPage />} />
            <Route path="/sitemap.xml" element={<SitemapPage />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <MobileActionBar />
      </div>
    </BrowserRouter>
  );
}

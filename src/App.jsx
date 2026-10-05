import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GetStarted from './pages/GetStarted';
import ContentPage from './pages/ContentPage';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';

import { LanguageProvider } from './context/LanguageContext';
import { trackPixelEvent } from './utils/analytics';

// Scroll to top on route change or smooth scroll to hash element
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Track PageView on route changes for Meta Pixel
    trackPixelEvent('PageView');

    if (hash) {
      const id = hash.replace('#', '');
      const scrollToElement = () => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToElement()) {
        const timer = setTimeout(scrollToElement, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
        <main style={{ flex: 1, paddingTop: '68px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/getstarted" element={<GetStarted />} />

            {/* Industry routes */}
            <Route path="/industries/car-dealerships" element={
              <ContentPage
                title="Car Dealership Google Review Removal"
                category="CAR DEALERSHIPS"
                description="Help customers choose your dealership with confidence by addressing fake and misleading reviews."
              />
            } />
            <Route path="/industries/medical-practices" element={
              <ContentPage
                title="Medical Practice Review Removal"
                category="HEALTHCARE & MEDICAL"
                description="Protect your medical practice and doctor reputation from malicious, policy-violating, and non-patient reviews."
              />
            } />
            <Route path="/industries/law-firms" element={
              <ContentPage
                title="Law Firm Google Review Removal"
                category="LEGAL REPUTATION"
                description="Client trust is paramount for attorneys. Remove defamatory reviews left by opposing parties, non-clients, or disgruntled individuals."
              />
            } />
            <Route path="/industries/restaurants" element={
              <ContentPage
                title="Restaurant & Dining Review Removal"
                category="HOSPITALITY & DINING"
                description="Diners judge restaurants by star rating before ever walking in. We remove fake competitor attacks and policy-violating complaints."
              />
            } />
            <Route path="/industries/home-services" element={
              <ContentPage
                title="Home Services Google Review Removal"
                category="CONTRACTORS & HOME SERVICES"
                description="Contractors and home service pros face aggressive competitor attacks. We clean up illegitimate Google Business Profile reviews."
              />
            } />
            <Route path="/industries/real-estate" element={
              <ContentPage
                title="Real Estate Agent & Brokerage Review Removal"
                category="REAL ESTATE"
                description="Real estate agents live and die by their star ratings. Protect your commissions with policy-compliant removal."
              />
            } />
            <Route path="/industries/dental" element={
              <ContentPage
                title="Dental Practice Google Review Removal"
                category="DENTAL PROFESSIONALS"
                description="Dentists rely heavily on local search and Google maps. Erase unfair reviews and restore your high-rating reputation."
              />
            } />
            <Route path="/industries/hotels-hospitality" element={
              <ContentPage
                title="Hotels & Hospitality Review Removal"
                category="HOTELS & RESORTS"
                description="A slight drop in hotel rating directly lowers booking prices and occupancy. Remove malicious and off-policy reviews."
              />
            } />

            {/* Content Removal routes */}
            <Route path="/content-removal/google-review-removal" element={
              <ContentPage
                title="Google Review Removal Service"
                category="GOOGLE REVIEWS"
                description="The world's leading Google review removal service. Pay nothing until the policy-violating review is permanently removed."
              />
            } />
            <Route path="/content-removal/search-result-removal" element={
              <ContentPage
                title="Google Search Result Removal"
                category="SEARCH SUPPRESSION & REMOVAL"
                description="Permanently remove defamatory search results, negative articles, and harmful blog posts from Google search index."
              />
            } />
            <Route path="/content-removal/image-removal" element={
              <ContentPage
                title="Google Image Removal Service"
                category="IMAGE CONTENT REMOVAL"
                description="Remove unwanted, copyrighted, private, or damaging images appearing in Google Image Search."
              />
            } />

            {/* Other routes */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/privacy-policy" element={
              <ContentPage
                title="Privacy Policy"
                category="LEGAL & COMPLIANCE"
                description="ORM is committed to 100% strict client confidentiality. We will never share, sell, or disclose your business information."
              />
            } />
            <Route path="/terms-of-service" element={
              <ContentPage
                title="Terms of Service"
                category="LEGAL"
                description="Our standard terms of service. All services are governed by our zero-risk pay-after-removal promise."
              />
            } />

            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </LanguageProvider>
  );
}

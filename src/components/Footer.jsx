import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (id) => (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${id}`);
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  const industriesList = t('nav.industriesList', [
    { name: 'Car Dealerships', path: '/industries/car-dealerships' },
    { name: 'Medical Practices', path: '/industries/medical-practices' },
    { name: 'Law Firms', path: '/industries/law-firms' },
    { name: 'Restaurants', path: '/industries/restaurants' },
    { name: 'Home Services', path: '/industries/home-services' },
    { name: 'Real Estate', path: '/industries/real-estate' },
    { name: 'Dental Offices', path: '/industries/dental' },
    { name: 'Hotels & Hospitality', path: '/industries/hotels-hospitality' },
  ]);

  const contentRemovalList = t('nav.contentRemovalList', [
    { name: 'Google Review Removal', path: '/content-removal/google-review-removal' },
    { name: 'Search Result Removal', path: '/content-removal/search-result-removal' },
    { name: 'Image Removal', path: '/content-removal/image-removal' },
  ]);

  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '0.8px solid #DBDDE1',
      padding: '70px 0 35px 0',
      color: '#5E6368',
      fontSize: '14px'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* 4 Column Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Logo />
            </div>
            <p style={{ lineHeight: 1.6, marginBottom: '16px', color: '#5E6368' }}>
              {t('footer.serving', 'Serving businesses worldwide.')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="tel:+923107791895"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1F2329', textDecoration: 'none' }}
              >
                <Phone size={15} color="#023052" />
                <span>+92 310 7791895</span>
              </a>
              <a
                href="mailto:contact@naveedreputation.com"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#1F2329', textDecoration: 'none' }}
              >
                <Mail size={15} color="#023052" />
                <span>contact@naveedreputation.com</span>
              </a>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#5E6368' }}>
                <MapPin size={15} color="#023052" />
                <span>Kot Chutta, Dera Ghazi Khan, Pakistan 32350</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1F2329', marginBottom: '18px' }}>
              {t('footer.col1Title', 'Services')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
              {contentRemovalList.map((item, idx) => (
                <li key={idx}><Link to={item.path} className="footer-link">{item.name}</Link></li>
              ))}
              <li><Link to="/getstarted" className="footer-link">{t('assess.auditBtn', 'Free Review Audit')}</Link></li>
              <li><a href="/#partner-program" onClick={handleAnchorClick('partner-program')} className="footer-link">{t('partner.badge', 'Partner Program')}</a></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1F2329', marginBottom: '18px' }}>
              {t('footer.col2Title', 'Industries')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
              {industriesList.map((ind, idx) => (
                <li key={idx}><Link to={ind.path} className="footer-link">{ind.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1F2329', marginBottom: '18px' }}>
              {t('footer.col3Title', 'Resources')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
              <li><Link to="/blog" className="footer-link">{t('nav.blog', 'Blog & Guides')}</Link></li>
              <li><a href="/#faq" onClick={handleAnchorClick('faq')} className="footer-link">{t('faq.badge', 'Frequently Asked Questions')}</a></li>
              <li><Link to="/case-studies" className="footer-link">{t('nav.caseStudies', 'Case Studies')}</Link></li>
              <li><a href="/#client-results" onClick={handleAnchorClick('client-results')} className="footer-link">{t('feedback.badge', 'Client Testimonials')}</a></li>
              <li><a href="/#reality" onClick={handleAnchorClick('reality')} className="footer-link">{t('reputation.badge', 'Why Reviews Matter')}</a></li>
              <li><Link to="/getstarted" className="footer-link">{t('nav.contactConsultation', 'Contact & Consultation')}</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#DBDDE1', width: '100%', margin: '30px 0 25px 0' }} />

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center'
        }}>
          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://www.instagram.com/p/Da8M07QqOdy/?stkn=MWl5aXJjZDgyc3MxZw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#5E6368', transition: 'color 0.2s' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/naveed.dmca" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: '#5E6368', transition: 'color 0.2s' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.101-.476-.15-.677.15-.2.302-.777.98-.953 1.181-.176.202-.352.227-.653.076-.301-.15-1.272-.469-2.424-1.497-.896-.8-1.5-1.788-1.677-2.09-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.528.15-.176.2-.302.301-.503.101-.201.05-.377-.025-.528-.075-.15-.677-1.633-.928-2.239-.245-.589-.494-.509-.678-.519-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.913 1.23 3.114.15.201 2.124 3.243 5.144 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.088 1.78-.728 2.03-1.431.25-.704.25-1.306.175-1.431-.075-.126-.276-.201-.577-.352zm-5.466 7.618a10.02 10.02 0 0 1-5.112-1.397l-.367-.218-3.799.996 1.014-3.702-.239-.38a10.02 10.02 0 0 1-1.536-5.29c0-5.523 4.49-10.013 10.034-10.013 2.68 0 5.2 1.045 7.095 2.942a10.007 10.007 0 0 1 2.94 7.085c0 5.525-4.49 10.017-10.03 10.017zm8.513-18.535C18.26 1.205 15.26 0 12.006 0 5.437 0 .092 5.345.09 11.916c0 2.099.549 4.148 1.593 5.962L0 24l6.302-1.654a11.892 11.892 0 0 0 5.7 1.442h.005c6.568 0 11.914-5.346 11.916-11.918 0-3.184-1.24-6.177-3.404-8.406z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/share/1F2J5cxo7e/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#5E6368', transition: 'color 0.2s' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>

          {/* Copyright & Legal Links */}
          <div style={{ fontSize: '13px', color: '#5E6368' }}>
            {t('footer.rights', '© 2026 ORM. All rights reserved.')} &nbsp;|&nbsp;{' '}
            <Link to="/privacy-policy" style={{ color: '#5E6368' }}>{t('footer.privacy', 'Privacy Policy')}</Link> &nbsp;|&nbsp;{' '}
            <Link to="/terms-of-service" style={{ color: '#5E6368' }}>{t('footer.terms', 'Terms of Service')}</Link>
          </div>

          {/* Trademark Disclaimer */}
          <p style={{
            fontSize: '12px',
            color: '#9ca3af',
            maxWidth: '100%',
            lineHeight: 1.6,
            margin: 0,
            textAlign: 'center'
          }}>
            {t('footer.disclaimer', 'We are not affiliated with Google LLC. Google is a registered trademark of Google LLC. All review removal is performed through legitimate policy-compliant processes.')}
          </p>

          {/* Powered by */}
          <p style={{
            fontSize: '12px',
            color: '#9ca3af',
            margin: 0,
            textAlign: 'center'
          }}>
            Powered by <span style={{ fontWeight: 600, color: '#5E6368' }}>QubitBug</span>
          </p>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: #6b7280;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-link:hover {
          color: #023052;
        }
      `}</style>
    </footer>
  );
}

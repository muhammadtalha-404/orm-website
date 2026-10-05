import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { language, t } = useLanguage();
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [contentRemovalOpen, setContentRemovalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileContentRemovalOpen, setMobileContentRemovalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const indRef = useRef(null);
  const crRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (indRef.current && !indRef.current.contains(e.target)) {
        setIndustriesOpen(false);
      }
      if (crRef.current && !crRef.current.contains(e.target)) {
        setContentRemovalOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIndustriesOpen(false);
    setContentRemovalOpen(false);
    setMobileMenuOpen(false);
    setMobileIndustriesOpen(false);
    setMobileContentRemovalOpen(false);
  }, [location.pathname]);

  const handleHowItWorksClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('how-it-works');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('how-it-works');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const industriesList = t('nav.industriesList', []);
  const contentRemovalList = t('nav.contentRemovalList', []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: '#ffffff',
      borderBottom: '0.8px solid #DBDDE1',
      width: '100%',
      boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        {/* Left: Brand Logo */}
        <Logo onClick={() => setMobileMenuOpen(false)} />

        {/* Center: Desktop Navigation */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '28px'
        }}>
          <a
            href="#how-it-works"
            onClick={handleHowItWorksClick}
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#1F2329',
              cursor: 'pointer',
              transition: 'color 0.2s',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.target.style.color = '#023052'}
            onMouseLeave={(e) => e.target.style.color = '#1F2329'}
          >
            {t('nav.howItWorks')}
          </a>

          {/* Industries Dropdown */}
          <div
            ref={indRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                fontWeight: 500,
                color: industriesOpen ? '#023052' : '#1F2329',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
            >
              {t('nav.industries')}
              <ChevronDown size={15} style={{
                transition: 'transform 0.2s',
                transform: industriesOpen ? 'rotate(180deg)' : 'none'
              }} />
            </button>

            {industriesOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '230px',
                background: '#ffffff',
                border: '0.8px solid #DBDDE1',
                borderRadius: '8px',
                boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
                padding: '8px 0',
                zIndex: 1100,
                marginTop: '6px'
              }}>
                {industriesList.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: 'block',
                      padding: '10px 18px',
                      fontSize: '14px',
                      color: '#1F2329',
                      textDecoration: 'none',
                      transition: 'background 0.15s, color 0.15s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#f3f4f6';
                      e.target.style.color = '#023052';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#1F2329';
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Content Removal Dropdown */}
          <div
            ref={crRef}
            style={{ position: 'relative' }}
            onMouseEnter={() => setContentRemovalOpen(true)}
            onMouseLeave={() => setContentRemovalOpen(false)}
          >
            <button
              onClick={() => setContentRemovalOpen(!contentRemovalOpen)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '15px',
                fontWeight: 500,
                color: contentRemovalOpen ? '#023052' : '#1F2329',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 0',
                transition: 'color 0.2s'
              }}
            >
              {t('nav.contentRemoval')}
              <ChevronDown size={15} style={{
                transition: 'transform 0.2s',
                transform: contentRemovalOpen ? 'rotate(180deg)' : 'none'
              }} />
            </button>

            {contentRemovalOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                width: '230px',
                background: '#ffffff',
                border: '0.8px solid #DBDDE1',
                borderRadius: '8px',
                boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
                padding: '8px 0',
                zIndex: 1100,
                marginTop: '6px'
              }}>
                {contentRemovalList.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: 'block',
                      padding: '10px 18px',
                      fontSize: '14px',
                      color: '#1F2329',
                      textDecoration: 'none',
                      transition: 'background 0.15s, color 0.15s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#f3f4f6';
                      e.target.style.color = '#023052';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#1F2329';
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/case-studies"
            style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#1F2329',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#023052'}
            onMouseLeave={(e) => e.target.style.color = '#1F2329'}
          >
            {t('nav.caseStudies')}
          </Link>
        </nav>

        {/* Right: Language Toggle, Phone & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* EN/NL Language Toggle Switch */}
          <LanguageToggle className="desktop-lang-toggle" />

          <a
            href="tel:+923107791895"
            className="header-phone"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: 500,
              color: '#1F2329',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#023052'}
            onMouseLeave={(e) => e.target.style.color = '#1F2329'}
          >
            <Phone size={16} color="#1F2329" />
            <span>+92 310 7791895</span>
          </a>

          <Link
            to="/getstarted"
            style={{
              background: '#023052',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '24px',
              fontSize: '15px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#03406D';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#023052';
            }}
          >
            {t('nav.getStarted')}
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1F2329',
              padding: '6px'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '0.8px solid #DBDDE1',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          maxHeight: 'calc(100vh - 70px)',
          overflowY: 'auto'
        }}>
          {/* Top of mobile menu: Language Selector Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '12px',
            borderBottom: '0.8px solid #DBDDE1',
            marginBottom: '4px'
          }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {language === 'nl' ? 'Taal / Language' : 'Language / Taal'}
            </span>
            <LanguageToggle />
          </div>

          {/* 1. How It Works (Primary) */}
          <a
            href="#how-it-works"
            onClick={(e) => {
              handleHowItWorksClick(e);
              setMobileMenuOpen(false);
            }}
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#1F2329',
              textDecoration: 'none',
              padding: '6px 0'
            }}
          >
            {t('nav.howItWorks')}
          </a>

          {/* 2. Industries (Primary with Clickable Dropdown) */}
          <div>
            <button
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                padding: '6px 0',
                fontSize: '16px',
                fontWeight: 500,
                color: mobileIndustriesOpen ? '#023052' : '#1F2329',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>{t('nav.industries')}</span>
              <ChevronDown
                size={18}
                style={{
                  color: mobileIndustriesOpen ? '#023052' : '#6b7280',
                  transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease, color 0.2s ease'
                }}
              />
            </button>

            {/* Secondary Options (shown only when clicked) */}
            {mobileIndustriesOpen && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '8px',
                paddingBottom: '4px',
                paddingLeft: '14px',
                borderLeft: '2px solid #e5e7eb',
                marginLeft: '4px',
                marginTop: '4px'
              }}>
                {industriesList.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                    style={{
                      fontSize: '15px',
                      color: '#4B5563',
                      textDecoration: 'none',
                      padding: '5px 0'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 3. Content Removal (Primary with Clickable Dropdown) */}
          <div>
            <button
              onClick={() => setMobileContentRemovalOpen(!mobileContentRemovalOpen)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                padding: '6px 0',
                fontSize: '16px',
                fontWeight: 500,
                color: mobileContentRemovalOpen ? '#023052' : '#1F2329',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>{t('nav.contentRemoval')}</span>
              <ChevronDown
                size={18}
                style={{
                  color: mobileContentRemovalOpen ? '#023052' : '#6b7280',
                  transform: mobileContentRemovalOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease, color 0.2s ease'
                }}
              />
            </button>

            {/* Secondary Options (shown only when clicked) */}
            {mobileContentRemovalOpen && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '8px',
                paddingBottom: '4px',
                paddingLeft: '14px',
                borderLeft: '2px solid #e5e7eb',
                marginLeft: '4px',
                marginTop: '4px'
              }}>
                {contentRemovalList.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileContentRemovalOpen(false);
                    }}
                    style={{
                      fontSize: '15px',
                      color: '#4B5563',
                      textDecoration: 'none',
                      padding: '5px 0'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 4. Case Studies (Primary) */}
          <Link
            to="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#1F2329',
              textDecoration: 'none',
              padding: '6px 0'
            }}
          >
            {t('nav.caseStudies')}
          </Link>

          {/* 5. Phone Call (Primary) */}
          <div style={{
            borderTop: '0.8px solid #DBDDE1',
            paddingTop: '16px',
            marginTop: '6px'
          }}>
            <a
              href="tel:+923107791895"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '16px',
                fontWeight: 600,
                color: '#023052',
                textDecoration: 'none'
              }}
            >
              <Phone size={18} />
              <span>+92 310 7791895</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
          .header-phone span {
            display: none;
          }
          .desktop-lang-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

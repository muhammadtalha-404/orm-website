import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  ArrowRight,
  AlertTriangle,
  FileCheck,
  Lock,
  Sparkles,
  MessageCircle,
  Check
} from 'lucide-react';
import SectionBadge from '../components/SectionBadge';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Industries' },
    { id: 'medical', label: 'Medical & Dental' },
    { id: 'automotive', label: 'Auto Dealerships' },
    { id: 'legal', label: 'Legal Practices' },
    { id: 'home-services', label: 'Home Services' },
    { id: 'hospitality', label: 'Hospitality & Resorts' },
    { id: 'dining', label: 'Restaurants & Dining' },
  ];

  const filteredCases = selectedCategory === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === selectedCategory);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{
        padding: '70px 24px 50px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <SectionBadge>
          PROVEN RESULTS &bull; REAL CLIENT OUTCOMES
        </SectionBadge>

        <h1 style={{
          fontSize: 'clamp(34px, 5vw, 50px)',
          fontWeight: 700,
          lineHeight: 1.18,
          color: '#1F2329',
          letterSpacing: '-1px',
          maxWidth: '920px',
          margin: '0 auto 20px auto'
        }}>
          Real Businesses. Real Results.<br />
          <span style={{ color: '#023052' }}>Zero Upfront Payment.</span>
        </h1>

        <p style={{
          fontSize: '17px',
          lineHeight: 1.75,
          color: '#5E6368',
          maxWidth: '760px',
          margin: '0 auto 28px auto'
        }}>
          Explore verified, anonymized case studies showing how ORM leverages official Google Merchant & Content Policies to eradicate malicious, competitor-posted, and defamatory reviews.
        </p>

        {/* Confidentiality Notice */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#f9fafb',
          border: '0.8px solid #DBDDE1',
          borderRadius: '24px',
          padding: '8px 20px',
          fontSize: '13px',
          color: '#5E6368'
        }}>
          <Lock size={14} color="#023052" />
          <span><strong>100% Confidential:</strong> Business names and client identifiers are anonymized to protect company privacy.</span>
        </div>
      </section>

      {/* ========================================================
          2. FILTER TABS & CASE STUDIES LIST
          ======================================================== */}
      <section style={{
        padding: '20px 24px 70px 24px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Industry Filter Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '46px'
        }}>
          {categories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: isActive ? '#023052' : '#ffffff',
                  color: isActive ? '#ffffff' : '#5E6368',
                  border: isActive ? '0.8px solid #023052' : '0.8px solid #DBDDE1',
                  borderRadius: '24px',
                  padding: '9px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#023052';
                    e.currentTarget.style.color = '#023052';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#DBDDE1';
                    e.currentTarget.style.color = '#5E6368';
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Case Study Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {filteredCases.map(item => (
            <article
              key={item.id}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                border: '0.8px solid #DBDDE1',
                padding: '36px 32px',
                boxShadow: 'rgba(32, 33, 36, 0.05) 0px 2px 8px'
              }}
            >
              {/* Card Meta Top Header */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: '#e6edf2',
                    color: '#023052',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.4px'
                  }}>
                    {item.categoryLabel}
                  </span>
                  <span style={{ fontSize: '14px', color: '#5E6368', fontWeight: 500 }}>
                    {item.clientType}
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#16a34a',
                  background: '#dcfce7',
                  padding: '4px 12px',
                  borderRadius: '16px'
                }}>
                  <ShieldCheck size={14} />
                  <span>Policy-Compliant Removal &bull; $0 Upfront</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h2 style={{
                fontSize: 'clamp(21px, 3vw, 25px)',
                fontWeight: 700,
                color: '#1F2329',
                lineHeight: 1.25,
                marginBottom: '10px'
              }}>
                {item.title}
              </h2>

              <p style={{
                fontSize: '15px',
                color: '#5E6368',
                lineHeight: 1.65,
                marginBottom: '26px'
              }}>
                {item.subtitle}
              </p>

              {/* Key Metrics Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                background: '#f9fafb',
                borderRadius: '12px',
                padding: '18px 20px',
                border: '0.8px solid #DBDDE1',
                marginBottom: '26px'
              }}>
                {/* Rating Change */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#5E6368', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.4px' }}>
                    Google Star Rating
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '17px', fontWeight: 700, color: '#dc2626' }}>
                      {item.stats.beforeRating}★
                    </span>
                    <span style={{ color: '#5E6368', fontWeight: 600 }}>&rarr;</span>
                    <span style={{ fontSize: '20px', fontWeight: 800, color: '#16a34a' }}>
                      {item.stats.afterRating}★
                    </span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#16a34a',
                      background: '#dcfce7',
                      padding: '2px 6px',
                      borderRadius: '8px'
                    }}>
                      +{(item.stats.afterRating - item.stats.beforeRating).toFixed(1)}★
                    </span>
                  </div>
                </div>

                {/* Reviews Removed */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#5E6368', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.4px' }}>
                    Content Removed
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#1F2329' }}>
                    {item.stats.reviewsRemoved} Fake Reviews
                  </div>
                </div>

                {/* Resolution Time */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#5E6368', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.4px' }}>
                    Resolution Time
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#023052', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={16} />
                    <span>{item.stats.turnaround}</span>
                  </div>
                </div>

                {/* Business Impact */}
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#5E6368', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.4px' }}>
                    Business Impact
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <TrendingUp size={16} />
                    <span>{item.stats.impact}</span>
                  </div>
                </div>
              </div>

              {/* 3-Column Detailed Analysis */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '18px',
                marginBottom: '22px'
              }}>
                {/* 1. The Challenge */}
                <div style={{
                  background: '#f9fafb',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <AlertTriangle size={17} color="#dc2626" />
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1F2329', margin: 0 }}>
                      The Challenge & Crisis
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
                    {item.challenge}
                  </p>
                </div>

                {/* 2. Policy Violations */}
                <div style={{
                  background: '#f9fafb',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <FileCheck size={17} color="#023052" />
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1F2329', margin: 0 }}>
                      Policy Violations Identified
                    </h3>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.policyViolations.map((pol, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#1F2329' }}>
                        <CheckCircle2 size={15} color="#023052" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span><strong>{pol}</strong></span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. The Strategy */}
                <div style={{
                  background: '#f9fafb',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '12px',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <Sparkles size={17} color="#16a34a" />
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1F2329', margin: 0 }}>
                      Strategy & Resolution
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
                    {item.strategy}
                  </p>
                </div>
              </div>

              {/* Final Resolution Highlight */}
              <div style={{
                background: '#dcfce7',
                border: '0.8px solid #86efac',
                borderRadius: '12px',
                padding: '14px 18px',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px'
              }}>
                <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '14px', color: '#14532d', lineHeight: 1.5 }}>
                  <strong style={{ color: '#14532d' }}>Final Outcome:</strong> {item.outcome}
                </div>
              </div>

              {/* Client Quote */}
              <blockquote style={{
                borderLeft: '4px solid #023052',
                background: '#f9fafb',
                borderTop: '0.8px solid #DBDDE1',
                borderRight: '0.8px solid #DBDDE1',
                borderBottom: '0.8px solid #DBDDE1',
                margin: 0,
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                fontStyle: 'italic',
                color: '#5E6368',
                fontSize: '14px',
                lineHeight: 1.6
              }}>
                "{item.testimonial.quote}"
                <div style={{ fontStyle: 'normal', fontWeight: 700, marginTop: '8px', color: '#1F2329', fontSize: '13px' }}>
                  &mdash; {item.testimonial.author}, <span style={{ color: '#5E6368', fontWeight: 500 }}>{item.testimonial.role}</span>
                </div>
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. FINAL CTA SECTION (Matches other pages with #e6edf2)
          ======================================================== */}
      <section style={{
        background: '#e6edf2',
        borderTop: '0.8px solid #DBDDE1',
        padding: '85px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(30px, 4.5vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#1F2329',
            marginBottom: '16px',
            letterSpacing: '-0.5px'
          }}>
            Your Clean Reputation<br />
            Is <span style={{ color: '#023052' }}>One Call Away.</span>
          </h2>

          <p style={{
            fontSize: '17px',
            color: '#5E6368',
            lineHeight: 1.65,
            maxWidth: '650px',
            margin: '0 auto 32px auto'
          }}>
            Every day that review stays up, it's costing you customers and money.
            Take it down today &mdash; pay only if we succeed.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            marginBottom: '36px'
          }}>
            <Link
              to="/getstarted"
              style={{
                background: '#023052',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: '24px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(11, 100, 244, 0.25)',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#03406D'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#023052'}
            >
              <span>Book My Free Consultation Now</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="https://wa.me/naveed.dmca"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#ffffff',
                padding: '16px 30px',
                borderRadius: '24px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#20ba5a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Checklist */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px 28px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {[
              'Clear Pricing Before Work Begins',
              'Pay Only After Successful Removal',
              'No Passwords or Verification Codes Required',
              'Case Updates Throughout the Process'
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  color: '#4B5563',
                  fontWeight: 500
                }}
              >
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#dcfce7',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check size={12} strokeWidth={3} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

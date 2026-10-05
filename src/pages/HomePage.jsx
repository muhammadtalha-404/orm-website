import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ArrowRight,
  TrendingDown,
  DollarSign,
  AlertTriangle,
  Infinity as LoopIcon,
  Scale,
  ShieldCheck,
  Globe,
  Car,
  Stethoscope,
  Building2,
  Utensils,
  Home,
  Wrench,
  Sparkles,
  Users,
  FileText,
  Megaphone,
  Ban,
  Bot,
  HelpCircle,
  UserX,
  Clock,
  ShieldAlert,
  Check,
  CheckCircle2,
  Lock,
  MessageSquare
} from 'lucide-react';

import SectionBadge from '../components/SectionBadge';
import ReviewWidget from '../components/ReviewWidget';
import Ticker from '../components/Ticker';
import StepTimeline from '../components/StepTimeline';
import FAQAccordion from '../components/FAQAccordion';
import { industries } from '../data/industries';
import { reviewTypes } from '../data/reviewTypes';
import { testimonials } from '../data/testimonials';
import { useLanguage } from '../context/LanguageContext';
import { trackPixelEvent } from '../utils/analytics';

export default function HomePage() {
  const { t } = useLanguage();

  const getIndustryIcon = (iconName) => {
    switch (iconName) {
      case 'Car': return <Car size={24} />;
      case 'Stethoscope': return <Stethoscope size={24} />;
      case 'Scale': return <Scale size={24} />;
      case 'Building2': return <Building2 size={24} />;
      case 'Utensils': return <Utensils size={24} />;
      case 'Home': return <Home size={24} />;
      case 'Wrench': return <Wrench size={24} />;
      case 'Sparkles': return <Sparkles size={24} />;
      default: return <Building2 size={24} />;
    }
  };

  const getReviewTypeIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert size={22} />;
      case 'Users': return <Users size={22} />;
      case 'FileText': return <FileText size={22} />;
      case 'Megaphone': return <Megaphone size={22} />;
      case 'Ban': return <Ban size={22} />;
      case 'Bot': return <Bot size={22} />;
      case 'HelpCircle': return <HelpCircle size={22} />;
      case 'UserX': return <UserX size={22} />;
      case 'AlertTriangle': return <AlertTriangle size={22} />;
      case 'Clock': return <Clock size={22} />;
      default: return <FileText size={22} />;
    }
  };

  const heroStats = t('stats', [
    { stat: '10,000+', label: 'REVIEWS REMOVED' },
    { stat: '100%', label: 'SUCCESS RATE' },
    { stat: '6 Hours', label: 'AVG REMOVAL TIME' },
    { stat: '$150', label: 'COST PER REMOVAL' }
  ]);

  return (
    <div className="orm-page" style={{ overflowX: 'hidden' }}>
      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section style={{
        padding: '40px 24px 60px 24px',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '50px',
          alignItems: 'center'
        }}>
          {/* Left Column Content */}
          <div>
            <SectionBadge>
              {t('hero.badge', 'TRUSTED GOOGLE REVIEW REMOVAL EXPERTS — WORLDWIDE')}
            </SectionBadge>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 54px)',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#1F2329',
              marginBottom: '20px',
              letterSpacing: '-1px'
            }}>
              {t('hero.title1', 'One Bad Review.')}<br />
              <span style={{ color: '#023052' }}>{t('hero.title2', 'Countless Lost Customers.')}</span>
            </h1>

            <p style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#5E6368',
              marginBottom: '32px',
              maxWidth: '580px'
            }}>
              {t('hero.desc', "Fake Google reviews are costing your business customers and revenue right now. ORM is the world's trusted Google review removal service — removing policy-violating, fake, and defamatory reviews through legitimate channels. Serving businesses in every country, every city, every industry. ")}
              <strong style={{ color: '#1F2329', fontWeight: 700 }}>
                {t('hero.payNothing', 'You pay nothing until the review comes down.')}
              </strong>
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '32px'
            }}>
              <Link
                to="/getstarted"
                style={{
                  background: '#023052',
                  color: '#ffffff',
                  padding: '15px 34px',
                  borderRadius: '24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#03406D'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#023052'}
              >
                <span>{t('hero.ctaPrimary', 'Remove My Reviews Now')}</span>
                <ArrowRight size={17} />
              </Link>

              <a
                href="#how-it-works"
                style={{
                  background: 'transparent',
                  border: '2px solid #023052',
                  color: '#023052',
                  padding: '13px 30px',
                  borderRadius: '24px',
                  fontSize: '16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(2, 48, 82, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {t('hero.ctaSecondary', 'See How It Works')}
              </a>
            </div>

            {/* Trust Line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span style={{ fontSize: '14px', color: '#5E6368', fontWeight: 500 }}>
                {t('hero.trustText', 'Trusted by 400+ Businesses Across 25 Industries')}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Review Card Widget */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ReviewWidget />
          </div>
        </div>
      </section>

      {/* ========================================================
          HERO METRICS / STATS SECTION
          ======================================================== */}
      <section style={{
        borderTop: '0.8px solid #DBDDE1',
        background: '#ffffff',
        padding: '36px 24px'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {heroStats.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                border: '0.8px solid #DBDDE1',
                borderRadius: '8px',
                padding: '28px 20px',
                textAlign: 'center',
                boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              <div style={{
                fontSize: '34px',
                fontWeight: 700,
                color: '#023052',
                marginBottom: '6px',
                letterSpacing: '-0.5px'
              }}>
                {item.stat}
              </div>
              <div style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#5E6368',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          2. SCROLLING MARQUEE TICKER
          ======================================================== */}
      <Ticker />

      {/* ========================================================
          3. THE REALITY SECTION
          ======================================================== */}
      <section id="reality" style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <SectionBadge>{t('reality.badge', 'THE REALITY')}</SectionBadge>

        <h2 style={{
          fontSize: 'clamp(30px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1F2329',
          lineHeight: 1.25,
          marginBottom: '16px'
        }}>
          {t('reality.title1', 'Protect Your ')}<span style={{ color: '#023052', fontStyle: 'italic' }}>{t('reality.titleAccent', 'Reputation')}</span>
        </h2>

        <p style={{
          fontSize: '18px',
          color: '#5E6368',
          maxWidth: '720px',
          margin: '0 auto 50px auto',
          lineHeight: 1.6
        }}>
          {t('reality.desc', 'Build customer trust by addressing fake, spam, and inappropriate reviews through our professional review removal service.')}
        </p>

        {/* 3 Impact Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          maxWidth: '1100px',
          margin: '0 auto 40px auto'
        }}>
          {/* Card 1 */}
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#fecaca',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#dc2626'
            }}>
              <DollarSign size={26} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('reality.card1Val', '94%')}
            </div>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
              {t('reality.card1Desc', "of customers say a negative review convinces them to avoid a business entirely. That's nearly every potential customer reading your bad review — and choosing your competitor instead.")}
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#f59e0b'
            }}>
              <TrendingDown size={26} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('reality.card2Val', '40x')}
            </div>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
              {t('reality.card2Desc', 'more positive reviews are needed to undo the damage of a single 1-star review. Most businesses spend years trying to recover — and never fully do.')}
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#e6edf2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#023052'
            }}>
              <AlertTriangle size={26} />
            </div>
            <div style={{ fontSize: '48px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('reality.card3Val', '$?')}
            </div>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
              {t('reality.card3Desc', 'Pay After Successful Removal. Send us your review links for assessment. We work on eligible cases, and you pay only after successful removal.')}
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <p style={{
          fontSize: '16px',
          color: '#5E6368',
          maxWidth: '750px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          {t('reality.footerText', "Whether it's a fake review from a competitor, a disgruntled ex-employee, or an unfair complaint from years ago — it doesn't matter. We work to get it removed.")}
        </p>
      </section>

      {/* ========================================================
          4. OUR METHOD SECTION
          ======================================================== */}
      <section id="method" style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <SectionBadge>{t('method.badge', 'HOW WE HELP')}</SectionBadge>

        <h2 style={{
          fontSize: 'clamp(30px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1F2329',
          lineHeight: 1.25,
          marginBottom: '16px'
        }}>
          {t('method.title1', 'Professional Google Review Removal ')}<span style={{ color: '#023052' }}>{t('method.titleAccent', 'Support')}</span>
        </h2>

        <p style={{
          fontSize: '17px',
          color: '#5E6368',
          maxWidth: '740px',
          margin: '0 auto 40px auto',
          lineHeight: 1.7
        }}>
          {t('method.desc', 'We help businesses address fake, spam, and inappropriate Google reviews through policy-based removal requests. Send us your review links for assessment and pay only after successful removal.')}
        </p>

        {/* 3 Core Principle Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {/* Card 1 */}
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#e6edf2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#023052'
            }}>
              <LoopIcon size={26} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('method.card1Title', 'Focused on Review Removal')}
            </h3>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.65, margin: 0 }}>
              {t('method.card1Desc', 'We assess your review links and pursue removal of eligible reviews from your Google Business Profile. You receive clear updates throughout the process.')}
            </p>
          </div>

          {/* Card 2 */}
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#dcfce7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#16a34a'
            }}>
              <Scale size={26} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('method.card2Title', 'Policy-Based Process')}
            </h3>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.65, margin: 0 }}>
              {t('method.card2Desc', 'We assess each review against Google’s content policies and use the appropriate reporting and appeal channels to request removal.')}
            </p>
          </div>

          {/* Card 3 */}
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#f59e0b'
            }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('method.card3Title', 'Pay After Successful Removal')}
            </h3>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.65, margin: 0 }}>
              {t('method.card3Desc', 'You pay only after the agreed review is confirmed removed. No upfront payment. If the review is not removed, there is no removal fee.')}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. WHO WE SERVE SECTION (Industries)
          ======================================================== */}
      <section id="who-we-help" style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <SectionBadge>{t('whoWeServe.badge', 'WHO WE SERVE')}</SectionBadge>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 42px)',
            fontWeight: 700,
            color: '#1F2329',
            lineHeight: 1.25,
            marginBottom: '14px'
          }}>
            {t('whoWeServe.title1', 'Google Review Removal Support ')}<span style={{ color: '#023052' }}>{t('whoWeServe.titleAccent', 'Across Industries')}</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#5E6368', margin: 0 }}>
            {t('whoWeServe.desc', 'We help businesses across different industries assess and request removal of Google reviews that violate platform policies.')}
          </p>
        </div>

        {/* 8 Industry Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '36px'
        }}>
          {(() => {
            const trInd = t('whoWeServe.industries', null);
            const list = trInd ? industries.map((ind, idx) => ({
              ...ind,
              title: trInd[idx]?.title || ind.title,
              description: trInd[idx]?.description || ind.description
            })) : industries;
            return list.map((ind) => (
              <div
                key={ind.id}
                style={{
                  background: '#ffffff',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '8px',
                  padding: '28px',
                  boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: ind.iconBg,
                  color: ind.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  {getIndustryIcon(ind.icon)}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.5, margin: 0 }}>
                  {ind.description}
                </p>
              </div>
            ));
          })()}
        </div>

        {/* Bottom Notice Banner */}
        <div style={{
          background: '#ffffff',
          border: '0.8px solid #DBDDE1',
          borderRadius: '8px',
          padding: '24px 32px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
        }}>
          <p style={{
            fontSize: '16px',
            color: '#023052',
            margin: 0,
            lineHeight: 1.5
          }}>
            {t('whoWeServe.notFound', "Don't see your industry? We work with ALL business types. If you have a Google Business Profile, we can help.")}
          </p>
        </div>
      </section>

      {/* ========================================================
          6. WORLDWIDE COVERAGE SECTION
          ======================================================== */}
      <section style={{
        padding: '100px 24px',
        background: '#f9fafb',
        borderTop: '0.8px solid #DBDDE1',
        borderBottom: '0.8px solid #DBDDE1'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 42px)',
            fontWeight: 700,
            color: '#1F2329',
            lineHeight: 1.25,
            marginBottom: '14px'
          }}>
            {t('worldwide.title', 'Google Review Removal Support Worldwide')}
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#5E6368',
            maxWidth: '750px',
            margin: '0 auto 50px auto'
          }}>
            {t('worldwide.desc', 'We support businesses worldwide with assessment and removal requests for Google reviews that violate platform policies.')}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {t('worldwide.regions', [
              {
                title: 'North America',
                desc: 'Google review removal support for businesses in the United States, Canada, and Mexico. Send your review links for assessment.'
              },
              {
                title: 'Europe',
                desc: 'Supporting businesses in the UK, Netherlands, Germany, France, Spain, Italy, and across Europe with eligible Google review removal requests.'
              },
              {
                title: 'Asia-Pacific',
                desc: 'Google review removal support for businesses in Pakistan, India, Australia, New Zealand, Singapore, Japan, and other Asia-Pacific locations.'
              },
              {
                title: 'Other Regions',
                desc: 'Based elsewhere? We also welcome enquiries from the Middle East, Africa, and South America. Send your review links so we can assess your case.'
              }
            ]).map((reg, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '8px',
                  padding: '32px 24px',
                  textAlign: 'left',
                  boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#e6edf2',
                  color: '#023052',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px'
                }}>
                  <Globe size={24} />
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#1F2329', marginBottom: '10px' }}>
                  {reg.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
                  {reg.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Button below the 4 boxes */}
          <div style={{ marginTop: '45px', textAlign: 'center' }}>
            <a
              href="https://wa.me/naveed.dmca?text=Hello%2C%20I%20would%20like%20to%20send%20my%20review%20links%20for%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#ffffff',
                padding: '16px 36px',
                borderRadius: '28px',
                fontSize: '16px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#20ba59';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#25D366';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.101-.476-.15-.677.15-.2.302-.777.98-.953 1.181-.176.202-.352.227-.653.076-.301-.15-1.272-.469-2.424-1.497-.896-.8-1.5-1.788-1.677-2.09-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.528.15-.176.2-.302.301-.503.101-.201.05-.377-.025-.528-.075-.15-.677-1.633-.928-2.239-.245-.589-.494-.509-.678-.519-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.913 1.23 3.114.15.201 2.124 3.243 5.144 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.088 1.78-.728 2.03-1.431.25-.704.25-1.306.175-1.431-.075-.126-.276-.201-.577-.352zm-5.466 7.618a10.02 10.02 0 0 1-5.112-1.397l-.367-.218-3.799.996 1.014-3.702-.239-.38a10.02 10.02 0 0 1-1.536-5.29c0-5.523 4.49-10.013 10.034-10.013 2.68 0 5.2 1.045 7.095 2.942a10.007 10.007 0 0 1 2.94 7.085c0 5.525-4.49 10.017-10.03 10.017zm8.513-18.535C18.26 1.205 15.26 0 12.006 0 5.437 0 .092 5.345.09 11.916c0 2.099.549 4.148 1.593 5.962L0 24l6.302-1.654a11.892 11.892 0 0 0 5.7 1.442h.005c6.568 0 11.914-5.346 11.916-11.918 0-3.184-1.24-6.177-3.404-8.406z"/>
              </svg>
              <span>{t('worldwide.ctaBtn', 'Send Your Review Links')}</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. THE PROCESS SECTION (How It Works)
          ======================================================== */}
      <section id="how-it-works" style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <SectionBadge>{t('process.badge', 'THE PROCESS')}</SectionBadge>
        <h2 style={{
          fontSize: 'clamp(30px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1F2329',
          lineHeight: 1.25,
          marginBottom: '12px'
        }}>
          {t('process.title1', 'How Our Google Review Removal ')}<span style={{ color: '#023052' }}>{t('process.titleAccent', 'Service Works')}</span>
        </h2>
        <p style={{
          fontSize: '17px',
          color: '#5E6368',
          maxWidth: '780px',
          margin: '0 auto 50px auto'
        }}>
          {t('process.desc', 'Three simple steps: send your links, let us assess and process your case, and pay after successful removal.')}
        </p>

        <StepTimeline />
      </section>

      {/* ========================================================
          8. THE DATA SECTION
          ======================================================== */}
      <section style={{
        padding: '100px 24px',
        background: '#ffffff',
        borderTop: '0.8px solid #DBDDE1',
        borderBottom: '0.8px solid #DBDDE1'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionBadge>{t('reputation.badge', 'YOUR ONLINE REPUTATION')}</SectionBadge>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 42px)',
            fontWeight: 700,
            color: '#1F2329',
            lineHeight: 1.25,
            marginBottom: '50px'
          }}>
            {t('reputation.title1', 'Why Google Reviews Matter to ')}<span style={{ color: '#023052' }}>{t('reputation.titleAccent', 'Your Business')}</span>
          </h2>

          {/* 4 Reputational Impact Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {t('reputation.cards', [
              {
                title: 'Customer Trust',
                desc: 'Your Google reviews help potential customers form their first impression of your business.'
              },
              {
                title: 'Business Credibility',
                desc: 'Fake and misleading reviews can create an inaccurate picture of your business and its services.'
              },
              {
                title: 'Customer Decisions',
                desc: 'Your rating and review content can influence whether customers contact you, visit you, or book your services.'
              },
              {
                title: 'Professional Support',
                desc: 'Get help assessing inappropriate reviews and requesting removal of eligible content.'
              }
            ]).map((d, i) => (
              <div
                key={i}
                style={{
                  background: '#f9fafb',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '8px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Callout box */}
          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: '#e6edf2',
            border: '0.8px solid #DBDDE1',
            borderRadius: '12px',
            padding: '36px 30px',
            textAlign: 'center',
            boxShadow: 'rgba(32, 33, 36, 0.08) 0px 2px 8px 0px'
          }}>
            <p style={{ fontSize: '17px', color: '#1F2329', lineHeight: 1.7, margin: '0 auto 24px auto', maxWidth: '750px', fontWeight: 500 }}>
              {t('reputation.ctaBanner', 'Concerned about reviews on your Google Business Profile? Send us your review links. We’ll assess your case and explain the available options, pricing, and expected timeline.')}
            </p>
            <a
              href="https://wa.me/naveed.dmca?text=Hello%2C%20I%20would%20like%20to%20send%20my%20review%20links%20for%20assessment."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('Contact', { channel: 'WhatsApp', placement: 'reputation_banner' })}
              style={{
                background: '#25D366',
                color: '#ffffff',
                padding: '14px 32px',
                borderRadius: '26px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#20ba59';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#25D366';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.3)';
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.101-.476-.15-.677.15-.2.302-.777.98-.953 1.181-.176.202-.352.227-.653.076-.301-.15-1.272-.469-2.424-1.497-.896-.8-1.5-1.788-1.677-2.09-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.528.15-.176.2-.302.301-.503.101-.201.05-.377-.025-.528-.075-.15-.677-1.633-.928-2.239-.245-.589-.494-.509-.678-.519-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.913 1.23 3.114.15.201 2.124 3.243 5.144 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.088 1.78-.728 2.03-1.431.25-.704.25-1.306.175-1.431-.075-.126-.276-.201-.577-.352zm-5.466 7.618a10.02 10.02 0 0 1-5.112-1.397l-.367-.218-3.799.996 1.014-3.702-.239-.38a10.02 10.02 0 0 1-1.536-5.29c0-5.523 4.49-10.013 10.034-10.013 2.68 0 5.2 1.045 7.095 2.942a10.007 10.007 0 0 1 2.94 7.085c0 5.525-4.49 10.017-10.03 10.017zm8.513-18.535C18.26 1.205 15.26 0 12.006 0 5.437 0 .092 5.345.09 11.916c0 2.099.549 4.148 1.593 5.962L0 24l6.302-1.654a11.892 11.892 0 0 0 5.7 1.442h.005c6.568 0 11.914-5.346 11.916-11.918 0-3.184-1.24-6.177-3.404-8.406z"/>
              </svg>
              <span>{t('reputation.ctaBtn', 'Send Your Review Links on WhatsApp')}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. WHAT WE REMOVE (10 Review Types)
          ======================================================== */}
      <section style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <SectionBadge>{t('assess.badge', 'REVIEWS WE ASSESS')}</SectionBadge>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 42px)',
            fontWeight: 700,
            color: '#1F2329',
            lineHeight: 1.25,
            marginBottom: '14px'
          }}>
            {t('assess.title1', 'Types of Google Reviews We Can ')}<span style={{ color: '#023052' }}>{t('assess.titleAccent', 'Help You Address')}</span>
          </h2>
          <p style={{
            fontSize: '17px',
            color: '#5E6368',
            maxWidth: '780px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            {t('assess.subtitle', 'We assess each review for potential policy violations. Eligibility and removal outcomes depend on the content, available evidence, and Google’s decision.')}
          </p>
        </div>

        {/* 9 Review Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {(() => {
            const trTypes = t('assess.types', null);
            const list = trTypes ? reviewTypes.map((rt, idx) => ({
              ...rt,
              title: trTypes[idx]?.title || rt.title,
              description: trTypes[idx]?.description || rt.description
            })) : reviewTypes;
            return list.map((rt) => (
              <div
                key={rt.id}
                style={{
                  background: '#ffffff',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '8px',
                  padding: '24px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: rt.iconBg,
                  color: rt.iconColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {getReviewTypeIcon(rt.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1F2329', marginBottom: '6px', lineHeight: 1.3 }}>
                    {rt.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.5, margin: 0 }}>
                    {rt.description}
                  </p>
                </div>
              </div>
            ));
          })()}
        </div>

        {/* CTA below grid */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#5E6368', marginBottom: '16px' }}>
            {t('assess.notSure', 'Not sure if your reviews qualify for removal?')}
          </p>
          <Link
            to="/getstarted"
            style={{
              background: '#023052',
              color: '#ffffff',
              padding: '14px 34px',
              borderRadius: '24px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(2, 48, 82, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#011c30';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(2, 48, 82, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#023052';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(2, 48, 82, 0.3)';
            }}
          >
            <span>{t('assess.auditBtn', 'Get Your Free Review Audit')}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* ========================================================
          10. CLIENT RESULTS (Testimonials)
          ======================================================== */}
      <section id="client-results" style={{
        padding: '100px 24px',
        background: '#f9fafb',
        borderTop: '0.8px solid #DBDDE1',
        borderBottom: '0.8px solid #DBDDE1'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionBadge>{t('feedback.badge', 'CLIENT FEEDBACK')}</SectionBadge>
          <h2 style={{
            fontSize: 'clamp(30px, 4vw, 42px)',
            fontWeight: 700,
            color: '#1F2329',
            lineHeight: 1.25,
            marginBottom: '50px'
          }}>
            {t('feedback.title1', 'What Our Clients Say About ')}<span style={{ color: '#023052', fontStyle: 'italic' }}>{t('feedback.titleAccent', 'Our Service')}</span>
          </h2>

          {/* 4 Testimonial Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '24px',
            marginBottom: '48px',
            textAlign: 'left'
          }}>
            {(() => {
              const trTestimonials = t('feedback.testimonials', null);
              const list = trTestimonials ? testimonials.map((tm, idx) => ({
                ...tm,
                quote: trTestimonials[idx]?.quote || tm.quote,
                name: trTestimonials[idx]?.name || tm.name,
                role: trTestimonials[idx]?.role || tm.role
              })) : testimonials;
              return list.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#ffffff',
                    border: '0.8px solid #DBDDE1',
                    borderRadius: '8px',
                    padding: '30px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px' }}>
                      "{item.quote}"
                    </p>
                  </div>

                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1F2329' }}>
                      — {item.name}
                    </div>
                    <div style={{ fontSize: '13px', color: '#5E6368', marginBottom: '12px' }}>
                      {item.role}
                    </div>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#16a34a'
                    }}>
                      <Check size={14} strokeWidth={2.5} />
                      {t('feedback.verifiedClient', 'Verified Client')}
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* Privacy Guarantee Card */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '12px',
            padding: '14px 28px',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
          }}>
            <Lock size={16} color="#16a34a" />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#1F2329' }}>
              {t('feedback.privacyPromise', 'We will never promote you or your brand using our service. Your privacy is promised.')}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          11. PARTNER PROGRAM SECTION
          ======================================================== */}
      <section id="partner-program" style={{
        padding: '100px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <SectionBadge>{t('partner.badge', 'PARTNER PROGRAM')}</SectionBadge>
        <h2 style={{
          fontSize: 'clamp(30px, 4vw, 42px)',
          fontWeight: 700,
          color: '#1F2329',
          lineHeight: 1.25,
          marginBottom: '14px'
        }}>
          {t('partner.title1', 'Partner With Us for ')}<span style={{ color: '#023052' }}>{t('partner.titleAccent', 'Google Review Removal Support')}</span>
        </h2>
        <p style={{
          fontSize: '17px',
          color: '#5E6368',
          maxWidth: '750px',
          margin: '0 auto 48px auto'
        }}>
          {t('partner.desc', 'We work with marketing agencies, reputation management consultants, and resellers to support eligible Google review removal cases for their clients.')}
        </p>

        {/* 3 Partner Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            textAlign: 'center',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto'
            }}>
              <DollarSign size={26} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('partner.card1Title', 'Partner Pricing')}
            </h3>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
              {t('partner.card1Desc', 'Contact us to discuss pricing for your client cases. Rates are agreed before work begins and depend on case requirements and order volume.')}
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            textAlign: 'center',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#e6edf2',
              color: '#023052',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto'
            }}>
              <ShieldCheck size={26} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('partner.card2Title', 'Support for Your Agency')}
            </h3>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
              {t('partner.card2Desc', 'You manage your client relationships while we support the review removal process. Branding and communication arrangements are agreed before we begin.')}
            </p>
          </div>

          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '8px',
            padding: '36px 28px',
            textAlign: 'center',
            boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: '#fef3c7',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto'
            }}>
              <CheckCircle2 size={26} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
              {t('partner.card3Title', 'We Handle Case Processing')}
            </h3>
            <p style={{ fontSize: '15px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
              {t('partner.card3Desc', 'Send your clients’ review links and relevant details. We assess eligible cases, process removal requests, and share progress updates with you.')}
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div style={{
          background: '#ffffff',
          border: '0.8px solid #DBDDE1',
          borderRadius: '8px',
          padding: '32px 24px',
          maxWidth: '900px',
          margin: '0 auto 32px auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px'
        }}>
          {t('partner.stats', [
            { title: 'Clear Pricing', subtitle: 'Agreed Before Work Begins' },
            { title: 'Case Updates', subtitle: 'Progress Shared With You' },
            { title: 'Pay After Removal', subtitle: 'Payment After Confirmed Results' }
          ]).map((st, idx) => (
            <div key={idx}>
              <div style={{ fontSize: '22px', fontWeight: 700, color: idx % 2 === 0 ? '#023052' : '#1F2329', marginBottom: '6px' }}>
                {st.title}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#5E6368', letterSpacing: '0.5px' }}>
                {st.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="https://wa.me/naveed.dmca?text=Hello%2C%20I%20would%20like%20to%20discuss%20the%20Partner%20Program."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#1F2329',
              color: '#ffffff',
              padding: '14px 36px',
              borderRadius: '24px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '12px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#023052';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1F2329';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <MessageSquare size={16} />
            <span>{t('partner.btn', 'Text Us Now')}</span>
          </a>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
            {t('partner.bottomNote', 'Contact us to discuss your client volume, case requirements, and partnership terms.')}
          </p>
        </div>
      </section>

      {/* ========================================================
          12. COMMON QUESTIONS (FAQ Accordion)
          ======================================================== */}
      <section id="faq" style={{
        padding: '100px 24px',
        background: '#ffffff',
        borderTop: '0.8px solid #DBDDE1'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <SectionBadge>{t('faq.badge', 'COMMON QUESTIONS')}</SectionBadge>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 38px)',
            fontWeight: 700,
            color: '#1F2329',
            lineHeight: 1.25,
            margin: 0
          }}>
            {t('faq.title1', 'Frequently Asked Questions About ')}<span style={{ color: '#023052' }}>{t('faq.titleAccent', 'Google Review Removal')}</span>
          </h2>
        </div>

        <FAQAccordion />

        {/* CTA below FAQ */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{
            fontSize: '16px',
            color: '#5E6368',
            maxWidth: '640px',
            margin: '0 auto 18px auto',
            lineHeight: 1.6
          }}>
            {t('faq.stillHaveQuestions', 'Still have questions? Send us your review links and discuss your case with our team.')}
          </p>
          <a
            href="https://wa.me/naveed.dmca?text=Hello%2C%20I%20have%20a%20question%20about%20Google%20review%20removal."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackPixelEvent('Contact', { channel: 'WhatsApp', placement: 'faq_section' })}
            style={{
              background: '#25D366',
              color: '#ffffff',
              padding: '14px 34px',
              borderRadius: '26px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#20ba59';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 211, 102, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#25D366';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.3)';
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.101-.476-.15-.677.15-.2.302-.777.98-.953 1.181-.176.202-.352.227-.653.076-.301-.15-1.272-.469-2.424-1.497-.896-.8-1.5-1.788-1.677-2.09-.176-.302-.019-.465.132-.615.136-.135.301-.352.452-.528.15-.176.2-.302.301-.503.101-.201.05-.377-.025-.528-.075-.15-.677-1.633-.928-2.239-.245-.589-.494-.509-.678-.519-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.079 2.913 1.23 3.114.15.201 2.124 3.243 5.144 4.549.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.088 1.78-.728 2.03-1.431.25-.704.25-1.306.175-1.431-.075-.126-.276-.201-.577-.352zm-5.466 7.618a10.02 10.02 0 0 1-5.112-1.397l-.367-.218-3.799.996 1.014-3.702-.239-.38a10.02 10.02 0 0 1-1.536-5.29c0-5.523 4.49-10.013 10.034-10.013 2.68 0 5.2 1.045 7.095 2.942a10.007 10.007 0 0 1 2.94 7.085c0 5.525-4.49 10.017-10.03 10.017zm8.513-18.535C18.26 1.205 15.26 0 12.006 0 5.437 0 .092 5.345.09 11.916c0 2.099.549 4.148 1.593 5.962L0 24l6.302-1.654a11.892 11.892 0 0 0 5.7 1.442h.005c6.568 0 11.914-5.346 11.916-11.918 0-3.184-1.24-6.177-3.404-8.406z"/>
            </svg>
            <span>{t('faq.askWhatsApp', 'Ask on WhatsApp')}</span>
            <ArrowRight size={17} />
          </a>
        </div>
        </div>
      </section>

      {/* ========================================================
          13. FINAL CTA SECTION (Light Blue #e6edf2)
          ======================================================== */}
      <section style={{
        background: '#e6edf2',
        padding: '90px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#1F2329',
            marginBottom: '18px',
            letterSpacing: '-0.5px'
          }}>
            {t('finalCta.title1', 'Your Clean Reputation')}<br />
            Is <span style={{ color: '#023052' }}>{t('finalCta.title2', 'One Call Away.')}</span>
          </h2>

          <p style={{
            fontSize: '17px',
            color: '#5E6368',
            lineHeight: 1.6,
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px auto'
          }}>
            {t('finalCta.desc1', "Every day that review stays up, it's costing you customers and money.")}<br />
            {t('finalCta.desc2', 'Take it down today — risk free.')}
          </p>

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
              marginBottom: '36px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#03406D'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#023052'}
          >
            <span>{t('finalCta.btn', 'Book My Free Consultation Now')}</span>
            <ArrowRight size={18} />
          </Link>

          {/* Checklist */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center'
          }}>
            {t('finalCta.checklist', [
              'Clear Pricing Before Work Begins',
              'Pay Only After Successful Removal',
              'No Passwords or Verification Codes Required',
              'Case Updates Throughout the Process'
            ]).map((item, idx) => (
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

import React from 'react';
import { PhoneCall, Settings, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function StepTimeline() {
  const { t } = useLanguage();
  const icons = [PhoneCall, Settings, CheckCircle2];
  const defaultSteps = [
    {
      num: '01',
      title: 'Send Your Review Links',
      body: 'Contact us on WhatsApp and share the Google review links you want assessed. We check eligibility and explain the price and expected timeline before work begins.',
      icon: PhoneCall
    },
    {
      num: '02',
      title: 'We Work on Your Case',
      body: 'Once you approve the agreed terms, we process eligible reviews through policy-based reporting and removal requests. We keep you updated on progress.',
      icon: Settings
    },
    {
      num: '03',
      title: 'Confirm Removal & Pay',
      body: 'We share the result so you can verify that the agreed review has been removed. Payment is due only after successful removal. No removal, no removal fee.',
      icon: CheckCircle2
    }
  ];

  const translatedSteps = t('process.steps', null);
  const steps = translatedSteps ? translatedSteps.map((s, idx) => ({
    num: s.num || `0${idx + 1}`,
    title: s.title,
    body: s.desc || s.body,
    icon: icons[idx] || PhoneCall
  })) : defaultSteps;

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
      {/* Visual Timeline bar for desktop */}
      <div className="timeline-connector-bar" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '40px',
        position: 'relative'
      }}>
        {steps.map((step, idx) => (
          <React.Fragment key={step.num}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#e6edf2',
              border: '2px solid #ccd8e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 700,
              color: '#023052',
              boxShadow: '0 4px 14px rgba(2, 48, 82, 0.12)',
              zIndex: 2,
              flexShrink: 0
            }}>
              {step.num}
            </div>
            {idx < steps.length - 1 && (
              <div className="timeline-line" style={{
                flex: 1,
                maxWidth: '260px',
                height: '2px',
                background: '#ccd8e2',
                margin: '0 16px'
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 3 Step Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '50px'
      }}>
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.num}
              style={{
                background: '#ffffff',
                border: '0.8px solid #DBDDE1',
                borderRadius: '8px',
                padding: '36px 28px',
                textAlign: 'center',
                boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: '#e6edf2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                color: '#023052'
              }}>
                <IconComponent size={24} />
              </div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#1F2329',
                marginBottom: '14px',
                lineHeight: 1.3
              }}>
                {step.title}
              </h4>
              <p style={{
                fontSize: '15px',
                color: '#5E6368',
                lineHeight: 1.6,
                margin: 0
              }}>
                {step.body}
              </p>
            </div>
          );
        })}
      </div>

      {/* Timeline Callout & WhatsApp CTA */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1F2329',
          margin: '0 auto 28px auto',
          maxWidth: '720px',
          lineHeight: 1.6
        }}>
          {t('process.timelineNote', 'Processing time varies by case. We explain the expected timeline before starting.')}
        </p>

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
          <span>{t('process.bannerBtn', 'Send Your Links on WhatsApp')}</span>
          <ArrowRight size={17} />
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-connector-bar {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

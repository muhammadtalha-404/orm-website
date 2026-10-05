import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import SectionBadge from '../components/SectionBadge';

export default function ContentPage({ title, category, description }) {
  const location = useLocation();

  // Determine title and info from path if not explicitly provided
  const pageTitle = title || location.pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Service Details';

  return (
    <div style={{ padding: '80px 24px', maxWidth: '1000px', margin: '0 auto', minHeight: '70vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <SectionBadge>{category || 'ORM SERVICE'}</SectionBadge>
        <h1 style={{
          fontSize: 'clamp(32px, 5vw, 46px)',
          fontWeight: 700,
          color: '#1F2329',
          lineHeight: 1.2,
          marginBottom: '20px'
        }}>
          {pageTitle}
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#5E6368',
          maxWidth: '750px',
          margin: '0 auto',
          lineHeight: 1.7
        }}>
          {description || `Professional, 100% legal, and policy-compliant review removal services for ${pageTitle.toLowerCase()}. You pay nothing unless the damaging content comes down.`}
        </p>
      </div>

      <div style={{
        background: '#ffffff',
        border: '0.8px solid #DBDDE1',
        borderRadius: '20px',
        padding: '48px 40px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
        marginBottom: '60px'
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '16px' }}>
          Why Choose ORM for {pageTitle}
        </h2>
        <p style={{ fontSize: '16px', color: '#5E6368', lineHeight: 1.7, marginBottom: '28px' }}>
          At ORM, we understand that unfair and fake Google content can cause irreversible damage to your revenue,
          customer acquisition, and brand reputation. That's why our specialized team operates directly through official Google policy
          guidelines to identify and permanently remove qualifying negative content.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '36px' }}>
          {[
            { title: 'Zero Upfront Risk', text: 'You pay absolutely $0 unless the content is confirmed removed.' },
            { title: 'Fast 24–72hr Turnaround', text: 'Most qualifying content is successfully removed within 48 to 72 hours.' },
            { title: '100% Policy Compliant', text: 'Strict adherence to Google guidelines with no risk to your business listing.' },
            { title: 'Complete Privacy', text: 'We never disclose your identity or use your business as public marketing.' }
          ].map((item, idx) => (
            <div key={idx} style={{ background: '#f9fafb', padding: '20px', borderRadius: '12px', border: '0.8px solid #DBDDE1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle2 size={18} color="#16a34a" />
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1F2329', margin: 0 }}>{item.title}</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.5, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/getstarted"
            style={{
              background: '#023052',
              color: '#ffffff',
              padding: '16px 38px',
              borderRadius: '24px',
              fontSize: '16px',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(2, 48, 82, 0.25)'
            }}
          >
            <span>Get Your Free Audit For {pageTitle}</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </div>
  );
}

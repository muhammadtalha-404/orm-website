import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, AlertCircle, Check, ArrowRight, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ReviewWidget() {
  const { t } = useLanguage();
  const defaultReviews = [
    {
      name: 'Mike R.',
      time: '2 weeks ago',
      rating: 1,
      text: 'Absolutely terrible service. Waited over an hour and nobody acknowledged me.',
    },
    {
      name: 'Sarah K.',
      time: '1 month ago',
      rating: 1,
      text: 'Worst experience ever. Staff was rude and the quality was horrible.',
    },
    {
      name: 'James T.',
      time: '3 weeks ago',
      rating: 2,
      text: 'Very disappointing. Overpriced for what you get.',
    },
  ];

  const reviews = t('widget.reviews', defaultReviews);

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: 'rgba(32, 33, 36, 0.28) 0px 2px 10px 0px, 0 10px 30px rgba(2, 48, 82, 0.08)',
      padding: '28px',
      maxWidth: '440px',
      width: '100%',
      border: '1px solid #DBDDE1',
      position: 'relative'
    }}>
      {/* Floating Guardian Shield Badge */}
      <div style={{
        position: 'absolute',
        top: '-18px',
        right: '-12px',
        background: '#ffffff',
        border: '1.5px solid #023052',
        borderRadius: '30px',
        padding: '6px 14px 6px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: '9px',
        boxShadow: '0 8px 24px rgba(2, 48, 82, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08)',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <img
          src="/shield_emblem.png"
          alt="Reputation Shield"
          style={{
            height: '34px',
            width: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
        <div style={{ textAlign: 'left' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#023052',
            letterSpacing: '0.6px',
            lineHeight: 1.2
          }}>
            {t('widget.reputationGuarded', 'REPUTATION GUARDED')}
          </div>
          <div style={{
            fontSize: '10px',
            color: '#16a34a',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginTop: '2px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#16a34a',
              display: 'inline-block',
              boxShadow: '0 0 0 2px rgba(22, 163, 74, 0.25)'
            }} />
            {t('widget.activeProtection', 'Active Protection')}
          </div>
        </div>
      </div>

      {/* Subtle Background Watermark Shield */}
      <div style={{
        position: 'absolute',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '260px',
        height: '260px',
        backgroundImage: 'url(/shield_emblem.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        opacity: 0.04,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Top Section: Business Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px', position: 'relative', zIndex: 1 }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: '#e6edf2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <MapPin size={22} color="#023052" />
        </div>
        <div>
          <h4 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#1F2329',
            margin: 0,
            lineHeight: 1.2
          }}>
            {t('widget.lawFirm', 'ORM Law Firm')}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#1F2329' }}>5.0</span>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span style={{ fontSize: '13px', color: '#5E6368' }}>{t('widget.reviewsCount', '(274 reviews)')}</span>
          </div>
        </div>
      </div>

      {/* Warning Alert Bar */}
      <div style={{
        background: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '8px',
        padding: '9px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        marginBottom: '16px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={15} color="#dc2626" />
          <span style={{
            fontSize: '11px',
            fontWeight: 700,
            color: '#dc2626',
            letterSpacing: '0.8px',
            textTransform: 'uppercase'
          }}>
            {t('widget.warning', 'Warning: 3 Damaging Reviews Found')}
          </span>
        </div>
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          color: '#16a34a',
          background: '#dcfce7',
          padding: '2px 8px',
          borderRadius: '10px',
          letterSpacing: '0.4px',
          flexShrink: 0
        }}>
          {t('widget.shieldOn', 'SHIELD ON')}
        </span>
      </div>

      {/* Stack of 3 Mock Reviews */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            style={{
              background: '#f9fafb',
              border: '0.8px solid #DBDDE1',
              borderRadius: '8px',
              padding: '14px 16px',
              position: 'relative'
            }}
          >
            {/* Header: User Info & REMOVED Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#DBDDE1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User size={14} color="#6b7280" />
                </div>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#1F2329' }}>{rev.name}</span>
                <span style={{ fontSize: '12px', color: '#9ca3af' }}>&bull; {rev.time}</span>
              </div>

              {/* Green REMOVED Pill Badge */}
              <div style={{
                background: '#16a34a',
                color: '#ffffff',
                borderRadius: '9999px',
                padding: '3px 10px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.5px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Check size={11} strokeWidth={3} />
                {t('widget.removedBadge', 'REMOVED')}
              </div>
            </div>

            {/* Star Rating */}
            <div style={{ display: 'flex', gap: '2px', marginBottom: '6px' }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < rev.rating ? '#f59e0b' : '#e5e7eb'}
                  color={i < rev.rating ? '#f59e0b' : '#e5e7eb'}
                />
              ))}
            </div>

            {/* Review text */}
            <p style={{
              fontSize: '13px',
              color: '#5E6368',
              fontStyle: 'italic',
              margin: 0,
              lineHeight: 1.45
            }}>
              "{rev.text}"
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <Link
        to="/getstarted"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          background: '#023052',
          color: '#ffffff',
          borderRadius: '8px',
          padding: '14px',
          fontSize: '15px',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'background 0.2s',
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 1
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = '#03406D'}
        onMouseLeave={(e) => e.currentTarget.style.background = '#023052'}
      >
        <span>{t('widget.removeBtn', 'Remove My Reviews')}</span>
        <ArrowRight size={17} />
      </Link>
    </div>
  );
}

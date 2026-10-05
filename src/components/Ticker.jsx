import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Ticker() {
  const items = [
    'CONFIDENTIAL & DISCREET',
    'ALL INDUSTRIES',
    'ALL REVIEW TYPES',
    'FULL REMOVAL',
    'POLICY-COMPLIANT PROCESS',
    'NO REMOVAL NO CHARGE',
  ];

  // Repeat items for seamless infinite marquee loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div style={{
      width: '100%',
      background: '#ffffff',
      borderTop: '0.8px solid #DBDDE1',
      borderBottom: '0.8px solid #DBDDE1',
      padding: '16px 0',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="ticker-track">
        {displayItems.map((text, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              color: '#1F2329',
              whiteSpace: 'nowrap'
            }}
          >
            <ShieldCheck size={16} color="#16a34a" />
            <span>{text}</span>
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          gap: 48px;
          width: max-content;
          animation: tickerScroll 35s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

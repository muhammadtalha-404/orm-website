import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ className = '', style = {} }) {
  const { language, setLanguage } = useLanguage();
  const isDutch = language === 'nl';

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Current language: ${language.toUpperCase()}. Click to switch to ${isDutch ? 'English' : 'Dutch'}`}
      className={`lang-toggle ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: '#f1f5f9',
        border: '1px solid #cbd5e1',
        borderRadius: '20px',
        padding: '3px',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.2s ease',
        ...style
      }}
      onClick={() => setLanguage(isDutch ? 'en' : 'nl')}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setLanguage(isDutch ? 'en' : 'nl');
        }
      }}
    >
      {/* Sliding Active Pill */}
      <div
        style={{
          position: 'absolute',
          top: '3px',
          left: '3px',
          width: '32px',
          height: '24px',
          background: '#023052',
          borderRadius: '16px',
          boxShadow: '0 2px 4px rgba(2, 48, 82, 0.25)',
          transform: isDutch ? 'translateX(32px)' : 'translateX(0px)',
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1
        }}
      />

      {/* EN option */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '24px',
          fontSize: '11.5px',
          fontWeight: 700,
          letterSpacing: '0.4px',
          color: !isDutch ? '#ffffff' : '#64748b',
          zIndex: 2,
          transition: 'color 0.2s ease'
        }}
      >
        EN
      </span>

      {/* NL option */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '24px',
          fontSize: '11.5px',
          fontWeight: 700,
          letterSpacing: '0.4px',
          color: isDutch ? '#ffffff' : '#64748b',
          zIndex: 2,
          transition: 'color 0.2s ease'
        }}
      >
        NL
      </span>
    </div>
  );
}

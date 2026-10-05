import React from 'react';

export default function SectionBadge({ children, className = '', style = {} }) {
  return (
    <div
      className={`section-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 16px',
        border: '0.8px solid #DBDDE1',
        borderRadius: '16px',
        background: '#ffffff',
        fontSize: '13px',
        fontWeight: 500,
        textTransform: 'none',
        letterSpacing: '0.325px',
        color: '#5E6368',
        marginBottom: '20px',
        ...style
      }}
    >
      {children}
    </div>
  );
}

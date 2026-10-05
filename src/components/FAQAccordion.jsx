import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faq';
import { useLanguage } from '../context/LanguageContext';

export default function FAQAccordion() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(1); // First item expanded by default

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const items = t('faq.items', faqs);

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', width: '100%' }}>
      {items.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            style={{
              background: '#ffffff',
              border: '0.8px solid #DBDDE1',
              borderRadius: '8px',
              marginBottom: '12px',
              overflow: 'hidden',
              boxShadow: 'rgba(32, 33, 36, 0.28) 0px 1px 6px 0px',
              transition: 'box-shadow 0.2s, border-color 0.2s'
            }}
          >
            <button
              onClick={() => toggle(faq.id)}
              style={{
                width: '100%',
                padding: '22px 26px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                gap: '16px'
              }}
              aria-expanded={isOpen}
            >
              <span style={{
                fontSize: '17px',
                fontWeight: 600,
                color: isOpen ? '#023052' : '#1a1a2e',
                lineHeight: 1.4,
                transition: 'color 0.2s'
              }}>
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                color={isOpen ? '#023052' : '#6b7280'}
                style={{
                  flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease, color 0.2s'
                }}
              />
            </button>

            {isOpen && (
              <div style={{
                padding: '0 26px 24px 26px',
                borderTop: '0.8px solid #DBDDE1',
                color: '#5E6368',
                fontSize: '15px',
                lineHeight: 1.65
              }}>
                <div style={{ paddingTop: '16px' }}>
                  {faq.answer}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

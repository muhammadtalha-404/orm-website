import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Lock, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function GetStarted() {
  const { language, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessTypeIndex: null,
    quantityIndex: null,
    ageIndex: null,
    impactIndex: null,
    urgencyIndex: null,
    sourceKey: '',
    name: '',
    businessName: '',
    phone: '',
    email: '',
    location: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 7;

  const handleSelectOption = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const step1Options = t('wizard.step1.options') || [];
  const step2Options = t('wizard.step2.options') || [];
  const step3Options = t('wizard.step3.options') || [];
  const step4Options = t('wizard.step4.options') || [];
  const step5Options = t('wizard.step5.options') || [];

  const step6Options = [
    { key: 'google', label: 'Google', icon: 'google' },
    { key: 'instagram', label: 'Instagram', icon: 'instagram' },
    { key: 'facebook', label: 'Facebook', icon: 'facebook' },
    { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
    { key: 'reddit', label: 'Reddit', icon: 'reddit' },
    { key: 'twitter', label: 'X (Twitter)', icon: 'twitter' },
    { key: 'friend', label: t('wizard.step6.friend'), icon: 'friend' },
    { key: 'coworker', label: t('wizard.step6.coworker'), icon: 'coworker' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedBusinessType = formData.businessTypeIndex !== null && step1Options[formData.businessTypeIndex] ? step1Options[formData.businessTypeIndex] : 'N/A';
    const selectedQuantity = formData.quantityIndex !== null && step2Options[formData.quantityIndex] ? step2Options[formData.quantityIndex] : 'N/A';
    const selectedAge = formData.ageIndex !== null && step3Options[formData.ageIndex] ? step3Options[formData.ageIndex] : 'N/A';
    const selectedImpact = formData.impactIndex !== null && step4Options[formData.impactIndex] ? step4Options[formData.impactIndex] : 'N/A';
    const selectedUrgency = formData.urgencyIndex !== null && step5Options[formData.urgencyIndex] ? step5Options[formData.urgencyIndex] : 'N/A';
    const foundSource = step6Options.find(o => o.key === formData.sourceKey);
    const selectedSource = foundSource ? foundSource.label : 'N/A';

    const phoneNumber = "923107791895";
    const isDutch = language === 'nl';

    const message = isDutch
      ? `*Nieuwe gratis consultatie aanvraag*

*Bedrijfstype:* ${selectedBusinessType}
*Aantal reviews:* ${selectedQuantity}
*Leeftijd reviews:* ${selectedAge}
*Impact:* ${selectedImpact}
*Urgentie:* ${selectedUrgency}
*Bron:* ${selectedSource}

*Naam:* ${formData.name}
*Bedrijfsnaam:* ${formData.businessName}
*Telefoon:* ${formData.phone}
*E-mail:* ${formData.email}
*Locatie:* ${formData.location}
*Notities:* ${formData.notes || 'Geen'}`
      : `*New Free Consultation Request*
    
*Business Type:* ${selectedBusinessType}
*Quantity:* ${selectedQuantity}
*Age:* ${selectedAge}
*Impact:* ${selectedImpact}
*Urgency:* ${selectedUrgency}
*Source:* ${selectedSource}

*Name:* ${formData.name}
*Business Name:* ${formData.businessName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Location:* ${formData.location}
*Notes:* ${formData.notes || 'None'}`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const getIcon = (type) => {
    switch(type) {
      case 'google': return <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>;
      case 'facebook': return <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
      case 'instagram': return <svg width="20" height="20" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" fill="url(#ig-grad)" rx="5"/><defs><linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2"><stop offset="0" stop-color="#fd5949"/><stop offset="0.5" stop-color="#d6249f"/><stop offset="1" stop-color="#285AEB"/></linearGradient></defs><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/><rect width="14" height="14" x="5" y="5" fill="none" stroke="#fff" stroke-width="2" rx="3"/></svg>;
      case 'linkedin': return <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>;
      case 'reddit': return <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF4500"/><path fill="#FFF" d="M16.7 11.23c.87 0 1.57-.72 1.57-1.6 0-.89-.7-1.61-1.57-1.61-.59 0-1.11.33-1.38.83l-3.32-1.58.74-3.48 2.45.52c.04.75.64 1.34 1.39 1.34.78 0 1.41-.64 1.41-1.43 0-.79-.63-1.43-1.41-1.43-.63 0-1.17.43-1.35 1.01l-2.73-.59c-.21-.05-.41.07-.46.29l-.82 3.86-3.48 1.66c-.28-.53-.82-.87-1.43-.87-.9 0-1.62.74-1.62 1.64 0 .9.72 1.64 1.62 1.64.44 0 .84-.19 1.11-.49 1.25.86 2.97 1.4 4.88 1.45l-.11.5c-.26 1.23-1.35 2.15-2.63 2.15-1.29 0-2.37-.92-2.63-2.15l-.11-.5c1.91-.05 3.63-.59 4.88-1.45.27.3.67.49 1.11.49.9 0 1.62-.74 1.62-1.64zM9.47 13.91c.72 0 1.3.59 1.3 1.32 0 .72-.58 1.31-1.3 1.31-.72 0-1.3-.59-1.3-1.31 0-.73.58-1.32 1.3-1.32zm5.06 0c.72 0 1.3.59 1.3 1.32 0 .72-.58 1.31-1.3 1.31-.72 0-1.3-.59-1.3-1.31 0-.73.58-1.32 1.3-1.32zm-2.53 4.29c-1.39 0-2.6-.53-3.32-1.38l.8-.75c.53.62 1.47 1 2.52 1 1.06 0 2-.38 2.53-1l.8.75c-.71.85-1.93 1.38-3.33 1.38z"/></svg>;
      case 'twitter': return <svg width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#000"/><path fill="#FFF" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
      case 'friend': return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
      case 'coworker': return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>;
      default: return null;
    }
  };

  const stepIndicatorText = (t('wizard.stepIndicator') || 'Step {current} of {total}')
    .replace('{current}', currentStep)
    .replace('{total}', totalSteps);

  const successTitleText = (t('wizard.success.title') || 'Thank You, {name}!')
    .replace('{name}', formData.name || t('wizard.success.defaultName') || 'Friend');

  return (
    <div style={{
      minHeight: '85vh',
      padding: '50px 24px 80px 24px',
      background: 'linear-gradient(180deg, #f4f7fa 0%, #e6edf2 50%, #f4f7fa 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '640px', width: '100%' }}>
        {/* Top Navigation Back */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#023052',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={16} />
            {t('wizard.backHome')}
          </Link>
          {!submitted && (
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#5E6368' }}>
              {stepIndicatorText}
            </span>
          )}
        </div>

        {/* Progress Bar */}
        {!submitted && (
          <div style={{
            width: '100%',
            height: '6px',
            background: '#e5e7eb',
            borderRadius: '24px',
            marginBottom: '32px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${(currentStep / totalSteps) * 100}%`,
              background: '#023052',
              transition: 'width 0.3s ease'
            }} />
          </div>
        )}

        {/* Main Card */}
        <div style={{
          background: '#ffffff',
          border: '0.8px solid #DBDDE1',
          borderRadius: '20px',
          padding: '40px 36px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)'
        }}>
          {submitted ? (
            /* Success confirmation */
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: '#dcfce7',
                color: '#16a34a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
                {successTitleText}
              </h2>
              <p style={{ fontSize: '16px', color: '#5E6368', lineHeight: 1.6, marginBottom: '28px' }}>
                {t('wizard.success.desc')}
              </p>

              <Link
                to="/"
                style={{
                  background: '#023052',
                  color: '#ffffff',
                  padding: '12px 30px',
                  borderRadius: '24px',
                  fontSize: '15px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                {t('wizard.success.returnHome')}
              </Link>
            </div>
          ) : (
            <div>
              {/* Step 1 */}
              {currentStep === 1 && (
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                    {t('wizard.step1.title')}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#5E6368', marginBottom: '24px' }}>
                    {t('wizard.step1.subtitle')}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                    {step1Options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption('businessTypeIndex', idx)}
                        className="wizard-option-btn"
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          textAlign: 'left',
                          background: formData.businessTypeIndex === idx ? '#e6edf2' : '#ffffff',
                          border: formData.businessTypeIndex === idx ? '2px solid #023052' : '1px solid #e5e7eb',
                          borderRadius: '12px',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#1F2329',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s'
                        }}
                      >
                        <span>{opt}</span>
                        {formData.businessTypeIndex === idx ? (
                          <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#023052', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </div>
                        ) : null}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                    {t('wizard.step2.title')}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#5E6368', marginBottom: '24px' }}>
                    {t('wizard.step2.subtitle')}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {step2Options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption('quantityIndex', idx)}
                        className="wizard-option-btn"
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          textAlign: 'left',
                          background: formData.quantityIndex === idx ? '#e6edf2' : '#ffffff',
                          border: formData.quantityIndex === idx ? '2px solid #023052' : '1px solid #e5e7eb',
                          borderRadius: '12px',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#1F2329',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s'
                        }}
                      >
                        <span>{opt}</span>
                        <ArrowRight size={16} color="#023052" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                    {t('wizard.step3.title')}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#5E6368', marginBottom: '24px' }}>
                    {t('wizard.step3.subtitle')}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {step3Options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption('ageIndex', idx)}
                        className="wizard-option-btn"
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          textAlign: 'left',
                          background: formData.ageIndex === idx ? '#e6edf2' : '#ffffff',
                          border: formData.ageIndex === idx ? '2px solid #023052' : '1px solid #e5e7eb',
                          borderRadius: '12px',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#1F2329',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s'
                        }}
                      >
                        <span>{opt}</span>
                        <ArrowRight size={16} color="#023052" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {currentStep === 4 && (
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                    {t('wizard.step4.title')}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#5E6368', marginBottom: '24px' }}>
                    {t('wizard.step4.subtitle')}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {step4Options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption('impactIndex', idx)}
                        className="wizard-option-btn"
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          textAlign: 'left',
                          background: formData.impactIndex === idx ? '#e6edf2' : '#ffffff',
                          border: formData.impactIndex === idx ? '2px solid #023052' : '1px solid #e5e7eb',
                          borderRadius: '12px',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#1F2329',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s'
                        }}
                      >
                        <span>{opt}</span>
                        <ArrowRight size={16} color="#023052" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5 */}
              {currentStep === 5 && (
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                    {t('wizard.step5.title')}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#5E6368', marginBottom: '24px' }}>
                    {t('wizard.step5.subtitle')}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {step5Options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption('urgencyIndex', idx)}
                        className="wizard-option-btn"
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          textAlign: 'left',
                          background: formData.urgencyIndex === idx ? '#e6edf2' : '#ffffff',
                          border: formData.urgencyIndex === idx ? '2px solid #023052' : '1px solid #e5e7eb',
                          borderRadius: '12px',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#1F2329',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.15s'
                        }}
                      >
                        <span>{opt}</span>
                        <ArrowRight size={16} color="#023052" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6 */}
              {currentStep === 6 && (
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                    {t('wizard.step6.title')}
                  </h2>
                  <p style={{ fontSize: '15px', color: '#5E6368', marginBottom: '24px' }}>
                    {t('wizard.step6.subtitle')}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                    {step6Options.map(opt => (
                      <button
                        key={opt.key}
                        onClick={() => handleSelectOption('sourceKey', opt.key)}
                        className="wizard-option-btn"
                        style={{
                          padding: '14px 18px',
                          textAlign: 'left',
                          background: formData.sourceKey === opt.key ? '#e6edf2' : '#ffffff',
                          border: formData.sourceKey === opt.key ? '2px solid #023052' : '1px solid #e5e7eb',
                          borderRadius: '12px',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: '#1F2329',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transition: 'all 0.15s'
                        }}
                      >
                        {getIcon(opt.icon)}
                        <span style={{ flex: 1 }}>{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7 (Final Form) */}
              {currentStep === 7 && (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1F2329', marginBottom: '8px' }}>
                    {t('wizard.step7.title')}
                  </h2>
                  <p style={{ fontSize: '14px', color: '#5E6368', marginBottom: '24px' }}>
                    {t('wizard.step7.subtitle')}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1F2329', marginBottom: '6px' }}>
                        {t('wizard.step7.fullNameLabel')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('wizard.step7.fullNamePlaceholder')}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1F2329', marginBottom: '6px' }}>
                        {t('wizard.step7.businessNameLabel')}
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder={t('wizard.step7.businessNamePlaceholder')}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1F2329', marginBottom: '6px' }}>
                          {t('wizard.step7.phoneLabel')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={t('wizard.step7.phonePlaceholder')}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '15px',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1F2329', marginBottom: '6px' }}>
                          {t('wizard.step7.emailLabel')}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t('wizard.step7.emailPlaceholder')}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '15px',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1F2329', marginBottom: '6px' }}>
                        {t('wizard.step7.locationLabel')}
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder={t('wizard.step7.locationPlaceholder')}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#1F2329', marginBottom: '6px' }}>
                        {t('wizard.step7.notesLabel')}
                      </label>
                      <textarea
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder={t('wizard.step7.notesPlaceholder')}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          fontSize: '15px',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        background: '#023052',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '24px',
                        padding: '16px',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginTop: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(2, 48, 82, 0.3)'
                      }}
                    >
                      <span>{t('wizard.step7.submitBtn')}</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              )}

              {/* Navigation Back / Next if on step 2-6 */}
              {currentStep > 1 && currentStep < 7 && (
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-start' }}>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#5E6368',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <ArrowLeft size={15} />
                    {t('wizard.previousStep')}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Security / Privacy Trust footer */}
        <div style={{
          marginTop: '28px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          color: '#5E6368',
          fontSize: '13px'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Lock size={15} color="#16a34a" />
            <span>{t('wizard.badges.ssl')}</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={15} color="#023052" />
            <span>{t('wizard.badges.zeroUpfront')}</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Star size={15} color="#f59e0b" fill="#f59e0b" />
            <span>{t('wizard.badges.confidential')}</span>
          </div>
        </div>
      </div>

      <style>{`
        .wizard-option-btn:hover {
          border-color: #023052 !important;
          background: #f8faff !important;
        }
      `}</style>
    </div>
  );
}

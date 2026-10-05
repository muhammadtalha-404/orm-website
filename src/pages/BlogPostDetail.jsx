import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Check,
  ShieldAlert,
  HelpCircle,
  ListOrdered
} from 'lucide-react';
import SectionBadge from '../components/SectionBadge';
import { blogPosts } from '../data/blogPosts';

export default function BlogPostDetail() {
  const { slug } = useParams();

  const post = blogPosts.find(p => p.slug === slug || p.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div style={{ background: '#ffffff', minHeight: '80vh', padding: '100px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', color: '#1F2329', marginBottom: '16px' }}>Guide Not Found</h1>
        <p style={{ color: '#5E6368', marginBottom: '32px' }}>The article you are looking for does not exist or may have been moved.</p>
        <Link
          to="/blog"
          style={{
            background: '#023052',
            color: '#ffffff',
            padding: '12px 28px',
            borderRadius: '24px',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          Return to Blog Hub
        </Link>
      </div>
    );
  }

  // Related posts
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Breadcrumbs Bar */}
      <div style={{
        background: '#f9fafb',
        borderBottom: '0.8px solid #DBDDE1',
        padding: '16px 24px'
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5E6368' }}>
          <Link to="/" style={{ color: '#5E6368', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link to="/blog" style={{ color: '#5E6368', textDecoration: 'none' }}>Blog & Guides</Link>
          <span>/</span>
          <span style={{ color: '#1F2329', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {post.title}
          </span>
        </div>
      </div>

      {/* Main Article Content */}
      <article style={{ maxWidth: '880px', margin: '0 auto', padding: '48px 24px 80px 24px' }}>
        {/* Back Link */}
        <Link
          to="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: 600,
            color: '#5E6368',
            textDecoration: 'none',
            marginBottom: '26px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#023052'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#5E6368'}
        >
          <ArrowLeft size={16} />
          <span>Back to All Guides</span>
        </Link>

        {/* Article Meta Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <span style={{
              background: '#e6edf2',
              color: '#023052',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '12px',
              fontWeight: 700
            }}>
              {post.categoryLabel}
            </span>
            <span style={{ fontSize: '13px', color: '#5E6368' }}>{post.date}</span>
            <span style={{ fontSize: '13px', color: '#5E6368' }}>&bull;</span>
            <span style={{ fontSize: '13px', color: '#5E6368', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={14} />
              <span>{post.readTime}</span>
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(28px, 4.5vw, 42px)',
            fontWeight: 700,
            color: '#1F2329',
            lineHeight: 1.25,
            letterSpacing: '-0.5px',
            marginBottom: '18px'
          }}>
            {post.title}
          </h1>

          <p style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#5E6368',
            margin: 0
          }}>
            {post.summary}
          </p>
        </div>

        {/* Key Takeaways Box */}
        {post.keyTakeaways && (
          <div style={{
            background: '#f9fafb',
            border: '0.8px solid #DBDDE1',
            borderRadius: '16px',
            padding: '24px 28px',
            marginBottom: '36px',
            boxShadow: 'rgba(32, 33, 36, 0.04) 0px 1px 4px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Sparkles size={18} color="#023052" />
              <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1F2329', margin: 0 }}>
                Key Takeaways in this Guide
              </h2>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#1F2329', lineHeight: 1.6 }}>
                  <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Table of Contents Box */}
        {post.sections && post.sections.length > 0 && (
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '14px',
            padding: '20px 24px',
            marginBottom: '42px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <ListOrdered size={16} color="#023052" />
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#1F2329', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Table of Contents & Quick Navigation
              </span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {post.sections.map((sec, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    style={{
                      fontSize: '14px',
                      color: '#023052',
                      textDecoration: 'none',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    <span>&bull;</span>
                    <span>{sec.heading}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deep Sections Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '46px', marginBottom: '56px' }}>
          {post.sections && post.sections.map((sec, idx) => (
            <section key={idx} id={`section-${idx}`} style={{ scrollMarginTop: '100px' }}>
              <h2 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#1F2329',
                lineHeight: 1.35,
                marginBottom: '14px'
              }}>
                {sec.heading}
              </h2>

              {/* Paragraphs */}
              {sec.paragraphs && sec.paragraphs.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: sec.bullets ? '18px' : '0' }}>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} style={{ fontSize: '16px', lineHeight: 1.8, color: '#5E6368', margin: 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* Styled Bullet Points */}
              {sec.bullets && sec.bullets.length > 0 && (
                <div style={{
                  background: '#f9fafb',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '14px',
                  padding: '20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginTop: '16px'
                }}>
                  {sec.bullets.map((b, bIdx) => {
                    // Check if bullet has title: description
                    const splitIdx = b.indexOf(':');
                    const hasTitle = splitIdx > -1 && splitIdx < 50;
                    const bTitle = hasTitle ? b.slice(0, splitIdx + 1) : '';
                    const bDesc = hasTitle ? b.slice(splitIdx + 1) : b;

                    return (
                      <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: '#e6edf2',
                          color: '#023052',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '3px'
                        }}>
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <div style={{ fontSize: '14px', lineHeight: 1.65, color: '#5E6368' }}>
                          {hasTitle ? (
                            <>
                              <strong style={{ color: '#1F2329' }}>{bTitle}</strong>
                              <span>{bDesc}</span>
                            </>
                          ) : (
                            <span>{b}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Callout Box */}
              {sec.callout && (
                <div style={{
                  marginTop: '20px',
                  background: sec.callout.type === 'warning' ? '#fef2f2' : '#e6edf2',
                  border: `0.8px solid ${sec.callout.type === 'warning' ? '#fecaca' : '#bfdbfe'}`,
                  borderRadius: '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <ShieldAlert size={20} color={sec.callout.type === 'warning' ? '#dc2626' : '#023052'} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: sec.callout.type === 'warning' ? '#991b1b' : '#1e40af', margin: '0 0 4px 0' }}>
                      {sec.callout.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: sec.callout.type === 'warning' ? '#7f1d1d' : '#1e3a8a', lineHeight: 1.6, margin: 0 }}>
                      {sec.callout.text}
                    </p>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* FAQs Section */}
        {post.faqs && post.faqs.length > 0 && (
          <div style={{
            background: '#ffffff',
            border: '0.8px solid #DBDDE1',
            borderRadius: '16px',
            padding: '32px 28px',
            marginBottom: '50px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <HelpCircle size={20} color="#023052" />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1F2329', margin: 0 }}>
                Frequently Asked Questions About This Topic
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {post.faqs.map((faq, fIdx) => (
                <div key={fIdx} style={{
                  background: '#f9fafb',
                  borderRadius: '10px',
                  border: '0.8px solid #DBDDE1',
                  padding: '16px 18px'
                }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1F2329', margin: '0 0 8px 0' }}>
                    {faq.question}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#5E6368', lineHeight: 1.6, margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* In-Content Conversion Box */}
        <div style={{
          background: '#e6edf2',
          border: '0.8px solid #DBDDE1',
          borderRadius: '16px',
          padding: '36px 30px',
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#1F2329', marginBottom: '12px' }}>
            Have Fake or Unfair Reviews on Your Google Profile?
          </h3>
          <p style={{
            fontSize: '15px',
            color: '#5E6368',
            maxWidth: '620px',
            margin: '0 auto 26px auto',
            lineHeight: 1.65
          }}>
            Don’t let competitor attacks or policy-violating reviews damage your revenue. Request a free, 100% confidential review audit. <strong>If we don’t remove the reviews, you pay $0.</strong>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <Link
              to="/getstarted"
              style={{
                background: '#023052',
                color: '#ffffff',
                padding: '14px 30px',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(11, 100, 244, 0.25)'
              }}
            >
              <span>Get Free Review Audit</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/naveed.dmca"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#ffffff',
                padding: '14px 26px',
                borderRadius: '24px',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
              }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Related Guides */}
        {relatedPosts.length > 0 && (
          <div style={{ borderTop: '0.8px solid #DBDDE1', paddingTop: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1F2329', marginBottom: '20px' }}>
              Related Guides & Resources
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
              {relatedPosts.map(rel => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.slug}`}
                  style={{
                    background: '#f9fafb',
                    border: '0.8px solid #DBDDE1',
                    borderRadius: '12px',
                    padding: '20px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#023052';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#DBDDE1';
                    e.currentTarget.style.background = '#f9fafb';
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#023052', textTransform: 'uppercase' }}>
                      {rel.categoryLabel}
                    </span>
                    <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#1F2329', margin: '8px 0', lineHeight: 1.4 }}>
                      {rel.title}
                    </h4>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#023052', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '12px' }}>
                    <span>Read Guide</span>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* ========================================================
          FINAL CTA SECTION (Matches site #e6edf2)
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
                boxShadow: '0 4px 14px rgba(11, 100, 244, 0.25)'
              }}
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
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)'
              }}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

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

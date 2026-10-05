import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Check,
  Sparkles
} from 'lucide-react';
import SectionBadge from '../components/SectionBadge';
import { blogPosts, blogCategories } from '../data/blogPosts';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post
  const featuredPost = useMemo(() => {
    return blogPosts.find(p => p.featured) || blogPosts[0];
  }, []);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* ========================================================
          1. HERO HEADER
          ======================================================== */}
      <section style={{
        padding: '70px 24px 45px 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <SectionBadge>
          ORM KNOWLEDGE BASE &bull; EXPERT GUIDES
        </SectionBadge>

        <h1 style={{
          fontSize: 'clamp(34px, 5vw, 50px)',
          fontWeight: 700,
          lineHeight: 1.18,
          color: '#1F2329',
          letterSpacing: '-1px',
          maxWidth: '920px',
          margin: '0 auto 20px auto'
        }}>
          Google Review Removal Guides & Resources
        </h1>

        <p style={{
          fontSize: '17px',
          lineHeight: 1.75,
          color: '#5E6368',
          maxWidth: '760px',
          margin: '0 auto 36px auto'
        }}>
          Comprehensive, policy-backed guides explaining how to remove fake Google reviews, fight competitor smear campaigns, and protect your business reputation legally.
        </p>

        {/* Search Input */}
        <div style={{
          maxWidth: '560px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <Search size={18} color="#5E6368" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search guides (e.g. competitor, cost, medical, policy)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px 14px 48px',
              borderRadius: '28px',
              border: '0.8px solid #DBDDE1',
              fontSize: '15px',
              outline: 'none',
              background: '#f9fafb',
              color: '#1F2329',
              boxShadow: 'rgba(32, 33, 36, 0.05) 0px 2px 6px'
            }}
          />
        </div>
      </section>

      {/* ========================================================
          2. CATEGORY FILTER TABS
          ======================================================== */}
      <section style={{
        padding: '10px 24px 60px 24px',
        maxWidth: '1240px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '46px'
        }}>
          {blogCategories.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: isActive ? '#023052' : '#ffffff',
                  color: isActive ? '#ffffff' : '#5E6368',
                  border: isActive ? '0.8px solid #023052' : '0.8px solid #DBDDE1',
                  borderRadius: '24px',
                  padding: '9px 20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#023052';
                    e.currentTarget.style.color = '#023052';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#DBDDE1';
                    e.currentTarget.style.color = '#5E6368';
                  }
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ========================================================
            3. FEATURED GUIDE (Only on "all" with no active search)
            ======================================================== */}
        {selectedCategory === 'all' && searchQuery.trim() === '' && featuredPost && (
          <div style={{
            background: '#f9fafb',
            border: '0.8px solid #DBDDE1',
            borderRadius: '20px',
            padding: '36px 32px',
            marginBottom: '46px',
            boxShadow: 'rgba(32, 33, 36, 0.05) 0px 2px 10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
              <span style={{
                background: '#023052',
                color: '#ffffff',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Featured In-Depth Guide
              </span>
              <span style={{ fontSize: '13px', color: '#5E6368' }}>{featuredPost.date}</span>
              <span style={{ fontSize: '13px', color: '#5E6368' }}>&bull;</span>
              <span style={{ fontSize: '13px', color: '#5E6368', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} />
                <span>{featuredPost.readTime}</span>
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(24px, 3.5vw, 32px)',
              fontWeight: 700,
              color: '#1F2329',
              lineHeight: 1.25,
              marginBottom: '14px'
            }}>
              <Link to={`/blog/${featuredPost.slug}`} style={{ color: '#1F2329', textDecoration: 'none' }}>
                {featuredPost.title}
              </Link>
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#5E6368',
              lineHeight: 1.65,
              maxWidth: '820px',
              marginBottom: '24px'
            }}>
              {featuredPost.summary}
            </p>

            <Link
              to={`/blog/${featuredPost.slug}`}
              style={{
                background: '#023052',
                color: '#ffffff',
                padding: '12px 26px',
                borderRadius: '24px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 12px rgba(11, 100, 244, 0.2)'
              }}
            >
              <span>Read Complete 2026 Guide</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

        {/* ========================================================
            4. ARTICLES GRID
            ======================================================== */}
        {filteredPosts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#5E6368' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#1F2329' }}>No guides found</p>
            <p style={{ fontSize: '14px' }}>Try clearing your search query or choosing another category.</p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {filteredPosts.map(post => (
              <article
                key={post.id}
                style={{
                  background: '#ffffff',
                  border: '0.8px solid #DBDDE1',
                  borderRadius: '16px',
                  padding: '30px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'rgba(32, 33, 36, 0.05) 0px 2px 8px'
                }}
              >
                <div>
                  {/* Meta Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '14px' }}>
                    <span style={{
                      background: '#e6edf2',
                      color: '#023052',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: 700
                    }}>
                      {post.categoryLabel}
                    </span>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '12px',
                      color: '#5E6368'
                    }}>
                      <Clock size={13} />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: '#1F2329',
                    lineHeight: 1.35,
                    marginBottom: '12px'
                  }}>
                    <Link
                      to={`/blog/${post.slug}`}
                      style={{ color: '#1F2329', textDecoration: 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#023052'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#1F2329'}
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Summary */}
                  <p style={{
                    fontSize: '14px',
                    color: '#5E6368',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                  }}>
                    {post.summary}
                  </p>
                </div>

                {/* Read Button */}
                <Link
                  to={`/blog/${post.slug}`}
                  style={{
                    background: '#f9fafb',
                    border: '0.8px solid #DBDDE1',
                    borderRadius: '20px',
                    padding: '10px 18px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#023052',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    width: '100%',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#023052';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#023052';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f9fafb';
                    e.currentTarget.style.color = '#023052';
                    e.currentTarget.style.borderColor = '#DBDDE1';
                  }}
                >
                  <span>Read In-Depth Guide</span>
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================
          5. FINAL CTA SECTION (Matches site #e6edf2)
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

          {/* CTA Buttons */}
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
                boxShadow: '0 4px 14px rgba(11, 100, 244, 0.25)',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#03406D'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#023052'}
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
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#20ba5a'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Guarantee Checklist */}
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

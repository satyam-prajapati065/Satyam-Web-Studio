import React, { useState } from 'react';
import {
  Globe, Sparkles, CheckCircle2, ArrowRight, Star, Mail,
  Calendar, Phone, ShieldCheck, Heart, Award, Menu, X
} from 'lucide-react';

const VersatileDemo = ({ category = 'Web Platform', onInquire }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleVersatileSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    const msg = `Hello Satyam! I am interested in building a ${category} website similar to your template layout. Please share timeline and pricing.`;
    window.open(`https://wa.me/919554079669?text=${encodeURIComponent(msg)}`, '_blank');
  };
  const [activeTab, setActiveTab] = useState(0);

  // Industry-specific contextual content
  const isFitness = category.toLowerCase().includes('fitness') || category.toLowerCase().includes('gym');
  const isEducation = category.toLowerCase().includes('education') || category.toLowerCase().includes('school');
  const isHotel = category.toLowerCase().includes('hotel') || category.toLowerCase().includes('resort');
  const isLegal = category.toLowerCase().includes('law') || category.toLowerCase().includes('legal');
  const isWedding = category.toLowerCase().includes('wedding');

  const headline = isFitness
    ? 'Transform Your Body & Elevate Your Mind'
    : isEducation
    ? 'Empowering Minds Through Interactive Digital Learning'
    : isHotel
    ? 'Luxury Escapes Where Natural Serenity Meets Elegance'
    : isLegal
    ? 'Fierce Advocacy, Relentless Integrity & Proven Results'
    : isWedding
    ? 'A Celebration of Love, Laughter & Happily Ever After'
    : `Next-Generation ${category} Digital Experience`;

  const subheadline = isFitness
    ? 'World-class strength equipment, bespoke personal training, and dynamic group classes designed for peak human performance.'
    : isEducation
    ? 'Master cutting-edge industry skills with accredited certifications, self-paced curriculum, and direct mentor guidance.'
    : isHotel
    ? 'Bespoke coastal suites, private infinity pools, and Michelin-inspired culinary experiences tailored to your every wish.'
    : isLegal
    ? 'Dedicated legal counsel protecting your enterprise assets, intellectual property, and strategic cross-border transactions.'
    : isWedding
    ? 'Join us as we exchange vows. View our story, travel lodging guide, and celebrate our special day together.'
    : `Designed and engineered specifically for leading organizations in the ${category.toLowerCase()} sector seeking maximum online impact.`;

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FFFFFF', color: '#172033' }}>
      {/* Universal Nav */}
      <header className="demo-navbar-header" style={{
        borderBottom: '1px solid #E2E8F0',
        background: '#FFFFFF'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#3B82F6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={18} />
          </div>
          <span>{category.toUpperCase()}<span style={{ color: '#3B82F6' }}>.IO</span></span>
        </div>
        <div className="demo-desktop-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>
          <a href="#about" style={{ color: '#64748B', textDecoration: 'none' }}>Overview</a>
          <a href="#features" style={{ color: '#64748B', textDecoration: 'none' }}>Capabilities</a>
          <a href="#inquiry" style={{ color: '#64748B', textDecoration: 'none' }}>Get in Touch</a>
        </div>
        <div className="demo-desktop-action">
          <button
            onClick={onInquire}
            style={{ background: '#3B82F6', color: '#FFF', padding: '0.55rem 1.35rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.88rem', border: 'none', cursor: 'pointer' }}
          >
            Request Website
          </button>
        </div>
        <button
          className="demo-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`demo-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>Overview</a>
        <a href="#features" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
        <a href="#inquiry" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
        <button
          onClick={() => { setMobileMenuOpen(false); onInquire && onInquire(); }}
          style={{
            background: '#3B82F6',
            color: '#FFF',
            padding: '0.75rem',
            borderRadius: '6px',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Request Website
        </button>
      </div>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 50%, #F5F3FF 100%)',
        padding: '5rem 2rem 4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.9rem',
            background: '#FFFFFF',
            border: '1px solid #DBEAFE',
            color: '#3B82F6',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '1.25rem'
          }}>
            ⭐ Certified High-Performance Template
          </span>

          <h1 style={{ fontSize: '2.85rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.18, marginBottom: '1.25rem' }}>
            {headline}
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            {subheadline}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onInquire}
              style={{
                background: '#3B82F6',
                color: '#FFFFFF',
                padding: '0.85rem 2rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)'
              }}
            >
              <span>Get Similar Website</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="#inquiry"
              style={{
                background: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid #CBD5E1',
                padding: '0.85rem 1.8rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem'
              }}
            >
              Interactive Preview Form
            </a>
          </div>
        </div>
      </section>

      {/* Feature Pillar Highlights */}
      <section id="features" style={{ padding: '4rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A' }}>Industry-Specific Features</h2>
          <p style={{ color: '#64748B', marginTop: '0.4rem' }}>Every layout is crafted with conversion-driven architecture.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: 'Mobile-First Touch Architecture',
              desc: 'Seamless fluid layouts specifically tuned for mobile smartphone screens, tablets, and wide 4K displays.'
            },
            {
              title: 'Instant Lead & Inquiry Capture',
              desc: 'Forms validate user inputs instantly and pipe directly to your backend database and WhatsApp chat.'
            },
            {
              title: 'Sub-Second Page Load Optimization',
              desc: 'Zero bloated plugins. Native React components, optimized image pipelines, and minimal bundle overhead.'
            }
          ].map((item, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <CheckCircle2 size={24} color="#10B981" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Contact / Request Component */}
      <section id="inquiry" style={{ padding: '4rem 2rem 5rem 2rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '0.4rem' }}>
            Request This {category} Template
          </h3>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            Satyam Prajapati will customize this complete design for your brand within 3 to 7 business days.
          </p>

          {inquirySent ? (
            <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1.5rem', borderRadius: '10px', textAlign: 'center', color: '#065F46' }}>
              <CheckCircle2 size={36} color="#10B981" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Inquiry Submitted Successfully!</div>
              <p style={{ fontSize: '0.88rem', marginTop: '0.3rem' }}>Satyam will reach out to you via WhatsApp and Email.</p>
            </div>
          ) : (
            <form onSubmit={handleVersatileSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Name</label>
                <input type="text" required placeholder="Full Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.25rem' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Email Address</label>
                <input type="email" required placeholder="name@company.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.25rem' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>WhatsApp Number</label>
                <input type="tel" required placeholder="+1 or +91 Phone" style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.25rem' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Project Scope / Requirements</label>
                <textarea rows="3" defaultValue={`I am looking for a professional ${category} website similar to this template layout.`} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.25rem' }} />
              </div>
              <button
                type="submit"
                className="btn btn-whatsapp btn-block"
                style={{
                  padding: '0.85rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem'
                }}
              >
                Send Inquiry on WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default VersatileDemo;

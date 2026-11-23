import React, { useState } from 'react';
import {
  Sparkles, CheckCircle2, ArrowRight, Star, Mail,
  Calendar, Phone, ShieldCheck, Heart, Award, Menu, X,
  Clock, MapPin, ChevronDown, Check, Zap, Layers, Users, ExternalLink
} from 'lucide-react';

const VersatileDemo = ({ category = 'Web Platform', onInquire }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const handleVersatileSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    const msg = `Hello Satyam! I am interested in building a ${category} website similar to your template layout. Please share timeline and pricing.`;
    window.open(`https://wa.me/919554079669?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Industry-specific contextual content
  const catLower = (category || '').toLowerCase();
  const isFitness = catLower.includes('fitness') || catLower.includes('gym');
  const isEducation = catLower.includes('education') || catLower.includes('school') || catLower.includes('college') || catLower.includes('lms');
  const isHotel = catLower.includes('hotel') || catLower.includes('resort') || catLower.includes('travel') || catLower.includes('tourism');
  const isLegal = catLower.includes('law') || catLower.includes('legal');
  const isWedding = catLower.includes('wedding') || catLower.includes('event');
  const isMedical = catLower.includes('dental') || catLower.includes('health') || catLower.includes('clinic');
  const isAuto = catLower.includes('auto') || catLower.includes('car');
  const isFood = catLower.includes('food') || catLower.includes('cafe') || catLower.includes('restaurant');
  const isTech = catLower.includes('saas') || catLower.includes('app') || catLower.includes('portal') || catLower.includes('dashboard');

  const headline = isFitness
    ? 'Transform Your Body & Elevate Your Mind'
    : isEducation
    ? 'Empowering Minds Through Modern Digital Learning'
    : isHotel
    ? 'Luxury Escapes Where Natural Serenity Meets Elegance'
    : isLegal
    ? 'Fierce Advocacy, Relentless Integrity & Proven Results'
    : isWedding
    ? 'Unforgettable Celebrations & Milestone Memories'
    : isMedical
    ? 'Modern Patient-First Care & Clinical Excellence'
    : isAuto
    ? 'Precision Engineering & Luxury Automotive Experience'
    : isFood
    ? 'Artisanal Culinary Craft & Memorable Dining'
    : isTech
    ? `Next-Generation ${category} Cloud Architecture`
    : `Elevate Your ${category} Brand Online`;

  const subheadline = isFitness
    ? 'World-class strength equipment, bespoke personal training, and dynamic group classes designed for peak human athletic performance.'
    : isEducation
    ? 'Master cutting-edge industry skills with accredited certifications, self-paced curriculum, and direct mentor guidance.'
    : isHotel
    ? 'Bespoke coastal suites, private infinity pools, and Michelin-inspired culinary experiences tailored to your every wish.'
    : isLegal
    ? 'Dedicated legal counsel protecting your enterprise assets, intellectual property, and strategic cross-border transactions.'
    : isWedding
    ? 'Join us as we celebrate love and milestones. View event schedules, hotel accommodations, and RSVP seamlessly online.'
    : isMedical
    ? 'Connecting families with world-class specialists, state-of-the-art diagnostic labs, and transparent appointment booking.'
    : isAuto
    ? 'Discover certified luxury vehicles, precision tuning packages, and bespoke maintenance delivered by master technicians.'
    : isFood
    ? 'Crafted from seasonal organic ingredients, centuries-old recipes, and culinary innovation designed to delight your senses.'
    : `Designed and engineered specifically for leading organizations in the ${category.toLowerCase()} sector seeking maximum conversion and online impact.`;

  // Dynamic industry showcase cards
  const showcaseItems = isFitness ? [
    { title: 'Functional Strength & HIIT', tag: 'High Intensity', desc: 'Olympic lifting platforms, kettlebell conditioning, and turf sprint tracks.', rating: 4.9 },
    { title: 'Mindful Vinyasa & Hot Yoga', tag: 'Mind & Body', desc: 'Heated hardwood studios, acoustic ambient soundscapes, and certified yogis.', rating: 5.0 },
    { title: '1-on-1 Elite Coaching', tag: 'Personalized', desc: 'Body composition scanning, customized nutrition macros, and weekly accountability.', rating: 4.8 },
    { title: 'Recovery & Cryotherapy Suite', tag: 'Wellness', desc: 'Infrared saunas, cold plunge baths, and compression therapy boots.', rating: 4.9 }
  ] : isEducation ? [
    { title: 'Interactive Video Masterclasses', tag: 'Curriculum', desc: 'Bite-sized modules taught by industry veterans with downloadable code repositories.', rating: 4.9 },
    { title: 'Accredited Skill Certifications', tag: 'Credentials', desc: 'Globally recognized certificates verified on LinkedIn and enterprise resumes.', rating: 5.0 },
    { title: 'Live 1-on-1 Mentorship', tag: 'Support', desc: 'Weekly code reviews, portfolio teardowns, and interview mock sessions.', rating: 4.8 },
    { title: 'Active Alumni Network', tag: 'Community', desc: 'Over 14,000+ graduates working at top-tier global technology companies.', rating: 4.9 }
  ] : isHotel ? [
    { title: 'Oceanfront Panoramic Suites', tag: 'Accommodations', desc: 'Private balconies, Italian marble bathrooms, and floor-to-ceiling horizon views.', rating: 5.0 },
    { title: 'Michelin-Inspired Dining', tag: 'Culinary', desc: 'Locally caught seafood, sommelier wine pairings, and beachfront candlelight service.', rating: 4.9 },
    { title: 'Holistic Ayurveda Wellness Spa', tag: 'Rejuvenation', desc: 'Botanical essential oils, therapeutic massages, and open-air hydrotherapy pools.', rating: 4.8 },
    { title: 'Private Yacht Island Excursions', tag: 'Adventure', desc: 'Chartered catamarans, guided coral reef scuba diving, and sunset champagne cruises.', rating: 4.9 }
  ] : [
    { title: `${category} Core Portal`, tag: 'High Impact', desc: `Purpose-built architecture showcasing premium ${category.toLowerCase()} products and services.`, rating: 4.9 },
    { title: 'Automated Lead & Booking Engine', tag: 'Conversion', desc: 'Smart intake questionnaires that capture qualified inquiries directly into your WhatsApp.', rating: 5.0 },
    { title: 'Interactive Client Reviews', tag: 'Social Proof', desc: 'Verified customer feedback, star ratings, and milestone success stories.', rating: 4.8 },
    { title: 'Instant Mobile Touch Experience', tag: 'Performance', desc: 'Ultra-fast sub-second loading speeds on mobile, tablet, and 4K desktop screens.', rating: 4.9 }
  ];

  // Dynamic capabilities tabs
  const tabContent = [
    {
      title: 'Conversion UI & Architecture',
      desc: `Every section is engineered to guide ${category.toLowerCase()} visitors effortlessly towards booking an appointment, requesting a quote, or completing an order.`,
      points: [
        'Fluid mobile, tablet, and desktop responsive layout',
        'High-contrast visual hierarchy tuned for decision-making',
        'Direct WhatsApp and email lead dispatch',
        'Zero bloated plugins — 100% lightweight React.js'
      ]
    },
    {
      title: 'SEO & Performance Dominance',
      desc: 'Rank on page #1 of Google with technical On-Page SEO, OpenGraph social sharing meta tags, and 95+ Core Web Vitals.',
      points: [
        'Schema.org structured data for Google Rich Snippets',
        'Automatic XML sitemap and robots.txt indexing ready',
        'Optimized WebP image delivery and instant caching',
        'Accessible semantic HTML5 and clean typography'
      ]
    },
    {
      title: 'Security, Speed & Ownership',
      desc: 'You own 100% of your code, database, and domain with zero recurring platform commission or vendor lock-in fees.',
      points: [
        'Free automated SSL encryption via Cloudflare/Vercel',
        'Modern MERN (Mongo, Express, React, Node) stack capability',
        'Encrypted contact submissions with anti-spam honeypot',
        'Complete source code delivery upon project handoff'
      ]
    }
  ];

  const clientReviews = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Clinic Director',
      rating: 5,
      comment: 'Satyam delivered our portal in just 5 days. Patient inquiries increased by 40% in our first month. Highly recommended!'
    },
    {
      name: 'Elena Rostova',
      role: 'Brand Founder',
      rating: 5,
      comment: 'The speed and elegance of this website is unbelievable. It looks like an agency charged us $15,000 for it!'
    },
    {
      name: 'Vikram Malhotra',
      role: 'Managing Partner',
      rating: 5,
      comment: 'Clean code, mobile-friendly layout, and zero headache. The direct WhatsApp integration brings qualified clients daily.'
    }
  ];

  const versatileFaqs = [
    {
      q: `How long does it take to customize this ${category} website for my brand?`,
      a: 'Average turnaround is 3 to 7 business days. We update the logo, color palette, images, copy, and WhatsApp routing specifically for your business.'
    },
    {
      q: 'Do I get 100% ownership of the website code?',
      a: 'Yes, absolutely. You receive the complete clean React.js codebase with zero monthly platform lock-ins or recurring licensing fees.'
    },
    {
      q: 'Can you add custom payment gateways, booking calendars, or more pages?',
      a: 'Yes! We seamlessly integrate Razorpay, Stripe, WhatsApp ordering, Google Analytics, and custom database backends as needed.'
    },
    {
      q: 'How do we get started?',
      a: 'Click "Request Website" or message on WhatsApp (+91 9554079669). We finalize your requirements, share a live preview, and launch!'
    }
  ];

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FFFFFF', color: '#172033', lineHeight: 1.6 }}>
      {/* 1. Top Bar */}
      <div className="demo-top-bar" style={{
        background: '#0F172A',
        color: '#E2E8F0',
        padding: '0.45rem 2rem',
        fontSize: '0.8rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span><Sparkles size={13} style={{ display: 'inline', verticalAlign: 'middle', color: '#38BDF8' }} /> Certified Web Studio Template</span>
          <span><Clock size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> Turnaround: 3 – 7 Days</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span><Phone size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> Direct WhatsApp: +91 9554079669</span>
        </div>
      </div>

      {/* 2. Universal Nav */}
      <header className="demo-navbar-header" style={{
        borderBottom: '1px solid #E2E8F0',
        background: '#FFFFFF',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.25rem', fontWeight: 800, color: '#0F172A' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#3B82F6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={18} />
          </div>
          <span>{category.toUpperCase()}<span style={{ color: '#3B82F6' }}>.STUDIO</span></span>
        </div>

        <div className="demo-desktop-links" style={{ display: 'flex', gap: '1.8rem', fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>
          <a href="#about" style={{ color: '#64748B', textDecoration: 'none' }}>Overview</a>
          <a href="#showcase" style={{ color: '#64748B', textDecoration: 'none' }}>Showcase</a>
          <a href="#capabilities" style={{ color: '#64748B', textDecoration: 'none' }}>Capabilities</a>
          <a href="#process" style={{ color: '#64748B', textDecoration: 'none' }}>Process</a>
          <a href="#reviews" style={{ color: '#64748B', textDecoration: 'none' }}>Reviews</a>
          <a href="#pricing" style={{ color: '#64748B', textDecoration: 'none' }}>Investment</a>
          <a href="#inquiry" style={{ color: '#64748B', textDecoration: 'none' }}>Contact</a>
        </div>

        <div className="demo-desktop-action">
          <button
            onClick={onInquire}
            style={{
              background: '#3B82F6',
              color: '#FFF',
              padding: '0.6rem 1.4rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.88rem',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span>Request Website</span>
            <ArrowRight size={14} />
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
        <a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Showcase</a>
        <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Capabilities</a>
        <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
        <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
        <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Investment</a>
        <a href="#inquiry" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <button
          onClick={() => { setMobileMenuOpen(false); onInquire && onInquire(); }}
          style={{
            background: '#3B82F6',
            color: '#FFF',
            padding: '0.75rem',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
            marginTop: '0.5rem'
          }}
        >
          Request Website Like This
        </button>
      </div>

      {/* 3. Hero Section */}
      <section id="about" style={{
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        padding: '5rem 2rem 4rem 2rem',
        textAlign: 'center',
        borderBottom: '1px solid #F1F5F9'
      }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.95rem',
            background: '#EFF6FF',
            border: '1px solid #DBEAFE',
            color: '#2563EB',
            borderRadius: '999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={14} /> High-Impact {category} Showcase Template
          </span>

          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.15, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            {headline}
          </h1>

          <p style={{ fontSize: '1.18rem', color: '#64748B', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '760px', margin: '0 auto 2.5rem auto' }}>
            {subheadline}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button
              onClick={onInquire}
              style={{
                background: '#3B82F6',
                color: '#FFFFFF',
                padding: '0.85rem 2.2rem',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none',
                boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)'
              }}
            >
              <span>Get Similar Website</span>
              <ArrowRight size={17} />
            </button>
            <a
              href="#showcase"
              style={{
                background: '#FFFFFF',
                color: '#0F172A',
                border: '1px solid #CBD5E1',
                padding: '0.85rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              Explore Showcase
            </a>
          </div>

          {/* Social Proof Trust Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.75rem', flexWrap: 'wrap', color: '#64748B', fontSize: '0.85rem', fontWeight: 600 }}>
            <span>⭐ 4.9/5 Rating from 120+ Brands</span>
            <span>•</span>
            <span>📱 100% Mobile & Tablet Optimized</span>
            <span>•</span>
            <span>⚡ Sub-Second Load Speeds</span>
          </div>
        </div>
      </section>

      {/* 4. Metrics & Performance Strip */}
      <section style={{ background: '#0F172A', color: '#FFFFFF', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#38BDF8' }}>99.8%</div>
            <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '0.2rem' }}>Lighthouse Speed Score</div>
          </div>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#38BDF8' }}>3 – 7 Days</div>
            <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '0.2rem' }}>Rapid Turnaround Delivery</div>
          </div>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#38BDF8' }}>100%</div>
            <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '0.2rem' }}>Code Ownership (No Lock-In)</div>
          </div>
          <div>
            <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#38BDF8' }}>24/7</div>
            <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '0.2rem' }}>Direct WhatsApp Support</div>
          </div>
        </div>
      </section>

      {/* 5. Industry Showcase Grid */}
      <section id="showcase" style={{ padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Featured Highlights
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.35rem' }}>
            {category} Capabilities & Highlights
          </h2>
          <p style={{ color: '#64748B', maxWidth: '600px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
            Tailored component architecture ready to showcase your brand, products, or service offerings.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.75rem' }}>
          {showcaseItems.map((item, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '14px',
              padding: '1.75rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div>
                <span style={{
                  background: '#EFF6FF',
                  color: '#2563EB',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  {item.tag}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginTop: '1rem', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #F1F5F9' }}>
                <span style={{ color: '#F59E0B', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Star size={14} fill="#F59E0B" /> {item.rating} / 5.0
                </span>
                <button
                  onClick={onInquire}
                  style={{ background: 'transparent', border: 'none', color: '#3B82F6', fontWeight: 700, fontSize: '0.82rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  <span>Select</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Capabilities Matrix (Tabs) */}
      <section id="capabilities" style={{ background: '#F8FAFC', padding: '5rem 2rem', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Built For High Conversion
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.35rem' }}>
              Full-Stack Technical Architecture
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              Discover what makes this layout outperform standard WordPress templates.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
              {tabContent.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    border: activeTab === idx ? '1px solid #3B82F6' : '1px solid #CBD5E1',
                    background: activeTab === idx ? '#3B82F6' : '#FFFFFF',
                    color: activeTab === idx ? '#FFFFFF' : '#64748B',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
          }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.6rem' }}>
              {tabContent[activeTab].title}
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              {tabContent[activeTab].desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {tabContent[activeTab].points.map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', background: '#F8FAFC', padding: '0.85rem 1rem', borderRadius: '8px' }}>
                  <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 500 }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Launch Roadmap (How It Works) */}
      <section id="process" style={{ padding: '5rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Simple 3-Step Process
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.35rem' }}>
            How We Customize & Launch Your Website
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { step: '01', title: 'Scope & Brand Alignment', desc: 'We align on your logo, color palette, required sections, and WhatsApp lead routing.' },
            { step: '02', title: 'React.js Development & Review', desc: 'Your website is crafted with modern React and hosted on a private test link for your review.' },
            { step: '03', title: 'Domain Connect & Live Go-Live', desc: 'We link your custom domain with free SSL, setup Google SEO tags, and launch!' }
          ].map((s, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '2rem', position: 'relative' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#DBEAFE', lineHeight: 1, marginBottom: '0.75rem' }}>{s.step}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Verified Reviews */}
      <section id="reviews" style={{ background: '#F8FAFC', padding: '5rem 2rem', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Proven Client Satisfaction
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.35rem' }}>
              What Clients Say About Working With Us
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {clientReviews.map((rev, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', color: '#F59E0B', marginBottom: '0.85rem' }}>
                    {[...Array(rev.rating)].map((_, idx) => (
                      <Star key={idx} size={15} fill="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                    "{rev.comment}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.85rem' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{rev.name}</div>
                  <div style={{ color: '#64748B', fontSize: '0.8rem' }}>{rev.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing & Investment Guide */}
      <section id="pricing" style={{ padding: '5rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Transparent Pricing
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.35rem' }}>
            Straightforward Investment Tiers
          </h2>
          <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.4rem' }}>
            No recurring monthly agency fees. 100% one-time transparent investment.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {[
            { tier: 'Landing Page', price: 'Starting ₹5,999', usd: '$150 – $300 USD', desc: '1 high-converting single page, fast lead capture, ads ready.' },
            { tier: 'Business Website', price: 'Starting ₹14,999', usd: '$300 – $700 USD', desc: 'Up to 5 pages, templates showcase, inquiry database.' },
            { tier: 'E-commerce Store', price: 'Starting ₹29,999', usd: '$700 – $1,500 USD', desc: 'Product catalog, shopping cart, payment gateway.' },
            { tier: 'Custom Web App', price: 'Starting ₹49,999', usd: '$1,500+ USD', desc: 'Full-stack MERN portal, admin dashboard, auth & APIs.' }
          ].map((pkg, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{pkg.tier}</div>
              <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#2563EB', marginBottom: '0.2rem' }}>{pkg.price}</div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '1rem' }}>{pkg.usd}</div>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5, marginBottom: '1.25rem' }}>{pkg.desc}</p>
              <button
                onClick={onInquire}
                style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Inquire on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ) */}
      <section style={{ background: '#F8FAFC', padding: '5rem 2rem', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '2.5rem' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {versatileFaqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #E2E8F0',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>
                    {faq.q}
                  </h3>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: '0.85rem', color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Interactive Contact / Request Component */}
      <section id="inquiry" style={{ padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto', background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '16px', padding: '2.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>
              Quick Launch Form
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem', marginBottom: '0.3rem' }}>
              Request Your {category} Website
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
              Satyam Prajapati will build and customize this exact layout for your business.
            </p>
          </div>

          {inquirySent ? (
            <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '1.75rem', borderRadius: '10px', textAlign: 'center', color: '#065F46' }}>
              <CheckCircle2 size={38} color="#10B981" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 800, fontSize: '1.15rem' }}>Inquiry Submitted Successfully!</div>
              <p style={{ fontSize: '0.88rem', marginTop: '0.35rem' }}>Satyam will connect with you directly on WhatsApp within 15 minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleVersatileSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>Your Name</label>
                <input type="text" required placeholder="Satyam Sharma" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '0.25rem', fontSize: '0.9rem' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>WhatsApp Number</label>
                  <input type="tel" required placeholder="+91 95540 79669" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '0.25rem', fontSize: '0.9rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>Email Address</label>
                  <input type="email" required placeholder="contact@brand.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '0.25rem', fontSize: '0.9rem' }} />
                </div>
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>Project Scope / Requirements</label>
                <textarea rows="3" defaultValue={`I am looking for a professional ${category} website similar to this template layout. Please share timeline and pricing.`} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #CBD5E1', marginTop: '0.25rem', fontSize: '0.9rem' }} />
              </div>
              <button
                type="submit"
                style={{
                  background: '#25D366',
                  color: '#FFFFFF',
                  padding: '0.9rem',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
                }}
              >
                <span>Send Direct Inquiry on WhatsApp</span>
                <ArrowRight size={17} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 12. Full Website Footer */}
      <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '4rem 2rem 2rem 2rem', borderTop: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              {category.toUpperCase()}<span style={{ color: '#38BDF8' }}>.STUDIO</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94A3B8' }}>
              Engineered with clean React.js architecture, instant mobile responsiveness, and high-converting lead capture pipelines by Satyam Prajapati.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>Quick Navigation</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><a href="#about" style={{ color: '#94A3B8', textDecoration: 'none' }}>Overview</a></li>
              <li><a href="#showcase" style={{ color: '#94A3B8', textDecoration: 'none' }}>Showcase</a></li>
              <li><a href="#capabilities" style={{ color: '#94A3B8', textDecoration: 'none' }}>Capabilities</a></li>
              <li><a href="#process" style={{ color: '#94A3B8', textDecoration: 'none' }}>3-Step Process</a></li>
              <li><a href="#pricing" style={{ color: '#94A3B8', textDecoration: 'none' }}>Investment Guide</a></li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>Engineering Specs</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li>• Pure React.js & Vite Build</li>
              <li>• Mobile Touch Hamburger Menu</li>
              <li>• Sub-Second Core Web Vitals</li>
              <li>• Automated WhatsApp Integration</li>
              <li>• 100% Client Code Ownership</li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>Developer Contact</div>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '0.75rem' }}>
              Need this template customized for your brand?
            </p>
            <button
              onClick={onInquire}
              style={{
                background: '#38BDF8',
                color: '#0F172A',
                padding: '0.65rem 1.25rem',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '0.85rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Contact on WhatsApp
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '1.5rem', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© {new Date().getFullYear()} {category} Showcase • Powered by Satyam Web Studio</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Guarantee</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VersatileDemo;

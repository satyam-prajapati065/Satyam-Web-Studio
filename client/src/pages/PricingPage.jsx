import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { Check, ArrowRight, Sparkles, HelpCircle, ChevronDown, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import api from '../services/api';

const DEFAULT_PACKAGES = [
  {
    tier: 'landing-page',
    title: 'Landing Page',
    priceINR: 'Starting ₹5,999',
    priceUSD: 'Starting $150',
    rangeINR: 'Recommended: ₹5,000 – ₹12,000',
    rangeUSD: 'Recommended: $150 – $300 USD',
    description: 'High-converting single-page experience designed for product launches, lead capture, Google/Meta Ads, and local business promotions.',
    popular: false,
    badge: 'Quick Launch',
    turnaround: '2 - 4 Business Days',
    ctaText: 'Start Landing Page',
    features: [
      '1 High-Converting Landing Page',
      'Modern React.js & Vite Performance',
      'Mobile, Tablet & Desktop Responsive',
      'Interactive Contact / Lead Capture Form',
      'WhatsApp Click-to-Chat Integration',
      'On-Page SEO & Social Meta Tags',
      'Domain & Free SSL Deployment Setup'
    ]
  },
  {
    tier: 'business-website',
    title: 'Business Website',
    priceINR: 'Starting ₹14,999',
    priceUSD: 'Starting $300',
    rangeINR: 'Recommended: ₹12,000 – ₹25,000',
    rangeUSD: 'Recommended: $300 – $700 USD',
    description: 'The standard choice for local businesses, corporate consulting, clinics, schools, agencies, and professional service providers.',
    popular: true,
    badge: 'Most Popular',
    turnaround: '5 - 8 Business Days',
    ctaText: 'Build Business Website',
    features: [
      'Up to 5 Custom Designed Pages',
      'Home, About, Services, Projects & Contact',
      'Interactive Website Template Showcase',
      'Backend Inquiry Database Storage (MongoDB)',
      'Admin Dashboard for Managing Inquiries',
      'Speed & Performance Optimized (90+ Google Score)',
      '30 Days Post-Launch Support & Warranty'
    ]
  },
  {
    tier: 'ecommerce-website',
    title: 'E-commerce Website',
    priceINR: 'Starting ₹29,999',
    priceUSD: 'Starting $700',
    rangeINR: 'Recommended: ₹25,000 – ₹60,000',
    rangeUSD: 'Recommended: $700 – $1,500 USD',
    description: 'Full-featured online store for retail brands, fashion boutiques, electronics, grocery, and direct-to-consumer storefronts.',
    popular: false,
    badge: 'Full Storefront',
    turnaround: '10 - 15 Business Days',
    ctaText: 'Launch Online Store',
    features: [
      'Complete Product Catalog & Category System',
      'Interactive Shopping Cart & Slideout Drawer',
      'Product Search, Sorting & Price Filter',
      'Payment Gateway Integration (Razorpay / Stripe)',
      'Secure Admin Dashboard for Products & Orders',
      'Mobile-First Touch Optimized UX',
      '60 Days Dedicated Support'
    ]
  },
  {
    tier: 'custom-web-application',
    title: 'Custom Web Application',
    priceINR: 'Starting ₹49,999',
    priceUSD: 'Starting $1,500',
    rangeINR: 'Recommended: ₹50,000 – ₹1,50,000+',
    rangeUSD: 'Recommended: $1,500+ USD',
    description: 'Bespoke full-stack platforms, SaaS MVPs, doctor/hospital portals, booking engines, internal business dashboards, and custom client software.',
    popular: false,
    badge: 'Tailored Solution',
    turnaround: '14 - 30 Business Days',
    ctaText: 'Discuss Custom App',
    features: [
      'Custom MERN Architecture (Mongo, Express, React, Node)',
      'JWT Authentication & Role-Based Access Control',
      'Interactive Analytics & Data Visualization Dashboards',
      'Complex Business Logic & RESTful API Architecture',
      'Automated Email & WhatsApp Notifications',
      'Full Database Architecture & Indexing',
      '90 Days Maintenance & Technical Support'
    ]
  }
];

const INVESTMENT_GUIDE = [
  {
    type: 'Landing Page',
    starting: 'Starting ₹5,999',
    startingUSD: 'Starting $150',
    rangeINR: '₹5,000 – ₹12,000',
    rangeUSD: '$150 – $300 USD',
    idealFor: 'Product launches, marketing campaigns, lead capture, single events, and PPC ad traffic.',
    delivery: '2 - 4 Days'
  },
  {
    type: 'Business Website',
    starting: 'Starting ₹14,999',
    startingUSD: 'Starting $300',
    rangeINR: '₹12,000 – ₹25,000',
    rangeUSD: '$300 – $700 USD',
    idealFor: 'Doctors, clinics, corporate firms, coaching institutes, hotels, real estate, and local businesses.',
    delivery: '5 - 8 Days'
  },
  {
    type: 'E-commerce Website',
    starting: 'Starting ₹29,999',
    startingUSD: 'Starting $700',
    rangeINR: '₹25,000 – ₹60,000',
    rangeUSD: '$700 – $1,500 USD',
    idealFor: 'Retail brands, fashion apparel, electronics, direct-to-consumer catalogs with payment gateway.',
    delivery: '10 - 15 Days'
  },
  {
    type: 'Custom Web Application',
    starting: 'Starting ₹49,999',
    startingUSD: 'Starting $1,500',
    rangeINR: '₹50,000 – ₹1,50,000+',
    rangeUSD: '$1,500+ USD',
    idealFor: 'SaaS platforms, client portals, internal dashboards, booking workflows, and complex API databases.',
    delivery: '14 - 30 Days'
  }
];

const PricingPage = () => {
  const [packages, setPackages] = useState(DEFAULT_PACKAGES);
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await api.get('/pricing');
        if (res.data?.success && res.data.data.length > 0) {
          setPackages(DEFAULT_PACKAGES.map(def => {
            const remote = res.data.data.find(p => p.tier === def.tier);
            return remote ? { ...def, ...remote } : def;
          }));
        }
      } catch (err) {
        console.error('Error fetching pricing:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  const faqs = [
    {
      q: 'Are there any recurring monthly subscription fees to Satyam Web Studio?',
      a: 'No. All website development packages are one-time capital investments. You own 100% of your website, code, and assets upon completion. Optional monthly retainers are only needed if you desire ongoing maintenance and proactive updates.'
    },
    {
      q: 'Who pays for hosting, the domain, and SSL security?',
      a: 'Free SSL certificates are included via Vercel or Cloudflare. Domain names (~$12/year) and cloud hosting are purchased under your personal or company account so you retain total ownership. I configure and connect everything for you.'
    },
    {
      q: 'What is the revision policy during the project?',
      a: 'Every package includes dedicated revision cycles. We verify the wireframe and design before coding, and test all interactions together before live deployment.'
    },
    {
      q: 'Can I get a custom quote if my requirements fall between tiers?',
      a: 'Absolutely! Our recommended ranges give complete pricing predictability. Contact via WhatsApp with your feature checklist and you will receive an exact fixed quote.'
    }
  ];

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="Transparent Website Pricing & Packages | Satyam Web Studio"
        description="Affordable, transparent website development pricing plans for startups, local businesses, and enterprises. Starting at ₹5,999. No hidden fees. Custom quotes with WhatsApp support."
        keywords="Website Development Cost India, Affordable Web Design Pricing, Freelance Developer Rates Delhi NCR, Website Packages, Starting 5999"
      />

      {/* Top Banner */}
      <section className="section section-soft-blue" style={{ padding: '4.5rem 0 3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Investment Guide</span>
          </div>
          <h1 className="section-title">
            Predictable, Transparent Website Packages
          </h1>
          <p className="section-desc">
            No agency overhead, no hidden retainer traps. Pick the plan that fits your current business stage.
          </p>

          {/* Currency Switcher */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--bg-tertiary)',
            padding: '0.3rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            marginTop: '1.5rem',
            gap: '0.35rem'
          }}>
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: currency === 'INR' ? 'var(--accent-primary)' : 'transparent',
                color: currency === 'INR' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>🇮🇳 India Pricing (INR ₹)</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: currency === 'USD' ? 'var(--accent-primary)' : 'transparent',
                color: currency === 'USD' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>🌐 International Clients (USD $)</span>
            </button>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3.5rem' }}>
        {/* Pricing Cards */}
        <div className="grid-4" style={{ marginBottom: '4rem' }}>
          {packages.map((pkg) => {
            const price = currency === 'INR' ? (pkg.priceINR || pkg.price) : (pkg.priceUSD || '$150+');
            const range = currency === 'INR' ? pkg.rangeINR : pkg.rangeUSD;

            return (
              <div
                key={pkg.tier || pkg._id}
                className="card"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  border: pkg.popular ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  boxShadow: pkg.popular ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
                }}
              >
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent-primary)',
                    color: '#FFFFFF',
                    padding: '0.2rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.72rem',
                    fontWeight: 700
                  }}>
                    {pkg.badge || 'POPULAR CHOICE'}
                  </div>
                )}

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  {pkg.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', minHeight: '40px', marginBottom: '1.25rem' }}>
                  {pkg.description}
                </p>

                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.95rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.15 }}>
                    {price}
                  </div>
                  {range && (
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 500 }}>
                      {range}
                    </div>
                  )}
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '6px' }}>
                    ⏱ Delivery: {pkg.turnaround || '3-7 days'}
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem', flex: 1 }}>
                  {(pkg.features || []).map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      <Check size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919554079669?text=${encodeURIComponent(`Hello Satyam! I would like to choose the "${pkg.title}" package (${price}) for my website. Please share how we can proceed.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-block ${pkg.popular ? 'btn-whatsapp' : 'btn-outline'}`}
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <MessageSquare size={15} fill="#FFFFFF" color="#25D366" />
                  <span>{pkg.ctaText || 'Select Plan'}</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Investment Scope Comparison Table */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem 2rem',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '4.5rem'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Strategic Planning Matrix
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.35rem' }}>
              Recommended Pricing & Investment Scope
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Transparent market pricing aligned with engineering depth, deliverables, and business ROI.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Website Type</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>Portfolio Starting Price</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Recommended Price (INR)</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--text-primary)' }}>International Clients</th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Best Suited For</th>
                </tr>
              </thead>
              <tbody>
                {INVESTMENT_GUIDE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{row.type}</td>
                    <td style={{ padding: '1rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                      {currency === 'INR' ? row.starting : row.startingUSD}
                    </td>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#10B981' }}>{row.rangeINR}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{row.rangeUSD}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{row.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '2rem' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
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
                  <p style={{ marginTop: '0.85rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Need Custom Scope Banner */}
          <div style={{
            marginTop: '3.5rem',
            background: 'var(--bg-soft-blue)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Have Unique Project Specifications?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '540px', margin: '0 auto 1.5rem auto' }}>
              Message me directly on WhatsApp to get an immediate custom project breakdown, deliverables timeline, and cost estimate.
            </p>
            <a
              href="https://wa.me/919554079669?text=Hello%20Satyam!%20I%20have%20a%20custom%20website%20requirement.%20Let's%20discuss%20pricing%20and%20timeline."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MessageSquare size={16} fill="#FFFFFF" color="#25D366" />
              <span>Inquire on WhatsApp (+91 9554079669)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

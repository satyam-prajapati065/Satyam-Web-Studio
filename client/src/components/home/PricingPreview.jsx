import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, MessageSquare, Globe, IndianRupee } from 'lucide-react';

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

const PricingPreview = ({ packages = [] }) => {
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'

  // Combine fetched packages with standard default packages
  const displayPackages = (packages && packages.length > 0)
    ? DEFAULT_PACKAGES.map(def => {
        const remote = packages.find(p => p.tier === def.tier);
        return remote ? { ...def, ...remote } : def;
      })
    : DEFAULT_PACKAGES;

  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Clear Investment</span>
          </div>
          <h2 className="section-title">
            Transparent Website Packages
          </h2>
          <p className="section-desc">
            Honest, competitive pricing with clearly defined deliverables. No hidden fees or recurring lock-in charges.
          </p>

          {/* Currency Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--bg-tertiary)',
            padding: '0.3rem',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)',
            marginTop: '1.25rem',
            gap: '0.35rem'
          }}>
            <button
              type="button"
              onClick={() => setCurrency('INR')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: currency === 'INR' ? 'var(--accent-primary)' : 'transparent',
                color: currency === 'INR' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>🇮🇳 India (INR ₹)</span>
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: currency === 'USD' ? 'var(--accent-primary)' : 'transparent',
                color: currency === 'USD' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              <span>🌐 International (USD $)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
          {displayPackages.map((pkg) => {
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
                    fontWeight: 700,
                    letterSpacing: '0.04em'
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

                {/* Features List */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem', flex: 1 }}>
                  {(pkg.features || []).map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      <Check size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
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

        {/* Note */}
        <div style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Need custom enterprise requirements or advanced SaaS web apps?{' '}
          <Link to="/contact" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
            Request a Custom Quote →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;

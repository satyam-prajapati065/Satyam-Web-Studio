import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

const PricingPreview = ({ packages = [] }) => {
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
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid-4" style={{ marginBottom: '2.5rem' }}>
          {packages.map((pkg) => (
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
                <span style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {pkg.price}
                </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                  {pkg.priceDetail || 'one-time'}
                </span>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 600, marginTop: '4px' }}>
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
                href={`https://wa.me/919554079669?text=${encodeURIComponent(`Hello Satyam! I would like to choose the "${pkg.title}" package (${pkg.price}) for my website. Please share how we can proceed.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-block ${pkg.popular ? 'btn-whatsapp' : 'btn-outline'}`}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <MessageSquare size={15} fill="#FFFFFF" color="#25D366" />
                <span>{pkg.ctaText || 'Select Plan'}</span>
              </a>
            </div>
          ))}
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

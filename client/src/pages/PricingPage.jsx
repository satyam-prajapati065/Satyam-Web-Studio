import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import api from '../services/api';

const PricingPage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await api.get('/pricing');
        if (res.data?.success) {
          setPackages(res.data.data);
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
      q: 'Can I add more pages or custom features later?',
      a: 'Yes! Because the codebase is built modularly with React.js and modern clean CSS, adding new pages, database collections, or e-commerce features later is fast and straightforward.'
    }
  ];

  return (
    <div style={{ paddingBottom: '6rem' }}>
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
        </div>
      </section>

      <div className="container" style={{ marginTop: '3.5rem' }}>
        {/* Pricing Cards */}
        <div className="grid-4" style={{ marginBottom: '4rem' }}>
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

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem', flex: 1 }}>
                {(pkg.features || []).map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    <Check size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

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
                  padding: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: 'var(--text-primary)' }}>
                  <span>{faq.q}</span>
                  <ChevronDown size={18} color="var(--accent-primary)" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

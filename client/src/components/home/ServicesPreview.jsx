import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code, Briefcase, ShoppingBag, Flame, Sparkles,
  Server, ShieldCheck, Zap, ArrowRight, Check, MessageSquare
} from 'lucide-react';

const ServicesPreview = ({ services = [] }) => {
  const iconMap = {
    Code: Code,
    Briefcase: Briefcase,
    ShoppingBag: ShoppingBag,
    Flame: Flame,
    Sparkles: Sparkles,
    Server: Server,
    ShieldCheck: ShieldCheck,
    Zap: Zap
  };

  return (
    <section className="section" id="services">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Full-Stack Capabilities</span>
          </div>
          <h2 className="section-title">
            Professional Web Development Services
          </h2>
          <p className="section-desc">
            End-to-end web engineering delivered with clean code, modern architecture, and responsive UI design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {services.map((svc) => {
            const IconComponent = iconMap[svc.iconName] || Code;
            return (
              <div
                key={svc.slug || svc._id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-blue-soft)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}>
                    <IconComponent size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                    {svc.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {svc.shortDescription}
                  </p>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {(svc.features || []).slice(0, 3).map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <Check size={15} color="var(--color-success)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Estimated Investment</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
                      {svc.priceEstimate || 'Custom Estimate'}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/919554079669?text=${encodeURIComponent(`Hello Satyam! I am interested in your service: "${svc.title}". Please share details and quotation.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <MessageSquare size={14} fill="#FFFFFF" color="#25D366" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing notice disclaimer */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.5rem',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: 'var(--text-secondary)',
          maxWidth: '820px',
          margin: '0 auto'
        }}>
          💡 <strong>Notice:</strong> Domain registration, cloud hosting server costs, and external third-party APIs are billed separately based on your preferred providers.
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

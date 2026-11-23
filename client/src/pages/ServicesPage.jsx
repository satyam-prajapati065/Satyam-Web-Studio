import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import {
  Code, Briefcase, ShoppingBag, Flame, Sparkles,
  Server, ShieldCheck, Zap, ArrowRight, CheckCircle2, AlertCircle, MessageSquare
} from 'lucide-react';
import api from '../services/api';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get('/services');
        if (res.data?.success) {
          setServices(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="Web Development & Design Services | Satyam Web Studio"
        description="Full-stack web development services by Satyam Prajapati. Custom React websites, MERN web applications, e-commerce stores, speed optimization, and UI/UX design in Delhi NCR."
        keywords="Web Development Services, Custom Website Design, React Developer Delhi, MERN Stack Agency, E-commerce Development India, Satyam Prajapati Services"
      />
      {/* Top Banner */}
      <section className="section section-soft-blue" style={{ padding: '4.5rem 0 3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Web Engineering Offerings</span>
          </div>
          <h1 className="section-title">
            Tailored Web Design & Development Services
          </h1>
          <p className="section-desc">
            High-performance React.js development, business corporate websites, e-commerce storefronts, and cloud deployment crafted by Satyam Prajapati.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3.5rem' }}>
        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
          {services.map((svc, idx) => (
            <div
              key={svc.slug || svc._id}
              className="card grid-desktop-2"
              style={{
                padding: '2.5rem',
                borderLeft: '4px solid var(--accent-primary)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem'
              }}
            >
              {/* Left Details */}
              <div>
                <span className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>
                  {svc.turnaround || '3-7 Business Days'}
                </span>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                  {svc.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {svc.fullDescription || svc.shortDescription}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {(svc.technologies || []).map((t, i) => (
                    <span key={i} className="badge badge-purple" style={{ fontSize: '0.8rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                  {svc.priceEstimate || 'Custom Quote'}
                </div>
              </div>

              {/* Right Deliverables Checklist */}
              <div style={{ background: 'var(--bg-secondary)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    What You Receive:
                  </h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
                    {(svc.features || []).map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/919554079669?text=${encodeURIComponent(`Hello Satyam! I am interested in your service: "${svc.title}". Please share deliverables, timeline and pricing.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <MessageSquare size={16} fill="#FFFFFF" color="#25D366" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Important Transparency Notice */}
        <div style={{
          background: 'var(--bg-amber-soft)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem',
          display: 'flex',
          gap: '1.25rem',
          alignItems: 'flex-start',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <AlertCircle size={28} color="var(--color-warning)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#92400E', marginBottom: '0.35rem' }}>
              Hosting, Domain & Third-Party Service Fee Policy
            </h3>
            <p style={{ color: '#78350F', fontSize: '0.92rem', lineHeight: 1.6 }}>
              At Satyam Web Studio, all client code is 100% custom and yours to keep. Please note that external recurring infrastructure costs (such as custom domain name registration, cloud server hosting like Vercel Pro or Render, and third-party transactional email/SMS APIs) are billed directly by those respective providers under your own account. I provide complete configuration and deployment assistance as part of our engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

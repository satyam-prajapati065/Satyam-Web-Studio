import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Send, Sparkles, ArrowRight, Check, MessageSquare } from 'lucide-react';

const FeaturedTemplates = ({ templates = [] }) => {
  return (
    <section className="section section-alt" id="templates">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Curated Showcase</span>
          </div>
          <h2 className="section-title">
            Featured Website Templates
          </h2>
          <p className="section-desc">
            Explore live interactive demos built with modern React.js. Every template can be fully customized for your brand and deployed in days.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {templates.map((tpl) => (
            <div
              key={tpl.templateId || tpl._id}
              className="card"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Thumbnail Container */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#F8FAFC' }}>
                <img
                  src={tpl.thumbnail}
                  alt={tpl.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform var(--transition-normal)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <span className="badge badge-blue" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)' }}>
                  {tpl.category}
                </span>
                <span className="badge" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15, 23, 42, 0.75)', color: '#FFFFFF', backdropFilter: 'blur(4px)', fontSize: '0.7rem' }}>
                  {tpl.templateId}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <Link to={`/templates/${tpl.slug || tpl._id}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {tpl.title}
                  </h3>
                </Link>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem', flex: 1 }}>
                  {tpl.shortDescription}
                </p>

                {/* Tech Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {(tpl.techStack || ['React.js', 'Vite', 'Modular CSS']).slice(0, 3).map((tech, i) => (
                    <span key={i} className="badge badge-purple" style={{ fontSize: '0.72rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <Link
                    to={tpl.demoUrl || `/demo/${tpl.demoSlug || tpl.slug}`}
                    className="btn btn-outline btn-sm"
                    style={{ padding: '0.55rem 0.75rem' }}
                  >
                    <Eye size={15} />
                    <span>Live Demo</span>
                  </Link>

                  <a
                    href={`https://wa.me/919554079669?text=${encodeURIComponent(`Hello Satyam! I want to get a website designed based on your "${tpl.title}" template (${tpl.category}). Please share pricing and details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ padding: '0.55rem 0.75rem', textDecoration: 'none' }}
                  >
                    <MessageSquare size={14} fill="#FFFFFF" color="#25D366" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/templates" className="btn btn-primary btn-lg">
            <span>Explore Complete Template Library</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;

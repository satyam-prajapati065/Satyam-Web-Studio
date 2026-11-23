import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { Eye, MessageSquare, ArrowLeft, CheckCircle2, Phone } from 'lucide-react';
import api from '../services/api';
import LoadingSpinner from '../components/common/LoadingSpinner';

const TemplateDetailPage = () => {
  const { identifier } = useParams();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);

    // Query backend API
    api.get(`/templates/${identifier}`)
      .then(res => {
        if (res.data?.data) {
          setTemplate(res.data.data);
          if (res.data.related) {
            setRelated(res.data.related);
          }
        }
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [identifier]);

  if (loading) {
    return (
      <div className="container" style={{ padding: '6rem 0' }}>
        <LoadingSpinner
          title="Loading Template Specifications..."
          subtitle="Fetching design layouts, technical stack, and responsive demo details..."
          size="lg"
        />
      </div>
    );
  }

  if (!template) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Template Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The website template you requested could not be located.
        </p>
        <Link to="/templates" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Browse All Templates</span>
        </Link>
      </div>
    );
  }

  const whatsappInquiryUrl = `https://wa.me/919554079669?text=${encodeURIComponent(
    `Hello Satyam! I am interested in building a website based on your "${template.title}" template (ID: ${template.templateId}, Category: ${template.category}). Please share details and pricing.`
  )}`;

  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <SEO
        title={`${template.title} | Website Template Specs`}
        description={template.shortDescription || template.fullDescription}
        keywords={`${template.title}, ${template.category} template, React template, buy website, Satyam Web Studio`}
      />
      <div className="container">
        {/* Breadcrumb & Navigation */}
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link to="/templates" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
            <ArrowLeft size={16} />
            <span>Back to Template Library</span>
          </Link>

          <div style={{ display: 'flex', gap: '0.6rem' }}>
            <a
              href="tel:9554079669"
              className="btn btn-outline btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Phone size={14} color="var(--accent-primary)" />
              <span>Call: +91 95540 79669</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Visual on Left, Details on Right */}
        <div className="grid-desktop-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left Column: Big Interactive Preview Card */}
          <div>
            <div className="card" style={{ padding: 0, overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              {/* Mock Browser Topbar */}
              <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  https://satyamwebstudio.com/demo/{template.slug}
                </div>
                <span className="badge badge-emerald" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', flexShrink: 0 }}>
                  Live Preview Ready
                </span>
              </div>

              {/* Big Thumbnail */}
              <div style={{ position: 'relative', height: '420px', background: '#F8FAFC' }}>
                <img
                  src={template.thumbnail}
                  alt={template.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Direct Dual Action CTAs */}
            <div className="template-detail-actions">
              <Link
                to={template.demoUrl || `/demo/${template.demoSlug || template.slug}`}
                className="btn btn-outline btn-lg"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <Eye size={18} />
                <span>Open Live Demo</span>
              </Link>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <MessageSquare size={18} fill="#FFFFFF" color="#25D366" />
                <span>I Want This Website</span>
              </a>
            </div>
          </div>

          {/* Right Column: Specifications & Features */}
          <div>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-blue">{template.category}</span>
              <span className="badge badge-purple">{template.templateId}</span>
              {template.isFeatured && <span className="badge badge-emerald">Featured Template</span>}
            </div>

            <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1rem' }}>
              {template.title}
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              {template.fullDescription || template.shortDescription}
            </p>

            {/* Spec Matrix */}
            <div className="template-spec-matrix" style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Design Direction</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                  {template.designStyle || 'Modern Clean Light Theme'}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Responsiveness</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-success)', marginTop: '2px' }}>
                  Mobile, Tablet & Desktop
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Turnaround Time</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)', marginTop: '2px' }}>
                  3 to 7 Business Days
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Developer</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '2px' }}>
                  Satyam Prajapati
                </div>
              </div>
            </div>

            {/* Features Checklist */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Key Included Capabilities
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {(template.features || [
                  'Responsive Mobile, Tablet & Desktop layouts',
                  'Fast Loading with optimized React components',
                  'Modular CSS Architecture with clean design tokens',
                  'Interactive user experience and UI animations',
                  'SEO-friendly structure and semantic HTML5'
                ]).map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={17} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Inquiry Action Card */}
            <div className="card" style={{ background: 'var(--bg-blue-soft)', border: '1.5px solid var(--accent-primary-light)', padding: '1.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Get This Design Customized For Your Business
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                Contact Satyam directly via WhatsApp or Call with your content, logo, and preferred domain.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ flex: 1, minWidth: '180px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <MessageSquare size={17} fill="#FFFFFF" color="#25D366" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="tel:9554079669"
                  className="btn btn-outline"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontWeight: 700 }}
                >
                  <Phone size={15} color="var(--accent-primary)" />
                  <span>Call: +91 95540 79669</span>
                </a>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                Technologies Used
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {(template.techStack || ['React.js', 'Vite', 'Modular CSS', 'Lucide Icons']).map((tech, i) => (
                  <span key={i} className="badge badge-purple" style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Templates */}
        {related.length > 0 && (
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.75rem' }}>
              More Templates in {template.category}
            </h2>
            <div className="grid-3">
              {related.map(r => (
                <div key={r._id || r.templateId} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <Link to={`/templates/${r.slug || r._id || r.templateId}`} style={{ display: 'block', overflow: 'hidden', height: '180px' }} title={`View ${r.title}`}>
                    <img src={r.thumbnail} alt={r.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                  </Link>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{r.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{r.shortDescription}</p>
                    <Link to={`/templates/${r.slug || r._id || r.templateId}`} className="btn btn-outline btn-sm btn-block">
                      View Template Specs
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateDetailPage;

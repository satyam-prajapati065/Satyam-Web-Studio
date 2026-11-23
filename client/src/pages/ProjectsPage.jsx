import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { ExternalLink, Github, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import api from '../services/api';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get('/projects');
        if (res.data?.success) {
          setProjects(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="Web Development Projects & Portfolio | Satyam Web Studio"
        description="Explore real-world client websites, production web applications, and open-source projects crafted by Satyam Prajapati. High-performance, responsive code."
        keywords="Web Development Portfolio, Satyam Prajapati Projects, React Developer Portfolio, MERN Stack Projects, Client Website Examples"
      />
      {/* Top Banner */}
      <section className="section section-soft-blue" style={{ padding: '4.5rem 0 3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Proven Delivery</span>
          </div>
          <h1 className="section-title">
            Completed Client Projects & Case Studies
          </h1>
          <p className="section-desc">
            A selection of custom web applications and business platforms engineered by Satyam Prajapati.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div className="grid-3">
          {projects.map((proj) => (
            <div
              key={proj._id}
              className="card"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge badge-blue" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255, 255, 255, 0.95)' }}>
                  {proj.category}
                </span>
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
                  Client: <strong style={{ color: 'var(--text-primary)' }}>{proj.client || 'Confidential'}</strong>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                  {proj.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                  {proj.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {(proj.technologies || []).map((t, i) => (
                    <span key={i} className="badge badge-purple" style={{ fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                  <a
                    href={`https://wa.me/919554079669?text=${encodeURIComponent(`Hello Satyam! I saw your completed project "${proj.title}". I would like to request a similar website project for my brand.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm btn-block"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <MessageSquare size={15} fill="#FFFFFF" color="#25D366" />
                    <span>Request on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

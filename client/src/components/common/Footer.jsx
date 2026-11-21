import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import api from '../../services/api';
import '../../styles/footer.css';

// Crisp SVGs for GitHub and LinkedIn to guarantee 100% correct brand presentation
const GithubSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.88a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

const Footer = () => {
  const [settings, setSettings] = useState({
    email: 'satyamprajapati065@gmail.com',
    phone: '+91 95540 79669',
    phoneSecondary: '+91 63071 64317',
    whatsappNumber: '919554079669',
    location: 'Delhi NCR, India (Available Worldwide)',
    socialLinks: {
      github: 'https://github.com/satyam-prajapati065',
      linkedin: 'https://www.linkedin.com/in/satyam-prajapati-94a25831a/'
    }
  });

  useEffect(() => {
    api.get('/settings')
      .then(res => {
        if (res.data?.data) {
          setSettings(prev => ({ ...prev, ...res.data.data }));
        }
      })
      .catch(() => {});
  }, []);

  const cleanWhatsApp = (settings.whatsappNumber || '919554079669').replace(/[^0-9]/g, '');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="footer-brand-title">
              <div className="navbar-logo-icon" style={{ width: '32px', height: '32px' }}>
                <Code2 size={18} />
              </div>
              <span>Satyam Web Studio</span>
            </div>
            <p className="footer-brand-desc">
              Your Vision. My Code. Your Digital Success. I design and develop modern, responsive, high-performance websites that help businesses build their digital presence and grow online.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
              <MapPin size={16} color="var(--accent-primary)" />
              <span>{settings.location || 'Delhi NCR, India (Available Worldwide)'}</span>
            </div>
            <div className="footer-socials">
              <a href={`https://wa.me/${cleanWhatsApp}`} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="WhatsApp" title="WhatsApp Chat">
                <MessageSquare size={18} />
              </a>
              <a href={`mailto:${settings.email || 'satyamprajapati065@gmail.com'}`} className="footer-social-btn" aria-label="Email" title="Official Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/satyam-prajapati065" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub" title="Satyam Prajapati - GitHub Profile">
                <GithubSvg />
              </a>
              <a href="https://www.linkedin.com/in/satyam-prajapati-94a25831a/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn" title="Satyam Prajapati - LinkedIn Profile">
                <LinkedinSvg />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About Satyam</Link>
              <Link to="/templates" className="footer-link">Website Templates</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/projects" className="footer-link">Completed Projects</Link>
              <Link to="/pricing" className="footer-link">Pricing Packages</Link>
              <Link to="/contact" className="footer-link">Contact & Inquiries</Link>
            </div>
          </div>

          {/* Website Categories */}
          <div>
            <h4 className="footer-col-title">Top Categories</h4>
            <div className="footer-links">
              <Link to="/templates?category=saas-startup" className="footer-link">SaaS & Startups</Link>
              <Link to="/templates?category=fashion-store" className="footer-link">E-commerce Stores</Link>
              <Link to="/templates?category=restaurant" className="footer-link">Restaurants & Cafes</Link>
              <Link to="/templates?category=real-estate" className="footer-link">Real Estate Portals</Link>
              <Link to="/templates?category=hospital-healthcare" className="footer-link">Healthcare & Clinics</Link>
              <Link to="/templates?category=dashboard-admin-panel" className="footer-link">Admin Dashboards</Link>
              <Link to="/templates?category=business-corporate" className="footer-link">Corporate Consulting</Link>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="footer-col-title">Direct Inquiries</h4>
            <div className="footer-links" style={{ gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MessageSquare size={18} color="#25D366" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>WhatsApp Chat</div>
                  <a href={`https://wa.me/${cleanWhatsApp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                    +91 95540 79669
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Phone size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Calling Numbers</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <a href="tel:9554079669" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                      +91 95540 79669
                    </a>
                    <a href="tel:6307164317" style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.9rem' }}>
                      +91 63071 64317
                    </a>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Mail size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Email</div>
                  <a href={`mailto:${settings.email || 'satyamprajapati065@gmail.com'}`} style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.88rem', wordBreak: 'break-all' }}>
                    {settings.email || 'satyamprajapati065@gmail.com'}
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=Hello%20Satyam%2C%20I%20would%20like%20to%20get%20a%20website%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm btn-block"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                >
                  <MessageSquare size={15} fill="#FFFFFF" color="#25D366" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Satyam Web Studio by Satyam Prajapati. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Built with MERN Stack • React.js & Node.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

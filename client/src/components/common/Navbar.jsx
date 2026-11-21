import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Code2, Menu, X, ArrowRight, MessageSquare, Phone,
  Home, User, LayoutGrid, Wrench, Briefcase, Tag, Mail, MapPin
} from 'lucide-react';
import '../../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Templates', path: '/templates', icon: LayoutGrid },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Pricing', path: '/pricing', icon: Tag },
    { name: 'Contact', path: '/contact', icon: Mail }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-logo" onClick={handleNavClick}>
            <div className="navbar-logo-icon">
              <Code2 size={20} strokeWidth={2.5} />
            </div>
            <span className="navbar-logo-text">
              Satyam<span style={{ color: 'var(--accent-primary)', marginLeft: '4px' }}>WebStudio</span>
            </span>
          </Link>

          {/* Desktop Nav Links (Hidden on mobile) */}
          <nav className="navbar-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons & Mobile Toggle */}
          <div className="navbar-actions">
            {/* Desktop Only Actions - Hidden on mobile screen */}
            <div className="navbar-actions-desktop">
              <a
                href="tel:9554079669"
                className="btn btn-outline"
                style={{ padding: '0.6rem 0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem' }}
                title="Call Satyam Prajapati directly"
              >
                <Phone size={15} color="var(--accent-primary)" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919554079669?text=Hello%20Satyam%2C%20I%20am%20interested%20in%20discussing%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.6rem 1.15rem', display: 'flex', alignItems: 'center', gap: '0.45rem', textDecoration: 'none' }}
              >
                <MessageSquare size={16} fill="#FFFFFF" color="#25D366" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="navbar-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              type="button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Menu */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header with Logo and Close Button */}
            <div className="mobile-drawer-header">
              <div className="navbar-logo" style={{ fontSize: '1.1rem' }}>
                <div className="navbar-logo-icon" style={{ width: '32px', height: '32px' }}>
                  <Code2 size={18} strokeWidth={2.5} />
                </div>
                <span>
                  Satyam<span style={{ color: 'var(--accent-primary)' }}>WebStudio</span>
                </span>
              </div>

              <button
                className="mobile-drawer-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="mobile-nav-list">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleNavClick}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="mobile-nav-icon">
                        <IconComponent size={17} />
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <ArrowRight size={15} opacity={0.4} />
                  </NavLink>
                );
              })}
            </nav>

            {/* Mobile Contact CTAs */}
            <div className="mobile-drawer-actions">
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Direct Contact
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919554079669?text=Hello%20Satyam%2C%20I%20am%20interested%20in%20discussing%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-block"
                style={{
                  padding: '0.75rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 700
                }}
              >
                <MessageSquare size={17} fill="#FFFFFF" color="#25D366" />
                <span>WhatsApp: +91 95540 79669</span>
              </a>

              {/* Calling Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <a
                  href="tel:9554079669"
                  className="btn btn-outline"
                  style={{
                    padding: '0.65rem 0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Phone size={13} color="var(--accent-primary)" />
                  <span>9554079669</span>
                </a>
                <a
                  href="tel:6307164317"
                  className="btn btn-outline"
                  style={{
                    padding: '0.65rem 0.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Phone size={13} color="var(--accent-primary)" />
                  <span>6307164317</span>
                </a>
              </div>

              {/* Location & Email info */}
              <div style={{ marginTop: '0.25rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', wordBreak: 'break-all' }}>
                  <Mail size={13} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span>satyamprajapati065@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={13} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span>Delhi NCR, India (Available Worldwide)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

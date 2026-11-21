import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Code2, Menu, X, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import '../../styles/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Templates', path: '/templates' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">
            <Code2 size={22} strokeWidth={2.5} />
          </div>
          <span>
            Satyam<span style={{ color: 'var(--accent-primary)', marginLeft: '4px' }}>WebStudio</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="navbar-actions">
          <a
            href="tel:9554079669"
            className="btn btn-outline"
            style={{ padding: '0.65rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem' }}
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
            style={{ padding: '0.65rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.45rem', textDecoration: 'none' }}
          >
            <MessageSquare size={16} fill="#FFFFFF" color="#25D366" />
            <span>WhatsApp</span>
          </a>

          <button
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              <span>{item.name}</span>
              <ArrowRight size={18} opacity={0.6} />
            </NavLink>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
            <a
              href="https://wa.me/919554079669?text=Hello%20Satyam%2C%20I%20am%20interested%20in%20discussing%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-block"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none' }}
            >
              <MessageSquare size={18} fill="#FFFFFF" color="#25D366" />
              <span>Chat on WhatsApp (+91 95540 79669)</span>
            </a>
            <a
              href="tel:9554079669"
              className="btn btn-outline btn-block"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <Phone size={16} color="var(--accent-primary)" />
              <span>Direct Call (+91 95540 79669)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

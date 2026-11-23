import React, { useState } from 'react';
import { Home, Search, Bed, Bath, Move, MapPin, Phone, Heart, Calendar, Check, Menu, X } from 'lucide-react';

const RealEstateDemo = ({ onInquire }) => {
  const [purpose, setPurpose] = useState('buy'); // 'buy' | 'rent'
  const [typeFilter, setTypeFilter] = useState('All');
  const [tourScheduled, setTourScheduled] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const listings = [
    {
      id: 1,
      title: 'The Skyview Penthouse at Tribeca',
      purpose: 'buy',
      type: 'Penthouse',
      price: '$4,850,000',
      beds: 4,
      baths: 4.5,
      sqft: '4,200',
      location: 'Tribeca, New York, NY',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      badge: 'Exclusive'
    },
    {
      id: 2,
      title: 'Coastal Architectural Villa',
      purpose: 'buy',
      type: 'Villa',
      price: '$6,200,000',
      beds: 5,
      baths: 6,
      sqft: '5,800',
      location: 'Malibu, California',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      badge: 'Ocean View'
    },
    {
      id: 3,
      title: 'Glass Pavilion Modern Estate',
      purpose: 'rent',
      type: 'Estate',
      price: '$18,500 / mo',
      beds: 3,
      baths: 3.5,
      sqft: '3,400',
      location: 'Bel Air, Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      badge: 'Furnished'
    },
    {
      id: 4,
      title: 'Historic Greenwich Townhouse',
      purpose: 'buy',
      type: 'Townhouse',
      price: '$3,450,000',
      beds: 4,
      baths: 4,
      sqft: '3,900',
      location: 'West Village, NY',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      badge: 'Historic'
    }
  ];

  const filtered = listings.filter(l => {
    if (l.purpose !== purpose) return false;
    if (typeFilter !== 'All' && l.type !== typeFilter) return false;
    return true;
  });

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FFFFFF', color: '#172033' }}>
      {/* Header */}
      <header className="demo-navbar-header" style={{ borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>
          <Home size={22} color="#3B82F6" />
          <span>APEX<span style={{ color: '#3B82F6' }}>ESTATES</span></span>
        </div>
        <div className="demo-desktop-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>
          <a href="#properties" style={{ color: '#64748B', textDecoration: 'none' }}>Properties</a>
          <a href="#neighborhoods" style={{ color: '#64748B', textDecoration: 'none' }}>Neighborhoods</a>
          <a href="#valuation" style={{ color: '#64748B', textDecoration: 'none' }}>Sell With Us</a>
        </div>
        <div className="demo-desktop-action">
          <button
            onClick={onInquire}
            style={{ background: '#0F172A', color: '#FFF', padding: '0.6rem 1.4rem', borderRadius: '8px', fontWeight: 600, fontSize: '0.88rem', border: 'none', cursor: 'pointer' }}
          >
            Book Consultation
          </button>
        </div>
        <button
          className="demo-hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`demo-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#properties" onClick={() => setMobileMenuOpen(false)}>Properties</a>
        <a href="#neighborhoods" onClick={() => setMobileMenuOpen(false)}>Neighborhoods</a>
        <a href="#valuation" onClick={() => setMobileMenuOpen(false)}>Sell With Us</a>
        <button
          onClick={() => { setMobileMenuOpen(false); onInquire && onInquire(); }}
          style={{
            background: '#0F172A',
            color: '#FFF',
            padding: '0.75rem',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Book Consultation
        </button>
      </div>

      {/* Hero Search */}
      <div style={{
        background: 'linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.45)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 2rem 4rem 2rem',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1rem' }}>
            Curated Luxury Real Estate Portfolios
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#E2E8F0', marginBottom: '2.5rem' }}>
            Discover prime architectural residences, penthouses, and private estates across premier global metropolitan markets.
          </p>

          {/* Interactive Search Box */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '1.5rem',
            boxShadow: '0 20px 35px rgba(0,0,0,0.2)',
            color: '#172033',
            textAlign: 'left'
          }}>
            {/* Buy / Rent Switch */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <button
                onClick={() => setPurpose('buy')}
                style={{
                  padding: '0.45rem 1.25rem',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  background: purpose === 'buy' ? '#3B82F6' : '#F1F5F9',
                  color: purpose === 'buy' ? '#FFFFFF' : '#64748B',
                  cursor: 'pointer'
                }}
              >
                For Sale
              </button>
              <button
                onClick={() => setPurpose('rent')}
                style={{
                  padding: '0.45rem 1.25rem',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  background: purpose === 'rent' ? '#3B82F6' : '#F1F5F9',
                  color: purpose === 'rent' ? '#FFFFFF' : '#64748B',
                  cursor: 'pointer'
                }}
              >
                For Rent
              </button>
            </div>

            {/* Fields */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', alignItems: 'center' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Location</label>
                <input
                  type="text"
                  placeholder="New York, Malibu, Bel Air..."
                  defaultValue="New York, NY"
                  style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #CBD5E1', outline: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>Property Type</label>
                <select
                  value={typeFilter}
                  onChange={e => setTypeFilter(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid #CBD5E1', outline: 'none', fontWeight: 600, fontSize: '0.95rem' }}
                >
                  <option value="All">All Types</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Villa">Villa</option>
                  <option value="Estate">Estate</option>
                  <option value="Townhouse">Townhouse</option>
                </select>
              </div>

              <div>
                <button
                  onClick={() => {}}
                  style={{
                    width: '100%',
                    background: '#3B82F6',
                    color: '#FFF',
                    padding: '0.85rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  <Search size={16} /> Search Estates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Listings */}
      <section id="properties" style={{ padding: '4rem 2rem', maxWidth: '1150px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>Featured Architectural Residences</h2>
            <p style={{ color: '#64748B' }}>Showing {filtered.length} verified exclusive properties.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filtered.map(item => (
            <div
              key={item.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '240px', position: 'relative' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(4px)',
                  color: '#FFFFFF',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  {item.badge}
                </span>
                <span style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  background: '#3B82F6',
                  color: '#FFFFFF',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '1.05rem',
                  fontWeight: 800
                }}>
                  {item.price}
                </span>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  <MapPin size={14} color="#3B82F6" />
                  <span>{item.location}</span>
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{item.title}</h3>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', marginBottom: '1.25rem', fontSize: '0.85rem', color: '#475569' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Bed size={16} /> {item.beds} Beds</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Bath size={16} /> {item.baths} Baths</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Move size={16} /> {item.sqft} sqft</span>
                </div>

                <button
                  onClick={() => { setSelectedProperty(item); setTourScheduled(false); }}
                  style={{
                    marginTop: 'auto',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    color: '#0F172A',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Calendar size={16} /> Schedule Private Showing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Modal */}
      {selectedProperty && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.5)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            maxWidth: '500px',
            width: '100%',
            padding: '2rem',
            position: 'relative'
          }}>
            <button
              onClick={() => setSelectedProperty(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '1.2rem', cursor: 'pointer' }}
            >
              ✕
            </button>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>Schedule Private Viewing</h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginTop: '0.2rem', marginBottom: '1.5rem' }}>{selectedProperty.title}</p>

            {tourScheduled ? (
              <div style={{ background: '#ECFDF5', padding: '1.5rem', borderRadius: '10px', textAlign: 'center', color: '#065F46' }}>
                <Check size={32} color="#10B981" style={{ margin: '0 auto 0.5rem auto' }} />
                <div style={{ fontWeight: 700 }}>Appointment Requested!</div>
                <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>Our listing director will contact you within 2 hours.</div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setTourScheduled(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Your Name</label>
                  <input type="text" required placeholder="Full Name" style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.2rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Phone / WhatsApp</label>
                  <input type="tel" required placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.2rem' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Preferred Date</label>
                  <input type="date" required defaultValue="2026-11-28" style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.2rem' }} />
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#3B82F6',
                    color: '#FFF',
                    padding: '0.85rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    marginTop: '0.5rem',
                    cursor: 'pointer'
                  }}
                >
                  Confirm Viewing Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RealEstateDemo;

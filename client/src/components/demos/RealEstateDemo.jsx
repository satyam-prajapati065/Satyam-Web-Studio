import React, { useState } from 'react';
import { Home, Search, Bed, Bath, Move, MapPin, Phone, Heart, Calendar, Check, Menu, X, ShieldCheck, Award, Star, Compass, Calculator, ArrowRight } from 'lucide-react';

const RealEstateDemo = ({ onInquire }) => {
  const [purpose, setPurpose] = useState('buy'); // 'buy' | 'rent'
  const [typeFilter, setTypeFilter] = useState('All');
  const [tourScheduled, setTourScheduled] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calcPrice, setCalcPrice] = useState(2500000);
  const [calcDown, setCalcDown] = useState(20);
  const [calcTerm, setCalcTerm] = useState(30);

  const calculateMortgage = () => {
    const loanAmount = calcPrice * (1 - calcDown / 100);
    const monthlyRate = 0.065 / 12;
    const numPayments = calcTerm * 12;
    const monthly = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    return Math.round(monthly).toLocaleString();
  };

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

      {/* VIP Concierge Advisory */}
      <section style={{ padding: '4rem 2rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>White-Glove Brokerage</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem' }}>Private Client Advisory</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.5rem' }}>Confidential representation for high-net-worth acquisitions, family offices, and architectural collectors worldwide.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#EFF6FF', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Off-Market Discretion</h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>Access to 350+ private off-market estates not listed on MLS or public portals, protected by NDA-backed buyer representation.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#F0FDF4', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Compass size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Chauffeur & Helicopter Tours</h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>Private aerial and waterfront property inspections with dedicated hospitality concierge for out-of-state and international buyers.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Legal & Escrow Concierge</h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>Seamless closing management with top-tier title attorneys, 1031 tax exchange advisors, and international wire escrow teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Spotlight */}
      <section id="neighborhoods" style={{ padding: '4.5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Prime Locations</span>
              <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem' }}>Premier Coastal & Metro Neighborhoods</h2>
            </div>
            <button onClick={onInquire} style={{ background: 'none', border: 'none', color: '#3B82F6', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              Explore All 18 Districts <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Tribeca, New York', avg: '$4.2M Avg', count: '28 Listings', image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80' },
              { name: 'Malibu Colony, California', avg: '$7.8M Avg', count: '14 Listings', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
              { name: 'Bel-Air, Los Angeles', avg: '$9.5M Avg', count: '19 Listings', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
              { name: 'West Village, Manhattan', avg: '$3.8M Avg', count: '31 Listings', image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80' }
            ].map((n, i) => (
              <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative', height: '240px', boxShadow: '0 4px 10px rgba(0,0,0,0.06)' }}>
                <img src={n.image} alt={n.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.1) 60%)' }} />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', color: '#FFF' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>{n.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#E2E8F0', marginTop: '0.4rem' }}>
                    <span>{n.avg}</span>
                    <span>{n.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mortgage & Investment Estimator */}
      <section id="valuation" style={{ padding: '4.5rem 2rem', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Financial Planning</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem' }}>Mortgage & Investment Estimator</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.4rem' }}>Calculate estimated monthly principal & interest payment at 6.50% APR.</p>
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', boxShadow: '0 8px 24px -4px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.92rem' }}>
                  <span>Property Price</span>
                  <span style={{ color: '#3B82F6' }}>${calcPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="10000000"
                  step="100000"
                  value={calcPrice}
                  onChange={(e) => setCalcPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#3B82F6', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.92rem' }}>
                  <span>Down Payment ({calcDown}%)</span>
                  <span style={{ color: '#3B82F6' }}>${(calcPrice * (calcDown / 100)).toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={calcDown}
                  onChange={(e) => setCalcDown(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#3B82F6', cursor: 'pointer' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.92rem' }}>Loan Term</label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {[15, 30].map(term => (
                    <button
                      key={term}
                      onClick={() => setCalcTerm(term)}
                      style={{
                        flex: 1,
                        padding: '0.6rem',
                        borderRadius: '8px',
                        border: calcTerm === term ? '2px solid #3B82F6' : '1px solid #E2E8F0',
                        background: calcTerm === term ? '#EFF6FF' : '#FFF',
                        color: calcTerm === term ? '#1D4ED8' : '#64748B',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {term} Years Fixed
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ background: '#0F172A', borderRadius: '12px', padding: '2rem', color: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: '#94A3B8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Estimated Monthly Payment</span>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#38BDF8', marginTop: '0.5rem' }}>
                  ${calculateMortgage()}<span style={{ fontSize: '1rem', color: '#94A3B8', fontWeight: 500 }}> /mo</span>
                </div>
                <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Loan Amount:</span>
                    <span style={{ fontWeight: 600, color: '#FFF' }}>${(calcPrice * (1 - calcDown / 100)).toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Fixed Interest:</span>
                    <span style={{ fontWeight: 600, color: '#FFF' }}>6.50% APR</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onInquire}
                style={{
                  marginTop: '1.5rem',
                  background: '#3B82F6',
                  color: '#FFF',
                  border: 'none',
                  padding: '0.85rem',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              >
                Get Pre-Approved with Partner Lenders
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Reviews */}
      <section style={{ padding: '4.5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Client Testimonials</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem' }}>Trusted by Discerning Buyers & Investors</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                quote: 'Apex Estates secured our Tribeca loft off-market before public bidding began. Their discretion, legal network, and white-glove closing saved us weeks of friction.',
                client: 'Julian & Evelyn Vance',
                role: 'Tribeca Penthouse Buyers',
                rating: 5
              },
              {
                quote: 'As international family office managers, we needed an estate agency capable of swift escrow, cross-border tax guidance, and helicopter property tours. Outstanding service.',
                client: 'Sir Richard Sterling',
                role: 'Private Portfolio Director',
                rating: 5
              },
              {
                quote: 'Sold our coastal modern architectural villa in Malibu in 18 days at 98% of ask. The visual marketing and high-net-worth outreach were second to none.',
                client: 'Dr. Alistair & Clara Monet',
                role: 'Malibu Coastal Sellers',
                rating: 5
              }
            ].map((r, i) => (
              <div key={i} style={{ background: '#F8FAFC', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                    {[...Array(r.rating)].map((_, s) => (
                      <Star key={s} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{r.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{r.client}</div>
                  <div style={{ fontSize: '0.82rem', color: '#64748B' }}>{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer style={{ background: '#0F172A', color: '#CBD5E1', padding: '4rem 2rem 2rem 2rem', borderTop: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
              <Home size={22} color="#3B82F6" />
              <span>APEX<span style={{ color: '#3B82F6' }}>ESTATES</span></span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#94A3B8' }}>
              International luxury residential and commercial property brokerage with flagship private advisory offices in New York, Los Angeles, Miami, and London.
            </p>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>Featured Markets</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>Manhattan Penthouses</span>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>Malibu Beachfront Villas</span>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>Aspen Mountain Estates</span>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>Miami Waterfront Mansions</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>Advisory & Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>Private Listing Representation</span>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>1031 Exchange Advisory</span>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>Helicopter & Aviation Tours</span>
              <span style={{ cursor: 'pointer', color: '#94A3B8' }}>Architectural Curation</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>Flagship Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem', color: '#94A3B8' }}>
              <span>767 Fifth Avenue, New York, NY</span>
              <span>Direct: +1 (212) 555-8900</span>
              <span>Concierge: private@apexestates.demo</span>
              <span style={{ color: '#10B981', fontWeight: 600 }}>Active Private Showings Daily</span>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '2rem', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem', color: '#64748B' }}>
          <div>© {new Date().getFullYear()} Apex Estates International LLC. Equal Housing Opportunity. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Licensing Disclosures</span>
          </div>
        </div>
      </footer>

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

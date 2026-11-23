import React, { useState } from 'react';
import { Utensils, Calendar, Clock, Users, Check, MapPin, Phone, Star, Menu, X } from 'lucide-react';

const RestaurantDemo = ({ onInquire }) => {
  const [activeMenuTab, setActiveMenuTab] = useState('pasta');
  const [reservation, setReservation] = useState({ date: '2026-11-25', time: '19:30', guests: '2', name: '', phone: '' });
  const [reserved, setReserved] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menu = {
    starters: [
      { name: 'Tuscan Truffle Burrata', price: '$22', desc: 'Creamy Pugliese burrata, heirloom cherry tomatoes, 25-year aged balsamic & shaved black winter truffles.' },
      { name: 'Carpaccio di Manzo', price: '$26', desc: 'Thinly sliced prime dry-aged tenderloin, wild baby arugula, shaved Parmigiano-Reggiano & caperberries.' },
      { name: 'Wood-Fired Calamari Fritti', price: '$21', desc: 'Local squid flashed with smoked paprika, lemon zest aioli, and crispy fried capers.' }
    ],
    pasta: [
      { name: 'Tagliolini al Tartufo Nero', price: '$36', desc: 'Hand-rolled egg pasta ribboned in cultured butter, sea salt flakes, and fresh Umbrian black truffle.' },
      { name: 'Lobster Ravioli all’Aragosta', price: '$42', desc: 'Handmade pasta pillows filled with Maine lobster, saffron cream reduction & tarragon.' },
      { name: 'Rigatoni alla Carbonara Tradizionale', price: '$30', desc: 'Crispy Guanciale di Norcia, pastured egg yolks, Pecorino Romano & freshly cracked tellicherry pepper.' }
    ],
    mains: [
      { name: 'Bistecca alla Fiorentina (32oz)', price: '$95', desc: 'Oak-grilled dry-aged Tuscan T-bone steak served with rosemary sea salt & charred Meyer lemon.' },
      { name: 'Pan-Seared Mediterranean Branzino', price: '$44', desc: 'Crispy skin wild sea bass, braised fennel bulbs, salsa verde & baby artichoke hearts.' },
      { name: 'Osso Buco alla Milanese', price: '$48', desc: 'Slow-braised veal shank in white wine mirepoix served over saffron arborio risotto.' }
    ],
    desserts: [
      { name: 'Artisanal Tiramisù al Mascarpone', price: '$16', desc: 'Savoiardi ladyfingers soaked in espresso & dark rum, layered with silky mascarpone mousse.' },
      { name: 'Panna Cotta ai Frutti di Bosco', price: '$14', desc: 'Tahitian vanilla bean cream infused with wild berry compote and Sicilian pistachios.' }
    ]
  };

  const handleReserve = (e) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FFFFFF', color: '#172033' }}>
      {/* Top Bar */}
      <div className="demo-top-bar" style={{ background: '#FFFDF9', borderBottom: '1px solid #F1E9DF', padding: '0.6rem 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#786858' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <span><MapPin size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> 45 Via Roma, Florence • Downtown Flagship</span>
          <span><Clock size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Open Daily: 5:00 PM – 11:30 PM</span>
        </div>
        <div>
          <span><Phone size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Reservations: +39 055 234 5678</span>
        </div>
      </div>

      {/* Nav */}
      <header className="demo-navbar-header" style={{ borderBottom: '1px solid #F1E9DF', background: '#FFFFFF' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.08em', color: '#2B1E12' }}>
          BELLA<span style={{ color: '#D97706' }}>CUCINA</span>
        </div>
        <div className="demo-desktop-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600, color: '#6B5844' }}>
          <a href="#menu" style={{ color: '#6B5844', textDecoration: 'none' }}>Chef's Menu</a>
          <a href="#reserve" style={{ color: '#6B5844', textDecoration: 'none' }}>Reservations</a>
          <a href="#story" style={{ color: '#6B5844', textDecoration: 'none' }}>Our Story</a>
        </div>
        <div className="demo-desktop-action">
          <a href="#reserve" style={{ background: '#2B1E12', color: '#FFF', padding: '0.55rem 1.35rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
            Book a Table
          </a>
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
        <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Chef's Menu</a>
        <a href="#reserve" onClick={() => setMobileMenuOpen(false)}>Reservations</a>
        <a href="#story" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
        <a
          href="#reserve"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            background: '#2B1E12',
            color: '#FFF',
            padding: '0.75rem',
            borderRadius: '6px',
            textAlign: 'center',
            fontWeight: 600,
            marginTop: '0.5rem',
            textDecoration: 'none',
            borderBottom: 'none'
          }}
        >
          Book a Table
        </a>
      </div>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5rem 2rem 4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#D97706', fontWeight: 700 }}>
            MICHELIN-GUIDED CULINARY EXCELLENCE
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#2B1E12', marginTop: '0.5rem', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Artisanal Tuscan Gastronomy Reimagined
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#6B5844', lineHeight: 1.6, marginBottom: '2rem' }}>
            Handmade pastas rolled fresh each morning, pasture-raised Tuscan meats, and centuries-old recipes perfected with contemporary finesse.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#reserve" style={{ background: '#D97706', color: '#FFF', padding: '0.75rem 1.75rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem' }}>
              Reserve Your Table
            </a>
            <a href="#menu" style={{ background: '#FFF', color: '#2B1E12', border: '1px solid #D5C7B7', padding: '0.75rem 1.75rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.95rem' }}>
              Explore Menus
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#2B1E12', marginBottom: '0.5rem' }}>The Autumn Menu</h2>
          <p style={{ color: '#786858' }}>Seasonally curated by Executive Chef Marco Rossi.</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { id: 'starters', label: 'Antipasti (Starters)' },
              { id: 'pasta', label: 'Primi (Fresh Pasta)' },
              { id: 'mains', label: 'Secondi (Main Courses)' },
              { id: 'desserts', label: 'Dolci (Desserts)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveMenuTab(tab.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  border: activeMenuTab === tab.id ? '1px solid #D97706' : '1px solid #E5D8CA',
                  background: activeMenuTab === tab.id ? '#FFFBEB' : '#FFFFFF',
                  color: activeMenuTab === tab.id ? '#D97706' : '#6B5844',
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {menu[activeMenuTab].map((dish, i) => (
            <div key={i} style={{ borderBottom: '1px dashed #E5D8CA', paddingBottom: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#2B1E12' }}>{dish.name}</span>
                <span style={{ fontSize: '1.15rem', fontWeight: 700, color: '#D97706' }}>{dish.price}</span>
              </div>
              <p style={{ color: '#786858', fontSize: '0.9rem', lineHeight: 1.5 }}>{dish.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve" style={{ padding: '4rem 2rem', background: '#FFFDF9', borderTop: '1px solid #F1E9DF' }}>
        <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#2B1E12', marginBottom: '0.5rem' }}>Reserve Your Dining Experience</h2>
          <p style={{ color: '#786858', marginBottom: '2rem' }}>We hold tables for 15 minutes. For parties over 8, please contact concierge.</p>

          {reserved ? (
            <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '12px', padding: '2rem', color: '#065F46' }}>
              <Check size={36} color="#10B981" style={{ margin: '0 auto 0.5rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Reservation Confirmed!</h3>
              <p style={{ fontSize: '0.95rem', marginTop: '0.4rem' }}>
                Table for {reservation.guests} guests confirmed for {reservation.date} at {reservation.time}. A confirmation SMS has been dispatched.
              </p>
            </div>
          ) : (
            <form onSubmit={handleReserve} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', textAlign: 'left' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4B3F32' }}>Date</label>
                <input
                  type="date"
                  value={reservation.date}
                  onChange={e => setReservation({ ...reservation, date: e.target.value })}
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #D5C7B7', marginTop: '0.3rem' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4B3F32' }}>Time</label>
                <select
                  value={reservation.time}
                  onChange={e => setReservation({ ...reservation, time: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #D5C7B7', marginTop: '0.3rem' }}
                >
                  <option value="17:30">5:30 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:30">9:30 PM</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4B3F32' }}>Party Size</label>
                <select
                  value={reservation.guests}
                  onChange={e => setReservation({ ...reservation, guests: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #D5C7B7', marginTop: '0.3rem' }}
                >
                  <option value="1">1 Guest (Bar Seat)</option>
                  <option value="2">2 Guests (Intimate Table)</option>
                  <option value="4">4 Guests (Main Dining)</option>
                  <option value="6">6 Guests (Booth)</option>
                  <option value="8">8 Guests (Chef Table)</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4B3F32' }}>Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Leonardo V."
                  required
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #D5C7B7', marginTop: '0.3rem' }}
                />
              </div>
              <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#D97706',
                    color: '#FFF',
                    padding: '0.85rem',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    border: 'none'
                  }}
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDemo;

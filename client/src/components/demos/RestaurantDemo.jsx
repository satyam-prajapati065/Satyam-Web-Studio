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

      {/* Our Story & Executive Chef Marco Rossi */}
      <section id="story" style={{ padding: '5rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#D97706', fontWeight: 700 }}>
              HERITAGE & CRAFTSMANSHIP
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#2B1E12', marginTop: '0.4rem', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Three Generations of Tuscan Culinary Passion
            </h2>
            <p style={{ color: '#6B5844', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Founded in Florence in 1958 by Nonna Caterina, Bella Cucina honors centuries of rustic Italian home cooking while blending contemporary culinary techniques. Every morning, our pasta makers roll semolina flour with farm-fresh golden yolk eggs.
            </p>
            <p style={{ color: '#6B5844', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              "Food is not merely fuel; it is our sacred language of warmth, family, and shared human joy." — Executive Chef Marco Rossi.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#2B1E12' }}>65+</div>
                <div style={{ fontSize: '0.85rem', color: '#786858' }}>Years of Tradition</div>
              </div>
              <div>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#2B1E12' }}>3</div>
                <div style={{ fontSize: '0.85rem', color: '#786858' }}>Michelin Mentions</div>
              </div>
              <div>
                <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#2B1E12' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: '#786858' }}>Organic Tuscan Olive Oil</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
              alt="Executive Chef Marco Rossi"
              style={{ width: '100%', borderRadius: '14px', objectFit: 'cover', maxHeight: '420px', boxShadow: '0 12px 30px rgba(43, 30, 18, 0.15)' }}
            />
          </div>
        </div>
      </section>

      {/* Wine Cellar & Sommelier Curations */}
      <section style={{ background: '#2B1E12', color: '#F1E9DF', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#D97706', fontWeight: 700 }}>
              PRIVATE CELLAR
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFF', marginTop: '0.4rem' }}>
              Over 400 Curated Old-World Vintages
            </h2>
            <p style={{ color: '#D5C7B7', maxWidth: '600px', margin: '0.5rem auto 0 auto', fontSize: '0.95rem' }}>
              Our Head Sommelier curates rare biodynamic varietals directly from small family vineyards across Tuscany, Piedmont, and Veneto.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {[
              { vintage: '2016', name: 'Brunello di Montalcino Riserva', region: 'Tuscany, Italy', notes: 'Ripe black cherry, tobacco leaf, silky tannins.', glass: '$28' },
              { vintage: '2018', name: 'Barolo DOCG Cannubi', region: 'Piedmont, Italy', notes: 'Dried rose petals, wild truffles, tar, mineral elegance.', glass: '$32' },
              { vintage: '2019', name: 'Chianti Classico Gran Selezione', region: 'Tuscany, Italy', notes: 'Sangiovese purity, dried herbs, bright violet acidity.', glass: '$22' },
              { vintage: '2020', name: 'Franciacorta Extra Brut Vintage', region: 'Lombardy, Italy', notes: 'Crisp golden brioche, green apple, ultra-fine bubbles.', glass: '$25' }
            ].map((wine, i) => (
              <div key={i} style={{ background: '#3D2D1E', border: '1px solid #57412E', borderRadius: '12px', padding: '1.75rem' }}>
                <span style={{ background: '#D97706', color: '#FFF', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                  {wine.vintage}
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFF', marginTop: '0.75rem', marginBottom: '0.25rem' }}>{wine.name}</h3>
                <div style={{ fontSize: '0.82rem', color: '#D97706', fontWeight: 600, marginBottom: '0.6rem' }}>{wine.region}</div>
                <p style={{ color: '#C4B5A5', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1rem' }}>{wine.notes}</p>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>{wine.glass} <span style={{ fontSize: '0.8rem', color: '#A8998A' }}>/ glass</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Reviews & Critic Acclaim */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#2B1E12' }}>Critic Acclaim & Guest Reflections</h2>
          <p style={{ color: '#786858', marginTop: '0.4rem' }}>Honored to share our passion with food lovers from across the world.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { quote: 'The black truffle tagliolini is nothing short of sublime. One of the finest dining experiences in Florence.', critic: 'Michelin Guide Inspector', source: '2025 Edition' },
            { quote: 'An authentic masterclass in Tuscan hospitality. The warmth of the staff equals the brilliance of the plates.', critic: 'Gourmet Traveller', source: 'Top 50 European Bistros' },
            { quote: 'A culinary revelation. From the burrata to the tiramisu, every mouthful transported our family to Italy.', critic: 'Countess Beatrice d’Este', source: 'Verified Patron' }
          ].map((rev, i) => (
            <div key={i} style={{ background: '#FFFDF9', border: '1px solid #F1E9DF', borderRadius: '12px', padding: '2rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem', color: '#D97706', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="#D97706" />)}
              </div>
              <p style={{ color: '#4B3F32', fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                "{rev.quote}"
              </p>
              <div style={{ borderTop: '1px solid #E5D8CA', paddingTop: '0.75rem' }}>
                <div style={{ fontWeight: 700, color: '#2B1E12' }}>{rev.critic}</div>
                <div style={{ fontSize: '0.8rem', color: '#786858' }}>{rev.source}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Restaurant Hours & Location Banner */}
      <section style={{ background: '#F9F5EF', borderTop: '1px solid #EADCCB', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontWeight: 800, color: '#2B1E12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>📍 Location</div>
            <p style={{ color: '#6B5844', fontSize: '0.9rem', lineHeight: 1.5 }}>
              45 Via Roma, Historic Center<br />
              Florence, Italy 50123<br />
              Complimentary Valet Parking
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#2B1E12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>⏰ Service Hours</div>
            <p style={{ color: '#6B5844', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Lunch: 12:00 PM – 3:00 PM<br />
              Dinner: 5:00 PM – 11:30 PM<br />
              Open All 7 Days
            </p>
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#2B1E12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>📞 Private Inquiries</div>
            <p style={{ color: '#6B5844', fontSize: '0.9rem', lineHeight: 1.5 }}>
              Reservations: +39 055 234 5678<br />
              Events: events@bellacucina.it<br />
              WhatsApp: +91 9554079669
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Footer */}
      <footer style={{ background: '#1A120A', color: '#C4B5A5', padding: '3.5rem 2rem 2rem 2rem', textAlign: 'center', fontSize: '0.85rem' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '0.08em', color: '#FFF', marginBottom: '0.75rem' }}>
          BELLA<span style={{ color: '#D97706' }}>CUCINA</span>
        </div>
        <p style={{ maxWidth: '500px', margin: '0 auto 1.5rem auto', color: '#9E8D7C' }}>
          Artisanal Tuscan Gastronomy Reimagined. Built with clean modular React.js architecture by Satyam Web Studio.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
          <a href="#menu" style={{ color: '#C4B5A5', textDecoration: 'none' }}>Chef's Menu</a>
          <a href="#story" style={{ color: '#C4B5A5', textDecoration: 'none' }}>Heritage</a>
          <a href="#reserve" style={{ color: '#C4B5A5', textDecoration: 'none' }}>Book Table</a>
          <button onClick={onInquire} style={{ background: 'transparent', border: 'none', color: '#D97706', fontWeight: 700, cursor: 'pointer' }}>
            Request Similar Website
          </button>
        </div>
        <div style={{ color: '#786858', fontSize: '0.78rem' }}>
          © {new Date().getFullYear()} Bella Cucina Ristorante. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default RestaurantDemo;

import React, { useState } from 'react';
import { Activity, Phone, Calendar, Clock, Check, UserCheck, Shield, Award, Stethoscope, Menu, X } from 'lucide-react';

const HealthcareDemo = ({ onInquire }) => {
  const [department, setDepartment] = useState('cardiology');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [form, setForm] = useState({ doctor: '', date: '2026-11-26', time: '10:00 AM', name: '', phone: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const doctors = {
    cardiology: [
      { name: 'Dr. Sarah Jenkins, MD, FACC', title: 'Chief of Interventional Cardiology', exp: '18 Years Experience', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' },
      { name: 'Dr. Michael Chen, MD', title: 'Cardiac Electrophysiologist', exp: '14 Years Experience', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' }
    ],
    dental: [
      { name: 'Dr. Emily Vance, DDS', title: 'Cosmetic & Restorative Dentistry', exp: '12 Years Experience', image: 'https://images.unsplash.com/photo-1594824813571-638f0263441f?auto=format&fit=crop&w=400&q=80' }
    ],
    neurology: [
      { name: 'Dr. Robert Alpert, MD, PhD', title: 'Professor of Clinical Neurology', exp: '22 Years Experience', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80' }
    ]
  };

  const handleBook = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FFFFFF', color: '#172033' }}>
      {/* Emergency Hotline Header */}
      <div className="demo-top-bar" style={{ background: '#EFF6FF', borderBottom: '1px solid #DBEAFE', padding: '0.6rem 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#1E40AF', flexWrap: 'wrap' }}>
        <div>
          <span>🏥 24/7 Acute Medical Emergency Center: <strong>(800) 456-7890</strong></span>
        </div>
        <div>
          <span>Walk-ins Welcome • State-of-the-Art Diagnostic Center</span>
        </div>
      </div>

      {/* Nav */}
      <header className="demo-navbar-header" style={{ borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#3B82F6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={20} />
          </div>
          <span>CARE<span style={{ color: '#3B82F6' }}>PULSE</span> Health</span>
        </div>
        <div className="demo-desktop-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>
          <a href="#departments" style={{ color: '#64748B', textDecoration: 'none' }}>Departments</a>
          <a href="#doctors" style={{ color: '#64748B', textDecoration: 'none' }}>Physicians</a>
          <a href="#booking" style={{ color: '#64748B', textDecoration: 'none' }}>Book Appointment</a>
        </div>
        <div className="demo-desktop-action">
          <a href="#booking" style={{ background: '#3B82F6', color: '#FFF', padding: '0.55rem 1.35rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}>
            Schedule Visit
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
        <a href="#departments" onClick={() => setMobileMenuOpen(false)}>Departments</a>
        <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>Physicians</a>
        <a href="#booking" onClick={() => setMobileMenuOpen(false)}>Book Appointment</a>
        <a
          href="#booking"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            background: '#3B82F6',
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
          Schedule Visit
        </a>
      </div>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #EFF6FF 100%)', padding: '4rem 2rem', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: '#DBEAFE', color: '#1D4ED8', padding: '0.35rem 0.9rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 700 }}>
            BOARD-CERTIFIED MEDICAL EXCELLENCE
          </span>
          <h1 style={{ fontSize: '2.75rem', fontWeight: 800, color: '#0F172A', marginTop: '0.6rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Compassionate Healthcare For You and Your Family
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '2rem' }}>
            Connecting patients with world-renowned specialists, advanced non-invasive therapies, and transparent electronic health records.
          </p>
          <a href="#booking" style={{ background: '#3B82F6', color: '#FFF', padding: '0.8rem 1.8rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem' }}>
            Book Consultation Online
          </a>
        </div>
      </div>

      {/* Department Tabs & Doctors */}
      <section id="departments" style={{ padding: '3.5rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A' }}>Clinical Specialties</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.25rem' }}>
            {['cardiology', 'dental', 'neurology'].map(dept => (
              <button
                key={dept}
                onClick={() => setDepartment(dept)}
                style={{
                  padding: '0.55rem 1.35rem',
                  borderRadius: '999px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  border: department === dept ? '1px solid #3B82F6' : '1px solid #CBD5E1',
                  background: department === dept ? '#EFF6FF' : '#FFFFFF',
                  color: department === dept ? '#3B82F6' : '#64748B',
                  cursor: 'pointer'
                }}
              >
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {(doctors[department] || []).map((doc, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <img src={doc.image} alt={doc.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A' }}>{doc.name}</h3>
                <div style={{ color: '#3B82F6', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.15rem' }}>{doc.title}</div>
                <div style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '0.2rem' }}>{doc.exp}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div id="booking" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '2.5rem', maxWidth: '650px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '0.3rem' }}>
            Schedule an In-Person or Telehealth Visit
          </h3>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
            Instant electronic confirmation. Zero hold times.
          </p>

          {bookingConfirmed ? (
            <div style={{ background: '#ECFDF5', border: '1px solid #6EE7B7', padding: '1.5rem', borderRadius: '10px', textAlign: 'center', color: '#065F46' }}>
              <Check size={32} color="#10B981" style={{ margin: '0 auto 0.5rem auto' }} />
              <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Consultation Scheduled!</div>
              <p style={{ fontSize: '0.88rem', marginTop: '0.4rem' }}>
                Your visit for <strong>{form.date}</strong> at <strong>{form.time}</strong> has been confirmed. Confirmation details sent to your phone.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBook} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Patient Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Rigby"
                  style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.2rem' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Mobile Phone</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 345-6789"
                  style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.2rem' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Preferred Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
                  style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.2rem' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600 }}>Time Slot</label>
                <select
                  value={form.time}
                  onChange={e => setForm({ ...form, time: e.target.value })}
                  style={{ width: '100%', padding: '0.7rem', borderRadius: '6px', border: '1px solid #CBD5E1', marginTop: '0.2rem' }}
                >
                  <option value="09:00 AM">9:00 AM (Morning)</option>
                  <option value="11:30 AM">11:30 AM (Morning)</option>
                  <option value="02:00 PM">2:00 PM (Afternoon)</option>
                  <option value="04:30 PM">4:30 PM (Evening)</option>
                </select>
              </div>
              <div style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                <button
                  type="submit"
                  style={{ width: '100%', background: '#3B82F6', color: '#FFF', padding: '0.85rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer' }}
                >
                  Confirm Appointment Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Facilities & Diagnostic Capabilities */}
      <section style={{ padding: '5rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ background: '#DBEAFE', color: '#1D4ED8', padding: '0.3rem 0.85rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 700 }}>
            HOSPITAL INFRASTRUCTURE
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem' }}>
            Advanced Facilities Engineered For Life-Saving Precision
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
          {[
            { icon: '🏥', title: 'Level-1 Emergency Trauma Center', desc: 'Staffed 24/7 with dedicated trauma surgeons, triage nurses, and dedicated CT scanners.' },
            { icon: '🔬', title: 'Next-Gen 3T MRI & PET-CT Imaging', desc: 'Ultra-high-definition imaging minimizing radiation exposure while pinpointing micro-lesions.' },
            { icon: '🤖', title: 'Robotic-Assisted Surgical Suites', desc: 'Minimally invasive laparoscopic and robotic systems ensuring faster recovery times.' },
            { icon: '💊', title: 'Automated 24/7 Smart Pharmacy', desc: 'Zero-error robotic prescription dispensing with doorstep delivery for chronic conditions.' }
          ].map((f, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>{f.title}</h3>
              <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Recovery Stories */}
      <section style={{ background: '#F8FAFC', padding: '5rem 2rem', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A' }}>Patient Testimonials & Recovery Stories</h2>
            <p style={{ color: '#64748B', marginTop: '0.4rem' }}>Real journeys from patients whose lives were restored by our team.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { patient: 'Arthur Pendelton, 62', condition: 'Triple Bypass Cardiac Surgery', story: 'Dr. Sarah Jenkins and her cardiac team gave me a second chance at life. The compassionate post-op care was unmatched.' },
              { patient: 'Maya Lin, 34', condition: 'Smile Restoration & Orthodontics', story: 'From the initial digital scan to my final veneers, Dr. Emily Vance treated me like family. I finally smile with absolute confidence.' },
              { patient: 'David Kowalski, 48', condition: 'Advanced Spinal Neurological Therapy', story: 'After months of chronic numbness, Dr. Alpert accurate diagnosis helped me avoid invasive surgery and walk pain-free again.' }
            ].map((st, i) => (
              <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ color: '#F59E0B', marginBottom: '0.75rem' }}>⭐⭐⭐⭐⭐</div>
                <p style={{ color: '#334155', fontSize: '0.92rem', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  "{st.story}"
                </p>
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.85rem' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>{st.patient}</div>
                  <div style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 600 }}>{st.condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Cashless Partners */}
      <section style={{ padding: '3.5rem 2rem', background: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            ACCEPTED HEALTHCARE INSURANCE & CASHLESS PARTNERS
          </span>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '1.5rem', opacity: 0.8 }}>
            <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#1E3A8A' }}>BlueCross BlueShield</span>
            <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#065F46' }}>Aetna Health</span>
            <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#B45309' }}>Cigna Global</span>
            <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#1E40AF' }}>UnitedHealthcare</span>
            <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#7C3AED' }}>Star Health & Allied</span>
          </div>
        </div>
      </section>

      {/* Healthcare Clinic Footer */}
      <footer style={{ background: '#0F172A', color: '#94A3B8', padding: '4rem 2rem 2rem 2rem', borderTop: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              CARE<span style={{ color: '#3B82F6' }}>PULSE</span> Health
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94A3B8' }}>
              World-class clinical specialties, compassionate patient-first care, and transparent healthcare technology developed by Satyam Web Studio.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>Specialty Centers</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li>Interventional Cardiology</li>
              <li>Cosmetic & Restorative Dentistry</li>
              <li>Clinical Neurology & Stroke Unit</li>
              <li>Robotic General Surgery</li>
              <li>Pediatric Critical Care</li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>Emergency Care</div>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
              24/7 Trauma Hotline: <strong>(800) 456-7890</strong>
            </p>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
              WhatsApp Emergency Desk: <strong>+91 9554079669</strong>
            </p>
            <button
              onClick={onInquire}
              style={{ background: '#3B82F6', color: '#FFF', padding: '0.55rem 1.25rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem', border: 'none', cursor: 'pointer', marginTop: '0.75rem' }}
            >
              Request Similar Hospital Website
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1050px', margin: '0 auto', paddingTop: '1.5rem', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© {new Date().getFullYear()} CarePulse Healthcare Network. HIPAA & NABH Compliant Portal.</div>
          <div>Engineered with pure React & Vite by Satyam Web Studio</div>
        </div>
      </footer>
    </div>
  );
};

export default HealthcareDemo;

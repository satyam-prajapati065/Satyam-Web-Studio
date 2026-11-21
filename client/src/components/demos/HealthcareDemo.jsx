import React, { useState } from 'react';
import { Activity, Phone, Calendar, Clock, Check, UserCheck, Shield, Award, Stethoscope } from 'lucide-react';

const HealthcareDemo = ({ onInquire }) => {
  const [department, setDepartment] = useState('cardiology');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [form, setForm] = useState({ doctor: '', date: '2026-11-26', time: '10:00 AM', name: '', phone: '' });

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
      <div style={{ background: '#EFF6FF', borderBottom: '1px solid #DBEAFE', padding: '0.6rem 2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#1E40AF', flexWrap: 'wrap' }}>
        <div>
          <span>🏥 24/7 Acute Medical Emergency Center: <strong>(800) 456-7890</strong></span>
        </div>
        <div>
          <span>Walk-ins Welcome • State-of-the-Art Diagnostic Center</span>
        </div>
      </div>

      {/* Nav */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 2rem', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#3B82F6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={20} />
          </div>
          <span>CARE<span style={{ color: '#3B82F6' }}>PULSE</span> Health</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>
          <a href="#departments">Departments</a>
          <a href="#doctors">Physicians</a>
          <a href="#booking">Book Appointment</a>
        </div>
        <a href="#booking" style={{ background: '#3B82F6', color: '#FFF', padding: '0.55rem 1.35rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.88rem' }}>
          Schedule Visit
        </a>
      </header>

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
    </div>
  );
};

export default HealthcareDemo;

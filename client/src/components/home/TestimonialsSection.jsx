import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

const TestimonialsSection = ({ testimonials = [] }) => {
  // CRITICAL REQUIREMENT FROM PROMPT:
  // "Testimonials: Create a section that remains hidden until genuine testimonials are added through the admin dashboard. Do not generate fake client reviews."
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section" id="testimonials">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Client Feedback</span>
          </div>
          <h2 className="section-title">
            Genuine Client Testimonials
          </h2>
          <p className="section-desc">
            Direct reviews from business founders and teams who partnered with Satyam Web Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3">
          {testimonials.map((t) => (
            <div key={t._id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{t.content}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                {t.avatar ? (
                  <img src={t.avatar} alt={t.clientName} style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-blue-soft)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    {t.clientName.charAt(0)}
                  </div>
                )}
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{t.clientName}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role} {t.company && `• ${t.company}`}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

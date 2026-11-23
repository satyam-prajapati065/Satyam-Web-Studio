import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, Megaphone, Cpu, ShoppingBag, Shirt, Utensils,
  Hotel, GraduationCap, Activity, Home, Dumbbell, Sparkles,
  LayoutDashboard, Flame, ArrowRight
} from 'lucide-react';

const CategoriesShowcase = ({ categories = [] }) => {
  // Show top 6 featured categories on the home page
  const showcaseCategories = categories.length > 0 ? categories.slice(0, 6) : [
    { name: 'SaaS & Startup', slug: 'saas-startup', description: 'High-conversion software landing pages & product showcases.', templateCount: 3 },
    { name: 'E-commerce & Store', slug: 'e-commerce', description: 'Modern digital storefronts with shopping cart & catalog filters.', templateCount: 3 },
    { name: 'Restaurant & Dining', slug: 'restaurant', description: 'Culinary menus, table reservations & chef highlights.', templateCount: 3 },
    { name: 'Luxury Real Estate', slug: 'real-estate', description: 'Property listings, buy/rent filters & tour scheduling.', templateCount: 3 },
    { name: 'Hospital & Healthcare', slug: 'hospital-healthcare', description: 'Clinical departments, doctor profiles & appointment booking.', templateCount: 3 },
    { name: 'Business & Corporate', slug: 'business-corporate', description: 'Enterprise consulting, partner matrices & strategic solutions.', templateCount: 3 }
  ];

  return (
    <section className="section" id="categories">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Versatile Web Development</span>
          </div>
          <h2 className="section-title">
            Explore 35+ Website Categories I Build
          </h2>
          <p className="section-desc">
            Whatever your industry, I engineer tailored digital platforms featuring custom design, seamless responsiveness, and high conversion rates.
          </p>
        </div>

        {/* Categories Grid (Top 6 Featured Categories) */}
        <div className="grid-3" style={{ marginBottom: '3rem' }}>
          {showcaseCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/templates?category=${cat.slug}`}
              className="card"
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: '3px solid var(--accent-primary)',
                transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="badge badge-blue">
                    {cat.templateCount ? `${cat.templateCount} Templates` : '3 Templates'}
                  </span>
                  <ArrowRight size={16} color="var(--accent-primary)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {cat.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {cat.description || 'Production-ready responsive layouts tailored for your business.'}
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                <span>View Templates</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to browse all 35 categories */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/templates"
            className="btn btn-primary btn-lg"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 2.2rem',
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.25)'
            }}
          >
            <span>Browse All 35 Website Categories</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;

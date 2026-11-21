import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase, Megaphone, Cpu, ShoppingBag, Shirt, Utensils,
  Hotel, GraduationCap, Activity, Home, Dumbbell, Sparkles,
  LayoutDashboard, Flame, ArrowRight
} from 'lucide-react';

const CategoriesShowcase = ({ categories = [] }) => {
  // If categories not yet loaded from backend, show curated list
  const showcaseCategories = categories.length > 0 ? categories.slice(0, 12) : [
    { name: 'SaaS & Startup', slug: 'saas-startup', description: 'High-conversion software landing pages & product showcases.', templateCount: 3 },
    { name: 'Fashion & E-Commerce', slug: 'fashion-store', description: 'Modern storefronts with shopping cart & catalog filters.', templateCount: 4 },
    { name: 'Restaurant & Dining', slug: 'restaurant', description: 'Culinary menus, table reservations & chef highlights.', templateCount: 2 },
    { name: 'Luxury Real Estate', slug: 'real-estate', description: 'Property listings, buy/rent filters & tour scheduling.', templateCount: 3 },
    { name: 'Hospital & Healthcare', slug: 'hospital-healthcare', description: 'Clinical departments, doctor profiles & appointment booking.', templateCount: 2 },
    { name: 'Business & Corporate', slug: 'business-corporate', description: 'Enterprise consulting, partner matrices & strategic solutions.', templateCount: 3 },
    { name: 'Dashboard & Admin Panels', slug: 'dashboard-admin-panel', description: 'Data analytics, KPI metrics & administrative interfaces.', templateCount: 2 },
    { name: 'Gym & Athletic Clubs', slug: 'gym-fitness', description: 'Class timetables, membership plans & trainer showcases.', templateCount: 2 },
    { name: 'Education & LMS', slug: 'education-lms', description: 'Online course catalogs, syllabus modules & student dashboards.', templateCount: 2 },
    { name: 'Boutique Hotels & Resorts', slug: 'hotel-resort', description: 'Room availability, amenity tours & reservation funnels.', templateCount: 2 },
    { name: 'Creative Personal Portfolio', slug: 'personal-portfolio', description: 'Developer portfolios, project showcases & resume integration.', templateCount: 2 },
    { name: 'High-Converting Landing Pages', slug: 'landing-pages', description: 'Single-page product launches & targeted lead magnets.', templateCount: 3 }
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
            Explore 30+ Website Categories I Build
          </h2>
          <p className="section-desc">
            Whatever your industry, I engineer tailored digital platforms featuring custom design, seamless responsiveness, and high conversion rates.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
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
                borderLeft: '3px solid var(--accent-primary)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="badge badge-blue">
                    {cat.templateCount ? `${cat.templateCount} Templates` : 'Available'}
                  </span>
                  <ArrowRight size={16} color="var(--accent-primary)" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {cat.name}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {cat.description}
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
                <span>View Templates</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to view all 35 categories */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/templates" className="btn btn-outline btn-lg">
            <span>Browse All 35 Website Categories</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;

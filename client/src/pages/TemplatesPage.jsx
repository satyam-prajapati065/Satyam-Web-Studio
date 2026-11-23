import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Search, Filter, Eye, Sparkles, Layers,
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  ArrowUpDown, X, Check, MessageSquare, Folder, Grid
} from 'lucide-react';
import api from '../services/api';

const TemplatesPage = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured');
  const [loading, setLoading] = useState(true);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const scrollContainerRef = useRef(null);

  const scrollCategories = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Read ?category= query param on load
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = params.get('category');
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [location.search]);

  // Fetch categories & templates
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const catRes = await api.get('/categories');
        if (catRes.data?.data) {
          setCategories(catRes.data.data);
        }

        let url = `/templates?sort=${sortOption}`;
        if (selectedCategory && selectedCategory !== 'all') {
          url += `&category=${selectedCategory}`;
        }
        if (searchQuery.trim()) {
          url += `&search=${encodeURIComponent(searchQuery.trim())}`;
        }

        const tplRes = await api.get(url);
        if (tplRes.data?.data) {
          setTemplates(tplRes.data.data);
        }
      } catch (err) {
        console.error('Error fetching templates:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, searchQuery, sortOption]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortOption('featured');
  };

  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Top Banner */}
      <section className="section section-soft-blue" style={{ padding: '4rem 0 3rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Interactive Template Library</span>
          </div>
          <h1 className="section-title">
            Explore Website Templates & Demos
          </h1>
          <p className="section-desc">
            Discover production-ready website templates across 35+ categories. Preview live interactive demos across desktop, tablet, and mobile views.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '2.5rem' }}>
        {/* Modern Unified Command Card */}
        <div className="filter-search-card">
          {/* Top Row: Search Input + Category Dropdown + Sort Dropdown */}
          <div className="filter-search-top-row">
            {/* Search Input */}
            <div className="filter-search-input-box">
              <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search by industry, technology, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'var(--text-muted)' }}
                  title="Clear search"
                  type="button"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Dropdown Filters Group */}
            <div className="filter-controls-group">
              {/* Category Quick Select Dropdown */}
              <div className="filter-select-wrapper">
                <Folder size={16} color="var(--accent-primary)" style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }} />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{ paddingLeft: '2.4rem' }}
                >
                  <option value="all">📁 All Industries ({categories.reduce((acc, c) => acc + (c.templateCount || 1), 0)})</option>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name} ({cat.templateCount || 1})
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} color="var(--text-muted)" style={{ position: 'absolute', right: '12px', pointerEvents: 'none' }} />
              </div>

              {/* Sort Select Dropdown */}
              <div className="filter-select-wrapper">
                <ArrowUpDown size={15} color="var(--accent-primary)" style={{ position: 'absolute', left: '12px', pointerEvents: 'none' }} />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  style={{ paddingLeft: '2.4rem' }}
                >
                  <option value="featured">Featured First</option>
                  <option value="title-asc">Alphabetical (A-Z)</option>
                  <option value="title-desc">Alphabetical (Z-A)</option>
                  <option value="oldest">Oldest First</option>
                </select>
                <ChevronDown size={15} color="var(--text-muted)" style={{ position: 'absolute', right: '12px', pointerEvents: 'none' }} />
              </div>

              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="btn btn-outline btn-sm"
                  style={{ height: '48px', padding: '0 1rem', gap: '0.4rem', color: 'var(--color-danger)', borderColor: 'rgba(239, 68, 68, 0.3)' }}
                  type="button"
                >
                  <X size={15} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Bottom Row: Sleek Category Pills Ribbon or Expandable Grid */}
          <div className="category-ribbon-section">
            <div className="category-ribbon-header">
              <div className="category-ribbon-title">
                <Sparkles size={14} color="var(--accent-primary)" />
                <span>Categories ({categories.length}):</span>
              </div>

              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="category-toggle-expand-btn"
                type="button"
                title={showAllCategories ? 'Collapse to single row' : 'Show all categories in grid'}
              >
                <Grid size={13} />
                <span>{showAllCategories ? 'Collapse Row' : `View All (${categories.length})`}</span>
                {showAllCategories ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              </button>
            </div>

            {/* Smooth Ribbon with Left/Right Arrows */}
            {!showAllCategories ? (
              <div className="category-ribbon-row">
                <button
                  onClick={() => scrollCategories('left')}
                  className="category-nav-arrow"
                  aria-label="Scroll left"
                  type="button"
                  title="Scroll Left"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="category-scroll-strip" ref={scrollContainerRef}>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`category-pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    type="button"
                  >
                    All Categories ({categories.reduce((acc, c) => acc + (c.templateCount || 1), 0)})
                  </button>

                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`category-pill-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
                      type="button"
                    >
                      {cat.name} {cat.templateCount > 0 && `(${cat.templateCount})`}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => scrollCategories('right')}
                  className="category-nav-arrow"
                  aria-label="Scroll right"
                  type="button"
                  title="Scroll Right"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            ) : (
              /* Expanded Clean Tag Cloud Grid */
              <div className="category-expanded-grid">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`category-pill-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                  type="button"
                >
                  All Categories ({categories.reduce((acc, c) => acc + (c.templateCount || 1), 0)})
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`category-pill-btn ${selectedCategory === cat.slug ? 'active' : ''}`}
                    type="button"
                  >
                    {cat.name} {cat.templateCount > 0 && `(${cat.templateCount})`}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active Filters Display & Count */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Showing <strong>{templates.length}</strong> website templates
            {selectedCategory !== 'all' && (
              <span> in <strong style={{ color: 'var(--accent-primary)' }}>{categories.find(c => c.slug === selectedCategory)?.name || selectedCategory}</strong></span>
            )}
          </div>

          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={clearFilters}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <X size={14} /> Reset Filters
            </button>
          )}
        </div>

        {/* Templates Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Loading templates...</div>
          </div>
        ) : templates.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-color)' }}>
            <Layers size={40} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No templates matched your filter</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Try clearing your search query or selecting a different category.</p>
            <button onClick={clearFilters} className="btn btn-primary">
              View All Templates
            </button>
          </div>
        ) : (
          <div className="grid-3">
            {templates.map((tpl) => (
              <div
                key={tpl.templateId || tpl._id}
                className="card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Thumbnail (Clickable Link to Detail Page) */}
                <Link
                  to={`/templates/${tpl.slug || tpl._id}`}
                  style={{
                    position: 'relative',
                    height: '220px',
                    overflow: 'hidden',
                    background: '#F8FAFC',
                    display: 'block',
                    cursor: 'pointer'
                  }}
                  title={`View ${tpl.title} Specifications`}
                >
                  <img
                    src={tpl.thumbnail}
                    alt={tpl.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform var(--transition-normal)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <span className="badge badge-blue" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)' }}>
                    {tpl.category}
                  </span>
                  <span className="badge" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(15, 23, 42, 0.75)', color: '#FFFFFF', backdropFilter: 'blur(4px)', fontSize: '0.7rem' }}>
                    {tpl.templateId}
                  </span>
                </Link>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <Link to={`/templates/${tpl.slug || tpl._id}`} style={{ textDecoration: 'none' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {tpl.title}
                    </h3>
                  </Link>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '1.25rem', flex: 1 }}>
                    {tpl.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {(tpl.techStack || ['React.js', 'Vite']).slice(0, 3).map((tech, i) => (
                      <span key={i} className="badge badge-purple" style={{ fontSize: '0.72rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="template-card-actions">
                    <Link
                      to={tpl.demoUrl || `/demo/${tpl.demoSlug || tpl.slug}`}
                      className="btn btn-outline btn-sm"
                      style={{ padding: '0.55rem 0.5rem', fontSize: '0.82rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}
                    >
                      <Eye size={15} />
                      <span>Live Demo</span>
                    </Link>

                    <a
                      href={`https://wa.me/919554079669?text=${encodeURIComponent(`Hello Satyam! I want to get a website designed based on your "${tpl.title}" template (${tpl.category}). Please share pricing and details.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ padding: '0.55rem 0.5rem', fontSize: '0.82rem', whiteSpace: 'nowrap', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}
                    >
                      <MessageSquare size={14} fill="#FFFFFF" color="#25D366" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesPage;

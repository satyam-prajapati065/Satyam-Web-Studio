import React from 'react';
import { Smartphone, Layout, FileCode2, Search, Zap, Server, Sparkles } from 'lucide-react';

const WhyChooseMe = () => {
  const points = [
    {
      icon: Smartphone,
      title: 'Responsive & Mobile-First',
      desc: 'Tested across smartphones, tablets, laptops, and ultra-wide screens to ensure a flawless user experience everywhere.'
    },
    {
      icon: Layout,
      title: 'Modern UI/UX Design',
      desc: 'Clean aesthetics, elegant typography, intuitive navigation, and subtle animations that elevate your brand perception.'
    },
    {
      icon: FileCode2,
      title: 'Clean, Maintainable Code',
      desc: 'Handcrafted React components and modular CSS without heavy bloated frameworks, ensuring long-term maintainability.'
    },
    {
      icon: Search,
      title: 'SEO-Friendly Structure',
      desc: 'Semantic HTML markup, meta tags, and structured open-graph data engineered to rank effectively on search engines.'
    },
    {
      icon: Zap,
      title: 'Fast Performance & Core Vitals',
      desc: 'Lightning-fast bundle loading via Vite, lazy-loaded media assets, and optimal 90+ Google PageSpeed scores.'
    },
    {
      icon: Server,
      title: 'Deployment & Hosting Support',
      desc: 'End-to-end production deployment on Vercel, Netlify, Render, or custom VPS with SSL encryption and DNS setup.'
    }
  ];

  return (
    <section className="section section-alt" id="why-choose-me">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>The Satyam Web Studio Difference</span>
          </div>
          <h2 className="section-title">
            Why Partner With Me For Your Website?
          </h2>
          <p className="section-desc">
            You deal directly with me — the developer and architect — ensuring clear communication, rapid turnaround, and zero agency middlemen markup.
          </p>
        </div>

        {/* Grid */}
        <div className="grid-3">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-blue-soft)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.45rem' }}>
                    {pt.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;

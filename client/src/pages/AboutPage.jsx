import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, CheckCircle2, Award, Zap, Heart, Terminal,
  Send, ArrowRight, ShieldCheck, Laptop, Globe
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div style={{ paddingBottom: '5rem' }}>
      {/* Hero Header */}
      <section className="section section-soft-blue" style={{ padding: '4.5rem 0 3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="section-subtitle">
            <Code2 size={14} />
            <span>Developer Profile & Philosophy</span>
          </div>
          <h1 className="section-title">
            About Satyam Prajapati & Satyam Web Studio
          </h1>
          <p className="section-desc">
            "Your Vision. My Code. Your Digital Success." I design and develop modern, responsive, high-performance websites that help businesses build their digital presence and grow online.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div className="grid-desktop-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left: Bio & Story */}
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              The Mind Behind The Code
            </span>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginTop: '0.5rem', marginBottom: '1.25rem' }}>
              Full-Stack Developer Dedicated to Digital Craftsmanship
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Hello! I am <strong>Satyam Prajapati</strong>, a Web Developer and React.js specialist operating under the freelance agency brand <strong>Satyam Web Studio</strong>.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Too many businesses end up with slow, cookie-cutter websites loaded down with 40+ conflicting plugins, poor mobile formatting, and zero attention to conversion psychology. My mission is the exact opposite: to engineer bespoke, blazing-fast Single Page Applications and full-stack web platforms using the proven MERN stack (MongoDB, Express, React, Node.js).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-primary)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Custom Coded Architecture</div>
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>3-7 Days</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Rapid Project Turnaround</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/templates" className="btn btn-primary">
                <span>Explore Template Library</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Start a Project</span>
              </Link>
            </div>
          </div>

          {/* Right: Technical Blueprint Card */}
          <div className="card" style={{ padding: '2.5rem', background: '#FFFFFF', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Terminal size={22} color="var(--accent-primary)" />
              <span>Core Development Principles</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>Zero Bloatware or Fragile Page-Builders</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '2px' }}>
                    Every component is crafted cleanly in React with modular CSS. This means your website loads in under 1 second, with minimal code overhead.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>Mobile-First & Touch Intuitive</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '2px' }}>
                    Over 70% of modern web traffic originates on smartphones. Every layout is obsessively tuned for mobile viewports, touch targets, and responsive images.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>Direct Collaboration</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '2px' }}>
                    No account managers or delegated offshore subcontractors. You communicate directly with Satyam throughout design, development, and post-launch.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <CheckCircle2 size={20} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>Complete IP & Code Handover</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: '2px' }}>
                    You own 100% of your source code, assets, database, and repository upon project completion. No proprietary lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, CheckCircle2, Terminal, Layers, Cpu, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section section-soft-blue" style={{ paddingTop: '4rem', paddingBottom: '5rem', overflow: 'hidden' }}>
      <div className="container">
        <div className="grid-desktop-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }}>
          {/* Left Column: Headline & CTAs */}
          <div>
            {/* Top pill badge */}
            <div className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={14} />
              <span>Full-Stack Web & React.js Developer</span>
            </div>

            {/* Big Headline */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.65rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              color: 'var(--text-primary)'
            }}>
              Building Digital Experiences That Make Businesses{' '}
              <span className="gradient-text">Stand Out.</span>
            </h1>

            {/* Sub-text */}
            <p style={{
              fontSize: '1.18rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.25rem',
              maxWidth: '560px'
            }}>
              From stunning landing pages to powerful e-commerce platforms, I turn ideas into beautiful, functional digital experiences. Operating under <strong>Satyam Web Studio</strong>.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link to="/templates" className="btn btn-primary btn-lg">
                <span>Explore My Work</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                <span>Start a Project</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--accent-primary)" />
                <span>100% Custom Code (No Bloated Themes)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--accent-primary)" />
                <span>Mobile & Desktop Responsive</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="var(--accent-primary)" />
                <span>Production-Ready Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Visual & Floating Badges */}
          <div style={{ position: 'relative' }}>
            {/* Background Soft Glow Circles */}
            <div style={{
              position: 'absolute',
              top: '-15%',
              right: '-15%',
              width: '320px',
              height: '320px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 70%, transparent 100%)',
              filter: 'blur(40px)',
              zIndex: 0
            }} />

            {/* Code Window Card */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              background: '#FFFFFF',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-xl)',
              overflow: 'hidden'
            }}>
              {/* Window Controls Header */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderBottom: '1px solid var(--border-color)',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }} />
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>
                  SatyamWebStudio.jsx
                </div>
                <div style={{ width: '28px' }} />
              </div>

              {/* Code Content */}
              <div style={{ padding: '1.5rem', fontFamily: 'var(--font-code)', fontSize: '0.85rem', lineHeight: 1.7, background: '#FAFCFF' }}>
                <div><span style={{ color: '#8B5CF6' }}>const</span> <span style={{ color: '#2563EB', fontWeight: 600 }}>developer</span> = &#123;</div>
                <div style={{ paddingLeft: '1.25rem' }}>name: <span style={{ color: '#059669' }}>'Satyam Prajapati'</span>,</div>
                <div style={{ paddingLeft: '1.25rem' }}>brand: <span style={{ color: '#059669' }}>'Satyam Web Studio'</span>,</div>
                <div style={{ paddingLeft: '1.25rem' }}>specialties: [<span style={{ color: '#059669' }}>'React.js'</span>, <span style={{ color: '#059669' }}>'Node.js'</span>, <span style={{ color: '#059669' }}>'MERN'</span>],</div>
                <div style={{ paddingLeft: '1.25rem' }}>tagline: <span style={{ color: '#059669' }}>'Your Vision. My Code.'</span>,</div>
                <div style={{ paddingLeft: '1.25rem' }}>turnaround: <span style={{ color: '#D97706' }}>'3 to 7 Days'</span>,</div>
                <div style={{ paddingLeft: '1.25rem' }}>responsive: <span style={{ color: '#2563EB' }}>true</span>,</div>
                <div style={{ paddingLeft: '1.25rem' }}>deliverQuality: () =&gt; <span style={{ color: '#2563EB' }}>'Premium'</span></div>
                <div>&#125;;</div>
                <div style={{ marginTop: '0.8rem', color: '#64748B' }}>// Ready to build high-performance web experiences</div>
                <div><span style={{ color: '#8B5CF6' }}>export default</span> developer;</div>
              </div>

              {/* Terminal Stats Footer */}
              <div style={{
                background: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-color)',
                padding: '0.85rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                  <span style={{ fontWeight: 600, color: 'var(--color-success)' }}>Available for Projects</span>
                </div>
                <span>React 18 + Vite 6 Ready</span>
              </div>
            </div>

            {/* Floating Badge 1: React.js */}
            <div className="animate-float hero-badge-floating" style={{
              position: 'absolute',
              top: '-18px',
              left: '-15px',
              background: '#FFFFFF',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '0.65rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 2
            }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                <Code2 size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tech Stack</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>React.js + Vite</div>
              </div>
            </div>

            {/* Floating Badge 2: Performance Score */}
            <div className="animate-float hero-badge-floating" style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-10px',
              background: '#FFFFFF',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '0.65rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 2,
              animationDelay: '1.5s'
            }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                <Sparkles size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Performance</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-success)' }}>98+ Google Lighthouse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

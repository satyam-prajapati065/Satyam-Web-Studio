import React, { useState } from 'react';
import { Briefcase, ChevronRight, BarChart2, ShieldCheck, Globe, CheckCircle2, ArrowRight, Menu, X } from 'lucide-react';

const CorporateDemo = ({ onInquire }) => {
  const [calculatorBudget, setCalculatorBudget] = useState(5000);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: '#FFFFFF', color: '#172033' }}>
      {/* Executive Nav */}
      <header className="demo-navbar-header" style={{ borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}>
        <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>
          VANGUARD<span style={{ color: '#3B82F6' }}>PARTNERS</span>
        </div>
        <div className="demo-desktop-links" style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 600, color: '#64748B' }}>
          <a href="#practices" style={{ color: '#64748B', textDecoration: 'none' }}>Practices</a>
          <a href="#insights" style={{ color: '#64748B', textDecoration: 'none' }}>Insights</a>
          <a href="#calculator" style={{ color: '#64748B', textDecoration: 'none' }}>Advisory Estimator</a>
        </div>
        <div className="demo-desktop-action">
          <button
            onClick={onInquire}
            style={{ background: '#0F172A', color: '#FFF', padding: '0.6rem 1.4rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.88rem', border: 'none', cursor: 'pointer' }}
          >
            Engage Advisory
          </button>
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
        <a href="#practices" onClick={() => setMobileMenuOpen(false)}>Practices</a>
        <a href="#insights" onClick={() => setMobileMenuOpen(false)}>Insights</a>
        <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Advisory Estimator</a>
        <button
          onClick={() => { setMobileMenuOpen(false); onInquire && onInquire(); }}
          style={{
            background: '#0F172A',
            color: '#FFF',
            padding: '0.75rem',
            borderRadius: '6px',
            fontWeight: 600,
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
            width: '100%'
          }}
        >
          Engage Advisory
        </button>
      </div>

      {/* Hero */}
      <section style={{ padding: '5rem 2.5rem 4rem 2.5rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          STRATEGIC ENTERPRISE ADVISORY & CAPITAL
        </span>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0F172A', marginTop: '0.6rem', marginBottom: '1.25rem', lineHeight: 1.15 }}>
          Unlocking Sustainable Value Through Data-Driven Corporate Strategy
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#64748B', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          We partner with institutional leaders and rapid-growth market entrants to navigate cross-border capital allocation, digital modernization, and enterprise restructuring.
        </p>
        <button
          onClick={onInquire}
          style={{ background: '#3B82F6', color: '#FFF', padding: '0.85rem 2rem', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer' }}
        >
          Schedule Executive Briefing
        </button>
      </section>

      {/* Practices Matrix */}
      <section id="practices" style={{ background: '#F8FAFC', padding: '4rem 2.5rem', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '2.5rem' }}>Core Advisory Practices</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
            {[
              { title: 'Capital Allocation & M&A', desc: 'Rigorous financial modeling, due diligence support, and post-merger integration roadmaps.' },
              { title: 'Enterprise Digital Modernization', desc: 'Migrating legacy monolith software into agile cloud-native microservices and modern APIs.' },
              { title: 'Risk Governance & Compliance', desc: 'Structuring international operations to conform with SOC2, GDPR, and dynamic market frameworks.' }
            ].map((p, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Estimator Widget */}
      <section id="calculator" style={{ padding: '4rem 2.5rem', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: '16px', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Strategic Scope Estimator</h3>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Adjust investment tier to preview estimated sprint velocity and team allocation.</p>

          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '0.5rem' }}>
              <span>Target Advisory Scope</span>
              <span style={{ color: '#3B82F6' }}>${calculatorBudget.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="20000"
              step="1000"
              value={calculatorBudget}
              onChange={e => setCalculatorBudget(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#3B82F6' }}
            />
          </div>

          <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '8px', fontSize: '0.88rem', color: '#475569', marginBottom: '1.5rem' }}>
            ✓ Includes dedicated Strategic Director, Weekly Stakeholder Steering, and Full Technical Deliverables Handover.
          </div>

          <button
            onClick={onInquire}
            style={{ width: '100%', background: '#0F172A', color: '#FFF', padding: '0.8rem', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
          >
            Request Engagement Proposal
          </button>
        </div>
      </section>

      {/* Global Transaction Milestones */}
      <section style={{ background: '#0F172A', color: '#FFFFFF', padding: '4.5rem 2rem' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            PROVEN INSTITUTIONAL TRACK RECORD
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.4rem', marginBottom: '3rem' }}>
            Decisive Value Creation Across Regulated Markets
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#38BDF8' }}>$4.8B+</div>
              <div style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '0.3rem' }}>Cumulative Deal Valuation</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#38BDF8' }}>180+</div>
              <div style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '0.3rem' }}>Cross-Border Mandates</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#38BDF8' }}>24</div>
              <div style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '0.3rem' }}>Global Market Jurisdictions</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#38BDF8' }}>98.4%</div>
              <div style={{ fontSize: '0.9rem', color: '#94A3B8', marginTop: '0.3rem' }}>Client Retainer Extension</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Partners */}
      <section id="insights" style={{ padding: '5rem 2rem', maxWidth: '1050px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            EXECUTIVE DIRECTORS
          </span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem' }}>
            Senior Advisory Partners
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { name: 'Marcus Sterling', role: 'Senior Managing Partner', bio: 'Former Goldman Sachs M&A Executive. Advises cross-border PE acquisitions across the Americas and EMEA.' },
            { name: 'Dr. Evelyn Cross', role: 'Head of Enterprise Transformation', bio: 'Ph.D. in Operations Research, MIT. Leads digital modernizations and cloud-native architecture scaling.' },
            { name: 'Tariq Al-Mansoor', role: 'Partner, Sovereign Wealth & Infrastructure', bio: 'Over 20 years structuring sovereign capital deployments, renewable energy infrastructure, and REITs.' }
          ].map((partner, i) => (
            <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
                {partner.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>{partner.name}</h3>
              <div style={{ fontSize: '0.85rem', color: '#3B82F6', fontWeight: 600, marginBottom: '0.75rem' }}>{partner.role}</div>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{partner.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Footer */}
      <footer style={{ background: '#0B1120', color: '#94A3B8', padding: '4rem 2rem 2rem 2rem', borderTop: '1px solid #1E293B' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem' }}>
              VANGUARD<span style={{ color: '#38BDF8' }}>PARTNERS</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94A3B8' }}>
              Institutional enterprise advisory, corporate restructuring, and capital allocations engineered by Satyam Web Studio.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>Global Hubs</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li>New York: 250 Park Avenue, NY 10177</li>
              <li>London: 30 St Mary Axe, London EC3A</li>
              <li>Singapore: Marina Bay Financial Tower</li>
              <li>Dubai: DIFC Gate Precinct 4</li>
            </ul>
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem' }}>Engage Advisory</div>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '0.75rem' }}>
              Schedule a confidential partner consultation:
            </p>
            <button
              onClick={onInquire}
              style={{ background: '#38BDF8', color: '#0F172A', padding: '0.65rem 1.4rem', borderRadius: '6px', fontWeight: 800, fontSize: '0.85rem', border: 'none', cursor: 'pointer' }}
            >
              Inquire via WhatsApp (+91 9554079669)
            </button>
          </div>
        </div>

        <div style={{ maxWidth: '1050px', margin: '0 auto', paddingTop: '1.5rem', borderTop: '1px solid #1E293B', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>© {new Date().getFullYear()} Vanguard Partners International Ltd. All rights reserved.</div>
          <div>Engineered with pure React & Vite by Satyam Web Studio</div>
        </div>
      </footer>
    </div>
  );
};

export default CorporateDemo;

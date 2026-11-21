import React from 'react';
import { MessageSquare, Layout, Code2, CheckCircle, Rocket, Sparkles } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      num: '01',
      icon: MessageSquare,
      title: 'Discuss Your Idea',
      desc: 'We review your business vision, target audience, preferred style, and required features via chat or call.'
    },
    {
      num: '02',
      icon: Layout,
      title: 'Plan & Design',
      desc: 'I map out the user journey, wireframes, color scheme, and typography aligned with modern light aesthetics.'
    },
    {
      num: '03',
      icon: Code2,
      title: 'Development',
      desc: 'Clean, modular React.js code and Express/MongoDB backend APIs are engineered to bring the design to life.'
    },
    {
      num: '04',
      icon: CheckCircle,
      title: 'Testing & Optimization',
      desc: 'Rigorous cross-device testing across smartphones, tablets, and browsers, ensuring peak speed and zero bugs.'
    },
    {
      num: '05',
      icon: Rocket,
      title: 'Deployment & Hosting',
      desc: 'Your website is launched live to production with SSL security, custom domain linkage, and full source code handover.'
    }
  ];

  return (
    <section className="section" id="process">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Structured Execution</span>
          </div>
          <h2 className="section-title">
            How We Work Together
          </h2>
          <p className="section-desc">
            A transparent, 5-phase delivery process with continuous progress updates from kickoff to launch.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '1.5rem',
          position: 'relative'
        }}>
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="card"
                style={{
                  position: 'relative',
                  padding: '1.75rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--accent-primary-light)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {st.num}
                </div>

                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-blue-soft)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Icon size={20} />
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {st.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {st.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

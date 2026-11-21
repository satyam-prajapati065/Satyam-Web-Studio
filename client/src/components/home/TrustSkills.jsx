import React from 'react';
import { Layers, Server, Database, Globe, GitBranch, Cpu, Code } from 'lucide-react';

const TrustSkills = () => {
  const skills = [
    { name: 'React.js', category: 'Frontend', color: '#3B82F6' },
    { name: 'JavaScript (ES6+)', category: 'Core Language', color: '#F59E0B' },
    { name: 'Node.js', category: 'Backend Engine', color: '#10B981' },
    { name: 'Express.js', category: 'REST API', color: '#64748B' },
    { name: 'MongoDB', category: 'NoSQL Database', color: '#059669' },
    { name: 'REST APIs', category: 'Architecture', color: '#8B5CF6' },
    { name: 'HTML5 & CSS3', category: 'Semantic Web', color: '#EC4899' },
    { name: 'Git & GitHub', category: 'Version Control', color: '#1E293B' }
  ];

  return (
    <section style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Production-Tested Technology Stack
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '1rem',
          alignItems: 'center'
        }}>
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 0.75rem',
                textAlign: 'center',
                boxShadow: 'var(--shadow-xs)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = skill.color;
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
              }}
            >
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                {skill.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {skill.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSkills;

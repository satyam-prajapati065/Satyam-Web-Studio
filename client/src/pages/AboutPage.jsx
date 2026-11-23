import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import {
  Code2, CheckCircle2, Award, Zap, Heart, Terminal,
  Send, ArrowRight, ShieldCheck, Laptop, Globe,
  MapPin, Mail, Phone, Github, Instagram, Layers,
  Clock, Sparkles, UserCheck, MessageSquare
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div style={{ paddingBottom: '6rem' }}>
      <SEO
        title="About Satyam Prajapati | Full-Stack Web & MERN Developer"
        description="Learn more about Satyam Prajapati. Passionate full-stack MERN & React.js developer based in Delhi NCR, crafting high-performance, custom web applications."
        keywords="About Satyam Prajapati, Satyam Prajapati Bio, Full Stack Developer Delhi NCR, React.js Expert India, MERN Stack Developer, Web Developer Portfolio"
      />

      {/* Top Banner */}
      <section className="section section-soft-blue" style={{ padding: '4.5rem 0 3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Developer Profile & Experience</span>
          </div>
          <h1 className="section-title">
            About Satyam Prajapati
          </h1>
          <p className="section-desc">
            "Your Vision. My Code. Your Digital Success." I design and build high-performance, custom-coded web platforms that help modern businesses and brands win online.
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: '3.5rem' }}>
        {/* Main Profile Grid: Photo & Bio */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
        >
          {/* Left: Professional Photo Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                maxWidth: '380px',
                width: '100%',
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '1.25rem',
                border: '1px solid #E2E8F0',
                boxShadow: '0 20px 40px -15px rgba(59, 130, 246, 0.12)'
              }}
            >
              {/* Photo Container with Rounded Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '420px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: '#F1F5F9'
                }}
              >
                <img
                  src="/images/satyam-prajapati.jpg"
                  alt="Satyam Prajapati - Full-Stack Web & MERN Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  onError={(e) => {
                    // Fallback to provided CDN if local path fails
                    e.currentTarget.src = 'https://instagram.fdel76-1.fna.fbcdn.net/v/t51.82787-19/905201880_18038458625696615_2057451624742644234_n.jpg?_nc_cat=110&_nc_map=urlgen_bucketless&ig_cache_key=GNhI9DVnI67u4RVAAArqVRNaiY0cbmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=BKhfNQhg68QQ7kNvwGIHWYJ&_nc_oc=AdpGHDNnywt_GZY2hy1TXu_GKJS8lPgWHy1iZ31EYYoPh98iWZoekkSt0dWyTeD9J0c&_nc_zt=24&_nc_ht=instagram.fdel76-1.fna&_nc_gid=nxYpnsGDh6xOVbq1fFIueg&_nc_ss=7b6a8&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQSzt3ocgn-zuVnwbXazjK4K4Yz87uI7T0s_YOtpCXf2JQ&oe=6B0A2621';
                  }}
                />

                {/* Floating Availability Pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  <span>Available for Projects</span>
                </div>

                {/* Location Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <MapPin size={13} color="#38BDF8" />
                  <span>Delhi NCR, India</span>
                </div>
              </div>

              {/* Developer Info Card Header */}
              <div style={{ padding: '1.25rem 0.5rem 0.5rem 0.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                  Satyam Prajapati
                </h3>
                <div style={{ color: '#3B82F6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Full-Stack Web & MERN Developer
                </div>

                {/* Contact Quick Strip */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <a
                    href="https://wa.me/919554079669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ textDecoration: 'none', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                  >
                    <MessageSquare size={15} fill="#FFFFFF" color="#25D366" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="mailto:satyamprajapati065@gmail.com"
                    className="btn btn-outline btn-sm"
                    style={{ textDecoration: 'none', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                  >
                    <Mail size={15} />
                    <span>Email Me</span>
                  </a>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9' }}>
                  <a
                    href="https://github.com/satyam-prajapati065"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href="https://www.instagram.com/satyam_prajapati065"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#E1306C', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                  <a
                    href="tel:+919554079669"
                    style={{ color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}
                  >
                    <Phone size={15} /> +91 9554079669
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Detailed Story & Philosophy */}
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              The Mind Behind The Code
            </span>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              Dedicated to Pure MERN Craftsmanship & Measurable Business Growth
            </h2>

            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Hello! I am <strong>Satyam Prajapati</strong>, an independent full-stack web developer and software consultant based in Delhi NCR. Through my studio, <strong>Satyam Web Studio</strong>, I help startups, businesses, clinics, cafes, agencies, and entrepreneurs transform their vision into high-performance web realities.
            </p>

            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Too many clients end up with bloated, slow WordPress sites stuffed with 45+ conflicting plugins that break after updates. My approach is entirely different: <strong>I hand-craft custom Single Page Applications (SPAs) and full-stack solutions</strong> using React.js, Vite, Node.js, and MongoDB. The result? Sub-second loading speed, zero plugin bloat, 100% responsive layouts, and clean code that you own completely.
            </p>

            {/* Quick Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: '#F8FAFC', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#3B82F6' }}>105+</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginTop: '0.2rem' }}>Website Templates</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10B981' }}>100%</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginTop: '0.2rem' }}>Custom Coded</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#8B5CF6' }}>35+</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginTop: '0.2rem' }}>Industries Served</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.25rem 1rem', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F59E0B' }}>3-7 Days</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginTop: '0.2rem' }}>Turnaround Time</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/templates" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontWeight: 700 }}>
                <span>Explore 105 Templates</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline" style={{ padding: '0.85rem 1.75rem', fontWeight: 600 }}>
                <span>Start a Project with Me</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Arsenal & Core Stack */}
        <section style={{ marginBottom: '5rem', background: '#F8FAFC', borderRadius: '20px', padding: '3.5rem 2.5rem', border: '1px solid #E2E8F0' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Technical Arsenal</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem' }}>Modern Full-Stack Technologies I Use</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.4rem' }}>Battle-tested web technologies chosen for maximum performance, security, and developer productivity.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'React.js & Vite', tag: 'Frontend Engineering', desc: 'Component-driven Single Page Applications with lightning-fast Vite compilation and sub-second renders.' },
              { title: 'Node.js & Express.js', tag: 'Backend & REST APIs', desc: 'Secure, lightweight server APIs with robust routing, rate limiting, and business validation layers.' },
              { title: 'MongoDB & Mongoose', tag: 'Database Architecture', desc: 'High-availability document database with aggregation pipelines, indexes, and Atlas cloud clusters.' },
              { title: 'Pure Modular CSS', tag: 'Zero-Bloat Styling', desc: 'Clean, semantic CSS variables and fluid responsive layouts without heavy utility bloat.' },
              { title: 'Vercel, Render & Netlify', tag: 'Cloud Deployment', desc: 'Global CDN distribution, automated CI/CD pipelines, SSL encryption, and high-uptime hosting.' },
              { title: 'Technical SEO & Speed', tag: 'Organic Visibility', desc: 'Semantic HTML5, OpenGraph tags, sitemaps, robots.txt, and 95+ PageSpeed Core Web Vitals.' }
            ].map((tech, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, background: '#EFF6FF', color: '#1D4ED8', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                  {tech.tag}
                </span>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginTop: '0.85rem', marginBottom: '0.4rem' }}>{tech.title}</h4>
                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.55, margin: 0 }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Clients Work Directly With Satyam */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Client Advantage</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0F172A', marginTop: '0.4rem' }}>Why Work Directly With Me?</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginTop: '0.4rem' }}>The agility of an expert solo developer with the quality standards of a top-tier digital agency.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <UserCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Direct 1-on-1 Communication</h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>No middlemen, junior interns, or offshore handoffs. You communicate directly with Satyam at every stage of wireframing, coding, and launch.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F0FDF4', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Clock size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Rapid 3-7 Days Turnaround</h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>Agencies take 2-3 months to deliver a simple business site. I ship clean, production-ready websites in 3 to 7 days without cutting corners.</p>
            </div>

            <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>100% IP & Code Handover</h3>
              <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>You own your domain, cloud accounts, GitHub repository, and source code 100%. No hidden monthly lock-in or proprietary traps.</p>
            </div>
          </div>
        </section>

        {/* Direct Connect Banner */}
        <section
          style={{
            background: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '20px',
            padding: '3.5rem 2.5rem',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, background: 'rgba(59, 130, 246, 0.2)', color: '#60A5FA', padding: '0.3rem 0.9rem', borderRadius: '999px', display: 'inline-block', marginBottom: '1.25rem' }}>
              🤝 Let's Build Something Great Together
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.25, marginBottom: '1rem' }}>
              Have an Idea or Website Project?
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Whether you need a high-converting landing page, an e-commerce storefront, or a custom MERN web application — reach out directly to discuss your requirements.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919554079669?text=Hello%20Satyam!%20I%20visited%20your%20About%20page%20and%20want%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{
                  padding: '0.9rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <MessageSquare size={18} fill="#FFFFFF" color="#25D366" />
                <span>Chat on WhatsApp (+91 9554079669)</span>
              </a>

              <Link
                to="/contact"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255, 255, 255, 0.35)',
                  padding: '0.9rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(4px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                }}
              >
                <Mail size={18} />
                <span>Send Message via Form</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

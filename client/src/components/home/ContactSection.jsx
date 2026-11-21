import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare, Phone, Mail, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const ContactSection = () => {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Small Business / Startup',
    websiteType: 'Business Website',
    budget: '$500 - $1,500',
    projectDetails: '',
    templateName: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Auto-prefill if query parameters passed (?template=... or ?service=... or ?package=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const templateParam = params.get('template');
    const serviceParam = params.get('service');
    const packageParam = params.get('package');

    if (templateParam) {
      setFormData(prev => ({
        ...prev,
        templateName: templateParam,
        websiteType: 'Template Customization',
        projectDetails: `Hello Satyam, I would like to build a website based on your "${templateParam}" template.`
      }));
    } else if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        websiteType: serviceParam,
        projectDetails: `Hello Satyam, I am interested in discussing your ${serviceParam} service.`
      }));
    } else if (packageParam) {
      setFormData(prev => ({
        ...prev,
        websiteType: packageParam,
        projectDetails: `Hello Satyam, I would like to proceed with the "${packageParam}" package.`
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const targetNumber = '919554079669';

    // Format clean structured WhatsApp message
    const lines = [
      `*New Project Inquiry - Satyam Web Studio*`,
      ``,
      `*Client Name:* ${formData.name}`,
      `*Email:* ${formData.email || 'Not provided'}`,
      `*Phone / WhatsApp:* ${formData.phone}`,
      `*Business Type:* ${formData.businessType}`,
      `*Website Type:* ${formData.websiteType}`
    ];

    if (formData.templateName) {
      lines.push(`*Selected Template:* ${formData.templateName}`);
    }

    lines.push(`*Estimated Budget:* ${formData.budget}`);
    lines.push(``);
    lines.push(`*Project Details & Goals:*`);
    lines.push(formData.projectDetails);

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(fullMessage)}`;

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSuccessMessage('Redirecting to WhatsApp to send your inquiry directly to Satyam Prajapati...');

    // Open WhatsApp directly with all details pre-filled!
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Direct WhatsApp & Call Inquiries</span>
          </div>
          <h2 className="section-title">
            Start Your Website Project Today
          </h2>
          <p className="section-desc">
            Direct communication only. Fill in your requirements below to start an instant WhatsApp chat, or call Satyam directly.
          </p>
        </div>

        <div className="grid-desktop-2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
          {/* Left Column: Direct Info & WhatsApp Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="card" style={{ background: 'var(--bg-blue-soft)', border: '1px solid var(--accent-primary-light)' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Instant Connect With Satyam Prajapati
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Have a new project or need a quote immediately? Call directly or start a WhatsApp chat for a prompt response.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href="https://wa.me/919554079669?text=Hello%20Satyam%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-block btn-lg"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
                >
                  <MessageSquare size={20} fill="#FFFFFF" color="#25D366" />
                  <span>Chat on WhatsApp (+91 95540 79669)</span>
                </a>

                <div className="contact-call-actions">
                  <a
                    href="tel:9554079669"
                    className="btn btn-outline"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', fontWeight: 700, padding: '0.75rem 0.6rem', fontSize: '0.88rem' }}
                  >
                    <Phone size={15} color="var(--accent-primary)" />
                    <span>Call: 9554079669</span>
                  </a>
                  <a
                    href="tel:6307164317"
                    className="btn btn-outline"
                    style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.45rem', fontWeight: 700, padding: '0.75rem 0.6rem', fontSize: '0.88rem' }}
                  >
                    <Phone size={15} color="var(--accent-primary)" />
                    <span>Call: 6307164317</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Metrics */}
            <div className="card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Email</div>
                    <a href="mailto:satyamprajapati065@gmail.com" style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      satyamprajapati065@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-success)' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Typical Response Time</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Within 15 to 30 Minutes on WhatsApp
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Availability</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Delhi NCR, India • Available Worldwide
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Inquiry Form */}
          <div className="card contact-card-padding">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              WhatsApp Project Inquiry Form
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Fill this quick form and click below — it will automatically compose and open your WhatsApp chat with all details formatted!
            </p>

            {successMessage && (
              <div style={{
                background: 'var(--color-success-bg)',
                border: '1px solid var(--color-success)',
                color: 'var(--color-success)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                <CheckCircle2 size={18} />
                <span>{successMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Business / Industry</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Small Business / Local">Small Business / Local</option>
                    <option value="Startup / Tech">Startup / Tech</option>
                    <option value="Corporate / Enterprise">Corporate / Enterprise</option>
                    <option value="Retail / E-commerce">Retail / E-commerce</option>
                    <option value="Individual / Professional">Individual / Professional</option>
                    <option value="Agency / Partner">Agency / Partner</option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Website Type</label>
                  <select
                    name="websiteType"
                    value={formData.websiteType}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="E-commerce Store">E-commerce Store</option>
                    <option value="SaaS Web Application">SaaS Web Application</option>
                    <option value="Template Customization">Template Customization</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Other Custom Solution">Other Custom Solution</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Estimated Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Landing Page)</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Business Website)</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 (E-commerce / App)</option>
                    <option value="₹1,00,000+">₹1,00,000+ (Custom Platform)</option>
                    <option value="$300 - $600 (USD)">$300 - $600 USD (International)</option>
                    <option value="$600 - $1,500 (USD)">$600 - $1,500 USD (International)</option>
                    <option value="$1,500+ (USD)">$1,500+ USD (International)</option>
                  </select>
                </div>
              </div>

              {formData.templateName && (
                <div className="form-group">
                  <label className="form-label">Selected Website Template</label>
                  <input
                    type="text"
                    name="templateName"
                    readOnly
                    value={formData.templateName}
                    className="form-control"
                    style={{ background: 'var(--bg-blue-soft)', fontWeight: 600, color: 'var(--accent-primary)' }}
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Project Details & Goals *</label>
                <textarea
                  name="projectDetails"
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Describe your website needs: pages required, features, design references, target launch date..."
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-whatsapp btn-block btn-lg"
                style={{ fontSize: '1.05rem', padding: '0.95rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem' }}
              >
                <MessageSquare size={20} fill="#FFFFFF" color="#25D366" />
                <span>{loading ? 'Opening WhatsApp...' : 'Send Inquiry Directly on WhatsApp'}</span>
              </button>
              <div style={{ textAlign: 'center', fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                🟢 <strong>Direct WhatsApp:</strong> Click karne par aapke saare project details seedhe Satyam ke WhatsApp par pre-filled bhej diye jaayenge.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

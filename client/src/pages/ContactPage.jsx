import React from 'react';
import ContactSection from '../components/home/ContactSection';
import { Sparkles } from 'lucide-react';

const ContactPage = () => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* Top Banner */}
      <section className="section section-soft-blue" style={{ padding: '4.5rem 0 2rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="section-subtitle">
            <Sparkles size={14} />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="section-title">
            Let's Discuss Your Next Website
          </h1>
          <p className="section-desc">
            Have a project in mind, need a template customized, or want a custom quotation? Fill in the form below or message me directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Embed Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;

import React from 'react';
import SEO from '../components/common/SEO';
import ContactSection from '../components/home/ContactSection';
import { Sparkles } from 'lucide-react';

const ContactPage = () => {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <SEO
        title="Contact Satyam Prajapati | Hire Full-Stack & React Web Developer"
        description="Get in touch with Satyam Prajapati for website projects, quotations, and consultations. Direct WhatsApp chat and phone calling available. Fast response within 15-30 minutes."
        keywords="Contact Satyam Web Studio, Hire Web Developer Delhi, Satyam Prajapati Phone, Web Developer WhatsApp, Website Quotation India"
      />
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

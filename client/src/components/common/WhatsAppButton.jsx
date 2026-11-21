import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappUrl = 'https://wa.me/919554079669?text=Hello%20Satyam%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project.';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 990,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem'
      }}
    >
      {/* Quick Direct Call Button */}
      <a
        href="tel:9554079669"
        className="btn btn-outline"
        style={{
          background: '#FFFFFF',
          padding: '0.6rem 1rem',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontWeight: 700,
          fontSize: '0.84rem',
          border: '1.5px solid var(--accent-primary)',
          color: 'var(--accent-primary)'
        }}
        aria-label="Direct Call to Satyam Prajapati"
        title="Call Satyam: +91 95540 79669"
      >
        <Phone size={15} />
        <span>Call: +91 95540 79669</span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          padding: '0.85rem 1.35rem',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          fontWeight: 700,
          fontSize: '0.94rem',
          textDecoration: 'none'
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={20} fill="#FFFFFF" color="#25D366" />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;

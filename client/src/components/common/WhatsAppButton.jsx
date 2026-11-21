import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import '../../styles/whatsapp-button.css';

const WhatsAppButton = () => {
  const whatsappUrl = 'https://wa.me/919554079669?text=Hello%20Satyam%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20project.';

  return (
    <div className="floating-actions-container">
      {/* Quick Direct Call Button (Desktop/Tablet) */}
      <a
        href="tel:9554079669"
        className="floating-call-btn"
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
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 95540 79669)"
      >
        <MessageSquare size={20} fill="#FFFFFF" color="#25D366" />
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;

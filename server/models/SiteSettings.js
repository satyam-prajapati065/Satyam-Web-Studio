import mongoose from 'mongoose';

const siteSettingsSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      default: 'Satyam Web Studio'
    },
    developerName: {
      type: String,
      default: 'Satyam Prajapati'
    },
    professionalTitle: {
      type: String,
      default: 'Web Developer | React.js Developer'
    },
    tagline: {
      type: String,
      default: 'Your Vision. My Code. Your Digital Success.'
    },
    supportingText: {
      type: String,
      default: 'I design and develop modern, responsive, high-performance websites that help businesses build their digital presence and grow online.'
    },
    email: {
      type: String,
      default: 'satyamprajapati065@gmail.com'
    },
    phone: {
      type: String,
      default: '+91 95540 79669 / +91 63071 64317'
    },
    whatsappNumber: {
      type: String,
      default: '919554079669'
    },
    whatsappPrefillMessage: {
      type: String,
      default: 'Hello Satyam! I am interested in building a website with Satyam Web Studio.'
    },
    location: {
      type: String,
      default: 'Delhi NCR, India (Available Worldwide)'
    },
    socialLinks: {
      github: { type: String, default: 'https://github.com/satyam-prajapati065' },
      linkedin: { type: String, default: 'https://www.linkedin.com/in/satyam-prajapati-94a25831a/' },
      twitter: { type: String, default: '' },
      instagram: { type: String, default: '' }
    },
    workingHours: {
      type: String,
      default: 'Mon - Sat: 9:00 AM - 8:00 PM IST'
    },
    noticeText: {
      type: String,
      default: 'Hosting, domain, and external third-party API costs are billed separately based on client preference.'
    }
  },
  { timestamps: true }
);

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);
export default SiteSettings;

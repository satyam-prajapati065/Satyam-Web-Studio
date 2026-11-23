import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title,
  description,
  keywords,
  canonical
}) => {
  const location = useLocation();

  useEffect(() => {
    // Default Fallbacks
    const defaultTitle = 'Satyam Web Studio | Best Freelance Web Developer & Website Design in Delhi NCR';
    const defaultDesc = 'Satyam Web Studio by Satyam Prajapati — Top-rated Full-Stack Web & React.js Developer in Delhi NCR, India. Custom websites, e-commerce, and 35+ interactive templates.';
    const defaultKeywords = 'Satyam Web Studio, Satyam Prajapati, Freelance Web Developer Delhi NCR, Best Website Developer India, React Developer Delhi, MERN Stack Freelancer';

    // Update document title
    const fullTitle = title
      ? (title.includes('Satyam Web Studio') ? title : `${title} | Satyam Web Studio`)
      : defaultTitle;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update meta description & keywords
    setMetaTag('description', description || defaultDesc);
    setMetaTag('keywords', keywords || defaultKeywords);

    // Update OpenGraph
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description || defaultDesc, true);
    setMetaTag('og:url', `https://satyamwebstudio.netlify.app${location.pathname}`, true);

    // Update Twitter
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description || defaultDesc);

    // Update Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || `https://satyamwebstudio.netlify.app${location.pathname}`);
  }, [title, description, keywords, canonical, location.pathname]);

  return null;
};

export default SEO;

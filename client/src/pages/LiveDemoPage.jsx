import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeviceFrame from '../components/common/DeviceFrame';
import api from '../services/api';

// Genuine interactive category demo components
import SaaSDemo from '../components/demos/SaaSDemo';
import EcommerceDemo from '../components/demos/EcommerceDemo';
import RestaurantDemo from '../components/demos/RestaurantDemo';
import RealEstateDemo from '../components/demos/RealEstateDemo';
import HealthcareDemo from '../components/demos/HealthcareDemo';
import CorporateDemo from '../components/demos/CorporateDemo';
import DashboardDemo from '../components/demos/DashboardDemo';
import VersatileDemo from '../components/demos/VersatileDemo';

const LiveDemoPage = () => {
  const { demoSlug } = useParams();
  const navigate = useNavigate();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTemplateInfo = async () => {
      try {
        const res = await api.get(`/templates/${demoSlug}`);
        if (res.data?.success) {
          setTemplate(res.data.data);
        }
      } catch (err) {
        // If not found by slug, create a fallback virtual template matching the slug
        setTemplate({
          title: `${demoSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Showcase`,
          category: demoSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
          demoSlug
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTemplateInfo();
    window.scrollTo(0, 0);
  }, [demoSlug]);

  const handleInquire = () => {
    const text = `Hello Satyam! I am exploring your live demo: "${template?.title || demoSlug}". I want to get a similar website built for my brand. Please share pricing and details.`;
    window.open(`https://wa.me/919554079669?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Render genuinely distinct interactive demo component matching the category
  const renderDemoContent = () => {
    const slug = (demoSlug || '').toLowerCase();

    if (slug.includes('saas') || slug.includes('startup')) {
      return <SaaSDemo onInquire={handleInquire} />;
    }
    if (slug.includes('ecommerce') || slug.includes('fashion') || slug.includes('store') || slug.includes('retail')) {
      return <EcommerceDemo onInquire={handleInquire} />;
    }
    if (slug.includes('restaurant') || slug.includes('cafe') || slug.includes('food')) {
      return <RestaurantDemo onInquire={handleInquire} />;
    }
    if (slug.includes('real-estate') || slug.includes('property') || slug.includes('rental')) {
      return <RealEstateDemo onInquire={handleInquire} />;
    }
    if (slug.includes('health') || slug.includes('clinic') || slug.includes('dental') || slug.includes('hospital')) {
      return <HealthcareDemo onInquire={handleInquire} />;
    }
    if (slug.includes('dashboard') || slug.includes('admin')) {
      return <DashboardDemo onInquire={handleInquire} />;
    }
    if (slug.includes('corporate') || slug.includes('business') || slug.includes('agency')) {
      return <CorporateDemo onInquire={handleInquire} />;
    }

    // Dynamic tailored engine for other categories
    const categoryName = template?.category || demoSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return <VersatileDemo category={categoryName} onInquire={handleInquire} />;
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '10rem 0', color: 'var(--text-muted)' }}>
        <h2>Loading Live Preview Environment...</h2>
      </div>
    );
  }

  return (
    <DeviceFrame
      templateTitle={template?.title || 'Live Website Demo'}
      templateCategory={template?.category || 'Showcase'}
      onBookTemplate={handleInquire}
      demoUrl={template?.demoUrl}
    >
      {renderDemoContent()}
    </DeviceFrame>
  );
};

export default LiveDemoPage;

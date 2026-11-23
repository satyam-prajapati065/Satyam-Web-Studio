import React, { useEffect, useState } from 'react';
import api from '../services/api';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import TrustSkills from '../components/home/TrustSkills';
import CategoriesShowcase from '../components/home/CategoriesShowcase';
import FeaturedTemplates from '../components/home/FeaturedTemplates';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseMe from '../components/home/WhyChooseMe';
import WorkProcess from '../components/home/WorkProcess';
import PricingPreview from '../components/home/PricingPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [featuredTemplates, setFeaturedTemplates] = useState([]);
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, tplRes, svcRes, prcRes, tstRes] = await Promise.all([
          api.get('/categories').catch(() => ({ data: { data: [] } })),
          api.get('/templates?featured=true').catch(() => ({ data: { data: [] } })),
          api.get('/services').catch(() => ({ data: { data: [] } })),
          api.get('/pricing').catch(() => ({ data: { data: [] } })),
          api.get('/testimonials').catch(() => ({ data: { data: [] } }))
        ]);

        if (catRes.data?.data) setCategories(catRes.data.data);
        if (tplRes.data?.data) setFeaturedTemplates(tplRes.data.data.slice(0, 6));
        if (svcRes.data?.data) setServices(svcRes.data.data.slice(0, 6));
        if (prcRes.data?.data) setPricing(prcRes.data.data);
        if (tstRes.data?.data) setTestimonials(tstRes.data.data);
      } catch (err) {
        console.error('Error fetching homepage data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SEO
        title="Satyam Web Studio | Best Freelance Web Developer & Website Design in Delhi NCR"
        description="Satyam Web Studio by Satyam Prajapati — Top-rated Full-Stack Web & React.js Developer in Delhi NCR, India. Custom websites, e-commerce, modern SaaS web apps, and 35+ interactive website templates."
        keywords="Satyam Web Studio, Satyam Prajapati, Freelance Web Developer Delhi NCR, Best Website Developer India, Hire React Developer Delhi, MERN Stack Developer Freelancer, Custom Website Development"
      />
      <Hero />
      <TrustSkills />
      <CategoriesShowcase categories={categories} />
      <FeaturedTemplates templates={featuredTemplates} />
      <ServicesPreview services={services} />
      <WhyChooseMe />
      <WorkProcess />
      <PricingPreview packages={pricing} />
      {/* TestimonialsSection will only render if genuine testimonials exist in database */}
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TemplatesPage from './pages/TemplatesPage';
import TemplateDetailPage from './pages/TemplateDetailPage';
import LiveDemoPage from './pages/LiveDemoPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      {/* Standalone Live Demo Viewer (With Responsive Device Frame) */}
      <Route path="/demo/:demoSlug" element={<LiveDemoPage />} />

      {/* Main Public Website Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/templates/:identifier" element={<TemplateDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

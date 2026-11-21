import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, Minimize2, ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/device-frame.css';

const DeviceFrame = ({
  children,
  templateTitle = 'Website Preview',
  templateCategory = 'Category',
  onBookTemplate,
  demoUrl
}) => {
  const [device, setDevice] = useState('desktop'); // 'desktop', 'tablet', 'mobile'
  const [isFullscreen, setIsFullscreen] = useState(false);

  const getContainerStyle = () => {
    if (isFullscreen) {
      return {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        background: '#FFFFFF',
        borderRadius: 0,
        border: 'none',
        display: 'flex',
        flexDirection: 'column'
      };
    }

    let maxWidth = '1240px';
    let height = '840px';
    let borderRadius = '16px';

    if (device === 'tablet') {
      maxWidth = '768px';
      height = '880px';
      borderRadius = '20px';
    } else if (device === 'mobile') {
      maxWidth = '390px';
      height = '844px';
      borderRadius = '32px';
    }

    return {
      width: '100%',
      maxWidth,
      height,
      borderRadius,
      transition: 'max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      margin: '0 auto',
      background: '#FFFFFF',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box'
    };
  };

  return (
    <div className="device-frame-wrapper">
      {/* Top Controller Bar */}
      <div className="device-controller-bar">
        {/* Mobile top-row container for small screens */}
        <div className="device-bar-mobile-row1">
          {/* Left Zone: ONLY Templates Back Button */}
          <div className="device-bar-left">
            <Link
              to="/templates"
              className="btn btn-outline btn-sm"
              style={{ padding: '0.45rem 0.85rem', gap: '0.4rem', fontWeight: 600 }}
            >
              <ArrowLeft size={16} />
              <span>Templates</span>
            </Link>
          </div>

          {/* Mobile Fullscreen Button */}
          <div className="device-bar-mobile-fullscreen">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="btn btn-outline btn-sm"
              style={{ padding: '0.45rem 0.75rem' }}
              title={isFullscreen ? 'Exit Fullscreen' : 'Open Fullscreen Preview'}
              type="button"
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              <span>{isFullscreen ? 'Exit' : 'Full Screen'}</span>
            </button>
          </div>
        </div>

        {/* Center Zone: Title, Category, and Inquire on WhatsApp */}
        <div className="device-bar-center">
          <div className="device-center-info">
            <span className="device-center-title" title={templateTitle}>
              {templateTitle}
            </span>
            <span className="device-center-divider">•</span>
            <span className="device-center-cat">
              Category: <strong>{templateCategory}</strong>
            </span>
          </div>

          <button
            onClick={onBookTemplate}
            className="btn btn-whatsapp btn-sm"
            style={{ padding: '0.45rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontWeight: 700 }}
            type="button"
          >
            <MessageSquare size={16} fill="#FFFFFF" color="#25D366" />
            <span>Inquire on WhatsApp</span>
          </button>
        </div>

        {/* Right Zone: Device Switcher & Full Screen (Desktop) */}
        <div className="device-bar-right">
          <div className="device-switcher-pill">
            <button
              onClick={() => setDevice('desktop')}
              className={`device-btn-tab ${device === 'desktop' ? 'active' : ''}`}
              title="Desktop View (100% Full Width)"
              type="button"
            >
              <Monitor size={15} />
              <span>Desktop</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              className={`device-btn-tab ${device === 'tablet' ? 'active' : ''}`}
              title="Tablet View (768px Max Width)"
              type="button"
            >
              <Tablet size={15} />
              <span>Tablet</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`device-btn-tab ${device === 'mobile' ? 'active' : ''}`}
              title="Mobile View (390px iPhone Width)"
              type="button"
            >
              <Smartphone size={15} />
              <span>Mobile</span>
            </button>
          </div>

          <div className="device-desktop-fullscreen">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="btn btn-outline btn-sm"
              style={{ padding: '0.45rem 0.85rem' }}
              title={isFullscreen ? 'Exit Fullscreen' : 'Open Fullscreen Preview'}
              type="button"
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              <span>{isFullscreen ? 'Exit' : 'Full Screen'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="device-preview-area">
        <div style={getContainerStyle()}>
          {/* Mock Browser Header for Realistic Feel */}
          <div style={{
            background: '#F8FAFC',
            borderBottom: '1px solid var(--border-color)',
            padding: '0.6rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            userSelect: 'none',
            flexShrink: 0
          }}>
            {/* Window Dots */}
            <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
            </div>

            {/* URL bar */}
            <div style={{
              flex: 1,
              maxWidth: '460px',
              background: '#FFFFFF',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              padding: '0.25rem 0.85rem',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              <span style={{ color: 'var(--color-success)', fontWeight: 600 }}>https://</span>
              <span>satyamwebstudio.com/demo/{templateCategory.toLowerCase().replace(/[^a-z0-9]/g, '-')}</span>
            </div>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, flexShrink: 0 }}>
              {device === 'desktop' ? '100% Width' : device === 'tablet' ? '768px' : '390px'}
            </div>
          </div>

          {/* Interactive Live Demo Component Viewport */}
          <div
            className={`device-viewport device-${device}`}
            style={{
              flex: 1,
              overflowY: 'auto',
              overflowX: 'hidden',
              position: 'relative',
              background: '#FFFFFF'
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;

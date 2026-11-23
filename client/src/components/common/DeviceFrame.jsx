import React, { useState, useEffect, useRef } from 'react';
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
  // 1. Automatic device detection on initial load:
  // If user is on phone -> 'mobile'
  // If user is on tablet -> 'tablet'
  // If user is on desktop -> 'desktop'
  const detectInitialDevice = () => {
    if (typeof window === 'undefined') return 'desktop';
    const width = window.innerWidth;
    if (width < 640) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  };

  const [device, setDevice] = useState(detectInitialDevice);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const previewAreaRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Measure available width inside preview area for dynamic zoom-out calculation
  useEffect(() => {
    const updateSize = () => {
      if (previewAreaRef.current) {
        setViewportWidth(previewAreaRef.current.clientWidth);
      } else if (typeof window !== 'undefined') {
        setViewportWidth(window.innerWidth);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Target canvas dimensions based on chosen mode
  let targetWidth = 1200;
  let baseHeight = 840;
  let borderRadius = '16px';

  if (device === 'tablet') {
    targetWidth = 768;
    baseHeight = 880;
    borderRadius = '20px';
  } else if (device === 'mobile') {
    targetWidth = 390;
    baseHeight = 844;
    borderRadius = '28px';
  }

  // 2. Zoom-out / Desktop Mode on phone & tablet:
  // When a mobile or tablet user chooses 'desktop' (or tablet),
  // calculate scaleFactor so the entire desktop site fits zoomed-out inside their screen!
  const availableSpace = Math.max(280, viewportWidth - (viewportWidth < 640 ? 16 : 36));
  const isScaling = !isFullscreen && (device !== 'mobile') && (targetWidth > availableSpace);
  const scale = isScaling ? Math.max(0.2, availableSpace / targetWidth) : 1;

  // In scaled desktop mode on phone, calculate generous visible height so full zoomed layout is viewable
  const visibleHeight = isScaling
    ? Math.min(typeof window !== 'undefined' ? window.innerHeight - 200 : 540, 620)
    : baseHeight;
  const targetHeight = isScaling ? Math.round(visibleHeight / scale) : baseHeight;

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
              title="Desktop View (1200px Full Layout)"
              type="button"
            >
              <Monitor size={15} />
              <span>Desktop</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              className={`device-btn-tab ${device === 'tablet' ? 'active' : ''}`}
              title="Tablet View (768px iPad Layout)"
              type="button"
            >
              <Tablet size={15} />
              <span>Tablet</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`device-btn-tab ${device === 'mobile' ? 'active' : ''}`}
              title="Mobile View (390px iPhone Layout)"
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
      <div className="device-preview-area" ref={previewAreaRef}>
        {/* Fullscreen Floating Exit Button */}
        {isFullscreen && (
          <button
            onClick={() => setIsFullscreen(false)}
            style={{
              position: 'fixed',
              top: 16,
              right: 16,
              zIndex: 10001,
              background: 'rgba(15, 23, 42, 0.85)',
              color: '#FFFFFF',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
            type="button"
          >
            <Minimize2 size={16} />
            <span>Exit Fullscreen</span>
          </button>
        )}

        {/* Outer Frame Wrapper: Occupies exact scaled space in DOM flow */}
        <div
          style={{
            width: isFullscreen
              ? '100vw'
              : (isScaling ? `${Math.round(targetWidth * scale)}px` : (device === 'mobile' ? 'min(100%, 390px)' : (device === 'tablet' ? 'min(100%, 768px)' : '100%'))),
            maxWidth: isFullscreen ? '100vw' : (isScaling ? '100%' : `${targetWidth}px`),
            height: isFullscreen
              ? '100vh'
              : (isScaling ? `${Math.round(targetHeight * scale)}px` : `${targetHeight}px`),
            margin: '0 auto',
            position: isFullscreen ? 'fixed' : 'relative',
            top: isFullscreen ? 0 : 'auto',
            left: isFullscreen ? 0 : 'auto',
            zIndex: isFullscreen ? 9999 : 1,
            overflow: 'hidden',
            borderRadius: isFullscreen ? 0 : (isScaling ? '14px' : borderRadius),
            boxShadow: isFullscreen ? 'none' : 'var(--shadow-xl)',
            border: isFullscreen ? 'none' : '1px solid var(--border-color)',
            background: '#FFFFFF',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Inner Scaled Canvas: Renders full desktop/tablet width, zoomed out smoothly */}
          <div
            style={{
              width: isFullscreen ? '100vw' : `${targetWidth}px`,
              height: isFullscreen ? '100vh' : `${targetHeight}px`,
              transform: isScaling ? `scale(${scale})` : 'none',
              transformOrigin: 'top left',
              display: 'flex',
              flexDirection: 'column',
              background: '#FFFFFF',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
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

              {/* Viewport size / Zoom indicator */}
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {isScaling && (
                  <span style={{ background: 'var(--bg-blue-soft)', color: 'var(--accent-primary)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
                    Desktop Mode ({Math.round(scale * 100)}%)
                  </span>
                )}
                <span>{device === 'desktop' ? '1200px' : device === 'tablet' ? '768px' : '390px'}</span>
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
                background: '#FFFFFF',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;

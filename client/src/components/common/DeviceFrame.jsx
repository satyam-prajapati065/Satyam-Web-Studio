import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, Maximize2, Minimize2, ExternalLink, ArrowLeft, Send, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

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

    let width = '100%';
    let height = '820px';
    let borderRadius = '16px';

    if (device === 'tablet') {
      width = '768px';
      height = '900px';
      borderRadius = '20px';
    } else if (device === 'mobile') {
      width = '390px';
      height = '844px';
      borderRadius = '32px';
    }

    return {
      width,
      height,
      borderRadius,
      transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      margin: '0 auto',
      background: '#FFFFFF',
      border: '1px solid var(--border-color)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    };
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column' }}>
      {/* Top Controller Bar */}
      <div style={{
        background: '#FFFFFF',
        borderBottom: '1px solid var(--border-color)',
        padding: '0.75rem 1.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {/* Left: Back button & Template info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/templates" className="btn btn-outline btn-sm">
            <ArrowLeft size={16} />
            <span>Templates</span>
          </Link>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              {templateTitle}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Category: <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{templateCategory}</span>
            </div>
          </div>
        </div>

        {/* Center: Device Switcher Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          background: 'var(--bg-tertiary)',
          padding: '0.3rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-color)'
        }}>
          <button
            onClick={() => setDevice('desktop')}
            className={`btn btn-sm ${device === 'desktop' ? 'btn-primary' : ''}`}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              color: device === 'desktop' ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: device === 'desktop' ? 'var(--shadow-xs)' : 'none'
            }}
            title="Desktop View (100% Full Width)"
          >
            <Monitor size={16} />
            <span style={{ fontSize: '0.85rem' }}>Desktop</span>
          </button>

          <button
            onClick={() => setDevice('tablet')}
            className={`btn btn-sm ${device === 'tablet' ? 'btn-primary' : ''}`}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              color: device === 'tablet' ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: device === 'tablet' ? 'var(--shadow-xs)' : 'none'
            }}
            title="Tablet View (768px Width)"
          >
            <Tablet size={16} />
            <span style={{ fontSize: '0.85rem' }}>Tablet</span>
          </button>

          <button
            onClick={() => setDevice('mobile')}
            className={`btn btn-sm ${device === 'mobile' ? 'btn-primary' : ''}`}
            style={{
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              color: device === 'mobile' ? '#FFFFFF' : 'var(--text-secondary)',
              boxShadow: device === 'mobile' ? 'var(--shadow-xs)' : 'none'
            }}
            title="Mobile View (390px iPhone Width)"
          >
            <Smartphone size={16} />
            <span style={{ fontSize: '0.85rem' }}>Mobile</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="btn btn-outline btn-sm"
            title={isFullscreen ? 'Exit Fullscreen' : 'Open Fullscreen Preview'}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span style={{ display: 'none', md: 'inline' }}>{isFullscreen ? 'Exit' : 'Full Screen'}</span>
          </button>

          <button
            onClick={onBookTemplate}
            className="btn btn-whatsapp btn-sm"
          >
            <MessageSquare size={16} fill="#FFFFFF" color="#25D366" />
            <span>Request on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div style={{
        flex: 1,
        padding: isFullscreen ? 0 : '2rem 1rem 3rem 1rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflowX: 'auto'
      }}>
        <div style={getContainerStyle()}>
          {/* Mock Browser Header for Realistic Feel */}
          <div style={{
            background: '#F8FAFC',
            borderBottom: '1px solid var(--border-color)',
            padding: '0.6rem 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            userSelect: 'none'
          }}>
            {/* Window Dots */}
            <div style={{ display: 'flex', gap: '6px' }}>
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

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {device === 'desktop' ? '100% Width' : device === 'tablet' ? '768px' : '390px'}
            </div>
          </div>

          {/* Interactive Live Demo Component Viewport */}
          <div style={{ flex: 1, overflowY: 'auto', position: 'relative', background: '#FFFFFF' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;

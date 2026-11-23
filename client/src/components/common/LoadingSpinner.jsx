import React from 'react';
import { Sparkles, Code2 } from 'lucide-react';

const LoadingSpinner = ({
  title = 'Loading...',
  subtitle = 'Fetching the latest data from Satyam Web Studio...',
  size = 'md', // 'sm' | 'md' | 'lg'
  inline = false,
  minHeight = '360px'
}) => {
  if (inline) {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.85rem',
          padding: '0.9rem 1.8rem',
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          borderRadius: '999px',
          boxShadow: '0 4px 14px -2px rgba(59, 130, 246, 0.08)'
        }}
      >
        <div style={{ position: 'relative', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2.5px solid #EFF6FF',
              borderTopColor: '#3B82F6',
              animation: 'spinSlow 0.75s linear infinite'
            }}
          />
          <Sparkles size={12} color="#3B82F6" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.2 }}>
            {title}
          </span>
          {subtitle && (
            <span style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.15rem' }}>
              {subtitle}
            </span>
          )}
        </div>
      </div>
    );
  }

  const spinnerDimensions = size === 'lg' ? 68 : size === 'sm' ? 38 : 52;
  const iconSize = size === 'lg' ? 26 : size === 'sm' ? 16 : 20;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: minHeight,
        padding: '3rem 1.5rem',
        textAlign: 'center'
      }}
    >
      {/* Animated Dual Glow Rings */}
      <div
        style={{
          position: 'relative',
          width: `${spinnerDimensions}px`,
          height: `${spinnerDimensions}px`,
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Soft Background Pulse Ring */}
        <div
          style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 70%)',
            animation: 'pulseSubtle 2s infinite ease-in-out'
          }}
        />

        {/* Outer Rotating Track */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '3px solid #E2E8F0',
            borderTopColor: '#3B82F6',
            borderRightColor: '#60A5FA',
            animation: 'spinSlow 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite'
          }}
        />

        {/* Inner Counter-Rotating Ring */}
        <div
          style={{
            position: 'absolute',
            inset: '6px',
            borderRadius: '50%',
            border: '2px dashed #93C5FD',
            borderBottomColor: '#2563EB',
            animation: 'spinSlow 1.6s linear infinite reverse'
          }}
        />

        {/* Center Tech Icon */}
        <div
          style={{
            width: `${spinnerDimensions - 20}px`,
            height: `${spinnerDimensions - 20}px`,
            borderRadius: '50%',
            background: '#EFF6FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3B82F6',
            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.15)'
          }}
        >
          <Code2 size={iconSize} />
        </div>
      </div>

      {/* Main Title */}
      <h3
        style={{
          fontSize: size === 'lg' ? '1.35rem' : '1.15rem',
          fontWeight: 700,
          color: '#0F172A',
          marginBottom: '0.4rem',
          letterSpacing: '-0.01em'
        }}
      >
        {title}
      </h3>

      {/* Subtitle / Description */}
      {subtitle && (
        <p
          style={{
            fontSize: size === 'lg' ? '0.95rem' : '0.88rem',
            color: '#64748B',
            maxWidth: '420px',
            margin: '0 auto 1.25rem auto',
            lineHeight: 1.55
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Modern 3-Dot Pulse Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#3B82F6',
              display: 'inline-block',
              animation: `pulseSubtle 1.2s infinite ease-in-out ${i * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;

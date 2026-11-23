import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [isTouch, setIsTouch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Real mouse coordinates
  const mouse = useRef({ x: -100, y: -100 });
  // Trailing ring coordinates
  const ring = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Disable on touch / mobile devices so native touch isn't disrupted
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Instant positioning for center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    // Interactive element hover detection
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.btn') ||
        target.closest('.card') ||
        target.closest('.category-pill-btn')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // 60-120fps smooth lerp physics for trailing ring
    const render = () => {
      const ease = 0.18; // Smooth fluid trailing factor
      ring.current.x += (mouse.current.x - ring.current.x) * ease;
      ring.current.y += (mouse.current.y - ring.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer Smooth Trailing Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? '48px' : isClicked ? '28px' : '36px',
          height: isHovered ? '48px' : isClicked ? '28px' : '36px',
          borderRadius: '50%',
          border: '1.8px solid #3B82F6',
          backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 999999,
          opacity: visible ? 1 : 0,
          transition: 'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, opacity 0.2s ease, border-color 0.2s ease',
          willChange: 'transform',
          boxShadow: isHovered
            ? '0 0 16px rgba(59, 130, 246, 0.35)'
            : '0 0 6px rgba(59, 130, 246, 0.15)'
        }}
      />

      {/* Center Solid Blue Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isClicked ? '6px' : '10px',
          height: isClicked ? '6px' : '10px',
          borderRadius: '50%',
          backgroundColor: '#3B82F6',
          pointerEvents: 'none',
          zIndex: 1000000,
          opacity: visible ? 1 : 0,
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.2s ease',
          willChange: 'transform',
          boxShadow: '0 0 8px rgba(59, 130, 246, 0.7)'
        }}
      />
    </>
  );
};

export default CustomCursor;

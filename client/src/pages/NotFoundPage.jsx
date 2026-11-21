import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '8rem 1.5rem', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: '5rem', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '1rem' }}>
        404
      </div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
        Page Not Found
      </h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: 1.6, marginBottom: '2rem' }}>
        The page you are looking for may have been moved, renamed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">
        <Home size={18} />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
};

export default NotFoundPage;

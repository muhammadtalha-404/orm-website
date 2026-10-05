import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Logo({ className = '', onClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    e.preventDefault();

    if (location.pathname === '/') {
      if (location.hash) {
        window.history.pushState(null, '', '/');
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className={`logo-brand ${className}`} 
      style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }}
      aria-label="ORM Home"
    >
      <img 
        src="/logo.png" 
        alt="ORM Logo" 
        style={{ 
          height: '56px',
          width: 'auto',
          objectFit: 'contain'
        }} 
      />
    </Link>
  );
}

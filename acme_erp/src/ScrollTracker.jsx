import React, { useEffect, useState } from 'react';

const ScrollTrackerCircle = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercentage(scrolled);
      setIsVisible(scrollTop > window.innerHeight * 0.5);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  const handleClick = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        width: '60px',
        height: '60px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        padding: 0,
      }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ position: 'absolute' }}
        aria-hidden="true"
      >
        <circle stroke="#ccc" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
        <circle
          stroke="#1e5e7e"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: 'stroke-dashoffset 0.2s ease-out',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <span aria-hidden="true" style={{ color: '#1e5e7e', fontSize: '18px', fontWeight: 700 }}>^</span>
    </button>
  );
};

export default ScrollTrackerCircle;

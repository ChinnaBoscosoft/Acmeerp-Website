import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from './components/InlineIcons.jsx';

const ScrollTrackerCircle = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateTracker = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercentage(scrolled);
      setIsVisible(scrollTop > window.innerHeight * 0.5);
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateTracker);
    };

    updateTracker();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = () => {
    setTimeout(() => scrollToSection('hero'), 100);
  };

  return (
    <div
      onClick={handleClick}
      aria-hidden={!isVisible}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        width: '60px',
        height: '60px',
        cursor: isVisible ? 'pointer' : 'default',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.92)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ position: 'absolute' }}
      >
        <circle
          stroke="#ccc"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
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
      <ArrowUpIcon size={18} />
    </div>
  );
};

export default ScrollTrackerCircle;

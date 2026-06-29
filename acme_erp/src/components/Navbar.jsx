import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import Acme_logo from '../assets/img/acme-erp-logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let frameId = null;

    const updateScrolled = () => {
      frameId = null;
      const nextScrolled = window.scrollY > 0;
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrolled);
    };

    updateScrolled();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light shadow-sm ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container-fluid px-3 px-md-4">
        <div className="navbar-brand d-flex align-items-center">
          <Link className="logo-container" to="/#hero" onClick={handleMenuClose} style={{ cursor: 'pointer' }}>
            <img src={Acme_logo} alt="ACME Logo" className="logo-svg" width="150" height="40" fetchPriority="high" />
          </Link>
        </div>

        <button className="navbar-toggler border-0 p-0" onClick={toggleMenu} aria-label="Toggle navigation" type="button">
          <span aria-hidden="true">{isMenuOpen ? 'x' : 'menu'}</span>
        </button>

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link btn btn-link" to="/#hero" onClick={handleMenuClose}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link btn btn-link" to="/#about" onClick={handleMenuClose}>About Us</Link></li>
            <li className="nav-item"><Link className="nav-link btn btn-link" to="/#Functional" onClick={handleMenuClose}>Modules</Link></li>
            <li className="nav-item"><Link className="nav-link btn btn-link" to="/#review" onClick={handleMenuClose}>Customers</Link></li>
            <li className="nav-item"><Link to="/contact-nonprofit-accounting-software" className="nav-link btn btn-link" onClick={handleMenuClose}>Contact</Link></li>
            <li className="nav-item"><Link className="nav-link btn btn-link" to="/#blogpost" onClick={handleMenuClose}>Blog</Link></li>
          </ul>
          <div className="navbar-nav">
            <button
              className={`login-button ${isHovered ? 'hovered' : ''}`}
              onClick={() => {
                handleMenuClose();
                navigate('/login');
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              type="button"
            >
              <span className="login-icon" aria-hidden="true">go</span>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

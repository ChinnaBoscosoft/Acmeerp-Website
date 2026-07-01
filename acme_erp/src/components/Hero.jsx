import React from 'react';
import heroSmall from '../assets/img/hero/nonprofit-accounting-software-dashboard-234.jpg';
import heroMobile from '../assets/img/hero/nonprofit-accounting-software-dashboard-330.jpg';
import heroTablet from '../assets/img/hero/nonprofit-accounting-software-dashboard-480.jpg';
import heroLarge from '../assets/img/hero/nonprofit-accounting-software-dashboard-560.jpg';
import '../css/Hero.css';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from './InlineIcons.jsx';

const Hero = () => {
  const showDecor = typeof window === 'undefined' ? true : window.innerWidth > 767;

  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row px-5 align-items-center hero-row py-5">
          <div className="col-lg-7 col-md-12 pe-lg-5">
            <div className="hero-content">
              <h1 className="welcome-tag mb-3">
                Accounting Software for Nonprofits & NGOs - Simplify Financial Management
              </h1>

              <h2 className="hero-title mb-4">
                Built for <span style={{ color: '#004867' }}>impact</span>
                <br />
                Designed for <span style={{ color: '#004867' }}>clarity</span>
              </h2>

              <p className="hero-description">
                Acme.erp is a complete financial management solution designed for nonprofits, NGOs, and religious institutions. It helps you track donations, manage expenses, handle compliance, and generate accurate reports all in one place.
              </p>
              <p className="hero-description">
                Whether you manage a small charity or a large multi-branch organization, Acme.erp simplifies complex financial processes and improves transparency. With cloud-enabled access and user-friendly tools, your team can stay organized, save time, and focus more on your mission instead of manual work.
              </p>
              <p className="hero-description mb-5">
                Trusted by 1,800+ organizations across India and globally, Acme.erp is built to support growing nonprofit operations with reliability and ease.
              </p>
              <div className="hero-buttons align-items-center d-flex flex-wrap gap-3">
                <div>
                  <Link
                    to="/contact-nonprofit-accounting-software"
                    className="btn btn-primary btn-trial flex items-center gap-2"
                  >
                    <span>Free Trial</span>
                    <ArrowLeftIcon className="arrow-btn-herosec text-lg" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex justify-content-center">
              <img
                src={heroSmall}
                srcSet={`${heroSmall} 234w, ${heroMobile} 330w, ${heroTablet} 480w, ${heroLarge} 560w`}
                sizes="(max-width: 575px) 278px, (max-width: 767px) 330px, (max-width: 1199px) 420px, 480px"
                alt="nonprofit accounting software dashboard showing donation and expense tracking"
                className="hero-image"
                width="560"
                height="560"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {showDecor ? (
        <div className="hero-bg-elements" aria-hidden="true">
          <div className="floating-circle circle-1" />
          <div className="floating-circle circle-2" />
          <div className="circle-3"></div>
          <div className="square-1"></div>
          <div className="ring-2"></div>
          <div className="ring-1"></div>
          <div className="bg-wave"></div>
          <div className="bg-gradient-circle"></div>
        </div>
      ) : null}
    </section>
  );
};

export default Hero;


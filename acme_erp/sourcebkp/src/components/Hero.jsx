import React from 'react';
import hero from '../assets/img/hero/nonprofit-accounting-software-dashboard.png';
import '../css/Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row px-5 align-items-center min-vh-100 py-5">
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
                <Link
                  to="/contact-nonprofit-accounting-software"
                  className="btn btn-primary btn-trial flex items-center gap-2"
                >
                  <span>Free Trial</span>
                  <span className="arrow-btn-herosec text-lg" aria-hidden="true">{'->'}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex justify-content-center">
              <img
                src={hero}
                alt="nonprofit accounting software dashboard showing donation and expense tracking"
                className="hero-image"
                width="626"
                height="626"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                sizes="(max-width: 767px) 234px, (max-width: 1199px) 320px, 626px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bg-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="circle-3"></div>
        <div className="square-1"></div>
        <div className="ring-2"></div>
        <div className="ring-1"></div>
        <div className="bg-wave"></div>
        <div className="bg-gradient-circle"></div>
      </div>
    </section>
  );
};

export default Hero;


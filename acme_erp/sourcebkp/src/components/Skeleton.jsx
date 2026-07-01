import React from 'react';
import '../css/Skeleton.css';

// Base Skeleton component
export const Skeleton = ({ width, height, borderRadius = '8px', className = '' }) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width: width || '100%',
        height: height || '20px',
        borderRadius,
      }}
    />
  );
};

// Header Skeleton
export const HeaderSkeleton = () => {
  return (
    <header className="header-top text-white py-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center contact-info">
              <div className="d-flex align-items-center me-4 mb-1">
                <Skeleton height="20px" width="20px" borderRadius="50%" className="me-2" />
                <Skeleton height="16px" width="160px" />
              </div>
              <div className="d-flex align-items-center mb-1">
                <Skeleton height="20px" width="20px" borderRadius="50%" className="me-2" />
                <Skeleton height="16px" width="220px" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-md-end justify-content-start">
              <Skeleton height="16px" width="110px" className="me-3" />
              <div className="social-icons d-flex">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Skeleton
                    key={item}
                    height="28px"
                    width="28px"
                    borderRadius="50%"
                    className="me-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Navbar Skeleton
export const NavbarSkeleton = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container-fluid px-3 px-md-4">
        <div className="navbar-brand d-flex align-items-center">
          <div className="logo-container">
            <Skeleton height="40px" width="40px" borderRadius="50%" />
          </div>
        </div>
        <div className="navbar-toggler border-0 p-0">
          <Skeleton height="24px" width="32px" borderRadius="4px" />
        </div>
        <div className="navbar-collapse show">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item} className="nav-item mx-2 my-1 my-lg-0">
                <Skeleton height="20px" width="70px" borderRadius="12px" />
              </li>
            ))}
          </ul>
          <div className="navbar-nav">
            <Skeleton height="36px" width="100px" borderRadius="18px" />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Skeleton
export const HeroSkeleton = () => {
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row px-5 align-items-center min-vh-100 py-5">
          <div className="col-lg-7 col-md-12 pe-lg-5">
            <Skeleton height="24px" width="60%" className="mb-3" />
            <Skeleton height="64px" width="90%" className="mb-4" />
            <Skeleton height="64px" width="80%" className="mb-4" />
            <Skeleton height="20px" width="100%" className="mb-2" />
            <Skeleton height="20px" width="95%" className="mb-2" />
            <Skeleton height="20px" width="85%" className="mb-5" />
            <Skeleton height="48px" width="180px" borderRadius="24px" />
          </div>
          <div className="col-lg-5">
            <div className="d-flex justify-content-center">
              <Skeleton height="500px" width="500px" borderRadius="12px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Data/Stats Section Skeleton
export const DataSkeleton = () => {
  return (
    <div className="stats-section">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="stat-box">
          <Skeleton height="60px" width="120px" className="mb-3" />
          <Skeleton height="20px" width="150px" />
        </div>
      ))}
    </div>
  );
};

// Cards Section Skeleton
export const CardsSkeleton = () => {
  return (
    <div className="container py-5 cards-container relative">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="200px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="70%" className="mx-auto mb-3" />
        <Skeleton height="48px" width="60%" className="mx-auto mb-3" />
        <Skeleton height="20px" width="80%" className="mx-auto mb-2" />
        <Skeleton height="20px" width="75%" className="mx-auto" />
      </div>
      <div className="acme-cards">
        <div className="cards-scroll-wrapper">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card text-center">
              <div className="card-body">
                <Skeleton height="80px" width="80px" borderRadius="50%" className="mx-auto mb-3" />
                <Skeleton height="24px" width="80%" className="mx-auto mb-3" />
                <Skeleton height="16px" width="100%" className="mb-2" />
                <Skeleton height="16px" width="95%" className="mb-2" />
                <Skeleton height="16px" width="90%" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// About Section Skeleton
export const AboutSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <Skeleton height="24px" width="40%" className="mb-3" />
          <Skeleton height="48px" width="90%" className="mb-4" />
          <Skeleton height="20px" width="100%" className="mb-2" />
          <Skeleton height="20px" width="95%" className="mb-2" />
          <Skeleton height="20px" width="90%" className="mb-4" />
          <Skeleton height="48px" width="180px" borderRadius="24px" />
        </div>
        <div className="col-lg-6">
          <Skeleton height="400px" width="100%" borderRadius="12px" />
        </div>
      </div>
    </div>
  );
};

// Review Section Skeleton
export const ReviewSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="200px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="60%" className="mx-auto" />
      </div>
      <div className="row">
        {[1, 2, 3].map((item) => (
          <div key={item} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <Skeleton height="60px" width="60px" borderRadius="50%" className="mb-3" />
                <Skeleton height="20px" width="80%" className="mb-2" />
                <Skeleton height="16px" width="100%" className="mb-2" />
                <Skeleton height="16px" width="90%" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Map Section Skeleton
export const MapSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="200px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="70%" className="mx-auto" />
      </div>
      <Skeleton height="500px" width="100%" borderRadius="12px" />
    </div>
  );
};

// Functional Section Skeleton
export const FunctionalSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="200px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="70%" className="mx-auto" />
      </div>
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-md-4 mb-4">
            <Skeleton height="200px" width="100%" borderRadius="12px" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Plan Section Skeleton
export const PlanSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="200px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="60%" className="mx-auto" />
      </div>
      <div className="row justify-content-center">
        {[1, 2, 3].map((item) => (
          <div key={item} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <Skeleton height="40px" width="60%" className="mx-auto mb-3" />
                <Skeleton height="60px" width="80%" className="mx-auto mb-4" />
                <Skeleton height="20px" width="100%" className="mb-2" />
                <Skeleton height="20px" width="95%" className="mb-2" />
                <Skeleton height="20px" width="90%" className="mb-4" />
                <Skeleton height="48px" width="100%" borderRadius="24px" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Question/FAQ Section Skeleton
export const QuestionSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="200px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="60%" className="mx-auto" />
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="card mb-3">
              <div className="card-body">
                <Skeleton height="24px" width="80%" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Streamlines Section Skeleton
export const StreamlinesSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="300px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="70%" className="mx-auto mb-5" />
      </div>
      <div className="row">
        <div className="col-md-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="mb-3">
              <Skeleton height="20px" width="90%" />
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="mb-3">
              <Skeleton height="20px" width="90%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Blog Post Section Skeleton
export const BlogPostSkeleton = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <Skeleton height="24px" width="200px" className="mx-auto mb-3" />
        <Skeleton height="48px" width="60%" className="mx-auto" />
      </div>
      <div className="row">
        {[1, 2, 3].map((item) => (
          <div key={item} className="col-md-4 mb-4">
            <div className="card">
              <Skeleton height="200px" width="100%" borderRadius="12px 12px 0 0" />
              <div className="card-body">
                <Skeleton height="20px" width="80%" className="mb-2" />
                <Skeleton height="16px" width="100%" className="mb-2" />
                <Skeleton height="16px" width="90%" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

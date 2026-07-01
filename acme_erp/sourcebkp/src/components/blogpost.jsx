import React, { useState } from 'react';
import '../css/blogpost.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaCalendar } from 'react-icons/fa';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import image1 from '../assets/img/blog/accounting-software-for-nonprofits-guide.png';
import image2 from '../assets/img/blog/fund-accounting-software-nonprofits.png';
import image3 from '../assets/img/blog/ngo-accounting-software-benefits.png';

const blogPosts = [
  {
    image: image2,
    alt: 'Nonprofit financial management dashboard illustration',
    date: '19, 2024',
    title: 'Importance of Financial Management for Nonprofits & NGOs',
    category: 'FINANCE',
    link: '/importance-of-financial-management-for-nonprofits-ngos'
  },
  {
    image: image1,
    alt: 'Accounting report showing donation and expense tracking',
    date: '15, 2024',
    title: 'Easy Accounting Tips for Nonprofits & NGOs',
    category: 'ACCOUNTING',
    link: '/easy-accounting-tips-for-nonprofits-ngos'
  },
  {
    image: image3,
    alt: 'Simple nonprofit accounting software interface concept',
    date: '16, 2024',
    title: 'Acme ERP Nonprofit Accounting Software Guide',
    category: 'FINANCE',
    link: '/acme-erp-nonprofit-accounting-software'
  },
];

const BlogPost = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const visiblePosts = blogPosts.slice(startIndex, startIndex + 3);
  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + 3 < blogPosts.length;

  const handleNext = () => {
    if (canGoNext) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleViewAll = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'hero' } });
    } else {
      const el = document.getElementById('hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="blog-section container py-4">
      <div className="section-text d-flex justify-content-center align-items-center">
        <p className="mb-1 welcome-tag">Recent blog post</p>
        <h3 className="section-subtitle m-0">View Our Latest Blog Insights</h3>
      </div>
      <div className="section-header d-flex justify-content-between align-items-center flex-wrap mb-4">
        {/* <div className="view-all-wrapper mt-3 mt-md-0">
          <button className="btn btn-outline-primary view-all-btn" onClick={handleViewAll} type="button">
            VIEW ALL POSTS
          </button>
        </div> */}
      </div>

      <div className="blog-slider d-flex align-items-center justify-content-center">
        <button
          type="button"
          className="blog-arrow blog-arrow--prev"
          onClick={handlePrev}
          aria-label="Show previous blog posts"
          disabled={!canGoPrev}
        >
          <FaArrowLeftLong aria-hidden="true" />
        </button>
        <div className="row flex-nowrap overflow-hidden">
          {visiblePosts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="blog-card">
                <div className="image-placeholder">
                  <img src={post.image} alt={post.alt || post.title} width="400" height="250" loading="lazy" decoding="async" />
                </div>
                <div className="category-tag">{post.category}</div>
                <div className="blog-date">
                  <FaCalendar style={{ color: '#004868' }} aria-hidden="true" /> {post.date}
                </div>
                <Link to={post.link} className="blog-title text-decoration-none">
                  <h5 className="blog-title">{post.title}</h5>
                </Link>
                <Link to={post.link} className="read-more">
                  Read Details <span aria-hidden="true">&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="blog-arrow blog-arrow--next"
          onClick={handleNext}
          aria-label="Show next blog posts"
          disabled={!canGoNext}
        >
          <FaArrowRightLong aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default BlogPost;

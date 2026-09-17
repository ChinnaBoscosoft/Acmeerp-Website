import React, { useState } from 'react';
import '../css/blogpost.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaCalendar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import image1 from '../assets/img/blog/accounting-software-for-nonprofits-guide.webp';
import image2 from '../assets/img/blog/fund-accounting-software-nonprofits.webp';
import image3 from '../assets/img/blog/ngo-accounting-software-benefits.webp';
import image4 from '../assets/img/bg/nonprofit-accounting-software-about-us.webp';

const blogPosts = [
  {
    image: image2,
    alt: 'Nonprofit financial management dashboard illustration',
    date: '19, 2024',
    title: 'The Complete Guide to Financial Management Systems  | Acme',
    category: 'FINANCE',
    link: '/importance-of-financial-management-for-nonprofits-ngos'
  },
  {
    image: image1,
    alt: 'Accounting report showing donation and expense tracking',
    date: '15, 2024',
    title: 'Easy Accounting Tips for NGOs, Nonprofits & Religious Institutions',
    category: 'ACCOUNTING',
    link: '/easy-accounting-tips-for-nonprofits-ngos'
  },
  {
    image: image3,
    alt: 'Simple nonprofit accounting software interface concept',
    date: '16, 2024',
    title: 'Transform Your Finance with Acme.erp | Accounting Software | Blog',
    category: 'FINANCE',
    link: '/acme-erp-nonprofit-accounting-software'
  },
  // {
  //   image: image4,
  //   date: '17, 2024',
  //   title: 'How Cloud Accounting Helps Nonprofits Stay Transparent and Efficient',
  //   category: 'FINANCE',
  // }
];

const BlogPost = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const visiblePosts = blogPosts.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < blogPosts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
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
          <button className="btn btn-outline-primary view-all-btn" onClick={handleViewAll}>
            VIEW ALL POSTS
          </button>
        </div> */}
      </div>

      <div className="blog-slider d-flex align-items-center justify-content-center">
        <div className="blog-arrow blog-arrow--prev" onClick={handlePrev} aria-label="Previous">
          <FaArrowLeftLong />
        </div>
        <div className="row flex-nowrap overflow-hidden">
          {visiblePosts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="blog-card">
                <div className="image-placeholder">
                  <div className="image-placeholder">
  <Link to={post.link || '#'} aria-label={post.title}>
    <img
      src={post.image}
      alt={post.alt || post.title}
      width="400"
      height="250"
      loading="lazy"
      decoding="async"
    />
  </Link>
</div>
                </div>
                <div className="category-tag">{post.category}</div>
                <div className="blog-date">
                  <FaCalendar style={{ color: "#004868" }} /> {post.date}
                </div>
                <Link to={post.link || '#'} className="blog-title text-decoration-none">
                  <h5 className="blog-title">{post.title}</h5>
                </Link>
                <Link to={post.link || '#'} className="read-more">
                  Read Details <span>&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-arrow blog-arrow--next" onClick={handleNext} aria-label="Next">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

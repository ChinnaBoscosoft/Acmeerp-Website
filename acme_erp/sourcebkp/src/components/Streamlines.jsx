import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import '../css/Streamlines.css';

const featuresLeft = [
  "Comprehensive financial management software for nonprofits",
  "Payroll software Administration for NGOs and religious institutions",
  "Inventory Control and asset management",
  "Banking Operations Integration with cloud accounting",
  "Financial Planning and Budgeting software"
];

const featuresRight = [
  "Compliance software and TDS Management",
  "Asset Management and Tracking",
  "Remote Access Capabilities with Multiple User Logins via cloud accounting",
  "Data Consolidation and financial reporting Generation",
  "Integrated Web Portal for Enhanced Accessibility"
];

const Streamlines = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1100);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={!isMobile && isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="streamline-section text-white text-center py-5"
    >
      <p style={{ color: '#fff' }} className="welcome-tag">Everything You Need, All in One System</p>
      <h2 className="fw-bold mb-5">
        Acme.erp streamlines your daily operations <br />with essential tools making it the most comprehensive nonprofit<br /> accounting software in India.
      </h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {featuresLeft.map((item, index) => (
              <motion.div
                key={index}
                className="feature-box"
                initial={{ opacity: 0, x: isMobile ? 0 : -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isMobile ? 0 : -10 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <span className="check-icon">&#x2713;</span> {item}
              </motion.div>
            ))}
          </div>
          <div className="col-md-6">
            {featuresRight.map((item, index) => (
              <motion.div
                key={index}
                className="feature-box"
                initial={{ opacity: 0, x: isMobile ? 0 : 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isMobile ? 0 : 10 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <span className="check-icon">&#x2713;</span> {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Streamlines;

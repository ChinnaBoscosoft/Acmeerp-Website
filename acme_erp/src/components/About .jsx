import React, { useState, useEffect } from 'react';
import '../css/About.css';
import aboutus from "../assets/img/bg/nonprofit-accounting-software-about-us.png";
import about2 from "../assets/img/normal/nonprofit-accounting-dashboard.png";
import about1 from "../assets/img/normal/ngo-financial-management-system.png";
import { motion } from "framer-motion";

import org1 from "../assets/img/client/friars-organization-logo.png";
import org2 from "../assets/img/client/jac-organization-logo.png";
import org3 from "../assets/img/client/archdiocese-logo.png";
import org4 from "../assets/img/client/chengelpet-organization-logo.png";
import org5 from "../assets/img/client/claretian-organization-logo.png";
import org6 from "../assets/img/client/congregation-of-sisters-logo.png";

const FeatureBullet = () => <span aria-hidden="true">[]</span>;

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const itemLeftToRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const itemRightToLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const About = () => {
  const width = useWindowWidth();
  const isMobile = width < 1100;

  const organizations = [
    { name: "Sisters of St. Anne Madras", image: org1 },
    { name: "Sisters of Charity", image: org2 },
    { name: "Hyderabad Archdiocese Educational Society", image: org3 },
    { name: "Claretian Missionaries", image: org4 },
    { name: "Congregation of Sisters of St. Anne, Tiruchirappalli", image: org5 },
    { name: "Congregation of the Sisters of St. Anne's, Bangalore", image: org6 }
  ];

  return (
    <div className="about-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-side">
            <div className="image-container">
              {isMobile ? null : (
                <>
                  <motion.img
                    className='image1'
                    src={aboutus}
                    alt="nonprofit accounting software team helping organizations manage finances"
                    loading="lazy"
                    width="550"
                    height="386"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <motion.img
                    className='image2 move-right'
                    src={about2}
                    alt="nonprofit accounting dashboard showing reports and analytics"
                    loading="lazy"
                    width="550"
                    height="386"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <motion.img
                    className='image3 move-top'
                    src={about1}
                    alt="NGO financial management system interface overview"
                    loading="lazy"
                    width="550"
                    height="386"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                </>
              )}
            </div>
          </div>

          <div className="content-side">
            <div className="content-section">
              <h3 className='welcome-tag h6'>About Acme.erp</h3>
              <h2 className='about-title h3'>
              Smarter Financial<br />
              Management for Nonprofits <br />
              and Faith-Based Organizations
              </h2>

              <p className="subtitle">
                Acme.erp is an ERP solution uniquely designed for
                religious and not for profit organisations. As India's
                most trusted ERP for religious organizations, it integrates
                a client-server Windows application with cloud-based
                features for comprehensive nonprofit accounting software
                management and administration across various
                levels and sizes of organizations.
              </p>

              {isMobile ? (
                <div className="features">
                  <div className="feature-item">
                    <div className='IoCopy'><FeatureBullet /></div>
                    <p className="feature-text">
                      Acme.erp is a client-server Windows application integrated with cloud technology, designed to simplify administration and financial operations for religious institutions and NGOs of any size across multiple levels, making it an efficient accounting software for nonprofits.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className='IoCopy'><FeatureBullet /></div>
                    <p className="feature-text">
                      It is developed as a complete ERP solution for nonprofit organizations and deployed as a Head Office and Branch Office Suite. With its cloud-enabled system, Acme ERP provides secure and easy access for all authorized users, making it a reliable cloud-based accounting software for NGOs.
                    </p>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="features"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className="feature-item" variants={itemVariants}>
                    <div className='IoCopy'><FeatureBullet /></div>
                    <p className="feature-text">
                      Acme.erp is a client-server windows application integrated with a cloud-based application for administration and management of religious institutes and NGOs of any size, at multiple levels.
                    </p>
                  </motion.div>

                  <motion.div className="feature-item" variants={itemVariants}>
                    <div className='IoCopy'><FeatureBullet /></div>
                    <p className="feature-text">
                      It is developed and packaged as an Enterprise Resource Planning solution. Acme.erp is deployed as Head Office & Branch Office Suite. It is hosted in cloud to be accessible by all affected parties.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              <div className="arrow-button-container"></div>
            </div>
          </div>
        </div>

        {isMobile ? (
          <div className="suite-section">
            <div className="suite-container">
              <div className="suite-item">
                <h4>Branch Office Suite</h4>
                <p>
                  The Branch Office Suite is a Windows-based application that works on single or multiple systems and supports both individual and multi-user setups. It includes key modules such as financial accounting, compliance, asset management, payroll, and donor management, helping organizations handle their daily operations smoothly and efficiently using reliable accounting software for NGOs.
                </p>
              </div>
              <div className="suite-item">
                <h4>Head Office Suite</h4>
                <p>The Head Office Suite is a web-based application designed to generate financial reports from multiple branch offices at different levels. Data from each branch can be updated on demand or at scheduled intervals, ensuring accurate and timely reporting. It provides easy access to financial statements, allowing users to drill down to individual transactions for better visibility. You can also generate consolidated reports across multiple branches, helping organizations manage operations more effectively with a reliable nonprofit financial management system.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="suite-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="suite-container">
              <motion.div className="suite-item" variants={itemLeftToRight}>
                <h4>Branch Office Suite</h4>
                <p>
                  The Branch Office Suite is a Windows-based application that works on single or multiple systems and supports both individual and multi-user setups. It includes key modules such as financial accounting, compliance, asset management, payroll, and donor management, helping organizations handle their daily operations smoothly and efficiently using reliable accounting software for NGOs.
                </p>
              </motion.div>
              <motion.div className="suite-item" variants={itemRightToLeft}>
                <h4>Head Office Suite</h4>
                <p>
                  The Head Office Suite is a web-based application designed to generate financial reports from multiple branch offices at different levels. Data from each branch can be updated on demand or at scheduled intervals, ensuring accurate and timely reporting. It provides easy access to financial statements, allowing users to drill down to individual transactions for better visibility. You can also generate consolidated reports across multiple branches, helping organizations manage operations more effectively with a reliable nonprofit financial management system.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="marquee-section">
        <h3 style={{ color: "#004868" }} className="welcome-tag fw-semibold">Our Customers
        </h3>

        <div>
          <p className="subtitle">Our customers are at the heart of everything
            we do. We serve them with innovation, trust, and a commitment to excellence.
            <br /> Acme.erp's accounting software for nonprofits is trusted by faith-based institutions, NGOs, and organizations across India and beyond, helping them manage their finances with confidence.</p> </div>
        <div className="marquee-container">
          <div className="marquee">
            {[...organizations, ...organizations, ...organizations].map((org, index) => (
              <div className="marquee-item" key={`org-${index}`}>
                <img
                  src={org.image}
                  alt={`${org.name} organization logo`}
                  loading="lazy"
                  width="120"
                  height="80"
                />
                <span>{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

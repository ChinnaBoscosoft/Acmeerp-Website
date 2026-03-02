import React from 'react';
import { motion } from 'framer-motion';
import '../css/Functional.css';
import {
  FaChartBar, FaMoneyBillWave, FaClipboardList, FaNetworkWired, FaMobileAlt,
  FaGem, FaGlobe, FaLink, FaChartLine, FaComments, FaBriefcase,
  FaExclamationTriangle, FaRegFileAlt, FaCogs
} from 'react-icons/fa';

const features = [
  { id: 1, title: "Book Keeping", description: "Helps maintaining day-to-day account books as part of our comprehensive book keeping software for not for profit organizations. Our book keeping software for nonprofits ensures every transaction is recorded accurately.", icon: FaChartBar },
  { id: 2, title: "Payroll", description: "Processing of Wages and Monthly Salary made easier with Easy Handling of Attendance and Loans. Our payroll software for nonprofit organizations integrates seamlessly with the financial management module.", icon: FaMoneyBillWave },
  { id: 3, title: "Asset Tracking", description: "Keep track of value changes in your assets including Insurance, AMC, Depreciation and maintenance through our asset management module — a critical component of any accounting software for nonprofits.", icon: FaClipboardList },
  { id: 4, title: "Networking", description: "Helps keep in touch constantly with Donors through Email, SMS and Letters. Our integrated donor management system is a cornerstone of Acme.erp’s NGO financial management software.", icon: FaNetworkWired },
  { id: 5, title: "Monitoring", description: "Helps monitoring Branches/Communities from Head Office on Accounting and other Aspects — powered by our accounting systems for nonprofits infrastructure.", icon: FaMobileAlt },
  { id: 6, title: "Consolidation", description: "Consolidation of Accounts across the Branches under a Head Office made easier. This is a standout feature of our financial management software for nonprofits, enabling multi-entity financial reporting at scale.", icon: FaGem },
  { id: 7, title: "Foreign Contribution", description: "Foreign Contribution management is made simpler and the Reports are generated instantly — critical for accounting software for NGO organizations receiving international funding.", icon: FaGlobe },

  { id: 8, title: "Third Party Integration", description: "Integration and Migration of Accounts Data with third-party Applications — making Acme.erp a flexible ERP software for nonprofits platform.", icon: FaLink },
  { id: 9, title: "Report Generation", description: "Reports needed for Auditing are made available within few keystrokes. Our financial reporting module delivers the transparency needed for nonprofit accounting software compliance.", icon: FaChartLine },

  { id: 10, title: "Communication", description: "Helps in Communicating with Sub-Centers easily and pass on the information — integrated with donor management workflows.", icon: FaComments },
  { id: 11, title: "Budgeting", description: "Budgeting and Cost Centers are made easier to keep the finance in control and to track in depth. Our budgeting software for nonprofits helps organizations stay on track with every rupee. As a complete fund accounting software for nonprofits, Acme.erp tracks every grant accounting allocation.", icon: FaBriefcase },
  { id: 12, title: "Alerts", description: "Alerts and reminders for schedules like Data Submission, Correction, Investment Renewal, etc — keeping your nonprofit financial management software proactive.", icon: FaExclamationTriangle },
  { id: 13, title: "Policy Implementation", description: "Helps Head Offices implement Policies easily across Multiple Branches — ensuring compliance software standards are upheld throughout your organization.", icon: FaRegFileAlt },
  { id: 14, title: "Customization", description: "We customize modules based on your specific needs — making Acme.erp the most adaptable accounting program for nonprofit organization available in India.", icon: FaCogs }
];

const iconPulseVariants = {
  animate: {
    scale: [1, 1.12, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const iconRotateVariants = {
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};


const Functional = () => {
  return (
    <>

      <div className="acme-section">
        <div className="acme-container">
          <motion.div className="acme-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="welcome-tag">Functional Suite</p>
            <h2 className="acme-title">Acme.erp Modules</h2>
          </motion.div>

          <div className="acme-grid">
            {features.map(({ id, title, description, icon: Icon }) => (
              <motion.div
                key={id}
                className="acme-col"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div className="acme-card">
                  <motion.div
                    className="acme-icon"
                    variants={iconRotateVariants}
                    whileHover="hover"
                    animate="animate"
                  >
                    <motion.div
                      variants={iconPulseVariants}
                      animate="animate"
                    >
                      <Icon />
                    </motion.div>
                  </motion.div>

                  <h3 className="acme-title-text">{title}</h3>
                  <p className="acme-desc">{description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Functional;

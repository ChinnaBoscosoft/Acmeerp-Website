import React from 'react';
import { motion } from 'framer-motion';
import '../css/Functional.css';
import {
  FaChartBar, FaMoneyBillWave, FaClipboardList, FaNetworkWired, FaMobileAlt,
  FaGem, FaGlobe, FaLink, FaChartLine, FaComments, FaBriefcase,
  FaExclamationTriangle, FaRegFileAlt, FaCogs
} from 'react-icons/fa';

const features = [
  { id: 1, title: "Book Keeping", description: "Helps maintain day-to-day account books with our comprehensive accounting software for NGOs and nonprofit organizations. Every financial transaction is recorded accurately for reliable financial accounting.", icon: FaChartBar },
  { id: 2, title: "Payroll", description: "Process wages and monthly salaries with easy attendance and loan management. Our payroll module integrates seamlessly with accounting software for NGOs and supports efficient financial management.", icon: FaMoneyBillWave },
  { id: 3, title: "Asset Tracking", description: "Track asset values, insurance, AMC, depreciation, and maintenance through our asset management module—a key feature of our accounting software for NGOs and nonprofit organizations.", icon: FaClipboardList },
  { id: 4, title: "Networking", description: "Stay connected with donors through email, SMS, and letters. Our integrated donor management system is an essential part of NGO accounting software and strengthens donor relationships.", icon: FaNetworkWired },
  { id: 5, title: "Monitoring", description: "Monitor branches and communities from the head office for accounting and operational activities using our centralized accounting systems designed for NGOs.", icon: FaMobileAlt },
  { id: 6, title: "Consolidation", description: "Consolidate accounts from multiple branches under a single head office with ease. Our financial management software provides accurate consolidated financial reporting across your organization.", icon: FaGem },
  { id: 7, title: "Foreign Contribution", description: "Manage foreign contributions effortlessly and generate reports instantly. A valuable feature of our accounting software for NGOs supporting organizations receiving international funding.", icon: FaGlobe },
  { id: 8, title: "Third Party Integration", description: "Integrate and migrate accounting data with third-party applications, making Acme.erp a flexible ERP accounting software solution for NGOs and nonprofit organizations.", icon: FaLink },
  { id: 9, title: "Report Generation", description: "Generate audit-ready reports within a few keystrokes. Our financial accounting reports provide the transparency required for compliance and informed decision-making.", icon: FaChartLine },
  { id: 10, title: "Communication", description: "Communicate easily with sub-centers and branches while staying connected through integrated donor management and collaboration tools.", icon: FaComments },
  { id: 11, title: "Budgeting", description: "Simplify budgeting and cost center management to keep finances under control. Our financial management software supports accurate budgeting and fund accounting for NGOs and nonprofit organizations.", icon: FaBriefcase },
  { id: 12, title: "Alerts", description: "Receive alerts and reminders for data submission, investment renewals, and important schedules, helping your financial management system stay proactive.", icon: FaExclamationTriangle },
  { id: 13, title: "Policy Implementation", description: "Implement policies consistently across multiple branches while maintaining compliance through our centralized accounting software for NGOs.", icon: FaRegFileAlt },
  { id: 14, title: "Customization", description: "Customize modules to meet your organization's unique needs, making Acme.erp a flexible accounting software solution for NGOs, nonprofits, and religious institutions.", icon: FaCogs }
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

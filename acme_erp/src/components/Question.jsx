import React, { useState, useEffect } from 'react';
import '../css/Question.css';
import chartImage from '../assets/img/bg/faqer.jpg';
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const Question = () => {
  const width = useWindowWidth();
  const isMobile = width < 1100;
  const [openIndex, setOpenIndex] = useState(0); 

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Acme.erp and what makes it the best accounting software for nonprofits?",
      answer: "Acme.erp is an ERP solution tailored for religious and not for profit accounting software needs. It integrates a client-server Windows application with cloud accounting features for comprehensive management and administration. What makes it the best accounting software for nonprofits is its purpose-built design: unlike generic accounting tools, Acme.erp understands the unique compliance, fund management, donor management, and financial reporting needs of NGOs, faith-based organizations, and non-profits."
    },
    {
      question: "What are the main components of Acme.erp's ERP software for nonprofits?",
      answer: "Acme.erp comprises two primary components as part of its ERP software for nonprofits architecture. Head Office Suite Web-based online accounting software for nonprofits for generating consolidated financial reporting from all branches. Branch Office Suite Windows application with accounting system modules including bookkeeping software, compliance software, asset management, payroll software for nonprofit organizations, and donor management"
    },
    {
      question: "Who can use Acme.erp?",
      answer: "Acme.erp is designed for users with basic computing skills, particularly targeting those without formal accounting training. It's user-friendly and suitable for members of religious and not-for-profit organizations."
    },
    {
      question: "What is the best accounting software for non profits in India?",
      answer: "Acme.erp is consistently recognized as the best accounting software for non profits in India because of its 25+ years of domain expertise, 1,800+ clients, and purpose-built modules for NGOs and religious institutions. Our nonprofit accounting software covers bookkeeping software, payroll software, donor management, grant accounting, financial reporting, and budgeting software for nonprofits — all in one system."
    }
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img src={chartImage} alt="ERP demo for non-profits" className="img-fluid faq-img" width="500" height="400" loading="lazy" />
        </div>  

        {/* Right FAQ */}
        <div className="col-md-6 faq-container">
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#004868' }} className="welcome-tag">Frequently Asked Questions</h6>
            <h2 className="fw-bold" style={{ color: '#141D3' }}>
              Make Acme.erp Your Partner for Purpose-Driven Success
            </h2>
          </div>

          <div className="faq-list mt-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="faq-box mb-3"
              >
                <div
                  className={`faq-question-box d-flex justify-content-between align-items-center px-3 py-2 ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggle(index)}
                >
                  <span className="faq-title">{item.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? <RiSubtractFill /> : <FaPlus />}
                  </span>
                </div>

                {openIndex === index && (
                  <div className="faq-answer-box px-3 py-2">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

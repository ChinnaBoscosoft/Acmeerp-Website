import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../css/Cards.css';

import Service1 from '../assets/img/icon/nonprofit-accounting-service-icon.svg';
import Service2 from '../assets/img/icon/donation-tracking-icon.svg';
import Service3 from '../assets/img/icon/financial-reporting-icon.svg';

const cardData = [
  {
    icon: <img src={Service1} loading="lazy" className="icon-svg" alt="nonprofit accounting software icon" width="80" height="80" />,
    title: 'User-Friendly by Design',
    text: `No accounting degree? No problem. Acme.erp’s accounting software for nonprofits is designed for everyday users. Get started quickly and manage your finances with ease—without the complexity of traditional systems.`,
  },
  {
    icon: <img src={Service2} loading="lazy" className="icon-svg" alt="financial reporting software for nonprofits icon" width="80" height="80" />,
    title: 'Instant and Insightful Reporting',
    text: `Generate real-time reports in just a few clicks. Track income, 
    expenses, and fund allocation easily with our nonprofit financial management software, helping you make informed decisions with confidence.`,
  },
  {
    icon: <img src={Service3} loading="lazy" className="icon-svg" alt="time-saving accounting software for nonprofits icon" width="80" height="80" />,
    title: 'Save Time and Focus on Impact',
    text: `Spend less time on spreadsheets and more on your mission. Acme.erp’s accounting 
    software for nonprofits simplifies financial tasks so you can focus on serving your community.`,
  },
  {
    icon: <img src={Service1} loading="lazy" className="icon-svg" alt="secure nonprofit accounting software icon" width="80" height="80" />,
    title: 'Enterprise-Grade Security',
    text: `Keep your financial data secure. Acme.erp uses advanced 
    encryption and secure access controls to protect sensitive information in your 
    nonprofit accounting system.`,
  },
  {
    icon: <img src={Service2} loading="lazy" className="icon-svg" alt="affordable nonprofit accounting software icon" width="80" height="80" />,
    title: 'Affordable and Scalable Pricing',
    text: `Access powerful features at a cost that fits your budget.
    Our low-cost accounting software for nonprofits is designed to scale with 
    your organization, making it ideal for small and growing NGOs.`,
  },
  {
    icon: <img src={Service3} loading="lazy" className="icon-svg" alt="cloud-based NGO accounting software support icon" width="80" height="80" />,
    title: '24/7 Expert Support',
    text: `Get support whenever you need it. Our team is available 24/7 
    to ensure your cloud-based accounting software for NGOs 
    runs smoothly without interruptions.`,
  },
];

const Cards = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToCard((currentIndex + 1) % cardData.length);
      setCurrentIndex((prev) => (prev + 1) % cardData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.children[index];
      const offset = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
      container.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + cardData.length) % cardData.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % cardData.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  return (
    <div className="container py-5 cards-container relative">
      <div className="text-center mb-5">
        <h2 style={{ color: "#004868" }} className="welcome-tag fw-semibold">Why Acme.erp is the Right Choice for Nonprofits </h2>
        <h3 className="hero-title">Purpose-Built <span style={{ color: "#004867" }}> Accounting for NGOs and <br />
        Mission-Driven</span> Organizations</h3>
        <p className="benifit-subtitle">Acme.erp is more than just software, it’s a reliable accounting software for nonprofits. Whether you run an NGO, charity, or faith-based organization, it helps you manage donations, track expenses, and handle funds with ease. With its cloud-based financial management system, your team can stay organized, transparent, and focused on your mission. 
</p>
      </div>

      {/* Arrow Right */}
      <div className="acme-cards">
        <button className="acme-cards__arrow acme-cards__arrow--prev" onClick={handlePrev} aria-label="Previous">
          <FaArrowLeft />
        </button>

        <div className="cards-scroll-wrapper" ref={scrollRef}>
          {cardData.map((card, idx) => (
            <div key={idx} className="card text-center card-hover">
              <div className="card-body">
                <span className="card-icon">
                  <span className="icon-inner">{card.icon}</span>
                </span>
                <h6 className="card-title fw-semibold"><span>{card.title}</span></h6>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Left */}
        <button className="acme-cards__arrow acme-cards__arrow--next" onClick={handleNext} aria-label="Next">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cards;

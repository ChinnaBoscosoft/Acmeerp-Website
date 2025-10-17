// components/ScrollTrackerCircle.jsx
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTrackerCircle = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);

    // Show after half screen scrolled
    setIsVisible(scrollTop > window.innerHeight * 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scrollPercentage / 100) * circumference;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    setTimeout(() => scrollToSection("hero"), 100);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="scroll-tracker"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 9999,
            width: "60px",
            height: "60px",
            cursor: "pointer",
            backgroundColor: "#fff",
            borderRadius: "50%",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          whileHover={{ scale: 1.1, rotate: 10 }} // hover effect
          whileTap={{ scale: 0.9 }} // tap effect
        >
          <svg
            height={radius * 2}
            width={radius * 2}
            style={{ position: "absolute" }}
          >
            <circle
              stroke="#ccc"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#1e5e7e"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              style={{
                transition: "stroke-dashoffset 0.2s ease-out",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>
          <FaArrowUp color="#1e5e7e" size={18} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTrackerCircle;

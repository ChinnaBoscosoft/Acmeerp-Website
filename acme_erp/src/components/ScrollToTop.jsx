import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const sectionId = hash.replace('#', '');
    let attempts = 0;

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);

      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(elementPosition - headerOffset, 0);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        return;
      }

      if (attempts < 20) {
        attempts += 1;
        window.setTimeout(scrollToSection, 100);
      }
    };

    scrollToSection();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

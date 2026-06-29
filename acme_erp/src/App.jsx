import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SEO from './components/SEO.jsx';

const Accounting = lazy(() => import('./page/Accounting.jsx'));
const Finance = lazy(() => import('./page/Finance.jsx'));
const Finance2 = lazy(() => import('./components/Finance2.jsx'));
const ContactRoute = lazy(() => import('./page/ContactRoute.jsx'));
const Tearmsconditions = lazy(() => import('./page/Tearmsconditions.jsx'));
const Privacy = lazy(() => import('./page/privacy.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const NotFound = lazy(() => import('./page/NotFound.jsx'));
const FooterLazy = lazy(() => import('./components/Footer .jsx'));
const ChatbotLazy = lazy(() => import('./components/Chatbot.jsx'));
const CustomCursorLazy = lazy(() => import('./components/CustomCursor.jsx'));
const ScrollTrackerLazy = lazy(() => import('./ScrollTracker.jsx'));

const DataLazy = lazy(() => import('./components/Data.jsx'));
const CardsLazy = lazy(() => import('./components/Cards.jsx'));
const AboutLazy = lazy(() => import('./components/About .jsx'));
const ReviewLazy = lazy(() => import('./components/Review.jsx'));
const MapDashboardLazy = lazy(() => import('./components/MapDashboard.jsx'));
const FunctionalLazy = lazy(() => import('./components/Functional .jsx'));
const PlanLazy = lazy(() => import('./components/Plan.jsx'));
const QuestionLazy = lazy(() => import('./components/Question.jsx'));
const StreamlinesLazy = lazy(() => import('./components/Streamlines.jsx'));
const BlogPostLazy = lazy(() => import('./components/blogpost.jsx'));

const SectionFallback = ({ height = '220px' }) => (
  <div aria-hidden="true" style={{ minHeight: height, width: '100%' }} />
);

const useDeferredTrigger = ({ delay = 5000, events = [] } = {}) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled || typeof window === 'undefined') {
      return undefined;
    }

    const enable = () => setEnabled(true);
    const timeoutId = window.setTimeout(enable, delay);

    events.forEach((eventName) => {
      window.addEventListener(eventName, enable, { passive: true, once: true });
    });

    return () => {
      window.clearTimeout(timeoutId);
      events.forEach((eventName) => {
        window.removeEventListener(eventName, enable);
      });
    };
  }, [delay, enabled, events]);

  return [enabled, setEnabled];
};

const LazySection = ({ id, fallback, children, rootMargin = '0px 0px 80px 0px' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin });

  return (
    <section id={id} ref={ref}>
      {inView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </section>
  );
};

const Home = () => {
  const [showTracker] = useDeferredTrigger({ delay: 3000, events: ['scroll', 'touchstart', 'wheel'] });

  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Acme ERP',
        url: 'https://www.acmeerp.org/',
        logo: 'https://www.acmeerp.org/logo.png',
        sameAs: [],
        description: 'Acme ERP provides cloud-based accounting software for nonprofits, NGOs, and charitable organizations.'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Acme ERP',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://www.acmeerp.org/',
        image: 'https://www.acmeerp.org/software-dashboard.png',
        description: 'Cloud-based accounting software for nonprofits to manage donations, expenses, and fund accounting with ease.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          category: 'Free Trial'
        },
        featureList: ['Donation tracking', 'Expense management', 'Fund accounting', 'Financial reporting', 'Cloud-based access']
      },
      {
        '@type': 'WebSite',
        name: 'Acme ERP',
        url: 'https://www.acmeerp.org/',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.acmeerp.org/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  return (
    <main>
      <SEO
        title="Accounting Software for Nonprofits - Acme.erp | Cloud Accounting"
        description="Accounting software for nonprofits to manage donations, expenses, and funds with ease. Simple, cloud-based NGO financial management solution."
        keywords="accounting software for nonprofits, nonprofit accounting software, NGO accounting software, fund accounting software, nonprofit financial management"
        canonicalUrl="https://acmeerp.org/"
        ogImage="https://acmeerp.org/assets/og-image.jpg"
        schemaMarkup={homeSchema}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is accounting software for nonprofits?', acceptedAnswer: { '@type': 'Answer', text: 'Accounting software for nonprofits helps organizations manage donations, track expenses, handle fund accounting, and generate financial reports while ensuring transparency and compliance.' } },
              { '@type': 'Question', name: 'Why do NGOs need accounting software?', acceptedAnswer: { '@type': 'Answer', text: 'NGOs need accounting software to manage funds efficiently, track donations, maintain financial records, and ensure proper reporting for donors and regulatory compliance.' } },
              { '@type': 'Question', name: 'Is there free accounting software for nonprofits?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, some accounting software for nonprofits offers free plans or trials. These tools help manage basic accounting tasks like expense tracking and donation management.' } },
              { '@type': 'Question', name: 'What features should nonprofit accounting software have?', acceptedAnswer: { '@type': 'Answer', text: 'Nonprofit accounting software should include donation tracking, fund accounting, expense management, financial reporting, and cloud access for easy data management.' } },
              { '@type': 'Question', name: 'How does Acme ERP help nonprofits manage finances?', acceptedAnswer: { '@type': 'Answer', text: 'Acme ERP provides cloud-based accounting software for nonprofits to track donations, manage expenses, monitor funds, and generate accurate financial reports in one platform.' } },
              { '@type': 'Question', name: 'Can small nonprofits use accounting software?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, small nonprofits can use simple and affordable accounting software to manage finances, track donations, and maintain proper financial records without complexity.' } }
            ]
          })
        }}
      />
      <Suspense fallback={null}>{showTracker ? <ScrollTrackerLazy /> : null}</Suspense>
      <div id="hero"><Hero /></div>
      <LazySection id="data" fallback={<SectionFallback height="120px" />}><DataLazy /></LazySection>
      <LazySection id="cards" fallback={<SectionFallback height="360px" />}><CardsLazy /></LazySection>
      <LazySection id="about" fallback={<SectionFallback height="320px" />}><AboutLazy /></LazySection>
      <LazySection id="review" fallback={<SectionFallback height="280px" />}><ReviewLazy /></LazySection>
      <LazySection id="map" fallback={<SectionFallback height="320px" />}><MapDashboardLazy /></LazySection>
      <LazySection id="Functional" fallback={<SectionFallback height="320px" />}><FunctionalLazy /></LazySection>
      <LazySection id="plan" fallback={<SectionFallback height="320px" />}><PlanLazy /></LazySection>
      <LazySection id="question" fallback={<SectionFallback height="240px" />}><QuestionLazy /></LazySection>
      <LazySection id="streamlines" fallback={<SectionFallback height="240px" />}><StreamlinesLazy /></LazySection>
      <LazySection id="blogpost" fallback={<SectionFallback height="280px" />}><BlogPostLazy /></LazySection>
    </main>
  );
};

const MainLayout = () => {
  const location = useLocation();
  const footerTriggerRef = useRef(null);
  const [showFooter, setShowFooter] = useState(false);
  const [showChatbot] = useDeferredTrigger({ delay: 7000, events: ['pointerdown', 'keydown', 'touchstart'] });
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    setShowFooter(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === 'undefined' || !footerTriggerRef.current || showFooter) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFooter(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px 0px 600px 0px',
        threshold: 0.01,
      }
    );

    observer.observe(footerTriggerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, showFooter]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const canUseFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShowCustomCursor(canUseFinePointer && !prefersReducedMotion && window.innerWidth >= 1024);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <div ref={footerTriggerRef} aria-hidden="true" style={{ height: '1px', width: '100%' }} />
      <Suspense fallback={null}>
        {showFooter ? <FooterLazy /> : null}
        {showChatbot ? <ChatbotLazy /> : null}
        {showChatbot && showCustomCursor ? <CustomCursorLazy /> : null}
      </Suspense>
    </>
  );
};

const App = () => (
  <Router>
    <Suspense fallback={<div className="d-flex justify-content-center align-items-center vh-100"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/easy-accounting-tips-for-nonprofits-ngos" element={<Accounting />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/importance-of-financial-management-for-nonprofits-ngos" element={<Finance />} />
          <Route path="/FMS-blog" element={<Finance2 />} />
          <Route path="/acme-erp-nonprofit-accounting-software" element={<Finance2 />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/contact-nonprofit-accounting-software" element={<ContactRoute />} />
          <Route path="/Termscondition" element={<Tearmsconditions />} />
          <Route path="/Privacy-Policy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;

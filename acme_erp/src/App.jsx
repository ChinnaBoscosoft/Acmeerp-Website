import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import SEO from './components/SEO.jsx';

const ScrollTrackerLazy = lazy(() => import('./ScrollTracker.jsx'));
const Accounting = lazy(() => import('./page/Accounting.jsx'));
const Finance = lazy(() => import('./page/Finance.jsx'));
const Finance2 = lazy(() => import('./components/Finance2.jsx'));
const Contact = lazy(() => import('./components/contact.jsx'));
const Tearmsconditions = lazy(() => import('./page/Tearmsconditions.jsx'));
const Privacy = lazy(() => import('./page/privacy.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const NotFound = lazy(() => import('./page/NotFound.jsx'));

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
const ChatbotLazy = lazy(() => import('./components/Chatbot.jsx'));
const CustomCursorLazy = lazy(() => import('./components/CustomCursor.jsx'));
const FooterLazy = lazy(() => import('./components/Footer .jsx'));

const HOME_SCHEMA = {
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
      featureList: [
        'Donation tracking',
        'Expense management',
        'Fund accounting',
        'Financial reporting',
        'Cloud-based access'
      ]
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

const FAQ_SCHEMA_JSON = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is accounting software for nonprofits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accounting software for nonprofits helps organizations manage donations, track expenses, handle fund accounting, and generate financial reports while ensuring transparency and compliance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do NGOs need accounting software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NGOs need accounting software to manage funds efficiently, track donations, maintain financial records, and ensure proper reporting for donors and regulatory compliance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there free accounting software for nonprofits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, some accounting software for nonprofits offers free plans or trials. These tools help manage basic accounting tasks like expense tracking and donation management.'
      }
    },
    {
      '@type': 'Question',
      name: 'What features should nonprofit accounting software have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nonprofit accounting software should include donation tracking, fund accounting, expense management, financial reporting, and cloud access for easy data management.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Acme ERP help nonprofits manage finances?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acme ERP provides cloud-based accounting software for nonprofits to track donations, manage expenses, monitor funds, and generate accurate financial reports in one platform.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can small nonprofits use accounting software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, small nonprofits can use simple and affordable accounting software to manage finances, track donations, and maintain proper financial records without complexity.'
      }
    }
  ]
});

const SectionPlaceholder = ({ minHeight }) => (
  <div
    aria-hidden="true"
    style={{
      minHeight,
      width: '100%',
      background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.03), rgba(15, 23, 42, 0.01))',
      borderRadius: '16px',
      margin: '0 auto',
    }}
  />
);

const LazySection = ({ id, fallbackHeight, children, rootMargin }) => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView || !sectionRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return (
    <section id={id} ref={sectionRef}>
      {inView ? (
        <Suspense fallback={<SectionPlaceholder minHeight={fallbackHeight} />}>
          {children}
        </Suspense>
      ) : (
        <SectionPlaceholder minHeight={fallbackHeight} />
      )}
    </section>
  );
};

const Home = () => {
  const [showScrollTracker, setShowScrollTracker] = useState(false);

  useEffect(() => {
    const enableTracker = () => setShowScrollTracker(true);

    window.addEventListener('scroll', enableTracker, { once: true, passive: true });
    window.addEventListener('touchstart', enableTracker, { once: true, passive: true });
    window.addEventListener('wheel', enableTracker, { once: true, passive: true });

    return () => {
      window.removeEventListener('scroll', enableTracker);
      window.removeEventListener('touchstart', enableTracker);
      window.removeEventListener('wheel', enableTracker);
    };
  }, []);

  const sectionRootMargin = typeof window !== 'undefined' && window.innerWidth < 768
    ? '0px 0px 10px 0px'
    : '0px 0px 60px 0px';

  return (
    <main>
      <SEO
        title="Accounting Software for Nonprofits - Acme.erp | Cloud Accounting"
        description="Accounting software for nonprofits to manage donations, expenses, and funds with ease. Simple, cloud-based NGO financial management solution."
        keywords="accounting software for nonprofits, nonprofit accounting software, NGO accounting software, fund accounting software, nonprofit financial management"
        canonicalUrl="https://acmeerp.org/"
        ogImage="https://acmeerp.org/assets/og-image.jpg"
        schemaMarkup={HOME_SCHEMA}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: FAQ_SCHEMA_JSON
        }}
      />
      {showScrollTracker ? (
        <Suspense fallback={null}>
          <ScrollTrackerLazy />
        </Suspense>
      ) : null}
      <div id="hero">
        <Hero />
      </div>
      <LazySection id="data" fallbackHeight="120px" rootMargin={sectionRootMargin}>
        <DataLazy />
      </LazySection>
      <LazySection id="cards" fallbackHeight="380px" rootMargin={sectionRootMargin}>
        <CardsLazy />
      </LazySection>
      <LazySection id="about" fallbackHeight="420px" rootMargin={sectionRootMargin}>
        <AboutLazy />
      </LazySection>
      <LazySection id="review" fallbackHeight="320px" rootMargin={sectionRootMargin}>
        <ReviewLazy />
      </LazySection>
      <LazySection id="map" fallbackHeight="520px" rootMargin={sectionRootMargin}>
        <MapDashboardLazy />
      </LazySection>
      <LazySection id="Functional" fallbackHeight="360px" rootMargin={sectionRootMargin}>
        <FunctionalLazy />
      </LazySection>
      <LazySection id="plan" fallbackHeight="340px" rootMargin={sectionRootMargin}>
        <PlanLazy />
      </LazySection>
      <LazySection id="question" fallbackHeight="280px" rootMargin={sectionRootMargin}>
        <QuestionLazy />
      </LazySection>
      <LazySection id="streamlines" fallbackHeight="280px" rootMargin={sectionRootMargin}>
        <StreamlinesLazy />
      </LazySection>
      <LazySection id="blogpost" fallbackHeight="340px" rootMargin={sectionRootMargin}>
        <BlogPostLazy />
      </LazySection>
    </main>
  );
};

const MainLayout = () => {
  const footerTriggerRef = useRef(null);
  const [showFooter, setShowFooter] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    if (!footerTriggerRef.current || showFooter) {
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
        rootMargin: '0px 0px 120px 0px',
        threshold: 0,
      }
    );

    observer.observe(footerTriggerRef.current);

    return () => observer.disconnect();
  }, [showFooter]);

  useEffect(() => {
    const enableChatbot = () => setShowChatbot(true);

    window.addEventListener('pointerdown', enableChatbot, { once: true, passive: true });
    window.addEventListener('keydown', enableChatbot, { once: true });

    return () => {
      window.removeEventListener('pointerdown', enableChatbot);
      window.removeEventListener('keydown', enableChatbot);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');

    if (!mediaQuery.matches) {
      return undefined;
    }

    const enableCursor = () => setShowCustomCursor(true);
    window.addEventListener('pointermove', enableCursor, { once: true, passive: true });

    return () => window.removeEventListener('pointermove', enableCursor);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <div ref={footerTriggerRef} aria-hidden="true" style={{ minHeight: 1 }} />
      <Suspense fallback={null}>
        {showFooter ? <FooterLazy /> : null}
        {showChatbot ? <ChatbotLazy /> : null}
        {showCustomCursor ? <CustomCursorLazy /> : null}
      </Suspense>
    </>
  );
};

const App = () => (
  <Router>
    <Suspense fallback={
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/easy-accounting-tips-for-nonprofits-ngos" element={<Accounting />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/importance-of-financial-management-for-nonprofits-ngos" element={<Finance />} />
          <Route path="/FMS-blog" element={<Finance2 />} />
          <Route path="/acme-erp-nonprofit-accounting-software" element={<Finance2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-nonprofit-accounting-software" element={<Contact />} />
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

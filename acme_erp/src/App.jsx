import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollTrackerCircle from './ScrollTracker.jsx';
import Footer from './components/Footer .jsx';
import {
  DataSkeleton,
  CardsSkeleton,
  AboutSkeleton,
  ReviewSkeleton,
  MapSkeleton,
  FunctionalSkeleton,
  PlanSkeleton,
  QuestionSkeleton,
  StreamlinesSkeleton,
  BlogPostSkeleton,
} from './components/Skeleton.jsx';

// Lazy load pages for performance
const Accounting = lazy(() => import('./page/Accounting.jsx'));
const Finance = lazy(() => import('./page/Finance.jsx'));
const Finance2 = lazy(() => import('./components/Finance2.jsx'));
const Contact = lazy(() => import('./components/contact.jsx'));
const Tearmsconditions = lazy(() => import('./page/Tearmsconditions.jsx'));
const Privacy = lazy(() => import('./page/privacy.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const NotFound = lazy(() => import('./page/NotFound.jsx'));

// Lazy-load below-the-fold homepage sections so skeletons can show without delaying LCP
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

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 },
};
// function LegacyLoginRedirect() {
//   const location = useLocation();
//   // Redirect /login.html?msg=3 -> /login?msg=3
//   return <Navigate to={`/login${location.search || ""}`} replace />;
// }
const LazySection = ({ id, fallback, children, rootMargin = '300px' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin });

  return (
    <section id={id} ref={ref}>
      {inView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </section>
  );
};

// Show Hero immediately (LCP), skeleton-load the rest as user scrolls
const Home = () => (
  <main>
    <ScrollTrackerCircle />
    <div id="hero">
      <motion.div {...fadeInUp}>
        <Hero />
      </motion.div>
    </div>
    <LazySection id="data" fallback={<DataSkeleton />}>
      <motion.div {...fadeInUp}>
        <DataLazy />
      </motion.div>
    </LazySection>
    <LazySection id="cards" fallback={<CardsSkeleton />}>
      <motion.div {...fadeInUp}>
        <CardsLazy />
      </motion.div>
    </LazySection>
    <LazySection id="about" fallback={<AboutSkeleton />}>
      <AboutLazy />
    </LazySection>
    <LazySection id="review" fallback={<ReviewSkeleton />}>
      <motion.div {...fadeInUp}>
        <ReviewLazy />
      </motion.div>
    </LazySection>
    <LazySection id="map" fallback={<MapSkeleton />}>
      <motion.div {...fadeInUp}>
        <MapDashboardLazy />
      </motion.div>
    </LazySection>
    <LazySection id="Functional" fallback={<FunctionalSkeleton />}>
      <FunctionalLazy />
    </LazySection>
    <LazySection id="plan" fallback={<PlanSkeleton />}>
      <PlanLazy />
    </LazySection>
    <LazySection id="question" fallback={<QuestionSkeleton />}>
      <QuestionLazy />
    </LazySection>
    <LazySection id="streamlines" fallback={<StreamlinesSkeleton />}>
      <StreamlinesLazy />
    </LazySection>
    <LazySection id="blogpost" fallback={<BlogPostSkeleton />}>
      <motion.div {...fadeInUp}>
        <BlogPostLazy />
      </motion.div>
    </LazySection>
  </main>
);

// Lazy-load non-critical UI to reduce initial JS and improve FCP/LCP
const ChatbotLazy = lazy(() => import('./components/Chatbot.jsx'));
const CustomCursorLazy = lazy(() => import('./components/CustomCursor.jsx'));

// MainLayout component for all main pages
const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
      <Suspense fallback={null}>
        <ChatbotLazy />
        <CustomCursorLazy />
      </Suspense>
    </>
  );
};

const App = () => (
  // <Router basename="/acptest">
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
          <Route path="/finance" element={<Finance />} />
          <Route path="/FMS-blog" element={<Finance2 />} />
          <Route path="/contact" element={<Contact />} />
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

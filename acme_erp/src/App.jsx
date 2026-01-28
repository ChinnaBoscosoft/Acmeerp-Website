import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Data from './components/Data.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About .jsx';
import BlogPost from './components/blogpost.jsx';
import Plan from './components/Plan.jsx';
import Question from './components/Question.jsx';
import Review from './components/Review.jsx';
import Streamlines from './components/Streamlines.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollTrackerCircle from './ScrollTracker.jsx';
import Footer from './components/Footer .jsx';
import Functional from './components/Functional .jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Chatbot from './components/Chatbot.jsx';
// import MapIndia from '../src/components/MapIndia.jsx';
import MapDashboard from './components/MapDashboard.jsx';
import AntiInspect from './components/AntiInspect.jsx';
import { Outlet } from 'react-router-dom';
import {
  HeroSkeleton,
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
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSections, setLoadedSections] = useState({
    hero: false,
    data: false,
    cards: false,
    about: false,
    review: false,
    map: false,
    functional: false,
    plan: false,
    question: false,
    streamlines: false,
    blogpost: false,
  });

  useEffect(() => {
    // Simulate loading with staggered delays for each section
    const loadTimers = {
      hero: setTimeout(() => setLoadedSections(prev => ({ ...prev, hero: true })), 300),
      data: setTimeout(() => setLoadedSections(prev => ({ ...prev, data: true })), 500),
      cards: setTimeout(() => setLoadedSections(prev => ({ ...prev, cards: true })), 700),
      about: setTimeout(() => setLoadedSections(prev => ({ ...prev, about: true })), 900),
      review: setTimeout(() => setLoadedSections(prev => ({ ...prev, review: true })), 1100),
      map: setTimeout(() => setLoadedSections(prev => ({ ...prev, map: true })), 1300),
      functional: setTimeout(() => setLoadedSections(prev => ({ ...prev, functional: true })), 1500),
      plan: setTimeout(() => setLoadedSections(prev => ({ ...prev, plan: true })), 1700),
      question: setTimeout(() => setLoadedSections(prev => ({ ...prev, question: true })), 1900),
      streamlines: setTimeout(() => setLoadedSections(prev => ({ ...prev, streamlines: true })), 2100),
      blogpost: setTimeout(() => setLoadedSections(prev => ({ ...prev, blogpost: true })), 2300),
    };

    // Set overall loading to false after all sections are loaded
    const overallTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      // Cleanup timers
      Object.values(loadTimers).forEach(timer => clearTimeout(timer));
      clearTimeout(overallTimer);
    };
  }, []);

  return (
    <main>
      <ScrollTrackerCircle />
      <div id="hero">
        {loadedSections.hero ? (
          <motion.div {...fadeInUp}>
            <Hero />
          </motion.div>
        ) : (
          <HeroSkeleton />
        )}
      </div>
      <div id="data">
        {loadedSections.data ? (
          <motion.div {...fadeInUp}>
            <Data />
          </motion.div>
        ) : (
          <DataSkeleton />
        )}
      </div>
      <div id="cards">
        {loadedSections.cards ? (
          <motion.div {...fadeInUp}>
            <Cards />
          </motion.div>
        ) : (
          <CardsSkeleton />
        )}
      </div>
      <div id="about">
        {loadedSections.about ? (
          <About />
        ) : (
          <AboutSkeleton />
        )}
      </div>
      <div id="review">
        {loadedSections.review ? (
          <motion.div {...fadeInUp}>
            <Review />
          </motion.div>
        ) : (
          <ReviewSkeleton />
        )}
      </div>
      <div id="map">
        {loadedSections.map ? (
          <motion.div {...fadeInUp}>
            <MapDashboard />
          </motion.div>
        ) : (
          <MapSkeleton />
        )}
      </div>
      <div id="Functional">
        {loadedSections.functional ? (
          <Functional />
        ) : (
          <FunctionalSkeleton />
        )}
      </div>
      <div id="plan">
        {loadedSections.plan ? (
          <Plan />
        ) : (
          <PlanSkeleton />
        )}
      </div>
      <div id="question">
        {loadedSections.question ? (
          <Question />
        ) : (
          <QuestionSkeleton />
        )}
      </div>
      <div id="streamlines">
        {loadedSections.streamlines ? (
          <Streamlines />
        ) : (
          <StreamlinesSkeleton />
        )}
      </div>
      <div id="blogpost">
        {loadedSections.blogpost ? (
          <motion.div {...fadeInUp}>
            <BlogPost />
          </motion.div>
        ) : (
          <BlogPostSkeleton />
        )}
      </div>
    </main>
  );
};

// MainLayout component for all main pages
const MainLayout = () => (
  <>
    <AntiInspect />
    <Chatbot />
    <CustomCursor />
    <ScrollToTop />
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

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

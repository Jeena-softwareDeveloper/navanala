import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';

// Lazy Import Pages for Performance Optimization
const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative">
      <ScrollToTop />
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {/* Suspense wrapper with custom Loading Spinner */}
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        <div className="bg-slate-900 text-white">
          <Footer />
        </div>
        <ChatWidget />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Import Pages
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative">

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
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

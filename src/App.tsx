/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { AnimatePresence } from 'motion/react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-black text-white selection:bg-neon selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/memberships" element={<div className="pt-32 text-center h-screen">Memberships Page (Template)</div>} />
              <Route path="/classes" element={<div className="pt-32 text-center h-screen">Classes Page (Template)</div>} />
              <Route path="/personal-training" element={<div className="pt-32 text-center h-screen">Personal Training Page (Template)</div>} />
              <Route path="/schedule" element={<div className="pt-32 text-center h-screen">Schedule Page (Template)</div>} />
              <Route path="/trainers" element={<div className="pt-32 text-center h-screen">Trainers Page (Template)</div>} />
              <Route path="/testimonials" element={<div className="pt-32 text-center h-screen">Testimonials Page (Template)</div>} />
              <Route path="/contact" element={<div className="pt-32 text-center h-screen">Contact Page (Template)</div>} />
              <Route path="/free-trial" element={<div className="pt-32 text-center h-screen">Free Trial Page (Template)</div>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


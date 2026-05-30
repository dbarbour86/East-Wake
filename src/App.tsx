/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import GroupClasses from './pages/GroupClasses';
import PersonalTraining from './pages/PersonalTraining';
import Nutrition from './pages/Nutrition';
import SilverSneakers from './pages/SilverSneakers';
import MassageTherapy from './pages/MassageTherapy';
import Contact from './pages/Contact';
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
              <Route path="/classes" element={<GroupClasses />} />
              <Route path="/personal-training" element={<PersonalTraining />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/silver-sneakers" element={<SilverSneakers />} />
              <Route path="/massage-therapy" element={<MassageTherapy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/free-trial" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


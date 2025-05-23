import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import LandingPages from './pages/LandingPages.jsx';
import Hire from './pages/Hire.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <main className='min-h-screen pb-3'>
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/landing-pages' element={<LandingPages />} />
              <Route path='/hire' element={<Hire />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;

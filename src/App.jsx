import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx'; // renamed Projects.jsx → Portfolio.jsx
import Clients from './pages/Clients.jsx'; // new page for real-world projects
import Contact from './pages/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import LandingPages from './pages/LandingPages.jsx';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/landing-pages' element={<LandingPages />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;

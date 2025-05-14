import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

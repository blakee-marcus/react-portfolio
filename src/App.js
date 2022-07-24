import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
    
    return (
        <Router>
            <div>
                <Nav></Nav>
                <main>
                    <Routes>
                        <Route path='/' element={<About />} />
                        <Route path='/works' element={<Works />} />
                        <Route path='/contact' element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
        
        
    );
}

export default App;
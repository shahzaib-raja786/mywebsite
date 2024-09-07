import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/Home';
import About from './pages/About';   
import Services from './pages/services'; 
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main className="pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />        
            <Route path="/services" element={<Services />} />   
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

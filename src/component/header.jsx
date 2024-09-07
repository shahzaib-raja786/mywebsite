import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
       
        <div className="text-3xl font-extrabold tracking-wider cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out">
          Disney World
        </div>

       
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars} 
          className="text-2xl cursor-pointer sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        />

       
        <nav className="hidden sm:flex sm:items-center sm:space-x-8">
          <Link 
            to="/" 
            className="text-lg hover:text-yellow-300 transition-colors duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-lg hover:text-yellow-300 transition-colors duration-300 ease-in-out"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-lg hover:text-yellow-300 transition-colors duration-300 ease-in-out"
          >
            Services
          </Link>
        </nav>
      </div>

      
      {menuOpen && (
        <div className="sm:hidden bg-black text-white p-4 space-y-2">
          <Link to="/" className="block text-lg hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="block text-lg hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" className="block text-lg hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

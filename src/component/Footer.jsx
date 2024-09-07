import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 text-white py-8">
      <div className="max-w-7xl mx-auto text-center space-y-4">
       
        <h1 className="text-3xl font-bold">Disney World</h1>
        
       
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-300">
            <FaInstagram />
          </a>
        </div>

       
        <nav className="text-sm space-x-4">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>

       
        <p className="text-sm">&copy; 2024 Disney. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaStar, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-center px-4 overflow-hidden">
      
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400 rounded-full opacity-50 animate-ping" />

     
      <motion.h1
        className="text-5xl sm:text-7xl font-bold text-white relative z-10 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        About Us
      </motion.h1>

     
      <motion.p
        className="text-lg sm:text-xl text-white max-w-3xl leading-relaxed mb-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to the magical world of Disney! We offer unforgettable experiences through our iconic parks, resorts, and cruises.
        Our mission is to spread joy, wonder, and magic to people all over the globe, creating moments that last a lifetime.
      </motion.p>

     
      <motion.div
        className="flex space-x-8 mt-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="text-white text-4xl bg-indigo-600 p-4 rounded-full shadow-xl hover:bg-indigo-700"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaMagic />
        </motion.div>
        <motion.div
          className="text-white text-4xl bg-yellow-500 p-4 rounded-full shadow-xl hover:bg-yellow-600"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaStar />
        </motion.div>
        <motion.div
          className="text-white text-4xl bg-green-500 p-4 rounded-full shadow-xl hover:bg-green-600"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FaGlobe />
        </motion.div>
      </motion.div>

      
      <motion.a
        href="#learn-more"
        className="mt-10 px-6 py-3 text-lg font-semibold text-white bg-pink-600 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 ease-in-out relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Learn More
      </motion.a>
    </div>
  );
};

export default About;

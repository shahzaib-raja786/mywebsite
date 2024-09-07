import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "/src/assets/images/picture1.jpg",
  "/src/assets/images/picture3.jpg",
  "/src/assets/images/picture4.jpg",
  "/src/assets/images/picture5.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.8)',
            }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-white text-5xl sm:text-7xl font-extrabold drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Disney World
          </motion.h1>
          <motion.p
            className="text-white text-lg sm:text-xl mt-4 font-medium max-w-2xl drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover magical experiences worldwide.
          </motion.p>
          <motion.button
            className="mt-8 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Explore Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { FaHotel, FaShip, FaUmbrellaBeach } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { icon: <FaHotel />, title: 'Hotel Booking', description: 'Luxury accommodations for your perfect Disney experience.' },
    { icon: <FaShip />, title: 'Cruise Lines', description: 'Experience the magic on a Disney Cruise with top-tier services.' },
    { icon: <FaUmbrellaBeach />, title: 'Event Planning', description: 'We plan magical events to make your trip unforgettable.' }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 text-center py-20">
      <motion.h1
        className="text-5xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Magical Services
      </motion.h1>
      <motion.p
        className="text-lg text-gray-700 max-w-2xl mb-12"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Discover a range of magical services that ensure an unforgettable Disney experience. From booking hotels to planning events, we’ve got it all!
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 sm:px-0">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-500 relative"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="text-6xl text-blue-500 p-6 bg-blue-100 rounded-full">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;

import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 rounded-lg overflow-hidden">
     
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>

     
      <div className="p-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;

import React from 'react';
import Hero from '../component/Hero';
import Card from '../component/Card';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Disneyland Resort"
            description="Experience the magic in California."
            image="/src/assets/images/disney1.jpg"
          />
          <Card
            title="Walt Disney World"
            description="Discover new adventures in Florida."
            image="/src/assets/images/disney2.jpg"
          />
          <Card
            title="Disney Cruise Line"
            description="Sail with Disney and explore the world."
            image="/src/assets/images/disney3.jfif"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

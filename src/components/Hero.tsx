import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Custom Software Solutions for Your Business</h1>
        <p className="text-xl mb-8">Web, Mobile, and Desktop Applications Tailored to Your Needs</p>
        <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Get Started</a>
      </div>
    </section>
  );
};

export default Hero;
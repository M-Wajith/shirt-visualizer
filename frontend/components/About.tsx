'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-16 px-6 md:px-12 lg:px-24 scroll-mt-10" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Revolutionizing Shirt Customization with 3D Technology
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our platform empowers clothing shops to visualize custom shirts in 3D before
          production, ensuring precision and customer satisfaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">3D Shirt Visualization</h3>
            <p className="text-gray-600">See real-time designs before production.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Fabric & Style Selection</h3>
            <p className="text-gray-600">Explore various fabrics and customization options.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">User-Friendly & Efficient</h3>
            <p className="text-gray-600">Simplifies the decision-making process.</p>
          </div>
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
          <p className="text-gray-700 mt-2">
            We bridge the gap between imagination and reality, helping clothing businesses
            offer a seamless, interactive experience to their customers.
          </p>
        </div>
        
        <div className="mt-8">
          <a href="/signup" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from "react";

const FeatureSection = ({ title, highlight, features }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          {title} <span className="font-bold text-black">{highlight}</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-blue-500 mb-4 text-4xl">{feature.icon}</div>

              {/* Title / Description */}
              <p className="text-gray-800 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

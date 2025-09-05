// src/components/common/MarketViewSteps.jsx

import React from "react";

const MarketViewSteps = ({ title, steps }) => {
  return (
    <section className="w-full bg-white text-black px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12">{title}</h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-[#E6F0FF] text-black rounded-xl overflow-hidden shadow-md"
            >
              {/* Left image */}
              <div className="w-full md:w-1/2 h-64 md:h-52">
                <img
                  src={step.image}
                  alt={step.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right content */}
              <div className="w-full md:w-1/2 p-6">
                <h3 className="text-xl font-semibold mb-2">{step.heading}</h3>
                <p className="text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketViewSteps;

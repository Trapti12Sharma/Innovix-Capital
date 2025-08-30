import React from "react";

const StepsSection = ({ title, subtitle, steps, buttonText }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-10">{subtitle}</p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              {/* Icon with step number */}
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-3xl">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center bg-black text-white text-sm font-bold rounded-full">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        {buttonText && (
          <div className="mt-10">
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md text-lg font-medium transition">
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StepsSection;

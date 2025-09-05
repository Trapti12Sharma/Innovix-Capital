import React from "react";

const Banner = ({ title, subtitle, description, bgImage }) => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
          <h3 className="text-lg md:text-2xl font-semibold">{subtitle}</h3>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

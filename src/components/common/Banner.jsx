import React from "react";

const Banner = ({ title, subtitle, description, bgImage }) => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex items-center min-h-[400px] sm:min-h-[500px]">
        {/* Left Content */}
        <div className="text-white pt-8 sm:pt-12 lg:pt-16 pl-4 sm:pl-6 lg:pl-8 space-y-4 sm:space-y-6 max-w-full sm:max-w-md lg:max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            {subtitle}
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;

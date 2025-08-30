import React from "react";

const HeroSection = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  imageSrc,
}) => {
  return (
    <section className="bg-[#0f1c2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          {title && (
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {title}
            </h1>
          )}

          {subtitle && <p className="text-lg md:text-xl mb-4">{subtitle}</p>}

          {description && (
            <p className="text-gray-300 mb-6 text-sm md:text-base">
              {description}
            </p>
          )}

          {buttonText && (
            <a
              href={buttonLink || "#"}
              className="inline-block bg-[#f54747] hover:bg-[#e33d3d] transition px-6 py-3 rounded-md font-semibold"
            >
              {buttonText}
            </a>
          )}
        </div>

        {/* Right Image */}
        {imageSrc && (
          <div className="mt-8 md:mt-0 md:ml-8 flex justify-center">
            <img
              src={imageSrc}
              alt="Hero Visual"
              className="max-w-full h-auto md:max-w-md lg:max-w-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

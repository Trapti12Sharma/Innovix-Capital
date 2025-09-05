import React from "react";

const MobileTradingSection = ({
  title,
  description,
  subDescription,

  image,
}) => {
  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-600 mb-6">{subDescription}</p>

          {/* Buttons */}
          {/* <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            {buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={btn.image}
                  alt={btn.alt}
                  className="h-12 object-contain"
                />
              </a>
            ))}
          </div> */}
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt="Mobile Trading"
            className="w-60 md:w-80 lg:w-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileTradingSection;

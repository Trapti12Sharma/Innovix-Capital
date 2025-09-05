import React from "react";

const SecurityRegulationSection = ({
  image,
  title,
  introParagraph,
  bulletPoints = [],
  closingParagraph,
}) => {
  return (
    <section
      className="relative overflow-hidden md:pb-4 pt-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center"
      style={{ backgroundColor: "#1e2235" }}
    >
      {/* Background circular overlay */}
      <div className="absolute inset-0">
        <div className="w-[800px] h-[800px] bg-[#10162f] opacity-60 rounded-full absolute -left-40 -top-40"></div>
        <div className="w-[600px] h-[600px] bg-[#10162f] opacity-40 rounded-full absolute -right-20 top-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Left Image */}
        <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
          <img src={image} alt={title} className="w-100 md:w-[600px]" />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2 w-full md:pl-16 text-white">
          <h2 className="text-[#2A8A9D] text-4xl font-semibold mb-4">
            {title}
          </h2>

          {introParagraph && (
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {introParagraph}
            </p>
          )}

          {bulletPoints.length > 0 && (
            <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-2 text-base">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {closingParagraph && (
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              {closingParagraph}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecurityRegulationSection;

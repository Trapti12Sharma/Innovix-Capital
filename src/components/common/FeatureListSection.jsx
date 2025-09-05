import React from "react";

const FeatureListSection = ({ title, subtitle, items }) => {
  return (
    <section className="w-full bg-[#1c1f3c] text-white font-[Source_Sans_Pro] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4 text-center leading-tight">
          {title}
        </h2>
        {/* Subheading */}
        <h2 className="text-[24px] font-normal mb-8 text-center">{subtitle}</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-3">{item.heading}</h3>
              <p className="text-base text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureListSection;

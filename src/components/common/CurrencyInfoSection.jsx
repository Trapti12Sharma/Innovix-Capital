// ✅ CurrencyInfoSection.jsx
import React from "react";

const CurrencyInfoSection = ({ title, paragraphs, image }) => {
  return (
    <section className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white text-[#111827] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* ✅ Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>
          <div className="space-y-4 text-sm md:text-base leading-relaxed">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* ✅ Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={image}
            alt="Currency"
            className="max-w-[300px] md:max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CurrencyInfoSection;

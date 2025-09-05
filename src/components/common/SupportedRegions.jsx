import React from "react";

const SupportedRegions = ({ title, subtitle, regions, ctaText, ctaNote }) => {
  return (
    <section className="bg-[#121733] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-semibold text-4xl sm:text-4xl leading-tight mb-4">
            {title}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{subtitle}</p>
          <div className="w-24 h-1 bg-[#2A8A9D] mx-auto mt-6"></div>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
          {regions.map((region, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-[#1a1f3a] to-[#0f1229] rounded-2xl p-8 border border-gray-700/30 hover:border-[#FABF16]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#FABF16]/10 w-full max-w-sm"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FABF16]/5 to-transparent rounded-bl-3xl"></div>
              <div className="relative z-10 flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FABF16]/10 to-[#FABF16]/5 rounded-2xl flex items-center justify-center group-hover:from-[#FABF16]/20 group-hover:to-[#FABF16]/10 transition-all duration-300">
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {region.icon}
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-center">
                <h3 className="font-semibold text-xl mb-4 text-white group-hover:text-[#2A8A9D] transition-colors duration-300">
                  {region.title}
                </h3>

                <ul className="space-y-3 text-left">
                  {region.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-[#2A8A9D] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FABF16]/20 to-transparent group-hover:via-[#FABF16]/40 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-gray-300 mb-6 text-base">{ctaNote}</p>
          <button className="px-8 py-3 bg-[#2A8A9D] text-[#121733] font-semibold rounded-lg hover:bg-[#2A8A9D]/90 transition-colors duration-300 transform hover:scale-105">
            {ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedRegions;

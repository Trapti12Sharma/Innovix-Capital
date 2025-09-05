import React from "react";

const GetInTouch = ({ title, buttons, helpLink, features }) => {
  return (
    <section className="w-full flex flex-col items-center px-4 py-12">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        {title}
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.link}
            className={`px-6 py-3 rounded-md font-medium text-center transition-all ${
              btn.type === "primary"
                ? "bg-[#2A8A9D] text-white hover:bg-[#2A8A9D]"
                : "bg-blue-50 text-[#2A8A9D] hover:bg-[#2A8A9D]"
            }`}
          >
            {btn.label}
          </a>
        ))}
      </div>

      {/* Help Link */}
      {helpLink && (
        <a
          href={helpLink.url}
          className="text-blue-500 text-sm underline mb-10"
        >
          {helpLink.text}
        </a>
      )}

      {/* Features */}
      <div className="w-full bg-gray-50 py-6 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="bg-white shadow-md p-3 rounded-full">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>
            <p className="text-sm font-medium text-gray-800">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;

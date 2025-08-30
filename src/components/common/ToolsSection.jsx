import React from "react";

const ToolsSection = ({ title, subtitle, tools }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
          {title}
        </h2>
        <p className="text-gray-600 mb-10">{subtitle}</p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition p-6 flex flex-col items-center"
            >
              {/* Icon/Image */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow mb-4">
                {tool.icon ? (
                  tool.icon
                ) : (
                  <img src={tool.image} alt={tool.title} className="w-8 h-8" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-2">
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">{tool.description}</p>

              {/* Button */}
              {tool.buttonText && (
                <button className="mt-auto border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-2 rounded-md transition">
                  {tool.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

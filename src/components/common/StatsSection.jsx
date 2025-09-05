import React from "react";

const StatsSection = ({ title, description, stats }) => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-base md:text-lg">{description}</p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 border border-gray-200 rounded-lg overflow-hidden">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-8 px-6"
            >
              <h3 className="text-4xl font-bold text-blue-500">{stat.value}</h3>
              <p className="mt-2 text-gray-700 text-center text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

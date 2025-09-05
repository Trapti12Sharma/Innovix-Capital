import React from "react";

const StatsCards = ({ stats }) => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] rounded-lg shadow-sm p-6 flex flex-col items-center text-center"
          >
            {/* Left & Right Grey Leaf Icons */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <span className="text-gray-300 text-3xl">🏅</span>
              <span className="text-gray-300 text-3xl">🏅</span>
            </div>

            {/* Title */}
            <p className="text-sm font-medium text-gray-700">{item.title}</p>

            {/* Value */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#3b82f6] mt-2">
              {item.value}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCards;

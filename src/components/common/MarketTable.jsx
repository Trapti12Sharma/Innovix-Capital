import React, { useState } from "react";

const MarketTable = ({ heading, subheading, features, categories, data }) => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto overflow-x-hidden">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        {heading.split(" ").map((word, i) =>
          i === 0 ? (
            <span key={i} className="font-bold">
              {word + " "}
            </span>
          ) : (
            word + " "
          )
        )}
      </h2>
      <p className="text-gray-500 mt-2 text-sm sm:text-base md:text-lg">
        {subheading}
      </p>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-gray-700 text-xs sm:text-sm md:text-base"
          >
            <span className="text-green-500">✔</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-6 sm:mt-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 rounded-full bg-gray-100 p-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(cat)}
              className={`px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
                activeTab === cat
                  ? "bg-black text-white"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6 sm:mt-8">
        <table className="w-full border-separate border-spacing-y-2 sm:border-spacing-y-3 min-w-[600px] sm:min-w-[700px]">
          <thead className="text-gray-500 text-left text-xs sm:text-sm">
            <tr>
              <th className="px-2 sm:px-4 py-2">Instrument</th>
              <th className="px-2 sm:px-4 py-2">Buy</th>
              <th className="px-2 sm:px-4 py-2">Sell</th>
              <th className="px-2 sm:px-4 py-2">Change</th>
              <th className="px-2 sm:px-4 py-2 hidden sm:table-cell">Chart</th>
              <th className="px-2 sm:px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data[activeTab]?.map((row, i) => (
              <tr
                key={i}
                className="bg-white shadow-sm rounded-xl text-xs sm:text-sm md:text-base"
              >
                {/* Instrument */}
                <td className="px-2 sm:px-4 py-2 sm:py-3 flex items-center gap-2 font-medium">
                  <img
                    src={row.icon}
                    alt={row.name}
                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                  />
                  {row.name}
                </td>

                {/* Buy */}
                <td className="px-2 sm:px-4 py-2 sm:py-3">{row.buy}</td>

                {/* Sell */}
                <td className="px-2 sm:px-4 py-2 sm:py-3">{row.sell}</td>

                {/* Change */}
                <td
                  className={`px-2 sm:px-4 py-2 sm:py-3 font-semibold ${
                    row.change.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {row.change}
                </td>

                {/* Chart */}
                <td className="px-2 sm:px-4 py-2 sm:py-3 hidden sm:table-cell">
                  <img
                    src={row.chart}
                    alt="chart"
                    className="h-5 sm:h-6 w-auto"
                  />
                </td>

                {/* Button */}
                <td className="px-2 sm:px-4 py-2 sm:py-3">
                  <button className="px-3 sm:px-4 py-1 text-xs sm:text-sm border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
                    Read more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6">
        *Indicative spread is in HYCM Raw Account
      </p>
      <a
        href="#"
        className="text-blue-500 hover:underline text-xs sm:text-sm mt-2 inline-block"
      >
        See all products →
      </a>
    </section>
  );
};

export default MarketTable;

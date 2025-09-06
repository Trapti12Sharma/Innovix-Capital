import React, { useState } from "react";

const MarketTable = ({ heading, subheading, features, categories, data }) => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="w-full py-12 px-4 md:px-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold">
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
      <p className="text-gray-500 mt-2">{subheading}</p>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-700">
            <span className="text-green-500">✔</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-10 flex justify-center">
        <div className="flex rounded-full bg-gray-100">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
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
      <div className="overflow-x-auto mt-8">
        <table className="w-full border-separate border-spacing-y-3">
          <thead className="text-gray-500 text-left">
            <tr>
              <th className="px-4">Instrument</th>
              <th className="px-4">Buy</th>
              <th className="px-4">Sell</th>
              <th className="px-4">Change</th>
              <th className="px-4">Chart</th>
              <th className="px-4"></th>
            </tr>
          </thead>
          <tbody>
            {data[activeTab]?.map((row, i) => (
              <tr
                key={i}
                className="bg-white shadow-sm rounded-xl text-sm md:text-base"
              >
                {/* Instrument */}
                <td className="px-4 py-3 flex items-center gap-2 font-medium">
                  <img
                    src={row.icon}
                    alt={row.name}
                    className="w-6 h-6 rounded-full"
                  />
                  {row.name}
                </td>

                {/* Buy */}
                <td className="px-4">{row.buy}</td>

                {/* Sell */}
                <td className="px-4">{row.sell}</td>

                {/* Change */}
                <td
                  className={`px-4 font-semibold ${
                    row.change.startsWith("-")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {row.change}
                </td>

                {/* Chart */}
                <td className="px-4">
                  <img src={row.chart} alt="chart" className="h-6" />
                </td>

                {/* Button */}
                <td className="px-4">
                  <button className="px-4 py-1 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition">
                    Read more
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6">
        *Indicative spread is in HYCM Raw Account
      </p>
      <a
        href="#"
        className="text-blue-500 hover:underline text-sm mt-2 inline-block"
      >
        See all products →
      </a>
    </section>
  );
};

export default MarketTable;

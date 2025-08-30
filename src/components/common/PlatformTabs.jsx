import React, { useState } from "react";

const PlatformTabs = ({ title, subtitle, tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-gray-600 mb-8">{subtitle}</p>}

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full border transition ${
                activeTab === index
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gray-50 rounded-lg shadow p-6">
          {/* Left Content */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">
              {tabs[activeTab].title}
            </h3>
            <p className="text-gray-500 mb-4">{tabs[activeTab].description}</p>

            {/* Buttons (if available) */}
            <div className="flex gap-4 flex-wrap">
              {tabs[activeTab].buttons?.map((btn, i) => (
                <a key={i} href={btn.link} target="_blank" rel="noreferrer">
                  <img
                    src={btn.image}
                    alt="store"
                    className="h-12 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="max-h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformTabs;

import React, { useState } from "react";

const CalculatorTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full bg-white py-10 px-4 md:px-8">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === index
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row gap-8">
        {/* Left Side Form */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-6">{tabs[activeTab].title}</h2>

          {tabs[activeTab].formFields.map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  className="w-full border rounded-lg px-3 py-2"
                  defaultValue={field.value}
                >
                  {field.options.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  defaultValue={field.value}
                  className="w-full border rounded-lg px-3 py-2"
                />
              )}
            </div>
          ))}

          {/* Extra Info */}
          {tabs[activeTab].extraInfo && (
            <p className="mt-4 text-gray-700">
              {tabs[activeTab].extraInfo.label}{" "}
              <span className="font-semibold">
                {tabs[activeTab].extraInfo.value}
              </span>
            </p>
          )}

          {/* Result */}
          {tabs[activeTab].result && (
            <p className="mt-6 text-lg font-bold">
              {tabs[activeTab].result.label}{" "}
              <span className="text-blue-600">
                {tabs[activeTab].result.value}
              </span>
            </p>
          )}
        </div>

        {/* Right Side Info */}
        <div className="flex-1 bg-white rounded-xl p-6 border">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="text-blue-500">ℹ</span>
            How does it work?
          </h3>
          <ul className="space-y-2 text-gray-700">
            {tabs[activeTab].info.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalculatorTabs;

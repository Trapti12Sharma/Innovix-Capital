import React, { useState } from "react";

const PaymentTable = ({ tabs, note }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className="w-full flex flex-col items-center px-4 py-10">
      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-full overflow-hidden mb-6">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === tab
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto w-full max-w-5xl">
        <table className="w-full border border-gray-200 text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4">Method</th>
              <th className="p-4">Minimum</th>
              <th className="p-4">Currency</th>
              <th className="p-4">Processing</th>
              <th className="p-4">Fees</th>
            </tr>
          </thead>
          <tbody>
            {tabs[activeTab].map((row, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 flex items-center gap-2">
                  <img src={row.icon} alt={row.method} className="w-10 h-10" />
                  {row.method}
                </td>
                <td className="p-4">{row.minimum}</td>
                <td className="p-4">{row.currency}</td>
                <td className="p-4">{row.processing}</td>
                <td className="p-4">{row.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      {note && (
        <p className="text-sm text-gray-500 mt-4 max-w-4xl text-center">
          {note}
        </p>
      )}
    </div>
  );
};

export default PaymentTable;

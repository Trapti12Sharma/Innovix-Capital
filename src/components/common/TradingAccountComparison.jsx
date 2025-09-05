// src/components/common/TradingAccountComparison.jsx
import React from "react";

const TradingAccountComparison = ({ accountData = [], columns = 3 }) => {
  return (
    <section className="bg-[#f8f9fb] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-[#2a2d45]">
        Compare our trading account types
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}>
        {(accountData || []).map((account, idx) => (
          <div
            key={idx}
            className={`rounded-lg border shadow-md bg-white transition-transform hover:scale-[1.02] ${
              account.highlighted ? "border-[#2A8A9D]" : "border-gray-200"
            }`}
          >
            <div
              className={`p-6 flex flex-col h-full ${
                account.highlighted ? "border-t-4 border-[#2A8A9D]" : ""
              }`}
            >
              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-[#2a2d45] uppercase">
                  {account.name}
                </h3>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-gray-600 font-medium text-sm">
                    Minimum Deposit
                  </p>
                  <p className="text-[#2a2d45]">{account.minDeposit}</p>
                </div>

                <div>
                  <p className="text-gray-600 font-medium text-sm">Spreads</p>
                  <p className="text-[#2a2d45]">{account.spreads}</p>
                </div>

                <div>
                  <p className="text-gray-600 font-medium text-sm">
                    Commissions
                  </p>
                  <p className="text-[#2a2d45] whitespace-pre-line">
                    {account.commissions}
                  </p>
                </div>

                <div>
                  <p className="text-gray-600 font-medium text-sm">Best For</p>
                  <p className="text-[#2a2d45]">{account.bestFor}</p>
                </div>

                <div>
                  <p className="text-gray-600 font-medium text-sm">
                    Trading Instruments
                  </p>
                  <ul className="list-disc ml-5 text-[#2a2d45]">
                    {(account.instruments || []).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <div className="text-center mt-8">
                <button className="bg-[#2A8A9D] hover:bg-[#2A8A9D] text-white py-2 px-6 rounded-full text-sm font-medium transition-colors">
                  Get started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TradingAccountComparison;

import React from "react";

const AccountsSection2 = ({ title, subtitle, accounts, bgcolor }) => {
  return (
    <section
      className={`w-full ${bgcolor} bg-[#1c1f3c] text-white font-[Source_Sans_Pro] py-16 px-6`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-[32px] md:text-[40px] font-semibold mb-4 text-center leading-tight">
          {title}
        </h1>
        <h2 className="text-[20px] md:text-[25px] font-normal mb-8 text-center">
          {subtitle}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="bg-white text-[#1c1f3c] rounded-xl shadow-md p-6 transition transform hover:scale-[1.02] hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{account.title}</h3>
              <ul className="list-disc list-inside space-y-1 text-[16px] text-justify">
                {account.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountsSection2;

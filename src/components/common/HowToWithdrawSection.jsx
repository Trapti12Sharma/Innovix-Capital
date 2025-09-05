import React from "react";

const HowToWithdrawSection = ({ title, steps }) => {
  return (
    <section
      className="bg-[#21243b] py-12 px-4 sm:px-10 lg:px-24 text-center text-white"
      style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-4 border-[#21243b] bg-[#21243b]">
              <span className="text-xl font-bold">{index + 1}</span>
              <svg
                className="absolute top-0 left-0 w-full h-full transform rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  stroke="#FABF16"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="100,100"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p className="mt-4 text-sm">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToWithdrawSection;

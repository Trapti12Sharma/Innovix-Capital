import React from "react";

const VipCard = ({ title, subtitle, badge, features, image }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl shadow-md p-6 md:p-10">
      {/* Left Side Image */}
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <img
          src={image}
          alt="VIP"
          className="w-40 md:w-60 lg:w-72 object-contain"
        />
      </div>

      {/* Right Side Content */}
      <div className="flex-1 flex flex-col items-start text-center md:text-left">
        {badge && (
          <span className="bg-red-500 text-white font-semibold px-4 py-1 rounded-full text-sm mb-3">
            {badge}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{subtitle}</h2>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <span className="text-blue-500">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VipCard;

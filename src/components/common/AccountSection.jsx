import React from "react";

const AccountSection = ({ sectionTitle, cards }) => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-10">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        {sectionTitle}
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-sm p-8 text-center hover:shadow-md transition"
          >
            {/* Card Title */}
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              {card.title}
            </h3>
            {/* Divider */}
            <div className="w-12 h-[1px] bg-gray-400 mx-auto mb-4"></div>
            {/* Card Description */}
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSection;

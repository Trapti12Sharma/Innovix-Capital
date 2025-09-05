import React from "react";

const MarketViewFeaturen = ({
  title = "",
  subtitle = "",
  features = [],
  bgColor = "bg-white",
  textColor = "text-black",
  titleColor = "",
  subtitleColor = "",
  cardBgColor = "bg-white",
  cardTextColor = "text-black",
  listStyle = "list-disc list-inside",
}) => {
  return (
    <section className={`w-full ${bgColor} py-12 px-4 md:px-10 ${textColor}`}>
      {/* Title & Subtitle */}
      {(title || subtitle) && (
        <div className="max-w-7xl mx-auto text-center mb-12">
          {title && (
            <h2
              className={`text-4xl font-semibold ${
                titleColor ? titleColor : ""
              }`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`text-[24px] mt-4 ${
                subtitleColor ? subtitleColor : ""
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`${cardBgColor} shadow-md rounded-2xl p-6 text-left transition-all hover:shadow-lg ${cardTextColor}`}
          >
            {/* Icon */}
            {item.icon && (
              <div className="text-4xl mb-4 flex items-center justify-start">
                {item.icon}
              </div>
            )}

            {/* Heading */}
            {item.heading && (
              <h3 className="text-xl font-semibold mb-3">{item.heading}</h3>
            )}

            {/* List Points */}
            {Array.isArray(item.points) && item.points.length > 0 && (
              <ul className={`${listStyle} space-y-2`}>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* Paragraph */}
            {item.paragraph && (
              <p className="mt-4 text-base">{item.paragraph}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketViewFeaturen;

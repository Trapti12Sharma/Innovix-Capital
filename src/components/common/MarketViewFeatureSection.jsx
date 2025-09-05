import React from "react";
import {
  Lightbulb,
  CalendarDays,
  Bell,
  LineChart,
  LayoutGrid,
  Layers,
} from "lucide-react";

const iconMap = {
  chart: LineChart,
  layout: LayoutGrid,
  indicators: Layers,
  alerts: Bell,
  calendar: CalendarDays,
  script: Lightbulb,
};

const MarketViewFeatureSection = ({
  title,
  description,
  features,
  bgcolor,
  titlecolor,
}) => {
  return (
    <section className={`${bgcolor} py-16 px-4 sm:px-6 lg:px-20`}>
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2
          className={`text-4xl text-center font-bold ${titlecolor} mb-4 font-['Source Sans Pro']`}
        >
          {title}
        </h2>

        {/* Description */}
        <p className="text-base text-gray-700 mb-12 font-['Source Sans Pro'] leading-relaxed max-w-4xl">
          {description}
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = iconMap[item.icon] || Lightbulb;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-all"
              >
                {/* Icon and Heading */}
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-400/20 text-[#2A8A9D] p-3 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#10162f] font-['Source Sans Pro']">
                    {item.heading}
                  </h3>
                </div>

                {/* Paragraph */}
                <p className="text-base text-gray-700 font-['Source Sans Pro'] leading-relaxed">
                  {item.paragraph}
                </p>

                {/* List (if exists) */}
                {item.list && (
                  <ul className="list-disc list-inside text-base text-gray-600 space-y-1 pl-1">
                    {item.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MarketViewFeatureSection;

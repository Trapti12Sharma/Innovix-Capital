import React from "react";

const SideImageTextSection = ({
  image,
  title,
  paragraphs,
  paragraphs2,
  listItems,
  bgColor,
  textcolor,
  paragraphTextColor,
  description,
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between ${bgColor} ${textcolor}`}
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[500px] lg:h-[600px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Right Content */}
      <div
        className="w-full md:w-1/2 p-8 md:p-12 lg:p-20"
        style={{ fontFamily: '"Source Sans Pro", sans-serif' }}
      >
        <h2 className="text-4xl sm:text-3xl font-bold mb-4">{title}</h2>

        {/* Paragraphs */}
        {paragraphs.map((para, index) => (
          <p key={index} className={`mb-4 ${paragraphTextColor}`}>
            {para}
          </p>
        ))}

        {/* ✅ List Items */}
        {listItems && listItems.length > 0 && (
          <ul className="list-disc pl-5 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className={`${paragraphTextColor}`}>
                {item}
              </li>
            ))}
          </ul>
        )}
        <br />
        {paragraphs.map((para, index) => (
          <p key={index} className={`mb-4 ${paragraphTextColor}`}>
            {paragraphs2}
          </p>
        ))}
        <p className="text-base mb-6 whitespace-pre-line">{description}</p>
      </div>
    </section>
  );
};

export default SideImageTextSection;

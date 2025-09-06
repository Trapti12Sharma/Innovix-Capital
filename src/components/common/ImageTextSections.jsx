import React from "react";

const ImageTextSections = ({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  reverse,
  noButton,
  bgcolor,
  textcolor,
  paragraph,
}) => {
  return (
    <section
      className={`flex flex-col ${bgcolor} ${textcolor} lg:flex-row items-stretch justify-between px-0 sm:px-0 md:px-0 lg:px-0 py-0 gap-0`} // removed padding/margin
    >
      {/* Text Content */}
      <div
        className={`w-full lg:w-1/2 px-4  mt-12 mb-11 sm:px-6 md:px-10 lg:px-20 ${
          reverse ? "lg:order-2" : ""
        } flex flex-col justify-center`}
      >
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <p className="text-base mb-6 whitespace-pre-line">{description}</p>
        <p className="text-base mb-6 whitespace-pre-line">{paragraph}</p>
        {!noButton && buttonText && (
          <a
            href={buttonLink}
            className="inline-block bg-[#ff4d00] text-white font-semibold px-6 py-3 rounded-full"
          >
            {buttonText}
          </a>
        )}
      </div>

      {/* Image */}
      <div className={`w-full lg:w-1/2  ${reverse ? "lg:order-1" : ""}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover m-0 p-0"
        />
      </div>
    </section>
  );
};

export default ImageTextSections;

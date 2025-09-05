import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const FAQAccordion = ({ title, highlight, faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        {title} {highlight && <span className="text-red-500">{highlight}</span>}
      </h2>

      {/* FAQ List */}
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-sm cursor-pointer transition-colors duration-200 ${
              activeIndex === index ? "bg-gray-100" : "bg-gray-50"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center p-4">
              <h3 className="text-gray-800 font-medium">{faq.question}</h3>
              <FiChevronRight
                className={`text-gray-500 text-xl transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
              />
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;

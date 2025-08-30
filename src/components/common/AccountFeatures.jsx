import React from "react";

const AccountFeatures = ({ title, features, note, link, button }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">{title}</h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-sm rounded-lg p-6 flex flex-col justify-center items-center hover:shadow-md transition"
            >
              <p className="text-gray-500 mb-2">{item.label}</p>
              <p className="text-lg font-semibold text-blue-600">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        {note && (
          <p className="text-gray-500 text-sm mb-4">
            {note.text}{" "}
            {note.link && (
              <a
                href={note.link.href}
                className="text-blue-600 underline hover:text-blue-800"
              >
                {note.link.text}
              </a>
            )}
          </p>
        )}

        {/* Extra Link */}
        {link && (
          <a
            href={link.href}
            className="block text-blue-600 underline hover:text-blue-800 mb-6"
          >
            {link.text}
          </a>
        )}

        {/* Button */}
        {button && (
          <a
            href={button.href}
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            {button.text}
          </a>
        )}
      </div>
    </section>
  );
};

export default AccountFeatures;

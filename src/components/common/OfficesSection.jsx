import React from "react";

const OfficesSection = ({ title, subtitle, offices }) => {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-gray-500 mt-2">{subtitle}</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-sm rounded-md p-6 flex flex-col"
          >
            {/* Office Info */}
            <h3 className="text-lg font-bold mb-2">{office.name}</h3>
            <p className="font-semibold">{office.city}</p>
            <p className="text-sm text-gray-600 whitespace-pre-line mt-2">
              {office.address}
            </p>
            {office.phone && (
              <p className="mt-2 text-sm font-medium">📞 {office.phone}</p>
            )}

            {/* Map (only if provided) */}
            {office.mapEmbed && (
              <div className="mt-4 w-full h-60">
                <iframe
                  src={office.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={office.name}
                  className="rounded-md"
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfficesSection;

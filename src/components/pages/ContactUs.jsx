import React from "react";
import Banner from "../common/Banner";

const ContactPage = () => {
  const officesData = [
    {
      name: "Innovix Capital Headquarters",
      city: "London",
      address:
        "27-28 Clement’s Lane, St Clement’s House\nLondon EC4N 7AE\nUnited Kingdom",
      phone: "",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...", // replace with real embed
      showMap: true,
    },
    {
      name: "Innovix Capital Dubai Office",
      city: "Dubai",
      address:
        "9th Floor, Liberty House,\nDubai International Financial Center,\nDubai, United Arab Emirates",
    },
    {
      name: "Innovix Capital Kuwait Office",
      city: "Kuwait",
      address:
        "22nd Floor, Office 1,\nAl-Soor Tower, Al-Soor Street,\nAl-Qibla, Kuwait",
      phone: "22915450",
    },
    {
      name: "Innovix Capital Group Headquarters",
      city: "Hong Kong",
      address: "10th Floor,\nNine Queens Road Central,\nHong Kong",
    },
  ];
  const supportCards = [
    {
      title: "Client Support",
      email: "support@innovixcapital.com",
      phone: "",
      hours: "24/5",
    },
    {
      title: "Account Opening",
      email: "accounts@innovixcapital.com",
      phone: "+44 - 208 - 816 - 7812",
      hours: "24/5",
    },
    {
      title: "General Inquiries",
      email: "info@innovixcapital.com",
      phone: "+44 - 208 - 816 - 7812",
      hours: "24/5",
    },
    {
      title: "Complaints",
      email: "complaints@innovixcapital.com",
      phone: "",
      hours: "9:00 - 18:00 (GMT +3)",
    },
  ];
  return (
    <>
      <Banner
        title="Contact us"
        subtitle="+44 208 816 7812"
        description="Have a question? We're here to help."
        bgImage="contactus.jpg"
      />

      {/* Support Cards Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {supportCards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-sm rounded-md p-6 text-center"
            >
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <a
                href={`mailto:${card.email}`}
                className="text-blue-600 hover:underline block mb-2"
              >
                {card.email}
              </a>
              {card.phone && <p className="font-medium mb-2">{card.phone}</p>}
              <hr className="my-4" />
              <p className="text-gray-500 text-sm">Working hours:</p>
              <p className="font-bold">{card.hours}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Group’s Offices
          </h2>
          <p className="text-gray-500 mt-2">
            Our international network services traders across the globe.
          </p>
        </div>

        {/* First Office (HQ with Map) */}
        {officesData[0].showMap && (
          <div className="bg-gray-50 shadow-sm rounded-md mb-10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-2">
                  {officesData[0].name}
                </h3>
                <p className="font-semibold">{officesData[0].city}</p>
                <p className="text-sm text-gray-600 whitespace-pre-line mt-2">
                  {officesData[0].address}
                </p>
                {officesData[0].phone && (
                  <p className="mt-2 text-sm font-medium">
                    📞 {officesData[0].phone}
                  </p>
                )}
              </div>
              <div className="w-full h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0836506351993!2d-0.08915802420033665!3d51.51168131039166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035397cd4ea7%3A0x2f426cbaa1c070fe!2s27-28%20Clements%20Ln%2C%20London%20EC4N%207AE%2C%20UK!5e0!3m2!1sen!2sin!4v1757090918981!5m2!1sen!2sin"
                  allowfullscreen=""
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={officesData[0].name}
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Other Offices in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officesData.slice(1).map((office, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-sm rounded-md p-6 flex flex-col"
            >
              <h3 className="text-lg font-bold mb-2">{office.name}</h3>
              <p className="font-semibold">{office.city}</p>
              <p className="text-sm text-gray-600 whitespace-pre-line mt-2">
                {office.address}
              </p>
              {office.phone && (
                <p className="mt-2 text-sm font-medium">📞 {office.phone}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactPage;

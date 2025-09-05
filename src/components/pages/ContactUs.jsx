import React from "react";
import Banner from "../common/Banner";
import OfficesSection from "../common/OfficesSection";

const ContactForm = () => {
  const officesData = [
    {
      name: "Innovix Capital Headquarters",
      city: "London",
      address:
        "27-28 Clement’s Lane, St Clement’s House\nLondon EC4N 7AE\nUnited Kingdom",
      phone: "",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...", // Replace with correct link
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
  return (
    <>
      <Banner
        title="Contact us"
        subtitle="+442088167812"
        description="Have a question? We're here to help."
        bgImage="contactus.jpg"
      />

      <OfficesSection
        title="Our Group’s Offices"
        subtitle="Our international network services traders across the globe."
        offices={officesData}
      />
    </>
  );
};

export default ContactForm;

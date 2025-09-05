import React from "react";
import Banner from "../common/Banner";
import ContactFormSection from "../common/ContactFormSection";
import MapAddressSection from "../common/MapAddressSection";

const ContactForm = () => {
  return (
    <>
      <Banner title="Contact Us" bgImage="/about1.jpg" />

      <MapAddressSection />
      <ContactFormSection />
    </>
  );
};

export default ContactForm;

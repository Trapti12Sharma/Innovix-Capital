import React from "react";
import Banner from "../common/Banner";
import ContactFormSection from "../common/ContactFormSection";
import MapAddressSection from "../common/MapAddressSection";
import bgBanner1 from "../../assets/about1.jpg";

const ContactForm = () => {
  return (
    <>
      <Banner title="Contact Us" bgImage={bgBanner1} />

      <MapAddressSection />
      <ContactFormSection />
    </>
  );
};

export default ContactForm;

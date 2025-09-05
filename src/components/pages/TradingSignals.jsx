import React from "react";
import Banner from "../common/Banner";

import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import SideImageTextSection from "../common/SideImageTextSection";

const TradingSignals = () => {
  const buttons = [
    { label: "Contact Us", link: "/contact", type: "primary" },
    { label: "Live-Chat", link: "/chat", type: "secondary" },
  ];

  const helpLink = {
    text: "Visit Our Help Centre",
    url: "/help-centre",
  };

  const features = [
    {
      icon: "/icons/shield.png",
      title: "Negative Balance Protection",
    },
    {
      icon: "/icons/trophy.png",
      title: "25+ Group Awards",
    },
    {
      icon: "/icons/support.png",
      title: "Professional Customer Support",
    },
  ];

  const faqData = [
    {
      question: "What is the minimum deposit and how do I fund my account?",
      answer:
        "The minimum deposit is $20. You can fund your account via bank transfer, card, or crypto.",
    },
    {
      question: "How long does it take to withdraw funds?",
      answer:
        "Withdrawals are usually processed within 1-5 working days depending on the method.",
    },
    {
      question: "Are my funds safe with Innovix Capital?",
      answer:
        "Yes, your funds are kept in segregated accounts and regulated by top authorities.",
    },
    {
      question: "How do I withdraw funds from my account?",
      answer:
        "You can withdraw via bank, card, or crypto through the client portal.",
    },
    {
      question: "Who is your principal payment gateway for payments?",
      answer:
        "Our payments are processed securely via regulated international gateways.",
    },
  ];
  return (
    <>
      <Banner
        title="Trading Signals"
        subtitle="Trading conditions at a glance:"
        description="Fast execution, tight spreads and a choice of account types for every trading style."
        bgImage="/about1.jpg"
      />

      <SideImageTextSection
        image="/trading1.png"
        bgColor="bg-[#0B2A4D]"
        textcolor="text-white"
        title="How Do Trading Signals Work?"
        paragraphTextColor="text-white"
        paragraphs={[
          "Three times a day, before the European, US, and Asian sessions, trading signals are sent out.They assist you:",
        ]}
        listItems={[
          "Find good trading chances in Forex, indices, commodities, and stocks.",
          "Don't waste time on long technical analysis.",
          "Make your trading strategy better by setting defined entry, stop-loss, and take-profit levels.",
        ]}
        description=" Important: Trading signals don't guarantee profits, but they are a great way to help you make better decisions."
      />

      <FAQAccordion
        title="Need More Information? Check Our"
        highlight="Q&As"
        faqs={faqData}
      />

      <GetInTouch
        title="Get in touch"
        buttons={buttons}
        helpLink={helpLink}
        features={features}
      />
    </>
  );
};

export default TradingSignals;

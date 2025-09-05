import React from "react";
import Banner from "../common/Banner";
import PaymentTable from "../common/PaymentTable";
import FAQAccordion from "../common/FAQAccordion";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import GetInTouch from "../common/GetInTouch";

const DepositsWithdrawals = () => {
  const otherNotesData = {
    title: "Other Important Notes",

    features: [
      {
        icon: "script",
        heading: "You must confirm your account:",
        paragraph:
          "You must confirm your account. You can't add or withdraw money until your KYC is fully verified.",
      },
      {
        icon: "chart",
        heading: "Currency Conversion",
        paragraph:
          "Conversions are made using current FX rates, which are clearly shown during your transaction.",
      },
      {
        icon: "bell",
        heading: "Inactivity Fee",
        paragraph:
          "Accounts inactive for 180 days may incur a small maintenance fee to remain active.",
      },
      {
        icon: "calendar",
        heading: "Deposit/Withdrawal Method Match",
        paragraph:
          "Withdrawals must use the same method as the original deposit for security and compliance.",
      },
      {
        icon: "layout",
        heading: "Card Refund Delays",
        paragraph:
          "Refunds to cards may take longer due to bank processing — unfortunately, this is out of our control.",
      },
    ],
  };

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

  const Deposits = [
    {
      icon: "/icons/bank.png",
      method: "Bank Transfer",
      minimum: "US $20",
      currency: "USD, EUR, GBP",
      processing: "1 to 7 working days",
      fees: "$0¹",
    },
    {
      icon: "/icons/visa.png",
      method: "Visa / Mastercard",
      minimum: "US $20",
      currency: "USD, EUR, GBP",
      processing: "Up to 1 hour",
      fees: "$0",
    },
    {
      icon: "/icons/crypto.png",
      method: "Crypto",
      minimum: "US $20",
      currency: "Crypto",
      processing: "Up to 3 hours",
      fees: "$0³",
    },
  ];

  const Withdrawals = [
    {
      icon: "/icons/bank.png",
      method: "Bank Transfer",
      minimum: "US $100",
      currency: "USD, EUR, GBP",
      processing: "1 to 5 working days",
      fees: "$5",
    },
    {
      icon: "/icons/crypto.png",
      method: "Crypto",
      minimum: "US $50",
      currency: "Crypto",
      processing: "Up to 2 hours",
      fees: "$0",
    },
  ];

  return (
    <>
      <Banner
        title="Deposit & Withdrawal Information"
        bgImage="/depositw1.jpg"
      />

      <PaymentTable
        tabs={{ Deposits, Withdrawals }}
        note="¹Innovix Capital does not charge on deposits, however there might be charges from the banks that are then deducted from the amount that you will receive."
      />

      <MarketViewFeatureSection
        title={otherNotesData.title}
        description={otherNotesData.description}
        features={otherNotesData.features}
        bgcolor="bg-[#121733]"
        titlecolor="text-white"
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

export default DepositsWithdrawals;

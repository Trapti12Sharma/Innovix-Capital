import React from "react";
import Banner from "../common/Banner";
import CalculatorTabs from "../common/CalculatorTabs";
import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import bgBanner1 from "../../assets/about1.jpg";

const ProTradingTools = () => {
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
        title="Pro Trading Tools"
        subtitle="Trading conditions at a glance:"
        description="Fast execution, tight spreads and a choice of account types for every trading style."
        bgImage={bgBanner1}
      />

      <CalculatorTabs
        tabs={[
          {
            label: "Pip Calculator",
            title: "Pip Calculator",
            formFields: [
              {
                label: "Account Currency",
                type: "select",
                value: "EUR",
                options: ["EUR", "USD", "GBP"],
              },
              {
                label: "Currency Pair",
                type: "select",
                value: "EUR/USD",
                options: ["EUR/USD", "GBP/USD", "USD/JPY"],
              },
              {
                label: "Trade Size (In units)",
                type: "number",
                value: "10000",
              },
            ],
            extraInfo: {
              label: "Conversion Price (EUR/USD):",
              value: "1.16885",
            },
            result: { label: "Pip Value (EUR):", value: "0.86" },
            info: [
              { label: "Account currency:", value: "EUR" },
              { label: "Currency Pair:", value: "EUR/USD" },
              { label: "Trade size (in units):", value: "10,000" },
              { label: "One pip in decimals:", value: "0.0001" },
              { label: "Exchange Rate (EUR/USD):", value: "1.16885" },
              { label: "Formula:", value: "0.0001 * 10,000 / 1.16885 = 0.86" },
              { label: "Each pip is worth:", value: "0.86 (in EUR)" },
            ],
          },
          {
            label: "Currency Converter",
            title: "Currency Converter",
            formFields: [
              {
                label: "From",
                type: "select",
                value: "USD",
                options: ["USD", "EUR", "GBP"],
              },
              {
                label: "To",
                type: "select",
                value: "EUR",
                options: ["EUR", "USD", "GBP"],
              },
              { label: "Amount", type: "number", value: "100" },
            ],
            extraInfo: { label: "Conversion Rate:", value: "0.85" },
            result: { label: "Converted Value:", value: "85 EUR" },
            info: [
              { label: "From:", value: "USD" },
              { label: "To:", value: "EUR" },
              { label: "Amount:", value: "100" },
              { label: "Rate:", value: "0.85" },
              { label: "Converted:", value: "85 EUR" },
            ],
          },
          {
            label: "Margin Calculator",
            title: "Margin Calculator",
            formFields: [
              {
                label: "Account Currency",
                type: "select",
                value: "USD",
                options: ["USD", "EUR", "GBP"],
              },
              {
                label: "Currency Pair",
                type: "select",
                value: "USD/JPY",
                options: ["USD/JPY", "EUR/USD"],
              },
              { label: "Leverage", type: "number", value: "100" },
              {
                label: "Trade Size (In units)",
                type: "number",
                value: "10000",
              },
            ],
            extraInfo: { label: "Exchange Rate:", value: "110.50" },
            result: { label: "Required Margin:", value: "90.50 USD" },
            info: [
              { label: "Account currency:", value: "USD" },
              { label: "Currency Pair:", value: "USD/JPY" },
              { label: "Leverage:", value: "1:100" },
              { label: "Trade size:", value: "10,000" },
              { label: "Exchange Rate:", value: "110.50" },
              { label: "Margin:", value: "90.50 USD" },
            ],
          },
        ]}
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

export default ProTradingTools;

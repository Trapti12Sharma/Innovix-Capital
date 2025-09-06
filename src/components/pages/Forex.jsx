import React from "react";
import Banner from "../common/Banner";
import PaymentTable from "../common/PaymentTable";
import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import MarketViewSteps from "../common/MarketViewSteps";
import SideImageTextSection from "../common/SideImageTextSection";
import ImageTextSections from "../common/ImageTextSections";

const Forex = () => {
  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "1. Prices that can't be beat",
      description:
        "With our Advantage Account, which is the best alternative for professional traders, you may get spreads as low as 0.0 pips on popular forex pairs like EUR/USD and USD/JPY.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "2. Better prices and faster execution",
      description:
        "Our forex trading software processes deals in milliseconds, so you always get the best price on the market when you trade forex online.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "3. A broker that people all throughout the world trust",
      description:
        "To trade safely and openly, choose a forex trading broker that is registered and regulated by the FSC of the Republic of Mauritius and the FCA of the UK.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "4. Safety of the whole fund",
      description:
        "Your money is completely separate from the company's accounts and is insured for up to $1 million, so you can always feel comfortable trading forex online.",
    },
  ];

  const currencySectionData = {
    title: "Open Your Account Now",
    paragraphs: [
      "It's easy and fast to start trading FX online with RightTrade Capital. You may start trading with just a few dollars or go all the way up to thousands. It's up to you.",
      "The world's biggest financial market, with a daily trading volume of over $5 trillion, lets you trade major, minor, and exotic currency pairings.",
      "FX online are split into three categories. Forex are the most traded pairs in the forex industry. They usually include the US dollar as one half of the pair, like the EUR/USD and the USD/JPY. Other commonly traded major pairs include EUR/JPY and the EUR/GBP.",
    ],
    image: "/global.svg",
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
      <Banner title="Forex" bgImage="/depositw1.jpg" />

      <SideImageTextSection
        image="/forexinnovix1.png"
        bgColor="bg-[#2a2d45]"
        textcolor="text-[#ffffff]"
        title="What is Forex and why do traders love it?"
        paragraphs={[
          "Forex, which stands for foreign exchange or FX trading, is the worldwide market where people buy and sell currencies. When you trade currencies, you always trade them in pairs. The first currency is the base currency, and the second is the quote currency. Traders purchase one currency and sell the other in order to make money when the value changes.",
        ]}
      />

      <CurrencyInfoSection {...currencySectionData} />

      <MarketViewSteps
        title="What makes forex the best choice?"
        steps={stepsData}
      />

      <ImageTextSections
        title="What traders like about online FX trading:"
        description={`

        • High volatility makes it possible to make money during economic and political events.

        • You may trade practically any time since the market is open 24 hours a day, five days a week.

        • It has the highest liquidity of any market in the world, which means that our forex trading platform lets you get in and out of trades quickl`}
        image="/depositsinnovix.png"
        reverse={false}
        noButton={true}
        bgcolor="bg-white"
        textcolor="text-[#121733]"
        paragraph="We have the tools and help you need to trade precious metals for short-term profits or to protect your money over the long term."
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

export default Forex;

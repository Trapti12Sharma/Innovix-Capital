import React from "react";
import Banner from "../common/Banner";
import PaymentTable from "../common/PaymentTable";
import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import SideImageTextSection from "../common/SideImageTextSection";
import MarketViewSteps from "../common/MarketViewSteps";

const Indices = () => {
  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "One Trade to Lower Risk",
      description:
        "An index is a list of the best companies in a certain field or country. This built-in variety makes it less likely that you'll only own one stock.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "Leverage Can Help You Find More Opportunities",
      description:
        "You can open bigger positions with CFD index trading than you could with just your initial capital. Leverage can help you make more money, but it can also increase your losses. You have to be very careful with it.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Go Long or Short",
      description:
        "The markets can change your positions. You can change your strategy to fit the market when you trade CFD indexes. This means you can make money no matter what the market is doing.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "Get Into the World Market",
      description:
        "You can trade indexes from major economies like the U.S., the U.K., Europe, Asia, and Australia. You can reach a lot of different markets from one platform.",
    },
  ];

  const currencySectionData = {
    title:
      "How to Choose the Best Trading platform in India Without Getting Confused",
    paragraphs: [
      "Let’s not sugarcoat it—trying to pick the “right” forex broker in India can make even experienced traders feel like they’re playing darts in the dark. You Google a few names, read a dozen blog posts, maybe click on some reviews—and suddenly you’re more confused than when you started. One broker promises low spreads, another throws in a “welcome bonus,” and yet another claims lightning-fast withdrawals. But what does any of it mean for you, especially if you’re looking to get serious with cfd commodity trading or develop a reliable cfd indices trading strategy?",
      "The truth is, this isn’t a decision you want to rush. Because your broker isn’t just a gateway—it’s the infrastructure behind your every trade, your safety net when something goes wrong, and in many ways, your partner. And like any partnership, if the foundation is shaky, everything that follows is at risk.",
      "So, how do you cut through the clutter and choose wisely? Let’s break it down, step by step.",
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
      <Banner title="Indices" bgImage="/depositw1.jpg" />

      <SideImageTextSection
        image="/indicesinnovix.png"
        bgColor="bg-white"
        textcolor="text-black"
        title="Common Indexes for Trading"
        paragraphTextColor="text-black"
        paragraphs={[
          "You can trade CFDs on some of the most important indexes, like:",
        ]}
        listItems={[
          "Nasdaq 100 (US Tech 100) – Tracks the stock prices of 100 of the biggest tech companies in the US.",
          "S&P 500 – A list of the 500 best U.S. companies and how well they are doing.",
          "Dow Jones Industrial Average (DJIA) – 30 major U.S. companies across different industries.",
          "FTSE 100 (UK 100) – Lists the 100 largest companies on the London Stock Exchange.",
        ]}
      />

      <MarketViewSteps title="Why Should You Trade CFDs?" steps={stepsData} />

      <CurrencyInfoSection {...currencySectionData} />

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

export default Indices;

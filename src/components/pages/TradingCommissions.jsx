import React from "react";
import Banner from "../common/Banner";
import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import SupportedRegions from "../common/SupportedRegions";
import MarketViewFeatureSection from "../common/MarketViewFeatureSection";
import { FaChartLine, FaDollarSign, FaUserTie } from "react-icons/fa";

const TradingCommissions = () => {
  const tradingAccountsRegionsData = {
    title:
      "The Different Kinds of Trading Accounts We Have and How Much They Cost",
    subtitle:
      "RightTrade Capital features a variety of accounts to meet the needs of various traders. Every account is set up to provide you the perfect balance of spreads, commissions, and ways to trade.",
    ctaText: "Compare All Accounts",
    ctaNote:
      "Log in to your RightTrade Capital account to see which account fits your trading style.",
    regions: [
      {
        title: "List the pros",
        icon: <FaChartLine size={28} />,
        points: [
          "Trading on a commission basis",
          "Spreads begin at 0.0 pips.",
          "The fee is $4 per round turn for each lot.",
          "Best for: scalpers, traders who trade a lot, and algorithmic traders that require raw spreads",
        ],
      },
      {
        title: "Type of Account",
        icon: <FaDollarSign size={28} />,
        points: [
          "No Fees for Trading",
          "Pips begin at 1.2",
          "No additional costs for commissions",
          "Best for: those who are new to trading or who want rates that cover everything",
        ],
      },
      {
        title: "Account for the Elite",
        icon: <FaUserTie size={28} />,
        points: [
          "Custom spreads and commissions.",
          "For VIPs and institutions only.",
          "Low fees, a personal account manager, and help that comes first.",
          "Best for: those who trade for a business or organisation.",
        ],
      },
    ],
  };

  const otherFeesSectionData = {
    title: "Things to Keep in Mind About Other Fees",
    description:
      "We want all of our costs to be easy to understand and cheap. The only additional costs you could have to pay are:",
    bgcolor: "bg-[#F9FAFB]",
    titlecolor: "text-[#10162f]",

    features: [
      {
        icon: "calendar",
        heading: "Fees for Swapping or Overnight",
        paragraph:
          "Used when positions are held for the night. These alter based on the instrument and the direction of the transaction. Triple swaps occurs on Wednesdays.",
      },
      {
        icon: "bell",
        heading: "Charge for Not Doing Anything",
        paragraph:
          "You could have to pay a modest charge if there hasn't been any trade in over 180 days. This helps keep the accounts and the platform secure.",
      },
      {
        icon: "layout",
        heading: "Fees for Taking Out",
        paragraph:
          "Most methods to take money out don't cost us anything. But third-party processors could have their own costs.",
      },
      {
        icon: "script",
        heading: "Costs for Deposits",
        paragraph:
          "You don't have to pay anything to make deposits to RightTrade Capital. Your payment processor could charge you to change currencies.",
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
  return (
    <>
      <Banner
        title="Trading Commissions and Fees"
        subtitle="Trading conditions at a glance:"
        description="Fast execution, tight spreads and a choice of account types for every trading style."
        bgImage="/about1.jpg"
      />

      <MarketViewFeatureSection
        title={otherFeesSectionData.title}
        description={otherFeesSectionData.description}
        bgcolor={otherFeesSectionData.bgcolor}
        titlecolor={otherFeesSectionData.titlecolor}
        features={otherFeesSectionData.features}
      />

      <FAQAccordion
        title="Need More Information? Check Our"
        highlight="Q&As"
        faqs={faqData}
      />

      <SupportedRegions
        title={tradingAccountsRegionsData.title}
        subtitle={tradingAccountsRegionsData.subtitle}
        ctaText={tradingAccountsRegionsData.ctaText}
        ctaNote={tradingAccountsRegionsData.ctaNote}
        regions={tradingAccountsRegionsData.regions}
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

export default TradingCommissions;

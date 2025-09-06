import React from "react";
import Banner from "../common/Banner";
import AccountSection from "../common/AccountSection";
import MobileTradingSection from "../common/MobileTradingSection";
import VipCard from "../common/VipCard";
import TradingAccountComparison from "../common/TradingAccountComparison";
import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import MarketViewFeaturen from "../common/MarketViewFeaturen";
import SideImageTextSection from "../common/SideImageTextSection";
import { FaChartLine, FaLayerGroup, FaSignal } from "react-icons/fa";

const AdvantageStocksAccount = () => {
  const featureData = [
    {
      icon: <FaChartLine />,
      heading: " 1. Advantage Trading Account",
      paragraph:
        "This account is great for traders that need tight spreads.If you want the Lowest Spread Trading Account and fast execution, the Advantage Account is the best choice.",
      points: [
        "Minimum Deposit: $/€/£ 200",
        "Spreads start at 0.0 pips.",
        "Fees:",
        "$3.50 for each lot on FX",
        "$2 for every million on Spot Metals",
        "CFDs cost $2.50 per million",
        "0.03% for CFDs in crypto",
        "$0.02 per lot for stocks and ETFs",
        "Instruments: FX, Spot Metals, Indices, Commodities, Crypto CFDs, Stock CFDs (MT5), and ETFs (MT5)",
      ],
    },
    {
      icon: <FaLayerGroup />,
      heading: "2. Advantage Plus Trading Account",
      paragraph:
        "Lets you trade without paying any fees.The Advantage Plus Account is for traders who want to trade Forex without paying commissions and have access to hundreds of products.",
      points: [
        "Minimum Deposit: $/€/£ 200",
        "Spreads start at 1.5 pips",
        "Commissions: None",
        "Instruments: FX, Spot Metals, Indices, Commodities, Crypto CFDs, Stock CFDs (MT5 only), ETFs (MT5 only)",
      ],
    },
    {
      icon: <FaSignal />,
      heading: "3. Advantage Stocks Trading Account",
      paragraph:
        "Designed for stock CFD traders.If you trade stocks and wish to pay low fees and get Commission-Free Forex Trading, the Advantage Stocks Account is the best choice.",
      points: [
        "Minimum Deposit: $200",
        "Spreads start at $0.06 per share",
        "Commissions: None",
        "Instruments: Only stocks",
      ],
    },
  ];

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

  const accountData = [
    {
      name: "Advantage Stocks",
      minDeposit: "$200",
      spreads: "From 6 cents",
      commissions: "Zero",
      instruments: ["Stocks"],
      highlighted: false,
    },
    {
      name: "Advantage",
      minDeposit: "$/€/£ 200",
      spreads: "From 0.0",
      commissions:
        "$3.5 per lot on FX\n$2 per million on Spot Metals\n$2.5 per million on CFDs\n0.03% for Crypto\n$0.02/lot on ETFs/Stocks",
      instruments: [
        "FX",
        "Spot Metals",
        "Index CFDs",
        "Commodity CFDs",
        "Cryptocurrency CFDs",
        "Stocks CFDs (MT5)",
        "ETFs (MT5)",
      ],
      highlighted: true,
    },
    {
      name: "Advantage Plus",
      minDeposit: "$/€/£ 200",
      spreads: "From 1.5",
      commissions: "Zero",
      instruments: [
        "FX",
        "Spot Metals",
        "Index CFDs",
        "Commodity CFDs",
        "Cryptocurrency CFDs",
        "Stocks CFDs (only MT5)",
        "ETFs (only MT5)",
      ],
      highlighted: false,
    },
  ];

  return (
    <>
      <Banner title="Advantage Stock Account" bgImage="/about1.jpg" />

      <SideImageTextSection
        image="/stockinnovix.png"
        title="Innovix Capital: A Trading Account for Advantage Stocks"
        paragraphTextColor="text-white"
        bgColor="bg-[#121733]"
        textcolor="text-white"
        paragraphs={[
          "With Zero Commission, you can trade stocks like Tesla, Apple, Microsoft, and more. It's a smarter way to buy and sell stocks.",
        ]}
        paragraphs2="At RightTradeCapital, we believe that every trader should have an advantage over the others. People who want to trade the most popular stocks in the world, like Tesla, Apple, and Microsoft, without having to pay high commissions can use the Advantage Stocks Trading Account.
        You can now take charge of your portfolio like never before with Zero Commission Stock Trading, which has tight spreads, cutting-edge technology, and full transparency."
      />

      <AccountSection
        sectionTitle="An Account To Suit Your Needs"
        cards={[
          {
            title: "Live & Demo",
            description:
              "Innovix Capital offers its clients both live and demo accounts with a choice of different account types according to individual requirements.",
          },
          {
            title: "Special",
            description:
              "We also offer special accounts for VIP and Corporate clients who actively trade larger volumes. All our trading accounts offer some of the best trading conditions in the industry.",
          },
        ]}
      />

      <MarketViewFeaturen
        title="Types of Trading Accounts"
        // subtitle="Explore cutting-edge tools, real-time data, and unmatched trading insights—all in one place."
        features={featureData}
        bgColor="bg-[#121733]"
        textcolor="text-[#fff]"
        titleColor="text-white"
      />

      <VipCard
        title="VIP"
        subtitle="Bigger, Better, More"
        badge="VIP Accounts"
        image="/vipn.png"
        features={[
          "Dedicated Account Manager",
          "Comprehensive Market Analytics",
          "Better Spreads (For Fixed Accounts)",
        ]}
      />

      <TradingAccountComparison accountData={accountData} />

      <MobileTradingSection
        title="Mobile Trading With MT4"
        description="Open, manage and close your trading positions on the go with complete control over your trading account from your mobile phone."
        subDescription="Download MetaTrader 4 for Android/IOS on your smartphone or tablet and trade Forex anytime and everywhere in the world!"
        image="/mt4n.jpg"
        // buttons={[
        //   {
        //     image: googlePlay,
        //     alt: "Google Play",
        //     link: "https://play.google.com",
        //   },
        //   {
        //     image: appStore,
        //     alt: "App Store",
        //     link: "https://www.apple.com/app-store/",
        //   },
        // ]}
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

export default AdvantageStocksAccount;

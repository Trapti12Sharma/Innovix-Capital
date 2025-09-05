import React from "react";
import Banner from "../common/Banner";
import StatsCards from "../common/StatsCards";
import MobileTradingSection from "../common/MobileTradingSection";
import AccountsSection from "../common/AccountsSection2";

import StatsSection from "../common/StatsSection";

const AboutUs = () => {
  const accountsData = [
    {
      title: "Standard Account",
      features: [
        "No fees",
        "Spreads that are competitive",
        "You can use MT4, WebTrader, and mobile apps",
      ],
    },
    {
      title: "ECN Account",
      features: [
        "Raw spreads start at 0.0 pips",
        "Low fees for trading",
        "Execution at the level of institutions",
      ],
    },
    {
      title: "Islamic Account",
      features: [
        "No interest",
        "Following Sharia",
        "No charges for staying overnight",
      ],
    },
    {
      title: "Demo Account",
      features: [
        "A trading experience with no risk",
        "A fake market environment",
        "Great for testing and learning strategies",
      ],
    },
  ];

  const statsData = [
    { title: "Spreads from", value: "0.1pips" },
    { title: "Avg. execution time under", value: "12ms" },
    { title: "Trading instruments", value: "300+" },
  ];

  const statsData2 = [
    {
      value: "6",
      label: "Group offices in the world’s leading financial centres",
    },
    { value: "140", label: "Service provision in over 140 countries" },
    { value: "25+", label: "Group awards of excellence" },
  ];

  return (
    <>
      <Banner
        title="About Us"
        subtitle="Trading conditions at a glance:"
        description="Fast execution, tight spreads and a choice of account types for every trading style."
        bgImage="/about.jpg"
      />

      <StatsCards stats={statsData} />

      <AccountsSection
        title="Types of Accounts"
        subtitle="We have different types of accounts to meet the needs of different traders:"
        accounts={accountsData}
        bgcolor="bg-[#0B2A4D]"
      />

      <Banner
        title="40+ years of Group cumulative experience"
        bgImage="/about1.jpg"
      />

      <StatsSection
        title="A Reliable Group"
        description="Innovix Capital provides a <strong>reliable service</strong> to its client base with a reputation that is second to none."
        stats={statsData2}
      />
    </>
  );
};

export default AboutUs;

import React from "react";
import Banner from "../common/Banner";
import StatsCards from "../common/StatsCards";
import MobileTradingSection from "../common/MobileTradingSection";
import bgBanner from "../../assets/about.jpg";
import bgBanner1 from "../../assets/about1.jpg";
import StatsSection from "../common/StatsSection";

const AboutUs = () => {
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
        bgImage={bgBanner}
      />

      <StatsCards stats={statsData} />

      <Banner
        title="40+ years of Group cumulative experience"
        bgImage={bgBanner1}
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

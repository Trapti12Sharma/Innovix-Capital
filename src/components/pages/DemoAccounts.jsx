import React from "react";
import Banner from "../common/Banner";
import AccountSection from "../common/AccountSection";
import VipCard from "../common/VipCard";
import MobileTradingSection from "../common/MobileTradingSection";
import vipImage from "../../assets/vipn.png";
import bgBanner1 from "../../assets/about1.jpg";
import phoneImage from "../../assets/mt4n.jpg";

const DemoAccounts = () => {
  return (
    <>
      <Banner title="Demo Account" bgImage={bgBanner1} />
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

      <VipCard
        title="VIP"
        subtitle="Bigger, Better, More"
        badge="VIP Accounts"
        image={vipImage}
        features={[
          "Dedicated Account Manager",
          "Comprehensive Market Analytics",
          "Better Spreads (For Fixed Accounts)",
        ]}
      />

      <MobileTradingSection
        title="Mobile Trading With MT4"
        description="Open, manage and close your trading positions on the go with complete control over your trading account from your mobile phone."
        subDescription="Download MetaTrader 4 for Android/IOS on your smartphone or tablet and trade Forex anytime and everywhere in the world!"
        image={phoneImage}
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
    </>
  );
};

export default DemoAccounts;

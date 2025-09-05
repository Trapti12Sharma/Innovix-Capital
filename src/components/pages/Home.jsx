import React from "react";
import HeroSection from "../common/HeroSection";
import FeatureSection from "../common/FeatureSection";
import { User, Shield, Gauge, Headphones } from "lucide-react";
import StepsSection from "../common/StepsSection";
import { PenTool, Wallet, BarChart } from "lucide-react";
import ToolsSection from "../common/ToolsSection";
import PlatformTabs from "../common/PlatformTabs";
import AccountFeatures from "../common/AccountFeatures";

function Home() {
  const featuresData = [
    { label: "Min. deposit", value: "$20" },
    { label: "Max Leverage", value: "1:500" },
    { label: "Spread", value: "From 0.1" },
    { label: "Swap Free**", value: "Yes" },
    { label: "Spread type", value: "Fixed / Variable" },
  ];

  const platformTabs = [
    {
      tabName: "Innovix Capital Trader",
      title: "Innovix Capital Trader",
      description:
        "Our trading app is innovative, clutter-free and intuitive to use. Access and manage all your accounts, discover new opportunities, and trade our range of 300+ instruments directly from your phone.",
      // image: homen2.png,
      buttons: [
        { image: "/images/google-play.png", link: "https://play.google.com" },
        { image: "/images/app-store.png", link: "https://apple.com" },
      ],
    },
    {
      tabName: "Web Trader",
      title: "Web Trader",
      description:
        "Trade directly from your browser with no downloads required. Simple, secure, and efficient.",
      image: "/images/web-trader.png",
    },
    {
      tabName: "MetaTrader 4",
      title: "MetaTrader 4",
      description:
        "MT4 is the world’s most popular trading platform with advanced charting tools and automated trading features.",
      image: "/images/mt4.png",
    },
    {
      tabName: "MetaTrader 5",
      title: "MetaTrader 5",
      description:
        "MT5 offers multi-asset trading, enhanced features, and faster execution for professional traders.",
      image: "/images/mt5.png",
    },
  ];

  const tools = [
    {
      image: "/icons/x.png",
      title: "Seasonax",
      description:
        "Identify seasonal investment opportunities for 20,000+ stocks, commodities, indices, and currencies with Seasonax.",
      buttonText: "Get started",
    },
    {
      image: "/icons/fs.png",
      title: "Financial source",
      description:
        "Track market moving events in real time with Financial Source. Stay tuned into what’s moving the markets and uncover the reasons why.",
      buttonText: "Get started",
    },
  ];

  const steps = [
    {
      icon: <PenTool size={32} />,
      title: "Register",
      description: "Create a profile in less than 2 minutes.",
    },
    {
      icon: <Wallet size={32} />,
      title: "Deposit funds",
      description: "Fund your account via your chosen method",
    },
    {
      icon: <BarChart size={32} />,
      title: "Trade",
      description: "Start trading with a reliable broker",
    },
  ];

  const features = [
    {
      icon: <User size={40} />,
      text: "40+ years of Group cumulative experience",
    },
    { icon: <Shield size={40} />, text: "Negative balance protection" },
    { icon: <Gauge size={40} />, text: "Ultra-fast execution of orders" },
    { icon: <Headphones size={40} />, text: "Professional Customer Support" },
  ];

  return (
    <>
      <div>
        <HeroSection
          title="Your #1 Destination for Online Trading"
          subtitle="Next generation broker for traders that aim for excellence!"
          description=""
          buttonText="Get started"
          buttonLink="/get-started"
          imageSrc="/heron1.png"
        />

        <FeatureSection
          title="Access Global Markets with"
          highlight="Superior Trading Conditions"
          features={features}
        />

        <StepsSection
          title="Ready to get started"
          subtitle="Start trading in 3 easy steps"
          steps={steps}
          buttonText="Get started"
        />

        <ToolsSection
          title="Innovix Capital Financial Tools"
          subtitle="Benefit from our wide range of tools, including calculators and free access to services like Seasonax and Financial Source."
          tools={tools}
        />

        <PlatformTabs
          title="Powerful Trading Platforms"
          subtitle="Choose the right platform that suits your trading needs."
          tabs={platformTabs}
        />

        <AccountFeatures
          title="Unleash Your Trading Potential with Innovix Capital Trading Account"
          features={featuresData}
          note={{
            text: "**Only for certain products. For more information",
            link: { text: "here", href: "#" },
          }}
          link={{
            text: "Account Types Comparison Table",
            href: "#",
          }}
          button={{
            text: "Open An Account",
            href: "#",
          }}
        />
      </div>
    </>
  );
}

export default Home;

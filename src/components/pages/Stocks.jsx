import React from "react";
import Banner from "../common/Banner";
import PaymentTable from "../common/PaymentTable";
import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import StatsSection from "../common/StatsSection";
import CurrencyInfoSection from "../common/CurrencyInfoSection";
import FeatureListSection from "../common/FeatureListSection";

const Stocks = () => {
  const features1 = [
    {
      heading: "It Doesn’t Feel Like Rocket Science",
      description:
        "Some platforms are way too complex. Right Trade Capital keeps it simple—everything’s laid out clearly. Want to check your portfolio? One tap. Place a trade? Two taps. Done.",
    },
    {
      heading: "Speed = Confidence",
      description:
        "Speed matters, especially when markets are bouncing. Right Trade Capital executes trades quickly, making the difference between profit and regret.",
    },
    {
      heading: "Mobile Trading That Doesn’t Suck",
      description:
        "Right Trade Capital’s mobile app actually works. It’s stable, fast, and lets you check watchlists, open charts, and trade in under 30 seconds.",
    },
    {
      heading: "Global Markets, Open to You",
      description:
        "Access shares from the U.S., Europe, Asia, and more. More strategies, more opportunities, more diversification.",
    },
    {
      heading: "Security That Doesn’t Keep You Up at Night",
      description:
        "Multiple layers of protection like 2FA, encryption, and session controls keep your info and funds safe without making login complicated.",
    },
    {
      heading: "You Don’t Get Charged for Breathing",
      description:
        "Right Trade Capital keeps pricing clean and upfront. No hidden fees, no surprise charges.",
    },
    {
      heading: "You Can Actually Learn While Using It",
      description:
        "Includes guides, FAQs, and tutorials inside the platform—helpful for beginners, while offering advanced features for pros.",
    },
    {
      heading: "Data That Helps—Not Overwhelms",
      description:
        "You get real-time data, clean charts, and tools you'll actually use—no fluff, no filler.",
    },
    {
      heading: "Customer Support That Talks Like a Human",
      description:
        "Real human support via chat, email, or voice—no endless hold music or unhelpful bots.",
    },
    {
      heading: "Built for Real People, Not Just Pros",
      description:
        "Whether you're investing $100 or $100,000, Right Trade Capital meets you where you are.",
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

  const statsData2 = [
    {
      value: "$10",
      label: "Buy fractional shares with just $10",
    },
    { value: "0%", label: "Trade with zero commissions" },
    { value: "25+", label: "Generate income by receiving dividends" },
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
      <Banner title="Stocks" bgImage="/depositw1.jpg" />

      <CurrencyInfoSection {...currencySectionData} />

      <FeatureListSection
        title="Why Right Trade Capital Stands Out"
        subtitle="So let’s talk about Right Trade Capital. It’s not the loudest name out there, but more and more traders are picking it up—and not looking back. And for good reason."
        items={features1}
      />

      <StatsSection
        title="Why Innovix Capital INVEST?"
        description="Innovix Capital provides a <strong>reliable service</strong> to its client base with a reputation that is second to none."
        stats={statsData2}
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

export default Stocks;

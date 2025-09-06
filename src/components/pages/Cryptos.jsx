import React from "react";
import Banner from "../common/Banner";
import PaymentTable from "../common/PaymentTable";
import FAQAccordion from "../common/FAQAccordion";
import GetInTouch from "../common/GetInTouch";
import MarketViewSteps from "../common/MarketViewSteps";

const Cryptos = () => {
  const stepsData = [
    {
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      heading: "1.A lot of different kinds of digital money",
      description:
        "You can buy and sell Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and other altcoins all from the same account.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802046/pexels-photo-6802046.jpeg",
      heading: "2.Prices that are fair",
      description:
        " You get to keep more of your profits because the spreads are tight and the commissions are low.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "3.A lot of strength",
      description:
        " You can use up to 1:1000 leverage on the biggest cryptocurrencies. This means you can invest less money and still get more market exposure.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "4.Security at the business level",
      description:
        " We have to follow strict rules, and we keep your money separate from other clients' money and protect it with bank-level encryption.",
    },
    {
      image:
        "https://images.pexels.com/photos/6802047/pexels-photo-6802047.jpeg",
      heading: "5.Quick execution",
      description:
        " We know that timing is very important in crypto. Our cryptocurrency trading platform processes orders in less than a second, so you can be sure you'll get the right amount.",
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

  return (
    <>
      <Banner title="Cryptos" bgImage="/depositw1.jpg" />

      <MarketViewSteps
        title="The Best Cryptocurrency Trading Platform – Why Innovix Capital Leads"
        steps={stepsData}
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

export default Cryptos;

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "ABOUT",
      links: [
        { label: "About Us", path: "/about-us" },

        {
          label: "Deposits and Withdrawals",
          path: "/deposits-and-withdrawals",
        },
      ],
    },
    {
      title: "TOOLS",
      links: [
        { label: "Tools Overview", path: "/tools-overview" },
        { label: "Pro Trading Tools", path: "/pro-trading-tools" },
        { label: "Trading Signals", path: "/trading-signals" },
        { label: "Profit Calculator", path: "/profit-calculator" },
        { label: "Margin Calculator", path: "/margin-calculator" },
      ],
    },

    {
      title: "TRADING",
      links: [
        { label: "Accounts Overview", path: "/accounts-overview" },
        { label: "Advantage Account", path: "/advantage-account" },
        {
          label: "Advantage Stocks Account",
          path: "/advantage-stocks-account",
        },
        {
          label: "Advantage Plus Account",
          path: "/advantage-plus-account",
        },
        { label: "Demo Accounts", path: "/demo-accounts" },
        { label: "Platforms Overview", path: "/platforms-overview" },
        { label: "MT4", path: "/mt4" },
        { label: "Mobile Trading", path: "/mobile-trading" },
        { label: "Leverage and Margin", path: "/leverage-and-margin" },
        { label: "Dividends", path: "/dividends" },
      ],
    },

    {
      title: "MARKETS",
      links: [
        { label: "Markets Overview", path: "/markets-overview" },
        {
          label: "Contract Specifications",
          path: "/contract-specifications",
        },
        { label: "Forex", path: "/forex" },
        {
          label: "Major Currency pairs",
          path: "/major-currency-pairs",
        },
        { label: "Spot Metals", path: "/spot-metals" },
        { label: "CFD Commodities", path: "/cfd-commodities" },
        { label: "Stocks Trading", path: "/stocks-trading" },
        { label: "Stocks CFDs", path: "/stocks-cfds" },
        { label: "CFD on Indices", path: "/cfd-on-indices" },
        { label: "Crypto CFDs", path: "/crypto-cfds" },
        { label: "Futures", path: "/futures" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0B2A4D] text-white ">
      <div className="w-full border-t border-gray-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <h2 className="text-lg font-medium">Join our community</h2>
          <div className="flex gap-4 text-xl">
            <a
              href="https://x.com/righttradecap"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white cursor-pointer hover:text-gray-300 transition-colors duration-200" />
            </a>

            <a
              href="https://www.instagram.com/righttradecapital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white cursor-pointer hover:text-gray-300 transition-colors duration-200" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61577896359870"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white cursor-pointer hover:text-gray-300 transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-bold text-base text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((item, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="text-md text-gray-300 hover:text-white cursor-pointer transition-colors duration-200"
                  >
                    <NavLink to={item.path}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-base text-white mb-4">CONTACT</h3>
              <ul className="space-y-2 text-md text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors duration-200">
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
                <li>Customer Support:</li>
                <li className="font-medium"></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base text-white mb-4">OFFICES</h3>
              <ul className="space-y-3 text-md text-gray-300 leading-relaxed">
                <li>
                  <strong className="text-white">
                    InnovixCapital Limited:
                  </strong>
                  <br />
                </li>
                <li>
                  <strong className="text-white">InnovixCapital :</strong>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-sm leading-relaxed space-y-3 text-gray-400">
          <p>
            <strong className="text-white">InnovixCapital brand</strong> is
            authorized and regulated in various jurisdictions.
          </p>
          <p>
            <strong className="text-white">InnovixCapital Limited</strong>{" "}
            (www.RightTradeCapital.com) is regulated by the Financial Services
            Commission of the Republic of Mauritius, FSCA of South Africa, and
            is a licensed Over the Counter Derivative Provider.
          </p>
          <p>
            <strong className="text-white">InnovixCapital</strong> is regulated
            by the Securities and Commodities Authority of the UAE.
          </p>
          <p>
            <strong className="text-white">InnovixCapital Ltd</strong> is
            regulated by the Capital Markets Authority of Kenya.
          </p>
          <p>
            <strong className="text-white">InnovixCapital Limited</strong> is
            authorized and regulated by the Financial Conduct Authority, UK.
          </p>
          <p>
            <strong className="text-white">
              Risk Warning (InnovixCapital Limited):
            </strong>{" "}
            Trading leveraged instruments carries risk. You may lose more than
            you invest. Please ensure you fully understand the risks or seek
            independent advice.
          </p>
          <p>
            <strong className="text-white">Risk Warning (East Africa):</strong>{" "}
            83% of retail investor accounts lose money. CFDs may not be suitable
            for you.
          </p>
          <p>
            <strong className="text-white">Regional Restrictions:</strong>{" "}
            Services are not provided to residents of USA, Mauritius, Japan,
            Canada, Haiti, Iran, DPRK, Russia, India and others. See full list
            in{" "}
            <NavLink
              to="/contact-us"
              className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors duration-200"
            >
              Help Centre
            </NavLink>
            .
          </p>

          <div className="pt-4 border-t border-gray-700 mt-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-300">© 2011 - 2025 InnovixCapital</p>
              <p>
                <span className="text-blue-400 font-semibold">
                  Risk warning:
                </span>{" "}
                <span className="text-gray-300">
                  Trading is risky. Your capital is at risk.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

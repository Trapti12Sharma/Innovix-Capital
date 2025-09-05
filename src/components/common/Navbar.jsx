import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/innovix.jpeg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = {
    about: [
      { title: "About Us", desc: "Learn more about us", path: "/about-us" },
      {
        title: "Deposits and Withdrawals",
        desc: "Fast, hassle-free transactions",
        path: "/deposits-withdrawals",
      },
      {
        title: "Trading Commissions and Fees",
        desc: "Fast, hassle-free transactions",
        path: "/trading-commissions",
      },
    ],
    trading: [
      {
        title: "Trading Accounts",
        desc: "Choose your account type",
        path: "/trading-accounts",
      },
      {
        title: "Accounts Overview",
        desc: "Competitive pricing",
        path: "/accounts-overview",
      },
      {
        title: "Advantage Account",
        desc: "MT4, MT5 & more",
        path: "/advantage-account",
      },
      {
        title: "Advantage Stocks Account",
        desc: "Choose your account type",
        path: "/advantage-stocks-account",
      },
      {
        title: "Demo Accounts",
        desc: "Competitive pricing",
        path: "/demo-accounts",
      },
      { title: "MT4", desc: "MT4, MT5 & more", path: "/mt4" },
    ],
    tools: [
      {
        title: "Margin Calculators",
        desc: "Calculate important forex data",
        path: "/margin-calculators",
      },
      {
        title: "Profit Calculators",
        desc: "Calculate important forex data",
        path: "/profit-calculators",
      },
      {
        title: "Trading Signals",
        desc: "Calculate important forex data",
        path: "/trading-signals",
      },
      {
        title: "Pro Trading Tools",
        desc: "Calculate important forex data",
        path: "/pro-trading-tools",
      },
      {
        title: "Tools Overview",
        desc: "Calculate important forex data",
        path: "/tools-overview",
      },
    ],
    markets: [
      { title: "Forex", desc: "Trade global currency pairs", path: "/forex" },
      { title: "Commodities", desc: "Gold, Oil & more", path: "/commodities" },
      { title: "Indices", desc: "Global indices trading", path: "/indices" },
      { title: "Stocks", desc: "Access top companies", path: "/stocks" },
      { title: "Cryptos", desc: "Trade digital assets", path: "/cryptos" },
      { title: "Metals", desc: "Access top companies", path: "/metals" },
    ],
    contact: [
      {
        title: "Contact Us",
        desc: "Reach out to us anytime",
        path: "/contact-us",
      },
    ],
  };

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  return (
    <nav className="w-full font-sans z-50">
      {/* Top black bar */}
      <div className="bg-[#0B2A4D] text-white flex justify-between px-4 md:px-8 py-2 text-sm">
        <div className="flex gap-4 md:gap-6">
          <span>⚝ Partnership</span>
          <span>📞 Help Center</span>
        </div>
        <div className="flex gap-4 md:gap-6">
          <span>💬 Live chat</span>
          <span>🇬🇧 English ▾</span>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`text-white px-4 md:px-8 py-3 flex items-center justify-between relative transition-colors duration-300 ${
          openMenu || mobileOpen ? "bg-[#2A8A9D]" : "bg-[#0d223d]"
        }`}
      >
        {/* ✅ Logo replace */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium relative">
          {[
            { label: "About Us", key: "about" },
            { label: "Trading", key: "trading" },
            { label: "Tools", key: "tools" },
            { label: "Markets", key: "markets" },
            { label: "Contact Us", key: "contact" },
          ].map((item) => (
            <div key={item.key} className="relative">
              <button
                onClick={() => toggleMenu(item.key)}
                className="flex items-center gap-1 hover:opacity-80 relative pb-1"
              >
                {item.label}
                <motion.div
                  animate={{ rotate: openMenu === item.key ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>

                {openMenu === item.key && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Right buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#2A8A9D] transition">
            Login
          </button>
          <button className="bg-[#2A8A9D] text-white px-4 py-2 rounded hover:opacity-80 transition">
            Open An Account
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Dropdowns */}

      <AnimatePresence>
        {openMenu && !mobileOpen && (
          <motion.div
            key={openMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#2A8A9D] text-white shadow-lg overflow-hidden md:block relative"
          >
            <div className="max-w-6xl mx-auto p-8 grid grid-cols-3 gap-10">
              {menus[openMenu].map((menu, i) => (
                <Link
                  to={menu.path}
                  key={i}
                  className="block hover:opacity-80"
                  onClick={() => setOpenMenu(null)}
                >
                  <p className="font-bold">{menu.title}</p>
                  <p className="text-sm">{menu.desc}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#2A8A9D] text-white shadow-lg overflow-hidden md:block relative"
          >
            {[
              { label: "About Us", key: "about" },
              { label: "Trading", key: "trading" },
              { label: "Tools", key: "tools" },
              { label: "Markets", key: "markets" },
              { label: "Contact Us", key: "contact" },
            ].map((item) => (
              <div key={item.key}>
                <button
                  onClick={() => toggleMenu(item.key)}
                  className="flex items-center justify-between w-full py-2 border-b border-white/30"
                >
                  {item.label}
                  <motion.div
                    animate={{ rotate: openMenu === item.key ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Collapsible submenus */}
                <AnimatePresence>
                  {openMenu === item.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 flex flex-col gap-2 py-2"
                    >
                      {menus[item.key].map((menu, i) => (
                        <Link
                          to={menu.path}
                          key={i}
                          className="text-sm hover:opacity-80 block"
                          onClick={() => {
                            setMobileOpen(false);
                            setOpenMenu(null);
                          }}
                        >
                          {menu.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="mt-6">
              <button className="w-full border border-white px-4 py-2 rounded mb-3">
                Login
              </button>
              <button className="w-full bg-[#2A8A9D] px-4 py-2 rounded">
                Open An Account
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

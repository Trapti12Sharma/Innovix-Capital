import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = {
    about: [
      { title: "About Us", desc: "Learn more about us" },

      {
        title: "Deposits and Withdrawals",
        desc: "Fast, hassle-free transactions",
      },
      {
        title: "Trading Commissions and Fees",
        desc: "Fast, hassle-free transactions",
      },
    ],
    trading: [
      { title: "Trading Accounts", desc: "Choose your account type" },
      { title: "Accounts Overview", desc: "Competitive pricing" },
      { title: "Advantage Account", desc: "MT4, MT5 & more" },
      { title: "Advantage Stocks Account", desc: "Choose your account type" },
      { title: "Demo Accounts", desc: "Competitive pricing" },
      { title: "MT4", desc: "MT4, MT5 & more" },
    ],
    tools: [
      { title: "Margin Calculators", desc: "Calculate important forex data" },
      { title: "Profit Calculators", desc: "Calculate important forex data" },
      { title: "Trading Signals", desc: "Calculate important forex data" },
      { title: "Pro Trading Tools", desc: "Calculate important forex data" },
      { title: "Tools Overview", desc: "Calculate important forex data" },
    ],
    markets: [
      { title: "Forex", desc: "Trade global currency pairs" },
      { title: "Commodities", desc: "Gold, Oil & more" },
      { title: "Indices", desc: "Global indices trading" },
      { title: "Stocks", desc: "Access top companies" },
      { title: "Cryptos", desc: "Global indices trading" },
      { title: "Metals", desc: "Access top companies" },
    ],
    contact: [
      { title: "Contact Form", desc: "Reach out to us anytime" },
      { title: "Office Locations", desc: "Find our global offices" },
      { title: "Support", desc: "24/7 customer support" },
    ],
  };

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  return (
    <nav className="w-full font-sans relative">
      {/* Top black bar */}
      <div className="bg-black text-white flex justify-between px-4 md:px-8 py-2 text-sm">
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
          openMenu || mobileOpen ? "bg-[#c33c44]" : "bg-[#0d223d]"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          HY<span className="text-white">CM</span>
          <div className="text-xs font-normal -mt-1">Capital Markets</div>
        </div>

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
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#c33c44] transition">
            Login
          </button>
          <button className="bg-[#e74c3c] text-white px-4 py-2 rounded hover:opacity-80 transition">
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
            className="absolute left-0 w-full bg-[#c33c44] text-white shadow-lg overflow-hidden hidden md:block"
          >
            <div className="max-w-6xl mx-auto p-8 grid grid-cols-3 gap-10">
              {menus[openMenu].map((menu, i) => (
                <div key={i}>
                  <p className="font-bold">{menu.title}</p>
                  <p className="text-sm">{menu.desc}</p>
                </div>
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
            className="md:hidden bg-[#c33c44] text-white p-6 flex flex-col gap-4 absolute top-full left-0 w-full"
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
                        <p key={i} className="text-sm">
                          {menu.title}
                        </p>
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
              <button className="w-full bg-[#e74c3c] px-4 py-2 rounded">
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

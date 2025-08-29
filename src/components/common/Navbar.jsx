import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const menus = {
    about: [
      { title: "About Us", desc: "Learn more about us" },
      {
        title: "Regulations and Licences",
        desc: "Fair and transparent trading",
      },
      { title: "Contact Us", desc: "Get in touch with us" },
      { title: "Press Room", desc: "Coverage in the media" },
      { title: "Awards & News", desc: "Awards and company news" },
      {
        title: "Deposits and Withdrawals",
        desc: "Fast, hassle-free transactions",
      },
    ],
    trading: [
      { title: "Trading Accounts", desc: "Choose your account type" },
      { title: "Spreads & Conditions", desc: "Competitive pricing" },
      { title: "Platforms", desc: "MT4, MT5 & more" },
    ],
    tools: [
      { title: "Calculators", desc: "Calculate important forex data" },
      { title: "Economic Calendar", desc: "Latest event information" },
    ],
  };

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  return (
    <nav className="w-full font-sans relative">
      {/* Top black bar */}
      <div className="bg-black text-white flex justify-between px-8 py-2 text-sm">
        <div className="flex gap-6">
          <span>⚝ Partnership</span>
          <span>📞 Help Center</span>
        </div>
        <div className="flex gap-6">
          <span>💬 Live chat</span>
          <span>🇬🇧 English ▾</span>
        </div>
      </div>

      {/* Navbar with dynamic bg */}
      <div
        className={`text-white px-8 py-3 flex items-center justify-between relative transition-colors duration-300 ${
          openMenu ? "bg-[#c33c44]" : "bg-[#0d223d]"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          HY<span className="text-white">CM</span>
          <div className="text-xs font-normal -mt-1">Capital Markets</div>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-8 text-sm font-medium relative">
          {[
            { label: "About Us", key: "about" },
            { label: "Trading", key: "trading" },
            { label: "Tools", key: "tools" },
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

          {/* Simple Links */}
          <button className="hover:opacity-80">Promotions</button>
          <button className="hover:opacity-80">Blog</button>
        </div>

        {/* Right buttons */}
        <div className="flex items-center gap-4">
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#c33c44] transition">
            Login
          </button>
          <button className="bg-[#e74c3c] text-white px-4 py-2 rounded hover:opacity-80 transition">
            Open An Account
          </button>
        </div>
      </div>

      {/* Animated full-width dropdown */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={openMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 w-full bg-[#c33c44] text-white shadow-lg overflow-hidden"
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
    </nav>
  );
};

export default Navbar;

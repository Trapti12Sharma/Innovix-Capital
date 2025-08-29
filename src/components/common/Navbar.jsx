import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/innovix.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menu) =>
    setDropdownOpen(dropdownOpen === menu ? null : menu);

  const menuItems = [
    {
      name: "About Us",
      dropdown: [
        { title: "About Us", link: "/about-us" },
        { title: "Regulations & Licences", link: "/regulations" },
        { title: "Contact Us", link: "/contact" },
        { title: "Press Room", link: "/press-room" },
        { title: "Awards & News", link: "/awards" },
        { title: "Deposits & Withdrawals", link: "/deposits" },
      ],
    },
    {
      name: "Trading",
      dropdown: [
        { title: "Accounts Overview", link: "/accounts" },
        { title: "Platforms", link: "/platforms" },
        { title: "Leverage & Margin", link: "/leverage" },
      ],
    },
    {
      name: "Tools",
      dropdown: [
        { title: "Trading Tools", link: "/tools" },
        { title: "Calculators", link: "/calculators" },
        { title: "Signals", link: "/signals" },
      ],
    },
    { name: "Promotions", link: "/promotions" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-4 md:px-10 py-2">
        <div className="flex gap-6">
          <span className="flex items-center gap-1">🌐 Partnership</span>
          <span className="flex items-center gap-1">📞 Help Center</span>
        </div>
        <div className="flex gap-6">
          <span className="flex items-center gap-1">💬 Live chat</span>
          <span className="flex items-center gap-1">
            🇬🇧 English <FaChevronDown size={12} />
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#1f3044] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 md:h-10" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {menuItems.map((item) =>
              item.dropdown ? (
                <li
                  key={item.name}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <span>
                    {item.name}{" "}
                    <FaChevronDown className="inline ml-1" size={12} />
                  </span>
                  {dropdownOpen === item.name && (
                    <div className="absolute bg-white text-black shadow-md mt-2 rounded w-56 z-50">
                      <ul className="flex flex-col">
                        {item.dropdown.map((sub, idx) => (
                          <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                            <Link to={sub.link}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.name} className="cursor-pointer">
                  <Link to={item.link}>{item.name}</Link>
                </li>
              )
            )}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <button className="px-5 py-2 border border-white rounded hover:bg-white hover:text-[#1f3044] transition">
              Login
            </button>
            <button className="px-5 py-2 bg-red-500 rounded hover:bg-red-600 transition">
              Open An Account
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1f3044] px-6 py-4">
            <ul className="flex flex-col gap-4 font-medium">
              {menuItems.map((item) =>
                item.dropdown ? (
                  <li key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full"
                    >
                      {item.name} <FaChevronDown size={12} />
                    </button>
                    {dropdownOpen === item.name && (
                      <ul className="ml-4 mt-2 space-y-2 text-sm">
                        {item.dropdown.map((sub, idx) => (
                          <li key={idx} className="hover:text-red-400">
                            <Link to={sub.link}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                )
              )}
            </ul>
            <div className="flex flex-col gap-3 mt-6">
              <button className="px-5 py-2 border border-white rounded">
                Login
              </button>
              <button className="px-5 py-2 bg-red-500 rounded">
                Open An Account
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
